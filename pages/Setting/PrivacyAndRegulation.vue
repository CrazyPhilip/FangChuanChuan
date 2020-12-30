<template>
	<view>
		<u-navbar is-back="true" title="用户隐私与规则中心" ></u-navbar>

		<view>
			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="order" title="用户服务协议" :arrow="true" arrow-direction="right" :index="1" @click="toShow"></u-cell-item>
				<u-cell-item icon="order" title="隐私政策" :arrow="true" arrow-direction="right" :index="2" @click="toShow"></u-cell-item>
				<u-cell-item icon="order" title="隐私设置" :arrow="true" arrow-direction="right" :index="3" @click="toPrivacySetting"></u-cell-item>
			</u-cell-group>
		</view>

<!-- 		<u-mask :show="maskShow" @click="maskShow = false">
			<view class="warp">
				<view class="rect" >					
					<u-swiper :list="sourceList"  mode="number" height="1000" :autoplay="false"></u-swiper>
				</view>
			</view>
			
		</u-mask> -->
		
		<u-modal v-model="downloadModalShow" title="下载文档" :show-confirm-button="showConfirmButton" confirm-text="打开文档"
		 :show-cancel-button="true" :mask-close-able="true" @confirm="openFile">
			<view class="slot-content" style="display: flex;justify-content: center;margin: 40rpx;">
				<u-line-progress active-color="#2979ff" :percent="percent"></u-line-progress>
			</view>
		</u-modal>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				// maskShow: false,
				
				percent: 0,
				downloadModalShow: false,
				showConfirmButton: false,
				filePath:'',
				source: '',
				
				/* sourceList:[],

				webviewStyles: {
					progress: {
						color: '#FF3333'
					}
				} */
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
				// this.maskShow = true;

				switch (index) {
					case 1:
						{	
							// this.sourceList = [];
							// for (var i = 1; i <= 10; i++) {
							// 	this.sourceList.push("http://www.junjunhouse.com/files/service/service_" + i +".png");
							// }
							this.downloadModalShow = true;
							this.source = "https://www.fangchuanchuan.com/files/junjunhouse_service.pdf";
							this.download(this.source);
							/* uni.downloadFile({
							  url: this.source,
							  success: function (res) {
							    var filePath = res.tempFilePath;
							    uni.openDocument({
							      filePath: filePath,
							      success: function (res) {
							        console.log('打开文档成功');
							      }
							    });
							  }
							}); */
						}
						break;
					case 2:
						{
							// this.sourceList = [];
							// for (var i = 1; i <= 3; i++) {
							// 	this.sourceList.push("http://www.junjunhouse.com/files/privacy/privacy_" + i +".png");
							// }
							this.downloadModalShow = true;
							this.source = "https://www.fangchuanchuan.com/files/junjunhouse_privacy.pdf";
							this.download(this.source);
						}
						break;
					case 3:
						{
							// this.source = "";
						}
						break;
				}
			},
			
			download(url) {
				const downloadTask = uni.downloadFile({
				    url: url, //仅为示例，并非真实的资源
				    success: (res) => {
						console.log(res);
				        if (res.statusCode === 200) {
				            // console.log('下载成功');
							this.showConfirmButton = true;
							this.filePath = res.tempFilePath;
				        }
				    }
				});
				
				downloadTask.onProgressUpdate((res) => {
				    // console.log('下载进度' + res.progress);
				    // console.log('已经下载的数据长度' + res.totalBytesWritten);
				    // console.log('预期需要下载的数据总长度' + res.totalBytesExpectedToWrite);
					this.percent = res.progress;
				
				    // 测试条件，取消下载任务。
				    // if (res.progress > 50) {
				    //     downloadTask.abort();
				    // }
				});
			},
			
			openFile(){
				if (this.filePath) {
					uni.openDocument({
					  filePath: this.filePath,
					  success: function (res) {
					    // console.log('打开文档成功');
					  }
					});
				}
			},

			toPrivacySetting() {
				uni.navigateTo({
					url: './Privacy'
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
