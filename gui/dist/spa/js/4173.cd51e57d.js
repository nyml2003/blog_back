"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[4173],{6786:(e,t,l)=>{l.d(t,{Z:()=>r});var a=l(6929),n=l(4429),i=l(859),o=l(8192);const r=(0,i.L)({name:"QCard",props:{...n.S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const{proxy:{$q:l}}=(0,a.FN)(),i=(0,n.Z)(e,l),r=(0,a.Fl)((()=>"q-card"+(!0===i.value?" q-card--dark q-dark":"")+(!0===e.bordered?" q-card--bordered":"")+(!0===e.square?" q-card--square no-border-radius":"")+(!0===e.flat?" q-card--flat no-shadow":"")));return()=>(0,a.h)(e.tag,{class:r.value},(0,o.KR)(t.default))}})},1789:(e,t,l)=>{l.d(t,{Z:()=>r});var a=l(6929),n=l(4999),i=l(859),o=l(8192);const r=(0,i.L)({name:"QCardActions",props:{...n.jO,vertical:Boolean},setup(e,{slots:t}){const l=(0,n.ZP)(e),i=(0,a.Fl)((()=>`q-card__actions ${l.value} q-card__actions--`+(!0===e.vertical?"vert column":"horiz row")));return()=>(0,a.h)("div",{class:i.value},(0,o.KR)(t.default))}})},8545:(e,t,l)=>{l.d(t,{Z:()=>F});var a=l(6929),n=l(7218),i=l(3090),o=l(5695),r=l(627),u=(l(5954),l(1419)),s=l(4290);function c(e,t,l,a){const n=[];return e.forEach((e=>{!0===a(e)?n.push(e):t.push({failedPropValidation:l,file:e})})),n}function d(e){e&&e.dataTransfer&&(e.dataTransfer.dropEffect="copy"),(0,s.NS)(e)}const f={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},v=["rejected"];function p({editable:e,dnd:t,getFileInput:l,addFilesToQueue:i}){const{props:o,emit:r,proxy:f}=(0,a.FN)(),v=(0,n.iH)(null),p=(0,a.Fl)((()=>void 0!==o.accept?o.accept.split(",").map((e=>(e=e.trim(),"*"===e?"*/":(e.endsWith("/*")&&(e=e.slice(0,e.length-1)),e.toUpperCase())))):null)),m=(0,a.Fl)((()=>parseInt(o.maxFiles,10))),g=(0,a.Fl)((()=>parseInt(o.maxTotalSize,10)));function h(t){if(e.value)if(t!==Object(t)&&(t={target:null}),null!==t.target&&!0===t.target.matches('input[type="file"]'))0===t.clientX&&0===t.clientY&&(0,s.sT)(t);else{const e=l();e&&e!==t.target&&e.click(t)}}function b(t){e.value&&t&&i(null,t)}function F(e,t,l,a){let n=Array.from(t||e.target.files);const i=[],u=()=>{0!==i.length&&r("rejected",i)};if(void 0!==o.accept&&-1===p.value.indexOf("*/")&&(n=c(n,i,"accept",(e=>p.value.some((t=>e.type.toUpperCase().startsWith(t)||e.name.toUpperCase().endsWith(t))))),0===n.length))return u();if(void 0!==o.maxFileSize){const e=parseInt(o.maxFileSize,10);if(n=c(n,i,"max-file-size",(t=>t.size<=e)),0===n.length)return u()}if(!0!==o.multiple&&0!==n.length&&(n=[n[0]]),n.forEach((e=>{e.__key=e.webkitRelativePath+e.lastModified+e.name+e.size})),!0===a){const e=l.map((e=>e.__key));n=c(n,i,"duplicate",(t=>!1===e.includes(t.__key)))}if(0===n.length)return u();if(void 0!==o.maxTotalSize){let e=!0===a?l.reduce(((e,t)=>e+t.size),0):0;if(n=c(n,i,"max-total-size",(t=>(e+=t.size,e<=g.value))),0===n.length)return u()}if("function"===typeof o.filter){const e=o.filter(n);n=c(n,i,"filter",(t=>e.includes(t)))}if(void 0!==o.maxFiles){let e=!0===a?l.length:0;if(n=c(n,i,"max-files",(()=>(e++,e<=m.value))),0===n.length)return u()}return u(),0!==n.length?n:void 0}function y(e){d(e),!0!==t.value&&(t.value=!0)}function x(e){(0,s.NS)(e);const l=null!==e.relatedTarget||!0!==u.client.is.safari?e.relatedTarget!==v.value:!1===document.elementsFromPoint(e.clientX,e.clientY).includes(v.value);!0===l&&(t.value=!1)}function S(e){d(e);const l=e.dataTransfer.files;0!==l.length&&i(null,l),t.value=!1}function C(e){if(!0===t.value)return(0,a.h)("div",{ref:v,class:`q-${e}__dnd absolute-full`,onDragenter:d,onDragover:d,onDragleave:x,onDrop:S})}return Object.assign(f,{pickFiles:h,addFiles:b}),{pickFiles:h,addFiles:b,onDragover:y,onDragleave:x,processFiles:F,getDndNode:C,maxFilesNumber:m,maxTotalSizeNumber:g}}var m=l(6086),g=l(859),h=l(2638),b=l(8388);const F=(0,g.L)({name:"QFile",inheritAttrs:!1,props:{...o.Cl,...r.Fz,...f,modelValue:[File,FileList,Array],append:Boolean,useChips:Boolean,displayValue:[String,Number],tabindex:{type:[String,Number],default:0},counterLabel:Function,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...o.HJ,...v],setup(e,{slots:t,emit:l,attrs:u}){const{proxy:c}=(0,a.FN)(),d=(0,o.tL)(),f=(0,n.iH)(null),v=(0,n.iH)(!1),g=(0,r.Do)(e),{pickFiles:F,onDragover:y,onDragleave:x,processFiles:S,getDndNode:C}=p({editable:d.editable,dnd:v,getFileInput:R,addFilesToQueue:P}),q=(0,m.Z)(e),V=(0,a.Fl)((()=>Object(e.modelValue)===e.modelValue?"length"in e.modelValue?Array.from(e.modelValue):[e.modelValue]:[])),N=(0,a.Fl)((()=>(0,o.yV)(V.value))),k=(0,a.Fl)((()=>V.value.map((e=>e.name)).join(", "))),_=(0,a.Fl)((()=>(0,h.rB)(V.value.reduce(((e,t)=>e+t.size),0)))),z=(0,a.Fl)((()=>({totalSize:_.value,filesNumber:V.value.length,maxFiles:e.maxFiles}))),j=(0,a.Fl)((()=>({tabindex:-1,type:"file",title:"",accept:e.accept,capture:e.capture,name:g.value,...u,id:d.targetUid.value,disabled:!0!==d.editable.value}))),D=(0,a.Fl)((()=>"q-file q-field--auto-height"+(!0===v.value?" q-file--dnd":""))),T=(0,a.Fl)((()=>!0===e.multiple&&!0===e.append));function O(e){const t=V.value.slice();t.splice(e,1),A(t)}function B(e){const t=V.value.indexOf(e);t>-1&&O(t)}function A(t){l("update:modelValue",!0===e.multiple?t:t[0])}function E(e){13===e.keyCode&&(0,s.X$)(e)}function L(e){13!==e.keyCode&&32!==e.keyCode||F(e)}function R(){return f.value}function P(t,l){const a=S(t,l,V.value,T.value),n=R();void 0!==n&&null!==n&&(n.value=""),void 0!==a&&((!0===e.multiple?e.modelValue&&a.every((e=>V.value.includes(e))):e.modelValue===a[0])||A(!0===T.value?V.value.concat(a):a))}function Z(){return[(0,a.h)("input",{class:[e.inputClass,"q-file__filler"],style:e.inputStyle})]}function $(){if(void 0!==t.file)return 0===V.value.length?Z():V.value.map(((e,l)=>t.file({index:l,file:e,ref:this})));if(void 0!==t.selected)return 0===V.value.length?Z():t.selected({files:V.value,ref:this});if(!0===e.useChips)return 0===V.value.length?Z():V.value.map(((t,l)=>(0,a.h)(i.Z,{key:"file-"+l,removable:d.editable.value,dense:!0,textColor:e.color,tabindex:e.tabindex,onRemove:()=>{O(l)}},(()=>(0,a.h)("span",{class:"ellipsis",textContent:t.name})))));const l=void 0!==e.displayValue?e.displayValue:k.value;return 0!==l.length?[(0,a.h)("div",{class:e.inputClass,style:e.inputStyle,textContent:l})]:Z()}function w(){const t={ref:f,...j.value,...q.value,class:"q-field__input fit absolute-full cursor-pointer",onChange:P};return!0===e.multiple&&(t.multiple=!0),(0,a.h)("input",t)}return Object.assign(d,{fieldClass:D,emitValue:A,hasValue:N,inputRef:f,innerValue:V,floatingLabel:(0,a.Fl)((()=>!0===N.value||(0,o.yV)(e.displayValue))),computedCounter:(0,a.Fl)((()=>{if(void 0!==e.counterLabel)return e.counterLabel(z.value);const t=e.maxFiles;return`${V.value.length}${void 0!==t?" / "+t:""} (${_.value})`})),getControlChild:()=>C("file"),getControl:()=>{const t={ref:d.targetRef,class:"q-field__native row items-center cursor-pointer",tabindex:e.tabindex};return!0===d.editable.value&&Object.assign(t,{onDragover:y,onDragleave:x,onKeydown:E,onKeyup:L}),(0,a.h)("div",t,[w()].concat($()))}}),Object.assign(c,{removeAtIndex:O,removeFile:B,getNativeElement:()=>f.value}),(0,b.g)(c,"nativeEl",(()=>f.value)),(0,o.ZP)(d)}})},7537:(e,t,l)=>{l.d(t,{Z:()=>d});l(5954);var a=l(6929),n=l(7218),i=l(859),o=l(4290),r=l(1651),u=l(8192),s=l(7623),c=l(8586);const d=(0,i.L)({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(e,{slots:t,emit:l}){const i=(0,a.FN)(),d=(0,n.iH)(null);let f=0;const v=[];function p(t){const a="boolean"===typeof t?t:!0!==e.noErrorFocus,n=++f,i=(e,t)=>{l("validation"+(!0===e?"Success":"Error"),t)},o=e=>{const t=e.validate();return"function"===typeof t.then?t.then((t=>({valid:t,comp:e})),(t=>({valid:!1,comp:e,err:t}))):Promise.resolve({valid:t,comp:e})},r=!0===e.greedy?Promise.all(v.map(o)).then((e=>e.filter((e=>!0!==e.valid)))):v.reduce(((e,t)=>e.then((()=>o(t).then((e=>{if(!1===e.valid)return Promise.reject(e)}))))),Promise.resolve()).catch((e=>[e]));return r.then((e=>{if(void 0===e||0===e.length)return n===f&&i(!0),!0;if(n===f){const{comp:t,err:l}=e[0];if(void 0!==l&&console.error(l),i(!1,t),!0===a){const t=e.find((({comp:e})=>"function"===typeof e.focus&&!1===(0,c.$D)(e.$)));void 0!==t&&t.comp.focus()}}return!1}))}function m(){f++,v.forEach((e=>{"function"===typeof e.resetValidation&&e.resetValidation()}))}function g(t){void 0!==t&&(0,o.NS)(t);const a=f+1;p().then((n=>{a===f&&!0===n&&(void 0!==e.onSubmit?l("submit",t):void 0!==t&&void 0!==t.target&&"function"===typeof t.target.submit&&t.target.submit())}))}function h(t){void 0!==t&&(0,o.NS)(t),l("reset"),(0,a.Y3)((()=>{m(),!0===e.autofocus&&!0!==e.noResetFocus&&b()}))}function b(){(0,r.jd)((()=>{if(null===d.value)return;const e=d.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||d.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||d.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(d.value.querySelectorAll("[tabindex]"),(e=>e.tabIndex>-1));null!==e&&void 0!==e&&e.focus({preventScroll:!0})}))}(0,a.JJ)(s.vh,{bindComponent(e){v.push(e)},unbindComponent(e){const t=v.indexOf(e);t>-1&&v.splice(t,1)}});let F=!1;return(0,a.se)((()=>{F=!0})),(0,a.dl)((()=>{!0===F&&!0===e.autofocus&&b()})),(0,a.bv)((()=>{!0===e.autofocus&&b()})),Object.assign(i.proxy,{validate:p,resetValidation:m,submit:g,reset:h,focus:b,getValidationComponents:()=>v}),()=>(0,a.h)("form",{class:"q-form",ref:d,onSubmit:g,onReset:h},(0,u.KR)(t.default))}})}}]);