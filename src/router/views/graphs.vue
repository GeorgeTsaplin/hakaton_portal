<template lang="pug">
	Layout
		#grafs
			div
				.heading График
				iframe(src="https://chart-studio.plot.ly/~gtsaplin/1.embed")

			div
				.heading График
				iframe(src="https://chart-studio.plot.ly/~mike_kalagan/2.embed")

			div
				.heading График
				iframe(src="https://chart-studio.plot.ly/~gtsaplin/5.embed")

			div
				.heading График
				iframe(src="https://chart-studio.plot.ly/~gtsaplin/6.embed")

</template>

<script>
	import Layout from '@layouts/main'

	export default {
		page: {
			title: 'Graphs',
		},
		components: {Layout},
	}
</script>

<style lang="stylus">
	#grafs
		display flex
		flex-direction row
		flex-wrap wrap
		margin 0 40px
		margin-bottom 70px

		div
			width calc(50% - 20px)
			margin 0 10px

			.heading
				font-weight 500
				font-size 20px
				line-height 24px
				color #2F75EC
				margin 0
				margin-top 50px
				margin-bottom 15px

			iframe
				width 100%
				min-height 310px
				height 500px
				border 1px solid black

</style>