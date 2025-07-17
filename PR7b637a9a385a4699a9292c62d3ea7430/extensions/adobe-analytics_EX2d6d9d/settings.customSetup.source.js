//==== START TRANSFORM CODE - DO NOT REMOVE ====
function (s) {
//==== END TRANSFORM CODE ====
/* Plugin Config */
s.usePlugins=true
function s_doPlugins(s) {
 //s.timestamp=Math.round((new Date()).getTime()/1000);
/* Add calls to plugins here */
	s.campaign=s.Util.getQueryParam("cid");
  
  s.prop13 = s.eVar13 = s.getNewRepeat(30,"s_getNewRepeat");
  s.prop15 = s.eVar15 = s.getDaysSinceLastVisit("s_getDaysSinceLastVisit");
  s.prop18 = s.eVar18 = s.getTimeParting("h", "-5");
  s.prop19 = s.eVar19 = s.getTimeParting("d","-5");
	s.prop20 = s.eVar20 = s.getTimeParting("w");
 // s.prop41 = s.eVar41 = _satellite.getVar("AppActionName");
  s.prop74 = "Launch";
}

s.doPlugins=s_doPlugins


/************************** PLUGINS SECTION *************************/
/* You may insert any plugins you wish to use here.                 */

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
* Utility Function: split v1.5 (JS 1.0 compatible)
*/
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
 * Plugin: getValOnce_v1.1
 */
s.getValOnce=new Function("v","c","e","t",""
+"var s=this,a=new Date,v=v?v:'',c=c?c:'s_gvo',e=e?e:0,i=t=='m'?6000"
+"0:86400000;k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e"
+"==0?0:a);}return v==k?'':v");
/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
 * Plugin Utility: apl v1.1
 */
s.apl=new Function("L","v","d","u",""
+"var s=this,m=0;if(!L)L='';if(u){var i,n,a=s.split(L,d);for(i=0;i<a."
+"length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCas"
+"e()));}}if(!m)L=L?L+d+v:v;return L");

/*
 * Plugin: getTimeParting 3.0 - Set timeparting values based on time zone - valid through 2014 
 */
s.getTimeParting=new Function("t","z",""
+"var s=this,d,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T;d=new Date();A"
+"=d.getFullYear();if(A=='2009'){B='08';C='01'}if(A=='2010'){B='14';C"
+"='07'}if(A=='2011'){B='13';C='06'}if(A=='2012'){B='11';C='04'}if(A="
+"='2013'){B='10';C='03'}if(A=='2014'){B='09';C='02'}if(!B||!C){B='08"
+"';C='01'}B='03/'+B+'/'+A;C='11/'+C+'/'+A;D=new Date('1/1/2000');if("
+"D.getDay()!=6||D.getMonth()!=0){return'Data Not Available'}else{z=p"
+"arseFloat(z);E=new Date(B);F=new Date(C);G=F;H=new Date();if(H>E&&H"
+"<G){z=z+1}else{z=z};I=H.getTime()+(H.getTimezoneOffset()*60000);J=n"
+"ew Date(I+(3600000*z));K=['Sunday','Monday','Tuesday','Wednesday','"
+"Thursday','Friday','Saturday'];L=J.getHours();M=J.getMinutes();N=J."
+"getDay();O=K[N];P='AM';Q='Weekday';R='00';if(M>30){R='30'}if(L>=12)"
+"{P='PM';L=L-12};if(L==0){L=12};if(N==6||N==0){Q='Weekend'}T=L+':'+R"
+"+P;if(t=='h'){return T}if(t=='d'){return O}if(t=='w'){return Q}}");


/*
 * Plugin: Days since last Visit 1.1 - capture time from last visit
 */
s.getDaysSinceLastVisit=new Function("c",""
+"var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getT"
+"ime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.s"
+"etTime(ct+30*60*1000);f0='Cookies Not Supported';f1='First Visit';f"
+"2='More than 30 days';f3='More than 7 days';f4='Less than 7 days';f"
+"5='Less than 1 day';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);"
+"s.c_w(c+'_s',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*da"
+"y){s.c_w(c,ct,e);s.c_w(c+'_s',f2,es);}else if(d<30*day+1 && d>7*day"
+"){s.c_w(c,ct,e);s.c_w(c+'_s',f3,es);}else if(d<7*day+1 && d>day){s."
+"c_w(c,ct,e);s.c_w(c+'_s',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c"
+"_w(c+'_s',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+'_s');s.c_w(c"
+"+'_s',cval_ss,es);}}cval_s=s.c_r(c+'_s');if(cval_s.length==0) retur"
+"n f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s"
+"!=f5) return '';else return cval_s;");



(function() {
  var oldXHR = window.XMLHttpRequest;
  var AnalyticsWebServiceSuccessCalls = {
    WebServiceCallName : "",
    RequestType: "",
    NumberOfItems: ""
  };
  var AnalyticsWebServiceJsonSuccessCalls = {
    JsonRequest : "",
    RequestType: "",
    NumberOfItems: ""
  };
  var AnalyticsWebServiceFailureCalls = {
    ErrorCode: "",
    WebServiceCallName : "",
    RequestType: ""
  };
  var AnalyticsWebServiceJsonFailureCalls = {
    ErrorCode: "",
    JsonRequest : "",
    RequestType: ""
  };
var AdobeDeviceMid = "";

  function newXHR() {
    var realXHR = new oldXHR();
    realXHR.addEventListener("readystatechange", function(data,req) {
      if(realXHR.readyState==4 && realXHR.status==200){
        var responseTarget = data.target;
        var responseUrl = responseTarget.responseURL;

        var serviceCallName = responseUrl.split("/").pop();
        try {
	        var responseData = JSON.parse(data.target.response);
        } 
        catch (err) {
          return;
        }  
        var numberOfItems = 0;
        if (serviceCallName.indexOf(".json") > -1) {
          serviceCallName = serviceCallName.split(".json")[0];
          if (serviceCallName.indexOf("routealerts") > 0) {
            serviceCallName = "RouteAlerts";
          }
          if (serviceCallName.length + AnalyticsWebServiceJsonSuccessCalls.JsonRequest.length > 100) {
            window['digitalData']= {};
            window['digitalData']['Webservice'] = {};

            window['digitalData'].Webservice.jsonRequest = AnalyticsWebServiceJsonSuccessCalls.JsonRequest;
            window['digitalData'].Webservice.NumberOfItemsForJson = AnalyticsWebServiceJsonSuccessCalls.NumberOfItems;
            window['digitalData'].Webservice.RequestTypeForJson = AnalyticsWebServiceJsonSuccessCalls.RequestType;
            if (typeof (window['_satellite']) != "undefined" && window['_satellite'] != null) {
              if (window.hasOwnProperty('cordova')) {
                if (AdobeDeviceMid === "") {
                  window['ADB'].visitorAppendToURL("www/index.html", 
                  function(mcurl) {
                    if (mcurl && mcurl.indexOf("MCMID%3D") > 0) {
                      AdobeDeviceMid = mcurl.split("MCMID%3D")[1];
                      window['s'].marketingCloudVisitorID = AdobeDeviceMid;
                    }
										s.products = "";
                    s.prop51 = s.prop52 = s.prop53 = s.prop54 = s.prop55 = "";
                    s.eVar51 = s.eVar52 = s.eVar53 = s.eVar54 = s.eVar55 = "";
                    s.events = "";
                    window['s'].products = "";
                  	window['s'].prop51 = window['s'].prop52 = window['s'].prop53 = window['s'].prop54 = window['s'].prop55 = "";
                  	window['s'].eVar51 = window['s'].eVar52 = window['s'].eVar53 = window['s'].eVar54 = window['s'].eVar55 = "";
                  	window['s'].events = "";
                    window['_satellite'].track("JsonRequestSuccess");
                  }, 
                  function(error) {
                  });
                } else {
                  window['s'].marketingCloudVisitorID = AdobeDeviceMid;
                  s.products = "";
                  s.prop51 = s.prop52 = s.prop53 = s.prop54 = s.prop55 = "";
                  s.eVar51 = s.eVar52 = s.eVar53 = s.eVar54 = s.eVar55 = "";
                  s.events = "";
                  window['s'].products = "";
                  window['s'].prop51 = window['s'].prop52 = window['s'].prop53 = window['s'].prop54 = window['s'].prop55 = "";
                  window['s'].eVar51 = window['s'].eVar52 = window['s'].eVar53 = window['s'].eVar54 = window['s'].eVar55 = "";
                  window['s'].events = "";
                  window['_satellite'].track("JsonRequestSuccess");
                }
              } else {
                s.products = "";
                s.prop51 = s.prop52 = s.prop53 = s.prop54 = s.prop55 = "";
                s.eVar51 = s.eVar52 = s.eVar53 = s.eVar54 = s.eVar55 = "";
                s.events = "";
                window['s'].products = "";
                window['s'].prop51 = window['s'].prop52 = window['s'].prop53 = window['s'].prop54 = window['s'].prop55 = "";
                window['s'].eVar51 = window['s'].eVar52 = window['s'].eVar53 = window['s'].eVar54 = window['s'].eVar55 = "";
                window['s'].events = "";
                window['_satellite'].track("JsonRequestSuccess");
              }
            }
            AnalyticsWebServiceJsonSuccessCalls.JsonRequest = "";
            AnalyticsWebServiceJsonSuccessCalls.NumberOfItems = "";
            AnalyticsWebServiceJsonSuccessCalls.RequestType = "";
          }
          if (serviceCallName === "contentService.alerts.emergencyAlert") {
            numberOfItems = responseData.serviceAlertsList.length;
          } else if (responseData.hasOwnProperty('RouteAlerts')) {
            numberOfItems = responseData.RouteAlerts.length;
          } else if (serviceCallName === "contentService.errors.mobile.lang-en" ) {
            numberOfItems = Object.keys(responseData.errorMessages).length;
          } else if(serviceCallName === "stations-list" && responseData.hasOwnProperty('stationInformation')) {
            numberOfItems = responseData.stationInformation.length;
          } else if (serviceCallName === "contentService.labels.mobile" || serviceCallName.indexOf("pagecontent") > -1 
          || serviceCallName === "constants" || serviceCallName === "copy.labels" || serviceCallName === "errors" || serviceCallName === "routes") {
            numberOfItems = Object.keys(responseData).length;
          }
          AnalyticsWebServiceJsonSuccessCalls.JsonRequest += ","+serviceCallName;
          AnalyticsWebServiceJsonSuccessCalls.NumberOfItems += ","+numberOfItems;
          AnalyticsWebServiceJsonSuccessCalls.RequestType += ",GET";
        } else if(serviceCallName.indexOf("demdex") === -1 && serviceCallName.indexOf("d_mid") === -1) {
          if (responseData.responseCode === "SUCCESS") {
            var numberOfItems = 1;
            if (serviceCallName === "MyTrips2") {
              numberOfItems = responseData.trips.length;
            } else if (serviceCallName === "RetrieveReservationV4" || serviceCallName === "FarePlan") {
              numberOfItems = responseData.journeys.length;
            }
            window['digitalData']= {};
            window['digitalData']['Webservice'] = {};
            window['digitalData'].Webservice.NumberOfItems = numberOfItems;
            window['digitalData'].Webservice.WebServiceCallName = serviceCallName;
            window['digitalData'].Webservice.RequestType = "POST";
            if (typeof (window['_satellite']) != "undefined" && window['_satellite'] != null) {
              if (window.hasOwnProperty('cordova')) {
                if (AdobeDeviceMid === "") {
                  window['ADB'].visitorAppendToURL("www/index.html", 
                  function(mcurl) {
                    if (mcurl && mcurl.indexOf("MCMID%3D") > 0) {
                      AdobeDeviceMid = mcurl.split("MCMID%3D")[1];
                      window['s'].marketingCloudVisitorID = AdobeDeviceMid;
                    }
                    s.products = "";
                    s.prop51 = s.prop52 = s.prop53 = s.prop54 = s.prop55 = "";
                    s.eVar51 = s.eVar52 = s.eVar53 = s.eVar54 = s.eVar55 = "";
                    s.events = "";
                    window['s'].products = "";
                  	window['s'].prop51 = window['s'].prop52 = window['s'].prop53 = window['s'].prop54 = window['s'].prop55 = "";
                  	window['s'].eVar51 = window['s'].eVar52 = window['s'].eVar53 = window['s'].eVar54 = window['s'].eVar55 = "";
                  	window['s'].events = "";
                    window['_satellite'].track("NetworkcallSuccess");
                  }, 
                  function(error) { 
                  });
                } else {
                  window['s'].marketingCloudVisitorID = AdobeDeviceMid;
                  s.products = "";
                  s.prop51 = s.prop52 = s.prop53 = s.prop54 = s.prop55 = "";
                  s.eVar51 = s.eVar52 = s.eVar53 = s.eVar54 = s.eVar55 = "";
                  s.events = "";
                  window['s'].products = "";
                  window['s'].prop51 = window['s'].prop52 = window['s'].prop53 = window['s'].prop54 = window['s'].prop55 = "";
                  window['s'].eVar51 = window['s'].eVar52 = window['s'].eVar53 = window['s'].eVar54 = window['s'].eVar55 = "";
                  window['s'].events = "";
                  window['_satellite'].track("NetworkcallSuccess");
                }
              } else {
                s.products = "";
                s.prop51 = s.prop52 = s.prop53 = s.prop54 = s.prop55 = "";
                s.eVar51 = s.eVar52 = s.eVar53 = s.eVar54 = s.eVar55 = "";
                s.events = "";
                window['s'].products = "";
                  window['s'].prop51 = window['s'].prop52 = window['s'].prop53 = window['s'].prop54 = window['s'].prop55 = "";
                  window['s'].eVar51 = window['s'].eVar52 = window['s'].eVar53 = window['s'].eVar54 = window['s'].eVar55 = "";
                  window['s'].events = "";
                window['_satellite'].track("NetworkcallSuccess");
              }
            }
          } else {

            window['digitalData']= {};
            window['digitalData']['Webservice'] = {};
            window['digitalData'].Webservice.WebServiceCallName = serviceCallName;
            window['digitalData'].Webservice.RequestType = "GET";
            window['digitalData'].Webservice.ErrorCode = (responseData.errors && responseData.errors.length > 0 && responseData.errors[0].code)?responseData.errors[0].code:responseData.responseCode;

            if (typeof (window['_satellite']) != "undefined" && window['_satellite'] != null) {
              if (window.hasOwnProperty('cordova')) {
                if (AdobeDeviceMid === "") {
                  window['ADB'].visitorAppendToURL("www/index.html", 
                  function(mcurl) {
                    if (mcurl && mcurl.indexOf("MCMID%3D") > 0) {
                      AdobeDeviceMid = mcurl.split("MCMID%3D")[1];
                      window['s'].marketingCloudVisitorID = AdobeDeviceMid;
                    }
                    s.products = "";
                    s.prop51 = s.prop52 = s.prop53 = s.prop54 = s.prop55 = "";
                    s.eVar51 = s.eVar52 = s.eVar53 = s.eVar54 = s.eVar55 = "";
                    s.events = "";
                    window['s'].products = "";
                  window['s'].prop51 = window['s'].prop52 = window['s'].prop53 = window['s'].prop54 = window['s'].prop55 = "";
                  window['s'].eVar51 = window['s'].eVar52 = window['s'].eVar53 = window['s'].eVar54 = window['s'].eVar55 = "";
                  window['s'].events = "";
                    window['_satellite'].track("NetworkcallFailure");
                  }, 
                  function(error) {
                  });
                } else {
                  window['s'].marketingCloudVisitorID = AdobeDeviceMid;
                  s.products = "";
                  s.prop51 = s.prop52 = s.prop53 = s.prop54 = s.prop55 = "";
                  s.eVar51 = s.eVar52 = s.eVar53 = s.eVar54 = s.eVar55 = "";
                  s.events = "";
                  window['s'].products = "";
                  window['s'].prop51 = window['s'].prop52 = window['s'].prop53 = window['s'].prop54 = window['s'].prop55 = "";
                  window['s'].eVar51 = window['s'].eVar52 = window['s'].eVar53 = window['s'].eVar54 = window['s'].eVar55 = "";
                  window['s'].events = "";
                  window['_satellite'].track("NetworkcallFailure");
                }
              } else {
                s.products = "";
                s.prop51 = s.prop52 = s.prop53 = s.prop54 = s.prop55 = "";
                s.eVar51 = s.eVar52 = s.eVar53 = s.eVar54 = s.eVar55 = "";
                s.events = "";
                window['s'].products = "";
                  window['s'].prop51 = window['s'].prop52 = window['s'].prop53 = window['s'].prop54 = window['s'].prop55 = "";
                  window['s'].eVar51 = window['s'].eVar52 = window['s'].eVar53 = window['s'].eVar54 = window['s'].eVar55 = "";
                  window['s'].events = "";
                window['_satellite'].track("NetworkcallFailure");
              }
            }
          }
        }
      } else if (realXHR.status !== 0 && realXHR.readyState === 3) {
        var status = parseInt(realXHR.status);
        if (status >= 400 && status <= 600) {
          var responseTarget = data.target;
          var responseUrl = responseTarget.responseURL;
          var serviceCallName = responseUrl.split("/").pop();
          if (serviceCallName.indexOf(".json") > -1) {
            s.products = "";
            s.prop51 = s.prop52 = s.prop53 = s.prop54 = s.prop55 = "";
            s.eVar51 = s.eVar52 = s.eVar53 = s.eVar54 = s.eVar55 = "";
            window['s'].products = "";
            window['s'].prop51 = window['s'].prop52 = window['s'].prop53 = window['s'].prop54 = window['s'].prop55 = "";
            window['s'].eVar51 = window['s'].eVar52 = window['s'].eVar53 = window['s'].eVar54 = window['s'].eVar55 = "";
            window['s'].events = "";

            window['digitalData']= {};
            window['digitalData']['Webservice'] = {};

            window['digitalData'].Webservice.jsonRequest = serviceCallName;
            window['digitalData'].Webservice.ErrorCodeForJson = status;
            window['digitalData'].Webservice.RequestTypeForJson = "GET";

            window['_satellite'].track("JsonRequestFailure");
          } else {
            s.products = "";
            s.prop51 = s.prop52 = s.prop53 = s.prop54 = s.prop55 = "";
            s.eVar51 = s.eVar52 = s.eVar53 = s.eVar54 = s.eVar55 = "";
            window['s'].products = "";
            window['s'].prop51 = window['s'].prop52 = window['s'].prop53 = window['s'].prop54 = window['s'].prop55 = "";
            window['s'].eVar51 = window['s'].eVar52 = window['s'].eVar53 = window['s'].eVar54 = window['s'].eVar55 = "";
            window['s'].events = "";

            window['digitalData']= {};
            window['digitalData']['Webservice'] = {};
            window['digitalData'].Webservice.WebServiceCallName = serviceCallName;
            window['digitalData'].Webservice.RequestType = "POST";
            window['digitalData'].Webservice.ErrorCode = status;
            window['_satellite'].track("NetworkcallFailure");
          }
        }
      }
    }, false);
    return realXHR;
  }

  window.XMLHttpRequest = newXHR;
})();

(function() {
  document.querySelector('body').addEventListener('click', function(event) {
    if ((event.target && event.target.tagName) && (event.target.tagName.toLowerCase() === 'a' || event.target.parentElement.tagName.toLowerCase() === 'button' )) {
      if( event.target.getAttribute("action-track") && event.target.getAttribute("action-track") == "false")
				return;
      window['digitalData'].AppActionName = event.target.textContent;
      if (typeof (window['_satellite']) != "undefined" && window['_satellite'] != null) {
        s.products = "";
        s.prop51 = s.prop52 = s.prop53 = s.prop54 = s.prop55 = "";
        s.eVar51 = s.eVar52 = s.eVar53 = s.eVar54 = s.eVar55 = "";
        s.events = "";
        window['s'].products = "";
                  window['s'].prop51 = window['s'].prop52 = window['s'].prop53 = window['s'].prop54 = window['s'].prop55 = "";
                  window['s'].eVar51 = window['s'].eVar52 = window['s'].eVar53 = window['s'].eVar54 = window['s'].eVar55 = "";
                  window['s'].events = "";
        window['_satellite'].track("AppAction");
      }
    }
  });
})();
return false;
//==== START TRANSFORM CODE - DO NOT REMOVE ====
}
//==== END TRANSFORM CODE ====