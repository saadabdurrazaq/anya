(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ea9f0d4"],{"0b4f":function(e,t,a){},b89a:function(e,t,a){"use strict";a("0b4f")},e7a5:function(e,t,a){"use strict";var n=a("7a23"),r={class:"navbar navbar-expand-lg navbar-light bg-light"},o=Object(n["createElementVNode"])("a",{class:"navbar-brand",href:"#"},"PA Tulungagung",-1),c=Object(n["createElementVNode"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["createElementVNode"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarNav"},s={class:"navbar-nav ml-auto"},l={class:"nav-item active"},d=Object(n["createTextVNode"])("Home"),u={class:"nav-item"},b=Object(n["createTextVNode"])("Syarat Berperkara"),v={class:"nav-item"},h=Object(n["createTextVNode"])("Gugatan Mandiri"),f={class:"nav-item"},m=Object(n["createTextVNode"])("Narasi");function p(e,t,a,p,w,g){var O=Object(n["resolveComponent"])("router-link");return Object(n["openBlock"])(),Object(n["createElementBlock"])("nav",r,[o,c,Object(n["createElementVNode"])("div",i,[Object(n["createElementVNode"])("ul",s,[Object(n["createElementVNode"])("li",l,[Object(n["createVNode"])(O,{to:{name:"welcome"},class:"nav-link",href:"#"},{default:Object(n["withCtx"])((function(){return[d]})),_:1})]),Object(n["createElementVNode"])("li",u,[Object(n["createVNode"])(O,{to:{name:"syarat-berperkara"},class:"nav-link",href:"#"},{default:Object(n["withCtx"])((function(){return[b]})),_:1})]),Object(n["createElementVNode"])("li",v,[Object(n["createVNode"])(O,{to:{name:"perceraian"},class:"nav-link",href:"#"},{default:Object(n["withCtx"])((function(){return[h]})),_:1})]),Object(n["createElementVNode"])("li",f,[Object(n["createVNode"])(O,{to:{name:"narasi"},class:"nav-link",href:"#"},{default:Object(n["withCtx"])((function(){return[m]})),_:1})])])])])}var w=a("1157"),g=a.n(w);const O=g.a;window.$=O,function(e,t,a){var n=e();e.fn.dropdownHover=function(a){return"ontouchstart"in document?this:(n=n.add(this.parent()),this.each((function(){var r,o,c=e(this),i=c.parent(),s={delay:500,hoverDelay:0,instantlyCloseOthers:!0},l={delay:e(this).data("delay"),hoverDelay:e(this).data("hover-delay"),instantlyCloseOthers:e(this).data("close-others")},d="show.bs.dropdown",u="hide.bs.dropdown",b=e.extend(!0,{},s,a,l);function v(e){c.parents(".navbar").find(".navbar-toggle").is(":visible")||(t.clearTimeout(r),t.clearTimeout(o),o=t.setTimeout((function(){n.find(":focus").blur(),!0===b.instantlyCloseOthers&&n.removeClass("open"),t.clearTimeout(o),c.attr("aria-expanded","true"),i.addClass("open"),c.trigger(d)}),b.hoverDelay))}i.hover((function(e){if(!i.hasClass("open")&&!c.is(e.target))return!0;v(e)}),(function(){t.clearTimeout(o),r=t.setTimeout((function(){c.attr("aria-expanded","false"),i.removeClass("open"),c.trigger(u)}),b.delay)})),c.hover((function(e){if(!i.hasClass("open")&&!i.is(e.target))return!0;v(e)})),i.find(".dropdown-submenu").each((function(){var a,n=e(this);n.hover((function(){t.clearTimeout(a),n.children(".dropdown-menu").show(),n.siblings().children(".dropdown-menu").hide()}),(function(){var e=n.children(".dropdown-menu");a=t.setTimeout((function(){e.hide()}),b.delay)}))}))})))},e(document).ready((function(){e('[data-hover="dropdown"]').dropdownHover()}))}(g.a,window);var j={data:function(){return{data_menus:[]}},methods:{showData:function(){}},computed:{},watch:{},created:function(){},mounted:function(){}};a("b89a");j.render=p;t["a"]=j}}]);
//# sourceMappingURL=chunk-6ea9f0d4.dae695f0.js.map