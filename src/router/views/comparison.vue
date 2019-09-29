<template lang="pug">
	Layout
		.comparison(v-if="hospitals.length > 0")
			.col
				.head
					.add-more
				.body
					.criterion(v-for="spec in hospitals[0].specification") {{ spec.name }}

			.scrollable
				.col(v-for="hospital in hospitals")
					.head
						.place
							.city {{ getAddress(hospital) }}
							.description {{ hospital.name }}
							span.close(@click="removeFromComparison(hospital)")
								img(src="../../assets/images/close.svg")

					.body
						.cell(v-for="spec in hospital.specification" :style="`--height: ${height(spec)}px;`") {{ spec.value }}

		.comparison(v-else)
			span.center Список сравнения пуст
</template>

<script>
	import Layout from '@layouts/main'

	export default {
		page: {
			title: 'Comparison',
		},

		components: {Layout},

		computed: {
			hospitals() {
				let comparisonList = this.$store.getters['comparison/comparable']
				return this.$store.getters['hospitals/byIds'](comparisonList)
			}
		},

		methods: {
			getAddress(hospital) {
				return hospital.address.split(',')[0]
			},

			removeFromComparison(hospital) {
				this.$store.commit('comparison/REMOVE_FROM_COMPARE', hospital.name)
			},

			height(spec) {
				if (spec.name.length <= 25)
					return 57
				return 73
			}
		},
	}
</script>

<style lang="stylus">
	$column-width = 300px

	.comparison
		display flex
		flex-direction row
		flex-wrap nowrap
		margin 40px

		.scrollable
			display flex
			flex-direction row
			flex-wrap nowrap
			width 100%
			overflow-y auto

		.col
			display flex
			flex-direction column
			width $column-width

			.head
				min-height 150px
				padding 0 10px

				.place
					position relative

					.city
						font-weight bold
						font-size 18px
						color #2F75EC
						margin-bottom 15px
						max-width calc(100% - 15px)

					.description
						font-size 12px
						line-height 18px
						color #222

					.close
						position absolute
						cursor pointer
						top 2px
						right 5px
						width 10px
						height 10px

			.body
				display flex
				flex-direction column

				.cell, .criterion
					min-width $column-width
					padding 20px 15px
					border-bottom 1px solid rgba(34, 34, 34, 0.05)

				.cell
					text-align center
					height var(--height)

	.center
		margin 0 auto
</style>