"use strict";(globalThis["webpackChunkventusblog"]=globalThis["webpackChunkventusblog"]||[]).push([[8003],{8003:(e,t,n)=>{function r(e){return{type:e,style:"keyword"}}n.r(t),n.d(t,{haxe:()=>oe,hxml:()=>le});var a,i=r("keyword a"),o=r("keyword b"),l=r("keyword c"),u=r("operator"),c={type:"atom",style:"atom"},f={type:"attribute",style:"attribute"},s=r("typedef"),d={if:i,while:i,else:o,do:o,try:o,return:l,break:l,continue:l,new:l,throw:l,var:r("var"),inline:f,static:f,using:r("import"),public:f,private:f,cast:r("cast"),import:r("import"),macro:r("macro"),function:r("function"),catch:r("catch"),untyped:r("untyped"),callback:r("cb"),for:r("for"),switch:r("switch"),case:r("case"),default:r("default"),in:u,never:r("property_access"),trace:r("trace"),class:s,abstract:s,enum:s,interface:s,typedef:s,extends:s,implements:s,dynamic:s,true:c,false:c,null:c},p=/[+\-*&%=<>!?|]/;function m(e,t,n){return t.tokenize=n,n(e,t)}function v(e,t){var n,r=!1;while(null!=(n=e.next())){if(n==t&&!r)return!0;r=!r&&"\\"==n}}function h(e,t,n){return s=e,a=n,t}function b(e,t){var n=e.next();if('"'==n||"'"==n)return m(e,t,y(n));if(/[\[\]{}\(\),;\:\.]/.test(n))return h(n);if("0"==n&&e.eat(/x/i))return e.eatWhile(/[\da-f]/i),h("number","number");if(/\d/.test(n)||"-"==n&&e.eat(/\d/))return e.match(/^\d*(?:\.\d*(?!\.))?(?:[eE][+\-]?\d+)?/),h("number","number");if(t.reAllowed&&"~"==n&&e.eat(/\//))return v(e,"/"),e.eatWhile(/[gimsu]/),h("regexp","string.special");if("/"==n)return e.eat("*")?m(e,t,k):e.eat("/")?(e.skipToEnd(),h("comment","comment")):(e.eatWhile(p),h("operator",null,e.current()));if("#"==n)return e.skipToEnd(),h("conditional","meta");if("@"==n)return e.eat(/:/),e.eatWhile(/[\w_]/),h("metadata","meta");if(p.test(n))return e.eatWhile(p),h("operator",null,e.current());if(/[A-Z]/.test(n))return e.eatWhile(/[\w_<>]/),r=e.current(),h("type","type",r);e.eatWhile(/[\w_]/);var r=e.current(),a=d.propertyIsEnumerable(r)&&d[r];return a&&t.kwAllowed?h(a.type,a.style,r):h("variable","variable",r)}function y(e){return function(t,n){return v(t,e)&&(n.tokenize=b),h("string","string")}}function k(e,t){var n,r=!1;while(n=e.next()){if("/"==n&&r){t.tokenize=b;break}r="*"==n}return h("comment","comment")}var x={atom:!0,number:!0,variable:!0,string:!0,regexp:!0};function w(e,t,n,r,a,i){this.indented=e,this.column=t,this.type=n,this.prev=a,this.info=i,null!=r&&(this.align=r)}function g(e,t){for(var n=e.localVars;n;n=n.next)if(n.name==t)return!0}function A(e,t,n,r,a){var i=e.cc;T.state=e,T.stream=a,T.marked=null,T.cc=i,e.lexical.hasOwnProperty("align")||(e.lexical.align=!0);while(1){var o=i.length?i.pop():N;if(o(n,r)){while(i.length&&i[i.length-1].lex)i.pop()();return T.marked?T.marked:"variable"==n&&g(e,r)?"variableName.local":"variable"==n&&V(e,r)?"variableName.special":t}}}function V(e,t){if(/[a-z]/.test(t.charAt(0)))return!1;for(var n=e.importedtypes.length,r=0;r<n;r++)if(e.importedtypes[r]==t)return!0}function S(e){for(var t=T.state,n=t.importedtypes;n;n=n.next)if(n.name==e)return;t.importedtypes={name:e,next:t.importedtypes}}var T={state:null,column:null,marked:null,cc:null};function W(){for(var e=arguments.length-1;e>=0;e--)T.cc.push(arguments[e])}function z(){return W.apply(null,arguments),!0}function E(e,t){for(var n=t;n;n=n.next)if(n.name==e)return!0;return!1}function D(e){var t=T.state;if(t.context){if(T.marked="def",E(e,t.localVars))return;t.localVars={name:e,next:t.localVars}}else if(t.globalVars){if(E(e,t.globalVars))return;t.globalVars={name:e,next:t.globalVars}}}var O={name:"this",next:null};function Z(){T.state.context||(T.state.localVars=O),T.state.context={prev:T.state.context,vars:T.state.localVars}}function P(){T.state.localVars=T.state.context.vars,T.state.context=T.state.context.prev}function _(e,t){var n=function(){var n=T.state;n.lexical=new w(n.indented,T.stream.column(),e,null,n.lexical,t)};return n.lex=!0,n}function I(){var e=T.state;e.lexical.prev&&(")"==e.lexical.type&&(e.indented=e.lexical.indented),e.lexical=e.lexical.prev)}function C(e){function t(n){return n==e?z():";"==e?W():z(t)}return t}function N(e){return"@"==e?z(q):"var"==e?z(_("vardef"),U,C(";"),I):"keyword a"==e?z(_("form"),$,N,I):"keyword b"==e?z(_("form"),N,I):"{"==e?z(_("}"),Z,R,I,P):";"==e?z():"attribute"==e?z(j):"function"==e?z(te):"for"==e?z(_("form"),C("("),_(")"),Y,C(")"),I,N,I):"variable"==e?z(_("stat"),K):"switch"==e?z(_("form"),$,_("}","switch"),C("{"),R,I,I):"case"==e?z($,C(":")):"default"==e?z(C(":")):"catch"==e?z(_("form"),Z,C("("),ie,C(")"),N,I,P):"import"==e?z(H,C(";")):"typedef"==e?z(J):W(_("stat"),$,C(";"),I)}function $(e){return x.hasOwnProperty(e)||"type"==e?z(F):"function"==e?z(te):"keyword c"==e?z(B):"("==e?z(_(")"),B,C(")"),I,F):"operator"==e?z($):"["==e?z(_("]"),Q(B,"]"),I,F):"{"==e?z(_("}"),Q(M,"}"),I,F):z()}function B(e){return e.match(/[;\}\)\],]/)?W():W($)}function F(e,t){return"operator"==e&&/\+\+|--/.test(t)?z(F):"operator"==e||":"==e?z($):";"!=e?"("==e?z(_(")"),Q($,")"),I,F):"."==e?z(L,F):"["==e?z(_("]"),$,C("]"),I,F):void 0:void 0}function j(e){return"attribute"==e?z(j):"function"==e?z(te):"var"==e?z(U):void 0}function q(e){return":"==e||"variable"==e?z(q):"("==e?z(_(")"),Q(G,")"),I,N):void 0}function G(e){if("variable"==e)return z()}function H(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(S(t),z()):"variable"==e||"property"==e||"."==e||"*"==t?z(H):void 0}function J(e,t){return"variable"==e&&/[A-Z]/.test(t.charAt(0))?(S(t),z()):"type"==e&&/[A-Z]/.test(t.charAt(0))?z():void 0}function K(e){return":"==e?z(I,N):W(F,C(";"),I)}function L(e){if("variable"==e)return T.marked="property",z()}function M(e){if("variable"==e&&(T.marked="property"),x.hasOwnProperty(e))return z(C(":"),$)}function Q(e,t){function n(r){return","==r?z(e,n):r==t?z():z(C(t))}return function(r){return r==t?z():W(e,n)}}function R(e){return"}"==e?z():W(N,R)}function U(e,t){return"variable"==e?(D(t),z(ne,X)):z()}function X(e,t){return"="==t?z($,X):","==e?z(U):void 0}function Y(e,t){return"variable"==e?(D(t),z(ee,$)):W()}function ee(e,t){if("in"==t)return z()}function te(e,t){return"variable"==e||"type"==e?(D(t),z(te)):"new"==t?z(te):"("==e?z(_(")"),Z,Q(ie,")"),I,ne,N,P):void 0}function ne(e){if(":"==e)return z(re)}function re(e){return"type"==e||"variable"==e?z():"{"==e?z(_("}"),Q(ae,"}"),I):void 0}function ae(e){if("variable"==e)return z(ne)}function ie(e,t){if("variable"==e)return D(t),z(ne)}P.lex=!0,I.lex=!0;const oe={name:"haxe",startState:function(e){var t=["Int","Float","String","Void","Std","Bool","Dynamic","Array"],n={tokenize:b,reAllowed:!0,kwAllowed:!0,cc:[],lexical:new w(-e,0,"block",!1),importedtypes:t,context:null,indented:0};return n},token:function(e,t){if(e.sol()&&(t.lexical.hasOwnProperty("align")||(t.lexical.align=!1),t.indented=e.indentation()),e.eatSpace())return null;var n=t.tokenize(e,t);return"comment"==s?n:(t.reAllowed=!("operator"!=s&&"keyword c"!=s&&!s.match(/^[\[{}\(,;:]$/)),t.kwAllowed="."!=s,A(t,n,s,a,e))},indent:function(e,t,n){if(e.tokenize!=b)return 0;var r=t&&t.charAt(0),a=e.lexical;"stat"==a.type&&"}"==r&&(a=a.prev);var i=a.type,o=r==i;return"vardef"==i?a.indented+4:"form"==i&&"{"==r?a.indented:"stat"==i||"form"==i?a.indented+n.unit:"switch"!=a.info||o?a.align?a.column+(o?0:1):a.indented+(o?0:n.unit):a.indented+(/^(?:case|default)\b/.test(t)?n.unit:2*n.unit)},languageData:{indentOnInput:/^\s*[{}]$/,commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}},le={name:"hxml",startState:function(){return{define:!1,inString:!1}},token:function(e,t){var n=e.peek(),r=e.sol();if("#"==n)return e.skipToEnd(),"comment";if(r&&"-"==n){var a="variable-2";return e.eat(/-/),"-"==e.peek()&&(e.eat(/-/),a="keyword a"),"D"==e.peek()&&(e.eat(/[D]/),a="keyword c",t.define=!0),e.eatWhile(/[A-Z]/i),a}n=e.peek();return 0==t.inString&&"'"==n&&(t.inString=!0,e.next()),1==t.inString?(e.skipTo("'")||e.skipToEnd(),"'"==e.peek()&&(e.next(),t.inString=!1),"string"):(e.next(),null)},languageData:{commentTokens:{line:"#"}}}}}]);