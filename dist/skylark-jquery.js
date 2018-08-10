/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(e,t){function n(e,t){if("."!==e[0])return e;var n=t.split("/"),r=e.split("/");n.pop();for(var i=0;i<r.length;i++)"."!=r[i]&&(".."==r[i]?n.pop():n.push(r[i]));return n.join("/")}var r=t.define,i=t.require,o="function"==typeof r&&r.amd,u=!o&&"undefined"!=typeof exports;if(!o&&!r){var a={};r=t.define=function(e,t,r){"function"==typeof r?(a[e]={factory:r,deps:t.map(function(t){return n(t,e)}),exports:null},i(e)):a[e]=r},i=t.require=function(e){if(!a.hasOwnProperty(e))throw new Error("Module "+e+" has not been defined");var t=a[e];if(!t.exports){var n=[];t.deps.forEach(function(e){n.push(i(e))}),t.exports=t.factory.apply(window,n)}return t.exports}}e(r,i),o&&(i.get=function(e,t,n,r){return e.intakeDefines&&e.intakeDefines(!0),e.defined[t]});var s=i("skylark-jquery/main");u?exports=s:t.jQuery=t.$=s}(function(e,t){e("skylark-jquery/core",["skylark-utils/skylark","skylark-utils/browser","skylark-utils/langx","skylark-utils/noder","skylark-utils/datax","skylark-utils/eventer","skylark-utils/finder","skylark-utils/fx","skylark-utils/styler","skylark-utils/query"],function(e,t,n,r,i,o,u,a,s,c){var f=Array.prototype.filter,l=Array.prototype.slice;return function(e){e.fn.jquery="2.2.0",e.camelCase=n.camelCase,e.cleanData=function(e){for(var t,n=0;void 0!==(t=e[n]);n++)i.cleanData(t)},e.removeData=function(e,t){i.removeData(e,t)},e.each=n.each,e.extend=function(e){var t,r=l.call(arguments,1);return"boolean"==typeof e&&(t=e,e=r.shift()),0==r.length&&(r=[e],e=this),r.forEach(function(r){n.mixin(e,r,t)}),e},e.grep=function(e,t){return f.call(e,t)},e.attr=function(e,t){return i.attr(e,t)},e.isArray=n.isArray,e.isEmptyObject=n.isEmptyObject,e.isFunction=n.isFunction,e.isWindow=n.isWindow,e.isPlainObject=n.isPlainObject,e.inArray=n.inArray,e.makeArray=n.makeArray,e.map=n.map,e.noop=function(){},e.parseJSON=window.JSON.parse,e.proxy=n.proxy,e.trim=n.trim,e.type=n.type,e.fn.extend=function(t){n.mixin(e.fn,t)},e.fn.serializeArray=function(){var t,r,i=[],o=function(e){return e.forEach?e.forEach(o):void i.push({name:t,value:e})};return this[0]&&n.each(this[0].elements,function(n,i){r=i.type,t=i.name,t&&"fieldset"!=i.nodeName.toLowerCase()&&!i.disabled&&"submit"!=r&&"reset"!=r&&"button"!=r&&"file"!=r&&("radio"!=r&&"checkbox"!=r||i.checked)&&o(e(i).val())}),i},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")}}(c),function(e){e.Event=function(e,t){if(n.isString(e)){var r=e;return o.create(r,t)}return o.proxy(e,t)},e.event={},e.event.special=o.special,e.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this},e.fn.triggerHandler=e.fn.trigger,e.fn.delegate=function(e,t,n){return this.on(t,e,n)},e.fn.undelegate=function(e,t,n){return this.off(t,e,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.bind=function(e,t,n,r){return this.on(e,t,n,r)},e.fn.unbind=function(e,t){return this.off(e,t)},e.fn.ready=function(e){return o.ready(e),this},e.fn.stop=function(){return this},e.fn.moveto=function(e,t){return this.animate({left:e+"px",top:t+"px"},.4)},e.ready=o.ready,e.on=o.on,e.off=o.off}(c),function(e){e.uuid=0,e.support=t.support,e.expr={},e.expr[":"]=e.expr.pseudos=e.expr.filters=u.pseudos,e.expr.createPseudo=function(e){return e},e.cssHooks=s.cssHooks,e.contains=r.contains,e.css=s.css,e.data=i.data,e.fx=a,e.fx.step={},e.easing={},e.offset={},e.offset.setOffset=function(t,n,r){var i=e.css(t,"position");"static"===i&&(t.style.position="relative");var o,u,a=e(t),s=a.offset(),c=e.css(t,"top"),f=e.css(t,"left"),l=("absolute"===i||"fixed"===i)&&e.inArray("auto",[c,f])>-1,p={},d={};l?(d=a.position(),o=d.top,u=d.left):(o=parseFloat(c)||0,u=parseFloat(f)||0),e.isFunction(n)&&(n=n.call(t,r,s)),null!=n.top&&(p.top=n.top-s.top+o),null!=n.left&&(p.left=n.left-s.left+u),"using"in n?n.using.call(t,p):a.css(p)}}(c),c.parseHTML=function(e){return r.createFragment(e)},c.uniqueSort=c.unique=n.uniq,c.skylark=e,window.jQuery=window.$=c}),e("skylark-jquery/ajax",["./core","skylark-langx/langx"],function(e,t){function n(e,t){return""==t?e:(e+"&"+t).replace(/[&?]{1,2}/,"?")}function r(t,n,r,i){return e.isFunction(t)?(i=n,r=t,n=void 0,t=void 0):e.isFunction(n)&&(i=r,r=n,n=void 0),e.isFunction(r)||(i=r,r=void 0),{url:t,data:n,success:r,dataType:i}}function i(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(s)||[];if(jQuery.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}var o=0;e.ajaxJSONP=function(r){var i,u,a=new t.Deferred,s=r.jsonpCallback,c=(e.isFunction(s)?s():s)||"jsonp"+ ++o,f=document.createElement("script"),l=window[c],p=function(t){e(f).triggerHandler("error",t||"abort")},d={abort:p};for(var h in r.data)r.url=n(r.url,h+"="+r.data[h]);return e(f).on("load error",function(t,n){clearTimeout(u),e(f).off().remove(),"error"!=t.type&&i?a.resolve(i[0],200,d):a.reject(t),window[c]=l,i&&e.isFunction(l)&&l(i[0]),l=i=void 0}),window[c]=function(){i=arguments},f.src=r.url.replace(/\?(.+)=\?/,"?$1="+c),document.head.appendChild(f),r.timeout>0&&(u=setTimeout(function(){p("timeout")},r.timeout)),a},e.ajaxSettings=t.Xhr.defaultOptions,e.ajaxSettings.xhr=function(){return new window.XMLHttpRequest},e.ajax=function(r){if("jsonp"==r.dataType){var i=/\?.+=\?/.test(r.url);return i||(r.url=n(r.url,r.jsonp?r.jsonp+"=?":r.jsonp===!1?"":"callback=?")),e.ajaxJSONP(r)}var o=t.Xhr.request(r.url,r);return r.success&&(o=o.then(r.success,r.error)),o},e.get=function(){return e.ajax(r.apply(null,arguments))},e.post=function(){var t=r.apply(null,arguments);return t.type="POST",e.ajax(t)},e.getJSON=function(){var t=r.apply(null,arguments);return t.dataType="json",e.ajax(t)},e.fn.load=function(t,n,i){if(!this.length)return this;var o,u=this,a=r(t,n,i),s=a.url&&a.url.split(/\s/),c=a.success;return s&&s.length>1&&(a.url=s[0],o=s[1]),a.success=function(t){u.html(o?e("<div>").html(t.replace(rscript,"")).find(o):t),c&&c.apply(u,arguments)},e.ajax(a),this},e.param=t.Xhr.param;var u={},a={},s=/\S+/g;return e.ajaxPrefilter=i(u),e.ajaxTransport=i(a),e.ajaxSetup=function(e,n){t.mixin(t.Xhr.defaultOptions,e,n)},e}),e("skylark-jquery/callbacks",["./core"],function(e){return e.Callbacks=function(t){t=e.extend({},t);var n,r,i,o,u,a,s=[],c=!t.once&&[],f=function(e){for(n=t.memory&&e,r=!0,a=o||0,o=0,u=s.length,i=!0;s&&a<u;++a)if(s[a].apply(e[0],e[1])===!1&&t.stopOnFalse){n=!1;break}i=!1,s&&(c?c.length&&f(c.shift()):n?s.length=0:l.disable())},l={add:function(){if(s){var r=s.length,a=function(n){e.each(n,function(e,n){"function"==typeof n?t.unique&&l.has(n)||s.push(n):n&&n.length&&"string"!=typeof n&&a(n)})};a(arguments),i?u=s.length:n&&(o=r,f(n))}return this},remove:function(){return s&&e.each(arguments,function(t,n){for(var r;(r=e.inArray(n,s,r))>-1;)s.splice(r,1),i&&(r<=u&&--u,r<=a&&--a)}),this},has:function(t){return!(!s||!(t?e.inArray(t,s)>-1:s.length))},empty:function(){return u=s.length=0,this},disable:function(){return s=c=n=void 0,this},disabled:function(){return!s},lock:function(){return c=void 0,n||l.disable(),this},locked:function(){return!c},fireWith:function(e,t){return!s||r&&!c||(t=t||[],t=[e,t.slice?t.slice():t],i?c.push(t):f(t)),this},fire:function(){return l.fireWith(this,arguments)},fired:function(){return!!r}};return l},e}),e("skylark-jquery/deferred",["./core","skylark-langx/langx"],function(e,t){return e.Deferred=function(){var e=new t.Deferred,n=e.promise;return e.promise=function(){return n},e},e.when=t.Deferred.when,e}),e("skylark-jquery/queue",["skylark-langx/langx","./core","./callbacks"],function(e,t){function n(e){var n=e.length,r=t.type(e);return!t.isWindow(e)&&(!(1!==e.nodeType||!n)||("array"===r||"function"!==r&&(0===n||"number"==typeof n&&n>0&&n-1 in e)))}function r(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=i+Math.random()}var i="Sky"+("1.0"+Math.random()).replace(/\D/g,""),o=/\S+/g,u=[],a=u.push;r.uid=1,r.accepts=function(e){return!e.nodeType||(1===e.nodeType||9===e.nodeType)},r.prototype={key:function(e){if(!r.accepts(e))return 0;var n={},i=e[this.expando];if(!i){i=r.uid++;try{n[this.expando]={value:i},Object.defineProperties(e,n)}catch(o){n[this.expando]=i,t.extend(e,n)}}return this.cache[i]||(this.cache[i]={}),i},set:function(e,n,r){var i,o=this.key(e),u=this.cache[o];if("string"==typeof n)u[n]=r;else if(t.isEmptyObject(u))t.extend(this.cache[o],n);else for(i in n)u[i]=n[i];return u},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,n,r){var i;return void 0===n||n&&"string"==typeof n&&void 0===r?(i=this.get(e,n),void 0!==i?i:this.get(e,t.camelCase(n))):(this.set(e,n,r),void 0!==r?r:n)},remove:function(e,n){var r,i,u,a=this.key(e),s=this.cache[a];if(void 0===n)this.cache[a]={};else{t.isArray(n)?i=n.concat(n.map(t.camelCase)):(u=t.camelCase(n),n in s?i=[n,u]:(i=u,i=i in s?[i]:i.match(o)||[])),r=i.length;for(;r--;)delete s[i[r]]}},hasData:function(e){return!t.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var s=new r;return t.extend(t,{queue:function(e,n,r){var i;if(e)return n=(n||"fx")+"queue",i=s.get(e,n),r&&(!i||t.isArray(r)?i=s.access(e,n,t.makeArray(r)):i.push(r)),i||[]},dequeue:function(e,n){n=n||"fx";var r=t.queue(e,n),i=r.length,o=r.shift(),u=t._queueHooks(e,n),a=function(){t.dequeue(e,n)};"inprogress"===o&&(o=r.shift(),i--),o&&("fx"===n&&r.unshift("inprogress"),delete u.stop,o.call(e,a,u)),!i&&u&&u.empty.fire()},_queueHooks:function(e,n){var r=n+"queueHooks";return s.get(e,r)||s.access(e,r,{empty:t.Callbacks("once memory").add(function(){s.remove(e,[n+"queue",r])})})},makeArray:function(e,r){var i=r||[];return null!=e&&(n(Object(e))?t.merge(i,"string"==typeof e?[e]:e):a.call(i,e)),i},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;i<n;i++)e[r++]=t[i];else for(;void 0!==t[i];)e[r++]=t[i++];return e.length=r,e}}),t.extend(t.fn,{queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),arguments.length<r?t.queue(this[0],e):void 0===n?this:this.each(function(){var r=t.queue(this,e,n);t._queueHooks(this,e),"fx"===e&&"inprogress"!==r[0]&&t.dequeue(this,e)})},dequeue:function(e){return this.each(function(){t.dequeue(this,e)})},delay:function(e,n){return e=t.fx?t.fx.speeds[e]||e:e,n=n||"fx",this.queue(n,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=t.Deferred(),u=this,a=this.length,c=function(){--i||o.resolveWith(u,[u])};for("string"!=typeof e&&(n=e,e=void 0),e=e||"fx";a--;)r=s.get(u[a],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(c));return c(),o.promise(n)}}),t}),e("skylark-jquery/main",["./core","./ajax","./callbacks","./deferred","./queue","skylark-utils/widgets"],function(e){return e}),e("skylark-jquery",["skylark-jquery/main"],function(e){return e})},this);
//# sourceMappingURL=sourcemaps/skylark-jquery.js.map
