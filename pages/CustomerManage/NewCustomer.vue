<template>
	<view>
		<view class="content">
			<u-navbar is-back="true" title="新增客源"></u-navbar>

			<u-form :model="model" :rules="rules" ref="uForm0" :errorType="['message']">
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="300"
				 :label-position="labelPosition" label="姓名" prop="name">
					<u-input :border="border" placeholder="请输入姓名" v-model="model.name" type="text"></u-input>
				</u-form-item>

				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
				 label="手机号码" prop="phone" label-width="300">
					<u-input :border="border" placeholder="请输入手机号" v-model="model.phone" type="number"></u-input>
				</u-form-item>

				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="户籍类型" prop="koseki" label-width="300">
					<u-input :border="border" type="select" :select-open="kosekiListShow" v-model="model.koseki" placeholder="请选择户籍类型"
					 @click="kosekiListShow = true"></u-input>
				</u-form-item>

				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="婚姻状态" prop="marrige" label-width="300">
					<u-input :border="border" type="select" :select-open="marrigeListShow" v-model="model.marrige" placeholder="请选择婚姻状态"
					 @click="marrigeListShow = true"></u-input>
				</u-form-item>

				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="交易类型" prop="trade" label-width="300">
					<u-input :border="border" type="select" :select-open="tradeListShow" v-model="model.trade" placeholder="请选择交易类型"
					 @click="tradeListShow = true"></u-input>
				</u-form-item>

				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="用途" prop="usage" label-width="300">
					<u-input :border="border" type="select" :select-open="usageListShow" v-model="model.usage" placeholder="请选择用途"
					 @click="usageListShow = true"></u-input>
				</u-form-item>

				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="城区" prop="district" label-width="300">
					<u-input :border="border" type="select" :select-open="districtListShow" v-model="model.district" placeholder="请选择城区"
					 @click="districtListShow = true"></u-input>
				</u-form-item>
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="街道" prop="area" label-width="300">
					<u-input :border="border" type="select" :select-open="areaListShow" v-model="model.area" placeholder="请选择街道"
					 @click="areaListShow = true"></u-input>
				</u-form-item>
			</u-form>

			<view style="margin: 20rpx 0; text-align: center;font-weight: bold;">以上为必填信息</view>

			<u-collapse class="moreInfoBox" style="border: 1rpx solid rgb(230, 230, 230); border-radius: 8rpx; padding: 0 10rpx;">
				<u-collapse-item title="添加更多信息">

					<u-form :model="optionalModel" :rules="rules" ref="uForm1" :errorType="['message']">

						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="等级" prop="level" label-width="300">
							<u-input :border="border" type="select" :select-open="levelListShow" v-model="optionalModel.level" placeholder="请选择等级"
							 @click="levelListShow = true"></u-input>
						</u-form-item>

						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="装修" prop="decoration" label-width="300">
							<u-input :border="border" type="select" :select-open="decorationListShow" v-model="optionalModel.decoration"
							 placeholder="请选择装修" @click="decorationListShow = true"></u-input>
						</u-form-item>

						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="房屋类型" prop="type" label-width="300">
							<u-input :border="border" type="select" :select-open="typeListShow" v-model="optionalModel.type" placeholder="请选择房屋类型"
							 @click="typeListShow = true"></u-input>
						</u-form-item>

						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="300"
						 :label-position="labelPosition" label="预算范围(万元)" prop="minBudget">
							<u-input :border="border" placeholder="最低预算" v-model="optionalModel.minBudget" type="number" inputAlign="center"
							 :clearable="false"></u-input>
							<view>~</view>
							<u-input :border="border" placeholder="最高预算" v-model="optionalModel.maxBudget" type="number" inputAlign="center"
							 :clearable="false"></u-input>
						</u-form-item>

						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="300"
						 :label-position="labelPosition" label="面积范围(平米)" prop="minSquare">
							<u-input :border="border" placeholder="最小面积" v-model="optionalModel.minSquare" type="number" inputAlign="center"
							 :clearable="false"></u-input>
							<view>~</view>
							<u-input :border="border" placeholder="最大面积" v-model="optionalModel.maxSquare" type="number" inputAlign="center"
							 :clearable="false"></u-input>
						</u-form-item>

						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="300"
						 :label-position="labelPosition" label="楼层范围(楼)" prop="minFloor">
							<u-input :border="border" placeholder="最低楼层" v-model="optionalModel.minFloor" type="number" inputAlign="center"
							 :clearable="false"></u-input>
							<view>~</view>
							<u-input :border="border" placeholder="最高楼层" v-model="optionalModel.maxFloor" type="number" inputAlign="center"
							 :clearable="false"></u-input>
						</u-form-item>

						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="300"
						 :label-position="labelPosition" label="户型范围(室)" prop="minRoom">
							<u-input :border="border" placeholder="最小房数" v-model="optionalModel.minRoom" type="number" inputAlign="center"
							 :clearable="false"></u-input>
							<view>~</view>
							<u-input :border="border" placeholder="最大房数" v-model="optionalModel.maxRoom" type="number" inputAlign="center"
							 :clearable="false"></u-input>
						</u-form-item>
					</u-form>

				</u-collapse-item>
			</u-collapse>

			<u-row style="margin: 30rpx 0;">
				<u-col span="6" text-align="center" @click="reset">
					<u-button @click="reset" type="default">清空</u-button>
				</u-col>
				<u-col span="6" text-align="center" @click="submit">
					<u-button @click="submit" type="primary">确定新增</u-button>
				</u-col>
			</u-row>

			<u-picker mode="selector" v-model="kosekiListShow" :default-selector="[0]" :range="kosekiList" @confirm="kosekiCallback"></u-picker>
			<u-picker mode="selector" v-model="marrigeListShow" :default-selector="[0]" :range="marrigeList" @confirm="marrigeListCallback"></u-picker>
			<u-picker mode="selector" v-model="tradeListShow" :default-selector="[0]" :range="tradeList" @confirm="tradeListCallback"></u-picker>
			<u-picker mode="selector" v-model="usageListShow" :default-selector="[0]" :range="usageList" @confirm="usageListCallback"></u-picker>

			<u-picker mode="selector" v-model="districtListShow" :default-selector="[0]" range-key="town" :range="districtList"
			 @confirm="districtListCallback"></u-picker>
			<u-picker mode="selector" v-model="areaListShow" :default-selector="[0]" range-key="village" :range="areaList"
			 @confirm="areaListCallback"></u-picker>

			<u-picker mode="selector" v-model="levelListShow" :default-selector="[0]" :range="levelList" @confirm="levelListCallback"></u-picker>
			<u-picker mode="selector" v-model="decorationListShow" :default-selector="[0]" :range="decorationList" @confirm="decorationListCallback"></u-picker>
			<u-picker mode="selector" v-model="typeListShow" :default-selector="[0]" :range="typeList" @confirm="typeListCallback"></u-picker>

			<u-toast ref="uToast" />
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				model: {
					name: '',
					district: '',
					area: '',
					dBName: '',
					phone: '',
					koseki: '',
					marrige: '',
					trade: '',
					usage: '',
					areaId: '',
				},
				optionalModel: {
					level: '',
					decoration: '',
					type: '',

					minBudget: '',
					minFloor: '',
					minRoom: '',
					minSquare: '',
					maxBudget: '',
					maxFloor: '',
					maxRoom: '',
					maxSquare: ''
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
					koseki: [{
						required: true,
						message: '请选择户籍类型',
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

					],
					marrige: [{
						required: true,
						message: '请选择婚姻状态',
						trigger: ['change', 'blur'],
					}],
					trade: [{
						required: true,
						message: '请选择交易类型',
						trigger: ['change', 'blur'],
					}],
					usage: [{
						required: true,
						message: '请选择用途',
						trigger: ['change', 'blur'],
					}],
					minBudget: [{
						type: 'number',
						message: '只能为数字',
						trigger: ['change', 'blur'],
					}],
					minFloor: [{
						type: 'number',
						message: '只能为数字',
						trigger: ['change', 'blur'],
					}],
					minRoom: [{
						type: 'number',
						message: '只能为数字',
						trigger: ['change', 'blur'],
					}],
					minSquare: [{
						type: 'number',
						message: '只能为数字',
						trigger: ['change', 'blur'],
					}],
					maxBudget: [{
						type: 'number',
						message: '只能为数字',
						trigger: ['change', 'blur'],
					}],
					maxFloor: [{
						type: 'number',
						message: '只能为数字',
						trigger: ['change', 'blur'],
					}],
					maxRoom: [{
						type: 'number',
						message: '只能为数字',
						trigger: ['change', 'blur'],
					}],
					maxSquare: [{
						type: 'number',
						message: '只能为数字',
						trigger: ['change', 'blur'],
					}],
				},

				districtList: [],
				areaList: [],
				kosekiList: ["外地", "本地"],
				marrigeList: ["未婚", "已婚", "离婚"],
				tradeList: ["求购", "求租"],
				usageList: ["住宅", "商住", "商铺", "网点", "写字楼", "厂房", "写厂", "铺厂", "仓库", "地皮", "工厂", "车位", "公寓", "其他"],
				levelList: ["A", "B", "C"],
				decorationList: ["毛坯", "清水", "简装", "中装", "精装", "豪装"],
				typeList: [
					"多层", "高层", "小高层", "多层复式", "高层复式", "多层跃式",
					"高层跃式", "独立别墅", "联体别墅", "双拼别墅", "叠加别墅",
					"围院别墅", "裙楼", "四合院"
				],

				kosekiListShow: false,
				marrigeListShow: false,
				tradeListShow: false,
				usageListShow: false,
				districtListShow: false,
				areaListShow: false,
				levelListShow: false,
				decorationListShow: false,
				typeListShow: false,

				border: false,
				labelPosition: 'left',

			};
		},

		onLoad() {
			this.getDistrictsByCity('cd');
		},

		onReady() {
			this.$refs.uForm0.setRules(this.rules);
			this.$refs.uForm1.setRules(this.rules);
		},


		methods: {
			districtListCallback(index) {
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

			kosekiCallback(index) {
				this.model.koseki = this.kosekiList[index];
			},

			marrigeListCallback(index) {
				this.model.marrige = this.marrigeList[index];
			},

			tradeListCallback(index) {
				this.model.trade = this.tradeList[index];
			},

			usageListCallback(index) {
				this.model.usage = this.usageList[index];
			},

			levelListCallback(index) {
				this.optionalModel.level = this.levelList[index];
			},

			decorationListCallback(index) {
				this.optionalModel.decoration = this.decorationList[index];
			},

			typeListCallback(index) {
				this.optionalModel.type = this.typeList[index];
			},

			reset() {
				this.model.name = '';
				this.model.district = '';
				this.model.area = '';
				this.model.phone = '';
				this.model.koseki = '';
				this.model.marrige = '';
				this.model.trade = '';
				this.model.usage = '';

				this.optionalModel.level = '';
				this.optionalModel.decoration = '';
				this.optionalModel.type = '';
				this.optionalModel.minBudget = '';
				this.optionalModel.minFloor = '';
				this.optionalModel.minRoom = '';
				this.optionalModel.minSquare = '';
				this.optionalModel.maxBudget = '';
				this.optionalModel.maxFloor = '';
				this.optionalModel.maxRoom = '';
				this.optionalModel.maxSquare = '';
			},

			submit() {
				this.$refs.uForm0.validate(valid => {
					if (valid) {
						console.log('验证通过');
						this.NewHouse();
					} else {
						console.log('验证失败');
					}
				});
			},

			NewHouse() {
				this.$u.post(config.server + '/NewInquiry', {
					DBName: this.user.DBName,
					CustName: this.model.name,
					Trade: this.model.trade,
					PropertyUsage: this.optionalModel.usage,
					Country: this.model.district,
					CustMobile: this.model.phone,
					PropertyFloor: this.model.marrige,
					DistrictName: this.model.district,
					AreaID: this.model.areaId === null || this.model.areaId === undefined || this.model.areaId === '' ? '*' : this.model
						.areaId,
					CountF: this.optionalModel.maxSquare === null || this.optionalModel.maxSquare === undefined || this.optionalModel
						.maxSquare === '' ? '*' : this.optionalModel.maxSquare,
					PropertyType: this.optionalModel.type === null || this.optionalModel.type === undefined || this.optionalModel.type ===
						'' ? '*' : this.optionalModel.type,
					SquareMin: this.optionalModel.minSquare === null || this.optionalModel.minSquare === undefined || this.optionalModel
						.minSquare === '' ? '0' : this.optionalModel.minSquare,
					SquareMax: this.optionalModel.maxSquare === null || this.optionalModel.maxSquare === undefined || this.optionalModel
						.maxSquare === '' ? '0' : this.optionalModel.maxSquare,
					PriceMin: this.optionalModel.minBudget === null || this.optionalModel.minBudget === undefined || this.optionalModel
						.minBudget === '' ? '0' : this.optionalModel.minBudget,
					PriceMax: this.optionalModel.maxBudget === null || this.optionalModel.maxBudget === undefined || this.optionalModel
						.maxBudget === '' ? '0' : this.optionalModel.maxBudget,
					CustGrade: this.optionalModel.level === null || this.optionalModel.level === undefined || this.optionalModel.level ===
						'' ? '*' : this.optionalModel.level,
					CountFStart: this.optionalModel.minRoom === null || this.optionalModel.minRoom === undefined || this.optionalModel
						.minRoom === '' ? '*' : this.optionalModel.minRoom,
					FoorStart: this.optionalModel.minFloor === null || this.optionalModel.minFloor === undefined || this.optionalModel
						.minFloor === '' ? '*' : this.optionalModel.minFloor,
					FoorEnd: this.optionalModel.maxFloor === null || this.optionalModel.maxFloor === undefined || this.optionalModel
						.maxFloor === '' ? '*' : this.optionalModel.maxFloor,
					PropertyDecoration: this.optionalModel.decoration === null || this.optionalModel.decoration === undefined ||
						this.optionalModel.decoration === '' ? '*' : this.optionalModel.decoration,
					EmpNoOrTel: this.user.Tel,
				}, {
					'content-type': 'application/x-www-form-urlencoded'
				}).then(res => {
					console.log(res);
					if (res.Flag === 'success') {
						this.$refs.uToast.show({
							title: '新增客源成功',
							type: 'success',
							url: '/pages/Home/Home',
							isTab: true,
						});
					}
				}).catch(res => {
					console.log(res);
					this.$refs.uToast.show({
						title: '错误',
						type: 'error',
					});
				});
			},

			//根据城市名获取城区列表
			getDistrictsByCity(city) {
				this.$u.get(config.server + '/GetAllDistrictByCity', {
					CityName: city
				}).then(res => {
					this.districtList = res.Result;
				});
			},

			//根据城区名获取街道列表
			getAreaByDistrict(district) {
				this.$u.get(config.server + '/GetAllAreaByDistrict', {
					DistrictName: district
				}).then(res => {
					this.areaList = res.Result;
				});
			},

			// 选择地区回调
			regionConfirm(e) {
				this.model.region = e.province.label + '-' + e.city.label + '-' + e.area.label;
			}
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

	.moreInfoBox {}
</style>
