<template>
	<view>
		<u-navbar is-back="true" title="违法和不良信息举报" title-width="200rpx"></u-navbar>
	
		<view>
			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="phone" title="举报电话(7*24小时)" :value="phone" :arrow="true" arrow-direction="right" @click="toCall"></u-cell-item>
				<u-cell-item icon="email" title="举报邮箱" :value="email" :arrow="false"></u-cell-item>
			</u-cell-group>
		</view>
	
		<u-modal content="拨打举报电话028-61834237？" v-model="modalShow" @confirm="confirm" ref="uModal" :mask-close-able="true" :show-cancel-button="true"></u-modal>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				phone:'028-61834237',
				email:'1770973601@qq.com',
				
				modalShow:false
			}
		},
		
		methods:{
			toCall(){
				this.modalShow = true;
			},
			
			confirm(){
				uni.makePhoneCall({
				    phoneNumber: this.phone
				});
			}
		}
	}
</script>

<style>
</style>
