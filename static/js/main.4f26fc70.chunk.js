(this.webpackJsonpamazonclone=this.webpackJsonpamazonclone||[]).push([[0],{66:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},76:function(e,t,c){},78:function(e,t,c){},89:function(e,t,c){},90:function(e,t,c){},91:function(e,t,c){},93:function(e,t,c){},95:function(e,t,c){"use strict";c.r(t);var a=c(8),s=c.n(a),n=c(41),i=c.n(n),r=(c(66),c(55)),o=c(15),l=(c(67),c(1)),j=c(3),d=c(12),b=c(13),h=c.p+"static/media/amazonHomePage.1f12c41b.jpg",u=(c(68),c(45)),m=c.n(u),p=c(7),_=Object(a.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(p.jsx)(_.Provider,{value:Object(a.useReducer)(t,c),children:s})},g=function(){return Object(a.useContext)(_)};var x=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,n=e.rating,i=g(),r=Object(o.a)(i,2),l=(r[0].basket,r[1]);return Object(p.jsxs)("div",{className:"product",children:[Object(p.jsxs)("div",{class:"product_header",children:[Object(p.jsx)("h4",{className:"product__title",children:c}),Object(p.jsxs)("p",{className:"product__price",children:[Object(p.jsx)("small",{children:"\u20b9"}),Object(p.jsx)("strong",{children:s})]}),Object(p.jsx)("div",{className:"product__head",children:Object(p.jsx)(m.a,{rating:n,starRatedColor:"rgb(243, 168, 66)",numberOfStars:5,starDimension:"15px",starSpacing:"2px",className:"star__border__class"})})]}),Object(p.jsx)("img",{src:a,alt:"product__image",className:"product__image"}),Object(p.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:s,rating:n}})},class:"product__button",children:"Add To Basket"})]})},f=(c(76),function(e){Object(d.a)(c,e);var t=Object(b.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(j.a)(c,[{key:"render",value:function(){return Object(p.jsx)("div",{className:"home",children:Object(p.jsxs)("div",{className:"home__container",children:[Object(p.jsx)("img",{src:h,alt:"background image",className:"home__image"}),Object(p.jsxs)("div",{className:"home__productContainer",children:[Object(p.jsx)(x,{id:"4903850",title:"2019 Xbox Series S - 512GB SSD Console with Wireless Controller - IN Version with EU Power Cable",price:35e3,rating:4.5,image:"https://m.media-amazon.com/images/I/61-x29sqlpS._AC_UY436_QL65_.jpg"}),Object(p.jsx)(x,{id:"4903852",title:"2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray",price:85e3,rating:4,image:"https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY436_QL65_.jpg"})]}),Object(p.jsxs)("div",{className:"home__productContainer",children:[Object(p.jsx)(x,{id:"4903850",title:"2019 Xbox Series S - 512GB SSD Console with Wireless Controller - IN Version with EU Power Cable",price:35e3,rating:4.5,image:"https://m.media-amazon.com/images/I/61-x29sqlpS._AC_UY436_QL65_.jpg"}),Object(p.jsx)(x,{id:"4903852",title:"2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray",price:85e3,rating:4,image:"https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY436_QL65_.jpg"}),Object(p.jsx)(x,{id:"4903850",title:"2019 Xbox Series S - 512GB SSD Console with Wireless Controller - IN Version with EU Power Cable",price:35e3,rating:4.5,image:"https://m.media-amazon.com/images/I/61-x29sqlpS._AC_UY436_QL65_.jpg"})]}),Object(p.jsx)("div",{className:"home__productContainer",children:Object(p.jsx)(x,{id:"4903852",title:"2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Space Gray",price:85e3,rating:4,image:"https://m.media-amazon.com/images/I/71TPda7cwUL._AC_UY436_QL65_.jpg"})})]})})}}]),c}(a.Component)),v=f,N=c(57),S=c.n(N),k=c(58),C=c.n(k),A=(c(77),c(78),c(31)),w=c(49),B=(c(80),c(96),w.a.initializeApp({apiKey:"AIzaSyCbbkTkpjRDCHvrzP16Th9eigDs5bJAfFI",authDomain:"development-test-d6510.firebaseapp.com",projectId:"development-test-d6510",storageBucket:"development-test-d6510.appspot.com",messagingSenderId:"421893219021",appId:"1:421893219021:web:ff232bb64d65a1b57d3f84",measurementId:"G-ZJ640VBNXH"}).firestore(),w.a.auth()),P=function(){var e=g(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user;t[1];return Object(p.jsxs)("div",{className:"header",children:[Object(p.jsx)(A.b,{to:"/",children:Object(p.jsx)("img",{src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png",alt:"Amazon Logo",className:"header__logo"})}),Object(p.jsxs)("div",{className:"header__search",children:[Object(p.jsx)("input",{type:"text",className:"header__searchInput"}),Object(p.jsx)(S.a,{className:"header__searchIcon"})]}),Object(p.jsxs)("div",{className:"header__nav",children:[Object(p.jsx)(A.b,{to:!s&&"/login",className:"link__style",children:Object(p.jsxs)("div",{onClick:function(){s&&B.signOut()},className:"header__option",children:[Object(p.jsx)("span",{className:"header__optionOne",children:s?s.email:"Guest"}),Object(p.jsx)("span",{className:"header__optionTwo",children:s?"Sign Out":"Sign In"})]})}),Object(p.jsxs)("div",{className:"header__option header__option__mobile",children:[Object(p.jsx)("span",{className:"header__optionOne",children:"Returns"}),Object(p.jsx)("span",{className:"header__optionTwo",children:"& Orders"})]}),Object(p.jsxs)("div",{className:"header__option header__option__mobile",children:[Object(p.jsx)("span",{className:"header__optionOne",children:"Your"}),Object(p.jsx)("span",{className:"header__optionTwo",children:"Prime"})]}),Object(p.jsx)(A.b,{to:"/checkout",className:"link__style",children:Object(p.jsxs)("div",{className:"header__cart",children:[Object(p.jsx)(C.a,{className:"header__cartIcon"}),Object(p.jsx)("span",{className:"header__cartNumber header__optionTwo",children:a.length})]})})]})]})},I=(c(89),c(19));var y=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(""),i=Object(o.a)(n,2),r=i[0],l=i[1],j=Object(I.f)();return Object(p.jsxs)("div",{class:"login__parent",children:[Object(p.jsx)(A.b,{to:"/",children:Object(p.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(p.jsxs)("div",{className:"login__container",children:[Object(p.jsx)("h1",{children:"Sign-in"}),Object(p.jsxs)("form",{className:"login__form",children:[Object(p.jsx)("h5",{children:"Email"}),Object(p.jsx)("input",{type:"text",value:c,onChange:function(e){return s(e.target.value)}}),Object(p.jsx)("h5",{children:"Password"}),Object(p.jsx)("input",{type:"password",value:r,onChange:function(e){return l(e.target.value)}}),Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),B.signInWithEmailAndPassword(c,r).then((function(e){j.push("/")})).catch((function(e){return alert(e.message)}))},type:"submit",className:"login__signInButton",children:"Sign In"})]}),Object(p.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(p.jsx)("button",{onClick:function(e){e.preventDefault(),B.createUserWithEmailAndPassword(c,r).then((function(e){e&&j.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})},E=(c(90),c(91),c(59)),T=c.n(E),z=c(18),U=c(34),D=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},M=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(U.a)(Object(U.a)({},e),{},{basket:[].concat(Object(z.a)(e.basket),[t.item])});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(z.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(U.a)(Object(U.a)({},e),{},{basket:a});case"SET_USER":return Object(U.a)(Object(U.a)({},e),{},{user:t.user});default:return e}};var R=function(){Object(I.f)();var e=g(),t=Object(o.a)(e,2),c=t[0].basket;return t[1],Object(p.jsxs)("div",{className:"subtotal",children:[Object(p.jsx)(T.a,{renderText:function(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(p.jsx)("strong",{children:e})]}),Object(p.jsxs)("small",{className:"subtotal__gift",children:[Object(p.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:D(c),displayType:"text",thousandSeparator:!0,thousandSpacing:"2s",prefix:"\u20b9"}),Object(p.jsx)("button",{children:"Proceed to Checkout"})]})};c(93);var G=function(e){var t=e.id,c=e.image,a=e.title,s=e.price,n=e.rating,i=e.hideButton,r=g(),l=Object(o.a)(r,2),j=(l[0].basket,l[1]);return Object(p.jsxs)("div",{className:"checkoutProduct",children:[Object(p.jsx)("img",{className:"checkoutProduct__image",src:c}),Object(p.jsxs)("div",{className:"checkoutProduct__info",children:[Object(p.jsx)("p",{className:"checkoutProduct__title",children:a}),Object(p.jsxs)("p",{className:"checkoutProduct__price",children:[Object(p.jsx)("small",{children:"\u20b9"}),Object(p.jsx)("strong",{children:s})]}),Object(p.jsx)("div",{className:"checkoutProduct__rating",children:Object(p.jsx)(m.a,{rating:n,starRatedColor:"rgb(243, 168, 66)",numberOfStars:5,starDimension:"15px",starSpacing:"2px",className:"star__border__class"})}),!i&&Object(p.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var L=function(){var e=g(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(p.jsxs)("div",{className:"checkout",children:[Object(p.jsxs)("div",{className:"checkout__left",children:[Object(p.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(p.jsxs)("div",{children:[Object(p.jsxs)("h3",{children:["Hello, ",null===s||void 0===s?void 0:s.email]}),Object(p.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),a.map((function(e){return Object(p.jsx)(G,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(p.jsx)("div",{className:"checkout__right",children:Object(p.jsx)(R,{})})]})};var F=function(){var e=g(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){B.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(p.jsx)(A.a,{basename:"/amazonclone",children:Object(p.jsxs)(I.c,{children:[Object(p.jsx)(I.a,{path:"/login",children:Object(p.jsx)(y,{})}),Object(p.jsxs)(I.a,{exact:!0,path:"/",children:[Object(p.jsx)(P,{}),Object(p.jsx)(v,{})]}),Object(p.jsx)(I.a,{path:"/checkout",children:Object(p.jsx)(L,{})})]})})},Y=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,108)).then((function(t){var c=t.getCLS,a=t.getFID,s=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),a(e),s(e),n(e),i(e)}))};i.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(O,{initialState:{basket:[],user:null},reducer:M,children:Object(p.jsx)(F,{})})}),document.getElementById("root")),Y()}},[[95,1,2]]]);
//# sourceMappingURL=main.4f26fc70.chunk.js.map