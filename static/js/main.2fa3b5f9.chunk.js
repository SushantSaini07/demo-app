(this["webpackJsonpdemo-project"]=this["webpackJsonpdemo-project"]||[]).push([[0],{14:function(t,e,n){"use strict";n.r(e);var c=n(2),o=n.n(c),r=n(1),s=n.n(r),i=n(5),a=n(6),d=n(8),u=n(7),h=(n(4),n(0)),j=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(t){var c;return Object(i.a)(this,n),(c=e.call(this,t)).fetch_random=function(){fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(t){c.setState({random:t})}))},c.display_random=function(){c.fetch_random();var t=Object(h.jsxs)("p",{align:"center",children:[Object(h.jsxs)("strong",{children:["Quote : ",c.state.random.content]}),Object(h.jsxs)("i",{children:["- ",c.state.random.author]})]});s.a.render(t,document.getElementById("content"))},c.display_list=function(){var t=Object(h.jsx)("div",{className:"App",children:Object(h.jsxs)("table",{children:[Object(h.jsx)("th",{children:"Tag"}),Object(h.jsx)("th",{children:"Author"}),Object(h.jsx)("th",{children:"Quote"}),c.state.items.results.map((function(t){return Object(h.jsxs)("tr",{children:[Object(h.jsxs)("td",{children:[" ",t.tags," "]}),Object(h.jsxs)("td",{children:[" ",t.author," "]}),Object(h.jsxs)("td",{children:[" ",t.content]})]})}))]})});s.a.render(t,document.getElementById("content"))},c.state={items:{},random:{}},c}return Object(a.a)(n,[{key:"componentDidMount",value:function(){var t=this;fetch("https://quotable.io/quotes?page=2").then((function(t){return t.json()})).then((function(e){t.setState({items:e})})),fetch("https://api.quotable.io/random").then((function(t){return t.json()})).then((function(e){t.setState({random:e})}))}},{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:this.display_random,children:"SDL API 1"}),Object(h.jsx)("button",{onClick:this.display_list,children:"SDL API 2"})]})}}]),n}(o.a.Component);s.a.render(Object(h.jsx)(j,{}),document.getElementById("root")),s.a.render(Object(h.jsx)(j,{}),document.getElementById("root"))},4:function(t,e,n){}},[[14,1,2]]]);
//# sourceMappingURL=main.2fa3b5f9.chunk.js.map