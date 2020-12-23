<template>
	<view>
		<u-navbar is-back="true" title="设置"></u-navbar>

		<scroll-view scroll-y>
			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="clock" title="夜间模式" :arrow="false">
					<u-switch slot="right-icon" v-model="checked" size="30" @change="darkModeChange"></u-switch>
				</u-cell-item>
				<u-cell-item icon="trash" title="清理缓存" :value="cache" :arrow="true" arrow-direction="right" @click="toClearCache"></u-cell-item>
				<u-cell-item icon="reload" title="检查更新" :arrow="true" arrow-direction="right" @click="download"></u-cell-item>
			</u-cell-group>

			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="info-circle" title="违法和不良信息举报" :arrow="true" arrow-direction="right" @click="toBadInfoReport"></u-cell-item>
			</u-cell-group>

			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="question-circle" title="关于我们" :arrow="true" arrow-direction="right" @click="toAbout"></u-cell-item>
				<u-cell-item icon="question-circle" title="用户隐私与规则中心" :arrow="true" arrow-direction="right" @click="toPrivacy"></u-cell-item>
				<u-cell-item icon="question-circle" title="证照资质中心" :arrow="true" arrow-direction="right" @click="toCredentials"></u-cell-item>
			</u-cell-group>
		</scroll-view>
		
		<u-toast ref="uToast"/>
		<u-modal content="清理缓存？" v-model="modalShow" @confirm="confirm" ref="uModal" :async-close="true" :mask-close-able="true" :show-cancel-button="true"></u-modal>
	
		<!-- <u-modal v-model="downloadModalShow" title="下载apk" :show-confirm-button="showConfirmButton" confirm-text="安装"
		 :show-cancel-button="true" :mask-close-able="true" @confirm="openFile">
			<view class="slot-content" style="display: flex;justify-content: center;margin: 40rpx;">
				<u-line-progress active-color="#2979ff" :percent="percent"></u-line-progress>
			</view>
		</u-modal> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				toastShow: false,
				modalShow: false,
				checked: false,
				cache:'',
				
				percent: 0,
				downloadModalShow: false,
				showConfirmButton: false,
				filePath:'',
			}
		},

		onReady(){
			const res = uni.getStorageInfoSync();
			console.log(res);
			this.cache = res.currentSize + 'kB';
		},

		methods: {
			// 暗黑模式
			darkModeChange(){
				this.$refs.uToast.show({
					title: '抱歉，功能暂未开放',
					type: 'error', 
					callback: function(){
						this.checked = false;
					}
				})
			},
			
			// 跳转到关于页面
			toAbout() {
				uni.navigateTo({
					url: './About'
				});
			},
			
			// 跳转到不良信息举报页面
			toBadInfoReport() {
				uni.navigateTo({
					url: './BadInfoReport'
				});
			},
			
			// 跳转到隐私页面
			toPrivacy() {
				uni.navigateTo({
					url: './Privacy'
				});
			},
			
			// 跳转到认证页面
			toCredentials() {
				uni.navigateTo({
					url: './Credentials'
				});
			},

			// 显示清理缓存弹窗
			toClearCache() {
				this.modalShow = true;
			},

			// 确认清理缓存
			confirm() {
				setTimeout(() => {
					// 3秒后自动关闭
					this.modalShow = false;
					// 如果不想关闭，而单是清除loading状态，需要通过ref手动调用方法
					// this.$refs.uModal.clearLoading();
					uni.clearStorage();
				}, 3000)
			},
			
			download() {
				plus.runtime.openURL("https://www.fangchuanchuan.com/download/consumer-verson.apk", function(res) {
				                    this.$refs.uToast.show({
				                    	title: '链接有错，请访问房串串官网',
				                    	type: 'error'
				                    })
				                }); 
				/* this.downloadModalShow = true;
				
				const downloadTask = uni.downloadFile({
				    url: "https://www.fangchuanchuan.com/download/agent-verson.apk", 
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
			 */
			},
			
			openFile(){
				if (this.filePath) {
					plus.runtime.install(this.filePath);
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

</style>
