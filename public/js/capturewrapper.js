

var savedPictureContent = '';
var extendName = '';
var captureObj = null;
var downloadUrl = 'http://www.ggniu.cn/download/CaptureInstall.exe?';
var Printscreen = [];
/*
用于初始化牛牛截图控件，此函数需要在页面加载完成后立即调用 
在此函数中，您可以设置相关的截图的UI控制，如，画笔大小、边框颜色等等 【这部分信息在niuniucapture.js中也有默认值，直接修改默认值也可 】
*/

function Init()
{
	if(isMacintosh())
	{
		downloadUrl = 'http://www.ggniu.cn/download/CaptureInstall.dmg?';
	}
    captureObj = new NiuniuCaptureObject();
    captureObj.NiuniuAuthKey = "niuniu";
    //此处可以设置相关参数 
    captureObj.TrackColor = rgb2value(255, 0, 0);
    captureObj.EditBorderColor = rgb2value(0, 0, 255);
    
    //设置工具栏的TOOLTIP  
    //captureObj.ToolTipText = "tipRectangle|tipCircle|tipArrow|tipBrush|tipGlitter|tipMosaic|tipText|tipUndo|tipSave|tipCancel|tipFinish|Finish";
    
    //设置控件加载完成以及截图完成的回调函数
    captureObj.FinishedCallback = OnCaptureFinishedCallback;
    captureObj.PluginLoadedCallback = PluginLoadedCallback;
	captureObj.VersionCallback = VersionCallback;
    
    //初始化控件 
    captureObj.InitNiuniuCapture();
}

//用于返回控件的版本号
function VersionCallback(ver)
{
	//captureObj.Version;
	//可以在此根据最新的版本号与控件返回的版本号对比，决定是否要提示升级  
	//alert(ver);
}
/*
当控件成功加载后回调的的函数，您可以在此控制相应的UI显示  
*/
function PluginLoadedCallback(success)
{
    if(success)
    {
		$('#info').html('');
        $('#imgshow').hide();
	    $('#imgshow').attr('src', "./image/loading.gif?v=1");
	    $('#btnReload').hide();
        $('#btnCapture').show();
    }
}

//根据是否是Chrome新版本来控制下载不同的控件安装包
function ShowDownLoad()
{
    $('#info').html('如果超过5秒无响应，请点此<a target="_blank" href="' + downloadUrl + '" + date.getMinutes() + date.getSeconds()">安装</a>');
}

/*
当提示安装控件后，需要重新加载控件来使用截图；
也有部分是需要刷新浏览器的   不需要
*/
function ReloadPlugin() 
{
    captureObj.LoadPlugin();
    $('#btnReload').hide();
     $('#btnCapture').show();
     if(captureObj.pluginValid())
     {
        $('#downloadNotice').hide();
        $('#info').html("截图控件已经安装完毕，您可以进行截图了。");
     }
     else
     {
         var browserInfo = "查看控件是否被浏览器阻止，或通过浏览器设置中的加载项查看NiuniuCapture是否加载并正常运行";       
         $('#info').html('截图控件未能识别到，请按如下步骤检查:<br/>1. 确定您已经下载控件安装包并正常安装 <br/>2. ' + browserInfo 
         + '<br/>3. 刷新页面或重新启动浏览器试下<br/>4. 如果仍旧不能截图，出大招吧：'
         + '<a target="_blank" style="color:#ff0000;" class="btn" href="http://shang.qq.com/wpa/qunwpa?idkey=a9dab7a14df03d19a2833e6b5f17a33639027d06213cf61bdb7554b04492b6e5">一键加群求助</a>');
     }
}

/*
截图入口函数，用于控制UI标签的显示 
*/
function StartCapture()
{
    $('#imgshow').hide();  
	$('#imgshow').attr('src', "./image/loading.gif?v=1");
    var captureRet = Capture();
    //从返回值来解析显示  	
    if(captureRet == emCaptureFailed)
    {		
		// alert("有")
        ShowDownLoad();
    }
	else if(captureRet == emCaptureUnknown){
		// alert("没有")
		$('#info').html('正在截图中, 如果超过5秒无响应，请点此<a target="_blank" href="' + downloadUrl + '" + date.getMinutes() + date.getSeconds()">安装</a>');
	}
}

/*
此函数是根据在测试页面上的不同选项来进行截图，在实际应用中，您只需要根据您实际需要的截图模式，传入相应的参数即可 
*/
function Capture() 
{
	
	var defaultName = "1.jpg"; //此处为了防止上传的数据过大，建议使用JPG格式 
    var hideFlag = $("#hideCurrent").attr("checked")=="checked" ? 1 : 0;
    var autoFlag = $("#captureselectSize").attr("checked")=="checked" ? 1 : 0;
    var captureRet = true;
    if(autoFlag == 0)
    {
        return captureObj.DoCapture("1.jpg", hideFlag, 0, 0, 0, 0, 0);
    }
    else
    {
        autoFlag = $('#getimagefromclipboard').is(':checked') ? 4 : 1;
		if(autoFlag == 4)
		{
		    return captureObj.DoCapture("", 0, 4, 0, 0, 0, 0);
		}
		autoFlag = $('#showprewindow').is(':checked') ? 3 : 1;
		if(autoFlag == 3)
		{
		    //此时如果x, y, width, height全为0，则表示预截图窗口点击“开始截图”时，手工先把区域
		    //x, y, width, height全为1，则表示预截图窗口点击“开始截图”时，自动截取整个桌面
		    //其他情况，则自动截取 x, y, width, height 指定的区域  
		    return captureObj.DoCapture("1.jpg", hideFlag, 3, 0, 0, 0, 0);
		}
		autoFlag = $('#fullscreen').is(':checked') ? 2 : 1;
		if(autoFlag == 2)
		{
			return captureObj.DoCapture("1.jpg", hideFlag, 2, 0, 0, 0, 0);
		}
        else
		{
			return captureObj.DoCapture("1.jpg", hideFlag, 1, $('#xpos').val(), $('#ypos').val(), $('#width').val(), $('#height').val());
		}
    }            
}

/*
此处是截图后的回调函数，用于将截图的详细信息反馈回来，你需要调整此函数，完成图像数据的传输与显示  
*/
function OnCaptureFinishedCallback(type, x, y, width, height, info, content,localpath) 
{
    if(type < 0)
    {
        //需要重新安装控件
        ShowDownLoad();
        return;
    }
    $('#show').hide();
    switch(type)
    {
        case 1:
        {
              // $('#info').html('截图完成： x:' + x + ',y:' + y + ',widht:' + width + ',height:' + height);
	          UploadCaptureData(content, localpath);  
	          break;
        }
        case 2:
        {
     //         $('#info').html('您取消了截图'); 
				 // $('#info').html(''); 
             break;        
        }
        case 3:
        {
             // $('#info').html('您保存了截图到本地： x:' + x + ',y:' + y + ',widht:' + width + ',height:' + height);
	         UploadCaptureData(content, localpath);
	         break;
        }
        case 4:
        {
            // if(info =='0')
            // {
            //     $('#info').html('从剪贴板获取到了截图： ' + localpath);
	           //  UploadCaptureData(content, localpath);
            // }
            // else
            // {
            //     $('#info').html('从剪贴板获取图片失败。');
            // }            
	        break;
        }
    }                 
}
//控制上传
	function UploadCaptureData(content, localpath)
	{
		var version=sessionStorage.getItem("version")
		// 'data:image/png;base64,' +
	    var base64= content;
	     var projectid=sessionStorage.getItem("projectid");
		 //截图保存到数据库
		   $.ajax({
			   type:"POST",
			   default: true,
			   url:"/v"+version+"/model/addprintscreen",
			   contentType: "application/json",
			   data:JSON.stringify({
					images:base64,
					projectId:projectid,
					modelId:1,
					typdprint:1,
			   }),
			   success:function(result){
			   }
		   })
	}

