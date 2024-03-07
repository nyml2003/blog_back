"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[2113],{7392:(e,a,t)=>{t.d(a,{Z:()=>r});var n=t(6929),o=t(859),l=t(8192);const r=(0,o.L)({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:a}){const t=(0,n.Fl)((()=>"q-card__section q-card__section--"+(!0===e.horizontal?"horiz row no-wrap":"vert")));return()=>(0,n.h)(e.tag,{class:t.value},(0,l.KR)(a.default))}})},2113:(e,a,t)=>{t.r(a),t.d(a,{default:()=>h});var n=t(6929),o=t(80),l=t(1944),r=t(7218),i=t(9482);const s=["src"],c={key:1},p=["href"],u={__name:"CommentManage",setup(e){const a=(0,l.Z)(),t=(0,r.iH)([]),u=(0,r.iH)(!1),d=[{label:"审核中",color:"warning"},{label:"审核通过",color:"positive"},{label:"审核未通过",color:"negative"}],g=()=>{u.value=!0,i.userApi.get("/comment/rest/",{params:{page:m.pagination.value.page,page_size:m.pagination.value.rowsPerPage}}).then((e=>{t.value=e.data.results,m.pagination.value.rowsNumber=e.data.count})),u.value=!1},m={loading:(0,r.iH)(!1),columns:[{name:"id",label:"ID",field:"id",align:"center"},{name:"user",label:"用户",field:"user",align:"center"},{name:"status",label:"状态",field:"status",align:"center"},{name:"content",label:"内容",field:"content",align:"center"},{name:"parent_id",label:"父评论ID",field:"parent_id",align:"center"},{name:"parent_name",label:"父评论用户名",field:"parent_name",align:"center"},{name:"parent_type",label:"父评论类型",field:"parent_type",align:"center"},{name:"created_at",label:"创建时间",field:"created_at",format:e=>(new Date).toLocaleString(),align:"center"},{name:"updated_at",label:"更新时间",field:"updated_at",align:"center",format:e=>(new Date).toLocaleString()},{name:"operation",label:"操作",field:"operation",align:"center"}],pagination:(0,r.iH)({sortBy:"id",descending:!1,page:1,rowsNumber:0,rowsPerPage:7}),onRequest:function(e){const{page:a,rowsPerPage:t}=e.pagination;m.pagination.value.page=a,m.pagination.value.rowsPerPage=t,g()}};function w(e){a.notify({message:"删除中",color:"warning",textColor:"black",icon:"warning",position:"center",actions:[{label:"取消",color:"black",handler:()=>{a.notify({message:"取消删除",color:"negative",icon:"close",position:"top",timeout:1e3})}},{label:"确定",color:"red",handler:()=>{b(e)}}]})}function b(e){i.userApi.delete(`/comment/rest/${e}/`).then((e=>{a.notify({message:"删除成功",color:"positive",icon:"check",position:"top",timeout:1e3}),g()})).catch((e=>{console.log(e)}))}return(0,n.bv)((()=>{g()})),(e,a)=>{const l=(0,n.up)("q-td"),r=(0,n.up)("q-btn"),i=(0,n.up)("q-chip"),u=(0,n.up)("q-table"),g=(0,n.up)("q-card-section");return(0,n.wg)(),(0,n.j4)(g,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u,{columns:m.columns,rows:t.value,pagination:m.pagination.value,"onUpdate:pagination":a[0]||(a[0]=e=>m.pagination.value=e),onRequest:m.onRequest,"row-key":"id",loading:m.loading.value,"binary-state-sort":"",separator:"cell","rows-per-page-options":[7,10,15],"visible-columns":["id","user","status","content","parent_id","parent_name","parent_type","created_at","updated_at","operation"]},{"body-cell-avatar":(0,n.w5)((e=>[(0,n.Wm)(l,{props:e},{default:(0,n.w5)((()=>[e.row.avatar?((0,n.wg)(),(0,n.iD)("img",{key:0,src:`${e.row.avatar}`,style:{width:"50px",height:"50px","border-radius":"50%"},alt:"图片加载失败"},null,8,s)):((0,n.wg)(),(0,n.iD)("div",c,"无"))])),_:2},1032,["props"])])),"body-cell-url":(0,n.w5)((e=>[(0,n.Wm)(l,{props:e},{default:(0,n.w5)((()=>[(0,n._)("a",{href:e.row.url,target:"_blank"},(0,o.zw)(e.row.url),9,p)])),_:2},1032,["props"])])),"body-cell-operation":(0,n.w5)((e=>[(0,n.Wm)(l,{props:e},{default:(0,n.w5)((()=>[(0,n.Wm)(r,{dense:"",round:"",icon:"delete",class:"q-mx-sm",color:"negative",onClick:a=>w(e.row.id)},null,8,["onClick"])])),_:2},1032,["props"])])),"body-cell-status":(0,n.w5)((e=>[(0,n.Wm)(l,{props:e},{default:(0,n.w5)((()=>[(0,n.Wm)(i,{label:d[e.row.status/100-1].label,color:d[e.row.status/100-1].color},null,8,["label","color"])])),_:2},1032,["props"])])),_:1},8,["columns","rows","pagination","onRequest","loading"])])),_:1})}}};var d=t(7392),g=t(5541),m=t(1236),w=t(5779),b=t(3090),v=t(9332),_=t.n(v);const f=u,h=f;_()(u,"components",{QCardSection:d.Z,QTable:g.Z,QTd:m.Z,QBtn:w.Z,QChip:b.Z})}}]);