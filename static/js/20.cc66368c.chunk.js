(this.webpackJsonpagileful=this.webpackJsonpagileful||[]).push([[20],{403:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var r=t(0),n=t.n(r);function c(e){return n.a.createElement("section",{className:"probootstrap-cover"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row probootstrap-vh-75 align-items-center text-left"},n.a.createElement("div",{className:"col-sm"},n.a.createElement("div",{className:"probootstrap-text pt-5"},n.a.createElement("h1",{className:"probootstrap-heading text-white mb-4"},e.title))))))}},621:function(e,a,t){"use strict";t.r(a);var r=t(10),n=t.n(r),c=t(28),s=t(0),l=t.n(s),o=t(403),m=t(18),i=t(23);function u(e){var a;return n.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.a.awrap(Object(m.a)({method:"POST",url:"/users",data:Object(i.b)(e,"users")}));case 3:a=t.sent,t.next=9;break;case 6:throw t.prev=6,t.t0=t.catch(0),new Error(t.t0.response.data.errors[0].detail);case 9:return t.abrupt("return",Object(i.a)(a.data));case 10:case"end":return t.stop()}}),null,null,[[0,6]])}var p=t(19);function d(){var e,a=Object(s.useState)(""),t=Object(c.a)(a,2),r=t[0],m=t[1],i=Object(s.useState)(""),d=Object(c.a)(i,2),b=d[0],v=d[1],f=Object(s.useState)(""),E=Object(c.a)(f,2),N=E[0],g=E[1],h=Object(s.useState)(""),w=Object(c.a)(h,2),O=w[0],j=w[1],S=Object(s.useState)(""),x=Object(c.a)(S,2),y=x[0],F=x[1],k=Object(s.useState)(!1),C=Object(c.a)(k,2),P=C[0],J=C[1],q=Object(s.useState)(null),D=Object(c.a)(q,2),L=D[0],R=D[1],T=Object(s.useState)(!1),W=Object(c.a)(T,2),z=W[0],A=W[1];return e=z?l.a.createElement("div",{className:"alert alert-success"},"Registration completed with success, you can now login ",l.a.createElement(p.b,{to:"/login"},"by clicking here")):l.a.createElement("form",{onSubmit:function(e){return n.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(e.preventDefault(),J(!0),R(null),O===y){a.next=6;break}return R("Password confirm is not equal to password"),a.abrupt("return");case 6:return a.prev=6,a.next=9,n.a.awrap(u({firstName:r,lastName:b,email:N,password:O}));case 9:A(!0),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(6),R(a.t0.message);case 15:return a.prev=15,J(!1),a.finish(15);case 18:case"end":return a.stop()}}),null,null,[[6,12,15,18]])}},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"fname"},"First Name"),l.a.createElement("input",{id:"fname",className:"form-control",type:"text",value:r,onChange:function(e){return m(e.target.value)}}))),l.a.createElement("div",{className:"col-md-6"},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"lname"},"Last Name"),l.a.createElement("input",{id:"lname",className:"form-control",type:"text",value:b,onChange:function(e){return v(e.target.value)}})))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email"},"Email"),l.a.createElement("input",{id:"email",className:"form-control",type:"email",value:N,onChange:function(e){return g(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password"},"Password"),l.a.createElement("input",{id:"password",className:"form-control",type:"password",value:O,onChange:function(e){return j(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password-confirm"},"Confirm Password"),l.a.createElement("input",{id:"password-confirm",className:"form-control",type:"password",value:y,onChange:function(e){return F(e.target.value)}})),L&&l.a.createElement("div",{className:"alert alert-danger"},L),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{className:"btn btn-primary",type:"submit",value:P?"Wait":"Signup",disabled:P}))))),l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:"Signup"}),l.a.createElement("section",{className:"probootstrap-section"},l.a.createElement("div",{className:"container"},l.a.createElement("h2",{className:"mb-5"},"Signup"),e)))}t.d(a,"default",(function(){return d}))}}]);
//# sourceMappingURL=20.cc66368c.chunk.js.map