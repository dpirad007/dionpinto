import{E as f,s as p}from"./index-cd4245c1.js";const n=[];function _(t,b=f){let o;const i=new Set;function r(e){if(p(t,e)&&(t=e,o)){const c=!n.length;for(const s of i)s[1](),n.push(s,t);if(c){for(let s=0;s<n.length;s+=2)n[s][0](n[s+1]);n.length=0}}}function a(e){r(e(t))}function l(e,c=f){const s=[e,c];return i.add(s),i.size===1&&(o=b(r)||f),e(t),()=>{i.delete(s),i.size===0&&(o(),o=null)}}return{set:r,update:a,subscribe:l}}let u="",d="";function g(t){u=t.base,d=t.assets||u}export{d as a,u as b,g as s,_ as w};
