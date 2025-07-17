//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (s) {
//==== END TRANSFORM CODE ====
/* Plugin Config */
s.usePlugins = true;

function s_doPlugins(s) {
  s.eVar18 = s.prop18 = s_getLoadTime();
  s.prop13 = s.getNewRepeat(30, 's_getNewRepeat');
  s.eVar13 = s.getNewRepeat(30, 's_getNewRepeat');
  s.pte = 'event100,event101,event102,event103,event104,event105,event106,event107,event108,event109'
  //[--------------------------- 1 to 8 ---------------------------][-- 9 --][- 10 -]
  s.ptc = false;
  /* Performance Timing */
  s.eVar100 = s.getPreviousValue(s.pageName, 'gpv_v9', ''); //Record the previous page name in the designated eVar of your choice
  s.performanceTiming()
  s.events = s.apl(s.events, "event110", ",", 1)
  s.eVar78 = s.Util.getQueryParam('intcmp');
  s.eVar154 = _satellite.getVar("accessibleSiteSpeedMetrics");
  s.eVar10 = _satellite.getVar("hitTime");
  s.eVar8 = _satellite.getVar("fullURL");
  s.eVar3 = _satellite.getVar("ECID");
  /*if (_satellite.getVar("reservTypeChat") && digitalData.PageInfo.pageName === "Amtrak-Reservations-Payment") {
    s.eVar101 = _satellite.getVar("reservTypeChat");

    s.events = s.events || '';  // Make sure s.events is defined
    var eventsArray = s.events.split(',');
    if (eventsArray.indexOf('event323') === -1) {
      eventsArray.push('event323');
    }
    s.events = eventsArray.join(',');
    // s.events = apl(s.events,"event323");

  }*/
  if (_satellite.getVar("google_journey")) {
    s.eVar187 = _satellite.getVar("google_journey");

  }
  //s.campaign = _satellite.getVar("utm_source") +"|"+ _satellite.getVar("utm_content");
  if (window.location.pathname == "/covidcheck") {
    s.campaign = ".com";
  }
  else if (window.location.pathname == "/covidcheckacn") {
    s.campaign = "automated acn";
  }
  else if (window.location.pathname == "/covidcheckapp") {
    s.campaign = "mobile";
  }
  else if (window.location.pathname == "/covidcheckksk") {
    s.campaign = "kiosk";
  }
  else if (window.location.pathname == "/covidcheckeml") {
    s.campaign = "nuance emails";
  }
  s.campaign = _satellite.getVar("Tracking Code CMP Param");
}

s.doPlugins = s_doPlugins;

    

/**** PLUGIN CONFIG SECTION ****/

/*
 * Plugin: getNewRepeat 1.2 - Returns whether user is new or repeat
 */
s.getNewRepeat=new Function("d","cn",""
+"var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:"
+"'s_nr';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length="
+"=0){s.c_w(cn,ct+'-New',e);return'New';}sval=s.split(cval,'-');if(ct"
+"-sval[0]<30*60*1000&&sval[1]=='New'){s.c_w(cn,ct+'-New',e);return'N"
+"ew';}else{s.c_w(cn,ct+'-Repeat',e);return'Repeat';}");

/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/* getLoadTime Plugin   */
function s_getLoadTime(){if(!window.s_loadT){var b=new Date().getTime(),o=window.performance?performance.timing:0,a=o?o.requestStart:window.inHeadTS||0;s_loadT=a?Math.round((b-a)/100):''}return s_loadT}


/********************************************************************
 *
 * Main Plug-in code (should be in Plug-ins section)
 *
 *******************************************************************/
/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("l","v","d","u",""
+"var s=this,m=0;if(!l)l='';if(u){var i,n,a=s.split(l,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)l=l?l+d+v:v;return l");

/********************************************************************
 *
 * Commented example of how to use this is doPlugins function
 *
 *******************************************************************/
 

/********************************************************************
 *
 * Config variables (should be above doPlugins section)
 *
 *******************************************************************/


/********************************************************************
 *
 * Utility functions that may be shared between plug-ins (name only)
 *
 *******************************************************************/
 


/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/* Plugin: Performance Timing Tracking - 0.11 BETA */
s.performanceTiming=new Function("v",""
+"var s=this;if(v)s.ptv=v;if(typeof performance!='undefined'){if(perf"
+"ormance.timing.loadEventEnd==0){s.pi=setInterval(function(){s.perfo"
+"rmanceWrite()},250);}if(!s.ptc||s.linkType=='e'){s.performanceRead("
+");}else{s.rfe();s[s.ptv]='';}}");
s.performanceWrite=new Function("",""
+"var s=this;if(performance.timing.loadEventEnd>0)clearInterval(s.pi)"
+";try{if(s.c_r('s_ptc')==''&&performance.timing.loadEventEnd>0){try{"
+"var pt=performance.timing;var pta='';pta=s.performanceCheck(pt.fetc"
+"hStart,pt.navigationStart);pta+='^^'+s.performanceCheck(pt.domainLo"
+"okupStart,pt.fetchStart);pta+='^^'+s.performanceCheck(pt.domainLook"
+"upEnd,pt.domainLookupStart);pta+='^^'+s.performanceCheck(pt.connect"
+"End,pt.connectStart);pta+='^^'+s.performanceCheck(pt.responseStart,"
+"pt.connectEnd);pta+='^^'+s.performanceCheck(pt.responseEnd,pt.respo"
+"nseStart);pta+='^^'+s.performanceCheck(pt.loadEventStart,pt.domLoad"
+"ing);pta+='^^'+s.performanceCheck(pt.loadEventEnd,pt.loadEventStart"
+");pta+='^^'+s.performanceCheck(pt.loadEventEnd,pt.navigationStart);"
+"s.c_w('s_ptc',pta);if(sessionStorage&&navigator.cookieEnabled&&s.pt"
+"v!='undefined'){var pe=performance.getEntries();var tempPe='';for(v"
+"ar i=0;i<pe.length;i++){tempPe+='!';tempPe+=pe[i].name.indexOf('?')"
+">-1?pe[i].name.split('?')[0]:pe[i].name;tempPe+='|'+(Math.round(pe["
+"i].startTime)/1000).toFixed(1)+'|'+(Math.round(pe[i].duration)/1000"
+").toFixed(1)+'|'+pe[i].initiatorType;}sessionStorage.setItem('s_pec"
+"',tempPe);}}catch(err){return;}}}catch(err){return;}");
s.performanceCheck=new Function("a","b",""
+"if(a>=0&&b>=0){if((a-b)<60000&&((a-b)>=0)){return((a-b)/1000).toFix"
+"ed(2);}else{return 600;}}");
s.performanceRead=new Function("","var s=this;if(performance.timing.loadEventEnd>0)clearInterval(s.pi);var cv=s.c_r('s_ptc');if(s.pte){var ela=s.pte.split(',');}if(cv!=''){var cva=s.split(cv,'^^');if(cva[1]!=''){for(var x=0;x<(ela.length-1);x++){s.events=s.apl(s.events,ela[x]+'='+cva[x],',',2);}}s.events=s.apl(s.events,ela[ela.length-1],',',2);}s.linkTrackEvents=s.apl(s.linkTrackEvents,s.pte,',',2);s.c_w('s_ptc','',0);if(sessionStorage&&navigator.cookieEnabled&&s.ptv!='undefined'){s[s.ptv]=sessionStorage.getItem('s_pec');sessionStorage.setItem('s_pec','',0);}else{s[s.ptv]='sessionStorage Unavailable';}s.ptc=true;");
/* Remove from Events 0.1 - Performance Specific, 
removes all performance events from s.events once being tracked. */
s.rfe=new Function("",""
+"var s=this;var ea=s.split(s.events,',');var pta=s.split(s.pte,',');"
+"try{for(x in pta){s.events=s.rfl(s.events,pta[x]);s.contextData['ev"+"ents']=s.events;}}catch(e){return;}");
/* Plugin Utility - RFL (remove from list) 1.0*/
s.rfl=new Function("l","v","d1","d2","ku",""+"var s=this,R=new Array(),C='',d1=!d1?',':d1,d2=!d2?',':d2,ku=!ku?0:"+"1;if(!l)return'';L=l.split(d1);for(i=0;i<L.length;i++){if(L[i].inde"+"xOf(':')>-1){C=L[i].split(':');C[1]=C[0]+':'+C[1];L[i]=C[0];}if(L[i"+"].indexOf('=')>-1){C=L[i].split('=');C[1]=C[0]+'='+C[1];L[i]=C[0];}"+"if(L[i]!=v&&C)R.push(C[1]);else if(L[i]!=v)R.push(L[i]);else if(L[i"+"]==v&&ku){ku=0;if(C)R.push(C[1]);else R.push(L[i]);}C='';}return s."+"join(R,{delim:d2})");






/*
 Start ActivityMap Module

 The following module enables ActivityMap tracking in Adobe Analytics. ActivityMap
 allows you to view data overlays on your links and content to understand how
 users engage with your web site. If you do not intend to use ActivityMap, you
 can remove the following block of code from your AppMeasurement.js file.
 Additional documentation on how to configure ActivityMap is available at:
 https://marketing.adobe.com/resources/help/en_US/analytics/activitymap/getting-started-admins.html
*/
function AppMeasurement_Module_ActivityMap(f){function g(a,d){var b,c,n;if(a&&d&&(b=e.c[d]||(e.c[d]=d.split(","))))for(n=0;n<b.length&&(c=b[n++]);)if(-1<a.indexOf(c))return null;p=1;return a}function q(a,d,b,c,e){var g,h;if(a.dataset&&(h=a.dataset[d]))g=h;else if(a.getAttribute)if(h=a.getAttribute("data-"+b))g=h;else if(h=a.getAttribute(b))g=h;if(!g&&f.useForcedLinkTracking&&e&&(g="",d=a.onclick?""+a.onclick:"")){b=d.indexOf(c);var l,k;if(0<=b){for(b+=10;b<d.length&&0<="= \t\r\n".indexOf(d.charAt(b));)b++;
if(b<d.length){h=b;for(l=k=0;h<d.length&&(";"!=d.charAt(h)||l);)l?d.charAt(h)!=l||k?k="\\"==d.charAt(h)?!k:0:l=0:(l=d.charAt(h),'"'!=l&&"'"!=l&&(l=0)),h++;if(d=d.substring(b,h))a.e=new Function("s","var e;try{s.w."+c+"="+d+"}catch(e){}"),a.e(f)}}}return g||e&&f.w[c]}function r(a,d,b){var c;return(c=e[d](a,b))&&(p?(p=0,c):g(k(c),e[d+"Exclusions"]))}function s(a,d,b){var c;if(a&&!(1===(c=a.nodeType)&&(c=a.nodeName)&&(c=c.toUpperCase())&&t[c])&&(1===a.nodeType&&(c=a.nodeValue)&&(d[d.length]=c),b.a||
b.t||b.s||!a.getAttribute||((c=a.getAttribute("alt"))?b.a=c:(c=a.getAttribute("title"))?b.t=c:"IMG"==(""+a.nodeName).toUpperCase()&&(c=a.getAttribute("src")||a.src)&&(b.s=c)),(c=a.childNodes)&&c.length))for(a=0;a<c.length;a++)s(c[a],d,b)}function k(a){if(null==a||void 0==a)return a;try{return a.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]+$",
"mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r \u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u205f\u3000\ufeff]{1,}","mg")," ").substring(0,254)}catch(d){}}var e=this;e.s=f;var m=window;m.s_c_in||(m.s_c_il=[],m.s_c_in=0);e._il=m.s_c_il;e._in=m.s_c_in;e._il[e._in]=e;m.s_c_in++;e._c="s_m";e.c={};var p=0,t={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};e._g=function(){var a,d,b,c=f.contextData,e=f.linkObject;(a=f.pageName||f.pageURL)&&(d=r(e,"link",f.linkName))&&(b=r(e,"region"))&&(c["a.activitymap.page"]=a.substring(0,
255),c["a.activitymap.link"]=128<d.length?d.substring(0,128):d,c["a.activitymap.region"]=127<b.length?b.substring(0,127):b,c["a.activitymap.pageIDType"]=f.pageName?1:0)};e.link=function(a,d){var b;if(d)b=g(k(d),e.linkExclusions);else if((b=a)&&!(b=q(a,"sObjectId","s-object-id","s_objectID",1))){var c,f;(f=g(k(a.innerText||a.textContent),e.linkExclusions))||(s(a,c=[],b={a:void 0,t:void 0,s:void 0}),(f=g(k(c.join(""))))||(f=g(k(b.a?b.a:b.t?b.t:b.s?b.s:void 0)))||!(c=(c=a.tagName)&&c.toUpperCase?c.toUpperCase():
"")||("INPUT"==c||"SUBMIT"==c&&a.value?f=g(k(a.value)):"IMAGE"==c&&a.src&&(f=g(k(a.src)))));b=f}return b};e.region=function(a){for(var d,b=e.regionIDAttribute||"id";a&&(a=a.parentNode);){if(d=q(a,b,b,b))return d;if("BODY"==a.nodeName)return"BODY"}}}
/* End ActivityMap Module */

//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====