import request from'@/utils/request.js'

const BASE_URL='https://op.cn88555.com/api/node';  // https://op.cn88555.com/api/node
/**
  * @Description:格式化数据
  * @param 请求参数
  * @return 格式化参数
  */
const formatData=({url,method,data})=>{
	return {
		url:`${BASE_URL}${url}`,
		method,
		data,
	}
};

export default {
	// 查询
	queryOrder:(params)=>request(formatData({url:'/geo/getAddressTree',method:'POST',data:params,})),
	// 新增
	addOrder:(params)=>request(formatData({url:'/geo/getAddressTree',method:'POST',data:params,})),
	// 查询品牌
	queryBrand:(params)=>request(formatData({url:'/geo/getAddressTree',method:'POST',data:params,})),
	// 查询流水号段
	queryIndex:(params)=>request(formatData({url:'/geo/getAddressTree',method:'POST',data:params,})),
	// 查询产品
	queryProduce:(params)=>request(formatData({url:'/geo/getAddressTree',method:'POST',data:params,})),
	// 查询批次
	queryBatch:(params)=>request(formatData({url:'/geo/getAddressTree',method:'POST',data:params,})),
	// 查询码量
	queryCode:(params)=>request(formatData({url:'/geo/getAddressTree',method:'POST',data:params,})),
};