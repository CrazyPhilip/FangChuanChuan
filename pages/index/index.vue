<template>
	<view>
		<view class="content">
			<!-- <u-image src="/static/icon/logo.png" height="200" width="200" style="margin: 100rpx;"></u-image> -->

			<view style="margin-top: 100rpx;margin-bottom: 100rpx;">
				<view style="font-size: x-large;font-weight: bold;">登录</view>
				<view>欢迎使用房串串经纪人版</view>
			</view>

			<u-form :model="model" :rules="rules" ref="uForm" :errorType="['message']">
				<!-- <u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="120" :label-position="labelPosition" label="姓名" prop="name">
					<u-input :border="border" placeholder="请输入姓名" v-model="model.name" type="text"></u-input>
				</u-form-item> -->

				<u-form-item :rightIconStyle="{color: '#888', fontSize: '32rpx'}" right-icon="kefu-ermai" :label-position="labelPosition"
				 label="手机号码" prop="phone" label-width="150">
					<u-input placeholder="请输入手机号" v-model="model.phone" type="number" :clearable="false" maxlength="11"></u-input>
				</u-form-item>
				<u-form-item :label-position="labelPosition" label="密码" prop="password" label-width="150">
					<u-input :password-icon="true" type="password" v-model="model.password" placeholder="请输入密码" :clearable="false"
					 maxlength="20"></u-input>
				</u-form-item>

				<!-- 此处switch的slot为right，如果不填写slot名，也即<u-switch v-model="model.remember"></u-switch>，将会左对齐 -->
				<u-form-item :label-position="labelPosition" label="免密登录" prop="remember" label-width="150">
					<u-switch v-model="model.remember" slot="right" size="30"></u-switch>
				</u-form-item>
			</u-form>

			<view style="margin-top: 100rpx;margin-bottom: 100rpx;">
				<u-button @click="login" shape="square" type="primary" :ripple="true">登录</u-button>
				<u-row style="margin-top: 30rpx;">
					<u-col span="6" text-align="center" @click="reset">忘记密码了？</u-col>
					<u-col span="6" text-align="center" @click="register">注册</u-col>
				</u-row>
			</view>

			<u-toast type="primary" ref="uToast"></u-toast>
		</view>
	</view>
</template>

<script>
	import config from '../../api/config.js';
	import {
		mapState,
		mapMutations
	} from 'vuex';


	export default {
		data() {
			return {
				model: {
					phone: '',
					password: '',
					remember: false,
				},
				labelPosition: 'left',
				color: '#2979ff',
				rules: {
					phone: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change', 'blur'],
						}
					],
					password: [{
							required: true,
							message: '请输入密码',
							trigger: ['change', 'blur'],
						},
						{
							// 正则不能含有两边的引号
							pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,20}$/,
							message: '需同时含有字母和数字，长度在6-20之间',
							trigger: ['change', 'blur'],
						}
					],
				},
			}
		},

		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);

			this.getCache();
		},

		computed: {
			...mapState(['user'])
		},

		methods: {
			getCache() {
				try {
					let status = uni.getStorageSync('i_loggedWithoutPassword');
					if (status == true) {
						let telephone = uni.getStorageSync('i_telephone');
						let password = uni.getStorageSync('i_password');
						console.log('pas:'+password);
						if (telephone) {
							this.model.phone = telephone;
							if (password) {
								this.model.password = password;

								this.login();
							}
						}
					} else {
						this.$store.commit('changeStatus', false);
					}
					/* 
					const value1 = uni.getStorageSync('user');
					const value2 = uni.getStorageSync('phone');
					const value3 = uni.getStorageSync('password');

					if (value2) {
						console.log(value2);
						this.model.phone = value2;
					}

					if (value3) {
						console.log(value3);
						this.model.password = value3;
					}

					this.login(); */
				} catch (e) {
					// error
				}
			},

			change(status) {

			},

			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						console.log('验证通过');
						this.login();
					} else {
						console.log('验证失败');
					}
				});

			},

			//登录
			login() {
				this.$u.get(config.server + '/Login', {
					TelOrEmpNo: this.model.phone,
					Password: this.model.password
				}).then(res => {
					if (res.Flag === 'success') {

						uni.showToast({
							title: '欢迎你！' + res.Result.EmpName,
							position: 'bottom'
						});

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
								uni.setStorageSync('i_user', _user);
								uni.setStorageSync('i_telephone', this.model.phone);
								uni.setStorageSync('i_password', this.model.password);
								uni.setStorageSync('i_loggedWithoutPassword', true);
							} catch (e) {
								//TODO handle the exception
								console.log('setStorageSync异常')
							}
							/* 
							uni.setStorage({
								key: 'result',
								data: res.Result,
								success: function() {
									console.log('保存成功');
								}
							});

							uni.setStorage({
								key: 'phone',
								data: this.model.phone,
								success: function() {
									console.log('phone保存成功');
								}
							});

							uni.setStorage({
								key: 'password',
								data: this.model.password,
								success: function() {
									console.log('pwd保存成功');
								}
							}); */
						} else {

						};

						this.$store.commit('login', _user);

						/* this.global_data.global_data.DBName = res.Result.DBName;
						this.global_data.global_data.EmpID = res.Result.EmpID;
						this.global_data.global_data.EmpName = res.Result.EmpName;
						this.global_data.global_data.PhotoUrl = res.Result.PhotoUrl;
						this.global_data.global_data.Tel = this.model.phone;
						this.global_data.global_data.AccountStyle = res.Result.AccountStyle;
						if (res.Result.AccountStyle === '1') {
							this.global_data.global_data.AccountStyle = '独立经纪人';
						}
						if (res.Result.AccountStyle === '2') {
							this.global_data.global_data.AccountStyle = '物业管理中心';
						}

						this.global_data.global_data.user = {
							DBName: res.Result.DBName,
							EmpID: res.Result.EmpID,
							EmpName: res.Result.EmpName,
							PhotoUrl: res.Result.PhotoUrl,
							AccountStyle: this.global_data.global_data.AccountStyle,
							FollowArea: '',
							Tel: this.model.phone,
							EmpNo: '',
							cityName: '成都',
							cityPinYin: 'chengdu',
						}; */

						// console.log(this.global_data.global_data.DBName);
						// console.log(this.global_data.global_data.EmpID);
						// console.log(this.global_data.global_data.EmpName);
						// console.log(this.global_data.global_data.Tel);

						const jyJPush = uni.requireNativePlugin('JY-JPush');
						jyJPush.addJYJPushTags({
							userTag: this.user.DBName
						}, result => {
							/* uni.showToast({
							icon: 'none',
							title: JSON.stringify(result)
							}) */
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
				});
			},

			register() {
				uni.navigateTo({
					url: '../User/Register'
				});
			},

			reset() {
				uni.navigateTo({
					url: '../User/ResetPassword'
				});
			},

			showToast() {

			}
		}
	};
</script>

<style lang="scss" scoped>
	.content {
		padding: 40rpx;
	}
</style>
