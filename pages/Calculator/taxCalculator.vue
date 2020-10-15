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
										<u-button @click="reset" shape="square" :ripple="true">清空</u-button>
									</u-col>
									<u-col span="6">
										<u-button @click="calculate" shape="square" type="primary" :ripple="true">计算</u-button>
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
										<u-button @click="reset" shape="square" :ripple="true">清空</u-button>
									</u-col>
									<u-col span="6">
										<u-button @click="calculate" shape="square" type="primary" :ripple="true">计算</u-button>
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
			reset() {

			},

			calculate() {

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
