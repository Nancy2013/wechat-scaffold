<template>
	<view class="portal">
		<fc-input :value="value"></fc-input>
		<fc-form-item type='input' :value="value"></fc-form-item>
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
		methods: {}
	}
</script>

<style lang="scss" scoped>
	.portal {}
</style>