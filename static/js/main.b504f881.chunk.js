(this.webpackJsonpvkvideo=this.webpackJsonpvkvideo||[]).push([[0],{111:function(e,t,n){e.exports=n(208)},196:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){},199:function(e,t,n){},201:function(e,t,n){},202:function(e,t,n){},203:function(e,t,n){},204:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){},208:function(e,t,n){"use strict";n.r(t),n.d(t,"store",(function(){return de})),n.d(t,"history",(function(){return ve}));var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=n(16),i=n(47),u=n(251),s=n(13),f=n(95),m=n(91),d=n(48),v=n(250),b=n(97),p=n(27),E=n(10),O=n(18),h=n(20),j=n.n(h),g=n(38),_=Object(O.a)("SET_AUTH_DATA",(function(e){return{payload:e}})),N=Object(O.a)("SET_USER_DATA",(function(e){return{payload:e}}));function k(){return function(){var e=Object(g.a)(j.a.mark((function e(t){var n,a,r,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=window,a=n.VK,(r=localStorage.getItem("token"))?(c=JSON.parse(r),t(_(c))):a.Auth.login((function(e){if(e.session){var n=y(e);return t(_(n))}return null}),16);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}var w,y=function(e){var t=localStorage.getItem("token");if(!t){var n=JSON.stringify(e.session);localStorage.setItem("token",n)}var a=JSON.parse(t),r=a.expire;return new Date(1e3*r)>new Date?a:e.session};var S,A=Object(O.b)({expire:null,mid:null,secret:null,sid:null,sig:null,user:null},(w={},Object(p.a)(w,_.type,(function(e,t){return Object(E.a)(Object(E.a)({},e),t.payload)})),Object(p.a)(w,N.type,(function(e,t){return Object(E.a)(Object(E.a)({},e),{},{user:Object(E.a)(Object(E.a)({},e.user),t.payload)})})),w)),I=n(104),x=n(96),C=n.n(x),T=Object(O.a)("SET_VIDEO_DATA",(function(e){return{payload:e}})),D=Object(O.a)("SET_IS_LOADING",(function(e){return{payload:e}}));var L=Object(O.b)({list:[],isLoading:!1},(S={},Object(p.a)(S,T.type,(function(e,t){return Object(E.a)(Object(E.a)({},e),{},{list:Object(I.a)(t.payload)})})),Object(p.a)(S,D.type,(function(e,t){return Object(E.a)(Object(E.a)({},e),{},{isLoading:t.payload})})),S)),V=Object(b.a)(),U=Object(s.combineReducers)({form:v.a,router:Object(i.b)(V),auth:A,videos:L}),J=function(e,t){return U(e,t)};var R=n(65),q=n(210),K=n(243),F=n(244),M=n(239),B=function(e){var t=e.text,n=e.onClick,a=e.color,c=e.className;return r.a.createElement(M.a,{variant:"contained",color:a,onClick:n,className:c},t)},G=(n(196),function(e){var t=e.handleLogin,n=e.getUserInfo,c=e.user,o=e.token;return Object(a.useEffect)((function(){t()}),[]),Object(a.useEffect)((function(){o&&c&&n(c.id)}),[o]),r.a.createElement(r.a.Fragment,null,!o&&r.a.createElement(B,{text:"Login",color:"secondary",onClick:t}),o&&c&&r.a.createElement("img",{className:"user__img",src:c.photo_big,alt:"ava"}))}),H=(n(197),function(e){var t=e.startAuth,n=e.getUserInfo,a=e.token,c=e.user;return r.a.createElement(K.a,{position:"fixed"},r.a.createElement(F.a,null,r.a.createElement(q.a,{variant:"h6"},r.a.createElement("a",{className:"header__heading",href:"/"},"Searching video")),r.a.createElement("div",{className:"header__user"},r.a.createElement(G,{getUserInfo:n,handleLogin:t,user:c,token:a}))))}),W=Object(R.c)(Object(l.c)((function(e){return{user:e.auth.user,token:e.auth.sid}}),(function(e){return{startAuth:function(){return e(k())},getUserInfo:function(t){return e(function(e){return function(){var t=Object(g.a)(j.a.mark((function t(n){var a,r,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=window,r=a.VK,c={user_ids:e,fields:"photo_big",name_case:"Nom",v:"5.126"},r.Api.call("users.get",c,(function(e){console.log(e.response[0]),e.response[0]&&n(N(e.response[0]))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(H)),z=n(66),P=n(245),Q=n(246),X=n(252),Y=n(248),Z=n(249),$=n(253),ee=(n(198),function(e){var t=e.searchVideo,n=e.sortVideo,c=Object(a.useRef)(null),o=Object(a.useState)(!1),l=Object(z.a)(o,2),i=l[0],u=l[1],s=Object(a.useState)(!1),f=Object(z.a)(s,2),m=f[0],d=f[1],v=Object(a.useState)({q:"",hd:1,sort:0,offset:0,adult:1,longer:540,count:200,v:"5.103"}),b=Object(z.a)(v,2),p=b[0],O=b[1];return Object(a.useEffect)((function(){n(m)}),[m]),Object(a.useEffect)((function(){p.q.length>1&&t(p,i)}),[p.offset]),Object(a.useEffect)((function(){c&&c.current&&c.current.focus()}),[]),r.a.createElement("div",{className:"control"},r.a.createElement(P.a,{inputRef:c,placeholder:"searching request",onChange:function(e){var t=e.target.value;t&&O(Object(E.a)(Object(E.a)({},p),{},{q:t}))},onKeyUp:function(e){13===(e.keyCode||e.which)&&t(p,i)},className:"control__item"}),r.a.createElement(Q.a,{className:"control__item",control:r.a.createElement(X.a,{checked:i,onChange:function(e){return u(e.target.checked)}}),label:"Including 720p"}),r.a.createElement(Q.a,{className:"control__item",control:r.a.createElement(X.a,{checked:m,onChange:function(e){return d(e.target.checked)}}),label:"Reverse"}),r.a.createElement(Y.a,{className:"control__item"},r.a.createElement(Z.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:p.sort,onChange:function(e){var t=e.target.value;3!==t?O(Object(E.a)(Object(E.a)({},p),{},{sort:t})):n(void 0)}},r.a.createElement($.a,{value:0},"\u043f\u043e \u0434\u0430\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0432\u0438\u0434\u0435\u043e\u0437\u0430\u043f\u0438\u0441\u0438"),r.a.createElement($.a,{value:1},"\u043f\u043e \u0434\u043b\u0438\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u0438"),r.a.createElement($.a,{value:2},"\u043f\u043e \u0440\u0435\u043b\u0435\u0432\u0430\u043d\u0442\u043d\u043e\u0441\u0442\u0438"),r.a.createElement($.a,{value:3},"\u043f\u043e \u043a\u043e\u043b-\u0432\u0443 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u043e\u0432"))),r.a.createElement(B,{className:"control__item _btn",text:"+200 more",color:"secondary",onClick:function(){return O(Object(E.a)(Object(E.a)({},p),{},{offset:p.offset+200}))}}))}),te=Object(R.c)(Object(l.c)((function(){return{}}),(function(e){return{searchVideo:function(t,n){return e(function(e,t){return function(){var n=Object(g.a)(j.a.mark((function n(a){var r,c;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=window,c=r.VK,a(D(!0)),c.Api.call("video.search",e,(function(e){var n=e.response.items,r=t?n:n.filter((function(e){return 1920===e.width&&0!==e.duration}));console.log(r);var c=r.map((function(e){return Object(E.a)(Object(E.a)({},e),{},{duration:"".concat(Math.trunc(parseInt(e.duration.toString(),10)/60),":").concat(parseInt(e.duration.toString(),10)%60),date:"number"===typeof e.date?C()(new Date(1e3*e.date).toString()).fromNow():e.date})}));a(T(c)),a(D(!1))}));case 3:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t,n))},sortVideo:function(t){return e(function(e){return function(){var t=Object(g.a)(j.a.mark((function t(n,a){var r,c;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=a().videos.list,c=[],!e&&r.length&&(c=r.slice().sort((function(e,t){return t.views-e.views}))),e&&(c=r.slice().reverse()),n(T(c));case 5:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(t))}}}))(ee)),ne=(n(199),n(247)),ae=n(103),re=n.n(ae),ce=function(){return r.a.createElement("div",{className:"totop",onClick:function(){return window.scrollTo(0,0)}},r.a.createElement(ne.a,{edge:"start",color:"inherit","aria-label":"menu"},r.a.createElement(re.a,null)))},oe=(n(201),function(e){var t=e.video,n=e.order;return r.a.createElement("li",{className:"card"},r.a.createElement("a",{className:"card__link",href:"https://vk.com/video".concat(t.owner_id,"_").concat(t.id),target:"_blank",rel:"noreferrer"},t.image&&r.a.createElement("img",{className:"card__img",src:t.image[3].url,alt:"bla"}),r.a.createElement("span",{className:"card__container"},r.a.createElement("p",{className:"card__text"},t.date),r.a.createElement("p",{className:"card__text"},t.duration),r.a.createElement("p",{className:"card__text"},t.views)),r.a.createElement("p",{className:"card__title"},t.title),r.a.createElement("p",{className:"card__order"},n)))}),le=(n(202),function(e){var t=e.videos;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:"list"},t.map((function(e,t){return r.a.createElement(oe,{video:e,key:"".concat(e.id,"_").concat(e.owner_id),order:t+1})}))),!!t.length&&r.a.createElement(ce,null))}),ie=Object(R.c)(Object(l.c)((function(e){return{videos:e.videos.list}}),(function(e){return{startAuth:function(){return e(k())}}}))(le)),ue=(n(203),n(204),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"lds-facebook"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null)))}),se=function(e){var t=e.token,n=e.isLoading;return r.a.createElement("main",{className:"search"},r.a.createElement(W,null),r.a.createElement("div",{className:"search__content"},t&&r.a.createElement(r.a.Fragment,null,r.a.createElement(te,null),r.a.createElement("div",{className:"search__list"},!n&&r.a.createElement(ie,null),n&&r.a.createElement(ue,null))),!t&&r.a.createElement(q.a,null,"\u0412\u044b \u043d\u0435 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u043d\u044b, \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435")))},fe=Object(R.c)(Object(l.c)((function(e){return{token:e.auth.sid,isLoading:e.videos.isLoading}}),(function(e){return{startAuth:function(){return e(k())}}}))(se)),me=(n(205),n(206),n(207),function(){var e=[d.a,Object(m.a)(V)],t=s.applyMiddleware.apply(void 0,e);return{store:Object(s.createStore)(J,{},Object(f.composeWithDevTools)(t)),history:V}}()),de=me.store,ve=me.history,be=function(){return r.a.createElement(l.a,{store:de},r.a.createElement(i.a,{history:ve},r.a.createElement(u.a,null,r.a.createElement("section",{className:"app"},r.a.createElement(fe,null)))))};o.a.render(r.a.createElement(be,null),document.getElementById("root"))}},[[111,1,2]]]);
//# sourceMappingURL=main.b504f881.chunk.js.map