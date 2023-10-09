"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[2263],{6786:(e,l,t)=>{t.d(l,{Z:()=>r});var a=t(6929),n=t(4429),o=t(859),i=t(8192);const r=(0,o.L)({name:"QCard",props:{...n.S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:l}){const{proxy:{$q:t}}=(0,a.FN)(),o=(0,n.Z)(e,t),r=(0,a.Fl)((()=>"q-card"+(!0===o.value?" q-card--dark q-dark":"")+(!0===e.bordered?" q-card--bordered":"")+(!0===e.square?" q-card--square no-border-radius":"")+(!0===e.flat?" q-card--flat no-shadow":"")));return()=>(0,a.h)(e.tag,{class:r.value},(0,i.KR)(l.default))}})},7392:(e,l,t)=>{t.d(l,{Z:()=>i});var a=t(6929),n=t(859),o=t(8192);const i=(0,n.L)({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:l}){const t=(0,a.Fl)((()=>"q-card__section q-card__section--"+(!0===e.horizontal?"horiz row no-wrap":"vert")));return()=>(0,a.h)(e.tag,{class:t.value},(0,o.KR)(l.default))}})},3090:(e,l,t)=>{t.d(l,{Z:()=>p});t(5954);var a=t(6929),n=t(1909),o=t(1458),i=t(4429),r=t(2319),u=t(859),s=t(4290),c=t(8192);const d={xs:8,sm:10,md:14,lg:20,xl:24},p=(0,u.L)({name:"QChip",props:{...i.S,...r.LU,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,removeAriaLabel:String,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:l,emit:t}){const{proxy:{$q:u}}=(0,a.FN)(),p=(0,i.Z)(e,u),m=(0,r.ZP)(e,d),v=(0,a.Fl)((()=>!0===e.selected||void 0!==e.icon)),f=(0,a.Fl)((()=>!0===e.selected?e.iconSelected||u.iconSet.chip.selected:e.icon)),h=(0,a.Fl)((()=>e.iconRemove||u.iconSet.chip.remove)),g=(0,a.Fl)((()=>!1===e.disable&&(!0===e.clickable||null!==e.selected))),b=(0,a.Fl)((()=>{const l=!0===e.outline&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(!1===e.outline&&void 0!==e.color?` bg-${e.color}`:"")+(l?` text-${l} q-chip--colored`:"")+(!0===e.disable?" disabled":"")+(!0===e.dense?" q-chip--dense":"")+(!0===e.outline?" q-chip--outline":"")+(!0===e.selected?" q-chip--selected":"")+(!0===g.value?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(!0===e.square?" q-chip--square":"")+(!0===p.value?" q-chip--dark q-dark":"")})),y=(0,a.Fl)((()=>{const l=!0===e.disable?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0},t={...l,role:"button","aria-hidden":"false","aria-label":e.removeAriaLabel||u.lang.label.remove};return{chip:l,remove:t}}));function F(e){13===e.keyCode&&q(e)}function q(l){e.disable||(t("update:selected",!e.selected),t("click",l))}function x(l){void 0!==l.keyCode&&13!==l.keyCode||((0,s.NS)(l),!1===e.disable&&(t("update:modelValue",!1),t("remove")))}function S(){const t=[];!0===g.value&&t.push((0,a.h)("div",{class:"q-focus-helper"})),!0===v.value&&t.push((0,a.h)(n.Z,{class:"q-chip__icon q-chip__icon--left",name:f.value}));const o=void 0!==e.label?[(0,a.h)("div",{class:"ellipsis"},[e.label])]:void 0;return t.push((0,a.h)("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},(0,c.pf)(l.default,o))),e.iconRight&&t.push((0,a.h)(n.Z,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),!0===e.removable&&t.push((0,a.h)(n.Z,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:h.value,...y.value.remove,onClick:x,onKeyup:x})),t}return()=>{if(!1===e.modelValue)return;const l={class:b.value,style:m.value};return!0===g.value&&Object.assign(l,y.value.chip,{onClick:q,onKeyup:F}),(0,c.Jl)("div",l,S(),"ripple",!1!==e.ripple&&!0!==e.disable,(()=>[[o.Z,e.ripple]]))}}})},8545:(e,l,t)=>{t.d(l,{Z:()=>y});var a=t(6929),n=t(7218),o=t(3090),i=t(5695),r=t(627),u=(t(5954),t(1419)),s=t(4290);function c(e,l,t,a){const n=[];return e.forEach((e=>{!0===a(e)?n.push(e):l.push({failedPropValidation:t,file:e})})),n}function d(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),(0,s.NS)(e)}const p={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},m=["rejected"];function v({editable:e,dnd:l,getFileInput:t,addFilesToQueue:o}){const{props:i,emit:r,proxy:p}=(0,a.FN)(),m=(0,n.iH)(null),v=(0,a.Fl)((()=>void 0!==i.accept?i.accept.split(",").map((e=>(e=e.trim(),"*"===e?"*/":(e.endsWith("/*")&&(e=e.slice(0,e.length-1)),e.toUpperCase())))):null)),f=(0,a.Fl)((()=>parseInt(i.maxFiles,10))),h=(0,a.Fl)((()=>parseInt(i.maxTotalSize,10)));function g(l){if(e.value)if(l!==Object(l)&&(l={target:null}),null!==l.target&&!0===l.target.matches('input[type="file"]'))0===l.clientX&&0===l.clientY&&(0,s.sT)(l);else{const e=t();e&&e!==l.target&&e.click(l)}}function b(l){e.value&&l&&o(null,l)}function y(e,l,t,a){let n=Array.from(l||e.target.files);const o=[],u=()=>{0!==o.length&&r("rejected",o)};if(void 0!==i.accept&&-1===v.value.indexOf("*/")&&(n=c(n,o,"accept",(e=>v.value.some((l=>e.type.toUpperCase().startsWith(l)||e.name.toUpperCase().endsWith(l))))),0===n.length))return u();if(void 0!==i.maxFileSize){const e=parseInt(i.maxFileSize,10);if(n=c(n,o,"max-file-size",(l=>l.size<=e)),0===n.length)return u()}if(!0!==i.multiple&&0!==n.length&&(n=[n[0]]),n.forEach((e=>{e.__key=e.webkitRelativePath+e.lastModified+e.name+e.size})),!0===a){const e=t.map((e=>e.__key));n=c(n,o,"duplicate",(l=>!1===e.includes(l.__key)))}if(0===n.length)return u();if(void 0!==i.maxTotalSize){let e=!0===a?t.reduce(((e,l)=>e+l.size),0):0;if(n=c(n,o,"max-total-size",(l=>(e+=l.size,e<=h.value))),0===n.length)return u()}if("function"===typeof i.filter){const e=i.filter(n);n=c(n,o,"filter",(l=>e.includes(l)))}if(void 0!==i.maxFiles){let e=!0===a?t.length:0;if(n=c(n,o,"max-files",(()=>(e++,e<=f.value))),0===n.length)return u()}return u(),0!==n.length?n:void 0}function F(e){d(e),!0!==l.value&&(l.value=!0)}function q(e){(0,s.NS)(e);const t=null!==e.relatedTarget||!0!==u.client.is.safari?e.relatedTarget!==m.value:!1===document.elementsFromPoint(e.clientX,e.clientY).includes(m.value);!0===t&&(l.value=!1)}function x(e){d(e);const t=e.dataTransfer.files;0!==t.length&&o(null,t),l.value=!1}function S(e){if(!0===l.value)return(0,a.h)("div",{ref:m,class:`q-${e}__dnd absolute-full`,onDragenter:d,onDragover:d,onDragleave:q,onDrop:x})}return Object.assign(p,{pickFiles:g,addFiles:b}),{pickFiles:g,addFiles:b,onDragover:F,onDragleave:q,processFiles:y,getDndNode:S,maxFilesNumber:f,maxTotalSizeNumber:h}}var f=t(6086),h=t(859),g=t(2638),b=t(8388);const y=(0,h.L)({name:"QFile",inheritAttrs:!1,props:{...i.Cl,...r.Fz,...p,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...i.HJ,...m],setup(e,{slots:l,emit:t,attrs:u}){const{proxy:c}=(0,a.FN)(),d=(0,i.tL)(),p=(0,n.iH)(null),m=(0,n.iH)(!1),h=(0,r.Do)(e),{pickFiles:y,onDragover:F,onDragleave:q,processFiles:x,getDndNode:S}=v({editable:d.editable,dnd:m,getFileInput:P,addFilesToQueue:R}),_=(0,f.Z)(e),V=(0,a.Fl)((()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[])),C=(0,a.Fl)((()=>(0,i.yV)(V.value))),w=(0,a.Fl)((()=>V.value.map((e=>e.name)).join(", "))),k=(0,a.Fl)((()=>(0,g.rB)(V.value.reduce(((e,l)=>e+l.size),0)))),B=(0,a.Fl)((()=>({totalSize:k.value,filesNumber:V.value.length,maxFiles:e.maxFiles}))),z=(0,a.Fl)((()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:h.value,...u,id:d.targetUid.value,disabled:!0!==d.editable.value}))),Z=(0,a.Fl)((()=>"q-file q-field--auto-height"+(!0===m.value?" q-file--dnd":""))),$=(0,a.Fl)((()=>!0===e.multiple&&!0===e.append));function N(e){const l=V.value.slice();l.splice(e,1),Q(l)}function W(e){const l=V.value.indexOf(e);l>-1&&N(l)}function Q(l){t("update:modelValue",!0===e.multiple?l:l[0])}function O(e){13===e.keyCode&&(0,s.X$)(e)}function L(e){13!==e.keyCode&&32!==e.keyCode||y(e)}function P(){return p.value}function R(l,t){const a=x(l,t,V.value,$.value),n=P();void 0!==n&&null!==n&&(n.value=""),void 0!==a&&((!0===e.multiple?e.modelValue&&a.every((e=>V.value.includes(e))):e.modelValue===a[0])||Q(!0===$.value?V.value.concat(a):a))}function j(){return[(0,a.h)("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function T(){if(void 0!==l.file)return 0===V.value.length?j():V.value.map(((e,t)=>l.file({index:t,file:e,ref:this})));if(void 0!==l.selected)return 0===V.value.length?j():l.selected({files:V.value,ref:this});if(!0===e.useChips)return 0===V.value.length?j():V.value.map(((l,t)=>(0,a.h)(o.Z,{key:"file-"+t,removable:d.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{N(t)}},(()=>(0,a.h)("span",{class:"ellipsis",textContent:l.name})))));const t=void 0!==e.displayValue?e.displayValue:w.value;return 0!==t.length?[(0,a.h)("div",{class:e.inputClass,style:e.inputStyle,textContent:t})]:j()}function D(){const l={ref:p,...z.value,..._.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:R};return!0===e.multiple&&(l.multiple=!0),(0,a.h)("input",l)}return Object.assign(d,{fieldClass:Z,emitValue:Q,hasValue:C,inputRef:p,innerValue:V,floatingLabel:(0,a.Fl)((()=>!0===C.value||(0,i.yV)(e.displayValue))),computedCounter:(0,a.Fl)((()=>{if(void 0!==e.counterLabel)return e.counterLabel(B.value);const l=e.maxFiles;return`${V.value.length}${void 0!==l?" / "+l:""} (${k.value})`})),getControlChild:()=>S("file"),getControl:()=>{const l={ref:d.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return!0===d.editable.value&&Object.assign(l,{onDragover:F,onDragleave:q,onKeydown:O,onKeyup:L}),(0,a.h)("div",l,[D()].concat(T()))}}),Object.assign(c,{removeAtIndex:N,removeFile:W,getNativeElement:()=>p.value}),(0,b.g)(c,"nativeEl",(()=>p.value)),(0,i.ZP)(d)}})},7537:(e,l,t)=>{t.d(l,{Z:()=>d});t(5954);var a=t(6929),n=t(7218),o=t(859),i=t(4290),r=t(1651),u=t(8192),s=t(7623),c=t(8586);const d=(0,o.L)({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:l,emit:t}){const o=(0,a.FN)(),d=(0,n.iH)(null);let p=0;const m=[];function v(l){const a="boolean"===typeof l?l:!0!==e.noErrorFocus,n=++p,o=(e,l)=>{t("validation"+(!0===e?"Success":"Error"),l)},i=e=>{const l=e.validate();return"function"===typeof l.then?l.then((l=>({valid:l,comp:e})),(l=>({valid:!1,comp:e,err:l}))):Promise.resolve({valid:l,comp:e})},r=!0===e.greedy?Promise.all(m.map(i)).then((e=>e.filter((e=>!0!==e.valid)))):m.reduce(((e,l)=>e.then((()=>i(l).then((e=>{if(!1===e.valid)return Promise.reject(e)}))))),Promise.resolve()).catch((e=>[e]));return r.then((e=>{if(void 0===e||0===e.length)return n===p&&o(!0),!0;if(n===p){const{comp:l,err:t}=e[0];if(void 0!==t&&console.error(t),o(!1,l),!0===a){const l=e.find((({comp:e})=>"function"===typeof e.focus&&!1===(0,c.$D)(e.$)));void 0!==l&&l.comp.focus()}}return!1}))}function f(){p++,m.forEach((e=>{"function"===typeof e.resetValidation&&e.resetValidation()}))}function h(l){void 0!==l&&(0,i.NS)(l);const a=p+1;v().then((n=>{a===p&&!0===n&&(void 0!==e.onSubmit?t("submit",l):void 0!==l&&void 0!==l.target&&"function"===typeof l.target.submit&&l.target.submit())}))}function g(l){void 0!==l&&(0,i.NS)(l),t("reset"),(0,a.Y3)((()=>{f(),!0===e.autofocus&&!0!==e.noResetFocus&&b()}))}function b(){(0,r.jd)((()=>{if(null===d.value)return;const e=d.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),(e=>e.tabIndex>-1));null!==e&&void 0!==e&&e.focus({preventScroll:!0})}))}(0,a.JJ)(s.vh,{bindComponent(e){m.push(e)},unbindComponent(e){const l=m.indexOf(e);l>-1&&m.splice(l,1)}});let y=!1;return(0,a.se)((()=>{y=!0})),(0,a.dl)((()=>{!0===y&&!0===e.autofocus&&b()})),(0,a.bv)((()=>{!0===e.autofocus&&b()})),Object.assign(o.proxy,{validate:v,resetValidation:f,submit:h,reset:g,focus:b,getValidationComponents:()=>m}),()=>(0,a.h)("form",{class:"q-form",ref:d,onSubmit:h,onReset:g},(0,u.KR)(l.default))}})},7959:(e,l,t)=>{t.d(l,{Z:()=>r});var a=t(6929),n=t(859),o=t(8192),i=t(7623);const r=(0,n.L)({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:l}){const{proxy:{$q:t}}=(0,a.FN)(),n=(0,a.f3)(i.YE,i.qO);if(n===i.qO)return console.error("QPage needs to be a deep child of QLayout"),i.qO;const r=(0,a.f3)(i.Mw,i.qO);if(r===i.qO)return console.error("QPage needs to be child of QPageContainer"),i.qO;const u=(0,a.Fl)((()=>{const l=(!0===n.header.space?n.header.size:0)+(!0===n.footer.space?n.footer.size:0);if("function"===typeof e.styleFn){const a=!0===n.isContainer.value?n.containerHeight.value:t.screen.height;return e.styleFn(l,a)}return{minHeight:!0===n.isContainer.value?n.containerHeight.value-l+"px":0===t.screen.height?0!==l?`calc(100vh - ${l}px)`:"100vh":t.screen.height-l+"px"}})),s=(0,a.Fl)((()=>"q-page"+(!0===e.padding?" q-layout-padding":"")));return()=>(0,a.h)("main",{class:s.value,style:u.value},(0,o.KR)(l.default))}})},4348:(e,l,t)=>{t.d(l,{Z:()=>u});var a=t(6929),n=t(4429),o=t(859);const i={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},r={xs:2,sm:4,md:8,lg:16,xl:24},u=(0,o.L)({name:"QSeparator",props:{...n.S,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const l=(0,a.FN)(),t=(0,n.Z)(e,l.proxy.$q),o=(0,a.Fl)((()=>!0===e.vertical?"vertical":"horizontal")),u=(0,a.Fl)((()=>` q-separator--${o.value}`)),s=(0,a.Fl)((()=>!1!==e.inset?`${u.value}-${i[e.inset]}`:"")),c=(0,a.Fl)((()=>`q-separator${u.value}${s.value}`+(void 0!==e.color?` bg-${e.color}`:"")+(!0===t.value?" q-separator--dark":""))),d=(0,a.Fl)((()=>{const l={};if(void 0!==e.size&&(l[!0===e.vertical?"width":"height"]=e.size),!1!==e.spaced){const t=!0===e.spaced?`${r.md}px`:e.spaced in r?`${r[e.spaced]}px`:e.spaced,a=!0===e.vertical?["Left","Right"]:["Top","Bottom"];l[`margin${a[0]}`]=l[`margin${a[1]}`]=t}return l}));return()=>(0,a.h)("hr",{class:c.value,style:d.value,"aria-orientation":o.value})}})},2638:(e,l,t)=>{t.d(l,{Uz:()=>i,rB:()=>n,vX:()=>o});const a=["B","KB","MB","GB","TB","PB"];function n(e){let l=0;while(parseInt(e,10)>=1024&&l<a.length-1)e/=1024,++l;return`${e.toFixed(1)}${a[l]}`}function o(e,l,t){return t<=l?l:Math.min(t,Math.max(l,e))}function i(e,l,t){if(t<=l)return l;const a=t-l+1;let n=l+(e-l)%a;return n<l&&(n=a+n),0===n?0:n}},2263:(e,l,t)=>{t.r(l),t.d(l,{default:()=>x});t(5954);var a=t(6929),n=t(7218),o=t(8455),i=(t(9482),t(7493));const r={class:"justify-center flex-center flex"},u=(0,a._)("div",{class:"text-h6"},"Already have an account?",-1),s={__name:"RegisterPage",setup(e){const l=(0,i.r)(),t=(0,o.tv)(),s=(0,n.iH)({nickname:"",password:"",password2:"",email:null,telephone:null,avatar:null}),c=()=>{l.logout(),l.register(s.value).then((e=>{"success"===e&&t.push("/login")})).catch((e=>{console.log(e)}))};return(e,l)=>{const o=(0,a.up)("q-icon"),i=(0,a.up)("q-input"),d=(0,a.up)("q-file"),p=(0,a.up)("q-separator"),m=(0,a.up)("q-btn"),v=(0,a.up)("q-form"),f=(0,a.up)("q-card-section"),h=(0,a.up)("q-card"),g=(0,a.up)("q-page");return(0,a.wg)(),(0,a.j4)(g,{class:"flex-center flex"},{default:(0,a.w5)((()=>[(0,a.Wm)(h,{class:"q-ma-md",style:{"max-width":"400px"}},{default:(0,a.w5)((()=>[(0,a.Wm)(f,null,{default:(0,a.w5)((()=>[(0,a.Wm)(v,{onSubmit:c},{default:(0,a.w5)((()=>[(0,a.Wm)(i,{modelValue:s.value.nickname,"onUpdate:modelValue":l[0]||(l[0]=e=>s.value.nickname=e),label:"昵称","lazy-rules":"",rules:[e=>!!e||"Please enter your username"]},{before:(0,a.w5)((()=>[(0,a.Wm)(o,{name:"account_circle"})])),_:1},8,["modelValue","rules"]),(0,a.Wm)(i,{modelValue:s.value.password,"onUpdate:modelValue":l[1]||(l[1]=e=>s.value.password=e),label:"密码","lazy-rules":"",rules:[e=>!!e||"Please enter your password"]},{before:(0,a.w5)((()=>[(0,a.Wm)(o,{name:"lock"})])),_:1},8,["modelValue","rules"]),(0,a.Wm)(i,{modelValue:s.value.password2,"onUpdate:modelValue":l[2]||(l[2]=e=>s.value.password2=e),label:"确认密码","lazy-rules":"",rules:[e=>!!e||"Please confirm your password",e=>e===s.value.password||"The two passwords do not match"]},{before:(0,a.w5)((()=>[(0,a.Wm)(o,{name:"lock"})])),_:1},8,["modelValue","rules"]),(0,a.Wm)(i,{modelValue:s.value.email,"onUpdate:modelValue":l[3]||(l[3]=e=>s.value.email=e),label:"Email","lazy-rules":""},{before:(0,a.w5)((()=>[(0,a.Wm)(o,{name:"email"})])),_:1},8,["modelValue"]),(0,a.Wm)(i,{modelValue:s.value.telephone,"onUpdate:modelValue":l[4]||(l[4]=e=>s.value.telephone=e),label:"Telephone","lazy-rules":""},{before:(0,a.w5)((()=>[(0,a.Wm)(o,{name:"phone"})])),_:1},8,["modelValue"]),(0,a.Wm)(d,{modelValue:s.value.avatar,"onUpdate:modelValue":l[5]||(l[5]=e=>s.value.avatar=e),label:"Avatar","lazy-rules":"",accept:"image/*"},{prepend:(0,a.w5)((()=>[(0,a.Wm)(o,{name:"image"})])),_:1},8,["modelValue"]),(0,a.Wm)(p),(0,a._)("div",r,[(0,a.Wm)(m,{type:"submit",label:"Register"})])])),_:1})])),_:1}),(0,a.Wm)(p),(0,a.Wm)(f,{class:"row"},{default:(0,a.w5)((()=>[u,(0,a.Wm)(m,{label:"Login",color:"primary",onClick:l[6]||(l[6]=()=>{(0,n.SU)(t).push("/login")}),flat:""})])),_:1})])),_:1})])),_:1})}}};var c=t(7959),d=t(6786),p=t(7392),m=t(7537),v=t(9033),f=t(1909),h=t(8545),g=t(4348),b=t(5779),y=t(9332),F=t.n(y);const q=s,x=q;F()(s,"components",{QPage:c.Z,QCard:d.Z,QCardSection:p.Z,QForm:m.Z,QInput:v.Z,QIcon:f.Z,QFile:h.Z,QSeparator:g.Z,QBtn:b.Z})}}]);