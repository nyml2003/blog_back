"use strict";(globalThis["webpackChunkventusblog"]=globalThis["webpackChunkventusblog"]||[]).push([[6002],{6002:(e,t,n)=>{n.r(t),n.d(t,{coffeeScript:()=>x});var r="error";function o(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}var i=/^(?:->|=>|\+[+=]?|-[\-=]?|\*[\*=]?|\/[\/=]?|[=!]=|<[><]?=?|>>?=?|%=?|&=?|\|=?|\^=?|\~|!|\?|(or|and|\|\||&&|\?)=)/,c=/^(?:[()\[\]{},:`=;]|\.\.?\.?)/,a=/^[_A-Za-z$][_A-Za-z$0-9]*/,f=/^@[_A-Za-z$][_A-Za-z$0-9]*/,p=o(["and","or","not","is","isnt","in","instanceof","typeof"]),s=["for","while","loop","if","unless","else","switch","try","catch","finally","class"],u=["break","by","continue","debugger","delete","do","in","of","new","return","then","this","@","throw","when","until","extends"],l=o(s.concat(u));s=o(s);var h=/^('{3}|\"{3}|['\"])/,d=/^(\/{3}|\/)/,m=["Infinity","NaN","undefined","null","true","false","on","off","yes","no"],v=o(m);function k(e,t){if(e.sol()){null===t.scope.align&&(t.scope.align=!1);var n=t.scope.offset;if(e.eatSpace()){var o=e.indentation();return o>n&&"coffee"==t.scope.type?"indent":o<n?"dedent":null}n>0&&z(e,t)}if(e.eatSpace())return null;var s=e.peek();if(e.match("####"))return e.skipToEnd(),"comment";if(e.match("###"))return t.tokenize=y,t.tokenize(e,t);if("#"===s)return e.skipToEnd(),"comment";if(e.match(/^-?[0-9\.]/,!1)){var u=!1;if(e.match(/^-?\d*\.\d+(e[\+\-]?\d+)?/i)&&(u=!0),e.match(/^-?\d+\.\d*/)&&(u=!0),e.match(/^-?\.\d+/)&&(u=!0),u)return"."==e.peek()&&e.backUp(1),"number";var m=!1;if(e.match(/^-?0x[0-9a-f]+/i)&&(m=!0),e.match(/^-?[1-9]\d*(e[\+\-]?\d+)?/)&&(m=!0),e.match(/^-?0(?![\dx])/i)&&(m=!0),m)return"number"}if(e.match(h))return t.tokenize=g(e.current(),!1,"string"),t.tokenize(e,t);if(e.match(d)){if("/"!=e.current()||e.match(/^.*\//,!1))return t.tokenize=g(e.current(),!0,"string.special"),t.tokenize(e,t);e.backUp(1)}return e.match(i)||e.match(p)?"operator":e.match(c)?"punctuation":e.match(v)?"atom":e.match(f)||t.prop&&e.match(a)?"property":e.match(l)?"keyword":e.match(a)?"variable":(e.next(),r)}function g(e,t,n){return function(r,o){while(!r.eol())if(r.eatWhile(/[^'"\/\\]/),r.eat("\\")){if(r.next(),t&&r.eol())return n}else{if(r.match(e))return o.tokenize=k,n;r.eat(/['"\/]/)}return t&&(o.tokenize=k),n}}function y(e,t){while(!e.eol()){if(e.eatWhile(/[^#]/),e.match("###")){t.tokenize=k;break}e.eatWhile("#")}return"comment"}function b(e,t,n="coffee"){for(var r=0,o=!1,i=null,c=t.scope;c;c=c.prev)if("coffee"===c.type||"}"==c.type){r=c.offset+e.indentUnit;break}"coffee"!==n?(o=null,i=e.column()+e.current().length):t.scope.align&&(t.scope.align=!1),t.scope={offset:r,type:n,prev:t.scope,align:o,alignOffset:i}}function z(e,t){if(t.scope.prev){if("coffee"===t.scope.type){for(var n=e.indentation(),r=!1,o=t.scope;o;o=o.prev)if(n===o.offset){r=!0;break}if(!r)return!0;while(t.scope.prev&&t.scope.offset!==n)t.scope=t.scope.prev;return!1}return t.scope=t.scope.prev,!1}}function w(e,t){var n=t.tokenize(e,t),o=e.current();"return"===o&&(t.dedent=!0),(("->"===o||"=>"===o)&&e.eol()||"indent"===n)&&b(e,t);var i="[({".indexOf(o);if(-1!==i&&b(e,t,"])}".slice(i,i+1)),s.exec(o)&&b(e,t),"then"==o&&z(e,t),"dedent"===n&&z(e,t))return r;if(i="])}".indexOf(o),-1!==i){while("coffee"==t.scope.type&&t.scope.prev)t.scope=t.scope.prev;t.scope.type==o&&(t.scope=t.scope.prev)}return t.dedent&&e.eol()&&("coffee"==t.scope.type&&t.scope.prev&&(t.scope=t.scope.prev),t.dedent=!1),"indent"==n||"dedent"==n?null:n}const x={name:"coffeescript",startState:function(){return{tokenize:k,scope:{offset:0,type:"coffee",prev:null,align:!1},prop:!1,dedent:0}},token:function(e,t){var n=null===t.scope.align&&t.scope;n&&e.sol()&&(n.align=!1);var r=w(e,t);return r&&"comment"!=r&&(n&&(n.align=!0),t.prop="punctuation"==r&&"."==e.current()),r},indent:function(e,t){if(e.tokenize!=k)return 0;var n=e.scope,r=t&&"])}".indexOf(t.charAt(0))>-1;if(r)while("coffee"==n.type&&n.prev)n=n.prev;var o=r&&n.type===t.charAt(0);return n.align?n.alignOffset-(o?1:0):(o?n.prev:n).offset},languageData:{commentTokens:{line:"#"}}}}}]);