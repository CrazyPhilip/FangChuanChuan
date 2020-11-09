<template>
	<view>
		<view class="content">
			<u-navbar is-back="true" title="注册"></u-navbar>

			<u-form :model="model" :rules="rules" ref="uForm" :errorType="['message']">
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="城区" prop="district" label-width="170">
					<u-input :border="border" type="select" :select-open="districtListShow" v-model="model.district" placeholder="请选择城区"
					 @click="districtListShow = true"></u-input>
				</u-form-item>
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="街道" prop="area" label-width="170">
					<u-input :border="border" type="select" :select-open="areaListShow" v-model="model.area" placeholder="请选择街道"
					 @click="areaListShow = true"></u-input>
				</u-form-item>
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="用户类型" prop="accountStyle" label-width="170">
					<u-input :border="border" type="select" :select-open="accountStyleListShow" v-model="model.accountStyle"
					 placeholder="请选择用户类型" @click="accountStyleListShow = true"></u-input>
				</u-form-item>
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
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="170"
				 :label-position="labelPosition" label="姓名" prop="name">
					<u-input :border="border" placeholder="请输入姓名" v-model="model.name" type="text"></u-input>
				</u-form-item>
			</u-form>
			<view class="agreement">
				<u-checkbox v-model="check" @change="checkboxChange"></u-checkbox>
				<view class="agreement-text">
					勾选代表同意军军房产的
					<u-tag text="用户协议" type="info" size="default" mode="light" bg-color="white" border-color="white" @click="toShow" />
				</view>
			</view>
			<u-button @click="submit" type="primary">注册</u-button>
			<u-picker mode="selector" v-model="districtListShow" range-key="town" :default-selector="[0]" :range="districtList"
			 @confirm="districtListCallback"></u-picker>
			<u-picker mode="selector" v-model="areaListShow" range-key="village" :default-selector="[0]" :range="areaList"
			 @confirm="areaListCallback"></u-picker>
			<u-picker mode="selector" v-model="accountStyleListShow" :default-selector="[0]" :range="accountStyleList" @confirm="accountStyleListShowCallback"></u-picker>
			<u-verification-code seconds="60" ref="uCode" @change="codeChange"></u-verification-code>
		</view>

		<u-mask :show="model.maskShow" @click="model.maskShow = false">
			<view class="warp">
				<view class="rect">
					<u-swiper :list="model.sourceList" mode="number" height="1000" :autoplay="false"></u-swiper>
				</view>
			</view>
		</u-mask>
	</view>
</template>

<script>
	export default {
		data() {
			let that = this;
			return {
				model: {
					name: '',
					agreement: false,
					district: '',
					area: '',
					dBName: '',
					phone: '',
					code: '',
					password: '',
					rePassword: '',
					accountStyle: '',

					maskShow: false,
					source: '',
					sourceList: [],
				},
				rules: {
					name: [{
							required: true,
							message: '请输入姓名',
							trigger: 'blur',
						},
						{
							min: 2,
							max: 5,
							message: '姓名长度在2到5个字符',
							trigger: ['change', 'blur'],
						},
						{
							// 此为同步验证，可以直接返回true或者false，如果是异步验证，稍微不同，见下方说明
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.chinese(value);
							},
							message: '姓名必须为中文',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change', 'blur'],
						},
						// 异步验证，用途：比如用户注册时输入完账号，后端检查账号是否已存在
						// {
						// 	trigger: ['blur'],
						// 	// 异步验证需要通过调用callback()，并且在里面抛出new Error()
						// 	// 抛出的内容为需要提示的信息，和其他方式的message属性的提示一样
						// 	asyncValidator: (rule, value, callback) => {
						// 		this.$u.post('/ebapi/public_api/index').then(res => {
						// 			// 如果验证出错，需要在callback()抛出new Error('错误提示信息')
						// 			if(res.error) {
						// 				callback(new Error('姓名重复'));
						// 			} else {
						// 				// 如果没有错误，也要执行callback()回调
						// 				callback();
						// 			}
						// 		})
						// 	},
						// }
					],
					district: [{
						required: true,
						message: '请选择城区',
						trigger: 'change',
					}],
					area: [{
						required: true,
						message: '请选择街道',
						trigger: 'change',
					}],
					accountStyle: [{
						required: true,
						message: '请选择用户类型',
						trigger: 'change',
					}],
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
								this.$u.get(this.global_data.global_data.BaseUrl + 'IfTelRegistered', {
									Tel: value,
								}).then(res => {
									//console.log(res);
									// 如果验证不通过，需要在callback()抛出new Error('错误提示信息')
									if (res.Result === 'TelExist') {
										callback(new Error('已注册'));
									} else {
										// 如果校验通过，也要执行callback()回调
										callback();
									}
								});
							},
							message: '已注册',
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

				district: '',
				area: '',
				accountStyle: '',
				districtList: [],
				areaList: [],
				accountStyleList: ['独立经纪人', '物业管理中心'],
				labelPosition: 'left',
				districtListShow: false,
				areaListShow: false,
				accountStyleListShow: false,
			};
		},

		onLoad() {
			this.getDistrictsByCity('cd');
		},

		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},

		methods: {

			districtListCallback(index) {
				this.district = this.districtList[index].town;
				this.model.district = this.districtList[index].town;
				console.log(this.model.district);
				this.getAreaByDistrict(this.model.district);
			},

			areaListCallback(index) {
				this.area = this.areaList[index].dbName;
				console.log(index);
				this.model.dBName = this.areaList[index].dbName;
				this.model.area = this.areaList[index].village;
			},

			accountStyleListShowCallback(index) {
				this.accountStyle = this.accountStyleList[index];
				this.model.accountStyle = this.accountStyleList[index];
			},

			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						if (!this.model.agreement) return this.$u.toast('请勾选协议');
						//console.log('验证通过');
						this.register();
					} else {
						//console.log('验证失败');
					}
				});
			},

			toShow() {
				this.model.maskShow = true;
				this.model.sourceList = [];
				for (var i = 1; i <= 10; i++) {
					this.model.sourceList.push("http://www.junjunhouse.com/files/service/service_" + i + ".png");
				}
			},
			//注册
			register() {
				this.$u.get(this.global_data.global_data.BaseUrl + 'ApplyForRegister', {
					DBName: this.model.dBName,
					EmpNo: '',
					Tel: this.model.phone,
					Password: this.model.password,
					EmpName: this.model.name,
					AccountStyle: this.model.accountStyle === '独立经纪人' ? '1' : '2',
				}).then(res => {
					console.log(res);
					this.$u.toast(res.Msg);
					if (res.Flag === 'success') {
						uni.navigateBack({
							delta: 1
						});
					}
				});
			},

			//根据城市名获取城区列表
			getDistrictsByCity(city) {
				this.$u.get(this.global_data.global_data.BaseUrl + 'GetAllDistrictByCity', {
					CityName: city
				}).then(res => {
					console.log(res);
					this.districtList = res.Result;
				});
			},

			//根据城区名获取街道列表
			getAreaByDistrict(district) {
				console.log(district);
				this.$u.get(this.global_data.global_data.BaseUrl + 'GetAllAreaByDistrict', {
					DistrictName: district
				}).then(res => {
					this.areaList = res.Result;
				});
			},

			// 勾选版权协议
			checkboxChange(e) {
				this.model.agreement = e.value;
			},

			// 选择地区回调
			regionConfirm(e) {
				this.model.region = e.province.label + '-' + e.city.label + '-' + e.area.label;
			},

			codeChange(text) {
				this.codeTips = text;
			},

			// 获取验证码
			getCode() {
				if (this.$refs.uCode.canGetCode) {
					this.$u.get(this.global_data.global_data.BaseUrl + 'GetTelCode', {
						Tel: this.model.phone
					}).then(res => {
						this.code = res.Result;
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

	.warp {
		display: flex;
		padding: 40rpx;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 750rpx;
		height: 1000rpx;
		background-color: #fff;
	}
</style>
