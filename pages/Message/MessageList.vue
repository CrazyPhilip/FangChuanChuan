<template>
	<view>
		<view class="status_bar">
		    <!-- 这里是状态栏 -->
		</view>
		
		<view class="wrap">
			<view class="uni-list">
				<view class="uni-list-cell" v-for="(item, index) in list" :key="index" v-on:click="ToMessageDetail(index)">
					<view class="up">
						<view class="newsType">{{item.NewsType}}</view>
						<view class="empName">{{item.EmpName}}</view>
					</view>
					<view class="center">{{item.Title}}</view>
					<view class="bottom">{{item.ModDate}}</view>
				</view>
			</view>
			
		</view>
	</view>
</template>

<script>
	import config from '../../api/config.js';
	
	export default{
		data(){
			return{
				list:[],
				
			}
		},
		
		onLoad() {
			this.getMessageList();
		},
		
		methods:{
			getMessageList(){
				this.$u.get(config.server + '/QueryNews', {}).then(res => {
					this.list = res.Result;
				});
			},
			
			ToMessageDetail(index){
				var obj = this.list[index];
				uni.navigateTo({
					url: './MessageDetail',
					success: (res) => {
						res.eventChannel.emit('acceptDataFromMessageList', obj);
					}
				})
			}
		}
	}
</script>

<style>
	page {
		height: 100%;
		background-color: #f2f2f2;
	}
</style>

<style lang="scss" scoped>
	.wrap{
		padding: 60rpx 20rpx 20rpx;
	}
	
	.status_bar {
	    height: var(--status-bar-height);
	    width: 100%;
		background-color: #808080;
		z-index: 10;
		position: fixed;
	}
	
	.uni-list-cell{
		margin-bottom: 20rpx;
		padding: 20rpx;
		border-radius: 8rpx;
		background-color: white;
	}
	
	.up{
		display: flex;
		flex-direction: row;
		
	}
	
	.newsType{
		border-radius: 8rpx;
		padding: 2rpx;
		background-color: #18B566;
		color: white;
	}
	
	.empName{
		margin-left: 20rpx;
	}
	
	.center{
		font-size: large;
		font-weight: bold;
		margin: 10rpx 0 10rpx 0;
	}
	
	.bottom{
		font-size: small;
	}
</style>
