"use strict";(globalThis["webpackChunkventusblog"]=globalThis["webpackChunkventusblog"]||[]).push([[2252],{2252:(e,t,r)=>{function n(e,t,r){return t(r),r(e,t)}r.r(t),r.d(t,{haskell:()=>b});var a=/[a-z_]/,i=/[A-Z]/,o=/\d/,l=/[0-9A-Fa-f]/,u=/[0-7]/,s=/[a-z_A-Z0-9'\xa1-\uffff]/,c=/[-!#$%&*+.\/<=>?@\\^|~:]/,f=/[(),;[\]`{}]/,d=/[ \t\v\f]/;function h(e,t){if(e.eatWhile(d))return null;var r=e.next();if(f.test(r)){if("{"==r&&e.eat("-")){var h="comment";return e.eat("#")&&(h="meta"),n(e,t,m(h,1))}return null}if("'"==r)return e.eat("\\"),e.next(),e.eat("'")?"string":"error";if('"'==r)return n(e,t,p);if(i.test(r))return e.eatWhile(s),e.eat(".")?"qualifier":"type";if(a.test(r))return e.eatWhile(s),"variable";if(o.test(r)){if("0"==r){if(e.eat(/[xX]/))return e.eatWhile(l),"integer";if(e.eat(/[oO]/))return e.eatWhile(u),"number"}e.eatWhile(o);h="number";return e.match(/^\.\d+/)&&(h="number"),e.eat(/[eE]/)&&(h="number",e.eat(/[-+]/),e.eatWhile(o)),h}return"."==r&&e.eat(".")?"keyword":c.test(r)?"-"==r&&e.eat(/-/)&&(e.eatWhile(/-/),!e.eat(c))?(e.skipToEnd(),"comment"):(e.eatWhile(c),"variable"):"error"}function m(e,t){return 0==t?h:function(r,n){var a=t;while(!r.eol()){var i=r.next();if("{"==i&&r.eat("-"))++a;else if("-"==i&&r.eat("}")&&(--a,0==a))return n(h),e}return n(m(e,a)),e}}function p(e,t){while(!e.eol()){var r=e.next();if('"'==r)return t(h),"string";if("\\"==r){if(e.eol()||e.eat(d))return t(g),"string";e.eat("&")||e.next()}}return t(h),"error"}function g(e,t){return e.eat("\\")?n(e,t,p):(e.next(),t(h),"error")}var w=function(){var e={};function t(t){return function(){for(var r=0;r<arguments.length;r++)e[arguments[r]]=t}}return t("keyword")("case","class","data","default","deriving","do","else","foreign","if","import","in","infix","infixl","infixr","instance","let","module","newtype","of","then","type","where","_"),t("keyword")("..",":","::","=","\\","<-","->","@","~","=>"),t("builtin")("!!","$!","$","&&","+","++","-",".","/","/=","<","<*","<=","<$>","<*>","=<<","==",">",">=",">>",">>=","^","^^","||","*","*>","**"),t("builtin")("Applicative","Bool","Bounded","Char","Double","EQ","Either","Enum","Eq","False","FilePath","Float","Floating","Fractional","Functor","GT","IO","IOError","Int","Integer","Integral","Just","LT","Left","Maybe","Monad","Nothing","Num","Ord","Ordering","Rational","Read","ReadS","Real","RealFloat","RealFrac","Right","Show","ShowS","String","True"),t("builtin")("abs","acos","acosh","all","and","any","appendFile","asTypeOf","asin","asinh","atan","atan2","atanh","break","catch","ceiling","compare","concat","concatMap","const","cos","cosh","curry","cycle","decodeFloat","div","divMod","drop","dropWhile","either","elem","encodeFloat","enumFrom","enumFromThen","enumFromThenTo","enumFromTo","error","even","exp","exponent","fail","filter","flip","floatDigits","floatRadix","floatRange","floor","fmap","foldl","foldl1","foldr","foldr1","fromEnum","fromInteger","fromIntegral","fromRational","fst","gcd","getChar","getContents","getLine","head","id","init","interact","ioError","isDenormalized","isIEEE","isInfinite","isNaN","isNegativeZero","iterate","last","lcm","length","lex","lines","log","logBase","lookup","map","mapM","mapM_","max","maxBound","maximum","maybe","min","minBound","minimum","mod","negate","not","notElem","null","odd","or","otherwise","pi","pred","print","product","properFraction","pure","putChar","putStr","putStrLn","quot","quotRem","read","readFile","readIO","readList","readLn","readParen","reads","readsPrec","realToFrac","recip","rem","repeat","replicate","return","reverse","round","scaleFloat","scanl","scanl1","scanr","scanr1","seq","sequence","sequence_","show","showChar","showList","showParen","showString","shows","showsPrec","significand","signum","sin","sinh","snd","span","splitAt","sqrt","subtract","succ","sum","tail","take","takeWhile","tan","tanh","toEnum","toInteger","toRational","truncate","uncurry","undefined","unlines","until","unwords","unzip","unzip3","userError","words","writeFile","zip","zip3","zipWith","zipWith3"),e}();const b={name:"haskell",startState:function(){return{f:h}},copyState:function(e){return{f:e.f}},token:function(e,t){var r=t.f(e,(function(e){t.f=e})),n=e.current();return w.hasOwnProperty(n)?w[n]:r},languageData:{commentTokens:{line:"--",block:{open:"{-",close:"-}"}}}}}}]);