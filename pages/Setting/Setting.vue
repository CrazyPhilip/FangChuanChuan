<template>
	<view>
		<u-navbar is-back="true" title="设置"></u-navbar>

		<scroll-view scroll-y>
			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="clock" title="夜间模式" :arrow="false">
					<u-switch slot="right-icon" v-model="checked" size="30" @change="darkModeChange"></u-switch>
				</u-cell-item>
				<u-cell-item icon="trash" title="清理缓存" :arrow="true" arrow-direction="right" @click="toClearCache"></u-cell-item>
				<u-cell-item icon="reload" title="检查更新" :arrow="true" arrow-direction="right"></u-cell-item>
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
	</view>
</template>

<script>
	export default {
		data() {
			return {
				toastShow: false,
				modalShow: false,
				checked: false
			}
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

</style>
