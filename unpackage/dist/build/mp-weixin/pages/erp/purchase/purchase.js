"use strict";var e=require("../../../common/vendor.js"),t=require("../../../api/erp/purchase/purchase.js");require("../../../common/request.js");const s={data:()=>({search:"",placeholderStyle:"color:#ffa400;font-size:14px",styles:{color:"#ffa400",borderColor:"#ffa400"},listData:[],last_id:"",reload:!1,status:"more",contentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有更多"},ftype:"sku",offset:1,index:0,items:["SKU","订单号","运单号"],values:["sku","order","logistics"]}),onLoad(){this.getList()},onPullDownRefresh(){this.reload=!0,this.last_id="",this.getList()},onReachBottom(){this.status="more",this.getList()},methods:{searchOrder(e){this.listData=[],this.offset=1,this.reload=!0,this.search=e,this.index=1,this.ftype="order",this.getList()},suppliernameFuc:e=>null==e||null==e||""==e?"--":e,paystatusFuc:e=>"1"==e||1==e?"已付款":"未付款",deliverydateFuc:e=>null!=e&&null!=e&&""!=e?e.split(" ")[0]:"--",statusFuc:e=>0==e||"0"==e?"已退回":1==e||"1"==e?"待审核":2==e||"2"==e?"执行中":3==e||"3"==e?"已完成":void 0,refreshtab(){this.offset=1,this.search="",this.ftype="sku",this.index=0,this.reload=!0,this.getList()},scanHandler(){var t=this;e.index.scanCode({success:function(e){e.result&&(t.offset=1,t.index=2,t.ftype="logistics",t.reload=!0,t.search=e.result,t.getList())}})},onchange(e){this.index=e.detail.value,this.ftype=this.values[this.index],this.listData=[],this.offset=1,this.reload=!0,this.getList()},input(e){this.listData=[],this.offset=1,this.reload=!0,this.search=e,this.getList()},getList(){this.last_id&&(this.status="loading"),t.purchaseApi.list({sort:"sku",order:"desc",offset:this.offset,limit:10,auditstatus:"4",ftype:this.ftype,datetype:"createdate",search:this.search,minid:this.last_id}).then((e=>{if(e&&e.records&&e.records.length>0){let t=e.records;t.length>0?(this.listData=this.reload?t:this.listData.concat(t),this.last_id=t[t.length-1].id,this.reload=!1,t.length<10&&(this.status="nomore"),this.offset=this.offset+1):(this.status="nomore",this.reload=!1)}else this.status="nomore",this.reload=!1}))},goMaterialInfoPage(t){e.index.navigateTo({url:"../material/material?materialid="+t})},goDetail:function(t){let s={entryid:t.id,alibaba_auth:t.alibaba_auth,alibaba_orderid:t.alibaba_orderid,sku:t.sku,warehouseid:t.warehouseid,warehousename:t.warehousename};e.index.navigateTo({url:"./receive?detailDate="+encodeURIComponent(JSON.stringify(s))})},aderror(e){}}};if(!Array){(e.resolveComponent("uni-easyinput")+e.resolveComponent("uni-icons")+e.resolveComponent("uni-load-more"))()}Math||((()=>"../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js")+(()=>"../../../uni_modules/uni-icons/components/uni-icons/uni-icons.js")+(()=>"../../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js"))();var i=e._export_sfc(s,[["render",function(t,s,i,a,o,r){return{a:e.t(o.items[o.index]),b:e.o(((...e)=>r.onchange&&r.onchange(...e))),c:o.index,d:o.items,e:e.o(r.refreshtab),f:e.o(r.input),g:e.o((e=>o.search=e)),h:e.p({styles:o.styles,placeholderStyle:o.placeholderStyle,suffixIcon:"loop",placeholder:"请输入内容自动查询",modelValue:o.search}),i:e.o(r.scanHandler),j:e.p({color:"#FFA400",type:"scan",size:"28"}),k:e.f(o.listData,((t,s,i)=>e.e({a:e.o((e=>r.goMaterialInfoPage(t.materialid))),b:t.image,c:e.t(t.sku),d:"1"==t.issfg},(t.issfg,{}),{e:e.t(t.amount),f:e.t(r.statusFuc(t.auditstatus)),g:e.t(r.deliverydateFuc(t.deliverydate)),h:e.t(r.paystatusFuc(t.paystatus)),i:e.t(r.suppliernameFuc(t.suppliername)),j:e.t(t.number),k:"7314a949-2-"+i,l:e.o((e=>r.searchOrder(t.number))),m:e.t(t.creatorname),n:e.t(t.createdate),o:e.o((e=>r.goDetail(t))),p:s}))),l:e.p({color:"#787878",type:"search",size:"12"}),m:e.p({status:o.status,"icon-size":16,"content-text":o.contentText})}}]]);wx.createPage(i);