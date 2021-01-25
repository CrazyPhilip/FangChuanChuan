<template>
	<view>
		<view class="wrap">
			<u-navbar is-back="true" title="搜索小区"></u-navbar>
			<u-search placeholder="请输入小区名" v-model="keyword" shape="round" :clearabled="true" :show-action="true" :animation="true"
			 :focus="true" @custom="searchEstate" @search="searchEstate" @change="searchEstate"></u-search>

			<view v-for="(item,index) in list">
				<view class="cell" v-on:click="select(index)">
					<view class="left">{{item.EstateName}}</view>
					<view class="right">{{item.CityName}}-{{item.DistrictName}}</view>
				</view>
			</view>
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
				keyword: '',

				list: [],

			}
		},

		computed: {
			...mapState(['user'])
		},

		methods: {
			searchEstate() {
				this.$u.get(config.server + '/GetEstateInfoByEstateName', {
					DBName: this.user.DBName,
					SelectType: '1',
					EstateName: this.keyword
				}).then(res => {
					console.log(res);
					this.list = res.Result;
				}).catch(res => {
					console.log(res);
				});
			},

			select(index) {
				var pages = getCurrentPages();
				var prevPage = pages[pages.length - 2]; //上一个页面
				prevPage.$vm.getEstate(this.list[index]);
				uni.navigateBack();
			},
		}
	}
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 10rpx;
	}

	.cell {
		height: 100rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-radius: 8px;
		margin: 5px;
		background-color: #dfdfdf;
		padding: 8px;
		position: relative;

		.left {
			font-weight: bold;
		}

		.right {}
	}
</style>
