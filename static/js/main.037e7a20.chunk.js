(this["webpackJsonpmemory-game"]=this["webpackJsonpmemory-game"]||[]).push([[0],{13:function(e,t,i){},15:function(e,t,i){},17:function(e,t,i){},18:function(e,t,i){"use strict";i.r(t);var s=i(2),n=i.n(s),a=i(8),o=i.n(a),r=(i(13),i(7)),d=i(3),m=i(1),g=function(e){return Object(m.jsxs)("div",{className:"score",children:[Object(m.jsxs)("p",{children:["Current Score: ",e.currentScore]}),Object(m.jsxs)("p",{children:["Best Score: ",e.bestScore]})]})},c=(i(15),function(e){return Object(m.jsxs)("div",{className:"game-tile",onClick:function(t){e.addPresident(t),e.generateGameBoard()},id:e.president.name,children:[Object(m.jsx)("div",{className:"game-tile__portrait",children:Object(m.jsx)("img",{src:e.president.img,alt:""})}),Object(m.jsx)("div",{className:"game-tile__name",children:e.president.name})]})}),f=function(e){return Object(m.jsx)("div",{className:"game-board",children:e.roundPresidents.map((function(t){return Object(m.jsx)(c,{president:t,generateGameBoard:e.generateGameBoard,addPresident:e.addPresident},t.id)}))})},l={pass:["Amazing Job!","Not Bad!","You've got a knack for this!","Impressive!"],fail:["Game Over","You've picked that one before!"]},j=function(e){return Object(m.jsxs)("div",{children:[!1===e.didWin&&!0===e.didPass&&Object(m.jsx)("p",{className:"pass-alert",children:l.pass[Math.floor(Math.random()*l.pass.length)]}),!1===e.didPass&&Object(m.jsx)("div",{className:"game-over",children:"Game Over"}),e.didWin&&Object(m.jsxs)("div",{className:"win-alert",children:["Congratulations you won!",Object(m.jsx)("button",{onClick:e.resetGame,children:"play again"})," "]})]})},p=i(0),h=i.n(p),u=(i(17),[{name:"George Washington",img:"images/List-of-presidents-of-the-United-States/George-Washington.jpg",id:h()()},{name:"John Adams",img:"images/List-of-presidents-of-the-United-States/John-Adams.jpg",id:h()()},{name:"Thomas Jefferson",img:"images/List-of-presidents-of-the-United-States/Thomas-Jefferson.jpg",id:h()()},{name:"James Madison",img:"images/List-of-presidents-of-the-United-States/James-Madison.jpg",id:h()()},{name:"James Monroe",img:"images/List-of-presidents-of-the-United-States/James-Monroe.jpg",id:h()()},{name:"John Quincy Adams",img:"images/List-of-presidents-of-the-United-States/John-Quincy-Adams.jpg",id:h()()},{name:"Andrew Jackson",img:"images/List-of-presidents-of-the-United-States/Andrew-Jackson.jpg",id:h()()},{name:"Martin Van Buren",img:"images/List-of-presidents-of-the-United-States/Martin-Van-Buren.jpg",id:h()()},{name:"William Henry Harrison",img:"images/List-of-presidents-of-the-United-States/William-Henry-Harrison.jpg",id:h()()},{name:"John Tyler",img:"images/List-of-presidents-of-the-United-States/John-Tyler.jpg",id:h()()},{name:"James K. Polk",img:"images/List-of-presidents-of-the-United-States/James-K.-Polk.jpg",id:h()()},{name:"Zachary Taylor",img:"images/List-of-presidents-of-the-United-States/Zachary-Taylor.jpg",id:h()()},{name:"Millard Fillmore",img:"images/List-of-presidents-of-the-United-States/Millard-Fillmore.jpg",id:h()()},{name:"Franklin Pierce",img:"images/List-of-presidents-of-the-United-States/Franklin-Pierce.jpg",id:h()()},{name:"James Buchanan",img:"images/List-of-presidents-of-the-United-States/James-Buchanan.jpg",id:h()()},{name:"Abraham-Lincoln",img:"images/List-of-presidents-of-the-United-States/Abraham-Lincoln.jpg",id:h()()},{name:"Andrew Johnson",img:"images/List-of-presidents-of-the-United-States/Andrew-Johnson.jpg",id:h()()},{name:"Ulysses S. Grant",img:"images/List-of-presidents-of-the-United-States/Ulysses-S.-Grant.jpg",id:h()()},{name:"Rutherford B. Hayes",img:"images/List-of-presidents-of-the-United-States/Rutherford-B.-Hayes.jpg",id:h()()},{name:"James A. Garfield",img:"images/List-of-presidents-of-the-United-States/James-A.-Garfield.jpg",id:h()()},{name:"Chester A. Arthur",img:"images/List-of-presidents-of-the-United-States/Chester-A.-Arthur.jpg",id:h()()},{name:"Grover Cleveland",img:"images/List-of-presidents-of-the-United-States/Grover-Cleveland.jpg",id:h()()},{name:"Benjamin Harrison",img:"images/List-of-presidents-of-the-United-States/Benjamin-Harrison.jpg",id:h()()},{name:"William McKinley",img:"images/List-of-presidents-of-the-United-States/William-McKinley.jpg",id:h()()},{name:"Theodore Roosevelt",img:"images/List-of-presidents-of-the-United-States/Theodore-Roosevelt.jpg",id:h()()},{name:"William Howard Taft",img:"images/List-of-presidents-of-the-United-States/William-Howard-Taft.jpg",id:h()()},{name:"Woodrow Wilson",img:"images/List-of-presidents-of-the-United-States/Woodrow-Wilson.jpg",id:h()()},{name:"Warren G. Harding",img:"images/List-of-presidents-of-the-United-States/Warren-G.-Harding.jpg",id:h()()},{name:"Calvin Coolidge",img:"images/List-of-presidents-of-the-United-States/Calvin-Coolidge.jpg",id:h()()},{name:"Herbert Hoover",img:"images/List-of-presidents-of-the-United-States/Herbert-Hoover.jpg",id:h()()},{name:"Franklin D. Roosevelt",img:"images/List-of-presidents-of-the-United-States/Franklin-D.-Roosevelt.jpg",id:h()()},{name:"Harry S. Truman",img:"images/List-of-presidents-of-the-United-States/Harry-S.-Truman.jpg",id:h()()},{name:"Dwight D. Eisenhower",img:"images/List-of-presidents-of-the-United-States/Dwight-D.-Eisenhower.jpg",id:h()()},{name:"John F. Kennedy",img:"images/List-of-presidents-of-the-United-States/John-F.-Kennedy.jpg",id:h()()},{name:"Lyndon B. Johnson",img:"images/List-of-presidents-of-the-United-States/Lyndon-B.-Johnson.jpg",id:h()()},{name:"Richard Nixon",img:"images/List-of-presidents-of-the-United-States/Richard-Nixon.jpg",id:h()()},{name:"Gerald Ford",img:"images/List-of-presidents-of-the-United-States/Gerald-Ford.jpg",id:h()()},{name:"Jimmy Carter",img:"images/List-of-presidents-of-the-United-States/Jimmy-Carter.jpg",id:h()()},{name:"Ronald Reagan",img:"images/List-of-presidents-of-the-United-States/Ronald-Reagan.jpg",id:h()()},{name:"George H. W. Bush",img:"images/List-of-presidents-of-the-United-States/George-H.-W.-Bush.jpg",id:h()()},{name:"Bill Clinton",img:"images/List-of-presidents-of-the-United-States/Bill-Clinton.jpg",id:h()()},{name:"George W. Bush",img:"images/List-of-presidents-of-the-United-States/George-W.-Bush.jpeg",id:h()()},{name:"Barack Obama",img:"images/List-of-presidents-of-the-United-States/Barack-Obama.jpg",id:h()()},{name:"Donald Trump",img:"images/List-of-presidents-of-the-United-States/Donald-Trump.jpg",id:h()()},{name:"Joe Biden",img:"images/List-of-presidents-of-the-United-States/Joe-Biden.jpg",id:h()()}]),b=[{rounds:5,presidents:5},{rounds:7,presidents:7},{rounds:10,presidents:10}],S=function(){var e=Object(s.useState)([]),t=Object(d.a)(e,2),i=t[0],n=t[1],a=Object(s.useState)([]),o=Object(d.a)(a,2),c=o[0],l=o[1],p=Object(s.useState)([]),h=Object(d.a)(p,2),S=h[0],O=h[1],L=Object(s.useState)(""),U=Object(d.a)(L,2),v=U[0],J=U[1],y=Object(s.useState)(!1),x=Object(d.a)(y,2),B=x[0],G=x[1],k=Object(s.useState)(0),C=Object(d.a)(k,2),W=C[0],H=C[1],w=Object(s.useState)(0),A=Object(d.a)(w,2),M=A[0],T=A[1],N=Object(s.useState)(1),P=Object(d.a)(N,2),R=P[0],E=P[1],F=Object(s.useState)(1),D=Object(d.a)(F,2),K=D[0],_=D[1],I=Object(s.useCallback)((function(){W>M&&T(W)}),[M,W]),Q=Object(s.useCallback)((function(){for(var e=[].concat(u),t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),s=[e[i],e[t]];e[t]=s[0],e[i]=s[1]}var n=b[R-1].presidents,a=e.slice(0,n);O(a)}),[R]),V=Object(s.useCallback)((function(){for(var e=Object(r.a)(S),t=e.length-1;t>0;t--){var i=Math.floor(Math.random()*(t+1)),s=[e[i],e[t]];e[t]=s[0],e[i]=s[1]}l(e)}),[S]),Y=Object(s.useCallback)((function(){_(!0===v?K+1:1)}),[i]),Z=Object(s.useCallback)((function(){!0===v&&K===b[R-1].rounds+1&&(R===b.length?G(!0):(n([]),J(""),_(1),E(R+1)))}),[K]);return Object(s.useEffect)((function(){window.addEventListener("load",Q)}),[]),Object(s.useEffect)((function(){Z()}),[K,Z]),Object(s.useEffect)((function(){Q()}),[R,Q]),Object(s.useEffect)((function(){I(),H(i.length),Y()}),[i,v,B,I,Y]),Object(s.useEffect)((function(){v||(n([]),_(1))}),[v]),Object(s.useEffect)((function(){V()}),[S,V]),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"U.S. Presidents Memory Game"}),Object(m.jsx)("p",{className:"subtitle",children:"Don't pick the same president twice!"}),Object(m.jsxs)("div",{className:"game-progress",children:[Object(m.jsxs)("p",{children:["Level ",R]}),Object(m.jsxs)("p",{children:["Round ",K]})]}),Object(m.jsx)(g,{currentScore:W,bestScore:M}),Object(m.jsx)(j,{didPass:v,didWin:B,resetGame:function(){n([]),l([]),O([]),J(""),G(!1),H(0),E(1),_(1)}}),Object(m.jsx)(f,{roundPresidents:c,generateGameBoard:V,addPresident:function(e){var t=e.currentTarget.id;if(i.includes(t)){J(!1);var s=setTimeout((function(){J("")}),5e3);return function(){clearTimeout(s)}}var a=[].concat(Object(r.a)(i),[t]);n(a),J(!0)}})]})};o.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.037e7a20.chunk.js.map