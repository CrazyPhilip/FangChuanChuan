<template>
	<view>
		<view class="wrap">
			<u-navbar :is-back="true" title="">
				<view class="slot-center">
					<u-tabs :list="[{name:'二手房'}, {name:'租房'}, {name:'新房'}]" :is-scroll="false" :current="current" @change="showChange"
					 item-width="100"></u-tabs>
				</view>
				<view class="slot-right" slot="right">
					<u-icon name="search" size="40" @click="toSearch"></u-icon>
				</view>
			</u-navbar>

			<view style="z-index: 10;">
				<u-dropdown ref="uDropdown" activeColor="#2979ff">
					<u-dropdown-item @change="change1" v-model="value1" :title="options1[value1].label" :options="options1"></u-dropdown-item>
					<u-dropdown-item @change="change2" v-model="value2" :title="options2[value2].label" :options="options2"></u-dropdown-item>
					<u-dropdown-item @change="change3" v-model="value3" :title="options3[value3].label" :options="options3"></u-dropdown-item>
					<u-dropdown-item @change="change4" v-model="value4" :title="options4[value4].label" :options="options4"></u-dropdown-item>
				</u-dropdown>
			</view>

			<view>
				<map style="width: 750rpx; height: 1000rpx;z-index: 0;" :latitude="center.lat" :longitude="center.lng" :scale="zoom" :show-compass="true"
				 :markers="bubbles" :polygons="[polygons]" @markertap="showZones" @callouttap="showHouseList">
				</map>
				<!-- <baidu-map style="width: 100%;height: 100%;" ak="0dGpK7C09lZMjwx6QVhU6hzTRZBkGVAI">
				  </baidu-map> -->
				<!-- <baidu-map style="width: 100%;height: 100%;" ak="0dGpK7C09lZMjwx6QVhU6hzTRZBkGVAI" :center="center" :zoom="zoom"
				 :scroll-wheel-zoom="true" @ready="handlerMapReady" @zoomend="syncCenterAndZoom">
					<bm-boundary v-if="false" :name="areaBoundry" :strokeWeight="2" strokeColor="blue" fillColor="skyblue"
					 :fillOpacity="0.4"></bm-boundary>
					<bm-polygon v-if="showBoundary" :path="getPolygonPath" stroke-color="blue" :stroke-opacity="0.5" :stroke-weight="2"
					 fill-color="skyblue" :fill-opacity="0.4" />
					<view v-if="showDistrict && districts">
						<area-overlay v-for="(item, index) in districts" :key="index" :position="{ lng: item.lng, lat: item.lat }" :text="item"
						 @mouseover.native="selectArea(item, index)" @mouseleave.native="cancelArea(item, index)" @click.native="clickDistrict(item, index)"></area-overlay>
					</view> -->
				<!-- <view v-if="showZone && zones">
						<area-overlay v-for="(item, index) in zones" :key="index" :position="{ lng: item.lng, lat: item.lat }" :text="item"
						 @mouseover.native="selectArea(item, index)" @mouseleave.native="cancelArea(item, index)" @click.native="clickZone(item, index)"></area-overlay>
					</view> -->
				<!-- <view v-if="showRegion && regions">
			    <area-overlay
			      v-for="(item, index) in regions"
			      :key="index"
			      :position="{ lng: item.lng, lat: item.lat }"
			      :text="item"
			      :class="areaIndex === index ? 'active' : ''"
			      @mouseover.native="selectArea(item, index)"
			      @mouseleave.native="cancelArea(item, index)"
			      @click.native="clickRegion(item, index)"
			    ></area-overlay>
			  </view>-->
				<!-- <view v-if="showEstate && estates">
						<estate-overlay v-for="(item, index) in estates" :key="index" :position="{ lng: item.lng, lat: item.lat }" :text="item"
						 :TheIndex="index" :isChoose="ChooseIndex === index ? 1 : 0" @click.native="clickEstate(index)"></estate-overlay>
					</view>
					<view id="map-header-wrapper">
						<map-header></map-header>
					</view>
					<view id="map-filter-wrapper">
						<map-filter @transmitParamEvent="handleTransmitParamEvent"></map-filter>
					</view>
					<view id="map-house-list">
						<map-house-list ref="mapHouseList" :estates="ChooseIndex == -1 ? -1 : estates[ChooseIndex]"></map-house-list>
					</view> 
				</baidu-map>-->
			</view>

		</view>
	</view>
</template>

<script>
	/* // @ is an alias to /src
	//import HelloWorld from "@/components/HelloWorld.vue";
	//import connect from "../../connect.js";
	//百度地图
	import BaiduMap from "vue-baidu-map/components/map/Map.vue";
	import BmBoundary from "vue-baidu-map/components/others/Boundary";
	import BmPolygon from "vue-baidu-map/components/overlays/Polygon";

	import EstateOverlay from "@/components/map/EstateOverlay.vue";
	import AreaOverlay from "@/components/map/AreaOverlay.vue";
	import ZoneOverlay from "@/components/map/ZoneOverlay.vue";

	import MapHeader from "@/components/map/MapHeader.vue";
	import MapFilter from "@/components//map/MapFilter.vue";
	//地图左侧列表
	import MapHouseList from "@/components/map/MapHouseList.vue";

	import {
		mapGetters
	} from "vuex";

	import {
		getCity,
		getDistricts,
		getZones,
		getEstatesByZoneId,
		getDistrictsByCondition,
		getZonesByCondition,
		getEstatesByZoneIdAndCondition,
		getCityV2,
		getDistrictsV2,
		getZonesV2,
		getEstatesByZoneIdV2,
		getDistrictsByConditionV2,
		getZonesByConditionV2,
		getEstatesByZoneIdAndConditionV2
	} from "@/api/map"; */

	export default {
		name: "Map",

		/* components: {
			BaiduMap,
			ZoneOverlay,
			BmBoundary,
			BmPolygon,
			EstateOverlay,
			MapHeader,
			MapFilter,
			AreaOverlay,
			MapHouseList
		}, */

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
				polygons: {
					points: [],
					fillColor: '#2979ff', 
					strokeWidth: 3,  
					strokeColor: "#FF2F13",  
					zIndex: 11 
				},

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
			/* ...mapGetters([
				"name",
				"imgurl",
				"mobile",
				"roles",
				"cityName",
				"cityCode",
				"cityPinyin"
			]), */
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

		/* 
		watch: {
			// cityName发生变化是，此函数会执行
			cityName(newValue, oldValue) {
				if (typeof newValue == "undefined" || newValue == "") {
					// console.log("null");
				} else {
					console.log(newValue);
				}
			},
			cityCode(newValue, oldValue) {
				if (typeof newValue == "undefined" || newValue == "") {
					// console.log("null");
				} else {
					console.log(newValue);
				}
			},
			cityPinyin(newValue, oldValue) {
				console.log(newValue);
				console.log(oldValue);
				if (typeof newValue == "undefined" || newValue == "") {
					// console.log("null");
				} else {
					getCityV2(this.cityPinyin).then(res => {
						const data = res.data;
						this.$set(this.center, "lng", data.lng);
						this.$set(this.center, "lat", data.lat);
					});
					getDistrictsV2(this.cityPinyin)
						.then(res => {
							this.districts = res.data;
						})
						.catch(err => {
							console.log(err);
						});
					getZonesV2(this.cityPinyin)
						.then(res => {
							this.zones = res.data;
						})
						.catch(err => {
							console.log(err);
						});
					this.zoom = 12;
				}
			}
		},
		 */

		onReady() {
			//this.height = window.innerHeight - 10 + "px";
			/* if (this.cityPinyin == null || this.cityPinyin == "") {
				this.$store
					.dispatch("GetCityInfo")
					.then(() => {
						console.log("城市信息获取成功");
					})
					.catch(() => {
						console.log("城市信息获取失败");
					});
			} */
			// console.log(this.height);

			
		},

		onLoad() {
			console.log('这是vue');
			
			this.$u.get('http://47.108.202.57:8090/map/getDistrictsV2', {
				cityPinyin: 'chengdu'
			}).then(res => {
				this.districts = res.data;
				for (var i = 0; i < this.districts.length; i++) {
					this.bubbles[i] = {
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
						/* label:{
							content:this.districts[i].districtName + ' ' + this.districts[i].houseCnt + '套',
							color:'#000000',
							bgColor: '#FFFFFF',
							textAlign: 'center',
							x: '10',
							y: '10',
						} */
					};
				};
			
				//console.log(this.districts);
				//console.log(this.bubbles);
			});
			
			this.$u.get('http://47.108.202.57:8090/map/getZonesV2', {
				cityPinyin: 'chengdu'
			}).then(res => {
				this.zones = res.data;
				//console.log(this.zones);
			});
			
			this.$u.get('http://47.108.202.57:8090/map/getCityV2', {
				cityPinyin: 'chengdu'
			}).then(res => {
				const data = res.data;
				this.$set(this.center, "lng", data.lng);
				this.$set(this.center, "lat", data.lat);
			});
		},

		methods: {
			showChange(index) {},

			toSearch() {

			},

			change1(e) {
				//this.value1 = e.value;
			},

			change2(e) {
				//this.value2 = e.value;
			},
			change3(e) {
				//this.value3 = e.value;
			},
			change4(e) {
				//this.value4 = e.value;
			},

			showZones(e) {
				console.log(e.detail.markerId);
				//this.polygons.splice(0, this.polygons.length);
				//var points = [];
				for (var i = 0; i < this.districts.length; i++) {
					if (this.districts[i].areaId === e.detail.markerId) {
						this.$set(this.center, "lng", this.districts[i].lng);
						this.$set(this.center, "lat", this.districts[i].lat);
						this.zoom = 12;
						var ps = this.districts[i].border.split(';');
						for (var j = 0; j < ps.length; j++) {
							var p = ps[j].split(',');
							this.polygons.points.push({
								longitude: parseFloat(p[0]),
								latitude: parseFloat(p[1])
							});
						}
						
						/* this.polygons.push({
							points: points,
							fillColor: '#2979ff',
							zIndex: 1,
						});
						points = []; */
						console.log(this.polygons);
					}
				}
			},

			showHouseList() {

			},

			initGeo() {
				/* connect.$on("cityGeoOk", data => {
					this.$set(this.center, "lng", data[0]);
					this.$set(this.center, "lat", data[1]);
				}); */
			},

			selectArea(item, index) {
				// if (item.level === "district") {
				//   this.area = index;
				//   // this.areaBoundry = `${item.cityName}${item.districtName}`; // 行政区名字，只供参考
				//   this.polygonPath = item.border;
				//   this.showBoundary = true;
				//   // console.log(this.getPolygonPath);
				// }
				this.area = index;
				// this.areaBoundry = `${item.cityName}${item.districtName}`; // 行政区名字，只供参考
				this.polygonPath = item.border;
				this.showBoundary = true;
			},

			cancelArea(item, index) {
				if (item.level === "district") {
					this.areaIndex = "";
					this.areaBoundry = "";
					this.showBoundary = false;
				}
			},

			syncCenterAndZoom(e) {
				// district与zone的分界线
				const ZOOMBOUNDARY1 = 14;
				// zone与estate的分界线
				const ZOOMBOUNDARY2 = 16;
				this.zoom = e.target.getZoom();
				this.showDistrict = this.zoom < ZOOMBOUNDARY1;
				this.showZone = this.zoom >= ZOOMBOUNDARY1 && this.zoom < ZOOMBOUNDARY2;
				this.showEstate = this.zoom >= ZOOMBOUNDARY2;
				if (!this.showDistrict) {
					this.showBoundary = false;
				}
				// console.log(this.zoom);
				// console.log(this.showDistrict);
				// console.log(this.showZone);
				// console.log(this.showEstate);
			},

			clickDistrict(item, index) {
				this.zoom += 2;
				// console.log(item);
				this.$set(this.center, "lng", item.lng);
				this.$set(this.center, "lat", item.lat);
				// console.log("clickArea");
			},

			clickZone(item, index) {
				this.zoom += 2;
				this.$set(this.center, "lng", item.lng);
				this.$set(this.center, "lat", item.lat);
				// console.log(item);
				// 获取Region信息
				// getEstatesByZoneId(item.areaId)
				//   .then(res => {
				//     this.estates = res.data;
				//   })
				//   .catch(err => {
				//     console.log(err);
				//   });
				// 通过ZoneId和搜索参数获取Region信息
				getEstatesByZoneIdAndConditionV2(
						item.areaId,
						this.cityPinyin,
						this.searchParam
					)
					.then(res => {
						this.estates = res.data;
						console.log("*******");
						console.log(this.estates);
					})
					.catch(err => {
						console.log(err);
					});
			},

			//点击小区
			clickEstate(index) {
				//更换选择的小区；
				this.ChooseIndex = index;

				//houseList重新显示结果
				this.$refs.mapHouseList.chooseShow();
			},

			// 处理MapFilter传递过来的参数
			handleTransmitParamEvent(params) {
				this.searchParam = params;
				console.log(this.searchParam);
				getDistrictsByCondition(params).then(res => {
					if (res.code == 200) {
						// 先清空
						this.districts.splice(0, this.districts.length);
						this.districts = res.data;
					}
				});
				getZonesByCondition(params).then(res => {
					if (res.code == 200) {
						this.zones.splice(0, this.zones.length);
						this.zones = res.data;
					}
				});
			}
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

	#bm-view {
		// height: 950px;
		// height: 100%;
	}

	#map-header-wrapper {
		position: absolute;
		top: 100px;
		left: 24px;
		box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
	}

	#map-filter-wrapper {
		position: absolute;
		top: 24px;
		left: 46px;
		box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
	}

	#map-house-list {
		position: absolute;
		left: 24rpx;
		top: 90rpx;
		border-radius: 5px;

		// z-index: 20;
		box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.08);
	}
</style>
