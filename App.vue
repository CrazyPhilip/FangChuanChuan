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
			this.addJYJPushReceiveOpenNotificationListener();
		},
		onShow: function() {
			console.log('App Show');
		},
		onHide: function() {
			console.log('App Hide');
		},
		methods: {
			addJYJPushReceiveOpenNotificationListener() {
				const jyJPush = uni.requireNativePlugin('JY-JPush');
				jyJPush.addJYJPushReceiveOpenNotificationListener(result => {
					//  监听成功后，若点击推送消息，会触发result；数据格式保持极光返回的安卓/iOS数据一致
					var content = result['notificationExtras'];
					content = JSON.parse(content);
					var DBName = content.DBName;
					var PropertyId = content.PropertyId;
					var path = '../HouseManage/HouseDetail?DBName='+DBName+'&PropertyId='+PropertyId;
				
					//在起始页面跳转到指定页面并传递参数
					setTimeout(function(){
						uni.navigateTo({
						    url: path
						});
					},1000);
				});
			},
		},
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
