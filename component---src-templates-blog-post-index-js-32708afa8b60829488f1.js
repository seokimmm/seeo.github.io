(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",function(){return w});n(48),n(158),n(159);var a=n(7),o=n.n(a),r=n(0),i=n.n(r),s=n(149),c=n(4),l=n.n(c),u=n(160),d=n.n(u),m=n(197),p=n(150),f=n(168),h=n(157),g=(n(202),n(156)),y=n(151),b=n.n(y),v=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.data,n=e.location,a=e.pageContext,o=t.markdownRemark,r=o.id,c=o.frontmatter,l=o.html,u=o.excerpt,y=t.site.siteMetadata.title,v=c.title,w=c.tags,E=a.previous,C=a.next,S=c.tags.concat(c.keywords).toString(),k=b.a.disqusShortname,_={identifier:r,title:y},q=w.map(function(e,t){return i.a.createElement("span",{key:"tag-"+t},"#",e)});return i.a.createElement(g.a,{location:n},i.a.createElement(d.a,{title:""+v,meta:[{name:"keywords",content:S},{name:"og:title",content:v},{name:"og:description",content:u}]}),i.a.createElement("div",{className:"blog-post-container"},i.a.createElement("div",{className:"blog-post"},i.a.createElement("div",{className:"post-header"},i.a.createElement("h1",{className:"title"},""+v),i.a.createElement("div",{className:"date"},i.a.createElement(p.a,{icon:f.a,fixedWidth:!0}),c.date),i.a.createElement("div",{className:"tags"},q)),i.a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:l}})),i.a.createElement("div",{className:"blog-post-nav"},E&&i.a.createElement("div",{className:"prev"},i.a.createElement("div",{className:"nav-wrap"},i.a.createElement("div",{className:"angle"},i.a.createElement(p.a,{icon:h.a,fixedWidth:!0})),i.a.createElement(s.Link,{to:E.fields.slug,rel:"prev"},i.a.createElement("div",null,i.a.createElement("p",null,"Previous Post"),i.a.createElement("span",null,E.frontmatter.title))))),C&&i.a.createElement("div",{className:"next"},i.a.createElement("div",{className:"nav-wrap"},i.a.createElement(s.Link,{to:C.fields.slug,rel:"next"},i.a.createElement("div",null,i.a.createElement("p",null,"Next Post"),i.a.createElement("span",null,C.frontmatter.title))),i.a.createElement("div",{className:"angle"},i.a.createElement(p.a,{icon:h.b,fixedWidth:!0})))))),b.a.disqusShortname?i.a.createElement("div",{className:"comments"},i.a.createElement(m.DiscussionEmbed,{shortname:k,config:_})):null)},t}(i.a.Component);v.propTypes={data:l.a.object.isRequired,location:l.a.object.isRequired,pageContext:l.a.object.isRequired},t.default=v;var w="1815311691"},148:function(e,t,n){var a;e.exports=(a=n(152))&&a.default||a},149:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return f}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return p});var a=n(0),o=n.n(a),r=n(4),i=n.n(r),s=n(147),c=n.n(s);n.d(t,"Link",function(){return c.a}),n.d(t,"withPrefix",function(){return s.withPrefix}),n.d(t,"navigate",function(){return s.navigate}),n.d(t,"push",function(){return s.push}),n.d(t,"replace",function(){return s.replace}),n.d(t,"navigateTo",function(){return s.navigateTo});var l=n(148),u=n.n(l);n.d(t,"PageRenderer",function(){return u.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var m=o.a.createContext({}),p=function(e){return o.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},151:function(e,t,n){e.exports={title:"HUNDRED",author:"Junho Baik",description:"Junho Baik's blog",siteUrl:"https://junhobaik.github.io",titleLogo:function(){return n(155)},titleLogoShow:!0,bio:"Jr. FRONT END DEVELOPER",bioShow:!0,googleAnalyticsTrackingId:"UA-103592668-4",disqusShortname:"dev-hundred-blog",naverWebmasterHtmlTagCode:"b82306681a7f295c96378798aef6849495be33fd"}},152:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),o=n.n(a),r=n(4),i=n.n(r),s=n(49),c=n(2),l=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return o.a.createElement(s.a,Object.assign({location:t,pageResources:n},n.json))};l.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=l},153:function(e){e.exports={data:{site:{siteMetadata:{title:"HUNDRED"}}}}},154:function(e,t,n){},155:function(e,t,n){e.exports=n.p+"static/profile-84a4704395a2596be588c30aae784e41.png"},156:function(e,t,n){"use strict";n(33);var a=n(153),o=n(0),r=n.n(o),i=n(4),s=n.n(i),c=n(160),l=n.n(c),u=n(149),d=n(150),m=n(157),p=(n(154),n(7)),f=n.n(p),h=function(e){function t(){return e.apply(this,arguments)||this}return f()(t,e),t.prototype.render=function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("div",{className:"copyright"},r.a.createElement("span",null,"© ",r.a.createElement("a",{href:"mailto:junhobaik@gmail.com"},"Junho Baik")," 2018. All rights reserved")),r.a.createElement("div",{className:"submenu"}))},t}(o.Component),g=n(151),y=n.n(g),b=(n(161),n(25),n(162),n(48),n(158),n(159),n(163)),v=new(n.n(b).a)({baseFontSize:"16px",baseLineHeight:1.666,headerFontFamily:["Nanum Gothic"],bodyFontFamily:["Nanum Gothic Coding"]}),w=[{name:"Nanum Gothic Coding",bold:[400,700]},{name:"Nanum Gothic",bold:[400,700]}].map(function(e){return e.bold?e.name.replace(/ /gi,"+")+":"+e.bold.toString():""+e.name.replace(/ /gi,"+")}).join("|").toString(),E=(v.rhythm,v.scale,function(e){var t=e.children,n=(e.data,e.location);return r.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){var a;a=n?n.href:y.a.siteUrl;var o=function(e,t){var n={};return n=e?{display:"inline-block"}:{display:"none"},t||(n=Object.assign({},n,{width:"1.5rem",height:"1.5rem",marginRight:"0.1rem"})),n}(y.a.titleLogoShow,y.a.bioShow),i=y.a.bioShow?{}:{display:"none"},s=[{name:"description",content:y.a.description},{name:"og:type",content:"website"},{name:"og:title",content:y.a.title},{name:"og:description",content:y.a.description},{name:"og:image",content:y.a.titleLogo()},{name:"og:url",content:a}];return y.a.naverWebmasterHtmlTagCode&&(s=s.concat([{name:"naver-site-verification",content:y.a.naverWebmasterHtmlTagCode}])),r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:e.site.siteMetadata.title,meta:s},r.a.createElement("link",{href:"https://fonts.googleapis.com/css?family="+w,rel:"stylesheet"}),r.a.createElement("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id="+y.a.googleAnalyticsTrackingId}),r.a.createElement("script",null,"\n                window.dataLayer = window.dataLayer || [];\n                function gtag(){dataLayer.push(arguments);}\n                gtag('js', new Date());\n                gtag('config', '"+y.a.googleAnalyticsTrackingId+"');\n              ")),r.a.createElement("div",{id:"wrap"},r.a.createElement("header",{id:"header"},r.a.createElement("div",{className:"title"},r.a.createElement("div",{className:"title-wrap"},r.a.createElement(u.Link,{to:"/"},r.a.createElement("div",{className:"logo-img",style:o},r.a.createElement("img",{src:y.a.titleLogo(),alt:"logo"})),r.a.createElement("div",null,r.a.createElement("h1",null,y.a.title),r.a.createElement("p",{className:"bio",style:i},y.a.bio))))),r.a.createElement("div",{className:"menu"},r.a.createElement("div",{className:"home"},r.a.createElement(u.Link,{to:"/"},r.a.createElement(d.a,{icon:m.c,fixedWidth:!0,transform:"down-1"}),r.a.createElement("span",null,"Home"))),r.a.createElement("div",{className:"tags"},r.a.createElement(u.Link,{to:"/taglist"},r.a.createElement(d.a,{icon:m.f,fixedWidth:!0,transform:"down-1"}),r.a.createElement("span",null,"Tags"))),r.a.createElement("div",{className:"search"},r.a.createElement(u.Link,{to:"/search"},r.a.createElement(d.a,{icon:m.d,fixedWidth:!0,transform:"down-1"}),r.a.createElement("span",null,"Search"))))),r.a.createElement("article",{id:"article"},t)),r.a.createElement(h,null))},data:a})});E.propTypes={children:s.a.node.isRequired,location:s.a.object.isRequired};t.a=E},180:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var a=window.document.createElement("script");return a.async=!0,a.src=e,a.id=t,n.appendChild(a),a},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var a=void 0;return function(){var o=this,r=arguments,i=n&&!a;window.clearTimeout(a),a=setTimeout(function(){a=null,n||e.apply(o,r)},t),i&&e.apply(o,r)}}},197:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=t.CommentEmbed=t.CommentCount=void 0;var a=n(198),o=n(199),r=n(200);t.CommentCount=a.CommentCount,t.CommentEmbed=o.CommentEmbed,t.DiscussionEmbed=r.DiscussionEmbed;var i={CommentCount:a.CommentCount,CommentEmbed:o.CommentEmbed,DiscussionEmbed:r.DiscussionEmbed};t.default=i},198:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a},s=n(180);var c=(0,s.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1);t.CommentCount=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById("dsq-count-scr")?c():(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/count.js","dsq-count-scr",e.body)}},{key:"cleanInstance",value:function(){var e=window.document.body;(0,s.removeScript)("dsq-count-scr",e),window.DISQUSWIDGETS=void 0}},{key:"render",value:function(){return i.default.createElement("span",{className:"disqus-comment-count","data-disqus-identifier":this.props.config.identifier,"data-disqus-url":this.props.config.url},this.props.children)}}]),t}()},199:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a};(t.CommentEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"getSrc",value:function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")}},{key:"render",value:function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0"})}}]),t}()).defaultProps={showMedia:!0,showParentComment:!0,width:420,height:320}},200:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var a,o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=(a=r)&&a.__esModule?a:{default:a},s=n(180);t.DiscussionEmbed=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.default.Component),o(t,[{key:"componentWillMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance()}},{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){if(this.props.shortname!==e.shortname)return!0;var t=e.config,n=this.props.config;return t.url!==n.url&&t.identifier!==n.identifier}},{key:"componentWillUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance()}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById("dsq-embed-scr")?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,s.insertScript)("https://"+this.props.shortname+".disqus.com/embed.js","dsq-embed-scr",e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,s.removeScript)("dsq-embed-scr",e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById("disqus_thread");if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild)}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.callbacks.onNewComment=[e.onNewComment]}}},{key:"render",value:function(){return i.default.createElement("div",{id:"disqus_thread"})}}]),t}()},202:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-blog-post-index-js-32708afa8b60829488f1.js.map