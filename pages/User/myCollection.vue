<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>
		
		<view class="wrap">
			<view class="u-tabs-box">
				<u-navbar is-back="true" title="我的收藏"></u-navbar>
			</view>

			<swiper class="swiper-box" :current="swiperCurrent" >

				<swiper-item class="swiper-item">
					<!-- <view>
						<u-row gutter="16" justify="center">
					
							<u-col span="12">
								<u-dropdown ref="uDropdown" activeColor="#2979ff">
									<u-dropdown-item @change="change02" v-model="value02" :title="options2[value02].label" :options="options2"></u-dropdown-item>
									<u-dropdown-item @change="change03" v-model="value03" :title="options3[value03].label" :options="options3"></u-dropdown-item>
									<u-dropdown-item @change="change04" v-model="value04" :title="options4[value04].label" :options="options4"></u-dropdown-item>
								</u-dropdown>
							</u-col>
						</u-row>
					</view> -->

					<scroll-view scroll-y style="height: 100%;width: 100%;">
						<view class="uni-list">
							<view class="uni-list-cell" v-for="(item,index) in collectHouseList" :key="index" v-on:click="ToHouseDetail(index)">
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
										<text v-if="item.FlagMWWY==='1'" class="HouseTag">满五唯一</text>
										<text v-if="item.FlagWDY==='1'" class="HouseTag">无抵押</text>
										<text v-if="item.FlagKDK==='1'" class="HouseTag">可带看</text>
										<text v-if="item.FlagXSFY==='1'" class="HouseTag">新上房源</text>
									</view>
									<view>
										<u-row v-if="item.Trade==='出售'">
											<u-col class="HousePrice" span="6">{{item.Price}}{{item.UnitName}}</u-col>
											<u-col class="HouseUnitPrice" span="6">{{(item.Price/item.Square).toFixed(2)}}{{item.UnitName}}/㎡</u-col>
										</u-row>
										<u-row v-if="item.Trade==='出租'">
											<u-col class="HousePrice" span="6">{{item.RentPrice}}{{item.RentUnitName}}</u-col>
											<!-- <u-col class="HouseUnitPrice" span="6">{{(item.Price/item.Square).toFixed(2)}}万元/㎡</u-col> -->
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
				result: '区域',
				show: false,
				scrollTop: 0,
	
				collectHouseList: [],

			}
		},

		onLoad() {
			
		},
		
		onReady() {
			this.GetCollectHouseList();
		},
		
		computed:{
			...mapState(['user', 'city'])
		},
		
		methods: {
			ToHouseDetail(index){
				console.log('index'+index);
				uni.navigateTo({
					url: '../HouseManage/HouseDetail',
					success: (res) => {
						res.eventChannel.emit('acceptDataFromHouseList', this.collectHouseList[index]);
					}
				})
			},
			
			/* transition({
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
			}, */

			GetCollectHouseList() {
				this.$u.get(config.server + '/GetMyCollection', {
					DBName: this.user.DBName,
					EmpID: this.user.EmpID
				}).then(res => {
					this.collectHouseList = res.Result;
					//手动处理后台返回的带有大段空白符的字串
					for (var i = 0; i < this.collectHouseList.length; i++) {
						this.collectHouseList[i].FlagMWWY = this.collectHouseList[i].FlagMWWY === null? 0:this.collectHouseList[i].FlagMWWY.trim();
						this.collectHouseList[i].FlagKDK = this.collectHouseList[i].FlagKDK === null? 0:this.collectHouseList[i].FlagKDK.trim(); 
						this.collectHouseList[i].FlagWDY = this.collectHouseList[i].FlagWDY === null? 0:this.collectHouseList[i].FlagWDY.trim(); 
						this.collectHouseList[i].FlagXSFY = this.collectHouseList[i].FlagXSFY === null? 0:this.collectHouseList[i].FlagXSFY.trim(); 
					}
				})
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
