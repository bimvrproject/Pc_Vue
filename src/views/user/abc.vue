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
 <template>
	 <div>
		 <img id="newImage" alt="100x100" src="__PUBLIC__/img/1.jpg" class="img-circle" width="100px" height="100px" >
		 <input id="image" type='file' name='myFile' size='15' @change="aa(this)"/>
			<button class="picpz"  @click="paizhao()">拍照</button>
			<!-- 这个是本地的 -->
			<img src="../../assets/image/3@2x.png" />
			<!-- 这个是服务器的 -->
			<iframe src="http://36.112.65.110:8080/project/1/model/model-360%E5%85%A8%E6%99%AF/model.html" controls="controls"></iframe>
			<!-- <img id="aaa"  src="http://36.112.65.110:8080/project/1/drawing/2/1/disan.png"> -->
	 </div>
 </template>
 <script>
	 import html2canvas from 'html2canvas'
  export default {
    data() {
      return {
      };
    },
	methods: {
			//拍照
		paizhao(){
			// 图片中的拍照图片
			this.fbpzs = require('../../assets/image/fbpzsblue.png'),
			// 图片中的拍照的字体颜色
			this.fbpzscolor = 'color:#2180ED',
			// document.getElementById("aaa")
			html2canvas(document.getElementById("aaa"),{
				allowTaint: true,
				useCORS: true,		//保证跨域图片的显示
			}).then(canvas=>{
				// document.body.appendChild(canvas);
				console.log(canvas.toDataURL())
			});
		},
		aa(imgFile){
			alert(123)
			console.log(window.URL.createObjectURL(imgFile.files[0]))
			document.getElementById("newImage").src = window.URL.createObjectURL(imgFile.files[0]);
		}
	}
  };
</script>