<!-- <template>
	<div id="img">
		<button class="btn" @click="btn()">截 图</button>
		<div class="bg-img" style="display: none"></div>
		<div id="capture" style="padding: 10px; background: #f5da55">
			<h4 style="color: #000; " id="aa">Hello world!</h4>
		</div>
		<div style="margin-top: 200px;text-align: center;">
			<img id="result"/>
		</div>
	</div>
</template>

<script>
	import api from '@/api/api.js';
	import axios from 'axios';
	import $ from 'jquery'  //加上这句话
	import html2canvas from 'html2canvas'
	import kscreenshot from 'kscreenshot'
	//65指键盘中的A
	var kscreen = new kscreenshot({
		 key: 65, // 设置快捷键 目前为 shift+a
		endCB:function(data){
			console.log('截图');
			console.log(data);
			document.getElementById('result').setAttribute('src', data)
			// 			//过滤data:URL
			axios.get(api.Ceshi+"?data="+data).then(result=>{
				console.log(result.data+"++++++++++");
			})
		},
		cancelCB: function () {
			console.log('取消')
		}
	})
	export default {
    data() {
      return {
		dataurl:""
      }
    },
	methods: {
		btn() {
			kscreen.startScreenShot() // 开启截屏 也可以使用快捷键 开启截屏

		}
	}
  }
</script>

<style>
	
</style>

 -->