parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function t(t){if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(t=n(t))){var r=0,e=function(){};return{s:e,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o,i=!0,u=!1;return{s:function(){a=t[Symbol.iterator]()},n:function(){var t=a.next();return i=t.done,t},e:function(t){u=!0,o=t},f:function(){try{i||null==a.return||a.return()}finally{if(u)throw o}}}}function n(t,n){if(t){if("string"==typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var e=document.getElementsByTagName("li");function a(n){var r,e=[],a=t(n);try{for(a.s();!(r=a.n()).done;){var o=r.value;e.push({name:o.innerText,position:o.dataset.position,salary:o.dataset.salary,age:o.dataset.age})}}catch(i){a.e(i)}finally{a.f()}return e}function o(t){for(var n=a(t).sort(function(t,n){return i(n.salary)-i(t.salary)}),r=0;r<t.length;r++)t[r].dataset.position=n[r].position,t[r].dataset.salary=n[r].salary,t[r].dataset.age=n[r].age,t[r].innerText=n[r].name}function i(t){return+t.slice(1).replace(",",".")}o(e);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.5e135f07.js.map