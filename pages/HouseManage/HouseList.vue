<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>

		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper ref="tabs" :list="[{name:'出售'}, {name:'出租'},{name:'已抢'}]" :current="current" @change="showChange"
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

					<scroll-view scroll-y style="height: 90%;width: 100%;" @scrolltolower="getData1">
						<view class="uni-list">
							<view class="uni-list-cell" v-for="(item,index) in saleHouseList" :key="index" v-on:click="ToHouseDetail(index)">
								<view class="left">
									<u-image width="250" height="200" border-radius="8" :src="item.PhotoUrl" error-icon="error-circle" mode="aspectFill"></u-image>
								</view>

								<view class="right">
									<view class="title">
										<text class="BiKan">必看</text>
										<text>{{item.Title}}</text>
									</view>
									<view>{{item.CountF}}室{{item.CountT}}厅/{{item.Square}}㎡/{{item.PropertyDirection}}/{{item.EstateName}}</view>
									<view>
										<text v-if="item.FlagMWWY==='1'" class="HouseTag">满五唯一</text>
										<text v-if="item.FlagWDY==='1'" class="HouseTag">无抵押</text>
										<text v-if="item.FlagKDK==='1'" class="HouseTag">可带看</text>
										<text v-if="item.FlagXSFY==='1'" class="HouseTag">新上房源</text>
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
						<u-divider v-if="this.status1 === 'loading'" bg-color="rgb(240, 240, 240)">努力加载中</u-divider>
						<u-divider v-if="this.status1 === 'nomore'" bg-color="rgb(240, 240, 240)">没有更多了</u-divider>
						<u-divider v-if="this.status1 === 'loadmore'" bg-color="rgb(240, 240, 240)">轻轻上拉</u-divider>
					</scroll-view>
					<u-back-top :scroll-top="scrollTop"></u-back-top>
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

					<scroll-view scroll-y style="height: 90%;width: 100%;" @scrolltolower="getData2">
						<view class="uni-list">
							<view class="uni-list-cell" v-for="(item,index) in rentHouseList" :key="index" v-on:click="ToHouseDetail(index)">
								<view class="left">
									<u-image width="250" height="200" border-radius="8" :src="item.PhotoUrl" error-icon="error-circle" mode="aspectFill"></u-image>
								</view>

								<view class="right">
									<view class="title">
										<text class="BiKan">必看</text>
										<text>{{item.Title}}</text>
									</view>
									<view>{{item.CountF}}室{{item.CountT}}厅/{{item.Square}}㎡/{{item.PropertyDirection}}/{{item.EstateName}}</view>
									<view>
										<text v-if="item.FlagMWWY==='1'" class="HouseTag">满五唯一</text>
										<text v-if="item.FlagWDY==='1'" class="HouseTag">无抵押</text>
										<text v-if="item.FlagKDK==='1'" class="HouseTag">可带看</text>
										<text v-if="item.FlagXSFY==='1'" class="HouseTag">新上房源</text>
									</view>
									<view class="HousePrice">{{item.RentPrice}}{{item.RentUnitName}}</view>
								</view>
							</view>
						</view>
						<u-divider v-if="this.status2 === 'loading'" bg-color="rgb(240, 240, 240)">努力加载中</u-divider>
						<u-divider v-if="this.status2 === 'nomore'" bg-color="rgb(240, 240, 240)">没有更多了</u-divider>
						<u-divider v-if="this.status2 === 'loadmore'" bg-color="rgb(240, 240, 240)">轻轻上拉</u-divider>
						<u-back-top :scroll-top="scrollTop"></u-back-top>
					</scroll-view>
				</swiper-item>

				<swiper-item class="swiper-item">
					<!-- <view>
						<u-row gutter="16" justify="center">
							<u-col span="3">
								<view>
									<u-select v-model="show" :default-value="defaultValue" mode="mutil-column-auto" :list="list" @confirm="confirm"
									 @cancel="cancel"></u-select>
									<u-button type="primary" shape="square" size="small" :ripple="true" @click="btnClick">{{ result }}</u-button>
								</view>
							</u-col>
				
							<u-col span="12">
								<u-dropdown ref="uDropdown" activeColor="#2979ff">
									<u-dropdown-item @change="change12" v-model="value12" :title="options2[value12].label" :options="options2"></u-dropdown-item>
									<u-dropdown-item @change="change13" v-model="value13" :title="options3[value13].label" :options="options3"></u-dropdown-item>
									<u-dropdown-item @change="change14" v-model="value14" :title="options4[value14].label" :options="options4"></u-dropdown-item>
								</u-dropdown>
							</u-col>
						</u-row>
					</view> -->

					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="uni-list">
							<view class="uni-list-cell" v-for="(item,index) in grabedHouseList" :key="index" v-on:click="ToGrabHouseDetail(index)">
								<view class="left">
									<u-image width="250" height="200" border-radius="8" :src="item.PhotoUrl" error-icon="error-circle" mode="aspectFill"></u-image>
								</view>

								<view class="right">
									<text class="BiKan">必看</text>
									<view class="title">{{item.Title}}</view>
									<view>
										<text class="HouseTag">满五唯一</text>
										<text class="HouseTag">无抵押</text>
										<text class="HouseTag">可带看</text>
										<text class="HouseTag">新上房源</text>
									</view>
									<view>{{item.CountF}}室{{item.CountT}}厅/{{item.Square}}㎡/{{item.PropertyDirection}}/{{item.EstateName}}</view>
									<view>
										<u-row>
											<u-col class="HousePrice" span="6">{{item.Price}}万元</u-col>
											<u-col class="HouseUnitPrice" span="6">{{(item.Price/item.Square).toFixed(2)}}万元/㎡</u-col>
										</u-row>
									</view>
								</view>
							</view>
						</view>
						<!-- <u-divider v-if="this.status3 === 'loading'" bg-color="rgb(240, 240, 240)">努力加载中</u-divider>
						<u-divider v-if="this.status3 === 'nomore'" bg-color="rgb(240, 240, 240)">没有更多了</u-divider>
						<u-divider v-if="this.status3 === 'loadmore'" bg-color="rgb(240, 240, 240)">轻轻上拉</u-divider> -->
						<u-divider v-if="this.status3 === 'nomore'" bg-color="rgb(240, 240, 240)">没有更多了</u-divider>
						<u-back-top :scroll-top="scrollTop"></u-back-top>
					</scroll-view>
				</swiper-item>

			</swiper>
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

				pageSize: 20, //接口默认就是20
				pageNum1: 0, //页数从0开始
				pageNum2: 0, //页数从0开始
				pageNum3: 0, //页数从0开始
				status1: 'loading',
				status2: 'loading',
				status3: 'loading',
				iconType: 'flower',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},

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


				saleHouseList: [],
				rentHouseList: [],
				grabedHouseList: [],
			}
		},

		onLoad() {

		},

		onReady() {
			this.GetSaleHouseList();
			this.GetRentHouseList();
			this.GetGrabedHouseList();
		},

		onPullDownRefresh() {

			console.log('刷新');
			console.log('swiper :' + this.swiperCurrent);
			if (this.swiperCurrent === 0) {
				this.refreshSaleHouseList();
			} else if (this.swiperCurrent === 1) {
				this.refreshRentHouseList();
			} else {
				this.grabedHouseList.splice(0, this.grabedHouseList.length);
				this.GetGrabedHouseList();
			}
		},

		computed: {
			...mapState(['user', 'city'])
		},

		methods: {
			ToHouseDetail: function(h) {
				var obj = this.swiperCurrent === 0 ? this.saleHouseList[h] : this.rentHouseList[h];
				uni.navigateTo({
					url: './HouseDetail',
					success: (res) => {
						res.eventChannel.emit('acceptDataFromHouseList', obj);
					}
				})
			},
			ToGrabHouseDetail: function(h) {
				var obj = this.grabedHouseList[h];
				uni.navigateTo({
					url: './GrabHouseDetail',
					success: (res) => {
						res.eventChannel.emit('acceptDataFromHouseList', {
							data: obj,
							ifCanGrab: 'no'
						});
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

			showChange(index) { //该函数暂未被触发
				this.swiperCurrent = index;
				console.log('showchange' + this.swiperCurrent);
				if (index === 0) {
					this.GetSaleHouseList();
				} else if (index === 1) {
					this.GetRentHouseList();
				} else {
					this.GetGrabedHouseList();
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

			//刷新函数
			refreshSaleHouseList() //刷新出售房源列表
			{
				this.saleHouseList.splice(0, this.saleHouseList.length);
				this.pageNum1 = 0;
				this.status1 = 'loading';
				this.GetSaleHouseList();
			},

			refreshRentHouseList() {
				this.rentHouseList.splice(0, this.rentHouseList.length);
				this.pageNum2 = 0;
				this.status2 = 'loading';
				this.GetRentHouseList();
			},

			//抢房接口 未做分页，保留原始方式


			change02(e) {
				this.value02 = e;
				this.refreshSaleHouseList();
			},
			change03(e) {
				this.value03 = e;
				this.refreshSaleHouseList();
			},
			change04(e) {
				this.value04 = e;
				this.refreshSaleHouseList();
			},

			change12(e) {
				this.value12 = e;
				this.refreshRentHouseList();
			},
			change13(e) {
				this.value13 = e;
				this.refreshRentHouseList();
			},
			change14(e) {
				this.value14 = e;
				this.refreshRentHouseList();
			},

			getData1() {
				console.log('正在加载出售列表');
				if (this.status1 === 'loadmore') {
					this.pageNum1 = this.pageNum2 + 1;
					console.log('正在加载出售列表第' + this.pageNum1 + '页');
					this.GetSaleHouseList();
				}
			},
			getData2() {
				console.log('正在加载出租列表');
				if (this.status2 === 'loadmore') {
					this.pageNum2 = this.pageNum2 + 1;
					console.log('正在加载出售列表第' + this.pageNum2 + '页');
					this.GetRentHouseList();
				}
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
					SearchContent: '',
					Page: this.pageNum1,
					EmpID: this.user.EmpID,
				}).then(res => {
					let houseList = res.Result;
					console.log(houseList.length);
					for (var i = 0; i < houseList.length; i++) {
						//手动处理后台返回的带有大段空白符的字串
						houseList[i].FlagMWWY = houseList[i].FlagMWWY === null ? 0 : houseList[i].FlagMWWY.trim();
						houseList[i].FlagKDK = houseList[i].FlagKDK === null ? 0 : houseList[i].FlagKDK.trim();
						houseList[i].FlagWDY = houseList[i].FlagWDY === null ? 0 : houseList[i].FlagWDY.trim();
						houseList[i].FlagXSFY = houseList[i].FlagXSFY === null ? 0 : houseList[i].FlagXSFY.trim();
						this.saleHouseList.push(houseList[i]);
					}

					if (houseList.length === 0 || houseList.length < this.pageSize) {
						this.status1 = 'nomore';
					} else {
						this.status1 = 'loadmore';
					}
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
					SearchContent: '',
					Page: this.pageNum2,
					EmpID: this.user.EmpID,
				}).then(res => {
					let houseList = res.Result;
					for (var i = 0; i < houseList.length; i++) {
						//手动处理后台返回的带有大段空白符的字串
						houseList[i].FlagMWWY = houseList[i].FlagMWWY === null ? 0 : houseList[i].FlagMWWY.trim();
						houseList[i].FlagKDK = houseList[i].FlagKDK === null ? 0 : houseList[i].FlagKDK.trim();
						houseList[i].FlagWDY = houseList[i].FlagWDY === null ? 0 : houseList[i].FlagWDY.trim();
						houseList[i].FlagXSFY = houseList[i].FlagXSFY === null ? 0 : houseList[i].FlagXSFY.trim();
						this.rentHouseList.push(houseList[i]);
					}

					if (houseList.length === 0 || houseList.length < this.pageSize) {
						this.status2 = 'nomore';
					} else {
						this.status2 = 'loadmore';
					}
					uni.stopPullDownRefresh();
				})
			},

			GetGrabedHouseList() {
				this.$u.get(config.server + '/GetGrabbedHouses', {
					DBName: this.user.DBName,
					EmpNo: this.user.EmpID,
					/* 	DistrictName: '区域',
						CountF: this.options2[this.value12].label === '全部房型' || this.options2[this.value12].label === ''?'房型':this.options2[this.value12].label,
						Price: this.options3[this.value13].label === '全部价格' || this.options3[this.value13].label === ''?'价格':this.options3[this.value13].label,
						Square: this.options4[this.value14].label === '全部面积' || this.options4[this.value14].label === ''?'面积':this.options4[this.value14].label,
						PropertyUsage: '用途',
						PanType: '有效',
						EstateName: '',
						BuildNo: '',
						RoomNo: '',
						SearchContent: '',
						Page: '',
						EmpID: this.global_data.global_data.EmpID, */
				}).then(res => {
					this.grabedHouseList = res.Result;
					uni.stopPullDownRefresh();
				})
			},

			onPageScroll(e) { //下拉刷新
				this.scrollTop = e.scrollTop;
				if (this.swiperCurrent === 0) {
					this.refreshSaleHouseList();
				} else if (this.swiperCurrent === 1) {
					this.refreshRentHouseList();
				} else {
					this.GetGrabedHouseList();
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
