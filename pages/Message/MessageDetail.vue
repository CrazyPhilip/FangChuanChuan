<template>
	<view>
		<u-navbar is-back="true" :title="detail.Title" ></u-navbar>
		
		<view style="padding: 10rpx;">
			<u-parse :content="detail.Content" @preview="preview" @navigate="navigate" noData="正在加载中..." />
		</view>
	</view>
</template>

<script>
	import uParse from '@/components/gaoyia-parse/parse.vue' //引入组件

	export default {
		components: {
			uParse
		},

		data() {
			return {
				detail: Object,

			}
		},

		onLoad: function(params) {
			const eventChannel = this.getOpenerEventChannel();
			eventChannel.on('acceptDataFromMessageList', (data) => {
				this.detail = data;
			});
		},

		methods: {
			preview(src, e) { //事件：点击富文本里的图片
				// do something
			},
			navigate(href, e) { //事件：点击富文本里的链接
				// do something

				plus.runtime.openURL(href, function(res) {
					//console.log(res);
				});
			}

		}
	}
</script>

<style>
</style>
