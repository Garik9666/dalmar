(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{485:function(t,r,n){"use strict";n(85),n(7),n(5),n(11),n(260),n(201);var e=n(2);var o,d=n(48);r.a=(o="container",e.a.extend({name:"v-".concat(o),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(t,r){var n=r.props,data=r.data,e=r.children;data.staticClass="".concat(o," ").concat(data.staticClass||"").trim();var d=data.attrs;if(d){data.attrs={};var c=Object.keys(d).filter((function(t){if("slot"===t)return!1;var r=d[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}));c.length&&(data.staticClass+=" ".concat(c.join(" ")))}return n.id&&(data.domProps=data.domProps||{},data.domProps.id=n.id),t(n.tag,data,e)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,r){var n,e=r.props,data=r.data,o=r.children,c=data.attrs;return c&&(data.attrs={},n=Object.keys(c).filter((function(t){if("slot"===t)return!1;var r=c[t];return t.startsWith("data-")?(data.attrs[t]=r,!1):r||"string"==typeof r}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(d.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(n||[])}),o)}})},589:function(t,r,n){"use strict";n.r(r);var e={layout:"dashboard",middleware:"admin",name:"index"},o=n(22),d=n(25),c=n.n(d),l=n(485),component=Object(o.a)(e,(function(){var t=this.$createElement,r=this._self._c||t;return r("v-container",[r("p",[this._v("\n    dashboard\n  ")])])}),[],!1,null,"03c916e2",null);r.default=component.exports;c()(component,{VContainer:l.a})}}]);