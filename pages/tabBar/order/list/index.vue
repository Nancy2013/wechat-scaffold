<template>
	<view class="">
		<view class="list">
			<view class="">
				列表
			</view>
		</view>
		<fc-tabbar/>
	</view>
</template>

<script>
	import service from '@/service/index.js';
	export default {
		name: 'mine',
		components: {},
		data() {
			return {}
		},
		computed: {},
		watch: {},
		mounted() {},
		onLoad() {},
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.list {
		background: $background-color;
		// height: 100vh;
		// min-height: calc(100vh - env(safe-area-inset-bottom) - 50px);
		// min-height: calc(100vh - constant(safe-area-inset-bottom) - 50px);
	}
</style>