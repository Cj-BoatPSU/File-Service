/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[7],{389:function(ha,ca,h){h.r(ca);var ba=h(3),aa=h(413),ea=h(414),da;(function(h){h[h.EXTERNAL_XFDF_NOT_REQUESTED=0]="EXTERNAL_XFDF_NOT_REQUESTED";h[h.EXTERNAL_XFDF_NOT_AVAILABLE=1]="EXTERNAL_XFDF_NOT_AVAILABLE";h[h.EXTERNAL_XFDF_AVAILABLE=2]="EXTERNAL_XFDF_AVAILABLE"})(da||(da={}));ha=function(){function h(h){this.N=h;this.state=da.EXTERNAL_XFDF_NOT_REQUESTED}h.prototype.J3=function(){var h=this;return function(f,e,x){return Object(ba.b)(h,
void 0,void 0,function(){var h,w,n,y,z,aa,ca,ea=this,ha;return Object(ba.d)(this,function(r){switch(r.label){case 0:if(this.state!==da.EXTERNAL_XFDF_NOT_REQUESTED)return[3,2];h=this.N.getDocument().pq();return[4,this.n2(h)];case 1:w=r.la(),n=this.NZ(w),this.hE=null!==(ha=null===n||void 0===n?void 0:n.parse())&&void 0!==ha?ha:null,this.state=null===this.hE?da.EXTERNAL_XFDF_NOT_AVAILABLE:da.EXTERNAL_XFDF_AVAILABLE,r.label=2;case 2:if(this.state===da.EXTERNAL_XFDF_NOT_AVAILABLE)return x(f),[2];y=new DOMParser;
z=y.parseFromString(f,"text/xml");e.forEach(function(e){ea.merge(z,ea.hE,e)});aa=new XMLSerializer;ca=aa.serializeToString(z);x(ca);return[2]}})})}};h.prototype.JH=function(h){this.n2=h};h.prototype.de=function(){this.hE=void 0;this.state=da.EXTERNAL_XFDF_NOT_REQUESTED};h.prototype.NZ=function(h){return h?Array.isArray(h)?new aa.a(h):"string"!==typeof h?null:(new DOMParser).parseFromString(h,"text/xml").querySelector("xfdf > add")?new aa.a(h):new ea.a(h):null};h.prototype.merge=function(h,f,e){var x=
this;0===e&&(this.U5(h,f.vn),this.W5(h,f.QD));var r=f.aa[e];r&&(this.X5(h,r.Fl),this.Z5(h,r.lU,f.Bt),this.Y5(h,r.page,e),this.V5(h,r.TM));r=this.N.gc();if(e===r-1){var w=f.Bt;Object.keys(w).forEach(function(e){w[e].nF||x.eQ(h,e,w[e])})}};h.prototype.U5=function(h,f){null!==f&&(h=this.Ns(h),this.Jo(h,"calculation-order",f))};h.prototype.W5=function(h,f){null!==f&&(h=this.Ns(h),this.Jo(h,"document-actions",f))};h.prototype.X5=function(h,f){var e=this,x=this.Ms(h.querySelector("xfdf"),"annots");Object.keys(f).forEach(function(h){e.Jo(x,
'[name="'+h+'"]',f[h])})};h.prototype.Z5=function(h,f,e){var x=this;if(0!==f.length){var r=this.Ns(h);f.forEach(function(f){var n=f.getAttribute("field"),w=e[n];w&&(x.eQ(h,n,w),x.Jo(r,"null",f))})}};h.prototype.eQ=function(h,f,e){var x=this.Ns(h);null!==e.Dy&&this.Jo(x,'ffield [name="'+f+'"]',e.Dy);h=this.Ms(h.querySelector("xfdf"),"fields");f=f.split(".");this.UG(h,f,0,e.value);e.nF=!0};h.prototype.Y5=function(h,f,e){null!==f&&(h=this.Ns(h),h=this.Ms(h,"pages"),this.Jo(h,'[number="'+(e+1)+'"]',f))};
h.prototype.V5=function(h,f){Object.keys(f).forEach(function(e){(e=h.querySelector('annots [name="'+e+'"]'))&&e.parentElement.removeChild(e)})};h.prototype.UG=function(h,f,e,x){if(e===f.length)f=document.createElementNS("","value"),f.textContent=x,this.Jo(h,"value",f);else{var r=f[e];this.Ms(h,'[name="'+r+'"]',"field").setAttribute("name",r);h=h.querySelectorAll('[name="'+r+'"]');1===h.length?this.UG(h[0],f,e+1,x):(r=this.m1(h),this.UG(e===f.length-1?r:this.eba(h,r),f,e+1,x))}};h.prototype.m1=function(h){for(var f=
null,e=0;e<h.length;e++){var x=h[e];if(0===x.childElementCount||1===x.childElementCount&&"value"===x.children[0].tagName){f=x;break}}return f};h.prototype.eba=function(h,f){for(var e=0;e<h.length;e++)if(h[e]!==f)return h[e];return null};h.prototype.Jo=function(h,f,e){f=h.querySelector(f);null!==f&&h.removeChild(f);h.appendChild(e)};h.prototype.Ns=function(h){var f=h.querySelector("pdf-info");if(null!==f)return f;f=this.Ms(h.querySelector("xfdf"),"pdf-info");f.setAttribute("xmlns","http://www.pdftron.com/pdfinfo");
f.setAttribute("version","2");f.setAttribute("import-version","3");return f};h.prototype.Ms=function(h,f,e){var x=h.querySelector(f);if(null!==x)return x;x=document.createElementNS("",e||f);h.appendChild(x);return x};return h}();ca["default"]=ha},399:function(ha,ca){ha=function(){function h(){}h.prototype.lx=function(h){var aa={vn:null,QD:null,Bt:{},aa:{}};h=(new DOMParser).parseFromString(h,"text/xml");aa.vn=h.querySelector("pdf-info calculation-order");aa.QD=h.querySelector("pdf-info document-actions");
aa.Bt=this.P6(h);aa.aa=this.b7(h);return aa};h.prototype.P6=function(h){var aa=h.querySelector("fields");h=h.querySelectorAll("pdf-info > ffield");if(null===aa&&null===h)return{};var ba={};this.RX(ba,aa);this.PX(ba,h);return ba};h.prototype.RX=function(h,aa){if(null!==aa&&aa.children){for(var ba=[],ca=0;ca<aa.children.length;ca++){var z=aa.children[ca];ba.push({name:z.getAttribute("name"),element:z})}for(;0!==ba.length;)for(aa=ba.shift(),ca=0;ca<aa.element.children.length;ca++)z=aa.element.children[ca],
"value"===z.tagName?h[aa.name]={value:z.textContent,Dy:null,nF:!1}:z.children&&ba.push({name:aa.name+"."+z.getAttribute("name"),element:z})}};h.prototype.PX=function(h,aa){aa.forEach(function(aa){var ba=aa.getAttribute("name");h[ba]?h[ba].Dy=aa:h[ba]={value:null,Dy:aa,nF:!1}})};h.prototype.b7=function(h){var aa=this,ba={};h.querySelectorAll("pdf-info widget").forEach(function(h){var z=parseInt(h.getAttribute("page"),10)-1;aa.wz(ba,z);ba[z].lU.push(h)});h.querySelectorAll("pdf-info page").forEach(function(h){var z=
parseInt(h.getAttribute("number"),10)-1;aa.wz(ba,z);ba[z].page=h});this.jO(h).forEach(function(h){var z=parseInt(h.getAttribute("page"),10),y=h.getAttribute("name");aa.wz(ba,z);ba[z].Fl[y]=h});this.UN(h).forEach(function(h){var z=parseInt(h.getAttribute("page"),10);h=h.textContent;aa.wz(ba,z);ba[z].TM[h]=!0});return ba};h.prototype.wz=function(h,aa){h[aa]||(h[aa]={Fl:{},TM:{},lU:[],page:null})};return h}();ca.a=ha},413:function(ha,ca,h){var ba=h(3),aa=h(0);h.n(aa);ha=function(h){function ca(z){var y=
h.call(this)||this;y.b1=Array.isArray(z)?z:[z];return y}Object(ba.c)(ca,h);ca.prototype.parse=function(){var h=this,y={vn:null,QD:null,Bt:{},aa:{}};this.b1.forEach(function(f){y=Object(aa.merge)(y,h.lx(f))});return y};ca.prototype.jO=function(h){var y=[];h.querySelectorAll("add > *").forEach(function(f){y.push(f)});h.querySelectorAll("modify > *").forEach(function(f){y.push(f)});return y};ca.prototype.UN=function(h){return h.querySelectorAll("delete > *")};return ca}(h(399).a);ca.a=ha},414:function(ha,
ca,h){var ba=h(3);ha=function(h){function aa(aa){var z=h.call(this)||this;z.c1=aa;return z}Object(ba.c)(aa,h);aa.prototype.parse=function(){return this.lx(this.c1)};aa.prototype.jO=function(h){return h.querySelectorAll("annots > *")};aa.prototype.UN=function(){return[]};return aa}(h(399).a);ca.a=ha}}]);}).call(this || window)