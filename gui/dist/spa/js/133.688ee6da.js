"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[133],{133:(e,t,n)=>{function r(e){return new RegExp("^(("+e.join(")|(")+"))\\b")}n.r(t),n.d(t,{cython:()=>f,mkPython:()=>s,python:()=>u});var i=r(["and","or","not","is"]),a=["as","assert","break","class","continue","def","del","elif","else","except","finally","for","from","global","if","import","lambda","pass","raise","return","try","while","with","yield","in","False","True"],o=["abs","all","any","bin","bool","bytearray","callable","chr","classmethod","compile","complex","delattr","dict","dir","divmod","enumerate","eval","filter","float","format","frozenset","getattr","globals","hasattr","hash","help","hex","id","input","int","isinstance","issubclass","iter","len","list","locals","map","max","memoryview","min","next","object","oct","open","ord","pow","property","range","repr","reversed","round","set","setattr","slice","sorted","staticmethod","str","sum","super","tuple","type","vars","zip","__import__","NotImplemented","Ellipsis","__debug__"];function l(e){return e.scopes[e.scopes.length-1]}function s(e){for(var t="error",n=e.delimiters||e.singleDelimiters||/^[\(\)\[\]\{\}@,:`=;\.\\]/,s=[e.singleOperators,e.doubleOperators,e.doubleDelimiters,e.tripleDelimiters,e.operators||/^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/],c=0;c<s.length;c++)s[c]||s.splice(c--,1);var u=e.hangingIndent,f=a,p=o;void 0!=e.extra_keywords&&(f=f.concat(e.extra_keywords)),void 0!=e.extra_builtins&&(p=p.concat(e.extra_builtins));var d=!(e.version&&Number(e.version)<3);if(d){var m=e.identifiers||/^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;f=f.concat(["nonlocal","None","aiter","anext","async","await","breakpoint","match","case"]),p=p.concat(["ascii","bytes","exec","print"]);var h=new RegExp("^(([rbuf]|(br)|(rb)|(fr)|(rf))?('{3}|\"{3}|['\"]))","i")}else{m=e.identifiers||/^[_A-Za-z][_A-Za-z0-9]*/;f=f.concat(["exec","print"]),p=p.concat(["apply","basestring","buffer","cmp","coerce","execfile","file","intern","long","raw_input","reduce","reload","unichr","unicode","xrange","None"]);h=new RegExp("^(([rubf]|(ur)|(br))?('{3}|\"{3}|['\"]))","i")}var b=r(f),g=r(p);function y(e,n){var r=e.sol()&&"\\"!=n.lastToken;if(r&&(n.indent=e.indentation()),r&&"py"==l(n).type){var i=l(n).offset;if(e.eatSpace()){var a=e.indentation();return a>i?w(e,n):a<i&&z(e,n)&&"#"!=e.peek()&&(n.errorToken=!0),null}var o=k(e,n);return i>0&&z(e,n)&&(o+=" "+t),o}return k(e,n)}function k(e,r,a){if(e.eatSpace())return null;if(!a&&e.match(/^#.*/))return"comment";if(e.match(/^[0-9\.]/,!1)){var o=!1;if(e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i)&&(o=!0),e.match(/^[\d_]+\.\d*/)&&(o=!0),e.match(/^\.\d+/)&&(o=!0),o)return e.eat(/J/i),"number";var l=!1;if(e.match(/^0x[0-9a-f_]+/i)&&(l=!0),e.match(/^0b[01_]+/i)&&(l=!0),e.match(/^0o[0-7_]+/i)&&(l=!0),e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/)&&(e.eat(/J/i),l=!0),e.match(/^0(?![\dx])/i)&&(l=!0),l)return e.eat(/L/i),"number"}if(e.match(h)){var c=-1!==e.current().toLowerCase().indexOf("f");return c?(r.tokenize=v(e.current(),r.tokenize),r.tokenize(e,r)):(r.tokenize=x(e.current(),r.tokenize),r.tokenize(e,r))}for(var u=0;u<s.length;u++)if(e.match(s[u]))return"operator";return e.match(n)?"punctuation":"."==r.lastToken&&e.match(m)?"property":e.match(b)||e.match(i)?"keyword":e.match(g)?"builtin":e.match(/^(self|cls)\b/)?"self":e.match(m)?"def"==r.lastToken||"class"==r.lastToken?"def":"variable":(e.next(),a?null:t)}function v(n,r){while("rubf".indexOf(n.charAt(0).toLowerCase())>=0)n=n.substr(1);var i=1==n.length,a="string";function o(e){return function(t,n){var r=k(t,n,!0);return"punctuation"==r&&("{"==t.current()?n.tokenize=o(e+1):"}"==t.current()&&(n.tokenize=e>1?o(e-1):l)),r}}function l(l,s){while(!l.eol())if(l.eatWhile(/[^'"\{\}\\]/),l.eat("\\")){if(l.next(),i&&l.eol())return a}else{if(l.match(n))return s.tokenize=r,a;if(l.match("{{"))return a;if(l.match("{",!1))return s.tokenize=o(0),l.current()?a:s.tokenize(l,s);if(l.match("}}"))return a;if(l.match("}"))return t;l.eat(/['"]/)}if(i){if(e.singleLineStringErrors)return t;s.tokenize=r}return a}return l.isString=!0,l}function x(n,r){while("rubf".indexOf(n.charAt(0).toLowerCase())>=0)n=n.substr(1);var i=1==n.length,a="string";function o(o,l){while(!o.eol())if(o.eatWhile(/[^'"\\]/),o.eat("\\")){if(o.next(),i&&o.eol())return a}else{if(o.match(n))return l.tokenize=r,a;o.eat(/['"]/)}if(i){if(e.singleLineStringErrors)return t;l.tokenize=r}return a}return o.isString=!0,o}function w(e,t){while("py"!=l(t).type)t.scopes.pop();t.scopes.push({offset:l(t).offset+e.indentUnit,type:"py",align:null})}function _(e,t,n){var r=e.match(/^[\s\[\{\(]*(?:#|$)/,!1)?null:e.column()+1;t.scopes.push({offset:t.indent+(u||e.indentUnit),type:n,align:r})}function z(e,t){var n=e.indentation();while(t.scopes.length>1&&l(t).offset>n){if("py"!=l(t).type)return!0;t.scopes.pop()}return l(t).offset!=n}function T(e,n){e.sol()&&(n.beginningOfLine=!0,n.dedent=!1);var r=n.tokenize(e,n),i=e.current();if(n.beginningOfLine&&"@"==i)return e.match(m,!1)?"meta":d?"operator":t;if(/\S/.test(i)&&(n.beginningOfLine=!1),"variable"!=r&&"builtin"!=r||"meta"!=n.lastToken||(r="meta"),"pass"!=i&&"return"!=i||(n.dedent=!0),"lambda"==i&&(n.lambda=!0),":"==i&&!n.lambda&&"py"==l(n).type&&e.match(/^\s*(?:#|$)/,!1)&&w(e,n),1==i.length&&!/string|comment/.test(r)){var a="[({".indexOf(i);if(-1!=a&&_(e,n,"])}".slice(a,a+1)),a="])}".indexOf(i),-1!=a){if(l(n).type!=i)return t;n.indent=n.scopes.pop().offset-(u||e.indentUnit)}}return n.dedent&&e.eol()&&"py"==l(n).type&&n.scopes.length>1&&n.scopes.pop(),r}return{name:"python",startState:function(){return{tokenize:y,scopes:[{offset:0,type:"py",align:null}],indent:0,lastToken:null,lambda:!1,dedent:0}},token:function(e,n){var r=n.errorToken;r&&(n.errorToken=!1);var i=T(e,n);return i&&"comment"!=i&&(n.lastToken="keyword"==i||"punctuation"==i?e.current():i),"punctuation"==i&&(i=null),e.eol()&&n.lambda&&(n.lambda=!1),r?t:i},indent:function(e,t,n){if(e.tokenize!=y)return e.tokenize.isString?null:0;var r=l(e),i=r.type==t.charAt(0)||"py"==r.type&&!e.dedent&&/^(else:|elif |except |finally:)/.test(t);return null!=r.align?r.align-(i?1:0):r.offset-(i?u||n.unit:0)},languageData:{autocomplete:a.concat(o).concat(["exec","print"]),indentOnInput:/^\s*([\}\]\)]|else:|elif |except |finally:)$/,commentTokens:{line:"#"},closeBrackets:{brackets:["(","[","{","'",'"',"'''",'"""']}}}}var c=function(e){return e.split(" ")};const u=s({}),f=s({extra_keywords:c("by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE")})}}]);