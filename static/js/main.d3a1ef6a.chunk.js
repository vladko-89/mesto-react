(this["webpackJsonpreact-mesto"]=this["webpackJsonpreact-mesto"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),s=n(7),i=n.n(s),r=(n(16),n(10)),u=n(6),l=n(2),p=n.p+"static/media/logo.c2821b38.svg";var d=function(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("img",{src:p,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f Mesto Russia",className:"logo"})})},_=n.p+"static/media/Vector.6c7bf054.svg",j=n.p+"static/media/vectorAva.a086f758.svg",m=o.a.createContext();var h=function(e){var t=o.a.useContext(m),n=e.card.owner._id===t._id,c="card__delete ".concat(n?"":"card__delete_hidden"),s=e.card.likes.some((function(e){return e._id===t._id})),i="card__like ".concat(s?"card__like_active":"");return Object(a.jsx)("li",{className:"cards__item",children:Object(a.jsxs)("article",{className:"card",children:[Object(a.jsx)("img",{onClick:function(){e.onCardClick(e.card)},src:e.card.link,className:"card__image",alt:"\u0418\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438"}),Object(a.jsx)("button",{className:c,type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 \u0443\u0434\u0430\u043b\u0438\u0442\u044c",onClick:function(){e.onCardDelete(e.card)}}),Object(a.jsxs)("div",{className:"card__container",children:[Object(a.jsxs)("h2",{className:"card__title",children:[e.card.name," "]}),Object(a.jsxs)("div",{className:"card__likes-container",children:[Object(a.jsx)("button",{className:i,type:"button","aria-label":"\u041a\u043d\u043e\u043f\u043a\u0430 like",onClick:function(){e.onCardLike(e.card)}}),Object(a.jsx)("p",{className:"card__likes-counter",children:e.card.likes.length})]})]})]})},e.key)};var b=function(e){var t=o.a.useContext(m);return Object(a.jsxs)("main",{className:"main-index",children:[Object(a.jsxs)("section",{className:"profile",children:[Object(a.jsxs)("div",{className:"profile__flex-wrapper",children:[Object(a.jsxs)("div",{className:"profile__avatar-container",onClick:e.onEditAvatar,children:[Object(a.jsx)("div",{className:"profile__avatar-vector",children:Object(a.jsx)("img",{src:j,alt:"\u0418\u043a\u043e\u043d\u043a\u0430"})}),Object(a.jsx)("img",{src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",className:"profile__avatar"})]}),Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"profile__info",children:[Object(a.jsx)("h1",{className:"profile__name",children:t.name}),Object(a.jsx)("button",{className:"profile__button-edit",type:"button","aria-label":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",onClick:e.onEditProfile,children:Object(a.jsx)("img",{src:_,alt:"\u0418\u043a\u043e\u043d\u043a\u0430",className:"profile__vector"})})]}),Object(a.jsxs)("p",{className:"profile__specialization",children:[t.about," "]})]})]}),Object(a.jsx)("button",{className:"profile__button-new-card",type:"button","aria-label":"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u043e\u0432\u0443\u044e \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0443",onClick:e.onAddPlace})]}),Object(a.jsx)("section",{className:"grid-container","aria-label":"\u0411\u043b\u043e\u043a \u0441 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0430\u043c\u0438",children:Object(a.jsx)("ul",{className:"cards",children:e.cards.map((function(t){return Object(a.jsx)(h,{card:t,onCardClick:e.onCardClick,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})})]})};var f=function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("p",{className:"footer__copyright",children:"\xa9 2020 Mesto Russia"})})};var O=function(e){return Object(a.jsx)("div",{className:"popup popup_type_".concat(e.name," ").concat(!!e.isOpen&&"popup_show"),children:Object(a.jsxs)("div",{className:"popup__body popup__body_modal_".concat(e.name," ").concat(!!e.isOpen&&"popup__body_slice"),children:[Object(a.jsxs)("form",{className:"popup__profile form form_closed",noValidate:!0,action:"http://echo.htmlacademy.ru",method:"post",name:"".concat(e.name,"-form"),onSubmit:e.onSubmit,children:[Object(a.jsx)("h2",{className:"popup__title",children:e.title}),e.children,Object(a.jsx)("button",{type:"submit",className:"popup__button-submit",children:e.buttonText})]}),Object(a.jsx)("button",{onClick:e.onClose,type:"button",className:"popup__button-close popup__button-close_modal_".concat(e.name),"aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})};var x=function(e){var t=o.a.useContext(m),n=o.a.useState(""),c=Object(l.a)(n,2),s=c[0],i=c[1],r=o.a.useState(""),u=Object(l.a)(r,2),p=u[0],d=u[1];return o.a.useEffect((function(){i(t.name),d(t.about)}),[t]),Object(a.jsx)(O,{isOpen:e.isOpen,onClose:e.onClose,className:"popup popup_type_profile",name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:p})},children:Object(a.jsxs)("ul",{className:"popup__list",children:[Object(a.jsxs)("li",{className:"popup__item",children:[Object(a.jsx)("input",{className:"popup__input popup__input_item_name",id:"input_name",type:"text",name:"user",required:!0,placeholder:"\u0412\u0430\u0448\u0435 \u0438\u043c\u044f",minLength:"2",maxLength:"40",value:s,onChange:function(e){i(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"input_name-error"})]}),Object(a.jsxs)("li",{className:"popup__item",children:[Object(a.jsx)("input",{className:"popup__input popup__input_item_specialization",type:"text",name:"specialization",id:"input_pass",required:!0,placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",minLength:"2",maxLength:"200",value:p,onChange:function(e){d(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"input_pass-error"})]})]})})};var v=function(e){var t=o.a.useRef();return Object(a.jsx)(O,{className:"popup popup_type_avatar",name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",buttonText:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),t.current.value=""},children:Object(a.jsx)("ul",{className:"popup__list",children:Object(a.jsxs)("li",{className:"popup__item",children:[Object(a.jsx)("input",{className:"popup__input popup__input_item_path",type:"url",id:"input_avatar",name:"link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u0430\u0432\u0430\u0442\u0430\u0440\u0430",ref:t}),Object(a.jsx)("span",{className:"popup__error",id:"input_avatar-error"})]})})})};var k=function(e){var t=o.a.useState(""),n=Object(l.a)(t,2),c=n[0],s=n[1],i=o.a.useState(""),r=Object(l.a)(i,2),u=r[0],p=r[1];return Object(a.jsx)(O,{className:"popup popup_type_new-card",name:"new-card",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",buttonText:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c,link:u})},children:Object(a.jsxs)("ul",{className:"popup__list",children:[Object(a.jsxs)("li",{className:"popup__item",children:[Object(a.jsx)("input",{className:"popup__input popup__input_item_title",type:"text",name:"name",id:"input_title",required:!0,placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"30",value:c,onChange:function(e){s(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"input_title-error",children:"ERROR"})]}),Object(a.jsxs)("li",{className:"popup__item",children:[Object(a.jsx)("input",{className:"popup__input popup__input_item_path",type:"url",id:"input_link",name:"link",required:!0,placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:u,onChange:function(e){p(e.target.value)}}),Object(a.jsx)("span",{className:"popup__error",id:"input_link-error"})]})]})})};var N=function(e){return Object(a.jsx)("div",{className:"popup popup_type_image ".concat(!!e.card.isOpen&&"popup_show"),children:Object(a.jsxs)("div",{className:"popup__body popup__body_modal_image ".concat(!!e.card.isOpen&&"popup__body_slice"),children:[Object(a.jsxs)("figure",{className:"popup__image",children:[Object(a.jsx)("img",{src:"".concat(e.card.isOpen?e.card.el.link:"#"),alt:"\u0411\u043e\u043b\u044c\u0448\u043e\u0435 \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435 \u043a\u0430\u0440\u0442\u043e\u0447\u043a\u0438",className:"popup__card-image"}),Object(a.jsx)("figcaption",{className:"popup__sign",children:"".concat(e.card.isOpen?e.card.el.name:"")})]}),Object(a.jsx)("button",{onClick:e.onClose,type:"button",className:"popup__button-close popup__button-close_modal_image","aria-label":"\u043a\u043d\u043e\u043f\u043a\u0430 \u0417\u0430\u043a\u0440\u044b\u0442\u044c"})]})})},C=n(8),g=n(9),y=new(function(){function e(){Object(C.a)(this,e),this._base="https://mesto.nomoreparties.co/v1/cohort-19/",this._token="11f304a7-0c18-4e6f-ac0a-f5def34dbfe2"}return Object(g.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this._base,"users/me"),{method:"GET",headers:{authorization:this._token,"Content-Type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"editUserInfo",value:function(e){return fetch("".concat(this._base,"users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:e.name,about:e.about})}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"updateAvatar",value:function(e){return fetch("".concat(this._base,"users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._base,"cards"),{headers:{authorization:this._token}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"addNewCard",value:function(e){return fetch("".concat(this._base,"cards"),{method:"POST",headers:{authorization:this._token,"Content-type":"application/json"},body:JSON.stringify({name:e.name,link:e.link})}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"deleteCard",value:function(e){return fetch("".concat(this._base,"cards/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"putLike",value:function(e){return fetch("".concat(this._base,"cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"deleteLike",value:function(e,t){if(t)return fetch("".concat(this._base,"cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}},{key:"changeLikeCardStatus",value:function(e,t){return t?fetch("".concat(this._base,"cards/likes/").concat(e),{method:"PUT",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))})):fetch("".concat(this._base,"cards/likes/").concat(e),{method:"DELETE",headers:{authorization:this._token,"Content-type":"application/json"}}).then((function(e){return e.ok?e.json():Promise.reject("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status))}))}}]),e}());var P=function(){var e=o.a.useState({}),t=Object(l.a)(e,2),n=t[0],c=t[1],s=o.a.useState(!1),i=Object(l.a)(s,2),p=i[0],_=i[1],j=o.a.useState(!1),h=Object(l.a)(j,2),C=h[0],g=h[1],P=o.a.useState(!1),S=Object(l.a)(P,2),E=S[0],L=S[1],T=o.a.useState({}),z=Object(l.a)(T,2),A=z[0],w=z[1],U=o.a.useState([]),D=Object(l.a)(U,2),I=D[0],R=D[1];function q(){_(!1),L(!1),g(!1),w({})}return o.a.useEffect((function(){y.getUserInfo().then((function(e){c(e)})).catch((function(e){console.log(e)}))}),[]),o.a.useEffect((function(){y.getInitialCards().then((function(e){R(e)})).catch((function(e){console.log(e)}))}),[]),Object(a.jsx)(m.Provider,{value:n,children:Object(a.jsx)("div",{className:"page",children:Object(a.jsxs)("div",{className:"container",children:[Object(a.jsx)(d,{}),Object(a.jsx)(b,{onEditAvatar:function(){L(!0)},onEditProfile:function(){_(!0)},onAddPlace:function(){g(!0)},onCardClick:function(e){w(Object(u.a)(Object(u.a)({},A),{},{isOpen:!0,el:e}))},cards:I,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));y.changeLikeCardStatus(e._id,!t).then((function(t){var n=I.map((function(n){return n._id===e._id?t:n}));R(n)}))},onCardDelete:function(e){console.log(e),y.deleteCard(e._id).then((function(t){var n=I.filter((function(t){return e._id!==t._id}));R(n)})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(f,{}),Object(a.jsx)(x,{isOpen:p,onClose:q,onUpdateUser:function(e){y.editUserInfo(e).then((function(e){c(e),q()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(k,{isOpen:C,onClose:q,onAddPlace:function(e){y.addNewCard(e).then((function(e){R([e].concat(Object(r.a)(I))),q()})).catch((function(e){console.log(e)}))}}),Object(a.jsx)(O,{className:"popup popup_type_card-delete",name:"card-delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",buttonText:"\u0414\u0430"}),Object(a.jsx)(N,{card:A,onClose:q}),Object(a.jsx)(v,{isOpen:E,onClose:q,onUpdateAvatar:function(e){y.updateAvatar(e.avatar).then((function(e){c(e),q()})).catch((function(e){console.log(e)}))}})]})})})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),o(e),s(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(P,{})}),document.getElementById("root")),S()}},[[17,1,2]]]);
//# sourceMappingURL=main.d3a1ef6a.chunk.js.map