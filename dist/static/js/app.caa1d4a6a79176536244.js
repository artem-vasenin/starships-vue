webpackJsonp([1],{"4G9+":function(t,e){},"7zck":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",{staticClass:"footer justify-center",attrs:{fixed:""}},[e("span",{staticClass:"copy"},[this._v("© 2019 ВКС России! Слава Императору!")])])},staticRenderFns:[]};var n={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-toolbar",{attrs:{fixed:""}},[a("v-btn",{attrs:{icon:"",to:"/"}},[a("v-icon",[t._v("home")])],1),t._v(" "),a("v-toolbar-title",{staticClass:"hidden-xs-only"},[t._v("ВКС России, гроза всея галактики!")]),t._v(" "),a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:""},on:{click:t.GetStarShipsList}},[a("span",{attrs:{"сlass":"ml-3"}},[t._v("Наш флот")])]),t._v(" "),a("v-btn",{attrs:{icon:""},on:{click:function(e){return t.SearchStarShips("")}}},[a("v-icon",[t._v("search")])],1)],1),t._v(" "),a("v-progress-linear",{staticClass:"ma-0 mt-3 progress",attrs:{indeterminate:t.loading,color:"secondary",height:"3"}})],1)},staticRenderFns:[]};var r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{value:t.searchDialog,"max-width":"600"}},[a("v-card",[a("v-card-title",{staticClass:"headline"},[t._v("Поиск по наименованию корабля")]),t._v(" "),a("v-card-text",[a("v-text-field",{attrs:{label:"Поиск по названию корабля",color:"primary"},on:{keydown:t.PostMessageKeydown},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("v-card-actions",[a("v-spacer"),t._v(" "),a("v-btn",{attrs:{flat:"flat"},on:{click:t.CloseDialog}},[t._v("Отмена")]),t._v(" "),a("v-btn",{attrs:{color:"primary",flat:"flat"},on:{click:t.SearchStarShips}},[t._v("Поиск")])],1)],1)],1)},staticRenderFns:[]};var l={name:"App",components:{Footer:a("VU/8")({name:"Footer"},i,!1,function(t){a("4G9+")},"data-v-0551f700",null).exports,Header:a("VU/8")({name:"Header",data:function(){return{search:"",searchDialog:!1}},computed:{loading:function(){return this.$store.state.loading}},methods:{SearchStarShips:function(){this.$store.dispatch("SetDialog",!0)},GetStarShipsList:function(){this.$store.dispatch("SearchStarShips",null),this.$router.push("/starships/null")}}},n,!1,function(t){a("lbue")},"data-v-2c2a1bb7",null).exports,Dialog:a("VU/8")({name:"Dialog",data:function(){return{search:""}},computed:{searchDialog:function(){return this.$store.state.dialog}},methods:{CloseDialog:function(){this.search="",this.$store.dispatch("SetDialog",!1)},SearchStarShips:function(){this.search&&this.$store.dispatch("SearchStarShips",this.search),this.$router.push("/starships/"+this.search),this.CloseDialog()},PostMessageKeydown:function(t){13!==t.keyCode&&13!==t.which||(t.preventDefault(),this.SearchStarShips())}}},r,!1,function(t){a("vfla")},"data-v-7de2f1b0",null).exports}},o={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",[e("Header"),this._v(" "),e("v-content",{staticClass:"py-5"},[e("router-view")],1),this._v(" "),e("Footer"),this._v(" "),e("Dialog")],1)},staticRenderFns:[]},c=a("VU/8")(l,o,!1,null,null,null).exports,v=a("/ocq"),u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-layout",[e("v-flex",{attrs:{xs12:"",md8:"","mt-5":"","offset-md2":""}},[e("v-card",[e("v-img",{attrs:{src:"https://vignette.wikia.nocookie.net/starwars/images/d/da/Executorbridge.jpg/revision/latest/scale-to-width-down/1000?cb=20120110005354","aspect-ratio":"2.75"}}),this._v(" "),e("v-card-title",{attrs:{"primary-title":""}},[e("div",[e("h3",{staticClass:"headline mb-2"},[this._v("Мощь имперского флота несокрушима")]),this._v(" "),e("div",[this._v("\n            Соединение сил привело к необходимому сочетанию воздушной и космической сферы как смежных областей,\n            для более удобного контроля за ними. Создание данных сил обусловлено ситуацией на мировой арене,\n            изменениями при перевооружении других государств, увеличением значимости космического сектора для\n            военно-экономического и социального прогресса.\n          ")])])]),this._v(" "),e("v-card-actions",[e("v-spacer"),this._v(" "),e("v-btn",{attrs:{flat:"",color:"primary",to:"/starships/null"}},[this._v("Наш флот")])],1)],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")({name:"Home"},u,!1,function(t){a("nGQR")},"data-v-123d436d",null).exports,d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:"",md8:"","pt-3":"","offset-md2":""}},[a("v-card",[a("v-toolbar",{attrs:{color:"primary",dark:""}},[a("v-toolbar-title",[t._v("Список кораблей")])],1),t._v(" "),t.starShipsList.length?a("v-list",[t._l(t.starShipsList,function(e,s){return a("v-list-group",{key:s,attrs:{"prepend-icon":"flight_takeoff","no-action":""},scopedSlots:t._u([{key:"activator",fn:function(){return[a("v-list-tile",[a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.name))])],1)],1)]},proxy:!0}],null,!0)},[t._v(" "),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("trending_up")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.starship_class))])],1)],1),t._v(" "),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("euro_symbol")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.cost_in_credits))])],1)],1),t._v(" "),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("compare_arrows")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.length))])],1)],1),t._v(" "),a("v-list-tile",[a("v-list-tile-action",[a("v-icon",[t._v("date_range")])],1),t._v(" "),a("v-list-tile-content",[a("v-list-tile-title",[t._v(t._s(e.consumables))])],1)],1),t._v(" "),a("v-list-tile",[a("v-list-tile-content",[a("v-btn",{staticClass:"ma-0",attrs:{color:"primary"},on:{click:function(a){return t.GetStarShipDetails(e.url)}}},[t._v("Подробнее")])],1)],1)],1)}),t._v(" "),a("div",{staticClass:"text-xs-center pt-5 pagination"},[a("v-btn",{attrs:{outline:"",small:"",fab:"",color:"primary",disabled:!t.prevPage},on:{click:t.PrevPage}},[a("v-icon",[t._v("keyboard_arrow_left")])],1),t._v(" "),a("v-btn",{attrs:{outline:"",small:"",fab:"",color:"primary",disabled:!t.nextPage},on:{click:t.NextPage}},[a("v-icon",[t._v("keyboard_arrow_right")])],1)],1)],2):a("v-card-text",[a("p",[t._v("Список кораблей пуст")])])],1)],1)],1)},staticRenderFns:[]};var p=a("VU/8")({name:"StarShipList",props:["search"],data:function(){return{page:2}},computed:{starShipsList:function(){return this.$store.state.starShipsList||[]},prevPage:function(){return this.$store.state.prevPage},nextPage:function(){return this.$store.state.nextPage||[]}},methods:{GetStarShipsList:function(){var t="null"!==this.$props.search?this.$props.search:null;this.$store.dispatch("SearchStarShips",t)},GetStarShipDetails:function(t){this.$store.dispatch("GetStarShipDetails",t),this.$router.push("/starship")},PrevPage:function(){this.$store.dispatch("GetStarShipsPage",this.prevPage)},NextPage:function(){this.$store.dispatch("GetStarShipsPage",this.nextPage)}},mounted:function(){this.$props.search&&this.GetStarShipsList()}},d,!1,function(t){a("VFN5")},"data-v-1e0c7b2e",null).exports,f={name:"StarShipDetails",data:function(){return{details:[],headers:[{text:"Наименование",align:"left",value:"name",sortable:!1},{text:"Значение",align:"right",value:"value",sortable:!1}]}},computed:{starShipsDetails:function(){return this.details=this.$store.state.starShipsDetails?this.AddDetailsItems(this.$store.state.starShipsDetails):[],this.$store.state.starShipsDetails}},methods:{AddDetailsItems:function(t){var e=[];for(var a in t){var s=null;Array.isArray(t[a])||"url"===a||(s=t[a],e.push({name:a,value:s}))}return e}}},m={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{staticClass:"pb-5 pt-3",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[t.starShipsDetails?a("v-card",{staticClass:"mb-3"},[a("v-img",{attrs:{src:"https://vignette.wikia.nocookie.net/starwars/images/3/30/Executor_BF2.png/revision/latest/scale-to-width-down/1000?cb=20180903230846","aspect-ratio":"2.75"}}),t._v(" "),a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.starShipsDetails.name))])])])],1):a("v-card",[a("v-card-title",[t._v("\n        Извините, корабль не найден\n      ")])],1)],1),t._v(" "),a("v-flex",{attrs:{xs12:"",md8:"","offset-md2":""}},[t.details.length?a("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.details,"rows-per-page-items":[20,40,{text:"все детали",value:-1}],"rows-per-page-text":"Количество записей"},scopedSlots:t._u([{key:"items",fn:function(e){return[a("td",[t._v(t._s(e.item.name))]),t._v(" "),a("td",{staticClass:"text-xs-right"},[t._v(t._s(e.item.value))])]}}],null,!1,3005966021)}):t._e()],1)],1)},staticRenderFns:[]};var _=a("VU/8")(f,m,!1,function(t){a("TSqZ")},"data-v-7c0c02ca",null).exports;s.default.use(v.a);var S=new v.a({mode:"history",routes:[{path:"/",component:h},{path:"/starships/:search",component:p,props:!0},{path:"/starship",component:_}]}),g=a("3EgV"),x=a.n(g),b=a("NYxO"),F=a("mtWM"),y=a.n(F);s.default.use(b.a);var D=new b.a.Store({state:{loading:!1,dialog:!1,count:0,starShipsList:[],starShipsDetails:null,nextPage:null,prevPage:null},actions:{SetDialog:function(t,e){(0,t.commit)("SetField",{name:"dialog",value:e})},SearchStarShips:function(t,e){var a=t.commit,s=t.rootGetters;a("SetField",{name:"loading",value:!0});var i=e?"starships/?search="+e:"starships/";s.ax.get(i).then(function(t){a("SetField",{name:"nextPage",value:t.data.next}),a("SetField",{name:"prevPage",value:t.data.previous}),a("SetField",{name:"count",value:t.data.count}),a("SetField",{name:"starShipsList",value:t.data.results})}).then(function(){a("SetField",{name:"loading",value:!1})}).catch(function(t){a("SetField",{name:"loading",value:!1}),console.log(t)})},GetStarShipDetails:function(t,e){var a=t.commit,s=t.rootGetters;a("SetField",{name:"loading",value:!0}),a("SetField",{name:"starShipsDetails",value:null}),s.ax.get(e).then(function(t){a("SetField",{name:"starShipsDetails",value:t.data})}).then(function(){a("SetField",{name:"loading",value:!1})}).catch(function(t){a("SetField",{name:"loading",value:!1}),console.log(t)})},GetStarShipsPage:function(t,e){var a=t.commit,s=t.rootGetters;a("SetField",{name:"loading",value:!0}),s.ax.get(e).then(function(t){a("SetField",{name:"nextPage",value:t.data.next}),a("SetField",{name:"prevPage",value:t.data.previous}),a("SetField",{name:"count",value:t.data.count}),a("SetField",{name:"starShipsList",value:t.data.results})}).then(function(){a("SetField",{name:"loading",value:!1})}).catch(function(t){a("SetField",{name:"loading",value:!1}),console.log(t)})}},mutations:{SetField:function(t,e){t[e.name]=e.value}},getters:{ax:function(){return y.a.create({baseURL:"https://swapi.co/api/",timeout:6e4,headers:{"Content-Type":"application/json"}})}}});a("7zck");s.default.use(x.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:S,store:D,render:function(t){return t(c)}})},TSqZ:function(t,e){},VFN5:function(t,e){},lbue:function(t,e){},nGQR:function(t,e){},vfla:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.caa1d4a6a79176536244.js.map