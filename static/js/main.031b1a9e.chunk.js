(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,a,t){e.exports=t(22)},16:function(e,a,t){},18:function(e,a,t){},20:function(e,a,t){},22:function(e,a,t){"use strict";t.r(a);var i=t(0),s=t.n(i),n=t(8),r=t.n(n),l=t(1),c=t(2),o=t(4),d=t(3),m=t(5),g=t(9);t(16);var u=function(e){return s.a.createElement("nav",{className:"navbar navbar-light",id:e.color},s.a.createElement("div",{id:"title"},s.a.createElement("a",{className:"navbar-brand",href:"/index"},"Memory Game")),s.a.createElement("div",{id:"navbarText"},e.middle),s.a.createElement("div",{id:"scores"},"Your Score: ",e.clicks," | Highest Score: ",e.highest))};var h=function(){return s.a.createElement("div",{className:"jumbotron jumbotron-fluid"},s.a.createElement("div",{className:"container"},s.a.createElement("h1",{className:"display-4"},"Memory Game!"),s.a.createElement("p",{className:"lead"},"Click on the images to get points, but don't click on any more than once!")))},p=t(6);t(18);var f=function(e){return s.a.createElement("img",{src:e.input.image,alt:e.input.name,onClick:function(){return e.handleClicks(e.input)},className:"img-thumbnail click-card"})},k=(t(20),function(e){function a(){var e,t;Object(l.a)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(t=Object(o.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(s)))).state={clicks:0,highest:0,guessStatus:"",notClicked:p,clicked:[],shuffledCards:p,headerColor:""},t.shuffleCards=function(){for(var e=t.state.shuffledCards,a=e.length-1;a>0;a--){var i=Math.floor(Math.random()*(a+1)),s=[e[i],e[a]];e[a]=s[0],e[i]=s[1]}console.log(e),t.setState({shuffledCards:e})},t.handleClicks=function(e){var a=Object(g.a)({},t.state);if(a.notClicked.indexOf(e)<0){a.headerColor="red";var i=a.notClicked.concat(a.clicked);a.notClicked=i;a.clicked=[],t.state.highest<t.state.clicks&&(a.highest=t.state.clicks),a.clicks=0,a.guessStatus="You guessed Incorrectly!",t.setState(a),t.shuffleCards()}else{a.headerColor="green";var s=a.notClicked.filter(function(a){return a.id!==e.id});a.notClicked=s,a.clicks=a.clicks+1,a.guessStatus="You guessed correctly!";var n=a.clicked.concat(e);a.clicked=n,t.setState(a),t.shuffleCards()}},t}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){var e=this;return s.a.createElement("div",null,s.a.createElement("div",{className:"header"},s.a.createElement(u,{middle:this.state.guessStatus,clicks:this.state.clicks,highest:this.state.highest,color:this.state.headerColor})),s.a.createElement("div",{className:"game-container"},s.a.createElement(h,null),s.a.createElement("div",{id:"click-game"},this.state.shuffledCards.filter(function(e){return e.id<=12}).map(function(a){return s.a.createElement(f,{input:a,key:a.id,handleClicks:e.handleClicks})}))))}}]),a}(i.Component));var v=function(){return s.a.createElement("div",{className:"footer"},s.a.createElement("div",{className:"container"},s.a.createElement("span",{className:"text-muted"},"This is a footer.")))},b=function(e){function a(){return Object(l.a)(this,a),Object(o.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(c.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(k,null),s.a.createElement(v,null))}}]),a}(i.Component);r.a.render(s.a.createElement(b,null),document.getElementById("root"))},6:function(e){e.exports=[{id:1,name:"Queen, Night at the Opera",image:"/assets/images/a-night-at-the-opera.jpg"},{id:2,name:"The Beatles, Abbey Road",image:"/assets/images/abbey-road.jpg"},{id:3,name:"David Bowie, Ziggy Stardust",image:"/assets/images/bowie_david_ziggystar.jpg"},{id:4,name:"Bruce Springsteen, Born to Run",image:"/assets/images/bruce-springsteen-born-to-run.jpg"},{id:5,name:"Jimi Hendrix, Axis",image:"/assets/images/Hendrix-axis.jpg"},{id:6,name:"Jimi Hendrix, Are You Experienced",image:"/assets/images/jimi-are-you-experenced.jpg"},{id:7,name:"Led Zeppelin I",image:"/assets/images/led_zeppelin_1.jpg"},{id:8,name:"Led Zeppelin II",image:"/assets/images/led-ii.jpg"},{id:9,name:"The Rolling Stones, Let it Bleed",image:"/assets/images/let-it-bleed.jpg"},{id:10,name:"The Clash, London Calling",image:"/assets/images/london-calling.jpg"},{id:11,name:"Pink Floyd, Dark Side of the Moon",image:"/assets/images/Pink-Floyd-Dark-Side-of-the-Moon-2017-billboard-1240-1024x1024.jpg"},{id:12,name:"Queen II",image:"/assets/images/queen-2.jpg"},{id:13,name:"The Beatles, Revolver",image:"/assets/images/revolver.jpeg"},{id:14,name:"The Beatles, Rubber Soul",image:"/assets/images/rubber-soul.jpg"},{id:15,name:"The Beatles, Sgt Peppers Lonely Hearts Club Band",image:"/assets/images/sgt-pepper.jpg"},{id:16,name:"Queen, Sheer Heart Attack",image:"/assets/images/SheerHeartAttack.jpg"},{id:17,name:"The Doors",image:"/assets/images/the-doors.jpg"},{id:18,name:"Pink Floyd, The Wall",image:"/assets/images/the-wall.jpg"},{id:19,name:"The Who, Who's Next",image:"/assets/images/whos-next.jpg"},{id:20,name:"Led Zeppelin, Physical Graffiti",image:"/assets/images/zeppelin-graffiti.jpg"}]}},[[10,2,1]]]);
//# sourceMappingURL=main.031b1a9e.chunk.js.map