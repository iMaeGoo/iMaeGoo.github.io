window.live2d_settings=Array(),live2d_settings.modelAPI="//live2d.fghrsh.net/api/",live2d_settings.tipsMessage="waifu-tips.json",live2d_settings.hitokotoAPI="lwl12.com",live2d_settings.modelId=1,live2d_settings.modelTexturesId=53,live2d_settings.showToolMenu=!0,live2d_settings.canCloseLive2d=!0,live2d_settings.canSwitchModel=!0,live2d_settings.canSwitchTextures=!0,live2d_settings.canSwitchHitokoto=!0,live2d_settings.canTakeScreenshot=!0,live2d_settings.canTurnToHomePage=!0,live2d_settings.canTurnToAboutPage=!0,live2d_settings.modelStorage=!0,live2d_settings.modelRandMode="switch",live2d_settings.modelTexturesRandMode="rand",live2d_settings.showHitokoto=!0,live2d_settings.showF12Status=!0,live2d_settings.showF12Message=!1,live2d_settings.showF12OpenMsg=!0,live2d_settings.showCopyMessage=!0,live2d_settings.showWelcomeMessage=!0,live2d_settings.waifuSize="280x250",live2d_settings.waifuTipsSize="250x70",live2d_settings.waifuFontSize="12px",live2d_settings.waifuToolFont="14px",live2d_settings.waifuToolLine="20px",live2d_settings.waifuToolTop="0px",live2d_settings.waifuMinWidth="768px",live2d_settings.waifuEdgeSide="left:0",live2d_settings.waifuDraggable="disable",live2d_settings.waifuDraggableRevert=!0,live2d_settings.l2dVersion="1.4.2",live2d_settings.l2dVerDate="2018.11.12",live2d_settings.homePageUrl="auto",live2d_settings.aboutPageUrl="https://www.fghrsh.net/post/123.html",live2d_settings.screenshotCaptureName="live2d.png",String.prototype.render=function(d){return this.replace(/(\\)?\{([^\{\}\\]+)(\\)?\}/g,function(e,t,i,s){if(t||s)return e.replace("\\","");for(var o=i.replace(/\s/g,"").split("."),n=d,a=0,l=o.length;a<l;++a)if(null==(n=n[o[a]]))return"";return n})};var re=/x/;function empty(e){return void 0===e||null==e||""==e}function getRandText(e){return Array.isArray(e)?e[Math.floor(Math.random()*e.length+1)-1]:e}function showMessage(e,t,i){!i&&""!==sessionStorage.getItem("waifu-text")&&null!==sessionStorage.getItem("waifu-text")||(Array.isArray(e)&&(e=e[Math.floor(Math.random()*e.length+1)-1]),live2d_settings.showF12Message&&console.log("[Message]",e.replace(/<[^<>]+>/g,"")),i&&sessionStorage.setItem("waifu-text",e),$(".waifu-tips").stop(),$(".waifu-tips").html(e).fadeTo(200,1),hideMessage(t=void 0===t?5e3:t))}function hideMessage(e){$(".waifu-tips").stop().css("opacity",1),void 0===e&&(e=5e3),window.setTimeout(function(){sessionStorage.removeItem("waifu-text")},e),$(".waifu-tips").delay(e).fadeTo(200,0)}function initModel(waifuPath,type){eval(function(e,t,i,s,o){if(s=function(e){return(e<60?"":s(parseInt(e/60)))+(35<(e%=60)?String.fromCharCode(e+29):e.toString(36))},!"".replace(/^/,String)){for(;t--;)o[s(t)]=i[t]||s(t);i=[function(e){return o[e]}],s=function(){return"\\w+"},t=1}for(;t--;)i[t]&&(e=e.replace(new RegExp("\\b"+s(t)+"\\b","g"),i[t]));return e}("8.d(\" \");8.d(\"\\U,.\\y\\5.\\1\\1\\1\\1/\\1,\\u\\2 \\H\\n\\1\\1\\1\\1\\1\\b ', !-\\r\\j-i\\1/\\1/\\g\\n\\1\\1\\1 \\1 \\a\\4\\f'\\1\\1\\1 L/\\a\\4\\5\\2\\n\\1\\1 \\1 /\\1 \\a,\\1 /|\\1 ,\\1 ,\\1\\1\\1 ',\\n\\1\\1\\1\\q \\1/ /-\\j/\\1\\h\\E \\9 \\5!\\1 i\\n\\1\\1\\1 \\3 \\6 7\\q\\4\\c\\1 \\3'\\s-\\c\\2!\\t|\\1 |\\n\\1\\1\\1\\1 !,/7 '0'\\1\\1 \\X\\w| \\1 |\\1\\1\\1\\n\\1\\1\\1\\1 |.\\x\\\"\\1\\l\\1\\1 ,,,, / |./ \\1 |\\n\\1\\1\\1\\1 \\3'| i\\z.\\2,,A\\l,.\\B / \\1.i \\1|\\n\\1\\1\\1\\1\\1 \\3'| | / C\\D/\\3'\\5,\\1\\9.\\1|\\n\\1\\1\\1\\1\\1\\1 | |/i \\m|/\\1 i\\1,.\\6 |\\F\\1|\\n\\1\\1\\1\\1\\1\\1.|/ /\\1\\h\\G \\1 \\6!\\1\\1\\b\\1|\\n\\1\\1\\1 \\1 \\1 k\\5>\\2\\9 \\1 o,.\\6\\2 \\1 /\\2!\\n\\1\\1\\1\\1\\1\\1 !'\\m//\\4\\I\\g', \\b \\4'7'\\J'\\n\\1\\1\\1\\1\\1\\1 \\3'\\K|M,p,\\O\\3|\\P\\n\\1\\1\\1\\1\\1 \\1\\1\\1\\c-,/\\1|p./\\n\\1\\1\\1\\1\\1 \\1\\1\\1'\\f'\\1\\1!o,.:\\Q \\R\\S\\T v\"+e.V+\" / W \"+e.N);8.d(\" \");",60,"|u3000|uff64|uff9a|uff40|u30fd|uff8d||console|uff8a|uff0f|uff3c|uff84|log|live2d_settings|uff70|u00b4|uff49||u2010||u3000_|u3008||_|___|uff72|u2500|uff67|u30cf|u30fc||u30bd|u4ece|u30d8|uff1e|__|u30a4|k_|uff17_|u3000L_|u3000i|uff1a|u3009|uff34|uff70r|u30fdL__||___i|l2dVerDate|u30f3|u30ce|nLive2D|u770b|u677f|u5a18|u304f__|l2dVersion|FGHRSH|u00b40i".split("|"),0,{})),"function"!=typeof $.ajax&&("function"==typeof jQuery.ajax?window.$=jQuery:console.log("[Error] JQuery is not defined.")),live2d_settings.waifuSize=live2d_settings.waifuSize.split("x"),live2d_settings.waifuTipsSize=live2d_settings.waifuTipsSize.split("x"),live2d_settings.waifuEdgeSide=live2d_settings.waifuEdgeSide.split(":"),$("#live2d").attr("width",live2d_settings.waifuSize[0]),$("#live2d").attr("height",live2d_settings.waifuSize[1]),$(".waifu-tips").width(live2d_settings.waifuTipsSize[0]),$(".waifu-tips").height(live2d_settings.waifuTipsSize[1]),$(".waifu-tips").css("top",live2d_settings.waifuToolTop),$(".waifu-tips").css("font-size",live2d_settings.waifuFontSize),$(".waifu-tool").css("font-size",live2d_settings.waifuToolFont),$(".waifu-tool span").css("line-height",live2d_settings.waifuToolLine),"left"==live2d_settings.waifuEdgeSide[0]?$(".waifu").css("left",live2d_settings.waifuEdgeSide[1]+"px"):"right"==live2d_settings.waifuEdgeSide[0]&&$(".waifu").css("right",live2d_settings.waifuEdgeSide[1]+"px"),window.waifuResize=function(){$(window).width()<=Number(live2d_settings.waifuMinWidth.replace("px",""))?$(".waifu").hide():$(".waifu").show()},"disable"!=live2d_settings.waifuMinWidth&&(waifuResize(),$(window).resize(function(){waifuResize()}));try{"axis-x"==live2d_settings.waifuDraggable?$(".waifu").draggable({axis:"x",revert:live2d_settings.waifuDraggableRevert}):"unlimited"==live2d_settings.waifuDraggable?$(".waifu").draggable({revert:live2d_settings.waifuDraggableRevert}):$(".waifu").css("transition","all .3s ease-in-out")}catch(err){console.log("[Error] JQuery UI is not defined.")}live2d_settings.homePageUrl="auto"==live2d_settings.homePageUrl?window.location.protocol+"//"+window.location.hostname+"/":live2d_settings.homePageUrl,"file:"==window.location.protocol&&"//"==live2d_settings.modelAPI.substr(0,2)&&(live2d_settings.modelAPI="http:"+live2d_settings.modelAPI),$(".waifu-tool .fui-home").click(function(){window.location=live2d_settings.homePageUrl}),$(".waifu-tool .fui-info-circle").click(function(){window.open(live2d_settings.aboutPageUrl)}),"object"==typeof waifuPath?loadTipsMessage(waifuPath):$.ajax({cache:!0,url:""==waifuPath?live2d_settings.tipsMessage:"waifu-tips.json"==waifuPath.substr(waifuPath.length-15)?waifuPath:waifuPath+"waifu-tips.json",dataType:"json",success:function(e){loadTipsMessage(e)}}),live2d_settings.showToolMenu||$(".waifu-tool").hide(),live2d_settings.canCloseLive2d||$(".waifu-tool .fui-cross").hide(),live2d_settings.canSwitchModel||$(".waifu-tool .fui-gear").hide(),live2d_settings.canSwitchTextures||$(".waifu-tool .fui-heart").hide(),live2d_settings.canSwitchHitokoto||$(".waifu-tool .fui-chat").hide(),live2d_settings.canTakeScreenshot||$(".waifu-tool .fui-photo").hide(),live2d_settings.canTurnToHomePage||$(".waifu-tool .fui-home").hide(),live2d_settings.canTurnToAboutPage||$(".waifu-tool .fui-info-circle").hide(),void 0===waifuPath&&(waifuPath="");var modelId=localStorage.getItem("modelId"),modelTexturesId=localStorage.getItem("modelTexturesId"),modelId,modelTexturesId;live2d_settings.modelStorage&&null!=modelId||(modelId=live2d_settings.modelId,modelTexturesId=live2d_settings.modelTexturesId),loadModel(modelId,modelTexturesId)}function loadModel(e,t){t=t||0,live2d_settings.modelStorage?(localStorage.setItem("modelId",e),localStorage.setItem("modelTexturesId",t)):(sessionStorage.setItem("modelId",e),sessionStorage.setItem("modelTexturesId",t)),loadlive2d("live2d",live2d_settings.modelAPI+"get/?id="+e+"-"+t,live2d_settings.showF12Status?console.log("[Status]","live2d","模型",e+"-"+t,"加载完成"):null)}function loadTipsMessage(e){window.waifu_tips=e,$.each(e.mouseover,function(e,t){$(document).on("mouseover",t.selector,function(){showMessage(getRandText(t.text).render({text:$(this).text()}),3e3)})}),$.each(e.click,function(e,t){$(document).on("click",t.selector,function(){showMessage(getRandText(t.text).render({text:$(this).text()}),3e3,!0)})}),$.each(e.seasons,function(e,t){var i=new Date,s=t.date.split("-")[0],o=t.date.split("-")[1]||s;s.split("/")[0]<=i.getMonth()+1&&i.getMonth()+1<=o.split("/")[0]&&s.split("/")[1]<=i.getDate()&&i.getDate()<=o.split("/")[1]&&showMessage(getRandText(t.text).render({year:i.getFullYear()}),6e3,!0)}),live2d_settings.showF12OpenMsg&&(re.toString=function(){return showMessage(getRandText(e.waifu.console_open_msg),5e3,!0),""}),live2d_settings.showCopyMessage&&$(document).on("copy",function(){showMessage(getRandText(e.waifu.copy_message),5e3,!0)}),$(".waifu-tool .fui-photo").click(function(){showMessage(getRandText(e.waifu.screenshot_message),5e3,!0),window.Live2D.captureName=live2d_settings.screenshotCaptureName,window.Live2D.captureFrame=!0}),$(".waifu-tool .fui-cross").click(function(){sessionStorage.setItem("waifu-dsiplay","none"),showMessage(getRandText(e.waifu.hidden_message),1300,!0),window.setTimeout(function(){$(".waifu").hide()},1300)}),window.showWelcomeMessage=function(e){var t,i,s;showMessage(window.location.href==live2d_settings.homePageUrl?getRandText(23<(s=(new Date).getHours())||s<=5?e.waifu.hour_tips["t23-5"]:5<s&&s<=7?e.waifu.hour_tips["t5-7"]:7<s&&s<=11?e.waifu.hour_tips["t7-11"]:11<s&&s<=14?e.waifu.hour_tips["t11-14"]:14<s&&s<=17?e.waifu.hour_tips["t14-17"]:17<s&&s<=19?e.waifu.hour_tips["t17-19"]:19<s&&s<=21?e.waifu.hour_tips["t19-21"]:21<s&&s<=23?e.waifu.hour_tips["t21-23"]:e.waifu.hour_tips.default):(t=e.waifu.referrer_message,""!==document.referrer?((i=document.createElement("a")).href=document.referrer,s=i.hostname.split(".")[1],window.location.hostname==i.hostname?t.localhost[0]+document.title.split(t.localhost[2])[0]+t.localhost[1]:"baidu"==s?t.baidu[0]+i.search.split("&wd=")[1].split("&")[0]+t.baidu[1]:"so"==s?t.so[0]+i.search.split("&q=")[1].split("&")[0]+t.so[1]:"google"==s?t.google[0]+document.title.split(t.google[2])[0]+t.google[1]:($.each(e.waifu.referrer_hostname,function(e,t){e==i.hostname&&(i.hostname=getRandText(t))}),t.default[0]+i.hostname+t.default[1])):t.none[0]+document.title.split(t.none[2])[0]+t.none[1]),6e3)},live2d_settings.showWelcomeMessage&&showWelcomeMessage(e);var o=e.waifu;function s(e){return(live2d_settings.modelStorage?localStorage:sessionStorage).getItem(e)}function t(){"visible"==$(document)[0].visibilityState&&i()}function i(){switch(live2d_settings.hitokotoAPI){case"lwl12.com":$.getJSON("https://api.lwl12.com/hitokoto/v1?encode=realjson",function(e){var t;empty(e.source)||(t=o.hitokoto_api_message["lwl12.com"][0],empty(e.author)||(t+=o.hitokoto_api_message["lwl12.com"][1]),t=t.render({source:e.source,creator:e.author}),window.setTimeout(function(){showMessage(t+o.hitokoto_api_message["lwl12.com"][2],3e3,!0)},5e3)),showMessage(e.text,5e3,!0)});break;case"fghrsh.net":$.getJSON("https://api.fghrsh.net/hitokoto/rand/?encode=jsc&uid=3335",function(e){var t;empty(e.source)||(t=(t=o.hitokoto_api_message["fghrsh.net"][0]).render({source:e.source,date:e.date}),window.setTimeout(function(){showMessage(t,3e3,!0)},5e3),showMessage(e.hitokoto,5e3,!0))});break;case"jinrishici.com":$.ajax({url:"https://v2.jinrishici.com/one.json",xhrFields:{withCredentials:!0},success:function(e,t){var i;empty(e.data.origin.title)||(i=(i=o.hitokoto_api_message["jinrishici.com"][0]).render({title:e.data.origin.title,dynasty:e.data.origin.dynasty,author:e.data.origin.author}),window.setTimeout(function(){showMessage(i,3e3,!0)},5e3)),showMessage(e.data.content,5e3,!0)}});break;default:$.getJSON("https://v1.hitokoto.cn",function(e){var t;empty(e.from)||(t=(t=o.hitokoto_api_message["hitokoto.cn"][0]).render({source:e.from,creator:e.creator}),window.setTimeout(function(){showMessage(t,3e3,!0)},5e3)),showMessage(e.hitokoto,5e3,!0)})}}live2d_settings.showHitokoto&&(window.getActed=!1,window.hitokotoTimer=0,window.hitokotoInterval=!1,$(document).mousemove(function(e){getActed=!0}).keydown(function(){getActed=!0}),setInterval(function(){getActed?(getActed=hitokotoInterval=!1,window.clearInterval(hitokotoTimer)):hitokotoInterval||(hitokotoInterval=!0,hitokotoTimer=window.setInterval(t,3e4))},1e3)),$(".waifu-tool .fui-gear").click(function(){var e,t;e=s("modelId"),t=live2d_settings.modelRandMode,$.ajax({cache:"switch"==t,url:live2d_settings.modelAPI+t+"/?id="+e,dataType:"json",success:function(i){loadModel(i.model.id);var s=i.model.message;$.each(o.model_message,function(e,t){e==i.model.id&&(s=getRandText(t))}),showMessage(s,3e3,!0)}})}),$(".waifu-tool .fui-heart").click(function(){var t,i,e;t=s("modelId"),i=s("modelTexturesId"),e=live2d_settings.modelTexturesRandMode,$.ajax({cache:"switch"==e,url:live2d_settings.modelAPI+e+"_textures/?id="+t+"-"+i,dataType:"json",success:function(e){1!=e.textures.id||1!=i&&0!=i?showMessage(o.load_rand_textures[1],3e3,!0):showMessage(o.load_rand_textures[0],3e3,!0),loadModel(t,e.textures.id)}})}),$(".waifu-tool .fui-chat").click(function(){i()})}console.log(re);