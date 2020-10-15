<template>
	<view class="">
		<u-navbar is-back="true" title="全网房源"></u-navbar>

		<view>
			<u-row gutter="16" justify="center">
				<u-col span="3">
					<view>

						<u-button type="primary" shape="square" size="small" :ripple="true" @click="btnClick">{{ result }}</u-button>
					</view>
				</u-col>

				<u-col span="9">
					<u-dropdown ref="uDropdown" activeColor="#2979ff">
						<u-dropdown-item @change="change2" v-model="value2" :title="options2[value2].label" :options="options2"></u-dropdown-item>
						<u-dropdown-item @change="change3" v-model="value3" :title="options3[value3].label" :options="options3"></u-dropdown-item>
						<u-dropdown-item @change="change4" v-model="value4" :title="options4[value4].label" :options="options4"></u-dropdown-item>
					</u-dropdown>
				</u-col>
			</u-row>
		</view>

		<view class="uni-list">
			<view class="uni-list-cell" v-for="(item,index) in houseList" :key="index" @tap="ToHouseDetail(index)">
				<u-row @tap="ToHouseDetail(index)">
					<u-col span="4" @tap="ToHouseDetail(index)">
						<u-image width="200" height="200" border-radius="8" :src="item.proCoverUrl" error-icon="/static/icon/NullPic.png"
						 mode="aspectFill"></u-image>
					</u-col>

					<u-col span="8" @tap="ToHouseDetail(index)">
						<view style="margin-left: 8rpx;">
							<view>
								<text class="BiKan">必看</text>
								<text class="HouseTitle">{{item.proTitle}}</text>
							</view>
							<view>
								<text class="HouseTag">{{item.proDistrict}}</text>
								<text class="HouseTag">{{item.proArea}}</text>
								<text class="HouseTag">VR</text>
								<text class="HouseTag">随时看房</text>
							</view>
							<view class="">{{item.proCountF}}室{{item.proCountT}}厅/{{item.proSquare}}㎡/{{item.proDirection}}/{{item.EstateName}}</view>
							<view>
								<u-row>
									<u-col class="HousePrice" span="6">{{item.proPrice}}{{item.proPriceType}}</u-col>
									<u-col class="HouseUnitPrice" span="6">{{item.proUnitPrice}}{{item.proUnitPriceType}}</u-col>
								</u-row>
							</view>
						</view>
					</u-col>
				</u-row>
			</view>
		</view>

		<u-loadmore :status="status" :icon-type="iconType" :load-text="loadText" />
		<u-back-top :scroll-top="scrollTop"></u-back-top>
		<u-select v-model="show" :default-value="defaultValue" mode="mutil-column-auto" :list="list" @confirm="confirm"
		 @cancel="cancel"></u-select>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				current: 0,
				result: '区域',
				show: false,
				value2: 0,
				value3: 0,
				value4: 0,
				defaultValue: [0, 0, 0],
				options2: [{
						label: '全部房型',
						value: 0,
					},
					{
						label: '1房',
						value: 1,
					},
					{
						label: '2房',
						value: 2,
					},
					{
						label: '3房',
						value: 3,
					},
					{
						label: '4房及以上',
						value: 4,
					},
				],

				options3: [{
						label: '全部价格',
						value: 0,
					},
					{
						label: '0-30万',
						value: 1,
					},
					{
						label: '30-50万',
						value: 2,
					},
					{
						label: '50-100万',
						value: 3,
					},
					{
						label: '100-150万',
						value: 4,
					},
					{
						label: '150-200万',
						value: 5,
					},
					{
						label: '200-300万',
						value: 6,
					},
					{
						label: '300-500万',
						value: 7,
					},
					{
						label: '500万及以上',
						value: 8,
					},
				],

				options4: [{
						label: '全部面积',
						value: 0,
					},
					{
						label: '0-20平米',
						value: 1,
					},
					{
						label: '20-50平米',
						value: 2,
					},
					{
						label: '50-100平米',
						value: 3,
					},
					{
						label: '100-150平米',
						value: 4,
					},
					{
						label: '150-200平米',
						value: 5,
					},
					{
						label: '200-250平米',
						value: 6,
					},
					{
						label: '250-500平米',
						value: 7,
					},
					{
						label: '500-800平米',
						value: 8,
					},
					{
						label: '800平米以上',
						value: 9,
					},
				],

				list: [{
						value: 1,
						label: '中国',
						children: [{
								value: 2,
								label: '广东',
								children: [{
										value: 3,
										label: '深圳'
									},
									{
										value: 4,
										label: '广州'
									}
								]
							},
							{
								value: 5,
								label: '广西',
								children: [{
										value: 6,
										label: '南宁'
									},
									{
										value: 7,
										label: '桂林'
									}
								]
							}
						]
					},
					{
						value: 8,
						label: '美国',
						children: [{
							value: 9,
							label: '纽约',
							children: [{
								value: 10,
								label: '皇后街区'
							}]
						}]
					}
				],

				houseList: [],
				
				houseCount:0,

				pageSize: 20,
				pageNum: 1,
				status: 'loadmore',
				iconType: 'flower',
				loadText: {
					loadmore: '轻轻上拉',
					loading: '努力加载中',
					nomore: '实在没有了'
				},
			}
		},

		onLoad() {
			this.GetHouseList();
		},
		
		onReachBottom() {
			this.status = 'loading';
			this.pageNum = ++ this.pageNum;
			this.GetHouseList();
		},

		methods: {
			ToHouseDetail: function(index) {
				//console.log(JSON.stringify(this.houseList[index]));
				uni.navigateTo({
					url: 'HouseDetail2?proId=' + this.houseList[index].proId + "&cityPinYin=" + "chengdu"
				});
			},

			btnClick() {
				this.show = true;
			},

			confirm(e) {
				this.result = '';
				e.map((val, index) => {
					this.result = val.label;
				})
			},

			cancel(e) {
				console.log(e);
			},

			change2(e) {
				this.value2 = e;
			},
			change3(e) {
				this.value3 = e;
			},
			change4(e) {
				this.value4 = e;
			},

			GetHouseList() {
				this.$u.post('http://47.108.202.57:8090/property/search?cityPinYin=chengdu&pageNum=' + this.pageNum + '&pageSize=' +
					this.pageSize, {

					}).then(res => {
					//console.log(res);
					for(var i = 0; i < res.data.list.length; i++){
						this.houseList.push(res.data.list[i]);
					}
					
					if(res.data.list.length === 0){
						this.status = 'nomore';
					}
					else{
						this.status = 'loadmore';
					}
				})
			},

			loadmore() {
				this.pageNum = this.pageNum + 1;
				this.GetHouseList();
			},
		},

		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},

		params: {
			year: true,
			month: true,
			day: true,
			hour: true,
			minute: true,
			second: true,
			province: true,
			city: true,
			area: true,
			timestamp: true
		}
	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>

<style lang="scss" scoped>
	.uni-list .uni-list-cell {
		border-radius: 8px;
		margin: 5px;
		background-color: #ffffff;
		padding: 8px;

		.BiKan {
			font-size: xx-small;
			padding: 2rpx;
			background-color: #FA3534;
			border-radius: 10rpx;
			color: white;
		}

		.HouseTitle {
			font-weight: bolder;
			font-size: large;
			max-lines: 2;

			overflow: hidden;
			text-overflow: ellipsis;
			/*设置成弹性盒子 */
			display: -webkit-box;
			/*显示的个数 */
			-webkit-line-clamp: 2;
			/* 属性规定框的子元素应该被水平或垂直排列。 */
			-webkit-box-orient: vertical;
		}

		.HouseTag {
			max-lines: 1;
			font-weight: lighter;
			font-size: xx-small;
			background-color: #A0CFFF;
			border-radius: 10rpx;
			color: white;
			padding: 2rpx;
			margin-right: 4rpx;
		}

		.HousePrice {
			font-weight: bolder;
			font-size: large;
			color: #FA3534;
		}

		.HouseUnitPrice {
			font-size: x-small;
		}

	}
</style>
