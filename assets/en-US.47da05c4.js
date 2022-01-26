import{_ as o}from"./elevation.6f443b25.js";import{e as l,o as c,c as n,a as t,i as d,j as a,U as r,m as s}from"./vendor.efca09d3.js";const h={components:{}},i={class:"varlet-site-doc"},p=t("h1",null,"BackTop",-1),m=t("div",{class:"card"},[t("h3",null,"Intro"),t("p",null,"A button to back to top.")],-1),u={class:"card"},b=t("h3",null,"Install",-1),_=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"import"),s(" { createApp } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'vue'"),s(`
`),t("span",{class:"hljs-keyword"},"import"),s(" { BackTop } "),t("span",{class:"hljs-keyword"},"from"),s(),t("span",{class:"hljs-string"},"'@varlet/ui'"),s(`

createApp().use(BackTop)
`)])],-1),j={class:"card"},v=t("h3",null,"Basic Usage",-1),g=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-cell"),s(),t("span",{class:"hljs-attr"},"v-for"),s("="),t("span",{class:"hljs-string"},'"list in lists"'),s(),t("span",{class:"hljs-attr"},":key"),s("="),t("span",{class:"hljs-string"},'"list"'),s(">")]),s("Scroll to bottom {{ list }}"),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"var-cell"),s(">")]),s(`
  `),t("span",{class:"hljs-tag"},[s("<"),t("span",{class:"hljs-name"},"var-back-top"),s(),t("span",{class:"hljs-attr"},":duration"),s("="),t("span",{class:"hljs-string"},'"300"'),s(" />")]),s(`
`),t("span",{class:"hljs-tag"},[s("</"),t("span",{class:"hljs-name"},"div"),s(">")]),s(`
`)])],-1),y=t("pre",{class:"hljs"},[t("code",null,[t("link",{rel:"stylesheet",href:"./highlight.css"}),t("span",{class:"hljs-keyword"},"const"),s(" lists = [...Array("),t("span",{class:"hljs-number"},"100"),s(`).keys()]

`),t("span",{class:"hljs-keyword"},"export"),s(),t("span",{class:"hljs-keyword"},"default"),s(` {
  `),t("span",{class:"hljs-function"},[t("span",{class:"hljs-title"},"setup"),s("("),t("span",{class:"hljs-params"}),s(")")]),s(` {
    `),t("span",{class:"hljs-keyword"},"return"),s(` {
      lists
    }
  }
}
`)])],-1),k=r('<h2>API</h2><div class="card"><h3>Props</h3><table><thead><tr><th>Prop</th><th>Description</th><th>Type</th><th>Default</th></tr></thead><tbody><tr><td><code>target</code></td><td>The target to trigger scroll, If it is undefined back top will listen to the nearest scrollable parent.</td><td><em>string | HTMLElement</em></td><td><code>-</code></td></tr><tr><td><code>visibility-height</code></td><td>The button will not show until the scroll height reaches this value</td><td><em>string | number</em></td><td><code>200</code></td></tr><tr><td><code>bottom</code></td><td><code>BackTop</code> \u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u7684\u9AD8\u5EA6</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>right</code></td><td><code>BackTop</code> \u8DDD\u79BB\u9875\u9762\u53F3\u4FA7\u7684\u5BBD\u5EA6</td><td><em>string | number</em></td><td><code>40</code></td></tr><tr><td><code>duration</code></td><td>Time to return to top\uFF08ms\uFF09</td><td><em>number</em></td><td><code>300</code></td></tr></tbody></table></div><div class="card"><h3>Events</h3><table><thead><tr><th>Event</th><th>Description</th><th>arguments</th></tr></thead><tbody><tr><td><code>click</code></td><td>Triggers when click</td><td><code>event: Event</code></td></tr></tbody></table></div><div class="card"><h3>Slots</h3><table><thead><tr><th>Name</th><th>Description</th><th>SlotProps</th></tr></thead><tbody><tr><td><code>default</code></td><td>Custom the content</td><td><code>-</code></td></tr></tbody></table></div><div class="card"><h3>Style Variables</h3><p>Here are the CSS variables used by the component, Styles can be customized using <a href="#/en-US/style-provider">StyleProvider</a></p><table><thead><tr><th>Variable</th><th>Default</th></tr></thead><tbody><tr><td><code>--back-top-right</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-bottom</code></td><td><code>40px</code></td></tr><tr><td><code>--back-top-button-size</code></td><td><code>40px</code></td></tr></tbody></table></div>',5);function f(w,T,x,S,B,V){const e=l("var-site-code-example");return c(),n("div",i,[p,m,t("div",u,[b,d(e,null,{default:a(()=>[_]),_:1})]),t("div",j,[v,d(e,null,{default:a(()=>[g]),_:1}),d(e,null,{default:a(()=>[y]),_:1})]),k])}var E=o(h,[["render",f]]);export{E as default};
