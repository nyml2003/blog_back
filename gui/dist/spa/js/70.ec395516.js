"use strict";(globalThis["webpackChunkventusblog"]=globalThis["webpackChunkventusblog"]||[]).push([[70],{1944:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(6929),o=a(7623);function u(){return(0,l.f3)(o.Ng)}},70:(e,t,a)=>{a.r(t),a.d(t,{default:()=>z});a(5954);var l=a(6929),o=a(7218),u=a(80),i=a(1944),n=a(8455),s=a(7493),r=a(9760);const c=(0,l._)("div",{class:"text-red text-weight-bold"},"Exit",-1),d={class:"bg-transparent row justify-between",style:{height:"150px",width:"300px"}},m=(0,l._)("img",{alt:"avatar",src:"https://avatars.githubusercontent.com/u/106670529?s=400&u=1285065547ee37395586d36887a3d7a7b340d112&v=4"},null,-1),p={class:"text-right q-ma-md"},g={class:"text-h6 text-weight-bold"},w={class:"text-subtitle2 q-mt-md"},v={__name:"MainLayoutDesktop",setup(e){const t=(0,o.iH)(!1),a=(0,s.r)(),v=()=>{h.push("/login")},b=()=>{h.push("/"),a.logout(),a.isLogged=!1},h=(0,n.tv)(),f=(0,i.Z)(),_=()=>{a.checkLogged().then((e=>{"token valid"===e?(a.isLogged=!0,a.getPermission()):(a.logout(),a.isLogged=!1)}))};(0,l.bv)((()=>{_()}));const W=(0,o.iH)((0,l.Fl)((()=>a.isLogged)));(0,l.JJ)("isLogged",W);const k=(0,o.iH)("");(0,l.JJ)("keyword",k);const y=(0,o.iH)(""),x=()=>{k.value=y.value,y.value="",Q.value=!1,Z(),h.push({path:"/blog"})},q=(0,o.iH)(!0),Z=()=>{q.value=!1,(0,l.Y3)((()=>{q.value=!0}))},Q=(0,o.iH)(!1);(0,l.YP)(t,(()=>{!1===W.value?(t.value=!1,setTimeout((()=>{f.notify({message:"请先登录",icon:"warning",color:"red",position:"top"}),h.push({path:"/login"})}),200)):r.userApi.get("/user/rest/").then((e=>{H.value=e.data.username,L.value=e.data.email}))}));const H=(0,o.iH)(""),L=(0,o.iH)("");return(e,a)=>{const i=(0,l.up)("q-route-tab"),n=(0,l.up)("q-tabs"),s=(0,l.up)("q-btn"),r=(0,l.up)("q-input"),h=(0,l.up)("q-toolbar"),_=(0,l.up)("q-header"),k=(0,l.up)("q-icon"),Z=(0,l.up)("q-item-section"),j=(0,l.up)("q-item"),C=(0,l.up)("q-list"),U=(0,l.up)("q-scroll-area"),T=(0,l.up)("q-avatar"),V=(0,l.up)("q-img"),I=(0,l.up)("q-drawer"),S=(0,l.up)("router-view"),z=(0,l.up)("q-page-container"),J=(0,l.up)("q-layout"),P=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(J,{view:"hHr LpR ffr",class:"non-selectable bg-grey-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{reveal:""},{default:(0,l.w5)((()=>[Q.value?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(h,{key:0,class:"bg-white text-black justify-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{"inline-label":""},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{icon:"home",to:"/",exact:""}),(0,l.Wm)(i,{icon:"group",to:"/friend"}),(0,l.Wm)(i,{icon:"menu_book",to:"/blog"}),(0,l.Wm)(i,{icon:"videogame_asset",to:"/game",exact:""})])),_:1}),(0,l.Wm)(r,{ref:"input",modelValue:y.value,"onUpdate:modelValue":a[0]||(a[0]=e=>y.value=e),color:"primary",dense:"",outlined:"",placeholder:"Search"},{prepend:(0,l.w5)((()=>[(0,l.Wm)(s,{round:"",icon:"search",color:"primary",onClick:x,size:"sm"})])),_:1},8,["modelValue"]),(0,l.Wm)(s,{flat:"",icon:"account_circle",onClick:a[1]||(a[1]=()=>{W.value?t.value=!t.value:((0,o.SU)(f).notify({message:"请先登录",icon:"warning",color:"red",position:"top"}),v())}),class:"q-ml-md",label:"帐号"})])),_:1}))])),_:1}),(0,l.Wm)(I,{modelValue:t.value,"onUpdate:modelValue":a[3]||(a[3]=e=>t.value=e),width:300,side:"right",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(U,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-left":"1px solid #ddd"}},{default:(0,l.w5)((()=>[(0,l.Wm)(C,{padding:""},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(j,{clickable:"",to:"/user/profile",exact:""},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{name:"account_circle"})])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" My Profile ")])),_:1})])),_:1})),[[P]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(j,{clickable:"",to:"/user/comment",exact:""},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{name:"comment"})])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" My Comments ")])),_:1})])),_:1})),[[P]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(j,{clickable:"",to:"/user/statistics",exact:""},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{name:"bar_chart"})])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Comment statistics ")])),_:1})])),_:1})),[[P]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(j,{clickable:"",onClick:a[2]||(a[2]=()=>{t.value=!1,(0,o.SU)(f).notify({message:"确定要退出登录吗？",color:"white",icon:"warning",textColor:"black",position:"center",actions:[{label:"取消",color:"black"},{label:"确定",color:"primary",handler:()=>{b()}}]})}),exact:""},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(k,{name:"exit_to_app"})])),_:1}),(0,l.Wm)(Z,null,{default:(0,l.w5)((()=>[c])),_:1})])),_:1})),[[P]])])),_:1})])),_:1}),(0,l.Wm)(V,{class:"absolute-top",src:"https://cdn.quasar.dev/img/material.png",style:{height:"150px"}},{default:(0,l.w5)((()=>[(0,l._)("div",d,[(0,l.Wm)(T,{size:"100px"},{default:(0,l.w5)((()=>[m])),_:1}),(0,l._)("div",p,[(0,l._)("div",g,(0,u.zw)(H.value),1),(0,l._)("div",w,(0,u.zw)(L.value),1)])])])),_:1})])),_:1},8,["modelValue"]),(0,l.Wm)(z,null,{default:(0,l.w5)((()=>[q.value?((0,l.wg)(),(0,l.j4)(S,{key:0})):(0,l.kq)("",!0)])),_:1})])),_:1})}}};var b=a(4464),h=a(6453),f=a(6434),_=a(4411),W=a(9087),k=a(6919),y=a(5779),x=a(4541),q=a(7784),Z=a(6758),Q=a(3251),H=a(9131),L=a(1909),j=a(2322),C=a(4743),U=a(6318),T=a(1458),V=a(9332),I=a.n(V);const S=v,z=S;I()(v,"components",{QLayout:b.Z,QHeader:h.Z,QToolbar:f.Z,QTabs:_.Z,QRouteTab:W.Z,QInput:k.Z,QBtn:y.Z,QDrawer:x.Z,QScrollArea:q.Z,QList:Z.Z,QItem:Q.Z,QItemSection:H.Z,QIcon:L.Z,QImg:j.Z,QAvatar:C.Z,QPageContainer:U.Z}),I()(v,"directives",{Ripple:T.Z})}}]);