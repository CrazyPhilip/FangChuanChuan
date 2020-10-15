<template>
	<view>
		<u-navbar is-back="true" title="贷款计算器"></u-navbar>
		<view class="wrap">
			<view class="u-tabs-box">
				<u-tabs-swiper ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
			</view>
			<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">

				<swiper-item class="swiper-item">
					<scroll-view class="scrollView" scroll-y @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="resultBox">
								<view class="result1">贷款总额：{{result1.totalLoan1}}元</view>
								<view class="result2">总利息：{{result1.totalInterest1}}元</view>
								<view class="result2">月均还款：{{result1.monthlyPayment1}}元</view>
								<view class="result4">利率：{{result1.rate1}}%</view>
								<view>
									<u-icon name="question-circle-fill" size="30"></u-icon>
									<text class="tips">以上结果仅供参考</text>
								</view>
							</view>

							<view>
								<u-form :model="model1" :rules="rules" ref="uForm" :errorType="['message']">
									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="计算方式" prop="calculate1" label-width="300">
										<u-radio-group v-model="model1.calculate1" @change="radioGroupChange" :width="radioCheckWidth" :wrap="true">
											<u-radio shape="circle" v-for="(item, index) in calculateList" :key="index" :name="item.name">{{ item.name }}</u-radio>
										</u-radio-group>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="还款方式" prop="payment1" label-width="300">
										<u-radio-group v-model="model1.payment1" @change="radioGroupChange" :width="radioCheckWidth" :wrap="true">
											<u-radio shape="circle" v-for="(item, index) in paymentList" :key="index" :name="item.name">{{ item.name }}</u-radio>
										</u-radio-group>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="房价总额(元)" prop="totalPrice1" label-width="300">
										<u-input placeholder="请输入房价总额" v-model="model1.totalPrice1" type="number"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
									 label="贷款比例" prop="loanProportion1" label-width="300" v-if="model1.calculate1 === '按房价总额'">
										<u-input type="select" :select-open="loanProportionListShow" v-model="model1.loanProportion1" placeholder="请选择贷款比例"
										 @click="loanProportionListShow = true"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
									 label="按揭年数" prop="year1" label-width="300">
										<u-input type="select" :select-open="yearListShow" v-model="model1.year1" placeholder="请选择按揭年数" @click="yearListShow = true"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="公积金利率(%)" prop="rate1" label-width="300">
										<u-input placeholder="请输入公积金利率" v-model="model1.rate1" type="number"></u-input>
									</u-form-item>

									<u-picker mode="selector" v-model="loanProportionListShow" :default-selector="[0]" :range="loanProportionList"
									 @confirm="loanProportionListCallback1"></u-picker>
									<u-picker mode="selector" v-model="yearListShow" :default-selector="[0]" :range="yearList" @confirm="yearListCallback1"></u-picker>
								</u-form>
							</view>

							<view>
								<u-row justify="space-around">
									<u-col span="6">
										<u-button @click="reset" shape="square" :ripple="true">清空</u-button>
									</u-col>
									<u-col span="6">
										<u-button @click="calculate()" shape="square" type="primary" :ripple="true">计算</u-button>
									</u-col>
								</u-row>
							</view>
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item class="swiper-item">
					<scroll-view class="scrollView" scroll-y @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="resultBox">
								<view class="result1">贷款总额：{{result2.totalLoan2}}元</view>
								<view class="result2">总利息：{{result2.totalInterest2}}元</view>
								<view class="result2">月均还款：{{result2.monthlyPayment2}}元</view>
								<view class="result4">利率：{{result2.rate2}}%</view>
								<view>
									<u-icon name="question-circle-fill" size="30"></u-icon>
									<text class="tips">以上结果仅供参考</text>
								</view>
							</view>

							<view>
								<u-form :model="model2" :rules="rules" ref="uForm" :errorType="['message']">
									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="计算方式" prop="calculate2" label-width="300">
										<u-radio-group v-model="model2.calculate2" @change="radioGroupChange" :width="radioCheckWidth" :wrap="true">
											<u-radio shape="circle" v-for="(item, index) in calculateList" :key="index" :name="item.name">{{ item.name }}</u-radio>
										</u-radio-group>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="还款方式" prop="payment2" label-width="300">
										<u-radio-group v-model="model2.payment2" @change="radioGroupChange" :width="radioCheckWidth" :wrap="true">
											<u-radio shape="circle" v-for="(item, index) in paymentList" :key="index" :name="item.name">{{ item.name }}</u-radio>
										</u-radio-group>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="房价总额(元)" prop="totalPrice2" label-width="300">
										<u-input placeholder="请输入房价总额" v-model="model2.totalPrice2" type="number"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
									 label="贷款比例" prop="loanProportion2" label-width="300" v-if="model2.calculate2 === '按房价总额'">
										<u-input type="select" :select-open="loanProportionListShow" v-model="model2.loanProportion2" placeholder="请选择贷款比例"
										 @click="loanProportionListShow = true"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
									 label="按揭年数" prop="year2" label-width="300">
										<u-input type="select" :select-open="yearListShow" v-model="model2.year2" placeholder="请选择按揭年数" @click="yearListShow = true"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="商贷利率(%)" prop="rate2" label-width="300">
										<u-input placeholder="请输入商贷利率" v-model="model2.rate2" type="number"></u-input>
									</u-form-item>

									<u-picker mode="selector" v-model="loanProportionListShow" :default-selector="[0]" :range="loanProportionList"
									 @confirm="loanProportionListCallback2"></u-picker>
									<u-picker mode="selector" v-model="yearListShow" :default-selector="[0]" :range="yearList" @confirm="yearListCallback2"></u-picker>
								</u-form>
							</view>

							<view>
								<u-row justify="space-around">
									<u-col span="6">
										<u-button @click="reset" shape="square" :ripple="true">清空</u-button>
									</u-col>
									<u-col span="6">
										<u-button @click="calculate()" shape="square" type="primary" :ripple="true">计算</u-button>
									</u-col>
								</u-row>
							</view>
						</view>
					</scroll-view>
				</swiper-item>

				<swiper-item class="swiper-item">
					<scroll-view class="scrollView" scroll-y @scrolltolower="reachBottom">
						<view class="page-box">
							<view class="resultBox">
								<view class="result1">贷款总额：{{result3.totalLoan3}}元</view>
								<view class="result2">总利息：{{result3.totalInterest3}}元(其中公积金：{{result3.providentInterest3}}元，商贷：{{result3.commercialInterest3}}元)</view>
								<view class="result2">月均还款：{{result3.monthlyPayment3}}元/月(其中公积金：{{result3.providentMonthlyPayment3}}元/月，商贷：{{result3.commercialMonthlyPayment3}}元/月)</view>
								<view class="result4">公积金利率：{{result3.providengtRate3}}%</view>
								<view class="result4">商贷利率：{{result3.commercialRate3}}%</view>
								<view>
									<u-icon name="question-circle-fill" size="30"></u-icon>
									<text class="tips">以上结果仅供参考</text>
								</view>
							</view>

							<view>
								<u-form :model="model3" :rules="rules" ref="uForm" :errorType="['message']">
									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="计算方式" prop="calculate3" label-width="300">
										<u-radio-group v-model="model3.calculate3" @change="radioGroupChange" :width="radioCheckWidth" :wrap="true">
											<u-radio shape="circle" v-for="(item, index) in calculateList" :key="index" :name="item.name">{{ item.name }}</u-radio>
										</u-radio-group>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="还款方式" prop="payment3" label-width="300">
										<u-radio-group v-model="model3.payment3" @change="radioGroupChange" :width="radioCheckWidth" :wrap="true">
											<u-radio shape="circle" v-for="(item, index) in paymentList" :key="index" :name="item.name">{{ item.name }}</u-radio>
										</u-radio-group>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="房价总额(元)" prop="totalPrice3" label-width="300" v-if="model3.calculate3 === '按房价总额'">
										<u-input placeholder="请输入房价总额" v-model="model3.totalPrice3" type="number"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
									 label="贷款比例" prop="loanProportion3" label-width="300" v-if="model3.calculate3 === '按房价总额'">
										<u-input type="select" :select-open="loanProportionListShow" v-model="model3.loanProportion3" placeholder="请选择贷款比例"
										 @click="loanProportionListShow = true"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="公积金贷款金额(元)" prop="provident3" label-width="300">
										<u-input placeholder="请输入公积金贷款金额" v-model="model3.provident3" type="number"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
									 label="公积金按揭年数" prop="providentYear3" label-width="300">
										<u-input type="select" :select-open="yearListShow" v-model="model3.providentYear3" placeholder="请选择公积金按揭年数" @click="yearListShow = true"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="公积金利率(%)" prop="procidengtRate3" label-width="300">
										<u-input placeholder="请输入公积金利率" v-model="model3.procidengtRate3" type="number"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="商业贷款金额(元)" prop="commercial3" label-width="300">
										<u-input placeholder="请输入商业贷款金额" v-model="model3.commercial3" type="number"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
									 label="商贷按揭年数" prop="commercialYear3" label-width="300">
										<u-input type="select" :select-open="yearListShow" v-model="model3.commercialYear3" placeholder="请选择商贷按揭年数" @click="yearListShow = true"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="商贷利率(%)" prop="commercialRate3" label-width="300">
										<u-input placeholder="请输入商贷利率" v-model="model3.commercialRate3" type="number"></u-input>
									</u-form-item>

									<u-picker mode="selector" v-model="loanProportionListShow" :default-selector="[0]" :range="loanProportionList"
												@confirm="loanProportionListCallback3"></u-picker>
									<u-picker mode="selector" v-model="yearListShow" :default-selector="[0]" :range="yearList" @confirm="yearListCallback3"></u-picker>
									<u-picker mode="selector" v-model="yearListShow" :default-selector="[0]" :range="yearList" @confirm="yearListCallback4"></u-picker>
								</u-form>
							</view>

							<view>
								<u-row justify="space-around">
									<u-col span="6">
										<u-button @click="reset" shape="square" :ripple="true">清空</u-button>
									</u-col>
									<u-col span="6">
										<u-button @click="calculate()" shape="square" type="primary" :ripple="true">计算</u-button>
									</u-col>
								</u-row>
							</view>
						</view>
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
					calculate1: '按房价总额',
					payment1: '等额本息',
					totalPrice1: '',
					loanProportion1: '20%',
					year1: '10年(120期)',
					rate1: '',
				},

				model2: {
					calculate2: '按房价总额',
					payment2: '等额本息',
					totalPrice2: '',
					loanProportion2: '20%',
					year2: '10年(120期)',
					rate2: '',
				},

				model3: {
					calculate3:'按房价总额',
					payment3:'等额本息',
					totalPrice3:'',
					loanProportion3:'20%',
					provident3:'',
					providentYear3:'10年(120期)',
					procidengtRate3:'',
					commercial3:'',
					commercialYear3:'10年(120期)',
					commercialRate3:''
				},
				
				result1:{
					totalLoan1:'',
					totalInterest1:'',
					monthlyPayment1:'',
					rate1:'',
				},
				
				result2:{
					totalLoan2:'',
					totalInterest2:'',
					monthlyPayment2:'',
					rate2:'',
				},
				
				result3:{
					totalLoan3:'',
					totalInterest3:'',
					monthlyPayment3:'',
					
					providentInterest3:'',
					providentMonthlyPayment3:'',
					commercialInterest3:'',
					commercialMonthlyPayment3:'',					
										
					providentRate3:'',
					commercialRate3:'',
				},

				list: [{
						name: '公积金贷款'
					},
					{
						name: '商业贷款'
					},
					{
						name: '组合贷款'
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
				propertyTypeList: [{
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
				calculateList: [{
						name: '按房价总额',
						disabled: false
					},
					{
						name: '按贷款总额',
						disabled: false
					},
				],
				paymentList: [{
						name: '等额本息',
						disabled: false
					},
					{
						name: '等额本金',
						disabled: false
					},
				],
				yearList: [{
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
				loanProportionListShow: false,
				yearListShow: false,
				loanProportionList: [],
				yearList: [],
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

		onLoad() {
			for (var i = 0; i < 13; i++) {
				this.loanProportionList.push(20 + i * 5 + '%');
			};

			for (var i = 1; i <= 30; i++) {
				this.yearList.push(i + '年(' + 12 * i + '期)');
			};
		},

		// 必须要在onReady生命周期，因为onLoad生命周期组件可能尚未创建完毕
		onReady() {
			this.$refs.uForm.setRules(this.rules);
		},

		methods: {
			loanProportionListCallback1(index) {
				this.model1.loanProportion1 = this.loanProportionList[index];
			},

			yearListCallback1(index) {
				this.model1.year1 = this.yearList[index];
			},

			loanProportionListCallback2(index) {
				this.model2.loanProportion2 = this.loanProportionList[index];
			},

			yearListCallback2(index) {
				this.model2.year2 = this.yearList[index];
			},
			
			loanProportionListCallback3(index) {
				this.model3.loanProportion3 = this.loanProportionList[index];
			},
			
			yearListCallback3(index) {
				this.model3.providentYear3 = this.yearList[index];
			},
			
			yearListCallback4(index) {
				this.model3.commercialYear3 = this.yearList[index];
			},

			reachBottom() {

			},

			reset() {

			},

			calculate() {
				console.log(1);
				console.log(this.loanProportionList[0].name);
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

<style lang="scss" scoped>
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
