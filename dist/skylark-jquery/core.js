/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.6-beta
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark-utils/skylark","skylark-utils/browser","skylark-utils/langx","skylark-utils/noder","skylark-utils/datax","skylark-utils/eventer","skylark-utils/finder","skylark-utils/styler","skylark-utils/query"],function(e,t,n,i,r,s,o,a,u){var f=Array.prototype.filter,l=Array.prototype.slice;return function(e){e.fn.jquery="2.2.0",e.camelCase=n.camelCase,e.each=n.each,e.extend=function(e){var t,i=l.call(arguments,1);return"boolean"==typeof e&&(t=e,e=i.shift()),0==i.length&&(i=[e],e=this),i.forEach(function(i){n.mixin(e,i,t)}),e},e.grep=function(e,t){return f.call(e,t)},e.isArray=n.isArray,e.isEmptyObject=n.isEmptyObject,e.isFunction=n.isFunction,e.isWindow=n.isWindow,e.isPlainObject=n.isPlainObject,e.inArray=n.inArray,e.makeArray=n.makeArray,e.map=n.map,e.noop=function(){},e.parseJSON=window.JSON.parse,e.proxy=n.proxy,e.trim=n.trim,e.type=n.type,e.fn.extend=function(t){n.mixin(e.fn,t)},e.fn.serializeArray=function(){var t,i,r=[],s=function(e){return e.forEach?e.forEach(s):void r.push({name:t,value:e})};return this[0]&&n.each(this[0].elements,function(n,r){i=r.type,t=r.name,t&&"fieldset"!=r.nodeName.toLowerCase()&&!r.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&"file"!=i&&("radio"!=i&&"checkbox"!=i||r.checked)&&s(e(r).val())}),r},e.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(t){e.push(encodeURIComponent(t.name)+"="+encodeURIComponent(t.value))}),e.join("&")}}(u),function(e){e.Event=function(e,t){return e&&!n.isString(e)&&(t=e,e=t.type),s.create(e,t)},e.event={},e.event.special=s.special,e.fn.submit=function(t){if(0 in arguments)this.bind("submit",t);else if(this.length){var n=e.Event("submit");this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this},e.fn.triggerHandler=e.fn.trigger,e.fn.delegate=function(e,t,n){return this.on(t,e,n)},e.fn.undelegate=function(e,t,n){return this.off(t,e,n)},e.fn.live=function(t,n){return e(document.body).delegate(this.selector,t,n),this},e.fn.die=function(t,n){return e(document.body).undelegate(this.selector,t,n),this},e.fn.bind=function(e,t,n,i){return this.on(e,t,n,i)},e.fn.unbind=function(e,t){return this.off(e,t)},e.fn.ready=function(e){return s.ready(e),this},e.fn.hover=function(e,t){return this.mouseenter(e).mouseleave(t||e)},e.fn.stop=function(){return this},e.fn.moveto=function(e,t){return this.animate({left:e+"px",top:t+"px"},.4)},e.ready=s.ready,e.on=s.on,e.off=s.off}(u),function(e){e.uuid=0,e.support=t.support,e.expr={},e.expr[":"]=e.expr.pseudos=e.expr.filters=o.pseudos,e.expr.createPseudo=function(e){return e},e.contains=i.contains,e.css=a.css,e.data=r.data,e.offset={},e.offset.setOffset=function(t,n,i){var r=e.css(t,"position");"static"===r&&(t.style.position="relative");var s,o,a=e(t),u=a.offset(),f=e.css(t,"top"),l=e.css(t,"left"),c=("absolute"===r||"fixed"===r)&&e.inArray("auto",[f,l])>-1,p={},d={};c?(d=a.position(),s=d.top,o=d.left):(s=parseFloat(f)||0,o=parseFloat(l)||0),e.isFunction(n)&&(n=n.call(t,i,u)),null!=n.top&&(p.top=n.top-u.top+s),null!=n.left&&(p.left=n.left-u.left+o),"using"in n?n.using.call(t,p):a.css(p)}}(u),u.parseHTML=function(e){return i.createFragment(e)},u.skylark=e,window.jQuery=window.$=u});
//# sourceMappingURL=sourcemaps/core.js.map
