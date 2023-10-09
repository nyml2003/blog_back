"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[5235],{5235:(e,t,n)=>{n.r(t),n.d(t,{xQuery:()=>w});var r=function(){function e(e){return{type:e,style:"keyword"}}for(var t=e("operator"),n={type:"atom",style:"atom"},r={type:"punctuation",style:null},a={type:"axis_specifier",style:"qualifier"},i={",":r},s=["after","all","allowing","ancestor","ancestor-or-self","any","array","as","ascending","at","attribute","base-uri","before","boundary-space","by","case","cast","castable","catch","child","collation","comment","construction","contains","content","context","copy","copy-namespaces","count","decimal-format","declare","default","delete","descendant","descendant-or-self","descending","diacritics","different","distance","document","document-node","element","else","empty","empty-sequence","encoding","end","entire","every","exactly","except","external","first","following","following-sibling","for","from","ftand","ftnot","ft-option","ftor","function","fuzzy","greatest","group","if","import","in","inherit","insensitive","insert","instance","intersect","into","invoke","is","item","language","last","lax","least","let","levels","lowercase","map","modify","module","most","namespace","next","no","node","nodes","no-inherit","no-preserve","not","occurs","of","only","option","order","ordered","ordering","paragraph","paragraphs","parent","phrase","preceding","preceding-sibling","preserve","previous","processing-instruction","relationship","rename","replace","return","revalidation","same","satisfies","schema","schema-attribute","schema-element","score","self","sensitive","sentence","sentences","sequence","skip","sliding","some","stable","start","stemming","stop","strict","strip","switch","text","then","thesaurus","times","to","transform","treat","try","tumbling","type","typeswitch","union","unordered","update","updating","uppercase","using","validate","value","variable","version","weight","when","where","wildcards","window","with","without","word","words","xquery"],o=0,c=s.length;o<c;o++)i[s[o]]=e(s[o]);var u=["xs:anyAtomicType","xs:anySimpleType","xs:anyType","xs:anyURI","xs:base64Binary","xs:boolean","xs:byte","xs:date","xs:dateTime","xs:dateTimeStamp","xs:dayTimeDuration","xs:decimal","xs:double","xs:duration","xs:ENTITIES","xs:ENTITY","xs:float","xs:gDay","xs:gMonth","xs:gMonthDay","xs:gYear","xs:gYearMonth","xs:hexBinary","xs:ID","xs:IDREF","xs:IDREFS","xs:int","xs:integer","xs:item","xs:java","xs:language","xs:long","xs:Name","xs:NCName","xs:negativeInteger","xs:NMTOKEN","xs:NMTOKENS","xs:nonNegativeInteger","xs:nonPositiveInteger","xs:normalizedString","xs:NOTATION","xs:numeric","xs:positiveInteger","xs:precisionDecimal","xs:QName","xs:short","xs:string","xs:time","xs:token","xs:unsignedByte","xs:unsignedInt","xs:unsignedLong","xs:unsignedShort","xs:untyped","xs:untypedAtomic","xs:yearMonthDuration"];for(o=0,c=u.length;o<c;o++)i[u[o]]=n;var l=["eq","ne","lt","le","gt","ge",":=","=",">",">=","<","<=",".","|","?","and","or","div","idiv","mod","*","/","+","-"];for(o=0,c=l.length;o<c;o++)i[l[o]]=t;var f=["self::","attribute::","child::","descendant::","descendant-or-self::","parent::","ancestor::","ancestor-or-self::","following::","preceding::","following-sibling::","preceding-sibling::"];for(o=0,c=f.length;o<c;o++)i[f[o]]=a;return i}();function a(e,t,n){return t.tokenize=n,n(e,t)}function i(e,t){var n=e.next(),i=!1,l=y(e);if("<"==n){if(e.match("!--",!0))return a(e,t,f);if(e.match("![CDATA",!1))return t.tokenize=p,"tag";if(e.match("?",!1))return a(e,t,g);var x=e.eat("/");e.eatSpace();var h,k="";while(h=e.eat(/[^\s\u00a0=<>\"\'\/?]/))k+=h;return a(e,t,u(k,x))}if("{"==n)return v(t,{type:"codeblock"}),null;if("}"==n)return b(t),null;if(m(t))return">"==n?"tag":"/"==n&&e.eat(">")?(b(t),"tag"):"variable";if(/\d/.test(n))return e.match(/^\d*(?:\.\d*)?(?:E[+\-]?\d+)?/),"atom";if("("===n&&e.eat(":"))return v(t,{type:"comment"}),a(e,t,s);if(l||'"'!==n&&"'"!==n){if("$"===n)return a(e,t,c);if(":"===n&&e.eat("="))return"keyword";if("("===n)return v(t,{type:"paren"}),null;if(")"===n)return b(t),null;if("["===n)return v(t,{type:"bracket"}),null;if("]"===n)return b(t),null;var w=r.propertyIsEnumerable(n)&&r[n];if(l&&'"'===n)while('"'!==e.next());if(l&&"'"===n)while("'"!==e.next());w||e.eatWhile(/[\w\$_-]/);var z=e.eat(":");!e.eat(":")&&z&&e.eatWhile(/[\w\$_-]/),e.match(/^[ \t]*\(/,!1)&&(i=!0);var T=e.current();return w=r.propertyIsEnumerable(T)&&r[T],i&&!w&&(w={type:"function_call",style:"def"}),d(t)?(b(t),"variable"):("element"!=T&&"attribute"!=T&&"axis_specifier"!=w.type||v(t,{type:"xmlconstructor"}),w?w.style:"variable")}return a(e,t,o(n))}function s(e,t){var n,r=!1,a=!1,i=0;while(n=e.next()){if(")"==n&&r){if(!(i>0)){b(t);break}i--}else":"==n&&a&&i++;r=":"==n,a="("==n}return"comment"}function o(e,t){return function(n,r){var a;if(h(r)&&n.current()==e)return b(r),t&&(r.tokenize=t),"string";if(v(r,{type:"string",name:e,tokenize:o(e,t)}),n.match("{",!1)&&x(r))return r.tokenize=i,"string";while(a=n.next()){if(a==e){b(r),t&&(r.tokenize=t);break}if(n.match("{",!1)&&x(r))return r.tokenize=i,"string"}return"string"}}function c(e,t){var n=/[\w\$_-]/;if(e.eat('"')){while('"'!==e.next());e.eat(":")}else e.eatWhile(n),e.match(":=",!1)||e.eat(":");return e.eatWhile(n),t.tokenize=i,"variable"}function u(e,t){return function(n,r){return n.eatSpace(),t&&n.eat(">")?(b(r),r.tokenize=i,"tag"):(n.eat("/")||v(r,{type:"tag",name:e,tokenize:i}),n.eat(">")?(r.tokenize=i,"tag"):(r.tokenize=l,"tag"))}}function l(e,t){var n=e.next();return"/"==n&&e.eat(">")?(x(t)&&b(t),m(t)&&b(t),"tag"):">"==n?(x(t)&&b(t),"tag"):"="==n?null:'"'==n||"'"==n?a(e,t,o(n,l)):(x(t)||v(t,{type:"attribute",tokenize:l}),e.eat(/[a-zA-Z_:]/),e.eatWhile(/[-a-zA-Z0-9_:.]/),e.eatSpace(),(e.match(">",!1)||e.match("/",!1))&&(b(t),t.tokenize=i),"attribute")}function f(e,t){var n;while(n=e.next())if("-"==n&&e.match("->",!0))return t.tokenize=i,"comment"}function p(e,t){var n;while(n=e.next())if("]"==n&&e.match("]",!0))return t.tokenize=i,"comment"}function g(e,t){var n;while(n=e.next())if("?"==n&&e.match(">",!0))return t.tokenize=i,"processingInstruction"}function m(e){return k(e,"tag")}function x(e){return k(e,"attribute")}function d(e){return k(e,"xmlconstructor")}function h(e){return k(e,"string")}function y(e){return'"'===e.current()?e.match(/^[^\"]+\"\:/,!1):"'"===e.current()&&e.match(/^[^\"]+\'\:/,!1)}function k(e,t){return e.stack.length&&e.stack[e.stack.length-1].type==t}function v(e,t){e.stack.push(t)}function b(e){e.stack.pop();var t=e.stack.length&&e.stack[e.stack.length-1].tokenize;e.tokenize=t||i}const w={name:"xquery",startState:function(){return{tokenize:i,cc:[],stack:[]}},token:function(e,t){if(e.eatSpace())return null;var n=t.tokenize(e,t);return n},languageData:{commentTokens:{block:{open:"(:",close:":)"}}}}}}]);