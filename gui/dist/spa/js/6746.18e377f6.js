"use strict";(globalThis["webpackChunkventusblog"]=globalThis["webpackChunkventusblog"]||[]).push([[6746],{6746:(I,_,R)=>{R.r(_),R.d(_,{ntriples:()=>e});var n={PRE_SUBJECT:0,WRITING_SUB_URI:1,WRITING_BNODE_URI:2,PRE_PRED:3,WRITING_PRED_URI:4,PRE_OBJ:5,WRITING_OBJ_URI:6,WRITING_OBJ_BNODE:7,WRITING_OBJ_LITERAL:8,WRITING_LIT_LANG:9,WRITING_LIT_TYPE:10,POST_OBJ:11,ERROR:12};function t(I,_){var R,t=I.location;R=t==n.PRE_SUBJECT&&"<"==_?n.WRITING_SUB_URI:t==n.PRE_SUBJECT&&"_"==_?n.WRITING_BNODE_URI:t==n.PRE_PRED&&"<"==_?n.WRITING_PRED_URI:t==n.PRE_OBJ&&"<"==_?n.WRITING_OBJ_URI:t==n.PRE_OBJ&&"_"==_?n.WRITING_OBJ_BNODE:t==n.PRE_OBJ&&'"'==_?n.WRITING_OBJ_LITERAL:t==n.WRITING_SUB_URI&&">"==_||t==n.WRITING_BNODE_URI&&" "==_?n.PRE_PRED:t==n.WRITING_PRED_URI&&">"==_?n.PRE_OBJ:t==n.WRITING_OBJ_URI&&">"==_||t==n.WRITING_OBJ_BNODE&&" "==_||t==n.WRITING_OBJ_LITERAL&&'"'==_||t==n.WRITING_LIT_LANG&&" "==_||t==n.WRITING_LIT_TYPE&&">"==_?n.POST_OBJ:t==n.WRITING_OBJ_LITERAL&&"@"==_?n.WRITING_LIT_LANG:t==n.WRITING_OBJ_LITERAL&&"^"==_?n.WRITING_LIT_TYPE:" "!=_||t!=n.PRE_SUBJECT&&t!=n.PRE_PRED&&t!=n.PRE_OBJ&&t!=n.POST_OBJ?t==n.POST_OBJ&&"."==_?n.PRE_SUBJECT:n.ERROR:t,I.location=R}const e={name:"ntriples",startState:function(){return{location:n.PRE_SUBJECT,uris:[],anchors:[],bnodes:[],langs:[],types:[]}},token:function(I,_){var R=I.next();if("<"==R){t(_,R);var n="";return I.eatWhile((function(I){return"#"!=I&&">"!=I&&(n+=I,!0)})),_.uris.push(n),I.match("#",!1)?"variable":(I.next(),t(_,">"),"variable")}if("#"==R){var e="";return I.eatWhile((function(I){return">"!=I&&" "!=I&&(e+=I,!0)})),_.anchors.push(e),"url"}if(">"==R)return t(_,">"),"variable";if("_"==R){t(_,R);var r="";return I.eatWhile((function(I){return" "!=I&&(r+=I,!0)})),_.bnodes.push(r),I.next(),t(_," "),"builtin"}if('"'==R)return t(_,R),I.eatWhile((function(I){return'"'!=I})),I.next(),"@"!=I.peek()&&"^"!=I.peek()&&t(_,'"'),"string";if("@"==R){t(_,"@");var T="";return I.eatWhile((function(I){return" "!=I&&(T+=I,!0)})),_.langs.push(T),I.next(),t(_," "),"string.special"}if("^"==R){I.next(),t(_,"^");var E="";return I.eatWhile((function(I){return">"!=I&&(E+=I,!0)})),_.types.push(E),I.next(),t(_,">"),"variable"}" "==R&&t(_,R),"."==R&&t(_,R)}}}}]);