 function jm_init() {

    jm_tools.checkWebSite() && (jm_tools.loadExtraResource(), dealWebsite())
}
 function jm_init_home() {
    jm_tools.checkWebSite() && (jm_tools.loadExtraResource(), dealHomeWebsite())
}
var preferenialFlag = false;

function jm_get_remote_js(remote_js_key){
	var a = window.jm_jminer.config;
	if (a && a.website) {
		var b = getMatchedWebSiteDomain();	
		var c = KISSY.replace_all(window.location.host, ".","_");
		if(a.website[b]  && a.website[b]["remotejs"]){
			var d = null;
            //console.log(a.website[b]["remotejs"]);
			if( a.website[b]["remotejs"][c]){
				d = a.website[b]["remotejs"][c][remote_js_key];
			}
			return  d ||  a.website[b]["remotejs"][remote_js_key];
		}
	}
	return undefined;
}
function jm_get_remote_js_home(remote_js_key){
    var a = window.jm_jminer.config;
    if (a && a.homeWebSite) {
        var b = getMatchedHomeWebSiteDomain();  
        var c = KISSY.replace_all(window.location.host, ".","_");
        if(a.homeWebSite[b]  && a.homeWebSite[b]["remotejs"]){
            var d = null;
            if( a.homeWebSite[b]["remotejs"][c]){
                d = a.homeWebSite[b]["remotejs"][c][remote_js_key];
            }
            return  d ||  a.homeWebSite[b]["remotejs"][remote_js_key];
        }
    }
    return undefined;
}

function dealWebsite() {
    console.time("dealWebsite");

    function waitForCss(){
        window.jm_jminer.isLoadTips = "true";
        var a = window.jm_jminer.config;
        if (a && a.website) {
            console.log(a.website);

            //在进入icebear时 检测登录
            var host = document.domain;
            console.log(host);
            if (host == "icebear.me") {
                //KISSY.use('icebearFunction', function (a,b,c,d) {});
                 KISSY.use('icebearFunction', 
                function(a, d) {
                    function e() {
                        1 && (g && clearTimeout(g), g = setTimeout(function() {
                            var a = window.jm_jminer.config;
                            if (a && a.website) {
                                var c = a.website[b];
                                console.log(c);
                                c && c.tips && (jm_tools.initTips(c.tips), f.reposTips && (f.reposTips(), console.timeEnd("dealWebsite")))
                            }
                            g = null
                        },
                        200))
                    }
                    var f = new d;
                    window.jm_jminer.curWebSite = f,
                    f.init(),
                    //jm_tools.initTips(c.tips);
                    var g = null;
                    KISSY.one("body").on("jmRepaint", 
                    function() {
                        //e()
                    });
                });
            }

            var b = getMatchedWebSiteDomain();
            if ("null" == b) return;
            var c = a.website[b];
            console.log(c);
            var tips_timer = null;
            var last_update_tips_time = 0;

            function  refresh_tip_pos(){
                if(new Date().getTime() - last_update_tips_time > 1e3  && tips_timer != null)
                    return;
                clearTimeout(tips_timer);
                tips_timer = null;
                tips_timer = setTimeout(function(){
                     //jm_tools.initTips(c.tips);
                         //window.jm_jminer.curWebSite.reposTips();
                     if(!KISSY.one('#jm_others_tips_23') && KISSY.one('#spc-gcpromoinput') && !preferenialFlag) {
                        for (var i = 0; i < c.tips.others.length; i++) {
                            if(c.tips.others[i].id === 'jm_others_tips_23') {
                                jm_tools.preferenialTips(c.tips.others[i]);
                            }
                        }
                     } else {
                        if(!KISSY.one('#spc-gcpromoinput') && KISSY.one('#jm_others_tips_23')) {
                            KISSY.one('#jm_others_tips_23').remove();
                        }
                     }
                     tips_timer = null;
                     last_update_tips_time = new Date().getTime();
                 }, 1e3);
            }

            if (c && c.tips) {

                //支持多个网站
                //采用kissy创建模块的方式，如amazonFunction模块，sixpmFunction模块等
                
                
                var d = b + "Function";
                KISSY.use(d, 
                function(a, d) {
                    function e() {
                        1 && (g && clearTimeout(g), g = setTimeout(function() {
                            var a = window.jm_jminer.config;
                            if (a && a.website) {
                                var c = a.website[b];
                                console.log(c);
                                c && c.tips && (jm_tools.initTips(c.tips), f.reposTips && (f.reposTips(), console.timeEnd("dealWebsite")))
                            }
                            g = null
                        },
                        200))
                    }
                    var f = new d;
                    window.jm_jminer.curWebSite = f,
                    f.init(),
                    jm_tools.initTips(c.tips);
                    var g = null;
                    KISSY.one("body").on("jmRepaint", 
                    function() {
                        //e()
                    });
                })
            }
        }else if(a && a.homeWebSite){
           console.log("home");
        }
    }

    var waitTimeout = setTimeout(waitForCss, 200);
}
function dealHomeWebsite() {
    console.time("dealWebsite");
    window.jm_jminer.isLoadTips = "true";
    var a = window.jm_jminer.config;
    if (a.homeSupportWebSite && a) {
       
        function waitForCss(){


             var d = "homeWebFunction";
                KISSY.use(d, 
                function(a, d) {
                    function e() {
                        1 && (g && clearTimeout(g), g = setTimeout(function() {
                            var a = window.jm_jminer.config;
                            if (a && a.website) {
                                var c = a.website[b];
                                c && c.tips && (jm_tools.initTips(c.tips), f.reposTips && (f.reposTips(), console.timeEnd("dealWebsite")))
                            }
                            g = null
                        },
                        200))
                    }
                    var f = new d;
                    window.jm_jminer.curWebSite = f,
                    f.init(),
                    KISSY.one("body").on("jmRepaint", 
                    function() {
                        //e()
                    });
                })
        }   
        var waitTimeout = setTimeout(waitForCss, 200);
    }  
}

function isMatchedWebSite() {
      var node = allowWebSiteFinder;
      var hostParts = window.location.host.toLowerCase().split('.');
      for (var i=hostParts.length - 1; i >= 0; i --) {
           var part = hostParts[i];
           node = node[part];
           if (node == undefined || node == 1) break;
      }
      if(node == 1){
           return !0;
      }
      return !1;
}
function isMatchedHomeWebSite() {
      var node = homeSupportWebSiteFinder;
      var hostParts = window.location.host.toLowerCase().split('.');
      for (var i=hostParts.length - 1; i >= 0; i --) {
           var part = hostParts[i];
           node = node[part];
           if (node == undefined || node == 1) break;
      }
      if(node == 1){
           return !0;
      }
      return !1;
}


function getMatchedWebSiteDomain() {
    for (var a = window.location.host, b = 0; b < allowWebSite.length; b++)
    	if ( - 1 != a.indexOf("." + allowWebSite[b])) return allowWebSite[b].replace(".com", "").replace(".de","").replace("6pm", "sixpm").replace("us-dc2-order.store.yahoo.net", "albeebaby").replace("order.store.yahoo.net", "albeebaby").replace(".co.jp","").replace(".com.cn", "").replace(".cn:8088","").replace(".cn", "").replace(".cc", "").replace(".me", "").replace(".net", "").replace(".com.hk","").replace(".hk","");
    return "null"
}
function getMatchedHomeWebSiteDomain() {
    for (var a = window.location.host, b = 0; b < homeSupportWebSite.length; b++)
        if ( - 1 != a.indexOf("." + homeSupportWebSite[b])) return homeSupportWebSite[b].replace(".com", "").replace(".de","").replace("6pm", "sixpm").replace("us-dc2-order.store.yahoo.net", "albeebaby").replace("order.store.yahoo.net", "albeebaby").replace(".co.jp","").replace(".com.cn", "").replace(".cn:8088","").replace(".cn", "").replace(".cc", "").replace(".me", "").replace(".net", "").replace(".com.hk","").replace(".hk","");
    return "null"
}
function startRun() {

    console.timeEnd("startrun");
    
	//KISSY.Event.delegate(document, "DOMNodeInsertedIntoDocument", ".jm_tips", closeBind());
    function generator_host_json_str(arr){
        console.time("generator_host_json_str");
         var e,  r,  t, n, i,u, a,l,p,h,c,f,d,g,m,x,v,y,b,D, N;
         r = arr;
         for (h = {},m = 0, b = r.length; b > m; m++) 
              for (e = r[m], i = h, a = e.toLowerCase().split(".").reverse(), t = x = 0, N = a.length - 1; N >= 0 ? N >= x: x >= N; t = N >= 0 ? ++x: --x) 
                 if (u = a[t], t === a.length - 1) i[u] = 1;
                 else{
                        if (1 === i[u]) break;
                        null == i[u] && (i[u] = {}),
                        i = i[u]
                 }
         console.timeEnd("generator_host_json_str");
          return h;
    }

	function startRuncb(a) {
       // console.log(window.jm_jminer);
		console.log("startRun get config call back..");
        window.jm_jminer.isLoadRemoteRes = JSON.parse(a.isLoadRemoteRes),
      //  console.log(window.jm_jminer.isLoadRemoteRes );
        window.jm_jminer.config = JSON.parse(a.config),
      //  console.log(JSON.parse(a.config)),
        window.jm_jminer.mmstat_cna = a.mmstat_cna,
        window.jm_jminer.template = KISSY.merge(window.jm_jminer.template, a.template),
        window.jm_jminer.isLock = a.isLock,
        window.jm_jminer.isShowTips = a.isShowTips,
        window.jm_jminer.isShowPushNotify = a.isShowPushNotify,
		window.jm_jminer.isShowDownBar = a.isShowDownBar,
        window.jm_jminer.transTimeStat = a.transTimeStat,
        window.jm_jminer.login = JSON.parse(a.login),
        window.jm_jminer.wltal_kuaigenzong = JSON.parse(a.wltal_kuaigenzong);
        window.jm_jminer.wltal_shipphone = JSON.parse(a.wltal_shipphone);
		KISSY.jm_peerid = a.jm_peerid;
        //console.log(window.jm_jminer.login);
        if(window.jm_jminer.config && window.jm_jminer.config.supportWebSite){
            allowWebSite = window.jm_jminer.config.supportWebSite;
            //console.log(allowWebSite);
        }

        if(window.jm_jminer.config && window.jm_jminer.config.homeSupportWebSite){
            homeSupportWebSite = window.jm_jminer.config.homeSupportWebSite;
        }

        //  if(window.jm_jminer.config && window.jm_jminer.config.homeWebSite){
        //     homeWebSite = window.jm_jminer.config.homeWebSite;
        //     console.log(homeWebSite);
        // }

        allowWebSiteFinder = generator_host_json_str(allowWebSite);
        homeSupportWebSiteFinder = generator_host_json_str(homeSupportWebSite);

        //console.log(allowWebSiteFinder);
        // homeWebSiteFinder = generator_host_json_str(homeWebSite);
        // console.log(homeWebSiteFinder);

        window.jm_jminer.config && isMatchedWebSite() && (jm_init(), AliPVStatistics());
        window.jm_jminer.config && isMatchedHomeWebSite() && (jm_init_home(), AliPVStatistics());
        //window.jm_jminer.config && isMatchedhomeWebSite() && (jm_init(), AliPVStatistics());
          
        if(window.jm_jminer.config){
            var aaa = KISSY.replace_all(window.location.host, ".","_");
            if(window.jm_jminer.config.bgremotejs && window.jm_jminer.config.bgremotejs[aaa]){
                var tmpurl = window.jm_jminer.config.bgremotejs[aaa].plugpagejs;
				//alert(tmpurl);
                       
            } 
        }        
        window.jmLogin.webCheckLoginStatus();

        
        if(isMatchedWebSite()){
            /*var isHttps =  'https:' == document.location.protocol ? false : true;
            if( isHttps ){
                var urlHeader = 'http://';
            }else{
                var urlHeader = 'https://';
            }
			KISSY.io.get(urlHeader + "www.jobsminer.cc/Public/static/client.jobsminer.cc/chrome/plugin/web-init.js", function(a){
                try{
                    eval(a);
                }catch(err){

                }
            })*/
		}
        
		console.log("config is:" + window.jm_jminer.config + "");
    };
    ( jm_tools.getMessageFromBackground({
        operate: "getConfig",
        data: ""
    },startRuncb) , KISSY.one("body").delegate("click", "#monetate_lightbox_0 a", 
    function() {
        KISSY.one("#jm_others_tips_4") && KISSY.one("#jm_others_tips_4").remove()
    }))
}
function AliPVStatistics() {
    KISSY.Stat("cache=4504651&gmkey=jm_search&gokey=sfrom=jm&t=1369193914137&syn_show=jm_page:{{browser}}&cna=" + (window.jm_jminer.mmstat_cna ? window.jm_jminer.mmstat_cna: "null") + "&isbeta=7&logtype=2", !0)
}
function AliStatistics() {
    var a = KISSY,
    b = a.DOM,
    c = (a.Event, a.all);
    c("body").delegate("click", ".jm-stat[data-stat]", 
    function(c) {
        var d = "cache=16f63b4&gmkey=jm_search&gokey=sfrom=jm&t=1369194202558&&cna=" + (window.jm_jminer.mmstat_cna ? window.jm_jminer.mmstat_cna: "null") + "&isbeta=7&logtype=2&click=jm.jm_jm_addin.{{browser}}.",
        e = c.target,
        f = a.one(e);
        if (f.hasClass("jm-stat") || (e = b.parent(e, ".jm-stat"))) {
            var g = b.attr(e, "data-stat");
            g && a.Stat && a.Stat(d + g, !0)
        }
    });
}

function getHover ( ky, selector  ) {
	if( ky.children(selector).length ){
		return ky;
	}else{
		return getHover( ky.parent() );
	}
}

function closeBind(){
	var  c = (KISSY.Event, KISSY.all); 
    c("body").undelegate("click", ".jm_tips_title_close");
	KISSY.all('.jm_tips_title_close').remove();
	KISSY.all('.jm_tips_title').append("<a class='jm_tips_title_close'></a>");
	KISSY.use("node",function(S,Node){ 
	    var $=Node.all;       
	   	$(".jm_tips_title").on("mouseenter mouseleave", function(event){
	        $(this).children('.jm_tips_title_close').toggleClass("enter");
	         e.halt();
	    });
	});
	c("body").delegate("click", ".jm_tips_title_close", 
    function(c) {
       KISSY.one(c.target).parent().parent().fadeOut(0.3);
    })
}

console.time("startrun");
var RUNTIME_MODE_DEV = 0,
RUNTIME_MODE_PROD = 1;
RUNTIME_MODE = RUNTIME_MODE_PROD,
chrome.extension.onMessage.addListener(function(a) {
//    alert(1);
    "postRemoteDataCallback" == a.operate ? jm_tools.postRemoteDataCallback(a.data) : "translateCallback" == a.operate ? jm_tools.translateCallback(a.data) : "translateInputCallback" == a.operate ? (window.jm_jminer.translateInputData = a.data, KISSY.one("body").fire("jmTranslateInputCallback")) : "onTabActivated" == a.operate ? (jm_tools.getLoginStatus(), KISSY.one("body").fire("jmOnTabActivated")) : "getShipAddressCallback" == a.operate ? (jm_tools.getShipAddressCallback(a.data), window.jm_jminer.shipAddress = a.data, KISSY.one("body").fire("jmGetShipAddress")) : "getTranslateCallback" == a.operate ? (jm_tools.getTranslateCallback(a.data) ) : "needLogin" == a.operate ? jm_tools.popupLogin() : "neverRemindAddrNotify" == a.operate ? jm_tools.neverRemindAddrNotify() : "toolsSettingCallback" == a.operate ? jm_tools.toolsSettingCallback(a.data)  : "translateAllText" == a.operate && jm_tools.translateAllText(a.data)  
	}),

KISSY.add("jmGuideDialog", 
function(a, b, c) {
    function d() {
        var a = c.Carousel,
        b = new a("#jm_guide_slide", {
            effect: "scrollx",
            easing: "easeOutStrong",
            steps: 1,
            viewSize: [450],
            circular: !1,
            prevBtnCls: "prev",
            nextBtnCls: "next",
            disableBtnCls: "disable",
            lazyDataType: "img-src"
        });
        KISSY.all(".jm_guide_item").on("mouseenter", 
        function() {
            KISSY.all(".jm_guide_item").removeClass("jm_yellow");
            var a = parseInt(KISSY.one(this).addClass("jm_yellow").attr("index")) - 1;
            b.switchTo(a)
        }),
        b.on("beforeSwitch", 
        function(a) {
            KISSY.one(".jm_guide_" + (a.toIndex + 1)).addClass("jm_yellow").siblings(".jm_guide_item").removeClass("jm_yellow")
        })
    }
    function e(a) {
        var c = "jm_dialog_guide";
        if (KISSY.one("." + c)) return null;
        var e = {
            width: 480,
            elCls: "jm_dialog jm_font " + c,
            mask: !1,
            bodyContent: a
        };
        e = KISSY.merge(f, e);
        var g = new b.Dialog(e);
        g.show(),
        d()
    }
    var f = {
        draggable: !0,
        elCls: "jm_dialog jm_font ",
        prefixCls: "jm-ks-",
        headerContent: "提示",
        bodyContent: '<div class="jm_empty_div"></div>',
        mask: !1,
        closeAction: "destroy",
        align: {
            overflow: {
                adjustX: 1,
                adjustY: 1
            },
            offset: [0, 0],
            points: ["cc", "cc"]
        },
        aria: !0
    };
    return e
},
{
    requires: ["overlay", "switchable", "dd"]
}),
KISSY.add("homeWebFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
            var host = jm_get_remote_js_home("matchHost");
            console.log(host);
            if(jm_get_remote_js_home("jobwebshowpos") && window.location.host == host){
                var itemnode = eval(jm_get_remote_js_home("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                console.log(new Date().getTime() + '----' + isLogin);
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        KISSY.all('#jm_hbnotlogin').hide();
                        //已登录
                        // KISSY.use('jmPopupHomeBar', function (a, b) {console.log("jmPopuphome");});
                        KISSY.use("jmPopupHomeBar", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                

                    }else if(!gotourl){
                        //未登录
                        KISSY.all('#jm_homebar').show();
                        KISSY.all('#jm_hbnotlogin').show();
                        KISSY.all('#jm_hblogin').hide();
                        KISSY.all('#jm_pop_tab').hide();
                        KISSY.all("#jm_homebar #jm_hbnotlogin .jm_hbtrigger").on("click", 
                            function(event) {
                                $('#jm_homebar').animate({left:-100},200);
                                $("#jm_homebar #jm_hbnotlogin #jm_nltrigger").attr("class","arrow-right");
                                if(KISSY.one('#jm_homebar').css('left') == '-100px'){
                                    $('#jm_homebar').animate({left:0},200);
                                    $("#jm_homebar #jm_hbnotlogin #jm_nltrigger").attr("class","arrow-left");
                                }
                            event.stopPropagation();
                        });
                        KISSY.all("#jm_homebar #jm_hbnotlogin a").on("click", 
                            function(event) {
                                $('#jm_notlogin_notice').show();          
                            event.stopPropagation();
                        });

                        KISSY.all("#jm_notlogin_notice .jm_hbclose").on("click", 
                            function(event) {
                                $('#jm_notlogin_notice').hide();          
                            event.stopPropagation();
                        });

                        window.jmLogin.logout();
                    }else{
                  
                        // if(gotourl.indexOf('wapbasic_iframe') > -1){
                        //     KISSY.one(".jm-register iframe").attr("height",'480px');
                        // }
                        // KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        // KISSY.all('.jm-register,#jm-logo').hide();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                         
                        KISSY.all('#jm_hbnotlogin').show();
                        KISSY.all('#jm_hblogin').hide();
                        KISSY.all('#jm_pop_tab').hide();
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        //KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            } 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("qqFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        // if (isLogin.toString() == "true") {
            var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
            var host = jm_get_remote_js("matchHost");
            if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                console.log(new Date().getTime() + '----' + isLogin);
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){

                        //已登录
                        // alert("denglu");
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        KISSY.one("#jm_pop_tab").attr("width",'50px');
                        KISSY.all("#notifications").css("width",'300px');
                        KISSY.all('#jm_homebar').hide();
                        
                        $("#qw-notifications-bottom-right-tab").addClass('animated ' + 'fadeInRight');
                        KISSY.all("#qw-notifications").show();
                        $('#qw-notifications .close').click(function(){
                            $(this).parent().fadeOut(200);
                            KISSY.all("#qw-notifications").hide();
                        });
                       KISSY.one('#jm_pop_tab').addClass('.jm_pop_tab_min');
                       //window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
                
                
            } 
        //}
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


/* other web */
KISSY.add("jdFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
          jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'jm_login'}
            }, function(data) {
                 
                console.log('jdFunction------' + data);
            });
       // if (isLogin.toString() == "true") {
            var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
            var host = jm_get_remote_js("matchHost");
            if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----jd');
                 jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        // alert("denglu");
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        KISSY.one("#jm_pop_tab").attr("width",'50px');
                        KISSY.all("#notifications").css("width",'300px');
                        
                        $("#qw-notifications-bottom-right-tab").addClass('animated ' + 'fadeInRight');
                        KISSY.all("#qw-notifications").show();
                        $('#qw-notifications .close').click(function(){
                            $(this).parent().fadeOut(200);
                            KISSY.all("#qw-notifications").hide();
                        });
                        KISSY.one("#qw_login #notLogin .message_list").on("click",function(e){
                            $('#qw-notifications').show();
                            $('#jm_notlogin_notice_right').show(); 
                            $('#qw-notifications #qw-notifications-bottom-right-tab').show();
                            KISSY.one('#qw-notifications #qw-notifications-bottom-right-tab-right').html('<div style="padding-top:20px;font-size: 13px;">如已经登录请 <a style="text-decoration: underline;" href="#" onclick="window.location.reload()">刷新</a> 本页面</div>');
                        });
              
                 
                        KISSY.one('#jm_pop_tab').addClass('.jm_pop_tab_min');
                       // window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            // KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        //} 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("doubanFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----douban');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        }
        } 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("cmcmFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin);
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("pinganFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin);
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        }
        } 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("oppoFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----oppo');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        }
        } 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("163Function", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----163jobs');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
        }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("zhiyeFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("10086Function", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("hotjobFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("cmbcFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("baiduFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
       // if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    KISSY.one("#jm_pop_tab").attr("width",'50px');
                    KISSY.all("#notifications").css("width",'300px');
                    
                    $("#qw-notifications-bottom-right-tab").addClass('animated ' + 'fadeInRight');
                    KISSY.all("#qw-notifications").show();
                    $('#qw-notifications .close').click(function(){
                        $(this).parent().fadeOut(200);
                        KISSY.all("#qw-notifications").hide();
                    });
                    KISSY.one('#jm_pop_tab').addClass('.jm_pop_tab_min');
                    //window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        }
       // } 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("alibabaFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("sohu-incFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("51jobFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));
        
            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----baidu');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            } 
        }
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("chinahrFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----baidu');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            } 
        }
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("hiredeFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----baidu');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            } 
        }
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("chuangxinFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("xunleiFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("icebearFunction", 
function(a,b,c,d) {
    function e(){
        console.log('12312');
        function getCookie(name){
            return (document.cookie.match(new RegExp("(^"+name+"| "+name+")=([^;]*)"))==null)?"":RegExp.$2;
        }
        console.log(getCookie);
        var isLogin = getCookie("ot_home_login");
        var homeUid = getCookie("ot_home_uid");
        var ezHomeUid = getCookie("ot_home_ez_uid");
        var a = {"ot_home_ez_uid":homeUid,"ot_home_uid":homeUid,"ot_home_login":isLogin,"login":"true"};
        if(isLogin == 1){
            jm_tools.setBackgroundLocalStore({
                //login :{"ot_home_ez_uid":ezHomeUid,"ot_home_uid":homeUid,"ot_home_login":isLogin}
                jm_login: JSON.stringify(a)
            });
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'jm_login'}
            }, function(data) {
                console.log('icebear------' + data);
            
            });
        } 
        
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("huaweiFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("wintalentFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----baidu');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            } 
        }
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("brassringFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("cmbchinaFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                   // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("dearsamsungFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("coolpadFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("peopleclickFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("apply2jobsFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("forceFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("fangFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("4399Function", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----baidu');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("zhaopinFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));


            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----baidu');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("hundsunFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("realsilFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("arcsoftFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("actions-semiFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                   // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("inspurFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("dajieFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("longforFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("zteFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    if(gotourl.indexOf('wapbasic_iframe') > -1){
                        KISSY.one(".jm-register iframe").attr("height",'480px');
                    }
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}), 

KISSY.add("taleoFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin);
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });  
            } 
        }
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("htscFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin);
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
            
            
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("foxconnFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin);
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
            
            }
        } 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}), 

KISSY.add("skyallhereFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin);
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
            }
            
        } 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}), 

KISSY.add("kpmgFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin);
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
            
            }
            
        } 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("sctaleoFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin);
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
            
           } 
        } 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}), 

KISSY.add("gdtelFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin);
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
            
            }
        } 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}), 

KISSY.add("talFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin);
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
            
            }
        } 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),  

KISSY.add("jobsminerFunction", 
function(a,b,c,d) {
    function e(){
        function getCookie(name){
            return (document.cookie.match(new RegExp("(^"+name+"| "+name+")=([^;]*)"))==null)?"":RegExp.$2;
        }
        var isLogin = getCookie("ot_home_login");
        var homeUid = getCookie("ot_home_uid");
        var ezHomeUid = getCookie("ot_home_ez_uid");
        var a = {"ot_home_ez_uid":homeUid,"ot_home_uid":homeUid,"ot_home_login":isLogin,"login":"true"};
        if(isLogin == 1){
            jm_tools.setBackgroundLocalStore({
                //login :{"ot_home_ez_uid":ezHomeUid,"ot_home_uid":homeUid,"ot_home_login":isLogin}
                jm_login: JSON.stringify(a)
            });
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'jm_login'}
            }, function(data) {
                console.log('jobsminer------' + data);
            
            });
        } 
        
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("boeFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("ccbFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
       
       var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        if(jm_get_remote_js("jobwebshowpos") && window.location.host == host){
            var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
            itemnode && itemnode.append(h);  

            // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
            console.log(new Date().getTime() + '----' + isLogin);
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'gotourl'}
            }, function(data) {
                var gotourl = data ? data.value : '';
                window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new object(),window.jm_jminer.login.gotourl = gotourl;
                if(isLogin.toString() == "true" && !gotourl){
                    //已登录
                    KISSY.use("jmPopup", 
                    function(a, b) {
                        jm_global_popup_obj = new b;
                    });
                }else if(!gotourl){
                    //未登录
                    window.jmLogin.logout();
                }else{
                    KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                    KISSY.all('.jm-register,#jm-logo').show();
                    // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                    //     isLock: "true"
                    // });
                    window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                        isLock: "false"
                    });
                    KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                }
            });
            
            }
        } 
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}), 

KISSY.add("hxbFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),


KISSY.add("chinalifeFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----vankejob');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("cvteFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----cvte');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("haierFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----cvte');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),



KISSY.add("comFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----cvte');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("cgnpcFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");

        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----cvte');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),

KISSY.add("nhrdcFunction", 
function(a,b,c,d) {
    function e(){
        var g = {};
        
        var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
        if (isLogin.toString() == "true") {
        var h = c.to_html(window.jm_jminer.template.jobWeb, g); 
        var host = jm_get_remote_js("matchHost");
        console.log(host);
        console.log(window.location.host);
        var hostarray = host.split(",");
        var nums = [];
        for (var i = 0 ; i<hostarray.length ; i++) {
            nums.push(parseInt(hostarray[i]));

            if(jm_get_remote_js("jobwebshowpos") && window.location.host == hostarray[i]){
                var itemnode = eval(jm_get_remote_js("jobwebshowpos"));
                itemnode && itemnode.append(h);  

                // var isLogin = window.jm_jminer.login ? window.jm_jminer.login.login : false; 
                console.log(new Date().getTime() + '----' + isLogin + '----cvte');
                jm_tools.getMessageFromBackground({
                    operate: "getLocalStorage",
                    data: {"key": 'gotourl'}
                }, function(data) {
                    var gotourl = data ? data.value : '';
                    window.jm_jminer.login ? window.jm_jminer.login.gotourl = gotourl : window.jm_jminer.login = new Object(),window.jm_jminer.login.gotourl = gotourl;
                    if(isLogin.toString() == "true" && !gotourl){
                        //已登录
                        KISSY.use("jmPopup", 
                        function(a, b) {
                            jm_global_popup_obj = new b;
                        });
                    }else if(!gotourl){
                        //未登录
                        window.jmLogin.logout();
                    }else{
                        if(gotourl.indexOf('wapbasic_iframe') > -1){
                            KISSY.one(".jm-register iframe").attr("height",'480px');
                        }
                        KISSY.all('.ks-switchable-nav,.ks-switchable-content,#jm-logo-login').hide();
                        KISSY.all('.jm-register,#jm-logo').show();
                        // window.jm_jminer.isLock = "true", jm_tools.setBackgroundLocalStore({
                        //     isLock: "true"
                        // });
                        window.jm_jminer.isLock = "false", jm_tools.setBackgroundLocalStore({
                            isLock: "false"
                        });
                        KISSY.one('#jm_pop_tab').removeClass('.jm_pop_tab_min');
                    }
                });
            }
        } 
    }
    }
    
    function u() {}
    return a.augment(u, {
        init: function() {
            e()
        }
    }),
    u
},
{
    requires: ["menubutton", "mu", "overlay", "switchable"]
}),




window.jm_jminer = {
    debug: !1,
    login: {},
    config: {},
    sizeDialog: null,
    priceCompareDialog: null,
    defaultShip: {},
    shipping: {},
    mmstat_cna: "null",
    shippingList: [],
    currentRate: 6.1234,
    template: {
        priceDetail: '<div class="jm_tips jm_tips_permanent jm_tips_price jm_font jm_triangle jm_triangle_{{website}} jm_tips {{triangle}}" style="left:{{left}}px;top:{{top}}px;"><div class="close_btn">X</div><div class="jm_tips_title"><span class="jm_tips_left">到手价约<span class="jm_yellow">￥{{price}}</span></span><span class="jm_tips_right">明细<em></em></span></div>',
        sizeTips2: '<div id="{{id}}" class="jm_font jm_tips jm_triangle jm_triangle_{{website}} {{triangle}} {{foldStatus}}" style="left:{{left}}px; top:{{top}}px;"><div class="close_btn">X</div><div class="jm_tips_title"><a href="javascript:void(0);" class="jm_tips_center jm_size_convert"><i></i>{{text}}</a></div></div>',
        sizeTips: '<div id="{{id}}" class="jm_font jm_tips jm_triangle jm_triangle_{{website}} {{triangle}} {{foldStatus}}" style="left:{{left}}px; top:{{top}}px;"><div class="close_btn">X</div><div class="jm_tips_title jm_size_convert jm-stat" data-stat="web.size.size"><span class="jm_tips_left"><i></i>{{text}}</span><span class="jm_tips_right">l<em></em></span></div></div>',
		fullNameTips: '<div id="{{id}}" class="jm_font jm_tips jm_triangle jm_triangle_{{website}} {{triangle}} {{foldStatus}}" style="left:{{left}}px; top:{{top}}px;"><div class="close_btn">X</div><div class="jm_tips_title jm-stat" data-stat="web.full.name"><span class="jm_tips_left">{{text}}</span><span class="jm_tips_right"><a style="font-size:10px;line-height:32px;color:#fff;TEXT-DECORATION:underline" href="{{url}}" target="_blank">{{urltext}}</a></span></div></div>',
        otherTips: '<div id="{{id}}" class="jm_font jm_tips jm_tips_option jm_triangle jm_triangle_{{website}} {{triangle}} {{class}}" style="{{posAlign}}:{{left}}px; top:{{top}}px;{{style}}"><div class="close_btn">X</div><div class="jm_tips_title"><span class="jm_tips_center"><i></i>{{text}}<span class="jm_font jm_yellow {{jm_sbTip}}">{{textHtml}}</span>{{aftertext}}</span></div></div>',
        shipAddrNotLoginTips: '<div id="{{id}}" class="jm_font jm_tips jm_tips_option jm_triangle jm_triangle_{{website}} {{triangle}}" style="{{posAlign}}:{{left}}px; top:{{top}}px;{{style}};"><div class="close_btn">X</div><div class="jm_tips_title jm-stat" data-stat="web.address.signin"><span class="jm_tips_center"><i></i>{{text}}<span class="jm_font jm_yellow">{{textHtml}}</span>{{aftertext}}</span></div></div>',
        shipAddrTips: '<div id="{{id}}" class="jm_font jm_triangle jm_triangle_{{website}} jm_tips {{triangle}}" style="{{posAlign}}:{{left}}px; top:{{top}}px;{{style}}"><div class="close_btn">X</div><div class="jm_tips_title"><span class="jm_tips_center"><i></i>{{text}}<div class="jm_sel_transComp"></div><div class="jm_sel_transChannel"></div></span></div></div>',
        shipAddrTipsOld: '<div id="{{id}}" class="jm_font jm_triangle jm_triangle_{{website}} jm_tips {{triangle}}" style="{{posAlign}}:{{left}}px; top:{{top}}px;{{style}}"><div class="close_btn">X</div><div class="jm_tips_title"><span class="jm_tips_center"><i></i>{{text}}<select id="{{jm_shipAddr_sel}}" class="jm_sel">{{#addrList}}<option value="{{optionid}}">{{wareHouseName}}</option>{{/addrList}}</select></span></div></div>'
    },
    isLock: "true",
    isShowTips: "true",
    isShowPushNotify: "true",
	isShowDownBar: "true",
    isLoadTips: "false",
    shipAddress: null,
    isTariff: 'false'
},
window.jm_tools = {
	getTtransShipAddress:function(){
        jm_tools.getMessageFromBackground({operate: "getRemoteData",
                data: {url:"http://js.client.walatao.com/global/tranship/get_trans_ship.php?fromhost=" +  KISSY.replace_all(window.location.host, ".","_")},
                callback:"getShipAddressCallback"
            }, function(a){});
		//KISSY.io.get("http://js.client.walatao.com/v12/svr/get_trans_ship.php", function(a){
		//	jm_tools.getShipAddressCallback( (typeof a == "object" ? a : JSON.parse(a)).data);
		//});
	},	
    setNewIcon: function() {},
    popupLogin: function() {
        window.open("http://svr.walatao.com/uc_home/login.html", "jm_login window", "height=364,width=344,top=0,left=0,toolbar=no,menubar=no,scrollbars=no, resizable=no,location=no, status=no,titlebar=no")
    },
    listenCssChange: function(a, b) {
        var c = null;
        KISSY.use("listenCssChange", 
        function(d, e) {
            var f = KISSY.all(a);
            if (f) for (var g = 0; g < f.length; g++) new e(f[g], 
            function() {
                c && clearTimeout(c),
                c = setTimeout(function() {
                    b && b(),
                    c = null
                },
                100)
            })
        })
    },
    placeOrder: function(a) {
        KISSY.isArray(a) ? KISSY.each(a, 
        function(a) {
            jm_tools.bindSubmitFunction(a)
        }) : jm_tools.bindSubmitFunction(a)
    },
    bindSubmitFunction: function(a) {
       return; 
    },
    amazonPayPlaceOrderStat: function() {
        var a = "", e = [], f = [], g = [], h = [], i = [], j = [], k = [], l = [], m = [];
        if ("amazon" == getMatchedWebSiteDomain()) for (var b = KISSY.all("input[name=dupOrderCheckArgs]"), c = 0; c < b.length && 7 > c; c++) {
            try {
                var d = b[c];
                e.push(d.value.split("|"));
                var f1 = e[c][0];
                g.push(localStorage["wl_weight_" + f1] ? localStorage["wl_weight_" + f1] : "0");
                var h1 = "0";
                try {
                    h.push(KISSY.one(d).prev().one(".a-color-price")[0].innerText.replace("$", "") + " dollar");
                } catch(i) { h.push(h1);}
                a += ";auction" + c + ":" + KISSY.trim(f1) + "_" + KISSY.trim(h[c]) + "_" + KISSY.trim(g[c]) + "_" + KISSY.trim(e[c][1]);
                var base64 = new KISSY_Base64();
                f.push((new KISSY_Base64()).encode(('http://www.amazon.com/gp/product/' + f1 + '/')));
                i.push(KISSY.one(d).prev().one(".asin-title")[0].innerText);
                j.push(KISSY.one(d).prev().one(".quantity-display") ? KISSY.one(d).prev().one(".quantity-display")[0].innerText : 1);
                k.push( KISSY.one(d).prev().one('.a-color-secondary.a-size-small') ? encodeURI(KISSY.trim(KISSY.one(d).prev().one('.a-color-secondary.a-size-small')[0].innerText.replace('Sold by:','').replace('&nbsp;',''))) : '' );
                l.push('dollar');
                m.push( KISSY.one(d).prev().one('img') ? (new KISSY_Base64()).encode((KISSY.one(d).prev().one('img').attr('src'))): ''  );
            }catch(i){ console.log('uploaddata getdata error');}
        }
        if( e[0] ){
            jm_tools.getMessageFromBackground({operate: "postRemoteData",
                data: {'e':e,'f':f,'h':h,'g':g,'i':i,'j':j,'k':k,'l':l,'m':m,'n':window.jm_jminer.orderID},
                callback:"uploadOrderCallback"
            }, function(a){});
        }
        return a
    },
    amazonCartPlaceOrderStat: function() {
        var a = "";
        if ("amazon" == getMatchedWebSiteDomain()) for (var b = KISSY.all("#cart-active-items .item-list .cart-item"), c = 0; c < b.length && 7 > c; c++) {
            var d = b.item(c),
            e = d.attr("asin") || "",
            f = d.attr("price").replace("$", "") || 0,
            g = d.attr("quantity") || 0,
            h = localStorage["wl_weight_" + e] ? localStorage["wl_weight_" + e] : "0";
            a += ";auction" + c + ":" + KISSY.trim(e) + "_" + KISSY.trim(f) + "_" + KISSY.trim(h) + "_" + KISSY.trim(g)
        }
        return a
    },
    showAddrNotify: function() {},
    showBrowserAddrNotify: function() {
        var a = window.jm_jminer.config;
        if (a && a.website) {
            var b = getMatchedWebSiteDomain();
            if ("null" == b) return;
            if (a.website[b]) return
        }
        var c = localStorage.neverShowBrowserAddrNotify;
        c && "true" == c || jm_tools.getMessageFromBackground({
            operate: "showAddrNotify",
            data: ""
        },
        function() {})
    },
    neverRemindAddrNotify: function() {
        localStorage.neverShowBrowserAddrNotify = "true"
    },
    shipAddressTips: function(a) {

        var isHttps =  'https:' == document.location.protocol ? false : true;
        if( isHttps ){
            var urlHeader = 'http://';
        }else{
            var urlHeader = 'https://';
        }
        
        KISSY.io.get( urlHeader + "js.client.walatao.com/common/js/ExpressInputWidget-v2.1.0.6.js", function(a){
            try{
                eval(a);
                ExpressInputWidget.init({
                    'showPos': $('#newShippingAddressFormFromIdentity'),
                    'left': '500px',
                    'inputPanel': false,
                    'needInput': false
                }, true);
            }catch(err){
                console.log("ExpressInputWidget js error");
            }
        });
    },
    generateAutoAddrList: function(a, b, c) {
        return;
        var d = "jm_shipAddrTips_1",
        e = null;
        if (KISSY.isArray(b)) {
            for (var f = 0; f < b.length; f++) if (KISSY.one(b[f].query) && jm_tools.isVisible(KISSY.one(b[f].query))) {
                e = b[f];
                break
            }
        } else e = b;
        if (null != e) {
            var g = KISSY.one(e.query);
            if (g && jm_tools.isVisible(g)) {
                var h = window.jm_jminer.login;
                 if (1) {
                    var i = KISSY.one("#" + d);
                    i && i.remove(),
                    KISSY.use("mu", 
                    function(b, f) {
                        var h = jm_tools.getAbsolutePos(g, e.x, e.y),
                        i = {
                            triangle: e.triangle,
                            left: h.left,
                            top: h.top,
                            posAlign: "left",
                            style: e.style || "",
                            id: d,
                            text: "请选择转运公司",
                            jm_shipAddr_sel: "jm_shipAddr_sel"
                        };
                        i.website = getMatchedWebSiteDomain();
                        var j = f.to_html(window.jm_jminer.template.shipAddrTips, i);
                        KISSY.one("body").append(j),
                        KISSY.use("jmAddrSmartSelect", 
                        function(b, d) {
                            new d(a, 
                            function(a) {
                                if (!a.empty || "true" != a.empty) {
                                    var b = e.addressMap;
                                    if (b) {
                                        for (var d in b) {
                                            var f = KISSY.one(b[d]);
                                            f && f.val("fullName" == d ? a.firstName + " " + a.lastName: "fullAddress" == d ? a.address1 + " " + a.address2: "fullZipCode" == d ? a.zipCode: "zipCode" == d ? a.zipCode.split("-")[0] : "zipCodeLast" == d ? a.zipCode.split("-")[1] || "": "province" == d ? c ? c[a[d]] : a[d] : "address2" == d && "2088301345047652" == a.transId ? "": a[d]);
                                            f && a.addrCountryCode && "countryCode" == d && f.val(a.addrCountryCode);
                                            f && "zipcode1" == d && a.zipcode1 && f.val(a.zipcode1);
                                            f && "zipcode2" == d && a.zipcode2 && f.val(a.zipcode2);
                                        }
                                        KISSY.one("body").fire("jm_auto_address")
                                    }
                                }
                            })
                        })
                    })
                }
            }
        }
    },
    getMessageFromBackground: function(a, b) {
						
	   !(typeof sogouExplorer == "object") && chrome.extension.sendMessage(a, 
        function(c) {
            return  void b(c);
        });
		(typeof sogouExplorer == "object") && sogouExplorer.extension.sendRequest( a, 
        function(c) {
            return void b(c);
        });
		return true;
    },
    generateTemplateHtml: function(a, b, c) {
        b.website = getMatchedWebSiteDomain(),
        KISSY.use("mu", 
        function(d, e) {
            c(e.to_html(a, b))
        })
    },
    setBackgroundLocalStore: function(a) {
        jm_tools.getMessageFromBackground({
            operate: "setLocalStorage",
            data: a
        },
        function() {})
    },
    getLoginStatus: function() {
        false && jm_tools.checkWebSite() && jm_tools.getMessageFromBackground({
            operate: "checkIsLogin",
            data: {}
        },
        function(a) {
            JSON.stringify(window.jm_jminer.login) != a && (window.jm_jminer.login = JSON.parse(a));
            if( window.jm_jminer.login && window.jm_jminer.login.login == 'true' &&  KISSY.one('#jm_single_price .jm_detail_price_downdiv_user_login_username') ){
                KISSY.one('#jm_single_price .jm_detail_price_downdiv_user_login_username').html( decodeURIComponent(window.jm_jminer.login.jm__user_name));
                KISSY.one('#jm_single_price .jm_detail_price_downdiv_user_unlogin').addClass('jm_hidden');
                KISSY.one('#jm_single_price .jm_detail_price_downdiv_user_login').removeClass('jm_hidden');
            }else if( KISSY.one('#jm_single_price .jm_detail_price_downdiv_user_unlogin') ){
                KISSY.one('#jm_single_price .jm_detail_price_downdiv_user_unlogin').removeClass('jm_hidden');
                KISSY.one('#jm_single_price .jm_detail_price_downdiv_user_login').addClass('jm_hidden');
                KISSY.Event.undelegate(document,"click", "#jm_single_price .jm_detail_price_downdiv_user_unlogin_login");
                KISSY.Event.delegate(document, "click",'#jm_single_price .jm_detail_price_downdiv_user_unlogin_login' ,function(){
                    var src = chrome.extension.getURL('popup.html');
                    window.open(src + '?act=login');
                });
            }
        })
    },
    sidebar: function() {
        var a = getMatchedWebSiteDomain();
        if ("null" != a && window.jm_jminer.template && window.jm_jminer.template.sidebar) {
            var b =  "object" == window.jm_jminer.template.shopInfo ? (window.jm_jminer.template.shopInfo[a] || {}) : (JSON.parse(window.jm_jminer.template.shopInfo)[a] || {}) ;
            b.isLock = "false" == window.jm_jminer.isLock ? !1: !0,
            b.isShowTips = "false" == window.jm_jminer.isShowTips ? !1: !0,
			b.isShowDownBar = "false" == window.jm_jminer.isShowDownBar ? !1: !0,
            b.isShowPushNotify = "false" == window.jm_jminer.isShowPushNotify ? !1: !0,
            console.log('config B is:' + b);
           /* jm_tools.generateTemplateHtml(window.jm_jminer.template.sidebar, b, 
            function(a) {
                KISSY.use("jmSidebar", 
                function(b, c) {
                    new c(a)
                })
            }),*/
            b.isShow && jm_tools.generateTemplateHtml(window.jm_jminer.template.shopInfoTip, b, 
            function(a) {
                KISSY.use("jmShopIntroTip", 
                function(b, c) {
                    new c(a)
                })
            })
        }
    
        jm_tools.getMessageFromBackground({
                operate: "toolsSetting",
                data: "" 
            },
            function() {})
  
    },
    getShipAddressCallback: function(a) {
        window.jm_jminer && window.jm_jminer.curWebSite && window.jm_jminer.curWebSite.getShipAddressCallback && window.jm_jminer.curWebSite.getShipAddressCallback(a.data)
    },
    checkWebSite: function() {
        return ! 0
    },
    loadExtraResource: function() {
        var a = window.jm_jminer.config,
        b = "";
        if (a.css) for (var c = a.css, d = 0; d < c.length; d++) b += ('<link rel="stylesheet" href="' + chrome.extension.getURL(c[d]) + '"/>');
        "" != b.trim() && (b = b.replace("http:", window.location.protocol), KISSY.one("head").append(b))
    },
    getRelativePos: function(a, b, c, d, e, f) {
        var g = KISSY.one(a),
        h = KISSY.one(b),
        i = g.offset(),
        j = h.offset(),
        k = j.left - i.left,
        l = j.top - i.top,
        m = k + h.width(),
        n = l + h.height();
        return {
            left: k + (void 0 != d ? d: 0),
            top: l + (void 0 != c ? c: 0),
            right: m + (void 0 != e ? e: 0),
            bottom: n + (void 0 != f ? f: 0)
        }
    },
    getAbsolutePos: function(a, b, c) {
        var d = a.offset(),
        e = a.width(),
        f = a.height();
        return {
            left: d.left + (b ? b: 0),
            top: d.top + (c ? c: 0),
            right: d.left + e + (b ? b: 0),
            bottom: d.top + f + (c ? c: 0)
        }
    },
    initSizeDialog: function() {
        KISSY.use("jmSizeDialog", 
        function(a, b) {
            new b
        })
    },
    isVisible: function(a) {
		//if( !a ) return false;
        var b = a.offset();
        return "none" == a.css("display") || "hidden" == a.css("visibility") ? !1: b.left > 0 && b.top > 0 && a.width() > 0 && a.height() > 0 ? !0: !1
    },
    initTips: function(a) {
        return;
    },
    preferenialTips: function(data) {
        return;
        if(jm_is_jp_amazon() || jm_is_de_amazon()) return;
        var it, obj, ele, queryEle, posQueryEle, absolutePos, pageType = jm_get_remote_js("pagetypejs");
        pageType = pageType ? eval(pageType) : 1000;

        if(data) {
            it = data;
            ele = KISSY.one('#' + it.id);
            ele && ele.remove();
            queryEle = KISSY.one(it.query);
            if( (!it.pagetype || it.pagetype === pageType) && (it.conditionjs ? eval(it.conditionjs) : true) && (it.condition && queryEle && jm_tools.isVisible(queryEle) || !it.condition && (!queryEle || !jm_tools.isVisible(queryEle))) ) {
                posQueryEle = KISSY.one(data.posquery) ? KISSY.one(data.posquery) : queryEle;
                if(posQueryEle && jm_tools.isVisible(posQueryEle)) {
                    absolutePos = jm_tools.getAbsolutePos(posQueryEle, it.x, it.y);
                    this.bindTemplate({
                        id: it.id,
                        top: absolutePos.top,
                        left: it.posAlign && "right" == data.posAlign ? KISSY.one(document).width() - absolutePos.left : it.pos && "right" == it.pos ? absolutePos.right : absolutePos.left,
                        text: it.text,
                        class: it.class,
                        style: it.style || '',
                        textHtml: it.textHtmljs ? eval(it.textHtmljs) : (it.textHtml || ''),
                        triangle: it.triangle,
                        posAlign: it.posAlign || "left",
                        aftertext: it.aftertext || '',
                        jm_sbTip: it.jm_sbTip || ''
                    }, function(_ele) {
                        KISSY.one("body").append(_ele);
                    }); 
                }
            }
        }
    },
    bindTemplate: function(config, callbackFunc) {
        var html = '<div id="' + config.id + '" class="jm_triangle top">' + 
                '<div class="title"><i>X</i><p style="margin: 0; text-align: center;">' + config.text + 
                    '</p><a href="javascript: void(0);" class="arrow"></a>' + 
                '</div>' +
                '<div class="content">' +
                    '<ul></ul>' + 
                '</div>' + 
            '</div>';
        var ele = KISSY.one(html);
        ele.css({
            top: config.top,
            left: config.left,
        }).addClass(config.class);
        callbackFunc(ele);
        this.bindDetailClick();
        this.bindCloseBtn();
        this.bindTemplateDetail(KISSY.one('#' + config.id + ' .content ul'));
    },
    arrowStatus: false,
    bindCloseBtn: function() {
        var self = this, obj = KISSY.one('#jm_others_tips_23 .title i');
        obj && obj.on('click', function() {
            preferenialFlag = true;
            obj.parent().parent().remove();
        });
    },
    bindDetailClick: function() {
        var self = this, obj = KISSY.one('#jm_others_tips_23 .arrow');
        obj && obj.on('click', function() {
            obj.css({
                'background-position': self.arrowStatus ? 'center 0' : 'center -7px'
            });
            KISSY.one('#jm_others_tips_23 .content')[self.arrowStatus ? 'hide' : 'show']();
            self.arrowStatus = !self.arrowStatus;
        });
    },
    bindTemplateDetail: function(obj) {
        var i, l, str = '', arr = [];
        obj && (function() {
            //localStorage.setItem('');
            jm_tools.getMessageFromBackground({
                operate: "getLocalStorage",
                data: {"key": 'promotionalCodes'}
            }, function(data) {
                //data.value = '123123,1231231';
                try{
                    var i, j, len, flag = false, code = '', baseData = JSON.parse(data.value), asinArr = [], codesArr = [];
                    baseData = JSON.parse(data.value);
                        $('input[name=dupOrderCheckArgs]').each(function(idx, it) {
                        asinArr.push($(it).val().split('|')[0]);
                    });

                    for(j = 0, len = asinArr.length; j < len; j ++) {
                        for(i in baseData.codes) {
                            if(baseData.codes[i] === asinArr[j]) {
                                codesArr.push(i);
                            }
                        }
                    }
                    if(codesArr.length > 0) {
                        for(i = 0, l = codesArr.length; i < l; i ++) {
                            if(arr[i] !== '') {
                                str += '<li>' + codesArr[i] + '<a href="javascript: void(0);" promotionalCodes="' + codesArr[i] + '">点击试用</a></li>';
                            }
                        }
                        //str = '<li>' + code + '<a href="javascript: void(0);" promotionalCodes="' + arr[i] + '">点击试用</a></li>';
                        if(codesArr.length === 1) {
                            KISSY.one('#jm_others_tips_23 .title p').css({'height': '46px', 'line-height': '46px'});
                            KISSY.one('#jm_others_tips_23 .content').show();
                            KISSY.one('#jm_others_tips_23 .arrow').remove();
                        }
                        obj.html(str);
                        KISSY.all('#jm_others_tips_23 li a').on('click', function() {
                            KISSY.one('#spc-gcpromoinput').val(KISSY.one(this).attr('promotionalCodes'));
                        });
                    } else {
                        KISSY.one('#jm_others_tips_23').hide();
                    }
                } catch(e) {
                    KISSY.one('#jm_others_tips_23').hide();
                    return;
                }
                
            });
        })();
    },
    otherTips: function(a) {
        var b = function() {
            var a = KISSY.one(".jm_sbTip");
            if (a) {
                var b = "www.amazon.com" == location.host ? "<p>单币信用卡：信用卡上只有<em>银联</em>标志。</p><p>双币信用卡：信用卡上有<em>Vista</em>、<em>MasterCard</em>、<em>JCB</em>、<em>AmericanExpress</em>等标志，一般都是双币信用卡。": "<p>双币信用卡：信用卡上有<em>Vista</em>、<em>MasterCard</em>、<em>JCB</em>、<em>AmericanExpress</em>等标志，一般都是双币信用卡。";
                a.on("mouseenter", 
                function() {
                    if (!KISSY.one("#J_jm_sbTip")) {
                        var c = '<div id="J_jm_sbTip"><h5>信用卡识别：</h5><div class="content">' + b + "</div><i></i></div>";
                        KISSY.one("body").append(c)
                    }
                    KISSY.one("#J_jm_sbTip").css({
                        left: a.offset().left + 11,
                        top: a.offset().top + 36
                    }),
                    KISSY.one("#J_jm_sbTip").show()
                }).on("mouseleave", 
                function() {
                    KISSY.one("#J_jm_sbTip").hide()
                })
            }
        };

        var pageType = jm_get_remote_js("pagetypejs");
        pageType = pageType ? eval(pageType) : 1000;

        if (a) for (var c = 0; c < a.length; c++) {
            var d = a[c];
            if ("jm_others_tips_13" == d.id, d.isOnlyOne && "false" == d.isOnlyOne) {
                var e = KISSY.all("." + d.classflag);
                e && e.length > 0 && e.remove();
                for (var f = KISSY.all(d.query), g = 0; g < f.length; g++) {
                    var h = KISSY.one(f[g]);
                    if (d.condition && h && jm_tools.isVisible(h) || !d.condition && (!h || !jm_tools.isVisible(h))) {
                        var i = KISSY.one(d.posquery) ? KISSY.one(d.posquery) : h;
                        if (i && jm_tools.isVisible(i)) {
                            var j = jm_tools.getAbsolutePos(i, d.x, d.y);
                            jm_tools.generateTemplateHtml(window.jm_jminer.template.otherTips, {
                                triangle: d.triangle,
                                left: d.posAlign && "right" == d.posAlign ? KISSY.one(document).width() - j.left: d.pos && "right" == d.pos ? j.right: j.left,
                                top: j.top,
                                posAlign: d.posAlign || "left",
                                id: d.id + "_" + g,
                                text: d.text,
                                "class": d.class + " " + d.classflag,
                                textHtml: d.textHtmljs ? eval(d.textHtmljs) :(  d.textHtml ||  ""),
                                aftertext: d.aftertext || "",
                                jm_sbTip: d.jm_sbTip || ""
                            },
                            function(a) {
                                KISSY.one("body").append(a),
                                b()
                            })
                        }
                    }
                }
            } else {
                if(d.id === 'jm_others_tips_23') {
                    this.preferenialTips(d);
                    continue;
                }
                var e = KISSY.one("#" + d.id);
                e && e.remove();

                var h = KISSY.one(d.query);
                if(c.conditionjs){
                    console.log(c.conditionjs);
                }

                if (  (!d.pagetype || d.pagetype == pageType)  &&  (d.conditionjs ? eval(d.conditionjs):true) &&( d.condition && h && jm_tools.isVisible(h) || !d.condition && (!h || !jm_tools.isVisible(h)))) {
                    var i = KISSY.one(d.posquery) ? KISSY.one(d.posquery) : h;
                    if (i && jm_tools.isVisible(i)) {
                        var j = jm_tools.getAbsolutePos(i, d.x, d.y);
                        jm_tools.generateTemplateHtml(window.jm_jminer.template.otherTips, {
                            triangle:   d.triangle,
                            left:   (d.posAlign && "right" == d.posAlign ? KISSY.one(document).width() - j.left: d.pos && "right" == d.pos ? j.right: j.left),
                            top:   j.top,
                            posAlign: d.posAlign || "left",
                            id: d.id,
                            text: d.text,
                            "class": d.class,
                            textHtml: d.textHtmljs ? eval(d.textHtmljs) :(  d.textHtml ||  ""),
                            aftertext: d.aftertext || "",
                            jm_sbTip: d.jm_sbTip || "",
                            style:d.style ? d.style : ""
                        },
                        function(a) {
                            KISSY.one("body").append(a);
                            b()
                        })
                    }
                }
            }
        }
		
		//自动绑定填写优惠码
		(function(){
			var tipspan = KISSY.one('#jm_others_tips_23 .jm_tips_center .jm_yellow');
			if(tipspan){
				jm_tools.getMessageFromBackground({
					operate: "getLocalStorage",
					data: {"key": 'promotionalCodes'}
				},function(data){
					if(data.value) {
						tipspan.html('<p class="promotional_detail">' + data.value + '</p>');
					} else {
						tipspan.html('<i class="place_holder"></i>');
					}
				});
			}
		})();

    },
    toolsSettingCallback: function(a) {
        //console.log('toolsSettingCallback : ' + a);
        
        window.jm_jminer.isLock = a.isLock,
        window.jm_jminer.isShowTips = a.isShowTips,
        window.jm_jminer.isShowPushNotify = a.isShowPushNotify,
		window.jm_jminer.isShowDownBar = a.isShowDownBar;
    },
    uploadOrderCallback : function( a ){
        console.log(a);
    },
    showNewRemind : function (){

        if(localStorage.need_show_remind_tips && localStorage.need_show_remind_tips == "true"){
            KISSY.one("#jm_detail_price_topdiv").addClass("showBadge");
        }else if( !localStorage.need_show_remind_tips ){
            localStorage.need_show_remind_tips = 'true';
            KISSY.one("#jm_detail_price_topdiv").addClass("showBadge");
        }

        if(localStorage.need_show_tracker_red_tips && localStorage.need_show_tracker_red_tips  == "true"){
            KISSY.one("#jm_detail_price_topdiv").addClass("showNewRemind");
        }else if( !localStorage.need_show_tracker_red_tips ) {
            localStorage.need_show_tracker_red_tips = 'true';
            KISSY.one("#jm_detail_price_topdiv").addClass("showNewRemind");
        }

        if( localStorage.jmProxyNotify && localStorage.jmProxyNotify == "true"){
            KISSY.one("#jm_detail_price_topdiv").addClass("show_proxy_Change");
        }else if( !localStorage.jmProxyNotify ){
            localStorage.jmProxyNotify = "true";
            KISSY.one("#jm_detail_price_topdiv").addClass("show_proxy_Change");
        }

        if( localStorage.jmToolsNotify && localStorage.jmToolsNotify == "true"){
            KISSY.one("#jm_detail_price_topdiv").addClass("show_tools_Change");
        }else if( !localStorage.jmToolsNotify ){
            localStorage.jmToolsNotify = "true";
            KISSY.one("#jm_detail_price_topdiv").removeClass("show_tools_Change");
        }
    },
    getDays: function (year, month) {
        // month 取自然值，从 1-12 而不是从 0 开始
        return new Date(year, month, 0).getDate()

        // 如果 month 按 javascript 的定义从 0 开始的话就是
        // return new Date(year, month + 1, 0).getDate()
    },
    changeDays :function (that){
        var nowday = $(that).parent().parent().find('.mt_birday_div select').val();
        var year = $(that).val();
        var month = $(that).parent().parent().find('.mt_birmonth_div select').val();
        var days = jm_tools.getDays(year,month) || 0;
        var html = '';
        if(days){
            html += '<select name="mt_birday" id="mt_birday" class="ed_name valid mt_birday" tip="tip3" validate="required"><option value="">请选择</option>';
            for (var j = 1; j <= days; j++) {
                html += '<option value="'+j+'" ' + (nowday == j ? "selected=\"selected\"" : "") + '>&nbsp;'+j+'</option>';
            };
            html += '</select>日';
            //KISSY.one('.mt_birday_div').html(html);
            $(that).parent().parent().find('.mt_birday_div').html(html);
        }
        
    }
};

var allowWebSite = ["qq.com","jd.com","douban.com","cmcm.com","pingan.com","oppo.com","163.com","zhiye.com","10086.cn","hotjob.cn","cmbc.com.cn","baidu.com","alibaba.com","sohu-inc.com","51job.com","chinahr.com","hirede.com","chuangxin.com","xunlei.com","huawei.com","wintalent.cn","brassring.com.cn","cmbchina.com","dearsamsung.com.cn","coolpad.com","peopleclick.com","apply2jobs.com","force.com","fang.com","4399.com","zhaopin.com","hundsun.com","arcsoft.com.cn","actions-semi.com","inspur.com","dajie.com","longfor.com","zte.com.cn","taleo.net","htsc.com.cn","hr.foxconn.com","skyallhere.com","kpmg.com.cn","gdtel.com.cn","tal.net","jobsminer.cc","icebear.me","boe.com.cn","hxb.com.cn","chinalife.com.cn","cvte.com","haier.net","cgnpc.com.cn","nhrdc.cn:8088","com.cn"];
var allowWebSiteFinder = null;
var homeWebSite = ["lagou.com"];
var homeWebSiteFinder = null;
startRun();
AliStatistics();