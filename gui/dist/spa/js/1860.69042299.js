(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[1860],{9332:e=>{e.exports=function(e,t,s){const a=void 0!==e.__vccOpts?e.__vccOpts:e,n=a[t];if(void 0===n)a[t]=s;else for(const o in s)void 0===n[o]&&(n[o]=s[o])}},7959:(e,t,s)=>{"use strict";s.d(t,{Z:()=>r});var a=s(6929),n=s(859),o=s(8192),i=s(7623);const r=(0,n.L)({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:s}}=(0,a.FN)(),n=(0,a.f3)(i.YE,i.qO);if(n===i.qO)return console.error("QPage needs to be a deep child of QLayout"),i.qO;const r=(0,a.f3)(i.Mw,i.qO);if(r===i.qO)return console.error("QPage needs to be child of QPageContainer"),i.qO;const c=(0,a.Fl)((()=>{const t=(!0===n.header.space?n.header.size:0)+(!0===n.footer.space?n.footer.size:0);if("function"===typeof e.styleFn){const a=!0===n.isContainer.value?n.containerHeight.value:s.screen.height;return e.styleFn(t,a)}return{minHeight:!0===n.isContainer.value?n.containerHeight.value-t+"px":0===s.screen.height?0!==t?`calc(100vh - ${t}px)`:"100vh":s.screen.height-t+"px"}})),l=(0,a.Fl)((()=>"q-page"+(!0===e.padding?" q-layout-padding":"")));return()=>(0,a.h)("main",{class:l.value,style:c.value},(0,o.KR)(t.default))}})},1860:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>w});var a=s(6929),n=s(80),o=s(7218),i=s(1944);const r=e=>((0,a.dD)("data-v-50a3a8a4"),e=e(),(0,a.Cn)(),e),c={class:"text-center q-ma-sm text"},l=r((()=>(0,a._)("div",{class:"text-h1 text-weight-bolder bg-text-0"}," 风唤长河 ",-1))),d={class:"text-h6 text-weight-bolder q-ma-md bg-text-1"},p={key:0},u=r((()=>(0,a._)("div",{class:"row"}," 间歇性踌躇满志 ",-1))),v=r((()=>(0,a._)("div",{class:"row"}," 持续性混吃等死 ",-1))),g=[u,v],h={key:1,class:"row justify-center"},f={__name:"IndexPage",setup(e){const t=(0,i.Z)();return(e,s)=>{const i=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(i,{class:"flex flex-center bg-image"},{default:(0,a.w5)((()=>[(0,a._)("div",{class:(0,n.C_)("overlay-"+((0,o.SU)(t).platform.is.desktop?"desktop":"mobile"))},[(0,a._)("div",c,[l,(0,a._)("div",d,[(0,o.SU)(t).platform.is.mobile?((0,a.wg)(),(0,a.iD)("div",p,g)):(0,a.kq)("",!0),(0,o.SU)(t).platform.is.desktop?((0,a.wg)(),(0,a.iD)("div",h," 间歇性踌躇满志，持续性混吃等死 ")):(0,a.kq)("",!0)])])],2)])),_:1})}}};var x=s(5291),_=s(7959),m=s(9332),q=s.n(m);const b=(0,x.Z)(f,[["__scopeId","data-v-50a3a8a4"]]),w=b;q()(f,"components",{QPage:_.Z})}}]);