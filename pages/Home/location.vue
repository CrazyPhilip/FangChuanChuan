<template>
	<view class="wrap">
		<u-navbar is-back="true" title="选择城市"></u-navbar>
		
		<u-index-list :scrollTop="scrollTop" :index-list="indexList">
			<view v-for="(item, index) in list" :key="index">
				<u-index-anchor :index="item.letter" />
				<view class="list-cell u-border-bottom" v-for="(item1, index) in item.data" :key="index">
					{{item1.cityName}}-{{item1.province}}
				</view>
			</view>
		</u-index-list>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				scrollTop: 0,
				cities: [],
				indexList: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U",
						"V", "W", "X", "Y", "Z", "#"],
				list: [],
			}
		},
		
		onPageScroll(e) {
			this.scrollTop = e.scrollTop;
		},
		
		onLoad() {
			for (var i = 0; i < this.indexList.length; i++) {
				this.list[i] = {letter: this.indexList[i], data:[]};
			}
			
			this.getAllCities();
		},
		
		methods:{
			getAllCities(){
				this.$u.get('http://47.108.202.57:8090/city/getAllCityInfo',{}).then(res => {
					this.cities = res.data;
					
					for (var m = 0; m < this.cities.length; m++) {
						var l = this.cities[m].cityPinyin.split("")[0].toUpperCase();
						for (var j = 0; j < this.list.length; j++) {
							if(this.list[j].letter === l){
								this.list[j].data.push(this.cities[m]);
								break;
							} 
						}
					}
				});
			},
		}
	}
</script>

<style lang="scss" scoped>
	.list-cell {
		display: flex;
		box-sizing: border-box;
		width: 100%;
		padding: 10px 24rpx;
		overflow: hidden;
		color: $u-content-color;
		font-size: 14px;
		line-height: 24px;
		background-color: #fff;
	}
</style>
