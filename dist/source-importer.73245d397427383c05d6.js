(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1123:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(1),i=r.n(a),c=r(30),u=r(7),s=r.n(u),l=r(886),p=r.n(l),f=r(887),m=r.n(f);function b(){return o.a.createElement("svg",{className:"icon-file",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},o.a.createElement("g",{transform:"translate(-46.000000, -124.000000)"},o.a.createElement("g",{transform:"translate(28.000000, 110.000000)"},o.a.createElement("g",{transform:"translate(18.000000, 14.000000)"},o.a.createElement("path",{d:"M8,0 L12,4 L12,16 L0,16 L0,0 L8,0 Z M8,4 L11,4 L8,1 L8,4 Z"})))))}var y=r(1117);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function h(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var r=[],n=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(n=(i=c.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){o=!0,a=e}finally{try{n||null==c.return||c.return()}finally{if(o)throw a}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function g(e){var t=e.acceptedTypes,r=e.locked,a=e.multiple,i=e.onAccept,c=e.onReset,u=h(Object(n.useState)(),2),l=u[0],f=u[1],g=h(Object(n.useState)(),2),v=g[0],O=g[1],w=Object(n.useCallback)((function(e,t){0===e.length?function(e){!a&&e.length>1?O("Choose a single file"):O("File type is incorrect"),f(void 0),c()}(t):function(e){var t=e.length,r=t>1?"".concat(t," files"):e[0].name;f(r),i(e)}(e)}),[]),j=Object(y.a)({accept:t,disabled:r,multiple:a,onDrop:w}),E=j.getRootProps,k=j.getInputProps,S=j.isDragActive;Object(n.useEffect)((function(){if(v){var e=setTimeout((function(){return O(void 0)}),2500);return function(){return clearTimeout(e)}}}),[v]);var P=v||"Drag a file, or click to choose";return o.a.createElement("div",d({},E(),{className:s()({"is-accepted":l},"importer-dropzone theme-color-border")}),o.a.createElement("input",k()),l?o.a.createElement((function(){return o.a.createElement(n.Fragment,null,o.a.createElement(b,null),o.a.createElement("span",{className:"importer-dropzone__filename"},l))}),null):o.a.createElement((function(){return o.a.createElement(n.Fragment,null,v?o.a.createElement(m.a,null):o.a.createElement(p.a,null),S?"Drop files here":P)}),null))}g.propTypes={acceptedTypes:i.a.string,locked:i.a.bool.isRequired,multiple:i.a.bool,onAccept:i.a.func.isRequired,onReset:i.a.func.isRequired};var v=g,O=r(170),w=r(2),j=r(15),E=r.n(j),k=r(1118);function S(){return(S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var P=function(e){return o.a.createElement(k.a,S({classes:{root:"progress-bar",bar:"progress-bar__bar"}},e))};function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function N(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function D(e,t){return!t||"object"!==_(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e){return(R=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function T(e,t){return(T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var B,C,x,A=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),D(this,R(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&T(e,t)}(t,e),r=t,(n=[{key:"shouldComponentUpdate",value:function(e){return!(!this.props.endValue&&this.props.isDone===e.isDone)}},{key:"render",value:function(){var e=this.props,t=e.currentValue,r=e.endValue,n=e.isDone;return r?o.a.createElement(P,{variant:"determinate",value:t/r*100}):o.a.createElement((function(){return n?o.a.createElement(P,{variant:"determinate",value:100}):o.a.createElement(P,null)}),null)}}])&&N(r.prototype,n),a&&N(r,a),t}(o.a.Component);B=A,C="propTypes",x={currentValue:i.a.number.isRequired,endValue:i.a.number,isDone:i.a.bool.isRequired},C in B?Object.defineProperty(B,C,{value:x,enumerable:!0,configurable:!0,writable:!0}):B[C]=x;var M=A,q=function(e){var t,r=e.currentValue,n=1===r?"note":"notes";return t=e.isDone?"Done! ".concat(r," ").concat(n," imported."):r?"".concat(r," ").concat(n," imported..."):"Importing...",o.a.createElement("p",{role:"status","aria-live":"polite"},t)};q.propTypes={currentValue:i.a.number.isRequired,isDone:i.a.bool.isRequired};var I=q,L=function(e){var t=e.currentValue,r=e.endValue,n=e.isDone;return o.a.createElement("section",null,o.a.createElement(M,{currentValue:t,endValue:n?t:r,isDone:n}),o.a.createElement(I,{currentValue:t,isDone:n}))};L.propTypes={currentValue:i.a.number.isRequired,endValue:i.a.number,isDone:i.a.bool.isRequired};var V=L,F=r(54),z=r(889),W=r(903),U=r(890),H=r.n(U);function J(e){return(J="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function $(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function Z(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?$(r,!0).forEach((function(t){X(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):$(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function K(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Y=["content","creationDate","deleted","markdown","modificationDate","pinned","tags"],ee=50,te=function(e){function t(e){var r,n,o,a=e.noteBucket,i=e.tagBucket;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=G(t).call(this),r=!o||"object"!==J(o)&&"function"!=typeof o?K(n):o,X(K(r),"importNote",(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.isTrashed,o=void 0!==n&&n,a=t.isMarkdown,i=void 0!==a&&a,c=Object(w.pick)(e,Y);return c.publishURL="",c.shareURL="",c.deleted=o,c.tags=Object(w.get)(c,"tags",[]),c.systemTags=Object(w.get)(c,"systemTags",[]),c.pinned&&(c.systemTags.push("pinned"),delete c.pinned),(c.markdown||i)&&(c.systemTags.push("markdown"),delete c.markdown),c.creationDate&&isNaN(c.creationDate)&&(c.creationDate=new Date(c.creationDate).getTime()/1e3),c.creationDate=c.creationDate||c.modificationDate||Date.now(),c.modificationDate=c.modificationDate||c.creationDate||Date.now(),Object.prototype.hasOwnProperty.call(c,"content")||(c.content=""),c.tags&&c.tags.map((function(e){Object(w.isEmpty)(e)||r.tagBucket.update(e,{name:e})})),r.limiter.schedule((function(){return r.noteBucket.add.bind(r.noteBucket)(c)})).catch(console.log)})),X(K(r),"importNotes",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;if(Object(w.isEmpty)(e))r.emit("status","error","No notes to import.");else{if(e.activeNotes||e.trashedNotes){var n=Object(w.get)(e,"activeNotes",[]).map((function(e){return r.importNote(e,t)})),o=Object(w.get)(e,"trashedNotes",[]).map((function(e){return r.importNote(e,Z({},t,{isTrashed:!0}))}));return Promise.all(n.concat(o))}r.emit("status","error","Invalid import format: No active or trashed notes found.")}})),r.noteBucket=a,r.tagBucket=i,r.limiter=new H.a({reservoir:ee,reservoirRefreshAmount:ee,reservoirRefreshInterval:1e3}),r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Q(e,t)}(t,e),t}(F.EventEmitter),re=r(901),ne=function(e){var t=e.getAttribute("alt"),r=e.getAttribute("type")||"media";return t?"".concat(t," (").concat(r,")"):"(".concat(r,")")},oe=function(e){re.a.prototype.escape=w.identity;var t=new re.a({blankReplacement:function(e,t){if("EN-MEDIA"===t.nodeName)return ne(t);var r=Array.from(t.querySelectorAll("a"));return r.length?r.map((function(){return e})).join(" "):Array.from(t.querySelectorAll("en-media")).map(ne).join(" ")},codeBlockStyle:"fenced",emDelimiter:"*",headingStyle:"atx"});return t.addRule("lineBreaks",{filter:"br",replacement:function(){return"\n"}}).addRule("divs",{filter:"div",replacement:function(e,t){return"LI"===t.parentNode.nodeName?e:/-en-codeblock:true/.test(t.getAttribute("style"))?"```\n"+e+"```\n":e+"\n"}}).addRule("links",{filter:"a",replacement:function(e,t){var r=t.getAttribute("href");return r&&e!==r?"[".concat(e,"](").concat(r,")"):e}}).addRule("svgImages",{filter:function(e){return"IMG"===e.nodeName&&Object(w.startsWith)(e.getAttribute("src"),"data:image/svg")},replacement:function(e,t){return t.setAttribute("type","image/svg"),ne(t)}}).addRule("lineItems",{filter:"li",replacement:function(e,t,r){e=e.replace(/^\n+/,"").replace(/\n+$/,"\n").replace(/\n/gm,"\n    ");var n=r.bulletListMarker+" ",o=t.parentNode;if("OL"===o.nodeName){var a=o.getAttribute("start"),i=Array.prototype.indexOf.call(o.children,t);n=(a?Number(a)+i:i+1)+". "}return n+e+(t.nextSibling&&!/\n$/.test(e)?"\n":"")}}).addRule("mediaItems",{filter:"en-media",replacement:function(e,t){return ne(t)}}).addRule("tasklistItems",{filter:"en-todo",replacement:function(e,t){var r="true"===t.getAttribute("checked")?"x":" ";return"- [".concat(r,"] ").concat(e).trim()}}),t.turndown(e)};function ae(e){return(ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ie(e){return(ie=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ce(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ue(e,t){return(ue=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var le=null;Object(w.has)(window,"process.type")&&(le=require("fs"));var pe=function(e){function t(e){var r,n,o,a=e.noteBucket,i=e.tagBucket,c=e.options;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=ie(t).call(this),r=!o||"object"!==ae(o)&&"function"!=typeof o?ce(n):o,se(ce(r),"importNotes",(function(e){e&&0!==e.length||r.emit("status","error","Invalid Evernote export file.");var t=e[0];if(t&&t.path||r.emit("status","error","Could not find Evernote export file."),t.path&&Object(w.endsWith)(t.path.toLowerCase(),".enex")){var n=Object(z.createStream)(!0,!1),o=new DOMParser,a=new te({noteBucket:r.noteBucket,tagBucket:r.tagBucket}),i={},c=0;n.on("error",(function(){this.emit("status","error","Error processing Evernote data.")})),n.on("opentag",(function(e){"note"===e.name&&(i={tags:[]})})),n.on("cdata",(function(e){var t=o.parseFromString(e,"text/html");if(Object(w.endsWith)(Object(w.get)(t,"doctype.name",""),"note")){var r=oe(t.body.innerHTML);""!==r&&(i.content+="\n"+r)}})),n.on("text",(function(e){if(e)switch(n._parser.tagName){case"title":i.content=e;break;case"created":i.creationDate=r.getConvertedDate(e);break;case"updated":i.modificationDate=r.getConvertedDate(e);break;case"tag":i.tags.push(e)}})),n.on("closetag",(function(e){"note"===e&&(a.importNote(i,r.options),c++,r.emit("status","progress",c))})),n.on("end",(function(){0!==c?r.emit("status","complete",c):r.emit("status","error","No notes were found to import.")})),le.createReadStream(t.path).pipe(n)}else r.emit("status","error","An Evernote .enex file is required.")})),se(ce(r),"getConvertedDate",(function(e){var t=Object(W.a)(e).getTime()/1e3;return isNaN(t)&&(t=Date.now()/1e3),t})),r.noteBucket=a,r.tagBucket=i,r.options=c,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ue(e,t)}(t,e),t}(F.EventEmitter);function fe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function me(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function be(e){return(be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ye(e){return(ye=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e,t){return(he=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ge(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function ve(e){return e.map((function(e){var t=e.lastModified,r=me(e,["lastModified"]),n=r.modificationDate||t;n&&isNaN(n)&&(n=new Date(n).getTime()/1e3);var o=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?fe(r,!0).forEach((function(t){ge(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):fe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r);return n&&(o.modificationDate=n),o}))}var Oe=function(e){function t(e){var r,n,o,a=e.noteBucket,i=e.tagBucket,c=e.options;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=ye(t).call(this),r=!o||"object"!==be(o)&&"function"!=typeof o?de(n):o,ge(de(r),"importNotes",(function(e){var t=new te({noteBucket:r.noteBucket,tagBucket:r.tagBucket});if(Object(w.isEmpty)(e))r.emit("status","error","No file to import.");else{var n=e[0];if(Object(w.endsWith)(n.name.toLowerCase(),".json"))if(n.size>5e6)r.emit("status","error","File should be less than 5 MB.");else{var o=new FileReader;o.onload=function(e){var n=e.target.result;if(n){var o=JSON.parse(n),a=o.activeNotes.length+o.trashedNotes.length,i={activeNotes:ve(o.activeNotes),trashedNotes:ve(o.trashedNotes)};t.importNotes(i,r.options).then((function(){r.emit("status","complete",a)}))}else r.emit("status","error","File was empty.")},o.readAsText(n)}else r.emit("status","error",'File name does not end in ".json".')}})),r.noteBucket=a,r.tagBucket=i,r.options=c,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&he(e,t)}(t,e),t}(F.EventEmitter);function we(e){return(we="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function je(e){return(je=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ee(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function ke(e,t){return(ke=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Se(e){return(Se="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Pe(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function _e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Ne(e){return(Ne=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function De(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Re(e,t){return(Re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Te(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Be={evernote:pe,plaintext:function(e){function t(e){var r,n,o,a=e.noteBucket,i=e.tagBucket,c=e.options;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,o=je(t).call(this),r=!o||"object"!==we(o)&&"function"!=typeof o?Ee(n):o,function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(Ee(r),"importNotes",(function(e){var t=new te({noteBucket:r.noteBucket,tagBucket:r.tagBucket}),n=0,o="";if(e)for(var a=function(e){if(e&&Object(w.endsWith)(e.name.toLowerCase(),".txt")&&!(e.size>1e6)){var a=new FileReader;a.onload=function(a){var i=a.target.result,c=e.name.slice(0,-4);if(Object(w.startsWith)(i,c)||(i=c+"\n\n"+i),i){var u=e.lastModified/1e3;t.importNote({content:i,modificationDate:u,creationDate:u},r.options),n++,e.name===o?r.emit("status","complete",n):r.emit("status","progress",n)}},a.readAsText(e)}},i=0;i<e.length;i++){var c=e[i];i+1===e.length&&(o=c.name),a(c)}else r.emit("status","error","No text files to import.")})),r.noteBucket=a,r.tagBucket=i,r.options=c,r}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&ke(e,t)}(t,e),t}(F.EventEmitter),simplenote:Oe},Ce=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=this,o=(e=Ne(t)).call.apply(e,[this].concat(i)),r=!o||"object"!==Se(o)&&"function"!=typeof o?De(n):o,Te(De(r),"state",{errorMessage:void 0,finalNoteCount:void 0,importedNoteCount:0,isDone:!1,setMarkdown:!1,shouldShowProgress:!1}),Te(De(r),"initImporter",(function(){var e=r.props.source.slug,t=Be[e];if(!t)throw new Error('Unrecognized importer slug "${slug}"');var n=new t(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Pe(r,!0).forEach((function(t){Te(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Pe(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},r.props.buckets,{options:{isMarkdown:r.state.setMarkdown}})),o=Object(w.throttle)((function(e){r.setState({importedNoteCount:e})}),20);return n.on("status",(function(t,n){switch(t){case"progress":o(n);break;case"complete":r.setState({finalNoteCount:n,isDone:!0}),E.a.tracks.recordEvent("importer_import_completed",{source:e,note_count:n});break;case"error":r.setState({errorMessage:n,shouldShowProgress:!1}),window.setTimeout((function(){r.setState({isDone:!0})}),200);break;default:console.log('Unrecognized status event type "'.concat(t,'"'))}})),n})),Te(De(r),"startImport",(function(){r.setState({shouldShowProgress:!0}),r.props.onStart(),r.initImporter().importNotes(r.props.files)})),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Re(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=this.props,r=t.endValue,n=t.locked,a=t.onClose,i=this.props.source.optionsHint,u=this.state,s=u.errorMessage,l=u.finalNoteCount,p=u.importedNoteCount,f=u.isDone,m=u.setMarkdown,b=u.shouldShowProgress;return o.a.createElement("div",{className:"source-importer-executor"},o.a.createElement("section",{className:"source-importer-executor__options"},o.a.createElement(c.a,{headingLevel:"3"},"Options"),o.a.createElement("label",null,o.a.createElement("input",{type:"checkbox",checked:m,className:"source-importer-executor__checkbox",disabled:n,onChange:function(){return e.setState({setMarkdown:!m})}}),"Enable Markdown on all notes"),i&&o.a.createElement("p",{className:"theme-color-fg-dim"},i)),o.a.createElement(O.a,{shouldMount:Boolean(s)},o.a.createElement("div",{role:"alert",className:"source-importer-executor__error"},s)),o.a.createElement(O.a,{shouldMount:b},o.a.createElement(V,{currentValue:f?l:p,endValue:r,isDone:f})),o.a.createElement("div",{className:"source-importer-executor__button"},f?o.a.createElement("button",{className:"button button-primary",type:"button",onClick:a},"Close"):o.a.createElement("button",{className:"button button-primary",disabled:n,type:"button",onClick:this.startImport},"Import")))}}])&&_e(r.prototype,n),a&&_e(r,a),t}(o.a.Component);Te(Ce,"propTypes",{buckets:i.a.shape({noteBucket:i.a.object.isRequired,tagBucket:i.a.object.isRequired}),endValue:i.a.number,files:i.a.array,locked:i.a.bool.isRequired,onClose:i.a.func.isRequired,onStart:i.a.func.isRequired,source:i.a.shape({optionsHint:i.a.string,slug:i.a.string.isRequired})});var xe=Ce;function Ae(e){return(Ae="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Me(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function qe(e){return(qe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function Ie(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function Le(e,t){return(Le=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Ve(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Fe=function(e){function t(){var e,r,n,o;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return n=this,r=!(o=(e=qe(t)).call.apply(e,[this].concat(i)))||"object"!==Ae(o)&&"function"!=typeof o?Ie(n):o,Ve(Ie(r),"state",{acceptedFiles:void 0}),r}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&Le(e,t)}(t,e),r=t,(n=[{key:"render",value:function(){var e=this,t=this.props,r=t.buckets,n=t.onClose,a=t.onStart,i=t.locked,u=void 0!==i&&i,s=t.source,l=this.props.source,p=l.acceptedTypes,f=l.instructions,m=l.multiple,b=void 0!==m&&m,y=this.state.acceptedFiles,d=Boolean(y);return o.a.createElement("div",{className:"source-importer"},o.a.createElement(c.a,{headingLevel:"3"},"Import file",b&&"s"),o.a.createElement(v,{acceptedTypes:p,locked:u,multiple:b,onAccept:function(t){return e.setState({acceptedFiles:t})},onReset:function(){return e.setState({acceptedFiles:void 0})}}),!d&&o.a.createElement("p",{className:"theme-color-fg-dim"},f),o.a.createElement(O.a,{wrapperClassName:"source-importer__executor-wrapper",shouldMount:d},o.a.createElement(xe,{buckets:r,endValue:b&&d?y.length:void 0,files:y,locked:u,onClose:n,onStart:a,source:s})))}}])&&Me(r.prototype,n),a&&Me(r,a),t}(o.a.Component);Ve(Fe,"propTypes",{buckets:i.a.object,locked:i.a.bool,onClose:i.a.func.isRequired,onStart:i.a.func.isRequired,source:i.a.shape({acceptedTypes:i.a.string,instructions:i.a.string,multiple:i.a.bool})});t.default=Fe},902:function(e,t){}}]);