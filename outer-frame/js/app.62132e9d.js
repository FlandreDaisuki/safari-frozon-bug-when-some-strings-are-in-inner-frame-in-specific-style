(function(e){function n(n){for(var r,a,i=n[0],u=n[1],l=n[2],f=0,p=[];f<i.length;f++)a=i[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);s&&s(n);while(p.length)p.shift()();return c.push.apply(c,l||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,i=1;i<t.length;i++){var u=t[i];0!==o[u]&&(r=!1)}r&&(c.splice(n--,1),e=a(a.s=t[0]))}return e}var r={},o={app:0},c=[];function a(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=e,a.c=r,a.d=function(e,n,t){a.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,n){if(1&n&&(e=a(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(a.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)a.d(t,r,function(n){return e[n]}.bind(null,r));return t},a.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(n,"a",n),n},a.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},a.p="/safari-frozon-bug-when-some-strings-are-in-inner-frame-in-specific-style/outer-frame/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var s=u;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3f0d":function(e,n,t){"use strict";t("5cec")},"56d7":function(e,n,t){"use strict";t.r(n);var r=t("8465");const o=Object(r["c"])("div",{style:{height:"200vh",background:"gray"}},null,-1),c=Object(r["c"])("div",{id:"an-element-in-main-app"},null,-1),a=Object(r["c"])("a",{href:"http://example.com",target:"_blank"},"Try to click me",-1),i=[o,c,a];function u(e,n,t,o,c,a){return Object(r["d"])(),Object(r["b"])("main",null,i)}var l={name:"App"},s=t("6421"),f=t.n(s);const p=f()(l,[["render",u]]);var d=p;const b={class:"frame-box"},h=Object(r["c"])("iframe",{src:"https://flandredaisuki.github.io/safari-frozon-bug-when-some-strings-are-in-inner-frame-in-specific-style/",allow:"autoplay",scrolling:"no"},null,-1),v=[h];function y(e,n,t,o,c,a){return Object(r["d"])(),Object(r["b"])("div",b,v)}var m={name:"SecondaryApp"};t("3f0d");const g=f()(m,[["render",y]]);var O=g;const j=Object(r["a"])(d);j.mount("#app");const w=Object(r["a"])(O);w.mount("#secondary-app")},"5cec":function(e,n,t){}});