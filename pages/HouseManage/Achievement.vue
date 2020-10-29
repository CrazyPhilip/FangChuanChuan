<template>
	<view>
		<u-navbar is-back="true" title="业绩报表"></u-navbar>

		<view class="u-tabs-box">
			<u-tabs-swiper ref="tabs" :list="[{name:'本日'}, {name:'本周'}, {name:'本月'}]" :current="current" @change="tabsChange"
			 :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
		</view>

		<swiper class="swiper-box" :current="swiperCurrent" @transition="transition" @animationfinish="animationfinish">
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;">
					<!--业绩-->
					<view class="section">
						<view class="sectionTitle">业绩</view>
						<view>
							<view class="itemRank">{{today.companyRank}}</view>
							<view class="itemName">排名</view>
						</view>

						<u-row>
							<u-col span="4">
								<view>
									<view class="itemNumber">{{today.receivableNum}}</view>
									<view class="itemName">应收</view>
								</view>
							</u-col>
							<u-col span="4">
								<view>
									<view class="itemNumber">{{today.nrNum}}</view>
									<view class="itemName">未收</view>
								</view>
							</u-col>
							<u-col span="4">
								<view>
									<view class="itemNumber">{{today.paidNum}}</view>
									<view class="itemName">实收</view>
								</view>
							</u-col>
						</u-row>
					</view>
					<!--工作量-->
					<view class="section">
						<view class="sectionTitle">工作量</view>
						<view>
							<view class="itemRank">{{today.companyRank2}}</view>
							<view class="itemName">排名</view>
						</view>

						<u-row>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{today.ffzs}}</view>
									<view class="itemName">房增</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{today.kkzs}}</view>
									<view class="itemName">客增</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{today.fgj}}</view>
									<view class="itemName">房跟</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{today.kgj}}</view>
									<view class="itemName">客跟</view>
								</view>
							</u-col>
						</u-row>
						<u-row>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{today.ffcs3}}</view>
									<view class="itemName">照片</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{today.ffcs4}}</view>
									<view class="itemName">钥匙</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{today.ffcs}}</view>
									<view class="itemName">空看</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{today.ffcs2}}</view>
									<view class="itemName">带看</view>
								</view>
							</u-col>
						</u-row>
					</view>

				</scroll-view>
			</swiper-item>

			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;">
					<!--业绩-->
					<view class="section">
						<view class="sectionTitle">业绩</view>
						<view>
							<view class="itemRank">{{week.companyRank}}</view>
							<view class="itemName">排名</view>
						</view>
			
						<u-row>
							<u-col span="4">
								<view>
									<view class="itemNumber">{{week.receivableNum}}</view>
									<view class="itemName">应收</view>
								</view>
							</u-col>
							<u-col span="4">
								<view>
									<view class="itemNumber">{{week.nrNum}}</view>
									<view class="itemName">未收</view>
								</view>
							</u-col>
							<u-col span="4">
								<view>
									<view class="itemNumber">{{week.paidNum}}</view>
									<view class="itemName">实收</view>
								</view>
							</u-col>
						</u-row>
					</view>
					<!--工作量-->
					<view class="section">
						<view class="sectionTitle">工作量</view>
						<view>
							<view class="itemRank">{{week.companyRank2}}</view>
							<view class="itemName">排名</view>
						</view>
			
						<u-row>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{week.ffzs}}</view>
									<view class="itemName">房增</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{week.kkzs}}</view>
									<view class="itemName">客增</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{week.fgj}}</view>
									<view class="itemName">房跟</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{week.kgj}}</view>
									<view class="itemName">客跟</view>
								</view>
							</u-col>
						</u-row>
						<u-row>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{week.ffcs3}}</view>
									<view class="itemName">照片</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{week.ffcs4}}</view>
									<view class="itemName">钥匙</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{week.ffcs}}</view>
									<view class="itemName">空看</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{week.ffcs2}}</view>
									<view class="itemName">带看</view>
								</view>
							</u-col>
						</u-row>
					</view>
			
				</scroll-view>
			</swiper-item>
			
			<swiper-item class="swiper-item">
				<scroll-view scroll-y style="height: 100%;width: 100%;">
					<!--业绩-->
					<view class="section">
						<view class="sectionTitle">业绩</view>
						<view>
							<view class="itemRank">{{month.companyRank}}</view>
							<view class="itemName">排名</view>
						</view>
			
						<u-row>
							<u-col span="4">
								<view>
									<view class="itemNumber">{{month.receivableNum}}</view>
									<view class="itemName">应收</view>
								</view>
							</u-col>
							<u-col span="4">
								<view>
									<view class="itemNumber">{{month.nrNum}}</view>
									<view class="itemName">未收</view>
								</view>
							</u-col>
							<u-col span="4">
								<view>
									<view class="itemNumber">{{month.paidNum}}</view>
									<view class="itemName">实收</view>
								</view>
							</u-col>
						</u-row>
					</view>
					<!--工作量-->
					<view class="section">
						<view class="sectionTitle">工作量</view>
						<view>
							<view class="itemRank">{{month.companyRank2}}</view>
							<view class="itemName">排名</view>
						</view>
			
						<u-row>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{month.ffzs}}</view>
									<view class="itemName">房增</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{month.kkzs}}</view>
									<view class="itemName">客增</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{month.fgj}}</view>
									<view class="itemName">房跟</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{month.kgj}}</view>
									<view class="itemName">客跟</view>
								</view>
							</u-col>
						</u-row>
						<u-row>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{month.ffcs3}}</view>
									<view class="itemName">照片</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{month.ffcs4}}</view>
									<view class="itemName">钥匙</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{month.ffcs}}</view>
									<view class="itemName">空看</view>
								</view>
							</u-col>
							<u-col span="3">
								<view>
									<view class="itemNumber">{{month.ffcs2}}</view>
									<view class="itemName">带看</view>
								</view>
							</u-col>
						</u-row>
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
				current: 0,
				swiperCurrent: 0,
				
				today:{
					receivableNum: 0,//应收业绩
					paidNum: 0,//实收业绩
					nrNum: 0,//未收业绩
					companyRank: 0,//公司业绩排名
					ffzs: 0,//房增
					kkzs: 0,//客增
					fgj: 0,//房跟
					kgj: 0,//客跟
					ffcs3: 0,//照片
					ffcs4: 0,//钥匙
					ffcs: 0,//普通看房（空看）
					ffcs2: 0,//带看
					companyRank2: 0,//公司工作量排名
				},
				
				week:{
					receivableNum: 0,//应收业绩
					paidNum: 0,//实收业绩
					nrNum: 0,//未收业绩
					companyRank: 0,//公司业绩排名
					ffzs: 0,//房增
					kkzs: 0,//客增
					fgj: 0,//房跟
					kgj: 0,//客跟
					ffcs3: 0,//照片
					ffcs4: 0,//钥匙
					ffcs: 0,//普通看房（空看）
					ffcs2: 0,//带看
					companyRank2: 0,//公司工作量排名
				},
				
				month:{
					receivableNum: 0,//应收业绩
					paidNum: 0,//实收业绩
					nrNum: 0,//未收业绩
					companyRank: 0,//公司业绩排名
					ffzs: 0,//房增
					kkzs: 0,//客增
					fgj: 0,//房跟
					kgj: 0,//客跟
					ffcs3: 0,//照片
					ffcs4: 0,//钥匙
					ffcs: 0,//普通看房（空看）
					ffcs2: 0,//带看
					companyRank2: 0,//公司工作量排名
				},
			}
		},
		
		onLoad() {
			this.getAchievement('today');
			this.getWorkload('today');
			this.getWorkloadRank('today');
		},

		methods: {
			tabsChange(index) {
				this.swiperCurrent = index;
				this.current = index;
				console.log(index);
				
				switch (index){
					case 0:{
						this.getAchievement('today');
						this.getWorkload('today');
						this.getWorkloadRank('today');
					}break;
					
					case 1:{
						this.getAchievement('week');
						this.getWorkload('week');
						this.getWorkloadRank('week');
					}break;
					
					case 2:{
						this.getAchievement('month');
						this.getWorkload('month');
						this.getWorkloadRank('month');
					}break;
				}
			},
			
			
			transition({
				detail: {
					dx
				}
			}) {
				this.$refs.tabs.setDx(dx);
			},
			
			animationfinish({
				detail: {
					current
				}
			}) {
				this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
				
				switch (current){
					case 0:{
						this.getAchievement('today');
						this.getWorkload('today');
						this.getWorkloadRank('today');
					}break;
					
					case 1:{
						this.getAchievement('week');
						this.getWorkload('week');
						this.getWorkloadRank('week');
					}break;
					
					case 2:{
						this.getAchievement('month');
						this.getWorkload('month');
						this.getWorkloadRank('month');
					}break;
				}
			},
			
			getAchievement(time){
				this.$u.get(this.global_data.global_data.BaseUrl + 'QueryAchievement', {
					DBName:this.global_data.global_data.DBName,
					EmpID:this.global_data.global_data.EmpID,
					TimeOptions:time
				}).then(res => {
					if(res.Flag === 'success'){
						switch (this.swiperCurrent){
							case 0:{
								this.today.receivableNum = res.Result[0].ys;
								this.today.paidNum = res.Result[0].ss;
								this.today.nrNum = this.today.receivableNum - this.today.paidNum;
								this.today.companyRank = res.Result[0].rk;
							}break;
							
							case 1:{
								this.week.receivableNum = res.Result[0].ys;
								this.week.paidNum = res.Result[0].ss;
								this.week.nrNum = this.week.receivableNum - this.week.paidNum;
								this.week.companyRank = res.Result[0].rk;
							}break;
							
							case 2:{
								this.month.receivableNum = res.Result[0].ys;
								this.month.paidNum = res.Result[0].ss;
								this.month.nrNum = this.month.receivableNum - this.month.paidNum;
								this.month.companyRank = res.Result[0].rk;
							}break;
						}
					}
				});
			},
			
			getWorkload(time){
				this.$u.get(this.global_data.global_data.BaseUrl + 'QueryWorkload', {
					DBName:this.global_data.global_data.DBName,
					EmpID:this.global_data.global_data.EmpID,
					TimeOptions:time
				}).then(res => {
					if(res.Flag === 'success'){
						switch (this.swiperCurrent){
							case 0:{
								this.today.ffzs  = res.Result[0].ffzs;
								this.today.kkzs  = res.Result[0].kkzs;
								this.today.fgj = res.Result[0].fgj;
								this.today.kgj = res.Result[0].kgj;
								this.today.ffcs3 = res.Result[0].ffcs3;
								this.today.ffcs4 = res.Result[0].ffcs4;
								this.today.ffcs  = res.Result[0].ffcs;
								this.today.ffcs2 = res.Result[0].ffcs2;
							}break;
							
							case 1:{
								this.week.ffzs  = res.Result[0].ffzs;
								this.week.kkzs  = res.Result[0].kkzs;
								this.week.fgj = res.Result[0].fgj;
								this.week.kgj = res.Result[0].kgj;
								this.week.ffcs3 = res.Result[0].ffcs3;
								this.week.ffcs4 = res.Result[0].ffcs4;
								this.week.ffcs  = res.Result[0].ffcs;
								this.week.ffcs2 = res.Result[0].ffcs2;
							}break;
							
							case 2:{
								this.month.ffzs  = res.Result[0].ffzs;
								this.month.kkzs  = res.Result[0].kkzs;
								this.month.fgj = res.Result[0].fgj;
								this.month.kgj = res.Result[0].kgj;
								this.month.ffcs3 = res.Result[0].ffcs3;
								this.month.ffcs4 = res.Result[0].ffcs4;
								this.month.ffcs  = res.Result[0].ffcs;
								this.month.ffcs2 = res.Result[0].ffcs2;
							}break;
						}
					}
				});
			},
			
			getWorkloadRank(time){
				this.$u.get(this.global_data.global_data.BaseUrl + 'QueryWorkloadRank', {
					DBName:this.global_data.global_data.DBName,
					EmpID:this.global_data.global_data.EmpID,
					TimeOptions:time
				}).then(res => {
					if(res.Flag === 'success'){
						switch (this.swiperCurrent){
							case 0:{
								this.today.companyRank2  = res.Result[0].RowNum;
							}break;
							
							case 1:{
								this.week.companyRank2  = res.Result[0].RowNum;
							}break;
							
							case 2:{
								this.month.companyRank2  = res.Result[0].RowNum;
							}break;
						}
					}
				});
			}
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
	.swiper-box {
		height: 1000rpx;
	}

	.section {
		background-color: white;
		border-radius: 10rpx;
		margin: 20rpx;
		padding: 40rpx;
	}

	.sectionTitle {
		font-size: large;
		font-weight: bold;
	}

	.itemRank {
		font-size: xx-large;
		font-weight: bolder;
		color: red;
		text-align: center;
	}

	.itemNumber {
		font-size: medium;
		font-weight: bold;
		text-align: center;
		margin-top: 10rpx;
	}

	.itemName {
		text-align: center;
	}
</style>
