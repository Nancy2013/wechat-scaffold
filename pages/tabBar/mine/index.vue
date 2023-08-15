<template>
	<view class="">
		<view class="mine">
			<view class="">
				我的
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
		methods: {},
	}
</script>

<style lang="scss" scoped>
	.mine {
		background: #f00;
	}
</style>