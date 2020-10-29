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
									 label="房价总额(元)" prop="totalPrice1" label-width="300" v-if="model1.calculate1 === '按房价总额'">
										<u-input placeholder="请输入房价总额" v-model="model1.totalPrice1" type="number"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
									 label="贷款比例" prop="loanProportion1" label-width="300" >
										<u-input type="select" :select-open="loanProportionListShow" v-model="model1.loanProportion1" placeholder="请选择贷款比例"
										 @click="loanProportionListShow = true"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="公积金贷款金额(元)" prop="loanPrice1" label-width="300" v-if="model1.calculate1 === '按贷款总额'">
										<u-input placeholder="请输入公积金贷款金额" v-model="model1.loanPrice1" type="number"></u-input>
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
										<u-button @click="_reset1" shape="square" :ripple="true">清空</u-button>
									</u-col>
									<u-col span="6">
										<u-button @click="_calculate1" shape="square" type="primary" :ripple="true">计算</u-button>
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
									 label="房价总额(元)" prop="totalPrice2" label-width="300" v-if="model2.calculate2 === '按房价总额'">
										<u-input placeholder="请输入房价总额" v-model="model2.totalPrice2" type="number"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
									 label="贷款比例" prop="loanProportion2" label-width="300">
										<u-input type="select" :select-open="loanProportionListShow" v-model="model2.loanProportion2" placeholder="请选择贷款比例"
										 @click="loanProportionListShow = true"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
									 label="商业贷款金额(元)" prop="loanPrice2" label-width="300" v-if="model2.calculate2 === '按贷款总额'">
										<u-input placeholder="请输入商业贷款金额" v-model="model2.loanPrice2" type="number"></u-input>
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
										<u-button @click="_reset2" shape="square" :ripple="true">清空</u-button>
									</u-col>
									<u-col span="6">
										<u-button @click="_calculate2" shape="square" type="primary" :ripple="true">计算</u-button>
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
								<view class="result4">公积金利率：{{result3.providentRate3}}%</view>
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
									 label="房价总额(元)" prop="totalPrice3" label-width="300" >
										<u-input placeholder="请输入房价总额" v-model="model3.totalPrice3" type="number"></u-input>
									</u-form-item>

									<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
									 label="贷款比例" prop="loanProportion3" label-width="300" >
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
									 label="公积金利率(%)" prop="providentRate3" label-width="300">
										<u-input placeholder="请输入公积金利率" v-model="model3.providentRate3" type="number"></u-input>
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
										<u-button @click="_reset3" shape="square" :ripple="true">清空</u-button>
									</u-col>
									<u-col span="6">
										<u-button @click="_calculate3" shape="square" type="primary" :ripple="true">计算</u-button>
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
					loanPrice1: '',
					loanProportion1: '20%',
					year1: '10年(120期)',
					rate1: '',
				},

				model2: {
					calculate2: '按房价总额',
					payment2: '等额本息',
					totalPrice2: '',
					loanPrice2: '',
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
					providentRate3:'',
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

			_reset1() {
				this.model1.calculate1 = '按房价总额';
				this.model1.payment1 = '等额本息';
				this.model1.totalPrice1 =  '';
				this.model1.loanPrice1 = '';
				this.model1.loanProportion1 = '20%';
				this.model1.year1 = '10年(120期)';
				this.model1.rate1 = '';
			},

			_calculate1() {
				if(this.model1.calculate1==='按房价总额' && this.model1.totalPrice1 ===''){
							return this.$u.toast('房价总额不能为空');
				        }else if(this.model1.calculate1==='按房价总额' && this.model1.totalPrice1!=''){
				            var positiveFloat = /^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;
				            if (positiveFloat.test(this.model1.totalPrice1) != true) {
								return this.$u.toast('房价总额格式不对，只能是正浮点数，请重新填写');     
				            }
				        }
				if(this.model1.calculate1==='按贷款总额' && this.model1.loanPrice1===''){
					//return this.$u.toast('贷款金额不能为空！');
				        }else if(this.model1.calculate1==='按贷款总额' && this.model1.loanPrice1!=''){
				            var positiveFloat = /^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;
				            if (positiveFloat.test(this.model1.loanPrice1) != true) {
								return this.$u.toast('贷款金额格式不对，只能是正浮点数，请重新填写');   
				            }
				        }
				 if(this.model1.rate1===''){
					 return this.$u.toast('公积金利率不能为空');
				        }else{
				            var positiveFloat = /^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;
				            if (positiveFloat.test(this.model1.rate1) != true) {
								return this.$u.toast('公积金利率格式不对，只能是正浮点数，请重新填写');
				            }
				        }
				//开始计算
				var totalPrice;
				var TotalInterest;
				var MonthlyRepayment;
				var MortgageYears = parseInt(this.model1.year1.substring(0,this.model1.year1.indexOf('年')));
				var Month = MortgageYears*12;
				var MonthlyInterest = (this.model1.rate1/100)/12;//月利率
				if(this.model1.calculate1==='按房价总额'){
				    var temp = this.model1.loanProportion1.replace("%","");
				    temp = temp/100;
				    totalPrice = parseInt(this.model1.totalPrice1*temp);
				}else{
				    totalPrice = parseInt(this.model1.loanPrice1);
				}
				if(this.model1.payment1 === '等额本息'){
				    TotalInterest = ((totalPrice*MonthlyInterest*Math.pow((1+MonthlyInterest),Month))   /(Math.pow((1+MonthlyInterest),Month)-1))*Month-totalPrice;
				}else{
				    TotalInterest = Month*((totalPrice*MonthlyInterest)-(MonthlyInterest*(totalPrice/Month)*(Month-1))/2+(totalPrice/Month))-totalPrice;
				}
				MonthlyRepayment = (parseInt(totalPrice)+parseInt(TotalInterest))/Month;
				this.result1.totalLoan1 = totalPrice;
				this.result1.totalInterest1 = parseInt(TotalInterest);
				this.result1.monthlyPayment1 = parseInt(MonthlyRepayment);
				this.result1.rate1 = this.model1.rate1;
				
			},
			
			_reset2() {
				this.model2.calculate2 = '按房价总额';
				this.model2.payment2 = '等额本息';
				this.model2.totalPrice2 =  '';
				this.model2.loanPrice2 = '';
				this.model2.loanProportion2 = '20%';
				this.model2.year2 = '10年(120期)';
				this.model2.rate2 = '';
			},
			
			_calculate2() {
				if(this.model2.calculate2==='按房价总额' && this.model2.totalPrice2 ===''){
							return this.$u.toast('房价总额不能为空');
				        }else if(this.model2.calculate2==='按房价总额' && this.model2.totalPrice2!=''){
				            var positiveFloat = /^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;
				            if (positiveFloat.test(this.model2.totalPrice2) != true) {
								return this.$u.toast('房价总额格式不对，只能是正浮点数，请重新填写');     
				            }
				        }
				if(this.model2.calculate2==='按贷款总额' && this.model2.loanPrice2===''){
					//return this.$u.toast('贷款金额不能为空！');
				        }else if(this.model2.calculate2==='按贷款总额' && this.model2.loanPrice2!=''){
				            var positiveFloat = /^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;
				            if (positiveFloat.test(this.model2.loanPrice2) != true) {
								return this.$u.toast('贷款金额格式不对，只能是正浮点数，请重新填写');   
				            }
				        }
				 if(this.model2.rate2==''){
					 return this.$u.toast('公积金利率不能为空');
				        }else{
				            var positiveFloat = /^[1-9]\d*.\d*|0.\d*[1-9]\d*$/;
				            if (positiveFloat.test(this.model2.rate2) != true) {
								return this.$u.toast('公积金利率格式不对，只能是正浮点数，请重新填写');
				            }
				        }
				//开始计算
				var totalPrice;
				var TotalInterest;
				var MonthlyRepayment;
				var MortgageYears = parseInt(this.model2.year2.substring(0,this.model2.year2.indexOf('年')));
				var Month = MortgageYears*12;
				var MonthlyInterest = (this.model2.rate2/100)/12;//月利率
				if(this.model2.calculate2==='按房价总额'){
				    var temp = this.model2.loanProportion2.replace("%","");
				    temp = temp/100;
				    totalPrice = parseInt(this.model2.totalPrice2*temp);
				}else{
				    totalPrice = parseInt(this.model2.loanPrice2);
				}
				if(this.model2.payment2 == '等额本息'){
				    TotalInterest = totalPrice*((Month*MonthlyInterest-1)*Math.pow((1+MonthlyInterest),Month)+1)/(Math.pow((1+MonthlyInterest),Month)-1);
				}else{
					
					
					
					
					
					
					
					
					
					
					
					
					
				    TotalInterest = (totalPrice*MonthlyInterest*(Month+1)/2);
				}
				MonthlyRepayment = (parseInt(totalPrice)+parseInt(TotalInterest))/Month;
				this.result2.totalLoan2 = totalPrice;
				this.result2.totalInterest2 = parseInt(TotalInterest);
				this.result2.monthlyPayment2 = parseInt(MonthlyRepayment);
				this.result2.rate2 = this.model2.rate2;
				
			},
			
			_reset3() {
				this.model3.calculate3 = '按房价总额';
				this.model3.payment3 = '等额本息';
				this.model3.totalPrice3 = '';
				this.model3.loanProportion3 = '20%';
				this.model3.provident3 = '';
				this.model3.providentYear3 = '10年(120期)';
				this.model3.providentRate3 = '';
				this.model3.commercial3 = '';
				this.model3.commercialYear3 = '10年(120期)';
				this.model3.commercialRate3 = '';
			},
			
			_calculate3() {
				var totalPrice;
				var TotalInterest;
				var MonthlyRepayment;
				var MortgageYears1 = parseInt(this.model3.providentYear3.substring(0,this.model3.providentYear3.indexOf('年')));
				var Month1 = MortgageYears1*12;
				var MonthlyInterest1 = (this.model3.providentRate3/100)/12;//公积金月利率
				var MortgageYears2 = parseInt(this.model3.commercialYear3.substring(0,this.model3.commercialYear3.indexOf('年')));
				var Month2 = MortgageYears2*12;
				var MonthlyInterest2 = (this.model3.commercialRate3/100)/12;//商业月利率
				
				if(this.model3.calculate3 === '按房价总额') {
				    var temp = this.model3.loanProportion3.replace("%", "");
				    temp = temp / 100;
				    totalPrice = parseInt(this.model3.totalPrice3 * temp);
				}else{
				    totalPrice = parseInt(Number(this.model3.provident3)+Number(this.model3.commercial3));
				}
				
				if(this.model3.payment3 === '等额本息'){
				    //公积金等额本息总利息
				    var TotalInterest1 = ((this.model3.provident3*MonthlyInterest1*Math.pow((1+MonthlyInterest1),Month1))/(Math.pow((1+MonthlyInterest1),Month1)-1))*Month1-this.model3.provident3;
				    //商业等额本息总利息
				    var TotalInterest2 = this.model3.commercial3*((Month2*MonthlyInterest2-1)*Math.pow((1+MonthlyInterest2),Month2)+1)/(Math.pow((1+MonthlyInterest2),Month2)-1);
				    TotalInterest = Number(TotalInterest1)+Number(TotalInterest2);
				    //公积金月均还款
				    var MonthlyRepayment1 = (parseInt(this.model3.provident3)+parseInt(TotalInterest1))/Month1;
				    //商业月均还款
				    var MonthlyRepayment2 = (parseInt(this.model3.commercial3)+parseInt(TotalInterest2))/Month2;
				
				    var MonthlyRepaymentBefore = Number(MonthlyRepayment1)+Number(MonthlyRepayment2);//前几年月均还款
				    if(MortgageYears1<MortgageYears2){//如果公积金比商业先还款完
				
				        var MonthlyRepaymentAfter = Number(MonthlyRepayment2);//后几年月均还款
				
				    }else if(MortgageYears1>MortgageYears2){//如果商业比公积金先还款完
				
				        MonthlyRepaymentAfter = Number(MonthlyRepayment1);//后几年月均还款
				
				    }else if(MortgageYears1==MortgageYears2){
				
				        MonthlyRepayment = MonthlyRepaymentBefore;
				    }
				
				}else{
				    //公积金等额本金总利息
				    TotalInterest1 = Month1*((this.model3.provident3*MonthlyInterest1)-(MonthlyInterest1*(this.model3.provident3/Month1)*(Month1-1))/2+(this.model3.provident3/Month1))-this.model3.provident3;
				    //商业等额本金总利息
				    TotalInterest2 = (this.model3.commercial3*MonthlyInterest2*(Month2+1)/2);
				    TotalInterest = Number(TotalInterest1)+Number(TotalInterest2);
				    //公积金月均还款
				    MonthlyRepayment1 = (parseInt(this.model3.provident3)+parseInt(TotalInterest1))/Month1;
				    //商业月均还款
				    MonthlyRepayment2 = (parseInt(this.model3.commercial3)+parseInt(TotalInterest2))/Month2;
				
				    MonthlyRepaymentBefore = Number(MonthlyRepayment1)+Number(MonthlyRepayment2);//前几年月均还款
				    if(MortgageYears1<MortgageYears2){//如果公积金比商业先还款完
				
				        MonthlyRepaymentAfter = Number(MonthlyRepayment2);//后几年月均还款
				
				    }else if(MortgageYears1>MortgageYears2){//如果商业比公积金先还款完
				
				        MonthlyRepaymentAfter = Number(MonthlyRepayment1);//后几年月均还款
				
				    }else if(MortgageYears1==MortgageYears2) {
				
				        MonthlyRepayment = MonthlyRepaymentBefore;
				
				    }
				}

				
				this.result3.totalLoan3 = totalPrice;
				this.result3.totalInterest3 = parseInt(TotalInterest);
				this.result3.monthlyPayment3 = parseInt(MonthlyRepayment);
				this.result3.providentInterest3 = parseInt(TotalInterest1);
				this.result3.providentMonthlyPayment3 = parseInt(MonthlyRepayment1);
				this.result3.commercialInterest3 = parseInt(TotalInterest2);
				this.result3.commercialMonthlyPayment3 = parseInt(MonthlyRepayment2);								
				this.result3.providentRate3 = this.model3.providentRate3;
				this.result3.commercialRate3 = this.model3.commercialRate3;
				
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
