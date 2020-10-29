
var isReady=false;var onReadyCallbacks=[];
var isServiceReady=false;var onServiceReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/Home/Home","pages/HouseManage/HouseList","pages/HouseManage/EstateSelector","pages/HouseManage/HouseDetail","pages/HouseManage/HouseGrabList","pages/HouseManage/HouseDetail2","pages/HouseManage/HouseFollowUp","pages/HouseManage/NewHouseFollowUp","pages/HouseManage/map","pages/HouseManage/map2","pages/HouseManage/map3","pages/HouseManage/mapHouseList","pages/Home/location","pages/CustomerManage/CustomerList","pages/CustomerManage/CustomerDetail","pages/CustomerManage/CustomerFollowUp","pages/CustomerManage/NewCustomerFollowUp","pages/User/me","pages/User/ResetPassword","pages/User/Register","pages/User/EditUserInfo","pages/HouseManage/OuterNet","pages/Home/About","pages/User/FollowArea","pages/Calculator/taxCalculator2","pages/Calculator/loanCalculator2","pages/HouseManage/NewHouse","pages/CustomerManage/NewCustomer"],"window":{"navigationBarTextStyle":"white","navigationBarTitleText":"JunJun","navigationBarBackgroundColor":"#007AFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"#fff","selectedColor":"#2196f3","backgroundColor":"#FFFFFF","list":[{"pagePath":"pages/Home/Home","iconPath":"/static/icon/home.png","selectedIconPath":"/static/icon/home_sel.png","text":"首页"},{"pagePath":"pages/HouseManage/HouseList","iconPath":"/static/icon/building.png","selectedIconPath":"/static/icon/building_sel.png","text":"房源管理"},{"pagePath":"pages/CustomerManage/CustomerList","iconPath":"/static/icon/people.png","selectedIconPath":"/static/icon/people_sel.png","text":"客源管理"},{"pagePath":"pages/User/me","iconPath":"/static/icon/me.png","selectedIconPath":"/static/icon/me_sel.png","text":"我的"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"房串串经纪人版","compilerVersion":"2.9.3","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true},"window":{"navigationBarTitleText":"登录","navigationStyle":"custom"}},{"path":"/pages/Home/Home","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"首页","navigationStyle":"custom"}},{"path":"/pages/HouseManage/HouseList","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"房源管理","navigationStyle":"custom","enablePullDownRefresh":true}},{"path":"/pages/HouseManage/EstateSelector","meta":{},"window":{"navigationBarTitleText":"搜索小区","navigationStyle":"custom"}},{"path":"/pages/HouseManage/HouseDetail","meta":{},"window":{"navigationBarTitleText":"房源详情","navigationStyle":"custom"}},{"path":"/pages/HouseManage/HouseGrabList","meta":{},"window":{"navigationBarTitleText":"抢房列表","navigationStyle":"custom"}},{"path":"/pages/HouseManage/HouseDetail2","meta":{},"window":{"navigationBarTitleText":"房源详情","navigationStyle":"custom"}},{"path":"/pages/HouseManage/HouseFollowUp","meta":{},"window":{"navigationBarTitleText":"看跟进","navigationStyle":"custom"}},{"path":"/pages/HouseManage/NewHouseFollowUp","meta":{},"window":{"navigationBarTitleText":"写跟进","navigationStyle":"custom"}},{"path":"/pages/HouseManage/map","meta":{"isNVue":true},"window":{"navigationBarTitleText":"地图找房","navigationStyle":"custom"}},{"path":"/pages/HouseManage/map2","meta":{},"window":{"navigationBarTitleText":"地图找房","navigationStyle":"custom"}},{"path":"/pages/HouseManage/map3","meta":{},"window":{"navigationBarTitleText":"地图找房","navigationStyle":"custom"}},{"path":"/pages/HouseManage/mapHouseList","meta":{},"window":{"navigationBarTitleText":"地图房源列表","navigationStyle":"custom"}},{"path":"/pages/Home/location","meta":{},"window":{"navigationBarTitleText":"城市定位","navigationStyle":"custom"}},{"path":"/pages/CustomerManage/CustomerList","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"客源管理","navigationStyle":"custom","enablePullDownRefresh":true}},{"path":"/pages/CustomerManage/CustomerDetail","meta":{},"window":{"navigationBarTitleText":"客源详情","navigationStyle":"custom"}},{"path":"/pages/CustomerManage/CustomerFollowUp","meta":{},"window":{"navigationBarTitleText":"看跟进","navigationStyle":"custom"}},{"path":"/pages/CustomerManage/NewCustomerFollowUp","meta":{},"window":{"navigationBarTitleText":"写跟进","navigationStyle":"custom"}},{"path":"/pages/User/me","meta":{"isQuit":true,"isTabBar":true},"window":{"navigationBarTitleText":"我的","navigationStyle":"custom"}},{"path":"/pages/User/ResetPassword","meta":{},"window":{"navigationBarTitleText":"重置密码","navigationStyle":"custom"}},{"path":"/pages/User/Register","meta":{},"window":{"navigationBarTitleText":"注册","navigationStyle":"custom"}},{"path":"/pages/User/EditUserInfo","meta":{},"window":{"navigationBarTitleText":"修改用户信息","navigationStyle":"custom"}},{"path":"/pages/HouseManage/OuterNet","meta":{},"window":{"navigationBarTitleText":"全网房源","navigationStyle":"custom"}},{"path":"/pages/Home/About","meta":{},"window":{"navigationBarTitleText":"关于","navigationStyle":"custom"}},{"path":"/pages/User/FollowArea","meta":{},"window":{"navigationBarTitleText":"关注区域","navigationStyle":"custom"}},{"path":"/pages/Calculator/taxCalculator2","meta":{},"window":{"navigationBarTitleText":"税费计算器","navigationStyle":"custom"}},{"path":"/pages/Calculator/loanCalculator2","meta":{},"window":{"navigationBarTitleText":"房贷计算器","navigationStyle":"custom"}},{"path":"/pages/HouseManage/NewHouse","meta":{},"window":{"navigationBarTitleText":"新增房源","navigationStyle":"custom"}},{"path":"/pages/CustomerManage/NewCustomer","meta":{},"window":{"navigationBarTitleText":"新增客源","navigationStyle":"custom"}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
__uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:void 0,window:void 0,document:void 0,frames:void 0,self:void 0,location:void 0,navigator:void 0,localStorage:void 0,history:void 0,Caches:void 0,screen:void 0,alert:void 0,confirm:void 0,prompt:void 0,fetch:void 0,XMLHttpRequest:void 0,WebSocket:void 0,webkit:void 0,print:void 0}}}});
