"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[7279],{4541:(e,t,l)=>{l.d(t,{Z:()=>m});l(5954);var o=l(6929),i=l(7218),a=l(3874),n=l(3852),r=l(6812),u=l(9345),s=l(4429),v=l(6349),d=l(859),c=l(2638),h=l(8192),f=l(7623);const p=150,m=(0,d.L)({name:"QDrawer",inheritAttrs:!1,props:{...n.vr,...s.S,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},noMiniAnimation:Boolean,breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...n.gH,"onLayout","miniState"],setup(e,{slots:t,emit:l,attrs:d}){const m=(0,o.FN)(),{proxy:{$q:b}}=m,g=(0,s.Z)(e,b),{preventBodyScroll:y}=(0,r.Z)(),{registerTimeout:w,removeTimeout:z}=(0,u.Z)(),q=(0,o.f3)(f.YE,f.qO);if(q===f.qO)return console.error("QDrawer needs to be child of QLayout"),f.qO;let F,S,x=null;const C=(0,i.iH)("mobile"===e.behavior||"desktop"!==e.behavior&&q.totalWidth.value<=e.breakpoint),H=(0,o.Fl)((()=>!0===e.mini&&!0!==C.value)),_=(0,o.Fl)((()=>!0===H.value?e.miniWidth:e.width)),T=(0,i.iH)(!0===e.showIfAbove&&!1===C.value||!0===e.modelValue),B=(0,o.Fl)((()=>!0!==e.persistent&&(!0===C.value||!0===W.value)));function P(e,t){if(L(),!1!==e&&q.animate(),re(0),!0===C.value){const e=q.instances[j.value];void 0!==e&&!0===e.belowBreakpoint&&e.hide(!1),ue(1),!0!==q.isContainer.value&&y(!0)}else ue(0),!1!==e&&se(!1);w((()=>{!1!==e&&se(!0),!0!==t&&l("show",e)}),p)}function O(e,t){Z(),!1!==e&&q.animate(),ue(0),re(Y.value*_.value),he(),!0!==t?w((()=>{l("hide",e)}),p):z()}const{show:$,hide:k}=(0,n.ZP)({showing:T,hideOnRouteChange:B,handleShow:P,handleHide:O}),{addToHistory:L,removeFromHistory:Z}=(0,a.Z)(T,k,B),E={belowBreakpoint:C,hide:k},M=(0,o.Fl)((()=>"right"===e.side)),Y=(0,o.Fl)((()=>(!0===b.lang.rtl?-1:1)*(!0===M.value?1:-1))),A=(0,i.iH)(0),R=(0,i.iH)(!1),N=(0,i.iH)(!1),V=(0,i.iH)(_.value*Y.value),j=(0,o.Fl)((()=>!0===M.value?"left":"right")),X=(0,o.Fl)((()=>!0===T.value&&!1===C.value&&!1===e.overlay?!0===e.miniToOverlay?e.miniWidth:_.value:0)),J=(0,o.Fl)((()=>!0===e.overlay||!0===e.miniToOverlay||q.view.value.indexOf(M.value?"R":"L")>-1||!0===b.platform.is.ios&&!0===q.isContainer.value)),Q=(0,o.Fl)((()=>!1===e.overlay&&!0===T.value&&!1===C.value)),W=(0,o.Fl)((()=>!0===e.overlay&&!0===T.value&&!1===C.value)),D=(0,o.Fl)((()=>"fullscreen q-drawer__backdrop"+(!1===T.value&&!1===R.value?" hidden":""))),K=(0,o.Fl)((()=>({backgroundColor:`rgba(0,0,0,${.4*A.value})`}))),I=(0,o.Fl)((()=>!0===M.value?"r"===q.rows.value.top[2]:"l"===q.rows.value.top[0])),U=(0,o.Fl)((()=>!0===M.value?"r"===q.rows.value.bottom[2]:"l"===q.rows.value.bottom[0])),G=(0,o.Fl)((()=>{const e={};return!0===q.header.space&&!1===I.value&&(!0===J.value?e.top=`${q.header.offset}px`:!0===q.header.space&&(e.top=`${q.header.size}px`)),!0===q.footer.space&&!1===U.value&&(!0===J.value?e.bottom=`${q.footer.offset}px`:!0===q.footer.space&&(e.bottom=`${q.footer.size}px`)),e})),ee=(0,o.Fl)((()=>{const e={width:`${_.value}px`,transform:`translateX(${V.value}px)`};return!0===C.value?e:Object.assign(e,G.value)})),te=(0,o.Fl)((()=>"q-drawer__content fit "+(!0!==q.isContainer.value?"scroll":"overflow-auto"))),le=(0,o.Fl)((()=>`q-drawer q-drawer--${e.side}`+(!0===N.value?" q-drawer--mini-animate":"")+(!0===e.bordered?" q-drawer--bordered":"")+(!0===g.value?" q-drawer--dark q-dark":"")+(!0===R.value?" no-transition":!0===T.value?"":" q-layout--prevent-focus")+(!0===C.value?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":" q-drawer--"+(!0===H.value?"mini":"standard")+(!0===J.value||!0!==Q.value?" fixed":"")+(!0===e.overlay||!0===e.miniToOverlay?" q-drawer--on-top":"")+(!0===I.value?" q-drawer--top-padding":"")))),oe=(0,o.Fl)((()=>{const t=!0===b.lang.rtl?e.side:j.value;return[[v.Z,de,void 0,{[t]:!0,mouse:!0}]]})),ie=(0,o.Fl)((()=>{const t=!0===b.lang.rtl?j.value:e.side;return[[v.Z,ce,void 0,{[t]:!0,mouse:!0}]]})),ae=(0,o.Fl)((()=>{const t=!0===b.lang.rtl?j.value:e.side;return[[v.Z,ce,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]}));function ne(){pe(C,"mobile"===e.behavior||"desktop"!==e.behavior&&q.totalWidth.value<=e.breakpoint)}function re(e){void 0===e?(0,o.Y3)((()=>{e=!0===T.value?0:_.value,re(Y.value*e)})):(!0!==q.isContainer.value||!0!==M.value||!0!==C.value&&Math.abs(e)!==_.value||(e+=Y.value*q.scrollbarWidth.value),V.value=e)}function ue(e){A.value=e}function se(e){const t=!0===e?"remove":!0!==q.isContainer.value?"add":"";""!==t&&document.body.classList[t]("q-body--drawer-toggle")}function ve(){null!==x&&clearTimeout(x),m.proxy&&m.proxy.$el&&m.proxy.$el.classList.add("q-drawer--mini-animate"),N.value=!0,x=setTimeout((()=>{x=null,N.value=!1,m&&m.proxy&&m.proxy.$el&&m.proxy.$el.classList.remove("q-drawer--mini-animate")}),150)}function de(e){if(!1!==T.value)return;const t=_.value,l=(0,c.vX)(e.distance.x,0,t);if(!0===e.isFinal){const e=l>=Math.min(75,t);return!0===e?$():(q.animate(),ue(0),re(Y.value*t)),void(R.value=!1)}re((!0===b.lang.rtl?!0!==M.value:M.value)?Math.max(t-l,0):Math.min(0,l-t)),ue((0,c.vX)(l/t,0,1)),!0===e.isFirst&&(R.value=!0)}function ce(t){if(!0!==T.value)return;const l=_.value,o=t.direction===e.side,i=(!0===b.lang.rtl?!0!==o:o)?(0,c.vX)(t.distance.x,0,l):0;if(!0===t.isFinal){const e=Math.abs(i)<Math.min(75,l);return!0===e?(q.animate(),ue(1),re(0)):k(),void(R.value=!1)}re(Y.value*i),ue((0,c.vX)(1-i/l,0,1)),!0===t.isFirst&&(R.value=!0)}function he(){y(!1),se(!0)}function fe(t,l){q.update(e.side,t,l)}function pe(e,t){e.value!==t&&(e.value=t)}function me(t,l){fe("size",!0===t?e.miniWidth:l)}return(0,o.YP)(C,(t=>{!0===t?(F=T.value,!0===T.value&&k(!1)):!1===e.overlay&&"mobile"!==e.behavior&&!1!==F&&(!0===T.value?(re(0),ue(0),he()):$(!1))})),(0,o.YP)((()=>e.side),((e,t)=>{q.instances[t]===E&&(q.instances[t]=void 0,q[t].space=!1,q[t].offset=0),q.instances[e]=E,q[e].size=_.value,q[e].space=Q.value,q[e].offset=X.value})),(0,o.YP)(q.totalWidth,(()=>{!0!==q.isContainer.value&&!0===document.qScrollPrevented||ne()})),(0,o.YP)((()=>e.behavior+e.breakpoint),ne),(0,o.YP)(q.isContainer,(e=>{!0===T.value&&y(!0!==e),!0===e&&ne()})),(0,o.YP)(q.scrollbarWidth,(()=>{re(!0===T.value?0:void 0)})),(0,o.YP)(X,(e=>{fe("offset",e)})),(0,o.YP)(Q,(e=>{l("onLayout",e),fe("space",e)})),(0,o.YP)(M,(()=>{re()})),(0,o.YP)(_,(t=>{re(),me(e.miniToOverlay,t)})),(0,o.YP)((()=>e.miniToOverlay),(e=>{me(e,_.value)})),(0,o.YP)((()=>b.lang.rtl),(()=>{re()})),(0,o.YP)((()=>e.mini),(()=>{e.noMiniAnimation||!0===e.modelValue&&(ve(),q.animate())})),(0,o.YP)(H,(e=>{l("miniState",e)})),q.instances[e.side]=E,me(e.miniToOverlay,_.value),fe("space",Q.value),fe("offset",X.value),!0===e.showIfAbove&&!0!==e.modelValue&&!0===T.value&&void 0!==e["onUpdate:modelValue"]&&l("update:modelValue",!0),(0,o.bv)((()=>{l("onLayout",Q.value),l("miniState",H.value),F=!0===e.showIfAbove;const t=()=>{const e=!0===T.value?P:O;e(!1,!0)};0===q.totalWidth.value?S=(0,o.YP)(q.totalWidth,(()=>{S(),S=void 0,!1===T.value&&!0===e.showIfAbove&&!1===C.value?$(!1):t()})):(0,o.Y3)(t)})),(0,o.Jd)((()=>{void 0!==S&&S(),null!==x&&(clearTimeout(x),x=null),!0===T.value&&he(),q.instances[e.side]===E&&(q.instances[e.side]=void 0,fe("size",0),fe("offset",0),fe("space",!1))})),()=>{const l=[];!0===C.value&&(!1===e.noSwipeOpen&&l.push((0,o.wy)((0,o.h)("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),oe.value)),l.push((0,h.Jl)("div",{ref:"backdrop",class:D.value,style:K.value,"aria-hidden":"true",onClick:k},void 0,"backdrop",!0!==e.noSwipeBackdrop&&!0===T.value,(()=>ae.value))));const i=!0===H.value&&void 0!==t.mini,a=[(0,o.h)("div",{...d,key:""+i,class:[te.value,d.class]},!0===i?t.mini():(0,h.KR)(t.default))];return!0===e.elevated&&!0===T.value&&a.push((0,o.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push((0,h.Jl)("aside",{ref:"content",class:le.value,style:ee.value},a,"contentclose",!0!==e.noSwipeClose&&!0===C.value,(()=>ie.value))),(0,o.h)("div",{class:"q-drawer-container"},l)}}})},5024:(e,t,l)=>{l.d(t,{Z:()=>v});l(5954);var o=l(6929),i=l(7218),a=l(1419),n=l(8532),r=l(859),u=l(8192),s=l(7623);const v=(0,r.L)({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:l}){const{proxy:{$q:r}}=(0,o.FN)(),v=(0,o.f3)(s.YE,s.qO);if(v===s.qO)return console.error("QFooter needs to be child of QLayout"),s.qO;const d=(0,i.iH)(parseInt(e.heightHint,10)),c=(0,i.iH)(!0),h=(0,i.iH)(!0===a.uX.value||!0===v.isContainer.value?0:window.innerHeight),f=(0,o.Fl)((()=>!0===e.reveal||v.view.value.indexOf("F")>-1||r.platform.is.ios&&!0===v.isContainer.value)),p=(0,o.Fl)((()=>!0===v.isContainer.value?v.containerHeight.value:h.value)),m=(0,o.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===f.value)return!0===c.value?d.value:0;const t=v.scroll.value.position+p.value+d.value-v.height.value;return t>0?t:0})),b=(0,o.Fl)((()=>!0!==e.modelValue||!0===f.value&&!0!==c.value)),g=(0,o.Fl)((()=>!0===e.modelValue&&!0===b.value&&!0===e.reveal)),y=(0,o.Fl)((()=>"q-footer q-layout__section--marginal "+(!0===f.value?"fixed":"absolute")+"-bottom"+(!0===e.bordered?" q-footer--bordered":"")+(!0===b.value?" q-footer--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus"+(!0!==f.value?" hidden":""):""))),w=(0,o.Fl)((()=>{const e=v.rows.value.bottom,t={};return"l"===e[0]&&!0===v.left.space&&(t[!0===r.lang.rtl?"right":"left"]=`${v.left.size}px`),"r"===e[2]&&!0===v.right.space&&(t[!0===r.lang.rtl?"left":"right"]=`${v.right.size}px`),t}));function z(e,t){v.update("footer",e,t)}function q(e,t){e.value!==t&&(e.value=t)}function F({height:e}){q(d,e),z("size",e)}function S(){if(!0!==e.reveal)return;const{direction:t,position:l,inflectionPoint:o}=v.scroll.value;q(c,"up"===t||l-o<100||v.height.value-p.value-l-d.value<300)}function x(e){!0===g.value&&q(c,!0),l("focusin",e)}(0,o.YP)((()=>e.modelValue),(e=>{z("space",e),q(c,!0),v.animate()})),(0,o.YP)(m,(e=>{z("offset",e)})),(0,o.YP)((()=>e.reveal),(t=>{!1===t&&q(c,e.modelValue)})),(0,o.YP)(c,(e=>{v.animate(),l("reveal",e)})),(0,o.YP)([d,v.scroll,v.height],S),(0,o.YP)((()=>r.screen.height),(e=>{!0!==v.isContainer.value&&q(h,e)}));const C={};return v.instances.footer=C,!0===e.modelValue&&z("size",d.value),z("space",e.modelValue),z("offset",m.value),(0,o.Jd)((()=>{v.instances.footer===C&&(v.instances.footer=void 0,z("size",0),z("offset",0),z("space",!1))})),()=>{const l=(0,u.vs)(t.default,[(0,o.h)(n.Z,{debounce:0,onResize:F})]);return!0===e.elevated&&l.push((0,o.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),(0,o.h)("footer",{class:y.value,style:w.value,onFocusin:x},l)}}})},3251:(e,t,l)=>{l.d(t,{Z:()=>d});l(9739);var o=l(6929),i=l(7218),a=l(4429),n=l(4927),r=l(859),u=l(8192),s=l(4290),v=l(9352);const d=(0,r.L)({name:"QItem",props:{...a.S,...n.$,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:l}){const{proxy:{$q:r}}=(0,o.FN)(),d=(0,a.Z)(e,r),{hasLink:c,linkAttrs:h,linkClass:f,linkTag:p,navigateOnClick:m}=(0,n.Z)(),b=(0,i.iH)(null),g=(0,i.iH)(null),y=(0,o.Fl)((()=>!0===e.clickable||!0===c.value||"label"===e.tag)),w=(0,o.Fl)((()=>!0!==e.disable&&!0===y.value)),z=(0,o.Fl)((()=>"q-item q-item-type row no-wrap"+(!0===e.dense?" q-item--dense":"")+(!0===d.value?" q-item--dark":"")+(!0===c.value&&null===e.active?f.value:!0===e.active?" q-item--active"+(void 0!==e.activeClass?` ${e.activeClass}`:""):"")+(!0===e.disable?" disabled":"")+(!0===w.value?" q-item--clickable q-link cursor-pointer "+(!0===e.manualFocus?"q-manual-focusable":"q-focusable q-hoverable")+(!0===e.focused?" q-manual-focusable--focused":""):""))),q=(0,o.Fl)((()=>{if(void 0===e.insetLevel)return null;const t=!0===r.lang.rtl?"Right":"Left";return{["padding"+t]:16+56*e.insetLevel+"px"}}));function F(e){!0===w.value&&(null!==g.value&&(!0!==e.qKeyEvent&&document.activeElement===b.value?g.value.focus():document.activeElement===g.value&&b.value.focus()),m(e))}function S(e){if(!0===w.value&&!0===(0,v.So)(e,13)){(0,s.NS)(e),e.qKeyEvent=!0;const t=new MouseEvent("click",e);t.qKeyEvent=!0,b.value.dispatchEvent(t)}l("keyup",e)}function x(){const e=(0,u.Bl)(t.default,[]);return!0===w.value&&e.unshift((0,o.h)("div",{class:"q-focus-helper",tabindex:-1,ref:g})),e}return()=>{const t={ref:b,class:z.value,style:q.value,role:"listitem",onClick:F,onKeyup:S};return!0===w.value?(t.tabindex=e.tabindex||"0",Object.assign(t,h.value)):!0===y.value&&(t["aria-disabled"]="true"),(0,o.h)(p.value,t,x())}}})},9131:(e,t,l)=>{l.d(t,{Z:()=>n});var o=l(6929),i=l(859),a=l(8192);const n=(0,i.L)({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const l=(0,o.Fl)((()=>"q-item__section column q-item__section--"+(!0===e.avatar||!0===e.side||!0===e.thumbnail?"side":"main")+(!0===e.top?" q-item__section--top justify-start":" justify-center")+(!0===e.avatar?" q-item__section--avatar":"")+(!0===e.thumbnail?" q-item__section--thumbnail":"")+(!0===e.noWrap?" q-item__section--nowrap":"")));return()=>(0,o.h)("div",{class:l.value},(0,a.KR)(t.default))}})},6758:(e,t,l)=>{l.d(t,{Z:()=>r});var o=l(6929),i=l(859),a=l(4429),n=l(8192);const r=(0,i.L)({name:"QList",props:{...a.S,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:t}){const l=(0,o.FN)(),i=(0,a.Z)(e,l.proxy.$q),r=(0,o.Fl)((()=>"q-list"+(!0===e.bordered?" q-list--bordered":"")+(!0===e.dense?" q-list--dense":"")+(!0===e.separator?" q-list--separator":"")+(!0===i.value?" q-list--dark":"")+(!0===e.padding?" q-list--padding":"")));return()=>(0,o.h)(e.tag,{class:r.value},(0,n.KR)(t.default))}})},4464:(e,t,l)=>{l.d(t,{Z:()=>c});var o=l(6929),i=l(7218),a=l(1419),n=l(5457),r=l(8532),u=l(859),s=l(8679),v=l(8192),d=l(7623);const c=(0,u.L)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:l}){const{proxy:{$q:u}}=(0,o.FN)(),c=(0,i.iH)(null),h=(0,i.iH)(u.screen.height),f=(0,i.iH)(!0===e.container?0:u.screen.width),p=(0,i.iH)({position:0,direction:"down",inflectionPoint:0}),m=(0,i.iH)(0),b=(0,i.iH)(!0===a.uX.value?0:(0,s.np)()),g=(0,o.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),y=(0,o.Fl)((()=>!1===e.container?{minHeight:u.screen.height+"px"}:null)),w=(0,o.Fl)((()=>0!==b.value?{[!0===u.lang.rtl?"left":"right"]:`${b.value}px`}:null)),z=(0,o.Fl)((()=>0!==b.value?{[!0===u.lang.rtl?"right":"left"]:0,[!0===u.lang.rtl?"left":"right"]:`-${b.value}px`,width:`calc(100% + ${b.value}px)`}:null));function q(t){if(!0===e.container||!0!==document.qScrollPrevented){const o={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};p.value=o,void 0!==e.onScroll&&l("scroll",o)}}function F(t){const{height:o,width:i}=t;let a=!1;h.value!==o&&(a=!0,h.value=o,void 0!==e.onScrollHeight&&l("scrollHeight",o),x()),f.value!==i&&(a=!0,f.value=i),!0===a&&void 0!==e.onResize&&l("resize",t)}function S({height:e}){m.value!==e&&(m.value=e,x())}function x(){if(!0===e.container){const e=h.value>m.value?(0,s.np)():0;b.value!==e&&(b.value=e)}}let C=null;const H={instances:{},view:(0,o.Fl)((()=>e.view)),isContainer:(0,o.Fl)((()=>e.container)),rootRef:c,height:h,containerHeight:m,scrollbarWidth:b,totalWidth:(0,o.Fl)((()=>f.value+b.value)),rows:(0,o.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,i.qj)({size:0,offset:0,space:!1}),right:(0,i.qj)({size:300,offset:0,space:!1}),footer:(0,i.qj)({size:0,offset:0,space:!1}),left:(0,i.qj)({size:300,offset:0,space:!1}),scroll:p,animate(){null!==C?clearTimeout(C):document.body.classList.add("q-body--layout-animate"),C=setTimeout((()=>{C=null,document.body.classList.remove("q-body--layout-animate")}),155)},update(e,t,l){H[e][t]=l}};if((0,o.JJ)(d.YE,H),(0,s.np)()>0){let _=null;const T=document.body;function B(){_=null,T.classList.remove("hide-scrollbar")}function P(){if(null===_){if(T.scrollHeight>u.screen.height)return;T.classList.add("hide-scrollbar")}else clearTimeout(_);_=setTimeout(B,300)}function O(e){null!==_&&"remove"===e&&(clearTimeout(_),B()),window[`${e}EventListener`]("resize",P)}(0,o.YP)((()=>!0!==e.container?"add":"remove"),O),!0!==e.container&&O("add"),(0,o.Ah)((()=>{O("remove")}))}return()=>{const l=(0,v.vs)(t.default,[(0,o.h)(n.Z,{onScroll:q}),(0,o.h)(r.Z,{onResize:F})]),i=(0,o.h)("div",{class:g.value,style:y.value,ref:!0===e.container?void 0:c,tabindex:-1},l);return!0===e.container?(0,o.h)("div",{class:"q-layout-container overflow-hidden",ref:c},[(0,o.h)(r.Z,{onResize:S}),(0,o.h)("div",{class:"absolute-full",style:w.value},[(0,o.h)("div",{class:"scroll",style:z.value},[i])])]):i}}})},6318:(e,t,l)=>{l.d(t,{Z:()=>r});var o=l(6929),i=l(859),a=l(8192),n=l(7623);const r=(0,i.L)({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:l}}=(0,o.FN)(),i=(0,o.f3)(n.YE,n.qO);if(i===n.qO)return console.error("QPageContainer needs to be child of QLayout"),n.qO;(0,o.JJ)(n.Mw,!0);const r=(0,o.Fl)((()=>{const e={};return!0===i.header.space&&(e.paddingTop=`${i.header.size}px`),!0===i.right.space&&(e["padding"+(!0===l.lang.rtl?"Left":"Right")]=`${i.right.size}px`),!0===i.footer.space&&(e.paddingBottom=`${i.footer.size}px`),!0===i.left.space&&(e["padding"+(!0===l.lang.rtl?"Right":"Left")]=`${i.left.size}px`),e}));return()=>(0,o.h)("div",{class:"q-page-container",style:r.value},(0,a.KR)(t.default))}})},8532:(e,t,l)=>{l.d(t,{Z:()=>d});var o=l(6929),i=l(7218),a=l(1419);function n(){const e=(0,i.iH)(!a.uX.value);return!1===e.value&&(0,o.bv)((()=>{e.value=!0})),e}var r=l(859),u=l(4290);const s="undefined"!==typeof ResizeObserver,v=!0===s?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},d=(0,r.L)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let l,i=null,a={width:-1,height:-1};function r(t){!0===t||0===e.debounce||"0"===e.debounce?d():null===i&&(i=setTimeout(d,e.debounce))}function d(){if(null!==i&&(clearTimeout(i),i=null),l){const{offsetWidth:e,offsetHeight:o}=l;e===a.width&&o===a.height||(a={width:e,height:o},t("resize",a))}}const{proxy:c}=(0,o.FN)();if(!0===s){let h;const f=e=>{l=c.$el.parentNode,l?(h=new ResizeObserver(r),h.observe(l),d()):!0!==e&&(0,o.Y3)((()=>{f(!0)}))};return(0,o.bv)((()=>{f()})),(0,o.Jd)((()=>{null!==i&&clearTimeout(i),void 0!==h&&(void 0!==h.disconnect?h.disconnect():l&&h.unobserve(l))})),u.ZT}{const p=n();let m;function b(){null!==i&&(clearTimeout(i),i=null),void 0!==m&&(void 0!==m.removeEventListener&&m.removeEventListener("resize",r,u.listenOpts.passive),m=void 0)}function g(){b(),l&&l.contentDocument&&(m=l.contentDocument.defaultView,m.addEventListener("resize",r,u.listenOpts.passive),d())}return(0,o.bv)((()=>{(0,o.Y3)((()=>{l=c.$el,l&&g()}))})),(0,o.Jd)(b),c.trigger=r,()=>{if(!0===p.value)return(0,o.h)("object",{style:v.style,tabindex:-1,type:"text/html",data:v.url,"aria-hidden":"true",onLoad:g})}}}})},7784:(e,t,l)=>{l.d(t,{Z:()=>g});var o=l(7218),i=l(6929),a=l(4429),n=l(8532),r=l(5457),u=l(6349),s=l(859),v=l(2638),d=l(8679),c=l(8192),h=l(2881);const f=["vertical","horizontal"],p={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},m={prevent:!0,mouse:!0,mouseAllDir:!0},b=e=>e>=250?50:Math.ceil(e/5),g=(0,s.L)({name:"QScrollArea",props:{...a.S,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:t,emit:l}){const s=(0,o.iH)(!1),g=(0,o.iH)(!1),y=(0,o.iH)(!1),w={vertical:(0,o.iH)(0),horizontal:(0,o.iH)(0)},z={vertical:{ref:(0,o.iH)(null),position:(0,o.iH)(0),size:(0,o.iH)(0)},horizontal:{ref:(0,o.iH)(null),position:(0,o.iH)(0),size:(0,o.iH)(0)}},{proxy:q}=(0,i.FN)(),F=(0,a.Z)(e,q.$q);let S,x=null;const C=(0,o.iH)(null),H=(0,i.Fl)((()=>"q-scrollarea"+(!0===F.value?" q-scrollarea--dark":"")));z.vertical.percentage=(0,i.Fl)((()=>{const e=z.vertical.size.value-w.vertical.value;if(e<=0)return 0;const t=(0,v.vX)(z.vertical.position.value/e,0,1);return Math.round(1e4*t)/1e4})),z.vertical.thumbHidden=(0,i.Fl)((()=>!0!==(null===e.visible?y.value:e.visible)&&!1===s.value&&!1===g.value||z.vertical.size.value<=w.vertical.value+1)),z.vertical.thumbStart=(0,i.Fl)((()=>z.vertical.percentage.value*(w.vertical.value-z.vertical.thumbSize.value))),z.vertical.thumbSize=(0,i.Fl)((()=>Math.round((0,v.vX)(w.vertical.value*w.vertical.value/z.vertical.size.value,b(w.vertical.value),w.vertical.value)))),z.vertical.style=(0,i.Fl)((()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${z.vertical.thumbStart.value}px`,height:`${z.vertical.thumbSize.value}px`}))),z.vertical.thumbClass=(0,i.Fl)((()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(!0===z.vertical.thumbHidden.value?" q-scrollarea__thumb--invisible":""))),z.vertical.barClass=(0,i.Fl)((()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(!0===z.vertical.thumbHidden.value?" q-scrollarea__bar--invisible":""))),z.horizontal.percentage=(0,i.Fl)((()=>{const e=z.horizontal.size.value-w.horizontal.value;if(e<=0)return 0;const t=(0,v.vX)(Math.abs(z.horizontal.position.value)/e,0,1);return Math.round(1e4*t)/1e4})),z.horizontal.thumbHidden=(0,i.Fl)((()=>!0!==(null===e.visible?y.value:e.visible)&&!1===s.value&&!1===g.value||z.horizontal.size.value<=w.horizontal.value+1)),z.horizontal.thumbStart=(0,i.Fl)((()=>z.horizontal.percentage.value*(w.horizontal.value-z.horizontal.thumbSize.value))),z.horizontal.thumbSize=(0,i.Fl)((()=>Math.round((0,v.vX)(w.horizontal.value*w.horizontal.value/z.horizontal.size.value,b(w.horizontal.value),w.horizontal.value)))),z.horizontal.style=(0,i.Fl)((()=>({...e.thumbStyle,...e.horizontalThumbStyle,[!0===q.$q.lang.rtl?"right":"left"]:`${z.horizontal.thumbStart.value}px`,width:`${z.horizontal.thumbSize.value}px`}))),z.horizontal.thumbClass=(0,i.Fl)((()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(!0===z.horizontal.thumbHidden.value?" q-scrollarea__thumb--invisible":""))),z.horizontal.barClass=(0,i.Fl)((()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(!0===z.horizontal.thumbHidden.value?" q-scrollarea__bar--invisible":"")));const _=(0,i.Fl)((()=>!0===z.vertical.thumbHidden.value&&!0===z.horizontal.thumbHidden.value?e.contentStyle:e.contentActiveStyle)),T=[[u.Z,e=>{E(e,"vertical")},void 0,{vertical:!0,...m}]],B=[[u.Z,e=>{E(e,"horizontal")},void 0,{horizontal:!0,...m}]];function P(){const e={};return f.forEach((t=>{const l=z[t];e[t+"Position"]=l.position.value,e[t+"Percentage"]=l.percentage.value,e[t+"Size"]=l.size.value,e[t+"ContainerSize"]=w[t].value})),e}const O=(0,h.Z)((()=>{const e=P();e.ref=q,l("scroll",e)}),0);function $(e,t,l){if(!1===f.includes(e))return void console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");const o="vertical"===e?d.f3:d.ik;o(C.value,t,l)}function k({height:e,width:t}){let l=!1;w.vertical.value!==e&&(w.vertical.value=e,l=!0),w.horizontal.value!==t&&(w.horizontal.value=t,l=!0),!0===l&&R()}function L({position:e}){let t=!1;z.vertical.position.value!==e.top&&(z.vertical.position.value=e.top,t=!0),z.horizontal.position.value!==e.left&&(z.horizontal.position.value=e.left,t=!0),!0===t&&R()}function Z({height:e,width:t}){z.horizontal.size.value!==t&&(z.horizontal.size.value=t,R()),z.vertical.size.value!==e&&(z.vertical.size.value=e,R())}function E(e,t){const l=z[t];if(!0===e.isFirst){if(!0===l.thumbHidden.value)return;S=l.position.value,g.value=!0}else if(!0!==g.value)return;!0===e.isFinal&&(g.value=!1);const o=p[t],i=w[t].value,a=(l.size.value-i)/(i-l.thumbSize.value),n=e.distance[o.dist],r=S+(e.direction===o.dir?1:-1)*n*a;N(r,t)}function M(e,t){const l=z[t];if(!0!==l.thumbHidden.value){const o=e[p[t].offset];if(o<l.thumbStart.value||o>l.thumbStart.value+l.thumbSize.value){const e=o-l.thumbSize.value/2;N(e/w[t].value*l.size.value,t)}null!==l.ref.value&&l.ref.value.dispatchEvent(new MouseEvent(e.type,e))}}function Y(e){M(e,"vertical")}function A(e){M(e,"horizontal")}function R(){s.value=!0,null!==x&&clearTimeout(x),x=setTimeout((()=>{x=null,s.value=!1}),e.delay),void 0!==e.onScroll&&O()}function N(e,t){C.value[p[t].scroll]=e}function V(){y.value=!0}function j(){y.value=!1}let X=null;return(0,i.YP)((()=>q.$q.lang.rtl),(e=>{null!==C.value&&(0,d.ik)(C.value,Math.abs(z.horizontal.position.value)*(!0===e?-1:1))})),(0,i.se)((()=>{X={top:z.vertical.position.value,left:z.horizontal.position.value}})),(0,i.dl)((()=>{if(null===X)return;const e=C.value;null!==e&&((0,d.ik)(e,X.left),(0,d.f3)(e,X.top))})),(0,i.Jd)(O.cancel),Object.assign(q,{getScrollTarget:()=>C.value,getScroll:P,getScrollPosition:()=>({top:z.vertical.position.value,left:z.horizontal.position.value}),getScrollPercentage:()=>({top:z.vertical.percentage.value,left:z.horizontal.percentage.value}),setScrollPosition:$,setScrollPercentage(e,t,l){$(e,t*(z[e].size.value-w[e].value)*("horizontal"===e&&!0===q.$q.lang.rtl?-1:1),l)}}),()=>(0,i.h)("div",{class:H.value,onMouseenter:V,onMouseleave:j},[(0,i.h)("div",{ref:C,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:void 0!==e.tabindex?e.tabindex:void 0},[(0,i.h)("div",{class:"q-scrollarea__content absolute",style:_.value},(0,c.vs)(t.default,[(0,i.h)(n.Z,{debounce:0,onResize:Z})])),(0,i.h)(r.Z,{axis:"both",onScroll:L})]),(0,i.h)(n.Z,{debounce:0,onResize:k}),(0,i.h)("div",{class:z.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:Y}),(0,i.h)("div",{class:z.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:A}),(0,i.wy)((0,i.h)("div",{ref:z.vertical.ref,class:z.vertical.thumbClass.value,style:z.vertical.style.value,"aria-hidden":"true"}),T),(0,i.wy)((0,i.h)("div",{ref:z.horizontal.ref,class:z.horizontal.thumbClass.value,style:z.horizontal.style.value,"aria-hidden":"true"}),B)])}})},5457:(e,t,l)=>{l.d(t,{Z:()=>s});var o=l(6929),i=l(859),a=l(8679),n=l(4290);const{passive:r}=n.listenOpts,u=["both","horizontal","vertical"],s=(0,i.L)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>u.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i,u,s=null;function v(){null!==s&&s();const o=Math.max(0,(0,a.u3)(i)),n=(0,a.OI)(i),r={top:o-l.position.top,left:n-l.position.left};if("vertical"===e.axis&&0===r.top||"horizontal"===e.axis&&0===r.left)return;const u=Math.abs(r.top)>=Math.abs(r.left)?r.top<0?"up":"down":r.left<0?"left":"right";l.position={top:o,left:n},l.directionChanged=l.direction!==u,l.delta=r,!0===l.directionChanged&&(l.direction=u,l.inflectionPoint=l.position),t("scroll",{...l})}function d(){i=(0,a.b0)(u,e.scrollTarget),i.addEventListener("scroll",h,r),h(!0)}function c(){void 0!==i&&(i.removeEventListener("scroll",h,r),i=void 0)}function h(t){if(!0===t||0===e.debounce||"0"===e.debounce)v();else if(null===s){const[t,l]=e.debounce?[setTimeout(v,e.debounce),clearTimeout]:[requestAnimationFrame(v),cancelAnimationFrame];s=()=>{l(t),s=null}}}(0,o.YP)((()=>e.scrollTarget),(()=>{c(),d()}));const{proxy:f}=(0,o.FN)();return(0,o.YP)((()=>f.$q.lang.rtl),v),(0,o.bv)((()=>{u=f.$el.parentNode,d()})),(0,o.Jd)((()=>{null!==s&&s(),c()})),Object.assign(f,{trigger:h,getPosition:()=>l}),n.ZT}})},3874:(e,t,l)=>{l.d(t,{Z:()=>a});var o=l(6929),i=l(3332);function a(e,t,l){let a;function n(){void 0!==a&&(i.Z.remove(a),a=void 0)}return(0,o.Jd)((()=>{!0===e.value&&n()})),{removeFromHistory:n,addToHistory(){a={condition:()=>!0===l.value,handler:t},i.Z.add(a)}}}},3852:(e,t,l)=>{l.d(t,{ZP:()=>r,gH:()=>n,vr:()=>a});var o=l(6929),i=l(8586);const a={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},n=["beforeShow","show","beforeHide","hide"];function r({showing:e,canShow:t,hideOnRouteChange:l,handleShow:a,handleHide:n,processOnMount:r}){const u=(0,o.FN)(),{props:s,emit:v,proxy:d}=u;let c;function h(t){!0===e.value?m(t):f(t)}function f(e){if(!0===s.disable||void 0!==e&&!0===e.qAnchorHandled||void 0!==t&&!0!==t(e))return;const l=void 0!==s["onUpdate:modelValue"];!0===l&&(v("update:modelValue",!0),c=e,(0,o.Y3)((()=>{c===e&&(c=void 0)}))),null!==s.modelValue&&!1!==l||p(e)}function p(t){!0!==e.value&&(e.value=!0,v("beforeShow",t),void 0!==a?a(t):v("show",t))}function m(e){if(!0===s.disable)return;const t=void 0!==s["onUpdate:modelValue"];!0===t&&(v("update:modelValue",!1),c=e,(0,o.Y3)((()=>{c===e&&(c=void 0)}))),null!==s.modelValue&&!1!==t||b(e)}function b(t){!1!==e.value&&(e.value=!1,v("beforeHide",t),void 0!==n?n(t):v("hide",t))}function g(t){if(!0===s.disable&&!0===t)void 0!==s["onUpdate:modelValue"]&&v("update:modelValue",!1);else if(!0===t!==e.value){const e=!0===t?p:b;e(c)}}(0,o.YP)((()=>s.modelValue),g),void 0!==l&&!0===(0,i.Rb)(u)&&(0,o.YP)((()=>d.$route.fullPath),(()=>{!0===l.value&&!0===e.value&&m()})),!0===r&&(0,o.bv)((()=>{g(s.modelValue)}));const y={show:f,hide:m,toggle:h};return Object.assign(d,y),y}},6812:(e,t,l)=>{l.d(t,{Z:()=>i});var o=l(1997);function i(){let e;return{preventBodyScroll(t){t===e||void 0===e&&!0!==t||(e=t,(0,o.Z)(t))}}}},9345:(e,t,l)=>{l.d(t,{Z:()=>a});var o=l(6929),i=l(8586);function a(){let e=null;const t=(0,o.FN)();function l(){null!==e&&(clearTimeout(e),e=null)}return(0,o.se)(l),(0,o.Jd)(l),{removeTimeout:l,registerTimeout(o,a){l(e),!1===(0,i.$D)(t)&&(e=setTimeout(o,a))}}}},1944:(e,t,l)=>{l.d(t,{Z:()=>a});var o=l(6929),i=l(7623);function a(){return(0,o.f3)(i.Ng)}},6349:(e,t,l)=>{l.d(t,{Z:()=>v});var o=l(1419),i=l(859),a=l(7187),n=l(4290),r=l(4187);function u(e,t,l){const o=(0,n.FK)(e);let i,a=o.left-t.event.x,r=o.top-t.event.y,u=Math.abs(a),s=Math.abs(r);const v=t.direction;!0===v.horizontal&&!0!==v.vertical?i=a<0?"left":"right":!0!==v.horizontal&&!0===v.vertical?i=r<0?"up":"down":!0===v.up&&r<0?(i="up",u>s&&(!0===v.left&&a<0?i="left":!0===v.right&&a>0&&(i="right"))):!0===v.down&&r>0?(i="down",u>s&&(!0===v.left&&a<0?i="left":!0===v.right&&a>0&&(i="right"))):!0===v.left&&a<0?(i="left",u<s&&(!0===v.up&&r<0?i="up":!0===v.down&&r>0&&(i="down"))):!0===v.right&&a>0&&(i="right",u<s&&(!0===v.up&&r<0?i="up":!0===v.down&&r>0&&(i="down")));let d=!1;if(void 0===i&&!1===l){if(!0===t.event.isFirst||void 0===t.event.lastDir)return{};i=t.event.lastDir,d=!0,"left"===i||"right"===i?(o.left-=a,u=0,a=0):(o.top-=r,s=0,r=0)}return{synthetic:d,payload:{evt:e,touch:!0!==t.event.mouse,mouse:!0===t.event.mouse,position:o,direction:i,isFirst:t.event.isFirst,isFinal:!0===l,duration:Date.now()-t.event.time,distance:{x:u,y:s},offset:{x:a,y:r},delta:{x:o.left-t.event.lastX,y:o.top-t.event.lastY}}}}let s=0;const v=(0,i.f)({name:"touch-pan",beforeMount(e,{value:t,modifiers:l}){if(!0!==l.mouse&&!0!==o.client.has.touch)return;function i(e,t){!0===l.mouse&&!0===t?(0,n.NS)(e):(!0===l.stop&&(0,n.sT)(e),!0===l.prevent&&(0,n.X$)(e))}const v={uid:"qvtp_"+s++,handler:t,modifiers:l,direction:(0,a.R)(l),noop:n.ZT,mouseStart(e){(0,a.n)(e,v)&&(0,n.du)(e)&&((0,n.M0)(v,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),v.start(e,!0))},touchStart(e){if((0,a.n)(e,v)){const t=e.target;(0,n.M0)(v,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","passiveCapture"],[t,"touchend","end","passiveCapture"]]),v.start(e)}},start(t,i){if(!0===o.client.is.firefox&&(0,n.Jf)(e,!0),v.lastEvt=t,!0===i||!0===l.stop){if(!0!==v.direction.all&&(!0!==i||!0!==v.modifiers.mouseAllDir&&!0!==v.modifiers.mousealldir)){const e=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);!0===t.defaultPrevented&&(0,n.X$)(e),!0===t.cancelBubble&&(0,n.sT)(e),Object.assign(e,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:void 0===t.qClonedBy?[v.uid]:t.qClonedBy.concat(v.uid)}),v.initialEvent={target:t.target,event:e}}(0,n.sT)(t)}const{left:a,top:r}=(0,n.FK)(t);v.event={x:a,y:r,time:Date.now(),mouse:!0===i,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:r}},move(e){if(void 0===v.event)return;const t=(0,n.FK)(e),o=t.left-v.event.x,a=t.top-v.event.y;if(0===o&&0===a)return;v.lastEvt=e;const s=!0===v.event.mouse,d=()=>{let t;i(e,s),!0!==l.preserveCursor&&!0!==l.preservecursor&&(t=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),!0===s&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),(0,r.M)(),v.styleCleanup=e=>{if(v.styleCleanup=void 0,void 0!==t&&(document.documentElement.style.cursor=t),document.body.classList.remove("non-selectable"),!0===s){const t=()=>{document.body.classList.remove("no-pointer-events--children")};void 0!==e?setTimeout((()=>{t(),e()}),50):t()}else void 0!==e&&e()}};if(!0===v.event.detected){!0!==v.event.isFirst&&i(e,v.event.mouse);const{payload:t,synthetic:l}=u(e,v,!1);return void(void 0!==t&&(!1===v.handler(t)?v.end(e):(void 0===v.styleCleanup&&!0===v.event.isFirst&&d(),v.event.lastX=t.position.left,v.event.lastY=t.position.top,v.event.lastDir=!0===l?void 0:t.direction,v.event.isFirst=!1)))}if(!0===v.direction.all||!0===s&&(!0===v.modifiers.mouseAllDir||!0===v.modifiers.mousealldir))return d(),v.event.detected=!0,void v.move(e);const c=Math.abs(o),h=Math.abs(a);c!==h&&(!0===v.direction.horizontal&&c>h||!0===v.direction.vertical&&c<h||!0===v.direction.up&&c<h&&a<0||!0===v.direction.down&&c<h&&a>0||!0===v.direction.left&&c>h&&o<0||!0===v.direction.right&&c>h&&o>0?(v.event.detected=!0,v.move(e)):v.end(e,!0))},end(t,l){if(void 0!==v.event){if((0,n.ul)(v,"temp"),!0===o.client.is.firefox&&(0,n.Jf)(e,!1),!0===l)void 0!==v.styleCleanup&&v.styleCleanup(),!0!==v.event.detected&&void 0!==v.initialEvent&&v.initialEvent.target.dispatchEvent(v.initialEvent.event);else if(!0===v.event.detected){!0===v.event.isFirst&&v.handler(u(void 0===t?v.lastEvt:t,v).payload);const{payload:e}=u(void 0===t?v.lastEvt:t,v,!0),l=()=>{v.handler(e)};void 0!==v.styleCleanup?v.styleCleanup(l):l()}v.event=void 0,v.initialEvent=void 0,v.lastEvt=void 0}}};if(e.__qtouchpan=v,!0===l.mouse){const t=!0===l.mouseCapture||!0===l.mousecapture?"Capture":"";(0,n.M0)(v,"main",[[e,"mousedown","mouseStart",`passive${t}`]])}!0===o.client.has.touch&&(0,n.M0)(v,"main",[[e,"touchstart","touchStart","passive"+(!0===l.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const l=e.__qtouchpan;void 0!==l&&(t.oldValue!==t.value&&("function"!==typeof value&&l.end(),l.handler=t.value),l.direction=(0,a.R)(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;void 0!==t&&(void 0!==t.event&&t.end(),(0,n.ul)(t,"main"),(0,n.ul)(t,"temp"),!0===o.client.is.firefox&&(0,n.Jf)(e,!1),void 0!==t.styleCleanup&&t.styleCleanup(),delete e.__qtouchpan)}})},2638:(e,t,l)=>{l.d(t,{Uz:()=>n,rB:()=>i,vX:()=>a});const o=["B","KB","MB","GB","TB","PB"];function i(e){let t=0;while(parseInt(e,10)>=1024&&t<o.length-1)e/=1024,++t;return`${e.toFixed(1)}${o[t]}`}function a(e,t,l){return l<=t?t:Math.min(l,Math.max(t,e))}function n(e,t,l){if(l<=t)return t;const o=l-t+1;let i=t+(e-t)%o;return i<t&&(i=o+i),0===i?0:i}},4187:(e,t,l)=>{l.d(t,{M:()=>i});var o=l(1419);function i(){if(void 0!==window.getSelection){const e=window.getSelection();void 0!==e.empty?e.empty():void 0!==e.removeAllRanges&&(e.removeAllRanges(),!0!==o.ZP.is.mobile&&e.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}},7187:(e,t,l)=>{l.d(t,{R:()=>a,n:()=>r});const o={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},i=Object.keys(o);function a(e){const t={};for(const l of i)!0===e[l]&&(t[l]=!0);return 0===Object.keys(t).length?o:(!0===t.horizontal?t.left=t.right=!0:!0===t.left&&!0===t.right&&(t.horizontal=!0),!0===t.vertical?t.up=t.down=!0:!0===t.up&&!0===t.down&&(t.vertical=!0),!0===t.horizontal&&!0===t.vertical&&(t.all=!0),t)}o.all=!0;const n=["INPUT","TEXTAREA"];function r(e,t){return void 0===t.event&&void 0!==e.target&&!0!==e.target.draggable&&"function"===typeof t.handler&&!1===n.includes(e.target.nodeName.toUpperCase())&&(void 0===e.qClonedBy||-1===e.qClonedBy.indexOf(t.uid))}},1804:(e,t,l)=>{var o=l(4129),i=TypeError;e.exports=function(e,t){if(!delete e[t])throw i("Cannot delete property "+o(t)+" of "+o(e))}},9739:(e,t,l)=>{var o=l(279),i=l(1211),a=l(3826),n=l(1514),r=l(1804),u=l(4503),s=1!==[].unshift(0),v=function(){try{Object.defineProperty([],"length",{writable:!1}).unshift()}catch(e){return e instanceof TypeError}},d=s||!v();o({target:"Array",proto:!0,arity:1,forced:d},{unshift:function(e){var t=i(this),l=a(t),o=arguments.length;if(o){u(l+o);var s=l;while(s--){var v=s+o;s in t?t[v]=t[s]:r(t,v)}for(var d=0;d<o;d++)t[d]=arguments[d]}return n(t,l+o)}})}}]);