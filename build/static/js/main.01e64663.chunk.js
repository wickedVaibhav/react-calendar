(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{180:function(e,t,a){},182:function(e,t,a){},186:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),l=a.n(c),o=(a(70),a(10)),s=a(11),i=a(15),u=a(12),p=a(14),m=a(26),f=(a(72),a(2)),h=a.n(f),d=a(13),g=a.n(d),E=(a(74),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).resetPreferences=function(){a.setState({prefer_1:""}),a.setState({prefer_2:[]}),a.setState({prefer_3:[]}),a.setState({prefer_4:""}),a.setState({prefer_5:""}),a.showPreference(1)},a.prefer1=function(e){a.setState({prefer_1:e}),a.showPreference(2)},a.prefer2=function(e){a.state.prefer_2.push(e),a.setState({prefer_2:a.state.prefer_2}),a.showPreference(3)},a.prefer3=function(e){a.state.prefer_3.push(e),a.setState({prefer_3:a.state.prefer_3}),a.showPreference(4)},a.prefer4=function(e){a.setState({prefer_4:e}),a.showPreference(5)},a.prefer5=function(e){a.setState({prefer_5:e}),console.log(a.state),document.querySelector(".preference-5").style.display="none",document.querySelector(".confirm-preferences").style.display="block"},a.state={prefer_1:"",prefer_2:[],prefer_3:[],prefer_4:"",prefer_5:""},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){if(console.log("hua mount"),""==this.state.prefer_1)for(var e=2;e<=6;e++){document.querySelector(".preference-"+e).style.display="none"}}},{key:"showPreference",value:function(e){for(var t=1;t<=6;t++){document.querySelector(".preference-"+t).style.display="none"}document.querySelector(".preference-"+e).style.display="block"}},{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"preference-wrapper"},n.a.createElement("div",{className:"preference-1 animated fadeIn"},n.a.createElement("h1",{className:"about-u"},"Tell Us About Yourself "),n.a.createElement(h.a,{label:"Male",className:"chips",color:"secondary",onClick:function(){return e.prefer1("male")}}),n.a.createElement(h.a,{label:"Female",className:"chips",color:"secondary",onClick:function(){return e.prefer1("female")}})),n.a.createElement("div",{className:"preference-2 animated fadeIn"},n.a.createElement("h1",{className:"about-u"},"Tell Us Where You Are"),n.a.createElement(h.a,{label:"Pub",className:"chips",color:"secondary",onClick:function(){return e.prefer2("pub")}}),n.a.createElement(h.a,{label:"Bar",className:"chips",color:"secondary",onClick:function(){return e.prefer2("bar")}}),n.a.createElement(h.a,{label:"Your House",className:"chips",color:"secondary",onClick:function(){return e.prefer2("your_house")}}),n.a.createElement(h.a,{label:"Your Friend's House",className:"chips",color:"secondary",onClick:function(){return e.prefer2("your_friend_house")}}),n.a.createElement(h.a,{label:"Outdoor",className:"chips",color:"secondary",onClick:function(){return e.prefer2("outdoor")}}),n.a.createElement(h.a,{label:"Professional Premise",className:"chips",color:"secondary",onClick:function(){return e.prefer2("professional_space")}})),n.a.createElement("div",{className:"preference-3 animated fadeIn"},n.a.createElement("h1",{className:"about-u"},"Whom you are with"),n.a.createElement(h.a,{label:"Casual Friends",className:"chips",color:"secondary",onClick:function(){return e.prefer3("casual_friends")}}),n.a.createElement(h.a,{label:"Professional Friend",className:"chips",color:"secondary",onClick:function(){return e.prefer3("professional_friends")}}),n.a.createElement(h.a,{label:"Colleagues",className:"chips",color:"secondary",onClick:function(){return e.prefer3("colleagues")}}),n.a.createElement(h.a,{label:"Strangers",className:"chips",color:"secondary",onClick:function(){return e.prefer3("strangers")}}),n.a.createElement(h.a,{label:"Newly Met",className:"chips",color:"secondary",onClick:function(){return e.prefer3("newly_met")}}),n.a.createElement(h.a,{label:"Close Friends",className:"chips",color:"secondary",onClick:function(){return e.prefer3("close_friends")}})),n.a.createElement("div",{className:"preference-4 animated fadeIn"},n.a.createElement("h1",{className:"about-u"},"How Drunk You Want To Be"),n.a.createElement(h.a,{label:"Sober",className:"chips",color:"secondary",onClick:function(){return e.prefer4("sober")}}),n.a.createElement(h.a,{label:"Casual",className:"chips",color:"secondary",onClick:function(){return e.prefer4("casual")}}),n.a.createElement(h.a,{label:"Wild",className:"chips",color:"secondary",onClick:function(){return e.prefer4("wild")}})),n.a.createElement("div",{className:"preference-5 animated fadeIn"},n.a.createElement("h1",{className:"about-u"},"What Time Of Day It Is"),n.a.createElement(h.a,{label:"Blue Sky",className:"chips",color:"secondary",onClick:function(){return e.prefer5("bluesky")}}),n.a.createElement(h.a,{label:"Moonlight",className:"chips",color:"secondary",onClick:function(){return e.prefer5("moonlight")}})),n.a.createElement("div",{className:"preference-6 confirm-preferences hide animated fadeInBottom"},n.a.createElement("div",{className:"pad-25"},n.a.createElement("p",null,"You Are : ",this.state.prefer_1.toLocaleUpperCase()),n.a.createElement("p",null,"You Are At : ",this.state.prefer_2.map(function(e){return e.toLocaleUpperCase()})," ",n.a.createElement("br",null)),n.a.createElement("p",null,"You Are With :"," ",this.state.prefer_3.map(function(e){return e.toLocaleUpperCase()})),n.a.createElement("p",null,"You Want to : ",this.state.prefer_4.toLocaleUpperCase()),n.a.createElement("p",null,"Time of Day : ",this.state.prefer_5.toLocaleUpperCase()),n.a.createElement(g.a,{variant:"contained",color:"primary",onClick:this.resetPreferences},"Reset"),n.a.createElement(g.a,{variant:"contained",color:"secondary",onClick:function(){return e.props.changeCurrentPage("game")}},"Next"))))}}]),t}(r.Component)),b=(a(174),a(61)),y=(a(180),function(e){function t(e){var a;return Object(o.a)(this,t),a=Object(i.a)(this,Object(u.a)(t).call(this,e)),console.log("props :",a.props),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement(b.Carousel,{showArrows:!1,showThumbs:!1,showIndicators:!1,showStatus:!1,className:"carousel-wrapper"},n.a.createElement("div",null,n.a.createElement("img",{src:"https://img.freepik.com/free-vector/lovely-welcome-composition-with-flat-design_23-2147920507.jpg?size=338&ext=jpg"})),n.a.createElement("div",null,n.a.createElement("img",{src:"https://img.freepik.com/free-vector/lovely-welcome-composition-with-flat-design_23-2147920507.jpg?size=338&ext=jpg"})),n.a.createElement("div",null,n.a.createElement("img",{src:"https://img.freepik.com/free-vector/lovely-welcome-composition-with-flat-design_23-2147920507.jpg?size=338&ext=jpg"}),n.a.createElement(g.a,{className:"dark-btn",variant:"outlined",onClick:function(){return e.props.changeCurrentPage("preference")}},"Next"))))}}]),t}(r.Component)),v=a(63),C=a.n(v),k=a(62),N=a.n(k),w=[{title:"kiss me",tags:[{title:"couple"},{title:"casualFriend"}]},{title:"Blow the first guy on your right",tags:[{title:"couple"},{title:"casualFriend"}]},{title:"Boobie flash",tags:[{title:"couple"},{title:"casualFriend"}]},{title:"Striptease",tags:[{title:"couple"},{title:"casualFriend"}]},{title:"Where is the strangest place you have peed?",tags:[{title:"couple"},{title:"casualFriend"}]},{title:"Who is the person you most regret kissing?",tags:[{title:"couple"},{title:"casualFriend"}]}],_=(a(182),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={gameTitle:"Lets Play"},console.log(a.state),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"next",value:function(){console.log("game length :",w.length);var e=Math.floor(Math.random()*Math.floor(w.length));this.setState({gameTitle:w[e].title})}},{key:"render",value:function(){var e=this;return n.a.createElement("div",null,n.a.createElement("div",{className:"question-wrapper"},n.a.createElement("div",{className:"card-wrapper"},n.a.createElement(N.a,{className:"cardContent-wrapper"},n.a.createElement(C.a,{className:"vert-middle",color:"textSecondary",component:"h2",variant:"h3"},this.state.gameTitle.toLocaleUpperCase())))),n.a.createElement("div",{className:"next-button-wrapper"},n.a.createElement(g.a,{variant:"extendedFab","aria-label":"Delete",color:"secondary",onClick:function(){return e.next()}},n.a.createElement("i",{className:"material-icons"},"navigate_next"))))}}]),t}(r.Component)),P=a(64),j=a.n(P),O=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={currnetPage:"preference"},a.changeCurrentPage=a.changeCurrentPage.bind(Object(m.a)(Object(m.a)(a))),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"changeCurrentPage",value:function(e){console.log("app.js changeCurrentPage"),this.setState({currnetPage:e})}},{key:"render",value:function(){return n.a.createElement("div",{className:"vh-100"},n.a.createElement("div",{className:"brand-logo"},n.a.createElement("img",{src:j.a,alt:""})," ",n.a.createElement("span",null,"CHEERS")),"onboarding"==this.state.currnetPage?n.a.createElement(y,{changeCurrentPage:this.changeCurrentPage}):null,"preference"==this.state.currnetPage?n.a.createElement(E,{changeCurrentPage:this.changeCurrentPage}):null,"game"==this.state.currnetPage?n.a.createElement(_,{changeCurrentPage:this.changeCurrentPage}):null)}}]),t}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(n.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},64:function(e,t,a){e.exports=a.p+"static/media/logo.812506e4.svg"},65:function(e,t,a){e.exports=a(186)},70:function(e,t,a){},72:function(e,t,a){},74:function(e,t,a){}},[[65,2,1]]]);
//# sourceMappingURL=main.01e64663.chunk.js.map