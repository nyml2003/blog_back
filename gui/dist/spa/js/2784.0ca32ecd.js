"use strict";(globalThis["webpackChunkventusblog"]=globalThis["webpackChunkventusblog"]||[]).push([[2784],{2784:(e,t,n)=>{function r(e,t,n){return function(r,i){while(!r.eol()){if(r.match(t)){i.tokenize=u;break}r.next()}return n&&(i.tokenize=n),e}}function i(e){return function(t,n){while(!t.eol())t.next();return n.tokenize=u,e}}function u(e,t){function n(n){return t.tokenize=n,n(e,t)}var a=e.sol(),o=e.next();switch(o){case"{":return e.eat("/"),e.eatSpace(),e.eatWhile(/[^\s\u00a0=\"\'\/?(}]/),t.tokenize=l,"tag";case"_":if(e.eat("_"))return n(r("strong","__",u));break;case"'":if(e.eat("'"))return n(r("em","''",u));break;case"(":if(e.eat("("))return n(r("link","))",u));break;case"[":return n(r("url","]",u));case"|":if(e.eat("|"))return n(r("comment","||"));break;case"-":if(e.eat("="))return n(r("header string","=-",u));if(e.eat("-"))return n(r("error tw-deleted","--",u));break;case"=":if(e.match("=="))return n(r("tw-underline","===",u));break;case":":if(e.eat(":"))return n(r("comment","::"));break;case"^":return n(r("tw-box","^"));case"~":if(e.match("np~"))return n(r("meta","~/np~"));break}if(a)switch(o){case"!":return e.match("!!!!!")||e.match("!!!!")||e.match("!!!")||e.match("!!"),n(i("header string"));case"*":case"#":case"+":return n(i("tw-listitem bracket"))}return null}var a,o,c,s;function l(e,t){var n=e.next(),r=e.peek();return"}"==n?(t.tokenize=u,"tag"):"("==n||")"==n?"bracket":"="==n?(o="equals",">"==r&&(e.next(),r=e.peek()),/[\'\"]/.test(r)||(t.tokenize=k()),"operator"):/[\'\"]/.test(n)?(t.tokenize=f(n),t.tokenize(e,t)):(e.eatWhile(/[^\s\u00a0=\"\'\/?]/),"keyword")}function f(e){return function(t,n){while(!t.eol())if(t.next()==e){n.tokenize=l;break}return"string"}}function k(){return function(e,t){while(!e.eol()){var n=e.next(),r=e.peek();if(" "==n||","==n||/[ )}]/.test(r)){t.tokenize=l;break}}return"string"}}function d(){for(var e=arguments.length-1;e>=0;e--)c.cc.push(arguments[e])}function g(){return d.apply(null,arguments),!0}function h(e,t){var n=c.context&&c.context.noIndent;c.context={prev:c.context,pluginName:e,indent:c.indented,startOfLine:t,noIndent:n}}function p(){c.context&&(c.context=c.context.prev)}function m(e){if("openPlugin"==e)return c.pluginName=a,g(w,b(c.startOfLine));if("closePlugin"==e){var t=!1;return c.context?(t=c.context.pluginName!=a,p()):t=!0,t&&(s="error"),g(x(t))}return"string"==e?(c.context&&"!cdata"==c.context.name||h("!cdata"),c.tokenize==u&&p(),g()):g()}function b(e){return function(t){return"selfclosePlugin"==t||"endPlugin"==t?g():"endPlugin"==t?(h(c.pluginName,e),g()):g()}}function x(e){return function(t){return e&&(s="error"),"endPlugin"==t?g():d()}}function w(e){return"keyword"==e?(s="attribute",g(w)):"equals"==e?g(v,w):d()}function v(e){return"keyword"==e?(s="string",g()):"string"==e?g(z):d()}function z(e){return"string"==e?g(z):d()}n.r(t),n.d(t,{tiki:()=>L});const L={name:"tiki",startState:function(){return{tokenize:u,cc:[],indented:0,startOfLine:!0,pluginName:null,context:null}},token:function(e,t){if(e.sol()&&(t.startOfLine=!0,t.indented=e.indentation()),e.eatSpace())return null;s=o=a=null;var n=t.tokenize(e,t);if((n||o)&&"comment"!=n){c=t;while(1){var r=t.cc.pop()||m;if(r(o||n))break}}return t.startOfLine=!1,s||n},indent:function(e,t,n){var r=e.context;if(r&&r.noIndent)return 0;r&&/^{\//.test(t)&&(r=r.prev);while(r&&!r.startOfLine)r=r.prev;return r?r.indent+n.unit:0}}}}]);