"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[8231],{7537:(t,e,s)=>{s.d(e,{Z:()=>p});s(5954);var r=s(6929),n=s(7218),a=s(859),o=s(4290),i=s(1651),c=s(8192),l=s(7623),d=s(8586);const p=(0,a.L)({name:"QForm",props:{autofocus:Boolean,noErrorFocus:Boolean,noResetFocus:Boolean,greedy:Boolean,onSubmit:Function},emits:["reset","validationSuccess","validationError"],setup(t,{slots:e,emit:s}){const a=(0,r.FN)(),p=(0,n.iH)(null);let u=0;const S=[];function g(e){const r="boolean"===typeof e?e:!0!==t.noErrorFocus,n=++u,a=(t,e)=>{s("validation"+(!0===t?"Success":"Error"),e)},o=t=>{const e=t.validate();return"function"===typeof e.then?e.then((e=>({valid:e,comp:t})),(e=>({valid:!1,comp:t,err:e}))):Promise.resolve({valid:e,comp:t})},i=!0===t.greedy?Promise.all(S.map(o)).then((t=>t.filter((t=>!0!==t.valid)))):S.reduce(((t,e)=>t.then((()=>o(e).then((t=>{if(!1===t.valid)return Promise.reject(t)}))))),Promise.resolve()).catch((t=>[t]));return i.then((t=>{if(void 0===t||0===t.length)return n===u&&a(!0),!0;if(n===u){const{comp:e,err:s}=t[0];if(void 0!==s&&console.error(s),a(!1,e),!0===r){const e=t.find((({comp:t})=>"function"===typeof t.focus&&!1===(0,d.$D)(t.$)));void 0!==e&&e.comp.focus()}}return!1}))}function h(){u++,S.forEach((t=>{"function"===typeof t.resetValidation&&t.resetValidation()}))}function m(e){void 0!==e&&(0,o.NS)(e);const r=u+1;g().then((n=>{r===u&&!0===n&&(void 0!==t.onSubmit?s("submit",e):void 0!==e&&void 0!==e.target&&"function"===typeof e.target.submit&&e.target.submit())}))}function f(e){void 0!==e&&(0,o.NS)(e),s("reset"),(0,r.Y3)((()=>{h(),!0===t.autofocus&&!0!==t.noResetFocus&&_()}))}function _(){(0,i.jd)((()=>{if(null===p.value)return;const t=p.value.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||p.value.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||p.value.querySelector("[autofocus], [data-autofocus]")||Array.prototype.find.call(p.value.querySelectorAll("[tabindex]"),(t=>t.tabIndex>-1));null!==t&&void 0!==t&&t.focus({preventScroll:!0})}))}(0,r.JJ)(l.vh,{bindComponent(t){S.push(t)},unbindComponent(t){const e=S.indexOf(t);e>-1&&S.splice(e,1)}});let I=!1;return(0,r.se)((()=>{I=!0})),(0,r.dl)((()=>{!0===I&&!0===t.autofocus&&_()})),(0,r.bv)((()=>{!0===t.autofocus&&_()})),Object.assign(a.proxy,{validate:g,resetValidation:h,submit:m,reset:f,focus:_,getValidationComponents:()=>S}),()=>(0,r.h)("form",{class:"q-form",ref:p,onSubmit:m,onReset:f},(0,c.KR)(e.default))}})},7959:(t,e,s)=>{s.d(e,{Z:()=>i});var r=s(6929),n=s(859),a=s(8192),o=s(7623);const i=(0,n.L)({name:"QPage",props:{padding:Boolean,styleFn:Function},setup(t,{slots:e}){const{proxy:{$q:s}}=(0,r.FN)(),n=(0,r.f3)(o.YE,o.qO);if(n===o.qO)return console.error("QPage needs to be a deep child of QLayout"),o.qO;const i=(0,r.f3)(o.Mw,o.qO);if(i===o.qO)return console.error("QPage needs to be child of QPageContainer"),o.qO;const c=(0,r.Fl)((()=>{const e=(!0===n.header.space?n.header.size:0)+(!0===n.footer.space?n.footer.size:0);if("function"===typeof t.styleFn){const r=!0===n.isContainer.value?n.containerHeight.value:s.screen.height;return t.styleFn(e,r)}return{minHeight:!0===n.isContainer.value?n.containerHeight.value-e+"px":0===s.screen.height?0!==e?`calc(100vh - ${e}px)`:"100vh":s.screen.height-e+"px"}})),l=(0,r.Fl)((()=>"q-page"+(!0===t.padding?" q-layout-padding":"")));return()=>(0,r.h)("main",{class:l.value,style:c.value},(0,a.KR)(e.default))}})},5125:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>translateMIPS2Verilog});var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5954),core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_0__);class Bit32{constructor(t){this.value=t,this.value=t}toHex(){return parseInt(this.value,2).toString(16).padStart(8,"0")}}class RType{constructor(t,e,s="00000",r,n="00000",a,o){this.op=t,this.func=e,this.shift=s,this.rd=r,this.rs=n,this.rt=a,this.name=o,this.op=t,this.func=e,this.shift=s,this.rd=r,this.rs=n,this.rt=a,this.name=o}toString(){return new Bit32(`${this.op}${this.func}${this.shift}${this.rd}${this.rs}${this.rt}`)}getName(){return this.name}}class IType{constructor(t,e,s,r,n){this.op=t,this.imm=e,this.rs=s,this.rt=r,this.name=n,this.op=t,this.imm=e,this.rs=s,this.rt=r,this.name=n}toString(){return new Bit32(`${this.op}${this.imm}${this.rs}${this.rt}`)}getName(){return this.name}}class JType{constructor(t,e,s){this.op=t,this.addr=e,this.name=s,this.op=t,this.addr=e,this.name=s}toString(){return new Bit32(`${this.op}${this.addr}`)}getName(){return this.name}}class Add extends RType{constructor(t,e,s){super("000000","000001","00000",parseInt(t.slice(1)).toString(2).padStart(5,"0"),parseInt(e.slice(1)).toString(2).padStart(5,"0"),parseInt(s.slice(1)).toString(2).padStart(5,"0"),"add")}}class And extends RType{constructor(t,e,s){super("000001","000001","00000",parseInt(t.slice(1)).toString(2).padStart(5,"0"),parseInt(e.slice(1)).toString(2).padStart(5,"0"),parseInt(s.slice(1)).toString(2).padStart(5,"0"),"and")}}class Or extends RType{constructor(t,e,s){super("000001","000010","00000",parseInt(t.slice(1)).toString(2).padStart(5,"0"),parseInt(e.slice(1)).toString(2).padStart(5,"0"),parseInt(s.slice(1)).toString(2).padStart(5,"0"),"or")}}class Xor extends RType{constructor(t,e,s){super("000001","000100","00000",parseInt(t.slice(1)).toString(2).padStart(5,"0"),parseInt(e.slice(1)).toString(2).padStart(5,"0"),parseInt(s.slice(1)).toString(2).padStart(5,"0"),"xor")}}class Srl extends RType{constructor(t,e,s){super("000010","000010",parseInt(s.slice(2),16).toString(2).padStart(5,"0"),parseInt(t.slice(1)).toString(2).padStart(5,"0"),"00000",parseInt(e.slice(1)).toString(2).padStart(5,"0"),"srl")}}class Sll extends RType{constructor(t,e,s){super("000010","000011",parseInt(t.slice(2),16).toString(2).padStart(5,"0"),parseInt(e.slice(1)).toString(2).padStart(5,"0"),"00000",parseInt(s.slice(1)).toString(2).padStart(5,"0"),"sll")}}class Addi extends IType{constructor(t,e,s){super("000101",parseInt(s.slice(2),16).toString(2).padStart(16,"0"),parseInt(e.slice(1)).toString(2).padStart(5,"0"),parseInt(t.slice(1)).toString(2).padStart(5,"0"),"addi")}}class Andi extends IType{constructor(t,e,s){super("001001",parseInt(s.slice(2),16).toString(2).padStart(16,"0"),parseInt(e.slice(1)).toString(2).padStart(5,"0"),parseInt(t.slice(1)).toString(2).padStart(5,"0"),"andi")}}class Ori extends IType{constructor(t,e,s){super("001010",parseInt(s.slice(2),16).toString(2).padStart(16,"0"),parseInt(e.slice(1)).toString(2).padStart(5,"0"),parseInt(t.slice(1)).toString(2).padStart(5,"0"),"ori")}}class Xori extends IType{constructor(t,e,s){super("001100",parseInt(s.slice(2),16).toString(2).padStart(16,"0"),parseInt(e.slice(1)).toString(2).padStart(5,"0"),parseInt(t.slice(1)).toString(2).padStart(5,"0"),"xori")}}class Load extends IType{constructor(t,e,s){super("001101",parseInt(e.slice(2),16).toString(2).padStart(16,"0"),parseInt(s.slice(1)).toString(2).padStart(5,"0"),parseInt(t.slice(1)).toString(2).padStart(5,"0"),"load")}}class Store extends IType{constructor(t,e,s){super("001110",parseInt(e.slice(2),16).toString(2).padStart(16,"0"),parseInt(s.slice(1)).toString(2).padStart(5,"0"),parseInt(t.slice(1)).toString(2).padStart(5,"0"),"store")}}class Beq extends IType{constructor(t,e,s,r){const n=parseInt(r.slice(3),16)-t-1<0?parseInt(r.slice(3),16)-t-1+Math.pow(2,16):parseInt(r.slice(3),16)-t-1;super("001111",n.toString(2).padStart(16,"0"),parseInt(e.slice(1)).toString(2).padStart(5,"0"),parseInt(s.slice(1)).toString(2).padStart(5,"0"),"beq")}}class Bne extends IType{constructor(t,e,s,r){const n=parseInt(r.slice(3),16)-t-1<0?parseInt(r.slice(3),16)-t-1+Math.pow(2,16):parseInt(r.slice(3),16)-t-1;super("010000",n.toString(2).padStart(16,"0"),parseInt(e.slice(1)).toString(2).padStart(5,"0"),parseInt(s.slice(1)).toString(2).padStart(5,"0"),"bne")}}class Jump extends JType{constructor(t){super("010010",parseInt(t.slice(2),16).toString(2).padStart(26,"0"),"jump")}}function translateMIPS2Verilog(input){const verilogCode=["assign rom[6'h00] = 32'h00000000;"];function addInstructionToROM(t){verilogCode.push(`assign rom[6'h${verilogCode.length.toString(16).padStart(2,"0")}] = 32'h${t.toString().toHex()};`)}for(const[index,instruction]of input.entries()){const[name,...args]=instruction.split(" "),instruction_class=eval(name.charAt(0).toUpperCase()+name.slice(1));if("store"===name){const[t,...e]=args[0].split(","),[s,r]=e.join(" ").split("("),n=new Store(t,s,r.slice(0,-1));addInstructionToROM(n)}else if("load"===name){const[t,...e]=args[0].split(","),[s,r]=e.join(" ").split("("),n=new Load(t,s,r.slice(0,-1));addInstructionToROM(n)}else if("beq"===name){const[t,e,s]=args[0].split(","),r=new Beq(index+1,t,e,s);addInstructionToROM(r)}else if("bne"===name){const[t,e,s]=args[0].split(","),r=new Bne(index+1,t,e,s);addInstructionToROM(r)}else if("jump"===name){const t=new Jump(args[0]);addInstructionToROM(t)}else if("add"===name){const[t,...e]=args[0].split(","),[s,r]=e,n=new Add(t,s,r);addInstructionToROM(n)}else if("sll"===name){const[t,...e]=args[0].split(","),[s,r]=e,n=new Sll(r,t,s);addInstructionToROM(n)}else if("srl"===name){const[t,...e]=args[0].split(","),[s,r]=e,n=new Srl(t,s,r);addInstructionToROM(n)}else if("addi"===name){const[t,...e]=args[0].split(","),[s,r]=e,n=new Addi(t,s,r);addInstructionToROM(n)}else if("and"===name){const[t,...e]=args[0].split(","),[s,r]=e,n=new And(t,s,r);addInstructionToROM(n)}else if("andi"===name){const[t,...e]=args[0].split(","),[s,r]=e,n=new Andi(t,s,r);addInstructionToROM(n)}else if("or"===name){const[t,...e]=args[0].split(","),[s,r]=e,n=new Or(t,s,r);addInstructionToROM(n)}else if("ori"===name){const[t,...e]=args[0].split(","),[s,r]=e,n=new Ori(t,s,r);addInstructionToROM(n)}else if("xor"===name){const[t,...e]=args[0].split(","),[s,r]=e,n=new Xor(t,s,r);addInstructionToROM(n)}else if("xori"===name){const[t,...e]=args[0].split(","),[s,r]=e,n=new Xori(t,s,r);addInstructionToROM(n)}}return verilogCode}},8231:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});var r=s(6929),n=s(7218),a=s(5125);const o={class:"flex"},i={class:"flex flex-center q-mt-md"},c={__name:"TranslatePage",setup(t){const e=(0,n.iH)("addi r1,r1,0x0004\nor r4,r5,r6\naddi r3,r2,0x0\nbeq r3,r4,6'h0b\naddi r1,r1,0x0004\naddi r1,r1,0x0004\naddi r1,r1,0x0004\naddi r1,r1,0x0004\naddi r1,r1,0x0004\naddi r1,r1,0x0004\naddi r1,r1,0x0004\naddi r1,r1,0x0004"),s=(0,n.iH)("");function c(){s.value=(0,a.l)(e.value.split("\n").filter((t=>""!==t.trim()))).join("\n")}return(t,n)=>{const a=(0,r.up)("q-input"),l=(0,r.up)("q-btn"),d=(0,r.up)("q-form"),p=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(p,{padding:"",class:"flex flex-center"},{default:(0,r.w5)((()=>[(0,r.Wm)(d,{onSubmit:t.submit},{default:(0,r.w5)((()=>[(0,r._)("div",o,[(0,r.Wm)(a,{modelValue:e.value,"onUpdate:modelValue":n[0]||(n[0]=t=>e.value=t),label:"指令",type:"textarea",class:"q-ma-md",autogrow:"",style:{width:"30vw",height:"50vh"}},null,8,["modelValue"]),(0,r.Wm)(a,{modelValue:s.value,"onUpdate:modelValue":n[1]||(n[1]=t=>s.value=t),label:"Verilog",type:"textarea",class:"q-ma-md",autogrow:"",style:{width:"30vw",height:"50vh"}},null,8,["modelValue"])]),(0,r._)("div",i,[(0,r.Wm)(l,{label:"生成字节码",type:"submit",onClick:c})])])),_:1},8,["onSubmit"])])),_:1})}}};var l=s(7959),d=s(7537),p=s(9033),u=s(5779),S=s(9332),g=s.n(S);const h=c,m=h;g()(c,"components",{QPage:l.Z,QForm:d.Z,QInput:p.Z,QBtn:u.Z})}}]);