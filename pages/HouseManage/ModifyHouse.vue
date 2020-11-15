<template>
	<view>
		<view class="content">
			<u-navbar is-back="true" title="修改房源"></u-navbar>
			<!--必填信息-->
			<u-form :model="model" :rules="rules" ref="uForm0" :errorType="['message']">
				<!-- <u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition" 
				label="上传图片" prop="photo" label-width="200">
					<u-upload width="160" height="160" :file-list="model.fileList"></u-upload>
				</u-form-item> -->
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="小区" prop="district" label-width="300">
					<u-input v-model="model.estate" placeholder="请选择小区" :disabled="true" v-on:click="ToEstateSelector"></u-input>
				</u-form-item>
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="栋座" prop="area" label-width="300">
					<u-input :border="border" type="select" :select-open="buildingListShow" v-model="model.building" placeholder="请选择栋座"
					 @click="buildingListShow = true"></u-input>
				</u-form-item>
				<u-picker mode="selector" v-model="buildingListShow" :default-selector="[0]" :range="buildingList" @confirm="buildingCallback"></u-picker>
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="单元" prop="district" label-width="300">
					<u-input :border="border" type="select" :select-open="unitListShow" v-model="model.unit" placeholder="请选择单元"
					 @click="unitListShow = true"></u-input>
				</u-form-item>
				<u-picker mode="selector" v-model="unitListShow" :default-selector="[0]" :range="unitList" @confirm="unitListCallback"></u-picker>
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="300"
				 :label-position="labelPosition" label="楼层" prop="floor">
					<u-input :border="border" placeholder="请输入楼层" v-model="model.floor" type="number" inputAlign="center" :clearable="false"></u-input>
					<view>/</view>
					<u-input :border="border" placeholder="请输入总楼层" v-model="model.floorAll" type="number" inputAlign="center" :clearable="false"></u-input>
				</u-form-item>
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="300"
				 :label-position="labelPosition" label="房号" prop="roomNo">
					<u-input :border="border" placeholder="请输入房号" v-model="model.roomNo" type="number"></u-input>
				</u-form-item>
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="300"
				 label="房源标题" prop="houseTitle" label-position="top">
					<u-input :border="border" placeholder="请输入房源标题" v-model="model.houseTitle" type="text"></u-input>
				</u-form-item>
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="交易类型" prop="trade" label-width="300">
					<u-input :border="border" type="select" :select-open="tradeListShow" v-model="model.trade" placeholder="请选择交易类型"
					 @click="tradeListShow = true"></u-input>
				</u-form-item>
				<u-picker mode="selector" v-model="tradeListShow" :default-selector="[0]" :range="tradeList" @confirm="tradeListCallback"></u-picker>
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
				 label="朝向" prop="direction" label-width="300">
					<u-input :border="border" type="select" :select-open="directionListShow" v-model="model.direction" placeholder="请选择朝向"
					 @click="directionListShow = true"></u-input>
				</u-form-item>
				<u-picker mode="selector" v-model="directionListShow" :default-selector="[0]" :range="directionList" @confirm="directionListCallback"></u-picker>
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="300"
				 :label-position="labelPosition" label="售价(万元)" prop="price">
					<u-input :border="border" placeholder="请输入售价" v-model="model.price" type="number"></u-input>
				</u-form-item>
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="300"
				 :label-position="labelPosition" label="面积(㎡)" prop="square">
					<u-input :border="border" placeholder="请输入面积" v-model="model.square" type="number"></u-input>
				</u-form-item>
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="300"
				label="户型" prop="countF" label-position="top">
					<u-input :border="border" placeholder="0" v-model="model.countF" type="number" inputAlign="center" :clearable="false"></u-input>
					<view>室</view>
					<u-input :border="border" placeholder="0" v-model="model.countT" type="number" inputAlign="center" :clearable="false"></u-input>
					<view>厅</view>
					<u-input :border="border" placeholder="0" v-model="model.countW" type="number" inputAlign="center" :clearable="false"></u-input>
					<view>卫</view>
					<u-input :border="border" placeholder="0" v-model="model.countY" type="number" inputAlign="center" :clearable="false"></u-input>
					<view>阳台</view>
				</u-form-item>
				
				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="account" label-width="300"
				 :label-position="labelPosition" label="业主姓名" prop="ownerName">
					<u-input :border="border" placeholder="请输入姓名" v-model="model.ownerName" type="text"></u-input>
				</u-form-item>

				<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
				 label="手机号码" prop="ownerMobile" label-width="300">
					<u-input :border="border" placeholder="请输入手机号" v-model="model.ownerMobile" type="number"></u-input>
				</u-form-item>

			</u-form>
			
			<view calss="agreement" v-if = "model.show_agree">
				
				<u-row style="margin: 30rpx 0;">
					<u-checkbox v-model="model.shareToOutside" @change="checkboxChange0"></u-checkbox>
					<view class="agreement-text">对外展示</view>
					<view>将房源概要信息同步至外网，保证信息安全</view>
				</u-row>
				
				<u-row style="margin: 30rpx 0;">
					<u-checkbox v-model="model.shareToBroker" @change="checkboxChange1"></u-checkbox>
					<view class="agreement-text">对外分享</view>
					<view>将该房源概要信息分享，推送给其他独立经纪人</view>
				</u-row>
				
			</view>
			<!-- <view class="agreement" v-if = "model.show_agree">
				
			
				
				<u-checkbox v-model="model.shareToBroker" @change="checkboxChange"></u-checkbox>
				<view class="agreement-text">对外分享</view>
				<view>将该房源信息分享给其他独立经纪人</view>
			</view> -->
			
			<view style="margin: 20rpx 0; text-align: center;font-weight: bold;">以上为必填信息</view>

			<!--非必填信息-->
			<u-collapse class="moreInfoBox" style="border: 1rpx solid rgb(230, 230, 230); border-radius: 8rpx; padding: 0 10rpx;">
				<u-collapse-item title="添加更多信息">

					<u-form :model="optionalModel" :rules="rules" ref="uForm1" :errorType="['message']">
						
						<!-- <u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition" label="特点" label-width="300" prop="likeFruit">
							<u-checkbox-group @change="checkboxGroupChange" :wrap="true">
								<u-checkbox v-model="item.checked" v-for="(item, index) in featureList" :key="index" :name="item.name">{{ item.name }}</u-checkbox>
							</u-checkbox-group>
						</u-form-item> -->
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition" label="特点" label-width="300" prop="likeFruit">
							<u-checkbox-group @change="checkboxGroupChange" :wrap="true">
								<u-checkbox v-model="optionalModel.FlagMWWY">满五唯一</u-checkbox>
								<u-checkbox v-model="optionalModel.FlagWDY">无抵押</u-checkbox>
								<u-checkbox v-model="optionalModel.FlagKDK">可贷款</u-checkbox>
								<u-checkbox v-model="optionalModel.FlagXSFY">新上房源</u-checkbox>
							</u-checkbox-group>
						</u-form-item>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="装修" prop="decoration" label-width="300">
							<u-input :border="border" type="select" :select-open="decorationListShow" v-model="optionalModel.decoration"
							 placeholder="请选择装修" @click="decorationListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="decorationListShow" :default-selector="[0]" :range="decorationList" @confirm="decorationListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="家具" prop="furniture" label-width="300">
							<u-input :border="border" type="select" :select-open="furnitureListShow" v-model="optionalModel.furniture"
							 placeholder="请选择家具" @click="furnitureListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="furnitureListShow" :default-selector="[0]" :range="furnitureList" @confirm="furnitureListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="房屋类型" prop="type" label-width="300">
							<u-input :border="border" type="select" :select-open="typeListShow" v-model="optionalModel.type" placeholder="请选择房屋类型"
							 @click="typeListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="typeListShow" :default-selector="[0]" :range="typeList" @confirm="typeListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="用途" prop="usage" label-width="300">
							<u-input :border="border" type="select" :select-open="usageListShow" v-model="optionalModel.usage" placeholder="请选择用途"
							 @click="usageListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="usageListShow" :default-selector="[0]" :range="usageList" @confirm="usageListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="来源" prop="source" label-width="300">
							<u-input :border="border" type="select" :select-open="sourceListShow" v-model="optionalModel.source" placeholder="请选择来源"
							 @click="sourceListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="sourceListShow" :default-selector="[0]" :range="sourceList" @confirm="sourceListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="产权" prop="right" label-width="300">
							<u-input :border="border" type="select" :select-open="rightListShow" v-model="optionalModel.right" placeholder="请选择产权"
							 @click="rightListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="rightListShow" :default-selector="[0]" :range="rightList" @confirm="rightListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="证件" prop="credentials" label-width="300">
							<u-input :border="border" type="select" :select-open="credentialsListShow" v-model="optionalModel.credentials" placeholder="请选择证件"
							 @click="credentialsListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="credentialsListShow" :default-selector="[0]" :range="credentialsList" @confirm="credentialsListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="现状" prop="status" label-width="300">
							<u-input :border="border" type="select" :select-open="statusListShow" v-model="optionalModel.status" placeholder="请选择现状"
							 @click="statusListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="statusListShow" :default-selector="[0]" :range="statusList" @confirm="statusListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="看房方式" prop="lookWay" label-width="300">
							<u-input :border="border" type="select" :select-open="lookWayListShow" v-model="optionalModel.lookWay" placeholder="请选择看房方式"
							 @click="lookWayListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="lookWayListShow" :default-selector="[0]" :range="lookWayList" @confirm="lookWayListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="phone-fill" :label-position="labelPosition"
						 label="看房方式备注" prop="KeyNo" label-width="300">
							<u-input :border="border" placeholder="请输入看房方式备注" v-model="optionalModel.KeyNo"></u-input>
						</u-form-item>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="付佣" prop="commissionPay" label-width="300">
							<u-input :border="border" type="select" :select-open="commissionPayListShow" v-model="optionalModel.commissionPay" placeholder="请选择付佣"
							 @click="commissionPayListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="commissionPayListShow" :default-selector="[0]" :range="commissionPayList" @confirm="commissionPayListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="付款方式" prop="payment" label-width="300">
							<u-input :border="border" type="select" :select-open="paymentListShow" v-model="optionalModel.payment" placeholder="请选择付款方式"
							 @click="paymentListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="paymentListShow" :default-selector="[0]" :range="paymentList" @confirm="paymentListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="权属" prop="ownership" label-width="300">
							<u-input :border="border" type="select" :select-open="ownershipListShow" v-model="optionalModel.ownership" placeholder="请选择权属"
							 @click="ownershipListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="ownershipListShow" :default-selector="[0]" :range="ownershipList" @confirm="ownershipListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="交房日" prop="releaseDate" label-width="300">
						 <view @click="releaseDateShow = true">{{optionalModel.releaseDate}}</view>
							<u-calendar v-model="releaseDateShow" ref="calendar" @change="releaseDateChange" mode="date"></u-calendar>
						</u-form-item>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="挂牌日" prop="entrustDate" label-width="300">
						 <view @click="entrustDateShow = true">{{optionalModel.entrustDate}}</view>
							<u-calendar v-model="entrustDateShow" ref="calendar" @change="entrustDateChange" mode="date"></u-calendar>
						</u-form-item>

						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" :label-position="labelPosition"
						 label="建房年代" prop="builtYear" label-width="300">
							<u-input :border="border" type="select" :select-open="builtYearListShow" v-model="optionalModel.builtYear" placeholder="请选择建房年代"
							 @click="builtYearListShow = true"></u-input>
						</u-form-item>
						<u-picker mode="selector" v-model="builtYearListShow" :default-selector="[40]" :range="builtYearList" @confirm="builtYearListCallback"></u-picker>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" label="房源备注" prop="Remark" label-position="top">
							<u-input type="textarea" :border="border" placeholder="请填写房源备注(300字)" v-model="optionalModel.Remark" />
						</u-form-item>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" label="房源介绍" prop="PropertyIntroduce" label-position="top">
							<u-input type="textarea" :border="border" placeholder="请填写房源介绍(300字)" v-model="optionalModel.PropertyIntroduce" />
						</u-form-item>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" label="业主介绍" prop="OwnerIntroduce" label-position="top">
							<u-input type="textarea" :border="border" placeholder="请填写业主介绍(300字)" v-model="optionalModel.OwnerIntroduce" />
						</u-form-item>
						
						<u-form-item :leftIconStyle="{color: '#888', fontSize: '32rpx'}" left-icon="map-fill" label="服务介绍" prop="ServiceIntroduce" label-position="top">
							<u-input type="textarea" :border="border" placeholder="请填写服务介绍(300字)" v-model="optionalModel.ServiceIntroduce" />
						</u-form-item>

					</u-form>

				</u-collapse-item>
			</u-collapse>

			<u-row style="margin: 30rpx 0;">
				<u-col span="6" text-align="center" @click="reset">
					<u-button @click="reset" type="default">清空</u-button>
				</u-col>
				<u-col span="6" text-align="center" @click="submit">
					<u-button @click="submit" type="primary">修改房源</u-button>
				</u-col>
			</u-row>
			
			<u-toast ref="uToast"/>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				model: {
					fileList:[],
					estate:'',
					building:'',
					unit:'',
					floor:'',
					floorAll:'',
					roomNo:'',
					show_agree:true,
					btnText:'确认新增',
					houseTitle:'',
					trade:'',
					direction:'',
					price:'',
					square:'',
					countF:'',
					countT:'',
					countW:'',
					countY:'',
					ownerName:'',
					ownerMobile:'',
					shareToOutside:false,
					shareToBroker:false,
					CityName:'',
					DistrictName:'',
					EstateID:'',
				},
				optionalModel: {
					decoration: '',
					furniture:'',
					type:'',
					usage:'',
					source:'',
					right:'',
					credentials:'',
					status:'',
					lookWay:'',
					KeyNo:'',
					commissionPay:'',
					payment:'',
					ownership:'',
					entrustDate:'2020/01/01',
					releaseDate:'2020/01/01',
					builtYear:'2020',
					Remark:'',
					PropertyIntroduce:'',
					OwnerIntroduce:'',
					ServiceIntroduce:'',
					
					FlagMWWY:false,
					FlagWDY:false,
					FlagKDK:false,
					FlagXSFY:false,
				},

				rules: {
					estate: [{
						required: true,
						message: '请选择小区',
						trigger: 'change',
					}],
					building: [{
						required: true,
						message: '请选择栋座',
						trigger: 'change',
					}],
					unit: [{
						required: true,
						message: '请选择单元',
						trigger: 'change',
					}],
					floor: [{
						required: true,
						message: '请输入楼层',
						trigger: 'change',
					}		
					],
					floorAll: [{
						required: true,
						message: '请输入总楼层',
						trigger: 'change',
					}
					],
					roomNo: [{
						required: true,
						message: '请输入房号',
						trigger: 'change',
					},
					{
						type: 'number',
						message: '房号只能为数字',
						trigger: ['change', 'blur'],
					}
					],
					houseTitle: [{
						required: true,
						message: '请输入房源标题',
						trigger: 'change',
					}],
					trade: [{
						required: true,
						message: '请选择交易类型',
						trigger: 'change',
					}],
					direction: [{
						required: true,
						message: '请选择朝向',
						trigger: 'change',
					}],
					price: [{
						required: true,
						message: '请输入售价',
						trigger: 'change',
					},
					{
						type: 'number',
						message: '售价只能为数字',
						trigger: ['change', 'blur'],
					}
					],
					square: [{
						required: true,
						message: '请输入面积',
						trigger: 'change',
					},
					{
						type: 'number',
						message: '面积只能为数字',
						trigger: ['change', 'blur'],
					}
					],
					countF: [{
						required: true,
						message: '请输入室的数量',
						trigger: 'change',
					},
					{
						type: 'number',
						message: '只能为数字',
						trigger: ['change', 'blur'],
					}
					],
					countT: [{
						required: true,
						message: '请输入厅的数量',
						trigger: 'change',
					},
					{
						type: 'number',
						message: '只能为数字',
						trigger: ['change', 'blur'],
					}
					],
					countW: [{
						required: true,
						message: '请输入卫的数量',
						trigger: 'change',
					},
					{
						type: 'number',
						message: '只能为数字',
						trigger: ['change', 'blur'],
					}
					],
					countY: [{
						required: true,
						message: '请输入阳台的数量',
						trigger: 'change',
					},
					{
						type: 'number',
						message: '只能为数字',
						trigger: ['change', 'blur'],
					}
					],
					ownerName: [{
							required: true,
							message: '请输入业主姓名',
							trigger: 'blur',
						}],
					ownerMobile: [{
							required: true,
							message: '请输入手机号',
							trigger: ['change', 'blur'],
						},
						{
							validator: (rule, value, callback) => {
								// 调用uView自带的js验证规则，详见：https://www.uviewui.com/js/test.html
								return this.$u.test.mobile(value);
							},
							message: '手机号码不正确',
							// 触发器可以同时用blur和change，二者之间用英文逗号隔开
							trigger: ['change', 'blur'],
						}],
					Remark: [
						{
							max: 300,
							message: '填写的内容在300字内',
							trigger: ['change', 'blur'],
						}],
					PropertyIntroduce: [
						{
							max: 300,
							message: '填写的内容在300字内',
							trigger: ['change', 'blur'],
						}],
					OwnerIntroduce: [
						{
							max: 300,
							message: '填写的内容在300字内',
							trigger: ['change', 'blur'],
						}],
					ServiceIntroduce: [
						{
							max: 300,
							message: '填写的内容在300字内',
							trigger: ['change', 'blur'],
						}],
				},

				estateObject:Object,

				buildingList: [],
				unitList: [],
				tradeList: ["出售", "出租"],
				directionList:["南北", "东西", "南", "北", "东", "西", "东南", "西南", "东北", "西北"],
				
				featureList:[
					{
						name: '满五唯一',
						checked: false,
						disabled: false
					},
					{
						name: '无抵押',
						checked: false,
						disabled: false
					},
					{
						name: '可贷款',
						checked: false,
						disabled: false
					},
					{
						name: '新上房源',
						checked: false,
						disabled: false
					},
				],
				decorationList: ["毛坯", "清水", "简装", "中装", "精装", "豪装"],
				furnitureList:["少量", "全配", "无", "可协商"],
				typeList: [
					"多层", "高层", "小高层", "多层复式", "高层复式", "多层跃式",
					"高层跃式", "独立别墅", "联体别墅", "双拼别墅", "叠加别墅",
					"围院别墅", "裙楼", "四合院"
				],
				usageList: ["住宅", "商住", "商铺", "网点", "写字楼", "厂房", "写厂", "铺厂", "仓库", "地皮", "工厂", "车位", "公寓", "其他"],
				sourceList:["上店", "驻守", "贴单", "网络", "朋友", "同行", "安居客", "58", "房天下", "68好房", "平台推荐"],
				rightList:["单独所有", "共有", "单位产权"],
				credentialsList:["不动产证", "房权证", "购房合同", "委托公证", "法院拍卖", "判决书", "离婚协议", "继承"],
				statusList:["自住", "空房", "出租", "经商", "查封"],
				lookWayList:["预约", "有钥匙", "借钥匙", "直接看"],
				commissionPayList:["满佣", "折扣", "拒付", "商议"],
				paymentList:["一次性", "按揭", "垫资解押", "月付", "季度付", "半年付", "年付商议"],
				ownershipList:["商品房", "房改房", "经济适用房", "集体房", "军产房", "其它房"],
				builtYearList:[],
				
				buildingListShow: false,
				unitListShow:false,
				tradeListShow: false,
				directionListShow:false,
				
				decorationListShow: false,
				furnitureListShow: false,
				typeListShow: false,
				usageListShow: false,
				sourceListShow: false,
				rightListShow: false,
				credentialsListShow: false,
				statusListShow: false,
				lookWayListShow: false,
				commissionPayListShow: false,
				paymentListShow: false,
				ownershipListShow: false,
				builtYearListShow: false,
				releaseDateShow:false,
				entrustDateShow:false,
				
				propertyID:'',
				border: false,
				labelPosition: 'left',
			};
		},

		onLoad() {
			//this.getDistrictsByCity('cd');
			for (var i = 1; i <= 50; i++) {
				this.buildingList.push(i + '栋');
				this.unitList.push(i + '单元');
			}
			
			for (var i = 1970; i <= 2030; i++) {
				this.builtYearList.push(i);
			}
			const eventChannel = this.getOpenerEventChannel();
						eventChannel.on('acceptDataFromHouseList', (data) => {
						this.model.estate = data.EstateName;
						var arr = data.BuildNo.split(/\s*(?=\d+)/);

						this.model.building = arr[0];
						this.propertyID = data.PropertyID;
						this.model.unit  = arr[1];;   //和building 在一起，需分开
						this.model.floor = data.Floor;
						this.model.floorAll = data.FloorAll;
						this.model.roomNo = data.RoomNo;
						this.model.houseTitle = data.Title;
						this.model.trade = data.Trade;
						this.model.direction = data.PropertyDirection;
						this.model.price = data.Price;
						this.model.square = data.Square;
						this.model.countF = data.CountF;
						this.model.countT = data.CountT;
						this.model.countW = data.CountW;
						this.model.countY = data.CountY;
						this.model.ownerName = data.ownername;
						this.model.ownerMobile = data.ownermobile;
						this.model.shareToOutside = data.FlagWeb === '1'? true:false;
						this.model.shareToBroker =  data.FlagShare === '1'? true:false;
						this.model.CityName = data.CityName;
						this.model.DistrictName = data.DistrictName;
						this.model.EstateID = data.EstateID;  
						
						this.optionalModel.decoration = data.PropertyDecoration;
						this.optionalModel.furniture = data.PropertyFurniture;
						this.optionalModel.type = data.PropertyType;
						this.optionalModel.usage = data.PropertyUsage;
						this.optionalModel.source = data.PropertySource;
						this.optionalModel.right  = data.PropertyOwn;
						this.optionalModel.credentials = data.PropertyCertificate;
						this.optionalModel.status = data.PropertyOccupy;
						this.optionalModel.lookWay = data.PropertyLook;
						this.optionalModel.KeyNo = data.KeyNo;
						this.optionalModel.commissionPay = data.PropertyCommission;
						this.optionalModel.payment = data.PropertyBuy;
						this.optionalModel.ownership = data.PropertyRight;
					
						this.optionalModel.Remark = data.Remark;
						this.optionalModel.PropertyIntroduce = data.PropertyIntroduce;
						this.optionalModel.OwnerIntroduce = data.OwnerIntroduce;
						this.optionalModel.ServiceIntroduce = data.ServiceIntroduce;
					
						this.optionalModel.FlagMWWY = data.FlagMWWY === '1'? true:false;
						this.optionalModel.FlagWDY = data.FlagWDY === '1'? true:false;
						this.optionalModel.FlagKDK = data.FlagKDK === '1'? true:false;
						this.optionalModel.FlagXSFY = data.FlagXSFY === '1'? true:false;
						});
			this.model.show_agree = this.global_data.global_data.AccountStyle === '独立经纪人' ? true:false;
			this.model.btnText = this.global_data.global_data.AccountStyle === '独立经纪人' ? '确认新增':'确认分享';
		},	

		onReady() {
			this.$refs.uForm0.setRules(this.rules);
			this.$refs.uForm1.setRules(this.rules);
		},

		methods: {
			//跳转到搜索小区页面
			ToEstateSelector(){
				uni.navigateTo({
					url:'./EstateSelector'
				});
			},
			
			buildingCallback(index) {
				this.model.building = this.buildingList[index];
			},
			
			unitListCallback(index){
				this.model.unit = this.unitList[index];
			},
			
			tradeListCallback(index) {
				this.model.trade = this.tradeList[index];
			},
			
			directionListCallback(index){
				this.model.direction = this.directionList[index];
			},

			//非必填部分
			checkboxGroupChange(e){
				console.log(e);
			},
			
			decorationListCallback(index) {
				this.optionalModel.decoration = this.decorationList[index];
			},
			
			furnitureListCallback(index) {
				this.optionalModel.furniture = this.furnitureList[index];
			},
			
			typeListCallback(index) {
				this.optionalModel.type = this.typeList[index];
			},

			usageListCallback(index) {
				this.optionalModel.usage = this.usageList[index];
			},
			
			sourceListCallback(index) {
				this.optionalModel.source = this.sourceList[index];
			},
			
			rightListCallback(index) {
				this.optionalModel.right = this.rightList[index];
			},
			
			credentialsListCallback(index) {
				this.optionalModel.credentials = this.credentialsList[index];
			},
			
			statusListCallback(index) {
				this.optionalModel.status = this.statusList[index];
			},
			
			lookWayListCallback(index) {
				this.optionalModel.lookWay = this.lookWayList[index];
			},
			
			commissionPayListCallback(index) {
				this.optionalModel.commissionPay = this.commissionPayList[index];
			},
			
			paymentListCallback(index) {
				this.optionalModel.payment = this.paymentList[index];
			},
			
			ownershipListCallback(index) {
				this.optionalModel.ownership = this.ownershipList[index];
			},

			entrustDateChange(e){
				this.optionalModel.entrustDate = e.result;
			},
			
			releaseDateChange(e){
				this.optionalModel.releaseDate = e.result;
			},
			
			builtYearListCallback(index) {
				this.optionalModel.builtYear = this.builtYearList[index];
			},
			
			getEstate(object){
				if(!!object){
					this.estateObject = object;
					this.model.estate = this.estateObject.EstateName;
					this.model.houseTitle = this.estateObject.DistrictName + ' ' + this.estateObject.EstateName + ' ';
					
					this.model.CityName = this.estateObject.CityName;
					this.model.DistrictName = this.estateObject.DistrictName;
					this.model.EstateID = this.estateObject.EstateID;
				}
			},
			
			reset() {
				this.model.fileList = [];
				this.model.estate = '';
				this.model.building = '';
				this.model.unit = '';
				this.model.floor = '';
				this.model.floorAll = '';
				this.model.roomNo = '';
				this.model.houseTitle = '';
				this.model.trade = '';
				this.model.direction = '';
				this.model.price = '';
				this.model.square = '';
				this.model.countF = '';
				this.model.countT = '';
				this.model.countW = '';
				this.model.countY = '';
				this.model.ownerName = '';
				this.model.ownerMobile = '';
				this.model.shareToOutside = false;
				this.model.shareToBroker = false;
				
				this.optionalModel.decoration = '';
				this.optionalModel.furniture = '';
				this.optionalModel.type = '';
				this.optionalModel.usage = '';
				this.optionalModel.source = '';
				this.optionalModel.right = '';
				this.optionalModel.credentials = '';
				this.optionalModel.status = '';
				this.optionalModel.lookWay = '';
				this.optionalModel.KeyNo = '';
				this.optionalModel.commissionPay = '';
				this.optionalModel.payment = '';
				this.optionalModel.ownership = '';
				this.optionalModel.entrustDate = '2020/01/01';
				this.optionalModel.releaseDate = '2020/01/01';
				this.optionalModel.builtYear = '2020';
				this.optionalModel.Remark = '';
				this.optionalModel.PropertyIntroduce = '';
				this.optionalModel.OwnerIntroduce = '';
				this.optionalModel.ServiceIntroduce = '';
				
				this.optionalModel.FlagMWWY = false;
				this.optionalModel.FlagWDY = false;
				this.optionalModel.FlagKDK = false;
				this.optionalModel.FlagXSFY = false;
			},

			submit() {
				this.$refs.uForm0.validate(valid => {
					if (valid) {
						console.log('验证通过');
						this.ModifyHouse();
						//this.NewHouseData();
					} else {
						console.log('验证失败');
					}
				});
			},

			
			ModifyHouse() {
				console.log(this.propertyID+' this is');
				console.log(this.global_data.global_data.DBName);
				console.log(this.model);
				console.log(this.optionalModel);
				console.log(this.estateObject.CityName+' '+this.estateObject.DistrictName+ ' '+this.estateObject.EstateID);
				if(this.global_data.global_data.AccountStyle === '物业管理中心')
				{
					this.model.shareToBroker = true;
				}
				this.$u.post(this.global_data.global_data.BaseUrl + 'ModHouseData', {
					DBName:this.global_data.global_data.DBName,
					PropertyID:this.propertyID,
					/* CityName:this.estateObject.CityName,
					DistrictName:this.estateObject.DistrictName,
					EstateID:this.estateObject.EstateID, */
					CityName:this.model.CityName,
					DistrictName:this.model.DistrictName,
					EstateID:this.model.EstateID,
					RoomNo:this.model.roomNo,
					Title:this.model.houseTitle,
					Floor:this.model.floor,
					Trade:this.model.trade,
					CountF:this.model.countF,
					CountT:this.model.countT,
					CountW:this.model.countW,
					CountY:this.model.countY,
					PropertyUsage:this.optionalModel.usage === null || this.optionalModel.usage === undefined || this.optionalModel.usage === '' ? '*' : this.optionalModel.usage,
					PropertyType:this.optionalModel.type === null || this.optionalModel.type === undefined || this.optionalModel.type === '' ? '*' : this.optionalModel.type,
					PropertyDirection:this.model.direction === null || this.model.direction === undefined || this.model.direction === '' ? '*' : this.model.direction,
					PropertySource:this.optionalModel.source === null || this.optionalModel.source === undefined || this.optionalModel.source === '' ? '*' : this.optionalModel.source,
					PropertyRight:this.optionalModel.ownership,
					Square:this.model.square,
					PriceUnit:this.model.price/this.model.square,
					Price:this.model.price,
					PropertyDecoration:this.optionalModel.decoration === null || this.optionalModel.decoration === undefined || this.optionalModel.decoration === '' ? '*' : this.optionalModel.decoration,
					OwnerName:this.model.ownerName,
					BuildNo:this.model.building + this.model.unit,
					FloorAll:this.model.floorAll,
					OwnerMobile:this.model.ownerMobile,
					EmpNoOrTel:this.global_data.global_data.Tel,
					Privy:'',
					PropertyOwn:this.optionalModel.right,
					PropertyCertificate:this.optionalModel.credentials,
					PropertyOccupy:this.optionalModel.status,
					PropertyCommission:this.optionalModel.commissionPay,
					PropertyBuy:this.optionalModel.payment,
					ZhuZhaiPropertyFurniture:this.optionalModel.furniture,
					HandOverDate:this.optionalModel.releaseDate,
					HangDate:this.optionalModel.entrustDate,
					CompleteYear:this.optionalModel.builtYear,
					PropertyLook:this.optionalModel.lookWay,
					KeyNo:this.optionalModel.KeyNo,
					Remark:this.optionalModel.Remark,
					PropertyIntroduce:this.optionalModel.PropertyIntroduce,
					OwnerIntroduce:this.optionalModel.OwnerIntroduce,
					ServiceIntroduce:this.optionalModel.ServiceIntroduce,
					OwnerMobile2:'',
					OwnerMobile3:'',
					FlagWeb:this.model.shareToOutside?"1":"0",
					FlagShare:this.model.shareToBroker?"1":"0",
					FlagMWWY:this.optionalModel.FlagMWWY?"1":"0",
					FlagWDY:this.optionalModel.FlagWDY?"1":"0",
					FlagKDK:this.optionalModel.FlagKDK?"1":"0",
					FlagXSFY:this.optionalModel.FlagXSFY?"1":"0",
					ChangeLog:'',
					Status:''
				},{
					'content-type': 'application/x-www-form-urlencoded',
				}).then(res => {
					console.log(res);
					if (res.Flag === 'success' || res.Flag ==='SQLSuccess') {
						this.$refs.uToast.show({
											title: '修改房源成功',
											type: 'success',
											url: '/pages/Home/Home',
											isTab:true,
										});
					}
				}).catch(res =>{
					console.log(res);
					this.$refs.uToast.show({
										title: '错误',
										type: 'error',
									});
				});
			},
			

			NewHouseData(){
				uni.request({
					url:this.global_data.global_data.BaseUrl + 'NewHouseData',
					data:{
						DBName:this.global_data.global_data.DBName,
						CityName:this.estateObject.CityName,
						DistrictName:this.estateObject.DistrictName,
						EstateID:this.estateObject.EstateID,
						RoomNo:this.model.roomNo,
						Title:this.model.houseTitle,
						Floor:this.model.floor,
						Trade:this.model.trade,
						CountF:this.model.countF,
						CountT:this.model.countT,
						CountW:this.model.countW,
						CountY:this.model.countY,
						PropertyUsage:this.optionalModel.usage === null || this.optionalModel.usage === undefined || this.optionalModel.usage === '' ? '*' : this.optionalModel.usage,
						PropertyType:this.optionalModel.type === null || this.optionalModel.type === undefined || this.optionalModel.type === '' ? '*' : this.optionalModel.type,
						PropertyDirection:this.model.direction === null || this.model.direction === undefined || this.model.direction === '' ? '*' : this.model.direction,
						PropertySource:this.optionalModel.source === null || this.optionalModel.source === undefined || this.optionalModel.source === '' ? '*' : this.optionalModel.source,
						PropertyRight:this.optionalModel.ownership,
						Square:this.model.square,
						PriceUnit:this.model.price/this.model.square,
						Price:this.model.price,
						PropertyDecoration:this.optionalModel.decoration === null || this.optionalModel.decoration === undefined || this.optionalModel.decoration === '' ? '*' : this.optionalModel.decoration,
						OwnerName:this.model.ownerName,
						BuildNo:this.model.building + this.model.unit,
						FloorAll:this.model.floorAll,
						OwnerMobile:this.model.ownerMobile,
						EmpNoOrTel:this.global_data.global_data.Tel,
						Privy:'',
						PropertyOwn:this.optionalModel.right,
						PropertyCertificate:this.optionalModel.credentials,
						PropertyOccupy:this.optionalModel.status,
						PropertyCommission:this.optionalModel.commissionPay,
						PropertyBuy:this.optionalModel.payment,
						ZhuZhaiPropertyFurniture:this.optionalModel.furniture,
						HandOverDate:this.optionalModel.releaseDate,
						HangDate:this.optionalModel.entrustDate,
						CompleteYear:this.optionalModel.builtYear,
						PropertyLook:this.optionalModel.lookWay,
						KeyNo:this.optionalModel.KeyNo,
						Remark:this.optionalModel.Remark,
						PropertyIntroduce:this.optionalModel.PropertyIntroduce,
						OwnerIntroduce:this.optionalModel.OwnerIntroduce,
						ServiceIntroduce:this.optionalModel.ServiceIntroduce,
						OwnerMobile2:'',
						OwnerMobile3:'',
						FlagWeb:this.model.shareToOutside?"1":"0",
						FlagMWWY:this.optionalModel.FlagMWWY?"1":"0",
						FlagWDY:this.optionalModel.FlagWDY?"1":"0",
						FlagKDK:this.optionalModel.FlagKDK?"1":"0",
						FlagXSFY:this.optionalModel.FlagXSFY?"1":"0",
						PropertyID:'',
						ChangeLog:'',
						Status:''
					},
					header:{
						'content-type': 'application/x-www-form-urlencoded',
					},
					method:'POST',
					dataType:'json',
					success: (res) => {
						console.log(res);
						if (res.Flag === 'success') {
							this.$refs.uToast.show({
												title: '新增房源成功',
												type: 'success',
												url: '/pages/Home/Home',
												isTab:true,
											});
						}
					},
					fail: (res) => {
						console.log(res);
						this.$refs.uToast.show({
											title: '错误',
											type: 'error',
										});
					}
				})
			},

			//分享到外网
			checkboxChange0(e) {
				this.model.shareToOutside = e.value;
			},
			//分享到其他经纪人
			checkboxChange1(e) {
				this.model.shareToBroker = e.value;
			},
		}
	};
</script>

<style scoped lang="scss">
	.content {
		padding: 0 40rpx;
	}

	.agreement {
		display: flex;
		align-items: center;
		margin: 40rpx 0;

		.agreement-text {
			width: 300rpx;
		}
	}

	.moreInfoBox {}
</style>
