"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[8729],{8729:(e,t,a)=>{a.r(t),a.d(t,{default:()=>W});var l=a(6929),o=a(7218),n=a(9482),s=a(9487),u=a(8455),i=a(1944),p=(a(355),a(7911));const d=(0,l._)("div",{class:"text-h6"},"正文",-1),c={__name:"BlogEdit",setup(e){const t=(0,i.Z)(),a=(0,u.yj)(),c=(0,o.iH)(0),r=(0,o.iH)(""),m=(0,o.iH)({title:"",description:"",tags:[]}),v=(0,o.iH)([]),g=()=>{a.query.id&&(c.value=parseInt(a.query.id),n.userApi.get("/blog/rest/"+c.value+"/").then((e=>{m.value.title=e.data.title,m.value.description=e.data.description;const t=e.data.content;console.log(t),p.Z.get(t).then((e=>{r.value=e.data.toString()})),m.value.tags=e.data.tags.map((e=>e.id))}))),n.userApi.get("/tag/rest/").then((e=>{v.value=e.data.map((e=>({label:e.name,value:e.id})))}))};(0,l.bv)((()=>{g()}));const h=()=>{n.userApi.post("/blog/rest/",m.value,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{t.notify({message:"添加成功",color:"positive",icon:"check",position:"top",timeout:1e3}),g()})).catch((e=>{t.notify({message:`添加失败,原因:${e.response.data.name}`,color:"negative",icon:"close",position:"top",timeout:1e3}),g()}))},f=()=>{n.userApi.patch("/blog/rest/"+c.value+"/",m.value,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{t.notify({message:"添加成功",color:"positive",icon:"check",position:"top",timeout:1e3}),g()})).catch((e=>{t.notify({message:`添加失败,原因:${e.response.data.name}`,color:"negative",icon:"close",position:"top",timeout:1e3}),g()}))},y=async(e,t)=>{const a=await Promise.all(e.map((e=>new Promise(((t,a)=>{const l=new FormData;l.append("file",e),n.userApi.post("/img/upload/",l,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>t(e))).catch((e=>a(e)))})))));t(a.map((e=>`${n.baseMediaURL}${e.data.url}`)))},w=()=>{m.value.content=new File([r.value],"content.md",{type:"text/plain;charset=utf-8"}),0===c.value?h():f()};return(e,t)=>{const a=(0,l.up)("q-icon"),n=(0,l.up)("q-input"),u=(0,l.up)("q-card-section"),i=(0,l.up)("q-separator"),p=(0,l.up)("q-select"),c=(0,l.up)("q-card"),g=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(g,{class:"flex flex-center"},{default:(0,l.w5)((()=>[(0,l.Wm)(c,{class:"q-pa-md q-ma-lg",style:{width:"80vw"}},{default:(0,l.w5)((()=>[(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,{modelValue:m.value.title,"onUpdate:modelValue":t[0]||(t[0]=e=>m.value.title=e),dense:"",outlined:"",type:"text",class:"headline"},{prepend:(0,l.w5)((()=>[(0,l.Wm)(a,{name:"title"})])),_:1},8,["modelValue"])])),_:1}),(0,l.Wm)(i),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[(0,l.Wm)(n,{modelValue:m.value.description,"onUpdate:modelValue":t[1]||(t[1]=e=>m.value.description=e),dense:"",outlined:"",type:"textarea",class:"subtitle-2",label:"摘要"},null,8,["modelValue"]),(0,l.Wm)(p,{modelValue:m.value.tags,"onUpdate:modelValue":t[2]||(t[2]=e=>m.value.tags=e),label:"标签",dense:"","lazy-rules":"",options:v.value,multiple:"","use-chips":"","map-options":"","emit-value":"","input-debounce":"0",rules:[e=>!!e||"请选择标签",e=>e.length>0||"至少选择一项"]},null,8,["modelValue","options","rules"])])),_:1}),(0,l.Wm)(i),(0,l.Wm)(u,null,{default:(0,l.w5)((()=>[d,(0,l.Wm)((0,o.SU)(s.Z),{modelValue:r.value,"onUpdate:modelValue":t[3]||(t[3]=e=>r.value=e),onUploadImg:y,onSave:w},null,8,["modelValue"])])),_:1}),(0,l.Wm)(i)])),_:1})])),_:1})}}};var r=a(7959),m=a(6786),v=a(7392),g=a(9033),h=a(1909),f=a(4348),y=a(6302),w=a(9332),b=a.n(w);const V=c,W=V;b()(c,"components",{QPage:r.Z,QCard:m.Z,QCardSection:v.Z,QInput:g.Z,QIcon:h.Z,QSeparator:f.Z,QSelect:y.Z})}}]);