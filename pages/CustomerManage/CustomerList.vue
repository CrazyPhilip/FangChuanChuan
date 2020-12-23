<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper ref="tabs" :list="[{name:'求购'}, {name:'求租'}]" :current="current" @change="showChange" :is-scroll="false"
				 swiperWidth="750"></u-tabs-swiper>
			</view>

			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">

				<swiper-item class="swiper-item">
					<view>
						<u-dropdown ref="uDropdown" activeColor="#2979ff">
							<u-dropdown-item @change="change01" v-model="value01" :title="options1[value01].label" :options="options1"></u-dropdown-item>
							<u-dropdown-item @change="change02" v-model="value02" :title="options2[value02].label" :options="options2"></u-dropdown-item>
							<u-dropdown-item @change="change03" v-model="value03" :title="options3[value03].label" :options="options3"></u-dropdown-item>
							<u-dropdown-item @change="change04" v-model="value04" :title="options4[value04].label" :options="options4"></u-dropdown-item>
						</u-dropdown>
					</view>

					<scroll-view scroll-y style="height: 90%;width: 100%;">
						<view class="uni-list">
							<view class="uni-list-cell" v-for="(item,index) in saleCustomerList" :key="index" v-on:click="ToCustomerDetail(index)">
								<text class="left">{{item.CustName[0]}}</text>
								<view class="centre">
									<view>
										<text class="CustName">{{item.CustName}}</text>
									</view>
									<view class="CustMobile">{{item.CustMobile}}</view>
									<view>
										<text class="HouseTag">{{item.Position}}</text>
										<text>{{item.SquareMin}}~{{item.SquareMax}}㎡</text>
									</view>
									<view>
										<text>{{item.Remark}}</text>
									</view>
								</view>
								<view class="right">{{item.PriceMin}}~{{item.PriceMax}}{{item.UnitName}}</view>
							</view>
						</view>
						<u-divider bg-color="rgb(240, 240, 240)">没有更多了</u-divider>
						<u-back-top :scroll-top="scrollTop"></u-back-top>
					</scroll-view>
				</swiper-item>

				<swiper-item class="swiper-item">
					<view>
						<u-dropdown ref="uDropdown" activeColor="#2979ff">
							<u-dropdown-item @change="change11" v-model="value11" :title="options1[value11].label" :options="options1"></u-dropdown-item>
							<u-dropdown-item @change="change12" v-model="value12" :title="options2[value12].label" :options="options2"></u-dropdown-item>
							<u-dropdown-item @change="change13" v-model="value13" :title="options3[value13].label" :options="options3"></u-dropdown-item>
							<u-dropdown-item @change="change14" v-model="value14" :title="options4[value14].label" :options="options4"></u-dropdown-item>
						</u-dropdown>
					</view>

					<scroll-view scroll-y style="height: 90%;width: 100%;">
						<view class="uni-list">
							<view class="uni-list-cell" v-for="(item,index) in rentCustomerList" :key="index" v-on:click="ToCustomerDetail(index)">
								<text class="left">{{item.CustName[0]}}</text>
								<view class="centre">
									<view>
										<text class="CustName">{{item.CustName}}</text>
									</view>
									<view class="CustMobile">{{item.CustMobile}}</view>
									<view>
										<text class="HouseTag">{{item.Position}}</text>
										<text>{{item.SquareMin}}~{{item.SquareMax}}㎡</text>
									</view>
									<view>
										<text>{{item.Remark}}</text>
									</view>
								</view>
								<view class="right">{{item.PriceMin}}~{{item.PriceMax}}{{item.UnitName}}</view>
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
				swiperCurrent: 0,
				tabsHeight: 0,
				scrollTop: 0,
				current: 0,
				
				value01: 0,
				value02: 0,
				value03: 0,
				value04: 0,
				
				value11: 0,
				value12: 0,
				value13: 0,
				value14: 0,
				
				defaultValue: [0, 0, 0],
				options1: [{
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

				options2: [{
						label: '全部楼层',
						value: 0,
					},
					{
						label: '0-10楼',
						value: 1,
					},
					{
						label: '10-20楼',
						value: 2,
					},
					{
						label: '20-30楼',
						value: 3,
					},
					{
						label: '30楼以上',
						value: 4,
					}
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

				saleCustomerList: [],
				rentCustomerList: [],
				
				pageSize: 10,
				iconType: 'flower',
				pageNum1: 1,
				status1: 'loadmore',
				loadText1: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
				pageNum2: 1,
				status2: 'loadmore',
				loadText2: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
				pageNum3: 1,
				status3: 'loadmore',
				loadText3: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
			}
		},

		onReady() {
			this.GetSaleCustomerList();
			this.GetRentCustomerList();
		},

		onPullDownRefresh() {
			console.log('刷新');
			if (this.index === 0) {
				this.GetSaleCustomerList();
			} else {
				this.GetRentCustomerList();
			}
		},
		
		/* onReachBottom() {
			console.log('onReachBottom:' + this.swiperCurrent);
			if (this.swiperCurrent === 0) {
				this.status1 = 'loading';
				this.pageNum1 = ++this.pageNum1;
				this.GetSaleCustomerList();
			} else if (this.swiperCurrent === 1) {
				this.status2 = 'loading';
				this.pageNum2 = ++this.pageNum2;
				this.GetRentCustomerList();
			}
		}, */

		computed:{
			...mapState(['user', 'city'])
		},
		
		methods: {
			ToCustomerDetail: function(h) {
				var obj = this.swiperCurrent === 0 ? this.saleCustomerList[h] : this.rentCustomerList[h];
				uni.navigateTo({
					url: './CustomerDetail',
					success: (res) => {
						res.eventChannel.emit('acceptDataFromCustomerList', obj);
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
				if (index === 0) {
					this.GetSaleCustomerList();
				} else {
					this.GetRentCustomerList();
				}
			},

			cancel(e) {
				console.log(e);
			},

			change01(e) {
				this.value01 = e;
				this.GetSaleCustomerList();
			},
			change02(e) {
				this.value02 = e;
				this.GetSaleCustomerList();
			},
			change03(e) {
				this.value03 = e;
				this.GetSaleCustomerList();
			},
			change04(e) {
				this.value04 = e;
				this.GetSaleCustomerList();
			},
			
			change11(e) {
				this.value11 = e;
				this.GetRentCustomerList();
			},
			change12(e) {
				this.value11 = e;
				this.GetRentCustomerList();
			},
			change13(e) {
				this.value11 = e;
				this.GetRentCustomerList();
			},
			change14(e) {
				this.value11 = e;
				this.GetRentCustomerList();
			},

			GetSaleCustomerList() {
				this.$u.get(config.server + '/QuerySaleCustomerSource', {
					DBName: this.user.DBName,
					Tel: this.user.Tel,
					RoomStyle: this.options1[this.value01].label === '全部房型' || this.options1[this.value01].label === ''?'房型':this.options1[this.value01].label,
					Floor: this.options2[this.value02].label === '全部楼层' || this.options2[this.value02].label === ''?'楼层':this.options2[this.value02].label,
					Price: this.options3[this.value03].label === '全部价格' || this.options3[this.value03].label === ''?'价格':this.options3[this.value03].label,
					Square: this.options4[this.value04].label === '全部面积' || this.options4[this.value04].label === ''?'面积':this.options4[this.value04].label,
					IsPublic: '类型',
					CusName: '',
					Phone: '',
					Contact: '',
					SearchContent: '',
					Page: '',
					EmpID: '',
				}).then(res => {
					//console.log(res.Result);
					this.saleCustomerList = res.Result;
					uni.stopPullDownRefresh();
				});
			},

			GetRentCustomerList() {
				this.$u.get(config.server + '/QueryRentCustomerSource', {
					DBName: this.user.DBName,
					Tel: this.user.Tel,
					RoomStyle: this.options1[this.value11].label === '全部房型' || this.options1[this.value11].label === ''?'房型':this.options1[this.value11].label,
					Floor: this.options2[this.value12].label === '全部楼层' || this.options2[this.value12].label === ''?'楼层':this.options2[this.value12].label,
					Price: this.options3[this.value13].label === '全部价格' || this.options3[this.value13].label === ''?'价格':this.options3[this.value13].label,
					Square: this.options4[this.value14].label === '全部面积' || this.options4[this.value14].label === ''?'面积':this.options4[this.value14].label,
					IsPublic: '类型',
					CusName: '',
					Phone: '',
					Contact: '',
					SearchContent: '',
					Page: '',
					EmpID: '',
				}).then(res => {
					//console.log(res.Result);
					this.rentCustomerList = res.Result;
					uni.stopPullDownRefresh();
				});
			},

			onPageScroll(e) {
				this.scrollTop = e.scrollTop;
				if (this.swiperCurrent === 0) {
					this.GetSaleCustomerList();
				} else {
					this.GetRentCustomerList();
				}
			},

		}
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
	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
		padding-top: var(--status-bar-height);
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

	.uni-list .uni-list-cell {
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		position: relative;

		.left {
			display: flex;
			color: #2C405A;
			font-weight: bold;
			font-size: x-large;
			align-items: center;
			justify-content: center;
			border: 5rpx solid #2C405A;
			width: 100rpx;
			height: 100rpx;
			border-radius: 50rpx;
		}

		.centre {
			width: 300rpx;

			.CustName {
				font-weight: bolder;
				font-size: large;
				max-lines: 2;
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
		}

		.right {
			width: 200rpx;
			font-weight: bolder;
			font-size: medium;
			color: #FA3534;
		}

	}
</style>
