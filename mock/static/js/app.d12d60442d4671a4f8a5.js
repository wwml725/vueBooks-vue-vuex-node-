webpackJsonp([2],{Bn2f:function(e,t){},MIro:function(e,t){},NHnr:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("7+uW"),r={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"footer"},[o("router-link",{attrs:{to:"/home"}},[o("i",{staticClass:"iconfont icon-shouye"}),e._v(" "),o("span",[e._v("首页")])]),e._v(" "),o("router-link",{attrs:{to:"/list"}},[o("i",{staticClass:"iconfont icon-liebiao"}),e._v(" "),o("span",[e._v("列表")])]),e._v(" "),o("router-link",{attrs:{to:"/collect"}},[o("i",{staticClass:"iconfont icon-shoucang"}),e._v(" "),o("span",[e._v("收藏")])]),e._v(" "),o("router-link",{attrs:{to:"/add"}},[o("i",{staticClass:"iconfont icon-add"}),e._v(" "),o("span",[e._v("添加")])])],1)},staticRenderFns:[]};var a={name:"app",components:{Tab:o("VU/8")({data:function(){return{msg:"hello"}},created:function(){},methods:{},computed:{},components:{}},r,!1,function(e){o("srt6")},"data-v-a40adb64",null).exports}},i={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"fadeIn"}},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1)],1),this._v(" "),t("transition",{attrs:{name:"fadeIn"}},[this.$route.meta.keepAlive?this._e():t("router-view")],1),this._v(" "),t("Tab")],1)},staticRenderFns:[]};var s=o("VU/8")(a,i,!1,function(e){o("Bn2f")},null,null).exports,c=o("/ocq");o("QV70"),o("tcnj"),o("il+h"),o("wHgX");n.a.use(c.a);var u=new c.a({routes:[{path:"/",redirect:"/home"},{path:"/home",component:function(){return o.e(0).then(o.bind(null,"lO7g"))},meta:{keepAlive:!0,title:"首页"}},{path:"/collect",component:function(){return new Promise(function(e){e()}).then(o.bind(null,"QV70"))},meta:{title:"收藏"}},{path:"/add",component:function(){return new Promise(function(e){e()}).then(o.bind(null,"il+h"))},meta:{title:"添加"}},{path:"/detail/:bid",component:function(){return new Promise(function(e){e()}).then(o.bind(null,"wHgX"))},name:"detail"},{path:"/list",component:function(){return new Promise(function(e){e()}).then(o.bind(null,"tcnj"))}},{path:"*",redirect:"/home"}]}),l=o("7QTg"),v=o.n(l),d=(o("v2ns"),o("cTzj")),f=o.n(d);n.a.use(v.a),n.a.use(f.a,{preLoad:1.3,error:"http://img1.imgtn.bdimg.com/it/u=3779605030,1222595953&fm=27&gp=0.jpg",loading:"http://img.lanrentuku.com/img/allimg/1212/5-121204193R0-50.gif",attempt:1}),n.a.config.productionTip=!1,new n.a({el:"#app",router:u,template:"<App/>",components:{App:s}})},QV70:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={data:function(){return{msg:"hello"}},created:function(){},methods:{},computed:{},components:{MHeader:o("UeVD").a}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("MHeader",{attrs:{back:!0}},[this._v("收藏页面")])],1)},staticRenderFns:[]};var a=o("VU/8")(n,r,!1,function(e){o("aKKK")},"data-v-e3cd1040",null);t.default=a.exports},UeVD:function(e,t,o){"use strict";var n={props:{back:{type:Boolean,default:!1}},methods:{goback:function(){this.$router.go(-1)}}},r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[this._t("default"),this._v(" "),this.back?t("i",{staticClass:"iconfont icon-fanhui",on:{click:this.goback}}):this._e()],2)},staticRenderFns:[]};var a=o("VU/8")(n,r,!1,function(e){o("lKhW")},"data-v-220f7c94",null);t.a=a.exports},VKQw:function(e,t){},aKKK:function(e,t){},f27b:function(e,t){},gyMJ:function(e,t,o){"use strict";o.d(t,"e",function(){return a}),o.d(t,"b",function(){return i}),o.d(t,"f",function(){return s}),o.d(t,"a",function(){return c}),o.d(t,"c",function(){return u}),o.d(t,"d",function(){return l});var n=o("mtWM"),r=o.n(n);r.a.defaults.baseURL="http://localhost:3000",r.a.interceptors.response.use(function(e){return e.data});var a=function(e){return r.a.delete("/book?id="+e)},i=function(e){return r.a.get("/book?id="+e)},s=function(e,t){return r.a.put("/book?id="+e,t)},c=function(e){return r.a.post("/book",e)},u=function(){return r.a.all([r.a.get("/sliders"),r.a.get("/hots")])},l=function(e){return r.a.get("/page?offset="+e)}},"il+h":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("Xxa5"),r=o.n(n),a=o("exGp"),i=o.n(a),s=o("UeVD"),c=o("gyMJ"),u={data:function(){return{book:{}}},created:function(){},methods:{add:function(){var e=this;return i()(r.a.mark(function t(){return r.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)(e.book);case 2:e.$router.push("/list");case 3:case"end":return t.stop()}},t,e)}))()}},computed:{},components:{MHeader:s.a}},l={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("MHeader",[e._v("添加")]),e._v(" "),o("div",{staticClass:"content"},[o("ul",[o("li",[o("label",{attrs:{for:"bookName"}},[e._v("书的名称")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookName,expression:"book.bookName"}],attrs:{type:"text",id:"bookName"},domProps:{value:e.book.bookName},on:{input:function(t){t.target.composing||e.$set(e.book,"bookName",t.target.value)}}})]),e._v(" "),o("li",[o("label",{attrs:{for:"bookInfo"}},[e._v("书的信息")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookInfo,expression:"book.bookInfo"}],attrs:{type:"text",id:"bookInfo"},domProps:{value:e.book.bookInfo},on:{input:function(t){t.target.composing||e.$set(e.book,"bookInfo",t.target.value)}}})]),e._v(" "),o("li",[o("label",{attrs:{for:"bookPrice"}},[e._v("书的价格")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.book.bookPrice,expression:"book.bookPrice",modifiers:{number:!0}}],attrs:{type:"text",id:"bookPrice"},domProps:{value:e.book.bookPrice},on:{input:function(t){t.target.composing||e.$set(e.book,"bookPrice",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),o("li",[o("label",{attrs:{for:"bookCover"}},[e._v("书的封面")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookCover,expression:"book.bookCover"}],attrs:{type:"text",id:"bookCover"},domProps:{value:e.book.bookCover},on:{input:function(t){t.target.composing||e.$set(e.book,"bookCover",t.target.value)}}})]),e._v(" "),o("li",[o("button",{on:{click:e.add}},[e._v("添加")])])])])],1)},staticRenderFns:[]};var v=o("VU/8")(u,l,!1,function(e){o("kDWG")},"data-v-1688385c",null);t.default=v.exports},kDWG:function(e,t){},lKhW:function(e,t){},srt6:function(e,t){},tcnj:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("Gu7T"),r=o.n(n),a=o("Xxa5"),i=o.n(a),s=o("exGp"),c=o.n(s),u=o("gyMJ"),l=o("UeVD"),v={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"spinner"},[t("div",{staticClass:"rect1"}),this._v(" "),t("div",{staticClass:"rect2"}),this._v(" "),t("div",{staticClass:"rect3"}),this._v(" "),t("div",{staticClass:"rect4"}),this._v(" "),t("div",{staticClass:"rect5"})])}]};var d=o("VU/8")(null,v,!1,function(e){o("f27b")},"data-v-63e70f6e",null).exports,f={data:function(){return{msg:"hello",books:[],offset:0,hasMore:!0,isLoading:!1}},mounted:function(){var e=this,t=this.$refs.scroll,o=t.offsetTop,n=0,r=!1;t.addEventListener("touchstart",function(a){if(0==t.scrollTop&&t.offsetTop==o){var i=a.touches[0].pageY,s=function e(a){r=!0;var s=a.touches[0].pageY;(n=s-i)>0?n<=100?t.style.top=n+o+"px":(n=100,t.style.top=o+100+"px"):(t.removeEventListener("touchmove",e),t.removeEventListener("touchend",c))},c=function a(i){r&&(r=!1,clearInterval(e.timer1),e.timer1=setInterval(function(){if(n<=0)return clearInterval(e.timer1),n=0,t.style.top=o+"px",t.removeEventListener("touchmove",s),t.removeEventListener("touchend",a),e.books=[],e.offset=0,e.hasMore=!0,void e.getData();n-=1,t.style.top=o+n+"px"},1))};t.addEventListener("touchmove",s),t.addEventListener("touchend",c)}},!1)},created:function(){this.getData()},methods:{loadMore:function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){var t=e.$refs.scroll;t.scrollTop+t.clientHeight+20>t.scrollHeight&&e.getData()},20)},more:function(){this.getData()},remove:function(e){var t=this;return c()(i.a.mark(function o(){return i.a.wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,Object(u.e)(e);case 2:t.books=t.books.filter(function(t){return t.bookId!=e});case 3:case"end":return o.stop()}},o,t)}))()},getData:function(){var e=this;return c()(i.a.mark(function t(){var o,n,a;return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!e.hasMore||e.isLoading){t.next=11;break}return e.isLoading=!0,t.next=4,Object(u.d)(e.offset);case 4:o=t.sent,n=o.books,a=o.hasMore,e.books=[].concat(r()(e.books),r()(n)),e.hasMore=a,e.offset=e.books.length,e.isLoading=!1;case 11:case"end":return t.stop()}},t,e)}))()}},computed:{},components:{MHeader:l.a,Loading:d}},p={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("MHeader",{attrs:{back:!0}},[e._v("列表页面")]),e._v(" "),o("Loading",{attrs:{id:"load"}}),e._v(" "),o("div",{ref:"scroll",staticClass:"content",on:{scroll:e.loadMore}},[o("ul",e._l(e.books,function(t,n){return o("router-link",{key:n,attrs:{tag:"li",to:{name:"detail",params:{bid:t.bookId}}}},[o("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.bookCover,expression:"book.bookCover"}]}),e._v(" "),o("div",[o("h4",[e._v(e._s(t.bookName))]),e._v(" "),o("p",[e._v(e._s(t.bookInfo))]),e._v(" "),o("b",[e._v(e._s(t.bookPrice))]),e._v(" "),o("button",{on:{click:function(o){o.stopPropagation(),e.remove(t.bookId)}}},[e._v("删除")])])])})),e._v(" "),o("div",{staticClass:"more",on:{click:e.more}},[o("div",{directives:[{name:"show",rawName:"v-show",value:e.hasMore,expression:"hasMore"}]},[e._v("加载更多")]),e._v(" "),o("div",{directives:[{name:"show",rawName:"v-show",value:!e.hasMore,expression:"!hasMore"}]},[e._v("别扯了，没有了")])])])],1)},staticRenderFns:[]};var m=o("VU/8")(f,p,!1,function(e){o("VKQw")},"data-v-05925aca",null);t.default=m.exports},v2ns:function(e,t){},wHgX:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o("fZjL"),r=o.n(n),a=o("Xxa5"),i=o.n(a),s=o("exGp"),c=o.n(s),u=o("UeVD"),l=o("gyMJ"),v={data:function(){return{msg:"hello",book:[]}},watch:{$route:function(){this.getData()}},created:function(){this.getOneBook()},methods:{update:function(){var e=this;return c()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.f)(e.bid,e.book);case 2:e.$router.push("/list");case 3:case"end":return t.stop()}},t,e)}))()},getOneBook:function(){var e=this;return c()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.b)(e.bid);case 2:e.book=t.sent,r()(e.book).length>0||e.$router.push("/list");case 4:case"end":return t.stop()}},t,e)}))()}},computed:{bid:function(){return this.$route.params.bid}},components:{MHeader:u.a}},d={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"detail"},[o("MHeader",{attrs:{back:!0}},[e._v("详情页")]),e._v(" "),o("ul",[o("li",[o("label",{attrs:{for:"bookName"}},[e._v("书的名称")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookName,expression:"book.bookName"}],attrs:{type:"text",id:"bookName"},domProps:{value:e.book.bookName},on:{input:function(t){t.target.composing||e.$set(e.book,"bookName",t.target.value)}}})]),e._v(" "),o("li",[o("label",{attrs:{for:"bookInfo"}},[e._v("书的信息")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:e.book.bookInfo,expression:"book.bookInfo"}],attrs:{type:"text",id:"bookInfo"},domProps:{value:e.book.bookInfo},on:{input:function(t){t.target.composing||e.$set(e.book,"bookInfo",t.target.value)}}})]),e._v(" "),o("li",[o("label",{attrs:{for:"bookPrice"}},[e._v("书的价格")]),e._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.number",value:e.book.bookPrice,expression:"book.bookPrice",modifiers:{number:!0}}],attrs:{type:"text",id:"bookPrice"},domProps:{value:e.book.bookPrice},on:{input:function(t){t.target.composing||e.$set(e.book,"bookPrice",e._n(t.target.value))},blur:function(t){e.$forceUpdate()}}})]),e._v(" "),o("li",[o("button",{on:{click:e.update}},[e._v("确认修改")])])])],1)},staticRenderFns:[]};var f=o("VU/8")(v,d,!1,function(e){o("MIro")},"data-v-3a7fb2cc",null);t.default=f.exports}},["NHnr"]);
//# sourceMappingURL=app.d12d60442d4671a4f8a5.js.map