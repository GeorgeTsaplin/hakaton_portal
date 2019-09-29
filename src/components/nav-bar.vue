<template lang="pug">
	#navbar
		#logo
			img(src="../assets/images/logo.svg")
		#navigation
			router-link(tag="div" :class="{ active: $route.name === 'home' }" :to="{ name: 'home' }" exact) Карта медицинских организаций
			router-link(tag="div" :class="{ active: $route.name === 'graphs' }" :to="{ name: 'graphs' }" exact) Графики показателей
			router-link(tag="div" :class="{ active: $route.name === 'comparison' }" class="with-icon" :to="{ name: 'comparison' }" exact)
				span.compare
					span.badge {{ comparisonCount }}
				| Сравнение
		#search
			span.input-holder
				input(placeholder="Поиск, например Тюменски...")
			span.icon
				img(src="../assets/images/search.svg")
</template>

<script>
	export default {
		computed: {
			comparisonCount() {
				return this.$store.getters['comparison/count'] || 0
			}
		},
	}
</script>

<style lang="stylus">
	#navbar
		width 100%
		height 125px

		display flex
		flex-direction row
		flex-wrap nowrap

		#logo
			width 30%
			padding-top 13px

			img
				display block
				margin 0 auto
				cursor pointer

		#navigation
			width 48%
			font-size 20px
			color #222
			display flex
			flex-direction row
			justify-content space-between
			align-items: center;

			div
				cursor pointer
				color #222
				font-size 20px
				height 23px

				&:after
					content ''
					display block
					position relative
					top -9px
					left 0
					width 0
					height 10px
					z-index -1
					background #B3C4E4
					transition width .15s ease-out

				&.with-icon:after
					left 45px

				&.with-icon:hover:after, &.with-icon.active:after
					width calc(100% - 45px)

				&.active:after
					width 100%
					background #F3C2BE !important

				&:hover:after
					width 100%

			.compare
				background-image url("../assets/images/compare.svg")
				background-repeat no-repeat
				background-position-y bottom
				background-size unset
				padding 1px 15px
				float left
				position relative
				top -13px
				left 10px
				z-index 1

				&:before
					content ''
					display block
					width 15px
					height 15px
					position relative
					top 8px
					left 3px
					background #2F75EC
					border-radius 100%
					z-index -1

				&:after
					font-size 10px
					line-height 12px
					position relative
					top -10px
					left 10px

				.badge
					font-size 10px
					color white
					position relative
					top -14px
					left 8px



		#search
			width 22%
			display flex
			flex-direction row
			justify-content center
			padding-top 53px

			.input-holder:after
				content ''
				display block
				position relative
				width calc(100% + 20px)
				height 1px
				top 0
				bottom 0
				background rgba(34, 34, 34, 0.05)

			input
				border none
				color rgba(34, 34, 34, 0.3)
				font-size 15px
				line-height 18px
				width 235px
				padding 1px

			.icon
				margin-left 5px
				padding-top 2px
				cursor pointer
</style>