"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[6543],{1944:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(6929),o=a(7623);function u(){return(0,l.f3)(o.Ng)}},6196:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(6929),o=a(80),u=a(7218),i=a(8910);const r=(0,i.Q_)("RecordStore",{state:()=>({RecordNumber:"浙ICP备2023031873号-1"})}),n={href:"http://beian.miit.gov.cn",target:"_blank"},s={__name:"RecordShow",setup(e){const t=r();return(e,a)=>((0,l.wg)(),(0,l.iD)("a",n,(0,o.zw)((0,u.SU)(t).RecordNumber),1))}},c=s,d=c},6543:(e,t,a)=>{a.r(t),a.d(t,{default:()=>E});a(5954);var l=a(6929),o=a(7218),u=a(80),i=a(1944),r=a(8455),n=a(7493),s=a(9482),c=a(6196);const d=e=>((0,l.dD)("data-v-642af1b9"),e=e(),(0,l.Cn)(),e),m=d((()=>(0,l._)("div",{class:"text-red text-weight-bold"},"Exit",-1))),p={class:"bg-transparent row justify-between",style:{height:"150px",width:"300px"}},v=d((()=>(0,l._)("img",{src:"https://avatars.githubusercontent.com/u/106670529?s=400&u=1285065547ee37395586d36887a3d7a7b340d112&v=4"},null,-1))),g={class:"text-right q-ma-md"},w={class:"text-h6 text-weight-bold"},b={class:"text-subtitle2 q-mt-md"},f={class:"flex flex-center bg-grey-3",style:{height:"200px"}},h=d((()=>(0,l._)("div",{class:"text-caption1 text-grey-8"},"© 2023 风唤长河",-1))),_={__name:"MainLayoutMobile",setup(e){const t=(0,o.iH)(!1),a=(0,n.r)(),d=()=>{_.push("/"),a.logout(),a.isLogged=!1},_=(0,r.tv)(),k=(0,i.Z)(),y=()=>{a.checkLogged().then((e=>{"token valid"===e?a.isLogged=!0:(a.logout(),a.isLogged=!1)}))};(0,l.bv)((()=>{const e=e=>{!1===L.value?j.value=!1:H.value&&!H.value.$el.contains(e.target)?(L.value=!1,j.value=!1):j.value=!0};document.addEventListener("click",e),(0,l.Ah)((()=>{document.removeEventListener("click",e)})),y()}));const x=(0,o.iH)((0,l.Fl)((()=>a.isLogged)));(0,l.JJ)("isLogged",x);const W=(0,o.iH)("");(0,l.JJ)("keyword",W);const q=(0,o.iH)(""),Z=()=>{W.value=q.value,q.value="",j.value=!1,C(),_.push({path:"/blog"})},Q=(0,o.iH)(!0),C=()=>{Q.value=!1,(0,l.Y3)((()=>{Q.value=!0}))},j=(0,o.iH)(!1),H=(0,o.iH)(null),L=(0,o.iH)(!1);(0,l.YP)(t,(()=>{!1===x.value?(t.value=!1,setTimeout((()=>{_.push({path:"/login"})}),200)):s.userApi.get("/user/rest/").then((e=>{R.value=e.data.username,S.value=e.data.email}))}));const R=(0,o.iH)(""),S=(0,o.iH)("");return(e,a)=>{const i=(0,l.up)("q-header"),r=(0,l.up)("q-icon"),n=(0,l.up)("q-item-section"),s=(0,l.up)("q-item"),_=(0,l.up)("q-list"),y=(0,l.up)("q-scroll-area"),x=(0,l.up)("q-avatar"),W=(0,l.up)("q-img"),C=(0,l.up)("q-btn"),I=(0,l.up)("q-drawer"),U=(0,l.up)("q-page-sticky"),T=(0,l.up)("router-view"),V=(0,l.up)("q-page-container"),z=(0,l.up)("q-route-tab"),P=(0,l.up)("q-tabs"),A=(0,l.up)("q-toolbar"),J=(0,l.up)("q-input"),M=(0,l.up)("q-footer"),D=(0,l.up)("q-layout"),E=(0,l.Q2)("ripple");return(0,l.wg)(),(0,l.j4)(D,{view:"hHr LpR ffr",class:"non-selectable bg-grey-3"},{default:(0,l.w5)((()=>[(0,l.Wm)(i,{elevated:""}),(0,l.Wm)(I,{modelValue:t.value,"onUpdate:modelValue":a[2]||(a[2]=e=>t.value=e),"show-if-above":"",width:300,side:"right",elevated:""},{default:(0,l.w5)((()=>[(0,l.Wm)(y,{style:{height:"calc(100% - 150px)","margin-top":"150px","border-left":"1px solid #ddd"}},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{padding:""},{default:(0,l.w5)((()=>[(0,l.wy)(((0,l.wg)(),(0,l.j4)(s,{clickable:"",to:"/user/profile",exact:""},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"account_circle"})])),_:1}),(0,l.Wm)(n,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" My Profile ")])),_:1})])),_:1})),[[E]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(s,{clickable:"",to:"/user/comment",exact:""},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"comment"})])),_:1}),(0,l.Wm)(n,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" My Comments ")])),_:1})])),_:1})),[[E]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(s,{clickable:"",to:"/user/statistics",exact:""},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"bar_chart"})])),_:1}),(0,l.Wm)(n,null,{default:(0,l.w5)((()=>[(0,l.Uk)(" Comment statistics ")])),_:1})])),_:1})),[[E]]),(0,l.wy)(((0,l.wg)(),(0,l.j4)(s,{clickable:"",onClick:a[0]||(a[0]=()=>{t.value=!1,(0,o.SU)(k).notify({message:"确定要退出登录吗？",color:"white",icon:"warning",textColor:"black",position:"center",actions:[{label:"取消",color:"black"},{label:"确定",color:"primary",handler:()=>{d()}}]})}),exact:""},{default:(0,l.w5)((()=>[(0,l.Wm)(n,{avatar:""},{default:(0,l.w5)((()=>[(0,l.Wm)(r,{name:"exit_to_app"})])),_:1}),(0,l.Wm)(n,null,{default:(0,l.w5)((()=>[m])),_:1})])),_:1})),[[E]])])),_:1})])),_:1}),(0,l.Wm)(W,{class:"absolute-top",src:"https://cdn.quasar.dev/img/material.png",style:{height:"150px"}},{default:(0,l.w5)((()=>[(0,l._)("div",p,[(0,l.Wm)(x,{size:"100px"},{default:(0,l.w5)((()=>[v])),_:1}),(0,l._)("div",g,[(0,l._)("div",w,(0,u.zw)(R.value),1),(0,l._)("div",b,(0,u.zw)(S.value),1)])])])),_:1}),(0,l.Wm)(C,{style:{position:"absolute",bottom:"50vh",left:"-16.8px"},dense:"",round:"",unelevated:"",color:"accent",icon:"chevron_right",onClick:a[1]||(a[1]=e=>t.value=!1)})])),_:1},8,["modelValue"]),(0,l.Wm)(V,null,{default:(0,l.w5)((()=>[(0,l.Wm)(U,{class:"z-top",position:"right",offset:[-16.8,0]},{default:(0,l.w5)((()=>[t.value?(0,l.kq)("",!0):((0,l.wg)(),(0,l.j4)(C,{key:0,dense:"",round:"",unelevated:"",color:"accent",icon:"chevron_left",onClick:a[3]||(a[3]=e=>t.value=!0)}))])),_:1}),Q.value?((0,l.wg)(),(0,l.j4)(T,{key:0})):(0,l.kq)("",!0)])),_:1}),(0,l._)("div",f,[h,(0,l.Wm)(c.Z,{class:"text-caption1 text-grey-8 q-mx-md"})]),(0,l.Wm)(M,{reveal:"",ref_key:"toolbarRef",ref:H,elevated:"",style:{"backdrop-filter":"blur(10px)"},class:"bg-transparent"},{default:(0,l.w5)((()=>[j.value?((0,l.wg)(),(0,l.j4)(A,{key:1,class:"text-black justify-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(J,{ref:"input",modelValue:q.value,"onUpdate:modelValue":a[5]||(a[5]=e=>q.value=e),color:"primary",dense:"",borderless:"",style:{width:"100%"},placeholder:"Search"},{prepend:(0,l.w5)((()=>[(0,l.Wm)(C,{flat:"",dense:"",icon:"search",color:"primary",onClick:Z})])),_:1},8,["modelValue"])])),_:1})):((0,l.wg)(),(0,l.j4)(A,{key:0,class:"text-black justify-between"},{default:(0,l.w5)((()=>[(0,l.Wm)(P,{"inline-label":""},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{icon:"home",to:"/",exact:""}),(0,l.Wm)(z,{icon:"group",to:"/friend"})])),_:1}),(0,l.Wm)(C,{round:"",icon:"search",color:"primary",onClick:a[4]||(a[4]=e=>L.value=!0)}),(0,l.Wm)(P,{"inline-label":""},{default:(0,l.w5)((()=>[(0,l.Wm)(z,{icon:"menu_book",to:"/blog"}),(0,l.Wm)(z,{icon:"videogame_asset",to:"/game",exact:""})])),_:1})])),_:1}))])),_:1},512)])),_:1})}}};var k=a(5291),y=a(4464),x=a(6453),W=a(4541),q=a(7784),Z=a(6758),Q=a(3251),C=a(9131),j=a(1909),H=a(2322),L=a(4743),R=a(5779),S=a(6318),I=a(3271),U=a(5024),T=a(6434),V=a(4411),z=a(6289),P=a(9033),A=a(1458),J=a(9332),M=a.n(J);const D=(0,k.Z)(_,[["__scopeId","data-v-642af1b9"]]),E=D;M()(_,"components",{QLayout:y.Z,QHeader:x.Z,QDrawer:W.Z,QScrollArea:q.Z,QList:Z.Z,QItem:Q.Z,QItemSection:C.Z,QIcon:j.Z,QImg:H.Z,QAvatar:L.Z,QBtn:R.Z,QPageContainer:S.Z,QPageSticky:I.Z,QFooter:U.Z,QToolbar:T.Z,QTabs:V.Z,QRouteTab:z.Z,QInput:P.Z}),M()(_,"directives",{Ripple:A.Z})}}]);