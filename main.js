import Vue from 'vue'
import App from './App'
import uView from "uview-ui"
import global_data from './store/index.js'

Vue.config.productionTip = false
Vue.use(uView);

Vue.prototype.global_data = global_data;
/* 
Vue.prototype.global_BaseUrl = 'http://47.108.202.57:8087/WebService.asmx/';
Vue.prototype.global_DBName = '';
Vue.prototype.global_EmpID = '';
Vue.prototype.global_EmpName = '';
Vue.prototype.global_PhotoUrl = '';
Vue.prototype.global_AccountStyle = '';
Vue.prototype.global_Tel = '';
Vue.prototype.global_EmpNo = '';
 */
App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
