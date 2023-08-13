<template>
	<view class="portal">
		<!-- <view class="">
			<view class="">
				fc-input
			</view>
			<fc-input :value="value" inputType='digit' @change='handleChange'></fc-input>
		</view> -->
		
		<view class="">
			<view class="">
				fc-form-item input
			</view>
			<fc-form-item type='input' :value="value" :propsData='propsData' @change='handleChange'></fc-form-item>
		</view>
		
		<!-- <view class="">
			<view class="">
				fc-form-item textarea
			</view>
			<fc-form-item type='textarea' :value="value"></fc-form-item>
		</view> -->
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
				propsData:{
					inputType:'digit',
					decimalLen:2,
				},
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
		onLoad() {},
		methods: {
			handleChange(value){
				console.log('------handleChange--portal---',value);
				this.value=value;
			},
		}
	}
</script>

<style lang="scss" scoped>
	.portal {}
</style>