(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{10:function(e,n,t){e.exports=t(16)},16:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(6),c=t.n(o),i=t(9),s=t(3),d=t(2);function l(){var e=Object(s.a)(["\n  background: #fff;\n"]);return l=function(){return e},e}function u(){var e=Object(s.a)(["\n  transition: transform 1s;\n  transform-style: preserve-3d;\n  color: white;\n  width: 100%;\n  backface-visibility: hidden;\n  font-size: 80px;\n"]);return u=function(){return e},e}function p(){var e=Object(s.a)(["\n  transform: rotateY(180deg);\n"]);return p=function(){return e},e}function m(){var e=Object(s.a)(["\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  border: 2px solid #fff;\n  margin: 10px;\n  border-radius: 5px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: transform 1s;\n  transformstyle: preserve-3d;\n  cursor: pointer;\n"]);return m=function(){return e},e}var f=Object(d.a)(m()),b=Object(d.a)(p()),v=Object(d.a)(u()),h=Object(d.a)(l()),g=function(e){return Object(d.b)("div",{css:[f,e.flipped&&b],onClick:e.flipCard(e.index)},Object(d.b)("span",{css:[v,e.flipped&&h]},e.flipped?e.symbol:"\u272e"))},x={background:"#009951",borderRadius:"15px",padding:20,display:"flex",flexFlow:"row wrap",maxWidth:"500px",margin:"0 auto",perspective:"800px"};function y(e){var n=e.board,t=e.flipCard;return r.a.createElement("div",{style:x},n.cards.map((function(e,a){return r.a.createElement(g,{key:a,symbol:e.symbol,index:e.position,flipCard:t,flipped:-1!==n.opened.indexOf(e.position)||-1!==n.matches.indexOf(e.position)})})))}var O={textAlign:"center",borderRadius:"5px",background:"#00743D",padding:10,color:"#fff",lineHeight:2};function E(e){var n=e.matches,t=e.total,a=e.moves,o=e.restartGame;return r.a.createElement("div",{style:O},r.a.createElement("div",null,n===t?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{role:"img","aria-label":"Tada!"},"\ud83c\udf89"),r.a.createElement("button",{onClick:o},"Restart game")):"".concat(n,"/").concat(t)),"Moves: ",a)}var j={background:"#009951",borderRadius:"15px",padding:30};function k(e){var n=e.children;return r.a.createElement("div",{style:j},n)}var C=t(4),w=t(1),R=Object(w.a)("\ud83d\ude34\ud83d\ude03\ud83c\udfa0\ud83d\ude93\ud83d\ude87\ud83d\udc36\ud83c\udf02\ud83d\udc37\ud83e\udd81\ud83d\udc38"),T=t(8),A=t.n(T);var I=function(e){return A()([].concat(Object(w.a)(e),Object(w.a)(e))).map((function(e,n){return{symbol:e,position:n}}))},F={cards:I(R),opened:[],matches:[],moves:0};function G(e,n){switch(n.type){case"FLIP_CARD":var t=n.payload,a=t.index,r=t.tick;return-1!==e.opened.indexOf(a)||-1!==e.matches.indexOf(a)?e:Object(C.a)({},e,{moves:1===e.opened.length?e.moves+1:e.moves,opened:2===e.opened.length?[a]:[].concat(Object(w.a)(e.opened),[a]),matches:[].concat(Object(w.a)(e.matches),Object(w.a)(1===e.opened.length&&e.cards[e.opened[0]].symbol===e.cards[a].symbol?[e.opened[0],a]:[])),tick:r});case"RESET_GAME":return{cards:I(R),opened:[],matches:[],moves:0};case"TICK":return 2===e.opened.length?Object(C.a)({},e,{opened:[]}):e;default:throw new Error}}var _=function(){var e=r.a.useReducer(G,F),n=Object(i.a)(e,2),t=n[0],a=n[1],o=r.a.useCallback((function(){a({type:"RESET_GAME"})}),[]),c=r.a.useCallback((function(e){return function(){a({type:"FLIP_CARD",payload:{index:e}})}}),[]);return r.a.useEffect((function(){var e=setTimeout((function(){a({type:"TICK"})}),2e3);return function(){return clearTimeout(e)}}),[t.opened]),r.a.createElement(k,null,r.a.createElement(y,{flipCard:c,board:t}),r.a.createElement(E,{matches:t.matches.length,total:t.cards.length,moves:t.moves,restartGame:o}))};c.a.render(r.a.createElement(_,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.b38eb2f3.chunk.js.map