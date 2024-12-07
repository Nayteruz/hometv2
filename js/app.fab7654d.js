(function(){"use strict";var e={9385:function(e,t,n){var i=n(9242),r=n(7139),a={name:"intersection",mounted(e,t){const n={rootMargin:"0px",threshold:1},i=e=>{e[0].isIntersecting&&t.value.getMoreFilms()},r=new IntersectionObserver(i,n);r.observe(e)}};const o=function(e){document.title=e};var s={mounted:(e,t)=>o(t.value||e.innerText),beforeUpdate:(e,t)=>o(t.value||e.innerText),updated:(e,t)=>o(t.value||e.innerText)},l=n(3396),u=n(6265),c=n.n(u),m=n(4275),p=n(6035),d={apiKey:"AIzaSyDapqMH_oM7h6CDKM0laMGrLIlDVDyb_gY",authDomain:"hometv-c10f8.firebaseapp.com",projectId:"hometv-c10f8",storageBucket:"hometv-c10f8.appspot.com",messagingSenderId:"452296723769",appId:"1:452296723769:web:982a4288b9cf4e189bace8"};const g=(0,m.ZF)(d),v=(0,p.ad)(g);var f=n(8176);const h=async function(e){const t=(0,p.JU)(v,"users",e),n=await(0,p.QT)(t);return n.exists()?n.data():null},w=async function(e,t){await(0,p.pl)((0,p.JU)(v,"users",t),{name:e.user_name||"",email:e.email||"",favorites:[],api_key:e.api_key||""})},_=function(e){switch(e){case"auth/wrong-password":return"Неверный пароль";case"auth/internal-error":return"Неизвестная ошибка";case"auth/invalid-email":return"Недопустимый email";case"auth/user-not-found":return"Пользователь не найден";case"auth/weak-password":return"Пароль не менее 6 символов";default:return"Ошибка авторизации"}},y=["","для взрослых","мюзикл","спорт","церемония","фильм-нуар","биография","вестерн","короткометражка","документальный","документальный","реальное ТВ","ток-шоу","концерт","игра","новости"],k=(0,r.Q_)("filmStore",{state:()=>({user:null,apiKey:"404dc583-7efc-4c93-8f21-a782f977b9e7",auth:(0,f.v0)(),errorMessage:"",pageNum:1,limit:20,genreIdStore:null,genreListStore:[],searchQueryStore:"",filters:null,filmPageId:0,favorites:[],currentFocusIndex:-1,films:[],listWidth:0,itemWidth:0,countByLine:0}),getters:{filterGenres(){if(!this.genreListStore.length)return[];this.genreListStore=this.genreListStore.filter((e=>{if(-1===y.indexOf(e.genre))return e}))}},actions:{setGenreId(e){this.genreIdStore=e},setFilmPageId(e){this.filmPageId=e},async getGenreList(){return localStorage.getItem("genres")?(this.genreListStore=JSON.parse(localStorage.getItem("genres")),this.genreListStore):(await c().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/filters",{headers:{"X-API-KEY":this.apiKey,"Content-Type":"application/json"}}).then((e=>{this.filters=e.data,this.genreListStore=e.data.genres,this.filterGenres,localStorage.setItem("genres",JSON.stringify(this.genreListStore))})),this.genreListStore)},checkFavoriteStore(e){let t=this.isCheckFilm(!0,e);return!!t.length},async addFavorite(e){try{const t=(0,p.JU)(v,"users",this.user.uid);await(0,p.r7)(t,{favorites:[...this.favorites,e]})}catch(t){this.user?console.log("Ошибка добавления в избранное: "+t):console.log("Необходимо авторизоваться")}this.favorites=[...this.favorites,e]},async removeFavorite(e){let t=this.isCheckFilm(!1,e);try{const e=(0,p.JU)(v,"users",this.user.uid);await(0,p.r7)(e,{favorites:[...t]})}catch(n){this.user?console.log("Ошибка удаления из избранного: "+n):console.log("Необходимо авторизоваться")}this.favorites=[...t]},async authWithEmailAndPassword(e){await(0,f.e5)(this.auth,e.email,e.password).then((()=>{this.getUserData()})).catch((e=>{this.errorMessage=_(e.code)}))},async createAuthWithEmailAndPassword(e){await(0,f.Xb)(this.auth,e.email,e.password).then((async t=>{this.user=await t.user,await w(e,this.user.uid),await this.getUserData()})).catch((e=>{this.errorMessage=_(e.code)}))},async authLogout(){(0,f.w7)(this.auth).then((async()=>{this.removeUserData()})).catch((e=>{alert("Ошибка logout: "+e)}))},async authChange(e){(0,f.Aj)(this.auth,(async t=>{t?(this.user=t,this.getUserData(e)):this.removeUserData(e)}))},async getUserData(e){let t=await h(this.user.uid);this.user.name=t?.name||"",this.user.email=t?.email??"",this.favorites=t?.favorites.reverse()??[],t?.api_key&&(this.apiKey=t.api_key),"function"===typeof e&&e()},removeUserData(e){this.user=null,this.favorites=[],"function"===typeof e&&e()},isCheckFilm(e,t){return this.favorites.filter((n=>{let i=n?.kinopoiskId??n?.filmId,r=t?.kinopoiskId??t?.filmId;return i===r&&e?n:i===r||e?void 0:n}))},searchQueryWithGenre(){let e={};return this.searchQueryStore&&(e.q=this.searchQueryStore),this.genreIdStore&&(e.genres=this.genreIdStore),e},incrementFocus(){this.currentFocusIndex+=1},decrementFocus(){this.setCurrentFocus(0),this.currentFocusIndex-=1},setCurrentFocus(e){this.currentFocusIndex=e}}});var I=n(2268);const F=e=>((0,l.dD)("data-v-960dad08"),e=e(),(0,l.Cn)(),e),b={class:"input-wrap"},S=F((()=>(0,l._)("button",{type:"submit"},"Найти",-1)));function C(e,t,n,r,a,o){const s=(0,l.up)("RegistrationWrap");return(0,l.wg)(),(0,l.iD)("header",null,[(0,l._)("a",{class:"home",onClick:t[0]||(t[0]=(...e)=>r.goHome&&r.goHome(...e)),href:"#"},"Home"),(0,l._)("a",{href:"#",class:(0,I.C_)(["favorites",{disabled:!1===r.isUser}]),onClick:t[1]||(t[1]=t=>e.$router.push({name:"favorite"}))},(0,I.zw)(r.filmStore.favorites.length),3),(0,l._)("form",{action:"#",class:(0,I.C_)({show:r.isSearchVisible}),onSubmit:t[5]||(t[5]=(0,i.iM)(((...e)=>r.searchSubmit&&r.searchSubmit(...e)),["prevent"]))},[(0,l._)("div",b,[(0,l.wy)((0,l._)("input",{ref:"searchInput",autocomplete:"off",type:"text",onKeyup:t[2]||(t[2]=(0,i.D2)(((...e)=>r.searchSubmit&&r.searchSubmit(...e)),["enter"])),placeholder:"Название фильма / ID КиноПоиск","onUpdate:modelValue":t[3]||(t[3]=e=>r.filmStore.searchQueryStore=e),name:"keyword"},null,544),[[i.nr,r.filmStore.searchQueryStore,void 0,{trim:!0}]]),r.filmStore.searchQueryStore?((0,l.wg)(),(0,l.iD)("span",{key:0,onClick:t[4]||(t[4]=(...e)=>r.clearInput&&r.clearInput(...e)),class:"clear-input"},"×")):(0,l.kq)("",!0)]),S],34),(0,l.Wm)(s),(0,l._)("button",{class:"reload-page",onClick:t[6]||(t[6]=(...e)=>r.reloadPage&&r.reloadPage(...e))}),(0,l._)("button",{type:"button",onClick:t[7]||(t[7]=(...e)=>r.toggleSearch&&r.toggleSearch(...e)),class:(0,I.C_)({"search-popup-btn":!0,opened:r.isSearchVisible})},null,2)])}const D={class:"registration-wrap"},P={key:0,class:"registration-wrap--pop"};function x(e,t,n,i,r,a){const o=(0,l.up)("IconUser"),s=(0,l.up)("LogoutComponent"),u=(0,l.up)("SignInComponent"),c=(0,l.up)("RegistrationComponent");return(0,l.wg)(),(0,l.iD)("div",D,[(0,l.Wm)(o,{onClick:i.togglePop},null,8,["onClick"]),i.isVisible?((0,l.wg)(),(0,l.iD)("div",P,[i.filmStore.user?((0,l.wg)(),(0,l.j4)(s,{key:0,onSetForm:i.setForm},null,8,["onSetForm"])):"sign"===i.formView?((0,l.wg)(),(0,l.j4)(u,{key:1,onSetForm:i.setForm},null,8,["onSetForm"])):"reg"===i.formView?((0,l.wg)(),(0,l.j4)(c,{key:2,onSetForm:i.setForm},null,8,["onSetForm"])):(0,l.kq)("",!0)])):(0,l.kq)("",!0)])}const L={class:"icon icon-user"},H=(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512"},[(0,l._)("path",{d:"M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"})],-1),U=[H];function M(e,t){return(0,l.wg)(),(0,l.iD)("span",L,U)}var N=n(89);const W={},A=(0,N.Z)(W,[["render",M]]);var j=A,T=n(4870);const q=e=>((0,l.dD)("data-v-4909460b"),e=e(),(0,l.Cn)(),e),K={class:"registration--form"},Z=q((()=>(0,l._)("h3",null,"Регистрация",-1))),E=q((()=>(0,l._)("small",null,[(0,l._)("a",{href:"https://kinopoiskapiunofficial.tech/signup"},"зарегистрироваться")],-1))),Q={key:0,class:"err-string"},z={class:"btns"};function V(e,t,n,r,a,o){const s=(0,l.up)("IconGoogle");return(0,l.wg)(),(0,l.iD)("div",K,[Z,(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e)},null,512),[[i.nr,r.email]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Name","onUpdate:modelValue":t[1]||(t[1]=e=>r.user_name=e)},null,512),[[i.nr,r.user_name]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Api key","onUpdate:modelValue":t[2]||(t[2]=e=>r.api_key=e)},null,512),[[i.nr,r.api_key]]),E]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[3]||(t[3]=e=>r.password=e)},null,512),[[i.nr,r.password]])]),r.filmStore.errorMessage?((0,l.wg)(),(0,l.iD)("p",Q,(0,I.zw)(r.filmStore.errorMessage),1)):(0,l.kq)("",!0),(0,l._)("div",z,[(0,l._)("button",{class:"reg",onClick:t[4]||(t[4]=(0,i.iM)(((...e)=>r.register&&r.register(...e)),["prevent"]))},"Регистрация"),(0,l._)("button",{class:"sign",onClick:t[5]||(t[5]=(0,i.iM)(((...e)=>r.setFormView&&r.setFormView(...e)),["prevent"]))},"Войти"),(0,l.Wm)(s,{onClick:r.signWithGoogle},null,8,["onClick"])])])}const B={class:"icon-google"};function O(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("span",B)}var G={name:"IconGoogle"};const R=(0,N.Z)(G,[["render",O],["__scopeId","data-v-103616a1"]]);var Y=R,$={name:"RegistrationComponent",components:{IconGoogle:Y},setup(e,{emit:t}){const n=k(),i=(0,T.iH)(""),r=(0,T.iH)(""),a=(0,T.iH)(""),o=(0,T.iH)("");async function s(){await n.createAuthWithEmailAndPassword({email:i.value,password:r.value,user_name:a.value,api_key:o.value})}function l(){t("setForm","sign")}function u(){console.log("ok")}return{email:i,user_name:a,password:r,api_key:o,filmStore:n,register:s,signWithGoogle:u,setFormView:l}}};const J=(0,N.Z)($,[["render",V],["__scopeId","data-v-4909460b"]]);var X=J;const ee=e=>((0,l.dD)("data-v-105d9081"),e=e(),(0,l.Cn)(),e),te={class:"registration--form"},ne=ee((()=>(0,l._)("h3",{class:"name"},"Авторизация",-1))),ie={key:0,class:"err-string"},re={class:"btns"};function ae(e,t,n,r,a,o){return(0,l.wg)(),(0,l.iD)("div",te,[ne,(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"text",placeholder:"Email","onUpdate:modelValue":t[0]||(t[0]=e=>r.email=e)},null,512),[[i.nr,r.email]])]),(0,l._)("p",null,[(0,l.wy)((0,l._)("input",{type:"password",placeholder:"Password","onUpdate:modelValue":t[1]||(t[1]=e=>r.password=e)},null,512),[[i.nr,r.password]])]),r.filmStore.errorMessage?((0,l.wg)(),(0,l.iD)("p",ie,(0,I.zw)(r.filmStore.errorMessage),1)):(0,l.kq)("",!0),(0,l._)("div",re,[(0,l._)("button",{class:"sign",onClick:t[2]||(t[2]=(0,i.iM)(((...e)=>r.signIn&&r.signIn(...e)),["prevent"]))},"Войти"),(0,l._)("button",{class:"reg",onClick:t[3]||(t[3]=(0,i.iM)(((...e)=>r.setFormView&&r.setFormView(...e)),["prevent"]))},"Регистрация")])])}var oe={name:"SignInComponent",setup(e,{emit:t}){const n=(0,T.iH)(""),i=(0,T.iH)(""),r=(0,T.iH)(""),a=k();async function o(){await a.authWithEmailAndPassword({email:n.value,password:i.value})}function s(){t("setForm","reg")}return{email:n,password:i,errMsg:r,signIn:o,setFormView:s,filmStore:a}}};const se=(0,N.Z)(oe,[["render",ae],["__scopeId","data-v-105d9081"]]);var le=se;const ue={class:"registration--form"},ce=(0,l.Uk)("Вы вошли как: "),me={class:"btns"};function pe(e,t,n,r,a,o){return(0,l.wg)(),(0,l.iD)("div",ue,[(0,l._)("h3",null,[ce,(0,l._)("strong",null,(0,I.zw)(r.filmStore.user.name),1)]),(0,l._)("div",me,[(0,l._)("button",{class:"reg",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>r.logout&&r.logout(...e)),["prevent"]))},"Выйти")])])}var de={name:"LogoutComponent",setup(){const e=k();async function t(){await e.authLogout()}return{logout:t,filmStore:e}}};const ge=(0,N.Z)(de,[["render",pe]]);var ve=ge,fe={name:"RegistrationWrap",components:{IconUser:j,RegistrationComponent:X,SignInComponent:le,LogoutComponent:ve},setup(){const e=k(),t=(0,T.iH)(!1),n=(0,T.iH)("sign"),i=(0,l.f3)("emitter");function r(){t.value=!t.value}function a(t){e.errorMessage="",n.value=t}function o(){i.emit("setUserData")}return(0,l.bv)((async()=>{await e.authChange(o),await i.emit("setUserData")})),{isVisible:t,setForm:a,togglePop:r,formView:n,filmStore:e}}};const he=(0,N.Z)(fe,[["render",x],["__scopeId","data-v-a4303992"]]);var we=he,_e=n(678),ye={components:{RegistrationWrap:we},setup(){const e=(0,_e.yj)(),t=(0,_e.tv)(),n=k(),i=(0,l.Fl)((()=>null!==n.user)),r=(0,l.Fl)((()=>e.query.q)),a=(0,T.iH)(!!(r.value|"searchPage"===e.name)),o=(0,T.iH)(null);function s(){n.pageNum=1,t.push({name:"searchPage",query:n.searchQueryWithGenre()})}function u(){n.searchQueryStore="",o.value.focus()}function c(){n.pageNum=1,n.genreIdStore=null,t.push({name:"home"})}(0,l.bv)((()=>{n.searchQueryStore=r.value}));const m=()=>{document.location.reload()};function p(){a.value=!a.value}return{searchSubmit:s,goHome:c,filmStore:n,isUser:i,clearInput:u,toggleSearch:p,isSearchVisible:a,searchInput:o,reloadPage:m}}};const ke=(0,N.Z)(ye,[["render",C],["__scopeId","data-v-960dad08"]]);var Ie=ke;const Fe={class:"genres-wrap"},be={class:"genres"},Se=["onClick"];function Ce(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",Fe,[(0,l._)("ul",be,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(i.filmStore.genreListStore,(e=>((0,l.wg)(),(0,l.iD)("li",{class:(0,I.C_)({active:+e.id===+i.filmStore.genreIdStore}),key:e.id},[(0,l._)("span",{onClick:t=>i.setGenre(e.id)},(0,I.zw)(e.genre),9,Se)],2)))),128))])])}var De={name:"GenreList",setup(){const e=(0,_e.yj)(),t=(0,_e.tv)(),n=k(),i=(0,l.Fl)((()=>e.query.genres)),r=e=>{+n.genreIdStore===+e?n.genreIdStore=null:n.genreIdStore=e,n.pageNum=1,t.push({name:"searchPage",query:n.searchQueryWithGenre()})};async function a(){await n.getGenreList()}return(0,l.bv)((async()=>{n.genreIdStore=i.value,await a()})),{filmStore:n,setGenre:r,routeGenre:i}}};const Pe=(0,N.Z)(De,[["render",Ce],["__scopeId","data-v-71d9fdca"]]);var xe=Pe;function Le(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",{class:"event__top",onClick:t[0]||(t[0]=(...e)=>i.onTop&&i.onTop(...e))})}var He={setup(){function e(){window.scrollTo({top:0,behavior:"smooth"})}return{onTop:e}}};const Ue=(0,N.Z)(He,[["render",Le],["__scopeId","data-v-b067bd64"]]);var Me=Ue,Ne={setup(e){const t=(0,T.iH)(null),n=k(),i=(0,_e.tv)(),r={ArrowDown:"ArrowDown",ArrowUp:"ArrowUp",ArrowRight:"ArrowRight",ArrowLeft:"ArrowLeft",Enter:"Enter",NumpadEnter:"Enter"},a={desktop:1024,tablet:768,mobile:480},o=()=>{-1===n.currentFocusIndex?n.currentFocusIndex=0:n.currentFocusIndex+=n.countByLine},s=()=>{n.currentFocusIndex=Math.max(0,n.currentFocusIndex-n.countByLine)},u=()=>{n.currentFocusIndex+=1},c=()=>{n.currentFocusIndex=Math.max(0,n.currentFocusIndex-1)},m=()=>{const e=n.currentFocusIndex;if(-1===e)return;const t=n.films[e].filmId||n.films[e].kinopoiskId;i.push(`/film/${t}`)},p=e=>{const t=r[e.key];switch(t&&e.preventDefault(),e.key){case r.ArrowDown:o();break;case r.ArrowUp:s();break;case r.ArrowRight:u();break;case r.ArrowLeft:c();break;case r.Enter:case r.NumpadEnter:m();break}},d=()=>{window.innerWidth>a.desktop?n.countByLine=5:window.innerWidth>a.tablet?n.countByLine=4:window.innerWidth>a.mobile?n.countByLine=3:n.countByLine=2};return(0,l.bv)((()=>{window.addEventListener("keydown",p),n.currentFocusIndex=-1,d()})),(0,l.Jd)((()=>{window.removeEventListener("keydown",p),n.currentFocusIndex=-1})),(e,n)=>{const i=(0,l.up)("RouterView");return(0,l.wg)(),(0,l.iD)("div",{class:"wrapper",ref_key:"wrapperRef",ref:t},[((0,l.wg)(),(0,l.j4)(Ie,{key:e.$route.fullPath})),(0,l.Wm)(xe),(0,l.Wm)(i,null,{default:(0,l.w5)((({Component:t})=>[((0,l.wg)(),(0,l.j4)(l.Ob,{include:"MainList"},[((0,l.wg)(),(0,l.j4)((0,l.LL)(t),{key:e.$route.fullPath}))],1024))])),_:1}),(0,l.Wm)(Me)],512)}}};const We=Ne;var Ae=We;const je=(0,l.Uk)("Список последних новинок"),Te=[je],qe={key:0,ref:"observer",class:"observer"};function Ke(e,t,n,i,r,a){const o=(0,l.up)("PaginationList"),s=(0,l.up)("FIlmItem"),u=(0,l.Q2)("title"),c=(0,l.Q2)("intersection");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("h1",null,Te)),[[u]]),(0,l.Wm)(o,{total:i.totalPages},null,8,["total"]),(0,l.Wm)(s,{items:i.films,showPreload:i.showPreload},null,8,["items","showPreload"]),(0,l.Wm)(o,{total:i.totalPages},null,8,["total"]),i.filmStore.pageNum<i.totalPages?(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",qe,null,512)),[[c,{getMoreFilms:i.getMoreFilms}]]):(0,l.kq)("",!0)],64)}const Ze={class:"favorite-icon"},Ee={key:0,class:"loading-round"};function Qe(e,t,n,r,a,o){const s=(0,l.up)("IconFavorite");return(0,l.wg)(),(0,l.iD)("span",Ze,[r.isShow?((0,l.wg)(),(0,l.iD)("span",Ee)):(0,l.kq)("",!0),(0,l.Wm)(s,{class:(0,I.C_)({active:r.isFavorite}),onClick:(0,i.iM)(r.toggleFavorite,["prevent"])},null,8,["class","onClick"])])}const ze={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Ve=(0,l._)("path",{d:"M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"},null,-1),Be=[Ve];function Oe(e,t){return(0,l.wg)(),(0,l.iD)("svg",ze,Be)}const Ge={},Re=(0,N.Z)(Ge,[["render",Oe]]);var Ye=Re,$e={name:"FavoriteBtn",components:{IconFavorite:Ye},props:["itemFilm"],setup(e){const t=(0,T.iH)(!1),n=(0,T.iH)(!1),i=(0,l.f3)("emitter"),r=k();function a(){t.value=r.checkFavoriteStore(e.itemFilm)}async function o(){r.user?(n.value=!0,t.value?(await r.removeFavorite(e.itemFilm),t.value=!1):(await r.addFavorite(e.itemFilm),t.value=!0),n.value=!1):alert("Необходима авторизация")}return(0,l.bv)((()=>{a()})),i.on("setUserData",a),{isFavorite:t,isShow:n,toggleFavorite:o}}};const Je=(0,N.Z)($e,[["render",Qe],["__scopeId","data-v-aef485f0"]]);var Xe=Je;const et=e=>((0,l.dD)("data-v-9eec4a52"),e=e(),(0,l.Cn)(),e),tt=["href","onClick"],nt={class:"item__image"},it=et((()=>(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"360",height:"540"},null,-1))),rt=["src","alt"],at={key:0,class:"item__rating"},ot={class:"item__options"},st={class:"name"},lt={key:0,class:"year"};var ut={props:["itemFilm","currentIndex"],setup(e){const t=e,n=(0,_e.tv)(),r=k(),a=(0,T.iH)(null),o=(0,l.Fl)((()=>t.currentIndex===r.currentFocusIndex)),s=(0,T.iH)(!1),u=(0,l.Fl)((()=>t.itemFilm?.rating||t.itemFilm?.ratingKinopoisk||t.itemFilm?.ratingImdb||null)),c=(0,l.Fl)((()=>t.itemFilm?.nameRu||t.itemFilm?.nameEn||t.itemFilm?.nameOriginal||"Без названия")),m=()=>{n.push(`/film/${t.itemFilm.filmId||t.itemFilm.kinopoiskId}`)},p=()=>{r.currentFocusIndex=t.currentIndex,s.value=!0},d=()=>{s.value=!1};return(0,l.YP)(o,(()=>{if(o.value&&a.value){const e=a.value.getBoundingClientRect(),t=document.documentElement.scrollTop,n=t+window.innerHeight,i=e.bottom+t;(e.top<0||i>n)&&window.scrollTo(0,t+e.top-50)}})),(n,r)=>((0,l.wg)(),(0,l.iD)("li",{class:(0,I.C_)({films__item:!0,focused:(0,T.SU)(o)|s.value}),onMouseover:p,onMouseleave:d,tabindex:"0",ref_key:"itemRef",ref:a},[(0,l._)("a",{href:`/film/${e.itemFilm.filmId||e.itemFilm.kinopoiskId}`,class:"item__link",onClick:(0,i.iM)(m,["prevent"])},null,8,tt),(0,l.Wm)(Xe,{class:"favorite",itemFilm:e.itemFilm},null,8,["itemFilm"]),(0,l._)("div",nt,[it,(0,l._)("img",{src:e.itemFilm.posterUrlPreview,alt:t.itemFilm.nameRu},null,8,rt)]),(0,T.SU)(u)?((0,l.wg)(),(0,l.iD)("span",at,(0,I.zw)((0,T.SU)(u)),1)):(0,l.kq)("",!0),(0,l._)("div",ot,[(0,l._)("ul",null,[(0,l._)("li",st,(0,I.zw)((0,T.SU)(c)),1),e.itemFilm.year?((0,l.wg)(),(0,l.iD)("li",lt,(0,I.zw)(e.itemFilm.year)+" г.",1)):(0,l.kq)("",!0)])])],34))}};const ct=(0,N.Z)(ut,[["__scopeId","data-v-9eec4a52"]]);var mt=ct;const pt=e=>((0,l.dD)("data-v-01956349"),e=e(),(0,l.Cn)(),e),dt=pt((()=>(0,l._)("div",{class:"item__image"},[(0,l._)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"360",height:"540"})],-1))),gt=[dt];function vt(e,t){return(0,l.wg)(),(0,l.iD)(l.HY,null,(0,l.Ko)(20,(e=>(0,l._)("li",{class:"films__item preload-card",key:e},gt))),64)}const ft={},ht=(0,N.Z)(ft,[["render",vt],["__scopeId","data-v-01956349"]]);var wt=ht;const _t={class:"films__list"};var yt={props:["showPreload","items"],setup(e){const t=(0,l.f3)("emitter"),n=(0,T.iH)(!1);return t.on("isLoading",(e=>{n.value=e})),(t,i)=>((0,l.wg)(),(0,l.iD)("div",{class:(0,I.C_)(["films__wrap",{loading:n.value}])},[(0,l._)("ul",_t,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(e.items,((e,t)=>((0,l.wg)(),(0,l.j4)(mt,{itemFilm:e,key:e.filmId||e.kinopoiskId,currentIndex:t},null,8,["itemFilm","currentIndex"])))),128)),e.showPreload?((0,l.wg)(),(0,l.j4)(wt,{key:0})):(0,l.kq)("",!0)])],2))}};const kt=(0,N.Z)(yt,[["__scopeId","data-v-7aced1af"]]);var It=kt;const Ft=e=>((0,l.dD)("data-v-4b5bec86"),e=e(),(0,l.Cn)(),e),bt={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 256 512"},St=Ft((()=>(0,l._)("path",{d:"M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z"},null,-1))),Ct=[St];function Dt(e,t){return(0,l.wg)(),(0,l.iD)("svg",bt,Ct)}const Pt={},xt=(0,N.Z)(Pt,[["render",Dt],["__scopeId","data-v-4b5bec86"]]);var Lt=xt;const Ht=e=>((0,l.dD)("data-v-d0a52dfc"),e=e(),(0,l.Cn)(),e),Ut={xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},Mt=Ht((()=>(0,l._)("path",{d:"M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z"},null,-1))),Nt=[Mt];function Wt(e,t){return(0,l.wg)(),(0,l.iD)("svg",Ut,Nt)}const At={},jt=(0,N.Z)(At,[["render",Wt],["__scopeId","data-v-d0a52dfc"]]);var Tt=jt;const qt={class:"pagination"},Kt=["onClick"];var Zt={props:["total"],setup(e){const t=e,n=k(),r=(0,l.f3)("emitter"),a=(0,l.Fl)((()=>n.pageNum)),o=e=>{let n=[];if(t.total>6){if(1===a.value)return[1,2,3,"...",e];if(a.value>1&&a.value<3)return[1,2,3,"...",e];if(3===a.value)return[1,2,3,4,"...",e];if(a.value>3&&a.value<e-2)return[1,"...",a.value-1,a.value,a.value+1,"...",e];if(a.value===e-2)return[1,"...",a.value-1,a.value,a.value+1,e];if(a.value===e-1)return[1,"...",a.value-1,a.value,e];if(a.value===e)return[1,"...",a.value-2,a.value-1,e]}else for(let t=1;t<=e;t++)n.push(t);return n},s=(e,i="")=>{if("..."===e)return;let a;a="prev"===i?n.pageNum-1:"next"===i?n.pageNum+1:"prevAll"===i?1:"nextAll"===i?t.total:e,n.pageNum=a,r.emit("clickPage",a)};return(r,a)=>((0,l.wg)(),(0,l.iD)("div",qt,[(0,l._)("ul",null,[(0,l.wy)((0,l._)("li",{class:"pg first",onClick:a[0]||(a[0]=e=>s(null,"prevAll"))},[(0,l._)("span",null,[(0,l.Wm)(Tt)])],512),[[i.F8,(0,T.SU)(n).pageNum>1]]),(0,l.wy)((0,l._)("li",{class:"pg prev",onClick:a[1]||(a[1]=e=>s(null,"prev"))},[(0,l._)("span",null,[(0,l.Wm)(Lt)])],512),[[i.F8,(0,T.SU)(n).pageNum>1]]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(o(e.total),(e=>((0,l.wg)(),(0,l.iD)("li",{key:e},[(0,l._)("span",{class:(0,I.C_)({active:(0,T.SU)(n).pageNum===e}),onClick:t=>s(e)},(0,I.zw)(e),11,Kt)])))),128)),(0,l.wy)((0,l._)("li",{class:"pg next",onClick:a[2]||(a[2]=e=>s(null,"next"))},[(0,l._)("span",null,[(0,l.Wm)(Lt)])],512),[[i.F8,(0,T.SU)(n).pageNum<t.total]]),(0,l.wy)((0,l._)("li",{class:"pg last",onClick:a[3]||(a[3]=e=>s(null,"nextAll"))},[(0,l._)("span",null,[(0,l.Wm)(Tt)])],512),[[i.F8,(0,T.SU)(n).pageNum<t.total]])])]))}};const Et=(0,N.Z)(Zt,[["__scopeId","data-v-fe180af4"]]);var Qt=Et,zt={name:"MainList",components:{PaginationList:Qt,FIlmItem:It},setup(){const e=k(),t=(0,l.f3)("emitter"),n=(0,T.iH)([]),i=(0,T.iH)("TOP_100_POPULAR_FILMS"),r=(0,T.iH)(0),a=(0,T.iH)(!1);async function o(){return await c().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/top",{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"},params:{type:i.value,page:e.pageNum}})}async function s(i,s=""){"loading"===s&&t.emit("isLoading",!0),a.value="preload"===s,e.pageNum=i||e.pageNum;const l=await o();r.value=l.data?.pagesCount,"preload"===s?n.value=[...n.value,...l.data?.films]:(n.value=[],n.value=l.data?.films),a.value=!1,"loading"===s&&await(l.data?.films)&&t.emit("isLoading",!1)}function u(){s(e.pageNum+1,"preload")}function m(){s(e.pageNum,"loading")}return t.on("clickPage",m),(0,l.YP)((()=>n.value),(t=>{e.films=t})),(0,l.bv)((()=>{s(),e.currentFocusIndex=-1})),{films:n,showPreload:a,totalPages:r,filmStore:e,getListFilms:s,getMoreFilms:u}}};const Vt=(0,N.Z)(zt,[["render",Ke],["__scopeId","data-v-dabfe0b0"]]);var Bt=Vt;const Ot=e=>((0,l.dD)("data-v-db86e390"),e=e(),(0,l.Cn)(),e),Gt=(0,l.Uk)("Назад"),Rt={class:"film__wrap"},Yt={class:"film__image"},$t=["src"],Jt={key:1,class:"film__rating"},Xt={class:"film__note"},en={class:"film__btns"},tn={class:"film__description"},nn=Ot((()=>(0,l._)("h3",null,"Описание:",-1))),rn={class:"film__genres"},an=Ot((()=>(0,l._)("h3",null,"Жанры",-1))),on=["onClick"],sn={key:0,class:"film__similar"},ln=Ot((()=>(0,l._)("h3",null,"Похожие фильмы",-1)));function un(e,t,n,r,a,o){const s=(0,l.up)("IconLeftArrow"),u=(0,l.up)("FavoriteBtn"),c=(0,l.up)("FilmPageDialog"),m=(0,l.up)("FIlmItem"),p=(0,l.Q2)("title");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("button",{class:"back-to-list",onClick:t[0]||(t[0]=(0,i.iM)(((...e)=>r.goToList&&r.goToList(...e)),["prevent"]))},[(0,l.Wm)(s),Gt]),(0,l.wy)(((0,l.wg)(),(0,l.iD)("h1",null,[(0,l.Uk)((0,I.zw)(r.filmTitle),1)])),[[p]]),(0,l._)("div",Rt,[(0,l._)("div",Yt,[(0,l.Wm)(u,{class:"favorite",itemFilm:r.filmInfo},null,8,["itemFilm"]),r.filmInfo?.posterUrl?((0,l.wg)(),(0,l.iD)("img",{key:0,src:r.filmInfo?.posterUrl,alt:"filmTitle"},null,8,$t)):(0,l.kq)("",!0),r.filmRating?((0,l.wg)(),(0,l.iD)("span",Jt,(0,I.zw)(r.filmRating),1)):(0,l.kq)("",!0)]),(0,l._)("div",Xt,[(0,l._)("div",en,[(0,l.Wm)(c,{itemFilm:r.filmInfo},null,8,["itemFilm"])]),(0,l._)("div",tn,[nn,(0,l.Uk)(" "+(0,I.zw)(r.filmInfo.description),1)]),(0,l._)("div",rn,[an,(0,l._)("ul",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.filmInfo.genres,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e},[(0,l._)("span",{onClick:t=>r.setGenre(e.genre)},(0,I.zw)(e.genre),9,on)])))),128))])]),r.similars.length>0?((0,l.wg)(),(0,l.iD)("div",sn,[ln,(0,l.Wm)(m,{items:r.similars},null,8,["items"])])):(0,l.kq)("",!0)])])],64)}const cn={class:"left-arrow",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},mn=(0,l._)("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"},null,-1),pn=[mn];function dn(e,t){return(0,l.wg)(),(0,l.iD)("svg",cn,pn)}const gn={},vn=(0,N.Z)(gn,[["render",dn]]);var fn=vn;const hn={class:"tab-titles"};function wn(e,t,n,i,r,a){const o=(0,l.up)("FilmKinoBoxTab"),s=(0,l.up)("FilmPlayerClub"),u=(0,l.up)("FilmKinoTop");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l._)("ul",hn,[(0,l._)("li",{class:(0,I.C_)({selected:1===i.playerNum}),onClick:t[0]||(t[0]=e=>i.playerNum=1)},"Плеер 1",2),(0,l._)("li",{class:(0,I.C_)({selected:2===i.playerNum}),onClick:t[1]||(t[1]=e=>i.playerNum=2)},"Плеер 2",2),(0,l._)("li",{class:(0,I.C_)({selected:3===i.playerNum}),onClick:t[2]||(t[2]=e=>i.playerNum=3)},"Плеер 3 с vpn",2)]),1===i.playerNum?((0,l.wg)(),(0,l.j4)(o,{key:0})):(0,l.kq)("",!0),2===i.playerNum?((0,l.wg)(),(0,l.j4)(s,{key:1})):(0,l.kq)("",!0),3===i.playerNum?((0,l.wg)(),(0,l.j4)(u,{key:2})):(0,l.kq)("",!0)],64)}const _n={class:"kinobox_player film__init",ref:"player_init_item"};function yn(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",_n,null,512)])}var kn={name:"FilmKinoBoxTab",setup(){const e=k(),t=(0,_e.yj)(),n=(0,T.iH)(null);function i(n){e.setFilmPageId(t.params.id);let i=document.createElement("script");i.type="text/javascript",i.src="//kinobox.tv/kinobox.min.js",n.value.appendChild(i),setTimeout((()=>{new Kinobox(".kinobox_player",{search:{kinopoisk:t.params.id}}).init()}),1e3)}return(0,l.bv)((()=>{i(n)})),{player_init_item:n}}};const In=(0,N.Z)(kn,[["render",yn]]);var Fn=In;const bn=["src"];function Sn(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("iframe",{src:`//496622434375553.svetacdn.in/fcvcbl7auqJG?kp_id=${i.filmId}`,width:"100%",height:"495",allowfullscreen:""},null,8,bn)])}var Cn={name:"FilmPlayerClub",setup(){const e=(0,_e.yj)(),t=e.params.id;return{filmId:t}}};const Dn=(0,N.Z)(Cn,[["render",Sn],["__scopeId","data-v-bed7f8a0"]]);var Pn=Dn;const xn={class:"film__init",ref:"player_init_item"};function Ln(e,t,n,i,r,a){return(0,l.wg)(),(0,l.iD)("div",null,[(0,l._)("div",xn,null,512)])}var Hn={name:"FilmKinoTopTab",setup(){const e=(0,_e.yj)(),t=(0,T.iH)(null);function n(t){t.value.innerHTML="";let n=document.createElement("div");n.setAttribute("data-kinopoisk",e.params.id),n.setAttribute("id","kinoplayertop");let i=document.createElement("script");i.type="text/javascript",i.src="//kinoplayer.top/top.js",t.value.appendChild(n),t.value.appendChild(i),setTimeout((()=>{runKinoplayertop()}),500)}return(0,l.bv)((()=>{n(t)})),{player_init_item:t}}};const Un=(0,N.Z)(Hn,[["render",Ln]]);var Mn=Un,Nn={name:"FilmPageDialog",props:["itemFilm"],components:{FilmKinoTop:Mn,FilmKinoBoxTab:Fn,FilmPlayerClub:Pn},setup(){const e=k(),t=(0,T.iH)(1);return{filmStore:e,playerNum:t}}};const Wn=(0,N.Z)(Nn,[["render",wn],["__scopeId","data-v-0b0a1f24"]]);var An=Wn,jn={name:"FilmPage",components:{FIlmItem:It,FilmPageDialog:An,FavoriteBtn:Xe,IconLeftArrow:fn},setup(){const e=k(),t=(0,_e.yj)(),n=(0,_e.tv)(),i=(0,T.iH)([]),r=(0,T.iH)(""),a=(0,T.iH)([]),o=(0,T.iH)(r.value),s=(0,l.Fl)((()=>i.value?.rating||i.value?.ratingKinopoisk||i.value?.ratingImdb||null));function u(){c().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/"+t.params.id,{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"}}).then((e=>{i.value=e.data,d()})).catch((()=>({data:[]})))}function m(){c().get("https://kinopoiskapiunofficial.tech/api/v2.2/films/"+t.params.id+"/similars",{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"}}).then((e=>{a.value=e.data?.items})).catch((()=>({data:[]})))}function p(){c().get("https://kinopoiskapiunofficial.tech/api/v2.1/films/"+t.params.id+"/sequels_and_prequels",{headers:{"X-API-KEY":e.apiKey,"Content-Type":"application/json"}}).then((e=>{a.value=[...e?.data,...a.value]})).catch((()=>({data:[]})))}function d(){r.value=i.value?.nameRu||i.value?.nameEn||i.value?.nameOriginal||"Без названия",r.value+=` (${i.value.year})`}function g(e){let t=JSON.parse(localStorage.getItem("genres")),i=t.filter((t=>t.genre===e))[0].id;window.scrollTo(0,0),n.push({name:"searchPage",query:{genres:i}})}const v=()=>{n.go(-1)};return(0,l.bv)((()=>{u(),m(),p()})),{filmTitle:r,filmInfo:i,similars:a,setGenre:g,title:o,goToList:v,IconLeftArrow:fn,filmRating:s}}};const Tn=(0,N.Z)(jn,[["render",un],["__scopeId","data-v-db86e390"]]);var qn=Tn;const Kn={key:0,ref:"observer",class:"observer"};function Zn(e,t,n,i,r,a){const o=(0,l.up)("PaginationList"),s=(0,l.up)("FIlmItem"),u=(0,l.Q2)("title"),c=(0,l.Q2)("intersection");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.wy)(((0,l.wg)(),(0,l.iD)("h1",null,[(0,l.Uk)((0,I.zw)(i.titlePage),1)])),[[u]]),(0,l.Wm)(o,{total:i.totalPages,onClickPage:i.getListFilms},null,8,["total","onClickPage"]),(0,l.Wm)(s,{items:i.films,showPreload:i.showPreload},null,8,["items","showPreload"]),(0,l.Wm)(o,{total:i.totalPages,onClickPage:i.getListFilms},null,8,["total","onClickPage"]),i.filmStore.pageNum<i.totalPages?(0,l.wy)(((0,l.wg)(),(0,l.iD)("div",Kn,null,512)),[[c,{getMoreFilms:i.getMoreFilms}]]):(0,l.kq)("",!0)],64)}var En={components:{FIlmItem:It,PaginationList:Qt},setup(){const e=(0,_e.yj)(),t=(0,T.iH)([]),n=(0,l.f3)("emitter"),i=k(),r=(0,T.iH)(0),a=(0,T.iH)(""),o=(0,T.iH)(!1),s=(0,l.Fl)((()=>e.query.q)),u=(0,l.Fl)((()=>e.query.genres));async function m(){return await c().get("https://kinopoiskapiunofficial.tech/api/v2.2/films",{headers:{"X-API-KEY":i.apiKey,"Content-Type":"application/json"},params:{keyword:i.searchQueryStore,genres:i.genreIdStore,page:i.pageNum}})}async function p(e=!1,n){if(await v(),i.pageNum=n||i.pageNum,i.genreIdStore||i.searchQueryStore||e){o.value=!0;const n=await m();r.value=n.data?.totalPages,e?t.value=[...t.value,...n.data?.items]:(t.value=[],t.value=n.data?.items),o.value=!1}}function d(){p(!0,i.pageNum+1)}function g(){p(!1,i.pageNum)}async function v(){let e=i.genreIdStore?await i.genreListStore.filter((e=>+e.id===+i.genreIdStore))[0].genre:null;i.searchQueryStore&&i.genreIdStore?a.value=`Поиск по слову "${i.searchQueryStore}", жанр "${e}"`:i.searchQueryStore&&!i.genreIdStore?a.value=`Поиск по слову "${i.searchQueryStore}"`:i.genreIdStore&&!i.searchQueryStore?a.value=`Поиск по жанру "${e}"`:a.value="Ничего не указано для поиска"}return n.on("clickPage",g),(0,l.bv)((async()=>{i.searchQueryStore=s.value,i.genreIdStore=u.value,await p(!1,1),n.on("searchSubmit",(()=>{p(!1,1)})),i.currentFocusIndex=-1})),{films:t,titlePage:a,filmStore:i,totalPages:r,showPreload:o,getListFilms:p,getMoreFilms:d}}};const Qn=(0,N.Z)(En,[["render",Zn]]);var zn=Qn;const Vn=e=>((0,l.dD)("data-v-4d7e4948"),e=e(),(0,l.Cn)(),e),Bn=Vn((()=>(0,l._)("h1",null,"Страница не найдена",-1))),On=(0,l.Uk)("Перейти на "),Gn=(0,l.Uk)("главную"),Rn=Vn((()=>(0,l._)("br",null,null,-1)));function Yn(e,t){const n=(0,l.up)("router-link");return(0,l.wg)(),(0,l.iD)(l.HY,null,[Bn,(0,l._)("p",null,[On,(0,l.Wm)(n,{to:"/"},{default:(0,l.w5)((()=>[Gn])),_:1})]),Rn],64)}const $n={},Jn=(0,N.Z)($n,[["render",Yn],["__scopeId","data-v-4d7e4948"]]);var Xn=Jn;const ei=e=>((0,l.dD)("data-v-565fa41a"),e=e(),(0,l.Cn)(),e),ti=ei((()=>(0,l._)("h1",null,"Избранные фильмы/мультики и тд",-1))),ni={key:0};function ii(e,t,n,i,r,a){const o=(0,l.up)("FIlmItem");return(0,l.wg)(),(0,l.iD)(l.HY,null,[ti,(0,l.Wm)(o,{items:i.filmStore.favorites,showPreload:i.showPreload},null,8,["items","showPreload"]),0===i.filmStore.favorites.length?((0,l.wg)(),(0,l.iD)("h3",ni,"Список пуст")):(0,l.kq)("",!0)],64)}var ri={name:"FavoritePage",components:{FIlmItem:It},setup(){const e=k(),t=(0,T.iH)(!1);return(0,l.bv)((()=>{e.currentFocusIndex=-1})),{filmStore:e,showPreload:t}}};const ai=(0,N.Z)(ri,[["render",ii],["__scopeId","data-v-565fa41a"]]);var oi=ai;const si=(0,_e.p7)({history:(0,_e.PO)("/hometv"),routes:[{path:"/",name:"home",component:Bt},{path:"/film/:id",name:"filmName",component:qn},{path:"/search",name:"searchPage",component:zn},{path:"/favorites",name:"favorite",component:oi},{path:"/:pathMatch(.*)*",component:Xn}]});var li=si,ui=n(1373),ci=n(9907);(0,ci.z)("/hometv/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});const mi=(0,ui.Z)(),pi=(0,i.ri)(Ae);pi.directive("intersection",a),pi.directive("title",s),pi.use((0,r.WB)()),pi.use(li),pi.provide("emitter",mi),pi.mount("#app")}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var a=t[i]={exports:{}};return e[i](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,i,r,a){if(!i){var o=1/0;for(c=0;c<e.length;c++){i=e[c][0],r=e[c][1],a=e[c][2];for(var s=!0,l=0;l<i.length;l++)(!1&a||o>=a)&&Object.keys(n.O).every((function(e){return n.O[e](i[l])}))?i.splice(l--,1):(s=!1,a<o&&(o=a));if(s){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[i,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,i){var r,a,o=i[0],s=i[1],l=i[2],u=0;if(o.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(l)var c=l(n)}for(t&&t(i);u<o.length;u++)a=o[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},i=self["webpackChunkhomefilmtv"]=self["webpackChunkhomefilmtv"]||[];i.forEach(t.bind(null,0)),i.push=t.bind(null,i.push.bind(i))}();var i=n.O(void 0,[998],(function(){return n(9385)}));i=n.O(i)})();
//# sourceMappingURL=app.fab7654d.js.map