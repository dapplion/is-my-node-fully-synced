(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{200:function(e,t,a){e.exports=a(487)},205:function(e,t,a){},218:function(e,t){},220:function(e,t){},318:function(e,t){},399:function(e,t){},486:function(e,t,a){},487:function(e,t,a){"use strict";a.r(t);var n=a(5),s=a.n(n),c=a(192),o=a.n(c),r=(a(205),a(21)),l=a.n(r),i=a(52),u=a(72),h=a(110),m=a(193),b=a(194),p=a(198),d=a(195),k=a(199),g=a(32),f=a(196),w=a.n(f),v=a(53),y=a(197),j=a.n(y),E=a(109);a(484),a(485),a(486);window.jQuery=window.$=v,window.Tether=j.a,window.Popper=E.default;var O=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={url:"https://mainnet.infura.io",blocks:{}},a.handleChange=a.handleChange.bind(Object(g.a)(Object(g.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(Object(g.a)(a))),a}return Object(k.a)(t,e),Object(b.a)(t,[{key:"componentDidUpdate",value:function(){v(function(){v('[data-toggle="tooltip"]').tooltip()})}},{key:"handleChange",value:function(e){this.setState({url:e.target.value})}},{key:"handleSubmit",value:function(){var e=Object(h.a)(l.a.mark(function e(t){var a,n,s,c,o,r,m=this;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a=new w.a(this.state.url),window.web3=a,e.next=5,a.eth.net.isListening();case 5:return n=e.sent,e.next=8,a.eth.net.getNetworkType();case 8:return s=e.sent,this.setState({isListening:n,networkType:s}),e.next=12,a.eth.getBlockNumber();case 12:for(c=e.sent,this.setState({latestBlock:c}),o=[],r=c;r>0;r-=Math.floor(c/100))o.push(r);return e.next=18,Promise.all(o.map(function(){var e=Object(h.a)(l.a.mark(function e(t){var n,s,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.eth.getBlock(t);case 3:if(e.t0=e.sent,e.t0){e.next=6;break}e.t0={};case 6:n=e.t0,s=new Date(1e3*(n.timestamp||1)).toLocaleDateString(),c=(n.transactions||[]).length,m.setState({blocks:Object(u.a)({},m.state.blocks,Object(i.a)({},t,Object(u.a)({success:Boolean(n.hash)},n||{},{date:s,txCount:c})))}),e.next=15;break;case 12:e.prev=12,e.t1=e.catch(0),m.setState({blocks:Object(u.a)({},m.state.blocks,Object(i.a)({},t,{success:!1,message:e.t1.message}))});case 15:case"end":return e.stop()}},e,this,[[0,12]])}));return function(t){return e.apply(this,arguments)}}()));case 18:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object.keys(this.state.blocks).length&&console.log("You can inspect the blocks in detail here: ",{blocks:this.state.blocks}),s.a.createElement("div",{className:"App"},s.a.createElement("header",{className:"App-header"},s.a.createElement("div",{className:"mb-3"},s.a.createElement("h4",null,"Is my node fully synced?")),s.a.createElement("form",{className:"form-inline mb-3",onSubmit:this.handleSubmit},s.a.createElement("div",{className:"input-group"},s.a.createElement("label",{htmlFor:"inputUrl",className:"sr-only"},"Url"),s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Node url",style:{minWidth:"300px"},value:this.state.url,onChange:this.handleChange}),s.a.createElement("div",{className:"input-group-append"},s.a.createElement("button",{className:"btn btn-secondary",type:"submit",value:"Submit"},"Scan")))),this.state.isListening&&s.a.createElement(s.a.Fragment,null,s.a.createElement("p",null,"Network ",s.a.createElement("strong",null,this.state.networkType)," is listening"," ","latestBlock"in this.state?", latest block: ".concat(this.state.latestBlock):""),Object.keys(this.state.blocks).length?s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"row"},Object.keys(this.state.blocks).map(function(t){var a=e.state.blocks[t];return s.a.createElement("div",{key:t,className:"col",style:{width:"2px",height:"40px",padding:"0px",backgroundColor:a.success?"green":"red"},"data-toggle":"tooltip","data-placement":"top","data-html":"true",title:"<b>Block number</b> ".concat(t," ").concat(a.success?"<b>Hash</b> ".concat(a.hash," <br/> <b>Date</b> ").concat(a.date," <br/> <b>TX count</b> ").concat(a.txCount):"Error: ".concat(a.message))})}))):null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[200,1,2]]]);
//# sourceMappingURL=main.4fd8720d.chunk.js.map