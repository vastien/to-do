(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(3),r=n.n(c),l=n(1),u=n(4);function i(e){var t=e.todo,n=e.toggleTodo,o=t.id,c=t.task;t.completed;return a.a.createElement("li",null,c," ",a.a.createElement("input",{className:"checkbox",type:"checkbox",onChange:function(){n(o)}}))}function d(e){var t=e.todos,n=e.toggleTodo;return a.a.createElement("ul",null,t.map(function(e){return a.a.createElement(i,{key:e.id,todo:e,toggleTodo:n})}))}var f=n(13),m=(n(10),"todoApp.todos");function s(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],r=Object(o.useRef)();Object(o.useEffect)(function(){var e=JSON.parse(localStorage.getItem(m));e&&c(e)},[]),Object(o.useEffect)(function(){localStorage.setItem(m,JSON.stringify(n))},[n]);return a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",null,"To do with Locale Storage"),a.a.createElement("input",{ref:r,type:"text",placeholder:"New task"}),a.a.createElement("button",{onClick:function(){var e=r.current.value;""!==e&&(c(function(t){return[].concat(Object(l.a)(t),[{id:Object(f.a)(),task:e,completed:!1}])}),r.current.value=null)}},"\u2795"),a.a.createElement("button",{onClick:function(e){var t=n.filter(function(e){return!e.completed});c(t)}},"\ud83d\uddd1\ufe0f"),a.a.createElement(d,{todos:n,toggleTodo:function(e){var t=Object(l.a)(n),o=t.find(function(t){return t.id===e});o.completed=!o.completed,c(t)}}),a.a.createElement("footer",{className:"footer"},"<> with \u2665 by Basti\xe1n Escribano"))}r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root"))},5:function(e,t,n){e.exports=n(11)}},[[5,1,2]]]);
//# sourceMappingURL=main.759ec820.chunk.js.map