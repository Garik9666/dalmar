(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{521:function(e,t,r){var content=r(572);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(15).default)("4ebcbe30",content,!0,{sourceMap:!1})},571:function(e,t,r){"use strict";var n=r(521);r.n(n).a},572:function(e,t,r){(t=r(14)(!1)).push([e.i,".add_iamge[data-v-bbd0d610]{position:relative;cursor:pointer}.add_iamge i[data-v-bbd0d610]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%)}",""]),e.exports=t},601:function(e,t,r){"use strict";r.r(t);r(33);var n=r(6),o={name:"",layout:"dashboard",middleware:"admin",fetch:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route,n=e.store,t.next=3,n.dispatch("categories/getCategory",[r.params.id]);case 3:return t.next=5,n.dispatch("multimedia/fetch");case 5:return t.next=7,n.dispatch("brands/fetch");case 7:case"end":return t.stop()}}),t)})))()},data:function(){return{valid:!0,imageUpladForm:!0,name_en:"",name_ru:"",name_am:"",imageName:"",order:"",dialog:!1,uploadDialog:!1,selectedImages:[],color:"",selectedBrand:"",nameRules:[function(e){return!!e||"Field is required"}],files:[],fileRules:[function(e){return!!e||"File is required"},function(e){return!!e&&e.size<5e5||"File should be les then 500 KB"}],parentCategory:0}},methods:{removeImage:function(e,i){this.$delete(this.selectedImages,i)},selectImage:function(e,t){this.dialog=!1,this.selectedImages.push(t)},changeFunc:function(){console.log(this.files)},uploadImage:function(){var e=this;this.uploadDialog=!1;var data=new FormData;data.append("name",this.imageName),data.append("image",this.files),this.$axios.$post("http://localhost:8000/api/multimedia/upload",data).then((function(t){e.files=[],e.$store.dispatch("multimedia/fetch")})).catch((function(e){console.log(e)}))},updateCategory:function(){var e=this;this.$store.dispatch("categories/updateCategory",[this.$route.params.id,this.name_en,this.name_ru,this.name_am,this.order,this.selectedImages,this.color,this.selectedBrand,this.parentCategory]).then((function(t){e.$router.push("/dashboard/categories")}))}},mounted:function(){this.name_en=this.category.name_en,this.name_ru=this.category.name_ru,this.name_am=this.category.name_am,this.order=this.category.order,this.selectedImages=JSON.parse(this.category.image),this.color=this.category.color,this.selectedBrand=this.category.brand,this.parentCategory=this.category.parent},computed:{images:function(){return this.$store.getters["multimedia/images"]},category:function(){return this.$store.getters["categories/category"]},categories:function(){return this.$store.getters["categories/categories"]},brands:function(){return this.$store.getters["brands/brands"]}}},l=(r(571),r(22)),c=r(25),d=r.n(c),m=r(70),v=r(119),f=r(188),h=r(84),_=r(468),y=r(584),x=r(485),C=r(503),k=r(531),w=r(469),V=r(493),I=r(100),F=r(161),S=r(19),$=r(187),N=r(473),R=r(474),B=r(58),j=r(202),component=Object(l.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"6"}},[r("v-toolbar-title",{staticStyle:{display:"flex","justify-content":"space-between"}},[e._v("\n        Edit new category\n      ")]),e._v(" "),r("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[r("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Name (eng)",required:""},model:{value:e.name_en,callback:function(t){e.name_en=t},expression:"name_en"}}),e._v(" "),r("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Name (ru)",required:""},model:{value:e.name_ru,callback:function(t){e.name_ru=t},expression:"name_ru"}}),e._v(" "),r("v-text-field",{attrs:{counter:10,rules:e.nameRules,label:"Name (am)",required:""},model:{value:e.name_am,callback:function(t){e.name_am=t},expression:"name_am"}}),e._v(" "),r("v-row",[r("v-col",{attrs:{cols:"6"}},[r("v-autocomplete",{attrs:{items:e.categories,label:"Parent Category","item-text":"name","item-value":"id"},scopedSlots:e._u([{key:"selection",fn:function(t){return[r("v-list-item-content",[r("v-list-item-title",[e._v("\n                    "+e._s(t.item.name)+"\n                  ")])],1)]}},{key:"item",fn:function(t){return[r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(t.name))])],1)]}}]),model:{value:e.parentCategory,callback:function(t){e.parentCategory=t},expression:"parentCategory"}})],1),e._v(" "),r("v-col",{attrs:{cols:"6"}},[r("v-autocomplete",{attrs:{items:e.brands.brands,label:"Brand","item-text":"name","item-value":"id"},scopedSlots:e._u([{key:"selection",fn:function(t){return[r("v-list-item-content",[r("v-list-item-title",[e._v("\n                    "+e._s(t.item.name)+"\n                  ")])],1)]}},{key:"item",fn:function(t){return[r("v-list-item-content",[r("v-list-item-title",[e._v("\n                    "+e._s(t.item.name)+"\n                  ")])],1)]}}]),model:{value:e.selectedBrand,callback:function(t){e.selectedBrand=t},expression:"selectedBrand"}})],1)],1),e._v(" "),r("v-col",{staticClass:"pl-0",attrs:{cols:"5"}},[r("v-color-picker",{model:{value:e.color,callback:function(t){e.color=t},expression:"color"}})],1),e._v(" "),r("v-col",{staticClass:"pl-0",attrs:{cols:"5"}},[r("v-text-field",{attrs:{type:"number",counter:10,rules:e.nameRules,label:"Order",required:""},model:{value:e.order,callback:function(t){e.order=t},expression:"order"}})],1),e._v(" "),r("v-row",[e._l(e.selectedImages,(function(image,i){return r("v-col",{key:i,staticClass:" d-flex child-flex",attrs:{cols:"3"}},[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var n=t.hover;return[r("v-card",{staticClass:"d-flex"},[r("v-img",{staticClass:"grey lighten-2",attrs:{src:image,"aspect-ratio":"1"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},[e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:n,expression:"hover"}],staticClass:"align-self-center",staticStyle:{position:"relative",height:"100%"}},[r("v-btn",{staticStyle:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%, -50%)"},attrs:{icon:"",fab:""},on:{click:function(t){return e.removeImage(t,i)}}},[r("v-icon",{attrs:{size:"50",color:"error"}},[e._v("\n                        mdi-delete\n                      ")])],1)],1)])],1)]}}],null,!0)})],1)})),e._v(" "),r("v-col",{staticClass:"pl-0",attrs:{cols:"3"}},[r("v-card",{staticClass:"mx-auto add_iamge",attrs:{"min-height":"200"},on:{click:function(t){t.stopPropagation(),e.dialog=!0}}},[r("v-icon",{attrs:{size:"40"}},[e._v("mdi-plus")])],1)],1)],2),e._v(" "),r("v-btn",{staticClass:"mr-4",attrs:{disabled:!e.valid,color:"success"},on:{click:e.updateCategory}},[e._v("Save")])],1)],1)],1),e._v(" "),r("v-dialog",{attrs:{"max-width":"996"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline",staticStyle:{display:"flex","justify-content":"space-between"}},[e._v("Choose image "),r("v-btn",{attrs:{small:"",dark:"",color:"purple"},on:{click:function(t){t.stopPropagation(),e.uploadDialog=!0}}},[e._v("Add new image")])],1),e._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-row",e._l(e.images,(function(image,i){return r("v-col",{key:i,staticClass:"d-flex child-flex",attrs:{cols:"3"}},[r("v-card",{staticClass:"d-flex",attrs:{flat:"",tile:"","data-url":image.path},on:{click:function(t){return e.selectImage(t,image.path)}}},[r("v-img",{staticClass:"grey lighten-2",attrs:{src:image.path,"aspect-ratio":"1"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[r("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[r("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)],1)})),1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{color:"green darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v("close")])],1)],1)],1),e._v(" "),r("v-dialog",{attrs:{"max-width":"400"},model:{value:e.uploadDialog,callback:function(t){e.uploadDialog=t},expression:"uploadDialog"}},[r("v-card",[r("v-card-title",{staticClass:"headline",staticStyle:{display:"flex","justify-content":"space-between"}},[e._v("Choose image")]),e._v(" "),r("v-container",{attrs:{fluid:""}},[r("v-form",{model:{value:e.imageUpladForm,callback:function(t){e.imageUpladForm=t},expression:"imageUpladForm"}},[r("v-text-field",{attrs:{rules:e.nameRules,label:"Name",required:""},model:{value:e.imageName,callback:function(t){e.imageName=t},expression:"imageName"}}),e._v(" "),r("v-file-input",{attrs:{rules:e.fileRules,label:"Choose Image",accept:"image/*"},on:{change:e.changeFunc},model:{value:e.files,callback:function(t){e.files=t},expression:"files"}})],1)],1),e._v(" "),r("v-card-actions",[r("v-spacer"),e._v(" "),r("v-btn",{attrs:{disabled:!e.imageUpladForm,color:"green darken-1",text:""},on:{click:e.uploadImage}},[e._v("Upload")])],1)],1)],1)],1)}),[],!1,null,"bbd0d610",null);t.default=component.exports;d()(component,{VAutocomplete:m.a,VBtn:v.a,VCard:f.a,VCardActions:h.a,VCardTitle:h.c,VCol:_.a,VColorPicker:y.a,VContainer:x.a,VDialog:C.a,VFileInput:k.a,VForm:w.a,VHover:V.a,VIcon:I.a,VImg:F.a,VListItemContent:S.a,VListItemTitle:S.c,VProgressCircular:$.a,VRow:N.a,VSpacer:R.a,VTextField:B.a,VToolbarTitle:j.a})}}]);