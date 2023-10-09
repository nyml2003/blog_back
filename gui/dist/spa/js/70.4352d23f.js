"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[70],{6453:(e,a,l)=>{l.d(a,{Z:()=>s});l(5954);var t=l(6929),i=l(7218),n=l(8532),o=l(859),r=l(8192),u=l(7623);const s=(0,o.L)({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:a,emit:l}){const{proxy:{$q:o}}=(0,t.FN)(),s=(0,t.f3)(u.YE,u.qO);if(s===u.qO)return console.error("QHeader needs to be child of QLayout"),u.qO;const c=(0,i.iH)(parseInt(e.heightHint,10)),d=(0,i.iH)(!0),g=(0,t.Fl)((()=>!0===e.reveal||s.view.value.indexOf("H")>-1||o.platform.is.ios&&!0===s.isContainer.value)),v=(0,t.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===g.value)return!0===d.value?c.value:0;const a=c.value-s.scroll.value.position;return a>0?a:0})),p=(0,t.Fl)((()=>!0!==e.modelValue||!0===g.value&&!0!==d.value)),m=(0,t.Fl)((()=>!0===e.modelValue&&!0===p.value&&!0===e.reveal)),h=(0,t.Fl)((()=>"q-header q-layout__section--marginal "+(!0===g.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===p.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),f=(0,t.Fl)((()=>{const e=s.rows.value.top,a={};return"l"===e[0]&&!0===s.left.space&&(a[!0===o.lang.rtl?"right":"left"]=`${s.left.size}px`),"r"===e[2]&&!0===s.right.space&&(a[!0===o.lang.rtl?"left":"right"]=`${s.right.size}px`),a}));function w(e,a){s.update("header",e,a)}function b(e,a){e.value!==a&&(e.value=a)}function _({height:e}){b(c,e),w("size",e)}function y(e){!0===m.value&&b(d,!0),l("focusin",e)}(0,t.YP)((()=>e.modelValue),(e=>{w("space",e),b(d,!0),s.animate()})),(0,t.YP)(v,(e=>{w("offset",e)})),(0,t.YP)((()=>e.reveal),(a=>{!1===a&&b(d,e.modelValue)})),(0,t.YP)(d,(e=>{s.animate(),l("reveal",e)})),(0,t.YP)(s.scroll,(a=>{!0===e.reveal&&b(d,"up"===a.direction||a.position<=e.revealOffset||a.position-a.inflectionPoint<100)}));const q={};return s.instances.header=q,!0===e.modelValue&&w("size",c.value),w("space",e.modelValue),w("offset",v.value),(0,t.Jd)((()=>{s.instances.header===q&&(s.instances.header=void 0,w("size",0),w("offset",0),w("space",!1))})),()=>{const l=(0,r.Bl)(a.default,[]);return!0===e.elevated&&l.push((0,t.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push((0,t.h)(n.Z,{debounce:0,onResize:_})),(0,t.h)("header",{class:h.value,style:f.value,onFocusin:y},l)}}})},2322:(e,a,l)=>{l.d(a,{Z:()=>g});l(5954);var t=l(7218),i=l(6929),n=l(8689),o=l(3578);const r={ratio:[String,Number]};function u(e,a){return(0,i.Fl)((()=>{const l=Number(e.ratio||(void 0!==a?a.value:void 0));return!0!==isNaN(l)&&l>0?{paddingBottom:100/l+"%"}:null}))}var s=l(859),c=l(8192);const d=16/9,g=(0,s.L)({name:"QImg",props:{...r,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:d},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:a,emit:l}){const r=(0,t.iH)(e.initialRatio),s=u(e,r);let d=null,g=!1;const v=[(0,t.iH)(null),(0,t.iH)(q())],p=(0,t.iH)(0),m=(0,t.iH)(!1),h=(0,t.iH)(!1),f=(0,i.Fl)((()=>`q-img q-img--${!0===e.noNativeMenu?"no-":""}menu`)),w=(0,i.Fl)((()=>({width:e.width,height:e.height}))),b=(0,i.Fl)((()=>"q-img__image "+(void 0!==e.imgClass?e.imgClass+" ":"")+`q-img__image--with${!0===e.noTransition?"out":""}-transition`)),_=(0,i.Fl)((()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position})));function y(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function q(){return void 0!==e.placeholderSrc?{src:e.placeholderSrc}:null}function k(e){null!==d&&(clearTimeout(d),d=null),h.value=!1,null===e?(m.value=!1,v[1^p.value].value=q()):m.value=!0,v[p.value].value=e}function S({target:e}){!0!==g&&(null!==d&&(clearTimeout(d),d=null),r.value=0===e.naturalHeight?.5:e.naturalWidth/e.naturalHeight,x(e,1))}function x(e,a){!0!==g&&1e3!==a&&(!0===e.complete?W(e):d=setTimeout((()=>{d=null,x(e,a+1)}),50))}function W(e){!0!==g&&(p.value=1^p.value,v[p.value].value=null,m.value=!1,h.value=!1,l("load",e.currentSrc||e.src))}function Z(e){null!==d&&(clearTimeout(d),d=null),m.value=!1,h.value=!0,v[p.value].value=null,v[1^p.value].value=q(),l("error",e)}function H(a){const l=v[a].value,t={key:"img_"+a,class:b.value,style:_.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...l};return p.value===a?(t.class+=" q-img__image--waiting",Object.assign(t,{onLoad:S,onError:Z})):t.class+=" q-img__image--loaded",(0,i.h)("div",{class:"q-img__container absolute-full",key:"img"+a},(0,i.h)("img",t))}function Q(){return!0!==m.value?(0,i.h)("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},(0,c.KR)(a[!0===h.value?"error":"default"])):(0,i.h)("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},void 0!==a.loading?a.loading():!0===e.noSpinner?void 0:[(0,i.h)(o.Z,{color:e.spinnerColor,size:e.spinnerSize})])}return(0,i.YP)((()=>y()),k),k(y()),(0,i.Jd)((()=>{g=!0,null!==d&&(clearTimeout(d),d=null)})),()=>{const a=[];return null!==s.value&&a.push((0,i.h)("div",{key:"filler",style:s.value})),!0!==h.value&&(null!==v[0].value&&a.push(H(0)),null!==v[1].value&&a.push(H(1))),a.push((0,i.h)(n.uT,{name:"q-transition--fade"},Q)),(0,i.h)("div",{class:f.value,style:w.value,role:"img","aria-label":e.alt},a)}}})},1944:(e,a,l)=>{l.d(a,{Z:()=>n});var t=l(6929),i=l(7623);function n(){return(0,t.f3)(i.Ng)}},7733:(e,a,l)=>{l.d(a,{v:()=>i});var t=l(8910);const i=(0,t.Q_)("MainLayoutStore",{state:()=>({isRightDrawerOpen:!1,id:null})})},70:(e,a,l)=>{l.r(a),l.d(a,{default:()=>D});l(5954);var t=l(6929),i=l(8689),n=l(80),o=l(1944),r=l(8455),u=l(7493),s=l(7218),c=l(9482),d=l(7733);const g=e=>((0,t.dD)("data-v-43cadd31"),e=e(),(0,t.Cn)(),e),v=g((()=>(0,t._)("div",{class:"q-mx-md"},null,-1))),p=g((()=>(0,t._)("div",{class:"text-red text-weight-bold"},"注销",-1))),m={class:"bg-transparent row justify-between",style:{height:"150px",width:"300px"}},h=["src"],f={class:"text-right q-ma-md"},w={class:"text-h6 text-weight-bold"},b={class:"text-subtitle2 q-mt-md"},_={__name:"MainLayoutDesktop",setup(e){const a=(0,d.v)(),l=(0,u.r)(),g=()=>{y.push("/login")},_=()=>{y.push("/"),l.logout(),l.isLogged=!1},y=(0,r.tv)(),q=(0,o.Z)(),k=()=>{l.checkLogged().then((e=>{"token valid"===e?l.isLogged=!0:(l.logout(),l.isLogged=!1)}))};(0,t.bv)((()=>{k()}));const S=(0,s.iH)((0,t.Fl)((()=>l.isLogged))),x=(0,s.iH)((0,t.Fl)((()=>a.isRightDrawerOpen)));(0,t.JJ)("isLogged",S);const W=(0,s.iH)("");(0,t.JJ)("keyword",W);const Z=(0,s.iH)(""),H=()=>{W.value=Z.value,Z.value="",z(),y.push({path:"/blog"})},Q=(0,s.iH)(!0),z=()=>{Q.value=!1,(0,t.Y3)((()=>{Q.value=!0}))};(0,t.YP)(x,(()=>{!1===S.value?(a.isRightDrawerOpen.value=!1,setTimeout((()=>{q.notify({message:"请先登录",icon:"warning",color:"red",position:"top"}),y.push({path:"/login"})}),200)):c.userApi.get("/user/self/").then((e=>{console.log(e),F.value.username=e.data.username,F.value.avatar=e.data.avatar,F.value.description=e.data.description,F.value.nickname=e.data.nickname}))}));const F=(0,s.iH)({username:"",avatar:null,description:""}),C=()=>{S.value?a.isRightDrawerOpen=!a.isRightDrawerOpen:(q.notify({message:"请先登录",icon:"warning",color:"red",position:"top"}),g())},L=()=>{a.isRightDrawerOpen=!1,q.notify({message:"确定要退出登录吗？",color:"white",icon:"warning",textColor:"black",position:"center",actions:[{label:"取消",color:"black"},{label:"确定",color:"primary",handler:()=>{_()}}]})};return(e,a)=>{const l=(0,t.up)("q-route-tab"),o=(0,t.up)("q-tabs"),r=(0,t.up)("q-btn"),u=(0,t.up)("q-input"),s=(0,t.up)("q-toolbar"),c=(0,t.up)("q-header"),d=(0,t.up)("q-icon"),_=(0,t.up)("q-item-section"),y=(0,t.up)("q-item"),q=(0,t.up)("q-list"),k=(0,t.up)("q-scroll-area"),W=(0,t.up)("q-avatar"),z=(0,t.up)("q-img"),T=(0,t.up)("q-drawer"),V=(0,t.up)("router-view"),O=(0,t.up)("q-page-container"),j=(0,t.up)("q-layout"),R=(0,t.Q2)("ripple");return(0,t.wg)(),(0,t.j4)(j,{view:"hHr LpR ffr",class:"non-selectable bg-grey-3"},{default:(0,t.w5)((()=>[(0,t.Wm)(c,{elevated:"",style:{"backdrop-filter":"blur(10px)"},class:"bg-transparent"},{default:(0,t.w5)((()=>[(0,t.Wm)(s,{class:"text-black justify-center"},{default:(0,t.w5)((()=>[(0,t.Wm)(o,{"inline-label":""},{default:(0,t.w5)((()=>[(0,t.Wm)(l,{icon:"home",to:"/",exact:"",label:"简介"}),(0,t.Wm)(l,{icon:"group",to:"/friend",exact:"",label:"友链"}),(0,t.Wm)(l,{icon:"menu_book",to:"/blog",exact:"",label:"博文列表"}),(0,t.Wm)(l,{icon:"videogame_asset",to:"/game",exact:"",label:"游戏"})])),_:1}),v,(0,t.Wm)(u,{ref:"input",modelValue:Z.value,"onUpdate:modelValue":a[0]||(a[0]=e=>Z.value=e),color:"primary",dense:"",outlined:"",placeholder:"Search"},{prepend:(0,t.w5)((()=>[(0,t.Wm)(r,{round:"",icon:"search",color:"primary",onClick:H,size:"sm"})])),_:1},8,["modelValue"]),(0,t.Wm)(i.uT,{name:"fade",mode:"out-in"},{default:(0,t.w5)((()=>[S.value?((0,t.wg)(),(0,t.j4)(r,{key:0,flat:"",icon:"account_circle",onClick:C,class:"q-ml-md",label:"帐号"})):((0,t.wg)(),(0,t.j4)(r,{key:1,flat:"",icon:"account_circle",onClick:g,class:"q-ml-md",label:"登录"}))])),_:1})])),_:1})])),_:1}),(0,t.Wm)(T,{modelValue:x.value,"onUpdate:modelValue":a[1]||(a[1]=e=>x.value=e),width:300,side:"right",elevated:""},{default:(0,t.w5)((()=>[(0,t.Wm)(k,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-left":"1px solid #ddd"}},{default:(0,t.w5)((()=>[(0,t.Wm)(q,{padding:""},{default:(0,t.w5)((()=>[(0,t.wy)(((0,t.wg)(),(0,t.j4)(y,{clickable:"",to:"/user/profile/desktop",exact:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{name:"account_circle"})])),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" 个人中心 ")])),_:1})])),_:1})),[[R]]),(0,t.wy)(((0,t.wg)(),(0,t.j4)(y,{clickable:"",to:"/admin",exact:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{name:"admin_panel_settings"})])),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[(0,t.Uk)(" 后台管理 ")])),_:1})])),_:1})),[[R]]),(0,t.wy)(((0,t.wg)(),(0,t.j4)(y,{clickable:"",onClick:L,exact:""},{default:(0,t.w5)((()=>[(0,t.Wm)(_,{avatar:""},{default:(0,t.w5)((()=>[(0,t.Wm)(d,{name:"exit_to_app"})])),_:1}),(0,t.Wm)(_,null,{default:(0,t.w5)((()=>[p])),_:1})])),_:1})),[[R]])])),_:1})])),_:1}),(0,t.Wm)(z,{class:"absolute-top",src:"https://cdn.quasar.dev/img/material.png",style:{height:"150px"}},{default:(0,t.w5)((()=>[(0,t._)("div",m,[(0,t.Wm)(W,{size:"100px"},{default:(0,t.w5)((()=>[(0,t._)("img",{alt:"avatar",src:F.value.avatar?F.value.avatar:"https://cdn.quasar.dev/img/avatar.png"},null,8,h)])),_:1}),(0,t._)("div",f,[(0,t._)("div",w,(0,n.zw)(F.value.nickname?F.value.nickname:F.value.username),1),(0,t._)("div",b,(0,n.zw)(F.value.description),1)])])])),_:1})])),_:1},8,["modelValue"]),(0,t.Wm)(O,null,{default:(0,t.w5)((()=>[Q.value?((0,t.wg)(),(0,t.j4)(V,{key:0})):(0,t.kq)("",!0)])),_:1})])),_:1})}}};var y=l(5291),q=l(4464),k=l(6453),S=l(6434),x=l(4411),W=l(6289),Z=l(9033),H=l(5779),Q=l(4541),z=l(7784),F=l(6758),C=l(3251),L=l(9131),T=l(1909),V=l(2322),O=l(4743),j=l(6318),R=l(1458),B=l(9332),N=l.n(B);const P=(0,y.Z)(_,[["__scopeId","data-v-43cadd31"]]),D=P;N()(_,"components",{QLayout:q.Z,QHeader:k.Z,QToolbar:S.Z,QTabs:x.Z,QRouteTab:W.Z,QInput:Z.Z,QBtn:H.Z,QDrawer:Q.Z,QScrollArea:z.Z,QList:F.Z,QItem:C.Z,QItemSection:L.Z,QIcon:T.Z,QImg:V.Z,QAvatar:O.Z,QPageContainer:j.Z}),N()(_,"directives",{Ripple:R.Z})}}]);