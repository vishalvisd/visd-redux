!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.index=t():e.index=t()}(window,function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t,n){"use strict";(function(e,r){var o,i=n(1);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var u=Object(i.a)(o);t.a=u}).call(this,n(3),n(2)(e))},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}n.d(t,"a",function(){return r})},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t),n.d(t,"createStore",function(){return c}),n.d(t,"combineReducers",function(){return s}),n.d(t,"bindActionCreators",function(){return l}),n.d(t,"applyMiddleware",function(){return h}),n.d(t,"compose",function(){return p}),n.d(t,"__DO_NOT_USE__ActionTypes",function(){return o});var r=n(0),o={INIT:"@@redux/INIT"+Math.random().toString(36).substring(7).split("").join("."),REPLACE:"@@redux/REPLACE"+Math.random().toString(36).substring(7).split("").join(".")},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};function a(e){if("object"!==(void 0===e?"undefined":i(e))||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function c(e,t,n){var u;if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(c)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var f=e,s=t,d=[],l=d,p=!1;function h(){l===d&&(l=d.slice())}function y(){if(p)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return s}function b(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(p)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return h(),l.push(e),function(){if(t){if(p)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,h();var n=l.indexOf(e);l.splice(n,1)}}}function v(e){if(!a(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(p)throw new Error("Reducers may not dispatch actions.");try{p=!0,s=f(s,e)}finally{p=!1}for(var t=d=l,n=0;n<t.length;n++){(0,t[n])()}return e}return v({type:o.INIT}),(u={dispatch:v,subscribe:b,getState:y,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");f=e,v({type:o.REPLACE})}})[r.a]=function(){var e,t=b;return(e={subscribe:function(e){if("object"!==(void 0===e?"undefined":i(e))||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(y())}return n(),{unsubscribe:t(n)}}})[r.a]=function(){return this},e},u}function f(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function s(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var i=t[r];0,"function"==typeof e[i]&&(n[i]=e[i])}var u=Object.keys(n);var a=void 0;try{!function(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:o.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:"@@redux/PROBE_UNKNOWN_ACTION_"+Math.random().toString(36).substring(7).split("").join(".")}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}(n)}catch(e){a=e}return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];if(a)throw a;for(var r=!1,o={},i=0;i<u.length;i++){var c=u[i],s=n[c],d=e[c],l=s(d,t);if(void 0===l){var p=f(c,t);throw new Error(p)}o[c]=l,r=r||l!==d}return r?o:e}}function d(e,t){return function(){return t(e.apply(this,arguments))}}function l(e,t){if("function"==typeof e)return d(e,t);if("object"!==(void 0===e?"undefined":i(e))||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":void 0===e?"undefined":i(e))+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var u=n[o],a=e[u];"function"==typeof a&&(r[u]=d(a,t))}return r}function p(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function h(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){for(var n=arguments.length,r=Array(n),o=0;o<n;o++)r[o]=arguments[o];var i=e.apply(void 0,r),a=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},c={getState:i.getState,dispatch:function(){return a.apply(void 0,arguments)}},f=t.map(function(e){return e(c)});return a=p.apply(void 0,f)(i.dispatch),u({},i,{dispatch:a})}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Actions=t.dispatcher=t.createStore=void 0;var r=n(4);var o={};void 0===window.reduxDispatchMap&&(window.reduxDispatchMap={});var i=function(e){return function(t,n){var r=e[n.type],o=new RegExp(/^@@redux\/INIT.*/);return!r&&o.test(n.type)&&(r=e.INIT,t={}),void 0!==r&&"function"==typeof r?(n.args?r.apply(void 0,[t].concat(function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}(n.args))):r(t),t):null}},u={publish:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];if(window.reduxDispatchMap){var r=window.reduxDispatchMap[t[0]];if(r)r.dispatch.apply(r,t);else if(window.globalEventDispatchMap&&window.globalEventDispatchMap[t[0]]){var o;(o=window.globalEventDispatchMap)[t[0]].apply(o,t)}else console.log("Unknown event dispatched")}},subscribe:function(e,t){void 0===window.globalEventDispatchMap&&(window.globalEventDispatchMap={}),window.globalEventDispatchMap[e]=t}};t.createStore=function(e){var t=(0,r.createStore)(i(e));Object.keys(e).forEach(function(e){o[e]=e,window.reduxDispatchMap[e]=t});var n=t.dispatch;t.dispatch=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];n({type:t[0],args:t.slice(1,t.length)})},t.onChange=t.subscribe;var u=t.getState;return t.getState=function(e){return!0===e?u():u()?JSON.parse(JSON.stringify(u())):{}},t},t.dispatcher=u,t.Actions=o}])});