"use strict";(globalThis["webpackChunkventusblog"]=globalThis["webpackChunkventusblog"]||[]).push([[1936],{5024:(e,t,o)=>{o.d(t,{Z:()=>c});o(5954);var l=o(6929),n=o(7218),i=o(1419),a=o(8532),r=o(859),s=o(8192),u=o(7623);const c=(0,r.L)({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:o}){const{proxy:{$q:r}}=(0,l.FN)(),c=(0,l.f3)(u.YE,u.qO);if(c===u.qO)return console.error("QFooter needs to be child of QLayout"),u.qO;const d=(0,n.iH)(parseInt(e.heightHint,10)),v=(0,n.iH)(!0),f=(0,n.iH)(!0===i.uX.value||!0===c.isContainer.value?0:window.innerHeight),h=(0,l.Fl)((()=>!0===e.reveal||c.view.value.indexOf("F")>-1||r.platform.is.ios&&!0===c.isContainer.value)),p=(0,l.Fl)((()=>!0===c.isContainer.value?c.containerHeight.value:f.value)),b=(0,l.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===h.value)return!0===v.value?d.value:0;const t=c.scroll.value.position+p.value+d.value-c.height.value;return t>0?t:0})),m=(0,l.Fl)((()=>!0!==e.modelValue||!0===h.value&&!0!==v.value)),g=(0,l.Fl)((()=>!0===e.modelValue&&!0===m.value&&!0===e.reveal)),w=(0,l.Fl)((()=>"q-footer q-layout__section--marginal "+(!0===h.value?"fixed":"absolute")+"-bottom"+(!0===e.bordered?" q-footer--bordered":"")+(!0===m.value?" q-footer--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus"+(!0!==h.value?" hidden":""):""))),y=(0,l.Fl)((()=>{const e=c.rows.value.bottom,t={};return"l"===e[0]&&!0===c.left.space&&(t[!0===r.lang.rtl?"right":"left"]=`${c.left.size}px`),"r"===e[2]&&!0===c.right.space&&(t[!0===r.lang.rtl?"left":"right"]=`${c.right.size}px`),t}));function q(e,t){c.update("footer",e,t)}function T(e,t){e.value!==t&&(e.value=t)}function L({height:e}){T(d,e),q("size",e)}function F(){if(!0!==e.reveal)return;const{direction:t,position:o,inflectionPoint:l}=c.scroll.value;T(v,"up"===t||o-l<100||c.height.value-p.value-o-d.value<300)}function C(e){!0===g.value&&T(v,!0),o("focusin",e)}(0,l.YP)((()=>e.modelValue),(e=>{q("space",e),T(v,!0),c.animate()})),(0,l.YP)(b,(e=>{q("offset",e)})),(0,l.YP)((()=>e.reveal),(t=>{!1===t&&T(v,e.modelValue)})),(0,l.YP)(v,(e=>{c.animate(),o("reveal",e)})),(0,l.YP)([d,c.scroll,c.height],F),(0,l.YP)((()=>r.screen.height),(e=>{!0!==c.isContainer.value&&T(f,e)}));const x={};return c.instances.footer=x,!0===e.modelValue&&q("size",d.value),q("space",e.modelValue),q("offset",b.value),(0,l.Jd)((()=>{c.instances.footer===x&&(c.instances.footer=void 0,q("size",0),q("offset",0),q("space",!1))})),()=>{const o=(0,s.vs)(t.default,[(0,l.h)(a.Z,{debounce:0,onResize:L})]);return!0===e.elevated&&o.push((0,l.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),(0,l.h)("footer",{class:w.value,style:y.value,onFocusin:C},o)}}})},6453:(e,t,o)=>{o.d(t,{Z:()=>u});o(5954);var l=o(6929),n=o(7218),i=o(8532),a=o(859),r=o(8192),s=o(7623);const u=(0,a.L)({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:o}){const{proxy:{$q:a}}=(0,l.FN)(),u=(0,l.f3)(s.YE,s.qO);if(u===s.qO)return console.error("QHeader needs to be child of QLayout"),s.qO;const c=(0,n.iH)(parseInt(e.heightHint,10)),d=(0,n.iH)(!0),v=(0,l.Fl)((()=>!0===e.reveal||u.view.value.indexOf("H")>-1||a.platform.is.ios&&!0===u.isContainer.value)),f=(0,l.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===v.value)return!0===d.value?c.value:0;const t=c.value-u.scroll.value.position;return t>0?t:0})),h=(0,l.Fl)((()=>!0!==e.modelValue||!0===v.value&&!0!==d.value)),p=(0,l.Fl)((()=>!0===e.modelValue&&!0===h.value&&!0===e.reveal)),b=(0,l.Fl)((()=>"q-header q-layout__section--marginal "+(!0===v.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===h.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),m=(0,l.Fl)((()=>{const e=u.rows.value.top,t={};return"l"===e[0]&&!0===u.left.space&&(t[!0===a.lang.rtl?"right":"left"]=`${u.left.size}px`),"r"===e[2]&&!0===u.right.space&&(t[!0===a.lang.rtl?"left":"right"]=`${u.right.size}px`),t}));function g(e,t){u.update("header",e,t)}function w(e,t){e.value!==t&&(e.value=t)}function y({height:e}){w(c,e),g("size",e)}function q(e){!0===p.value&&w(d,!0),o("focusin",e)}(0,l.YP)((()=>e.modelValue),(e=>{g("space",e),w(d,!0),u.animate()})),(0,l.YP)(f,(e=>{g("offset",e)})),(0,l.YP)((()=>e.reveal),(t=>{!1===t&&w(d,e.modelValue)})),(0,l.YP)(d,(e=>{u.animate(),o("reveal",e)})),(0,l.YP)(u.scroll,(t=>{!0===e.reveal&&w(d,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const T={};return u.instances.header=T,!0===e.modelValue&&g("size",c.value),g("space",e.modelValue),g("offset",f.value),(0,l.Jd)((()=>{u.instances.header===T&&(u.instances.header=void 0,g("size",0),g("offset",0),g("space",!1))})),()=>{const o=(0,r.Bl)(t.default,[]);return!0===e.elevated&&o.push((0,l.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),o.push((0,l.h)(i.Z,{debounce:0,onResize:y})),(0,l.h)("header",{class:b.value,style:m.value,onFocusin:q},o)}}})},4464:(e,t,o)=>{o.d(t,{Z:()=>v});var l=o(6929),n=o(7218),i=o(1419),a=o(5457),r=o(8532),s=o(859),u=o(8679),c=o(8192),d=o(7623);const v=(0,s.L)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:o}){const{proxy:{$q:s}}=(0,l.FN)(),v=(0,n.iH)(null),f=(0,n.iH)(s.screen.height),h=(0,n.iH)(!0===e.container?0:s.screen.width),p=(0,n.iH)({position:0,direction:"down",inflectionPoint:0}),b=(0,n.iH)(0),m=(0,n.iH)(!0===i.uX.value?0:(0,u.np)()),g=(0,l.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),w=(0,l.Fl)((()=>!1===e.container?{minHeight:s.screen.height+"px"}:null)),y=(0,l.Fl)((()=>0!==m.value?{[!0===s.lang.rtl?"left":"right"]:`${m.value}px`}:null)),q=(0,l.Fl)((()=>0!==m.value?{[!0===s.lang.rtl?"right":"left"]:0,[!0===s.lang.rtl?"left":"right"]:`-${m.value}px`,width:`calc(100% + ${m.value}px)`}:null));function T(t){if(!0===e.container||!0!==document.qScrollPrevented){const l={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};p.value=l,void 0!==e.onScroll&&o("scroll",l)}}function L(t){const{height:l,width:n}=t;let i=!1;f.value!==l&&(i=!0,f.value=l,void 0!==e.onScrollHeight&&o("scrollHeight",l),C()),h.value!==n&&(i=!0,h.value=n),!0===i&&void 0!==e.onResize&&o("resize",t)}function F({height:e}){b.value!==e&&(b.value=e,C())}function C(){if(!0===e.container){const e=f.value>b.value?(0,u.np)():0;m.value!==e&&(m.value=e)}}let x=null;const P={instances:{},view:(0,l.Fl)((()=>e.view)),isContainer:(0,l.Fl)((()=>e.container)),rootRef:v,height:f,containerHeight:b,scrollbarWidth:m,totalWidth:(0,l.Fl)((()=>h.value+m.value)),rows:(0,l.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,n.qj)({size:0,offset:0,space:!1}),right:(0,n.qj)({size:300,offset:0,space:!1}),footer:(0,n.qj)({size:0,offset:0,space:!1}),left:(0,n.qj)({size:300,offset:0,space:!1}),scroll:p,animate(){null!==x?clearTimeout(x):document.body.classList.add("q-body--layout-animate"),x=setTimeout((()=>{x=null,document.body.classList.remove("q-body--layout-animate")}),155)},update(e,t,o){P[e][t]=o}};if((0,l.JJ)(d.YE,P),(0,u.np)()>0){let _=null;const k=document.body;function $(){_=null,k.classList.remove("hide-scrollbar")}function R(){if(null===_){if(k.scrollHeight>s.screen.height)return;k.classList.add("hide-scrollbar")}else clearTimeout(_);_=setTimeout($,300)}function H(e){null!==_&&"remove"===e&&(clearTimeout(_),$()),window[`${e}EventListener`]("resize",R)}(0,l.YP)((()=>!0!==e.container?"add":"remove"),H),!0!==e.container&&H("add"),(0,l.Ah)((()=>{H("remove")}))}return()=>{const o=(0,c.vs)(t.default,[(0,l.h)(a.Z,{onScroll:T}),(0,l.h)(r.Z,{onResize:L})]),n=(0,l.h)("div",{class:g.value,style:w.value,ref:!0===e.container?void 0:v,tabindex:-1},o);return!0===e.container?(0,l.h)("div",{class:"q-layout-container overflow-hidden",ref:v},[(0,l.h)(r.Z,{onResize:F}),(0,l.h)("div",{class:"absolute-full",style:y.value},[(0,l.h)("div",{class:"scroll",style:q.value},[n])])]):n}}})},6318:(e,t,o)=>{o.d(t,{Z:()=>r});var l=o(6929),n=o(859),i=o(8192),a=o(7623);const r=(0,n.L)({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:o}}=(0,l.FN)(),n=(0,l.f3)(a.YE,a.qO);if(n===a.qO)return console.error("QPageContainer needs to be child of QLayout"),a.qO;(0,l.JJ)(a.Mw,!0);const r=(0,l.Fl)((()=>{const e={};return!0===n.header.space&&(e.paddingTop=`${n.header.size}px`),!0===n.right.space&&(e["padding"+(!0===o.lang.rtl?"Left":"Right")]=`${n.right.size}px`),!0===n.footer.space&&(e.paddingBottom=`${n.footer.size}px`),!0===n.left.space&&(e["padding"+(!0===o.lang.rtl?"Right":"Left")]=`${n.left.size}px`),e}));return()=>(0,l.h)("div",{class:"q-page-container",style:r.value},(0,i.KR)(t.default))}})},8532:(e,t,o)=>{o.d(t,{Z:()=>d});var l=o(6929),n=o(7218),i=o(1419);function a(){const e=(0,n.iH)(!i.uX.value);return!1===e.value&&(0,l.bv)((()=>{e.value=!0})),e}var r=o(859),s=o(4290);const u="undefined"!==typeof ResizeObserver,c=!0===u?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},d=(0,r.L)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let o,n=null,i={width:-1,height:-1};function r(t){!0===t||0===e.debounce||"0"===e.debounce?d():null===n&&(n=setTimeout(d,e.debounce))}function d(){if(null!==n&&(clearTimeout(n),n=null),o){const{offsetWidth:e,offsetHeight:l}=o;e===i.width&&l===i.height||(i={width:e,height:l},t("resize",i))}}const{proxy:v}=(0,l.FN)();if(!0===u){let f;const h=e=>{o=v.$el.parentNode,o?(f=new ResizeObserver(r),f.observe(o),d()):!0!==e&&(0,l.Y3)((()=>{h(!0)}))};return(0,l.bv)((()=>{h()})),(0,l.Jd)((()=>{null!==n&&clearTimeout(n),void 0!==f&&(void 0!==f.disconnect?f.disconnect():o&&f.unobserve(o))})),s.ZT}{const p=a();let b;function m(){null!==n&&(clearTimeout(n),n=null),void 0!==b&&(void 0!==b.removeEventListener&&b.removeEventListener("resize",r,s.listenOpts.passive),b=void 0)}function g(){m(),o&&o.contentDocument&&(b=o.contentDocument.defaultView,b.addEventListener("resize",r,s.listenOpts.passive),d())}return(0,l.bv)((()=>{(0,l.Y3)((()=>{o=v.$el,o&&g()}))})),(0,l.Jd)(m),v.trigger=r,()=>{if(!0===p.value)return(0,l.h)("object",{style:c.style,tabindex:-1,type:"text/html",data:c.url,"aria-hidden":"true",onLoad:g})}}}})},5457:(e,t,o)=>{o.d(t,{Z:()=>u});var l=o(6929),n=o(859),i=o(8679),a=o(4290);const{passive:r}=a.listenOpts,s=["both","horizontal","vertical"],u=(0,n.L)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>s.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n,s,u=null;function c(){null!==u&&u();const l=Math.max(0,(0,i.u3)(n)),a=(0,i.OI)(n),r={top:l-o.position.top,left:a-o.position.left};if("vertical"===e.axis&&0===r.top||"horizontal"===e.axis&&0===r.left)return;const s=Math.abs(r.top)>=Math.abs(r.left)?r.top<0?"up":"down":r.left<0?"left":"right";o.position={top:l,left:a},o.directionChanged=o.direction!==s,o.delta=r,!0===o.directionChanged&&(o.direction=s,o.inflectionPoint=o.position),t("scroll",{...o})}function d(){n=(0,i.b0)(s,e.scrollTarget),n.addEventListener("scroll",f,r),f(!0)}function v(){void 0!==n&&(n.removeEventListener("scroll",f,r),n=void 0)}function f(t){if(!0===t||0===e.debounce||"0"===e.debounce)c();else if(null===u){const[t,o]=e.debounce?[setTimeout(c,e.debounce),clearTimeout]:[requestAnimationFrame(c),cancelAnimationFrame];u=()=>{o(t),u=null}}}(0,l.YP)((()=>e.scrollTarget),(()=>{v(),d()}));const{proxy:h}=(0,l.FN)();return(0,l.YP)((()=>h.$q.lang.rtl),c),(0,l.bv)((()=>{s=h.$el.parentNode,d()})),(0,l.Jd)((()=>{null!==u&&u(),v()})),Object.assign(h,{trigger:f,getPosition:()=>o}),a.ZT}})},9403:(e,t,o)=>{o.d(t,{Z:()=>a});var l=o(6929),n=o(859);const i=(0,l.h)("div",{class:"q-space"}),a=(0,n.L)({name:"QSpace",setup(){return()=>i}})},6289:(e,t,o)=>{o.d(t,{Z:()=>w});var l=o(6929),n=o(4927),i=(o(5954),o(7218)),a=o(1909),r=o(1458),s=o(8192),u=o(9352),c=o(7623),d=o(4290),v=o(9580),f=o(8102);let h=0;const p=["click","keydown"],b={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>"t_"+h++},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function m(e,t,o,n){const h=(0,l.f3)(c.Nd,c.qO);if(h===c.qO)return console.error("QTab/QRouteTab component needs to be child of QTabs"),c.qO;const{proxy:p}=(0,l.FN)(),b=(0,i.iH)(null),m=(0,i.iH)(null),g=(0,i.iH)(null),w=(0,l.Fl)((()=>!0!==e.disable&&!1!==e.ripple&&Object.assign({keyCodes:[13,32],early:!0},!0===e.ripple?{}:e.ripple))),y=(0,l.Fl)((()=>h.currentModel.value===e.name)),q=(0,l.Fl)((()=>"q-tab relative-position self-stretch flex flex-center text-center"+(!0===y.value?" q-tab--active"+(h.tabProps.value.activeClass?" "+h.tabProps.value.activeClass:"")+(h.tabProps.value.activeColor?` text-${h.tabProps.value.activeColor}`:"")+(h.tabProps.value.activeBgColor?` bg-${h.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&!1===h.tabProps.value.inlineLabel?" q-tab--full":"")+(!0===e.noCaps||!0===h.tabProps.value.noCaps?" q-tab--no-caps":"")+(!0===e.disable?" disabled":" q-focusable q-hoverable cursor-pointer")+(void 0!==n?n.linkClass.value:""))),T=(0,l.Fl)((()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(!0===h.tabProps.value.inlineLabel?"row no-wrap q-tab__content--inline":"column")+(void 0!==e.contentClass?` ${e.contentClass}`:""))),L=(0,l.Fl)((()=>!0===e.disable||!0===h.hasFocus.value||!1===y.value&&!0===h.hasActiveTab.value?-1:e.tabindex||0));function F(t,l){if(!0!==l&&null!==b.value&&b.value.focus(),!0!==e.disable){if(void 0===n)return h.updateModel({name:e.name}),void o("click",t);if(!0===n.hasRouterLink.value){const l=(o={})=>{let l;const i=void 0===o.to||!0===(0,f.xb)(o.to,e.to)?h.avoidRouteWatcher=(0,v.Z)():null;return n.navigateToRouterLink(t,{...o,returnRouterError:!0}).catch((e=>{l=e})).then((t=>{if(i===h.avoidRouteWatcher&&(h.avoidRouteWatcher=!1,void 0!==l||void 0!==t&&!0!==t.message.startsWith("Avoided redundant navigation")||h.updateModel({name:e.name})),!0===o.returnRouterError)return void 0!==l?Promise.reject(l):t}))};return o("click",t,l),void(!0!==t.defaultPrevented&&l())}o("click",t)}else void 0!==n&&!0===n.hasRouterLink.value&&(0,d.NS)(t)}function C(e){(0,u.So)(e,[13,32])?F(e,!0):!0!==(0,u.Wm)(e)&&e.keyCode>=35&&e.keyCode<=40&&!0!==e.altKey&&!0!==e.metaKey&&!0===h.onKbdNavigate(e.keyCode,p.$el)&&(0,d.NS)(e),o("keydown",e)}function x(){const o=h.tabProps.value.narrowIndicator,n=[],i=(0,l.h)("div",{ref:g,class:["q-tab__indicator",h.tabProps.value.indicatorClass]});void 0!==e.icon&&n.push((0,l.h)(a.Z,{class:"q-tab__icon",name:e.icon})),void 0!==e.label&&n.push((0,l.h)("div",{class:"q-tab__label"},e.label)),!1!==e.alert&&n.push(void 0!==e.alertIcon?(0,l.h)(a.Z,{class:"q-tab__alert-icon",color:!0!==e.alert?e.alert:void 0,name:e.alertIcon}):(0,l.h)("div",{class:"q-tab__alert"+(!0!==e.alert?` text-${e.alert}`:"")})),!0===o&&n.push(i);const r=[(0,l.h)("div",{class:"q-focus-helper",tabindex:-1,ref:b}),(0,l.h)("div",{class:T.value},(0,s.vs)(t.default,n))];return!1===o&&r.push(i),r}const P={name:(0,l.Fl)((()=>e.name)),rootRef:m,tabIndicatorRef:g,routeData:n};function _(t,o){const n={ref:m,class:q.value,tabindex:L.value,role:"tab","aria-selected":!0===y.value?"true":"false","aria-disabled":!0===e.disable?"true":void 0,onClick:F,onKeydown:C,...o};return(0,l.wy)((0,l.h)(t,n,x()),[[r.Z,w.value]])}return(0,l.Jd)((()=>{h.unregisterTab(P)})),(0,l.bv)((()=>{h.registerTab(P)})),{renderTab:_,$tabs:h}}var g=o(859);const w=(0,g.L)({name:"QRouteTab",props:{...n.$,...b},emits:p,setup(e,{slots:t,emit:o}){const i=(0,n.Z)({useDisableForRouterLinkProps:!1}),{renderTab:a,$tabs:r}=m(e,t,o,{exact:(0,l.Fl)((()=>e.exact)),...i});return(0,l.YP)((()=>`${e.name} | ${e.exact} | ${(i.resolvedLink.value||{}).href}`),(()=>{r.verifyRouteModel()})),()=>a(i.linkTag.value,i.linkAttrs.value)}})},4411:(e,t,o)=>{o.d(t,{Z:()=>p});o(5954);var l=o(6929),n=o(7218),i=o(1909),a=o(8532),r=o(7933),s=o(9345),u=o(859),c=o(8192),d=o(7623),v=o(8925);function f(e,t,o){const l=!0===o?["left","right"]:["top","bottom"];return`absolute-${!0===t?l[0]:l[1]}${e?` text-${e}`:""}`}const h=["left","center","right","justify"],p=(0,u.L)({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>h.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:t,emit:o}){const{proxy:u}=(0,l.FN)(),{$q:h}=u,{registerTick:p}=(0,r.Z)(),{registerTick:b}=(0,r.Z)(),{registerTick:m}=(0,r.Z)(),{registerTimeout:g,removeTimeout:w}=(0,s.Z)(),{registerTimeout:y,removeTimeout:q}=(0,s.Z)(),T=(0,n.iH)(null),L=(0,n.iH)(null),F=(0,n.iH)(e.modelValue),C=(0,n.iH)(!1),x=(0,n.iH)(!0),P=(0,n.iH)(!1),_=(0,n.iH)(!1),k=[],$=(0,n.iH)(0),R=(0,n.iH)(!1);let H,S=null,z=null;const O=(0,l.Fl)((()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:f(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps}))),B=(0,l.Fl)((()=>{const e=$.value,t=F.value;for(let o=0;o<e;o++)if(k[o].name.value===t)return!0;return!1})),N=(0,l.Fl)((()=>{const t=!0===C.value?"left":!0===_.value?"justify":e.align;return`q-tabs__content--align-${t}`})),Z=(0,l.Fl)((()=>`q-tabs row no-wrap items-center q-tabs--${!0===C.value?"":"not-"}scrollable q-tabs--`+(!0===e.vertical?"vertical":"horizontal")+" q-tabs__arrows--"+(!0===e.outsideArrows?"outside":"inside")+` q-tabs--mobile-with${!0===e.mobileArrows?"":"out"}-arrows`+(!0===e.dense?" q-tabs--dense":"")+(!0===e.shrink?" col-shrink":"")+(!0===e.stretch?" self-stretch":""))),E=(0,l.Fl)((()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+N.value+(void 0!==e.contentClass?` ${e.contentClass}`:""))),M=(0,l.Fl)((()=>!0===e.vertical?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"})),Y=(0,l.Fl)((()=>!0!==e.vertical&&!0===h.lang.rtl)),I=(0,l.Fl)((()=>!1===v.e&&!0===Y.value));function V({name:t,setCurrent:l,skipEmit:n}){F.value!==t&&(!0!==n&&void 0!==e["onUpdate:modelValue"]&&o("update:modelValue",t),!0!==l&&void 0!==e["onUpdate:modelValue"]||(Q(F.value,t),F.value=t))}function A(){p((()=>{D({width:T.value.offsetWidth,height:T.value.offsetHeight})}))}function D(t){if(void 0===M.value||null===L.value)return;const o=t[M.value.container],l=Math.min(L.value[M.value.scroll],Array.prototype.reduce.call(L.value.children,((e,t)=>e+(t[M.value.content]||0)),0)),n=o>0&&l>o;C.value=n,!0===n&&b(j),_.value=o<parseInt(e.breakpoint,10)}function Q(t,o){const l=void 0!==t&&null!==t&&""!==t?k.find((e=>e.name.value===t)):null,n=void 0!==o&&null!==o&&""!==o?k.find((e=>e.name.value===o)):null;if(l&&n){const t=l.tabIndicatorRef.value,o=n.tabIndicatorRef.value;null!==S&&(clearTimeout(S),S=null),t.style.transition="none",t.style.transform="none",o.style.transition="none",o.style.transform="none";const i=t.getBoundingClientRect(),a=o.getBoundingClientRect();o.style.transform=!0===e.vertical?`translate3d(0,${i.top-a.top}px,0) scale3d(1,${a.height?i.height/a.height:1},1)`:`translate3d(${i.left-a.left}px,0,0) scale3d(${a.width?i.width/a.width:1},1,1)`,m((()=>{S=setTimeout((()=>{S=null,o.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",o.style.transform="none"}),70)}))}n&&!0===C.value&&W(n.rootRef.value)}function W(t){const{left:o,width:l,top:n,height:i}=L.value.getBoundingClientRect(),a=t.getBoundingClientRect();let r=!0===e.vertical?a.top-n:a.left-o;if(r<0)return L.value[!0===e.vertical?"scrollTop":"scrollLeft"]+=Math.floor(r),void j();r+=!0===e.vertical?a.height-i:a.width-l,r>0&&(L.value[!0===e.vertical?"scrollTop":"scrollLeft"]+=Math.ceil(r),j())}function j(){const t=L.value;if(null===t)return;const o=t.getBoundingClientRect(),l=!0===e.vertical?t.scrollTop:Math.abs(t.scrollLeft);!0===Y.value?(x.value=Math.ceil(l+o.width)<t.scrollWidth-1,P.value=l>0):(x.value=l>0,P.value=!0===e.vertical?Math.ceil(l+o.height)<t.scrollHeight:Math.ceil(l+o.width)<t.scrollWidth)}function J(e){null!==z&&clearInterval(z),z=setInterval((()=>{!0===te(e)&&U()}),5)}function K(){J(!0===I.value?Number.MAX_SAFE_INTEGER:0)}function X(){J(!0===I.value?0:Number.MAX_SAFE_INTEGER)}function U(){null!==z&&(clearInterval(z),z=null)}function G(t,o){const l=Array.prototype.filter.call(L.value.children,(e=>e===o||e.matches&&!0===e.matches(".q-tab.q-focusable"))),n=l.length;if(0===n)return;if(36===t)return W(l[0]),l[0].focus(),!0;if(35===t)return W(l[n-1]),l[n-1].focus(),!0;const i=t===(!0===e.vertical?38:37),a=t===(!0===e.vertical?40:39),r=!0===i?-1:!0===a?1:void 0;if(void 0!==r){const e=!0===Y.value?-1:1,t=l.indexOf(o)+r*e;return t>=0&&t<n&&(W(l[t]),l[t].focus({preventScroll:!0})),!0}}(0,l.YP)(Y,j),(0,l.YP)((()=>e.modelValue),(e=>{V({name:e,setCurrent:!0,skipEmit:!0})})),(0,l.YP)((()=>e.outsideArrows),A);const ee=(0,l.Fl)((()=>!0===I.value?{get:e=>Math.abs(e.scrollLeft),set:(e,t)=>{e.scrollLeft=-t}}:!0===e.vertical?{get:e=>e.scrollTop,set:(e,t)=>{e.scrollTop=t}}:{get:e=>e.scrollLeft,set:(e,t)=>{e.scrollLeft=t}}));function te(e){const t=L.value,{get:o,set:l}=ee.value;let n=!1,i=o(t);const a=e<i?-1:1;return i+=5*a,i<0?(n=!0,i=0):(-1===a&&i<=e||1===a&&i>=e)&&(n=!0,i=e),l(t,i),j(),n}function oe(e,t){for(const o in e)if(e[o]!==t[o])return!1;return!0}function le(){let e=null,t={matchedLen:0,queryDiff:9999,hrefLen:0};const o=k.filter((e=>void 0!==e.routeData&&!0===e.routeData.hasRouterLink.value)),{hash:l,query:n}=u.$route,i=Object.keys(n).length;for(const a of o){const o=!0===a.routeData.exact.value;if(!0!==a.routeData[!0===o?"linkIsExactActive":"linkIsActive"].value)continue;const{hash:r,query:s,matched:u,href:c}=a.routeData.resolvedLink.value,d=Object.keys(s).length;if(!0===o){if(r!==l)continue;if(d!==i||!1===oe(n,s))continue;e=a.name.value;break}if(""!==r&&r!==l)continue;if(0!==d&&!1===oe(s,n))continue;const v={matchedLen:u.length,queryDiff:i-d,hrefLen:c.length-r.length};if(v.matchedLen>t.matchedLen)e=a.name.value,t=v;else if(v.matchedLen===t.matchedLen){if(v.queryDiff<t.queryDiff)e=a.name.value,t=v;else if(v.queryDiff!==t.queryDiff)continue;v.hrefLen>t.hrefLen&&(e=a.name.value,t=v)}}null===e&&!0===k.some((e=>void 0===e.routeData&&e.name.value===F.value))||V({name:e,setCurrent:!0})}function ne(e){if(w(),!0!==R.value&&null!==T.value&&e.target&&"function"===typeof e.target.closest){const t=e.target.closest(".q-tab");t&&!0===T.value.contains(t)&&(R.value=!0,!0===C.value&&W(t))}}function ie(){g((()=>{R.value=!1}),30)}function ae(){!1===ce.avoidRouteWatcher?y(le):q()}function re(){if(void 0===H){const e=(0,l.YP)((()=>u.$route.fullPath),ae);H=()=>{e(),H=void 0}}}function se(e){k.push(e),$.value++,A(),void 0===e.routeData||void 0===u.$route?y((()=>{if(!0===C.value){const e=F.value,t=void 0!==e&&null!==e&&""!==e?k.find((t=>t.name.value===e)):null;t&&W(t.rootRef.value)}})):(re(),!0===e.routeData.hasRouterLink.value&&ae())}function ue(e){k.splice(k.indexOf(e),1),$.value--,A(),void 0!==H&&void 0!==e.routeData&&(!0===k.every((e=>void 0===e.routeData))&&H(),ae())}const ce={currentModel:F,tabProps:O,hasFocus:R,hasActiveTab:B,registerTab:se,unregisterTab:ue,verifyRouteModel:ae,updateModel:V,onKbdNavigate:G,avoidRouteWatcher:!1};function de(){null!==S&&clearTimeout(S),U(),void 0!==H&&H()}let ve;return(0,l.JJ)(d.Nd,ce),(0,l.Jd)(de),(0,l.se)((()=>{ve=void 0!==H,de()})),(0,l.dl)((()=>{!0===ve&&re(),A()})),()=>(0,l.h)("div",{ref:T,class:Z.value,role:"tablist",onFocusin:ne,onFocusout:ie},[(0,l.h)(a.Z,{onResize:D}),(0,l.h)("div",{ref:L,class:E.value,onScroll:j},(0,c.KR)(t.default)),(0,l.h)(i.Z,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(!0===x.value?"":" q-tabs__arrow--faded"),name:e.leftIcon||h.iconSet.tabs[!0===e.vertical?"up":"left"],onMousedownPassive:K,onTouchstartPassive:K,onMouseupPassive:U,onMouseleavePassive:U,onTouchendPassive:U}),(0,l.h)(i.Z,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(!0===P.value?"":" q-tabs__arrow--faded"),name:e.rightIcon||h.iconSet.tabs[!0===e.vertical?"down":"right"],onMousedownPassive:X,onTouchstartPassive:X,onMouseupPassive:U,onMouseleavePassive:U,onTouchendPassive:U})])}})},6434:(e,t,o)=>{o.d(t,{Z:()=>a});var l=o(6929),n=o(859),i=o(8192);const a=(0,n.L)({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const o=(0,l.Fl)((()=>"q-toolbar row no-wrap items-center"+(!0===e.inset?" q-toolbar--inset":"")));return()=>(0,l.h)("div",{class:o.value,role:"toolbar"},(0,i.KR)(t.default))}})},2397:(e,t,o)=>{o.d(t,{Z:()=>a});var l=o(6929),n=o(859),i=o(8192);const a=(0,n.L)({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const o=(0,l.Fl)((()=>"q-toolbar__title ellipsis"+(!0===e.shrink?" col-shrink":"")));return()=>(0,l.h)("div",{class:o.value},(0,i.KR)(t.default))}})},7933:(e,t,o)=>{o.d(t,{Z:()=>i});var l=o(6929),n=o(8586);function i(){let e;const t=(0,l.FN)();function o(){e=void 0}return(0,l.se)(o),(0,l.Jd)(o),{removeTick:o,registerTick(o){e=o,(0,l.Y3)((()=>{e===o&&(!1===(0,n.$D)(t)&&e(),e=void 0)}))}}}},9345:(e,t,o)=>{o.d(t,{Z:()=>i});var l=o(6929),n=o(8586);function i(){let e=null;const t=(0,l.FN)();function o(){null!==e&&(clearTimeout(e),e=null)}return(0,l.se)(o),(0,l.Jd)(o),{removeTimeout:o,registerTimeout(l,i){o(e),!1===(0,n.$D)(t)&&(e=setTimeout(l,i))}}}},1944:(e,t,o)=>{o.d(t,{Z:()=>i});var l=o(6929),n=o(7623);function i(){return(0,l.f3)(n.Ng)}},8925:(e,t,o)=>{o.d(t,{e:()=>l});let l=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,l=e.scrollLeft>=0,e.remove()}},8679:(e,t,o)=>{o.d(t,{OI:()=>r,QA:()=>b,b0:()=>i,f3:()=>v,ik:()=>f,np:()=>p,u3:()=>a});var l=o(4618);const n=[null,document,document.body,document.scrollingElement,document.documentElement];function i(e,t){let o=(0,l.sb)(t);if(void 0===o){if(void 0===e||null===e)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return n.includes(o)?window:o}function a(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function r(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function s(e,t,o=0){const l=void 0===arguments[3]?performance.now():arguments[3],n=a(e);o<=0?n!==t&&c(e,t):requestAnimationFrame((i=>{const a=i-l,r=n+(t-n)/Math.max(a,o)*a;c(e,r),r!==t&&s(e,t,o-a,i)}))}function u(e,t,o=0){const l=void 0===arguments[3]?performance.now():arguments[3],n=r(e);o<=0?n!==t&&d(e,t):requestAnimationFrame((i=>{const a=i-l,r=n+(t-n)/Math.max(a,o)*a;d(e,r),r!==t&&u(e,t,o-a,i)}))}function c(e,t){e!==window?e.scrollTop=t:window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,t)}function d(e,t){e!==window?e.scrollLeft=t:window.scrollTo(t,window.pageYOffset||window.scrollY||document.body.scrollTop||0)}function v(e,t,o){o?s(e,t,o):c(e,t)}function f(e,t,o){o?u(e,t,o):d(e,t)}let h;function p(){if(void 0!==h)return h;const e=document.createElement("p"),t=document.createElement("div");(0,l.iv)(e,{width:"100%",height:"200px"}),(0,l.iv)(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),h=o-n,h}function b(e,t=!0){return!(!e||e.nodeType!==Node.ELEMENT_NODE)&&(t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"])))}}}]);