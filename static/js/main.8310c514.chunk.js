(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,t){e.exports=t(25)},20:function(e,a,t){},25:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),o=t(7),r=t.n(o),i=(t(20),t(28)),c=t(27),s=t(26),m=function(){return l.a.createElement("ul",{className:"nav nav-tabs"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.a,{to:"/game",className:"/game"===window.location.pathname?"nav-link active":"nav-link"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(s.a,{to:"/game/about",className:"/game/about"===window.location.pathname?"nav-link active":"nav-link"},"About")))},u=t(8),d=t(11),h=t(9),g=t(12),p=function(e){function a(){var e,t;Object(u.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(o)))).state={gameInstance:null},t.componentDidMount=function(){t.setState({gameInstance:window.UnityLoader.instantiate("gameContainer","/game/content/game/Build/game.json",{onProgress:window.UnityProgress})})},t.handleClick=function(){t.state.gameInstance.SetFullscreen(1)},t.render=function(){return l.a.createElement("div",{className:"webgl-content"},l.a.createElement("div",{id:"gameContainer"}),l.a.createElement("div",{className:"footer"},l.a.createElement("div",{className:"webgl-logo"}),l.a.createElement("div",{className:"fullscreen",onClick:t.handleClick}),l.a.createElement("div",{className:"title"},"Word Typing Game")))},t}return Object(g.a)(a,e),a}(l.a.Component),w=function(){return l.a.createElement("div",{className:"about"},l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("h1",null,"About Type Knight"),l.a.createElement("p",null,"Are you looking for the best online typing game? Type Knight is a way to hone your keyboarding skills and have fun at the same time. Type Knight is an educational game where you learn to type words quickly. Your missions is to attempt to survive an attack by typing the words correctly. As the action heats up, the moving words will be falling in a higher speed, staying cool and calm will be your best stradedy. Once the game ends you will provide with a final score. Scores can be a good way to compare scores with a friend and start a friendly competition. Type Knight, overall, provides a fun environment to practice typing skills, just watch the clock, here and there, because Type Knight can be addictive and provide hours of enjoyment!"),l.a.createElement("br",null),l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("br",null),l.a.createElement("h1",null,"About Code-Vengers"),l.a.createElement("p",null,"Hello we are Maria Moreno, Richard Baylis, and William Lan also known as The Code-Vengers!! We are a group of self-driven, hard working and  quick learning individuals who love to challenge ourselves and use the latest technologies..... and that was our inspiration to create a game! We pushed ourselves not only to use software we know such as HTML5, CSS, JavaScript, React-JS, node, JSON, but learn new software like Unity and C#. Together as a team we challenged, helped and supported each other to create \u201cType Knight\u201d. We truly hope you enjoy playing it as much as we enjoyed making it!!"),l.a.createElement("hr",null))},y=function(){return l.a.createElement(i.a,null,l.a.createElement("div",null,l.a.createElement(m,null),l.a.createElement(c.a,{exact:!0,path:"/game",component:p}),l.a.createElement(c.a,{exact:!0,path:"/game/about",component:w})))};r.a.render(l.a.createElement(y,null),document.getElementById("root"))}},[[14,2,1]]]);
//# sourceMappingURL=main.8310c514.chunk.js.map