(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-User-Register"],{"0079":function(e,t,i){"use strict";i.r(t);var r=i("d0d9"),n=i("fc45");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("c4da");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"23f00fb2",null,!1,r["a"],o);t["default"]=l.exports},"0d04":function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-code-wrap"})},a=[]},"0ee5":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var r={uIcon:i("cd36").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"u-checkbox",style:[e.checkboxStyle]},[i("v-uni-view",{staticClass:"u-checkbox__icon-wrap",class:[e.iconClass],style:[e.iconStyle],on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggle.apply(void 0,arguments)}}},[i("u-icon",{staticClass:"u-checkbox__icon-wrap__icon",attrs:{name:"checkbox-mark",size:e.checkboxIconSize,color:e.iconColor}})],1),i("v-uni-view",{staticClass:"u-checkbox__label",style:{fontSize:e.$u.addUnit(e.labelSize)},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickLabel.apply(void 0,arguments)}}},[e._t("default")],2)],1)},a=[]},1199:function(e,t,i){"use strict";var r=i("8c0d"),n=i.n(r);n.a},1809:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-checkbox[data-v-e356a272]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none;line-height:1.8}.u-checkbox__icon-wrap[data-v-e356a272]{color:#606266;-webkit-box-flex:0;-webkit-flex:none;flex:none;display:-webkit-flex;\r\ndisplay:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-sizing:border-box;box-sizing:border-box;width:%?42?%;height:%?42?%;color:transparent;text-align:center;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color;font-size:20px;border:1px solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s}.u-checkbox__icon-wrap--circle[data-v-e356a272]{-webkit-border-radius:100%;border-radius:100%}.u-checkbox__icon-wrap--square[data-v-e356a272]{-webkit-border-radius:%?6?%;border-radius:%?6?%}.u-checkbox__icon-wrap--checked[data-v-e356a272]{color:#fff;background-color:#2979ff;border-color:#2979ff}.u-checkbox__icon-wrap--disabled[data-v-e356a272]{background-color:#ebedf0;border-color:#c8c9cc}.u-checkbox__icon-wrap--disabled--checked[data-v-e356a272]{color:#c8c9cc!important}.u-checkbox__label[data-v-e356a272]{word-wrap:break-word;margin-left:%?10?%;margin-right:%?24?%;color:#606266;font-size:%?30?%}.u-checkbox__label--disabled[data-v-e356a272]{color:#c8c9cc}',""]),e.exports=t},"1f61":function(e,t,i){"use strict";var r=i("b9eb"),n=i.n(r);n.a},"283b":function(e,t,i){"use strict";i.r(t);var r=i("b96e"),n=i("70ad");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("7c93");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"09e7d296",null,!1,r["a"],o);t["default"]=l.exports},3197:function(e,t,i){"use strict";i("a9e3"),i("ac1f"),i("5319"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"u-verification-code",props:{seconds:{type:[String,Number],default:60},startText:{type:String,default:"获取验证码"},changeText:{type:String,default:"X秒重新获取"},endText:{type:String,default:"重新获取"},keepRunning:{type:Boolean,default:!1},uniqueKey:{type:String,default:""}},data:function(){return{secNum:this.seconds,timer:null,canGetCode:!0}},mounted:function(){this.checkKeepRunning()},watch:{seconds:{immediate:!0,handler:function(e){this.secNum=e}}},methods:{checkKeepRunning:function(){var e=Number(uni.getStorageSync(this.uniqueKey+"_$uCountDownTimestamp"));if(!e)return this.changeEvent(this.startText);var t=Math.floor(+new Date/1e3);this.keepRunning&&e&&e>t?(this.secNum=e-t,uni.removeStorageSync(this.uniqueKey+"_$uCountDownTimestamp"),this.start()):this.changeEvent(this.startText)},start:function(){var e=this;this.timer&&(clearInterval(this.timer),this.timer=null),this.$emit("start"),this.canGetCode=!1,this.changeEvent(this.changeText.replace(/x|X/,this.secNum)),this.setTimeToStorage(),this.timer=setInterval((function(){--e.secNum?e.changeEvent(e.changeText.replace(/x|X/,e.secNum)):(clearInterval(e.timer),e.timer=null,e.changeEvent(e.endText),e.secNum=e.seconds,e.$emit("end"),e.canGetCode=!0)}),1e3)},reset:function(){this.canGetCode=!0,clearInterval(this.timer),this.secNum=this.seconds,this.changeEvent(this.endText)},changeEvent:function(e){this.$emit("change",e)},setTimeToStorage:function(){if(this.keepRunning&&this.timer&&this.secNum>0&&this.secNum<=this.seconds){var e=Math.floor(+new Date/1e3);uni.setStorage({key:this.uniqueKey+"_$uCountDownTimestamp",data:e+Number(this.secNum)})}}},beforeDestroy:function(){this.setTimeToStorage(),clearTimeout(this.timer),this.timer=null}};t.default=r},4731:function(e,t,i){"use strict";i("c975"),i("a9e3"),i("d3b7"),i("ac1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"u-button",props:{hairLine:{type:Boolean,default:!0},type:{type:String,default:"default"},size:{type:String,default:"default"},shape:{type:String,default:"square"},plain:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},openType:{type:String,default:""},formType:{type:String,default:""},appParameter:{type:String,default:""},hoverStopPropagation:{type:Boolean,default:!1},lang:{type:String,default:"en"},sessionFrom:{type:String,default:""},sendMessageTitle:{type:String,default:""},sendMessagePath:{type:String,default:""},sendMessageImg:{type:String,default:""},showMessageCard:{type:Boolean,default:!1},hoverBgColor:{type:String,default:""},rippleBgColor:{type:String,default:""},ripple:{type:Boolean,default:!1},hoverClass:{type:String,default:""},customStyle:{type:Object,default:function(){return{}}},dataName:{type:String,default:""},throttleTime:{type:[String,Number],default:1e3},hoverStartTime:{type:[String,Number],default:20},hoverStayTime:{type:[String,Number],default:150}},computed:{getHoverClass:function(){if(this.loading||this.disabled||this.ripple||this.hoverClass)return"";var e="";return e=this.plain?"u-"+this.type+"-plain-hover":"u-"+this.type+"-hover",e},showHairLineBorder:function(){return["primary","success","error","warning"].indexOf(this.type)>=0&&!this.plain?"":"u-hairline-border"}},data:function(){return{rippleTop:0,rippleLeft:0,fields:{},waveActive:!1}},methods:{click:function(e){var t=this;this.$u.throttle((function(){!0!==t.loading&&!0!==t.disabled&&(t.ripple&&(t.waveActive=!1,t.$nextTick((function(){this.getWaveQuery(e)}))),t.$emit("click",e))}),this.throttleTime)},getWaveQuery:function(e){var t=this;this.getElQuery().then((function(i){var r=i[0];if(r.width&&r.width&&(r.targetWidth=r.height>r.width?r.height:r.width,r.targetWidth)){t.fields=r;var n="",a="";n=e.touches[0].clientX,a=e.touches[0].clientY,t.rippleTop=a-r.top-r.targetWidth/2,t.rippleLeft=n-r.left-r.targetWidth/2,t.$nextTick((function(){t.waveActive=!0}))}}))},getElQuery:function(){var e=this;return new Promise((function(t){var i="";i=uni.createSelectorQuery().in(e),i.select(".u-btn").boundingClientRect(),i.exec((function(e){t(e)}))}))},getphonenumber:function(e){this.$emit("getphonenumber",e)},getuserinfo:function(e){this.$emit("getuserinfo",e)},error:function(e){this.$emit("error",e)},opensetting:function(e){this.$emit("opensetting",e)},launchapp:function(e){this.$emit("launchapp",e)}}};t.default=r},"4ed5":function(e,t,i){"use strict";i.r(t);var r=i("0d04"),n=i("7d49");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("1f61");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"7412e1a8",null,!1,r["a"],o);t["default"]=l.exports},"5ac4":function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-code-wrap[data-v-7412e1a8]{width:0;height:0;position:fixed;z-index:-1}',""]),e.exports=t},"70ad":function(e,t,i){"use strict";i.r(t);var r=i("8c41"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},"7c93":function(e,t,i){"use strict";var r=i("fd80"),n=i.n(r);n.a},"7d49":function(e,t,i){"use strict";i.r(t);var r=i("3197"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},"85b5":function(e,t,i){"use strict";i("a15b"),i("d81d"),i("a9e3"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={name:"u-checkbox",props:{name:{type:[String,Number],default:""},shape:{type:String,default:""},value:{type:Boolean,default:!1},disabled:{type:[String,Boolean],default:""},labelDisabled:{type:[String,Boolean],default:""},activeColor:{type:String,default:""},iconSize:{type:[String,Number],default:""},labelSize:{type:[String,Number],default:""},size:{type:[String,Number],default:""}},data:function(){return{parentDisabled:!1,newParams:{}}},created:function(){this.parent=this.$u.$parent.call(this,"u-checkbox-group"),this.parent&&this.parent.children.push(this)},computed:{isDisabled:function(){return""!==this.disabled?this.disabled:!!this.parent&&this.parent.disabled},isLabelDisabled:function(){return""!==this.labelDisabled?this.labelDisabled:!!this.parent&&this.parent.labelDisabled},checkboxSize:function(){return this.size?this.size:this.parent?this.parent.size:34},checkboxIconSize:function(){return this.iconSize?this.iconSize:this.parent?this.parent.iconSize:20},elActiveColor:function(){return this.activeColor?this.activeColor:this.parent?this.parent.activeColor:"primary"},elShape:function(){return this.shape?this.shape:this.parent?this.parent.shape:"square"},iconStyle:function(){var e={};return this.elActiveColor&&this.value&&!this.isDisabled&&(e.borderColor=this.elActiveColor,e.backgroundColor=this.elActiveColor),e.width=this.$u.addUnit(this.checkboxSize),e.height=this.$u.addUnit(this.checkboxSize),e},iconColor:function(){return this.value?"#ffffff":"transparent"},iconClass:function(){var e=[];return e.push("u-checkbox__icon-wrap--"+this.elShape),1==this.value&&e.push("u-checkbox__icon-wrap--checked"),this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled"),this.value&&this.isDisabled&&e.push("u-checkbox__icon-wrap--disabled--checked"),e.join(" ")},checkboxStyle:function(){var e={};return this.parent&&this.parent.width&&(e.width=this.parent.width,e.flex="0 0 ".concat(this.parent.width)),this.parent&&this.parent.wrap&&(e.width="100%",e.flex="0 0 100%"),e}},methods:{onClickLabel:function(){this.isLabelDisabled||this.isDisabled||this.setValue()},toggle:function(){this.isDisabled||this.setValue()},emitEvent:function(){var e=this;this.$emit("change",{value:!this.value,name:this.name}),setTimeout((function(){e.parent&&e.parent.emitEvent&&e.parent.emitEvent()}),80)},setValue:function(){var e=0;if(this.parent&&this.parent.children&&this.parent.children.map((function(t){t.value&&e++})),1==this.value)this.emitEvent(),this.$emit("input",!this.value);else{if(this.parent&&e>=this.parent.max)return this.$u.toast("最多可选".concat(this.parent.max,"项"));this.emitEvent(),this.$emit("input",!this.value)}}}};t.default=r},"8c0d":function(e,t,i){var r=i("1809");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("58e6bca3",r,!0,{sourceMap:!1,shadowMode:!1})},"8c41":function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){var e=this;return{model:{name:"",agreement:!1,district:"",area:"",dBName:"",phone:"",code:"",password:"",rePassword:"",accountStyle:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:5,message:"姓名长度在2到5个字符",trigger:["change","blur"]},{validator:function(t,i,r){return e.$u.test.chinese(i)},message:"姓名必须为中文",trigger:["change","blur"]}],district:[{required:!0,message:"请选择城区",trigger:"change"}],area:[{required:!0,message:"请选择街道",trigger:"change"}],accountStyle:[{required:!0,message:"请选择用户类型",trigger:"change"}],phone:[{required:!0,message:"请输入手机号",trigger:["change","blur"]},{validator:function(t,i,r){return e.$u.test.mobile(i)},message:"手机号码不正确",trigger:["change","blur"]},{asyncValidator:function(t,i,r){e.$u.get(e.global_data.global_data.BaseUrl+"IfTelRegistered",{Tel:i}).then((function(e){"TelExist"===e.Result?r(new Error("已注册")):r()}))},message:"已注册",trigger:["change","blur"]}],code:[{required:!0,message:"请输入验证码",trigger:["change","blur"]},{type:"number",message:"验证码只能为数字",trigger:["change","blur"]}],password:[{required:!0,message:"请输入密码",trigger:["change","blur"]},{pattern:/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,message:"需同时含有字母和数字，长度在6-12之间",trigger:["change","blur"]}],rePassword:[{required:!0,message:"请重新输入密码",trigger:["change","blur"]},{validator:function(t,i,r){return i===e.model.password},message:"两次输入的密码不相等",trigger:["change","blur"]}]},border:!1,check:!1,codeTips:"",district:"",area:"",accountStyle:"",districtList:[],areaList:[],accountStyleList:["独立经纪人","物业管理中心"],labelPosition:"left",districtListShow:!1,areaListShow:!1,accountStyleListShow:!1}},onLoad:function(){this.getDistrictsByCity("cd")},onReady:function(){this.$refs.uForm.setRules(this.rules)},methods:{districtListCallback:function(t){this.district=this.districtList[t].town,this.model.district=this.districtList[t].town,e("log",this.model.district," at pages/User/Register.vue:235"),this.getAreaByDistrict(this.model.district)},areaListCallback:function(t){this.area=this.areaList[t].dbName,e("log",t," at pages/User/Register.vue:241"),this.model.dBName=this.areaList[t].dbName,this.model.area=this.areaList[t].village},accountStyleListShowCallback:function(e){this.accountStyle=this.accountStyleList[e],this.model.accountStyle=this.accountStyleList[e]},submit:function(){var e=this;this.$refs.uForm.validate((function(t){if(t){if(!e.model.agreement)return e.$u.toast("请勾选协议");e.register()}}))},register:function(){var t=this;this.$u.get(this.global_data.global_data.BaseUrl+"ApplyForRegister",{DBName:this.model.dBName,EmpNo:"",Tel:this.model.phone,Password:this.model.password,EmpName:this.model.name,AccountStyle:this.model.accountStyle}).then((function(i){e("log",i," at pages/User/Register.vue:273"),t.$u.toast(i.Msg),"success"===i.Flag&&uni.navigateBack({delta:1})}))},getDistrictsByCity:function(t){var i=this;this.$u.get(this.global_data.global_data.BaseUrl+"GetAllDistrictByCity",{CityName:t}).then((function(t){e("log",t," at pages/User/Register.vue:288"),i.districtList=t.Result}))},getAreaByDistrict:function(t){var i=this;e("log",t," at pages/User/Register.vue:295"),this.$u.get(this.global_data.global_data.BaseUrl+"GetAllAreaByDistrict",{DistrictName:t}).then((function(e){i.areaList=e.Result}))},checkboxChange:function(e){this.model.agreement=e.value},regionConfirm:function(e){this.model.region=e.province.label+"-"+e.city.label+"-"+e.area.label},codeChange:function(e){this.codeTips=e},getCode:function(){var e=this;this.$refs.uCode.canGetCode?(this.$u.get(this.global_data.global_data.BaseUrl+"GetTelCode",{Tel:this.model.phone}).then((function(t){e.code=t.Result})),uni.showLoading({title:"正在获取验证码",mask:!0}),setTimeout((function(){uni.hideLoading(),e.$u.toast("验证码已发送"),e.$refs.uCode.start()}),2e3)):this.$u.toast("倒计时结束后再发送")}}};t.default=i}).call(this,i("0de9")["log"])},b6d2:function(e,t,i){"use strict";i.r(t);var r=i("0ee5"),n=i("ffb1");for(var a in n)"default"!==a&&function(e){i.d(t,e,(function(){return n[e]}))}(a);i("1199");var o,s=i("f0c5"),l=Object(s["a"])(n["default"],r["b"],r["c"],!1,null,"e356a272",null,!1,r["a"],o);t["default"]=l.exports},b96e:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var r={uNavbar:i("bca0").default,uForm:i("f506").default,uFormItem:i("2ade").default,uInput:i("2016").default,uButton:i("0079").default,uCheckbox:i("b6d2").default,uPicker:i("ace8").default,uVerificationCode:i("4ed5").default},n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",[i("v-uni-view",{staticClass:"content"},[i("u-navbar",{attrs:{"is-back":"true",title:"注册"}}),i("u-form",{ref:"uForm",attrs:{model:e.model,rules:e.rules,errorType:"message"}},[i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"map-fill","label-position":e.labelPosition,label:"城区",prop:"district","label-width":"170"}},[i("u-input",{attrs:{border:e.border,type:"select","select-open":e.districtListShow,placeholder:"请选择城区"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.districtListShow=!0}},model:{value:e.model.district,callback:function(t){e.$set(e.model,"district",t)},expression:"model.district"}})],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"map-fill","label-position":e.labelPosition,label:"街道",prop:"area","label-width":"170"}},[i("u-input",{attrs:{border:e.border,type:"select","select-open":e.areaListShow,placeholder:"请选择街道"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.areaListShow=!0}},model:{value:e.model.area,callback:function(t){e.$set(e.model,"area",t)},expression:"model.area"}})],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"map-fill","label-position":e.labelPosition,label:"用户类型",prop:"accountStyle","label-width":"170"}},[i("u-input",{attrs:{border:e.border,type:"select","select-open":e.accountStyleListShow,placeholder:"请选择用户类型"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.accountStyleListShow=!0}},model:{value:e.model.accountStyle,callback:function(t){e.$set(e.model,"accountStyle",t)},expression:"model.accountStyle"}})],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"phone-fill","label-position":e.labelPosition,label:"手机号码",prop:"phone","label-width":"170"}},[i("u-input",{attrs:{border:e.border,placeholder:"请输入手机号",type:"number"},model:{value:e.model.phone,callback:function(t){e.$set(e.model,"phone",t)},expression:"model.phone"}})],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"chat-fill","label-position":e.labelPosition,label:"验证码",prop:"code","label-width":"170"}},[i("u-input",{attrs:{border:e.border,placeholder:"请输入验证码",type:"text"},model:{value:e.model.code,callback:function(t){e.$set(e.model,"code",t)},expression:"model.code"}}),i("u-button",{attrs:{slot:"right",type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.getCode.apply(void 0,arguments)}},slot:"right"},[e._v(e._s(e.codeTips))])],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"lock","label-position":e.labelPosition,label:"密码",prop:"password","label-width":"170"}},[i("u-input",{attrs:{"password-icon":!0,border:e.border,type:"password",placeholder:"请输入密码"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"lock","label-position":e.labelPosition,label:"确认密码","label-width":"170",prop:"rePassword"}},[i("u-input",{attrs:{border:e.border,type:"password",placeholder:"请确认密码"},model:{value:e.model.rePassword,callback:function(t){e.$set(e.model,"rePassword",t)},expression:"model.rePassword"}})],1),i("u-form-item",{attrs:{leftIconStyle:{color:"#888",fontSize:"32rpx"},"left-icon":"account","label-width":"170","label-position":e.labelPosition,label:"姓名",prop:"name"}},[i("u-input",{attrs:{border:e.border,placeholder:"请输入姓名",type:"text"},model:{value:e.model.name,callback:function(t){e.$set(e.model,"name",t)},expression:"model.name"}})],1)],1),i("v-uni-view",{staticClass:"agreement"},[i("u-checkbox",{on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.checkboxChange.apply(void 0,arguments)}},model:{value:e.check,callback:function(t){e.check=t},expression:"check"}}),i("v-uni-view",{staticClass:"agreement-text"},[e._v("勾选代表同意军军房产的用户协议")])],1),i("u-button",{attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("注册")]),i("u-picker",{attrs:{mode:"selector","range-key":"town","default-selector":[0],range:e.districtList},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.districtListCallback.apply(void 0,arguments)}},model:{value:e.districtListShow,callback:function(t){e.districtListShow=t},expression:"districtListShow"}}),i("u-picker",{attrs:{mode:"selector","range-key":"village","default-selector":[0],range:e.areaList},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.areaListCallback.apply(void 0,arguments)}},model:{value:e.areaListShow,callback:function(t){e.areaListShow=t},expression:"areaListShow"}}),i("u-picker",{attrs:{mode:"selector","default-selector":[0],range:e.accountStyleList},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.accountStyleListShowCallback.apply(void 0,arguments)}},model:{value:e.accountStyleListShow,callback:function(t){e.accountStyleListShow=t},expression:"accountStyleListShow"}}),i("u-verification-code",{ref:"uCode",attrs:{seconds:"60"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.codeChange.apply(void 0,arguments)}}})],1)],1)},a=[]},b9eb:function(e,t,i){var r=i("5ac4");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("b32ed9e6",r,!0,{sourceMap:!1,shadowMode:!1})},c4da:function(e,t,i){"use strict";var r=i("ff35"),n=i.n(r);n.a},d0d9:function(e,t,i){"use strict";var r;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){return r}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-button",{staticClass:"u-btn u-line-1 u-fix-ios-appearance",class:["u-size-"+e.size,e.plain?"u-btn--"+e.type+"--plain":"",e.loading?"u-loading":"","circle"==e.shape?"u-round-circle":"",e.hairLine?e.showHairLineBorder:"u-btn--bold-border","u-btn--"+e.type,e.disabled?"u-btn--"+e.type+"--disabled":""],style:[e.customStyle,{overflow:e.ripple?"hidden":"visible"}],attrs:{id:"u-wave-btn","hover-start-time":Number(e.hoverStartTime),"hover-stay-time":Number(e.hoverStayTime),disabled:e.disabled,"form-type":e.formType,"open-type":e.openType,"app-parameter":e.appParameter,"hover-stop-propagation":e.hoverStopPropagation,"send-message-title":e.sendMessageTitle,"send-message-path":"sendMessagePath",lang:e.lang,"data-name":e.dataName,"session-from":e.sessionFrom,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"hover-class":e.getHoverClass,loading:e.loading},on:{getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.getphonenumber.apply(void 0,arguments)},getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.getuserinfo.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.error.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=e.$handleEvent(t),e.opensetting.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=e.$handleEvent(t),e.launchapp.apply(void 0,arguments)},click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.click(t)}}},[e._t("default"),e.ripple?i("v-uni-view",{staticClass:"u-wave-ripple",class:[e.waveActive?"u-wave-active":""],style:{top:e.rippleTop+"px",left:e.rippleLeft+"px",width:e.fields.targetWidth+"px",height:e.fields.targetWidth+"px","background-color":e.rippleBgColor||"rgba(0, 0, 0, 0.15)"}}):e._e()],2)},a=[]},ed4e:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-09e7d296]{padding:0 %?40?%}.agreement[data-v-09e7d296]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:%?40?% 0}.agreement .agreement-text[data-v-09e7d296]{padding-left:%?8?%;color:#909399}',""]),e.exports=t},fa1e:function(e,t,i){var r=i("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-btn[data-v-23f00fb2]::after{border:none}.u-btn[data-v-23f00fb2]{position:relative;border:0;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;overflow:visible;line-height:1;\r\ndisplay:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;\r\n-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;cursor:pointer;padding:0 %?40?%;z-index:1;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transition:all .15s;transition:all .15s}.u-btn--bold-border[data-v-23f00fb2]{border:1px solid #fff}.u-btn--default[data-v-23f00fb2]{color:#606266;border-color:#c0c4cc;background-color:#fff}.u-btn--primary[data-v-23f00fb2]{color:#fff;border-color:#2979ff;background-color:#2979ff}.u-btn--success[data-v-23f00fb2]{color:#fff;border-color:#19be6b;background-color:#19be6b}.u-btn--error[data-v-23f00fb2]{color:#fff;border-color:#fa3534;background-color:#fa3534}.u-btn--warning[data-v-23f00fb2]{color:#fff;border-color:#f90;background-color:#f90}.u-btn--default--disabled[data-v-23f00fb2]{color:#fff;border-color:#e4e7ed;background-color:#fff}.u-btn--primary--disabled[data-v-23f00fb2]{color:#fff!important;border-color:#a0cfff!important;background-color:#a0cfff!important}.u-btn--success--disabled[data-v-23f00fb2]{color:#fff!important;border-color:#71d5a1!important;background-color:#71d5a1!important}.u-btn--error--disabled[data-v-23f00fb2]{color:#fff!important;border-color:#fab6b6!important;background-color:#fab6b6!important}.u-btn--warning--disabled[data-v-23f00fb2]{color:#fff!important;border-color:#fcbd71!important;background-color:#fcbd71!important}.u-btn--primary--plain[data-v-23f00fb2]{color:#2979ff!important;border-color:#a0cfff!important;background-color:#ecf5ff!important}.u-btn--success--plain[data-v-23f00fb2]{color:#19be6b!important;border-color:#71d5a1!important;background-color:#dbf1e1!important}.u-btn--error--plain[data-v-23f00fb2]{color:#fa3534!important;border-color:#fab6b6!important;background-color:#fef0f0!important}.u-btn--warning--plain[data-v-23f00fb2]{color:#f90!important;border-color:#fcbd71!important;background-color:#fdf6ec!important}.u-hairline-border[data-v-23f00fb2]:after{content:" ";position:absolute;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;left:0;top:0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:1px solid currentColor;z-index:1}.u-wave-ripple[data-v-23f00fb2]{z-index:0;position:absolute;-webkit-border-radius:100%;border-radius:100%;background-clip:padding-box;pointer-events:none;-webkit-user-select:none;user-select:none;-webkit-transform:scale(0);transform:scale(0);opacity:1;-webkit-transform-origin:center;transform-origin:center}.u-wave-ripple.u-wave-active[data-v-23f00fb2]{opacity:0;-webkit-transform:scale(2);transform:scale(2);-webkit-transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,-webkit-transform .4s linear;transition:opacity 1s linear,transform .4s linear;transition:opacity 1s linear,transform .4s linear,-webkit-transform .4s linear}.u-round-circle[data-v-23f00fb2]{-webkit-border-radius:%?100?%;border-radius:%?100?%}.u-round-circle[data-v-23f00fb2]::after{-webkit-border-radius:%?100?%;border-radius:%?100?%}.u-loading[data-v-23f00fb2]::after{background-color:hsla(0,0%,100%,.35)}.u-size-default[data-v-23f00fb2]{font-size:%?30?%;height:%?80?%;line-height:%?80?%}.u-size-medium[data-v-23f00fb2]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?26?%;height:%?70?%;line-height:%?70?%;padding:0 %?80?%}.u-size-mini[data-v-23f00fb2]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;width:auto;font-size:%?22?%;padding-top:1px;height:%?50?%;line-height:%?50?%;padding:0 %?20?%}.u-primary-plain-hover[data-v-23f00fb2]{color:#fff!important;background:#2b85e4!important}.u-default-plain-hover[data-v-23f00fb2]{color:#2b85e4!important;background:#ecf5ff!important}.u-success-plain-hover[data-v-23f00fb2]{color:#fff!important;background:#18b566!important}.u-warning-plain-hover[data-v-23f00fb2]{color:#fff!important;background:#f29100!important}.u-error-plain-hover[data-v-23f00fb2]{color:#fff!important;background:#dd6161!important}.u-info-plain-hover[data-v-23f00fb2]{color:#fff!important;background:#82848a!important}.u-default-hover[data-v-23f00fb2]{color:#2b85e4!important;border-color:#2b85e4!important;background-color:#ecf5ff!important}.u-primary-hover[data-v-23f00fb2]{background:#2b85e4!important;color:#fff}.u-success-hover[data-v-23f00fb2]{background:#18b566!important;color:#fff}.u-info-hover[data-v-23f00fb2]{background:#82848a!important;color:#fff}.u-warning-hover[data-v-23f00fb2]{background:#f29100!important;color:#fff}.u-error-hover[data-v-23f00fb2]{background:#dd6161!important;color:#fff}',""]),e.exports=t},fc45:function(e,t,i){"use strict";i.r(t);var r=i("4731"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a},fd80:function(e,t,i){var r=i("ed4e");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("b2dd2abe",r,!0,{sourceMap:!1,shadowMode:!1})},ff35:function(e,t,i){var r=i("fa1e");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=i("4f06").default;n("6104d888",r,!0,{sourceMap:!1,shadowMode:!1})},ffb1:function(e,t,i){"use strict";i.r(t);var r=i("85b5"),n=i.n(r);for(var a in r)"default"!==a&&function(e){i.d(t,e,(function(){return r[e]}))}(a);t["default"]=n.a}}]);