<template>
	<view>
		<u-navbar is-back="true" title="">
			<view class="search-wrap">
				<u-search placeholder="输入小区名搜索房源" v-model="searchContent" @custom="toSearch" @search="toSearch"></u-search>
			</view>
		</u-navbar>
		
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper ref="tabs" :list="[{name:'出售'}, {name:'出租'}]" :current="current" @change="showChange"
				 :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>

			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">

				<swiper-item class="swiper-item">
					<view>
						<u-row gutter="16" justify="center">
							<!-- <u-col span="3">
								<view>
									<u-select v-model="show" :default-value="defaultValue" mode="mutil-column-auto" :list="list" @confirm="confirm"
									 @cancel="cancel"></u-select>
									<u-button type="primary" shape="square" size="small" :ripple="true" @click="btnClick">{{ result }}</u-button>
								</view>
							</u-col> -->

							<u-col span="12">
								<u-dropdown ref="uDropdown" activeColor="#2979ff">
									<u-dropdown-item @change="change02" v-model="value02" :title="options2[value02].label" :options="options2"></u-dropdown-item>
									<u-dropdown-item @change="change03" v-model="value03" :title="options3[value03].label" :options="options3"></u-dropdown-item>
									<u-dropdown-item @change="change04" v-model="value04" :title="options4[value04].label" :options="options4"></u-dropdown-item>
								</u-dropdown>
							</u-col>
						</u-row>
					</view>

					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="uni-list">
							<view class="uni-list-cell" v-for="(item,index) in saleHouseList" :key="index" v-on:click="ToHouseDetail(index)">
								<view class="left">
									<u-image width="250" height="200" border-radius="8" :src="item.PhotoUrl" error-icon="error-circle"
									 mode="aspectFill"></u-image>
								</view>
								
								<view class="right">
									<view class="title">
										<text class="BiKan">必看</text>
										<text>{{item.Title}}</text>
									</view>
									<view>{{item.CountF}}室{{item.CountT}}厅/{{item.Square}}㎡/{{item.PropertyDirection}}/{{item.EstateName}}</view>
									<view>
										<text class="HouseTag">满五唯一</text>
										<text class="HouseTag">无抵押</text>
										<text class="HouseTag">可带看</text>
										<text class="HouseTag">新上房源</text>
									</view>
									<view>
										<u-row>
											<u-col class="HousePrice" span="6">{{item.Price}}万元</u-col>
											<u-col class="HouseUnitPrice" span="6">{{(item.Price/item.Square).toFixed(2)}}万元/㎡</u-col>
										</u-row>
									</view>
								</view>
							</view>
						</view>
						<u-divider bg-color="rgb(240, 240, 240)">没有更多了</u-divider>
						<u-back-top :scroll-top="scrollTop"></u-back-top>
					</scroll-view>
				</swiper-item>

				<swiper-item class="swiper-item">
					<view>
						<u-row gutter="16" justify="center">
							<!-- 	<u-col span="3">
								<view>
									<u-select v-model="show" :default-value="defaultValue" mode="mutil-column-auto" :list="list" @confirm="confirm"
									 @cancel="cancel"></u-select>
									<u-button type="primary" shape="square" size="small" :ripple="true" @click="btnClick">{{ result }}</u-button>
								</view>
							</u-col> -->

							<u-col span="12">
								<u-dropdown ref="uDropdown" activeColor="#2979ff">
									<u-dropdown-item @change="change12" v-model="value12" :title="options2[value12].label" :options="options2"></u-dropdown-item>
									<u-dropdown-item @change="change13" v-model="value13" :title="options5[value13].label" :options="options5"></u-dropdown-item>
									<u-dropdown-item @change="change14" v-model="value14" :title="options4[value14].label" :options="options4"></u-dropdown-item>
								</u-dropdown>
							</u-col>
						</u-row>
					</view>

					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="uni-list">
							<view class="uni-list-cell" v-for="(item,index) in rentHouseList" :key="index" v-on:click="ToHouseDetail(index)">
								<view class="left">
									<u-image width="250" height="200" border-radius="8" :src="item.PhotoUrl" error-icon="error-circle"
									 mode="aspectFill"></u-image>
								</view>
								
								<view class="right">
									<view class="title">
										<text class="BiKan">必看</text>
										<text>{{item.Title}}</text>
									</view>
									<view>{{item.CountF}}室{{item.CountT}}厅/{{item.Square}}㎡/{{item.PropertyDirection}}/{{item.EstateName}}</view>
									<view>
										<text class="HouseTag">满五唯一</text>
										<text class="HouseTag">无抵押</text>
										<text class="HouseTag">可带看</text>
										<text class="HouseTag">新上房源</text>
									</view>
									<view class="HousePrice">{{item.RentPrice}}{{item.RentUnitName}}</view>
								</view>
							</view>
						</view>
						<u-divider bg-color="rgb(240, 240, 240)">没有更多了</u-divider>
						<u-back-top :scroll-top="scrollTop"></u-back-top>
					</scroll-view>
				</swiper-item>

			</swiper>
		</view>
	</view>
</template>

<script>
	import config from '../../api/config.js';
	import {mapState, mapMutations} from 'vuex';
	
	export default {
		data() {
			return {
				searchContent:'',
				swiperCurrent: 0,
				tabsHeight: 0,
				current: 0,
				result: '区域',
				show: false,
				scrollTop: 0,

				value02: 0,
				value03: 0,
				value04: 0,

				value12: 0,
				value13: 0,
				value14: 0,

				defaultValue: [0, 0, 0],
				options2: [{
						label: '全部房型',
						value: 0,
					},
					{
						label: '1房',
						value: 1,
					},
					{
						label: '2房',
						value: 2,
					},
					{
						label: '3房',
						value: 3,
					},
					{
						label: '4房及以上',
						value: 4,
					},
				],

				options3: [{
						label: '全部价格',
						value: 0,
					},
					{
						label: '0-30万',
						value: 1,
					},
					{
						label: '30-50万',
						value: 2,
					},
					{
						label: '50-100万',
						value: 3,
					},
					{
						label: '100-150万',
						value: 4,
					},
					{
						label: '150-200万',
						value: 5,
					},
					{
						label: '200-300万',
						value: 6,
					},
					{
						label: '300-500万',
						value: 7,
					},
					{
						label: '500万及以上',
						value: 8,
					},
				],

				options4: [{
						label: '全部面积',
						value: 0,
					},
					{
						label: '0-20平米',
						value: 1,
					},
					{
						label: '20-50平米',
						value: 2,
					},
					{
						label: '50-100平米',
						value: 3,
					},
					{
						label: '100-150平米',
						value: 4,
					},
					{
						label: '150-200平米',
						value: 5,
					},
					{
						label: '200-250平米',
						value: 6,
					},
					{
						label: '250-500平米',
						value: 7,
					},
					{
						label: '500-800平米',
						value: 8,
					},
					{
						label: '800平米以上',
						value: 9,
					},
				],
				
				options5: [{
						label: '全部价格',
						value: 0,
					},
					{
						label: '500元以下',
						value: 1,
					},
					{
						label: '500-1000元',
						value: 2,
					},
					{
						label: '1000-2000元',
						value: 3,
					},
					{
						label: '2000-3000元',
						value: 4,
					},
					{
						label: '3000-5000元',
						value: 5,
					},
					{
						label: '5000-7000元',
						value: 6,
					},
					{
						label: '7000元以上',
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

				saleHouseList: [],
				rentHouseList: []
			}
		},

		onLoad: function(params) {
			this.searchContent = decodeURIComponent(params.keyword);
			
			this.GetSaleHouseList();
			this.GetRentHouseList();
		},
		
		onPullDownRefresh() {
			if (this.swiperCurrent === 0) {
				this.GetSaleHouseList();
			} else if (this.swiperCurrent === 1) {
				this.GetRentHouseList();
			}
		},
		
		computed:{
			...mapState(['user', 'city'])
		},
		
		methods: {
			toSearch(){
				if (this.swiperCurrent === 0) {
					this.GetSaleHouseList();
				} else if (this.swiperCurrent === 1) {
					this.GetRentHouseList();
				}
			},
			
			ToHouseDetail(h) {
				var obj = this.swiperCurrent === 0 ? this.saleHouseList[h] : this.rentHouseList[h];
				uni.navigateTo({
					url: './HouseDetail',
					success: (res) => {
						res.eventChannel.emit('acceptDataFromHouseList', obj);
					}
				})
			},

			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},

			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},

			showChange(index) {
				this.swiperCurrent = index;
				console.log('showchange' + this.swiperCurrent);
				if (index === 0) {
					this.GetSaleHouseList();
				} else if (index === 1) {
					this.GetRentHouseList();
				}
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

			change02(e) {
				this.value02 = e;
				this.GetSaleHouseList();
			},
			change03(e) {
				this.value03 = e;
				this.GetSaleHouseList();
			},
			change04(e) {
				this.value04 = e;
				this.GetSaleHouseList();
			},

			change12(e) {
				this.value12 = e;
				this.GetRentHouseList();
			},
			change13(e) {
				this.value13 = e;
				this.GetRentHouseList();
			},
			change14(e) {
				this.value14 = e;
				this.GetRentHouseList();
			},

			GetSaleHouseList() {
				console.log('正在请求 sale');
				this.$u.get(config.server + '/QuerySaleHouseSource', {
					DBName: this.user.DBName,
					EmpNo: this.user.Tel,
					DistrictName: '区域',
					CountF: this.options2[this.value02].label === '全部房型' || this.options2[this.value02].label === '' ? '房型' : this.options2[
						this.value02].label,
					Price: this.options3[this.value03].label === '全部价格' || this.options3[this.value03].label === '' ? '价格' : this.options3[
						this.value03].label,
					Square: this.options4[this.value04].label === '全部面积' || this.options4[this.value04].label === '' ? '面积' : this.options4[
						this.value04].label,
					PropertyUsage: '用途',
					PanType: '有效',
					EstateName: '',
					BuildNo: '',
					RoomNo: '',
					SearchContent: this.searchContent,
					Page: '',
					EmpID: this.user.EmpID,
				}).then(res => {
					this.saleHouseList = res.Result;
					uni.stopPullDownRefresh();
				})
			},

			GetRentHouseList() {
				this.$u.get(config.server + '/QueryRentHouseSource', {
					DBName: this.user.DBName,
					EmpNo: this.user.Tel,
					DistrictName: '区域',
					CountF: this.options2[this.value12].label === '全部房型' || this.options2[this.value12].label === '' ? '房型' : this.options2[
						this.value12].label,
					Price: this.options5[this.value13].label === '全部价格' || this.options5[this.value13].label === '' ? '价格' : this.options5[
						this.value13].label,
					Square: this.options4[this.value14].label === '全部面积' || this.options4[this.value14].label === '' ? '面积' : this.options4[
						this.value14].label,
					PropertyUsage: '用途',
					PanType: '有效',
					EstateName: '',
					BuildNo: '',
					RoomNo: '',
					SearchContent: this.searchContent,
					Page: '',
					EmpID: this.user.EmpID,
				}).then(res => {
					console.log(res);
					this.rentHouseList = res.Result;
					uni.stopPullDownRefresh();
				})
			},
			
			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
				if (this.swiperCurrent === 0) {
					this.GetSaleHouseList();
				} else if (this.swiperCurrent === 1) {
					this.GetRentHouseList();
				}
			},
		},

	}

	function keepTwo(value) {
		// 截取当前数据到小数点后三位
		const tempVal = Number(value).toFixed(3)
		if (tempVal === 'NaN') {
			return '0.00'
		}
		const realVal = tempVal.substring(0, tempVal.length - 1)
		return realVal
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
	.search-wrap {
		margin: 0 20rpx;
		flex: 1;
	}
	
	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
	}
	
	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #808080;
		z-index: 10;
		position: fixed;
	}

	.swiper-box {
		flex: 1;
	}

	.swiper-item {
		height: 100%;
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
