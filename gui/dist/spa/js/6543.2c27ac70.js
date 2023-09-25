"use strict";(globalThis["webpackChunkventusblog"]=globalThis["webpackChunkventusblog"]||[]).push([[6543],{5024:(e,t,a)=>{a.d(t,{Z:()=>c});a(5954);var l=a(6929),o=a(7218),n=a(1419),i=a(8532),u=a(859),r=a(8192),s=a(7623);const c=(0,u.L)({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:a}){const{proxy:{$q:u}}=(0,l.FN)(),c=(0,l.f3)(s.YE,s.qO);if(c===s.qO)return console.error("QFooter needs to be child of QLayout"),s.qO;const d=(0,o.iH)(parseInt(e.heightHint,10)),v=(0,o.iH)(!0),f=(0,o.iH)(!0===n.uX.value||!0===c.isContainer.value?0:window.innerHeight),p=(0,l.Fl)((()=>!0===e.reveal||c.view.value.indexOf("F")>-1||u.platform.is.ios&&!0===c.isContainer.value)),m=(0,l.Fl)((()=>!0===c.isContainer.value?c.containerHeight.value:f.value)),g=(0,l.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===p.value)return!0===v.value?d.value:0;const t=c.scroll.value.position+m.value+d.value-c.height.value;return t>0?t:0})),h=(0,l.Fl)((()=>!0!==e.modelValue||!0===p.value&&!0!==v.value)),b=(0,l.Fl)((()=>!0===e.modelValue&&!0===h.value&&!0===e.reveal)),w=(0,l.Fl)((()=>"q-footer q-layout__section--marginal "+(!0===p.value?"fixed":"absolute")+"-bottom"+(!0===e.bordered?" q-footer--bordered":"")+(!0===h.value?" q-footer--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus"+(!0!==p.value?" hidden":""):""))),y=(0,l.Fl)((()=>{const e=c.rows.value.bottom,t={};return"l"===e[0]&&!0===c.left.space&&(t[!0===u.lang.rtl?"right":"left"]=`${c.left.size}px`),"r"===e[2]&&!0===c.right.space&&(t[!0===u.lang.rtl?"left":"right"]=`${c.right.size}px`),t}));function x(e,t){c.update("footer",e,t)}function _(e,t){e.value!==t&&(e.value=t)}function k({height:e}){_(d,e),x("size",e)}function q(){if(!0!==e.reveal)return;const{direction:t,position:a,inflectionPoint:l}=c.scroll.value;_(v,"up"===t||a-l<100||c.height.value-m.value-a-d.value<300)}function W(e){!0===b.value&&_(v,!0),a("focusin",e)}(0,l.YP)((()=>e.modelValue),(e=>{x("space",e),_(v,!0),c.animate()})),(0,l.YP)(g,(e=>{x("offset",e)})),(0,l.YP)((()=>e.reveal),(t=>{!1===t&&_(v,e.modelValue)})),(0,l.YP)(v,(e=>{c.animate(),a("reveal",e)})),(0,l.YP)([d,c.scroll,c.height],q),(0,l.YP)((()=>u.screen.height),(e=>{!0!==c.isContainer.value&&_(f,e)}));const Q={};return c.instances.footer=Q,!0===e.modelValue&&x("size",d.value),x("space",e.modelValue),x("offset",g.value),(0,l.Jd)((()=>{c.instances.footer===Q&&(c.instances.footer=void 0,x("size",0),x("offset",0),x("space",!1))})),()=>{const a=(0,r.vs)(t.default,[(0,l.h)(i.Z,{debounce:0,onResize:k})]);return!0===e.elevated&&a.push((0,l.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),(0,l.h)("footer",{class:w.value,style:y.value,onFocusin:W},a)}}})},3271:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(859),o=a(6929),n=a(8192),i=a(7623);const u={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>2===e.length},expand:Boolean};function r(){const{props:e,proxy:{$q:t}}=(0,o.FN)(),a=(0,o.f3)(i.YE,i.qO);if(a===i.qO)return console.error("QPageSticky needs to be child of QLayout"),i.qO;const l=(0,o.Fl)((()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:"top"===t||"bottom"===t,horizontal:"left"===t||"right"===t}})),u=(0,o.Fl)((()=>a.header.offset)),r=(0,o.Fl)((()=>a.right.offset)),s=(0,o.Fl)((()=>a.footer.offset)),c=(0,o.Fl)((()=>a.left.offset)),d=(0,o.Fl)((()=>{let a=0,o=0;const n=l.value,i=!0===t.lang.rtl?-1:1;!0===n.top&&0!==u.value?o=`${u.value}px`:!0===n.bottom&&0!==s.value&&(o=-s.value+"px"),!0===n.left&&0!==c.value?a=i*c.value+"px":!0===n.right&&0!==r.value&&(a=-i*r.value+"px");const d={transform:`translate(${a}, ${o})`};return e.offset&&(d.margin=`${e.offset[1]}px ${e.offset[0]}px`),!0===n.vertical?(0!==c.value&&(d[!0===t.lang.rtl?"right":"left"]=`${c.value}px`),0!==r.value&&(d[!0===t.lang.rtl?"left":"right"]=`${r.value}px`)):!0===n.horizontal&&(0!==u.value&&(d.top=`${u.value}px`),0!==s.value&&(d.bottom=`${s.value}px`)),d})),v=(0,o.Fl)((()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--`+(!0===e.expand?"expand":"shrink")));function f(t){const a=(0,n.KR)(t.default);return(0,o.h)("div",{class:v.value,style:d.value},!0===e.expand?a:[(0,o.h)("div",a)])}return{$layout:a,getStickyContent:f}}const s=(0,l.L)({name:"QPageSticky",props:u,setup(e,{slots:t}){const{getStickyContent:a}=r();return()=>a(t)}})},1944:(e,t,a)=>{a.d(t,{Z:()=>n});var l=a(6929),o=a(7623);function n(){return(0,l.f3)(o.Ng)}},6543:(e,t,a)=>{a.r(t),a.d(t,{default:()=>B});a(5954);var l=a(6929),o=a(7218),n=a(80),i=a(1944),u=a(8455),r=a(7493),s=a(9760);const c=e=>((0,l.dD)("data-v-be015b6a"),e=e(),(0,l.Cn)(),e),d=c((()=>(0,l._)("div",{class:"text-red text-weight-bold"},"Exit",-1))),v={class:"bg-transparent row justify-between",style:{height:"150px",width:"300px"}},f=c((()=>(0,l._)("img",{src:"https://avatars.githubusercontent.com/u/106670529?s=400&u=1285065547ee37395586d36887a3d7a7b340d112&v=4"},null,-1))),p={class:"text-right q-ma-md"},m={class:"text-h6 text-weight-bold"},g={class:"text-subtitle2 q-mt-md"},h={__name:"MainLayoutMobile",setup(e){const t=(0,o.iH)(!1),a=(0,r.r)(),c=()=>{h.push("/"),a.logout(),a.isLogged=!1},h=(0,u.tv)(),b=(0,i.Z)(),w=()=>{a.checkLogged().then((e=>{"token valid"===e?(a.isLogged=!0,a.getPermission()):(a.logout(),a.isLogged=!1)}))};(0,l.bv)((()=>{const e=e=>{!1===F.value?Q.value=!1:Z.value&&!Z.value.$el.contains(e.target)?(F.value=!1,Q.value=!1):Q.value=!0};document.addEventListener("click",e),(0,l.Ah)((()=>{document.removeEventListener("click",e)})),w()}));const y=(0,o.iH)((0,l.Fl)((()=>a.isLogged)));(0,l.JJ)("isLogged",y);const x=(0,o.iH)("");(0,l.JJ)("keyword",x);const _=(0,o.iH)(""),k=()=>{x.value=_.value,_.value="",Q.value=!1,W(),h.push({path:"/blog"})},q=(0,o.iH)(!0),W=()=>{q.value=!1,(0,l.Y3)((()=>{q.value=!0}))},Q=(0,o.iH)(!1),Z=(0,o.iH)(null),F=(0,o.iH)(!1);(0,l.YP)(t,(()=>{!1===y.value?(t.value=!1,setTimeout((()=>{h.push({path:"/login"})}),200)):s.userApi.get("/user/rest/").then((e=>{H.value=e.data.username,C.value=e.data.email}))}));const H=(0,o.iH)(""),C=(0,o.iH)("");return(e,a)=>{const i=(0,l.up)("q-header"),u=(0,l.up)("q-icon"),r=(0,l.up)("q-item-section"),s=(0,l.up)("q-item"),h=(0,l.up)("q-list"),w=(0,l.up)("q-scroll-area"),y=(0,l.up)("q-avatar"),x=(0,l.up)("q-img"),W=(0,l.up)("q-btn"),L=(0,l.up)("q-drawer"),$=(0,l.up)("q-page-sticky"),V=(0,l.up)("router-view"),P=(0,l.up)("q-page-container"),j=(0,l.up)("q-route-tab"),z=(0,l.up)("q-tabs"),O=(0,l.up)("q-toolbar"),S=(0,l.up)("q-input"),Y=(0,l.up)("q-footer"),I=(0,l.up)("q-layout"),B=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(I,{view:"hHr LpR ffr",class:"non-selectable bg-grey-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{elevated:""}),(0,l.Wm)(L,{modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value=e),"show-if-above":"",width:300,side:"right",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(w,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-left":"1px solid #ddd"}},{default:(0,l.w5)((()=>[(0,l.Wm)(h,{padding:""},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(s,{clickable:"",to:"/user/profile",exact:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{name:"account_circle"})])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" My Profile ")])),_:1})])),_:1})),[[B]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(s,{clickable:"",to:"/user/comment",exact:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{name:"comment"})])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" My Comments ")])),_:1})])),_:1})),[[B]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(s,{clickable:"",to:"/user/statistics",exact:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{name:"bar_chart"})])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Comment statistics ")])),_:1})])),_:1})),[[B]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(s,{clickable:"",onClick:a[0]||(a[0]=()=>{t.value=!1,(0,o.SU)(b).notify({message:"确定要退出登录吗？",color:"white",icon:"warning",textColor:"black",position:"center",actions:[{label:"取消",color:"black"},{label:"确定",color:"primary",handler:()=>{c()}}]})}),exact:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(u,{name:"exit_to_app"})])),_:1}),(0,l.Wm)(r,null,{default:(0,l.w5)((()=>[d])),_:1})])),_:1})),[[B]])])),_:1})])),_:1}),(0,l.Wm)(x,{class:"absolute-top",src:"https://cdn.quasar.dev/img/material.png",style:{height:"150px"}},{default:(0,l.w5)((()=>[(0,l._)("div",v,[(0,l.Wm)(y,{size:"100px"},{default:(0,l.w5)((()=>[f])),_:1}),(0,l._)("div",p,[(0,l._)("div",m,(0,n.zw)(H.value),1),(0,l._)("div",g,(0,n.zw)(C.value),1)])])])),_:1}),(0,l.Wm)(W,{style:{position:"absolute",bottom:"50vh",left:"-16.8px"},dense:"",round:"",unelevated:"",color:"accent",icon:"chevron_right",onClick:a[1]||(a[1]=e=>t.value=!1)})])),_:1},8,["modelValue"]),(0,l.Wm)(P,null,{default:(0,l.w5)((()=>[(0,l.Wm)($,{class:"z-top",position:"right",offset:[-16.8,0]},{default:(0,l.w5)((()=>[t.value?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(W,{key:0,dense:"",round:"",unelevated:"",color:"accent",icon:"chevron_left",onClick:a[3]||(a[3]=e=>t.value=!0)}))])),_:1}),q.value?((0,l.wg)(),(0,l.j4)(V,{key:0})):(0,l.kq)("",!0)])),_:1}),(0,l.Wm)(Y,{ref_key:"toolbarRef",ref:Z,reveal:""},{default:(0,l.w5)((()=>[Q.value?((0,l.wg)(),(0,l.j4)(O,{key:1,class:"bg-white text-black justify-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(S,{ref:"input",modelValue:_.value,"onUpdate:modelValue":a[5]||(a[5]=e=>_.value=e),color:"primary",dense:"",borderless:"",style:{width:"100%"},placeholder:"Search"},{prepend:(0,l.w5)((()=>[(0,l.Wm)(W,{flat:"",dense:"",icon:"search",color:"primary",onClick:k})])),_:1},8,["modelValue"])])),_:1})):((0,l.wg)(),(0,l.j4)(O,{key:0,class:"bg-white text-black justify-between"},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{"inline-label":""},{default:(0,l.w5)((()=>[(0,l.Wm)(j,{icon:"home",to:"/",exact:""}),(0,l.Wm)(j,{icon:"group",to:"/friend"})])),_:1}),(0,l.Wm)(W,{round:"",icon:"search",color:"primary",onClick:a[4]||(a[4]=e=>F.value=!0)}),(0,l.Wm)(z,{"inline-label":""},{default:(0,l.w5)((()=>[(0,l.Wm)(j,{icon:"menu_book",to:"/blog"}),(0,l.Wm)(j,{icon:"videogame_asset",to:"/game",exact:""})])),_:1})])),_:1}))])),_:1},512)])),_:1})}}};var b=a(5291),w=a(4464),y=a(6453),x=a(4541),_=a(7784),k=a(6758),q=a(3251),W=a(9131),Q=a(1909),Z=a(2322),F=a(4743),H=a(5779),C=a(6318),L=a(3271),$=a(5024),V=a(6434),P=a(4411),j=a(9087),z=a(6919),O=a(1458),S=a(9332),Y=a.n(S);const I=(0,b.Z)(h,[["__scopeId","data-v-be015b6a"]]),B=I;Y()(h,"components",{QLayout:w.Z,QHeader:y.Z,QDrawer:x.Z,QScrollArea:_.Z,QList:k.Z,QItem:q.Z,QItemSection:W.Z,QIcon:Q.Z,QImg:Z.Z,QAvatar:F.Z,QBtn:H.Z,QPageContainer:C.Z,QPageSticky:L.Z,QFooter:$.Z,QToolbar:V.Z,QTabs:P.Z,QRouteTab:j.Z,QInput:z.Z}),Y()(h,"directives",{Ripple:O.Z})}}]);