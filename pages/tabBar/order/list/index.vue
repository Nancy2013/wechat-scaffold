<template>
	<fc-page hasTabbar class="list">
		<view class="list-content">
			<view class="panel" v-for='(item,$index) in list'>
				{{$index}}--{{item.id}}--{{item.name}}
			</view>
		</view>
	</fc-page>
</template>

<script>
	import service from '@/service/index.js';
	export default {
		name: 'list',
		components: {},
		data() {
			return {
				list:[],
			}
		},
		computed: {},
		watch: {},
		mounted() {},
		onLoad() {
			this.query();
		},
		methods: {
			query(){
				const {queryOrder}=service.order;
				queryOrder().then(res=>{
					const {code,data}=res;
					if(code===200){
						this.list=data;
					}
				}).catch(e=>{
					console.log(e)
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		background: $background-color;
		.panel{
			padding: 40rpx;
			background: #fff;
			
		}
	}
</style>