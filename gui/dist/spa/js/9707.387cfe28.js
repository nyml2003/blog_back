"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[9707],{6289:(e,t,a)=>{a.d(t,{Z:()=>q});var o=a(6929),l=a(4927),n=(a(5954),a(7218)),i=a(1909),r=a(1458),s=a(8192),u=a(9352),c=a(7623),v=a(4290),d=a(9580),f=a(8102);let h=0;const b=["click","keydown"],p={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>"t_"+h++},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function m(e,t,a,l){const h=(0,o.f3)(c.Nd,c.qO);if(h===c.qO)return console.error("QTab/QRouteTab component needs to be child of QTabs"),c.qO;const{proxy:b}=(0,o.FN)(),p=(0,n.iH)(null),m=(0,n.iH)(null),g=(0,n.iH)(null),q=(0,o.Fl)((()=>!0!==e.disable&&!1!==e.ripple&&Object.assign({keyCodes:[13,32],early:!0},!0===e.ripple?{}:e.ripple))),w=(0,o.Fl)((()=>h.currentModel.value===e.name)),C=(0,o.Fl)((()=>"q-tab relative-position self-stretch flex flex-center text-center"+(!0===w.value?" q-tab--active"+(h.tabProps.value.activeClass?" "+h.tabProps.value.activeClass:"")+(h.tabProps.value.activeColor?` text-${h.tabProps.value.activeColor}`:"")+(h.tabProps.value.activeBgColor?` bg-${h.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&!1===h.tabProps.value.inlineLabel?" q-tab--full":"")+(!0===e.noCaps||!0===h.tabProps.value.noCaps?" q-tab--no-caps":"")+(!0===e.disable?" disabled":" q-focusable q-hoverable cursor-pointer")+(void 0!==l?l.linkClass.value:""))),y=(0,o.Fl)((()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(!0===h.tabProps.value.inlineLabel?"row no-wrap q-tab__content--inline":"column")+(void 0!==e.contentClass?` ${e.contentClass}`:""))),k=(0,o.Fl)((()=>!0===e.disable||!0===h.hasFocus.value||!1===w.value&&!0===h.hasActiveTab.value?-1:e.tabindex||0));function T(t,o){if(!0!==o&&null!==p.value&&p.value.focus(),!0!==e.disable){if(void 0===l)return h.updateModel({name:e.name}),void a("click",t);if(!0===l.hasRouterLink.value){const o=(a={})=>{let o;const n=void 0===a.to||!0===(0,f.xb)(a.to,e.to)?h.avoidRouteWatcher=(0,d.Z)():null;return l.navigateToRouterLink(t,{...a,returnRouterError:!0}).catch((e=>{o=e})).then((t=>{if(n===h.avoidRouteWatcher&&(h.avoidRouteWatcher=!1,void 0!==o||void 0!==t&&!0!==t.message.startsWith("Avoided redundant navigation")||h.updateModel({name:e.name})),!0===a.returnRouterError)return void 0!==o?Promise.reject(o):t}))};return a("click",t,o),void(!0!==t.defaultPrevented&&o())}a("click",t)}else void 0!==l&&!0===l.hasRouterLink.value&&(0,v.NS)(t)}function _(e){(0,u.So)(e,[13,32])?T(e,!0):!0!==(0,u.Wm)(e)&&e.keyCode>=35&&e.keyCode<=40&&!0!==e.altKey&&!0!==e.metaKey&&!0===h.onKbdNavigate(e.keyCode,b.$el)&&(0,v.NS)(e),a("keydown",e)}function L(){const a=h.tabProps.value.narrowIndicator,l=[],n=(0,o.h)("div",{ref:g,class:["q-tab__indicator",h.tabProps.value.indicatorClass]});void 0!==e.icon&&l.push((0,o.h)(i.Z,{class:"q-tab__icon",name:e.icon})),void 0!==e.label&&l.push((0,o.h)("div",{class:"q-tab__label"},e.label)),!1!==e.alert&&l.push(void 0!==e.alertIcon?(0,o.h)(i.Z,{class:"q-tab__alert-icon",color:!0!==e.alert?e.alert:void 0,name:e.alertIcon}):(0,o.h)("div",{class:"q-tab__alert"+(!0!==e.alert?` text-${e.alert}`:"")})),!0===a&&l.push(n);const r=[(0,o.h)("div",{class:"q-focus-helper",tabindex:-1,ref:p}),(0,o.h)("div",{class:y.value},(0,s.vs)(t.default,l))];return!1===a&&r.push(n),r}const R={name:(0,o.Fl)((()=>e.name)),rootRef:m,tabIndicatorRef:g,routeData:l};function P(t,a){const l={ref:m,class:C.value,tabindex:k.value,role:"tab","aria-selected":!0===w.value?"true":"false","aria-disabled":!0===e.disable?"true":void 0,onClick:T,onKeydown:_,...a};return(0,o.wy)((0,o.h)(t,l,L()),[[r.Z,q.value]])}return(0,o.Jd)((()=>{h.unregisterTab(R)})),(0,o.bv)((()=>{h.registerTab(R)})),{renderTab:P,$tabs:h}}var g=a(859);const q=(0,g.L)({name:"QRouteTab",props:{...l.$,...p},emits:b,setup(e,{slots:t,emit:a}){const n=(0,l.Z)({useDisableForRouterLinkProps:!1}),{renderTab:i,$tabs:r}=m(e,t,a,{exact:(0,o.Fl)((()=>e.exact)),...n});return(0,o.YP)((()=>`${e.name} | ${e.exact} | ${(n.resolvedLink.value||{}).href}`),(()=>{r.verifyRouteModel()})),()=>i(n.linkTag.value,n.linkAttrs.value)}})},4411:(e,t,a)=>{a.d(t,{Z:()=>b});a(5954);var o=a(6929),l=a(7218),n=a(1909),i=a(8532),r=a(7933),s=a(9345),u=a(859),c=a(8192),v=a(7623),d=a(8925);function f(e,t,a){const o=!0===a?["left","right"]:["top","bottom"];return`absolute-${!0===t?o[0]:o[1]}${e?` text-${e}`:""}`}const h=["left","center","right","justify"],b=(0,u.L)({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>h.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:t,emit:a}){const{proxy:u}=(0,o.FN)(),{$q:h}=u,{registerTick:b}=(0,r.Z)(),{registerTick:p}=(0,r.Z)(),{registerTick:m}=(0,r.Z)(),{registerTimeout:g,removeTimeout:q}=(0,s.Z)(),{registerTimeout:w,removeTimeout:C}=(0,s.Z)(),y=(0,l.iH)(null),k=(0,l.iH)(null),T=(0,l.iH)(e.modelValue),_=(0,l.iH)(!1),L=(0,l.iH)(!0),R=(0,l.iH)(!1),P=(0,l.iH)(!1),F=[],x=(0,l.iH)(0),$=(0,l.iH)(!1);let S,B=null,I=null;const M=(0,o.Fl)((()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:f(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps}))),A=(0,o.Fl)((()=>{const e=x.value,t=T.value;for(let a=0;a<e;a++)if(F[a].name.value===t)return!0;return!1})),D=(0,o.Fl)((()=>{const t=!0===_.value?"left":!0===P.value?"justify":e.align;return`q-tabs__content--align-${t}`})),N=(0,o.Fl)((()=>`q-tabs row no-wrap items-center q-tabs--${!0===_.value?"":"not-"}scrollable q-tabs--`+(!0===e.vertical?"vertical":"horizontal")+" q-tabs__arrows--"+(!0===e.outsideArrows?"outside":"inside")+` q-tabs--mobile-with${!0===e.mobileArrows?"":"out"}-arrows`+(!0===e.dense?" q-tabs--dense":"")+(!0===e.shrink?" col-shrink":"")+(!0===e.stretch?" self-stretch":""))),Z=(0,o.Fl)((()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+D.value+(void 0!==e.contentClass?` ${e.contentClass}`:""))),H=(0,o.Fl)((()=>!0===e.vertical?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"})),E=(0,o.Fl)((()=>!0!==e.vertical&&!0===h.lang.rtl)),W=(0,o.Fl)((()=>!1===d.e&&!0===E.value));function O({name:t,setCurrent:o,skipEmit:l}){T.value!==t&&(!0!==l&&void 0!==e["onUpdate:modelValue"]&&a("update:modelValue",t),!0!==o&&void 0!==e["onUpdate:modelValue"]||(V(T.value,t),T.value=t))}function j(){b((()=>{K({width:y.value.offsetWidth,height:y.value.offsetHeight})}))}function K(t){if(void 0===H.value||null===k.value)return;const a=t[H.value.container],o=Math.min(k.value[H.value.scroll],Array.prototype.reduce.call(k.value.children,((e,t)=>e+(t[H.value.content]||0)),0)),l=a>0&&o>a;_.value=l,!0===l&&p(Y),P.value=a<parseInt(e.breakpoint,10)}function V(t,a){const o=void 0!==t&&null!==t&&""!==t?F.find((e=>e.name.value===t)):null,l=void 0!==a&&null!==a&&""!==a?F.find((e=>e.name.value===a)):null;if(o&&l){const t=o.tabIndicatorRef.value,a=l.tabIndicatorRef.value;null!==B&&(clearTimeout(B),B=null),t.style.transition="none",t.style.transform="none",a.style.transition="none",a.style.transform="none";const n=t.getBoundingClientRect(),i=a.getBoundingClientRect();a.style.transform=!0===e.vertical?`translate3d(0,${n.top-i.top}px,0) scale3d(1,${i.height?n.height/i.height:1},1)`:`translate3d(${n.left-i.left}px,0,0) scale3d(${i.width?n.width/i.width:1},1,1)`,m((()=>{B=setTimeout((()=>{B=null,a.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",a.style.transform="none"}),70)}))}l&&!0===_.value&&Q(l.rootRef.value)}function Q(t){const{left:a,width:o,top:l,height:n}=k.value.getBoundingClientRect(),i=t.getBoundingClientRect();let r=!0===e.vertical?i.top-l:i.left-a;if(r<0)return k.value[!0===e.vertical?"scrollTop":"scrollLeft"]+=Math.floor(r),void Y();r+=!0===e.vertical?i.height-n:i.width-o,r>0&&(k.value[!0===e.vertical?"scrollTop":"scrollLeft"]+=Math.ceil(r),Y())}function Y(){const t=k.value;if(null===t)return;const a=t.getBoundingClientRect(),o=!0===e.vertical?t.scrollTop:Math.abs(t.scrollLeft);!0===E.value?(L.value=Math.ceil(o+a.width)<t.scrollWidth-1,R.value=o>0):(L.value=o>0,R.value=!0===e.vertical?Math.ceil(o+a.height)<t.scrollHeight:Math.ceil(o+a.width)<t.scrollWidth)}function J(e){null!==I&&clearInterval(I),I=setInterval((()=>{!0===te(e)&&G()}),5)}function z(){J(!0===W.value?Number.MAX_SAFE_INTEGER:0)}function U(){J(!0===W.value?0:Number.MAX_SAFE_INTEGER)}function G(){null!==I&&(clearInterval(I),I=null)}function X(t,a){const o=Array.prototype.filter.call(k.value.children,(e=>e===a||e.matches&&!0===e.matches(".q-tab.q-focusable"))),l=o.length;if(0===l)return;if(36===t)return Q(o[0]),o[0].focus(),!0;if(35===t)return Q(o[l-1]),o[l-1].focus(),!0;const n=t===(!0===e.vertical?38:37),i=t===(!0===e.vertical?40:39),r=!0===n?-1:!0===i?1:void 0;if(void 0!==r){const e=!0===E.value?-1:1,t=o.indexOf(a)+r*e;return t>=0&&t<l&&(Q(o[t]),o[t].focus({preventScroll:!0})),!0}}(0,o.YP)(E,Y),(0,o.YP)((()=>e.modelValue),(e=>{O({name:e,setCurrent:!0,skipEmit:!0})})),(0,o.YP)((()=>e.outsideArrows),j);const ee=(0,o.Fl)((()=>!0===W.value?{get:e=>Math.abs(e.scrollLeft),set:(e,t)=>{e.scrollLeft=-t}}:!0===e.vertical?{get:e=>e.scrollTop,set:(e,t)=>{e.scrollTop=t}}:{get:e=>e.scrollLeft,set:(e,t)=>{e.scrollLeft=t}}));function te(e){const t=k.value,{get:a,set:o}=ee.value;let l=!1,n=a(t);const i=e<n?-1:1;return n+=5*i,n<0?(l=!0,n=0):(-1===i&&n<=e||1===i&&n>=e)&&(l=!0,n=e),o(t,n),Y(),l}function ae(e,t){for(const a in e)if(e[a]!==t[a])return!1;return!0}function oe(){let e=null,t={matchedLen:0,queryDiff:9999,hrefLen:0};const a=F.filter((e=>void 0!==e.routeData&&!0===e.routeData.hasRouterLink.value)),{hash:o,query:l}=u.$route,n=Object.keys(l).length;for(const i of a){const a=!0===i.routeData.exact.value;if(!0!==i.routeData[!0===a?"linkIsExactActive":"linkIsActive"].value)continue;const{hash:r,query:s,matched:u,href:c}=i.routeData.resolvedLink.value,v=Object.keys(s).length;if(!0===a){if(r!==o)continue;if(v!==n||!1===ae(l,s))continue;e=i.name.value;break}if(""!==r&&r!==o)continue;if(0!==v&&!1===ae(s,l))continue;const d={matchedLen:u.length,queryDiff:n-v,hrefLen:c.length-r.length};if(d.matchedLen>t.matchedLen)e=i.name.value,t=d;else if(d.matchedLen===t.matchedLen){if(d.queryDiff<t.queryDiff)e=i.name.value,t=d;else if(d.queryDiff!==t.queryDiff)continue;d.hrefLen>t.hrefLen&&(e=i.name.value,t=d)}}null===e&&!0===F.some((e=>void 0===e.routeData&&e.name.value===T.value))||O({name:e,setCurrent:!0})}function le(e){if(q(),!0!==$.value&&null!==y.value&&e.target&&"function"===typeof e.target.closest){const t=e.target.closest(".q-tab");t&&!0===y.value.contains(t)&&($.value=!0,!0===_.value&&Q(t))}}function ne(){g((()=>{$.value=!1}),30)}function ie(){!1===ce.avoidRouteWatcher?w(oe):C()}function re(){if(void 0===S){const e=(0,o.YP)((()=>u.$route.fullPath),ie);S=()=>{e(),S=void 0}}}function se(e){F.push(e),x.value++,j(),void 0===e.routeData||void 0===u.$route?w((()=>{if(!0===_.value){const e=T.value,t=void 0!==e&&null!==e&&""!==e?F.find((t=>t.name.value===e)):null;t&&Q(t.rootRef.value)}})):(re(),!0===e.routeData.hasRouterLink.value&&ie())}function ue(e){F.splice(F.indexOf(e),1),x.value--,j(),void 0!==S&&void 0!==e.routeData&&(!0===F.every((e=>void 0===e.routeData))&&S(),ie())}const ce={currentModel:T,tabProps:M,hasFocus:$,hasActiveTab:A,registerTab:se,unregisterTab:ue,verifyRouteModel:ie,updateModel:O,onKbdNavigate:X,avoidRouteWatcher:!1};function ve(){null!==B&&clearTimeout(B),G(),void 0!==S&&S()}let de;return(0,o.JJ)(v.Nd,ce),(0,o.Jd)(ve),(0,o.se)((()=>{de=void 0!==S,ve()})),(0,o.dl)((()=>{!0===de&&re(),j()})),()=>(0,o.h)("div",{ref:y,class:N.value,role:"tablist",onFocusin:le,onFocusout:ne},[(0,o.h)(i.Z,{onResize:K}),(0,o.h)("div",{ref:k,class:Z.value,onScroll:Y},(0,c.KR)(t.default)),(0,o.h)(n.Z,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(!0===L.value?"":" q-tabs__arrow--faded"),name:e.leftIcon||h.iconSet.tabs[!0===e.vertical?"up":"left"],onMousedownPassive:z,onTouchstartPassive:z,onMouseupPassive:G,onMouseleavePassive:G,onTouchendPassive:G}),(0,o.h)(n.Z,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(!0===R.value?"":" q-tabs__arrow--faded"),name:e.rightIcon||h.iconSet.tabs[!0===e.vertical?"down":"right"],onMousedownPassive:U,onTouchstartPassive:U,onMouseupPassive:G,onMouseleavePassive:G,onTouchendPassive:G})])}})},6434:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(6929),l=a(859),n=a(8192);const i=(0,l.L)({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const a=(0,o.Fl)((()=>"q-toolbar row no-wrap items-center"+(!0===e.inset?" q-toolbar--inset":"")));return()=>(0,o.h)("div",{class:a.value,role:"toolbar"},(0,n.KR)(t.default))}})},7933:(e,t,a)=>{a.d(t,{Z:()=>n});var o=a(6929),l=a(8586);function n(){let e;const t=(0,o.FN)();function a(){e=void 0}return(0,o.se)(a),(0,o.Jd)(a),{removeTick:a,registerTick(a){e=a,(0,o.Y3)((()=>{e===a&&(!1===(0,l.$D)(t)&&e(),e=void 0)}))}}}},8925:(e,t,a)=>{a.d(t,{e:()=>o});let o=!1;{const e=document.createElement("div");e.setAttribute("dir","rtl"),Object.assign(e.style,{width:"1px",height:"1px",overflow:"auto"});const t=document.createElement("div");Object.assign(t.style,{width:"1000px",height:"1px"}),document.body.appendChild(e),e.appendChild(t),e.scrollLeft=-1e3,o=e.scrollLeft>=0,e.remove()}}}]);