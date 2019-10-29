<template>
	<div>
		<div class="logoxnedit">
			<div class="xunitopsedit">
				<div class="xunitopedit">
					<!-- 虚拟建造的图标 -->
					<div class="ce1edit" @click="ce1"></div>
					<!-- 线条 -->
					<div class="cesedit"></div>
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
								<span style="width:5.245rem;height:0.625rem;font-size:0.5rem;display:block;color:#FFFFFF;text-align:left;
								margin-bottom:0.2rem;margin-top:0.38rem;margin-left:0.9rem;display:flex;justify-content: space-between;" @click="fnground()">
								地面<img src="../../assets/image/editx.png" alt="" v-show="groundimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
								<img src="../../assets/image/edits.png" alt="" v-show="!groundimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
								</span>
								<!--地面的line -->
								<span style="width:5.375rem;margin-left:0.9rem;height:0.03125rem‬;display:block;border-bottom:0.03125rem solid darkgray;margin-bottom:0.25rem;" v-show="groline">
								</span>
								<!-- 创建新的地面的厚度 -->
									<ul v-show="ground">
										<li v-for="(item, index) in newjian" :key="index">
											<div style="height:0.825rem;
											margin-bottom:0.25rem;
											position: relative;
											display:flex;
											padding-left:0.6rem;
											text-align:left;
											justify-content:space-around;
											padding-right:0.5rem;
											">
													<!-- item.change 代表input-->
													<!-- <i style="font-style: normal;color:rgba(225,225,225,1);font-weight:400;float:left;font-size:0.5rem;display:inline-block;"> -->
														<div
														@dblclick="fnwall2(index)"
														style="font-style:normal;display:inline-block;font-size:0.5rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(255,255,255,1);
														position:relative;width:2.38rem;height:0.75rem;line-height:0.8rem;"
														><p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.msgs">{{item.msgs}}</p>
														</div>
														<input 
														v-model="newjian[index].msgs"
														@blur="changewall2(index)"
														v-show="item.changes"
														type="text"
														style="width:2.5rem;height:0.75rem;font-size:0.5rem;border:none;position:absolute;left:0.3rem;"
														/>
														<div v-show="!item.change" @dblclick="fnwall1(index)" style="font-style:normal;display:inline-block;width:2.075rem;height:0.75rem;
														font-size:0.5rem;padding-top:0.2rem;margin-left:-0.4rem;position:relative;color:#FFFFFF;">
														<p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.msg">: {{ item.msg }}</p>
													</div>
														<input
															v-model="newjian[index].msg"
															type="text"
															@blur="changewall1(index)"
															v-show="item.change"
															style="width:2.03125rem;height:0.75rem;font-size:0.5rem;border:none;margin-left:-0.33rem;"
														/>
													</i>
													<img src="../../assets/image/lj.png" style="width:0.40625rem;height:0.5rem;padding-bottom:0.3125rem;padding-top:0.2rem;" @click="clear1(index)" alt="">
											</div>
										</li>
										<li style="width:6.2rem;height:0.98125rem;">
											<span style="display:inline-block;width:0.60625rem;height:0.61875rem;float:right;" @click="establish()">
												<img src="../../assets/image/add.png" alt="" style="width:100%;height:100%;" />
											</span>
										</li>
									</ul>
									<!-- 墙面metope -->
									<span style="width:5.245rem;height:0.625rem;font-size:0.5rem;display:block;color:#FFFFFF;text-align:left;
									margin-bottom:0.3rem;margin-top:0.38rem;margin-left:0.9rem;display:flex;justify-content: space-between;" @click="fnmetope()">
									墙面<img src="../../assets/image/editx.png" alt="" v-show="metopeimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
									<img src="../../assets/image/edits.png" alt="" v-show="!metopeimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
									</span>
									<!-- 墙面下边的line -->
									<span style="width:5.375rem;margin-left:0.9rem;height:0.03125rem‬;display:block;border-bottom:0.03125rem solid darkgray;margin-bottom:0.3rem;" v-show="metline"></span>
									<!-- 创建新的墙面的厚度 -->
										<ul v-show="metope">
											<li v-for="(item, index) in metarr" :key="index">
												<div style="height:0.825rem;margin-bottom:0.25rem;position: relative;display:flex;padding-left:0.6rem;text-align:left;
												justify-content:space-around;padding-right:0.5rem;"
											>
																<div
																@dblclick="fnmet1(index)"
																style="font-style:normal;display:inline-block;font-size:0.5rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(255,255,255,1);
																position:relative;width:2.38rem;height:0.75rem;line-height:0.8rem;text-overflow:ellipsis;"
																><p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.metopes">{{item.metopes}}</p></div>
																<input 
																v-model="metarr[index].metopes"
																@blur="changemet1(index)"
																v-show="item.changemetope1"
																type="text"
																style="width:2.5rem;height:0.75rem;font-size:0.5rem;border:none;position:absolute;left:0.3rem;"
																/>
																<div v-show="!item.changemetope2" @dblclick="fnmet2(index)" style="font-style:normal;display:inline-block;width:2.075rem;height:0.75rem;
																font-size:0.5rem;padding-top:0.2rem;margin-left:-0.4rem;position:relative;color:#FFFFFF;">
																<p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.msgmet">: {{ item.msgmet }}</p>
																</div>
																<input
																	v-model="metarr[index].msgmet"
																	type="text"
																	@blur="changemet2(index)"
																	v-show="item.changemetope2"
																	style="width:2.03125rem;height:0.75rem;font-size:0.5rem;border:none;margin-left:-0.33rem;"
																/>
														</i>
														<img src="../../assets/image/lj.png" style="width:0.40625rem;height:0.5rem;padding-bottom:0.3125rem;padding-top:0.2rem;" @click="clear2(index)" alt="">
												</div>
											</li>
											<li style="width:6.2rem;height:0.98125rem;">
												<span style="display:inline-block;width:0.60625rem;height:0.61875rem;float:right;" @click="establishmetop()">
													<img src="../../assets/image/add.png" alt="" style="width:100%;height:100%;" />
												</span>
											</li>
										</ul>
										<!-- 天棚metope -->
										<span style="width:5.245rem;height:0.625rem;font-size:0.5rem;display:block;color:#FFFFFF;text-align:left;
										margin-bottom:0.3rem;margin-top:0.38rem;margin-left:0.9rem;display:flex;justify-content: space-between;" @click="fnceil()">
										天棚<img src="../../assets/image/editx.png" alt="" v-show="ceiimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
										<img src="../../assets/image/edits.png" alt="" v-show="!ceiimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
										</span>
										<!-- 天棚下边的line -->
										<span style="width:5.375rem;margin-left:0.9rem;height:0.03125rem‬;display:block;border-bottom:0.03125rem solid darkgray;margin-bottom:0.3rem;" v-show="ceiline"></span>
										<!-- 创建新的天棚的厚度 -->
											<ul v-show="ceiling">
												<li v-for="(item, index) in ceiarr" :key="index">
													<div style="height:0.825rem;margin-bottom:0.25rem;position: relative;display:flex;padding-left:0.6rem;text-align:left;
													justify-content:space-around;padding-right:0.5rem;"
												>
												     <div
																	@dblclick="fncei1(index)"
																	style="font-style:normal;display:inline-block;font-size:0.5rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(255,255,255,1);
																	position:relative;width:2.38rem;height:0.75rem;line-height:0.8rem;text-overflow:ellipsis;"
																	><p style="white-space: nowrap; overflow:hidden;text-overflow: ellipsis;" :title="item.ceis1">{{item.ceis1}}</p></div>
																	<input 
																	v-model="ceiarr[index].ceis1"
																	@blur="changecei1(index)"
																	v-show="item.changecei1"
																	type="text"
																	style="width:2.5rem;height:0.75rem;font-size:0.5rem;border:none;position:absolute;left:0.3rem;"
																	/>
																	<div v-show="!item.changecei2" @dblclick="fncei2(index)" style="font-style:normal;display:inline-block;width:2.075rem;height:0.75rem;
																	font-size:0.5rem;padding-top:0.2rem;margin-left:-0.4rem;position:relative;color:#FFFFFF;">
																	<p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.ceis2">: {{item.ceis2}}</p>
																	</div>
																	<input
																		v-model="ceiarr[index].ceis2"
																		type="text"
																		@blur="changecei2(index)"
																		v-show="item.changecei2"
																		style="width:2.03125rem;height:0.75rem;font-size:0.5rem;border:none;margin-left:-0.33rem;"
																	/>
															</i>
															<img src="../../assets/image/lj.png" style="width:0.40625rem;height:0.5rem;padding-bottom:0.3125rem;padding-top:0.2rem;" @click="clear3(index)" alt="">
													</div>
												</li>
												<li style="width:6.2rem;height:0.98125rem;">
													<span style="display:inline-block;width:0.60625rem;height:0.61875rem;float:right;" @click="establishcei()">
														<img src="../../assets/image/add.png" alt="" style="width:100%;height:100%;" />
													</span>
												</li>
											</ul>
											<!-- 门窗 -->
											<span style="width:5.245rem;height:0.625rem;font-size:0.5rem;display:block;color:#FFFFFF;text-align:left;
											margin-bottom:0.3rem;margin-top:0.38rem;margin-left:0.9rem;display:flex;justify-content: space-between;" @click="fndoor()">
											门窗<img src="../../assets/image/editx.png" alt="" v-show="doorimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
											<img src="../../assets/image/edits.png" alt="" v-show="!doorimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
											</span>
											<!-- 门窗下边的line -->
											<span style="width:5.375rem;margin-left:0.9rem;height:0.03125rem‬;display:block;border-bottom:0.03125rem solid darkgray;margin-bottom:0.3rem;" v-show="doorline"></span>
											<!-- 创建新的门窗的厚度 -->
												<ul v-show="doors">
													<li v-for="(item, index) in doorarr" :key="index">
														<div style="height:0.825rem;margin-bottom:0.25rem;position: relative;display:flex;padding-left:0.6rem;text-align:left;
														justify-content:space-around;padding-right:0.5rem;"
													>
													     <div
																		@dblclick="fndoor1(index)"
																		style="font-style:normal;display:inline-block;font-size:0.5rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(255,255,255,1);
																		position:relative;width:2.38rem;height:0.75rem;line-height:0.8rem;text-overflow:ellipsis;"
																		><p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.door1">{{item.door1}}</p></div>
																		<input 
																		v-model="doorarr[index].door1"
																		@blur="changedoor1(index)"
																		v-show="item.changedoor1"
																		type="text"
																		style="width:2.5rem;height:0.75rem;font-size:0.5rem;border:none;position:absolute;left:0.3rem;"
																		/>
																		<div v-show="!item.changedoor2" @dblclick="fndoor2(index)" style="font-style:normal;display:inline-block;width:2.075rem;height:0.75rem;
																		font-size:0.5rem;padding-top:0.2rem;margin-left:-0.4rem;position:relative;color:#FFFFFF;">
																		<p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.door2">: {{item.door2}}</p>
																		</div>
																		<input
																			v-model="doorarr[index].door2"
																			type="text"
																			@blur="changedoor2(index)"
																			v-show="item.changedoor2"
																			style="width:2.03125rem;height:0.75rem;font-size:0.5rem;border:none;margin-left:-0.33rem;"
																		/>
																</i>
																<img src="../../assets/image/lj.png" style="width:0.40625rem;height:0.5rem;padding-bottom:0.3125rem;padding-top:0.2rem;" @click="clear4(index)" alt="">
														</div>
													</li>
													<li style="width:6.2rem;height:0.98125rem;">
														<span style="display:inline-block;width:0.60625rem;height:0.61875rem;float:right;" @click="establishdoor()">
															<img src="../../assets/image/add.png" alt="" style="width:100%;height:100%;" />
														</span>
													</li>
										</ul>
								<!-- 结构 -->
								<span style="width:5.245rem;height:0.625rem;font-size:0.5rem;display:block;color:#FFFFFF;text-align:left;
								margin-bottom:0.3rem;margin-top:0.38rem;margin-left:0.9rem;display:flex;justify-content: space-between;" @click="fnstr()">
								结构<img src="../../assets/image/editx.png" alt="" v-show="strimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
								<img src="../../assets/image/edits.png" alt="" v-show="!strimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
								</span>
								<!-- 结构下边的line -->
								<span style="width:5.375rem;margin-left:0.9rem;height:0.03125rem‬;display:block;border-bottom:0.03125rem solid darkgray;margin-bottom:0.3rem;" v-show="strline"></span>
								<!-- 创建新的结构的厚度 -->
									<ul v-show="strs">
										<li v-for="(item, index) in strarr" :key="index">
											<div style="height:0.825rem;margin-bottom:0.25rem;position: relative;display:flex;padding-left:0.6rem;text-align:left;
											justify-content:space-around;padding-right:0.5rem;"
										>
										     <div
															@dblclick="fnstr1(index)"
															style="font-style:normal;display:inline-block;font-size:0.5rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(255,255,255,1);
															position:relative;width:2.38rem;height:0.75rem;line-height:0.8rem;text-overflow:ellipsis;"
															><p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.str1">{{item.str1}}</p></div>
															<input 
															v-model="strarr[index].str1"
															@blur="changestr1(index)"
															v-show="item.changestr1"
															type="text"
															style="width:2.5rem;height:0.75rem;font-size:0.5rem;border:none;position:absolute;left:0.3rem;"
															/>
															<div v-show="!item.changestr2" @dblclick="fnstr2(index)" style="font-style:normal;display:inline-block;width:2.075rem;height:0.75rem;
															font-size:0.5rem;padding-top:0.2rem;margin-left:-0.4rem;position:relative;color:#FFFFFF;">
															<p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.str2">: {{item.str2}}</p>
															</div>
															<input
																v-model="strarr[index].str2"
																type="text"
																@blur="changestrs2(index)"
																v-show="item.changestr2"
																style="width:2.03125rem;height:0.75rem;font-size:0.5rem;border:none;margin-left:-0.33rem;"
															/>
													</i>
													<img src="../../assets/image/lj.png" style="width:0.40625rem;height:0.5rem;padding-bottom:0.3125rem;padding-top:0.2rem;" @click="clear5(index)" alt="">
											</div>
										</li>
										<li style="width:6.2rem;height:0.98125rem;">
											<span style="display:inline-block;width:0.60625rem;height:0.61875rem;float:right;" @click="establishstr()">
												<img src="../../assets/image/add.png" alt="" style="width:100%;height:100%;" />
											</span>
										</li>
									</ul>
								<!-- 室外 -->
								<span style="width:5.245rem;height:0.625rem;font-size:0.5rem;display:block;color:#FFFFFF;text-align:left;
								margin-bottom:0.3rem;margin-top:0.38rem;margin-left:0.9rem;display:flex;justify-content: space-between;" @click="fnoutdoor()">
								室外<img src="../../assets/image/editx.png" alt="" v-show="outdoorimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
								<img src="../../assets/image/edits.png" alt="" v-show="!outdoorimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
								</span>
								<!-- 结构下边的line -->
								<span style="width:5.375rem;margin-left:0.9rem;height:0.03125rem‬;display:block;border-bottom:0.03125rem solid darkgray;margin-bottom:0.3rem;" v-show="outdoorline"></span>
								<!-- 创建新的结构的厚度 -->
									<ul v-show="outdoor">
										<li v-for="(item, index) in outdoorarr" :key="index">
											<div style="height:0.825rem;margin-bottom:0.25rem;position: relative;display:flex;padding-left:0.6rem;text-align:left;
											justify-content:space-around;padding-right:0.5rem;"
										>
										     <div
															@dblclick="fnoutdoor1(index)"
															style="font-style:normal;display:inline-block;font-size:0.5rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(255,255,255,1);
															position:relative;width:2.38rem;height:0.75rem;line-height:0.8rem;text-overflow:ellipsis;"
															><p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.outdoor1">{{item.outdoor1}}</p></div>
															<input 
															v-model="outdoorarr[index].outdoor1"
															@blur="changeoutdoor1(index)"
															v-show="item.changeoutdoor1"
															type="text"
															style="width:2.5rem;height:0.75rem;font-size:0.5rem;border:none;position:absolute;left:0.3rem;"
															/>
															<div v-show="!item.changeoutdoor2" @dblclick="fnoutdoor2(index)" style="font-style:normal;display:inline-block;width:2.075rem;height:0.75rem;
															font-size:0.5rem;padding-top:0.2rem;margin-left:-0.4rem;position:relative;color:#FFFFFF;">
															<p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.outdoor2">: {{item.outdoor2}}</p>
															</div>
															<input
																v-model="outdoorarr[index].outdoor2"
																type="text"
																@blur="changeoutdoor2(index)"
																v-show="item.changeoutdoor2"
																style="width:2.03125rem;height:0.75rem;font-size:0.5rem;border:none;margin-left:-0.33rem;"
															/>
													</i>
													<img src="../../assets/image/lj.png" style="width:0.40625rem;height:0.5rem;padding-bottom:0.3125rem;padding-top:0.2rem;" @click="clear6(index)" alt="">
											</div>
										</li>
										<li style="width:6.2rem;height:0.98125rem;">
											<span style="display:inline-block;width:0.60625rem;height:0.61875rem;float:right;" @click="establishoutdor()">
												<img src="../../assets/image/add.png" alt="" style="width:100%;height:100%;" />
											</span>
										</li>
									</ul>
							<!-- 其他 -->
							<span style="width:5.245rem;height:0.625rem;font-size:0.5rem;display:block;color:#FFFFFF;text-align:left;
							margin-bottom:0.3rem;margin-top:0.38rem;margin-left:0.9rem;display:flex;justify-content: space-between;" @click="fnother()">
							其他<img src="../../assets/image/editx.png" alt="" v-show="otherimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
							<img src="../../assets/image/edits.png" alt="" v-show="!otherimg" style="width:0.41625rem;height:0.26rem;padding-top:0.26rem;">
							</span>
							<!-- 结构下边的line -->
							<span style="width:5.375rem;margin-left:0.9rem;height:0.03125rem‬;display:block;border-bottom:0.03125rem solid darkgray;margin-bottom:0.3rem;" v-show="otherline"></span>
							<!-- 创建新的结构的厚度 -->
								<ul v-show="other">
									<li v-for="(item, index) in otherarr" :key="index">
										<div style="height:0.825rem;margin-bottom:0.25rem;position: relative;display:flex;padding-left:0.6rem;text-align:left;
										justify-content:space-around;padding-right:0.5rem;"
									>
									     <div
														@dblclick="fnother1(index)"
														style="font-style:normal;display:inline-block;font-size:0.5rem;font-family:Microsoft YaHei;font-weight:400;color:rgba(255,255,255,1);
														position:relative;width:2.38rem;height:0.75rem;line-height:0.8rem;text-overflow:ellipsis;"
														><p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.other1">{{item.other1}}</p></div>
														<input 
														v-model="otherarr[index].other1"
														@blur="changeother1(index)"
														v-show="item.changeother1"
														type="text"
														style="width:2.5rem;height:0.75rem;font-size:0.5rem;border:none;position:absolute;left:0.3rem;"
														/>
														<div v-show="!item.changeother2" @dblclick="fnother2(index)" style="font-style:normal;display:inline-block;width:2.075rem;height:0.75rem;
														font-size:0.5rem;padding-top:0.2rem;margin-left:-0.4rem;position:relative;color:#FFFFFF;">
														<p style="white-space: nowrap; overflow: hidden;text-overflow: ellipsis;" :title="item.other2">: {{item.other2}}</p>
														</div>
														<input
															v-model="otherarr[index].other2"
															type="text"
															@blur="changeother2(index)"
															v-show="item.changeother2"
															style="width:2.03125rem;height:0.75rem;font-size:0.5rem;border:none;margin-left:-0.33rem;"
														/>
												</i>
												<img src="../../assets/image/lj.png" style="width:0.40625rem;height:0.5rem;padding-bottom:0.3125rem;padding-top:0.2rem;" @click="clear7(index)" alt="">
										</div>
									</li>
									<li style="width:6.2rem;height:0.98125rem;">
										<span style="display:inline-block;width:0.60625rem;height:0.61875rem;float:right;" @click="establishother()">
											<img src="../../assets/image/add.png" alt="" style="width:100%;height:100%;" />
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
											 <span style="width:6.849rem;height:5.51rem;z-index:30;display:inline-block;position:absolute;top:0;
											 left:0;" :class="{ri5:isri5==index,ri1:isri1==index,ri2:isri2==index,ri3:isri3==index,ri4:isri4==index,ri6:isri6==index}"></span>
					             <ul class="edit-ritopen" :class="{ editopens:index==iseditopens}">
												 <li class="edit-ri edit-ri5" @click.stop="fnri5(index)"></li>
												 <li class="edit-ri edit-ri1" @click.stop="fnri1(index)"></li>
												 <li class="edit-ri edit-ri2" @click.stop="fnri2(index)"></li>
												 <li class="edit-ri edit-ri3" @click.stop="fnri3(index)"></li>
												 <li class="edit-ri edit-ri4" @click.stop="fnri4(index)"></li>
												 <li class="edit-ri edit-ri6" @click.stop="fnri6(index)"></li>
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
			// cexiaoshi: true,
			newjian: [], //地面的数组
			metarr:[],//墙面的数组
			ceiarr:[],//天棚的数组
			doorarr:[],//门窗的数组
			strarr:[],//结构的数组
			outdoorarr:[],//室外的数组
			otherarr:[],//其他的数组
			xinxitu: require('../../assets/image/xx.png'),
			xinxitit: 'color:#FFFFFF',
			caizhitu: require('../../assets/image/caizhi.png'),
			cztit: 'color:#FFFFFF',
			// 信息展开的控制
			xinxizhanshi: false,
			czzhankai: false,
			wall1: true,
			// walls1:false
			//材质循环
			material:[0,0,0,0,0,0],
			// 材质盘的显隐
	   iseditopens:-1,
		 isri5:-1,
		 isri1:-1,
		 isri2:-1,
		 isri3:-1,
		 isri4:-1,
		 isri6:-1,
		 //地面里边的内容,线,上下翻图标
		 ground:false,
		 groline:false,
		 groundimg:true,
		 //墙面里边的内容,线,上下翻图标
		 metope:false,
		 metline:false,
		 metopeimg:true,
		 //天棚里边的内容,线,上下翻
		 ceiling:false,
		 ceiline:false,
		 ceiimg:true,
		 //门窗里边内容,线，上下翻
		 doors:false,
		 doorline:false,
		 doorimg:true,
		 //结构里边内容，线，上下翻
		 strs:false,
		 strline:false,
		 strimg:true,
		 //室外里边内容，线，上下翻
		 outdoor:false,
		 outdoorline:false,
		 outdoorimg:true,
		 //其他里边内容，线，上下翻
		 other:false,
		 otherline:false,
		 otherimg:true
		};
	},
	created() {
		// console.log(localStorage.getItem('wallss1'));
	  // 地面
		this.newjian = localStorage .getItem('wallss1')
			? JSON.parse(localStorage .getItem('wallss1'))
			: [{ msg:50,msgs:'地面厚度', change: false ,changes:false}, { msg: 50,msgs:'地面厚度', change: false ,changes:false}, 
			{ id: 2, msg: 50,msgs:'地面厚度', change: false,changes:false }, 
			{ msg: 50, msgs:'地面厚度',change: false,changes:false }];
   // 墙面
	 this.metarr = localStorage.getItem('met')
	 ? JSON.parse(localStorage .getItem('met'))
	 : [{msgmet:50,metopes:"墙面厚度",changemetope1:false,changemetope2:false},{msgmet:50,metopes:"墙面厚度",changemetope1:false,changemetope2:false},
	 {msgmet:50,metopes:"墙面厚度",changemetope1:false,changemetope2:false},{msgmet:50,metopes:"墙面厚度",changemetope1:false,changemetope2:false}],
	 // 天棚 
	 this.ceiarr = localStorage.getItem('ceil')
	 ? JSON.parse(localStorage .getItem('ceil'))
	 : [{ceis2:50,ceis1:"天棚厚度",changecei1:false,changecei2:false},{ceis2:50,ceis1:"天棚厚度",changecei1:false,changecei2:false},
	 {ceis2:50,ceis1:"天棚厚度",changecei1:false,changecei2:false},{ceis2:50,ceis1:"天棚厚度",changecei1:false,changecei2:false}],
	 //门窗
	 this.doorarr = localStorage.getItem('doorw')
	 ? JSON.parse(localStorage .getItem('doorw'))
	 : [{door2:50,door1:"门窗厚度",changedoor1:false,changedoor2:false},{door2:50,door1:"门窗厚度",changedoor1:false,changedoor2:false},
	 {door2:50,door1:"门窗厚度",changedoor1:false,changedoor2:false},{door2:50,door1:"门窗厚度",changedoor1:false,changedoor2:false}],
	 //结构
	 this.strarr = localStorage.getItem('strs')
	 ? JSON.parse(localStorage .getItem('strs'))
	 : [{str2:50,str1:"结构厚度",changestr1:false,changestr2:false},{str2:50,str1:"结构厚度",changestr1:false,changestr2:false},
	 {str2:50,str1:"结构厚度",changestr1:false,changestr2:false},{str2:50,str1:"结构厚度",changestr1:false,changestr2:false}],
	 // 室外
	 this.outdoorarr = localStorage.getItem('outdoors')
	 ? JSON.parse(localStorage .getItem('outdoors'))
	 : [{outdoor2:50,outdoor1:"室外厚度",changeoutdoor1:false,changeoutdoor2:false},{outdoor2:50,outdoor1:"室外厚度",changeoutdoor1:false,changeoutdoor2:false},
	 {outdoor2:50,outdoor1:"室外厚度",changeoutdoor1:false,changeoutdoor2:false},{outdoor2:50,outdoor1:"室外厚度",changeoutdoor1:false,changeoutdoor2:false}],
	 //其他
	 this.otherarr = localStorage.getItem('others')
	 ? JSON.parse(localStorage .getItem('others'))
	 : [{other2:50,other1:"其他厚度",changeother1:false,changeother2:false},{other2:50,other1:"其他厚度",changeother1:false,changeother2:false},
	 {other2:50,other1:"其他厚度",changeother1:false,changeother2:false},{other2:50,other1:"其他厚度",changeother1:false,changeother2:false}],
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
		//点击地面
		fnground(){
			this.ground = !this.ground;
			this.groline = !this.groline;
			this.groundimg = !this.groundimg;
			// 墙
		this.metope = false;
		this.metline =false;
		this.metopeimg = true;
		// 天棚
		this.ceiling = false;
		this.ceiline = false;
		this.ceiimg = true;
		//门窗
		this.doors = false;
		this.doorline = false;
		this.doorimg = true;
		//结构
		this.strs = false;
		this.strline = false;
		this.strimg = true;
		//室外
		this.outdoor = false;
		this.outdoorline = false;
		this.outdoorimg = true;
		// 其他
		this.other = false;
		this.otherline = false;
		this.otherimg = true
		},
		//点击墙面
		fnmetope(){
			// 地面
			this.ground = false;
			this.groline = false;
			this.groundimg =  true;
			// 墙
			this.metope = !this.metope;
			this.metline =!this.metline;
			this.metopeimg = !this.metopeimg;
			// 天棚
			this.ceiling = false;
			this.ceiline = false;
			this.ceiimg = true;
			//门窗
			this.doors = false;
			this.doorline = false;
			this.doorimg = true;
			//结构
			this.strs = false;
			this.strline = false;
			this.strimg = true;
			//室外
			this.outdoor = false;
			this.outdoorline = false;
			this.outdoorimg = true;
			// 其他
			this.other = false;
			this.otherline = false;
			this.otherimg = true
		},
		// 点击天棚
		fnceil(){
			// 地面
			this.ground = false;
			this.groline = false;
			this.groundimg =  true;
			// 墙
			this.metope = false;
			this.metline =false;
			this.metopeimg = true;
			// 天棚
			this.ceiling = !this.ceiling;
			this.ceiline = !this.ceiline;
			this.ceiimg = !this.ceiimg;
			//门窗
			this.doors = false;
			this.doorline = false;
			this.doorimg = true;
			//结构
			this.strs = false;
			this.strline = false;
			this.strimg = true;
			//室外
			this.outdoor = false;
			this.outdoorline = false;
			this.outdoorimg = true;
			// 其他
			this.other = false;
			this.otherline = false;
			this.otherimg = true
		},
		// 点击门窗
		fndoor(){
			// 地面
			this.ground = false;
			this.groline = false;
			this.groundimg =  true;
			// 墙
			this.metope = false;
			this.metline =false;
			this.metopeimg = true;
			// 天棚
			this.ceiling = false;
			this.ceiline = false;
			this.ceiimg = true;
		 //门窗
			this.doors = !this.doors;
			this.doorline = !this.doorline;
			this.doorimg = !this.doorimg;
			//结构
			this.strs = false;
			this.strline = false;
			this.strimg = true;
			//室外
			this.outdoor = false;
			this.outdoorline = false;
			this.outdoorimg = true;
			// 其他
			this.other = false;
			this.otherline = false;
			this.otherimg = true
			
		},
	 //点击结构
	 fnstr(){
		 // 地面
		 this.ground = false;
		 this.groline = false;
		 this.groundimg =  true;
		 // 墙
		 this.metope = false;
		 this.metline =false;
		 this.metopeimg = true;
		 // 天棚
		 this.ceiling = false;
		 this.ceiline = false;
		 this.ceiimg = true;
		 //门窗
		 this.doors = false;
		 this.doorline = false;
		 this.doorimg = true;
		 //结构
		 this.strs = !this.strs;
		 this.strline = !this.strline;
		 this.strimg = !this.strimg;
		 //室外
		 this.outdoor = false;
		 this.outdoorline = false;
		 this.outdoorimg = true;
		 // 其他
		 this.other = false;
		 this.otherline = false;
		 this.otherimg = true
	 },
	//点击室外
	fnoutdoor(){
		// 地面
		this.ground = false;
		this.groline = false;
		this.groundimg = true;
		// 墙
		this.metope = false;
		this.metline =false;
		this.metopeimg = true;
		// 天棚
		this.ceiling = false;
		this.ceiline = false;
		this.ceiimg = true;
		//门窗
		this.doors = false;
		this.doorline = false;
		this.doorimg = true;
		//结构
		this.strs = false;
		this.strline = false;
		this.strimg = true;
		//室外
		this.outdoor = !this.outdoor;
		this.outdoorline = !this.outdoorline;
		this.outdoorimg = !this.outdoorimg;
		// 其他
		this.other = false;
		this.otherline = false;
		this.otherimg = true
	},
	//点击其他
	fnother(){
		// 地面
		this.ground = false;
		this.groline = false;
		this.groundimg = true;
		// 墙
		this.metope = false;
		this.metline =false;
		this.metopeimg = true;
		// 天棚
		this.ceiling = false;
		this.ceiline = false;
		this.ceiimg = true;
		//门窗
		this.doors = false;
		this.doorline = false;
		this.doorimg = true;
		//结构
		this.strs = false;
		this.strline = false;
		this.strimg = true;
		//室外
		this.outdoor = false;
		this.outdoorline = false;
		this.outdoorimg = true;
		//其他
		this.other = !this.other;
		this.otherline = !this.otherline;
		this.otherimg = !this.otherimg
	},
		ce1() {
			this.$router.push('/Login');
		},
		// 点击地面新建项目
		establish() {
			// this.newjian.push(6);
			this.newjian.push({ msg: 50,msgs:"地面厚度", change: false ,changes:false });
			localStorage.setItem('wallss1', JSON.stringify(this.newjian));
		},
		// 删除信息
		clear1(index) {
			this.newjian.splice(index, 1);
			localStorage.setItem('wallss1', JSON.stringify(this.newjian));
		},
		// 地面厘米数双击事件
		fnwall1(index) {
			// console.log(index);
			this.$set(this.newjian[index], 'change', true);
			(this.wall1 = false), (this.walls1 = true);
		},
		// 地面厚度双击事件
		fnwall2(index) {
			// console.log(index);
			this.$set(this.newjian[index], 'changes', true);
			(this.wall1 = false), (this.walls1 = true);
		},
		//地面厘米数失焦的时候
		changewall1(index) {
			(this.walls1 = false), (this.wall1 = true), 
			this.$set(this.newjian[index], 'change', false);
			//设置localStroage值
			localStorage.setItem('wallss1', JSON.stringify(this.newjian));
		},
		//地面厚度失焦的时候
		changewall2(index) {
			(this.walls1 = false), (this.wall1 = true),
			 this.$set(this.newjian[index], 'changes', false);
			//设置localStroage值
			localStorage.setItem('wallss1', JSON.stringify(this.newjian));
		},
		// 双击墙面厚度事件
		fnmet1(index){
			this.$set(this.metarr[index], 'changemetope1', true);
		},
		//双击天棚厚度事件
		fncei1(index){
			this.$set(this.ceiarr[index], 'changecei1', true);
		},
		//双击门窗厚度事件
		fndoor1(index){
			this.$set(this.doorarr[index], 'changedoor1', true);
		},
	 // 双击结构厚度事件
	 fnstr1(index){
		 this.$set(this.strarr[index], 'changestr1', true);
	 },
	 // 双击室外厚度事件
	 fnoutdoor1(index){
	 	 this.$set(this.outdoorarr[index], 'changeoutdoor1', true);
	 },
	// 双击其他厚度事件
	fnother1(index){
		this.$set(this.otherarr[index], 'changeother1', true);
	},
		// 墙面厚度失焦事件
		changemet1(index){
			this.$set(this.metarr[index], 'changemetope1', false);
			//设置localStroage值
			localStorage.setItem('met', JSON.stringify(this.metarr));
		},
		// 天棚厚度失焦事件
		changecei1(index){
			this.$set(this.ceiarr[index],'changecei1',false);
			localStorage.setItem('ceil',JSON.stringify(this.ceiarr))
		},
		// 门窗厚度失焦事件
		changedoor1(index){
			this.$set(this.doorarr[index],'changedoor1',false);
			localStorage.setItem('doorw',JSON.stringify(this.doorarr))
		},
		// 结构厚度失焦事件
		changestr1(index){
			this.$set(this.strarr[index],'changestr1',false);
			localStorage.setItem('strs',JSON.stringify(this.strarr))
		},
		//室外厚度失焦事件
		changeoutdoor1(index){
			this.$set(this.outdoorarr[index],'changeoutdoor1',false);
			localStorage.setItem('outdoors',JSON.stringify(this.outdoorarr))
		},
		//其他厚度失焦事件
		changeother1(index){
			this.$set(this.otherarr[index],'changeother1',false);
			localStorage.setItem('others',JSON.stringify(this.otherarr))
		},
		//墙面厘米数的聚焦事件
		fnmet2(index){
			this.$set(this.metarr[index], 'changemetope2', true);
		},
		// 天棚厘米数聚焦事件
		fncei2(index){
			this.$set(this.ceiarr[index],'changecei2',true)
		},
		// 门窗厘米数聚焦事件
		fndoor2(index){
			this.$set(this.doorarr[index],'changedoor2',true)
		},
		//结构厘米数聚焦事件
		fnstr2(index){
		 this.$set(this.strarr[index],'changestr2',true)
		},
		//室外厘米数聚焦事件
		fnoutdoor2(index){
		 this.$set(this.outdoorarr[index],'changeoutdoor2',true)
		},
		//其他厘米数聚焦事件
		fnother2(index){
		 this.$set(this.otherarr[index],'changeother2',true)
		},
	 //墙面厘米数失焦的时候
	  changemet2(index){
			this.$set(this.metarr[index], 'changemetope2', false);
			//设置localStroage值
			localStorage.setItem('met', JSON.stringify(this.metarr));
		},
	// 天棚厘米数失焦事件
	changecei2(index){
		this.$set(this.ceiarr[index],'changecei2',false);
		localStorage.setItem('ceil',JSON.stringify(this.ceiarr))
	},
	// 门窗厘米数失焦事件
	changedoor2(index){
		this.$set(this.doorarr[index],'changedoor2',false);
		localStorage.setItem('doorw',JSON.stringify(this.doorarr))
	},
	//结构厘米数失焦事件
	changestrs2(index){
		this.$set(this.strarr[index],'changestr2',false);
		localStorage.setItem('strs',JSON.stringify(this.strarr))
	},
	//室外厘米数失焦事件
	changeoutdoor2(index){
		this.$set(this.outdoorarr[index],'changeoutdoor2',false);
		localStorage.setItem('outdoors',JSON.stringify(this.outdoorarr))
	},
	//其他厘米数失焦事件
	changeother2(index){
		this.$set(this.otherarr[index],'changeother2',false);
		localStorage.setItem('others',JSON.stringify(this.otherarr))
	},
		//清除墙面信息
		clear2(index){
			this.metarr.splice(index, 1);
			localStorage.setItem('met', JSON.stringify(this.metarr));
		},
		// 清除天棚信息
		clear3(index){
			this.ceiarr.splice(index,1);
			localStorage.setItem('ceil',JSON.stringify(this.ceiarr))
		},
	// 清除门窗信息
	clear4(index){
		this.doorarr.splice(index,1);
		localStorage.setItem('doorw',JSON.stringify(this.doorarr))
	},
	// 删除结构信息
	clear5(index){
		this.strarr.splice(index,1);
		localStorage.setItem('strs',JSON.stringify(this.strarr))
	},
	// 删除室外信息
	clear6(index){
		this.outdoorarr.splice(index,1);
		localStorage.setItem('outdoors',JSON.stringify(this.outdoorarr))
	},
	//删除其他信息
	clear7(index){
		this.otherarr.splice(index,1);
		localStorage.setItem('others',JSON.stringify(this.otherarr))
	},
	 // 点击墙面的新建
	 establishmetop(){
		 this.metarr.push({msgmet:50,metopes:"墙面厚度",changemetope1:false,changemetope2:false});
		 localStorage.setItem('met', JSON.stringify(this.metarr));
	 },
	 // 点击天棚的新建
	 establishcei(){
		 this.ceiarr.push({ceis2:50,ceis1:"天棚厚度",changecei1:false,changecei2:false});
		 localStorage.setItem('ceil',JSON.stringify(this.ceiarr))
	 },
	 // 点击门窗的新建
	 establishdoor(){
	 		 this.doorarr.push({door2:50,door1:"门窗厚度",changedoor1:false,changedoor2:false});
	 		 localStorage.setItem('doorw',JSON.stringify(this.doorarr))
	 },
	// 点击结构的新建
	establishstr(){
			 this.strarr.push({str2:50,str1:"门窗厚度",changedoor1:false,changedoor2:false});
			 localStorage.setItem('strs',JSON.stringify(this.strarr))
	},
	// 点击室外的新建
	establishoutdor(){
			 this.outdoorarr.push({outdoor2:50,outdoor1:"室外厚度",changeoutdoor1:false,changeoutdoor2:false});
			 localStorage.setItem('outdoors',JSON.stringify(this.outdoorarr))
	},
	//点击其他的新建
	establishother(){
			 this.otherarr.push({other2:50,other1:"其他厚度",changeother1:false,changeother2:false});
			 localStorage.setItem('others',JSON.stringify(this.otherarr))
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
		fnri5(index){
			this.isri5 = index;
			this.isri1 = -1;
			this.isri2 = -1;
			this.isri3 = -1;
			this.isri4 = -1;
			this.isri6 = -1
		},
		fnri1(index){
			this.isri5 = -1;
			this.isri1 = index;
			this.isri2 = -1;
			this.isri3 = -1;
			this.isri4 = -1;
			this.isri6 = -1
		},
		fnri2(index){
			this.isri5 = -1;
			this.isri1 = -1;
			this.isri2 = index;
			this.isri3 = -1;
			this.isri4 = -1;
			this.isri6 = -1
		},
		fnri3(index){
			this.isri5 = -1;
			this.isri1 = -1;
			this.isri2 = -1;
			this.isri3 = index;
			this.isri4 = -1;
			this.isri6 = -1
		},
		fnri4(index){
			this.isri5 = -1;
			this.isri1 = -1;
			this.isri2 = -1;
			this.isri3 = -1;
			this.isri4 = index;
			this.isri6 = -1
		},
		fnri6(index){
			this.isri5 = -1;
			this.isri1 = -1;
			this.isri2 = -1;
			this.isri3 = -1;
			this.isri4 = -1;
			this.isri6 = index;
			this.arr = this.isri6;
			this.arr.push(this.isri6);
			console.log(this.arr)
		},
	}
};
</script>

<style scoped>
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
	  background-color: rgba(255,255,255,0);
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
	background:#FFFFFF;
}
.edit-ri6{
	background:#0000FF;
}
/* .logoxnedit {
	width:6.78125rem;
	height:3.625rem;
} */
.xunitopedit {
	width:6.875rem;
	height:33.75rem;
	background: url(../../assets/image/homecebian8@2x.png) no-repeat;
	position: absolute;
	top: 0px;
	background-size: 6.875rem 33.75rem;
	padding-top: 0px;
}
.ce1edit {
	width: 4.08125rem;
	height:1.2rem;
	background: url(../../assets/image/logotop@2x.png) no-repeat;
	background-size:3.65625rem 0.875rem;
	position: absolute;
	top:0.90625rem;
	left: 1.875rem;
}
.cesedit {
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
.ri5{
	background:rgba(225,225,225,0);
}
.ri1{
	background-color: rgba(255,0,0, 0.3);
}
.ri2{
	background-color: rgba(255,153,18, 0.3);
}
.ri3{
	background-color: rgba(255,255,0,0.3);
}
.ri4{
	background-color: rgba(34,139,34,0.3);
}
.ri6{
	background-color: rgba(0,0,255,0.3);
}

</style>
