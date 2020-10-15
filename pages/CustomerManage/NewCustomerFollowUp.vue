<template>
	<view>
		<u-navbar is-back="true" title="写跟进"></u-navbar>
		<view class="wrap">
			<u-form :model="model" :rules="rules" ref="uForm" :errorType="['message']">
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" label-position="left"
				 label="跟进方式" prop="followType" label-width="300">
					<u-input :border="border" type="select" :select-open="followTypeListShow" v-model="model.followType" placeholder="请选择跟进方式"
					 @click="followTypeListShow = true"></u-input>
				</u-form-item>
				<u-picker mode="selector" v-model="followTypeListShow" :default-selector="[0]" :range="followTypeList" @confirm="followTypeListCallback"></u-picker>
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" label="跟进内容" prop="content" label-position="top">
					<u-input type="textarea" :border="border" placeholder="请填写跟进内容(300字)" v-model="model.content" />
				</u-form-item>
			</u-form>
			
			<u-button @click="submit" type="primary">确定新增</u-button>
			<u-toast ref="uToast"/>
		</view>
	</view>
</template>

<script>
	export default{
		data() {
			return {
				model:{
					followType:'',
					content:'',
				},
				
				rules:{
					followType: [{
						required: true,
						message: '请选择跟进方式',
						trigger: 'change',
					}],
					content: [{
							required: true,
							message: '请填写跟进内容',
							trigger: 'blur',
						},
						{
							max: 300,
							message: '填写的内容在300字内',
							trigger: ['change', 'blur'],
						}],
				},
				
				followTypeList:[
					"去电","来电","带看","实勘","空看","拜访","派单","短信","拿钥匙","责任盘维护","申请","修改",
					"保留","其他","回访","看房","发网络","议价","客还价","短信","诚意金","预定","有效跟进","激活"
				],
				
				followTypeListShow:false,
				
				InquiryID:'',
				border:false,
			}
		},
		
		onLoad(params) {
			this.InquiryID = params.InquiryID;
		},
		
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},
		
		methods:{
			followTypeListCallback(index) {
				this.model.followType = this.followTypeList[index];
			},
			
			submit() {
				this.$refs.uForm.validate(valid => {
					if (valid) {
						
						console.log('验证通过');
						this.AddCustomerFollowUp();
					} else {
						console.log('验证失败');
					}
				});
			},
			
			AddCustomerFollowUp(){
				this.$u.get(this.global_data.global_data.BaseUrl + 'NewInquiryFollow',{
					DBName: this.global_data.global_data.DBName,
					InquiryID: this.InquiryID,
					EmpNo: this.global_data.global_data.EmpNo,
					Content: this.model.content,
					FollowType: this.model.followType
				}).then(res =>{
					if(res.Flag === 'success'){
						this.$refs.uToast.show({
											title: '新增跟进成功',
											type: 'success',
											back:true,
											});
					}
					else{
						this.$refs.uToast.show({
											title: '新增跟进失败',
											type: 'erro',
											back:false,
											});
					}
				});
			},
		}
			
	}
</script>

<style lang="scss" scoped>
	.wrap{
		padding: 0 40rpx;
	}
	
	
</style>
