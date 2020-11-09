<template>
	<view>
		<u-navbar is-back="true" title="用户隐私与规则中心" ></u-navbar>

		<view>
			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="order" title="用户服务协议" :arrow="true" arrow-direction="right" :index="1" @click="toShow"></u-cell-item>
				<u-cell-item icon="order" title="隐私政策" :arrow="true" arrow-direction="right" :index="2" @click="toShow"></u-cell-item>
				<u-cell-item icon="order" title="隐私设置" :arrow="true" arrow-direction="right" :index="3" @click="toShow"></u-cell-item>
			</u-cell-group>
		</view>

		<u-mask :show="maskShow" @click="maskShow = false">
			<view class="warp">
				<view class="rect" >					
					<u-swiper :list="sourceList"  mode="number" height="1000" :autoplay="false"></u-swiper>
				</view>
			</view>
			
		</u-mask>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				maskShow: false,

				source: '',
				
				sourceList:[],

				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				}
			}
		},

		onBackPress(options) {
			if (this.maskShow) {
				this.maskShow = false;
				return true;
			}
		},

		methods: {
			toShow(index) {
				this.maskShow = true;

				switch (index) {
					case 1:
						{	
							this.sourceList = [];
							for (var i = 1; i <= 10; i++) {
								this.sourceList.push("http://www.junjunhouse.com/files/service/service_" + i +".png");
							}
							//this.source = "http://junjunhouse.com/files/" + encodeURIComponent("四川军军房产信息咨询平台隐私政策") + ".pdf";
						}
						break;
					case 2:
						{
							this.sourceList = [];
							for (var i = 1; i <= 3; i++) {
								this.sourceList.push("http://www.junjunhouse.com/files/privacy/privacy_" + i +".png");
							}
							//this.source = "http://junjunhouse.com/files/" + encodeURIComponent("四川军军房产信息咨询平台服务协议") + ".pdf";
						}
						break;
					case 3:
						{
							this.source = "";
						}
						break;
				}
			},

			toService() {
				uni.navigateTo({
					url: './Service'
				});
			},

			toPrivacyDetail() {
				uni.navigateTo({
					url: './Service'
				});
			},

			toPrivacySetting() {
				uni.navigateTo({
					url: './Service'
				});
			}
		}
	}
</script>

<style>
	page {
		background-color: #f0f0f0;
	}
</style>

<style lang="scss" scoped>
	.warp {
		display: flex;
		padding: 40rpx;
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 750rpx;
		height: 1000rpx;
		background-color: #fff;
	}
</style>
