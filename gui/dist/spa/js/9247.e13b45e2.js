"use strict";(globalThis["webpackChunkventus"]=globalThis["webpackChunkventus"]||[]).push([[9247],{9247:(T,O,E)=>{function e(T){for(var O={},E=T.split(" "),e=0;e<E.length;++e)O[E[e]]=!0;return O}E.r(O),E.d(O,{pig:()=>C});var I="ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ",N="VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP",A="BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ",R=e(I),t=e(N),S=e(A),L=/[*+\-%<>=&?:\/!|]/;function r(T,O,E){return O.tokenize=E,E(T,O)}function n(T,O){var E,e=!1;while(E=T.next()){if("/"==E&&e){O.tokenize=a;break}e="*"==E}return"comment"}function U(T){return function(O,E){var e,I=!1,N=!1;while(null!=(e=O.next())){if(e==T&&!I){N=!0;break}I=!I&&"\\"==e}return!N&&I||(E.tokenize=a),"error"}}function a(T,O){var E=T.next();return'"'==E||"'"==E?r(T,O,U(E)):/[\[\]{}\(\),;\.]/.test(E)?null:/\d/.test(E)?(T.eatWhile(/[\w\.]/),"number"):"/"==E?T.eat("*")?r(T,O,n):(T.eatWhile(L),"operator"):"-"==E?T.eat("-")?(T.skipToEnd(),"comment"):(T.eatWhile(L),"operator"):L.test(E)?(T.eatWhile(L),"operator"):(T.eatWhile(/[\w\$_]/),t&&t.propertyIsEnumerable(T.current().toUpperCase())&&!T.eat(")")&&!T.eat(".")?"keyword":R&&R.propertyIsEnumerable(T.current().toUpperCase())?"builtin":S&&S.propertyIsEnumerable(T.current().toUpperCase())?"type":"variable")}const C={name:"pig",startState:function(){return{tokenize:a,startOfLine:!0}},token:function(T,O){if(T.eatSpace())return null;var E=O.tokenize(T,O);return E},languageData:{autocomplete:(I+A+N).split(" ")}}}}]);