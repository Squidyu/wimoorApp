"use strict";var e=require("../../../../common/vendor.js");const t={name:"uniTable",options:{virtualHost:!0},emits:["selection-change"],props:{data:{type:Array,default:()=>[]},border:{type:Boolean,default:!1},stripe:{type:Boolean,default:!1},type:{type:String,default:""},emptyText:{type:String,default:"没有更多数据"},loading:{type:Boolean,default:!1},rowKey:{type:String,default:""}},data:()=>({noData:!0,minWidth:0,multiTableHeads:[]}),watch:{loading(e){},data(e){this.theadChildren,this.theadChildren&&this.theadChildren.rowspan,this.noData=!1}},created(){this.trChildren=[],this.thChildren=[],this.theadChildren=null,this.backData=[],this.backIndexData=[]},methods:{isNodata(){this.theadChildren;let e=1;this.theadChildren&&(e=this.theadChildren.rowspan),this.noData=this.trChildren.length-e<=0},selectionAll(){let e=1,t=this.theadChildren;this.theadChildren?e=t.rowspan-1:t=this.trChildren[0];let i=this.data&&this.data.length.length>0;t.checked=!0,t.indeterminate=!1,this.trChildren.forEach(((t,a)=>{if(!t.disabled){if(t.checked=!0,i&&t.keyValue){const e=this.data.find((e=>e[this.rowKey]===t.keyValue));this.backData.find((t=>t[this.rowKey]===e[this.rowKey]))||this.backData.push(e)}a>e-1&&-1===this.backIndexData.indexOf(a-e)&&this.backIndexData.push(a-e)}})),this.$emit("selection-change",{detail:{value:this.backData,index:this.backIndexData}})},toggleRowSelection(e,t){e=[].concat(e),this.trChildren.forEach(((i,a)=>{const h=e.findIndex((e=>"number"==typeof e?e===a-1:e[this.rowKey]===i.keyValue));let d=i.checked;-1!==h&&(i.checked="boolean"==typeof t?t:!i.checked,d!==i.checked&&this.check(i.rowData||i,i.checked,i.rowData?i.keyValue:null,!0))})),this.$emit("selection-change",{detail:{value:this.backData,index:this.backIndexData}})},clearSelection(){let e=this.theadChildren;this.theadChildren||(e=this.trChildren[0]),e.checked=!1,e.indeterminate=!1,this.trChildren.forEach((e=>{e.checked=!1})),this.backData=[],this.backIndexData=[],this.$emit("selection-change",{detail:{value:[],index:[]}})},toggleAllSelection(){let e=[],t=1,i=this.theadChildren;this.theadChildren?t=i.rowspan-1:i=this.trChildren[0],this.trChildren.forEach(((i,a)=>{i.disabled||a>t-1&&e.push(a-t)})),this.toggleRowSelection(e)},check(e,t,i,a){let h=this.theadChildren;this.theadChildren||(h=this.trChildren[0]);let d=this.trChildren.findIndex(((t,i)=>e===t));if(d<0&&(d=this.data.findIndex((e=>e[this.rowKey]===i))+1),this.trChildren.filter((e=>!e.disabled&&e.keyValue)).length,0===d)return void(t?this.selectionAll():this.clearSelection());if(t)i&&this.backData.push(e),this.backIndexData.push(d-1);else{const e=this.backData.findIndex((e=>e[this.rowKey]===i)),t=this.backIndexData.findIndex((e=>e===d-1));i&&this.backData.splice(e,1),this.backIndexData.splice(t,1)}this.trChildren.find(((e,t)=>t>0&&!e.checked&&!e.disabled))?(h.indeterminate=!0,h.checked=!1):(h.indeterminate=!1,h.checked=!0),0===this.backIndexData.length&&(h.indeterminate=!1),a||this.$emit("selection-change",{detail:{value:this.backData,index:this.backIndexData}})}}};var i=e._export_sfc(t,[["render",function(t,i,a,h,d,n){return e.e({a:d.noData},d.noData?{b:e.t(a.emptyText),c:a.border?1:""}:{},{d:a.loading},a.loading?{e:a.border?1:""}:{},{f:d.minWidth+"px",g:a.stripe?1:"",h:a.border?1:"",i:d.noData?"":1})}]]);wx.createComponent(i);