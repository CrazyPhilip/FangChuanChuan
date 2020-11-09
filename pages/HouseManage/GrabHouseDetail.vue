<template>
	<view>
		<view class="topNav">
			<u-icon class="leftIcon" pros="0" name="arrow-leftward" size="50rpx" color="#ffffff" @click="goBack"></u-icon>
			<view>
				<u-tabs-swiper class="u-tabs-box" ref="tabs" :list="[{name:'求购'}, {name:'求租'}]" :current="current" @change="showChange"
				 :is-scroll="false"></u-tabs-swiper>
			</view>
			<view class="right">
				<u-icon class="rightIcon" pros="1" name="heart" size="50rpx" color="#ffffff" @click="goBack"></u-icon>
				<u-icon class="rightIcon" pros="2" name="zhuanfa" size="50rpx" color="#ffffff" @click="goBack"></u-icon>
			</view>
		</view>

		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;">
					<u-swiper :list="photoList" mode="dot" indicator-pos="bottomCenter" :title="false" height="600" border-radius="0"
					 img-mode="aspectFill"></u-swiper>

					<view class="section">
						<u-tag v-if="house.FlagMWWY === 1" text="满五唯一" bg-color="#ff0000" mode="dark" shape="circle"></u-tag>
						<u-tag v-if="house.FlagWDY === 1" text="无抵押" bg-color="#ff0000" mode="dark" shape="circle"></u-tag>
						<u-tag v-if="house.FlagKDK === 1" text="可贷款" bg-color="#ff0000" mode="dark" shape="circle"></u-tag>
						<u-tag v-if="house.FlagXSFY === 1" text="新上房源" bg-color="#ff0000" mode="dark" shape="circle"></u-tag>
						<!-- <u-tag text="随时看房" mode="dark" shape="circle"></u-tag> -->
						<view class="title">{{house.Title}}</view>

						<view>
							<u-icon name="question-circle-fill" size="30"></u-icon>
							<text class="tips">风险提示</text>
						</view>

						<view class="mainIntro">
							<u-row justify="center">
								<u-col span="3">
									<view>
										<view class="value">{{house.Price}}万元</view>
										<view class="description">售价</view>
									</view>
								</u-col>
								<u-col span="1">
									<u-line color="#82848a" length="50rpx" :hair-line="false" border-style="solid" direction="col"></u-line>
								</u-col>
								<u-col span="3">
									<view>
										<view class="value">{{house.CountF}}室{{house.CountT}}厅</view>
										<view class="description">房型</view>
									</view>
								</u-col>
								<u-col span="1">
									<u-line color="#82848a" length="50rpx" :hair-line="false" border-style="solid" direction="col"></u-line>
								</u-col>
								<u-col span="3">
									<view>
										<view class="value">{{house.Square}}㎡</view>
										<view class="description">建筑面积</view>
									</view>
								</u-col>
							</u-row>
						</view>

					</view>

					<view class="section">
						<view class="sectionTitle">基本信息</view>
						<u-row justify="center">
							<u-col span="6">单价：{{house.SinglePrice}}万元</u-col>
							<u-col span="6">楼层：{{house.Floor}}/{{house.FloorAll}}</u-col>
						</u-row>
						<u-row justify="center">
							<u-col span="6">朝向：{{house.PropertyDirection}}</u-col>
							<u-col span="6">结构：{{house.PropertyType}}</u-col>
						</u-row>
						<u-row justify="center">
							<u-col span="6">装修：{{house.PropertyDecoration}}</u-col>
							<u-col span="6">挂牌：01</u-col>
						</u-row>
						<u-row justify="center">
							<u-col span="6">产权：{{house.PropertyRight}}</u-col>
							<u-col span="6">用途：{{house.PropertyUsage}}</u-col>
						</u-row>
						<u-row justify="center">
							<u-col span="12">小区：{{house.EstateName}}</u-col>
						</u-row>
					</view>

					<view class="section">
						<view class="sectionTitle">交易属性</view>
						<u-row justify="center">
							<u-col span="6">委托时间：{{}}</u-col>
							<u-col span="6">刷新时间：{{}}</u-col>
						</u-row>
						<u-row justify="center">
							<u-col span="6">属性：{{}}</u-col>
							<u-col span="6">产权日期：{{}}</u-col>
						</u-row>
						<u-row justify="center">
							<u-col span="6">产权所属：{{}}</u-col>
							<u-col span="6">抵押状态：{{}}</u-col>
						</u-row>
					</view>

					<!-- <view class="section">
						<view class="sectionTitle">房源特色</view>
					</view>

					<view class="section">
						<view class="sectionTitle">房源评论</view>
						<view class="uni-list">
							<view class="uni-list-cell" v-for="(item,index) in commentList" :key="index">
								<view class="commentItem">
									<u-row>
										<u-col span="2">
											<u-image :width="80" :height="80" border-radius="8" :src="item.photoUrl" error-icon="error-circle" mode="aspectFill"></u-image>
										</u-col>

										<u-col span="10">
											<view class="commentPerson">{{item.commentPerson}}</view>
											<view class="comment">{{item.content}}</view>
										</u-col>
									</u-row>
								</view>
							</view>
						</view>
					</view> -->

					<!-- <view class="section">
						<view class="sectionTitle">推荐房源</view>
						<view class="uni-list">
							<view class="uni-list-cell" v-for="(item,index) in recommendedList" :key="index">
								<view class="HouseItem" v-on:click="ToHouseDetail(index)">
									<u-row>
										<u-col span="4">
											<u-image width="200" height="200" border-radius="8" :src="item.proCoverUrl" error-icon="error-circle" mode="aspectFill"></u-image>
										</u-col>

										<u-col span="8">
											<view style="margin-left: 8rpx;">
												<view>
													<text class="BiKan">必看</text>
													<text class="HouseTitle">{{item.proTitle}}</text>
												</view>
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
										</u-col>
									</u-row>
								</view>
							</view>
						</view>

					</view>
 -->
					<u-gap bg-color="#eeeeee" height="100"></u-gap>
				</scroll-view>

				<view class="navigation">
					<view class="center">
						<u-row style="margin: 30rpx 0;">
							<u-col span="6">
								<u-button type="success" @click="Call">致电</u-button>
							</u-col>
							<!--  抢到的房子 可以看跟进吗？
							<u-col v-if="this.ifCanGrab == 'no'" span="3">
								<u-button type="primary" @click="ToFollowUp">看跟进</u-button>
							</u-col>
							<u-col v-if="this.ifCanGrab == 'no'" span="3">
								<u-button type="primary" @click="ToWriteFollow">写跟进</u-button>
							</u-col>
							<u-col v-if="this.ifCanGrab == 'no'" span="3">
								<u-button type="warning" @click="Call">修改房源</u-button>
							</u-col> -->
							<u-col  span="6">
								<u-button type="primary" @click="GrabFunction">{{this.btnGrabText}}</u-button>
							</u-col>
						</u-row>

					</view>
				</view>

			</swiper-item>

			<swiper-item class="swiper-item">
				<view class="timeLineBox">
					<u-time-line>
						<u-time-line-item nodeTop="2">
							<template v-slot:node>
								<view class="u-node" style="background: #19be6b;">
									<u-icon name="pushpin-fill" color="#fff" :size="24"></u-icon>
								</view>
							</template>
							<template v-slot:content>
								<view>
									<view class="u-order-title">发布房源</view>
									<view class="u-order-desc">该房源已由xxx于{{house.hangDate}}发布，审核通过后即可获取代理权。</view>
									<view class="u-order-time">{{house.hangDate}}</view>
								</view>
							</template>
						</u-time-line-item>
						<u-time-line-item nodeTop="2">
							<template v-slot:node>
								<view class="u-node" style="background: #19be6b;">
									<u-icon name="account-fill" color="#fff" :size="24"></u-icon>
								</view>
							</template>
							<template v-slot:content>
								<view>
									<view class="u-order-title unacive">经纪人抢房</view>
									<view class="u-order-desc">该房源已由xxx于{{house.hangDate}}获得代理权，审核通过后即可交易。</view>
									<view class="u-order-time">{{house.hangDate}}</view>
								</view>
							</template>
						</u-time-line-item>
						<u-time-line-item nodeTop="2">
							<template v-slot:node>
								<view class="u-node" style="background: #19be6b;">
									<u-icon name="account-fill" color="#fff" :size="24"></u-icon>
								</view>
							</template>
							<template v-slot:content>
								<view>
									<view class="u-order-title unacive">带看中</view>
									<view class="u-order-desc">该房源处于带看状态中 </view>
									<view class="u-order-time">2019-05-07 08:05</view>
								</view>
							</template>
						</u-time-line-item>
						<u-time-line-item v-for="item in followUpList">
							<template v-slot:content>
								<view>
									<view class="u-order-desc">类型：{{item.FollowType}}</view>
									<view class="u-order-desc">内容：{{item.Content}}</view>
									<view class="u-order-desc">{{item.EmpName}}-{{item.DeptName}}</view>
									<view class="u-order-time">{{item.FollowDate}}</view>
								</view>
							</template>
						</u-time-line-item>
						<u-time-line-item nodeTop="0">
							<template v-slot:node>
								<view class="u-node">
									<u-icon name="account-fill" color="#fff" :size="24"></u-icon>
								</view>
							</template>
							<template v-slot:content>
								<view>
									<view class="u-order-title unacive">交易中</view>
									<view class="u-order-desc">交易双方已达成交易意向，该房源处于交易状态中。</view>
									<view class="u-order-time">2019-12-01 07:00</view>
								</view>
							</template>
						</u-time-line-item>
						<u-time-line-item nodeTop="0">
							<template v-slot:node>
								<view class="u-node">
									<u-icon name="account-fill" color="#fff" :size="24"></u-icon>
								</view>
							</template>
							<template v-slot:content>
								<view>
									<view class="u-order-title unacive">交易完成</view>
									<view class="u-order-desc">该房源已交易完成。</view>
									<view class="u-order-time">2019-12-01 07:00</view>
								</view>
							</template>
						</u-time-line-item>
					</u-time-line>

				</view>
			</swiper-item>
		</swiper>

		<u-action-sheet v-model="callActionSheetShow" :list="callActionSheet" :cancel-btn="true" :mask-close-able="true"
		 :safe-area-inset-bottom="true" @click="callActionSheetClick"></u-action-sheet>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				swiperCurrent: 0,
				current: 0,

				cityPinYin: '',
				proId: '',
				collectIcon: 'heart',
				shareIcon: 'zhuanfa',
				commentList: [],
				recommendedList: [],
				house: Object,
				ifCanGrab: '', // yes：可抢，从可抢房源列表页进；no：普通状态，非可抢房源；done：已抢，从已抢房源列表页进
				btnGrabText: '',
				photoList: [],
				
				followUpList:[],

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
			const eventChannel = this.getOpenerEventChannel();
			this.ifCanGrab = 'yes';   //通知 接口 进入的 为可抢房源
			eventChannel.on('acceptDataFromHouseList', (data) => {  //耗时任务？
				this.house = data.data;
				this.ifCanGrab = data.ifCanGrab;
				console.log('this-ifcangrab1:'+this.ifCanGrab);
				this.btnGrabText = this.ifCanGrab == 'yes' ? '抢该房源' : '取消抢房';
			});
			var DBName = params.DBName;
			var PropertyId  = params.PropertyId;
			var ifRequest = params.ifRequest;
			if(ifRequest === 'true')
			{
				this.getCanGrabHouseDetail(DBName,PropertyId);
				this.btnGrabText = this.ifCanGrab == 'yes' ? '抢该房源' : '取消抢房';
			}
			console.log('this-ifcangrab:'+this.ifCanGrab);   //比监听内事件先执行
			
			
		},

		onReady() {
			this.getPhotos();
			//this.getCommentList();
			//this.getRecommendedList();
			//this.getHouseFollowInfo();
		},

		methods: {
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
			},
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
					if (this.house.proEmployee1Phone !== null || this.house.proEmployee1Phone !== undefined || this.house.proEmployee1Phone !==
						'') {
						this.$refs.uToast.show({
							title: '号码为空',
							type: 'error'
						});
					} else {
						uni.makePhoneCall({
							phoneNumber: this.house.CustMobile,
						});
					}
				}
			},

			ToFollowUp() {
				uni.navigateTo({
					url: './HouseFollowUp?PropertyID=' + this.house.PropertyID
				});
			},

			ToWriteFollow() {
				uni.navigateTo({
					url: './NewHouseFollowUp?PropertyID=' + this.house.PropertyID
				});
			},

			getPhotos() {
				this.$u.get(this.global_data.global_data.BaseUrl + 'GetPhotoUrlByPropertyID', {
					DBName: this.global_data.global_data.DBName,
					PropertyID: this.house.PropertyID
				}).then(res => {
					if (res.Flag === 'success') {
						this.photoList = res.Result;
					} else {
						this.photoList.push('/static/icon/NullPic.png');
					}
				});
			},

			GrabFunction() {
				if (this.ifCanGrab == 'yes') { //抢该房源
					console.log('prpperidL:'+this.house.PropertyID + ' '+this.house.DBName);
					this.$u.get(this.global_data.global_data.BaseUrl + 'GrabbingHouse', {
						DbName: this.house.DBName,
						EmpNo: this.global_data.global_data.EmpID,
						PropertyID: this.house.PropertyID,
					}).then(res => {
						this.$u.toast(res.Msg);
						if (res.Flag === 'success') {
							this.$u.toast('抢房成功');
							this.ifCanGrab = 'no';
							this.btnGrabText = '取消抢房';
						} else {
							this.$u.toast('抢房失败');
						}
					});
				} else if (this.ifCanGrab == 'no') //取消抢房
				{
					this.$u.get(this.global_data.global_data.BaseUrl + 'UndoGrabbingHouse', {
						DbName: this.house.DBName,
						PropertyID: this.house.PropertyID,
					}).then(res => {
						this.$u.toast(res.Msg);
						if (res.Flag === 'success') {
							this.$u.toast('取消成功');
							this.ifCanGrab = 'yes';
							this.btnGrabText = '抢该房源';
						} else {
							this.$u.toast('取消失败');
						}
					});
				}
			},

			getCommentList() {
				this.$u.get('http://47.108.202.57:8090/property/getCommentsByPropertyId?propId=45&cityPinYin=' +
					this.cityPinYin, {

					}).then(res => {
					console.log(res.data);
					this.commentList = res.data;
				});
			},

			getRecommendedList() {
				this.$u.get('http://47.108.202.57:8090/property/getRecommend?trade=%E5%87%BA%E5%94%AE&cityPinYin=' + this.cityPinYin +
					'&pageNum=1&pageSize=4', {

					}).then(res => {
					console.log(res);
					this.recommendedList = res.data.list;
				});
			},
			getCanGrabHouseDetail(DBName,PropertyId){
				console.log('detail-2:'+DBName+' '+PropertyId);
				this.$u.get(this.global_data.global_data.BaseUrl + 'GetPropertyById', {
					DBName: DBName,
					PropertyId: PropertyId,
				}).then(res => {
					this.house = res.Result[0];
					console.log('detail-3:'+this.house);
				});
			},
		
			getHouseFollowInfo() {
				this.$u.get(this.global_data.global_data.BaseUrl + 'GetHouseFollowInfo', {
					DBName: this.global_data.global_data.DBName,
					PropertyID: this.house.PropertyID,
				}).then(res => {
					this.followUpList = res.Result;
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

	.leftIcon,
	.rightIcon {
		background-color: rgba($color: #bfbfbf, $alpha: 0.8);
		border-radius: 35rpx;
		padding: 10rpx;
	}

	.u-tabs-box {
		border-radius: 8rpx;
	}

	.swiper-box {
		height: 1500rpx;
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
		.BiKan {
			font-size: xx-small;
			padding: 2rpx;
			background-color: #FA3534;
			border-radius: 10rpx;
			color: white;
		}

		.HouseTitle {
			font-weight: bold;
			max-lines: 2;
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
		bottom: var(--window-bottom);
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

			.center {
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: space-between;
			}
		}
	}

	.u-node {
		width: 44rpx;
		height: 44rpx;
		border-radius: 100rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #d0d0d0;
	}

	.u-order-title {
		color: #333333;
		font-weight: bold;
		font-size: 32rpx;
	}

	.u-order-desc {
		color: rgb(150, 150, 150);
		font-size: 28rpx;
		margin-bottom: 6rpx;
	}

	.u-order-time {
		color: rgb(200, 200, 200);
		font-size: 26rpx;
	}
	
	.timeLineBox{
		padding: 200rpx 24rpx 24rpx 40rpx;
	}
</style>
