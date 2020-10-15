<template>
	<view>
		<view class="wrap">
			<view>
				<u-navbar :is-back="true" title="">
					<view class="slot-center">
						<u-tabs :list="[{name:'二手房'}, {name:'租房'}, {name:'新房'}]" :is-scroll="false" :current="current" @change="showChange"
						 item-width="100"></u-tabs>
					</view>
					<view class="slot-right" slot="right">
						<u-icon name="search" size="40" @click="toSearch"></u-icon>
					</view>
				</u-navbar>

				<view>
					<u-dropdown ref="uDropdown" activeColor="#2979ff">
						<u-dropdown-item @change="change1" v-model="value1" :title="options1[value1].label" :options="options1"></u-dropdown-item>
						<u-dropdown-item @change="change2" v-model="value2" :title="options2[value2].label" :options="options2"></u-dropdown-item>
						<u-dropdown-item @change="change3" v-model="value3" :title="options3[value3].label" :options="options3"></u-dropdown-item>
						<u-dropdown-item @change="change4" v-model="value4" :title="options4[value4].label" :options="options4"></u-dropdown-item>
					</u-dropdown>
				</view>
			</view>
			<map style="width: 750rpx; height: 1500rpx;" :latitude="center.lat" :longitude="center.lng" :scale="zoom"
			 :show-compass="true" :markers="bubbles" :polygons="polygons" @markertap="showZones" @callouttap="showHouseList"
			 :controls="controls" @controltap="controlTap">

			</map>
		</view>
	</view>
</template>

<script>
	export default {
		name: "Map",

		data() {
			return {
				center: {
					lng: 116.4133836971231,
					lat: 39.910924547299568
				},
				zoom: 10,
				districts: [],
				bubbles: [],
				zones: [],
				polygons: [],
				controls: [
					/* {
						id:0,
						iconPath:'/static/icon/back_gray.png',
						clickable:true,
						position:{
							left: 40,
							top: 40,
							width:40,
							height:40
						}
					} */
				],

				districtIndex: "",
				estateIndex: "",
				areaIndex: "",
				showDistrict: true,
				showBoundary: false,
				showZone: false,
				showRegion: false,
				showEstate: false,
				areaBoundry: "",
				posCity: "成都市",
				input: "",
				height: "100%",
				width: "100%",
				city: null,

				regions: [],
				estates: [],
				polygonPath: "",
				ChooseIndex: -1,
				searchParam: {},
				//cityPinyin: 'chengdu',

				current: 0,
				value1: 0,
				value2: 0,
				value3: 0,
				value4: 0,
				options1: [{
						label: '区域',
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

			};
		},

		computed: {

			getPolygonPath() {
				let arr2 = [];
				if (this.polygonPath !== "") {
					let arr = this.polygonPath.split(";");
					for (let i = 0; i < arr.length; i++) {
						let arr3 = arr[i].split(",");
						arr2.push({
							lng: parseFloat(arr3[0]),
							lat: parseFloat(arr3[1])
						});
					}
				}
				return arr2;
			}
		},

		watch: {

		},

		onReady() {
			console.log('Ready 加载地图数据');
		},

		onShow() {
			console.log('Show');

		},

		onLoad() {
			console.log('Load');

			this.$u.get('http://47.108.202.57:8090/map/getDistrictsV2', {
				cityPinyin: 'chengdu'
			}).then(res => {
				this.districts = res.data;
				var b = [];
				for (var i = 0; i < this.districts.length; i++) {
					b[i] = {
						id: this.districts[i].areaId,
						latitude: this.districts[i].lat,
						longitude: this.districts[i].lng,
						iconPath: '/static/icon/blue_bubble.png',
						height: 20,
						width: 20,
						callout: {
							content: this.districts[i].districtName + ' ' + this.districts[i].houseCnt + '套',
							color: '#FFFFFF',
							bgColor: '#2979ff',
							display: 'ALWAYS',
							borderRadius: 8,
						},
						label: {
							content: this.districts[i].districtName + ' ' + this.districts[i].houseCnt + '套',
						}
					};
				};
				
				this.bubbles = b;
			});

			this.$u.get('http://47.108.202.57:8090/map/getZonesV2', {
				cityPinyin: 'chengdu'
			}).then(res => {
				this.zones = res.data.data;
				//console.log(this.zones);
			});

			this.$u.get('http://47.108.202.57:8090/map/getCityV2', {
				cityPinyin: 'chengdu'
			}).then(res => {
				const data = res.data;
				this.center.lng = data.lng;
				this.center.lat = data.lat;
			});
		},

		methods: {
			controlTap(e) {
				console.log(e.detail.controlId);

				switch (e.detail.controlId) {
					case 0:
						uni.navigateBack({
							delta: 1
						});
						break;
					default:
						break;
				}
			},

			showChange(index) {},

			toSearch() {
				console.log(this.districts);
				console.log(this.bubbles);
			},

			change1(e) {

			},
			change2(e) {

			},
			change3(e) {

			},
			change4(e) {

			},

			showZones(e) {
				console.log(e.detail.markerId);
				var points = [];
				for (var i = 0; i < this.districts.length; i++) {
					if (this.districts[i].areaId === e.detail.markerId) {
						//this.$set(this.center, "lng", this.districts[i].lng);
						//this.$set(this.center, "lat", this.districts[i].lat);
						//this.zoom = 12;
						var ps = this.districts[i].border.split(';');
						for (var j = 0; j < ps.length; j++) {
							var p = ps[j].split(',');
							points.push({
								longitude: parseFloat(p[0]),
								latitude: parseFloat(p[1])
							});
						}
			
						this.polygons = [{
							points: points,
							fillColor: '#2979ff',
							strokeWidth: 3,
							strokeColor: "#FF2F13",
							zIndex: 11
						}];
						points = [];
						console.log(this.polygons);
					}
				}
			},

			showHouseList() {

			},

		},

		// 判断一个对象是否为空对象
		ifEmptyObj(obj) {
			if (JSON.stringify(obj) == "{}") {
				return true;
			} else {
				return false;
			}
		}
	};
</script>

<style scoped lang="scss">
	.wrap {
		height: 100%;
		width: 100%;
	}

	.slot-center {
		display: flex;
		align-items: center;
		justify-content: center;
		/* 如果您想让slot内容占满整个导航栏的宽度 */
		flex: 1;
		/* 如果您想让slot内容与导航栏左右有空隙 */
		/* padding: 0 30rpx; */
		width: 400rpx;
	}

	.slot-right {
		width: 60rpx;
	}
</style>
