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
	 <!-- <canvas  style="width: 200px;height: 300px;"id="aaa">您的浏览器不支持 -->
	<!-- <div> -->
		<!-- <input type="text"><button>按钮</button>
		 <img id="newImage" alt="100x100" src="__PUBLIC__/img/1.jpg" class="img-circle" width="100px" height="100px" >
		 <input id="image" type='file' name='myFile' size='15' @change="aa(this)"/>
			<button class="picpz"  @click="paizhao()">拍照</button> -->
			<!-- 这个是本地的 -->
			<!-- <img src="../../assets/image/3@2x.png" /> -->
			<!-- 这个是服务器的 -->
			<!-- <iframe src="http://36.112.65.110:8080/project/1/model/model-360%E5%85%A8%E6%99%AF/model.html" controls="controls"></iframe> -->
			<!-- <img id="aaa"  src="http://36.112.65.110:8080/project/1/drawing/2/1/disan.png"> -->
	 <!-- </div> -->
	 <!-- </canvas> -->
	 <canvas width ="300" height="200" class='canvas'>您浏览器不支持canvas!</canvas>
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
 <style>canvas{
			border:1px solid black;
		}</style>
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
<script>
	var huaban = document.querySelector('.canvas');
	var bicaso = huaban.getContext('2d');
	console.log(bicaso);
	var left =0;
	var fangxiang =0;
	var timer =null;
	bicaso.fillstyle='pink';
	timer = setInterval(function(){
		if(left==0)fangxiang = 1;
		if(left==250) fangxiang= 0;
		switch(fangxiang){
			case 0:{
				bicaso.clearRect(0,0,300,200);
				bicaso.fillRect(--left,10,50,50);
			}
				break;
				case 1:{
				bicaso.clearRect(0,0,300,200);
				bicaso.fillRect(++left,10,50,50);
				}
				break;
		}
	},10);
	bicaso.clearRect(0,0,300,200);
	bicaso.fillRect(10,10,50,50);
	bicaso.strokeRect(150,50,50,50);
	bicaso.clearRect(5,5,50,50);
	
	路径绘制
	bicaso.beginPath();
	bicaso.moveTo(50,50);
	bicaso.lineTo(100,50);
	bicaso.lineTo(75,100);
	bicaso.lineTo(50,50);
	bicaso.strokeStyle='orange';
	bicaso.fillStyle ="green";
	bicaso.lineWidth="10";
	bicaso.stroke();
	bicaso.fill();
	bicaso.closePath();
    设置填充和封闭图形填充和开启路径结束路径
	bicaso.beginPath();
	bicaso.moveTo(50,50);
	bicaso.lineTo(100,50);
	bicaso.lineTo(75,100);
	bicaso.lineTo(50,50);
	bicaso.fillStyle ="green";
	bicaso.fill();
	bicaso.closePath();
	圆弧 
   bicaso.beginPath();
   bicaso.arc(150,100,50,1.5*Math.PI,0*Math.PI,true);
   bicaso.stroke();
   bicaso.closePath();
</script>