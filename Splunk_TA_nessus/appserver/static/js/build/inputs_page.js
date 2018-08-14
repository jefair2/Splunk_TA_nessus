webpackJsonp([3,5],[function(e,n,r){r.p=function(){function e(){for(var e,r,t="",i=0,a=arguments.length;i<a;i++)e=arguments[i].toString(),r=e.length,r>1&&"/"==e.charAt(r-1)&&(e=e.substring(0,r-1)),t+="/"!=e.charAt(0)?"/"+e:e;if("/"!=t){var o=t.split("/"),s=o[1];if("static"==s||"modules"==s){var u=t.substring(s.length+2,t.length);t="/"+s+"/@"+window.$C.BUILD_NUMBER,window.$C.BUILD_PUSH_NUMBER&&(t+="."+window.$C.BUILD_PUSH_NUMBER),"app"==o[2]&&(t+=":"+n("APP_BUILD",0)),t+="/"+u}}var d=n("MRSPARKLE_ROOT_PATH","/"),p=n("DJANGO_ROOT_PATH",""),l=n("LOCALE","en-US"),c="";return c=p&&t.substring(0,p.length)===p?t.replace(p,p+"/"+l.toLowerCase()):"/"+l+t,""==d||"/"==d?c:d+c}function n(e,n){if(window.$C&&window.$C.hasOwnProperty(e))return window.$C[e];if(void 0!==n)return n;throw new Error("getConfigValue - "+e+" not set, no default provided")}return e("/static/app/Splunk_TA_nessus/js/build")+"/"}(),r.e(4,function(e){var n=[e("shim/jquery"),e("require/underscore"),e("require/backbone"),e("splunkjs/mvc/headerview"),e("../../../../../package/appserver/static/js/views/Pages/InputsPage")];(function(e,n,r,t,i){new t({id:"header",section:"dashboards",el:e(".preload"),acceleratedAppNav:!0}).render(),document.title="Inputs";var a=new i;a.render(),e(".addonContainer").html(a.el)}).apply(null,n)})}]);

// Custom Code for disabled input
// jQuery Code to Disable Input
function validateQueryField(){
  var source_type = $("div.control-label:contains('Source Type')").parent().find('.select2-chosen').html();
  if(source_type == "Scan Result")
    $("input[name=query_parameter]").attr({disabled:"true"});
  else
    $("input[name=query_parameter]").removeAttr('disabled');
}
function defer(method) {
   if (window.jQuery)
       method();
   else
       setTimeout(function() { defer(method) }, 100);
}
defer(function () {
$( "div.source_type_tenable" ).on('click mouseover',function() { validateQueryField(); });
$(document).on( "click", "a.edit,a,li,.source_type_tenable,ul,input", function() {
    validateQueryField(); $(this).delay(5000).queue(function() {
     $( "div.source_type_tenable" ).change(function() {  validateQueryField();
     }); $(this).dequeue(); }); });
     $('input.btn.btn-primary.submit-btn.submit-dialog').on('load',function(){ validateQueryField();  });
});
