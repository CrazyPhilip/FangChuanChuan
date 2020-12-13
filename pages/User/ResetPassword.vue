<template>
	<view>
		<view class="content">
			<u-navbar is-back="true" title="重置密码"></u-navbar>
			<u-form :model="model" :rules="rules" ref="uForm" errorType="message">
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
				 label="手机号码" prop="phone" label-width="170">
					<u-input :border="border" placeholder="请输入手机号" v-model="model.phone" type="number"></u-input>
				</u-form-item>
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="chat-fill" :label-position="labelPosition"
				 label="验证码" prop="code" label-width="170">
					<u-input :border="border" placeholder="请输入验证码" v-model="model.code" type="text"></u-input>
					<u-button slot="right" type="default" size="mini" @click="getCode">{{codeTips}}</u-button>
				</u-form-item>
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="lock" :label-position="labelPosition"
				 label="密码" prop="password" label-width="170">
					<u-input :password-icon="true" :border="border" type="password" v-model="model.password" placeholder="请输入密码"></u-input>
				</u-form-item>
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="lock" :label-position="labelPosition"
				 label="确认密码" label-width="170" prop="rePassword">
					<u-input :border="border" type="password" v-model="model.rePassword" placeholder="请确认密码"></u-input>
				</u-form-item>
			</u-form>
			<u-button @click="submit" type="primary">重置</u-button>
			<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
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
			let that = this;
			return {
				model: {
					dBName: '',
					phone: '',
					code: '',
					password: '',
					rePassword: '',
				},
				code:'',
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
						},
						// 校验用户是否已存在
						{
							asyncValidator: (rule, value, callback) => {
								this.$u.get(config.server + '/IfTelRegistered', {
									Tel: value,
								}).then(res => {
									//console.log(res);
									// 如果验证不通过，需要在callback()抛出new Error('错误提示信息')
									if (res.Result === 'NoExist') {
										callback(new Error('未注册'));
									} else {
										// 如果校验通过，也要执行callback()回调
										callback();
									}
								});
							},
							message: '未注册',
							trigger: ['change', 'blur'],
						}
					],
					code: [{
							required: true,
							message: '请输入验证码',
							trigger: ['change', 'blur'],
						},
						{
							type: 'number',
							message: '验证码只能为数字',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								if (this.authCode !== '') //验证码已发送
								{
									return value === this.authCode;
								}
							},
							message: '验证码输入不正确',
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
							pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+\S{5,12}$/,
							message: '需同时含有字母和数字，长度在6-12之间',
							trigger: ['change', 'blur'],
						}
					],
					rePassword: [{
							required: true,
							message: '请重新输入密码',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								return value === this.model.password;
							},
							message: '两次输入的密码不相等',
							trigger: ['change', 'blur'],
						}
					],
				},
				border: false,
				check: false,
				codeTips: '',
				authCode: '',

				districtList: [],
				areaList: [],
				labelPosition: 'left',
				districtListShow: false,
				areaListShow: false,
				accountStyleListShow: false,
			};
		},

		onLoad() {

		},

		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},

		computed: {
			...mapState(['user'])
		},

		methods: {

			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						//console.log('验证通过');
						this.modifyPassword();
					} else {
						//console.log('验证失败');
					}
				});
			},

			//修改密码
			modifyPassword() {
				this.$u.get(config.server + '/ModTelPassword', {
					Tel: this.model.phone,
					NewPassWord: this.model.password,
				}).then(res => {
					console.log(res);
					this.$u.toast(res.Msg);
					if (res.Flag === 'success') {
						this.$u.toast('重置密码成功');
						uni.navigateBack({
							delta: 1
						});
					}
				});
			},

			codeChange(text) {
				this.codeTips = text;
			},

			// 获取验证码
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					this.$u.get(config.server + '/GetTelCode', {
						Tel: this.model.phone
					}).then(res => {
						this.authCode = res.Result;
					});
					// 模拟向后端请求验证码
					uni.showLoading({
						title: '正在获取验证码',
						mask: true
					})
					setTimeout(() => {
						uni.hideLoading();
						// 这里此提示会被this.start()方法中的提示覆盖
						this.$u.toast('验证码已发送');
						// 通知验证码组件内部开始倒计时
						this.$refs.uCode.start();
					}, 2000);
				} else {
					this.$u.toast('倒计时结束后再发送');
				}
			},

		}
	};
</script>

<style scoped lang="scss">
	.content {
		padding: 0 40rpx;
	}

	.agreement {
		display: flex;
		align-items: center;
		margin: 40rpx 0;

		.agreement-text {
			padding-left: 8rpx;
			color: $u-tips-color;
		}
	}
</style>
