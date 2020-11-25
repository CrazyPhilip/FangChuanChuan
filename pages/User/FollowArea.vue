<template>
	<view class="content">
		<view class="u-tabs-box">
			<u-navbar is-back="true" title="关注区域"></u-navbar>
		</view>

		<view>
			<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition0"
			 label="区域列表" prop="myLocation" label-width="170">
			</u-form-item>
		</view>

		<!-- <view>
			<u-row gutter="10">
				<u-col span='1'>
					<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition0"
					 label="关注区域一" prop="focusLocation" label-width="170">
					</u-form-item>
				</u-col>
				<u-col span='11'>
					<u-form-item :label-position="labelPosition2">
						<u-button slot="right" type="success" @click="add">+</u-button>
					</u-form-item>
				</u-col>
			</u-row>
		</view> -->
		<u-divider v-if="showNone" bg-color="rgb(240, 240, 240)">未关注区域！</u-divider>
		<scroll-view scroll-y style="height: 100%;width: 100%;">

			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in focusAreaList" :key="index">
					<view class="tag" style="border-radius:2em / 5em ;">
						<view class="tagText">{{item.location}}</view>
						<u-icon type="success" name="close" color="#18B566" :index="index" @click="closeTag"></u-icon>
					</view>
					<!-- <u-tag v-text="item.location" type="success"  :closeable="true" :show="show_tag" @close="closeTag" shape = "circleRight"/>
					<u-tag text="this3" type="success" :closeable="true" :show="show_tag" @close="closeTag" /> -->
				</view>
			</view>
		</scroll-view>

		<view>
			<!-- <view>
				<u-row gutter="16" justify="center">

					<u-col span="4">
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition1"
						 label="城市" prop="city" label-width="170">
						</u-form-item>
					</u-col>

					<u-col span="4">
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition1"
						 label="城区" prop="district" label-width="170">
						</u-form-item>
					</u-col>

					<u-col span="4">
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition1"
						 label="街道" prop="area" label-width="170">
						</u-form-item>
					</u-col>

				</u-row>
			</view> -->

			<view>
				<view>
					<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition0"
					 label="新增区域" prop="myLocation" label-width="170">
					</u-form-item>
				</view>
				<u-row gutter="16" justify="center">
					<u-col span="4">
						<u-input :border="border" type="select" :select-open="cityListShow" v-model="model.city" placeholder="请选择城市"
						 @click="cityListShow = true"></u-input>
					</u-col>

					<u-col span="4">
						<u-input :border="border" type="select" :select-open="districtListShow" v-model="model.district" placeholder="请选择城区"
						 @click="districtListShow = true"></u-input>
					</u-col>

					<u-col span="4">
						<u-input :border="border" type="select" :select-open="areaListShow" v-model="model.area" placeholder="请选择街道"
						 @click="areaListShow = true"></u-input>
					</u-col>

				</u-row>
				<u-picker mode="selector" v-model="districtListShow" range-key="town" :default-selector="[0]" :range="districtList"
				 @confirm="districtListCallback"></u-picker>
				<u-picker mode="selector" v-model="areaListShow" range-key="village" :default-selector="[0]" :range="areaList"
				 @confirm="areaListCallback"></u-picker>
			</view>
			<u-row style="margin: 30rpx 0;">
				<u-col span="6">
					<u-button @click="reset()">取消</u-button>
				</u-col>
				<u-col span="6">
					<u-button @click="add()">提交</u-button>
				</u-col>
			</u-row>
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
				swiperCurrent: 0,
				tabsHeight: 0,
				current: 0,
				showImg: false,
				result: '区域',
				show: false,
				scrollTop: 0,
				myLocation: '',
				show_tag: true,
				showNone: true,
				model: {
					city: '成都',
					district: '',
					area: '',
					dBName: '',
				},
				//dBList: '', // cd_xipu,cd_wenxingzhen 字串
				//addressList: '', //成都>郫都>犀浦,成都>双流>文星镇 字串
				dbArray: [this.user.DBName], //用于判重，初始化 为所在数据库
				cityList: [],
				districtList: [],
				areaList: [],
				focusAreaList: [], //数据显示绑定
				focusAreaListSource: [], //数据源 绑定，不用于显示
				districtListShow: false,
				areaListShow: false,
				cityListShow: false,
				labelPosition0: 'left',
				labelPosition1: 'center',
				labelPosition2: 'right',
				border: false,

			};
		},

		onLoad() {
			this.getDistrictsByCity('cd');
			this.getFollowArea();
			this.showImg = true;
		},

		computed: {
			...mapState(['user'])
		},

		methods: {

			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},

			add() {
				if (this.focusAreaList.length >= 3) //最多只能添加3个
				{
					this.$u.toast('最多只能添加3个关注区域！');
				} else if (this.dbArray.indexOf(this.model.dBName) > -1) { //已存在
					this.$u.toast('已关注该区域！');
				} else {
					this.submit();
				}

			},
			closeTag(index) {
				console.log(index);

				uni.showModal({
					title: '提示',
					content: '是否删除\"' + this.focusAreaList[index].location + '\"？',
					success: function(res) {
						var that = this;
						if (res.confirm) {

							this.deleteFollowArea(index);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}.bind(this)
				});
			},

			reset() {
				this.model.district = '';
				this.model.area = '';
			},

			deleteFollowArea(index) {
				this.$u.get(config.server + '/CheckDelFocusArea', {
					DBName: this.focusAreaList[index].dbName, //待删除 关注区域的 数据库名
					EmpNo: this.user.EmpID,
				}).then(res => {
					this.$u.toast(res.Msg);
					if (res.Flag === 'success') { //可删除
						this.focusAreaListSource.splice(index, 1); //更新数据源，但不更新view
						var followAreaString = this.getFollowAreaString();
						this.updateFollowArea(followAreaString);
					} else {
						this.$u.toast('该区域存在已抢房房源,不可删除！');
					}
				});
			},


			confirm(e) {
				this.result = '';
				e.map((val, index) => {
					this.result = val.label;
				})
			},

			cancel(e) {
				console.log(e);
			},
			submit() {

				if (this.model.city === '' || this.model.district === '' || this.model.area === '') {
					this.$u.toast('请选择区域');
				} else if (this.dbArray.indexOf(this.model.dBName) > -1) { //已存在
					this.$u.toast('已关注该区域！');
				} else {
					var newFollowArea = {};
					newFollowArea['city'] = this.model.city;
					newFollowArea['district'] = this.model.district;
					newFollowArea['area'] = this.model.area;
					newFollowArea['dbName'] = this.model.dBName;
					this.focusAreaListSource.push(newFollowArea); //先更新界面视图，再更新后台

					var followAreaString = this.getFollowAreaString();
					this.updateFollowArea(followAreaString);
				}

			},

			getFollowAreaString() { //通过focusAreaListSource 字段拼接 followArea字符串
				var dBList = '';
				var addressList = '';
				for (var i in this.focusAreaListSource) {
					dBList = dBList + this.focusAreaListSource[i]['dbName'] + ',';
					addressList = addressList + this.focusAreaListSource[i]['city'] + '>' + this.focusAreaListSource[i]['district'] +
						'>' + this.focusAreaListSource[
							i]['area'] + ',';
				}
				dBList = dBList.slice(0, -1); //去掉最后一个逗号 
				//addressList = addressList.slice(0, -1); //去掉最后一个逗号 
				var followAreaString = dBList + ";" + addressList;
				followAreaString = followAreaString.slice(0, -1); //去掉最后一个逗号 
				return followAreaString;
			},

			getFollowArea() {
				this.$u.get(config.server + '/GetFocusAreas', {
					DBName: this.user.DBName,
					EmpNo: this.user.EmpID,
				}).then(res => {
					//this.$u.toast(res.Msg);
					if (res.Flag === 'success') {
						var content = res.Result;
						var FollowArea = content[0]['FollowArea'];
						this.focusAreaListSource = FollowArea === '' ? [] : this.getFocusLocationList(FollowArea);
						this.focusAreaList = FollowArea === '' ? [] : this.getFocusLocationList(FollowArea);
						this.showNone = this.focusAreaList.length > 0 ? false : true;
						this.reset();

						//设置关注区域和所在区域为Tag
						var tagList = [];
						for (var i in this.focusAreaList) {
							tagList.push(this.focusAreaList[i].dbName);
						}
						tagList.push(this.user.DBName);
						const jyJPush = uni.requireNativePlugin('JY-JPush');
						jyJPush.addJYJPushTagsWithArr({ //以数组方式设置
							userTags: tagList
						}, result => {
							/* uni.showToast({
								icon: 'none',
								title: JSON.stringify(result)
							}) */
						});
					}
				});
			},
			districtListCallback(index) {
				this.district = this.districtList[index].town;
				this.model.district = this.districtList[index].town;
				console.log(this.model.district);
				this.getAreaByDistrict(this.model.district);
			},

			updateFollowArea(followArea) {
				this.$u.get(config.server + '/UpdateFocusArea', {
					DBName: this.user.DBName,
					EmpNo: this.user.EmpID,
					FollowArea: followArea,
				}).then(res => {
					if (res.Flag === 'success') {
						console.log('更新成功');
						this.$u.toast('更新成功');
						this.getFollowArea(); //刷新视图
					} else {
						this.$u.toast('更新失败');
					}
				});
			},

			areaListCallback(index) {
				this.area = this.areaList[index].dbName;
				this.model.dBName = this.areaList[index].dbName;
				this.model.area = this.areaList[index].village;
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
				this.model.area = '';
				this.$u.get(config.server + '/GetAllAreaByDistrict', {
					DistrictName: district
				}).then(res => {
					this.areaList = res.Result;
				});
			},

			getFocusLocationList(content) {
				if (content != null) {
					var location = content.split(";");
					var dbArray = location[0].split(",");
					var areas = location[1].split(",");
					var list = [];
					this.dbArray = []; //清空
					this.dbArray.push(this.user.DBName);
					for (var i in areas) {

						var array = areas[i].split(">");
						var item = {};
						item['city'] = array[0];
						item['district'] = array[1];
						item['area'] = array[2];
						item['dbName'] = dbArray[i];
						this.dbArray.push(item['dbName']); //加入判重数组
						item['location'] = item['city'] + " --> " + item['district'] + " --> " + item['area'];
						list.push(item);
					}
					return list;
				}

			},
		},
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>

<style>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #f2f2f2;
	}

	/* #endif */
</style>

<style lang="scss" scoped>
	.content {
		padding: 0 40rpx;
	}


	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
	}

	.uni-list .uni-list-cell {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;

		.BiKan {
			font-size: xx-small;
			padding: 2rpx;
			background-color: #FA3534;
			border-radius: 10rpx;
			color: white;
		}

		.HouseTitle {
			font-weight: bolder;
			font-size: large;
			max-lines: 2;
			overflow: hidden;
			text-overflow: ellipsis;
			/*设置成弹性盒子 */
			display: -webkit-box;
			/*显示的个数 */
			-webkit-line-clamp: 2;
			/* 属性规定框的子元素应该被水平或垂直排列。 */
			-webkit-box-orient: vertical;
		}

		.HouseTag {
			max-lines: 1;
			font-weight: lighter;
			font-size: xx-small;
			background-color: #A0CFFF;
			border-radius: 10rpx;
			color: white;
			padding: 2rpx;
			margin-right: 4rpx;
		}

		.HousePrice {
			font-weight: bolder;
			font-size: large;
			color: #FA3534;
		}

		.HouseUnitPrice {
			font-size: x-small;
		}

	}


	.tag {
		border: 1rpx solid #18B566;
		border-radius: 8rpx;
		background-color: #c0ffbc;
		display: flex;
		flex-direction: row;
		padding: 8rpx;
	}

	.tagText {
		color: #18B566;
	}
</style>
