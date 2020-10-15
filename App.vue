<script>
	export default {
		/* globalData:{
			global_BaseUrl: 'http://47.108.202.57:8087/WebService.asmx/',
			global_DBName: '',
			global_EmpID: '',
			global_EmpName: '',
			global_PhotoUrl: '',
			global_AccountStyle: '',
			global_Tel: '',
			global_EmpNo: '',
		}, */
		onLaunch: function() {
			console.log('App Launch');
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		}
	};
</script>

<style lang="scss">
	@import "uview-ui/index.scss";
	
	/* 解决头条小程序组件内引入字体不生效的问题 */
	/* #ifdef MP-TOUTIAO */
	@font-face {
		font-family: uniicons;
		src: url('/static/uni.ttf');
	}

	/* #endif */
</style>
