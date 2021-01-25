<template>
	<view class="">
		<u-navbar is-back="true" title="全网房源"></u-navbar>

		<view>
			<u-dropdown ref="uDropdown" activeColor="#2979ff">
				<!-- <u-dropdown-item @change="change1" v-model="value1" :options="areaList"></u-dropdown-item> -->
				<u-dropdown-item :title="areaList[value1].areName">
					<u-row>
						<u-col span="6">
							<scroll-view scroll-y="true" style="height: 500rpx;">
								<view class="u-text-center u-content-color u-m-t-30 u-m-b-30" v-for="(item, index) in areaList" @click="changeArea(index)">{{item.areName}}</view>
							</scroll-view>
						</u-col>
						<u-col span="6">
							<scroll-view scroll-y="true" style="height: 500rpx;">
								<view class="u-text-center u-content-color u-m-t-30 u-m-b-30" v-for="(item, index) in subAreaList" @click="changeSubArea(index)">{{item.areName}}</view>
							</scroll-view>
						</u-col>
					</u-row>
					<!-- 
					<view class="slot-content" style="background-color: #FFFFFF;">
						
						
					</view> -->
				</u-dropdown-item>
				<u-dropdown-item @change="change2" v-model="value2" :title="fangxingList[value2].label" :options="fangxingList"></u-dropdown-item>
				<u-dropdown-item @change="change3" v-model="value3" :title="priceList[value3].label" :options="priceList"></u-dropdown-item>
				<u-dropdown-item @change="change4" v-model="value4" :title="squareList[value4].label" :options="squareList"></u-dropdown-item>
			</u-dropdown>

			<!-- <u-row gutter="16" justify="center">
				<u-col span="3">
					<view>

						<u-button type="primary" shape="square" size="small" :ripple="true" @click="btnClick">{{ result }}</u-button>
					</view>
				</u-col>

				<u-col span="9">
					<u-dropdown ref="uDropdown" activeColor="#2979ff">
						<u-dropdown-item @change="change2" v-model="value2" :title="options2[value2].label" :options="options2"></u-dropdown-item>
						<u-dropdown-item @change="change3" v-model="value3" :title="options3[value3].label" :options="options3"></u-dropdown-item>
						<u-dropdown-item @change="change4" v-model="value4" :title="options4[value4].label" :options="options4"></u-dropdown-item>
					</u-dropdown>
				</u-col>
			</u-row> -->
		</view>

		<view class="uni-list">
			<view class="uni-list-cell" v-for="(item,index) in houseList" :key="index" @tap="ToHouseDetail(index)">
				<view class="left">
					<u-image width="250" height="200" border-radius="8" :src="item.proCoverUrl" error-icon="/static/icon/NullPic.png"
					 mode="aspectFill"></u-image>
				</view>

				<view class="right">
					<text class="BiKan">必看</text>
					<view class="title">{{item.proTitle}}</view>
					<view>
						<text class="HouseTag">{{item.proDistrict}}</text>
						<text class="HouseTag">{{item.proArea}}</text>
						<text class="HouseTag">VR</text>
						<text class="HouseTag">随时看房</text>
					</view>
					<view class="">{{item.proCountF}}室{{item.proCountT}}厅/{{item.proSquare}}㎡/{{item.proDirection}}/{{item.EstateName}}</view>
					<view>
						<u-row>
							<u-col class="HousePrice" span="6">{{item.proPrice}}{{item.proPriceType}}</u-col>
							<u-col class="HouseUnitPrice" span="6">{{item.proUnitPrice}}{{item.proUnitPriceType}}</u-col>
						</u-row>
					</view>
				</view>

			</view>
		</view>

		<u-loadmore :status="status" :icon-type="iconType" :load-text="loadText" />
		<u-back-top :scroll-top="scrollTop"></u-back-top>
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
				/* searchParam: {
					areaId: 0,
					areaLevel: 0,
					completeYearRanges: [{
						maxValue: 100,
						minValue: 0
					}],
					countFRanges: [{
						maxValue: 100,
						minValue: 0
					}],
					decorations: [],
					directions: [],
					floors: [],
					houseAreaRanges: [{
						maxValue: 100,
						minValue: 0
					}],
					houseTypes: [],
					keyWords: "",
					rentRanges: [{
						maxValue: 100,
						minValue: 0
					}],
					saleRanges: [{
						maxValue: 100,
						minValue: 0
					}],
					sortByHouseArea: -1,
					sortByLatest: -1,
					sortBySoldPrice: -1,
					sortByUnitPrice: -1
				}, */
				scrollTop: 0,
				current: 0,
				show: false,
				value1: 0,
				areaValue: 0,
				subAreaValue: 0,
				value2: 0,
				value3: 0,
				value4: 0,
				defaultValue: [0, 0, 0],
				areaList: [{
					areId: -1,
					areaLevel: 1,
					areName: "全部区域"
				}],

				subAreaList: [],

				fangxingList: [{
						label: '全部房型',
						value: 0,
						maxValue: 99999999,
						minValue: 0
					},
					{
						label: '1室',
						value: 1,
						maxValue: 1,
						minValue: 1
					},
					{
						label: '2室',
						value: 2,
						maxValue: 2,
						minValue: 2
					},
					{
						label: '3室',
						value: 3,
						maxValue: 3,
						minValue: 3
					},
					{
						label: '4室',
						value: 4,
						maxValue: 4,
						minValue: 4
					},
					{
						label: '5室',
						value: 5,
						maxValue: 5,
						minValue: 5
					},
					{
						label: '6室及以上',
						value: 6,
						maxValue: 99999999,
						minValue: 6
					},
				],

				priceList: [{
						label: '全部价格',
						value: 0,
						maxValue: 99999999,
						minValue: 0
					},
					{
						label: '小于40万',
						value: 1,
						maxValue: 40,
						minValue: 0
					},
					{
						label: '50-80万',
						value: 2,
						maxValue: 80,
						minValue: 50
					},
					{
						label: '80-100万',
						value: 3,
						maxValue: 100,
						minValue: 80
					},
					{
						label: '100-120万',
						value: 4,
						maxValue: 120,
						minValue: 100
					},
					{
						label: '120-200万',
						value: 5,
						maxValue: 200,
						minValue: 120
					},
					{
						label: '200-500万',
						value: 6,
						maxValue: 500,
						minValue: 200
					},
					{
						label: '大于500万',
						value: 7,
						maxValue: 99999999,
						minValue: 500
					},
				],

				squareList: [{
						label: '全部面积',
						value: 0,
						maxValue: 99999999,
						minValue: 0
					},
					{
						label: '小于50㎡',
						value: 1,
						maxValue: 50,
						minValue: 0
					},
					{
						label: '50-70㎡',
						value: 2,
						maxValue: 70,
						minValue: 50
					},
					{
						label: '70-90㎡',
						value: 3,
						maxValue: 90,
						minValue: 70
					},
					{
						label: '90-120㎡',
						value: 4,
						maxValue: 120,
						minValue: 90
					},
					{
						label: '120-140㎡',
						value: 5,
						maxValue: 140,
						minValue: 120
					},
					{
						label: '140-200㎡',
						value: 6,
						maxValue: 200,
						minValue: 140
					},
					{
						label: '大于200㎡',
						value: 7,
						maxValue: 99999999,
						minValue: 200
					}
				],

				/* list: [{
						value: 1,
						label: '中国',
						children: [{
								value: 2,
								label: '广东',
								children: [{
										value: 3,
										label: '深圳'
									},
									{
										value: 4,
										label: '广州'
									}
								]
							},
							{
								value: 5,
								label: '广西',
								children: [{
										value: 6,
										label: '南宁'
									},
									{
										value: 7,
										label: '桂林'
									}
								]
							}
						]
					},
					{
						value: 8,
						label: '美国',
						children: [{
							value: 9,
							label: '纽约',
							children: [{
								value: 10,
								label: '皇后街区'
							}]
						}]
					}
				], */

				houseList: [],

				houseCount: 0,

				pageSize: 20,
				pageNum: 1,
				status: 'loadmore',
				iconType: 'flower',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
			}
		},

		onLoad() {
			this.getAreaList();
			this.GetHouseList();
		},

		onReachBottom() {
			this.status = 'loading';
			this.pageNum = ++this.pageNum;
			this.GetHouseList();
		},


		computed: {
			...mapState(['city'])
		},


		methods: {
			ToHouseDetail: function(index) {
				//console.log(JSON.stringify(this.houseList[index]));
				uni.navigateTo({
					url: 'HouseDetail2?proId=' + this.houseList[index].proId + "&cityPinYin=" + "chengdu"
				});
			},

			btnClick() {
				this.show = true;
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
			//筛选区域
			changeArea(e) {
				this.areaValue = e;
				//this.$refs.uDropdown.close();
				//this.houseList.splice(0, this.houseList.length);
				//this.GetHouseList();
			},
			changeSubArea(e) {
				this.subAreaValue = e;
				this.$refs.uDropdown.close();
				this.getSubAreaList(this.subAreaList[e].areId);
				//this.houseList.splice(0, this.houseList.length);
				//this.GetHouseList();
			},
			// 筛选房型
			change2(e) {
				this.value2 = e;
				this.houseList.splice(0, this.houseList.length);
				this.GetHouseList();
			},
			// 筛选价格
			change3(e) {
				this.value3 = e;
				this.houseList.splice(0, this.houseList.length);
				this.GetHouseList();
			},
			// 筛选面积
			change4(e) {
				this.value4 = e;
				this.houseList.splice(0, this.houseList.length);
				this.GetHouseList();
			},

			GetHouseList() {
				/* uni.request({
					url: 'https://gl.junjunhouse.com/property/search?cityPinYin=chengdu&pageNum=' + this.pageNum +
						'&pageSize=' + this.pageSize,
					method: 'post',
					data: {},
					success: (res) => {
						// console.log(res);
						let data = res.data.data;
						for (var i = 0; i < data.list.length; i++) {
							this.houseList.push(data.list[i]);
						}

						if (data.list.length === 0) {
							this.status = 'nomore';
						} else {
							this.status = 'loadmore';
						}
					} */
				let searchParam = {
					saleRanges: [{
						maxValue: 99999999,
						minValue: 0
					}]
				};

				// 关键词
				/* if (this.searchContent){
					searchParam.keyWords = this.searchContent;
				} */

				// 区域id
				if (this.value1 > 0) {
					searchParam.areaId = this.areaList[this.value1].areId;
					searchParam.areaLevel = this.areaList[this.value1].areLevel;
				}

				// 房型
				if (this.value2 > 0) {
					searchParam.countFRanges = [{
						maxValue: this.fangxingList[this.value2].maxValue,
						minValue: this.fangxingList[this.value2].minValue
					}]
				}

				// 价格    
				if (this.value3 > 0) {
					searchParam.saleRanges = [{
						maxValue: this.priceList[this.value3].maxValue,
						minValue: this.priceList[this.value3].minValue
					}]
				}

				// 面积
				if (this.value4 > 0) {
					searchParam.houseAreaRanges = [{
						maxValue: this.squareList[this.value4].maxValue,
						minValue: this.squareList[this.value4].minValue
					}]
				}

				uni.request({
					url: config.outerServer + '/property/search?cityPinYin=chengdu&pageNum=' + this.pageNum +
						'&pageSize=' + this.pageSize,
					method: 'post',
					data: searchParam,
					success: (res) => {
						// console.log(res);
						if (res.data.data) {
							let data = res.data.data;

							for (var i = 0; i < data.list.length; i++) {
								this.houseList.push(data.list[i]);
							}

							if (data.list.length === 0) {
								this.status = 'nomore';
							} else {
								this.status = 'loadmore';
							}
						} else {
							this.status = 'nomore';
						}
					}
				});
				/* 
				this.$u.post(this.global_data.global_data.BaseUrl + 'property/search?cityPinYin=chengdu&pageNum=' + this.pageNum +
					'&pageSize=' +
					this.pageSize, {
						cityPinYin: this.global_data.global_data.city.cityPinYin,
						pageNum: this.pageNum,
						pageSize: this.pageSize,
						searchParam: {
							areaId: 0,
							areaLevel: 0,
							completeYearRanges: [{
								maxValue: 100,
								minValue: 0
							}],
							countFRanges: [{
								maxValue: 100,
								minValue: 0
							}],
							decorations: [
								"精装"
							],
							directions: [
								"string"
							],
							floors: [
								"string"
							],
							houseAreaRanges: [{
								maxValue: 100,
								minValue: 0
							}],
							houseTypes: [
								"string"
							],
							keyWords: "string",
							rentRanges: [{
								maxValue: 100,
								minValue: 0
							}],
							saleRanges: [{
								maxValue: 100,
								minValue: 0
							}],
							sortByHouseArea: -1,
							sortByLatest: -1,
							sortBySoldPrice: -1,
							sortByUnitPrice: -1
						}
					}, {}).then(res => {
					//console.log(res);
					for (var i = 0; i < res.data.list.length; i++) {
						this.houseList.push(res.data.list[i]);
					}

					if (res.data.list.length === 0) {
						this.status = 'nomore';
					} else {
						this.status = 'loadmore';
					}
				})
			 */
			},

			loadmore() {
				this.pageNum = this.pageNum + 1;
				this.GetHouseList();
			},

			getAreaList() {
				uni.request({
					url: config.outerServer + '/area/getAreaByPCode',
					data: {
						cityPinYin: this.city.cityPinYin,
						pAreaCode: 1
					},
					success: (res) => {
						console.log(res.data.code);
						/* console.log(res);
						let data = res.data;
						if (res.code == 200) {
							if (!data) return;
							console.log(data);
							for (var i = 0; i < res.data.length; i++) {
								this.areaList.push({
									value: i + 1,
									label: res.data[i].areName
								});
							}
							console.log(this.areaList);
						} */
						let data = res.data;
						if (data.code == 200) {
							if (!data.data) return;
							for (var i = 0; i < data.data.length; i++) {
								this.areaList.push({
									areId: data.data[i].areId,
									areLevel: data.data[i].areLevel,
									areName: data.data[i].areName
								});
							}
							console.log(this.areaList);
						}
					}
				})
			},

			getSubAreaList(pAreaId) {
				uni.request({
					url: config.outerServer + '/area/getAreaByPId',
					data: {
						cityPinYin: this.city.cityPinYin,
						pAreaId: pAreaId
					},
					success: (res) => {
						console.log(res.data.code);
						/* console.log(res);
						let data = res.data;
						if (res.code == 200) {
							if (!data) return;
							console.log(data);
							for (var i = 0; i < res.data.length; i++) {
								this.areaList.push({
									value: i + 1,
									label: res.data[i].areName
								});
							}
							console.log(this.areaList);
						} */
						let data = res.data;
						if (data.code == 200) {
							if (!data.data) return;
							for (var i = 0; i < data.data.length; i++) {
								this.subAreaList.push({
									areId: data.data[i].areId,
									areLevel: data.data[i].areLevel,
									areName: data.data[i].areName
								});
							}
							console.log(this.subAreaList);
						}
					}
				})
			},
		},

		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},

		params: {
			year: true,
			month: true,
			day: true,
			hour: true,
			minute: true,
			second: true,
			province: true,
			city: true,
			area: true,
			timestamp: true
		}
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>

<style lang="scss" scoped>
	.uni-list-cell {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
	}

	.left {
		width: 250rpx;
	}

	.right {
		width: 430rpx;
		margin-left: 20rpx;
	}

	.title {
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

	.BiKan {
		font-size: small;
		padding: 2rpx;
		background-color: #FA3534;
		border-radius: 10rpx 10rpx 10rpx 0;
		color: white;
	}

	.HouseTag {
		max-lines: 1;
		font-weight: lighter;
		font-size: small;
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
		font-size: small;
	}
</style>
