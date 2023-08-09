<template>
	<view class="list">
		<view class="tabs">
			<fc-tabs type="line" :options="tabsOptions" :value="tabIndex" @change="handleTabChange"></fc-tabs>
		</view>

		<view class="list-content">
			<fc-list @onReachBottom='onReachBottom' :count="total" :page="pageNum" :limit='pageSize' :key='tabIndex'
				:loaded='loading'>
				<view class="panel" v-for="item in list" :key='item'>{{item.name}}</view>
			</fc-list>
		</view>
	</view>
</template>

<script>
	import service from '@/service/index.js';
	export default {
		name: 'mine',
		components: {},
		data() {
			return {
				loading:true,
				tabsOptions: [{
						label: '线上零售单',
						value: 1
					},
					{
						label: '线下零售单',
						value: 3
					},
					{
						label: '线下团购单',
						value: 2
					},
				],
				tabIndex: 0,
				search: {
					orderType: 1, // 销售默认查询线下零售单
				},
				list: [],
			}
		},
		computed: {},
		watch: {
			search: {
				handler: function(newVal, oldVal) {
					this.query();
				},
				deep: true,
			}
		},
		mounted() {},
		onLoad() {
			this.query()
		},
		methods: {
			handleTabChange(index) {
				this.tabIndex = index
				const {
					value
				} = this.tabsOptions[index];
				this.$set(this.search, 'orderType', value);
				this.initPagination();
			},
			/**
			 * @description: 初始化分页
			 * @return {*}
			 */
			initPagination() {
				this.pageNum = 1;
				this.list=[];
			},
			query() {
				const {
					queryBrand
				} = service.order;
				this.loading = true;
				queryBrand().then(res => {
					const {
						code,
						data,
						total,
					} = res;
					if (code === 200) {
						if (this.pageNum === 1) {
							this.list = data;
						} else {
							this.list = this.list.concat(data);
						}
						this.total = total;
					}
					this.loading = false;
				}).catch(e => {
					this.loading = false;
					console.error(e)
				})
			},
			/**
			 * @description: list页面触底事件
			 * @param {*} 
			 * @return {*}
			 */
			onReachBottom() {
				console.log('---onReachBottom-portal-');
				this.pageNum++
				this.query()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.list {
		.tabs {
			position: fixed;
			top: 0;
			left: 0;
			z-index: 1;
			background: $background-color;
		}

		.list-content {
			position: absolute;
			top: 100rpx;
			bottom: 0;
			left: 0;
			right: 0;
			.panel {
				line-height: 60rpx;
			}
		}
	}
</style>