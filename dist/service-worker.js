if(!self.define){let e,s={};const o=(o,t)=>(o=new URL(o+".js",t).href,s[o]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=o,e.onload=s,document.head.appendChild(e)}else e=o,importScripts(o),s()})).then((()=>{let e=s[o];if(!e)throw new Error(`Module ${o} didn’t register its module`);return e})));self.define=(t,i)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let n={};const c=e=>o(e,r),f={module:{uri:r},exports:n,require:c};s[r]=Promise.all(t.map((e=>f[e]||c(e)))).then((e=>(i(...e),n)))}}define(["./workbox-2d118ab0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"homefilmtv"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/hometv/css/app.7fe65cd9.css",revision:null},{url:"/hometv/index.html",revision:"166cfb1d18ec5cab487e3f95b7d2a893"},{url:"/hometv/js/app.8b5b4f1e.js",revision:null},{url:"/hometv/js/chunk-vendors.67b87e64.js",revision:null},{url:"/hometv/manifest.json",revision:"ff83e9fcb18032cdcff8f31cad456b2b"},{url:"/hometv/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map
