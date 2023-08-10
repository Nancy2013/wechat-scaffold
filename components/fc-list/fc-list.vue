<template>
	<view class="fc-list">
		<view class="list-panel" v-if="count>0">
			<slot></slot>
			<view class="loadmore" v-if='loaded'>
				<u-loadmore :status="status" />
			</view>
		</view>
		<view class="empty" v-else>
			<fc-empty></fc-empty>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'fc-list',
		props: {
			count: { // 数据总数
				type: Number,
				default: 0
			},
			page: {
				type: Number,
				default: 0
			},
			limit: {
				type: Number,
				default: 0
			},
			loaded: {
				type: Boolean,
				default: false
			},
		},
		components: {},
		data() {
			return {
				status: 'loading', //加载样式：more-加载前样式，loading-加载中样式，nomore-没有数据样式
			}
		},
		computed: {},
		mounted() {},
		methods: {},
		onReachBottom(){
			console.log('------onReachBottom----list---')
			const {page,limit,count}=this;
			if (page*limit >= count) {
				this.status = "noMore"
				return;
			} else {
				this.status = "loading"
				this.$emit('onReachBottom')
			}
		},
	}
</script>

<style lang="scss" scoped>
	.list{
		.loadmore{}
	}
</style>
