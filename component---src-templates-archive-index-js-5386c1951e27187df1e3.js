(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return u});a(48);var n=a(7),r=a.n(n),i=a(0),o=a.n(i),c=a(149),l=a(156),s=(a(256),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data.allMarkdownRemark.edges.map(function(e,t){var a=e.node.frontmatter.date,n=e.node.fields.slug;return o.a.createElement("div",{key:n},o.a.createElement(c.Link,{to:n},o.a.createElement("span",null,a),"/",o.a.createElement("span",null,e.node.frontmatter.title)))});return o.a.createElement(l.a,null,e)},t}(i.Component));t.default=s;var u="447778385"},148:function(e,t,a){var n;e.exports=(n=a(152))&&n.default||n},149:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(147),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(148),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(34);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},151:function(e,t,a){var n={title:"HUNDRED",author:"Junho Baik",description:"Junho Baik's blog",siteUrl:"https://junhobaik.github.io",titleLogo:function(){return a(155)},titleLogoShow:!0,bio:"Jr. FRONT END DEVELOPER",bioShow:!0,googleAnalyticsTrackingId:"UA-103592668-4",disqusShortname:"dev-hundred-blog"};e.exports=n},152:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(49),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},153:function(e){e.exports={data:{site:{siteMetadata:{title:"HUNDRED"}}}}},154:function(e,t,a){},155:function(e,t,a){e.exports=a.p+"static/profile-84a4704395a2596be588c30aae784e41.png"},156:function(e,t,a){"use strict";a(33);var n=a(153),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(160),s=a.n(l),u=a(149),d=a(150),m=a(157),p=(a(154),a(7)),g=a.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){return i.a.createElement("footer",{id:"footer"},i.a.createElement("div",{className:"copyright"},i.a.createElement("span",null,"© ",i.a.createElement("a",{href:"mailto:junhobaik@gmail.com"},"Junho Baik")," 2018. All rights reserved")),i.a.createElement("div",{className:"submenu"}))},t}(r.Component),f=a(151),E=a.n(f),y=(a(161),a(25),a(162),a(48),a(158),a(159),a(163)),v=new(a.n(y).a)({baseFontSize:"16px",baseLineHeight:1.666,headerFontFamily:["Nanum Gothic"],bodyFontFamily:["Nanum Gothic Coding"]}),b=[{name:"Nanum Gothic Coding",bold:[400,700]},{name:"Nanum Gothic",bold:[400,700]}].map(function(e){return e.bold?e.name.replace(/ /gi,"+")+":"+e.bold.toString():""+e.name.replace(/ /gi,"+")}).join("|").toString(),w=(v.rhythm,v.scale,function(e){var t=e.children,a=(e.data,e.location);return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){var n;n=a?a.href:E.a.siteUrl;var r=function(e,t){var a={};return a=e?{display:"inline-block"}:{display:"none"},t||(a=Object.assign({},a,{width:"1.5rem",height:"1.5rem",marginRight:"0.1rem"})),a}(E.a.titleLogoShow,E.a.bioShow),o=E.a.bioShow?{}:{display:"none"};return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:E.a.description},{name:"og:type",content:"website"},{name:"og:title",content:E.a.title},{name:"og:description",content:E.a.description},{name:"og:image",content:E.a.titleLogo()},{name:"og:url",content:n}]},i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+b,rel:"stylesheet"}),i.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+E.a.googleAnalyticsTrackingId}),i.a.createElement("script",null,"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', '"+E.a.googleAnalyticsTrackingId+"');\n              ")),i.a.createElement("div",{id:"wrap"},i.a.createElement("header",{id:"header"},i.a.createElement("div",{className:"title"},i.a.createElement("div",{className:"title-wrap"},i.a.createElement(u.Link,{to:"/"},i.a.createElement("div",{className:"logo-img",style:r},i.a.createElement("img",{src:E.a.titleLogo(),alt:"logo"})),i.a.createElement("div",null,i.a.createElement("h1",null,E.a.title),i.a.createElement("p",{className:"bio",style:o},E.a.bio))))),i.a.createElement("div",{className:"menu"},i.a.createElement("div",{className:"home"},i.a.createElement(u.Link,{to:"/"},i.a.createElement(d.a,{icon:m.c,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Home"))),i.a.createElement("div",{className:"tags"},i.a.createElement(u.Link,{to:"/taglist"},i.a.createElement(d.a,{icon:m.f,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Tags"))),i.a.createElement("div",{className:"search"},i.a.createElement(u.Link,{to:"/search"},i.a.createElement(d.a,{icon:m.d,fixedWidth:!0,transform:"down-1"}),i.a.createElement("span",null,"Search"))))),i.a.createElement("article",{id:"article"},t)),i.a.createElement(h,null))},data:n})});w.propTypes={children:c.a.node.isRequired,location:c.a.object.isRequired};t.a=w},256:function(e,t,a){}}]);
//# sourceMappingURL=component---src-templates-archive-index-js-5386c1951e27187df1e3.js.map