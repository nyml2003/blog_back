"use strict";(globalThis["webpackChunkventusblog"]=globalThis["webpackChunkventusblog"]||[]).push([[8646],{9848:(e,l,t)=>{t.d(l,{N:()=>o});var a=t(8910),i=t(7218);const o=(0,a.Q_)("blog",(()=>{const e=(0,i.iH)({title:"",content:"",description:""}),l=(0,i.iH)([]);function t(l){e.value={title:l.title,content:l.content,description:l.description}}function a(){title.value="",content.value="",description.value=""}function o(){return e.value}function n(e){for(let t=0;t<l.value.length;t++)if(l.value[t].id==e)return t+1<l.value.length?l.value[t+1].id:0}function u(e){for(let t=0;t<l.value.length;t++)if(l.value[t].id==e)return t-1>=0?l.value[t-1].id:0}function s(){return l.value}function r(e){l.value=e}function d(){l.value=[]}return{blog:e,blogList:l,setBlog:t,resetBlog:a,getBlog:o,getNextId:n,getPrevId:u,getBlogList:s,setBlogList:r,resetBlogList:d}}))},8646:(e,l,t)=>{t.r(l),t.d(l,{default:()=>M});t(5954);var a=t(6929),i=t(80),o=t(7218),n=t(3646),u=t(8979),s=t(8455),r=t(9760),d=t(9848);t(988);const c={class:"q-ma-xl",style:{width:"70vw"}},m={class:"row items-center no-wrap"},v={clas:"col-4 q-ma-md"},g={class:"text-h5 row"},p={class:"text-subtitle2 text-grey row no-wrap q-mt-md"},w={class:"q-ma-xs"},f={class:"q-ma-xs"},_={class:"col-auto"},h={class:"row q-ma-xs"},W={class:"q-ma-xl"},b=(0,a._)("div",{class:"text-h6 q-ma-md"},"快速导航",-1),k={key:0},q=(0,a._)("div",{class:"text-h6"},"目录",-1),C={key:1,class:"text-h6"},x="preview-only",y={__name:"BlogDetail",setup(e){const l=(0,d.N)(),t=(0,s.yj)(),y=(0,s.tv)(),Q=(0,o.iH)(""),Z=(0,o.iH)(""),H=(0,o.iH)(0),B=document.documentElement,S=(0,o.iH)(0),U=(0,o.iH)(!1),I=()=>{S.value=parseInt(t.params.id),r.api.get("/blog/"+S.value).then((e=>{V.value=e.data.created_at,Q.value=e.data.title,Z.value=e.data.description,N.value=e.data.content,H.value=e.data.views,D.value=l.getBlogList(),0===D.value.length&&y.push({path:"/blog"}),z.value=l.getNextId(S.value),L.value=l.getPrevId(S.value),l.setBlog({title:e.data.title,content:e.data.content,description:e.data.description})}))},D=(0,o.iH)([]),z=(0,o.iH)(0),L=(0,o.iH)(0),j=()=>{y.push({name:"BlogDetail",params:{id:z.value}}).then((()=>{I()}))},T=()=>{y.push({name:"BlogDetail",params:{id:L.value}}).then((()=>{I()}))},V=(0,o.iH)("");(0,a.bv)((()=>{I()}));const E=()=>{y.push({name:"BlogEdit",params:{id:S.value}})},N=(0,o.iH)(""),P=e=>{e.length>0?A.value=!0:A.value=!1},A=(0,o.iH)(!1),G=(0,o.iH)(!1);return(e,l)=>{const t=(0,a.up)("q-btn"),s=(0,a.up)("q-page-sticky"),r=(0,a.up)("q-item-label"),d=(0,a.up)("q-item-section"),Z=(0,a.up)("q-item"),K=(0,a.up)("q-list"),M=(0,a.up)("q-drawer"),O=(0,a.up)("q-space"),Y=(0,a.up)("q-toolbar"),F=(0,a.up)("q-icon"),J=(0,a.up)("q-card-section"),R=(0,a.up)("q-separator"),X=(0,a.up)("q-card"),$=(0,a.up)("q-card-actions"),ee=(0,a.up)("q-scroll-area"),le=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(le,{class:"flex justify-center items-start"},{default:(0,a.w5)((()=>[(0,a.Wm)(s,{position:"left",offset:[18,0]},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{round:"",color:"accent",icon:G.value?"menu_open":"menu",onClick:l[0]||(l[0]=e=>G.value=!G.value)},null,8,["icon"])])),_:1}),(0,a.Wm)(s,{position:"right",offset:[18,0]},{default:(0,a.w5)((()=>[U.value?(0,a.kq)("",!0):((0,a.wg)(),(0,a.j4)(t,{key:0,round:"",color:"accent",icon:U.value?"menu_open":"menu",onClick:l[1]||(l[1]=e=>U.value=!U.value)},null,8,["icon"]))])),_:1}),(0,a.Wm)(M,{modelValue:G.value,"onUpdate:modelValue":l[2]||(l[2]=e=>G.value=e),side:"left",bordered:""},{default:(0,a.w5)((()=>[(0,a.Wm)(K,null,{default:(0,a.w5)((()=>[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(D.value,((e,l)=>((0,a.wg)(),(0,a.j4)(Z,{key:l},{default:(0,a.w5)((()=>[(0,a.Wm)(d,null,{default:(0,a.w5)((()=>[(0,a.Wm)(r,{class:(0,i.C_)({"text-primary":e.id===S.value,"text-grey":e.id!==S.value})},{default:(0,a.w5)((()=>[(0,a.Uk)((0,i.zw)(e.title),1)])),_:2},1032,["class"])])),_:2},1024),(0,a.Wm)(d,{side:"",top:""},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{icon:"arrow_forward",flat:"",onClick:()=>{(0,o.SU)(y).push({name:"BlogDetail",params:{id:e.id}}).then((()=>{I()}))}},null,8,["onClick"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["modelValue"]),(0,a._)("div",c,[(0,a.Wm)(Y,{class:"q-mb-sm"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{label:"上一篇",icon:"arrow_back",flat:"",onClick:T,disable:0===L.value},null,8,["disable"]),(0,a.Wm)(O),(0,a.Wm)(t,{label:"下一篇","icon-right":"arrow_forward",flat:"",onClick:j,disable:0===z.value},null,8,["disable"])])),_:1}),(0,a.Wm)(X,null,{default:(0,a.w5)((()=>[(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[(0,a._)("div",m,[(0,a._)("div",v,[(0,a._)("div",g,[(0,a.Uk)((0,i.zw)(Q.value)+" ",1),(0,a.Wm)(t,{icon:"edit",flat:"",dense:"",color:"warning",onClick:E}),(0,a.Wm)(t,{icon:"delete",flat:"",dense:"",color:"red"})]),(0,a._)("div",p,[(0,a._)("div",w,[(0,a.Wm)(F,{name:"history_edu",size:"sm"}),(0,a.Uk)(" Word Count:"+(0,i.zw)(N.value.length),1)]),(0,a._)("div",f,[(0,a.Wm)(F,{name:"timer",size:"sm"}),(0,a.Uk)(" "+(0,i.zw)(new Date(V.value).toLocaleString()),1)])])]),(0,a.Wm)(O),(0,a._)("div",_,[(0,a._)("div",h,[(0,a.Wm)(F,{name:"visibility",size:"sm"}),(0,a.Uk)((0,i.zw)(H.value),1)])])])])),_:1}),(0,a.Wm)(R),(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[(0,a.Wm)((0,o.SU)(n.M),{editorId:x,modelValue:N.value,onOnGetCatalog:P},null,8,["modelValue"])])),_:1})])),_:1}),(0,a.Wm)(Y,{class:"q-mt-xl"},{default:(0,a.w5)((()=>[(0,a.Wm)(t,{label:"上一篇",icon:"arrow_back",flat:"",onClick:T,disable:0===L.value},null,8,["disable"]),(0,a.Wm)(O),(0,a.Wm)(t,{label:"下一篇","icon-right":"arrow_forward",flat:"",onClick:j,disable:0===z.value},null,8,["disable"])])),_:1})]),(0,a._)("div",W,[U.value?((0,a.wg)(),(0,a.j4)(X,{key:0,class:"fixed-right",style:{height:"80vh",top:"10vh"}},{default:(0,a.w5)((()=>[(0,a.Wm)($,{align:"right"},{default:(0,a.w5)((()=>[b,(0,a.Wm)(t,{icon:"arrow_upward",flat:"",onClick:l[3]||(l[3]=e=>(0,o.SU)(B).scrollTop=0)}),(0,a.Wm)(t,{icon:"arrow_downward",flat:"",dense:"",onClick:l[4]||(l[4]=e=>(0,o.SU)(B).scrollTop=(0,o.SU)(B).scrollHeight)}),(0,a.Wm)(t,{icon:"close",flat:"",onClick:l[5]||(l[5]=e=>U.value=!1)})])),_:1}),(0,a.Wm)(J,null,{default:(0,a.w5)((()=>[(0,a.Wm)(ee,{style:{height:"70vh"}},{default:(0,a.w5)((()=>[A.value?((0,a.wg)(),(0,a.iD)("div",k,[q,(0,a.Wm)((0,o.SU)(u.Z),{editorId:x,scrollElement:(0,o.SU)(B)},null,8,["scrollElement"])])):((0,a.wg)(),(0,a.iD)("div",C,"本篇文章无目录"))])),_:1})])),_:1})])),_:1})):(0,a.kq)("",!0)])])),_:1})}}};var Q=t(7959),Z=t(3271),H=t(7536),B=t(4541),S=t(6758),U=t(3251),I=t(9131),D=t(7344),z=t(6434),L=t(9403),j=t(6786),T=t(7392),V=t(1909),E=t(4348),N=t(1789),P=t(7784),A=t(9332),G=t.n(A);const K=y,M=K;G()(y,"components",{QPage:Q.Z,QPageSticky:Z.Z,QBtn:H.Z,QDrawer:B.Z,QList:S.Z,QItem:U.Z,QItemSection:I.Z,QItemLabel:D.Z,QToolbar:z.Z,QSpace:L.Z,QCard:j.Z,QCardSection:T.Z,QIcon:V.Z,QSeparator:E.Z,QCardActions:N.Z,QScrollArea:P.Z})}}]);