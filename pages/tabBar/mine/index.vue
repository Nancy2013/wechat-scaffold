<template>
	<fc-page hasTabbar>
		<view class="mine">
			<view class="content">我的</view>
			<view class="footer">
				<button type="default">退出登录</button>
			</view>
		</view>
	</fc-page>
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
		height: 100%;
        background-color: $background-color;
		.footer {
			width: 100%;
			position: absolute;
			bottom:calc(constant(safe-area-inset-bottom) + 100rpx);
			bottom:calc(env(safe-area-inset-bottom) + 100rpx);
			padding: 32rpx;
			// background-color: $background-color;
			button {
				border-radius: 0;
				border: none;
				background-color: $primary-color;
				color: #fff;
			}
		}
	}
</style>