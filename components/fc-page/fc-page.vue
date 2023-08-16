<template>
	<view class="page" :class="{'hasTabbar':hasTabbar}">
		<view class="content">
			<slot></slot>
		</view>
		<fc-tabbar v-if="hasTabbar"/>
	</view>
</template>

<script>
	import service from '@/service/index.js';
	export default {
		name: 'page',
		props:{
			hasTabbar:{
				type:Boolean,
				default:false,
			},
		},
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
	.page {
		min-height: 100vh;
		.content{
			height: 100%;
		}
		&.hasTabbar{
			padding-bottom:constant(safe-area-inset-bottom);
			padding-bottom:env(safe-area-inset-bottom);
		}
	}
</style>