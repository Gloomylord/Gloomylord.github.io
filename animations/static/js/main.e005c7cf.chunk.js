(this.webpackJsonptryJest=this.webpackJsonptryJest||[]).push([[0],{13:function(n,e,t){n.exports=t(22)},18:function(n,e,t){},19:function(n,e,t){},22:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(9),o=t.n(i),l=(t(18),t(1)),c=(t(19),t(2));function u(){var n=Object(l.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 10px;\n    background: linear-gradient(to top, #008aff, #00ffe7);\n    animation: animate 5s linear infinite;\n    :before {\n      content: '';\n      position: absolute;\n      top:0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: linear-gradient(to top, #008aff, #00ffe7);\n      filter: blur(10px);\n    }\n    :after {\n      content: '';\n      position: absolute;\n      top:0;\n      left: 0;\n      width: 100%;\n      height: 100%;\n      background: linear-gradient(to top, #008aff, #00ffe7);\n      filter: blur(30px);\n    }\n"]);return u=function(){return n},n}function s(){var n=Object(l.a)(["\n    position: fixed;\n    top: 0;\n    right: 0;\n    width: 10px;\n    height: 100%;\n    background: rgba(255,255,255,0.1);\n"]);return s=function(){return n},n}var d=c.a.div(s()),f=c.a.div(u());var p=function(){var n=Object(a.useRef)(null);return Object(a.useEffect)((function(){(null===n||void 0===n?void 0:n.current)&&(console.log("here"),window.onscroll=function(){var e=document.body.scrollHeight-window.innerHeight,t=window.pageYOffset/e*100;n.current.style.height=t+"%"})}),[n]),r.a.createElement(d,null,r.a.createElement(f,{ref:n}))};function m(){var n=Object(l.a)(["\n    position: absolute;\n    display: block;\n    border: 15px solid #fff;\n    box-sizing: border-box;\n    border-radius: 50%;\n    box-shadow:  0 10px 0 #e0e0e0, inset 0 10px 0 #e0e0e0;\n    animation: loader 4.5s ease-in-out infinite;\n    transform: translateZ(300px);\n"]);return m=function(){return n},n}function h(){var n=Object(l.a)(["\n    padding: 0;\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n    height: 50%;\n    width: 50%;\n    border-radius: 50%;\n    transform-style: preserve-3d;\n    transform: perspective(500px) rotateX(45deg);\n    .first-loader-element {\n      animation-delay: 0s;\n    }\n    .second-loader-element {\n      animation-delay: 1.5s;\n    }\n    .third-loader-element {\n      animation-delay: 3s;\n    }\n"]);return h=function(){return n},n}function b(){var n=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    display: flex;\n    position: relative;\n    justify-content: center;\n    align-items: center;\n"]);return b=function(){return n},n}var g=c.a.div(b()),v=c.a.div(h()),x=c.a.span(m());var E=function(n){return n.num,r.a.createElement(g,null,r.a.createElement(v,null,r.a.createElement(x,{className:"first-loader-element"}),r.a.createElement(x,{className:"second-loader-element"}),r.a.createElement(x,{className:"third-loader-element"})))};function y(){var n=Object(l.a)(["\n    position: relative;\n    padding: 20px 50px;\n    margin: 20vh 0;\n    color: #03e9f4;\n    text-transform: uppercase;\n    font-size: 18px;\n    letter-spacing: 2px;\n    border: 0;\n    overflow: hidden;\n    cursor: pointer;\n    transition: 0.5s;\n    background: rgba(97,218,251,0);\n    -webkit-box-reflect: below 1px linear-gradient(\n      transparent,#0005);\n    :hover {       \n        background: #03e9f4;\n        color: #050801;\n        box-shadow: 0 0 5px #03e9f4,\n         0 0 25px #03e9f4,\n         0 0 50px #03e9f4,\n         0 0 150px #03e9f4;  \n    }\n    > span {\n        position: absolute;\n        display: block;\n    }\n    .neon-button_nth-child1 {\n        top: 0;\n        left: -100%;\n        width: 100%;\n        height: 2px;\n        background: linear-gradient(90deg, transparent, #03e9f4);\n        transition: 0.5s;\n        animation: animate1 1s linear infinite;\n    }\n    .neon-button_nth-child2 {\n        top: -100%;\n        right: 0;\n        width: 2px;\n        height: 100%;\n        background: linear-gradient(180deg, transparent, #03e9f4);\n        animation: animate2 1s linear infinite;\n        animation-delay: 0.25s;\n    }\n    .neon-button_nth-child3 {\n        bottom: 0;\n        left: 100%;\n        width: 100%;\n        height: 2px;\n        background: linear-gradient(-90deg, transparent, #03e9f4);\n        animation: animate3 1s linear infinite;\n        animation-delay: 0.5s;\n    }\n    .neon-button_nth-child4 {\n        top: 100%;\n        left: 0;\n        width: 2px;\n        height: 100%;\n        background: linear-gradient(0deg, transparent, #03e9f4);\n        animation: animate4 1s linear infinite;\n        animation-delay: 0.75s;\n    }\n    ","\n"]);return y=function(){return n},n}var w=c.a.button(y(),(function(n){return n.f?"filter: hue-rotate(".concat(n.f,")"):""}));var k=function(n){var e=n.num,t=n.filter,i=Object(a.useRef)(null);return r.a.createElement(w,{f:t,ref:i,num:e,onClick:function(n){if(null===i||void 0===i?void 0:i.current){var e=n.clientX-i.current.getBoundingClientRect().left,t=n.clientY-i.current.getBoundingClientRect().top,a=document.createElement("span");a.style.left=e+"px",a.style.top=t+"px",i.current.append(a),setTimeout((function(){a.remove()}),1e3)}}},r.a.createElement("span",{className:"neon-button_nth-child1"}),r.a.createElement("span",{className:"neon-button_nth-child2"}),r.a.createElement("span",{className:"neon-button_nth-child3"}),r.a.createElement("span",{className:"neon-button_nth-child4"}),"Neon")};function _(){var n=Object(l.a)(["\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    left: 0;\n    top: 0;\n    background: ",";\n    z-index: 0;\n    >h2 {\n        color: ",";\n        position: relative;\n        font-size: 140px;\n    }\n"]);return _=function(){return n},n}function j(){var n=Object(l.a)(["\n    width: 100vw;\n    height: 100vh;\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    left: 0;\n    top: 0;\n    background: ",";\n    z-index: 1;\n    -webkit-clip-path: polygon(0 0, 55% 0, 45% 100%, 0% 100%);\n    clip-path: polygon(0 0, 55% 0, 45% 100%, 0% 100%);\n    >h2 {\n        color: ",";\n        position: relative;\n        font-size: 140px;\n    }\n"]);return j=function(){return n},n}function O(){var n=Object(l.a)(["\n    width: 100vw;\n    height: 100vh;\n    position: relative;\n    overflow: hidden;\n"]);return O=function(){return n},n}var N=c.a.div(O()),X=c.a.div(j(),"#4ea9eb","#ffffff"),Y=c.a.div(_(),"#ffffff","#4ea9eb");var B=function(){var n=Object(a.useRef)(null),e=Object(a.useRef)(null),t=Object(a.useRef)(null);return Object(a.useEffect)((function(){(null===n||void 0===n?void 0:n.current)&&(null===e||void 0===e?void 0:e.current)&&(null===t||void 0===t?void 0:t.current)&&document.body.addEventListener("mousemove",(function(a){var r=t.current.getBoundingClientRect().width,i=t.current.getBoundingClientRect().height,o=(r/2-a.clientX)/10,l=(i/2-a.clientY)/10;n.current.style.transform="translate(".concat(o,"px,").concat(l,"px)"),e.current.style.transform="translate(".concat(o,"px,").concat(l,"px)")}))}),[n]),r.a.createElement(N,{ref:t},r.a.createElement(X,null,r.a.createElement("h2",{ref:n},"Parallax")),r.a.createElement(Y,null,r.a.createElement("h2",{ref:e},"Parallax")))};function R(){var n=Object(l.a)(["\n     border-radius: 50%;\n     position: relative;\n     width: 510px;  \n     height: 510px;\n     > span {\n          border-radius: 50%;\n          position: absolute;\n          display: block;\n          background: ",";\n          animation: sqrt 12s ease-in-out infinite;\n          :after{\n            border-radius: 50%;\n          }\n          :before {\n            border-radius: 50%;\n          }\n     }\n     span:nth-child(2n ) {\n        background: "," ;\n     }\n     \n     span:nth-child(2n ):before {\n        content: '';\n        position: absolute;\n        top:50%;\n        left: 0;\n        width: 100%;\n        height:50%;\n        background: ",";\n        transform: translateY(-50%);\n     }\n     span:nth-child(2n ):after {\n        content: '';\n        position: absolute;\n        top:0;\n        left: 50%;\n        width: 50%;\n        height:100%;\n        background: ",";\n        transform: translateX(-50%);\n     }\n     span:nth-child(2n-1):before {\n        content: '';\n        position: absolute;\n        top:50%;\n        left: 0;\n        width: 100%;\n        height:50%;\n        background: ",";\n        transform: translateY(-50%);\n     }\n     span:nth-child(2n-1):after {\n        content: '';\n        position: absolute;\n        top:0;\n        left: 50%;\n        width: 50%;\n        height:100%;\n        background: ",";\n        transform: translateX(-50%);\n     }\n     \n     span:nth-child(1) {\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        animation-delay: 0.9s;\n     }\n     span:nth-child(2) {\n        top: 30px;\n        left: 30px;\n        bottom: 30px;\n        right: 30px;\n        animation-delay: 0.8s;\n     }\n     span:nth-child(3) {\n        top: 60px;\n        left: 60px;\n        bottom: 60px;\n        right: 60px;\n        animation-delay: 0.7s;\n     }\n     span:nth-child(4) {\n        top: 90px;\n        left: 90px;\n        bottom: 90px;\n        right: 90px;\n        animation-delay: 0.6s;\n     }\n     span:nth-child(5) {\n        top: 120px;\n        left: 120px;\n        bottom: 120px;\n        right: 120px;\n        animation-delay: 0.5s;\n     }\n     span:nth-child(6) {\n        top: 150px;\n        left: 150px;\n        bottom: 150px;\n        right: 150px;\n        animation-delay: 0.4s;\n     }\n     span:nth-child(7) {\n        top: 180px;\n        left: 180px;\n        bottom: 180px;\n        right: 180px;\n        animation-delay: 0.3s;\n     }\n     span:nth-child(8) {\n        top: 210px;\n        left: 210px;\n        bottom: 210px;\n        right: 210px;\n        animation-delay: 0.2s;\n     }\n     span:nth-child(9) {\n        top: 240px;\n        left: 240px;\n        bottom: 240px;\n        right: 240px;\n        animation-delay: 0.1s;\n     }\n     \n"]);return R=function(){return n},n}function C(){var n=Object(l.a)(["\n    width: 100vw;\n    height: 100vh;\n    min-height: 750px ;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    overflow: hidden;\n    background: ",";\n"]);return C=function(){return n},n}var z=c.a.div(C(),"#055522"),J=c.a.div(R(),"#055522","#fff7f2","#055522","#055522","#fff7f2","#fff7f2");var L=function(){return r.a.createElement(z,null,r.a.createElement(J,null,r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null),r.a.createElement("span",null)))},M=t(5),P=t.n(M),W=[1,1,1,1,1,1,1,1,1];var A=function(){return r.a.createElement("div",{className:P.a.container},r.a.createElement("div",{className:P.a.circle},W.map((function(n,e){return r.a.createElement("span",{key:e,className:P.a.side,style:{"--i":e+1}})}))))};function G(){var n=Object(l.a)(["\n    width: 100px;\n    height: 100px;\n    background: #fff;\n    display: inline-block;\n    border-radius: 50%;\n    margin: 0 10px;\n    animation: wavering 5s ease-in-out infinite;\n    filter: blur(25px);\n    cursor: pointer;\n    position: relative;\n    top: 0;\n    left: 0;\n    :before {\n          content: '';\n          position: absolute;\n          top: -","px;\n          left: -","px;\n          right: -","px;\n          bottom: -","px;\n          background: #fff;\n          border-radius: 50% ;\n          z-index: -1;\n          filter: blur(20px);          \n    }\n    ","\n"]);return G=function(){return n},n}var Q=c.a.div(G(),20,20,20,20,(function(n){return n.i%2===0?"\n            :before{\n                  background: linear-gradient(90deg,#f00,#0ff);\n                  animation: rotate1 6s linear infinite;\n            }\n            background: linear-gradient(90deg,#f00,#0ff);\n            ":":before{\n                background: linear-gradient(90deg,#ffeb3b,#da00ff);\n                animation: rotate2 6s linear infinite;\n            }\n            background: linear-gradient(90deg,#ffeb3b,#da00ff);\n            "}));var S=function(n){var e=n.ContainerRef,t=n.index,i=Object(a.useRef)(null);return Object(a.useEffect)((function(){if(i&&e){var n=0,t=0;i.current.onmousedown=function(e){document.body.style.cursor="grabbing",i.current.style.cursor="grabbing";var a=e.clientX-n,r=e.clientY-t;function o(e,o){i.current.style.left=e-a+"px",i.current.style.top=o-r+"px",n=e-a,t=o-r}function l(n){console.log(n.clientX,n.clientY),o(n.clientX,n.clientY),i.current.style.visibility="hidden";var e=document.elementFromPoint(n.clientX,n.clientY);(i.current.style.visibility="visible",e)?e.closest(".droppable")||(document.removeEventListener("mousemove",l),document.body.style.cursor="",i.current.style.cursor=""):document.removeEventListener("mousemove",l)}o(e.clientX,e.clientY),document.addEventListener("mousemove",l),document.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",l),document.body.style.cursor="",i.current.style.cursor=""}))},i.current.ondragstart=function(){return!1}}})),r.a.createElement(Q,{ref:i,i:t})};function H(){var n=Object(l.a)(["\n    width: 100vw;\n    height: 600px;\n    position: relative;\n    overflow: hidden;\n    background: ",' ;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    //filter: contrast(50);\n    -webkit-filter: url("#goo");\n    \n    > div {\n          filter: url(#filter);\n    }\n    > svg {\n        width: 0;\n        height: 0;\n    }\n']);return H=function(){return n},n}for(var T=[],Z=0;Z<5;Z++)T[Z]=Z+1;var q=c.a.div(H(),"#000");var D=function(){var n=Object(a.useRef)(null);return r.a.createElement(q,{className:"droppable",ref:n},r.a.createElement("div",null,T.map((function(e){return r.a.createElement(S,{ContainerRef:n,index:e})}))),r.a.createElement("svg",null,r.a.createElement("defs",null,r.a.createElement("filter",{id:"filter"},r.a.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10"}),r.a.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"filter"})))))},F=t(3),I=t.n(F),U=[1,2,3,4];var $=function(){return r.a.createElement("div",{className:I.a.box},r.a.createElement("div",{className:I.a.shape},U.map((function(n){return r.a.createElement("div",{className:I.a.side})}))))},K=[1,2,3,4];var V=function(){return r.a.createElement("div",{className:I.a.block},K.map((function(n){return r.a.createElement($,null)})))},nn=[1,2,3];var en=function(){return r.a.createElement("div",{className:I.a.main},r.a.createElement("div",{className:I.a.container},nn.map((function(n,e){return r.a.createElement(V,{key:e})}))))};function tn(){var n=Object(l.a)(["\n    display: flex;\n    align-self: center;\n    margin: 0;\n    justify-content: space-around;\n    flex-direction: column;\n    align-items: center;\n    ","\n"]);return tn=function(){return n},n}var an=c.a.div(tn(),(function(n){return(n.Y?"height: ".concat(n.Y," ;"):"")+(n.X?"width: ".concat(n.X," ;"):"")+(n.bg?"background: ".concat(n.bg," ;"):"")+(n.br?"border-radius: ".concat(n.br," ;"):"")+(n.fd?"flex-direction: ".concat(n.fd," ;"):"")}));var rn=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},r.a.createElement(an,{X:"100vw",Y:"calc(100vh)"},r.a.createElement(an,{X:"550px",Y:"550px",bg:"radial-gradient(rgb(120,213,255),rgba(0,129,232,0))",br:"50%"},r.a.createElement(E,null)),r.a.createElement("h1",null,"Scroll to see more")),r.a.createElement(an,{X:"100vw",Y:"calc(100vh)",bg:"#050801",fd:"row"},r.a.createElement(k,null),r.a.createElement(k,{filter:"290deg"}),r.a.createElement(k,{filter:"110deg"})),r.a.createElement(D,null),r.a.createElement(A,null),r.a.createElement(L,null),r.a.createElement(B,null),r.a.createElement(en,null),r.a.createElement(p,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(rn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))},3:function(n,e,t){n.exports={main:"Box3d_main__1QXas",container:"Box3d_container__kWEkE",animate:"Box3d_animate__yQNvP",side:"Box3d_side__2or-z",block:"Box3d_block__32TQi",box:"Box3d_box__MeMkY",shape:"Box3d_shape__2kWNp"}},5:function(n,e,t){n.exports={container:"Circle2_container__20dJG",circle:"Circle2_circle__1A5XB",side:"Circle2_side__17i4o",rotate:"Circle2_rotate__2ZU1J"}}},[[13,1,2]]]);
//# sourceMappingURL=main.e005c7cf.chunk.js.map