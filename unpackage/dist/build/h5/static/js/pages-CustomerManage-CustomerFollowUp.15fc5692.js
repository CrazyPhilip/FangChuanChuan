(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-CustomerManage-CustomerFollowUp"],{"023f":function(n,t,a){"use strict";a.r(t);var e=a("f2a2"),r=a("e9b1");for(var o in r)"default"!==o&&function(n){a.d(t,n,(function(){return r[n]}))}(o);a("c8f1"),a("8945"),a("1260");var i,u=a("f0c5"),s=Object(u["a"])(r["default"],e["b"],e["c"],!1,null,"2a570094",null,!1,e["a"],i);t["default"]=s.exports},1260:function(n,t,a){"use strict";var e=a("ac11"),r=a.n(e);r.a},"32e1":function(n,t,a){var e=a("24fb");t=e(!1),t.push([n.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.collapse-item[data-v-2a570094]{border:%?1?% solid #fff;-webkit-border-radius:%?8?%;border-radius:%?8?%;background-color:#fff;margin:%?10?%;padding:%?8?%}',""]),n.exports=t},"3be6":function(n,t,a){var e=a("24fb");t=e(!1),t.push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/* page不能写带scope的style标签中，否则无效 */uni-page-body[data-v-2a570094]{background-color:#f0f0f0}body.?%PAGE?%[data-v-2a570094]{background-color:#f0f0f0}",""]),n.exports=t},"3cf1":function(n,t,a){var e=a("3be6");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var r=a("4f06").default;r("1d88f48b",e,!0,{sourceMap:!1,shadowMode:!1})},"7d00":function(n,t,a){var e=a("24fb");t=e(!1),t.push([n.i,"\nbody.?%PAGE?%[data-v-2a570094]{background-color:#f2f2f2}",""]),n.exports=t},8945:function(n,t,a){"use strict";var e=a("9853"),r=a.n(e);r.a},9853:function(n,t,a){var e=a("7d00");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var r=a("4f06").default;r("2908da0c",e,!0,{sourceMap:!1,shadowMode:!1})},ac11:function(n,t,a){var e=a("32e1");"string"===typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);var r=a("4f06").default;r("d5eb32e2",e,!0,{sourceMap:!1,shadowMode:!1})},c8f1:function(n,t,a){"use strict";var e=a("3cf1"),r=a.n(e);r.a},e9b1:function(n,t,a){"use strict";a.r(t);var e=a("f51d"),r=a.n(e);for(var o in e)"default"!==o&&function(n){a.d(t,n,(function(){return e[n]}))}(o);t["default"]=r.a},f2a2:function(n,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return e}));var e={uNavbar:a("bca0").default,uCollapse:a("c96f").default,uCollapseItem:a("b3c5").default},r=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",[a("u-navbar",{attrs:{"is-back":"true",title:"看跟进"}}),a("v-uni-view",{staticClass:"wrap"},[a("u-collapse",{attrs:{"event-type":"close",arrow:n.arrow,accordion:n.accordion},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.change.apply(void 0,arguments)}}},n._l(n.list,(function(t,e){return a("u-collapse-item",{key:e,staticClass:"collapse-item",attrs:{index:e,title:t.Content},on:{change:function(t){arguments[0]=t=n.$handleEvent(t),n.itemChange.apply(void 0,arguments)}}},[a("v-uni-view",[a("v-uni-view",[n._v("类型："+n._s(t.FollowType))]),a("v-uni-view",[n._v("内容："+n._s(t.Content))]),a("v-uni-view",[n._v("跟进人："+n._s(t.EmpName))]),a("v-uni-view",[n._v("跟进部门："+n._s(t.DeptName))]),a("v-uni-view",[n._v("跟进时间："+n._s(t.FollowDate))])],1)],1)})),1)],1)],1)},o=[]},f51d:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{InquiryID:"",list:[],accordion:!1,arrow:!0,key:!0}},onLoad:function(n){this.InquiryID=n.InquiryID,this.getInquiryFollowInfo()},methods:{getInquiryFollowInfo:function(){var n=this;this.$u.get(this.global_data.global_data.BaseUrl+"GetInquiryFollowInfo",{DBName:this.global_data.global_data.DBName,InquiryID:this.InquiryID}).then((function(t){n.list=t.Result}))},itemChange:function(){},change:function(){}}};t.default=e}}]);