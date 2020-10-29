<template>
	<view>
		<u-navbar is-back="true" title="证照资质中心" title-width="200rpx"></u-navbar>

		<view>
			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="order" title="营业执照" :arrow="true" arrow-direction="right" :index="1" @click="toShow"></u-cell-item>
				<u-cell-item icon="order" title="ICP证书" :arrow="true" arrow-direction="right" :index="2" @click="toShow"></u-cell-item>
				<u-cell-item icon="order" title="网络文化经营许可证" :arrow="true" arrow-direction="right" :index="3" @click="toShow"></u-cell-item>
			</u-cell-group>
		</view>

		<u-mask :show="maskShow" @click="maskShow = false">
			<view class="warp">
				<view class="rect" @tap.stop>
					<u-image :src="source" height="100%" width="100%">
						<u-loading slot="loading"></u-loading>
					</u-image>
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

				source: ''
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
							this.source = "http://www.junjunhouse.com/img/junjunLicense.f4f8e804.jpg";
						}
						break;
					case 2:
						{
							this.source = "";
						}
						break;
					case 3:
						{
							this.source = "";
						}
						break;
				}
			},

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
		align-items: center;
		justify-content: center;
		height: 100%;
	}

	.rect {
		width: 750rpx;
		height: 600rpx;
		background-color: #fff;
	}
</style>
