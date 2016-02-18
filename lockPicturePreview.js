/**
 * 图片本地预览
 *
 * @author lock
 */
(function($) {
	$.fn.lockPicturePreview = function(options) {	
		var defaults = {
				width : 400, //预览宽度
				height : 400, //预览高度
				previewId : 'picturePreview', //预览DIV ID
				type : ['GIF', 'JPEG', 'JPG', 'BMP', 'PNG'] //图片类型
		};
		var opts = $.extend(defaults, options);
		var obj= $(this);
		var newPreview = $('#'+opts.previewId);
		
		/**
		 * 检测上传类型
		 */
		var checkPictureType = function(aFiles) {			
			if (aFiles.length === 0) { return false;  }		
			var rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;
			if (!rFilter.test(aFiles[0].type)) { 
				alert("文件类型错误，图片类型必须是" + opts.type.join("，") + "中的一种");
				return false;
			}   
			return true;
		};
		
		var checkPictureTypeIE = function(aFiles) {
			if (!RegExp("\.(" + opts.type.join("|") + ")$", "i").test(aFiles.toUpperCase())) {
                alert("文件类型错误，图片类型必须是" + opts.type.join("，") + "中的一种");
                return false
            }
			return true;
		};
		
		 var loadPictureFile = function () {			 
				obj.change( function () { 
					if (window.FileReader) { //chrome,firefox,ie9++
						var aFiles = document.getElementById(obj.attr('id')).files;	
						
						if (!checkPictureType(aFiles)) { return false; }
						
						var oFReader = new window.FileReader();
						oFReader.readAsDataURL(aFiles[0]);
						
						oFReader.onload = function (oFREvent) {							
							newPreview.html('<img src="'+oFREvent.target.result+'" style="max-height:'+opts.height+'; max-width:'+opts.width+'"/>');							
						};						
					}
					if (navigator.appName === 'Microsoft Internet Explorer') { //ie9--
							if (!checkPictureTypeIE(obj.val())) { return false; }
							obj.select().blur();
				            var path = document.selection.createRange().text;
				            newPreview.html('&nbsp;').css({
				            	'filter' : "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='scale',src=\"" + path + "\")", 
				            	'width' : opts.width + 'px', 
				            	'height' : opts.height + 'px'
				            });						
					}					
				});
			
		 };		 
		 loadPictureFile();	
	};
})(jQuery);