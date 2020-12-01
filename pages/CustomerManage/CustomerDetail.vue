<template>
	<view>
		<u-navbar is-back="true" title="客源详情"></u-navbar>
		<view class="wrap">
			<view class="detail">
				<view class="u-m-r-10">
					<u-avatar :src="pic" size="140"></u-avatar>
				</view>

				<view style="margin-left: 8rpx;">
					<view>
						<text class="tag">{{customer.Trade}}</text>
						<text class="name">{{customer.CustName}}</text>
					</view>
					<view class="a">电话：{{customer.CustMobile}}</view>
					<view class="a">编号：{{customer.InquiryNo}}</view>
				</view>
			</view>
<!-- 
			<u-action-sheet v-model="callActionSheetShow" :list="callActionSheet" :cancel-btn="true" :mask-close-able="true"
			 :safe-area-inset-bottom="true" @click="callActionSheetClick"></u-action-sheet>
			<view class="buttons">
				<u-row>
					<u-col span="4">
						<u-button class="btn" @click="Call">联系客户</u-button>
					</u-col>
					<u-col span="4">
						<u-button class="btn" @click="ToFollowUp">看跟进</u-button>
					</u-col>
					<u-col span="4">
						<u-button class="btn" @click="ToWriteFollow">写跟进</u-button>
					</u-col>
				</u-row>
			</view>
 -->
			<view class="section">
				<view class="sectionTitle">客户需求</view>
				<u-row justify="center">
					<u-col span="6">付佣：{{customer.PropertyCommission}}</u-col>
					<u-col span="6">价格：{{customer.PriceMin}}~{{customer.PriceMax}}{{customer.UnitName}}</u-col>
				</u-row>
				<u-row justify="center">
					<u-col span="6">房型：{{customer.CountF}}室{{customer.CountT}}厅{{customer.CountW}}卫{{customer.CountY}}阳</u-col>
					<u-col span="6">面积：{{customer.SquareMin}}~{{customer.SquareMax}}</u-col>
				</u-row>
				<u-row justify="center">
					<u-col span="6">类型：{{customer.PropertyType}}</u-col>
					<u-col span="6">用途：{{customer.PropertyUsage}}</u-col>
				</u-row>
				<u-row justify="center">
					<u-col span="6">位置：{{customer.Position}}</u-col>
					<u-col span="6">用途：</u-col>
				</u-row>
			</view>

			<view class="section">
				<view class="sectionTitle">其他</view>
				<u-row justify="center">
					<u-col span="6">来源：{{customer.InquirySource}}</u-col>
					<u-col span="6">员工：{{customer.RegPerson}}</u-col>
				</u-row>
			</view>

			<view class="section">
				<view class="sectionTitle">备注</view>
				<view>{{customer.Remark}}</view>
			</view>
			
			<view class="navigation">
				<view class="left">
					<u-row>
						<u-col span="3"><u-button type="success" @click="Call">联系客户</u-button></u-col>
						<u-col span="3"><u-button type="primary" @click="ToFollowUp">看跟进</u-button></u-col>
						<u-col span="3"><u-button type="primary" @click="ToWriteFollow">写跟进</u-button></u-col>
						<u-col span="3"><u-button type="warning" @click="ToModCustomer">修改客源</u-button></u-col>
					</u-row>
					
				</view>
			</view>
			<u-action-sheet v-model="callActionSheetShow" :list="callActionSheet" :cancel-btn="true" :mask-close-able="true"
			 :safe-area-inset-bottom="true" @click="callActionSheetClick"></u-action-sheet>
			<u-toast ref="uToast"/>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				customer: Object,
				pic: '/static/icon/avatar.png',

				callActionSheetShow: false,
				callActionSheet: [{
					text: '打电话',
				}, {
					text: '发短信',
					disabled: true
				}, ],
			}
		},

		onLoad(params) {
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('acceptDataFromCustomerList', (data) => {
				this.customer = data;
				console.log(data);
			});
		},

		methods: {
			Call() {
				this.callActionSheetShow = true;
			},

			callActionSheetClick(index) {
				if (index === 0) {
					uni.makePhoneCall({
						phoneNumber: this.customer.CustMobile,
					});
				}
			},

			ToFollowUp() {
				uni.navigateTo({
					url: './CustomerFollowUp?InquiryID=' + this.customer.InquiryID
				});
			},
			
			ToModCustomer(){
				uni.navigateTo({
					url: './ModCustomer',
					success: (res) => {
						res.eventChannel.emit('acceptDataFromHouseList', this.customer);
					}
				})
			},
			ToWriteFollow() {
				uni.navigateTo({
					url: './NewCustomerFollowUp?InquiryID=' + this.customer.InquiryID
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
	.wrap {
		padding: 10rpx;
	}

	.detail {
		display: flex;
		flex-direction: row;
		align-items: center;
		border-radius: 8rpx;
		background-color: white;
		padding: 10rpx;
		margin-bottom: 10rpx;
	}

	.section {
		border-radius: 8rpx;
		background-color: white;
		padding: 10rpx;
		margin-bottom: 10rpx;
	}

	.sectionTitle {
		font-size: medium;
		font-weight: bold;
		color: black;
	}

	.name {
		font-size: large;
		font-weight: bold;
	}

	.tag {
		font-size: xx-small;
		padding: 2rpx;
		background-color: #FA3534;
		border-radius: 10rpx;
		color: white;
	}

	.buttons {
		margin-bottom: 10rpx;
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
