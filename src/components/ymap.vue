<template lang="pug">
	#map-container
		#map
		#add-to-compare(:class="{ enabled: canBeAdded }" @click="addToCompare")
		#map-legend
			.header Младенческая смертность в разбивке по регионам РФ
			.legend
				span.block
					.color.level-0
					.info от 0 до 4
				span.block
					.color.level-1
					.info от 4 до 6
				span.block
					.color.level-2
					.info от 6 до 7
				span.block
					.color.level-3
					.info от 7 до 8
				span.block
					.color.level-4
					.info от 8 до ∞
</template>

<script>
	import config from '@src/app.config'
	import ym from 'ymaps'
	import _ from 'lodash'
	import RegionNames from '@src/regions.json'
	import {hexGradient, stepGradient} from '@utils/colors'

	export default {
		data: () => ({
			selectedHospital: undefined
		}),

		computed: {
			canBeAdded() {
				return this.selectedHospital !== undefined && !this.$store.getters['comparison/isAlreadyAdded'](this.selectedHospital);
			}
		},

		methods: {
			addToCompare() {
				this.$store.commit('comparison/ADD_TO_COMPARE', this.selectedHospital)
				this.selectedHospital = undefined
			}
		},

		created() {
			ym.load(`https://api-maps.yandex.ru/2.1/?apikey=${config.ymaps_api_key}&lang=ru_RU`)
				.then(ymaps => {
					const map = new ymaps.Map('map', {
						center: [70, 100],
						zoom: 1,
						type: null,
						controls: []
					}, {
						restrictMapArea: [[10, 10], [85, -160]],
					})

					map.behaviors.disable('scrollZoom')
					map.panes.append('white', new ymaps.pane.StaticPane(map, {
						zIndex: 100, css: {
							width: '100%', height: '100%', backgroundColor: '#fff'
						}
					}))

					const deaths = this.$store.getters['infantsDeath/byLocation']
					let districtByIso = {}
					let districtsHints = {}
					let districtColors = {}

					_.each(RegionNames, (name, region) => {
						let rg = region.substring(3).toLowerCase()

						districtByIso[[region]] = rg
						districtsHints[[rg]] = `${name} – N/A`
						districtColors[[rg]] = "#93DB29"
					})

					_.each(deaths, (stat, region) => {
						let rg = region.substring(3).toLowerCase()

						districtByIso[[region]] = rg
						districtsHints[[rg]] = `${RegionNames[region] || region} – ${stat[0].value}`
						districtColors[[rg]] = stepGradient({
							0: '#11BF5A',
							4: '#93DB29',
							6: '#FFF200',
							7: '#EEA30C',
							8: '#D52B1E',
						}, stat[0].value)
					})

					// Создадим балун.
					const districtBalloon = new ymaps.Balloon(map)
					districtBalloon.options.setParent(map.options)
					// Загрузим регионы.
					ymaps.borders.load('RU', {
						lang: 'ru',
						quality: 2
					}).then(result => {
						// Создадим объект, в котором будут храниться коллекции с нашими регионами.
						let districtCollections = {}
						// Для каждого федерального округа создадим коллекцию.
						for (let district in districtColors) {
							districtCollections[district] = new ymaps.GeoObjectCollection(null, {
								fillColor: districtColors[district],
								strokeColor: districtColors[district],
								strokeOpacity: 0.5,
								fillOpacity: 0.5,
								hintCloseTimeout: 0,
								hintOpenTimeout: 0
							})
							// Создадим свойство в коллекции, которое позже наполним названиями субъектов РФ.
							districtCollections[district].properties.districts = []
						}

						result.features.forEach(function (feature) {
							let iso = feature.properties.iso3166
							let name = feature.properties.name
							let district = districtByIso[iso]
							// Для каждого субъекта РФ зададим подсказку с названием федерального округа, которому он принадлежит.
							feature.properties.hintContent = districtsHints[district]
							// Добавим субъект РФ в соответствующую коллекцию.
							districtCollections[district].add(new ymaps.GeoObject(feature))
							// Добавим имя субъекта РФ в массив.
							districtCollections[district].properties.districts.push(name)

						})
						// Создадим переменную, в которую будем сохранять выделенный в данный момент федеральный округ.
						let highlightedDistrict
						for (let districtName in districtCollections) {
							// Добавим коллекцию на карту.
							map.geoObjects.add(districtCollections[districtName])
							// При наведении курсора мыши будем выделять федеральный округ.
							districtCollections[districtName].events.add('mouseenter', function (event) {
								let district = event.get('target').getParent()
								district.options.set({fillOpacity: 0.8})
							})
							// При выводе курсора за пределы объекта вернем опции по умолчанию.
							districtCollections[districtName].events.add('mouseleave', function (event) {
								let district = event.get('target').getParent()
								if (district !== highlightedDistrict) {
									district.options.set({fillOpacity: 0.5})
								}
							})
							// Подпишемся на событие клика.
							districtCollections[districtName].events.add('click', function (event) {
								let target = event.get('target')
								let district = target.getParent()
								// Если на карте выделен федеральный округ, то мы снимаем с него выделение.
								if (highlightedDistrict) {
									highlightedDistrict.options.set({fillOpacity: 0.3})
								}

								// Откроем балун в точке клика. В балуне будут перечислены регионы того федерального округа,
								// по которому кликнул пользователь.
								districtBalloon.open(event.get('coords'), district.properties.districts.join('<br>'))
								// Выделим федеральный округ.
								district.options.set({fillOpacity: 1})
								// Сохраним ссылку на выделенный федеральный округ.
								highlightedDistrict = district
							})
						}
					})

					const hospitals = this.$store.getters['hospitals/hospitals']

					for (let hospital of hospitals) {
						ymaps.geocode(hospital.address, {
							kind: 'house',
							results: 1
						}).then(res => {
							res.geoObjects.options.set('preset', 'islands#blueIcon')

							res.geoObjects.events
								.add('mouseenter', event => {
									let geoObject = event.get('target')
									map.hint.open(geoObject.geometry.getCoordinates(), hospital.name)
								})
								.add('balloonopen', event => this.selectedHospital = hospital.name)
								.add('balloonclose', event => this.selectedHospital = undefined)
								.add('mouseleave', event => map.hint.close(true))
							map.geoObjects.add(res.geoObjects)
						})
					}
				})
		},
	}

</script>

<style lang="stylus">
	#map-container
		position relative

		#map
			width 100%
			height 1300px

			&::after
				content ''
				display block
				position relative
				top -40px
				left 0
				width 100%
				height 40px
				background white

		#add-to-compare
			background #2F75EC
			position fixed
			bottom 10px
			left calc(50% - 322px / 2)
			padding 11px 20px 7px 20px
			line-height 40px
			cursor pointer
			transition transform .15s ease-out
			transform: translateY(135%);

			&:before
				content ''
				background-image url("../assets/images/compare.svg")
				background-repeat no-repeat
				background-position-y bottom
				background-size 28px
				padding 3px 20px

			&:after
				content 'Добавить к сравнению'
				font-size 20px
				color white

			&.enabled
				transform: translateY(0)

		#map-legend
			width 900px
			margin 0 auto
			margin-top 20px
			margin-bottom 50px
			color black

			.header
				font-weight 500
				font-size 30px
				line-height 37px
				text-align center

			.legend
				display flex
				flex-direction row
				justify-content space-between

				width 866px
				margin 0 auto
				margin-top 35px

				.block
					display flex
					flex-direction column
					width 150px

					.color
						width 150px
						height 15px

						&.level-0
							background #11BF5A

						&.level-1
							background #93DB29

						&.level-2
							background #FFF200

						&.level-3
							background #EEA30C

						&.level-4
							background #D52B1E

					.info
						margin-top 8px
						font-size 20px
						line-height 24px
						text-align center

</style>