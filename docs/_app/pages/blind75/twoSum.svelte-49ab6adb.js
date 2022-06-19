import{S as Ae,i as Ie,s as Be,e as s,k as o,t as d,w as R,c as n,a as l,m as i,h as c,d as a,x as Y,b as e,f as ke,g as $t,J as t,y as j,E as Le,q as J,o as q,B as G}from"../../chunks/index-cd4245c1.js";import{b as He}from"../../chunks/paths-c8fbcc1d.js";import{S as Ne,N as Oe,F as Fe}from"../../chunks/Footer-8b9c5841.js";import{T as _t}from"../../chunks/Title-6ea0487f.js";function Ve(De){let h,nt,wt,lt,Et,ot,gt,ct,x,ut,$,U,b,yt,u,w,P,St,it,Ct,Tt,z,xt,bt,_,K,D,Pt,Dt,Q,A,At,It,W,I,Bt,kt,E,B,Lt,k,Ht,g,Nt,Ot,m,L,Ft,H,N,Vt,oe=`
    class Solution:
        def twoSum(self, nums: List[int], target: int) -> List[int]:
            for i in range(len(nums)-1):
                for j in range(i+1,len(nums)):
                    if(nums[i]+nums[j]==target):
                        return [i,j]
				`,Mt,Rt,Yt,y,jt,dt,Jt,qt,Gt,X,Ut,zt,f,O,Kt,F,V,Qt,ie=`
    class Solution:
        def twoSum(self, nums: List[int], target: int) -> List[int]:
            d={}
            for i in range(len(nums)):
                if((target-nums[i]) in d):
                    return [i,d[target-nums[i]]]
                else:
                    d[nums[i]]=i
				`,Wt,Xt,Zt,Z,te,ee,tt,ae,re,S,se,ne,et,M,mt;return x=new Ne({}),b=new Oe({props:{curPage:"Blog"}}),P=new _t({props:{type:2,title:Pe}}),B=new _t({props:{type:5,title:"Description"}}),L=new _t({props:{type:5,title:"Code (Python) -> Brute Force"}}),O=new _t({props:{type:5,title:"Code (Python) -> Hash"}}),M=new Fe({}),{c(){h=s("head"),nt=s("meta"),wt=o(),lt=s("meta"),Et=o(),ot=s("title"),gt=d("1. Two Sum"),ct=o(),R(x.$$.fragment),ut=o(),$=s("main"),U=s("header"),R(b.$$.fragment),yt=o(),u=s("main"),w=s("div"),R(P.$$.fragment),St=o(),it=s("h4"),Ct=d("Leetcode Blind 75"),Tt=o(),z=s("h5"),xt=d("19th June 2022 ~ Dion Pinto"),bt=o(),_=s("div"),K=s("div"),D=s("a"),Pt=d("Description"),Dt=o(),Q=s("div"),A=s("a"),At=d("Code -> Brute Force"),It=o(),W=s("div"),I=s("a"),Bt=d("Code -> Hash"),kt=o(),E=s("section"),R(B.$$.fragment),Lt=o(),k=s("p"),Ht=d(`Given an array of integers nums and an integer target, return indices of the two numbers
				such that they add up to target. You may assume that each input would have exactly one
				solution, and you may not use the same element twice. You can return the answer in any
				order.

				`),g=s("a"),Nt=d("(Problem)"),Ot=o(),m=s("section"),R(L.$$.fragment),Ft=o(),H=s("pre"),N=s("code"),Vt=d(`
				`),Mt=d(oe),Rt=d(`			
			`),Yt=o(),y=s("p"),jt=d("Time Complexity => o(n"),dt=s("sup"),Jt=d("2"),qt=d(")"),Gt=o(),X=s("p"),Ut=d("Space Complexity => o(1)"),zt=o(),f=s("section"),R(O.$$.fragment),Kt=o(),F=s("pre"),V=s("code"),Qt=d(`
				`),Wt=d(ie),Xt=d(`			
			`),Zt=o(),Z=s("p"),te=d("Time Complexity => o(n)"),ee=o(),tt=s("p"),ae=d("Space Complexity => o(n)"),re=o(),S=s("a"),se=d("Back"),ne=o(),et=s("footer"),R(M.$$.fragment),this.h()},l(r){h=n(r,"HEAD",{});var p=l(h);nt=n(p,"META",{name:!0,content:!0}),wt=i(p),lt=n(p,"META",{name:!0,content:!0}),Et=i(p),ot=n(p,"TITLE",{});var de=l(ot);gt=c(de,"1. Two Sum"),de.forEach(a),p.forEach(a),ct=i(r),Y(x.$$.fragment,r),ut=i(r),$=n(r,"MAIN",{class:!0});var at=l($);U=n(at,"HEADER",{class:!0});var ce=l(U);Y(b.$$.fragment,ce),ce.forEach(a),yt=i(at),u=n(at,"MAIN",{class:!0});var v=l(u);w=n(v,"DIV",{id:!0});var rt=l(w);Y(P.$$.fragment,rt),St=i(rt),it=n(rt,"H4",{});var ue=l(it);Ct=c(ue,"Leetcode Blind 75"),ue.forEach(a),Tt=i(rt),z=n(rt,"H5",{style:!0});var me=l(z);xt=c(me,"19th June 2022 ~ Dion Pinto"),me.forEach(a),rt.forEach(a),bt=i(v),_=n(v,"DIV",{id:!0,class:!0});var st=l(_);K=n(st,"DIV",{class:!0});var fe=l(K);D=n(fe,"A",{href:!0,class:!0});var he=l(D);Pt=c(he,"Description"),he.forEach(a),fe.forEach(a),Dt=i(st),Q=n(st,"DIV",{class:!0});var pe=l(Q);A=n(pe,"A",{href:!0,class:!0});var ve=l(A);At=c(ve,"Code -> Brute Force"),ve.forEach(a),pe.forEach(a),It=i(st),W=n(st,"DIV",{class:!0});var $e=l(W);I=n($e,"A",{href:!0,class:!0});var _e=l(I);Bt=c(_e,"Code -> Hash"),_e.forEach(a),$e.forEach(a),st.forEach(a),kt=i(v),E=n(v,"SECTION",{id:!0,class:!0});var ft=l(E);Y(B.$$.fragment,ft),Lt=i(ft),k=n(ft,"P",{class:!0});var le=l(k);Ht=c(le,`Given an array of integers nums and an integer target, return indices of the two numbers
				such that they add up to target. You may assume that each input would have exactly one
				solution, and you may not use the same element twice. You can return the answer in any
				order.

				`),g=n(le,"A",{id:!0,href:!0,target:!0,class:!0});var we=l(g);Nt=c(we,"(Problem)"),we.forEach(a),le.forEach(a),ft.forEach(a),Ot=i(v),m=n(v,"SECTION",{id:!0,class:!0});var C=l(m);Y(L.$$.fragment,C),Ft=i(C),H=n(C,"PRE",{id:!0,class:!0});var Ee=l(H);N=n(Ee,"CODE",{});var ht=l(N);Vt=c(ht,`
				`),Mt=c(ht,oe),Rt=c(ht,`			
			`),ht.forEach(a),Ee.forEach(a),Yt=i(C),y=n(C,"P",{class:!0});var pt=l(y);jt=c(pt,"Time Complexity => o(n"),dt=n(pt,"SUP",{});var ge=l(dt);Jt=c(ge,"2"),ge.forEach(a),qt=c(pt,")"),pt.forEach(a),Gt=i(C),X=n(C,"P",{class:!0});var ye=l(X);Ut=c(ye,"Space Complexity => o(1)"),ye.forEach(a),C.forEach(a),zt=i(v),f=n(v,"SECTION",{id:!0,class:!0});var T=l(f);Y(O.$$.fragment,T),Kt=i(T),F=n(T,"PRE",{id:!0,class:!0});var Se=l(F);V=n(Se,"CODE",{});var vt=l(V);Qt=c(vt,`
				`),Wt=c(vt,ie),Xt=c(vt,`			
			`),vt.forEach(a),Se.forEach(a),Zt=i(T),Z=n(T,"P",{class:!0});var Ce=l(Z);te=c(Ce,"Time Complexity => o(n)"),Ce.forEach(a),ee=i(T),tt=n(T,"P",{class:!0});var Te=l(tt);ae=c(Te,"Space Complexity => o(n)"),Te.forEach(a),T.forEach(a),re=i(v),S=n(v,"A",{type:!0,class:!0,href:!0});var xe=l(S);se=c(xe,"Back"),xe.forEach(a),v.forEach(a),ne=i(at),et=n(at,"FOOTER",{class:!0});var be=l(et);Y(M.$$.fragment,be),be.forEach(a),at.forEach(a),this.h()},h(){e(nt,"name","author"),e(nt,"content","Dion Pinto"),e(lt,"name","description"),e(lt,"content",`Leetcode Blind 75 ${Pe}`),e(U,"class","svelte-r754dw"),ke(z,"font-style","italic"),e(w,"id","title"),e(D,"href","#description"),e(D,"class","svelte-r754dw"),e(K,"class","svelte-r754dw"),e(A,"href","#code1"),e(A,"class","svelte-r754dw"),e(Q,"class","svelte-r754dw"),e(I,"href","#code2"),e(I,"class","svelte-r754dw"),e(W,"class","svelte-r754dw"),e(_,"id","index"),e(_,"class","nes-container is-rounded is-dark svelte-r754dw"),e(g,"id","link"),e(g,"href","https://leetcode.com/problems/two-sum/"),e(g,"target","_blank"),e(g,"class","svelte-r754dw"),e(k,"class","svelte-r754dw"),e(E,"id","description"),e(E,"class","svelte-r754dw"),e(H,"id","block"),e(H,"class","svelte-r754dw"),e(y,"class","svelte-r754dw"),e(X,"class","svelte-r754dw"),e(m,"id","code1"),e(m,"class","svelte-r754dw"),e(F,"id","block"),e(F,"class","svelte-r754dw"),e(Z,"class","svelte-r754dw"),e(tt,"class","svelte-r754dw"),e(f,"id","code2"),e(f,"class","svelte-r754dw"),e(S,"type","button"),e(S,"class","nes-btn is-primary svelte-r754dw"),e(S,"href",`${He}/blind75`),e(u,"class","container svelte-r754dw"),e(et,"class","svelte-r754dw"),e($,"class","main svelte-r754dw")},m(r,p){$t(r,h,p),t(h,nt),t(h,wt),t(h,lt),t(h,Et),t(h,ot),t(ot,gt),$t(r,ct,p),j(x,r,p),$t(r,ut,p),$t(r,$,p),t($,U),j(b,U,null),t($,yt),t($,u),t(u,w),j(P,w,null),t(w,St),t(w,it),t(it,Ct),t(w,Tt),t(w,z),t(z,xt),t(u,bt),t(u,_),t(_,K),t(K,D),t(D,Pt),t(_,Dt),t(_,Q),t(Q,A),t(A,At),t(_,It),t(_,W),t(W,I),t(I,Bt),t(u,kt),t(u,E),j(B,E,null),t(E,Lt),t(E,k),t(k,Ht),t(k,g),t(g,Nt),t(u,Ot),t(u,m),j(L,m,null),t(m,Ft),t(m,H),t(H,N),t(N,Vt),t(N,Mt),t(N,Rt),t(m,Yt),t(m,y),t(y,jt),t(y,dt),t(dt,Jt),t(y,qt),t(m,Gt),t(m,X),t(X,Ut),t(u,zt),t(u,f),j(O,f,null),t(f,Kt),t(f,F),t(F,V),t(V,Qt),t(V,Wt),t(V,Xt),t(f,Zt),t(f,Z),t(Z,te),t(f,ee),t(f,tt),t(tt,ae),t(u,re),t(u,S),t(S,se),t($,ne),t($,et),j(M,et,null),mt=!0},p:Le,i(r){mt||(J(x.$$.fragment,r),J(b.$$.fragment,r),J(P.$$.fragment,r),J(B.$$.fragment,r),J(L.$$.fragment,r),J(O.$$.fragment,r),J(M.$$.fragment,r),mt=!0)},o(r){q(x.$$.fragment,r),q(b.$$.fragment,r),q(P.$$.fragment,r),q(B.$$.fragment,r),q(L.$$.fragment,r),q(O.$$.fragment,r),q(M.$$.fragment,r),mt=!1},d(r){r&&a(h),r&&a(ct),G(x,r),r&&a(ut),r&&a($),G(b),G(P),G(B),G(L),G(O),G(M)}}}const Pe="1. Two Sum";class Je extends Ae{constructor(h){super(),Ie(this,h,null,Ve,Be,{})}}export{Je as default};
