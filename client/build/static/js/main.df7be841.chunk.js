(this["webpackJsonpportal-profuels-v2"]=this["webpackJsonpportal-profuels-v2"]||[]).push([[0],{107:function(e,t,a){e.exports=a.p+"static/media/userImg.8db13474.jpg"},108:function(e,t,a){e.exports=a.p+"static/media/cmpnyLogo.877643f8.png"},109:function(e,t,a){e.exports=a.p+"static/media/Logo Profuels flama 1.01ba290c.jpg"},110:function(e,t,a){e.exports=a.p+"static/media/Flamas.4cfd06c1.png"},134:function(e,t,a){e.exports=a(189)},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},139:function(e,t,a){},189:function(e,t,a){"use strict";a.r(t);a(135),a(136),a(137),a(138),a(139),a(140);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),o=a(12),s=a.n(o),i=a(23),m=a(121),u=a(18),d=a(7),p=new function e(){Object(u.a)(this,e),Object(d.i)(this,{loading:!0,isLoggedIn:!1,userName:""})},f=a(42),E=Object(m.a)((function(){function e(){return(e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/isLoggedIn",e.next=4,fetch("/isLoggedIn",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 4:return t=e.sent,e.next=7,t.json();case 7:(a=e.sent)&&a.success?(p.userName=a.userName,p.loading=!1,p.isLoggedIn=!0):(p.loading=!1,p.isLoggedIn=!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),p.loading=!1,p.isLoggedIn=!1;case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){sessionStorage.Animacion||sessionStorage.setItem("Animacion",!0),function(){e.apply(this,arguments)}()}),[]),p.isLoggedIn?r.a.createElement(f.a,{to:"/home"}):r.a.createElement("div",null,r.a.createElement(f.a,{to:"/"}))})),h=a(15),v=a(24),b=a(26),g=a(25),y=a(107),x=a.n(y),N=a(108),j=a.n(N),k=a(109),w=a.n(k),O=a(110),C=a.n(O),I=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("img",{className:this.props.className,src:x.a,alt:"logo"})}}]),a}(r.a.Component),A=(r.a.Component,r.a.Component,function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("img",{id:this.props.id,src:w.a,className:"App-logoText",alt:"logo"})}}]),a}(r.a.Component)),S=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("button",{id:this.props.id,className:this.props.className,disabled:this.props.disabled,onClick:function(){return e.props.onClick()}},this.props.text)}}]),a}(r.a.Component),L=a(30),F=a(31),P=a(222),U=a(114),T=a.n(U),D=a(52);function W(){return(W=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/logout",e.next=4,fetch("/logout",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 4:return t=e.sent,e.next=7,t.json();case 7:(a=e.sent)&&a.success,p.isLoggedIn=!1,p.userName="",e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))).apply(this,arguments)}var B=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{id:"hor-navBar",className:"navbarHor"},r.a.createElement("ul",{className:"navbarHor-nav"},r.a.createElement("li",{className:"navHor-item"},r.a.createElement(L.a,{icon:F.a,size:"lg",className:"horIcon"}),r.a.createElement("label",{className:"boldText"},"Dashboard")),r.a.createElement("li",{className:"navHor-item"},r.a.createElement(P.a,{badgeContent:10,color:"secondary",className:"horIcon"},r.a.createElement(T.a,null)),r.a.createElement(L.a,{icon:F.b,size:"lg",className:"horIcon"}),r.a.createElement(D.b,{to:"/home",className:"horIcon"},r.a.createElement(L.a,{icon:F.e,size:"lg"})),r.a.createElement(D.b,{to:"/profuels",className:"horIcon"},r.a.createElement(L.a,{icon:F.d,size:"lg",color:"#FF9600",title:"Profuels"})))))}}]),a}(r.a.Component),V=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{id:"ver-navBar",className:"navbar"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{href:"/#",className:"nav-link"},r.a.createElement(I,{className:"profile-pic"}),r.a.createElement("div",null,r.a.createElement("span",{className:"link-text"},"Bienvenido, ",this.props.text,"."),r.a.createElement("br",null),r.a.createElement("span",{className:"link-text"},"Grupo: ",this.props.text,".")))),r.a.createElement("li",{className:"nav-item section-items"},r.a.createElement("a",{href:"/#",className:"nav-link"},r.a.createElement("span",{className:"link-text"},"Ventas"))),r.a.createElement("li",{className:"nav-item section-items"},r.a.createElement("a",{href:"/#",className:"nav-link"},r.a.createElement("span",{className:"link-text"},"Egresos"))),r.a.createElement("li",{className:"nav-item section-items"},r.a.createElement("a",{href:"/#",className:"nav-link"},r.a.createElement("span",{className:"link-text"},"Perif\xe9ricos"))),r.a.createElement("li",{className:"nav-item section-items"},r.a.createElement("a",{href:"/#",className:"nav-link"},r.a.createElement("span",{className:"link-text"},"Otros reportes"))),r.a.createElement("li",{className:"nav-item section-items"},r.a.createElement("a",{href:"/#",className:"nav-link",onClick:function(){!function(){W.apply(this,arguments)}()}},r.a.createElement(L.a,{icon:F.f}),r.a.createElement("span",{className:"link-text"},"Cerrar sesi\xf3n"))))))}}]),a}(r.a.Component),z=a(37),M=Object(z.h)(z.f),R=function(e){var t=Object(n.useState)(""),a=Object(h.a)(t,2),c=a[0],l=a[1],o=e.data,s=0;if(e.success){var i=o.map((function(e){return{x:e.Estacion,y:e.SumLitros}}));return i.length>0&&(s=i.reduce((function(e,t){return t.y>e?t.y:e}),i[0].y)),r.a.createElement(M,{margin:{left:80,right:70,bottom:100},height:450,xType:"ordinal",yDomain:[0,s],onMouseLeave:function(){l("")}},r.a.createElement(z.d,null),r.a.createElement(z.b,null),r.a.createElement(z.c,{opacity:.6,color:"#00a5ee",data:i,onNearestX:function(e){l(e)}}),r.a.createElement(z.a,{values:[c],className:"test-class-name",titleFormat:function(e){return{title:"Ventas",value:""}},itemsFormat:function(e){return[{title:"Litros",value:e[0].y},{title:"Estaci\xf3n",value:e[0].x}]}}),r.a.createElement(z.e,{color:"#00a5ee",tickLabelAngle:-60}),r.a.createElement(z.g,{tickFormat:function(e){return"".concat(e," lts")}}))}return r.a.createElement("div",null,r.a.createElement("h3",null,"Sin informaci\xf3n"))},_=a(116),H=a(242),G=function(e){Object(b.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={Usr:"",Pwd:"",Incorrect:!1,Msg:"",buttonDisabled:!1},e}return Object(v.a)(a,[{key:"resetForm",value:function(){this.setState({Usr:"",Pwd:"",Incorrect:!0,Msg:"Usuario y/o contrase\xf1a incorrectos.",buttonDisabled:!1})}},{key:"doLogin",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.state.Usr){e.next=2;break}return e.abrupt("return");case 2:if(this.state.Pwd){e.next=4;break}return e.abrupt("return");case 4:return this.setState({buttonDisabled:!0}),e.prev=5,"/login",e.next=9,fetch("/login",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},body:JSON.stringify({Usr:this.state.Usr,Pwd:this.state.Pwd})});case 9:return t=e.sent,e.next=12,t.json();case 12:(a=e.sent)&&a.success?(p.userName=a.userName,p.isLoggedIn=!0):a&&!a.success&&this.resetForm(),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0),this.resetForm();case 20:case"end":return e.stop()}}),e,this,[[5,16]])})));return function(){return e.apply(this,arguments)}}()},{key:"setInputValue",value:function(e,t){this.setState({Incorrect:!1,Msg:""}),(t=t.trim()).length>12||this.setState(Object(_.a)({},e,t))}},{key:"render",value:function(){var e=this;return document.body.style.backgroundColor="#161616",r.a.createElement("div",{className:"mainContent"},r.a.createElement("div",{className:"row loginParentDiv"},r.a.createElement("div",{className:"col-md-3 loginChildDiv"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12",style:{textAlign:"center",paddingBottom:20}},r.a.createElement("div",{id:"divLogo"},r.a.createElement(A,{id:"imgLogo"})))),r.a.createElement("br",null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(H.a,{id:"inpUsr",error:this.state.Incorrect,helperText:this.state.Msg,fullWidth:!0,autoComplete:"off",value:this.state.Usr?this.state.Usr:"",label:"Usuario",onChange:function(t){return e.setInputValue("Usr",t.target.value)},onKeyDown:function(t){13===t.keyCode&&e.doLogin()}}))),r.a.createElement("div",{className:"row",style:{marginTop:"1.5rem"}},r.a.createElement("div",{className:"col-md-12"},r.a.createElement(H.a,{id:"inpPwd",error:this.state.Incorrect,helperText:this.state.Msg,fullWidth:!0,type:"password",label:"Contrase\xf1a",value:this.state.Pwd?this.state.Pwd:"",onChange:function(t){return e.setInputValue("Pwd",t.target.value)},onKeyDown:function(t){13===t.keyCode&&e.doLogin()}}),r.a.createElement("br",null),r.a.createElement("div",{style:{textAlign:"right",paddingTop:"10px"}},r.a.createElement("a",{href:"/#"},"\xbfOlvid\xf3 su contrase\xf1a?")))),r.a.createElement("br",null),r.a.createElement("div",{className:"row",style:{paddingTop:"12%"}},r.a.createElement("div",{className:"col-md-12",style:{textAlign:"center"}},r.a.createElement(S,{id:"btnLogIn",className:"btn btn-outline-custom",text:"Iniciar sesi\xf3n",disabled:this.state.buttonDisabled,onClick:function(){e.doLogin()}}))),r.a.createElement("br",null),r.a.createElement("div",{className:"row",style:{paddingTop:"22%"}},r.a.createElement("div",{className:"col-md-12",style:{textAlign:"center"}},r.a.createElement("p",null,"\xbfNo tiene cuenta?"),r.a.createElement("p",null,r.a.createElement("a",{href:"/#",style:{fontWeight:"bold"}},"Registrarse")))))))}}]),a}(r.a.Component),J=a(33),K=a.n(J),X=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),q=a(72),Q=a(228),Y=a(229),Z=a(230),$=a(231),ee=a(234),te=a(235),ae=a(236),ne=a(227),re=a(237),ce=a(241),le=a(118),oe=a.n(le),se=a(117),ie=a.n(se),me=a(233),ue=a(240),de=a(232),pe=a(119),fe=a.n(pe),Ee=a(120),he=a.n(Ee),ve=a(85),be=a.n(ve),ge=Object(Q.a)({root:{width:"100%"},container:{maxHeight:440},table:{minWidth:650}});function ye(e){for(var t=window.atob(e),a=t.length,n=new Uint8Array(a),r=0;r<a;r++)n[r]=t.charCodeAt(r);return n.buffer}var xe=function(e){var t=[],a=[],n=r.a.useState(0),c=Object(h.a)(n,2),l=c[0],o=c[1],s=r.a.useState(10),i=Object(h.a)(s,2),m=i[0],u=i[1],d=e.data,p=ge();if(d.length>0){var f=d[0],E=(f.Detalle,Object(q.a)(f,["Detalle"]));t=Object.keys(E).map((function(e){return{id:e,label:v(e,"_"," "),minWidth:170}})),a=d}function v(e,t,a){return e.split(t).join(a)}function b(e){var t=r.a.useState(!1),a=Object(h.a)(t,2),n=a[0],c=a[1],l=e.dataCol,o=e.dataRow,s=o.Detalle,i=Object.keys(s[0]).map((function(e){return{key:e,id:e,label:v(e,"_"," "),minWidth:170}}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{key:o.N\u00famero_de_factura,hover:!0,role:"checkbox",tabIndex:-1},r.a.createElement(Z.a,null,r.a.createElement($.a,{"aria-label":"expand row",size:"small",onClick:function(){return c(!n)}},n?r.a.createElement(ie.a,null):r.a.createElement(oe.a,null))),l.map((function(e){var t=o[e.id];return r.a.createElement(Z.a,{key:e.id,align:e.align},e.format&&"number"===typeof t?e.format(t):t)})),r.a.createElement(Z.a,null,r.a.createElement($.a,{"aria-label":"expand row",size:"small",id:o.N\u00famero_de_factura,onClick:function(e){!function(t){try{be.a.get("https://portal.grupoeco.com.mx/sirexa/api/DownloadFile?IdFact=".concat(t),{method:"GET"}).then((function(e){var a=new Blob([ye(e.data)],{type:"application/xml"}),n=window.URL.createObjectURL(a),r=document.createElement("a");r.href=n,r.download="".concat(t,".xml"),r.click()}))}catch(e){alert(e)}}(o.N\u00famero_de_factura)}},r.a.createElement(fe.a,null)))),r.a.createElement(Y.a,null,r.a.createElement(Z.a,{style:{paddingBottom:0,paddingTop:0},colSpan:7},r.a.createElement(de.a,{in:n,timeout:"auto",unmountOnExit:!0},r.a.createElement(ue.a,{margin:0},r.a.createElement(me.a,{variant:"h6",gutterBottom:!0,component:"div"},"Detalle"),r.a.createElement(ee.a,{size:"small","aria-label":"purchases"},r.a.createElement(te.a,null,r.a.createElement(Y.a,null,i.map((function(e){return r.a.createElement(Z.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),r.a.createElement(ae.a,null,s.map((function(e){return r.a.createElement(Y.a,{key:e.id},i.map((function(t){var a=e[t.id];return r.a.createElement(Z.a,{key:e.id,align:e.align},a)})))})))))))))}return r.a.createElement(ne.a,{className:p.root},r.a.createElement(re.a,{className:p.container},r.a.createElement(ee.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(te.a,null,r.a.createElement(Y.a,null,r.a.createElement(Z.a,null),t.map((function(e){return r.a.createElement(Z.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})),r.a.createElement(Z.a,{style:{minWidth:170}},"Documentos"))),r.a.createElement(ae.a,null,a.slice(l*m,l*m+m).map((function(e){return r.a.createElement(b,{dataCol:t,dataRow:e})}))))),r.a.createElement(ce.a,{rowsPerPageOptions:[10,25,100],component:"div",count:a.length,rowsPerPage:m,page:l,onChangePage:function(e,t){o(t)},onChangeRowsPerPage:function(e){u(+e.target.value),o(0)}}))},Ne=function(e){var t=[],a=[],n=ge(),c=r.a.useState(0),l=Object(h.a)(c,2),o=l[0],s=l[1],i=r.a.useState(10),m=Object(h.a)(i,2),u=m[0],d=m[1];var p=e.data;return p.length>0&&(a=Object.keys(p[0]).map((function(e){return{id:e,label:e,minWidth:170}})),t=p),r.a.createElement(ne.a,{className:n.root},r.a.createElement(re.a,{className:n.container},r.a.createElement(ee.a,{stickyHeader:!0,"aria-label":"sticky table"},r.a.createElement(te.a,null,r.a.createElement(Y.a,null,a.map((function(e){return r.a.createElement(Z.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})),r.a.createElement(Z.a,{style:{minWidth:170}}))),r.a.createElement(ae.a,null,t.slice(o*u,o*u+u).map((function(e){return r.a.createElement(Y.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},a.map((function(t){var a=e[t.id];return r.a.createElement(Z.a,{key:t.id,align:t.align},t.format&&"number"===typeof a?t.format(a):a)})),r.a.createElement(Z.a,null,r.a.createElement($.a,{"aria-label":"expand row",size:"small",id:e.Id,onClick:function(t){!function(e){try{be.a.get("https://portal.grupoeco.com.mx/sirexa/api/DownloadAcctFile?IdAcctSmnt=".concat(e),{method:"GET"}).then((function(e){var t=new Blob([ye(e.data[0].File)],{type:"application/pdf"}),a=window.URL.createObjectURL(t),n=document.createElement("a");n.href=a,n.download="".concat(e.data[0].Id),n.click()}))}catch(t){alert(t)}}(e.Id)}},r.a.createElement(he.a,{fontSize:"large",style:{color:"red",fontSize:31}}))))}))))),r.a.createElement(ce.a,{rowsPerPageOptions:[10,25,100],component:"div",count:t.length,rowsPerPage:u,page:o,onChangePage:function(e,t){s(t)},onChangeRowsPerPage:function(e){d(+e.target.value),s(0)}}))},je=a(238),ke=[],we=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"});l.a.render(r.a.createElement(D.a,null,r.a.createElement(f.d,null,r.a.createElement(f.b,{path:"/",component:G,exact:!0}),r.a.createElement(f.b,{path:"/home",component:function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(h.a)(l,2),m=o[0],u=o[1];Object(n.useEffect)((function(){if(f(),d(),sessionStorage.getItem("Animacion")){var e=document.getElementById("ver-navBar"),t=document.getElementById("hor-navBar"),a=document.getElementById("main");e.classList.add("navbarAnimation"),t.classList.add("fadeInAnimation"),document.getElementById("main").classList.add("fadeInAnimation"),e.addEventListener("animationend",(function(){e.classList.remove("navbarAnimation")})),t.addEventListener("animationend",(function(){t.classList.remove("fadeInAnimation")})),a.addEventListener("animationend",(function(){a.classList.remove("fadeInAnimation")})),sessionStorage.clear()}}),[]);var d=function(){var e=K()("#hoverUp");K()(window).scroll((function(){K()(window).scrollTop()>20?e.addClass("show"):e.removeClass("show")})),e.on("click",(function(e){e.preventDefault(),K()("html, body").animate({scrollTop:0},"300")}))},f=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/getSalesInfo",e.next=4,fetch("/getSalesInfo",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 4:return t=e.sent,e.next=7,t.json();case 7:if(!(a=e.sent)||!a.success){e.next=12;break}return u(!0),c(a.data),e.abrupt("return");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();if(document.body.style.backgroundColor="#F8F8F8",p.isLoggedIn){var E=a.reduce((function(e,t){return e+t.SumVentasImp}),0),v=a.reduce((function(e,t){return e+t.VenT1}),0),b=a.reduce((function(e,t){return e+t.VenT2}),0),g=a.reduce((function(e,t){return e+t.VenT3}),0);return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{text:p.userName.toUpperCase()}),r.a.createElement(B,null),r.a.createElement("main",{id:"main"},r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"flex-item-cards"},r.a.createElement("h6",{className:"custom-h6"},"Ventas totales"),r.a.createElement("p",{style:{color:"green"}},X.format(E))),r.a.createElement("div",{className:"flex-item-cards"},r.a.createElement("h6",{className:"custom-h6"},"Ventas totales turno 1"),r.a.createElement("p",{style:{color:"black"}},"".concat(v.toFixed(2)," Lts"))),r.a.createElement("div",{className:"flex-item-cards"},r.a.createElement("h6",{className:"custom-h6"},"Ventas totales turno 2"),r.a.createElement("p",{style:{color:"black"}},"".concat(b.toFixed(2)," Lts"))),r.a.createElement("div",{className:"flex-item-cards"},r.a.createElement("h6",{className:"custom-h6"},"Ventas totales turno 3"),r.a.createElement("p",{style:{color:"black"}},"".concat(g.toFixed(2)," Lts")))),r.a.createElement("br",null),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"flex-item"},r.a.createElement(R,{data:a,success:m})),r.a.createElement("div",{className:"flex-item"},r.a.createElement(R,{data:a,success:m}))),r.a.createElement("a",{id:"hoverUp",href:"/#"},r.a.createElement(L.a,{icon:F.c}))))}return r.a.createElement("div",null,r.a.createElement(G,null))},exact:!0}),r.a.createElement(f.b,{path:"/profuels",component:function(){var e=Object(n.useState)(ke),t=Object(h.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)(!1),o=Object(h.a)(l,2),m=o[0],u=o[1],d=Object(n.useState)({data:[],loading:!1}),f=Object(h.a)(d,2),E=f[0],v=f[1];function b(){return(b=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"/GetSaldos",e.next=4,fetch("/GetSaldos",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 4:return t=e.sent,e.next=7,t.json();case 7:if(!(a=e.sent)||!a.success){e.next=11;break}return c(a.data),e.abrupt("return");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}function g(){return(g=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(E.loading){e.next=17;break}return e.prev=1,"/getAcctStmt",e.next=5,fetch("/getAcctStmt",{method:"post",headers:{Accept:"application/json","Content-Type":"application/json","Access-Control-Allow-Origin":"*"}});case 5:return t=e.sent,e.next=8,t.json();case 8:if(!(a=e.sent)||!a.success){e.next=12;break}return 0!==a.data.length&&v({data:a.data,loading:!0}),e.abrupt("return");case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))).apply(this,arguments)}document.body.style.backgroundColor="#F8F8F8",Object(n.useEffect)((function(){!function(){b.apply(this,arguments)}(),y()}),[]);var y=function(){var e=K()("#hoverUp");K()(window).scroll((function(){K()(window).scrollTop()>20?e.addClass("show"):e.removeClass("show")})),e.on("click",(function(e){e.preventDefault(),K()("html, body").animate({scrollTop:0},"300")}))},x=a.reduce((function(e,t){return e+t.MontoASum}),0),N=a.map((function(e){e.MontoASum;return Object(q.a)(e,["MontoASum"])}));return m?(function(){g.apply(this,arguments)}(),r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{text:p.userName.toUpperCase()}),r.a.createElement(B,null),r.a.createElement("main",null,r.a.createElement("label",null,"Estado de cuenta"),r.a.createElement(Ne,{data:E.data})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{text:p.userName.toUpperCase()}),r.a.createElement(B,null),r.a.createElement("main",null,r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"flex-item",style:{textAlign:"center"}},r.a.createElement("p",null,"Estatus de cuenta: ",r.a.createElement("span",{className:"boldText",style:{color:"#e3026f"}}," no corriente")),r.a.createElement("p",{className:"title-high"},we.format(x.toFixed(2))),r.a.createElement("p",{className:"primary-text hover-link",onClick:function(){u(!0)}},"ver estado de cuenta")),r.a.createElement("div",{className:"flex-item",style:{textAlign:"center"}},r.a.createElement("p",null,"Nivel de cliente: "),r.a.createElement("p",{className:"title-high"},"Gold"))),r.a.createElement("br",null),r.a.createElement("div",{className:"flex-container"},r.a.createElement("div",{className:"flex-item-cards-btn"},r.a.createElement(je.a,{variant:"contained",color:"primary",fullWidth:!0},"Auxiliar de movimientos")),r.a.createElement("div",{className:"flex-item-cards-btn"},r.a.createElement(je.a,{variant:"contained",color:"primary",fullWidth:!0},"Antig\xfcedad de saldos")),r.a.createElement("div",{className:"flex-item-cards-btn"},r.a.createElement(je.a,{variant:"contained",color:"primary",fullWidth:!0},"Informe de saldos"))),r.a.createElement("br",null),r.a.createElement("div",{id:"div-profuels-table"},r.a.createElement(xe,{data:N})),r.a.createElement("a",{id:"hoverUp",href:"/#"},r.a.createElement(L.a,{icon:F.c}))))},exact:!0})),r.a.createElement(E,null)),document.getElementById("root"))}},[[134,1,2]]]);
//# sourceMappingURL=main.df7be841.chunk.js.map