(function(t){function e(e){for(var a,r,s=e[0],u=e[1],c=e[2],d=0,g=[];d<s.length;d++)r=s[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&g.push(o[r][0]),o[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(t[a]=u[a]);Q&&Q(e);while(g.length)g.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var a={},r={app:0},o={app:0},i=[];function s(t){return u.p+"js/"+({about:"about"}[t]||t)+"."+{about:"17a08ba0"}[t]+".js"}function u(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={about:1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"d9340f11"}[t]+".css",o=u.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var c=i[s],d=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(d===a||d===o))return e()}var g=document.getElementsByTagName("style");for(s=0;s<g.length;s++){c=g[s],d=c.getAttribute("data-href");if(d===a||d===o)return e()}var Q=document.createElement("link");Q.rel="stylesheet",Q.type="text/css",Q.onload=e,Q.onerror=function(e){var a=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[t],Q.parentNode.removeChild(Q),n(i)},Q.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(Q)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=i);var c,d=document.createElement("script");d.charset="utf-8",d.timeout=120,u.nc&&d.setAttribute("nonce",u.nc),d.src=s(t);var g=new Error;c=function(e){d.onerror=d.onload=null,clearTimeout(Q);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;g.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",g.name="ChunkLoadError",g.type=a,g.request=r,n[1](g)}o[t]=void 0}};var Q=setTimeout((function(){c({type:"timeout",target:d})}),12e4);d.onerror=d.onload=c,document.head.appendChild(d)}return Promise.all(e)},u.m=t,u.c=a,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)u.d(n,a,function(e){return t[e]}.bind(null,a));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=e,c=c.slice();for(var g=0;g<c.length;g++)e(c[g]);var Q=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0292":function(t,e,n){"use strict";var a=n("178c"),r=n.n(a);r.a},"178c":function(t,e,n){},"1f54":function(t,e,n){},"30d5":function(t,e,n){"use strict";var a=n("a4a6"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"body"}},[a("div",{attrs:{id:"nav"}},[a("nav",[a("ul",[t._m(0),a("li",[a("router-link",{attrs:{to:"/"}},[t._v("播放列表")])],1),a("li",[a("router-link",{attrs:{to:"/about"}},[t._v("歌词")])],1),a("div",[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],staticClass:"searchBar",attrs:{type:"text",placeholder:"搜索音乐"},domProps:{value:t.query},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.investigation(e)},input:function(e){e.target.composing||(t.query=e.target.value)}}}),a("a",{attrs:{href:"javascript:;"},on:{click:t.investigation}},[a("img",{attrs:{src:n("e45c"),alt:""}})])])])]),a("router-view"),a("div"),a("musicPlayer",{attrs:{id:"musicPlayer"}})],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("a",{attrs:{href:"#"}},[t._v("Logo")])])}],i=(n("ac1f"),n("841c"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"musicPlayer"}},[a("audio",{staticStyle:{width:"500px",margin:"0 auto",display:"block",background:"aqua"},attrs:{id:"audio",src:this.$store.state.musicSrc,autoplay:""},on:{timeupdate:t.ontimeupdate}}),a("div",{staticClass:"left",attrs:{id:"btn"}},[a("a",{directives:[{name:"show",rawName:"v-show",value:t.btn,expression:"btn"}],attrs:{href:"javascript:;",id:"play"},on:{click:t.play}},[a("img",{attrs:{src:n("d51f"),alt:"播放"}})]),a("a",{directives:[{name:"show",rawName:"v-show",value:!t.btn,expression:"!btn"}],attrs:{href:"javascript:;",id:"pause"},on:{click:t.pause}},[a("img",{attrs:{src:n("acca"),alt:"暂停"}})])]),a("div",{staticClass:"left",attrs:{id:"time"}},[a("div",{attrs:{id:"currentMusic"}},[a("a",{attrs:{href:"javascript:;"}},[a("span",[t._v("♬"+t._s(t.$store.state.currentMusic.name)+"－")])]),a("a",{attrs:{href:"javascript:;"}},[a("span",[t._v(t._s(t.artistsName))])])]),a("div",{staticStyle:{cursor:"pointer"},attrs:{id:"progressBar"},on:{click:function(e){return t.clickProgressBar(e)}}},[a("div",{attrs:{id:"plannedSpeed"}})]),a("div",{attrs:{id:"timeDisplay"}},[a("span",{attrs:{id:"currentTime"}},[t._v(t._s(t.$store.state.currentTime))]),t._v("/ "),a("span",{attrs:{id:"duration"}},[t._v(t._s(t.$store.state.duration))])])]),a("div",{staticClass:"volume"},[a("input",{attrs:{id:"volume",type:"range",min:"0",max:"100",value:"50"},on:{input:function(e){return t.densityInput(e)}}})]),a("div",{attrs:{id:"musicCover"}},[a("img",{attrs:{src:t.$store.state.musicCover}})])])}),s=[],u=(n("b0c0"),{name:"musicPlayer",mounted:function(){this.audio=document.getElementById("audio"),this.plannedSpeed=document.querySelector("#plannedSpeed"),this.progressBar=document.querySelector("#progressBar"),this.$store.state.audio=document.getElementById("audio")},computed:{},data:function(){return{audio:{},duration:"",plannedSpeed:"",progressBar:"",btn:!0,artistsName:""}},methods:{densityInput:function(t){console.log(t),this.audio.volume=t.target.value/100},play:function(){this.audio.play(),this.btn=!this.btn},pause:function(){this.audio.pause(),this.btn=!this.btn},ontimeupdate:function(){var t=this;this.$options.methods.myFunction(t),this.$options.methods.plannedChange(t),this.audio.paused||(this.btn=!1),this.artistsName=this.$store.state.currentMusic.artists[0].name},myFunction:function(t){var e=t.audio.currentTime;t.$store.commit("time",{duration:e,msg:"currentTime"}),t.$store.commit("time",{duration:t.$store.state.audio.duration,msg:"duration"})},plannedChange:function(t){t.plannedSpeed.style.width=t.audio.currentTime/t.audio.duration*100+"%"},clickProgressBar:function(t){console.log(t);var e=t.offsetX/this.progressBar.offsetWidth;this.plannedSpeed.style.width=100*e+"%",this.audio.currentTime=this.audio.duration*e,this.audio.play()}}}),c=u,d=(n("fd6a"),n("2877")),g=Object(d["a"])(c,i,s,!1,null,"e9196662",null),Q=g.exports,h={name:"app",components:{musicPlayer:Q},data:function(){return{query:""}},mounted:function(){},methods:{investigation:function(){var t=this;this.axios.get("https://autumnfish.cn/search?keywords="+this.query).then((function(e){t.$store.state.search=e.data.result.songs}),(function(t){console.log(t)}))}}},l=h,p=(n("0292"),Object(d["a"])(l,r,o,!1,null,"7ada106c",null)),B=p.exports,f=(n("d3b7"),n("8c4f")),G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"playlist"},[a("ul",[t._m(0),t._l(this.$store.state.search,(function(e){return a("li",{key:e.id,on:{dblclick:function(n){return t.playMusic(e)}}},[a("span",[t._v(t._s(e.name))]),a("span",[t._v(t._s(e.artists[0].name))]),a("span",[t._v(t._s(e.album.name))]),a("div",{attrs:{id:"playMusic"}},[a("a",{attrs:{href:"javascript:;"},on:{click:function(n){return t.playMusic(e)}}},[a("img",{attrs:{src:n("df84")}})])])])}))],2)])},Y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("li",[n("span",[t._v("歌曲")]),n("span",[t._v("歌手")]),n("span",[t._v("专辑")])])}],A={name:"Home",data:function(){return{}},components:{},methods:{playMusic:function(t){var e=this;this.axios.get("https://autumnfish.cn/song/url?id="+t.id).then((function(n){e.$store.state.musicSrc=n.data.data[0].url,e.$store.state.currentMusic=t}),(function(t){console.log(t)})),this.axios.get("https://autumnfish.cn/song/detail?ids="+t.id).then((function(t){e.$store.state.musicCover=t.data.songs[0].al.picUrl})),this.axios.get("https://autumnfish.cn/comment/hot?type=0&id="+t.id).then((function(t){console.log(t),e.$store.state.review=t}))}}},m=A,v=(n("30d5"),Object(d["a"])(m,G,Y,!1,null,"703949a6",null)),b=v.exports;a["a"].use(f["a"]);var E=[{path:"/",name:"Home",component:b},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],N=new f["a"]({routes:E}),D=N,y=(n("25f0"),n("4d90"),n("2f62"));a["a"].use(y["a"]);var j=new y["a"].Store({state:{audio:"",search:[],musicSrc:"",currentTime:"00:00",duration:"00:00",currentMusic:{},musicCover:"http://pic.netbian.com/uploads/allimg/161015/233452-1476545692a380.jpg",review:void 0},mutations:{time:function(t,e){var n,a;isNaN(e.duration)&&(e.duration=0),e.duration=Math.floor(e.duration);var r=e.msg;n=Math.floor(e.duration/60),a=e.duration%60,t[r]=n.toString().padStart(2,"0")+":"+a.toString().padStart(2,"0")}},actions:{},modules:{}}),O=n("bc3a"),w=n.n(O),J=n("a7fe"),H=n.n(J);a["a"].use(H.a,w.a),a["a"].config.productionTip=!1,new a["a"]({router:D,store:j,render:function(t){return t(B)}}).$mount("#app")},a4a6:function(t,e,n){},acca:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAI/0lEQVR4Xu3Wv4scZQCH8ffdXEzjYRVE0EpUEIxgroou2XcuiDaCgin8A2KrEI1goZWoQVtNa2ORUhACuZ3JxlhdBNMZSw34o5B4NuLtvLKQwsLz3l32WecyT9p79zv3fuaey8XgPwUU2FMgaqOAAnsLGIg/HQr8h4CB+OOhgIH4M6DAYgL+D7KYm5/qiYCB9ORFe83FBAxkMTc/1RMBA+nJi/aaiwkYyGJufqonAgbSkxftNRcTMJDF3PxUTwQOTCDb29uHb9++/UTO+dapU6d+7sn7uauueeXKlUdmFzp58uT3B+VinQ+kaZqX27Z9LcZ4PIRwZAabc74RY/wspfTRQYHu6/c5mUwemE6nn4QQToQQjt5x+DXG+NVoNHqp6y6dDqSu63MhhPf3QowxfjEajV7oOnJfv7/JZPL07u7uOMZ4zx4Gt1JKD3bZp7OBTCaTY9Pp9Nv98HLO56qq+nC/c3599QJ1XeeCp15LKT1TcO5/OdLZQJqmuZRzfrZEpW3bVzY3Nz8vOeuZ1QjUdX0+hHC25GkxxvdGo9HbJWdXfaaTgYzH4+Mxxu1SjJzzxaqqTpee9xwvUNf1DyGE0j+ffkwpPcR/V/M/oauBnIkxXpjjOp0FnuMOd83Rq1evPrq7u/vdPBdaW1t7bDgc3pznM6s428lAtra23h0MBu/MA5BS6uRd5rnD3XK2rutRCKGe8z4ppdTM+Rn8eCd/qAwEf+/oAwwE5Q3BQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBjYQGBgeN5AYGADgYHheQOBgQ0EBobnDQQGNhAYGJ43EBi4aZrXc84flz4m5/x7VVX3lZ73HCuwtbX11GAwuD7PU9q2Pb65ufnNPJ9Zxdm4iofM+4wFfgNdSik9N+9zPM8IbG9vH97Z2dkJIRwpfMKf6+vr6xsbG38Vnl/ZsU4GMplMjk6n019KFXLO56uqerP0vOd4gfF4fC3GeKLkSTnnr6uqerrk7KrPdDKQGULTNBdyzmcKQH5aW1t7fDgc/lZw1iMrEhiPx2dijBdKHhdjPD0ajS6WnF31mc4GMoOo6zrvB5Jz3qiqaq6/d/fb9OvLEajr+ssQwvP7rL2VUvpgOU9c/kqnA7kTydkQwvl/ufqnIYQ3Ukp/LJ/FxWUJNE3z4uxP4BDCw//czDnfjDG+mlJqlvUsYqfzgcwuffny5ftjjE8OBoNjMcZbhw4duj4cDm8SIG4uX6Cu63vbtj02e3+z9bZtbwwGgxsH4ZfbgQhk+a/MRQXKBAykzMlTPRUwkJ6+eK9dJmAgZU6e6qmAgfT0xXvtMgEDKXPyVE8FDKSnL95rlwkYSJmTp3oqYCA9ffFeu0zAQMqcPNVTAQPp6Yv32mUCBlLm5KmeCvwN1h6RI8lTqkoAAAAASUVORK5CYII="},d51f:function(t,e,n){t.exports=n.p+"img/播放.9b5bb007.png"},df84:function(t,e,n){t.exports=n.p+"img/play.790f646f.png"},e45c:function(t,e,n){t.exports=n.p+"img/searchBar.d7a5a3bf.png"},fd6a:function(t,e,n){"use strict";var a=n("1f54"),r=n.n(a);r.a}});
//# sourceMappingURL=app.7d12bd23.js.map