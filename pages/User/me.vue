<template>
	<view>
		<view class="status_bar">
			<!-- 这里是状态栏 -->
		</view>

		<view class="wrap">

			<view class="u-flex user-box" v-on:click="toEditUserInfo">
				<view class="u-m-r-20">
					<u-avatar :src="user.PhotoUrl" size="140" bg-color="white" mode="square" :show-level="true"></u-avatar>
				</view>
				<view class="u-flex-1">
					<view class="u-font-18 u-p-b-20">{{user.EmpName}}</view>
					<view class="u-font-14">{{user.Tel}}</view>
					<view class="u-font-14">{{user.AccountStyle}}</view>
				</view>
				<view class="u-m-l-10">
					<u-icon name="scan" color="white"></u-icon>
				</view>
				<view class="u-m-l-20">
					<u-icon name="arrow-right" color="white"></u-icon>
				</view>
			</view>

			<!-- <view class="section">
					<view class="sectionBar">
						<view class="sectionTitle u-p-b-20">新手任务</view>
						<u-icon name="arrow-right" label="做任务" label-pos="left"></u-icon>
					</view>
					<view>29个任务|全部完成可获得160颗星星</view>
				</view>
		
				<view class="section">
					<u-row>
						<u-col span="4">
							<view class="option">我的星星</view>
						</u-col>
						<u-col span="4">
							<view class="option">五星好评</view>
						</u-col>
						<u-col span="4">
							<view class="option">待评价</view>
						</u-col>
					</u-row>
				</view> -->

			<view class="section" @click="toFollowArea">
				<view class="sectionBar">
					<view class="sectionTitle u-p-b-20">关注区域</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
				<view>查看或新增自己的关注区域</view>
			</view>

			<view class="section" @click="toScan">
				<view class="sectionBar">
					<view class="sectionTitle u-p-b-20">扫一扫</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
				<view>扫一扫，快捷添加客户信息</view>
			</view>
			<!-- 
				<view class="section">
					<view class="sectionBar">
						<view class="sectionTitle u-p-b-20">我的钱包</view>
						<u-icon name="arrow-right" label="查看详情" label-pos="left"></u-icon>
					</view>
					<view>经纪人专享服务，查看星星及账单信息</view>
				</view>
		
				<view class="section">
					<view class="sectionBar">
						<view class="sectionTitle">安全中心</view>
						<u-icon name="arrow-right"></u-icon>
					</view>
					<u-grid :col="4" @click="IconClick" :border="false">
						<u-grid-item :index="1">
							<image class="MenuItem" src="/static/icon/anquanrenzheng.png" />
							<view class="grid-text">安全认证</view>
						</u-grid-item>
						<u-grid-item :index="2">
							<image class="MenuItem" src="/static/icon/anquanguanli.png" />
							<view class="grid-text">安全管理</view>
						</u-grid-item>
						<u-grid-item :index="3">
							<image class="MenuItem" src="/static/icon/renzheng.png" />
							<view class="grid-text">实名认证</view>
						</u-grid-item>
					</u-grid>
				</view> -->

			<!-- <view class="section">
					<view class="sectionBar">
						<view class="sectionTitle">我的客服</view>
						<u-icon name="arrow-right"></u-icon>
					</view>
					<u-grid :col="4" @click="IconClick" :border="false">
						<u-grid-item :index="4">
							<image class="MenuItem" src="/static/icon/zaixiankefu.png" />
							<view class="grid-text">在线客服</view>
						</u-grid-item>
						<u-grid-item :index="5">
							<image class="MenuItem" src="/static/icon/yuyinkefu.png" />
							<view class="grid-text">语音客服</view>
						</u-grid-item>
						<u-grid-item :index="6">
							<image class="MenuItem" src="/static/icon/jindu.png" />
							<view class="grid-text">处理进度</view>
						</u-grid-item>
						<u-grid-item :index="7">
							<image class="MenuItem" src="/static/icon/fangzhidao.png" />
							<view class="grid-text">房知道</view>
						</u-grid-item>
					</u-grid>
				</view>
		 -->
			<view class="section" @click="ToMyCollect">
				<view class="sectionBar">
					<view class="sectionTitle">我的收藏</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
			<view class="section" @click="ToSetting">
				<view class="sectionBar">
					<view class="sectionTitle">更多设置</view>
					<u-icon name="arrow-right"></u-icon>
				</view>
			</view>
		</view>

		<u-modal v-model="modalShow" :content="modalContent" @confirm="modalConfirm" ref="uModal" :show-cancel-button="true"
		 :mask-close-able="true" :async-close="true"></u-modal>
		<u-toast ref="uToast" />
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
				pic: '/static/icon/avatar.png',

				modalShow: false,
				modalContent: '',
				checked: false,
				scannedCustomer: Object,
			}
		},

		onLoad() {
			console.log(this.user);
		},

		computed: {
			...mapState(['user'])
		},

		methods: {
			toEditUserInfo() {
				uni.navigateTo({
					url: './EditUserInfo'
				});
			},

			toFollowArea() {
				uni.navigateTo({
					url: '../User/FollowArea'
				});
			},

			IconClick: function IconClick(index) {
				switch (index) {
					case 1:
						{

						}
						break;
				}
			},

			ToSetting() {
				uni.navigateTo({
					url: '../Setting/Setting'
				});
			},
			
			ToMyCollect() {
				uni.navigateTo({
					url: './myCollection'
				});
			},

			toScan() {
				// 允许从相机和相册扫码
				uni.scanCode({
					scanType: ['qrCode'],
					success: (res) => {
						console.log(res.result);
						if (res.result.indexOf("CustMobile") != -1) {
							this.scannedCustomer = JSON.parse(res.result);
							this.modalContent = '是否添加' + this.scannedCustomer.CustName + '（' + this.scannedCustomer.CustMobile + '）？';
							this.modalShow = true;
						} else {
							this.modalContent = '二维码错误';
							this.modalShow = true;
						}
					}
				});
			},

			modalConfirm() {
				this.$u.get(config.server + '/NewSimpleInquiry', {
					DBName: this.user.DBName,
					CustName: this.scannedCustomer.CustName,
					CustMobile: this.scannedCustomer.CustMobile,
					EmpTel: this.user.Tel
				}).then((res) => {
					console.log(res);
					this.modalShow = false;
					if (res.Flag === 'failed') {
						this.$refs.uToast.show({
							title: '发生错误',
							type: 'error'
						});
					} else {
						this.$refs.uToast.show({
							title: '添加成功',
							type: 'success'
						});
					}
				});

				/* uni.request({
					url:this.global_data.global_data.BaseUrl + 'NewSimpleInquiry',
					data:{
						DBName: this.global_data.global_data.DBName,
						CustName: this.scannedCustomer.CustName,
						CustMobile: this.scannedCustomer.CustMobile,
						EmpTel: this.global_data.global_data.Tel
					},
					success:(res) => {
						console.log(res);
						let data = res.data;
						this.modalShow = false;
						if (data.Flag === 'failed') {
							this.$refs.uToast.show({
								title: '添加成功',
								type: 'success'
							});
						} else {
							this.$refs.uToast.show({
								title: '发生错误',
								type: 'erroe'
							});
							
						}
					}
				}); */
			},
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #f2f2f2;
	}
</style>

<style lang="scss" scoped>
	.wrap {
		padding: 60rpx 20rpx 20rpx;
	}

	.status_bar {
		height: var(--status-bar-height);
		width: 100%;
		background-color: #808080;
		z-index: 10;
		position: fixed;
	}

	.user-box {
		padding: 40rpx;
		background-color: #64c864;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
	}

	.section {
		padding: 40rpx;
		background-color: white;
		margin-bottom: 20rpx;
		border-radius: 10rpx;
	}

	.sectionBar {
		display: flex;
		justify-content: space-between;
	}

	.sectionTitle {
		font-size: large;
		font-weight: bold;
	}

	.grid-text {
		font-size: 28rpx;
		margin-top: 4rpx;
		color: $u-type-info;
	}

	.MenuItem {
		height: 72rpx;
		width: 72rpx;
		align-items: center;
	}

	.option {
		text-align: center;
	}
</style>
