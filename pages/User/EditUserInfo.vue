<template>
	<view>
		<u-navbar is-back="true" title="个人信息"></u-navbar>

		<view>
			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="level" title="uid" :value="user.uid" :arrow="false"></u-cell-item>
				<u-cell-item icon="scan" title="二维码" value="展示二维码" @click="maskShow = true"></u-cell-item>
				<u-cell-item icon="account-fill" title="用户名" :value="user.username" @click="userNameModalShow = true"></u-cell-item>
				<u-cell-item icon="phone-fill" title="电话" :value="user.telephone" :arrow="false"></u-cell-item>
				<u-cell-item icon="account-fill" title="头像" @click="avatarModalShow = true">
					<u-avatar :src="'http://47.99.169.155:8090' + user.imgUrl" size="140" bg-color="white" mode="square"></u-avatar>
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
				<u-upload ref="uUpload" :action="action" :header="header" :auto-upload="false" max-count="1" @on-uploaded="avatarUploaded"></u-upload>
			</view>
		</u-modal>

		<u-modal v-model="quitModalShow" content="您要退出登录吗？" @confirm="quit"></u-modal>

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
	import tkiQrcode from "@/components/tki-qrcode/tki-qrcode.vue"

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

				user: Object,
				username: '',
				avatar: '/static/icon/logo.png',

				action: '',
				header: Object,

				value: '',
				size: 200,
				qrcode: ''
			}
		},

		onLoad() {
			this.user = this.global_data.global_data.user;
			//this.getUserInfo();
			
			let v = {
				dataSource: this.global_data.global_data.DBName,
				brokerId: this.global_data.global_data.EmpID,
				brokerTel: this.global_data.global_data.Tel
			}
			this.value = JSON.stringify(v);
		},

		onReady() {
			this.action = this.global_data.global_data.BaseUrl + 'user/uploadImg?telephone=' + this.user.telephone;
			
		},

		methods: {
			// 修改用户名
			changeUserName() {
				this.$u.get(this.global_data.global_data.BaseUrl + 'user/updateName', {
					name: this.username,
					telephone: this.user.telephone
				}, {
					Authorization: this.user.tokenHead + this.user.token
				}).then(res => {
					console.log(res);
					if (res.code === 200) {
						this.userNameModalShow = false;
						this.$refs.uToast.show({
							title: res.message,
							type: 'success'
						});
						this.getUserInfo();
					}
				});
			},
			
			// 上传头像
			uploadAvatar() {
				this.$refs.uUpload.upload();
			},

			// 上传头像完成回调函数
			avatarUploaded(res) {
				console.log(res);
				if (res[0].response.code === 200) {
					this.avatarModalShow = false;
					this.$refs.uToast.show({
						title: res[0].response.message,
						type: 'success'
					});
					this.getUserInfo();
				}
			},
			
			// 退出登录
			quit() {
				uni.reLaunch({
					url: './me'
				});
				uni.clearStorage();
			},
			
			// 获取用户信息
			getUserInfo() {
				this.$u.get(this.global_data.global_data.BaseUrl + 'user/getUserInfo', {}, {
					Authorization: this.user.tokenHead + this.user.token
				}).then(res2 => {
					console.log(res2);
					if (res2.code === 200) {
						var user2 = {
							telephone: this.user.telephone,
							tokenHead: this.user.tokenHead,
							token: this.user.token,
							imgUrl: res2.data.imgUrl,
							uid: res2.data.uid,
							gender: res2.data.gender,
							rolesName: res2.data.rolesName,
							username: res2.data.username
						};

						this.global_data.global_data.user = user2;
						this.global_data.global_data.logged = true;

						this.user = user2;
					}
				});
			},
			
			// 保存二维码
			saveQrCode(){
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
