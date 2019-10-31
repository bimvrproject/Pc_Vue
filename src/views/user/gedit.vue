<template>
	<div>
		<div class="logoxneditg">
			<div class="xunitopseditg">
				<div class="xunitopeditg">
					<!-- 虚拟建造的图标 -->
					<div class="ce1editg" @click="ce1"></div>
					<!-- 线条 -->
					<div class="ceseditg"></div>
					<!-- 信息与材质 -->
					<div style="margin-top:3.75rem;">
						<!-- 信息 -->
						<div style="margin-bottom:1.09375rem;cursor:pointer;">
							<!-- 信息标题 -->
							<div style="height:0.9375rem;" @click="xxtitle">
								<span class="xinxitu" style="width:0.625rem;height:0.625rem;display:inline-block;float:left;line-height:0.9375rem;margin-left:2rem;">
									<img :src="xinxitu" alt="" style="width:100%;height:100%;" />
								</span>
								<i style="font-style:normal;font-size:0.5625rem;font-weight:400;color:#FFFFFF;display:inline-block;line-height:0.9375rem;float:left;margin-left:0.1rem;" :style="xinxitit">信息</i>
							</div> 
							<!-- 信息展开 -->
							<div v-show="xinxizhanshi">
								<span class="firexf" @click="fnfire()" :class="{fir:firt,firs:!firt}">
								消防
								<img src="../../assets/image/editx.png" alt="" v-show="fireimg" class="firef1">
								<img src="../../assets/image/edits.png" alt="" v-show="!fireimg" class="firef1">
								</span>
								<span class="fire-line" v-show="fireline"></span>
								<!-- 创建新的消防的厚度 -->
									<ul v-show="fire">
										<li v-for="(item, index) in firearr" :key="index">
											<div class="firea">
												<div class="fireb" @dblclick="fnfire2(index)">
													<p class="firec" :title="item.fire2">{{item.fire2}}</p>
												</div>
												<input class="fired" 
												v-model="firearr[index].fire2" 
												@blur="changefire2s(index)" 
												v-show="item.changefire2" 
												type="text"
												/>
													<div class="firee" v-show="!item.changefire1" @dblclick="fnfire1(index)">
														<p class="firec" :title=" item.fire1">: {{ item.fire1 }}</p>
													</div>
														<input class="firef"
															v-model="firearr[index].fire1"
															type="text"
															@blur="changefire1(index)"
															v-show="item.changefire1"
														/>
													<img src="../../assets/image/lj.png" class="fireg" @click="clearf(index)" alt="">
											</div>
										</li>
										<li class="fireadd">
											<span class="fireadd1" @click="establishfire()">
												<img src="../../assets/image/jjjj.png" alt="" style="width:100%;height:100%;" />
											</span>
										</li>
									</ul>
									<!-- 强电 -->
									<span class="firexf" @click="fnelect()" :class="{elec:elecg,elecs:!elecg}">
									  强电
								    <img src="../../assets/image/editx.png" alt="" v-show="electimg" class="firef1">
									  <img src="../../assets/image/edits.png" alt="" v-show="!electimg" class="firef1">
									</span>
									<span class="fire-line" v-show="electline"></span>
									<!-- 创建新的强电的厚度 -->
									<ul v-show="elect">
										<li v-for="(item, index) in electarr" :key="index">
											<div class="firea">
												<div class="fireb" @dblclick="fnelect2(index)">
													<p class="firec" :title="item.elect2">{{item.elect2}}</p>
												</div>
												<input class="fired" 
													v-model="electarr[index].elect2" 
													@blur="changeelect2s(index)" 
													v-show="item.changeelect2" 
													type="text"
												/>
												<div class="firee" v-show="!item.changeelect1" @dblclick="fnelect1(index)">
													<p class="firec" :title=" item.elect1">: {{ item.elect1 }}</p>
												</div>
												<input class="firef"
													v-model="electarr[index].elect1"
													type="text"
												  @blur="changeelect1(index)"
													v-show="item.changeelect1"
												/>
												<img src="../../assets/image/lj.png" class="fireg" @click="cleare(index)" alt="">
											</div>
										</li>
										<li class="fireadd">
											<span class="fireadd1" @click="establishe()">
												<img src="../../assets/image/jjjj.png" alt="" style="width:100%;height:100%;" />
											</span>
										</li>
									</ul>
									<!-- 给排水 -->
									<span class="firexf" @click="fndra()" :class="{drac:drag,dracs:!drag}">
									  给排水
									  <img src="../../assets/image/editx.png" alt="" v-show="draimg" class="firef1">
									  <img src="../../assets/image/edits.png" alt="" v-show="!draimg" class="firef1">
									</span>
									<span class="fire-line" v-show="draline"></span>
									<!-- 创建新的给排水的构建名称 -->
									<ul v-show="dra">
									 	<li v-for="(item, index) in draarr" :key="index">
									 		<div class="firea">
									 			<div class="fireb" @dblclick="fndra2(index)">
									 				<p class="firec" :title="item.dra2">{{item.dra2}}</p>
									 			</div>
									 			<input class="fired" 
									 				v-model="draarr[index].dra2" 
									 				@blur="changedra2s(index)" 
									 				v-show="item.changedra2" 
									 				type="text"
									 			/>
									 			<div class="firee" v-show="!item.changedra1" @dblclick="fndra1(index)">
									 				<p class="firec" :title=" item.dra1">: {{ item.dra1 }}</p>
									 			</div>
									 			<input class="firef"
									 				v-model="draarr[index].dra1"
									 				type="text"
									 				@blur="changedra1(index)"
									 				v-show="item.changedra1"
									 			/>
									 			<img src="../../assets/image/lj.png" class="fireg" @click="cleard(index)" alt="">
									 		</div>
									 		</li>
									 		<li class="fireadd">
									 			<span class="fireadd1" @click="establishd()">
									 				<img src="../../assets/image/jjjj.png" alt="" style="width:100%;height:100%;" />
									 			</span>
									 	 </li>
									</ul>
									<!-- 弱电 -->
									<span class="firexf" @click="fnweak()" :class="{weakc:weakg,weakcs:!weakg}">
									  弱电
									  <img src="../../assets/image/editx.png" alt="" v-show="weakimg" class="firef1">
									  <img src="../../assets/image/edits.png" alt="" v-show="!weakimg" class="firef1">
									</span>
									<span class="fire-line" v-show="weakline"></span>
									<!-- 创建新的弱电的构建名称 -->
									<ul v-show="weak">
									 	<li v-for="(item, index) in weakarr" :key="index">
									 		<div class="firea">
									 			<div class="fireb" @dblclick="fnweak2(index)">
									 				<p class="firec" :title="item.weak2">{{item.weak2}}</p>
									 			</div>
									 			<input class="fired" 
									 				v-model="weakarr[index].weak2" 
									 				@blur="changeweak2s(index)" 
									 				v-show="item.changeweak2" 
									 				type="text"
									 			/>
									 			<div class="firee" v-show="!item.changeweak1" @dblclick="fnweak1(index)">
									 				<p class="firec" :title=" item.weak1">: {{ item.weak1 }}</p>
									 			</div>
									 			<input class="firef"
									 				v-model="weakarr[index].weak1"
									 				type="text"
									 				@blur="changeweak1(index)"
									 				v-show="item.changeweak1"
									 			/>
									 			<img src="../../assets/image/lj.png" class="fireg" @click="clearw(index)" alt="">
									 		</div>
									 		</li>
									 		<li class="fireadd">
									 			<span class="fireadd1" @click="establishw()">
									 				<img src="../../assets/image/jjjj.png" alt="" style="width:100%;height:100%;" />
									 			</span>
									 	 </li>
									</ul>
								 <!-- 通用 -->
								 <span class="firexf" @click="fncurr()" :class="{currc:currg,currcs:!currg}">
								   通用
								   <img src="../../assets/image/editx.png" alt="" v-show="currimg" class="firef1">
								   <img src="../../assets/image/edits.png" alt="" v-show="!currimg" class="firef1">
								 </span>
								 <span class="fire-line" v-show="currline"></span>
								 <!-- 创建新的通用的构建名称 -->
								 <ul v-show="curr">
								  	<li v-for="(item, index) in currarr" :key="index">
								  		<div class="firea">
								  			<div class="fireb" @dblclick="fncurr2(index)">
								  				<p class="firec" :title="item.curr2">{{item.curr2}}</p>
								  			</div>
								  			<input class="fired" 
								  				v-model="currarr[index].curr2" 
								  				@blur="changecurr2s(index)" 
								  				v-show="item.changecurr2" 
								  				type="text"
								  			/>
								  			<div class="firee" v-show="!item.changecurr1" @dblclick="fncurr1(index)">
								  				<p class="firec" :title=" item.curr1">: {{ item.curr1 }}</p>
								  			</div>
								  			<input class="firef"
								  				v-model="currarr[index].curr1"
								  				type="text"
								  				@blur="changecurr1(index)"
								  				v-show="item.changecurr1"
								  			/>
								  			<img src="../../assets/image/lj.png" class="fireg" @click="clearc(index)" alt="">
								  		</div>
								  		</li>
								  		<li class="fireadd">
								  			<span class="fireadd1" @click="establishc()">
								  				<img src="../../assets/image/jjjj.png" alt="" style="width:100%;height:100%;" />
								  			</span>
								  	 </li>
								 </ul>
								 <!-- 其他 -->
								 <span class="firexf" @click="fnelse()" :class="{elsec:elseg,elsecs:!elseg}">
								   其他
								   <img src="../../assets/image/editx.png" alt="" v-show="elseimg" class="firef1">
								   <img src="../../assets/image/edits.png" alt="" v-show="!elseimg" class="firef1">
								 </span>
								 <span class="fire-line" v-show="elseline"></span>
								 <!-- 创建新的其他的构建名称 -->
								 <ul v-show="else1s">
								  	<li v-for="(item, index) in elsearr" :key="index">
								  		<div class="firea">
								  			<div class="fireb" @dblclick="fnelse2(index)">
								  				<p class="firec" :title="item.else2">{{item.else2}}</p>
								  			</div>
								  			<input class="fired" 
								  				v-model="elsearr[index].else2" 
								  				@blur="changeelse2s(index)" 
								  				v-show="item.changeelse2" 
								  				type="text"
								  			/>
								  			<div class="firee" v-show="!item.changeelse1" @dblclick="fnelse1(index)">
								  				<p class="firec" :title=" item.else1">: {{ item.else1 }}</p>
								  			</div>
								  			<input class="firef"
								  				v-model="elsearr[index].else1"
								  				type="text"
								  				@blur="changeelse1(index)"
								  				v-show="item.changeelse1"
								  			/>
								  			<img src="../../assets/image/lj.png" class="fireg" @click="clears(index)" alt="">
								  		</div>
								  		</li>
								  		<li class="fireadd">
								  			<span class="fireadd1" @click="establishs()">
								  				<img src="../../assets/image/jjjj.png" alt="" style="width:100%;height:100%;" />
								  			</span>
								  	 </li>
								 </ul>
							</div>
						</div>
						<!-- 材质 -->
						<div style="cursor:pointer;">
							<div class="caizhi" @click="cztitle">
								<span class="czimg"><img :src="caizhitu" alt="" style="width:100%;height:100%;" /></span>
								<i style="font-style:normal;font-size:0.5625rem;font-weight:400;color:#FFFFFF;display:inline-block;line-height:0.9375rem;float:left;margin-left:0.1rem;" :style="cztit">材质</i>
							</div>
							<!-- 材质展开 -->
							<div v-show="czzhankai">
								<div style="width:6.86rem;height:26.8125rem;overflow:hidden;">
									<ul style="width:7.975rem;height:26.675rem;overflow:auto;" ref="ele">
										<li v-for="(item, index) in material" :key="index" class="obj1" @click="fnedit(index)">
						           <img src="../../assets/image/u91_02.png" alt="" style="width:6.875rem;height:5.53125rem;">
					             <ul class="edit-ritopen" :class="{ editopens:index==iseditopens}">
												 <li class="edit-ri edit-ri1"></li>
												 <li class="edit-ri edit-ri2"></li>
												 <li class="edit-ri edit-ri3"></li>
												 <li class="edit-ri edit-ri4"></li>
												 <li class="edit-ri edit-ri5"></li>
												 <li class="edit-ri edit-ri6"></li>
											 </ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<!-- 材质结束 -->
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			// cexiaoshi: true
			firearr:[],//消防的构建名称数组
			electarr:[],//强电的构建名称数组
			draarr:[],//给排水的构建名称数组 
			weakarr:[],//给弱电的构建名称数组 
			currarr:[],//给通用的构建名称数组 
			elsearr:[],//给其他的构建名称数组 
			xinxitu: require('../../assets/image/xx.png'),
			xinxitit: 'color:#FFFFFF',
			caizhitu: require('../../assets/image/caizhi.png'),
			cztit: 'color:#FFFFFF',
			// 信息展开的控制
			xinxizhanshi: false,
			czzhankai: false,
			// wall11:localStorage.getItem('wallss1') || '50cm',
			wall1: true,
			// walls1:false
			//材质循环
			material:[0,0,0,0,0,0],
			// 材质盘的显隐
	   iseditopens:-1,
		 //消防里边的内容,线,上下翻图标
		 fire:false,
		 fireline:false,
		 fireimg:true,
		 firt:true,
		 //强电里边的内容,线,上下翻图标
		 elect:false,
		 electline:false,
		 electimg:true,
		 elecg:true,
		 //给排水里边的内容,线,上下翻图标
		 dra:false,
		 draline:false,
		 draimg:true,
		 drag:true,
		 //给弱电里边的内容,线,上下翻图标
		 weak:false,
		 weakline:false,
		 weakimg:true,
		 weakg:true,
		 //给通用里边的内容,线,上下翻图标 
		 curr:false,
		 currline:false,
		 currimg:true,
		 currg:true,
		 //给其他里边的内容,线,上下翻图标
		 else1s:false,
		 elseline:false,
		 elseimg:true,
		 elseg:true
		};
	},
	created() {
    //消防
		this.firearr = localStorage .getItem('fires')
			? JSON.parse(localStorage .getItem('fires'))
			: [{fire1:"尺寸",fire2:'构件名称',changefire1: false ,changefire2:false}, { fire1:"尺寸",fire2:'构件名称', changefire1: false ,changefire2:false}, 
			{fire1:"尺寸",fire2:'构件名称',changefire1: false,changefire2:false }, { fire1:"尺寸",fire2:'构件名称',changefire1: false,changefire2:false }];	
		//强电
		this.electarr = localStorage .getItem('elects')
			? JSON.parse(localStorage .getItem('elects'))
			: [{elect1:"尺寸",elect2:'构件名称',changeelect1: false ,changeelect2:false}, { elect1:"尺寸",elect2:'构件名称', changeelect1: false ,changeelect2:false}, 
			{elect1:"尺寸",elect2:'构件名称',changeelect1: false,changeelect2:false }, { elect1:"尺寸",elect2:'构件名称',changeelect1: false,changeelect2:false }];	
		//给排水
		this.draarr = localStorage .getItem('dras')
			? JSON.parse(localStorage .getItem('dras'))
			: [{dra1:"尺寸",dra2:'构件名称',changedra1: false ,changedra2:false}, { dra1:"尺寸",dra2:'构件名称', changedra1: false ,changedra2:false}, 
			{dra1:"尺寸",dra2:'构件名称',changedra1: false,changedra2:false }, { dra1:"尺寸",dra2:'构件名称',changedra1: false,changedra2:false }];	
		//弱电
		this.weakarr = localStorage .getItem('weaks')
			? JSON.parse(localStorage .getItem('weaks'))
			: [{weak1:"尺寸",weak2:'构件名称',changeweak1: false ,changeweak2:false}, {weak1:"尺寸",weak2:'构件名称', changeweak1: false ,changeweak2:false}, 
			{weak1:"尺寸",weak2:'构件名称',changeweak1: false,changeweak2:false }, {weak1:"尺寸",weak2:'构件名称',changeweak1: false,changeweak2:false }];	
		//通用
		this.currarr = localStorage .getItem('currs')
			? JSON.parse(localStorage .getItem('currs'))
			: [{curr1:"尺寸",curr2:'构件名称',changecurr1: false ,changecurr2:false}, {curr1:"尺寸",curr2:'构件名称', changecurr1: false ,changecurr2:false}, 
			{curr1:"尺寸",curr2:'构件名称',changecurr1: false,changecurr2:false }, {curr1:"尺寸",curr2:'构件名称',changecurr1: false,changecurr2:false }];	
		//其他
		this.elsearr = localStorage .getItem('elses')
			? JSON.parse(localStorage .getItem('elses'))
			: [{else1:"尺寸",else2:'构件名称',changeelse1: false ,changeelse2:false}, {else1:"尺寸",else2:'构件名称', changeelse1: false ,changeelse2:false}, 
			{else1:"尺寸",else2:'构件名称',changeelse1: false,changeelse2:false }, {else1:"尺寸",else2:'构件名称',changeelse1: false,changeelse2:false }];	
		// 隐藏建筑结构,管线模型,设备监控
		this.$eventbus.$on('ceyin', () => {
			this.cexiaoshi = false;
		});
		// 显示建筑结构,管线模型,设备监控
		this.$eventbus.$on('ceyindj', ite => {
			if(ite == "bianji"){
				this.ceyinxx = true;
				this.cexiaoshi = false;
				}
				if(ite == "xinjianmoxin"){
					this.cexiaoshi = true;
						this.ceyinxx = false;
				}
				if(ite == "jianzhumoxin"){
					this.cexiaoshi = true;
						this.ceyinxx = false;
				}
		});
		// 显示信息与材质
		this.$eventbus.$on('ceyinxxs', () => {
			this.ceyinxx = true;
		});
		// 获取存储的值
		localStorage.getItem('wallss1');
		//材质循环
		// this.material.push(0);
	},
	mounted() {
		 
	},
	methods: {
		ce1() {
			this.$router.push('/Login');
		},
		//点击消防事件
		fnfire(){ 
			this.firt = !this.firt;
			this.elecg = true;
			this.drag = true;
			this.weakg = true;
			this.currg = true;
			this.elseg = true;
			this.fire = !this.fire;
			this.fireline = !this.fireline;
			this.fireimg = !this.fireimg;
			this.elect = false;
			this.electline = false;
			this.electimg = true;
			this.dra = false;
			this.draline = false;
			this.draimg = true;
			this.weak = false;
			this.weakline = false;
			this.weakimg = true;
			this.curr = false;
			this.currline = false;
			this.currimg = true;
			this.else1s = false;
			this.elseline = false;
			this.elseimg = true
		},
		//点击强电
		fnelect(){
			this.elecg = !this.elecg;
			this.firt = true;
			this.drag = true;
		  this.weakg = true;
			this.currg = true;
			this.elseg = true;
			this.fire = false;
			this.fireline = false;
			this.fireimg = true;
			this.elect = !this.elect;
			this.electline = !this.electline;
			this.electimg = !this.electimg;
			this.dra = false;
			this.draline = false;
			this.draimg = true;
			this.weak = false;
			this.weakline = false;
			this.weakimg = true;
			this.curr = false;
			this.currline = false;
			this.currimg = true;
			this.else1s = false;
			this.elseline = false;
			this.elseimg = true
		},
		//点击给排水
		fndra(){		
			this.drag = !this.drag;
			this.firt = true;
			this.elecg = true;
			this.weakg = true;
			this.currg = true;
			this.elseg = true;
			this.fire = false;
			this.fireline = false;
			this.fireimg = true;
			this.elect = false;
			this.electline = false;
			this.electimg = true;
		  this.dra = !this.dra;
		  this.draline = !this.draline;
		  this.draimg = !this.draimg;
			this.weak = false;
			this.weakline = false;
			this.weakimg = true;
			this.curr = false;
			this.currline = false;
			this.currimg = true;
			this.else1s = false;
			this.elseline = false;
			this.elseimg = true
		},
		//点击弱电
		fnweak(){
			this.weakg = !this.weakg;
			this.firt = true;
			this.elecg = true;
			this.drag = true;
			this.currg = true;
			this.elseg = true;
			this.fire = false;
			this.fireline = false;
			this.fireimg = true;
			this.elect = false;
			this.electline = false;
			this.electimg = true;
			this.dra = false;
			this.draline = false;
			this.draimg = true;
			this.weak = !this.weak;
			this.weakline = !this.weakline;
			this.weakimg = !this.weakimg;
			this.curr = false;
			this.currline = false;
			this.currimg = true;
			this.else1s = false;
			this.elseline = false;
			this.elseimg = true
		},
		//点击通用
		fncurr(){
			this.currg = !this.currg;
			this.firt = true;
			this.elecg = true;
			this.drag = true;
			this.weakg = true;
			this.elseg = true;
			this.fire = false;
			this.fireline = false;
			this.fireimg = true;
			this.elect = false;
			this.electline = false;
			this.electimg = true;
			this.dra = false;
			this.draline = false;
			this.draimg = true;
			this.weak = false;
			this.weakline = false;
			this.weakimg = true;
			this.curr = !this.curr;
			this.currline = !this.currline;
			this.currimg = !this.currimg
			this.else1s = false;
			this.elseline = false;
			this.elseimg = true
		},
		//点击其他
		fnelse(){
			this.elseg = !this.elseg;
			this.currg = true;
			this.firt = true;
			this.elecg = true;
			this.drag = true;
			this.weakg = true;
			this.fire = false;
			this.fireline = false;
			this.fireimg = true;
			this.elect = false;
			this.electline = false;
			this.electimg = true;
			this.dra = false;
			this.draline = false;
			this.draimg = true;
			this.weak = false;
			this.weakline = false;
			this.weakimg = true;
			this.curr = false;
			this.currline = false;
			this.currimg = true;
			this.else1s = !this.else1s;
			this.elseline = !this.elseline;
			this.elseimg = !this.elseimg
		},
		//双击消防构建
		fnfire2(index){
			this.$set(this.firearr[index], 'changefire2', true);
		},
		//双击强电构建
		fnelect2(index){
		 this.$set(this.electarr[index], 'changeelect2', true);
		},
		//双击给排水构建
		fndra2(index){
		 this.$set(this.draarr[index], 'changedra2', true);
		},
		//双击弱电构建
		fnweak2(index){
		 this.$set(this.weakarr[index], 'changeweak2', true);
		},
		//双击通用构建
		fncurr2(index){
		 this.$set(this.currarr[index], 'changecurr2', true);
		},
		//双击其他构建
		fnelse2(index){
		 this.$set(this.elsearr[index], 'changeelse2', true);
		},
		//消防构建失焦事件
		changefire2s(index){
			this.$set(this.firearr[index],'changefire2',false);
			localStorage.setItem('fires',JSON.stringify(this.firearr))
		},
		//强电构建失焦事件
		changeelect2s(index){
			this.$set(this.electarr[index],'changeelect2',false);
			localStorage.setItem('elects',JSON.stringify(this.electarr))
		},
		//给排水构建失焦事件
		changedra2s(index){
			this.$set(this.draarr[index],'changedra2',false);
			localStorage.setItem('dras',JSON.stringify(this.draarr))
		},
		//给弱电构建失焦事件
		changeweak2s(index){
			this.$set(this.weakarr[index],'changeweak2',false);
			localStorage.setItem('weaks',JSON.stringify(this.weakarr))
		},
		//给通用构建失焦事件
		changecurr2s(index){
			this.$set(this.currarr[index],'changecurr2',false);
			localStorage.setItem('currs',JSON.stringify(this.currarr))
		},
		//给其他构建失焦事件
		changeelse2s(index){
			this.$set(this.elsearr[index],'changeelse2',false);
			localStorage.setItem('elses',JSON.stringify(this.elsearr))
		},
		//双击消防数字
		fnfire1(index){
			this.$set(this.firearr[index],'changefire1',true)
		},
		//双击强电数字
		fnelect1(index){
			this.$set(this.electarr[index],'changeelect1',true)
		},
		//双击给排水数字
		fndra1(index){
			this.$set(this.draarr[index],'changedra1',true)
		},
		//双击弱电数字
		fnweak1(index){
			this.$set(this.weakarr[index],'changeweak1',true)
		},
		//双击通用数字
		fncurr1(index){
			this.$set(this.currarr[index],'changecurr1',true)
		},
		//双击其他数字
		fnelse1(index){
			this.$set(this.elsearr[index],'changeelse1',true)
		},
		// 消防数字失焦事件
		changefire1(index){
			this.$set(this.firearr[index],'changefire1',false);
			localStorage.setItem('fires',JSON.stringify(this.firearr))
		},
		//强电数字失焦事件
		changeelect1(index){
			this.$set(this.electarr[index],'changeelect1',false);
			localStorage.setItem('elects',JSON.stringify(this.electarr))
		},
		//给排水数字失焦事件
		changedra1(index){
			this.$set(this.draarr[index],'changedra1',false);
			localStorage.setItem('dras',JSON.stringify(this.draarr))
		},
		//弱电数字失焦事件
		changeweak1(index){
			this.$set(this.weakarr[index],'changeweak1',false);
			localStorage.setItem('weaks',JSON.stringify(this.weakarr))
		},
		//通用数字失焦事件
		changecurr1(index){
			this.$set(this.currarr[index],'changecurr1',false);
			localStorage.setItem('currs',JSON.stringify(this.currarr))
		},
		//其他数字失焦事件
		changeelse1(index){
			this.$set(this.elsearr[index],'changeelse1',false);
			localStorage.setItem('elses',JSON.stringify(this.elsearr))
		},
		//删除消防
		clearf(index){
			this.firearr.splice(index,1);
			localStorage.setItem('fires',JSON.stringify(this.firearr))
		},
		// 删除强电
		cleare(index){
			this.electarr.splice(index,1);
			localStorage.setItem('elects',JSON.stringify(this.electarr))
		},
		// 删除排给水
		cleard(index){
			this.draarr.splice(index,1);
			localStorage.setItem('dras',JSON.stringify(this.draarr))
		},
		// 删除弱电
		clearw(index){
			this.weakarr.splice(index,1);
			localStorage.setItem('weaks',JSON.stringify(this.weakarr))
		},
		// 删除通用
		clearc(index){
			this.currarr.splice(index,1);
			localStorage.setItem('currs',JSON.stringify(this.currarr))
		},
		// 删除其他
		clears(index){
			this.elsearr.splice(index,1);
			localStorage.setItem('elses',JSON.stringify(this.elsearr))
		},
	  // 点击消防的新建
		establishfire(){
			this.draarr.push({fire1:"尺寸",fire2:'构件名称',changefire1: false,changefire2:false });
			localStorage.setItem('fires',JSON.stringify(this.firearr))
		},
		//点击给排水的新建
	  establishd(){
			this.draarr.push({dra1:"尺寸",dra2:'构件名称',changedra1: false,changedra2:false });
			localStorage.setItem('dras',JSON.stringify(this.draarr))
		},
		//点击强电的新建
		establishe(){
			this.electarr.push({elect1:"尺寸",elect2:'构件名称',changeelect1: false,changeelect2:false });
			localStorage.setItem('elects',JSON.stringify(this.electarr))
		},
		//点击弱电的新建
		establishw(){
			this.weakarr.push({weak1:"尺寸",weak2:'构件名称',changeweak1: false,changeweak2:false });
			localStorage.setItem('weaks',JSON.stringify(this.weakarr))
		},
		//点击通用的新建
		establishc(){
			this.currarr.push({curr1:"尺寸",curr2:'构件名称',changecurr1: false,changecurr2:false });
			localStorage.setItem('currs',JSON.stringify(this.currarr))
		},
		//点击通用的新建
		establishs(){
			this.elsearr.push({else1:"尺寸",else2:'构件名称',changeelse1: false,changeelse2:false });
			localStorage.setItem('elses',JSON.stringify(this.elsearr))
		},
		// 点击信息标题
		xxtitle() {
			this.xinxitu = require('../../assets/image/information.png');
			this.xinxitit = 'color:#2180ED';
			this.caizhitu = require('../../assets/image/caizhi.png');
			this.cztit = 'color:#FFFFFF';
			// 点击信息材质收,信息展开
			this.xinxizhanshi = !this.xinxizhanshi;
			this.czzhankai = false;
		},
		// 点击材质标题
		cztitle() {
			this.caizhitu = require('../../assets/image/czblue.png');
			this.cztit = 'color:#2180ED';
			this.xinxitu = require('../../assets/image/xx.png');
			this.xinxitit = 'color:#FFFFFF';
			//点击材质展,信息收
			(this.czzhankai = !this.czzhankai), 
			(this.xinxizhanshi = false);
		},
		// 点击材质展开的某一个图片
		fnedit(index){
     this.iseditopens = index
		},
	}
};
</script>

<style scoped>
.fir,.elec,.drac,.weakc,.currc,.elsec{
		color:#FFFFFF;
	}
.firs,.elecs,.dracs,.weakcs,.currcs,.elsecs{
	color: #2180ED;
}
.firexf{
	width:5.245rem;
	height:0.625rem;
	font-size:0.5rem;
	display:block;
	/* color:#FFFFFF; */
	text-align:left;
	margin-bottom:0.2rem;
	margin-top:0.38rem;
	margin-left:0.9rem;
	display:flex;
	justify-content:space-between
}
.firef1{
	width:0.41625rem;
	height:0.26rem;
	padding-top:0.26rem
}
.fire-line{
	width:5.375rem;
	margin-left:0.9rem;
	height:0.03125rem‬;
	display:block;
	border-bottom:0.03125rem solid darkgray;
	margin-bottom:0.3rem
}
.firea{
	height:0.825rem;
	margin-bottom:0.25rem;
	position: relative;
	display:flex;
	padding-left:0.6rem;
	text-align:left;
	justify-content:space-around;
	padding-right:0.5rem; 
}
.fireb{
	font-style:normal;
	font-size:0.5rem;
	font-family:Microsoft YaHei;
	font-weight:400;
	color:rgba(255,255,255,1);
	position:relative;
	width:2.38rem;
	height:0.75rem;
	line-height:0.8rem;
}
.firec{
	white-space:nowrap;
	overflow:hidden;
	text-overflow:ellipsis;
	height:0.75rem;
	margin-top:0rem; 
}
.fired{
	width:2.5rem;
	height:0.75rem;
	font-size:0.5rem;
	border:none;
	position:absolute;
	left:0.3rem
}
.firee{
	font-style:normal;
	width:2.075rem;
	height:0.75rem;
	font-size:0.5rem;
	margin-left:-0.4rem;
	position:relative;
	color:#FFFFFF;
	line-height:0.8rem
}
.firef{
	width:2.03125rem;
	height:0.75rem;
	font-size:0.5rem;
	border:none;
	margin-left:-0.33rem
}
.fireg{
	width:0.40625rem;
	height:0.5rem;
	padding-bottom:0.3125rem;
	padding-top:0.2rem;
}
.fireadd{
	width:5.75rem;
	height:0.98125rem
}
.fireadd1{
	 display:inline-block;
	 width:0.65625rem;
	 height:0.71875rem;
	 float:right
}
	/* 材质展开中的li */
.obj1 {
	width:6.875rem;
	height:5.53125rem;
	/* background-color: red; */
	margin-top:0.46875rem;
	position:relative;
	overflow: hidden;
}
  .edit-ri1:after{
	position:absolute;
	left:-5.7rem;
	top:0;
	display: block;
	width:5.71rem;
	height: 100%;
	background-color: rgba(255,0,0, 0.3);
	content: attr(data-text);
	transition:all 1s ease;
	transform: translateY(-100%);
	}
	.edit-ri1:hover:after{
		 transform: translateY(0);
		}
	.edit-ri2:after{
		position:absolute;
		left:-5.7rem;
		top:0;
		display: block;
		width:5.71rem;
		height: 100%;
		background-color: rgba(255,153,18, 0.3);
		content: attr(data-text);
		transition:all 1s ease;
		transform: translateY(-100%);
   }
	.edit-ri2:hover:after{
		transform: translateY(0);
	}
	.edit-ri3:after{
		position:absolute;
		left:-5.7rem;
		top:0;
		display: block;
		width:5.71rem;
		height: 100%;
		background-color: rgba(255,255,0,0.3);
		content: attr(data-text);
		transition:all 1s ease;
		transform: translateY(-100%);
	 }
	.edit-ri3:hover:after{
		transform: translateY(0);
	}
	.edit-ri4:after{
		position:absolute;
		left:-5.7rem;
		top:0;
		display: block;
		width:5.71rem;
		height: 100%;
		background-color: rgba(34,139,34,0.3);
		content: attr(data-text);
		transition:all 1s ease;
		transform: translateY(-100%);
	 }
	.edit-ri4:hover:after{
		transform: translateY(0);
	}
	.edit-ri5:after{
		position:absolute;
		left:-5.7rem;
		top:0;
		display: block;
		width:5.71rem;
		height: 100%;
		background-color: rgba(64,224,205,0.3);
		content: attr(data-text);
		transition:all 1s ease;
		transform: translateY(-100%);
	 }
	.edit-ri5:hover:after{
		transform: translateY(0);
	}
	.edit-ri6:after{
		position:absolute;
		left:-5.7rem;
		top:0;
		display: block;
		width:5.71rem;
		height: 100%;
		background-color: rgba(0,0,255,0.3);
		content: attr(data-text);
		transition:all 1s ease;
		transform: translateY(-100%);
	 }
	.edit-ri6:hover:after{
		transform: translateY(0);
	}
/* 材质展开中的材质颜色盘 */
.edit-ritopen{
	width:1.2rem;
	height:5.53125rem;
	background:rgba(225,225,225,.6);
	position:absolute;
	top:0rem;
	right:0rem;
	z-index:50;
	display:none;
}
.editopens{
	display:block;
}
/* 具体某一个 */
.edit-ri{
	width:1.2rem;
	height:0.922rem;
}
.edit-ri1{
	background: #FF0000;
}
.edit-ri2{
	background:#FF8C00;
}
.edit-ri3{
	background:#FFFF00;
}
.edit-ri4{
	background:#228B22;
}
.edit-ri5{
	background:#00B2EE;
}
.edit-ri6{
	background:#0000FF;
}
/* .logoxnedit {
	width:6.78125rem;
	height:3.625rem;
} */
.xunitopeditg {
	width:6.875rem;
	height:33.75rem;
	background: url(../../assets/image/homecebian8@2x.png) no-repeat;
	position: absolute;
	top: 0px;
	background-size: 6.875rem 33.75rem;
	padding-top: 0px;
}
.ce1editg {
	width: 4.08125rem;
	height:1.2rem;
	background: url(../../assets/image/logotop@2x.png) no-repeat;
	background-size:3.65625rem 0.875rem;
	position: absolute;
	top:0.90625rem;
	left: 1.875rem;
}
.ceseditg {
	width:6.15625rem;
	height:0.0625rem;
	background: url(../../assets/image/fgx.png) no-repeat;
	background-size:6.15625rem 0.09375rem;
	position: absolute;
	top:2.5rem;
	right:0.3125rem;
	left:0.3125rem;
}
ul,ol,li{
	list-style:none;
  margin:0;padding:0
}
/* 材质 */
.caizhi {
  height:0.9375rem;
	/* background:plum; */
	margin-bottom: 0.16625rem;
}
.czimg {
	width:0.625rem;
	height:0.625rem;
	display:inline-block;
	float:left;
	line-height:0.9375rem;
	margin-left:2rem;
}
</style>
