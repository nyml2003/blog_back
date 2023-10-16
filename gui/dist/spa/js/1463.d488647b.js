"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[1463],{6786:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(6929),n=a(4429),i=a(859),o=a(8192);const r=(0,i.L)({name:"QCard",props:{...n.S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:a}}=(0,l.FN)(),i=(0,n.Z)(e,a),r=(0,l.Fl)((()=>"q-card"+(!0===i.value?" q-card--dark q-dark":"")+(!0===e.bordered?" q-card--bordered":"")+(!0===e.square?" q-card--square no-border-radius":"")+(!0===e.flat?" q-card--flat no-shadow":"")));return()=>(0,l.h)(e.tag,{class:r.value},(0,o.KR)(t.default))}})},1789:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(6929),n=a(4999),i=a(859),o=a(8192);const r=(0,i.L)({name:"QCardActions",props:{...n.jO,vertical:Boolean},setup(e,{slots:t}){const a=(0,n.ZP)(e),i=(0,l.Fl)((()=>`q-card__actions ${a.value} q-card__actions--`+(!0===e.vertical?"vert column":"horiz row")));return()=>(0,l.h)("div",{class:i.value},(0,o.KR)(t.default))}})},8545:(e,t,a)=>{a.d(t,{Z:()=>F});var l=a(6929),n=a(7218),i=a(3090),o=a(5695),r=a(627),u=(a(5954),a(1419)),s=a(4290);function c(e,t,a,l){const n=[];return e.forEach((e=>{!0===l(e)?n.push(e):t.push({failedPropValidation:a,file:e})})),n}function d(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),(0,s.NS)(e)}const p={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},f=["rejected"];function v({editable:e,dnd:t,getFileInput:a,addFilesToQueue:i}){const{props:o,emit:r,proxy:p}=(0,l.FN)(),f=(0,n.iH)(null),v=(0,l.Fl)((()=>void 0!==o.accept?o.accept.split(",").map((e=>(e=e.trim(),"*"===e?"*/":(e.endsWith("/*")&&(e=e.slice(0,e.length-1)),e.toUpperCase())))):null)),m=(0,l.Fl)((()=>parseInt(o.maxFiles,10))),g=(0,l.Fl)((()=>parseInt(o.maxTotalSize,10)));function h(t){if(e.value)if(t!==Object(t)&&(t={target:null}),null!==t.target&&!0===t.target.matches('input[type="file"]'))0===t.clientX&&0===t.clientY&&(0,s.sT)(t);else{const e=a();e&&e!==t.target&&e.click(t)}}function b(t){e.value&&t&&i(null,t)}function F(e,t,a,l){let n=Array.from(t||e.target.files);const i=[],u=()=>{0!==i.length&&r("rejected",i)};if(void 0!==o.accept&&-1===v.value.indexOf("*/")&&(n=c(n,i,"accept",(e=>v.value.some((t=>e.type.toUpperCase().startsWith(t)||e.name.toUpperCase().endsWith(t))))),0===n.length))return u();if(void 0!==o.maxFileSize){const e=parseInt(o.maxFileSize,10);if(n=c(n,i,"max-file-size",(t=>t.size<=e)),0===n.length)return u()}if(!0!==o.multiple&&0!==n.length&&(n=[n[0]]),n.forEach((e=>{e.__key=e.webkitRelativePath+e.lastModified+e.name+e.size})),!0===l){const e=a.map((e=>e.__key));n=c(n,i,"duplicate",(t=>!1===e.includes(t.__key)))}if(0===n.length)return u();if(void 0!==o.maxTotalSize){let e=!0===l?a.reduce(((e,t)=>e+t.size),0):0;if(n=c(n,i,"max-total-size",(t=>(e+=t.size,e<=g.value))),0===n.length)return u()}if("function"===typeof o.filter){const e=o.filter(n);n=c(n,i,"filter",(t=>e.includes(t)))}if(void 0!==o.maxFiles){let e=!0===l?a.length:0;if(n=c(n,i,"max-files",(()=>(e++,e<=m.value))),0===n.length)return u()}return u(),0!==n.length?n:void 0}function y(e){d(e),!0!==t.value&&(t.value=!0)}function x(e){(0,s.NS)(e);const a=null!==e.relatedTarget||!0!==u.client.is.safari?e.relatedTarget!==f.value:!1===document.elementsFromPoint(e.clientX,e.clientY).includes(f.value);!0===a&&(t.value=!1)}function S(e){d(e);const a=e.dataTransfer.files;0!==a.length&&i(null,a),t.value=!1}function q(e){if(!0===t.value)return(0,l.h)("div",{ref:f,class:`q-${e}__dnd absolute-full`,onDragenter:d,onDragover:d,onDragleave:x,onDrop:S})}return Object.assign(p,{pickFiles:h,addFiles:b}),{pickFiles:h,addFiles:b,onDragover:y,onDragleave:x,processFiles:F,getDndNode:q,maxFilesNumber:m,maxTotalSizeNumber:g}}var m=a(6086),g=a(859),h=a(2638),b=a(8388);const F=(0,g.L)({name:"QFile",inheritAttrs:!1,props:{...o.Cl,...r.Fz,...p,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...o.HJ,...f],setup(e,{slots:t,emit:a,attrs:u}){const{proxy:c}=(0,l.FN)(),d=(0,o.tL)(),p=(0,n.iH)(null),f=(0,n.iH)(!1),g=(0,r.Do)(e),{pickFiles:F,onDragover:y,onDragleave:x,processFiles:S,getDndNode:q}=v({editable:d.editable,dnd:f,getFileInput:Q,addFilesToQueue:R}),C=(0,m.Z)(e),z=(0,l.Fl)((()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[])),V=(0,l.Fl)((()=>(0,o.yV)(z.value))),$=(0,l.Fl)((()=>z.value.map((e=>e.name)).join(", "))),N=(0,l.Fl)((()=>(0,h.rB)(z.value.reduce(((e,t)=>e+t.size),0)))),k=(0,l.Fl)((()=>({totalSize:N.value,filesNumber:z.value.length,maxFiles:e.maxFiles}))),O=(0,l.Fl)((()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:g.value,...u,id:d.targetUid.value,disabled:!0!==d.editable.value}))),_=(0,l.Fl)((()=>"q-file q-field--auto-height"+(!0===f.value?" q-file--dnd":""))),B=(0,l.Fl)((()=>!0===e.multiple&&!0===e.append));function j(e){const t=z.value.slice();t.splice(e,1),D(t)}function T(e){const t=z.value.indexOf(e);t>-1&&j(t)}function D(t){a("update:modelValue",!0===e.multiple?t:t[0])}function L(e){13===e.keyCode&&(0,s.X$)(e)}function P(e){13!==e.keyCode&&32!==e.keyCode||F(e)}function Q(){return p.value}function R(t,a){const l=S(t,a,z.value,B.value),n=Q();void 0!==n&&null!==n&&(n.value=""),void 0!==l&&((!0===e.multiple?e.modelValue&&l.every((e=>z.value.includes(e))):e.modelValue===l[0])||D(!0===B.value?z.value.concat(l):l))}function Z(){return[(0,l.h)("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function E(){if(void 0!==t.file)return 0===z.value.length?Z():z.value.map(((e,a)=>t.file({index:a,file:e,ref:this})));if(void 0!==t.selected)return 0===z.value.length?Z():t.selected({files:z.value,ref:this});if(!0===e.useChips)return 0===z.value.length?Z():z.value.map(((t,a)=>(0,l.h)(i.Z,{key:"file-"+a,removable:d.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{j(a)}},(()=>(0,l.h)("span",{class:"ellipsis",textContent:t.name})))));const a=void 0!==e.displayValue?e.displayValue:$.value;return 0!==a.length?[(0,l.h)("div",{class:e.inputClass,style:e.inputStyle,textContent:a})]:Z()}function A(){const t={ref:p,...O.value,...C.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:R};return!0===e.multiple&&(t.multiple=!0),(0,l.h)("input",t)}return Object.assign(d,{fieldClass:_,emitValue:D,hasValue:V,inputRef:p,innerValue:z,floatingLabel:(0,l.Fl)((()=>!0===V.value||(0,o.yV)(e.displayValue))),computedCounter:(0,l.Fl)((()=>{if(void 0!==e.counterLabel)return e.counterLabel(k.value);const t=e.maxFiles;return`${z.value.length}${void 0!==t?" / "+t:""} (${N.value})`})),getControlChild:()=>q("file"),getControl:()=>{const t={ref:d.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return!0===d.editable.value&&Object.assign(t,{onDragover:y,onDragleave:x,onKeydown:L,onKeyup:P}),(0,l.h)("div",t,[A()].concat(E()))}}),Object.assign(c,{removeAtIndex:j,removeFile:T,getNativeElement:()=>p.value}),(0,b.g)(c,"nativeEl",(()=>p.value)),(0,o.ZP)(d)}})},7537:(e,t,a)=>{a.d(t,{Z:()=>d});a(5954);var l=a(6929),n=a(7218),i=a(859),o=a(4290),r=a(1651),u=a(8192),s=a(7623),c=a(8586);const d=(0,i.L)({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:a}){const i=(0,l.FN)(),d=(0,n.iH)(null);let p=0;const f=[];function v(t){const l="boolean"===typeof t?t:!0!==e.noErrorFocus,n=++p,i=(e,t)=>{a("validation"+(!0===e?"Success":"Error"),t)},o=e=>{const t=e.validate();return"function"===typeof t.then?t.then((t=>({valid:t,comp:e})),(t=>({valid:!1,comp:e,err:t}))):Promise.resolve({valid:t,comp:e})},r=!0===e.greedy?Promise.all(f.map(o)).then((e=>e.filter((e=>!0!==e.valid)))):f.reduce(((e,t)=>e.then((()=>o(t).then((e=>{if(!1===e.valid)return Promise.reject(e)}))))),Promise.resolve()).catch((e=>[e]));return r.then((e=>{if(void 0===e||0===e.length)return n===p&&i(!0),!0;if(n===p){const{comp:t,err:a}=e[0];if(void 0!==a&&console.error(a),i(!1,t),!0===l){const t=e.find((({comp:e})=>"function"===typeof e.focus&&!1===(0,c.$D)(e.$)));void 0!==t&&t.comp.focus()}}return!1}))}function m(){p++,f.forEach((e=>{"function"===typeof e.resetValidation&&e.resetValidation()}))}function g(t){void 0!==t&&(0,o.NS)(t);const l=p+1;v().then((n=>{l===p&&!0===n&&(void 0!==e.onSubmit?a("submit",t):void 0!==t&&void 0!==t.target&&"function"===typeof t.target.submit&&t.target.submit())}))}function h(t){void 0!==t&&(0,o.NS)(t),a("reset"),(0,l.Y3)((()=>{m(),!0===e.autofocus&&!0!==e.noResetFocus&&b()}))}function b(){(0,r.jd)((()=>{if(null===d.value)return;const e=d.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),(e=>e.tabIndex>-1));null!==e&&void 0!==e&&e.focus({preventScroll:!0})}))}(0,l.JJ)(s.vh,{bindComponent(e){f.push(e)},unbindComponent(e){const t=f.indexOf(e);t>-1&&f.splice(t,1)}});let F=!1;return(0,l.se)((()=>{F=!0})),(0,l.dl)((()=>{!0===F&&!0===e.autofocus&&b()})),(0,l.bv)((()=>{!0===e.autofocus&&b()})),Object.assign(i.proxy,{validate:v,resetValidation:m,submit:g,reset:h,focus:b,getValidationComponents:()=>f}),()=>(0,l.h)("form",{class:"q-form",ref:d,onSubmit:g,onReset:h},(0,u.KR)(t.default))}})},7959:(e,t,a)=>{a.d(t,{Z:()=>r});var l=a(6929),n=a(859),i=a(8192),o=a(7623);const r=(0,n.L)({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(e,{slots:t}){const{proxy:{$q:a}}=(0,l.FN)(),n=(0,l.f3)(o.YE,o.qO);if(n===o.qO)return console.error("QPage needs to be a deep child of QLayout"),o.qO;const r=(0,l.f3)(o.Mw,o.qO);if(r===o.qO)return console.error("QPage needs to be child of QPageContainer"),o.qO;const u=(0,l.Fl)((()=>{const t=(!0===n.header.space?n.header.size:0)+(!0===n.footer.space?n.footer.size:0);if("function"===typeof e.styleFn){const l=!0===n.isContainer.value?n.containerHeight.value:a.screen.height;return e.styleFn(t,l)}return{minHeight:!0===n.isContainer.value?n.containerHeight.value-t+"px":0===a.screen.height?0!==t?`calc(100vh - ${t}px)`:"100vh":a.screen.height-t+"px"}})),s=(0,l.Fl)((()=>"q-page"+(!0===e.padding?" q-layout-padding":"")));return()=>(0,l.h)("main",{class:s.value,style:u.value},(0,i.KR)(t.default))}})},4348:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(6929),n=a(4429),i=a(859);const o={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},r={xs:2,sm:4,md:8,lg:16,xl:24},u=(0,i.L)({name:"QSeparator",props:{...n.S,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=(0,l.FN)(),a=(0,n.Z)(e,t.proxy.$q),i=(0,l.Fl)((()=>!0===e.vertical?"vertical":"horizontal")),u=(0,l.Fl)((()=>` q-separator--${i.value}`)),s=(0,l.Fl)((()=>!1!==e.inset?`${u.value}-${o[e.inset]}`:"")),c=(0,l.Fl)((()=>`q-separator${u.value}${s.value}`+(void 0!==e.color?` bg-${e.color}`:"")+(!0===a.value?" q-separator--dark":""))),d=(0,l.Fl)((()=>{const t={};if(void 0!==e.size&&(t[!0===e.vertical?"width":"height"]=e.size),!1!==e.spaced){const a=!0===e.spaced?`${r.md}px`:e.spaced in r?`${r[e.spaced]}px`:e.spaced,l=!0===e.vertical?["Left","Right"]:["Top","Bottom"];t[`margin${l[0]}`]=t[`margin${l[1]}`]=a}return t}));return()=>(0,l.h)("hr",{class:c.value,style:d.value,"aria-orientation":i.value})}})}}]);