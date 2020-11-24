import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

const store = new Vuex.Store({
	state:{
		server: 'http://47.108.202.57:8087/WebService.asmx',
		outerServer: 'https://gl.junjunhouse.com',
		user: {
			DBName: '',
			EmpID: '',
			EmpName: '',
			PhotoUrl: '',
			AccountStyle: '',
			FollowArea:'',
			Tel: '',
			EmpNo: ''
		},
		city: {
			cityName:'成都',
			cityPinYin:'chengdu'
		},
		logged: false
	},
	
	mutations:{
		saveUser(state, user){
			state.user = user;
		},
		
		saveCity(state, city){
			state.city = city;
		},
		
		// bool status
		changeStatus(state, status){
			state.logged = status;
		},
		
		login(state, user){
			state.user = user;
			state.logged = true;
		},
		
		logout(state){
			state.user = {
				DBName: '',
				EmpID: '',
				EmpName: '',
				PhotoUrl: '',
				AccountStyle: '',
				FollowArea:'',
				Tel: '',
				EmpNo: ''
			};
			state.logged = false;
		}
	}
})

export default store

