<template>
	<view>
		<u-navbar is-back="true" title="税费计算器"></u-navbar>
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
				<swiper-item class="swiper-item">
					<scroll-view class="scrollView" scroll-y @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="resultBox">
								<view class="result1">房款总价：{{result1.totalPrice}}元</view>
								<view class="result2">契税：{{result1.deedTax}}元</view>
								<view class="result3">合同工本费：5元</view>
								<view class="result4">维修基金：{{result1.maintenanceFund}}元</view>
								<view class="result5">权属登记费：80元</view>
								<view class="result6">税金总额：{{result1.totalTax}}元</view>
								<view>
									<u-icon name="question-circle-fill" size="30"></u-icon>
									<text class="tips">以上结果仅供参考</text>
								</view>
							</view>

							<view>
								<u-form :model="model1" :rules="rules" ref="uForm" :errorType="['message']">
									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="建筑面积(㎡)" prop="square1" label-width="300">
										<u-input :border="border" placeholder="请输入建筑面积" v-model="model1.square1" type="number"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="单价(元/㎡)" prop="unitPrice1" label-width="300">
										<u-input :border="border" placeholder="请输入单价" v-model="model1.unitPrice1" type="number"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="首次购房" prop="first1" label-width="300">
										<u-radio-group v-model="model1.first1" @change="radioGroupChange" :width="radioCheckWidth">
											<u-radio shape="circle" v-for="(item, index) in firstList" :key="index" :name="item.name">{{ item.name }}</u-radio>
										</u-radio-group>
									</u-form-item>
								</u-form>
							</view>

							<view>
								<u-row justify="space-around">
									<u-col span="6">
										<u-button @click="_reset" shape="square" :ripple="true">清空</u-button>
									</u-col>
									<u-col span="6">
										<u-button @click="_calculate" shape="square" type="primary" :ripple="true">计算</u-button>
									</u-col>
								</u-row>
							</view>
						</view>
					</scroll-view>
				</swiper-item>
				
				<swiper-item class="swiper-item">
					<scroll-view scroll-y style="height: 100%;width: 100%;" @scrolltolower="reachBottom">
							<scroll-view class="scrollView" scroll-y @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="resultBox">
								<view class="result1">房款总价：{{result2.totalPrice}}元</view>
								<view class="result2">契税：{{result2.deedTax}}元</view>
								<view class="result2">增值税：{{result2.addedValueTax}}元</view>
								<view class="result2">印花税：{{result2.stampTax}}元</view>
								<view class="result3">个人所得税：{{result2.indicidualIncometTax}}元</view>
								<view class="result4">工本印花税：5元</view>
								<view class="result5">综合地价税：{{result2.consolidatedPriceTax}}元</view>
								<view class="result6">税金总额：{{result2.totalTax}}元</view>
								<view>
									<u-icon name="question-circle-fill" size="30"></u-icon>
									<text class="tips">以上结果仅供参考</text>
								</view>
							</view>

							<view>
								<u-form :model="model2" :rules="rules" ref="uForm" :errorType="['message']">
									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="物业类型" prop="propertyType2" label-width="300">
										<u-radio-group v-model="model2.propertyType2" @change="radioGroupChange" :width="radioCheckWidth" :wrap="true">
											<u-radio shape="circle" v-for="(item, index) in propertyTypeList" :key="index" :name="item.name">{{ item.name }}</u-radio>
										</u-radio-group>
									</u-form-item>
									
									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="计算方式" prop="calculate2" label-width="300">
										<u-radio-group v-model="model2.calculate2" @change="radioGroupChange" :width="radioCheckWidth" :wrap="true">
											<u-radio shape="circle" v-for="(item, index) in calculateList" :key="index" :name="item.name">{{ item.name }}</u-radio>
										</u-radio-group>
									</u-form-item>
									
									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="房产购置年限" prop="year2" label-width="300">
										<u-radio-group v-model="model2.year2" @change="radioGroupChange" :width="radioCheckWidth" :wrap="true">
											<u-radio shape="circle" v-for="(item, index) in yearList" :key="index" :name="item.name">{{ item.name }}</u-radio>
										</u-radio-group>
									</u-form-item>
									
									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="首次购房" prop="first2" label-width="300">
										<u-radio-group v-model="model2.first2" @change="radioGroupChange" :width="radioCheckWidth">
											<u-radio shape="circle" v-for="(item, index) in firstList" :key="index" :name="item.name">{{ item.name }}</u-radio>
										</u-radio-group>
									</u-form-item>
									
									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="唯一住房" prop="isOnly2" label-width="300">
										<u-radio-group v-model="model2.isOnly2" @change="radioGroupChange" :width="radioCheckWidth">
											<u-radio shape="circle" v-for="(item, index) in isOnlyList" :key="index" :name="item.name">{{ item.name }}</u-radio>
										</u-radio-group>
									</u-form-item>
									
									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="建筑面积(㎡)" prop="square2" label-width="300">
										<u-input :border="border" placeholder="请输入建筑面积" v-model="model2.square2" type="number"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="总价(元)" prop="totalPrice2" label-width="300">
										<u-input :border="border" placeholder="请输入总价" v-model="model2.totalPrice2" type="number"></u-input>
									</u-form-item>
									
									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="原价(元)" prop="originalPrice2" label-width="300" v-if="model2.calculate2 === '按差价计算'">
										<u-input :border="border" placeholder="请输入原价" v-model="model2.originalPrice2" type="number"></u-input>
									</u-form-item>

								</u-form>
							</view>

							<view>
								<u-row justify="space-around">
									<u-col span="6">
										<u-button @click="_reset2" shape="square" :ripple="true">清空</u-button>
									</u-col>
									<u-col span="6">
										<u-button @click="_calculate2" shape="square" type="primary" :ripple="true">计算</u-button>
									</u-col>
								</u-row>
							</view>
						</view>
						</scroll-view>
					</scroll-view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				model1: {
					square1: '',
					unitPrice1: '',
					first1: '是',
				},
				model2: {
					originalPrice2:'',
					totalPrice2:'',
					square2:'',
					first2:'是',
					isOnly2:'是',
					year2:'不满两年',
					calculate2:'按总价计算',
					propertyType2:'普通住宅',
				},
				result1:{
					totalPrice:'',
					deedTax:'',
					maintenanceFund:'',
					totalTax:'',
				},
				result2:{
					totalPrice:'',
					deedTax:'',
					addedValueTax:'',
					stampTax:'',
					indicidualIncometTax:'',
					consolidatedPriceTax:'',
					totalTax:''
				},
				list: [{
						name: '新房'
					},
					{
						name: '二手房'
					}
				],
				firstList: [{
						name: '是',
						disabled: false
					},
					{
						name: '否',
						disabled: false
					},
				],
				isOnlyList: [{
						name: '是',
						disabled: false
					},
					{
						name: '否',
						disabled: false
					},
				],
				propertyTypeList:[
					{
						name: '普通住宅',
						disabled: false
					},
					{
						name: '非普通住宅',
						disabled: false
					},
					{
						name: '经济适用房',
						disabled: false
					},
				],
				calculateList:[
					{
						name: '按总价计算',
						disabled: false
					},
					{
						name: '按差价计算',
						disabled: false
					},
				],
				yearList:[
					{
						name: '不满两年',
						disabled: false
					},
					{
						name: '二到五年',
						disabled: false
					},
					{
						name: '五年以上',
						disabled: false
					},
				],
				rules: {
					first: [{
						required: true,
						message: '请选择',
						trigger: 'change',
						type: 'array',
					}],
					square: [{
							required: true,
							message: '请输入',
							trigger: ['change', 'blur'],
						},
						{
							type: 'number',
							message: '只能为数字',
							trigger: ['change', 'blur'],
						}
					],
					unitPrice: [{
							required: true,
							message: '请输入',
							trigger: ['change', 'blur'],
						},
						{
							type: 'number',
							message: '只能为数字',
							trigger: ['change', 'blur'],
						}
					],
				},
				labelPosition: 'left',
				current: 0,
				swiperCurrent: 0,
				tabsHeight: 0,
				dx: 0,
			}
		},

		methods: {
			reachBottom() {

			},
			_reset() {   //结果要清空吗？
				this.model1.square1 ='';
				this.model1.unitPrice1 ='';
				this.model1.first1 = '是';			
			},

			_calculate() {
				if(this.model1.square1 === ''){
					return this.$u.toast('建筑面积不能为空');
				        }else{
				            var positiveFloat = /^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;
				            if (positiveFloat.test(this.model1.square1) != true) {
								return this.$u.toast('建筑面积格式不对，只能是正浮点数，请重新填写');
				            }
				        }
				
				        if(this.model1.unitPrice1 === ''){
							return this.$u.toast('单价不能为空');
				        }else{
				            var positiveFloat = /^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;
				            if (positiveFloat.test(this.model1.unitPrice1) != true) {
								return this.$u.toast('单价格式不对，只能是正浮点数，请重新填写');
				            }
				        }
				//开始计算
				 var totalPrice = this.model1.square1 * this.model1.unitPrice1;
				        var MaintenanceFund = totalPrice * 0.03;//维修基金
				
				        if(this.model1.first1 === '是'){   //新房是否首次购房
				            var contractTax = totalPrice*0.015;//契税
				            var temp = contractTax+MaintenanceFund+85;//税金总额
				        }else if(this.model1.first1 === '否'){
				            var contractTax = totalPrice*0.02;//契税
				            var temp = contractTax+MaintenanceFund+85;//税金总额
				        }
						
						this.result1.totalPrice = totalPrice;
						this.result1.deedTax = contractTax;
						this.result1.maintenanceFund = MaintenanceFund;
						this.result1.totalTax = temp;
			},

			_reset2(){
					this.model2.originalPrice2 = '';
					this.model2.totalPrice2 = '';
					this.model2.square2 = '';
					this.model2.first2 = '是';
					this.model2.isOnly2 = '是';
					this.model2.year2 = '不满两年';
					this.model2.alculate2 = '按总价计算';
					this.model2.propertyType2 = '普通住宅';
			},
			_calculate2() {
				if(this.model2.square2===''){
					return this.$u.toast('建筑面积不能为空');
				        }else{
				            var positiveFloat = /^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;
				            if (positiveFloat.test(this.model2.square2) != true) {
				               return this.$u.toast('建筑面积格式不对，只能是正浮点数，请重新填写');
				            }
				        }
				        if(this.model2.totalPrice2===''){
							return this.$u.toast('总价不能为空');
				        }else{
				            var positiveFloat = /^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;
				            if (positiveFloat.test(this.model2.totalPrice2) != true) {
								return this.$u.toast('总价格式不对，只能是正浮点数，请重新填写');
				            }
				        }
						
				//增加判断，比如 原价
				//开始计算
				var totalPrice = this.model2.totalPrice2;
				var differencePrice = Math.abs(this.model2.totalPrice2-this.model2.originalPrice2);//差价
				
				
				var addedTax;//增值税
				var contractTax;//契税
				var incomeTax = totalPrice*0.01;//个人所得税
				var ComprehensiveTax = 0;//综合地价税
				
				if(this.model2.year2==='不满两年'){
				    addedTax = totalPrice*0.05;
				}else{
				    addedTax = 0;
				}
				
				if(this.model2.isOnly2=='是' && this.model2.year2!='不满两年'){
				    incomeTax = 0;
				}
				if(this.model2.first2==='是'){
				    contractTax = totalPrice*0.015;
				}else if(this.model2.first2==='否'){
				    contractTax = totalPrice*0.02;
				}
				
				if(this.model2.alculate2=='按差价计算' && this.model2.isOnly2!='是'){
				    incomeTax = differencePrice*0.2;
				}
				
				if(this.model2.propertyType2=='经济适用房'){
				    ComprehensiveTax = totalPrice*0.1;
				}
				
				var temp = addedTax+contractTax+incomeTax+ComprehensiveTax+5;//税金总额
				
				this.result2.totalPrice = totalPrice;
				this.result2.deedTax = contractTax;
				this.result2.addedValueTax = addedTax;
				this.result2.stampTax = 0;
				this.result2.indicidualIncometTax = incomeTax;
				this.result2.consolidatedPriceTax = ComprehensiveTax;
				this.result2.totalTax = temp;
				
			},
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},

			// tab栏切换
			change(index) {
				this.swiperCurrent = index;
			},

			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			},

			// 选中某个单选框时，由radio时触发
			radioChange(e) {
				// console.log(e);
			},
			// 选中任一radio时，由radio-group触发
			radioGroupChange(e) {
				// console.log(e);
			}
		}
	}
</script>

<style lang="scss"  scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		height: calc(100vh - var(--window-top));
		width: 100%;
		padding-left: 20rpx;
		padding-right: 20rpx;

		.swiper-box {
			flex: 1;

			.swiper-item {
				height: 100%;

				.scrollView {
					height: 100%;
					width: 100%;

					.page-box {
						.resultBox {
							border: 5rpx solid #666666;
							border-radius: 8px;
							margin-top: 5px;
							margin-bottom: 5px;
							padding: 8px;
							position: relative;
						}
						
						
					}
				}
			}
		}
	}
</style>
