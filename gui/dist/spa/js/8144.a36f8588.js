"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[8144],{5024:(e,t,l)=>{l.d(t,{Z:()=>c});l(5954);var o=l(6929),a=l(7218),i=l(1419),n=l(8532),r=l(859),u=l(8192),s=l(7623);const c=(0,r.L)({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:l}){const{proxy:{$q:r}}=(0,o.FN)(),c=(0,o.f3)(s.YE,s.qO);if(c===s.qO)return console.error("QFooter needs to be child of QLayout"),s.qO;const v=(0,a.iH)(parseInt(e.heightHint,10)),d=(0,a.iH)(!0),f=(0,a.iH)(!0===i.uX.value||!0===c.isContainer.value?0:window.innerHeight),g=(0,o.Fl)((()=>!0===e.reveal||c.view.value.indexOf("F")>-1||r.platform.is.ios&&!0===c.isContainer.value)),h=(0,o.Fl)((()=>!0===c.isContainer.value?c.containerHeight.value:f.value)),p=(0,o.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===g.value)return!0===d.value?v.value:0;const t=c.scroll.value.position+h.value+v.value-c.height.value;return t>0?t:0})),m=(0,o.Fl)((()=>!0!==e.modelValue||!0===g.value&&!0!==d.value)),y=(0,o.Fl)((()=>!0===e.modelValue&&!0===m.value&&!0===e.reveal)),b=(0,o.Fl)((()=>"q-footer q-layout__section--marginal "+(!0===g.value?"fixed":"absolute")+"-bottom"+(!0===e.bordered?" q-footer--bordered":"")+(!0===m.value?" q-footer--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus"+(!0!==g.value?" hidden":""):""))),q=(0,o.Fl)((()=>{const e=c.rows.value.bottom,t={};return"l"===e[0]&&!0===c.left.space&&(t[!0===r.lang.rtl?"right":"left"]=`${c.left.size}px`),"r"===e[2]&&!0===c.right.space&&(t[!0===r.lang.rtl?"left":"right"]=`${c.right.size}px`),t}));function S(e,t){c.update("footer",e,t)}function F(e,t){e.value!==t&&(e.value=t)}function x({height:e}){F(v,e),S("size",e)}function _(){if(!0!==e.reveal)return;const{direction:t,position:l,inflectionPoint:o}=c.scroll.value;F(d,"up"===t||l-o<100||c.height.value-h.value-l-v.value<300)}function z(e){!0===y.value&&F(d,!0),l("focusin",e)}(0,o.YP)((()=>e.modelValue),(e=>{S("space",e),F(d,!0),c.animate()})),(0,o.YP)(p,(e=>{S("offset",e)})),(0,o.YP)((()=>e.reveal),(t=>{!1===t&&F(d,e.modelValue)})),(0,o.YP)(d,(e=>{c.animate(),l("reveal",e)})),(0,o.YP)([v,c.scroll,c.height],_),(0,o.YP)((()=>r.screen.height),(e=>{!0!==c.isContainer.value&&F(f,e)}));const H={};return c.instances.footer=H,!0===e.modelValue&&S("size",v.value),S("space",e.modelValue),S("offset",p.value),(0,o.Jd)((()=>{c.instances.footer===H&&(c.instances.footer=void 0,S("size",0),S("offset",0),S("space",!1))})),()=>{const l=(0,u.vs)(t.default,[(0,o.h)(n.Z,{debounce:0,onResize:x})]);return!0===e.elevated&&l.push((0,o.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),(0,o.h)("footer",{class:b.value,style:q.value,onFocusin:z},l)}}})},6453:(e,t,l)=>{l.d(t,{Z:()=>s});l(5954);var o=l(6929),a=l(7218),i=l(8532),n=l(859),r=l(8192),u=l(7623);const s=(0,n.L)({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:l}){const{proxy:{$q:n}}=(0,o.FN)(),s=(0,o.f3)(u.YE,u.qO);if(s===u.qO)return console.error("QHeader needs to be child of QLayout"),u.qO;const c=(0,a.iH)(parseInt(e.heightHint,10)),v=(0,a.iH)(!0),d=(0,o.Fl)((()=>!0===e.reveal||s.view.value.indexOf("H")>-1||n.platform.is.ios&&!0===s.isContainer.value)),f=(0,o.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===d.value)return!0===v.value?c.value:0;const t=c.value-s.scroll.value.position;return t>0?t:0})),g=(0,o.Fl)((()=>!0!==e.modelValue||!0===d.value&&!0!==v.value)),h=(0,o.Fl)((()=>!0===e.modelValue&&!0===g.value&&!0===e.reveal)),p=(0,o.Fl)((()=>"q-header q-layout__section--marginal "+(!0===d.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===g.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),m=(0,o.Fl)((()=>{const e=s.rows.value.top,t={};return"l"===e[0]&&!0===s.left.space&&(t[!0===n.lang.rtl?"right":"left"]=`${s.left.size}px`),"r"===e[2]&&!0===s.right.space&&(t[!0===n.lang.rtl?"left":"right"]=`${s.right.size}px`),t}));function y(e,t){s.update("header",e,t)}function b(e,t){e.value!==t&&(e.value=t)}function q({height:e}){b(c,e),y("size",e)}function S(e){!0===h.value&&b(v,!0),l("focusin",e)}(0,o.YP)((()=>e.modelValue),(e=>{y("space",e),b(v,!0),s.animate()})),(0,o.YP)(f,(e=>{y("offset",e)})),(0,o.YP)((()=>e.reveal),(t=>{!1===t&&b(v,e.modelValue)})),(0,o.YP)(v,(e=>{s.animate(),l("reveal",e)})),(0,o.YP)(s.scroll,(t=>{!0===e.reveal&&b(v,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const F={};return s.instances.header=F,!0===e.modelValue&&y("size",c.value),y("space",e.modelValue),y("offset",f.value),(0,o.Jd)((()=>{s.instances.header===F&&(s.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))})),()=>{const l=(0,r.Bl)(t.default,[]);return!0===e.elevated&&l.push((0,o.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),l.push((0,o.h)(i.Z,{debounce:0,onResize:q})),(0,o.h)("header",{class:p.value,style:m.value,onFocusin:S},l)}}})},2322:(e,t,l)=>{l.d(t,{Z:()=>d});l(5954);var o=l(7218),a=l(6929),i=l(8689),n=l(3578);const r={ratio:[String,Number]};function u(e,t){return(0,a.Fl)((()=>{const l=Number(e.ratio||(void 0!==t?t.value:void 0));return!0!==isNaN(l)&&l>0?{paddingBottom:100/l+"%"}:null}))}var s=l(859),c=l(8192);const v=16/9,d=(0,s.L)({name:"QImg",props:{...r,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:v},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:l}){const r=(0,o.iH)(e.initialRatio),s=u(e,r);let v=null,d=!1;const f=[(0,o.iH)(null),(0,o.iH)(F())],g=(0,o.iH)(0),h=(0,o.iH)(!1),p=(0,o.iH)(!1),m=(0,a.Fl)((()=>`q-img q-img--${!0===e.noNativeMenu?"no-":""}menu`)),y=(0,a.Fl)((()=>({width:e.width,height:e.height}))),b=(0,a.Fl)((()=>"q-img__image "+(void 0!==e.imgClass?e.imgClass+" ":"")+`q-img__image--with${!0===e.noTransition?"out":""}-transition`)),q=(0,a.Fl)((()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position})));function S(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function F(){return void 0!==e.placeholderSrc?{src:e.placeholderSrc}:null}function x(e){null!==v&&(clearTimeout(v),v=null),p.value=!1,null===e?(h.value=!1,f[1^g.value].value=F()):h.value=!0,f[g.value].value=e}function _({target:e}){!0!==d&&(null!==v&&(clearTimeout(v),v=null),r.value=0===e.naturalHeight?.5:e.naturalWidth/e.naturalHeight,z(e,1))}function z(e,t){!0!==d&&1e3!==t&&(!0===e.complete?H(e):v=setTimeout((()=>{v=null,z(e,t+1)}),50))}function H(e){!0!==d&&(g.value=1^g.value,f[g.value].value=null,h.value=!1,p.value=!1,l("load",e.currentSrc||e.src))}function w(e){null!==v&&(clearTimeout(v),v=null),h.value=!1,p.value=!0,f[g.value].value=null,f[1^g.value].value=F(),l("error",e)}function $(t){const l=f[t].value,o={key:"img_"+t,class:b.value,style:q.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...l};return g.value===t?(o.class+=" q-img__image--waiting",Object.assign(o,{onLoad:_,onError:w})):o.class+=" q-img__image--loaded",(0,a.h)("div",{class:"q-img__container absolute-full",key:"img"+t},(0,a.h)("img",o))}function O(){return!0!==h.value?(0,a.h)("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},(0,c.KR)(t[!0===p.value?"error":"default"])):(0,a.h)("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},void 0!==t.loading?t.loading():!0===e.noSpinner?void 0:[(0,a.h)(n.Z,{color:e.spinnerColor,size:e.spinnerSize})])}return(0,a.YP)((()=>S()),x),x(S()),(0,a.Jd)((()=>{d=!0,null!==v&&(clearTimeout(v),v=null)})),()=>{const t=[];return null!==s.value&&t.push((0,a.h)("div",{key:"filler",style:s.value})),!0!==p.value&&(null!==f[0].value&&t.push($(0)),null!==f[1].value&&t.push($(1))),t.push((0,a.h)(i.uT,{name:"q-transition--fade"},O)),(0,a.h)("div",{class:m.value,style:y.value,role:"img","aria-label":e.alt},t)}}})},3271:(e,t,l)=>{l.d(t,{Z:()=>s});var o=l(859),a=l(6929),i=l(8192),n=l(7623);const r={position:{type:String,default:"bottom-right",validator:e=>["top-right","top-left","bottom-right","bottom-left","top","right","bottom","left"].includes(e)},offset:{type:Array,validator:e=>2===e.length},expand:Boolean};function u(){const{props:e,proxy:{$q:t}}=(0,a.FN)(),l=(0,a.f3)(n.YE,n.qO);if(l===n.qO)return console.error("QPageSticky needs to be child of QLayout"),n.qO;const o=(0,a.Fl)((()=>{const t=e.position;return{top:t.indexOf("top")>-1,right:t.indexOf("right")>-1,bottom:t.indexOf("bottom")>-1,left:t.indexOf("left")>-1,vertical:"top"===t||"bottom"===t,horizontal:"left"===t||"right"===t}})),r=(0,a.Fl)((()=>l.header.offset)),u=(0,a.Fl)((()=>l.right.offset)),s=(0,a.Fl)((()=>l.footer.offset)),c=(0,a.Fl)((()=>l.left.offset)),v=(0,a.Fl)((()=>{let l=0,a=0;const i=o.value,n=!0===t.lang.rtl?-1:1;!0===i.top&&0!==r.value?a=`${r.value}px`:!0===i.bottom&&0!==s.value&&(a=-s.value+"px"),!0===i.left&&0!==c.value?l=n*c.value+"px":!0===i.right&&0!==u.value&&(l=-n*u.value+"px");const v={transform:`translate(${l}, ${a})`};return e.offset&&(v.margin=`${e.offset[1]}px ${e.offset[0]}px`),!0===i.vertical?(0!==c.value&&(v[!0===t.lang.rtl?"right":"left"]=`${c.value}px`),0!==u.value&&(v[!0===t.lang.rtl?"left":"right"]=`${u.value}px`)):!0===i.horizontal&&(0!==r.value&&(v.top=`${r.value}px`),0!==s.value&&(v.bottom=`${s.value}px`)),v})),d=(0,a.Fl)((()=>`q-page-sticky row flex-center fixed-${e.position} q-page-sticky--`+(!0===e.expand?"expand":"shrink")));function f(t){const l=(0,i.KR)(t.default);return(0,a.h)("div",{class:d.value,style:v.value},!0===e.expand?l:[(0,a.h)("div",l)])}return{$layout:l,getStickyContent:f}}const s=(0,o.L)({name:"QPageSticky",props:r,setup(e,{slots:t}){const{getStickyContent:l}=u();return()=>l(t)}})}}]);