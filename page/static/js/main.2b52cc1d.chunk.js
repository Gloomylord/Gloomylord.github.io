(this["webpackJsonpmy-page"]=this["webpackJsonpmy-page"]||[]).push([[0],{12:function(n,e,t){n.exports=t(21)},17:function(n,e,t){},18:function(n,e,t){},21:function(n,e,t){"use strict";t.r(e);var a=t(0),i=t.n(a),r=t(7),o=t.n(r),l=(t(17),t(1)),m=(t(18),t(2)),d=t(11);function c(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    text-align: left;\n    animation: appearance-right 500ms ease-out 1;\n    transform-origin: 0 50%;\n    animation-delay: 100ms;\n    > div {\n      color: #271c19;\n    }\n    \n    .full-name {\n      margin: 0 0 10px;\n      font-size: 24px;\n      color: #271c19;\n      font-weight: 600;\n      line-height: 1.5em;\n    } \n    \n    .location {\n      margin-top: 5px;\n      margin-left: 10px;\n    } \n    \n    .date-birth {\n      margin-left: 10px;\n    }\n    \n    .contacts {\n      margin: 20px 0;\n      font-size: 20px;\n      font-weight: 500;\n    }\n    \n    .mail {\n      margin-left: 10px;\n    }\n    \n    .phone {\n      margin-bottom: 5px;\n      margin-left: 10px;\n    }\n    @media (max-width: 600px) {\n      .full-name {\n          text-align: center;\n        } \n    }\n"]);return c=function(){return n},n}function p(){var n=Object(l.a)(["\n    min-width: 200px;\n    min-height: 200px;\n    //background: white;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    text-align: center;\n    align-self: start;\n    grid-area: 1/1/2/2;\n    animation: appearance-left 500ms ease-out 1;\n    animation-delay: 100ms;\n    img {\n      align-self: center;\n      width: 200px;\n      color: #271c19;\n    }\n    @media (max-width: 360px) {\n      .full-name {\n          text-align: center;\n        } \n    }\n"]);return p=function(){return n},n}function s(){var n=Object(l.a)(["\n    box-sizing: border-box;\n    display: grid;\n    grid-template-columns: 200px 1fr ;\n    grid-template-rows: 1fr;\n    grid-gap: 40px;\n    \n    @media (max-width: 600px) {\n      grid-template-columns: 1fr ;\n      grid-template-rows: 200px 1fr;\n      grid-gap: 20px;\n    }\n"]);return s=function(){return n},n}var x=m.a.div(s()),u=m.a.div(p()),f=m.a.div(c()),g=new Date(1997,7,16,0,0,0,0);var h=function(){var n=Object(a.useState)(function(n){var e=new Date;return e.getMonth()>n.getMonth()||e.getMonth()===n.getMonth()&&e.getDate()>=n.getDate()?e.getFullYear()-n.getFullYear():e.getFullYear()-n.getFullYear()-1}(g)),e=Object(d.a)(n,1)[0];return i.a.createElement(x,null,i.a.createElement(u,null,i.a.createElement("img",{alt:"\u0410\u0432\u0430\u0442\u0430\u0440",src:"https://react.semantic-ui.com/images/avatar/large/justen.jpg"})),i.a.createElement(f,null,i.a.createElement("h1",{className:"full-name"},"\u0414\u0438\u043c\u0438\u0442\u0440\u0438\u0439 \u0412\u043b\u0430\u0434\u0438\u043c\u0438\u0440\u043e\u0432\u0438\u0447 \u0418\u0432\u0430\u043d\u043e\u0432"),i.a.createElement("div",{className:"date-birth"},"\u041c\u0443\u0436\u0447\u0438\u043d\u0430, ",e," \u0433\u043e\u0434\u0430, \u0440\u043e\u0434\u0438\u043b\u0441\u044f 16 \u0430\u0432\u0433\u0443\u0441\u0442\u0430 1997"),i.a.createElement("div",{className:"location"},"\u041c\u043e\u0441\u043a\u0432\u0430. \u043c.\u0410\u044d\u0440\u043e\u043f\u043e\u0440\u0442"),i.a.createElement("h4",{className:"contacts"},"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),i.a.createElement("div",{className:"phone"},"+7 (985) 395-61-54"),i.a.createElement("div",{className:"mail"},"Saaboteur2012@yandex.ru")))};function v(){var n=Object(l.a)(["\n    background: #f8fb29;\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    display: grid;\n    border: 1px solid #b4b2b3;\n    grid-area: 1/1/2/2;\n    z-index: 10;\n    grid-template-columns: repeat(7,1fr);\n    grid-template-rows: repeat(6,1fr) ;\n    overflow: hidden;\n    align-self: start;\n    justify-self: center;\n    > div {\n        border-width: 3px  0;\n        height: 100%;\n        background: azure;\n        border:  solid #323232;\n        border-width: 3px  0;\n        border-radius: 100%;\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n        animation: eye-1 1s ease-in infinite alternate;\n        animation-delay: 1s;\n        align-self: center;\n        > div {\n          width: 10px;\n          height: 10px;\n          background: #5ab35a;\n          align-self: center;\n          border-radius: 50%;\n          position: relative;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;        \n          animation: eye-2 3s ease-in-out infinite alternate;\n          animation-delay: 1s;\n          > div {\n              animation: eye-3 3s ease-in infinite alternate;\n              animation-delay: 1s;\n              position: relative;\n              width: 2px;\n              height: 2px;\n              background: #000000;\n              align-self: center;\n              border-radius: 50%;\n          }\n        }\n    }\n    .left {\n      grid-area: 3/3/4/4;\n    }\n    .right {\n      grid-area: 3/5/4/6;\n    }\n    .mouth {\n      background: rgba(255,211,199,0);\n      border: solid #b90000;\n      border-top: 0;\n      grid-area: 5/3/6/6;\n      position: relative;\n      animation: mouth 1s ease-in infinite alternate;\n    }\n    \n"]);return v=function(){return n},n}function b(){var n=Object(l.a)(["\n  display: grid;\n  transform: scale(0) translate(0,0);\n  transform-origin: 75% 100%;\n  width: 200px;\n  height: 260px;\n  background: rgba(255,255,255,0.8);\n  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 85%, 75% 100%, 50% 80%, 0% 75%);\n  opacity: 0;\n  position: absolute;\n  bottom: 18px;\n  right: -11px;\n  transition: 400ms;\n  padding: 15px;\n"]);return b=function(){return n},n}var w=m.a.div(b()),E=m.a.div(v());var y=function(){return i.a.createElement(w,{className:"start"},i.a.createElement(E,null,i.a.createElement("div",{className:"right"},i.a.createElement("div",null,i.a.createElement("div",null))),i.a.createElement("div",{className:"left"},i.a.createElement("div",null,i.a.createElement("div",null))),i.a.createElement("div",{className:"mouth"})))};function j(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    text-align: left; \n    > div {\n      background-color: #464bd2;\n      width: 2px;\n      border: 0;\n      border-radius: 5px;\n      position: absolute;\n    }\n    .foot {\n      height: 7px;\n      transform-origin: 50% 1px;\n    }\n    .arm {\n      height:6px;\n      transform-origin: 50% 1px;\n    }\n    .body {\n      height:14px;\n      width: 4px;\n      top: 5px;\n      left: 10px;\n    }\n    .head {\n       top: 0;\n       left: 9px;\n       width: 6px;\n       height: 6px;\n    }\n    .arm-left-top {\n        transform: rotate(90deg);\n        top: 7px;\n        left: 10px;\n    }\n    .arm-right-top {     \n        transform: rotate(-90deg);\n        top: 7px;\n        left: 12px;\n    }\n    .arm-left-bottom {\n        animation: arm-left-bottom 1s infinite;\n        transform: rotate(135deg);\n        top: 7px;\n        left: 5px;\n    }\n    .arm-right-bottom {   \n        animation: arm-right-bottom 1s infinite;\n        transform: rotate(-135deg);\n        top: 7px;\n        left: 17px;\n    }\n    .foot-left-top {\n        transform: rotate(30deg);\n        top: 17px;\n        left: 10px;\n    }\n    .foot-right-top {\n        transform: rotate(-30deg);\n        top: 17px;\n        left: 12px;\n    }\n    .foot-left-bottom {\n        top:22px;\n        left: 7px;\n        transform: rotate(3deg);\n    }\n    .foot-right-bottom {\n        top:22px;\n        left: 15px;\n        transform: rotate(-3deg);\n    }\n"]);return j=function(){return n},n}function N(){var n=Object(l.a)(["\n    opacity: 0;\n    transition: 200ms;\n    box-sizing: border-box;\n    padding: 0;\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    height: 30px;\n    width: 24px;\n    margin-left: 10px;\n"]);return N=function(){return n},n}var k=m.a.div(N()),O=m.a.div(j());var z=function(){return i.a.createElement(k,null,i.a.createElement(O,null,i.a.createElement("div",{className:"head"}),i.a.createElement("div",{className:"arm arm-left-top"}),i.a.createElement("div",{className:"arm arm-left-bottom"}),i.a.createElement("div",{className:"arm arm-right-top"}),i.a.createElement("div",{className:"arm arm-right-bottom"}),i.a.createElement("div",{className:"foot foot-right-bottom"}),i.a.createElement("div",{className:"foot foot-left-top"}),i.a.createElement("div",{className:"foot foot-left-bottom"}),i.a.createElement("div",{className:"foot foot-right-top"}),i.a.createElement("div",{className:"body"})))};function S(){var n=Object(l.a)(["\n    line-height: 1.5em;\n    margin-left: 10px;\n    display: flex;\n    flex-direction: row;\n    align-self: start;\n    :hover {\n      > :nth-child(2){\n        opacity: 1;\n      }\n    }\n    > a {\n      align-self: center;\n      color: #e45858;\n      text-decoration: none;\n        :hover, :focus {\n          color: #bb5151;\n          cursor: pointer;\n        }\n        :active {\n          color: #993939;\n        }\n    } \n \n"]);return S=function(){return n},n}function M(){var n=Object(l.a)(["\n    line-height: 1.5em;\n    margin-left: 10px;\n    span {\n      position: relative;\n       color: #e45858;\n      :hover {\n        cursor: default;\n        .start {\n          transform: scale(1);         \n          opacity: 1;\n        }\n      }\n    }\n    @media (max-width: 1000px) {\n      text-align: justify;\n    }\n"]);return M=function(){return n},n}function J(){var n=Object(l.a)(["\n    display: grid;\n    padding: 0 10px ;\n    grid-row-gap: 30px;\n    grid-column-gap: 10px;\n    grid-template-columns: repeat(auto-fit, minmax(100px,1fr));\n    grid-auto-flow: dense;\n    > div {\n      padding: 5px 10px;\n      background-color: #6246ea;\n      color: #fffffe;\n      box-sizing: border-box;\n      border: 0;\n      border-radius: 3px;\n      font-size: 16px;\n      line-height: 1.5em;\n      word-wrap: break-word;\n      text-align: center;\n    }\n    .react-app  {\n      grid-column: span 2;\n    }\n    @media (max-width: 600px) {\n      grid-row-gap: 10px;\n    }\n    @media (max-width: 400px) {\n      grid-template-columns: 1fr;\n      .react-app  {\n         grid-column: span 1;\n      }\n      grid-column-gap: 5px;\n    }\n    @media (max-width: 310px) {\n      grid-column-gap: 5px;\n    }\n"]);return J=function(){return n},n}function D(){var n=Object(l.a)(["\n  display: grid;\n  grid-template-columns: minmax(70px,1fr) 10fr;\n  grid-column-gap: 10px;\n  > :first-child {\n    line-height: 1.5em;\n    box-sizing: border-box;\n    text-align: center;\n    animation: appearance-left 1s ease-out 1;\n    animation-delay: 100ms;\n  }\n  > :nth-child(2) {\n     animation: appearance-left 1s ease-out 1;\n     animation-delay: 100ms;\n     > :first-child {\n        margin-bottom: 5px;\n      }\n     line-height: 1.5em;\n  }\n  @media (max-width: 600px){\n    > :first-child {\n        padding: 0;\n      }\n  }\n  @media (max-width: 500px){\n      grid-template-columns: 1fr;\n      grid-template-rows: 25px 1fr;\n      >:nth-child(2) {\n        margin-left: 10px;\n        line-height: 1.5em;\n      }\n  }\n  \n"]);return D=function(){return n},n}function F(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    text-align: left; \n    > div {\n      color: #2b2c34;\n      animation: appearance-left 1s ease-out 1;\n      animation-delay: 100ms;\n      transform-origin: 0 0;\n    }\n    \n    .title {\n      color: #2b2c34;\n      margin: 10px 0;\n      font-size: 20px;\n      margin-top: 30px;\n      transform-origin: 0 0;\n      font-weight: 500;\n      animation: appearance-left 1s ease-out 1;\n    }\n    \n    .web {\n      margin: 10px 0;\n    }\n    \n    .point {\n      margin: 10px;\n    }\n    \n"]);return F=function(){return n},n}function R(){var n=Object(l.a)(["\n    box-sizing: border-box;\n    padding: 35px 30px;\n    padding-top: 0;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    @media (max-width: 600px) {\n      padding: 10px 0;\n    }\n"]);return R=function(){return n},n}var Y=m.a.div(R()),G=m.a.div(F()),W=m.a.div(D()),B=m.a.div(J()),C=m.a.div(M()),A=m.a.div(S());var H=function(){return i.a.createElement(Y,null,i.a.createElement(G,null,i.a.createElement("h4",{className:"title web"},"Web-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a"),i.a.createElement(B,null,i.a.createElement("div",{className:"java"},"JavaScript"),i.a.createElement("div",null,"CSS"),i.a.createElement("div",null,"HTML"),i.a.createElement("div",null,"Ajax"),i.a.createElement("div",{className:"java"},"ReactJS"),i.a.createElement("div",{className:"react-app"},"React-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"),i.a.createElement("div",null,"Redux"),i.a.createElement("div",null,"Git")),i.a.createElement("h4",{className:"title"},"\u041e \u0441\u0435\u0431\u0435"),i.a.createElement(C,null,"\u0412 \u043f\u043e\u0441\u043b\u0435\u0434\u043d\u0438\u0435 \u0433\u043e\u0434\u044b \u044f \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u043b \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435 \u0431\u0435\u0437 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u0430\u0442\u044c, \u043d\u043e \u0430\u043a\u0442\u0438\u0432\u043d\u043e \u0438\u0437\u0443\u0447\u0430\u043b JavaScript, React, \u0435\u0441\u0442\u044c \u043e\u043f\u044b\u0442 \u0440\u0430\u0431\u043e\u0442\u044b \u0441 next.js. \u041d\u0440\u0430\u0432\u0438\u0442\u044c\u0441\u044f \u0432\u0435\u0440\u0441\u0442\u0430\u0442\u044c \u0441\u0430\u0439\u0442\u044b \u0438 \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c ",i.a.createElement("span",null," CSS\xa0\u0430\u043d\u0438\u043c\u0430\u0446\u0438\u0438",i.a.createElement(y,null)," ")," \u0438\u043b\u0438 web-\u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f."),i.a.createElement("h4",{className:"title"},"\u041e\u0431\u0440\u0430\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),i.a.createElement("div",{className:"point"},"\u041d\u0435\u043e\u043a\u043e\u043d\u0447\u0435\u043d\u043d\u043e\u0435 \u0412\u044b\u0441\u0448\u0435\u0435"),i.a.createElement(W,null,i.a.createElement("div",null,"2020"),i.a.createElement("div",null,i.a.createElement("div",null,'\u041d\u0430\u0446\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u0442\u0435\u043b\u044c\u0441\u043a\u0438\u0439 \u044f\u0434\u0435\u0440\u043d\u044b\u0439 \u0443\u043d\u0438\u0432\u0435\u0440\u0441\u0438\u0442\u0435\u0442 "\u041c\u0418\u0424\u0418", \u041c\u043e\u0441\u043a\u0432\u0430'),"\u042d\u043a\u0441\u043f\u0435\u0440\u0438\u043c\u0435\u043d\u0442\u0430\u043b\u044c\u043d\u0430\u044f \u0438 \u0422\u0435\u043e\u0440\u0435\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0424\u0438\u0437\u0438\u043a\u0430, \u0422\u0435\u0445\u043d\u043e\u043b\u043e\u0433\u0438\u044f \u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u0438 \u044f\u0434\u0435\u0440\u043d\u043e\u0435 \u0442\u043e\u043f\u043b\u0438\u0432\u043e")),i.a.createElement("div",{className:"point"},"\u0421\u0440\u0435\u0434\u043d\u0435\u0435"),i.a.createElement(W,null,i.a.createElement("div",null,"2015"),i.a.createElement("div",null,i.a.createElement("div",null,"\u0424\u0438\u0437\u0438\u043a\u043e-\u043c\u0430\u0442\u0435\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043b\u0438\u0446\u0435\u0439 \u21163 \u0433\u043e\u0440\u043e\u0434\u0430 \u0427\u0435\u0431\u043e\u043a\u0441\u0430\u0440\u044b"))),i.a.createElement("h4",{className:"title"},"\u041c\u043e\u0439 github"),i.a.createElement(A,null,i.a.createElement("a",{href:"https://github.com/Gloomylord",target:"_blank"},"https://github.com/Gloomylord"),i.a.createElement(z,null))))};function I(){var n=Object(l.a)(["\n  justify-self: center;\n  height: 1px;\n  width: 100%;\n  background-color: white;\n"]);return I=function(){return n},n}function L(){var n=Object(l.a)(["\n    padding: 40px 30px;\n    padding-bottom: 0;\n    display: grid;\n    background-color:#d1d1e9;\n    grid-template-rows: 200px 1px 1fr;\n    border-radius: 5px;\n    border: 0;\n    grid-row-gap: 28px;\n    grid-area: 1/2/2/3;\n    align-self: start;\n    @media (max-width: 1000px) {\n      grid-template-rows: 228px 1px 1fr;\n    }\n    @media (max-width: 970px) {\n      grid-template-rows: 220px 1px 1fr;\n    }\n    @media (max-width: 940px) {\n      grid-area: 1/1/2/2;\n      grid-template-rows: 220px 1px 1fr;\n    }\n    @media (max-width: 710px) {\n      grid-template-rows: 240px 1px 1fr;\n    }\n    @media (max-width: 650px) {\n      grid-template-rows: 274px 1px 1fr;\n    }\n    @media (max-width: 600px) {\n      grid-template-rows: 424px 1px 1fr;\n    }\n    @media (max-width: 540px) {\n      grid-template-rows: 460px 1px 1fr;\n    }\n    @media (max-width: 455px) {\n      grid-row-gap: 15px;\n      grid-template-rows: 474px 1px 1fr;\n    }\n    @media (max-width: 360px) {\n      grid-template-rows: 514px 1px 1fr;\n      padding: 5px 10px;\n    }\n"]);return L=function(){return n},n}function T(){var n=Object(l.a)(["\n    grid-area: 1/3/2/4;\n    position: sticky;\n    position: -webkit-sticky;\n    top: 0;\n    //background-color: #61dafb;\n    width: 100px;\n    height: 100px;\n    display: grid;\n    grid-template-columns: repeat(8,1fr);\n    grid-template-rows: repeat(8,1fr);\n    grid-gap: 2px;\n    padding: 5px;\n    animation: rotate 1s ease-in-out 1;\n    :hover {\n      animation: rotate 2s ease-in-out infinite alternate;\n      .element-1 {\n        animation: move-1 1s ease-in-out infinite alternate;\n        transition: 0ms;\n      }\n      .element-2 {\n        animation: move-2 1s ease-in-out  infinite alternate;\n        transition: 0ms;\n      }\n      .element-3 {\n        animation: move-3 1s ease-in-out  infinite alternate;\n        transition: 0ms;\n      }\n      .element-4 {\n        animation: move-4 1s ease-in-out infinite alternate;\n        transition: 0ms;\n      }\n    }\n    @media (max-width: 970px) {\n      display: none;\n    }\n"]);return T=function(){return n},n}function $(){var n=Object(l.a)(["\n    transition: 300ms;\n    max-width: 1900px ;\n    width: 100%;\n    box-sizing: border-box;\n    padding: 35px 30px;\n    align-self: center;\n    display: grid;\n    min-height: 100vh;\n    grid-template-columns: 2fr 10fr 100px 1fr ;\n    grid-template-rows: auto;\n    grid-gap: 10px;\n    //overflow-x: hidden;\n    @media (max-width: 1300px) {\n      grid-template-columns: 100px 10fr 100px;\n      grid-template-rows: auto;\n    }\n    @media (max-width: 970px) {\n      grid-template-columns: 1fr;\n      grid-template-rows: auto;\n    }\n    @media (max-width: 600px) {\n      padding: 20px 30px;\n    }\n    @media (max-width: 410px) {\n      padding: 10px 5px;\n    }\n    @media (max-width: 410px) {\n      padding: 0;\n    }\n"]);return $=function(){return n},n}function _(){var n=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    width: 100% ;\n    background:  #f8f5f2;\n"]);return _=function(){return n},n}var q=m.a.div(_()),K=m.a.div($()),P=m.a.div(T()),Q=m.a.div(L()),U=m.a.div(I());var V=function(){return i.a.createElement(q,null,i.a.createElement(K,null,i.a.createElement(P,null,i.a.createElement("div",{className:"element element-1"}),i.a.createElement("div",{className:"element element-2"}),i.a.createElement("div",{className:"element element-3"}),i.a.createElement("div",{className:"element element-4"})),i.a.createElement(Q,null,i.a.createElement(h,null),i.a.createElement(U,null),i.a.createElement(H,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(V,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[12,1,2]]]);
//# sourceMappingURL=main.2b52cc1d.chunk.js.map