!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self)["vuse-rx"]={})}(this,(function(t){"use strict";function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(t){return function(t){if(Array.isArray(t))return r(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}var o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function i(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function s(t){return"function"==typeof t}var u=!1,c={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&(new Error).stack;u=t},get useDeprecatedSynchronousErrorHandling(){return u}};function a(t){setTimeout((function(){throw t}),0)}var f={closed:!0,next:function(t){},error:function(t){if(c.useDeprecatedSynchronousErrorHandling)throw t;a(t)},complete:function(){}},l=function(){return Array.isArray||function(t){return t&&"number"==typeof t.length}}();function h(t){return null!==t&&"object"==typeof t}var p=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),d=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var n=this._parentOrParents,r=this._ctorUnsubscribe,o=this._unsubscribe,i=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof t)n.remove(this);else if(null!==n)for(var u=0;u<n.length;++u){n[u].remove(this)}if(s(o)){r&&(this._unsubscribe=void 0);try{o.call(this)}catch(t){e=t instanceof p?b(t.errors):[t]}}if(l(i)){u=-1;for(var c=i.length;++u<c;){var a=i[u];if(h(a))try{a.unsubscribe()}catch(t){e=e||[],t instanceof p?e=e.concat(b(t.errors)):e.push(t)}}}if(e)throw new p(e)}},t.prototype.add=function(e){var n=e;if(!e)return t.EMPTY;switch(typeof e){case"function":n=new t(e);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof t)){var r=n;(n=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof t){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var n=e.indexOf(t);-1!==n&&e.splice(n,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function b(t){return t.reduce((function(t,e){return t.concat(e instanceof p?e.errors:e)}),[])}var y=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}(),v=function(t){function e(n,r,o){var i=t.call(this)||this;switch(i.syncErrorValue=null,i.syncErrorThrown=!1,i.syncErrorThrowable=!1,i.isStopped=!1,arguments.length){case 0:i.destination=f;break;case 1:if(!n){i.destination=f;break}if("object"==typeof n){n instanceof e?(i.syncErrorThrowable=n.syncErrorThrowable,i.destination=n,n.add(i)):(i.syncErrorThrowable=!0,i.destination=new _(i,n));break}default:i.syncErrorThrowable=!0,i.destination=new _(i,n,r,o)}return i}return i(e,t),e.prototype[y]=function(){return this},e.create=function(t,n,r){var o=new e(t,n,r);return o.syncErrorThrowable=!1,o},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(d),_=function(t){function e(e,n,r,o){var i,u=t.call(this)||this;u._parentSubscriber=e;var c=u;return s(n)?i=n:n&&(i=n.next,r=n.error,o=n.complete,n!==f&&(s((c=Object.create(n)).unsubscribe)&&u.add(c.unsubscribe.bind(c)),c.unsubscribe=u.unsubscribe.bind(u))),u._context=c,u._next=i,u._error=r,u._complete=o,u}return i(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;c.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,n=c.useDeprecatedSynchronousErrorHandling;if(this._error)n&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)n?(e.syncErrorValue=t,e.syncErrorThrown=!0):a(t),this.unsubscribe();else{if(this.unsubscribe(),n)throw t;a(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var n=function(){return t._complete.call(t._context)};c.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(t){if(this.unsubscribe(),c.useDeprecatedSynchronousErrorHandling)throw t;a(t)}},e.prototype.__tryOrSetError=function(t,e,n){if(!c.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,n)}catch(e){return c.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=e,t.syncErrorThrown=!0,!0):(a(e),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(v);var m=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}();function g(t){return t}function w(t){return 0===t.length?g:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var S=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var n=new t;return n.source=this,n.operator=e,n},t.prototype.subscribe=function(t,e,n){var r=this.operator,o=function(t,e,n){if(t){if(t instanceof v)return t;if(t[y])return t[y]()}return t||e||n?new v(t,e,n):new v(f)}(t,e,n);if(r?o.add(r.call(o,this.source)):o.add(this.source||c.useDeprecatedSynchronousErrorHandling&&!o.syncErrorThrowable?this._subscribe(o):this._trySubscribe(o)),c.useDeprecatedSynchronousErrorHandling&&o.syncErrorThrowable&&(o.syncErrorThrowable=!1,o.syncErrorThrown))throw o.syncErrorValue;return o},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){c.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),!function(t){for(;t;){var e=t,n=e.closed,r=e.destination,o=e.isStopped;if(n||o)return!1;t=r&&r instanceof v?r:null}return!0}(t)?console.warn(e):t.error(e)}},t.prototype.forEach=function(t,e){var n=this;return new(e=x(e))((function(e,r){var o;o=n.subscribe((function(e){try{t(e)}catch(t){r(t),o&&o.unsubscribe()}}),r,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[m]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:w(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=x(t))((function(t,n){var r;e.subscribe((function(t){return r=t}),(function(t){return n(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function x(t){if(t||(t=Promise),!t)throw new Error("no Promise impl found");return t}var E=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),O=function(t){function e(e,n){var r=t.call(this)||this;return r.subject=e,r.subscriber=n,r.closed=!1,r}return i(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var n=e.indexOf(this.subscriber);-1!==n&&e.splice(n,1)}}},e}(d),T=function(t){function e(e){var n=t.call(this,e)||this;return n.destination=e,n}return i(e,t),e}(v),P=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return i(e,t),e.prototype[y]=function(){return new T(this)},e.prototype.lift=function(t){var e=new j(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new E;if(!this.isStopped)for(var e=this.observers,n=e.length,r=e.slice(),o=0;o<n;o++)r[o].next(t)},e.prototype.error=function(t){if(this.closed)throw new E;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,n=e.length,r=e.slice(),o=0;o<n;o++)r[o].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new E;this.isStopped=!0;for(var t=this.observers,e=t.length,n=t.slice(),r=0;r<e;r++)n[r].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new E;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new E;return this.hasError?(t.error(this.thrownError),d.EMPTY):this.isStopped?(t.complete(),d.EMPTY):(this.observers.push(t),new O(this,t))},e.prototype.asObservable=function(){var t=new S;return t.source=this,t},e.create=function(t,e){return new j(t,e)},e}(S),j=function(t){function e(e,n){var r=t.call(this)||this;return r.destination=e,r.source=n,r}return i(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):d.EMPTY},e}(P);function I(t){return t&&"function"==typeof t.schedule}var N=function(t){return function(e){for(var n=0,r=t.length;n<r&&!e.closed;n++)e.next(t[n]);e.complete()}};function R(t,e){return new S((function(n){var r=new d,o=0;return r.add(e.schedule((function(){o!==t.length?(n.next(t[o++]),n.closed||r.add(this.schedule())):n.complete()}))),r}))}function A(t,e){return e?R(t,e):new S(N(t))}function C(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=t[t.length-1];return I(n)?(t.pop(),R(t,n)):A(t)}function k(t){return!!t&&(t instanceof S||"function"==typeof t.lift&&"function"==typeof t.subscribe)}function V(t,e){return function(n){if("function"!=typeof t)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new U(t,e))}}var U=function(){function t(t,e){this.project=t,this.thisArg=e}return t.prototype.call=function(t,e){return e.subscribe(new M(t,this.project,this.thisArg))},t}(),M=function(t){function e(e,n,r){var o=t.call(this,e)||this;return o.project=n,o.count=0,o.thisArg=r||o,o}return i(e,t),e.prototype._next=function(t){var e;try{e=this.project.call(this.thisArg,t,this.count++)}catch(t){return void this.destination.error(t)}this.destination.next(e)},e}(v);function $(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}var H=$(),D=function(t){return t&&"number"==typeof t.length&&"function"!=typeof t};function Y(t){return!!t&&"function"!=typeof t.subscribe&&"function"==typeof t.then}var z=function(t){if(t&&"function"==typeof t[m])return r=t,function(t){var e=r[m]();if("function"!=typeof e.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return e.subscribe(t)};if(D(t))return N(t);if(Y(t))return n=t,function(t){return n.then((function(e){t.closed||(t.next(e),t.complete())}),(function(e){return t.error(e)})).then(null,a),t};if(t&&"function"==typeof t[H])return e=t,function(t){for(var n=e[H]();;){var r=void 0;try{r=n.next()}catch(e){return t.error(e),t}if(r.done){t.complete();break}if(t.next(r.value),t.closed)break}return"function"==typeof n.return&&t.add((function(){n.return&&n.return()})),t};var e,n,r,o=h(t)?"an invalid object":"'"+t+"'";throw new TypeError("You provided "+o+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")};function F(t,e){if(null!=t){if(function(t){return t&&"function"==typeof t[m]}(t))return function(t,e){return new S((function(n){var r=new d;return r.add(e.schedule((function(){var o=t[m]();r.add(o.subscribe({next:function(t){r.add(e.schedule((function(){return n.next(t)})))},error:function(t){r.add(e.schedule((function(){return n.error(t)})))},complete:function(){r.add(e.schedule((function(){return n.complete()})))}}))}))),r}))}(t,e);if(Y(t))return function(t,e){return new S((function(n){var r=new d;return r.add(e.schedule((function(){return t.then((function(t){r.add(e.schedule((function(){n.next(t),r.add(e.schedule((function(){return n.complete()})))})))}),(function(t){r.add(e.schedule((function(){return n.error(t)})))}))}))),r}))}(t,e);if(D(t))return R(t,e);if(function(t){return t&&"function"==typeof t[H]}(t)||"string"==typeof t)return function(t,e){if(!t)throw new Error("Iterable cannot be null");return new S((function(n){var r,o=new d;return o.add((function(){r&&"function"==typeof r.return&&r.return()})),o.add(e.schedule((function(){r=t[H](),o.add(e.schedule((function(){if(!n.closed){var t,e;try{var o=r.next();t=o.value,e=o.done}catch(t){return void n.error(t)}e?n.complete():(n.next(t),this.schedule())}})))}))),o}))}(t,e)}throw new TypeError((null!==t&&typeof t||t)+" is not observable")}function L(t,e){return e?F(t,e):t instanceof S?t:new S(z(t))}var W=function(t){function e(e){var n=t.call(this)||this;return n.parent=e,n}return i(e,t),e.prototype._next=function(t){this.parent.notifyNext(t)},e.prototype._error=function(t){this.parent.notifyError(t),this.unsubscribe()},e.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},e}(v),B=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i(e,t),e.prototype.notifyNext=function(t){this.destination.next(t)},e.prototype.notifyError=function(t){this.destination.error(t)},e.prototype.notifyComplete=function(){this.destination.complete()},e}(v);function q(t,e){if(!e.closed)return t instanceof S?t.subscribe(e):z(t)(e)}var K=function(){function t(t,e){void 0===e&&(e=Number.POSITIVE_INFINITY),this.project=t,this.concurrent=e}return t.prototype.call=function(t,e){return e.subscribe(new G(t,this.project,this.concurrent))},t}(),G=function(t){function e(e,n,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var o=t.call(this,e)||this;return o.project=n,o.concurrent=r,o.hasCompleted=!1,o.buffer=[],o.active=0,o.index=0,o}return i(e,t),e.prototype._next=function(t){this.active<this.concurrent?this._tryNext(t):this.buffer.push(t)},e.prototype._tryNext=function(t){var e,n=this.index++;try{e=this.project(t,n)}catch(t){return void this.destination.error(t)}this.active++,this._innerSub(e)},e.prototype._innerSub=function(t){var e=new W(this),n=this.destination;n.add(e);var r=q(t,e);r!==e&&n.add(r)},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},e.prototype.notifyNext=function(t){this.destination.next(t)},e.prototype.notifyComplete=function(){var t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},e}(B);function J(t){return void 0===t&&(t=Number.POSITIVE_INFINITY),function t(e,n,r){return void 0===r&&(r=Number.POSITIVE_INFINITY),"function"==typeof n?function(o){return o.pipe(t((function(t,r){return L(e(t,r)).pipe(V((function(e,o){return n(t,e,r,o)})))}),r))}:("number"==typeof n&&(r=n),function(t){return t.lift(new K(e,r))})}(g,t)}function Z(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];var n=Number.POSITIVE_INFINITY,r=null,o=t[t.length-1];return I(o)?(r=t.pop(),t.length>1&&"number"==typeof t[t.length-1]&&(n=t.pop())):"number"==typeof o&&(n=t.pop()),null===r&&1===t.length&&t[0]instanceof S?t[0]:J(n)(A(t,r))}function Q(t,e){var n=!1;return arguments.length>=2&&(n=!0),function(r){return r.lift(new X(t,e,n))}}var X=function(){function t(t,e,n){void 0===n&&(n=!1),this.accumulator=t,this.seed=e,this.hasSeed=n}return t.prototype.call=function(t,e){return e.subscribe(new tt(t,this.accumulator,this.seed,this.hasSeed))},t}(),tt=function(t){function e(e,n,r,o){var i=t.call(this,e)||this;return i.accumulator=n,i._seed=r,i.hasSeed=o,i.index=0,i}return i(e,t),Object.defineProperty(e.prototype,"seed",{get:function(){return this._seed},set:function(t){this.hasSeed=!0,this._seed=t},enumerable:!0,configurable:!0}),e.prototype._next=function(t){if(this.hasSeed)return this._tryNext(t);this.seed=t,this.destination.next(t)},e.prototype._tryNext=function(t){var e,n=this.index++;try{e=this.accumulator(this.seed,t,n)}catch(t){this.destination.error(t)}this.seed=e,this.destination.next(e)},e}(v);function et(t,e,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),function(r){return r.lift(new nt(t,e,n))}}var nt=function(){function t(t,e,n){this.accumulator=t,this.seed=e,this.concurrent=n}return t.prototype.call=function(t,e){return e.subscribe(new rt(t,this.accumulator,this.seed,this.concurrent))},t}(),rt=function(t){function e(e,n,r,o){var i=t.call(this,e)||this;return i.accumulator=n,i.acc=r,i.concurrent=o,i.hasValue=!1,i.hasCompleted=!1,i.buffer=[],i.active=0,i.index=0,i}return i(e,t),e.prototype._next=function(t){if(this.active<this.concurrent){var e=this.index++,n=this.destination,r=void 0;try{r=(0,this.accumulator)(this.acc,t,e)}catch(t){return n.error(t)}this.active++,this._innerSub(r)}else this.buffer.push(t)},e.prototype._innerSub=function(t){var e=new W(this),n=this.destination;n.add(e);var r=q(t,e);r!==e&&n.add(r)},e.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&(!1===this.hasValue&&this.destination.next(this.acc),this.destination.complete()),this.unsubscribe()},e.prototype.notifyNext=function(t){var e=this.destination;this.acc=t,this.hasValue=!0,e.next(t)},e.prototype.notifyComplete=function(){var t=this.buffer;this.active--,t.length>0?this._next(t.shift()):0===this.active&&this.hasCompleted&&(!1===this.hasValue&&this.destination.next(this.acc),this.destination.complete())},e}(B);var ot=function(){function t(t){this.notifier=t}return t.prototype.call=function(t,e){var n=new it(t),r=q(this.notifier,new W(n));return r&&!n.seenValue?(n.add(r),e.subscribe(n)):n},t}(),it=function(t){function e(e){var n=t.call(this,e)||this;return n.seenValue=!1,n}return i(e,t),e.prototype.notifyNext=function(){this.seenValue=!0,this.complete()},e.prototype.notifyComplete=function(){},e}(B);function st(t,e){const n=Object.create(null),r=t.split(",");for(let t=0;t<r.length;t++)n[r[t]]=!0;return e?t=>!!n[t.toLowerCase()]:t=>!!n[t]}const ut=st("Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl"),ct=st("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly"),at={},ft=()=>{},lt=/^on[^a-z]/,ht=Object.assign,pt=Object.prototype.hasOwnProperty,dt=(t,e)=>pt.call(t,e),bt=Array.isArray,yt=t=>"[object Map]"===St(t),vt=t=>"function"==typeof t,_t=t=>"string"==typeof t,mt=t=>"symbol"==typeof t,gt=t=>null!==t&&"object"==typeof t,wt=Object.prototype.toString,St=t=>wt.call(t),xt=t=>_t(t)&&"NaN"!==t&&"-"!==t[0]&&""+parseInt(t,10)===t,Et=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Ot=/-(\w)/g,Tt=Et(t=>t.replace(Ot,(t,e)=>e?e.toUpperCase():"")),Pt=/\B([A-Z])/g,jt=Et(t=>t.replace(Pt,"-$1").toLowerCase()),It=Et(t=>t.charAt(0).toUpperCase()+t.slice(1)),Nt=(t,e)=>t!==e&&(t==t||e==e),Rt=new WeakMap,At=[];let Ct;const kt=Symbol(""),Vt=Symbol("");function Ut(t,e=at){(function(t){return t&&!0===t._isEffect})(t)&&(t=t.raw);const n=function(t,e){const n=function(){if(!n.active)return e.scheduler?void 0:t();if(!At.includes(n)){Ht(n);try{return Yt.push(Dt),Dt=!0,At.push(n),Ct=n,t()}finally{At.pop(),zt(),Ct=At[At.length-1]}}};return n.id=$t++,n.allowRecurse=!!e.allowRecurse,n._isEffect=!0,n.active=!0,n.raw=t,n.deps=[],n.options=e,n}(t,e);return e.lazy||n(),n}function Mt(t){t.active&&(Ht(t),t.options.onStop&&t.options.onStop(),t.active=!1)}let $t=0;function Ht(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Dt=!0;const Yt=[];function zt(){const t=Yt.pop();Dt=void 0===t||t}function Ft(t,e,n){if(!Dt||void 0===Ct)return;let r=Rt.get(t);r||Rt.set(t,r=new Map);let o=r.get(n);o||r.set(n,o=new Set),o.has(Ct)||(o.add(Ct),Ct.deps.push(o))}function Lt(t,e,n,r,o,i){const s=Rt.get(t);if(!s)return;const u=new Set,c=t=>{t&&t.forEach(t=>{(t!==Ct||t.allowRecurse)&&u.add(t)})};if("clear"===e)s.forEach(c);else if("length"===n&&bt(t))s.forEach((t,e)=>{("length"===e||e>=r)&&c(t)});else switch(void 0!==n&&c(s.get(n)),e){case"add":bt(t)?xt(n)&&c(s.get("length")):(c(s.get(kt)),yt(t)&&c(s.get(Vt)));break;case"delete":bt(t)||(c(s.get(kt)),yt(t)&&c(s.get(Vt)));break;case"set":yt(t)&&c(s.get(kt))}u.forEach(t=>{t.options.scheduler?t.options.scheduler(t):t()})}const Wt=new Set(Object.getOwnPropertyNames(Symbol).map(t=>Symbol[t]).filter(mt)),Bt=Zt(),qt=Zt(!1,!0),Kt=Zt(!0),Gt=Zt(!0,!0),Jt={};function Zt(t=!1,e=!1){return function(n,r,o){if("__v_isReactive"===r)return!t;if("__v_isReadonly"===r)return t;if("__v_raw"===r&&o===(t?Se:we).get(n))return n;const i=bt(n);if(!t&&i&&dt(Jt,r))return Reflect.get(Jt,r,o);const s=Reflect.get(n,r,o);if(mt(r)?Wt.has(r):"__proto__"===r||"__v_isRef"===r)return s;if(t||Ft(n,0,r),e)return s;if(Re(s)){return!i||!xt(r)?s.value:s}return gt(s)?t?Oe(s):Ee(s):s}}["includes","indexOf","lastIndexOf"].forEach(t=>{const e=Array.prototype[t];Jt[t]=function(...t){const n=Ie(this);for(let t=0,e=this.length;t<e;t++)Ft(n,0,t+"");const r=e.apply(n,t);return-1===r||!1===r?e.apply(n,t.map(Ie)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{const e=Array.prototype[t];Jt[t]=function(...t){Yt.push(Dt),Dt=!1;const n=e.apply(this,t);return zt(),n}});function Qt(t=!1){return function(e,n,r,o){const i=e[n];if(!t&&(r=Ie(r),!bt(e)&&Re(i)&&!Re(r)))return i.value=r,!0;const s=bt(e)&&xt(n)?Number(n)<e.length:dt(e,n),u=Reflect.set(e,n,r,o);return e===Ie(o)&&(s?Nt(r,i)&&Lt(e,"set",n,r):Lt(e,"add",n,r)),u}}const Xt={get:Bt,set:Qt(),deleteProperty:function(t,e){const n=dt(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Lt(t,"delete",e,void 0),r},has:function(t,e){const n=Reflect.has(t,e);return mt(e)&&Wt.has(e)||Ft(t,0,e),n},ownKeys:function(t){return Ft(t,0,bt(t)?"length":kt),Reflect.ownKeys(t)}},te={get:Kt,set:(t,e)=>!0,deleteProperty:(t,e)=>!0};ht({},Xt,{get:qt,set:Qt(!0)}),ht({},te,{get:Gt});const ee=t=>gt(t)?Ee(t):t,ne=t=>gt(t)?Oe(t):t,re=t=>t,oe=t=>Reflect.getPrototypeOf(t);function ie(t,e,n=!1,r=!1){const o=Ie(t=t.__v_raw),i=Ie(e);e!==i&&!n&&Ft(o,0,e),!n&&Ft(o,0,i);const{has:s}=oe(o),u=n?ne:r?re:ee;return s.call(o,e)?u(t.get(e)):s.call(o,i)?u(t.get(i)):void 0}function se(t,e=!1){const n=this.__v_raw,r=Ie(n),o=Ie(t);return t!==o&&!e&&Ft(r,0,t),!e&&Ft(r,0,o),t===o?n.has(t):n.has(t)||n.has(o)}function ue(t,e=!1){return t=t.__v_raw,!e&&Ft(Ie(t),0,kt),Reflect.get(t,"size",t)}function ce(t){t=Ie(t);const e=Ie(this),n=oe(e).has.call(e,t);return e.add(t),n||Lt(e,"add",t,t),this}function ae(t,e){e=Ie(e);const n=Ie(this),{has:r,get:o}=oe(n);let i=r.call(n,t);i||(t=Ie(t),i=r.call(n,t));const s=o.call(n,t);return n.set(t,e),i?Nt(e,s)&&Lt(n,"set",t,e):Lt(n,"add",t,e),this}function fe(t){const e=Ie(this),{has:n,get:r}=oe(e);let o=n.call(e,t);o||(t=Ie(t),o=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return o&&Lt(e,"delete",t,void 0),i}function le(){const t=Ie(this),e=0!==t.size,n=t.clear();return e&&Lt(t,"clear",void 0,void 0),n}function he(t,e){return function(n,r){const o=this,i=o.__v_raw,s=Ie(i),u=t?ne:e?re:ee;return!t&&Ft(s,0,kt),i.forEach((t,e)=>n.call(r,u(t),u(e),o))}}function pe(t,e,n){return function(...r){const o=this.__v_raw,i=Ie(o),s=yt(i),u="entries"===t||t===Symbol.iterator&&s,c="keys"===t&&s,a=o[t](...r),f=e?ne:n?re:ee;return!e&&Ft(i,0,c?Vt:kt),{next(){const{value:t,done:e}=a.next();return e?{value:t,done:e}:{value:u?[f(t[0]),f(t[1])]:f(t),done:e}},[Symbol.iterator](){return this}}}}function de(t){return function(...e){return"delete"!==t&&this}}const be={get(t){return ie(this,t)},get size(){return ue(this)},has:se,add:ce,set:ae,delete:fe,clear:le,forEach:he(!1,!1)},ye={get(t){return ie(this,t,!1,!0)},get size(){return ue(this)},has:se,add:ce,set:ae,delete:fe,clear:le,forEach:he(!1,!0)},ve={get(t){return ie(this,t,!0)},get size(){return ue(this,!0)},has(t){return se.call(this,t,!0)},add:de("add"),set:de("set"),delete:de("delete"),clear:de("clear"),forEach:he(!0,!1)};function _e(t,e){const n=e?ye:t?ve:be;return(e,r,o)=>"__v_isReactive"===r?!t:"__v_isReadonly"===r?t:"__v_raw"===r?e:Reflect.get(dt(n,r)&&r in e?n:e,r,o)}["keys","values","entries",Symbol.iterator].forEach(t=>{be[t]=pe(t,!1,!1),ve[t]=pe(t,!0,!1),ye[t]=pe(t,!1,!0)});const me={get:_e(!1,!1)},ge={get:_e(!0,!1)},we=new WeakMap,Se=new WeakMap;function xe(t){return t.__v_skip||!Object.isExtensible(t)?0:function(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}((t=>St(t).slice(8,-1))(t))}function Ee(t){return t&&t.__v_isReadonly?t:Te(t,!1,Xt,me)}function Oe(t){return Te(t,!0,te,ge)}function Te(t,e,n,r){if(!gt(t))return t;if(t.__v_raw&&(!e||!t.__v_isReactive))return t;const o=e?Se:we,i=o.get(t);if(i)return i;const s=xe(t);if(0===s)return t;const u=new Proxy(t,2===s?r:n);return o.set(t,u),u}function Pe(t){return je(t)?Pe(t.__v_raw):!(!t||!t.__v_isReactive)}function je(t){return!(!t||!t.__v_isReadonly)}function Ie(t){return t&&Ie(t.__v_raw)||t}const Ne=t=>gt(t)?Ee(t):t;function Re(t){return Boolean(t&&!0===t.__v_isRef)}function Ae(t){return function(t,e=!1){if(Re(t))return t;return new Ce(t,e)}(t)}class Ce{constructor(t,e=!1){this._rawValue=t,this._shallow=e,this.__v_isRef=!0,this._value=e?t:Ne(t)}get value(){return Ft(Ie(this),0,"value"),this._value}set value(t){Nt(Ie(t),this._rawValue)&&(this._rawValue=t,this._value=this._shallow?t:Ne(t),Lt(Ie(this),"set","value",t))}}class ke{constructor(t,e){this._object=t,this._key=e,this.__v_isRef=!0}get value(){return this._object[this._key]}set value(t){this._object[this._key]=t}}class Ve{constructor(t,e,n){this._setter=e,this._dirty=!0,this.__v_isRef=!0,this.effect=Ut(t,{lazy:!0,scheduler:()=>{this._dirty||(this._dirty=!0,Lt(Ie(this),"set","value"))}}),this.__v_isReadonly=n}get value(){return this._dirty&&(this._value=this.effect(),this._dirty=!1),Ft(Ie(this),0,"value"),this._value}set value(t){this._setter(t)}}function Ue(t,e,n,r){let o;try{o=r?t(...r):t()}catch(t){$e(t,e,n)}return o}function Me(t,e,n,r){if(vt(t)){const i=Ue(t,e,n,r);return i&&(gt(o=i)&&vt(o.then)&&vt(o.catch))&&i.catch(t=>{$e(t,e,n)}),i}var o;const i=[];for(let o=0;o<t.length;o++)i.push(Me(t[o],e,n,r));return i}function $e(t,e,n,r=!0){e&&e.vnode;if(e){let r=e.parent;const o=e.proxy,i=n;for(;r;){const e=r.ec;if(e)for(let n=0;n<e.length;n++)if(!1===e[n](t,o,i))return;r=r.parent}const s=e.appContext.config.errorHandler;if(s)return void Ue(s,null,10,[t,o,i])}!function(t,e,n,r=!0){console.error(t)}(t,0,0,r)}let He=!1,De=!1;const Ye=[];let ze=0;const Fe=[];let Le=null,We=0;const Be=[];let qe=null,Ke=0;const Ge=Promise.resolve();let Je=null,Ze=null;function Qe(t){const e=Je||Ge;return t?e.then(this?t.bind(this):t):e}function Xe(){He||De||(De=!0,Je=Ge.then(nn))}function tn(t,e,n,r){bt(t)?n.push(...t):e&&e.includes(t,t.allowRecurse?r+1:r)||n.push(t),Xe()}const en=t=>null==t.id?1/0:t.id;function nn(t){De=!1,He=!0,function t(e,n=null){if(Fe.length){for(Ze=n,Le=[...new Set(Fe)],Fe.length=0,We=0;We<Le.length;We++)Le[We]();Le=null,We=0,Ze=null,t(e,n)}}(t),Ye.sort((t,e)=>en(t)-en(e));try{for(ze=0;ze<Ye.length;ze++){const t=Ye[ze];t&&Ue(t,null,14)}}finally{ze=0,Ye.length=0,function(t){if(Be.length){const t=[...new Set(Be)];if(Be.length=0,qe)return void qe.push(...t);for(qe=t,qe.sort((t,e)=>en(t)-en(e)),Ke=0;Ke<qe.length;Ke++)qe[Ke]();qe=null,Ke=0}}(),He=!1,Je=null,(Ye.length||Be.length)&&nn(t)}}const rn={};function on(t,e,n){return sn(t,e,n)}function sn(t,e,{immediate:n,deep:r,flush:o,onTrack:i,onTrigger:s}=at,u=dn){let c,a,f=!1;if(Re(t)?(c=()=>t.value,f=!!t._shallow):Pe(t)?(c=()=>t,r=!0):c=bt(t)?()=>t.map(t=>Re(t)?t.value:Pe(t)?cn(t):vt(t)?Ue(t,u,2):void 0):vt(t)?e?()=>Ue(t,u,2):()=>{if(!u||!u.isUnmounted)return a&&a(),Ue(t,u,3,[l])}:ft,e&&r){const t=c;c=()=>cn(t())}const l=t=>{a=b.options.onStop=()=>{Ue(t,u,4)}};let h=bt(t)?[]:rn;const p=()=>{if(b.active)if(e){const t=b();(r||f||Nt(t,h))&&(a&&a(),Me(e,u,3,[t,h===rn?void 0:h,l]),h=t)}else b()};let d;p.allowRecurse=!!e,d="sync"===o?p:"post"===o?()=>an(p,u&&u.suspense):()=>{!u||u.isMounted?function(t){tn(t,Le,Fe,We)}(p):p()};const b=Ut(c,{lazy:!0,onTrack:i,onTrigger:s,scheduler:d});return bn(b,u),e?n?p():h=b():"post"===o?an(b,u&&u.suspense):b(),()=>{Mt(b),u&&((t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)})(u.effects,b)}}function un(t,e,n){const r=this.proxy;return sn(_t(t)?()=>r[t]:t.bind(r),e.bind(r),n,this)}function cn(t,e=new Set){if(!gt(t)||e.has(t))return t;if(e.add(t),Re(t))cn(t.value,e);else if(bt(t))for(let n=0;n<t.length;n++)cn(t[n],e);else if("[object Set]"===St(t)||yt(t))t.forEach(t=>{cn(t,e)});else for(const n in t)cn(t[n],e);return t}const an=function(t,e){e&&e.pendingBranch?bt(t)?e.effects.push(...t):e.effects.push(t):tn(t,qe,Be,Ke)};function fn(t,e,n){const r=n.appContext.config.optionMergeStrategies,{mixins:o,extends:i}=e;i&&fn(t,i,n),o&&o.forEach(e=>fn(t,e,n));for(const o in e)r&&dt(r,o)?t[o]=r[o](t[o],e[o],n.proxy,o):t[o]=e[o]}const ln=t=>t&&(t.proxy?t.proxy:ln(t.parent)),hn=ht(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ln(t.parent),$root:t=>t.root&&t.root.proxy,$emit:t=>t.emit,$options:t=>__VUE_OPTIONS_API__?function(t){const e=t.type,{__merged:n,mixins:r,extends:o}=e;if(n)return n;const i=t.appContext.mixins;if(!i.length&&!r&&!o)return e;const s={};return i.forEach(e=>fn(s,e,t)),fn(s,e,t),e.__merged=s}(t):t.type,$forceUpdate:t=>()=>{return e=t.update,void(Ye.length&&Ye.includes(e,He&&e.allowRecurse?ze+1:ze)||e===Ze||(Ye.push(e),Xe()));var e},$nextTick:t=>Qe.bind(t.proxy),$watch:t=>__VUE_OPTIONS_API__?un.bind(t):ft}),pn={get({_:t},e){const{ctx:n,setupState:r,data:o,props:i,accessCache:s,type:u,appContext:c}=t;if("__v_skip"===e)return!0;let a;if("$"!==e[0]){const u=s[e];if(void 0!==u)switch(u){case 0:return r[e];case 1:return o[e];case 3:return n[e];case 2:return i[e]}else{if(r!==at&&dt(r,e))return s[e]=0,r[e];if(o!==at&&dt(o,e))return s[e]=1,o[e];if((a=t.propsOptions[0])&&dt(a,e))return s[e]=2,i[e];if(n!==at&&dt(n,e))return s[e]=3,n[e];__VUE_OPTIONS_API__,s[e]=4}}const f=hn[e];let l,h;return f?("$attrs"===e&&Ft(t,0,e),f(t)):(l=u.__cssModules)&&(l=l[e])?l:n!==at&&dt(n,e)?(s[e]=3,n[e]):(h=c.config.globalProperties,dt(h,e)?h[e]:void 0)},set({_:t},e,n){const{data:r,setupState:o,ctx:i}=t;if(o!==at&&dt(o,e))o[e]=n;else if(r!==at&&dt(r,e))r[e]=n;else if(e in t.props)return!1;return("$"!==e[0]||!(e.slice(1)in t))&&(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:o,propsOptions:i}},s){let u;return void 0!==n[s]||t!==at&&dt(t,s)||e!==at&&dt(e,s)||(u=i[0])&&dt(u,s)||dt(r,s)||dt(hn,s)||dt(o.config.globalProperties,s)}};ht({},pn,{get(t,e){if(e!==Symbol.unscopables)return pn.get(t,e,t)},has:(t,e)=>"_"!==e[0]&&!ut(e)});let dn=null;function bn(t,e=dn){e&&(e.effects||(e.effects=[])).push(t)}function yn(t){const e=function(t){let e,n;return vt(t)?(e=t,n=ft):(e=t.get,n=t.set),new Ve(e,n,vt(t)||!t.set)}(t);return bn(e.effect),e}const vn="http://www.w3.org/2000/svg",_n="undefined"!=typeof document?document:null;let mn,gn;const wn={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n)=>e?_n.createElementNS(vn,t):_n.createElement(t,n?{is:n}:void 0),createText:t=>_n.createTextNode(t),createComment:t=>_n.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>_n.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode:t=>t.cloneNode(!0),insertStaticContent(t,e,n,r){const o=r?gn||(gn=_n.createElementNS(vn,"svg")):mn||(mn=_n.createElement("div"));o.innerHTML=t;const i=o.firstChild;let s=i,u=s;for(;s;)u=s,wn.insert(s,e,n),s=o.firstChild;return[i,u]}};const Sn=/\s*!important$/;function xn(t,e,n){if(bt(n))n.forEach(n=>xn(t,e,n));else if(e.startsWith("--"))t.setProperty(e,n);else{const r=function(t,e){const n=On[e];if(n)return n;let r=Tt(e);if("filter"!==r&&r in t)return On[e]=r;r=It(r);for(let n=0;n<En.length;n++){const o=En[n]+r;if(o in t)return On[e]=o}return e}(t,e);Sn.test(n)?t.setProperty(jt(r),n.replace(Sn,""),"important"):t[r]=n}}const En=["Webkit","Moz","ms"],On={};const Tn="http://www.w3.org/1999/xlink";let Pn=Date.now;"undefined"!=typeof document&&Pn()>document.createEvent("Event").timeStamp&&(Pn=()=>performance.now());let jn=0;const In=Promise.resolve(),Nn=()=>{jn=0};function Rn(t,e,n,r,o=null){const i=t._vei||(t._vei={}),s=i[e];if(r&&s)s.value=r;else{const[n,u]=function(t){let e;if(An.test(t)){let n;for(e={};n=t.match(An);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[t.slice(2).toLowerCase(),e]}(e);if(r){!function(t,e,n,r){t.addEventListener(e,n,r)}(t,n,i[e]=function(t,e){const n=t=>{(t.timeStamp||Pn())>=n.attached-1&&Me(function(t,e){if(bt(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(t=>e=>!e._stopped&&t(e))}return e}(t,n.value),e,5,[t])};return n.value=t,n.attached=(()=>jn||(In.then(Nn),jn=Pn()))(),n}(r,o),u)}else s&&(!function(t,e,n,r){t.removeEventListener(e,n,r)}(t,n,s,u),i[e]=void 0)}}const An=/(?:Once|Passive|Capture)$/;const Cn=/^on[a-z]/;ht({patchProp:(t,e,n,r,o=!1,i,s,u,c)=>{switch(e){case"class":!function(t,e,n){if(null==e&&(e=""),n)t.setAttribute("class",e);else{const n=t._vtc;n&&(e=(e?[e,...n]:[...n]).join(" ")),t.className=e}}(t,r,o);break;case"style":!function(t,e,n){const r=t.style;if(n)if(_t(n))e!==n&&(r.cssText=n);else{for(const t in n)xn(r,t,n[t]);if(e&&!_t(e))for(const t in e)null==n[t]&&xn(r,t,"")}else t.removeAttribute("style")}(t,n,r);break;default:(t=>lt.test(t))(e)?(t=>t.startsWith("onUpdate:"))(e)||Rn(t,e,0,r,s):function(t,e,n,r){if(r)return"innerHTML"===e||!!(e in t&&Cn.test(e)&&vt(n));if("spellcheck"===e||"draggable"===e)return!1;if("form"===e&&"string"==typeof n)return!1;if("list"===e&&"INPUT"===t.tagName)return!1;if(Cn.test(e)&&_t(n))return!1;return e in t}(t,e,r,o)?function(t,e,n,r,o,i,s){if("innerHTML"===e||"textContent"===e)return r&&s(r,o,i),void(t[e]=null==n?"":n);if("value"!==e||"PROGRESS"===t.tagName){if(""===n||null==n){const r=typeof t[e];if(""===n&&"boolean"===r)return void(t[e]=!0);if(null==n&&"string"===r)return t[e]="",void t.removeAttribute(e);if("number"===r)return t[e]=0,void t.removeAttribute(e)}try{t[e]=n}catch(t){}}else{t._value=n;const e=null==n?"":n;t.value!==e&&(t.value=e)}}(t,e,r,i,s,u,c):("true-value"===e?t._trueValue=r:"false-value"===e&&(t._falseValue=r),function(t,e,n,r){if(r&&e.startsWith("xlink:"))null==n?t.removeAttributeNS(Tn,e.slice(6,e.length)):t.setAttributeNS(Tn,e,n);else{const r=ct(e);null==n||r&&!1===n?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}(t,e,r,o))}},forcePatchProp:(t,e)=>"value"===e},wn);var kn=function(t){return new S((function(t){}))},Vn=function(t){return e=kn(),function(t){return t.lift(new ot(e))};var e},Un=function(t){return t.pipe(Vn())},Mn=function t(n){return function(r){if("object"!==e(r)||null==r)return r;for(var o in r){var i=o;"object"===e(n[i])?n[i]=t(n[i])(r[i]):n[i]=r[i]}return n}};var $n=function(t){return"on".concat(t[0].toUpperCase()).concat(t.slice(1))},Hn=function(t){return Object.assign({},t,{subscribe:function(){var e;return Object.assign({},t,{subscription:(e=t.state$).subscribe.apply(e,arguments)})}})},Dn=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];return"function"==typeof t?t.apply(void 0,n):t};t.fromHook=kn,t.fromRef=function(t){return Un(new S((function(e){return on(t,(function(t){return e.next(t)}))})))},t.pipeUntil=Vn,t.refFrom=function(t,n){var r,o,i,s=Pe(r=t)||je(r);if("object"===e(t)&&!s)try{var u=Ae(n);return L(t).subscribe((function(t){return u.value=t})),u}catch(t){}return s&&"string"==typeof n?Re((o=t)[i=n])?o[i]:new ke(o,i):Ae(t)},t.refsFrom=function(t,e){var n=Ae(null==e?void 0:e.next),r=Ae(null==e?void 0:e.error);return L(t).subscribe({next:function(t){return n.value=t},error:function(t){return r.value=t}}),{next:n,error:r}},t.syncRef=function(t,e,n){var r=e.to,o=e.from;if(r&&o)return yn({get:function(){return r(t.value)},set:function(e){return t.value=o(e)}});var i=Ae(null!=n?n:t.value);return r?on(t,(function(t){return i.value=r(t)})):o&&on(i,(function(e){return t.value=o(e)})),i},t.untilUnmounted=Un,t.useRxState=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:Mn;return function(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g,i=Ee(Dn(t)),s=et((function(t,n){var r=Dn(n,t);return(k(r)?r:C(r)).pipe(V(e(t)))}),i),u={},c={},a=function(t){var e=new P;u[t]=function(){return e.next(r[t].apply(r,arguments))},c[$n(t)]=e.pipe(s)};for(var f in r)a(f);var l=o(Z.apply(void 0,n(Object.values(c))),r,i,c).pipe(Q((function(t,e){return Mn(t)(e)}),i),Vn());return Hn({actions:u,state:Oe(i),state$:l,actions$:c})}},Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=umd.js.map
