<template>
	<view>
		<u-navbar is-back="true" title="个人信息"></u-navbar>
		
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
				modalShow:false,
			}
		},
	
		methods: {
			quit() {
				uni.reLaunch({
					url: '../index/index'
				});
				uni.clearStorage();
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

