"use strict";(globalThis["webpackChunkventusblog"]=globalThis["webpackChunkventusblog"]||[]).push([[6491],{6491:(e,l,t)=>{t.r(l),t.d(l,{default:()=>U});t(5954);var o=t(6929),a=t(1944),i=t(7218),n=t(9482),s=t(8455);const u={__name:"BlogPostManage",setup(e){const l=(0,s.tv)(),t=e=>{l.push({path:"/blog/edit/",query:{id:e}})},u=(0,a.Z)(),r=(0,i.iH)([]),c=(0,i.iH)(!1),m=(0,i.iH)([]),d=()=>{c.value=!0,n.guestApi.get("/tag/rest/").then((e=>{m.value=e.data.map((e=>({label:e.name,value:e.id})))})),n.userApi.get("/blog/rest/",{params:{page:p.pagination.value.page,page_size:p.pagination.value.rowsPerPage}}).then((e=>{r.value=e.data.results,p.pagination.value.rowsNumber=e.data.count})),c.value=!1},p={loading:(0,i.iH)(!1),columns:[{name:"id",label:"ID",field:"id",align:"center"},{name:"title",label:"标题",field:"title",align:"center"},{name:"description",label:"摘要",field:"description",align:"center",format:e=>e.length>15?e.substring(0,15)+"...":e},{name:"tags",label:"标签",field:"tags",align:"center"},{name:"views",label:"浏览量",field:"views",align:"center"},{name:"created_at",label:"创建时间",field:"created_at",format:e=>new Date(e).toLocaleString(),align:"center"},{name:"updated_at",label:"更新时间",field:"updated_at",format:e=>new Date(e).toLocaleString(),align:"center"},{name:"operation",label:"操作",field:"operation",align:"center"}],pagination:(0,i.iH)({sortBy:"id",descending:!1,page:1,rowsNumber:0,rowsPerPage:7}),onRequest:function(e){const{page:l,rowsPerPage:t}=e.pagination;p.pagination.value.page=l,p.pagination.value.rowsPerPage=t,d()}},f={canCreate:function(){return JSON.stringify(f.form.value)===JSON.stringify(f.nullForm)},nullForm:{title:"",description:"",content:null,tags:[]},form:(0,i.iH)({title:"",description:"",content:null,tags:[]}),isVisible:(0,i.iH)(!1),reset:function(){f.form.value={title:"",description:"",content:null,tags:[]}},submit:function(){n.userApi.post("/blog/rest/",f.form.value,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{u.notify({message:"添加成功",color:"positive",icon:"check",position:"top",timeout:1e3}),f.reset(),f.close(),d()})).catch((e=>{u.notify({message:`添加失败,原因:${e.response.data.name}`,color:"negative",icon:"close",position:"top",timeout:1e3}),f.reset(),f.close()}))},open:function(){this.isVisible.value=!0},close:function(){this.isVisible.value=!1}},g={canUpdate:function(){return JSON.stringify(g.form.value)===JSON.stringify(g.formCopy.value)&&null===g.content.value},content:(0,i.iH)(null),formCopy:(0,i.iH)({id:"",title:"",description:"",tags:[]}),form:(0,i.iH)({id:"",title:"",description:"",tags:[]}),isVisible:(0,i.iH)(!1),reset:function(){g.form.value=JSON.parse(JSON.stringify(g.formCopy.value))},submit:function(){n.userApi.patch(`/blog/rest/${g.form.value.id}/`,{title:g.form.value.title,description:g.form.value.description,tags:g.form.value.tags,content:g.content.value},{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{u.notify({message:"修改成功",color:"positive",icon:"check",position:"top",timeout:1e3}),g.reset(),g.close(),d()})).catch((e=>{u.notify({message:`修改失败,原因:${e.response.data.name}`,color:"negative",icon:"close",position:"top",timeout:1e3}),g.reset(),g.close()}))},open:function(e){this.isVisible.value=!0;const{id:l,title:t,description:o,tags:a}=e;g.form.value={id:l,title:t,description:o,tags:a.map((e=>e.id))},g.formCopy.value=JSON.parse(JSON.stringify(g.form.value))},close:function(){this.isVisible.value=!1}};function v(e){u.notify({message:"删除中",color:"warning",textColor:"black",icon:"warning",position:"center",actions:[{label:"取消",color:"black",handler:()=>{u.notify({message:"取消删除",color:"negative",icon:"close",position:"top",timeout:1e3})}},{label:"确定",color:"red",handler:()=>{b(e)}}]})}function b(e){n.userApi.delete(`/blog/rest/${e}/`).then((e=>{u.notify({message:"删除成功",color:"positive",icon:"check",position:"top",timeout:1e3}),d()})).catch((e=>{console.log(e)}))}return(0,o.bv)((()=>{d()})),(e,l)=>{const a=(0,o.up)("q-input"),i=(0,o.up)("q-select"),n=(0,o.up)("q-file"),s=(0,o.up)("q-btn"),u=(0,o.up)("q-card-actions"),c=(0,o.up)("q-form"),b=(0,o.up)("q-card-section"),w=(0,o.up)("q-card"),y=(0,o.up)("q-dialog"),h=(0,o.up)("q-chip"),V=(0,o.up)("q-td"),W=(0,o.up)("q-icon"),_=(0,o.up)("q-tr"),k=(0,o.up)("q-table");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(y,{modelValue:g.isVisible.value,"onUpdate:modelValue":l[6]||(l[6]=e=>g.isVisible.value=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{onSubmit:g.submit,onReset:g.reset},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{modelValue:g.form.value.title,"onUpdate:modelValue":l[0]||(l[0]=e=>g.form.value.title=e),label:"标题","lazy-rules":"",rules:[e=>!!e||"请输入标题"]},null,8,["modelValue","rules"]),(0,o.Wm)(a,{modelValue:g.form.value.description,"onUpdate:modelValue":l[1]||(l[1]=e=>g.form.value.description=e),label:"摘要","lazy-rules":"",type:"textarea",autogrow:""},null,8,["modelValue"]),(0,o.Wm)(i,{modelValue:g.form.value.tags,"onUpdate:modelValue":l[2]||(l[2]=e=>g.form.value.tags=e),label:"标签",dense:"","lazy-rules":"",options:m.value,multiple:"","use-chips":"","map-options":"","emit-value":"","input-debounce":"0",rules:[e=>!!e||"请选择标签",e=>e.length>0||"至少选择一项"]},null,8,["modelValue","options","rules"]),(0,o.Wm)(n,{modelValue:g.content.value,"onUpdate:modelValue":l[3]||(l[3]=e=>g.content.value=e),label:"内容","lazy-rules":"",multiple:!1,accept:".md"},null,8,["modelValue"]),(0,o.Wm)(u,{align:"right"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{flat:"",dense:"",icon:"close",color:"negative",onClick:l[4]||(l[4]=e=>g.close())},{default:(0,o.w5)((()=>[(0,o.Uk)(" 取消 ")])),_:1}),(0,o.Wm)(s,{flat:"",dense:"",icon:"save",color:"primary",type:"submit",disable:g.canUpdate()},{default:(0,o.w5)((()=>[(0,o.Uk)(" 保存 ")])),_:1},8,["disable"]),(0,o.Wm)(s,{flat:"",dense:"",icon:"refresh",color:"primary",type:"reset"},{default:(0,o.w5)((()=>[(0,o.Uk)(" 重置 ")])),_:1}),(0,o.Wm)(s,{flat:"",dense:"",icon:"edit",color:"primary",onClick:l[5]||(l[5]=e=>t(g.form.value.id))},{default:(0,o.w5)((()=>[(0,o.Uk)(" 编辑 ")])),_:1})])),_:1})])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(y,{modelValue:f.isVisible.value,"onUpdate:modelValue":l[13]||(l[13]=e=>f.isVisible.value=e),persistent:""},{default:(0,o.w5)((()=>[(0,o.Wm)(w,null,{default:(0,o.w5)((()=>[(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(c,{onSubmit:f.submit,onReset:f.reset},{default:(0,o.w5)((()=>[(0,o.Wm)(a,{modelValue:f.form.value.title,"onUpdate:modelValue":l[7]||(l[7]=e=>f.form.value.title=e),label:"标题","lazy-rules":"",rules:[e=>!!e||"请输入标题"]},null,8,["modelValue","rules"]),(0,o.Wm)(i,{modelValue:f.form.value.tags,"onUpdate:modelValue":l[8]||(l[8]=e=>f.form.value.tags=e),label:"标签",dense:"","lazy-rules":"",options:m.value,multiple:"","use-chips":"","map-options":"","emit-value":"","input-debounce":"0",rules:[e=>!!e||"请选择标签",e=>e.length>0||"至少选择一项"]},null,8,["modelValue","options","rules"]),(0,o.Wm)(a,{modelValue:f.form.value.description,"onUpdate:modelValue":l[9]||(l[9]=e=>f.form.value.description=e),label:"摘要","lazy-rules":""},null,8,["modelValue"]),(0,o.Wm)(n,{modelValue:f.form.value.content,"onUpdate:modelValue":l[10]||(l[10]=e=>f.form.value.content=e),label:"内容","lazy-rules":"",multiple:!1,accept:".md"},null,8,["modelValue"]),(0,o.Wm)(u,{align:"right"},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{flat:"",dense:"",icon:"close",color:"negative",onClick:l[11]||(l[11]=e=>f.close())},{default:(0,o.w5)((()=>[(0,o.Uk)(" 取消 ")])),_:1}),(0,o.Wm)(s,{flat:"",dense:"",icon:"save",color:"primary",type:"submit",disable:f.canCreate()},{default:(0,o.w5)((()=>[(0,o.Uk)(" 保存 ")])),_:1},8,["disable"]),(0,o.Wm)(s,{flat:"",dense:"",icon:"refresh",color:"primary",type:"reset"},{default:(0,o.w5)((()=>[(0,o.Uk)(" 重置 ")])),_:1}),(0,o.Wm)(s,{flat:"",dense:"",icon:"edit",color:"primary",onClick:l[12]||(l[12]=e=>t(null))},{default:(0,o.w5)((()=>[(0,o.Uk)(" 编辑 ")])),_:1})])),_:1})])),_:1},8,["onSubmit","onReset"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,o.Wm)(b,null,{default:(0,o.w5)((()=>[(0,o.Wm)(k,{columns:p.columns,rows:r.value,pagination:p.pagination.value,"onUpdate:pagination":l[15]||(l[15]=e=>p.pagination.value=e),onRequest:p.onRequest,"row-key":"id",loading:p.loading.value,"binary-state-sort":"",separator:"cell","rows-per-page-options":[7,10,15],"visible-columns":["id","title","description","created_at","updated_at","tags","views","operation"]},{"body-cell-tags":(0,o.w5)((e=>[(0,o.Wm)(V,{props:e},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.row.tags,((e,l)=>((0,o.wg)(),(0,o.j4)(h,{key:l,label:e.name,color:"primary",dense:"",outline:""},null,8,["label"])))),128))])),_:2},1032,["props"])])),"body-cell-operation":(0,o.w5)((e=>[(0,o.Wm)(V,{props:e},{default:(0,o.w5)((()=>[(0,o.Wm)(s,{dense:"",round:"",icon:"edit",color:"primary",class:"q-mx-sm",onClick:l=>g.open(e.row)},null,8,["onClick"]),(0,o.Wm)(s,{dense:"",round:"",icon:"delete",class:"q-mx-sm",color:"negative",onClick:l=>v(e.row.id)},null,8,["onClick"])])),_:2},1032,["props"])])),"bottom-row":(0,o.w5)((()=>[(0,o.Wm)(_,{onClick:l[14]||(l[14]=e=>f.open()),class:"cursor-pointer"},{default:(0,o.w5)((()=>[(0,o.Wm)(V,{colspan:"100",class:"text-center"},{default:(0,o.w5)((()=>[(0,o.Wm)(W,{name:"add"}),(0,o.Uk)(" 添加 ")])),_:1})])),_:1})])),"top-right":(0,o.w5)((()=>[(0,o.Wm)(s,{flat:"",round:"",dense:"",icon:"refresh",color:"primary",onClick:d},{default:(0,o.w5)((()=>[(0,o.Uk)("刷新")])),_:1})])),_:1},8,["columns","rows","pagination","onRequest","loading"])])),_:1})],64)}}};var r=t(128),c=t(6786),m=t(7392),d=t(7537),p=t(9033),f=t(6302),g=t(8545),v=t(1789),b=t(5779),w=t(5541),y=t(1236),h=t(3090),V=t(9658),W=t(1909),_=t(9332),k=t.n(_);const C=u,U=C;k()(u,"components",{QDialog:r.Z,QCard:c.Z,QCardSection:m.Z,QForm:d.Z,QInput:p.Z,QSelect:f.Z,QFile:g.Z,QCardActions:v.Z,QBtn:b.Z,QTable:w.Z,QTd:y.Z,QChip:h.Z,QTr:V.Z,QIcon:W.Z})}}]);