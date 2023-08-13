<template>
	<view :class="['address', isError ? 'address-error' : '']">
		<view class="address-area" @click="handleShow">
			<view class="address-area-item">
				<input :value="province.name" class="address-area-item-content text_ellipsis input" placeholder-class="address-placeholder" type="text" disabled placeholder="省">
				<image class="address-down" :src="rightImg" mode=""></image>
			</view>
			<view class="address-area-space"><view class="address-area-space-line"></view></view>
			<view class="address-area-item">
				<input :value="city.name" class="address-area-item-content text_ellipsis input" placeholder-class="address-placeholder" type="text" disabled placeholder="市">
				<image class="address-down" :src="rightImg" mode=""></image>
			</view>
			<view class="address-area-space"><view class="address-area-space-line"></view></view>
			<view class="address-area-item">
				<input  :value="district.name" class="address-area-item-content text_ellipsis input" placeholder-class="address-placeholder" type="text" disabled placeholder="区/县">
				<image class="address-down" :src="rightImg" mode=""></image>
			</view>
		</view>
		<fc-textarea v-model="innerValue.address" :placeholder="placeholder" :isError="isError" :maxlength="maxlength" @change="handleTextareaChange" @focus="handleFocus"></fc-textarea>
		<u-select v-model="isShow" mode="mutil-column-auto" :list="options" :child-name="childName" label-name="name" :value-name="valueName" @confirm="handleConfirm" :default-value='defaultValue'></u-select>
	</view>
</template>

<script>
	import rightImg from '@/components/images/fc-select/right.png'
	import { isEmpty } from '../../utils/common.js'
	import requestApi from "@/utils/request.js"
	export default {
		name:"fc-address",
		props: {
			placeholder: String,
			maxlength: String | Number,
			value: {
				type: Object,
				default: ()=> { return {} }
			},
			isError: {
				type: Boolean,
				default: false
			},
			valueName:{
				type:String,
				default:'id',
			},
			childName:{
				type:String,
				default:'childList'
			},
			level:{
				type:Number,
				default:3,
			}
		},
		data() {
			return {
				rightImg: rightImg,
				isShow: false,
				options: [],
				innerValue: {},
			};
		},
		computed: {
			province(){
				if(this.value){
					const {province={}}=this.value;
					return province;
				}
				
				return {};
			},
			city(){
				if(this.value){
					const {city={}}=this.value;
					return city;
				}
				
				return {};
			},
			district(){
				if(this.value){
					const {district={}}=this.value;
					return district;
				}
				
				return {};
			},
			defaultValue(){
				const defaultValue=[];
				const {options,childName}=this;
				if(this.value){
					const {province,city,district}=this.value;
					const initValue=[province,city,district].filter(item=>item);
					let baseArr=options;
					initValue.forEach((item,$index)=>{
						if($index>=1){
							baseArr=baseArr[defaultValue[$index-1]][`${childName}`];
						}
						const index=this.getIndex(item.code,baseArr);
						if(index>=0){
							defaultValue.push(index);
						}
					})
					console.log('------defaultValue------',defaultValue);
					return defaultValue;
				}
			},
		},
		
		mounted() {
			this.innerValue = { ...this.value }
			const {level}=this;
			const params={
				level,
			};
			requestApi({
				url: "https://op.cn88555.com/api/base/geo/area/list",
				data:params,
			}).then((res)=> {
				if(Array.isArray(res.data)) {
					this.options = res.data
				}
			})
		},
		
		methods: {
			getIndex(value,arr){
				if(Array.isArray(arr)){
					const index=arr.findIndex(item=>item.id===value);
					if(index>=0){
						return index;
					}
					return null
				}
				return null
			},
			/**
			    处理详细地址改变事件
			    @param { String } value 地址输入的值
			    @return
			*/
			handleTextareaChange(value) {
				const innerValue = { ...this.value }
				innerValue.address = value
				this.$emit('change', innerValue)
			},
			/**
			    处理选择区域改变事件
			    @param { Array } value 选择区域的值
			    @return
			*/
			handleConfirm(value) {
				const keyList = ["province", "city", "district"], innerValue = {...this.value}
				for(let i = 0; i < value.length; i++) {
					innerValue[keyList[i]] = {
						code:value[i].value,
						name:value[i].label,
					}
				}
				this.$emit('change', innerValue)
			},
			
			/**
			    显示区域选择弹框
			    @param
			    @return
			*/
			handleShow() {
				this.isShow = true
				this.$emit('focus')
			},
			/**
			    地址文本框获取焦点时触发
			    @param
			    @return
			*/
			handleFocus() {
				this.$emit('focus')
			},
		},
		watch: {
			value(newValue) {
				this.innerValue = newValue
			}
		}
	}
</script>

<style lang="scss" scoped>
.address-area {
	display: flex;
	flex-direction: row;
	height: 70rpx;
	margin-bottom: 24rpx;
}

.address-area-item {
	position: relative;
	width: 180rpx;
	height: 100%;
	border-radius: 8rpx;
	background-color: $uni-bg-color-grey;
}

.address-area-item .address-down {
	position: absolute;
	right: 20rpx;
	top: 0;
	bottom: 0;
	width: 12rpx;
	height: 20rpx;
	margin: auto 0;
	transform: rotate(90deg);
}

.address-area-item-content {
	position: absolute;
	left: 16rpx;
	height: 42rpx;
	line-height: 42rpx;
	right: 44rpx;
	top: 0;
	bottom: 0;
	margin: auto 0;
}

.address-area-space {
	position: relative;
	flex: 1;
	height: 100%;
}
.address-area-space-line {
	position: absolute;
	left: 12rpx;
	right: 12rpx;
	top: 0;
	bottom: 0;
	height: 3rpx;
	margin: auto;
	background-color: rgba(34, 34, 34, .5);
}
.address-error {
	.address-placeholder {
		color: $error-color;
	}
}
</style>