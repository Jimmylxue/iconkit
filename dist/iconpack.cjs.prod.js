"use strict";var e=require("ora"),t=require("axios"),r=require("fs/promises"),s=require("path"),i=require("svg2png"),a=require("sharp");function n(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=n(e),o=n(t),u=n(i),p=n(a);class d extends Error{failMessage=void 0;originErrorMessage;constructor(e,t){super(),this.failMessage=e,this.originErrorMessage=t}}let f=c.default(),m=c.default();const l="ic_launcher.png",w="ic_launcher_round.png",g=[{dirname:"mipmap-hdpi",size:72},{dirname:"mipmap-mdpi",size:48},{dirname:"mipmap-xhdpi",size:96},{dirname:"mipmap-xxhdpi",size:144},{dirname:"mipmap-xxxhdpi",size:192}],h={code:1e4,message:"--input参数未输入，请检查--input输入"},y={code:10001,message:"--input配置的远程地址下载失败，请检查路径是否正确与网络环境"},v={code:10002,message:"--input配置的本地地址获取，请检查路径是否正确"},x={code:10003,message:"生成圆角icon资源失败，请检查图标或联系作者"},z={code:10004,message:"生成icon资源失败，请检查文件是否含有相同文件"};async function B(e){await async function(e){try{const t=await o.default({method:"get",url:e,responseType:"arraybuffer"}),r=Buffer.from(t.data);M.updateSourceBuffer(r)}catch(e){throw new d(y,e.message)}}(e)}const M={sourceBuffer:void 0,updateSourceBuffer(e){this.sourceBuffer=e}};async function S(){switch(M.pathType){case"remote":return void await B(M["--input"]);case"relative":return void await async function(e){try{const t=await r.readFile(s.resolve(process.cwd(),e));M.updateSourceBuffer(t)}catch(e){throw new d(v,e.message)}}(M["--input"]);case"absolute":return void await async function(e){try{const t=await r.readFile(e);M.updateSourceBuffer(t)}catch(e){throw new d(v,e.message)}}(M["--input"]);default:return void console.log("inputSourceType异常")}}async function $(){const e=process.argv.slice(2),t={};e.forEach((e=>{const[r,s]=e.split("=");t[r]=s})),await async function(e){if(!e["--input"])throw new d(h,"check --input");e["--input"]&&(M["--input"]=e["--input"],M.pathType=function(e){return/^https?:\/\//.test(e)?"remote":e.startsWith("/")?"absolute":"relative"}(e["--input"]),await S())}(t)}function q(e,t,r){return new Promise((s=>{const i=e/2,a=Buffer.from(`<svg><circle cx="${i}" cy="${i}" r="${i}" /></svg>`);p.default(t).resize(e,e).composite([{input:a,blend:"dest-in"}]).toFile(r,((e,t)=>{if(s(!0),e)throw new d(x,e.message)}))}))}async function b(){try{f.info("Icon Generating In Progress......"),await $(),await async function(){try{const e=M.sourceBuffer;for(const t of g){const i=await u.default(e,{width:t.size,height:t.size}),a=s.resolve(process.cwd(),t.dirname);r.stat(a)||await r.mkdir(a),await r.writeFile(s.resolve(process.cwd(),t.dirname,l),i),await q(t.size,s.resolve(process.cwd(),t.dirname,l),s.resolve(process.cwd(),t.dirname,w)),m.succeed(`✅ Generate Success In ${t.dirname}`)}}catch(e){throw new d(z,e.message)}}(),f.stop(),f.succeed("Icon Generating Success")}catch(e){!function(e){const t=c.default();t.fail(`error: ${e.failMessage?.message}, code: ${e.failMessage?.code}, message: ${e?.originErrorMessage}`),t.clear()}(e)}}module.exports=()=>{b()};