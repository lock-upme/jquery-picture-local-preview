# jquery picture preview

#功能介绍
图片上传本地预览插件，Chrome, Firefox, IE

插件参数：

			width : 400, //预览宽度
			
			height : 400, //预览高度
			
			previewId : 'picturePreview', //预览DIV ID
			
			type : ['GIF', 'JPEG', 'JPG', 'BMP', 'PNG'] //图片类型
			
#引用方法

	$('#uploadfile1').lockPicturePreview();
	
	$('#uploadfile2').lockPicturePreview({
		width : 300,
		height : 300
	});
			
