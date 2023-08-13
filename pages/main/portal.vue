<template>
	<view class="addPage">
		<view class="addOrder-wrap">
			<fc-form ref="formRef" :renderList="renderFormList" :formData="formData" @change="handleChange"></fc-form>
			<view class="addOrder-submit">
				<button type="default" @click="handleSubmit">提交</button>
			</view>
		</view>
	</view>
</template>

<script>
	import service from '@/service/index.js';
	import {
		getAddOrderFormRenderList
	} from './config.js'
	export default {
		name: 'mine',
		components: {},
		data() {
			return {
				renderFormList: getAddOrderFormRenderList(),
				formData: {
					payType: 1, // 线下支付
					orderType: 2,
					goodsPrice: 0,
					goodsQuantity: '',
					numOfPlant: '',
					payAmount: '',
					receiveName: '',
					receivePhone: '',
				},
			}
		},
		computed: {},
		watch: {},
		mounted() {},
		onLoad() {},
		methods: {
			/**
			处理表单改变事件
			@param 
			@return
			*/
			handleChange(formData) {
				console.log(formData)
				this.formData = formData
			},
			handleSubmit() {
				this.$refs.formRef.validate().then(data=>{
					
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	.portal {}
</style>