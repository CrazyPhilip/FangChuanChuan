(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-Calculator-taxCalculator2"],{"0202":function(t,e,i){"use strict";var a=i("53cb"),n=i.n(a);n.a},"027b":function(t,e,i){"use strict";i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=uni.getSystemInfoSync(),n={},r={name:"u-navbar",props:{height:{type:[String,Number],default:""},backIconColor:{type:String,default:"#606266"},backIconName:{type:String,default:"nav-back"},backIconSize:{type:[String,Number],default:"44"},backText:{type:String,default:""},backTextStyle:{type:Object,default:function(){return{color:"#606266"}}},title:{type:String,default:""},titleWidth:{type:[String,Number],default:"250"},titleColor:{type:String,default:"#606266"},titleSize:{type:[String,Number],default:32},isBack:{type:[Boolean,String],default:!0},background:{type:Object,default:function(){return{background:"#ffffff"}}},isFixed:{type:Boolean,default:!0},immersive:{type:Boolean,default:!1},borderBottom:{type:Boolean,default:!0},zIndex:{type:[String,Number],default:""},customBack:{type:Function,default:null}},data:function(){return{menuButtonInfo:n,statusBarHeight:a.statusBarHeight}},computed:{navbarInnerStyle:function(){var t={};return t.height=this.navbarHeight+"px",t},navbarStyle:function(){var t={};return t.zIndex=this.zIndex?this.zIndex:this.$u.zIndex.navbar,Object.assign(t,this.background),t},titleStyle:function(){var t={};return t.left=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.right=(a.windowWidth-uni.upx2px(this.titleWidth))/2+"px",t.width=uni.upx2px(this.titleWidth)+"px",t},navbarHeight:function(){return this.height?this.height:44}},created:function(){},methods:{goBack:function(){"function"===typeof this.customBack?this.customBack.bind(this.$u.$parent.call(this))():uni.navigateBack()}}};e.default=r},"257a":function(t,e,i){"use strict";i.r(e);var a=i("abc0"),n=i("4639");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("0202");var l,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"1e2d887a",null,!1,a["a"],l);e["default"]=s.exports},"26ce":function(t,e,i){"use strict";var a=i("6946"),n=i.n(a);n.a},"2c81":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.wrap[data-v-28125f5c]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:calc(100vh - var(--window-top));width:100%;padding-left:%?20?%;padding-right:%?20?%}.wrap .swiper-box[data-v-28125f5c]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.wrap .swiper-box .swiper-item[data-v-28125f5c]{height:100%}.wrap .swiper-box .swiper-item .scrollView[data-v-28125f5c]{height:100%;width:100%}.wrap .swiper-box .swiper-item .scrollView .page-box .resultBox[data-v-28125f5c]{border:%?5?% solid #666;-webkit-border-radius:8px;border-radius:8px;margin-top:5px;margin-bottom:5px;padding:8px;position:relative}',""]),t.exports=e},"2f5d":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-navbar[data-v-70d2c502]{width:100%}.u-navbar-fixed[data-v-70d2c502]{position:fixed;left:0;right:0;top:0;z-index:991}.u-status-bar[data-v-70d2c502]{width:100%}.u-navbar-inner[data-v-70d2c502]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;position:relative;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.u-back-wrap[data-v-70d2c502]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0;padding:%?14?% %?14?% %?14?% %?24?%}.u-back-text[data-v-70d2c502]{padding-left:%?4?%;font-size:%?30?%}.u-navbar-content-title[data-v-70d2c502]{\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-flex:1;-webkit-flex:1;flex:1;position:absolute;left:0;right:0;height:%?60?%;text-align:center;-webkit-flex-shrink:0;flex-shrink:0}.u-navbar-centent-slot[data-v-70d2c502]{-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-title[data-v-70d2c502]{line-height:%?60?%;font-size:%?32?%;-webkit-box-flex:1;-webkit-flex:1;flex:1}.u-navbar-right[data-v-70d2c502]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.u-slot-content[data-v-70d2c502]{-webkit-box-flex:1;-webkit-flex:1;flex:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center}',""]),t.exports=e},"414c":function(t,e,i){"use strict";i.r(e);var a=i("027b"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"41d3":function(t,e,i){"use strict";var a;i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-radio-group u-clearfix"},[t._t("default")],2)},r=[]},4639:function(t,e,i){"use strict";i.r(e);var a=i("6b40"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"47f3":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-radio[data-v-1e2d887a]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-radio__icon-wrap[data-v-1e2d887a]{color:#606266;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-flex:0;-webkit-flex:none;flex:none;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s}.u-radio__icon-wrap--circle[data-v-1e2d887a]{-webkit-border-radius:100%;border-radius:100%}.u-radio__icon-wrap--square[data-v-1e2d887a]{-webkit-border-radius:3px;border-radius:3px}.u-radio__icon-wrap--checked[data-v-1e2d887a]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-radio__icon-wrap--disabled[data-v-1e2d887a]{background-color:#ebedf0;border-color:#c8c9cc}.u-radio__icon-wrap--disabled--checked[data-v-1e2d887a]{color:#c8c9cc!important}.u-radio__label[data-v-1e2d887a]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-radio__label--disabled[data-v-1e2d887a]{color:#c8c9cc}',""]),t.exports=e},"53cb":function(t,e,i){var a=i("47f3");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("4dc29a52",a,!0,{sourceMap:!1,shadowMode:!1})},6809:function(t,e,i){var a=i("f438");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("520b3154",a,!0,{sourceMap:!1,shadowMode:!1})},6946:function(t,e,i){var a=i("2c81");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("94210a24",a,!0,{sourceMap:!1,shadowMode:!1})},"6b40":function(t,e,i){"use strict";i("a15b"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={name:"u-radio",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""}},data:function(){return{parentData:{iconSize:null,labelDisabled:null,disabled:null,shape:null,activeColor:null,size:null,width:null,height:null,value:null,wrap:null}}},created:function(){this.parent=!1,this.updateParentData(),this.parent.children.push(this)},computed:{elDisabled:function(){return""!==this.disabled?this.disabled:null!==this.parentData.disabled&&this.parentData.disabled},elLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:null!==this.parentData.labelDisabled&&this.parentData.labelDisabled},elSize:function(){return this.size?this.size:this.parentData.size?this.parentData.size:34},elIconSize:function(){return this.iconSize?this.iconSize:this.parentData.iconSize?this.parentData.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parentData.activeColor?this.parentData.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parentData.shape?this.parentData.shape:"circle"},iconStyle:function(){var t={};return this.elActiveColor&&this.parentData.value==this.name&&!this.elDisabled&&(t.borderColor=this.elActiveColor,t.backgroundColor=this.elActiveColor),t.width=this.$u.addUnit(this.elSize),t.height=this.$u.addUnit(this.elSize),t},iconColor:function(){return this.name==this.parentData.value?"#ffffff":"transparent"},iconClass:function(){var t=[];return t.push("u-radio__icon-wrap--"+this.elShape),this.name==this.parentData.value&&t.push("u-radio__icon-wrap--checked"),this.elDisabled&&t.push("u-radio__icon-wrap--disabled"),this.name==this.parentData.value&&this.elDisabled&&t.push("u-radio__icon-wrap--disabled--checked"),t.join(" ")},radioStyle:function(){var t={};return this.parentData.width&&(t.width=this.$u.addUnit(this.parentData.width),t.flex="0 0 ".concat(this.$u.addUnit(this.parentData.width))),this.parentData.wrap&&(t.width="100%",t.flex="0 0 100%"),t}},methods:{updateParentData:function(){this.getParentData("u-radio-group")},onClickLabel:function(){this.elLabelDisabled||this.elDisabled||this.setRadioCheckedStatus()},toggle:function(){this.elDisabled||this.setRadioCheckedStatus()},emitEvent:function(){this.parentData.value!=this.name&&this.$emit("change",this.name)},setRadioCheckedStatus:function(){this.emitEvent(),this.parent&&(this.parent.setValue(this.name),this.parentData.value=this.name)}}};e.default=a},"6cba":function(t,e,i){var a=i("2f5d");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("ec307760",a,!0,{sourceMap:!1,shadowMode:!1})},7106:function(t,e,i){"use strict";i.r(e);var a=i("41d3"),n=i("b7b6");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("cf7e");var l,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"462894bc",null,!1,a["a"],l);e["default"]=s.exports},7253:function(t,e,i){"use strict";var a=i("4ea4");i("d81d"),i("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("84b3")),r={name:"u-radio-group",mixins:[n.default],props:{disabled:{type:Boolean,default:!1},value:{type:[String,Number],default:""},activeColor:{type:String,default:"#2979ff"},size:{type:[String,Number],default:34},labelDisabled:{type:Boolean,default:!1},shape:{type:String,default:"circle"},iconSize:{type:[String,Number],default:20},width:{type:[String,Number],default:"auto"},wrap:{type:Boolean,default:!1}},created:function(){this.children=[]},watch:{parentData:function(){this.children.length&&this.children.map((function(t){"function"==typeof t.updateParentData&&t.updateParentData()}))}},computed:{parentData:function(){return[this.value,this.disabled,this.activeColor,this.size,this.labelDisabled,this.shape,this.iconSize,this.width,this.wrap]}},methods:{setValue:function(t){var e=this;this.children.map((function(e){e.parentData.value!=t&&(e.parentData.value="")})),this.$emit("input",t),this.$emit("change",t),setTimeout((function(){e.dispatch("u-form-item","on-form-change",t)}),60)}}};e.default=r},aa56:function(t,e,i){"use strict";i.r(e);var a=i("f429"),n=i("addb");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("26ce");var l,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"28125f5c",null,!1,a["a"],l);e["default"]=s.exports},abc0:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uIcon:i("cd36").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"u-radio",style:[t.radioStyle]},[i("v-uni-view",{staticClass:"u-radio__icon-wrap",class:[t.iconClass],style:[t.iconStyle],on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.toggle.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-radio__icon-wrap__icon",attrs:{name:"checkbox-mark",size:t.elIconSize,color:t.iconColor}})],1),i("v-uni-view",{staticClass:"u-radio__label",style:{fontSize:t.$u.addUnit(t.labelSize)},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLabel.apply(void 0,arguments)}}},[t._t("default")],2)],1)},r=[]},addb:function(t,e,i){"use strict";i.r(e);var a=i("f2d1"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},b7b6:function(t,e,i){"use strict";i.r(e);var a=i("7253"),n=i.n(a);for(var r in a)"default"!==r&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},bca0:function(t,e,i){"use strict";i.r(e);var a=i("fb69"),n=i("414c");for(var r in n)"default"!==r&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("ed95");var l,o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"70d2c502",null,!1,a["a"],l);e["default"]=s.exports},cf7e:function(t,e,i){"use strict";var a=i("6809"),n=i.n(a);n.a},ed95:function(t,e,i){"use strict";var a=i("6cba"),n=i.n(a);n.a},f2d1:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{model1:{square1:"",unitPrice1:"",first1:"是"},model2:{originalPrice2:"",totalPrice2:"",square2:"",first2:"是",isOnly2:"是",year2:"不满两年",calculate2:"按总价计算",propertyType2:"普通住宅"},result1:{totalPrice:"",deedTax:"",maintenanceFund:"",totalTax:""},result2:{totalPrice:"",deedTax:"",addedValueTax:"",stampTax:"",indicidualIncometTax:"",consolidatedPriceTax:"",totalTax:""},list:[{name:"新房"},{name:"二手房"}],firstList:[{name:"是",disabled:!1},{name:"否",disabled:!1}],isOnlyList:[{name:"是",disabled:!1},{name:"否",disabled:!1}],propertyTypeList:[{name:"普通住宅",disabled:!1},{name:"非普通住宅",disabled:!1},{name:"经济适用房",disabled:!1}],calculateList:[{name:"按总价计算",disabled:!1},{name:"按差价计算",disabled:!1}],yearList:[{name:"不满两年",disabled:!1},{name:"二到五年",disabled:!1},{name:"五年以上",disabled:!1}],rules:{first:[{required:!0,message:"请选择",trigger:"change",type:"array"}],square:[{required:!0,message:"请输入",trigger:["change","blur"]},{type:"number",message:"只能为数字",trigger:["change","blur"]}],unitPrice:[{required:!0,message:"请输入",trigger:["change","blur"]},{type:"number",message:"只能为数字",trigger:["change","blur"]}]},labelPosition:"left",current:0,swiperCurrent:0,tabsHeight:0,dx:0}},methods:{reachBottom:function(){},_reset:function(){this.model1.square1="",this.model1.unitPrice1="",this.model1.first1="是"},_calculate:function(){if(""===this.model1.square1)return this.$u.toast("建筑面积不能为空");var t=/^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;if(1!=t.test(this.model1.square1))return this.$u.toast("建筑面积格式不对，只能是正浮点数，请重新填写");if(""===this.model1.unitPrice1)return this.$u.toast("单价不能为空");t=/^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;if(1!=t.test(this.model1.unitPrice1))return this.$u.toast("单价格式不对，只能是正浮点数，请重新填写");var e=this.model1.square1*this.model1.unitPrice1,i=.03*e;if("是"===this.model1.first1)var a=.015*e,n=a+i+85;else if("否"===this.model1.first1)a=.02*e,n=a+i+85;this.result1.totalPrice=e,this.result1.deedTax=a,this.result1.maintenanceFund=i,this.result1.totalTax=n},_reset2:function(){this.model2.originalPrice2="",this.model2.totalPrice2="",this.model2.square2="",this.model2.first2="是",this.model2.isOnly2="是",this.model2.year2="不满两年",this.model2.alculate2="按总价计算",this.model2.propertyType2="普通住宅"},_calculate2:function(){if(""===this.model2.square2)return this.$u.toast("建筑面积不能为空");var t=/^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;if(1!=t.test(this.model2.square2))return this.$u.toast("建筑面积格式不对，只能是正浮点数，请重新填写");if(""===this.model2.totalPrice2)return this.$u.toast("总价不能为空");t=/^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;if(1!=t.test(this.model2.totalPrice2))return this.$u.toast("总价格式不对，只能是正浮点数，请重新填写");var e,i,a=this.model2.totalPrice2,n=Math.abs(this.model2.totalPrice2-this.model2.originalPrice2),r=.01*a,l=0;e="不满两年"===this.model2.year2?.05*a:0,"是"==this.model2.isOnly2&&"不满两年"!=this.model2.year2&&(r=0),"是"===this.model2.first2?i=.015*a:"否"===this.model2.first2&&(i=.02*a),"按差价计算"==this.model2.alculate2&&"是"!=this.model2.isOnly2&&(r=.2*n),"经济适用房"==this.model2.propertyType2&&(l=.1*a);var o=e+i+r+l+5;this.result2.totalPrice=a,this.result2.deedTax=i,this.result2.addedValueTax=e,this.result2.stampTax=0,this.result2.indicidualIncometTax=r,this.result2.consolidatedPriceTax=l,this.result2.totalTax=o},transition:function(t){var e=t.detail.dx;this.$refs.tabs.setDx(e)},change:function(t){this.swiperCurrent=t},animationfinish:function(t){var e=t.detail.current;this.$refs.tabs.setFinishCurrent(e),this.swiperCurrent=e,this.current=e},radioChange:function(t){},radioGroupChange:function(t){}}};e.default=a},f429:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uNavbar:i("bca0").default,uTabsSwiper:i("57eb").default,uIcon:i("cd36").default,uForm:i("f506").default,uFormItem:i("2ade").default,uInput:i("2016").default,uRadioGroup:i("7106").default,uRadio:i("257a").default,uRow:i("db61").default,uCol:i("1a6f").default,uButton:i("0079").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("u-navbar",{attrs:{"is-back":"true",title:"税费计算器"}}),i("v-uni-view",{staticClass:"wrap"},[i("v-uni-view",{staticClass:"u-tabs-box"},[i("u-tabs-swiper",{ref:"tabs",attrs:{list:t.list,current:t.current,"is-scroll":!1,swiperWidth:"750"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}})],1),i("v-uni-swiper",{staticClass:"swiper-box",attrs:{current:t.swiperCurrent},on:{transition:function(e){arguments[0]=e=t.$handleEvent(e),t.transition.apply(void 0,arguments)},animationfinish:function(e){arguments[0]=e=t.$handleEvent(e),t.animationfinish.apply(void 0,arguments)}}},[i("v-uni-swiper-item",{staticClass:"swiper-item"},[i("v-uni-scroll-view",{staticClass:"scrollView",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.reachBottom.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"page-box"},[i("v-uni-view",{staticClass:"resultBox"},[i("v-uni-view",{staticClass:"result1"},[t._v("房款总价："+t._s(t.result1.totalPrice)+"元")]),i("v-uni-view",{staticClass:"result2"},[t._v("契税："+t._s(t.result1.deedTax)+"元")]),i("v-uni-view",{staticClass:"result3"},[t._v("合同工本费：5元")]),i("v-uni-view",{staticClass:"result4"},[t._v("维修基金："+t._s(t.result1.maintenanceFund)+"元")]),i("v-uni-view",{staticClass:"result5"},[t._v("权属登记费：80元")]),i("v-uni-view",{staticClass:"result6"},[t._v("税金总额："+t._s(t.result1.totalTax)+"元")]),i("v-uni-view",[i("u-icon",{attrs:{name:"question-circle-fill",size:"30"}}),i("v-uni-text",{staticClass:"tips"},[t._v("以上结果仅供参考")])],1)],1),i("v-uni-view",[i("u-form",{ref:"uForm",attrs:{model:t.model1,rules:t.rules,errorType:["message"]}},[i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"phone-fill","label-position":t.labelPosition,label:"建筑面积(㎡)",prop:"square1","label-width":"300"}},[i("u-input",{attrs:{border:t.border,placeholder:"请输入建筑面积",type:"number"},model:{value:t.model1.square1,callback:function(e){t.$set(t.model1,"square1",e)},expression:"model1.square1"}})],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"phone-fill","label-position":t.labelPosition,label:"单价(元/㎡)",prop:"unitPrice1","label-width":"300"}},[i("u-input",{attrs:{border:t.border,placeholder:"请输入单价",type:"number"},model:{value:t.model1.unitPrice1,callback:function(e){t.$set(t.model1,"unitPrice1",e)},expression:"model1.unitPrice1"}})],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"phone-fill","label-position":t.labelPosition,label:"首次购房",prop:"first1","label-width":"300"}},[i("u-radio-group",{attrs:{width:t.radioCheckWidth},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioGroupChange.apply(void 0,arguments)}},model:{value:t.model1.first1,callback:function(e){t.$set(t.model1,"first1",e)},expression:"model1.first1"}},t._l(t.firstList,(function(e,a){return i("u-radio",{key:a,attrs:{shape:"circle",name:e.name}},[t._v(t._s(e.name))])})),1)],1)],1)],1),i("v-uni-view",[i("u-row",{attrs:{justify:"space-around"}},[i("u-col",{attrs:{span:"6"}},[i("u-button",{attrs:{shape:"square",ripple:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._reset.apply(void 0,arguments)}}},[t._v("清空")])],1),i("u-col",{attrs:{span:"6"}},[i("u-button",{attrs:{shape:"square",type:"primary",ripple:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._calculate.apply(void 0,arguments)}}},[t._v("计算")])],1)],1)],1)],1)],1)],1),i("v-uni-swiper-item",{staticClass:"swiper-item"},[i("v-uni-scroll-view",{staticStyle:{height:"100%",width:"100%"},attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.reachBottom.apply(void 0,arguments)}}},[i("v-uni-scroll-view",{staticClass:"scrollView",attrs:{"scroll-y":!0},on:{scrolltolower:function(e){arguments[0]=e=t.$handleEvent(e),t.reachBottom.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"page-box"},[i("v-uni-view",{staticClass:"resultBox"},[i("v-uni-view",{staticClass:"result1"},[t._v("房款总价："+t._s(t.result2.totalPrice)+"元")]),i("v-uni-view",{staticClass:"result2"},[t._v("契税："+t._s(t.result2.deedTax)+"元")]),i("v-uni-view",{staticClass:"result2"},[t._v("增值税："+t._s(t.result2.addedValueTax)+"元")]),i("v-uni-view",{staticClass:"result2"},[t._v("印花税："+t._s(t.result2.stampTax)+"元")]),i("v-uni-view",{staticClass:"result3"},[t._v("个人所得税："+t._s(t.result2.indicidualIncometTax)+"元")]),i("v-uni-view",{staticClass:"result4"},[t._v("工本印花税：5元")]),i("v-uni-view",{staticClass:"result5"},[t._v("综合地价税："+t._s(t.result2.consolidatedPriceTax)+"元")]),i("v-uni-view",{staticClass:"result6"},[t._v("税金总额："+t._s(t.result2.totalTax)+"元")]),i("v-uni-view",[i("u-icon",{attrs:{name:"question-circle-fill",size:"30"}}),i("v-uni-text",{staticClass:"tips"},[t._v("以上结果仅供参考")])],1)],1),i("v-uni-view",[i("u-form",{ref:"uForm",attrs:{model:t.model2,rules:t.rules,errorType:["message"]}},[i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"phone-fill","label-position":t.labelPosition,label:"物业类型",prop:"propertyType2","label-width":"300"}},[i("u-radio-group",{attrs:{width:t.radioCheckWidth,wrap:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioGroupChange.apply(void 0,arguments)}},model:{value:t.model2.propertyType2,callback:function(e){t.$set(t.model2,"propertyType2",e)},expression:"model2.propertyType2"}},t._l(t.propertyTypeList,(function(e,a){return i("u-radio",{key:a,attrs:{shape:"circle",name:e.name}},[t._v(t._s(e.name))])})),1)],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"phone-fill","label-position":t.labelPosition,label:"计算方式",prop:"calculate2","label-width":"300"}},[i("u-radio-group",{attrs:{width:t.radioCheckWidth,wrap:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioGroupChange.apply(void 0,arguments)}},model:{value:t.model2.calculate2,callback:function(e){t.$set(t.model2,"calculate2",e)},expression:"model2.calculate2"}},t._l(t.calculateList,(function(e,a){return i("u-radio",{key:a,attrs:{shape:"circle",name:e.name}},[t._v(t._s(e.name))])})),1)],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"phone-fill","label-position":t.labelPosition,label:"房产购置年限",prop:"year2","label-width":"300"}},[i("u-radio-group",{attrs:{width:t.radioCheckWidth,wrap:!0},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioGroupChange.apply(void 0,arguments)}},model:{value:t.model2.year2,callback:function(e){t.$set(t.model2,"year2",e)},expression:"model2.year2"}},t._l(t.yearList,(function(e,a){return i("u-radio",{key:a,attrs:{shape:"circle",name:e.name}},[t._v(t._s(e.name))])})),1)],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"phone-fill","label-position":t.labelPosition,label:"首次购房",prop:"first2","label-width":"300"}},[i("u-radio-group",{attrs:{width:t.radioCheckWidth},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioGroupChange.apply(void 0,arguments)}},model:{value:t.model2.first2,callback:function(e){t.$set(t.model2,"first2",e)},expression:"model2.first2"}},t._l(t.firstList,(function(e,a){return i("u-radio",{key:a,attrs:{shape:"circle",name:e.name}},[t._v(t._s(e.name))])})),1)],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"phone-fill","label-position":t.labelPosition,label:"唯一住房",prop:"isOnly2","label-width":"300"}},[i("u-radio-group",{attrs:{width:t.radioCheckWidth},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.radioGroupChange.apply(void 0,arguments)}},model:{value:t.model2.isOnly2,callback:function(e){t.$set(t.model2,"isOnly2",e)},expression:"model2.isOnly2"}},t._l(t.isOnlyList,(function(e,a){return i("u-radio",{key:a,attrs:{shape:"circle",name:e.name}},[t._v(t._s(e.name))])})),1)],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"phone-fill","label-position":t.labelPosition,label:"建筑面积(㎡)",prop:"square2","label-width":"300"}},[i("u-input",{attrs:{border:t.border,placeholder:"请输入建筑面积",type:"number"},model:{value:t.model2.square2,callback:function(e){t.$set(t.model2,"square2",e)},expression:"model2.square2"}})],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"phone-fill","label-position":t.labelPosition,label:"总价(元)",prop:"totalPrice2","label-width":"300"}},[i("u-input",{attrs:{border:t.border,placeholder:"请输入总价",type:"number"},model:{value:t.model2.totalPrice2,callback:function(e){t.$set(t.model2,"totalPrice2",e)},expression:"model2.totalPrice2"}})],1),"按差价计算"===t.model2.calculate2?i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"phone-fill","label-position":t.labelPosition,label:"原价(元)",prop:"originalPrice2","label-width":"300"}},[i("u-input",{attrs:{border:t.border,placeholder:"请输入原价",type:"number"},model:{value:t.model2.originalPrice2,callback:function(e){t.$set(t.model2,"originalPrice2",e)},expression:"model2.originalPrice2"}})],1):t._e()],1)],1),i("v-uni-view",[i("u-row",{attrs:{justify:"space-around"}},[i("u-col",{attrs:{span:"6"}},[i("u-button",{attrs:{shape:"square",ripple:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._reset2.apply(void 0,arguments)}}},[t._v("清空")])],1),i("u-col",{attrs:{span:"6"}},[i("u-button",{attrs:{shape:"square",type:"primary",ripple:!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._calculate2.apply(void 0,arguments)}}},[t._v("计算")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},r=[]},f438:function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-radio-group[data-v-462894bc]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}',""]),t.exports=e},fb69:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){return a}));var a={uIcon:i("cd36").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{},[i("v-uni-view",{staticClass:"u-navbar",class:{"u-navbar-fixed":t.isFixed,"u-border-bottom":t.borderBottom},style:[t.navbarStyle]},[i("v-uni-view",{staticClass:"u-status-bar",style:{height:t.statusBarHeight+"px"}}),i("v-uni-view",{staticClass:"u-navbar-inner",style:[t.navbarInnerStyle]},[t.isBack?i("v-uni-view",{staticClass:"u-back-wrap",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goBack.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"u-icon-wrap"},[i("u-icon",{attrs:{name:t.backIconName,color:t.backIconColor,size:t.backIconSize}})],1),t.backText?i("v-uni-view",{staticClass:"u-icon-wrap u-back-text u-line-1",style:[t.backTextStyle]},[t._v(t._s(t.backText))]):t._e()],1):t._e(),t.title?i("v-uni-view",{staticClass:"u-navbar-content-title",style:[t.titleStyle]},[i("v-uni-view",{staticClass:"u-title u-line-1",style:{color:t.titleColor,fontSize:t.titleSize+"rpx"}},[t._v(t._s(t.title))])],1):t._e(),i("v-uni-view",{staticClass:"u-slot-content"},[t._t("default")],2),i("v-uni-view",{staticClass:"u-slot-right"},[t._t("right")],2)],1)],1),t.isFixed&&!t.immersive?i("v-uni-view",{staticClass:"u-navbar-placeholder",style:{width:"100%",height:Number(t.navbarHeight)+t.statusBarHeight+"px"}}):t._e()],1)},r=[]}}]);