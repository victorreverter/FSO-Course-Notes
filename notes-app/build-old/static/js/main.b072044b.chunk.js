(this["webpackJsonpnotes-app"]=this["webpackJsonpnotes-app"]||[]).push([[0],{15:function(e,t,n){e.exports=n(38)},37:function(e,t,n){},38:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=n(4),i=n(2),l=function(e){var t=e.note,n=e.toggleImportance,a=t.important?"make not important":"make important";return r.a.createElement("li",{className:"note"},t.content,r.a.createElement("button",{onClick:n},a))},m=n(3),f=n.n(m),s="https://notes-app-victorreverter.herokuapp.com/api/notes",p=function(){return f.a.get(s).then((function(e){return e.data}))},d=function(e){return f.a.post(s,e).then((function(e){return e.data}))},v=function(e,t){return f.a.put("".concat(s,"/").concat(e),t).then((function(e){return e.data}))},E=function(e){var t=e.message;return null===t?null:r.a.createElement("div",{className:"error"},t)},b=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italic",fontSize:16}},r.a.createElement("br",null)," ",r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki 2020"))},h=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),m=Object(i.a)(c,2),f=m[0],s=m[1],h=Object(a.useState)(!0),g=Object(i.a)(h,2),O=g[0],j=g[1],S=Object(a.useState)("some error happened..."),k=Object(i.a)(S,2),y=k[0],w=k[1];Object(a.useEffect)((function(){p().then((function(e){o(e)}))}),[]),console.log("render",n.length,"notes");var N=O?n:n.filter((function(e){return e.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(E,{message:y}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return j(!O)}},"show ",O?"important":"all")),r.a.createElement("ul",null,N.map((function(e){return r.a.createElement(l,{key:e.id,note:e,toggleImportance:function(){return function(e){var t=n.find((function(t){return t.id===e})),a=Object(u.a)(Object(u.a)({},t),{},{important:!t.important});v(e,a).then((function(t){o(n.map((function(n){return n.id!==e?n:t})))})).catch((function(a){w("Note '".concat(t.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3),o(n.filter((function(t){return t.id!==e})))}))}(e.id)}})}))),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t={content:f,date:(new Date).toISOString(),important:Math.random()<.5};d(t).then((function(e){o(n.concat(e)),s("")}))}},r.a.createElement("input",{value:f,onChange:function(e){console.log(e.target.value),s(e.target.value)}}),r.a.createElement("button",{type:"submit"},"save")),r.a.createElement(b,null))};n(37);c.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.b072044b.chunk.js.map