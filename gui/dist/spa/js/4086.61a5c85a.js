"use strict";(globalThis["webpackChunkventusblog"]=globalThis["webpackChunkventusblog"]||[]).push([[4086],{4086:(e,t,n)=>{function r(e,t,n){return t(n),n(e,t)}n.r(t),n.d(t,{elm:()=>x});var i=/[a-z]/,a=/[A-Z]/,u=/[a-zA-Z0-9_]/,o=/[0-9]/,s=/[0-9A-Fa-f]/,l=/[-&*+.\\/<>=?^|:]/,f=/[(),[\]{}]/,c=/[ \v\f]/;function h(){return function(e,t){if(e.eatWhile(c))return null;var n=e.next();if(f.test(n))return"{"===n&&e.eat("-")?r(e,t,p(1)):"["===n&&e.match("glsl|")?r(e,t,v):"builtin";if("'"===n)return r(e,t,g);if('"'===n)return e.eat('"')?e.eat('"')?r(e,t,k):"string":r(e,t,m);if(a.test(n))return e.eatWhile(u),"type";if(i.test(n)){var h=1===e.pos;return e.eatWhile(u),h?"def":"variable"}if(o.test(n)){if("0"===n){if(e.eat(/[xX]/))return e.eatWhile(s),"number"}else e.eatWhile(o);return e.eat(".")&&e.eatWhile(o),e.eat(/[eE]/)&&(e.eat(/[-+]/),e.eatWhile(o)),"number"}return l.test(n)?"-"===n&&e.eat("-")?(e.skipToEnd(),"comment"):(e.eatWhile(l),"keyword"):"_"===n?"keyword":"error"}}function p(e){return 0==e?h():function(t,n){while(!t.eol()){var r=t.next();if("{"==r&&t.eat("-"))++e;else if("-"==r&&t.eat("}")&&(--e,0===e))return n(h()),"comment"}return n(p(e)),"comment"}}function k(e,t){while(!e.eol()){var n=e.next();if('"'===n&&e.eat('"')&&e.eat('"'))return t(h()),"string"}return"string"}function m(e,t){while(e.skipTo('\\"'))e.next(),e.next();return e.skipTo('"')?(e.next(),t(h()),"string"):(e.skipToEnd(),t(h()),"error")}function g(e,t){while(e.skipTo("\\'"))e.next(),e.next();return e.skipTo("'")?(e.next(),t(h()),"string"):(e.skipToEnd(),t(h()),"error")}function v(e,t){while(!e.eol()){var n=e.next();if("|"===n&&e.eat("]"))return t(h()),"string"}return"string"}var w={case:1,of:1,as:1,if:1,then:1,else:1,let:1,in:1,type:1,alias:1,module:1,where:1,import:1,exposing:1,port:1};const x={name:"elm",startState:function(){return{f:h()}},copyState:function(e){return{f:e.f}},token:function(e,t){var n=t.f(e,(function(e){t.f=e})),r=e.current();return w.hasOwnProperty(r)?"keyword":n},languageData:{commentTokens:{line:"--"}}}}}]);