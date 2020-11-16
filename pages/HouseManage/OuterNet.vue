<template>
	<view class="">
		<u-navbar is-back="true" title="全网房源"></u-navbar>

		<view>
			<u-dropdown ref="uDropdown" activeColor="#2979ff">
				<!-- <u-dropdown-item @change="change1" v-model="value1" :options="areaList"></u-dropdown-item> -->
				<u-dropdown-item :title="areaList[value1].label">
					<view class="slot-content" style="background-color: #FFFFFF;">
						<scroll-view scroll-y="true" style="height: 500rpx;">
							<view class="u-text-center u-content-color u-m-t-30 u-m-b-30" v-for="(item, index) in areaList" @click="change1(item.value)">{{item.label}}</view>
						</scroll-view>
					</view>
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
	export default {
		data() {
			return {
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
				},
				scrollTop: 0,
				current: 0,
				show: false,
				value1: 0,
				value2: 0,
				value3: 0,
				value4: 0,
				defaultValue: [0, 0, 0],
				areaList: [{
					value: 0,
					label: '全部区域'
				}],

				fangxingList: [{
						label: '全部房型',
						value: 0,
					},
					{
						label: '1室',
						value: 1,
					},
					{
						label: '2室',
						value: 2,
					},
					{
						label: '3室',
						value: 3,
					},
					{
						label: '4室',
						value: 4,
					},
					{
						label: '5室',
						value: 5,
					},
					{
						label: '5室及以上',
						value: 6,
					},
				],

				priceList: [{
						label: '全部价格',
						value: 0,
					},
					{
						label: '小于40万',
						value: 1,
					},
					{
						label: '50-80万',
						value: 2,
					},
					{
						label: '80-100万',
						value: 3,
					},
					{
						label: '100-120万',
						value: 4,
					},
					{
						label: '120-200万',
						value: 5,
					},
					{
						label: '200-500万',
						value: 6,
					},
					{
						label: '大于500万',
						value: 7,
					},
				],

				squareList: [{
						label: '全部面积',
						value: 0,
					},
					{
						label: '小于50㎡',
						value: 1,
					},
					{
						label: '50-70㎡',
						value: 2,
					},
					{
						label: '70-90㎡',
						value: 3,
					},
					{
						label: '90-120㎡',
						value: 4,
					},
					{
						label: '120-140㎡',
						value: 5,
					},
					{
						label: '140-200㎡',
						value: 6,
					},
					{
						label: '大于200㎡',
						value: 7,
					}
				],

				list: [{
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

			change1(e) {
				this.value1 = e;
				this.$refs.uDropdown.close();
			},
			change2(e) {
				this.value2 = e;
			},
			change3(e) {
				this.value3 = e;
			},
			change4(e) {
				this.value4 = e;
			},

			GetHouseList() {
				uni.request({
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
				this.$u.get("https://gl.junjunhouse.com/area/getAreaByPCode", {
					cityPinYin: this.global_data.global_data.user.cityPinYin,
					pAreaCode: 1
				}).then(res => {
					let data = res.data;
					if (res.code == 200) {
						if (!data) return;
						for (var i = 0; i < res.data.length; i++) {
							this.areaList.push({
								value: i + 1,
								label: res.data[i].areName
							});
						}
					}
				})
			}
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
	
	.left{
		width: 250rpx;
	}
	
	.right{
		width: 430rpx;
		margin-left: 20rpx;
	}
	
	.title{
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
