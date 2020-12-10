<template>
	<view>
		<u-navbar is-back="true" title="个人信息"></u-navbar>

		<view>
			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="level" title="编号" :value="user.EmpID" :arrow="false"></u-cell-item>
				<u-cell-item icon="scan" title="二维码" value="展示二维码" @click="maskShow = true"></u-cell-item>
				<u-cell-item icon="account-fill" title="用户名" :value="user.EmpName" @click="userNameModalShow = true"></u-cell-item>
				<u-cell-item icon="phone-fill" title="电话" :value="user.Tel" :arrow="false"></u-cell-item>
				<u-cell-item icon="account-fill" title="头像" @click="avatarModalShow = true">
					<u-avatar :src="user.PhotoUrl" size="140" bg-color="white" mode="square"></u-avatar>
				</u-cell-item>
				<!-- <u-cell-item icon="man" title="性别" :value="user.gender"></u-cell-item> -->
			</u-cell-group>

			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="close" title="退出登录" :arrow="false" @click="quitModalShow = true"></u-cell-item>
			</u-cell-group>
		</view>

		<u-modal v-model="userNameModalShow" title="用户名" :show-cancel-button="true" :mask-close-able="true" :async-close="true"
		 @confirm="changeUserName">
			<view class="slot-content u-m-t-20 u-m-l-20 u-m-r-20">
				<u-input v-model="username" type="text" :border="true" />
			</view>
		</u-modal>

		<u-modal v-model="avatarModalShow" title="头像" :show-cancel-button="true" :mask-close-able="true" :async-close="true"
		 @confirm="uploadAvatar">
			<view class="slot-content" style="display: flex;justify-content: center;">
				<u-upload ref="uUpload" :action="action" :form-data="formData" :auto-upload="false" max-count="1" @on-uploaded="avatarUploaded"></u-upload>
			</view>
		</u-modal>

		<u-modal v-model="quitModalShow" content="您要退出登录吗？" :show-cancel-button="true" @confirm="quit"></u-modal>

		<u-toast ref="uToast" />

		<u-mask :show="maskShow" @click="maskShow = false">
			<view class="warp">
				<view style="color: white; text-align: center;">向您的独立经纪人展示二维码</view>
				<view class="rect" @tap.stop>
					<tki-qrcode ref="qrcode" :val="value" :size="400" background="#ffffff" foreground="#000000" pdground="#000000"
					 :icon="avatar" :iconSize="40" :onval="true" :loadMake="true" @result="qrcode"></tki-qrcode>
				</view>

				<u-button :plain="true" :ripple="true" shape="circle" @click="saveQrCode">保存二维码</u-button>
			</view>
		</u-mask>
	</view>
</template>

<script>
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue";
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import config from '../../api/config.js';

	export default {
		components: {
			tkiQrcode,
		},
		data() {
			return {
				userNameModalShow: false,
				avatarModalShow: false,
				quitModalShow: false,
				maskShow: false,

				username: '',
				avatar: '/static/icon/logo.png',

				action: '',
				formData:Object,

				value: '',
				size: 200,
				qrcode: ''
			}
		},

		onLoad() {
			// this.user = this.global_data.global_data.user;
			// this.getUserInfo();

			let v = {
				dataSource: this.user.DBName,
				brokerId: this.user.EmpID,
				brokerTel: this.user.Tel
			}
			this.value = JSON.stringify(v);
		},

		onReady() {
			this.action = config.server + '/UpdateProfile';
			this.formData = {
				 DBName: this.user.DBName
			};
		},

		onBackPress(options) {
			if (this.userNameModalShow || this.avatarModalShow || this.quitModalShow || this.maskShow) {
				this.userNameModalShow = false;
				this.avatarModalShow = false;
				this.quitModalShow = false;
				this.maskShow = false;
				return true;
			}
		},

		computed: {
			...mapState(['user'])
		},

		methods: {
			
			// 修改用户名
			changeUserName() {
				if (this.username){
					uni.request({
						url: config.server + '/UpdatePerInfo',
						method:'GET',
						data:{
							DBName: this.user.DBName,
							Tel: this.user.Tel,
							EmpName: this.username,
							Sex: '男',
							PhotoUrl:this.user.PhotoUrl
						},
						success: (res) => {
							// console.log(res);
							let data = res.data;
							if (data.Flag === 'success'){
								this.$refs.uToast.show({
									title: data.Msg,
									type: 'success'
								});
								this.userNameModalShow = false;
							} else {
								this.$refs.uToast.show({
									title: data.Msg,
									type: 'error'
								});
							}
						}
					});
					
				} else {
					this.$refs.uToast.show({
						title: '用户名不能为空',
						type: 'error'
					});
					
					return;
				}
				
				this.getUserInfo();
			},

			// 上传头像
			uploadAvatar() {
				this.$refs.uUpload.upload();
			},

			// 上传头像完成回调函数
			avatarUploaded(res) {
				console.log(res);
				if (res[0].response.Flag === 'success') {
					this.avatarModalShow = false;
					this.$refs.uToast.show({
						title: res[0].response.Msg,
						type: 'success'
					});
					
					uni.request({
						url: config.server + '/UpdatePerInfo',
						method:'GET',
						data:{
							DBName: this.user.DBName,
							Tel: this.user.Tel,
							EmpName: this.username,
							Sex: '男',
							PhotoUrl:res[0].response.Result
						},
						success: (res) => {
							// console.log(res);
							let data = res.data;
							if (data.Flag === 'success'){
								this.$refs.uToast.show({
									title: data.Msg,
									type: 'success'
								});
								this.userNameModalShow = false;
							} else {
								this.$refs.uToast.show({
									title: data.Msg,
									type: 'error'
								});
							}
						}
					});
					
					this.getUserInfo();
				}
			},

			// 退出登录
			quit() {
				uni.clearStorage();
				this.$store.commit('logout');

				uni.reLaunch({
					url: '../index/index'
				});
			},

			// 获取用户信息
			getUserInfo() {
				uni.request({
					url:config.server + '/GetEmpInfo',
					data:{
						DBName: this.user.DBName,
						Tel: this.user.Tel
					},
					success: (res) => {
						console.log(res);
						let data = res.data;
						
						if (data.Flag === 'success'){
							let _user = {
								DBName: this.user.DBName,
								EmpID: data.Result[0].EmpID,
								EmpName: data.Result[0].EmpName,
								PhotoUrl: data.Result[0].PhotoUrl,
								AccountStyle: '',
								FollowArea: '',
								Tel: data.Result[0].Tel,
								EmpNo: data.Result[0].EmpNo
							};
											
							if (data.Result[0].AccountStyle === '1') {
								_user.AccountStyle = '独立经纪人';
							}
							if (data.Result[0].AccountStyle === '2') {
								_user.AccountStyle = '物业管理中心';
							}
											
							try {
								uni.setStorageSync('i_user', _user);
								uni.setStorageSync('i_telephone', data.Result[0].Tel);
								uni.setStorageSync('i_password', data.Result[0].password);
							} catch (e) {
								//TODO handle the exception
								console.log('setStorageSync异常')
							}
											
							this.$store.commit('login', _user);
						}
					}
				})
				
/* 				this.$u.get(config.server + '/Login', {
						TelOrEmpNo: this.user.Tel,
						Password: this.user.password
					}).then(res => {
						if (res.Flag === 'success') {
							let _user = {
								DBName: res.Result.DBName,
								EmpID: res.Result.EmpID,
								EmpName: res.Result.EmpName,
								PhotoUrl: res.Result.PhotoUrl,
								AccountStyle: '',
								FollowArea: '',
								Tel: this.model.phone,
								EmpNo: ''
							};
				
							if (res.Result.AccountStyle === '1') {
								_user.AccountStyle = '独立经纪人';
							}
							if (res.Result.AccountStyle === '2') {
								_user.AccountStyle = '物业管理中心';
							}
				
							if (this.model.remember) {
								try {
									uni.setStorageSync('user', _user);
									uni.setStorageSync('telephone', this.model.phone);
									uni.setStorageSync('password', this.model.password);
									uni.setStorageSync('loggedWithoutPassword', true);
								} catch (e) {
									//TODO handle the exception
									console.log('setStorageSync异常')
								}
							} else {
				
							};
				
							this.$store.commit('login', _user);
				
							const jyJPush = uni.requireNativePlugin('JY-JPush');
							jyJPush.addJYJPushTags({
								userTag: this.user.DBName
							}, result => {

							});
				
							uni.switchTab({
								url: '../Home/Home'
							});
						} else {
							this.$refs.uToast.show({
								title: res.Msg,
								position: 'bottom',
								type: 'error',
								icon: false,
								url: '',
							});
						}
					}); */
				
			},

			// 保存二维码
			saveQrCode() {
				this.$refs.qrcode._saveCode();
			}
		}
	}
</script>

<style>
	page {
		background-color: #f0f0f0;
	}
</style>

<style lang="scss" scoped>
	.warp {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 600rpx;
		height: 600rpx;
		background-color: #fff;
		border-radius: 8rpx;
		margin-top: 50rpx;
		margin-bottom: 50rpx;
	}
</style>
