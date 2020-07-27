(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{489:function(e,t,n){var content=n(490);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(15).default)("2065bca8",content,!0,{sourceMap:!1})},490:function(e,t,n){(t=n(14)(!1)).push([e.i,".v-dialog{border-radius:4px;margin:24px;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12)}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6;outline:none}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{-webkit-animation-duration:.15s;animation-duration:.15s;-webkit-animation-name:animate-dialog;animation-name:animate-dialog;-webkit-animation-timing-function:cubic-bezier(.25,.8,.25,1);animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;margin:0;height:100%;position:fixed;overflow-y:auto;top:0;left:0}.v-dialog--fullscreen>.v-card{min-height:100%;min-width:100%;margin:0!important;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{-webkit-backface-visibility:hidden;backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@-webkit-keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),e.exports=t},503:function(e,t,n){"use strict";n(12),n(9),n(7),n(5),n(11),n(26),n(31);var r=n(1),o=(n(18),n(489),n(470)),c=n(106),l=n(128),d=n(205),m=n(208),v=n(207),h=n(206),f=n(32),x=n(64),y=n(3),w=n(13),_=n(0);function k(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function C(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=Object(y.a)(c.a,l.a,d.a,m.a,v.a,h.a,f.a);t.a=O.extend({name:"v-dialog",directives:{ClickOutside:x.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:{type:[String,Number],default:"none"},noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:{type:[String,Number],default:"auto"}},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,isActive:!!this.value,stackMinZIndex:200}},computed:{classes:function(){var e;return e={},Object(r.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(e,"v-dialog--active",this.isActive),Object(r.a)(e,"v-dialog--persistent",this.persistent),Object(r.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(e,"v-dialog--scrollable",this.scrollable),Object(r.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(w.d)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):m.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$refs.content.focus(),e.bind()}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===_.w.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&![document,this.$refs.content].includes(t)&&!this.$refs.content.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(o.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:C({role:"document",tabindex:e.isActive?0:void 0},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:this.onClickOutside,args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=C({},data.style,{maxWidth:"none"===this.maxWidth?void 0:Object(_.g)(this.maxWidth),width:"auto"===this.width?void 0:Object(_.g)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach},attrs:{role:"dialog"}},[this.genActivator(),this.genContent()])}})},587:function(e,t,n){"use strict";n.r(t);n(33);var r=n(6),o=n(530),c={fetch:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=e.store,n.next=3,r.dispatch("brands/fetch");case 3:return n.next=5,r.dispatch("wishListAndCart/fetch");case 5:if(!t.user){n.next=10;break}return n.next=8,r.dispatch("wishListAndCart/getWishListAndCartData",[t.user.id]);case 8:n.next=12;break;case 10:return n.next=12,r.dispatch("wishListAndCart/getWishListAndCartData",[0]);case 12:return n.next=14,r.dispatch("menus/fetch");case 14:case"end":return n.stop()}}),n)})))()},name:"cart",data:function(){return{settings:!0,dialog:!1,state:"",formValid:!1,totalPrice:143e3,totalPriceWithoutDelivery:143e3,items:["Yerevan","Kirovakan","Lennakan"],address:"",payment:"",payments:["Cash","Online Payment"],nameLastName:"",email:"",agree:!1,count:0,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+/.test(e)||"E-mail must be valid"}],requiredField:[function(e){return!!e||"Field is required"}],phone:"",phoneRules:[function(e){return!!e||"Phone is required"},function(e){return new o(e,"AM").isValid()||"".concat(e," is note valid phone number")}],addressRules:[function(e){return!!e||"Address is required"}],headers:[{text:"Image",value:"image",sortable:!1,align:"start"},{text:"Name",value:"name",sortable:!1,align:"center"},{text:"Size",value:"size",sortable:!1,align:"center"},{text:"Color",value:"color",sortable:!1,align:"center"},{text:"Count",value:"count",sortable:!1,align:"center"},{text:"Price",value:"price",sortable:!1,align:"center"},{text:"Remove",value:"remove",sortable:!1,align:"center"}],desserts:[]}},computed:{menus:function(){return this.$store.getters["menus/menus"]},cartProducts:function(){var e=this.$cookies.get("davmar_cart");if(void 0!==e)return this.$store.dispatch("products/getProductsByIds",[e]),this.$store.getters["products/productByIds"]},cartData:function(){return this.$store.getters["wishListAndCart/cartData"]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.cartData.forEach((function(t,n){"ru"==e.$i18n.locale?e.desserts.push({image:JSON.parse(t.product.images)[0],name:t.product.nam_rue,size:t.size&&void 0!==t.size[0]?t.size[0]:t.color,color:t.color&&t.color.length>0?t.color[0]:"#000000",count:t.count,price:t.product.price,remove:n}):"am"==e.$i18n.locale?e.desserts.push({image:JSON.parse(t.product.images)[0],name:t.product.name_am,size:t.size&&void 0!==t.size[0]?t.size[0]:t.color,color:t.color&&t.color.length>0?t.color[0]:"#000000",count:t.count,price:t.product.price,remove:n}):"en"==e.$i18n.locale&&e.desserts.push({image:JSON.parse(t.product.images)[0],name:t.product.name_en,size:t.size&&void 0!==t.size[0]?t.size[0]:t.color,color:t.color&&t.color.length>0?t.color[0]:"#000000",count:t.count,price:t.product.price,remove:n})})),t.next=3,e.summCount();case 3:case"end":return t.stop()}}),t)})))()},methods:{init:function(){var e=this;this.desserts=[],this.cartData.forEach((function(t,n){"ru"==e.$i18n.locale?e.desserts.push({image:JSON.parse(t.product.images)[0],name:t.product.nam_rue,size:t.size&&void 0!==t.size[0]?t.size[0]:t.color,color:t.color&&t.color.length>0?t.color[0]:"#000000",count:t.count,price:t.product.price,remove:n}):"am"==e.$i18n.locale?e.desserts.push({image:JSON.parse(t.product.images)[0],name:t.product.name_am,size:t.size&&void 0!==t.size[0]?t.size[0]:t.color,color:t.color&&t.color.length>0?t.color[0]:"#000000",count:t.count,price:t.product.price,remove:n}):"en"==e.$i18n.locale&&e.desserts.push({image:JSON.parse(t.product.images)[0],name:t.product.name_en,size:t.size&&void 0!==t.size[0]?t.size[0]:t.color,color:t.color&&t.color.length>0?t.color[0]:"#000000",count:t.count,price:t.product.price,remove:n})}))},changeState:function(){"Yerevan"!==this.state?this.totalPrice=this.totalPrice+3e3:this.totalPrice=this.totalPriceWithoutDelivery},deleteItem:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(r=t.desserts.indexOf(e),o=0,t.user&&(o=t.user.id),!confirm("Are you sure you want to delete this item?")){n.next=7;break}return t.desserts.splice(r,1),n.next=7,t.$store.dispatch("wishListAndCart/removeFromCart",[r,o]).then((function(){t.init(),t.summCount()}));case 7:case"end":return n.stop()}}),n)})))()},cahngeCount:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:console.log(e),r=t.desserts.indexOf(e),o=0,t.user&&(o=t.user.id),t.$store.dispatch("wishListAndCart/updateFromCart",[r,o,e.count]).then((function(){t.init(),t.summCount()}));case 5:case"end":return n.stop()}}),n)})))()},summCount:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.count=0,e.totalPrice=0,e.desserts.forEach((function(t){e.count+=parseInt(t.count),e.totalPrice+=t.price*t.count}));case 3:case"end":return t.stop()}}),t)})))()}}},l=n(22),d=n(25),m=n.n(d),v=n(119),h=n(188),f=n(84),x=n(467),y=n(468),w=n(485),_=n(582),k=n(503),C=n(469),O=n(100),A=n(161),z=n(190),S=n(120),$=n(191),V=n(19),j=n(192),I=n(103),L=n(473),P=n(28),T=n(474),D=n(58),E=n(56),R=n(202),component=Object(l.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",[n("v-row",[n("v-col",{attrs:{lg:"9",md:"12"}},[n("v-data-table",{staticClass:"elevation-1",attrs:{headers:e.headers,items:e.desserts,"hide-default-footer":""},scopedSlots:e._u([{key:"item.image",fn:function(e){var t=e.item;return[n("v-img",{attrs:{src:t.image,contain:!0,width:"100",height:"100"}})]}},{key:"item.count",fn:function(t){var r=t.item;return[n("v-text-field",{staticStyle:{"max-width":"60px",margin:"0 auto !important","text-align":"center"},attrs:{type:"number",placeholder:"0",min:"1"},on:{input:function(t){return e.summCount()},change:function(t){return e.cahngeCount(r)}},model:{value:r.count,callback:function(t){e.$set(r,"count",t)},expression:"item.count"}})]}},{key:"item.color",fn:function(e){var t=e.item;return[n("v-card",{staticClass:"d-flex text-center align-center mx-3",staticStyle:{margin:"0 auto !important"},attrs:{color:t.color,dark:"",height:"30",width:"30"}})]}},{key:"item.remove",fn:function(t){var r=t.item;return[n("v-icon",{on:{click:function(t){return e.deleteItem(r)}}},[e._v("mdi-delete")])]}}])})],1),e._v(" "),n("v-col",{attrs:{lg:"3",md:"12"}},[n("v-card",[n("v-form",{model:{value:e.formValid,callback:function(t){e.formValid=t},expression:"formValid"}},[n("v-toolbar",{attrs:{color:"#b20839",dark:""}},[n("v-toolbar-title",[e._v("\n              cart\n            ")])],1),e._v(" "),n("v-card-text",[n("v-list-item-group",[n("v-list-item",[n("v-list-item-action",[n("v-checkbox",{attrs:{color:"primary"},model:{value:e.settings,callback:function(t){e.settings=t},expression:"settings"}})],1),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v("With delivery")])],1)],1),e._v(" "),n("v-list-item",[n("v-text-field",{attrs:{rules:e.requiredField,label:"Name, Last name",required:""},model:{value:e.nameLastName,callback:function(t){e.nameLastName=t},expression:"nameLastName"}})],1),e._v(" "),n("v-list-item",[n("v-text-field",{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),n("v-list-item",[n("v-text-field",{attrs:{rules:e.phoneRules,label:"Phone Number",required:""},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}})],1),e._v(" "),e.settings?n("v-list-item",[n("v-select",{attrs:{items:e.items,label:"State",rules:[function(e){return!!e||"State is required"}],required:""},on:{change:e.changeState},model:{value:e.state,callback:function(t){e.state=t},expression:"state"}})],1):e._e(),e._v(" "),e.settings?n("v-list-item",[n("v-text-field",{attrs:{counter:"",rules:e.addressRules,label:"Address",required:""},model:{value:e.address,callback:function(t){e.address=t},expression:"address"}})],1):e._e(),e._v(" "),e.settings?n("v-list-item",[n("v-select",{attrs:{items:e.payments,label:"Payment Method",rules:[function(e){return!!e||"Payment Method is required"}],required:""},model:{value:e.payment,callback:function(t){e.payment=t},expression:"payment"}})],1):e._e(),e._v(" "),n("v-list-item",{attrs:{"three-line":""}},[n("v-list-item-action",[n("v-checkbox",{attrs:{rules:e.requiredField,color:"primary"},model:{value:e.agree,callback:function(t){e.agree=t},expression:"agree"}})],1),e._v(" "),n("v-list-item-content",{staticStyle:{display:"block"},on:{click:function(t){e.dialog=!0}}},[n("v-list-item-title",[e._v("Conditions")]),e._v(" "),n("v-list-item-subtitle",[e._v("I have read and agree with the terms and conditions.")])],1)],1)],1)],1),e._v(" "),n("v-list",{attrs:{disabled:""}},[n("v-list-item-group",[n("v-list-item",{staticStyle:{"font-size":"18px"}},[n("v-list-item-icon",[e._v("\n                  Total Count:\n                ")]),e._v(" "),n("v-list-item-content",[n("v-list-item-title",[e._v(" "+e._s(e.count))])],1)],1)],1),e._v(" "),n("v-list-item-group",[n("v-list-item",{staticStyle:{"font-size":"18px"}},[n("v-list-item-icon",[e._v("\n                  Total Price:\n                ")]),e._v(" "),n("v-list-item-content",[n("v-list-item-title",{staticStyle:{color:"#e60000","font-weight":"600"}},[e._v(" "+e._s(e.totalPrice)+" AMD")])],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{disabled:!e.formValid,color:"#e60000",dark:""}},[e._v("\n              Buy\n            ")])],1)],1)],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{"max-width":"996"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"headline",staticStyle:{display:"flex","justify-content":"space-between"}},[e._v("Conditions")]),e._v(" "),n("v-container",{attrs:{fluid:""}},[n("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque exercitationem fugit illum ipsa, nesciunt non repellendus repudiandae sapiente suscipit, ullam vitae, voluptas. A aliquam architecto aut blanditiis cumque delectus deserunt dolor, est facere iure laborum libero, maiores nihil nisi nostrum odio optio pariatur, perferendis porro possimus quod repudiandae voluptas. Assumenda blanditiis debitis delectus deserunt, facilis fugiat illum laboriosam laborum libero magnam neque nulla quibusdam ratione reiciendis repudiandae sequi tenetur. Incidunt neque sint veniam! Animi asperiores assumenda at atque blanditiis corporis cumque doloribus eligendi eum facilis illo ipsa laboriosam libero natus nostrum praesentium, quisquam recusandae repellendus similique sunt tenetur vel vitae voluptas! Et fugiat impedit inventore, laboriosam nobis veritatis. Excepturi fuga, unde. Commodi dolorem eius enim esse fuga iusto nam non odit omnis quam quas quia rerum sequi sunt totam, voluptatem, voluptatum? A aliquam aperiam, dignissimos doloremque, harum impedit incidunt, iusto labore nobis nostrum provident quaerat quas sunt tenetur unde vitae voluptates! Adipisci alias architecto consequuntur culpa dolore eius, esse illo impedit iusto laboriosam modi mollitia natus nemo odio odit pariatur porro qui quia quibusdam repellat saepe sit suscipit, tempore tenetur ullam vel veniam vero! Ab ad aperiam, assumenda debitis deserunt dolor inventore ipsum itaque laudantium minus odit recusandae ut velit.")])]),e._v(" "),n("v-card-actions",[n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("close")])],1)],1)],1)],1)}),[],!1,null,"d0644a80",null);t.default=component.exports;m()(component,{VBtn:v.a,VCard:h.a,VCardActions:f.a,VCardText:f.b,VCardTitle:f.c,VCheckbox:x.a,VCol:y.a,VContainer:w.a,VDataTable:_.a,VDialog:k.a,VForm:C.a,VIcon:O.a,VImg:A.a,VList:z.a,VListItem:S.a,VListItemAction:$.a,VListItemContent:V.a,VListItemGroup:j.a,VListItemIcon:I.a,VListItemSubtitle:V.b,VListItemTitle:V.c,VRow:L.a,VSelect:P.a,VSpacer:T.a,VTextField:D.a,VToolbar:E.a,VToolbarTitle:R.a})}}]);