import request from "@/utils/request";
function getMarketByGroup(data){
	 return request.get('/amazon/api/v1/amzauthority/getMarketByGroup',{params:data });
}
function getMarketAll(){
	 return request.get('/amazon/api/v1/amzauthority/getMarketAll');
}
 //国家列表
 function getMarketList(data){
 	return request.get("/amazon/api/v1/amzauthority/getMarketBind",{params:data})
 }
 function getBySku(data){
	 return request.get("/amazon/api/v1/amzmarketplace/getBySku",{params:data})
 }
export default{
	getMarketByGroup,getMarketList,getMarketAll,getBySku,
}
 