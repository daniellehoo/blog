(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{nGlL:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),l=n.n(a),r=n("Wbzz"),o=n("Bl7J"),c=function(e){var t=e.pageContext;console.log(t);var n=t.previousPagePath,a=t.nextPagePath;return l.a.createElement("nav",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("div",null,n&&l.a.createElement(r.Link,{to:n},l.a.createElement("button",null,"← Newer Posts"))),l.a.createElement("div",{style:{justifySelf:"flex-end"}},a&&l.a.createElement(r.Link,{to:a},l.a.createElement("button",null,"Older Posts →"))))};n.d(t,"pageQuery",(function(){return u}));var u="4100081851";t.default=function(e){var t=e.data,n=e.pageContext,a=e.location,u=t.allMarkdownRemark.edges;return l.a.createElement(o.a,{location:a},u.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return l.a.createElement("article",{key:t.fields.slug},l.a.createElement("header",null,l.a.createElement("h3",null,l.a.createElement(r.Link,{to:t.fields.slug}," ",n," ")),l.a.createElement("small",null,t.frontmatter.date)),l.a.createElement("section",null,l.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})),l.a.createElement(c,{pageContext:n}))}}}]);
//# sourceMappingURL=component---src-templates-blog-archive-js-31f72ded8ff46750d0bb.js.map