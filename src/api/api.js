import global from "@/api/global";

const version = global.url + "/v" + global.version;
const api = {
	Login: version + "/user/phoneLogin",  //登录发送验证码
	GetPhone:version+"/user/register",  //判断手机号是否已注册
	RegistercheckSmsCode:version+"/user/RegistercheckSmsCode",   //判断手机号和验证码是否正确  完成注册
	LogincheckSmsCode:version+"/user/LogincheckSmsCode",   //判断手机号和验证码是否正确  完成的登录
	GetUser: version + "/pcUser/getUserByToken",
	GetProject: version + "/userProject/getProject",
	ChangePwd: version + "/user/changePwd",
	GetResModel: version + "/userProject/getResModel",
	GetResDrawing: version + "/userProject/getResDrawing",
	GetResMeterial: version + "/userProject/getResMeterial",
	CheckVersion: version + "/version/checkVersion",
	Upload:version+"/Upload/uploadCategory"   ,//上传建筑模型
	AddProject:version+"/pcproject/addproject",		//新增项目
	addBuildModel:version+"/Upload/addBuildModel",	//保存建筑模型
	BindingProject:version+"/userProject/getProject", //绑定项目
	ShowModel:version+"/model/modelprojectid", //展示模型 
	ShowPipe:version+"/Upload/addPipeModel", //上传管道模型保存到数据库中
	Uploadpipes:version+"/Upload/uploadpipe"   ,//上传管道模型
	DeleteProject:version+"/pcproject/deleteproject",	//删除项目
	UploadPicture:version+"/Upload/uploadpicture",		//上传建筑图片
	Pcreddrawing:version+"/pcreddrawing/getAll",		//绑定图纸
	SelectByPrimaryKey:version+"/pcreddrawing/selectByPrimaryKey",		//根据id显示所对应的图纸
	getprojectids:version+"/pcreddrawing/getprojectids",		//根据项目id查询该项目有没有图纸
	// 新改
	Uploadbuildingdrawing:version+"/Upload/uploadbuildingdrawing",   //上传zip建筑图纸方法
	RegisterphoneLogin:version+"/user/RegisterphoneLogin",			//注册发送验证码
	Ceshi :version+"/Upload/ceshi",
	GetAllList:version+"/file/getAllList",		//查询所有exe
	Download:version+"/file/download",  //下载模型exe
	GetList:version+"/file/getList", //我的下载
	Openexe:version+"/file/openexe",//打开模型
	Remove:version+"/file/remove",//删除模型
	Uploadpipepingmian:version+"/Upload/uploadpipepingmian",		//上传管道zip图纸
	OpenCmd:version+"/model/OpenCmd",		//模型快照
	Addprojects:version+"/pcproject/addprojects",	//点击+号增加项目id
	Uploadjzprice:version+"/Upload/uploadjzprice",	//上传建筑图纸
	Uploadgxprice:version+"/Upload/uploadgxprice"	,//上传管道图纸
	Exceltohtml:version+"/excel/exceltohtml",		//展示excel清单
	Addressurl:version+"/excel/addressurl",//查询清单的模型id项目id和登录人展示清单的位置
};
export default api;
