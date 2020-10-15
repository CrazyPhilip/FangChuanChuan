<template>
	<view>
		<u-navbar :is-back="false" title="　" :border-bottom="false">
			<view class="u-flex u-row-right" style="width: 100%;">
				<view class="camera u-flex u-row-center">
					<u-icon name="camera-fill" color="#000000" size="48"></u-icon>
				</view>
			</view>
		</u-navbar>
		<view class="u-flex user-box u-p-l-30 u-p-r-20 u-p-b-30" v-on:click="toEditUserInfo">
			<view class="u-m-r-10">
				<u-avatar :src="pic" size="140"></u-avatar>
			</view>
			<view class="u-flex-1">
				<view class="u-font-18 u-p-b-20">{{this.global_data.global_data.EmpName}}</view>
				<view class="u-font-14 u-tips-color">{{this.global_data.global_data.Tel}}</view>
				<view class="u-font-14 u-tips-color">{{this.global_data.global_data.AccountStyle}}</view>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="scan" color="#969799" size="28"></u-icon>
			</view>
			<view class="u-m-l-10 u-p-10">
				<u-icon name="arrow-right" color="#969799" size="28"></u-icon>
			</view>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="clock" title="夜间模式" :arrow="false" >
					<u-switch slot="right-icon" v-model="checked" size="30"></u-switch>
				</u-cell-item>
				<u-cell-item icon="setting" title="关于" :arrow="true" arrow-direction="right" @click='toAbout'></u-cell-item>
			</u-cell-group>
		</view>
		
		<view class="u-m-t-20">
			<u-cell-group>
				<u-cell-item icon="close" title="退出登录" :arrow="false" @click="modalShow = true"></u-cell-item>
			</u-cell-group>
		</view>
		<u-modal v-model="modalShow" content="您要退出登录吗？" @confirm="quit"></u-modal>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				pic:'/static/icon/avatar.png',
				
				modalShow: false,
				checked:false,
			}
		},
		
		onLoad() {
		},
		
		methods: {
			toEditUserInfo(){
				console.log(this.global_data.global_data.EmpName);
				console.log(this.global_data.global_data.Tel);
				uni.navigateTo({
					url:'./EditUserInfo'
				});
			},
			
			toAbout(){
				uni.navigateTo({
					url:'../Home/About'
				});
			},
			
			quit(){
				uni.reLaunch({
					url:'../index/index'
				});
				uni.clearStorage();
			},
		}
	}
</script>

<style lang="scss" scoped>
page{
	background-color: #ededed;
}

.camera{
	width: 54px;
	height: 44px;
	
	&:active{
		background-color: #ededed;
	}
}
.user-box{
	background-color: #fff;
}
</style>
