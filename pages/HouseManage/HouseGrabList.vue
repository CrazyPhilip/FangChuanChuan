<template>
	<view>
		<view class="wrap">
		<view>
			<u-navbar is-back="true" title="可抢房源列表"></u-navbar>
		</view>
		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;">
					<view class="uni-list">
						<view class="uni-list-cell" v-for="(item,index) in grabHouseList" :key="index" v-on:click="ToHouseDetail(index)">
							<u-image v-if="showImg" :width="200" :height="200" border-radius="8" :src="item.PhotoUrl" error-icon="error-circle"
							 mode="aspectFill"></u-image>
							<view style="margin-left: 8rpx;">
								<view>
									<text class="BiKan">必看</text>
									<text class="HouseTitle">{{item.Title}}</text>
								</view>
								<view class="">{{item.CountF}}室{{item.CountT}}厅/{{item.Square}}㎡/{{item.PropertyDirection}}/{{item.EstateName}}</view>
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
				current: 0,
				showImg: false,
				result: '区域',
				show: false,
				scrollTop: 0,
				grabHouseList:[],
				}
			},
			
			onLoad() {
				this.GetCanGrabHouseList();
				this.showImg = true;
			},
			
			onPullDownRefresh() {
				console.log('刷新');
				this.GetCanGrabHouseList();
			},
			
					computed:{
						...mapState(['user'])
					},

			methods: {
				ToHouseDetail: function(h) {
					var obj =  this.grabHouseList[h];
					uni.navigateTo({
						url: './GrabHouseDetail',
						success: (res) => {
							res.eventChannel.emit('acceptDataFromHouseList', {data:obj,ifCanGrab:'yes'});
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
					this.GetCanGrabHouseList();
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
			
				GetCanGrabHouseList() {
					this.$u.get(config.server + '/GetCanGrabHouses', {
						DBName: this.user.DBName,
						EmpNo: this.user.EmpID,
						/* DistrictName: '区域',
						CountF: this.options2[this.value02].label === '全部房型' || this.options2[this.value02].label === ''?'房型':this.options2[this.value02].label,
						Price: this.options3[this.value03].label === '全部价格' || this.options3[this.value03].label === ''?'价格':this.options3[this.value03].label,
						Square: this.options4[this.value04].label === '全部面积' || this.options4[this.value04].label === ''?'面积':this.options4[this.value04].label,
						PropertyUsage: '用途',
						PanType: '有效',
						EstateName: '',
						BuildNo: '',
						RoomNo: '',
						SearchContent: '',
						Page: '',
						EmpID: this.global_data.global_data.EmpID, */
					}).then(res => {
						this.grabHouseList = res.Result;
						uni.stopPullDownRefresh();
					})
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
			font-size: medium;
			color: #FA3534;
		}

		.HouseUnitPrice {
			font-size: x-small;
		}

	}
</style>
