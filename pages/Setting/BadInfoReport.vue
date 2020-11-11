<template>
	<view>
		<u-navbar is-back="true" title="违法和不良信息举报"></u-navbar>

		<view>
			<u-cell-group class="u-m-t-20" :border="true">
				<u-cell-item icon="phone" title="举报电话(7*24小时)" :value="phone" :arrow="true" arrow-direction="right" @click="toCall"></u-cell-item>
				<u-cell-item icon="email" title="举报邮箱" :value="email" :arrow="false" arrow-direction="right" @click="toCopy"></u-cell-item>
			</u-cell-group>
		</view>

		<u-modal content="拨打举报电话028-61834237？" v-model="modalShow1" @confirm="confirm1" ref="uModal1" :mask-close-able="true"
		 :show-cancel-button="true"></u-modal>
		<u-modal content="复制邮箱1770973601@qq.com？" v-model="modalShow2" @confirm="confirm2" ref="uModal2" :mask-close-able="true"
		 :show-cancel-button="true"></u-modal>
		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				phone: '028-61834237',
				email: '1770973601@qq.com',

				modalShow1: false,
				modalShow2: false
			}
		},

		methods: {
			toCall() {
				this.modalShow1 = true;
			},

			confirm1() {
				uni.makePhoneCall({
					phoneNumber: this.phone
				});
			},

			toCopy() {
				this.modalShow2 = true;
			},

			confirm2() {
				uni.setClipboardData({
					data: this.email,
					success: function() {
					}
				});
			},
		}
	}
</script>

<style>
</style>
