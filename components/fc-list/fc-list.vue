<template>
	<view class="fc-list">
		<view class="list" v-if="count">
			<slot></slot>
		</view>
		<view class="" v-else>
			<p>暂无记录</p>
		</view>
		<view v-if="isLoadMore">{{loadMoreText}}</view>
	</view>
</template>

<script>
	export default {
		name: 'fc-list',
		props:{
			count:{
				type:Number,
				default:0,
			},
			page:{
				type:Number,
				default:1,
			},
			limit:{
				type:Number,
				default:1,
			},
			loader:{
				type:Boolean,
				default:true,
			},
		},
		components: {},
		data() {
			return {}
		},
		computed: {},
		watch:{},
		mounted() {},
		methods: {},
		onReachBottom(){
			console.log('------onReachBottom----');
			if(!this.isLoadMore){  //此处判断，上锁，防止重复请求
			     this.isLoadMore=true
			     this.$emit('onReachBottom')
			}
		},
		
	}
</script>

<style lang="scss" scoped>
	.fc-list{}
</style>