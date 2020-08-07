exports.ids=[21],exports.modules={280:function(t,e,d){"use strict";d(119),d(97);var r=d(1),o=d.n(r);var l,n=d(18);e.a=(l="container",o.a.extend({name:"v-"+l,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:e,data:data,children:d}){data.staticClass=`${l} ${data.staticClass||""}`.trim();const{attrs:r}=data;if(r){data.attrs={};const t=Object.keys(r).filter(t=>{if("slot"===t)return!1;const e=r[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e});t.length&&(data.staticClass+=" "+t.join(" "))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,data,d)}})).extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(t,{props:e,data:data,children:d}){let r;const{attrs:o}=data;return o&&(data.attrs={},r=Object.keys(o).filter(t=>{if("slot"===t)return!1;const e=o[t];return t.startsWith("data-")?(data.attrs[t]=e,!1):e||"string"==typeof e})),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(n.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),d)}})},286:function(t,e,d){var content=d(287);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals),d(6).default("7c06aa28",content,!0)},287:function(t,e,d){(e=d(5)(!1)).push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table thead tr:last-child th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table thead tr th{color:rgba(0,0,0,.6)}.theme--light.v-data-table tbody tr:not(:last-child) td:last-child,.theme--light.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row),.theme--light.v-data-table tbody tr:not(:last-child) th:last-child,.theme--light.v-data-table tbody tr:not(:last-child) th:not(.v-data-table__mobile-row){border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table tbody tr.active{background:#f5f5f5}.theme--light.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 hsla(0,0%,100%,.12)}.theme--dark.v-data-table thead tr:last-child th{border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table thead tr th{color:hsla(0,0%,100%,.7)}.theme--dark.v-data-table tbody tr:not(:last-child) td:last-child,.theme--dark.v-data-table tbody tr:not(:last-child) td:not(.v-data-table__mobile-row),.theme--dark.v-data-table tbody tr:not(:last-child) th:last-child,.theme--dark.v-data-table tbody tr:not(:last-child) th:not(.v-data-table__mobile-row){border-bottom:thin solid hsla(0,0%,100%,.12)}.theme--dark.v-data-table tbody tr.active{background:#505050}.theme--dark.v-data-table tbody tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.v-data-table{max-width:100%}.v-data-table table{width:100%;border-spacing:0}.v-data-table td,.v-data-table th{padding:0 16px}.v-data-table th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table th{text-align:left}.v-application--is-rtl .v-data-table th{text-align:right}.v-data-table td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto!important}.v-data-table__progress .v-progress-linear{position:absolute}.v-data-table__progress th{height:auto!important;border:none!important;padding:0;position:relative}.v-data-table--dense td{height:24px}.v-data-table--dense th{height:32px}.v-data-table--fixed-header .v-data-table__wrapper,.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header thead th{border-bottom:0!important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header thead tr:nth-child(2) th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed.v-data-table--dense thead tr:nth-child(2) th{top:32px}",""]),t.exports=e},301:function(t,e,d){"use strict";d(286);var r=d(0),o=d(7),l=d(2);e.a=Object(l.a)(o.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes(){return{"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,...this.themeClasses}}},methods:{genWrapper(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(r.g)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},389:function(t,e,d){"use strict";d.r(e);var r={async fetch({store:t}){await t.dispatch("products/fetch")},layout:"dashboard",middleware:"admin",name:"index",data:()=>({}),computed:{products(){return this.$store.getters["products/products"]}},methods:{deleteProducts(t,e){this.$store.dispatch("products/delete",[e]).then(t=>{this.$store.dispatch("products/fetch")})},addBrand(){}}},o=d(10),l=d(11),n=d.n(l),h=d(52),c=d(280),v=d(44),m=d(78),f=d(301),_=d(98);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,d=t._self._c||e;return d("v-container",[d("v-toolbar-title",{staticStyle:{display:"flex","justify-content":"space-between"}},[t._v("\n    Products\n    "),d("v-btn",{attrs:{small:"",dark:"",to:"products/new",color:"purple"}},[t._v("Add new product")])],1),t._v(" "),d("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[d("thead",[d("tr",[d("th",{staticClass:"text-left"},[t._v("Image")]),t._v(" "),d("th",{staticClass:"text-left"},[t._v("Name (eng)")]),t._v(" "),d("th",{staticClass:"text-left"},[t._v("Name (rus )")]),t._v(" "),d("th",{staticClass:"text-left"},[t._v("Name (am)")]),t._v(" "),d("th",{staticClass:"text-left"},[t._v("Action")])])]),t._v(" "),d("tbody",t._l(t.products,(function(e){return d("tr",{key:e.name},[d("td",[d("v-img",{attrs:{src:JSON.parse(e.images)[0],"max-width":"100"}})],1),t._v(" "),d("td",[t._v(t._s(e.name_en))]),t._v(" "),d("td",[t._v(t._s(e.name_ru))]),t._v(" "),d("td",[t._v(t._s(e.name_am))]),t._v(" "),d("td",[d("v-btn",{attrs:{small:"",to:"products/edit/"+e.id,elevation:0,dark:"",fab:"",color:"primary"}},[d("v-icon",[t._v("mdi-pencil")])],1),t._v(" "),d("v-btn",{attrs:{small:"",elevation:0,dark:"",fab:"",color:"error"},on:{click:function(d){return t.deleteProducts(d,e.id)}}},[d("v-icon",[t._v("mdi-delete")])],1)],1)])})),0)]},proxy:!0}])})],1)}),[],!1,(function(t){}),"619a3fb2","75a118d5");e.default=component.exports;n()(component,{VBtn:h.a,VContainer:c.a,VIcon:v.a,VImg:m.a,VSimpleTable:f.a,VToolbarTitle:_.a})}};