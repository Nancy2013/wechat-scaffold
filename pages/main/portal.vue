<template>
	<view class="portal">
		 <u-switch v-model="value" ></u-switch>
	</view>
</template>

<script>
	import service from '@/service/index.js';
	export default {
		name: 'mine',
		components: {},
		data() {
			return {
				value:'',
				codeList:[],
			}
		},
		computed: {
			list(){
				const {value}=this;
				console.log('----computed---',value);
				this.queryData();
				return [];
			},
		},
		watch:{
			value(newVal,oldVal){
				console.log('----newVal---',newVal);
			},
		},
		mounted() {
			this.queryData();
		},
		methods: {
			queryData() {
				const {
					queryBrand
				} = service.order;
				queryBrand().then(res => {
					const {
						code,
						data
					} = res;
					if (code === 200) {
						this.codeList = data;
					}
				}).catch(e => {
					console.error(e)
				})
			},
		}
	}
</script>

<style lang="scss" scoped>
	// .portal {
	// 	.input-view,.input{
	// 		height: 60rpx;
	// 	}
	// }
</style>