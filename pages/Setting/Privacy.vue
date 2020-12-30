<template>
	<view>
		<u-navbar is-back="true" title="隐私设置"></u-navbar>

		<view>
			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="clock" title="允许房串串保留您的信息" label="将为您提供更好更精准的服务" :arrow="false">
					<u-switch slot="right-icon" v-model="checked" size="30" @change="Change"></u-switch>
				</u-cell-item>
			</u-cell-group>
		</view>

	</view>
</template>

<script>
	export default{
		data(){
			return {
				checked:true,
			}
		},
		
		onReady() {
			uni.getStorage({
				key:'c_savePrivacy',
				complete:(res) => {
					this.checked = res.data;
				}
			})
		},
		
		methods:{
			Change(status){
				uni.setStorageSync('c_savePrivacy', status);
			}
		}
	}
</script>

<style>
</style>
