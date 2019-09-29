<template lang="pug">
	Layout
		ymap
</template>

<script>
	import Layout from '@layouts/main'
	import ymap from '@components/ymap'

	export default {
		page: {
			title: 'Home',
		},
		components: {Layout, ymap},
	}
</script>