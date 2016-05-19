var _tjUrl = "http://stat.walatao.com/walstat.js?bw=guge&v=1.0.0.3&t=1405672368214&plugin=false&cache=16f63b4&gmkey=jm_search&gokey=sfrom=jm&t=1369194202558&&cna=null&isbeta=7&logtype=2";
var _walaPid = getCookie('wala_pid') || "";
var _browerVersion = getBrowerVersion() || ""; 

function setCookie(name,value,sec){
	if(arguments.length>2){
		var expireDate=new Date(new Date().getTime()+sec*1000);
		document.cookie = name + "=" + escape(value) + "; path=/; domain=walatao.com; expires=" + expireDate.toGMTString() ;
	}else
	document.cookie = name + "=" + escape(value) + "; path=/; domain=walatao.com";
}

function getCookie(name){
	return (document.cookie.match(new RegExp("(^"+name+"| "+name+")=([^;]*)"))==null)?"":RegExp.$2;
}

function creatPid() {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random()*16|0, v = c == 'x' ? r : (r&0x3|0x8);
		return v.toString(16);
	});	
}

function getPid(){
	if(!_walaPid){
		_walaPid = creatPid();
		setCookie(_walaPid);
	}
	return _walaPid;
}

function getBrowerVersion(){
	if(KISSY.UA.chrome){
		return 'chrome';
	}else if(KISSY.UA.safari){
		return 'safari';
	}else if(KISSY.UA.firefox){
		return 'mozilla';
	}else if(KISSY.UA.ie){
		return 'ie';
	}else if(KISSY.UA.opera){
		return 'opera';
	}else if(KISSY.UA.mobile){
		return 'mobile';
	}else if(KISSY.UA.ios){
		return 'ios';
	}else if(KISSY.UA.android){
		return 'android';
	}else{
		return 'other';
	}
}

function isMac(){
	var userarg = navigator.userAgent.toLowerCase();
	if(userarg.indexOf('mac os') != -1){
		return true;
	}else{
		return false;
	}
}

function pvTj(action){
	if(!_walaPid){
		getPid();
	}
	var c = "&pid=" + _walaPid + "&click=" + action + "&show_type=jm_page:" + _browerVersion;
	KISSY.getScript(_tjUrl + c);
}



// $(document).ready( function() {
//   var $draggable = $('.mt_base').draggabilly();
// });
