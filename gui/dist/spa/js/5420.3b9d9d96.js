"use strict";(globalThis["webpackChunkventusblog"]=globalThis["webpackChunkventusblog"]||[]).push([[5420],{5420:(e,t,n)=>{n.r(t),n.d(t,{erlang:()=>H});var r=["-type","-spec","-export_type","-opaque"],i=["after","begin","catch","case","cond","end","fun","if","let","of","query","receive","try","when"],o=/[\->,;]/,a=["->",";",","],c=["and","andalso","band","bnot","bor","bsl","bsr","bxor","div","not","or","orelse","rem","xor"],u=/[\+\-\*\/<>=\|:!]/,s=["=","+","-","*","/",">",">=","<","=<","=:=","==","=/=","/=","||","<-","!"],l=/[<\(\[\{]/,_=["<<","(","[","{"],f=/[>\)\]\}]/,p=["}","]",")",">>"],m=["is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_record","is_reference","is_tuple","atom","binary","bitstring","boolean","function","integer","list","number","pid","port","record","reference","tuple"],b=["abs","adler32","adler32_combine","alive","apply","atom_to_binary","atom_to_list","binary_to_atom","binary_to_existing_atom","binary_to_list","binary_to_term","bit_size","bitstring_to_list","byte_size","check_process_code","contact_binary","crc32","crc32_combine","date","decode_packet","delete_module","disconnect_node","element","erase","exit","float","float_to_list","garbage_collect","get","get_keys","group_leader","halt","hd","integer_to_list","internal_bif","iolist_size","iolist_to_binary","is_alive","is_atom","is_binary","is_bitstring","is_boolean","is_float","is_function","is_integer","is_list","is_number","is_pid","is_port","is_process_alive","is_record","is_reference","is_tuple","length","link","list_to_atom","list_to_binary","list_to_bitstring","list_to_existing_atom","list_to_float","list_to_integer","list_to_pid","list_to_tuple","load_module","make_ref","module_loaded","monitor_node","node","node_link","node_unlink","nodes","notalive","now","open_port","pid_to_list","port_close","port_command","port_connect","port_control","pre_loaded","process_flag","process_info","processes","purge_module","put","register","registered","round","self","setelement","size","spawn","spawn_link","spawn_monitor","spawn_opt","split_binary","statistics","term_to_binary","time","throw","tl","trunc","tuple_size","tuple_to_list","unlink","unregister","whereis"],d=/[\w@Ø-ÞÀ-Öß-öø-ÿ]/,g=/[0-7]{1,3}|[bdefnrstv\\"']|\^[a-zA-Z]|x[0-9a-zA-Z]{2}|x{[0-9a-zA-Z]+}/;function k(e,t){if(t.in_string)return t.in_string=!v(e),W(t,e,"string");if(t.in_atom)return t.in_atom=!w(e),W(t,e,"atom");if(e.eatSpace())return W(t,e,"whitespace");if(!Z(t)&&e.match(/-\s*[a-zß-öø-ÿ][\wØ-ÞÀ-Öß-öø-ÿ]*/))return z(e.current(),r)?W(t,e,"type"):W(t,e,"attribute");var n=e.next();if("%"==n)return e.skipToEnd(),W(t,e,"comment");if(":"==n)return W(t,e,"colon");if("?"==n)return e.eatSpace(),e.eatWhile(d),W(t,e,"macro");if("#"==n)return e.eatSpace(),e.eatWhile(d),W(t,e,"record");if("$"==n)return"\\"!=e.next()||e.match(g)?W(t,e,"number"):W(t,e,"error");if("."==n)return W(t,e,"dot");if("'"==n){if(!(t.in_atom=!w(e))){if(e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),W(t,e,"fun");if(e.match(/\s*\(/,!1)||e.match(/\s*:/,!1))return W(t,e,"function")}return W(t,e,"atom")}if('"'==n)return t.in_string=!v(e),W(t,e,"string");if(/[A-Z_Ø-ÞÀ-Ö]/.test(n))return e.eatWhile(d),W(t,e,"variable");if(/[a-z_ß-öø-ÿ]/.test(n)){if(e.eatWhile(d),e.match(/\s*\/\s*[0-9]/,!1))return e.match(/\s*\/\s*[0-9]/,!0),W(t,e,"fun");var k=e.current();return z(k,i)?W(t,e,"keyword"):z(k,c)?W(t,e,"operator"):e.match(/\s*\(/,!1)?!z(k,b)||":"==Z(t).token&&"erlang"!=Z(t,2).token?z(k,m)?W(t,e,"guard"):W(t,e,"function"):W(t,e,"builtin"):":"==S(e)?W(t,e,"erlang"==k?"builtin":"function"):z(k,["true","false"])?W(t,e,"boolean"):W(t,e,"atom")}var x=/[0-9]/,U=/[0-9a-zA-Z]/;return x.test(n)?(e.eatWhile(x),e.eat("#")?e.eatWhile(U)||e.backUp(1):e.eat(".")&&(e.eatWhile(x)?e.eat(/[eE]/)&&(e.eat(/[-+]/)?e.eatWhile(x)||e.backUp(2):e.eatWhile(x)||e.backUp(1)):e.backUp(1)),W(t,e,"number")):h(e,l,_)?W(t,e,"open_paren"):h(e,f,p)?W(t,e,"close_paren"):y(e,o,a)?W(t,e,"separator"):y(e,u,s)?W(t,e,"operator"):W(t,e,null)}function h(e,t,n){if(1==e.current().length&&t.test(e.current())){e.backUp(1);while(t.test(e.peek()))if(e.next(),z(e.current(),n))return!0;e.backUp(e.current().length-1)}return!1}function y(e,t,n){if(1==e.current().length&&t.test(e.current())){while(t.test(e.peek()))e.next();while(0<e.current().length){if(z(e.current(),n))return!0;e.backUp(1)}e.next()}return!1}function v(e){return x(e,'"',"\\")}function w(e){return x(e,"'","\\")}function x(e,t,n){while(!e.eol()){var r=e.next();if(r==t)return!0;r==n&&e.next()}return!1}function S(e){var t=e.match(/^\s*([^\s%])/,!1);return t?t[1]:""}function z(e,t){return-1<t.indexOf(e)}function W(e,t,n){switch(T(e,A(n,t)),n){case"atom":return"atom";case"attribute":return"attribute";case"boolean":return"atom";case"builtin":return"builtin";case"close_paren":return null;case"colon":return null;case"comment":return"comment";case"dot":return null;case"error":return"error";case"fun":return"meta";case"function":return"tag";case"guard":return"property";case"keyword":return"keyword";case"macro":return"macroName";case"number":return"number";case"open_paren":return null;case"operator":return"operator";case"record":return"bracket";case"separator":return null;case"string":return"string";case"type":return"def";case"variable":return"variable";default:return null}}function U(e,t,n,r){return{token:e,column:t,indent:n,type:r}}function A(e,t){return U(t.current(),t.column(),t.indentation(),e)}function E(e){return U(e,0,0,e)}function Z(e,t){var n=e.tokenStack.length,r=t||1;return!(n<r)&&e.tokenStack[n-r]}function T(e,t){"comment"!=t.type&&"whitespace"!=t.type&&(e.tokenStack=q(e.tokenStack,t),e.tokenStack=C(e.tokenStack))}function q(e,t){var n=e.length-1;return 0<n&&"record"===e[n].type&&"dot"===t.type?e.pop():0<n&&"group"===e[n].type?(e.pop(),e.push(t)):e.push(t),e}function C(e){if(!e.length)return e;var t=e.length-1;if("dot"===e[t].type)return[];if(t>1&&"fun"===e[t].type&&"fun"===e[t-1].token)return e.slice(0,t-1);switch(e[t].token){case"}":return D(e,{g:["{"]});case"]":return D(e,{i:["["]});case")":return D(e,{i:["("]});case">>":return D(e,{i:["<<"]});case"end":return D(e,{i:["begin","case","fun","if","receive","try"]});case",":return D(e,{e:["begin","try","when","->",",","(","[","{","<<"]});case"->":return D(e,{r:["when"],m:["try","if","case","receive"]});case";":return D(e,{E:["case","fun","if","receive","try","when"]});case"catch":return D(e,{e:["try"]});case"of":return D(e,{e:["case"]});case"after":return D(e,{e:["receive","try"]});default:return e}}function D(e,t){for(var n in t)for(var r=e.length-1,i=t[n],o=r-1;-1<o;o--)if(z(e[o].token,i)){var a=e.slice(0,o);switch(n){case"m":return a.concat(e[o]).concat(e[r]);case"r":return a.concat(e[r]);case"i":return a;case"g":return a.concat(E("group"));case"E":return a.concat(e[o]);case"e":return a.concat(e[o])}}return"E"==n?[]:e}function N(e,t,n){var r,i=O(t),o=Z(e,1),a=Z(e,2);return e.in_string||e.in_atom?null:a?"when"==o.token?o.column+n.unit:"when"===i&&"function"===a.type?a.indent+n.unit:"("===i&&"fun"===o.token?o.column+3:"catch"===i&&(r=B(e,["try"]))?r.column:z(i,["end","after","of"])?(r=B(e,["begin","case","fun","if","receive","try"]),r?r.column:null):z(i,p)?(r=B(e,_),r?r.column:null):z(o.token,[",","|","||"])||z(i,[",","|","||"])?(r=$(e),r?r.column+r.token.length:n.unit):"->"==o.token?z(a.token,["receive","case","if","try"])?a.column+n.unit+n.unit:a.column+n.unit:z(o.token,_)?o.column+o.token.length:(r=j(e),G(r)?r.column+n.unit:0):0}function O(e){var t=e.match(/,|[a-z]+|\}|\]|\)|>>|\|+|\(/);return G(t)&&0===t.index?t[0]:""}function $(e){var t=e.tokenStack.slice(0,-1),n=F(t,"type",["open_paren"]);return!!G(t[n])&&t[n]}function j(e){var t=e.tokenStack,n=F(t,"type",["open_paren","separator","keyword"]),r=F(t,"type",["operator"]);return G(n)&&G(r)&&n<r?t[n+1]:!!G(n)&&t[n]}function B(e,t){var n=e.tokenStack,r=F(n,"token",t);return!!G(n[r])&&n[r]}function F(e,t,n){for(var r=e.length-1;-1<r;r--)if(z(e[r][t],n))return r;return!1}function G(e){return!1!==e&&null!=e}const H={name:"erlang",startState(){return{tokenStack:[],in_string:!1,in_atom:!1}},token:k,indent:N,languageData:{commentTokens:{line:"%"}}}}}]);