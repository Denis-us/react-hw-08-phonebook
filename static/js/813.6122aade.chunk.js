"use strict";(self.webpackChunkreact_hw_08_phonebook=self.webpackChunkreact_hw_08_phonebook||[]).push([[813],{3813:function(t,e,n){n.r(e),n.d(e,{default:function(){return z}});var r=n(1413),a=n(8214),c=n(5861),s=n(5985),i=n(5290),o=n(9434),l=n(3314),u=n(2333),d=function(t){return t.contacts.contacts},m=n(6052),_="Form_form__aYVXE",f="Form_blockForm__AjGmB",h="Form_textField__4PqGp",v="Form_error__UYCS1",x="Form_button__Hm6-k",b=n(3329),j=function(){var t,e,n=(0,i.cI)(),j=n.register,p=n.formState.errors,N=n.handleSubmit,C=n.reset,Z=(0,o.I0)(),k=(0,o.v9)(d),F=function(){var t=(0,c.Z)((0,a.Z)().mark((function t(e){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!k.find((function(t){return t.name===e.name}))){t.next=5;break}return t.abrupt("return",s.Am.error("\u0422\u0430\u043a\u043e\u0439 \u043a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c"));case 5:return t.next=7,Z(m.Z.addContact(e));case 7:C(),s.Am.success("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d");case 9:t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),s.Am.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0430");case 14:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}();return(0,b.jsxs)("form",{onSubmit:N(F),className:_,children:[(0,b.jsx)("div",{className:f,children:(0,b.jsx)(l.Z,(0,r.Z)({id:"outlined-basic",label:"\u0418\u043c\u044f",variant:"outlined",type:"text",className:h},j("name",{required:!0,pattern:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/})))}),"required"===(null===(t=p.name)||void 0===t?void 0:t.type)&&(0,b.jsx)("p",{className:v,children:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432"}),(0,b.jsx)("div",{className:f,children:(0,b.jsx)(l.Z,(0,r.Z)({id:"outlined-basic",label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",variant:"outlined",type:"tel",className:h},j("number",{required:!0,pattern:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/})))}),(null===(e=p.number)||void 0===e?void 0:e.type)&&(0,b.jsx)("p",{className:v,children:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440, \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"}),(0,b.jsx)(u.Z,{variant:"contained",type:"submit",className:x,children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})},p="Section_section__uf0gA",N="Section_title__Jg+AT",C=function(t){var e=t.title,n=t.children;return(0,b.jsxs)("section",{className:p,children:[e&&(0,b.jsx)("h2",{className:N,children:e}),n]})},Z=n(2791),k=function(t){return t.filter.filter},F={contact:"Contact_contact__HNcMN",button:"Contact_button__gtcA0",contactsData:"Contact_contactsData__8QCYG"},A=function(t){var e=t.id,n=t.name,r=t.number,a=(0,o.I0)();return(0,b.jsxs)("div",{className:F.contact,children:[(0,b.jsxs)("div",{className:F.contactInfo,children:[(0,b.jsx)("p",{className:F.contactsData,children:n}),(0,b.jsx)("p",{className:F.contactsData,children:r})]}),(0,b.jsx)(u.Z,{variant:"contained",type:"submit",className:F.button,onClick:function(){a(m.Z.deleteContact(e)),s.Am.success("\u041a\u043e\u043d\u0442\u0430\u043a\u0442 \u0443\u0434\u0430\u043b\u0435\u043d")},children:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c"})]})},g="ContactsList_contactsList__g4YSo",w="ContactsList_contactsElement__227ed",y=function(){var t=(0,o.I0)(),e=(0,o.v9)(k),n=(0,o.v9)(d);(0,Z.useEffect)((function(){t(m.Z.getContacts())}),[t,n]);var r=function(t,e){return null===t||void 0===t?void 0:t.filter((function(t){return t.name.toLowerCase().includes(e.toLowerCase())}))}(n,e);return(0,b.jsx)(b.Fragment,{children:n.length>0&&(0,b.jsx)("ul",{className:g,children:r.map((function(t){var e=t.id,n=t.name,r=t.number;return(0,b.jsx)("li",{className:w,children:(0,b.jsx)(A,{id:e,name:n,number:r})},e)}))})})},I=n(1634),S="Filter_filter__LyeIl",L="Filter_textField__1FnkF",D=function(){var t=(0,o.v9)((function(t){return t.filter.filter})),e=(0,o.I0)();return(0,b.jsx)("div",{className:S,children:(0,b.jsx)(l.Z,{id:"outlined-basic",label:"\u041f\u043e\u0438\u0441\u043a \u043f\u043e \u0438\u043c\u0435\u043d\u0438",variant:"outlined",className:L,type:"text",value:t,onChange:function(t){return e((0,I.M)(t.target.value))}})})},q="PhonebookView_container__zX2tD";function z(){return(0,b.jsxs)("div",{className:q,children:[(0,b.jsx)(C,{title:"Phonebook",children:(0,b.jsx)(j,{})}),(0,b.jsxs)(C,{title:"Contacts",children:[(0,b.jsx)(D,{}),(0,b.jsx)(y,{})]})]})}}}]);
//# sourceMappingURL=813.6122aade.chunk.js.map