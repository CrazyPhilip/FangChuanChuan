<template>
	<view>
		<u-navbar is-back="true" title="看跟进">
			<view class="u-m-r-20" slot="right">
				<u-icon name="plus-circle-fill" color="#2979ff" label="新增" label-pos="right" label-color="#2979ff" size="40"
				 label-size="medium" @click="ToWriteFollow"></u-icon>
			</view>
		</u-navbar>
		<view class="wrap">
			<u-collapse event-type="close" :arrow="arrow" :accordion="accordion" @change="change">
				<u-collapse-item class="collapse-item" :index="index" @change="itemChange" :title="item.Content" v-for="(item, index) in list"
				 :key="index">
					<view>
						<view>类型：{{item.FollowType}}</view>
						<view>内容：{{item.Content}}</view>
						<view>跟进人：{{item.EmpName}}</view>
						<view>跟进部门：{{item.DeptName}}</view>
						<view>跟进时间：{{item.FollowDate}}</view>
					</view>
				</u-collapse-item>
			</u-collapse>
		</view>
	</view>
</template>

<script>
	import config from '../../api/config.js';
	import {
		mapState,
		mapMutations
	} from 'vuex';

	export default {
		data() {
			return {
				PropertyID: '',
				list: [],

				accordion: false,
				arrow: true,
				key: true,
			}
		},

		onLoad(params) {
			this.PropertyID = params.PropertyID;
			this.getHouseFollowInfo();
		},

		computed: {
			...mapState(['user'])
		},

		methods: {
			getHouseFollowInfo() {
				this.$u.get(config.server + '/GetHouseFollowInfo', {
					DBName: this.user.DBName,
					PropertyID: this.PropertyID,
				}).then(res => {
					this.list = res.Result;
				});
			},

			itemChange() {

			},

			change() {

			},

			ToWriteFollow() {
				uni.navigateTo({
					url: './NewHouseFollowUp?PropertyID=' + this.PropertyID
				});
			},
		}

	}
</script>

<style>
	/* page不能写带scope的style标签中，否则无效 */
	page {
		background-color: rgb(240, 240, 240);
	}
</style>

<style>
	/* #ifndef H5 */
	page {
		height: 100%;
		background-color: #f2f2f2;
	}

	/* #endif */
</style>

<style lang="scss" scoped>
	.collapse-item {
		border: 1rpx solid white;
		border-radius: 8rpx;
		background-color: white;
		margin: 10rpx;
		padding: 8rpx;
	}
</style>
