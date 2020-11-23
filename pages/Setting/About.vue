<template>
	<view>
		<u-navbar is-back="true" title="关于"></u-navbar>

		<view class="wrap">
			<view class="up">
				<u-image src="/static/icon/logo.png" height="192rpx" width="192rpx" borderRadius="8rpx"></u-image>
				<view class="appName">房串串独立经纪人版</view>
				<view class="appVersion">版本号：{{version}}</view>
			</view>

			<view class="bottom">
				<view class="paragraph">房串串独立经纪人版APP是军军房页为全国独立经纪人提供的手机客户端，为独立经纪人提供房源、客源信息管理等功能。</view>
				<view class="paragraph">官方网址：www.fangchuanchuan.com</view>
				<view class="paragraph">客服电话：028-61834237</view>
				<view class="paragraph">邮箱：1770973601@qq.com</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				version: '',
			}
		},

		onLoad() {
			// #ifdef APP-PLUS
			/* plus.runtime.getProperty(plus.runtime.appid, function(inf) {
				console.log(inf);
				this.version = inf;
			}); */
			this.version = plus.runtime.version;
			// #endif
		},

		methods: {

		}
	}
</script>


<style>
	page {
		background-color: #f0f0f0;
	}
</style>

<style lang="scss" scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		padding: 40rpx;
		height: 1000rpx;
	}

	.up {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.appName,.appVersion{
		font-size: large;
		font-weight: bold;
	}
	
	.paragraph{
		font-size: medium;
		font-weight: bold;
	}
</style>
