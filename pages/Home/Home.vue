<template>
	<view class="wrap">
		<view class="top" :class="[changeClass?'top2':'top']">
			<view class="topLeft">
				<u-button type="primary" size="mini" @click="toLocation">{{cityName}}</u-button>
				<!-- <u-line color="#82848a" length="50rpx" :hair-line="false" border-style="solid" direction="col"></u-line> -->
				<u-search placeholder="输入小区名搜索房源" shape="square" bg-color="white" :clearabled="true" :show-action="true"
				 action-text="搜索" :animation="true" v-model="keyword"></u-search>
			</view>
			<u-icon id="mapIcon" v-bind:label-color="iconColor" v-bind:name="iconName" label="地图" size="50" @click="toMap"></u-icon>
		</view>

		<u-swiper :list="ImageList" mode="dot" indicator-pos="bottomCenter" :title="true" height="500" border-radius="0"></u-swiper>

		<swiper class="swiper" @change="change">
			<swiper-item>
				<u-grid :col="4" @click="IconClick" :border="false">
					<u-grid-item :index="1">
						<image class="MenuItem" src="/static/icon/estate.png">
							</u-image>
							<view class="grid-text">全网房源</view>
					</u-grid-item>
					<u-grid-item :index="2">
						<image class="MenuItem" src="/static/icon/house_manage.png">
							</u-image>
							<view class="grid-text">房源管理</view>
					</u-grid-item>
					<u-grid-item :index="3">
						<image class="MenuItem" src="/static/icon/customer_manage.png">
							</u-image>
							<view class="grid-text">客源管理</view>
					</u-grid-item>
					<u-grid-item :index="4">
						<image class="MenuItem" src="/static/icon/news2.png">
							</u-image>
							<view class="grid-text">新闻公告</view>
					</u-grid-item>
					<u-grid-item :index="5">
						<image class="MenuItem" src="/static/icon/calculator1.png">
							</u-image>
							<view class="grid-text">房贷计算器</view>
					</u-grid-item>
					<u-grid-item :index="6">
						<image class="MenuItem" src="/static/icon/calculator2.png">
							</u-image>
							<view class="grid-text">税费计算器</view>
					</u-grid-item>
					<u-grid-item :index="7">
						<image class="MenuItem" src="/static/icon/add_house.png">
							</u-image>
							<view class="grid-text">新增房源</view>
					</u-grid-item>
					<u-grid-item :index="8">
						<image class="MenuItem" src="/static/icon/add_customer.png"></image>
						<view class="grid-text">新增客源</view>
					</u-grid-item>
				</u-grid>

			</swiper-item>

			<swiper-item>
				<u-grid :col="4" @click="IconClick" :border="false">
					<u-grid-item :index="9">
						<image class="MenuItem" src="/static/icon/house_manage.png">
							</u-image>
							<view class="grid-text">可抢房源</view>
					</u-grid-item>
					<u-grid-item :index="10">
						<image class="MenuItem" src="/static/icon/report.png"></image>
						<view class="grid-text">业绩报表</view>
					</u-grid-item>
				</u-grid>

			</swiper-item>
		</swiper>

		<view class="indicator-dots">
			<view class="indicator-dots-item" :class="[current == 0 ? 'indicator-dots-active' : '']">
			</view>
			<view class="indicator-dots-item" :class="[current == 1 ? 'indicator-dots-active' : '']">
			</view>
		</view>

		<view class="bottom">

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				cityName: '',
				keyword: '',
				ImageList: [{
						image: "/static/icon/pic1.jpg",
						title: '环球中心'
					},
					{
						image: "/static/icon/pic2.jpg",
						title: '高端小区'
					},
					{
						image: "/static/icon/pic3.jpg",
						title: '太古里'
					},
				],

				iconColor: 'white',
				iconName: '/static/icon/map_white.png',
				changeClass: false,

				current: 0,
			}
		},

		onLoad() {
			this.cityName = this.global_data.global_data.cityName;

		},

		onPageScroll(obj) {
			/* if(obj.scrollTop > 0){
				var t = document.getElementById('_top');
				t.className = 'top2';
				//var m = document.getElementById('_map');
				//console.log(m.label);
				//m.setAttribute('label-color', '#000000');
				this.iconColor = 'black';
				this.iconName = '/static/icon/map_black.png';
			}
			else{
				var t = document.getElementById('_top');
				t.className = 'top';
				//var m = document.getElementById('_map');
				//m.setAttribute('label-color', '#FFFFFF');
				this.iconColor = 'white';
				this.iconName = '/static/icon/map_white.png';
			} */

			if (obj.scrollTop > 0) {
				this.changeClass = true;
				//this.$refs.topBar.className = 'top2';
				this.iconColor = 'black';
				this.iconName = '/static/icon/map_black.png';
			} else {
				this.changeClass = false;
				this.iconColor = 'white';
				this.iconName = '/static/icon/map_white.png';
			}
		},

		methods: {
			change(e) {
				this.current = e.detail.current;
			},
			
			IconClick: function IconClick(index) {
				console.log(index);
				switch (index) {
					case 1:
						{
							uni.navigateTo({
								url: '../HouseManage/OuterNet'
							});
						}
						break;

					case 2:
						{
							uni.switchTab({
								url: "../HouseManage/HouseList"
							});
						}
						break;

					case 3:
						{
							uni.switchTab({
								url: "../CustomerManage/CustomerList"
							});
						}
						break;

					case 4:
						{
							/* uni.navigateTo({
								url: "../HouseManage/HouseGrabList"
							}); */

						}
						break;

					case 5:
						{
							uni.navigateTo({
								url: "../Calculator/loanCalculator2"
							});
						}
						break;

					case 6:
						{
							uni.navigateTo({
								url: "../Calculator/taxCalculator2"
							});
						}
						break;

					case 7:
						{
							uni.navigateTo({
								url: "../HouseManage/NewHouse"
							});
						}
						break;

					case 8:
						{
							uni.navigateTo({
								url: "../CustomerManage/NewCustomer"
							});
						}
						break;
					case 9:
						{
							uni.navigateTo({
								url: "../HouseManage/HouseGrabList"
							});
						}
						break;
						
					case 10:
						{
							uni.navigateTo({
								url: "../HouseManage/Achievement"
							});
						}
						break;
				}
			},

			toMap() {
				// #ifdef H5
				console.log('这是h5');
				uni.navigateTo({
					url: '../HouseManage/map3',
				});
				// #endif

				// #ifdef APP-PLUS
				console.log('这是app');
				uni.navigateTo({
					url: '../HouseManage/map4',
				});
				// #endif
			},

			toLocation() {
				/* uni.navigateTo({
					url:'./location',
				}); */
			}

		}
	}
</script>

<style lang="scss" scoped>
	.wrap {}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.MenuItem {
		height: 72rpx;
		width: 72rpx;
	}

	.top {
		z-index: 10;
		position: fixed;
		display: flex;
		justify-content: space-around;
		padding: 60rpx 20rpx 20rpx 20rpx;
		width: 100%;
	}

	.top2 {
		z-index: 10;
		position: fixed;
		display: flex;
		justify-content: space-around;
		padding: 60rpx 20rpx 20rpx 20rpx;
		width: 100%;
		background-color: white;
	}

	.topLeft {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		background-color: white;
		padding: 10rpx 20rpx;
		border-radius: 8rpx;
	}

	.bottom {
		height: 1500rpx;
		background-color: white;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.swiper {
		height: 320rpx;
	}

	.indicator-dots {
		margin-top: 10rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.indicator-dots-item {
		background-color: $u-tips-color;
		height: 6px;
		width: 6px;
		border-radius: 10px;
		margin: 0 3px;
	}

	.indicator-dots-active {
		background-color: $u-type-primary;
	}
</style>
