<template>
	<view class="">
		<u-navbar is-back="true" title="">
			<view style="border-width: 2rpx;border-color: #007AFF;border-radius: 8rpx;padding: 10rpx;background-color: #007AFF;">
				<picker @change="typeChange" :value="typeValue" :range="typeList">
					<text style="font-size: 30rpx;color: white;">{{typeList[typeValue]}}</text>
				</picker>
			</view>
			<view class="search-wrap">
				<u-search placeholder="输入小区名搜索房源" v-model="searchContent" @custom="toSearch" @search="toSearch"></u-search>
			</view>
		</u-navbar>

		<view>
			<u-dropdown ref="uDropdown" activeColor="#2979ff">
				<!-- <u-dropdown-item @change="change1" v-model="value1" :options="areaList"></u-dropdown-item> -->
				<u-dropdown-item :title="areaList[areaSelected].areName">
					<view class="slot-content" style="background-color: #FFFFFF;">
						<scroll-view scroll-y="true" style="height: 500rpx;">
							<view class="u-text-center u-content-color u-m-t-30 u-m-b-30" v-for="(item, index) in areaList" @click="change1(index)">{{item.areName}}</view>
						</scroll-view>
					</view>
				</u-dropdown-item>
				<u-dropdown-item @change="change2" v-model="fangxingSelected" :title="fangxingList[fangxingSelected].label" :options="fangxingList"></u-dropdown-item>
				<u-dropdown-item v-if="typeValue === 0" @change="change3" v-model="salePriceSelected" :title="salePriceList[salePriceSelected].label" :options="salePriceList"></u-dropdown-item>
				<u-dropdown-item v-if="typeValue === 1" @change="change3" v-model="rentPriceSelected" :title="rentPriceList[rentPriceSelected].label" :options="rentPriceList"></u-dropdown-item>
				<u-dropdown-item @change="change4" v-model="squareSelected" :title="squareList[squareSelected].label" :options="squareList"></u-dropdown-item>
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
					 mode="aspectFill">
						<u-loading slot="loading"></u-loading>
					 </u-image>
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
					<view v-if="typeValue === 0">
						<u-row>
							<u-col class="HousePrice" span="6">{{item.proPrice}}{{item.proPriceType}}</u-col>
							<u-col class="HouseUnitPrice" span="6">{{item.proUnitPrice}}{{item.proUnitPriceType}}</u-col>
						</u-row>
					</view>
					<view v-if="typeValue === 1" class="HousePrice">{{item.proRentPrice}}{{item.proRentPriceType}}</view>
				</view>

			</view>
		</view>

		<u-loadmore :status="status" :icon-type="iconType" :load-text="loadText" />
		<u-back-top :scroll-top="scrollTop"></u-back-top>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex';
	import config from '../../api/config.js';

	export default {
		data() {
			return {
				scrollTop: 0,
				current: 0,
				show: false,
				areaSelected: 0,
				fangxingSelected: 0,
				salePriceSelected: 0,
				rentPriceSelected: 0,
				squareSelected: 0,
				areaList: [{
					areId:-1,
					areaLevel:1,
					areName:"全部区域"
				}],
				
				typeValue: 0,
				typeList: ['二手房', '租房'],
				
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
				
				salePriceList: [{
						label: '全部价格',
						value: 0,
						maxValue: 100000000,
						minValue: 1
					},
					{
						label: '小于40万',
						value: 1,
						maxValue: 40,
						minValue: 1
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
						maxValue: 100000000,
						minValue: 500
					},
				],

				rentPriceList: [{
						label: '全部价格',
						value: 0,
						maxValue: 100000000,
						minValue: 1
					},
					{
						label: '小于500元',
						value: 1,
						maxValue: 500,
						minValue: 1
					},
					{
						label: '500-1000',
						value: 2,
						maxValue: 1000,
						minValue: 500
					},
					{
						label: '1000-2000',
						value: 3,
						maxValue: 2000,
						minValue: 1000
					},
					{
						label: '2000-3000',
						value: 4,
						maxValue: 3000,
						minValue: 2000
					},
					{
						label: '3000-5000',
						value: 5,
						maxValue: 5000,
						minValue: 3000
					},
					{
						label: '5000-8000',
						value: 6,
						maxValue: 8000,
						minValue: 5000
					},
					{
						label: '大于8000元',
						value: 7,
						maxValue: 100000000,
						minValue: 8000
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
				
				searchContent:''
			}
		},

		onLoad: function(params) {
			this.searchContent = decodeURIComponent(params.keyword);
			
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
			typeChange(e) {
				this.typeValue = e.detail.value;
				this.GetHouseList();
			},
			
			toSearch(){
				this.houseList.splice(0, this.houseList.length);
				this.GetHouseList();
			},
			
			ToHouseDetail(index) {
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
			
			// 筛选区域
			change1(e) {
				this.areaSelected = e;
				this.$refs.uDropdown.close();
				this.houseList.splice(0, this.houseList.length);
				this.GetHouseList();
			},
			
			// 筛选房型
			change2(e) {
				this.fangxingSelected = e;
				this.houseList.splice(0, this.houseList.length);
				this.GetHouseList();
			},
			
			// 筛选价格
			change3(e) {
				if (this.typeValue === 0){
					this.salePriceSelected = e;
				} else {
					this.rentPriceSelected = e;
				}
				
				this.houseList.splice(0, this.houseList.length);
				this.GetHouseList();
			},
			
			// 筛选面积
			change4(e) {
				this.squareSelected = e;
				this.houseList.splice(0, this.houseList.length);
				this.GetHouseList();
			},

			GetHouseList() {
				let searchParam = {};
				
				if (this.typeValue === 0) {
					searchParam.saleRanges = [{
						maxValue: 100000000,
						minValue: 1
					}];
				} else {
					searchParam.rentRanges = [{
						maxValue: 100000000,
						minValue: 1
					}];
				}
				
				// 关键词
				if (this.searchContent){
					searchParam.keyWords = this.searchContent;
				}
				
				// 区域id
				if (this.areaSelected > 0){
					searchParam.areaId = this.areaList[this.areaSelected].areId;
					searchParam.areaLevel = this.areaList[this.areaSelected].areLevel;
				}
				
				// 房型
				if (this.fangxingSelected > 0){
					searchParam.countFRanges = [{
						maxValue: this.fangxingList[this.fangxingSelected].maxValue,
						minValue: this.fangxingList[this.fangxingSelected].minValue
					}]
				}
				
				// 价格
				if (this.typeValue === 0) {
					searchParam.saleRanges = [{
						maxValue: this.salePriceList[this.salePriceSelected].maxValue,
						minValue: this.salePriceList[this.salePriceSelected].minValue
					}]
				} else {
					searchParam.rentRanges = [{
						maxValue: this.rentPriceList[this.rentPriceSelected].maxValue,
						minValue: this.rentPriceList[this.rentPriceSelected].minValue
					}];
				}
				
				// 面积
				if (this.squareSelected > 0){
					searchParam.houseAreaRanges = [{
						maxValue: this.squareList[this.squareSelected].maxValue,
						minValue: this.squareList[this.squareSelected].minValue
					}]
				}
				
				uni.request({
					url: config.outerServer + '/property/search?cityPinYin=chengdu&pageNum=' + this.pageNum +
						'&pageSize=' + this.pageSize,
					method: 'post',
					data: searchParam,
					success: (res) => {
						// console.log(res);
						if (res.data.data){
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
									areId:data.data[i].areId,
									areLevel:data.data[i].areLevel,
									areName: data.data[i].areName
								});
							}
						}
					}
				})
			}
		},

		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
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
	.search-wrap {
		margin: 0 20rpx;
		flex: 1;
	}
	
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
