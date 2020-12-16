<template>
	<view class="wrap">
		<!-- <u-navbar class="topNav" back-icon-name="arrow-leftward" back-icon-color="white" back-icon-size="48" :is-back="true" :border-bottom="false" :background="background">
			<view slot="right">
				<u-icon class="rightIcon" :name="collectIcon" size="48" color="white" @click="goBack()"></u-icon>
				<u-icon class="rightIcon" :name="shareIcon" size="48" color="white" @click="goBack()"></u-icon>
			</view>
		</u-navbar> -->
		
		<view class="topNav">
			<u-icon class="leftIcon" pros="0" name="arrow-leftward" size="50rpx" color="#ffffff" @click="goBack"></u-icon>
			<!-- <view class="title">{{house.proTitle}}</view> -->
			<!-- <view class="right">
				<u-icon class="rightIcon" pros="1" name="heart" size="50rpx" color="#ffffff" @click="goBack"></u-icon>
				<u-icon class="rightIcon" pros="2" name="zhuanfa" size="50rpx" color="#ffffff" @click="goBack"></u-icon>
			</view> -->
		</view>

		<u-swiper :list="photoList" mode="dot" indicator-pos="bottomCenter" :title="false" height="600" border-radius="0" img-mode="aspectFill"></u-swiper>

		<view class="section">
			<u-tag v-if="house.proKeywords" :text="house.proKeywords" bg-color="#ff0000" mode="dark" shape="circle"></u-tag>
			<!-- <u-tag text="随时看房" mode="dark" shape="circle"></u-tag> -->
			<view class="title">{{this.house.proTitle}}</view>

			<view @click="ToWarning">
				<u-icon name="question-circle-fill" size="30"></u-icon>
				<text class="tips">风险提示</text>
			</view>

			<view class="mainIntro">
				<u-row justify="center">
					<u-col span="3">
						<view v-if="house.proTrade === '出售'">
							<view class="value">{{house.proPrice}}{{house.proPriceType}}</view>
							<view class="description">售价</view>
						</view>
						<view v-if="house.proTrade === '出租'">
							<view class="value1">{{house.proRentPrice}}{{house.proRentPriceType}}</view>
							<view class="description">租金</view>
						</view>
					</u-col>
					<u-col span="1">
						<u-line color="#82848a" length="50rpx" :hair-line="false" border-style="solid" direction="col"></u-line>
					</u-col>
					<u-col span="3">
						<view>
							<view class="value">{{house.proCountF}}室{{house.proCountT}}厅</view>
							<view class="description">房型</view>
						</view>
					</u-col>
					<u-col span="1">
						<u-line color="#82848a" length="50rpx" :hair-line="false" border-style="solid" direction="col"></u-line>
					</u-col>
					<u-col span="3">
						<view>
							<view class="value">{{house.proSquare}}㎡</view>
							<view class="description">建筑面积</view>
						</view>
					</u-col>
				</u-row>
			</view>

		</view>

		<view class="section">
			<view class="sectionTitle">基本信息</view>
			<u-row justify="center">
				<u-col span="6">单价：{{house.proUnitPrice}}{{house.proUnitPriceType}}</u-col>
				<u-col span="6">楼层：{{house.proFloor}}(共{{house.proFloorAll}}层)</u-col>
			</u-row>
			<u-row justify="center">
				<u-col span="6">朝向：{{house.proDirection}}</u-col>
				<u-col span="6">结构：{{house.proType}}</u-col>
			</u-row>
			<u-row justify="center">
				<u-col span="6">装修：{{house.proDecoration}}</u-col>
				<u-col span="6">梯户比：{{house.proLadderRatio}}</u-col>
			</u-row>
			<u-row justify="center">
				<u-col span="6">产权：{{house.proRightYears}}年</u-col>
				<u-col span="6">用途：{{house.proUsage}}</u-col>
			</u-row>
			<u-row justify="center">
				<u-col span="12">小区：{{house.proEstateName}}</u-col>
			</u-row>
		</view>

		<view class="section">
			<view class="sectionTitle">交易属性</view>
			<u-row justify="center">
				<u-col span="6">委托时间：{{house.proTrustDate}}</u-col>
				<u-col span="6">刷新时间：{{house.proModDate}}</u-col>
			</u-row>
			<u-row justify="center">
				<u-col span="6">属性：{{house.proOwn}}</u-col>
				<u-col span="6">产权日期：{{house.proDate}}</u-col>
			</u-row>
			<u-row justify="center">
				<u-col span="6">产权所属：{{house.proOwnership}}</u-col>
				<u-col span="6">抵押状态：{{house.proMortgate}}</u-col>
			</u-row>
		</view>

		<view class="section">
			<view class="sectionTitle">房源特色</view>
		</view>

		<view class="section">
			<view class="sectionTitle">房源评论</view>
			<u-empty v-if="commentList.length <= 0" text="暂无评论" mode="list"></u-empty>
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in commentList" :key="index">
					<view class="commentItem" v-on:click="ToHouseDetail(index)">
						<u-row>
							<u-col span="2">
								<u-image :width="80" :height="80" border-radius="8" :src="item.photoUrl" error-icon="error-circle"
								 mode="aspectFill"></u-image>
							</u-col>

							<u-col span="10">
								<view class="commentPerson">{{item.commentPerson}}</view>
								<view class="comment">{{item.content}}</view>
							</u-col>
						</u-row>
					</view>
				</view>
			</view>
		</view>

		<view class="section">
			<view class="sectionTitle">推荐房源</view>
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item,index) in recommendedList" :key="index" @tap="ToHouseDetail(index)">
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
		</view>
		
		<u-gap bg-color="#eeeeee" height="100"></u-gap>
		
		<view class="navigation">
			<view class="left">
				<view class="u-m-r-10">
					<u-avatar :src="pic" size="80"></u-avatar>
				</view>
				
				<view class="center">
					<view style="font-size: medium;font-weight: bold;">{{house.proEmployee1Name}}</view>
					<view>房屋信息发布人</view>
				</view>
			</view>
			<view class="right">
				<u-button type="primary" @click="Call">致电</u-button>
			</view>
		</view>
		<u-action-sheet v-model="callActionSheetShow" :list="callActionSheet" :cancel-btn="true" :mask-close-able="true"
		 :safe-area-inset-bottom="true" @click="callActionSheetClick"></u-action-sheet>
		<u-toast ref="uToast"/>
	</view>
</template>

<script>
	import config from '../../api/config.js';
	
	export default {
		data() {
			return {
				pic: '/static/icon/avatar.png',
				cityPinYin: '',
				proId: '',
				collectIcon: 'heart',
				shareIcon: 'zhuanfa',
				photoList: [],
				commentList: [],
				recommendedList: [],
				house: Object,
				
				callActionSheetShow: false,
				callActionSheet: [{
					text: '打电话',
				}, {
					text: '发短信',
					disabled: true
				}, ],
			}
		},

		onLoad: function(params) {
			//this.house = JSON.parse(decodeURIComponent(params.house));
			//this.photoList = this.house.proPhotoUrl.split(",");
			//console.log(params.proId);
			this.cityPinYin = params.cityPinYin;
			this.proId = params.proId;
			
			this.getHouseDetail();
			this.getCommentList();
			this.getRecommendedList();
		},
		
		onReady() {
		},

		methods: {
			goBack() {
				uni.navigateBack({
					delta: 1
				});
			},
			
			Call() {
				this.callActionSheetShow = true;
			},
			
			callActionSheetClick(index) {
				if (index === 0) {
					if(this.house.proEmployee1Phone === null || this.house.proEmployee1Phone === undefined || this.house.proEmployee1Phone === ''){
						this.$refs.uToast.show({ title: '号码为空', type: 'error'});
					}
					else{
						uni.makePhoneCall({
							phoneNumber: this.house.proEmployee1Phone,
						});
					}
				}
			},

			getHouseDetail() {
				this.$u.get(config.outerServer + '/property/getProDetail?proId=' + this.proId + '&cityPinYin=' + this.cityPinYin, {

				}).then(res => {
					this.house = res.data;
					console.log(this.house);
					if(this.house.proPhotoUrl === null || this.house.proPhotoUrl === 'null'){
						console.log('没图片');
						this.photoList.push('/static/icon/NullPic.png');
					}
					else{
						console.log(this.house.proPhotoUrl.toString());
						var list = this.house.proPhotoUrl.split(',');
						this.photoList = list;
					}
					this.house.proTrustDate = this.house.proTrustDate.substring(0, 10);
					this.house.proDate = this.house.proDate.substring(0, 10);
					this.house.proModDate = this.house.proModDate.substring(0, 10);
				});
			},

			getCommentList() {
				this.$u.get(config.outerServer + '/property/getCommentsByPropertyId?propId=' + this.proId + '&cityPinYin=' +
					this.cityPinYin, {}).then(res => {
					//console.log(res.data);
					this.commentList = res.data;
				});
			},

			getRecommendedList() {
				this.$u.get(config.outerServer + '/property/getRecommend?trade=%E5%87%BA%E5%94%AE&cityPinYin=' + this.cityPinYin +
					'&pageNum=1&pageSize=4', {

					}).then(res => {
					//console.log(res);
					this.recommendedList = res.data.list;
				});
			},
			
			ToHouseDetail(index) {
				uni.navigateTo({
					url: 'HouseDetail2?proId=' + this.recommendedList[index].proId + "&cityPinYin=" + "chengdu"
				});
			},
			
			ToWarning(){
				uni.navigateTo({
					url:"../Setting/Warning"
				});
			}
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
	
	.topNav {
		position: fixed;
		top: 0;
		z-index: 10;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		padding-top: 60rpx;
		padding-left: 20rpx;
		padding-right: 20rpx;
		width: 100%;
	}
	
	.leftIcon,.rightIcon {
		background-color: rgba($color: #bfbfbf, $alpha: 0.8);
		border-radius: 35rpx;
		padding: 10rpx;
	}

	.section {
		padding: 10rpx;
		margin: 10rpx;
		border: 1rpx solid white;
		background-color: white;
		border-radius: 8rpx;
	}

	.title {
		font-size: large;
		font-weight: bolder;
		color: black;
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}

	.tips {
		font-size: small;
	}

	.mainIntro {
		margin-top: 20rpx;

		.value {
			font-size: large;
			font-weight: bolder;
			color: red;
		}
		.value1 {
			font-size: medium;
			font-weight: bolder;
			color: red;
		}

		.description {
			font-size: x-small;
			color: gray;
		}
	}

	.sectionTitle {
		font-size: medium;
		font-weight: bold;
		color: black;
	}

	.section .uni-list .uni-list-cell {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;
		
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
	}

	
	.section .uni-list .uni-list-cell {
		margin-top: 10rpx;
		
		.commentPerson {
			font-weight: bold;
			font-size: small;
		}
	
		.comment {
			font-size: small;
		}
	}
	
	.navigation {
		position: fixed;  
		bottom: var(--window-bottom) ;	
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: solid 2rpx #f2f2f2;
		background-color: #ffffff;
		padding: 10rpx;
		width: 100%;
		
		.left {
			display: flex;
			font-size: 20rpx;
			.center{
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-between;
			}
		}
	}
</style>
