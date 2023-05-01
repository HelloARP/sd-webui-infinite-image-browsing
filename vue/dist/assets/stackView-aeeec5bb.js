import{d as U,u as ue,g as Y,_ as De,c as o,a as re,P as K,D as Ae,f as je,w as lt,b as ot,e as st,h as xe,M as ee,i as ut,j as it,F as ae,A as H,k as ct,r as T,o as O,l as D,m as p,n as r,p as V,q as $,t as L,s as W,v as dt,x as mt,y as ie,z as ze,B as pt,C as vt,E as ft,G as gt,H as bt,I as we,J as A,K as I,L as le,N as _t,O as F,Q as oe,R as E,S as Fe,T as yt,U as ht,V as Ct,W as Be,X as kt,Y as Ot,Z as $e,$ as xt,a0 as wt,a1 as $t}from"./index-f85c2dbf.js";import{D as ce,S as G,s as Lt,a as St,b as Mt,c as Ne,u as Pt,d as Et,e as It,f as Dt,g as At,h as jt,i as zt,j as Ft,k as Bt,l as Nt,m as Tt,t as Vt}from"./FileItem-14b9de82.js";import{F as z,_ as Rt}from"./index-27a76727.js";import"./index-624d569a.js";import"./index-1d410437.js";import{I as Ut}from"./index-41185077.js";import{M as Te,g as Xt}from"./db-9d80b1a6.js";import{B as Ve}from"./button-3c6fce50.js";import"./_baseIteratee-da3485ca.js";var Yt=["class","style"],Gt=function(){return{prefixCls:String,href:String,separator:K.any,overlay:K.any,onClick:Function}};const q=U({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:Gt(),slots:["separator","overlay"],setup:function(t,a){var n=a.slots,l=a.attrs,b=ue("breadcrumb",t),_=b.prefixCls,y=function(S,v){var d=Y(n,t,"overlay");return d?o(ce,{overlay:d,placement:"bottom"},{default:function(){return[o("span",{class:"".concat(v,"-overlay-link")},[S,o(Ae,null,null)])]}}):S};return function(){var x,S=(x=Y(n,t,"separator"))!==null&&x!==void 0?x:"/",v=Y(n,t),d=l.class,c=l.style,h=De(l,Yt),s;return t.href!==void 0?s=o("a",re({class:"".concat(_.value,"-link"),onClick:t.onClick},h),[v]):s=o("span",re({class:"".concat(_.value,"-link"),onClick:t.onClick},h),[v]),s=y(s,_.value),v?o("span",{class:d,style:c},[s,S&&o("span",{class:"".concat(_.value,"-separator")},[S])]):null}}});var Wt=function(){return{prefixCls:String,routes:{type:Array},params:K.any,separator:K.any,itemRender:{type:Function}}};function qt(e,t){if(!e.breadcrumbName)return null;var a=Object.keys(t).join("|"),n=e.breadcrumbName.replace(new RegExp(":(".concat(a,")"),"g"),function(l,b){return t[b]||l});return n}function Le(e){var t=e.route,a=e.params,n=e.routes,l=e.paths,b=n.indexOf(t)===n.length-1,_=qt(t,a);return b?o("span",null,[_]):o("a",{href:"#/".concat(l.join("/"))},[_])}const R=U({compatConfig:{MODE:3},name:"ABreadcrumb",props:Wt(),slots:["separator","itemRender"],setup:function(t,a){var n=a.slots,l=ue("breadcrumb",t),b=l.prefixCls,_=l.direction,y=function(d,c){return d=(d||"").replace(/^\//,""),Object.keys(c).forEach(function(h){d=d.replace(":".concat(h),c[h])}),d},x=function(d,c,h){var s=ut(d),u=y(c||"",h);return u&&s.push(u),s},S=function(d){var c=d.routes,h=c===void 0?[]:c,s=d.params,u=s===void 0?{}:s,M=d.separator,k=d.itemRender,f=k===void 0?Le:k,w=[];return h.map(function(g){var C=y(g.path,u);C&&w.push(C);var j=[].concat(w),X=null;return g.children&&g.children.length&&(X=o(ee,null,{default:function(){return[g.children.map(function(B){return o(ee.Item,{key:B.path||B.breadcrumbName},{default:function(){return[f({route:B,params:u,routes:h,paths:x(j,B.path,u)})]}})})]}})),o(q,{overlay:X,separator:M,key:C||g.breadcrumbName},{default:function(){return[f({route:g,params:u,routes:h,paths:j})]}})})};return function(){var v,d,c,h=t.routes,s=t.params,u=s===void 0?{}:s,M=je(Y(n,t)),k=(v=Y(n,t,"separator"))!==null&&v!==void 0?v:"/",f=t.itemRender||n.itemRender||Le;h&&h.length>0?c=S({routes:h,params:u,separator:k,itemRender:f}):M.length&&(c=M.map(function(g,C){return lt(ot(g.type)==="object"&&(g.type.__ANT_BREADCRUMB_ITEM||g.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),st(g,{separator:k,key:C})}));var w=(d={},xe(d,b.value,!0),xe(d,"".concat(b.value,"-rtl"),_.value==="rtl"),d);return o("div",{class:w},[c])}}});var Ht=["separator","class"],Qt=function(){return{prefixCls:String}};const se=U({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:Qt(),setup:function(t,a){var n=a.slots,l=a.attrs,b=ue("breadcrumb",t),_=b.prefixCls;return function(){var y;l.separator;var x=l.class,S=De(l,Ht),v=je((y=n.default)===null||y===void 0?void 0:y.call(n));return o("span",re({class:["".concat(_.value,"-separator"),x]},S),[v.length>0?v:"/"])}}});R.Item=q;R.Separator=se;R.install=function(e){return e.component(R.name,R),e.component(q.name,q),e.component(se.name,se),e};z.useInjectFormItemContext=it;z.ItemRest=ae;z.install=function(e){return e.component(z.name,z),e.component(z.Item.name,z.Item),e.component(ae.name,ae),e};G.setDefaultIndicator=Lt;G.install=function(e){return e.component(G.name,G),e};var Jt={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M909.3 506.3L781.7 405.6a7.23 7.23 0 00-11.7 5.7V476H548V254h64.8c6 0 9.4-7 5.7-11.7L517.7 114.7a7.14 7.14 0 00-11.3 0L405.6 242.3a7.23 7.23 0 005.7 11.7H476v222H254v-64.8c0-6-7-9.4-11.7-5.7L114.7 506.3a7.14 7.14 0 000 11.3l127.5 100.8c4.7 3.7 11.7.4 11.7-5.7V548h222v222h-64.8c-6 0-9.4 7-5.7 11.7l100.8 127.5c2.9 3.7 8.5 3.7 11.3 0l100.8-127.5c3.7-4.7.4-11.7-5.7-11.7H548V548h222v64.8c0 6 7 9.4 11.7 5.7l127.5-100.8a7.3 7.3 0 00.1-11.4z"}}]},name:"drag",theme:"outlined"};const Zt=Jt;function Se(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){Kt(e,l,a[l])})}return e}function Kt(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var de=function(t,a){var n=Se({},t,a.attrs);return o(H,Se({},n,{icon:Zt}),null)};de.displayName="DragOutlined";de.inheritAttrs=!1;const en=de;var tn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M391 240.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L200 146.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L280 333.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L401 410c5.1.6 9.5-3.7 8.9-8.9L391 240.9zm10.1 373.2L240.8 633c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L146.3 824a8.03 8.03 0 000 11.3l42.4 42.3c3.1 3.1 8.2 3.1 11.3 0L333.7 744l43.7 43.7A8.01 8.01 0 00391 783l18.9-160.1c.6-5.1-3.7-9.4-8.8-8.8zm221.8-204.2L783.2 391c6.6-.8 9.4-8.9 4.7-13.6L744 333.6 877.7 200c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.3a8.03 8.03 0 00-11.3 0L690.3 279.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L614.1 401c-.6 5.2 3.7 9.5 8.8 8.9zM744 690.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L623 614c-5.1-.6-9.5 3.7-8.9 8.9L633 783.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L824 877.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L744 690.4z"}}]},name:"fullscreen-exit",theme:"outlined"};const nn=tn;function Me(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){rn(e,l,a[l])})}return e}function rn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var me=function(t,a){var n=Me({},t,a.attrs);return o(H,Me({},n,{icon:nn}),null)};me.displayName="FullscreenExitOutlined";me.inheritAttrs=!1;const an=me;var ln={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M290 236.4l43.9-43.9a8.01 8.01 0 00-4.7-13.6L169 160c-5.1-.6-9.5 3.7-8.9 8.9L179 329.1c.8 6.6 8.9 9.4 13.6 4.7l43.7-43.7L370 423.7c3.1 3.1 8.2 3.1 11.3 0l42.4-42.3c3.1-3.1 3.1-8.2 0-11.3L290 236.4zm352.7 187.3c3.1 3.1 8.2 3.1 11.3 0l133.7-133.6 43.7 43.7a8.01 8.01 0 0013.6-4.7L863.9 169c.6-5.1-3.7-9.5-8.9-8.9L694.8 179c-6.6.8-9.4 8.9-4.7 13.6l43.9 43.9L600.3 370a8.03 8.03 0 000 11.3l42.4 42.4zM845 694.9c-.8-6.6-8.9-9.4-13.6-4.7l-43.7 43.7L654 600.3a8.03 8.03 0 00-11.3 0l-42.4 42.3a8.03 8.03 0 000 11.3L734 787.6l-43.9 43.9a8.01 8.01 0 004.7 13.6L855 864c5.1.6 9.5-3.7 8.9-8.9L845 694.9zm-463.7-94.6a8.03 8.03 0 00-11.3 0L236.3 733.9l-43.7-43.7a8.01 8.01 0 00-13.6 4.7L160.1 855c-.6 5.1 3.7 9.5 8.9 8.9L329.2 845c6.6-.8 9.4-8.9 4.7-13.6L290 787.6 423.7 654c3.1-3.1 3.1-8.2 0-11.3l-42.4-42.4z"}}]},name:"fullscreen",theme:"outlined"};const on=ln;function Pe(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){sn(e,l,a[l])})}return e}function sn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var pe=function(t,a){var n=Pe({},t,a.attrs);return o(H,Pe({},n,{icon:on}),null)};pe.displayName="FullscreenOutlined";pe.inheritAttrs=!1;const un=pe;var cn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M603.3 327.5l-246 178a7.95 7.95 0 000 12.9l246 178c5.3 3.8 12.7 0 12.7-6.5V643c0-10.2-4.9-19.9-13.2-25.9L457.4 512l145.4-105.2c8.3-6 13.2-15.6 13.2-25.9V334c0-6.5-7.4-10.3-12.7-6.5z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"left-circle",theme:"outlined"};const dn=cn;function Ee(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){mn(e,l,a[l])})}return e}function mn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var ve=function(t,a){var n=Ee({},t,a.attrs);return o(H,Ee({},n,{icon:dn}),null)};ve.displayName="LeftCircleOutlined";ve.inheritAttrs=!1;const pn=ve;var vn={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M666.7 505.5l-246-178A8 8 0 00408 334v46.9c0 10.2 4.9 19.9 13.2 25.9L566.6 512 421.2 617.2c-8.3 6-13.2 15.6-13.2 25.9V690c0 6.5 7.4 10.3 12.7 6.5l246-178c4.4-3.2 4.4-9.8 0-13z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"right-circle",theme:"outlined"};const fn=vn;function Ie(e){for(var t=1;t<arguments.length;t++){var a=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(a);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(a).filter(function(l){return Object.getOwnPropertyDescriptor(a,l).enumerable}))),n.forEach(function(l){gn(e,l,a[l])})}return e}function gn(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var fe=function(t,a){var n=Ie({},t,a.attrs);return o(H,Ie({},n,{icon:fn}),null)};fe.displayName="RightCircleOutlined";fe.inheritAttrs=!1;const bn=fe;const _n=U({__name:"folderNavigator",props:{loc:null},emits:["to"],setup(e,{emit:t}){const a=e,n=ct(()=>a.loc),l=T(!1),b=()=>{l.value=!1,t("to",n.value)};return(_,y)=>{const x=Ut,S=Te;return O(),D(W,null,[o(S,{visible:l.value,"onUpdate:visible":y[1]||(y[1]=v=>l.value=v),title:_.$t("inputAddressAndPressEnter"),onOk:b},{default:p(()=>[o(x,{onPressEnter:b,value:r(n),"onUpdate:value":y[0]||(y[0]=v=>V(n)?n.value=v:null),style:{width:"100%"},"allow-clear":""},null,8,["value"])]),_:1},8,["visible","title"]),$("a",{style:{"margin-left":"8px"},onClick:y[2]||(y[2]=v=>l.value=!0)},L(_.$t("go")),1)],64)}}});function yn(e,t,a,n){const l={x:0,y:0};let b=0,_=0,y=typeof(n==null?void 0:n.width)=="number"?n.width:0,x=typeof(n==null?void 0:n.height)=="number"?n.height:0,S=typeof(n==null?void 0:n.left)=="number"?n.left:0,v=typeof(n==null?void 0:n.top)=="number"?n.top:0,d=!1;const c=f=>{f.stopPropagation(),f.preventDefault(),!(!e.value||!t.value)&&(b=f.clientX,_=f.clientY,y=e.value.offsetWidth,x=e.value.offsetHeight,l.x=t.value.offsetLeft,l.y=t.value.offsetTop,document.documentElement.addEventListener("mousemove",h),document.documentElement.addEventListener("mouseup",s))},h=f=>{if(!e.value||!t.value)return;const w=y+f.clientX-b,g=x+f.clientY-_,C=l.x+f.clientX-b,j=l.y+f.clientY-_;e.value.style.width=`${w}px`,e.value.style.height=`${g}px`,t.value.style.left=`${C}px`,t.value.style.top=`${j}px`,n!=null&&n.onResize&&n.onResize(w,g)},s=()=>{document.documentElement.removeEventListener("mousemove",h),document.documentElement.removeEventListener("mouseup",s)},u=f=>{f.stopPropagation(),f.preventDefault(),!(!e.value||!a.value)&&(d=!0,S=e.value.offsetLeft,v=e.value.offsetTop,b=f.clientX,_=f.clientY,document.documentElement.addEventListener("mousemove",M),document.documentElement.addEventListener("mouseup",k))},M=f=>{if(!e.value||!a.value||!d)return;const w=S+f.clientX-b,g=v+f.clientY-_;e.value.style.left=`${w}px`,e.value.style.top=`${g}px`,n!=null&&n.onDrag&&n.onDrag(w,g)},k=()=>{d=!1,document.documentElement.removeEventListener("mousemove",M),document.documentElement.removeEventListener("mouseup",k)};return dt(()=>{!e.value||!n||(typeof n.width=="number"&&(e.value.style.width=`${n.width}px`),typeof n.height=="number"&&(e.value.style.height=`${n.height}px`),typeof n.left=="number"&&(e.value.style.left=`${n.left}px`),typeof n.top=="number"&&(e.value.style.top=`${n.top}px`))}),mt(()=>{document.documentElement.removeEventListener("mousemove",h),document.documentElement.removeEventListener("mouseup",s),document.documentElement.removeEventListener("mousemove",M),document.documentElement.removeEventListener("mouseup",k)}),ie(()=>[e.value,t.value,a.value],([f,w,g])=>{f&&w&&g&&(w.addEventListener("mousedown",c),g.addEventListener("mousedown",u))}),{handleResizeMouseDown:c,handleDragMouseDown:u}}const hn=e=>(ht("data-v-2b7ab979"),e=e(),Ct(),e),Cn={class:"container"},kn={class:"actoion-bar"},On=hn(()=>$("div",{"flex-placeholder":""},null,-1)),xn={key:0,class:"gen-info"},wn=U({__name:"fullScreenContextMenu",props:{file:null,idx:null},emits:["contextMenuClick"],setup(e,{emit:t}){const a=e,n=ze(),l=T(),b=T([]),_=pt(()=>{var s;return(((s=n.conf)==null?void 0:s.all_custom_tags)??[]).reduce((u,M)=>[...u,{...M,selected:!!b.value.find(k=>k.id===M.id)}],[])}),y=vt(new ft),x=T("");ie(()=>a.file.fullpath,async s=>{y.tasks.forEach(u=>u.cancel()),y.pushAction(()=>gt(s)).res.then(u=>{x.value=u})},{immediate:!0});const S=s=>{s&&y.pushAction(()=>Xt(a.file.fullpath)).res.then(u=>{b.value=u})},v=T(),d=T(),c=bt("fullScreenContextMenu.vue-drag",{left:100,top:100,width:512,height:384,expanded:!0});yn(l,v,d,{...c.value,onDrag:we(function(s,u){c.value={...c.value,left:s,top:u}},300),onResize:we(function(s,u){c.value={...c.value,width:s,height:u}},300)});function h(s){return s.parentNode}return(s,u)=>{const M=Ve,k=Fe,f=yt,w=ee,g=ce;return O(),D("div",{ref_key:"el",ref:l,class:oe(["full-screen-menu",{"unset-size":!r(c).expanded}]),onWheelCapture:u[3]||(u[3]=E(()=>{},["stop"]))},[$("div",Cn,[$("div",kn,[$("div",{ref_key:"dragHandle",ref:d,class:"icon",style:{cursor:"grab"}},[o(r(en))],512),$("div",{class:"icon",style:{cursor:"pointer"},onClick:u[0]||(u[0]=C=>r(c).expanded=!r(c).expanded)},[r(c).expanded?(O(),A(r(an),{key:0})):(O(),A(r(un),{key:1}))]),r(c).expanded?(O(),D(W,{key:0},[On,o(g,{trigger:["hover"],style:{"z-index":"99999"},"get-popup-container":C=>h(C),onVisibleChange:S},{overlay:p(()=>[o(w,{onClick:u[1]||(u[1]=C=>t("contextMenuClick",C,e.file,e.idx)),style:{"z-index":"99999"}},{default:p(()=>[o(k,{key:"send2txt2img"},{default:p(()=>[I(L(s.$t("sendToTxt2img")),1)]),_:1}),o(k,{key:"send2img2img"},{default:p(()=>[I(L(s.$t("sendToImg2img")),1)]),_:1}),o(k,{key:"send2inpaint"},{default:p(()=>[I(L(s.$t("sendToInpaint")),1)]),_:1}),o(k,{key:"send2extras"},{default:p(()=>[I(L(s.$t("sendToExtraFeatures")),1)]),_:1}),o(k,{key:"send2savedDir"},{default:p(()=>[I(L(s.$t("send2savedDir")),1)]),_:1}),o(f,{key:"toggle-tag",title:s.$t("toggleTag")},{default:p(()=>[(O(!0),D(W,null,le(r(_),C=>(O(),A(k,{key:C.id},{default:p(()=>[I(L(C.name)+" ",1),C.selected?(O(),A(r(St),{key:0})):(O(),A(r(Mt),{key:1}))]),_:2},1024))),128))]),_:1},8,["title"])]),_:1})]),default:p(()=>[o(M,null,{default:p(()=>[I(L(r(_t)("openContextMenu")),1)]),_:1})]),_:1},8,["get-popup-container"]),o(M,{onClick:u[2]||(u[2]=C=>r(Ne)(x.value,"copied"))},{default:p(()=>[I(L(s.$t("copyPrompt")),1)]),_:1})],64)):F("",!0)]),r(c).expanded?(O(),D("div",xn,L(x.value),1)):F("",!0)]),r(c).expanded?(O(),D("div",{key:0,class:"mouse-sensor",ref_key:"resizeHandle",ref:v},null,512)):F("",!0)],34)}}});const $n=Be(wn,[["__scopeId","data-v-2b7ab979"]]),Ln={class:"hint"},Sn={class:"location-bar"},Mn={class:"breadcrumb"},Pn=["onClick"],En={class:"actions"},In=["onClick"],Dn={style:{width:"512px",background:"var(--zp-primary-background)",padding:"16px","border-radius":"4px","box-shadow":"0 0 4px var(--zp-secondary-background)",border:"1px solid var(--zp-secondary-background)"}},An={key:0,class:"view"},jn={key:0,class:"preview-switch"},zn=U({__name:"stackView",props:{target:null,tabIdx:null,paneIdx:null,path:null,walkMode:{type:Boolean},stackKey:null},setup(e){const t=e,a=ze(),{scroller:n,walkModePath:l,stackViewEl:b,props:_,multiSelectedIdxs:y,spinning:x}=Pt().toRefs(),{currLocation:S,currPage:v,refresh:d,copyLocation:c,back:h,openNext:s,stack:u,to:M}=Et(t),{gridItems:k,sortMethodConv:f,moreActionsDropdownShow:w,sortedFiles:g,sortMethod:C,viewMode:j,viewModeMap:X,itemSize:Q,loadNextDir:B,loadNextDirLoading:ge,canLoadNext:Re,onScroll:Ue}=It(t),{onDrop:Xe,onFileDragStart:Ye}=Dt(t),{onFileItemClick:Ge,onContextMenuClick:be,showGenInfo:J,imageGenInfo:_e,q:We}=At(t,{openNext:s}),{previewIdx:Z,onPreviewVisibleChange:qe,previewing:ye,previewImgMove:he,canPreview:Ce}=jt(t),{showMenuIdx:te}=zt();return ie(()=>t,()=>{_.value=t,t.walkMode&&(l.value=t.path);const P=Ft.get(t.stackKey??"");P&&(u.value=P.slice())},{immediate:!0}),(P,i)=>{const He=wt,Qe=$t,Je=Te,Ze=q,Ke=R,et=Fe,tt=ee,ke=ce,ne=Rt,nt=z,rt=Ve,at=G;return O(),A(at,{spinning:r(x),size:"large"},{default:p(()=>[o(He,{style:{display:"none"}}),$("div",{ref_key:"stackViewEl",ref:b,onDragover:i[15]||(i[15]=E(()=>{},["prevent"])),onDrop:i[16]||(i[16]=E(m=>r(Xe)(m),["prevent"])),class:"container"},[o(Je,{visible:r(J),"onUpdate:visible":i[1]||(i[1]=m=>V(J)?J.value=m:null),width:"70vw","mask-closable":"",onOk:i[2]||(i[2]=m=>J.value=!1)},{cancelText:p(()=>[]),default:p(()=>[o(Qe,{active:"",loading:!r(We).isIdle},{default:p(()=>[$("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto","z-index":"9999"},onDblclick:i[0]||(i[0]=m=>r(Ne)(r(_e),"copied"))},[$("div",Ln,L(P.$t("doubleClickToCopy")),1),I(" "+L(r(_e)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),$("div",Sn,[$("div",Mn,[o(Ke,{style:{flex:"1"}},{default:p(()=>[(O(!0),D(W,null,le(r(u),(m,N)=>(O(),A(Ze,{key:N},{default:p(()=>[$("a",{onClick:E(Oe=>r(h)(N),["prevent"])},L(m.curr==="/"?P.$t("root"):m.curr.replace(/:\/$/,P.$t("drive"))),9,Pn)]),_:2},1024))),128))]),_:1})]),$("div",En,[$("a",{class:"opt",onClick:i[3]||(i[3]=E((...m)=>r(d)&&r(d)(...m),["prevent"]))},L(P.$t("refresh")),1),t.target==="local"?(O(),A(ke,{key:0},{overlay:p(()=>[o(tt,null,{default:p(()=>[(O(!0),D(W,null,le(r(a).autoCompletedDirList,m=>(O(),A(et,{key:m.dir},{default:p(()=>[$("a",{onClick:E(N=>r(M)(m.dir),["prevent"])},L(m.zh),9,In)]),_:2},1024))),128))]),_:1})]),default:p(()=>[$("a",{class:"opt",onClick:i[4]||(i[4]=E(()=>{},["prevent"]))},[I(L(P.$t("quickMove"))+" ",1),o(r(Ae))])]),_:1})):F("",!0),o(ke,{trigger:["click"],visible:r(w),"onUpdate:visible":i[11]||(i[11]=m=>V(w)?w.value=m:null),placement:"bottomLeft",getPopupContainer:m=>m.parentNode},{overlay:p(()=>[$("div",Dn,[o(nt,kt(Ot({labelCol:{span:6},wrapperCol:{span:18}})),{default:p(()=>[o(ne,{label:P.$t("viewMode")},{default:p(()=>[o(r($e),{value:r(j),"onUpdate:value":i[6]||(i[6]=m=>V(j)?j.value=m:null),onClick:i[7]||(i[7]=E(()=>{},["stop"])),conv:{value:m=>m,text:m=>r(X)[m]},options:Object.keys(r(X))},null,8,["value","conv","options"])]),_:1},8,["label"]),o(ne,{label:P.$t("sortingMethod")},{default:p(()=>[o(r($e),{value:r(C),"onUpdate:value":i[8]||(i[8]=m=>V(C)?C.value=m:null),onClick:i[9]||(i[9]=E(()=>{},["stop"])),conv:r(f),options:Object.keys(r(Bt))},null,8,["value","conv","options"])]),_:1},8,["label"]),o(ne,null,{default:p(()=>[$("a",{onClick:i[10]||(i[10]=E((...m)=>r(c)&&r(c)(...m),["prevent"]))},L(P.$t("copyPath")),1),o(_n,{loc:r(S),onTo:r(M)},null,8,["loc","onTo"])]),_:1})]),_:1},16)])]),default:p(()=>[$("a",{class:"opt",onClick:i[5]||(i[5]=E(()=>{},["prevent"]))},L(P.$t("more")),1)]),_:1},8,["visible","getPopupContainer"])])]),r(v)?(O(),D("div",An,[o(r(Nt),{class:"file-list",items:r(g),ref_key:"scroller",ref:n,onScroll:r(Ue),"item-size":r(Q).first,"key-field":"fullpath","item-secondary-size":r(Q).second,gridItems:r(k)},xt({default:p(({item:m,index:N})=>[o(Tt,{idx:N,file:m,"full-screen-preview-image-url":r(g)[r(Z)]?r(Vt)(r(g)[r(Z)]):"","show-menu-idx":r(te),"onUpdate:showMenuIdx":i[12]||(i[12]=Oe=>V(te)?te.value=Oe:null),selected:r(y).includes(N),"view-mode":r(j),target:e.target,onFileItemClick:r(Ge),onDragstart:r(Ye),onPreviewVisibleChange:r(qe),onContextMenuClick:r(be)},null,8,["idx","file","full-screen-preview-image-url","show-menu-idx","selected","view-mode","target","onFileItemClick","onDragstart","onPreviewVisibleChange","onContextMenuClick"])]),_:2},[t.walkMode?{name:"after",fn:p(()=>[o(rt,{onClick:r(B),loading:r(ge),block:"",type:"primary",disabled:!r(Re),ghost:""},{default:p(()=>[I(L(P.$t("loadNextPage")),1)]),_:1},8,["onClick","loading","disabled"])]),key:"0"}:void 0]),1032,["items","onScroll","item-size","item-secondary-size","gridItems"]),r(ye)?(O(),D("div",jn,[o(r(pn),{onClick:i[13]||(i[13]=m=>r(he)("prev")),class:oe({disable:!r(Ce)("prev")})},null,8,["class"]),o(r(bn),{onClick:i[14]||(i[14]=m=>r(he)("next")),class:oe({disable:!r(Ce)("next")})},null,8,["class"])])):F("",!0)])):F("",!0)],544),r(ye)?(O(),A($n,{key:0,file:r(g)[r(Z)],idx:r(Z),onContextMenuClick:r(be)},null,8,["file","idx","onContextMenuClick"])):F("",!0)]),_:1},8,["spinning"])}}});const Gn=Be(zn,[["__scopeId","data-v-5f3f18c7"]]);export{Gn as default};