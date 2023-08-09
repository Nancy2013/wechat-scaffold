<template>
	<view class="fc-empty">
		<image src="" mode=""></image>
		暂无数据
	</view>
</template>

<script>
	export default {
		name: 'fc-empty',
		props: {},
		components: {},
		data() {
			return {
				status: 'loading', //加载样式：more-加载前样式，loading-加载中样式，nomore-没有数据样式
			}
		},
		computed: {},
		mounted() {},
		methods: {},
	}
</script>

<style lang="scss" scoped>
	.fc-empty{
		image{}
	}
</style>