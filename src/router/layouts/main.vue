<template lang="pug">
	div
		NavBar
		slot
</template>

<script>
	import NavBar from '@components/nav-bar'

	export default {
		components: {NavBar},
	}
</script>

<style lang="stylus">
	@font-face
		font-family Montserrat
		src url(../../assets/fonts/Montserrat/Montserrat-Regular.ttf)

	html
		font-family Montserrat, "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
		font-size 14px
		font-weight normal
		font-style normal
		word-spacing 1px
		-ms-text-size-adjust 100%
		-webkit-text-size-adjust 100%
		-moz-osx-font-smoothing grayscale
		-webkit-font-smoothing antialiased
		box-sizing border-box

	*, *:before, *:after
		box-sizing border-box
		margin 0

	*
		padding 0
		margin 0
		box-sizing border-box
		outline: none
		text-decoration: none
</style>