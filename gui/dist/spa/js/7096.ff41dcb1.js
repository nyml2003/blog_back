"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[7096],{7096:(t,e,n)=>{var r;function a(t,e){return r=e,t}function u(t,e){var n=t.next();if("<"!=n||!t.eat("!")){if("<"==n&&t.eat("?"))return e.tokenize=c("meta","?>"),a("meta",n);if("#"==n&&t.eatWhile(/[\w]/))return a("atom","tag");if("|"==n)return a("keyword","separator");if(n.match(/[\(\)\[\]\-\.,\+\?>]/))return a(null,n);if(n.match(/[\[\]]/))return a("rule",n);if('"'==n||"'"==n)return e.tokenize=l(n),e.tokenize(t,e);if(t.eatWhile(/[a-zA-Z\?\+\d]/)){var r=t.current();return null!==r.substr(r.length-1,r.length).match(/\?|\+/)&&t.backUp(1),a("tag","tag")}return"%"==n||"*"==n?a("number","number"):(t.eatWhile(/[\w\\\-_%.{,]/),a(null,null))}return t.eatWhile(/[\-]/)?(e.tokenize=i,i(t,e)):t.eatWhile(/[\w]/)?a("keyword","doindent"):void 0}function i(t,e){var n,r=0;while(null!=(n=t.next())){if(r>=2&&">"==n){e.tokenize=u;break}r="-"==n?r+1:0}return a("comment","comment")}function l(t){return function(e,n){var r,i=!1;while(null!=(r=e.next())){if(r==t&&!i){n.tokenize=u;break}i=!i&&"\\"==r}return a("string","tag")}}function c(t,e){return function(n,r){while(!n.eol()){if(n.match(e)){r.tokenize=u;break}n.next()}return t}}n.r(e),n.d(e,{dtd:()=>s});const s={name:"dtd",startState:function(){return{tokenize:u,baseIndent:0,stack:[]}},token:function(t,e){if(t.eatSpace())return null;var n=e.tokenize(t,e),a=e.stack[e.stack.length-1];return"["==t.current()||"doindent"===r||"["==r?e.stack.push("rule"):"endtag"===r?e.stack[e.stack.length-1]="endtag":"]"==t.current()||"]"==r||">"==r&&"rule"==a?e.stack.pop():"["==r&&e.stack.push("["),n},indent:function(t,e,n){var a=t.stack.length;return"]"===e.charAt(0)?a--:">"===e.substr(e.length-1,e.length)&&("<"===e.substr(0,1)||"doindent"==r&&e.length>1||("doindent"==r?a--:">"==r&&e.length>1||"tag"==r&&">"!==e||("tag"==r&&"rule"==t.stack[t.stack.length-1]?a--:"tag"==r?a++:">"===e&&"rule"==t.stack[t.stack.length-1]&&">"===r?a--:">"===e&&"rule"==t.stack[t.stack.length-1]||("<"!==e.substr(0,1)&&">"===e.substr(0,1)?a-=1:">"===e||(a-=1)))),null!=r&&"]"!=r||a--),t.baseIndent+a*n.unit},languageData:{indentOnInput:/^\s*[\]>]$/}}}}]);