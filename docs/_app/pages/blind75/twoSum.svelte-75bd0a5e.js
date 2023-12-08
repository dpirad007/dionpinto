import{S as Ae,i as Ie,s as Be,e as a,k as i,t as d,w as H,c as r,a as o,m as l,h as m,d as e,x as N,b as s,f as ke,g as $t,J as t,y as O,E as Le,q as F,o as V,B as M}from"../../chunks/index-cd4245c1.js";import{b as He}from"../../chunks/paths-c8fbcc1d.js";import{S as Ne,N as Oe,F as Fe}from"../../chunks/Footer-8b9c5841.js";import{T as _t}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function Ve(De){let c,W,gt,X,yt,Z,wt,mt,x,ut,$,tt,T,Ct,u,E,b,St,et,xt,Tt,R,bt,Pt,_,nt,Y,Dt,At,at,j,It,Bt,rt,J,kt,Lt,g,P,Ht,q,Nt,y,Ot,Ft,f,D,Vt,G,A,Mt,le=`
    class Solution:
        def twoSum(self, nums: List[int], target: int) -> List[int]:
            for i in range(len(nums)-1):
                for j in range(i+1,len(nums)):
                    if(nums[i]+nums[j]==target):
                        return [i,j]
				`,Rt,Yt,jt,I,Jt,ot,qt,Gt,Ut,st,zt,Kt,p,B,Qt,U,k,Wt,de=`
    class Solution:
        def twoSum(self, nums: List[int], target: int) -> List[int]:
            d={}
            for i in range(len(nums)):
                if((target-nums[i]) in d):
                    return [i,d[target-nums[i]]]
                else:
                    d[nums[i]]=i
				`,Xt,Zt,te,it,ee,ne,lt,ae,re,w,oe,se,dt,L,ct;return x=new Ne({}),T=new Oe({props:{curPage:"Blog"}}),b=new _t({props:{type:2,title:Et}}),P=new _t({props:{type:5,title:"Description"}}),D=new _t({props:{type:5,title:"Code (Python) -> Brute Force"}}),B=new _t({props:{type:5,title:"Code (Python) -> Hash"}}),L=new Fe({}),{c(){c=a("head"),W=a("meta"),gt=i(),X=a("meta"),yt=i(),Z=a("title"),wt=d(Et),mt=i(),H(x.$$.fragment),ut=i(),$=a("main"),tt=a("header"),H(T.$$.fragment),Ct=i(),u=a("main"),E=a("div"),H(b.$$.fragment),St=i(),et=a("h4"),xt=d("Leetcode Blind 75"),Tt=i(),R=a("h5"),bt=d("19th June 2022 ~ Dion Pinto"),Pt=i(),_=a("div"),nt=a("div"),Y=a("a"),Dt=d("Description"),At=i(),at=a("div"),j=a("a"),It=d("Code -> Brute Force"),Bt=i(),rt=a("div"),J=a("a"),kt=d("Code -> Hash"),Lt=i(),g=a("section"),H(P.$$.fragment),Ht=i(),q=a("p"),Nt=d(`Given an array of integers nums and an integer target, return indices of the two numbers
				such that they add up to target. You may assume that each input would have exactly one
				solution, and you may not use the same element twice. You can return the answer in any
				order.

				`),y=a("a"),Ot=d("(Problem)"),Ft=i(),f=a("section"),H(D.$$.fragment),Vt=i(),G=a("pre"),A=a("code"),Mt=d(`
				`),Rt=d(le),Yt=d(`			
			`),jt=i(),I=a("p"),Jt=d("Time Complexity => o(n"),ot=a("sup"),qt=d("2"),Gt=d(")"),Ut=i(),st=a("p"),zt=d("Space Complexity => o(1)"),Kt=i(),p=a("section"),H(B.$$.fragment),Qt=i(),U=a("pre"),k=a("code"),Wt=d(`
				`),Xt=d(de),Zt=d(`			
			`),te=i(),it=a("p"),ee=d("Time Complexity => o(n)"),ne=i(),lt=a("p"),ae=d("Space Complexity => o(n)"),re=i(),w=a("a"),oe=d("Back"),se=i(),dt=a("footer"),H(L.$$.fragment),this.h()},l(n){c=r(n,"HEAD",{});var h=o(c);W=r(h,"META",{name:!0,content:!0}),gt=l(h),X=r(h,"META",{name:!0,content:!0}),yt=l(h),Z=r(h,"TITLE",{});var me=o(Z);wt=m(me,Et),me.forEach(e),h.forEach(e),mt=l(n),N(x.$$.fragment,n),ut=l(n),$=r(n,"MAIN",{class:!0});var z=o($);tt=r(z,"HEADER",{});var ue=o(tt);N(T.$$.fragment,ue),ue.forEach(e),Ct=l(z),u=r(z,"MAIN",{class:!0});var v=o(u);E=r(v,"DIV",{id:!0});var K=o(E);N(b.$$.fragment,K),St=l(K),et=r(K,"H4",{});var ce=o(et);xt=m(ce,"Leetcode Blind 75"),ce.forEach(e),Tt=l(K),R=r(K,"H5",{style:!0});var fe=o(R);bt=m(fe,"19th June 2022 ~ Dion Pinto"),fe.forEach(e),K.forEach(e),Pt=l(v),_=r(v,"DIV",{id:!0,class:!0});var Q=o(_);nt=r(Q,"DIV",{});var pe=o(nt);Y=r(pe,"A",{href:!0});var he=o(Y);Dt=m(he,"Description"),he.forEach(e),pe.forEach(e),At=l(Q),at=r(Q,"DIV",{});var ve=o(at);j=r(ve,"A",{href:!0});var $e=o(j);It=m($e,"Code -> Brute Force"),$e.forEach(e),ve.forEach(e),Bt=l(Q),rt=r(Q,"DIV",{});var _e=o(rt);J=r(_e,"A",{href:!0});var Ee=o(J);kt=m(Ee,"Code -> Hash"),Ee.forEach(e),_e.forEach(e),Q.forEach(e),Lt=l(v),g=r(v,"SECTION",{id:!0});var ft=o(g);N(P.$$.fragment,ft),Ht=l(ft),q=r(ft,"P",{});var ie=o(q);Nt=m(ie,`Given an array of integers nums and an integer target, return indices of the two numbers
				such that they add up to target. You may assume that each input would have exactly one
				solution, and you may not use the same element twice. You can return the answer in any
				order.

				`),y=r(ie,"A",{id:!0,href:!0,target:!0});var ge=o(y);Ot=m(ge,"(Problem)"),ge.forEach(e),ie.forEach(e),ft.forEach(e),Ft=l(v),f=r(v,"SECTION",{id:!0});var C=o(f);N(D.$$.fragment,C),Vt=l(C),G=r(C,"PRE",{id:!0});var ye=o(G);A=r(ye,"CODE",{});var pt=o(A);Mt=m(pt,`
				`),Rt=m(pt,le),Yt=m(pt,`			
			`),pt.forEach(e),ye.forEach(e),jt=l(C),I=r(C,"P",{});var ht=o(I);Jt=m(ht,"Time Complexity => o(n"),ot=r(ht,"SUP",{});var we=o(ot);qt=m(we,"2"),we.forEach(e),Gt=m(ht,")"),ht.forEach(e),Ut=l(C),st=r(C,"P",{});var Ce=o(st);zt=m(Ce,"Space Complexity => o(1)"),Ce.forEach(e),C.forEach(e),Kt=l(v),p=r(v,"SECTION",{id:!0});var S=o(p);N(B.$$.fragment,S),Qt=l(S),U=r(S,"PRE",{id:!0});var Se=o(U);k=r(Se,"CODE",{});var vt=o(k);Wt=m(vt,`
				`),Xt=m(vt,de),Zt=m(vt,`			
			`),vt.forEach(e),Se.forEach(e),te=l(S),it=r(S,"P",{});var xe=o(it);ee=m(xe,"Time Complexity => o(n)"),xe.forEach(e),ne=l(S),lt=r(S,"P",{});var Te=o(lt);ae=m(Te,"Space Complexity => o(n)"),Te.forEach(e),S.forEach(e),re=l(v),w=r(v,"A",{type:!0,class:!0,href:!0});var be=o(w);oe=m(be,"Back"),be.forEach(e),v.forEach(e),se=l(z),dt=r(z,"FOOTER",{});var Pe=o(dt);N(L.$$.fragment,Pe),Pe.forEach(e),z.forEach(e),this.h()},h(){s(W,"name","author"),s(W,"content","Dion Pinto"),s(X,"name","description"),s(X,"content",`Leetcode Blind 75 ${Et}`),ke(R,"font-style","italic"),s(E,"id","title"),s(Y,"href","#description"),s(j,"href","#code1"),s(J,"href","#code2"),s(_,"id","index"),s(_,"class","nes-container is-rounded is-dark"),s(y,"id","link"),s(y,"href","https://leetcode.com/problems/two-sum/"),s(y,"target","_blank"),s(g,"id","description"),s(G,"id","block"),s(f,"id","code1"),s(U,"id","block"),s(p,"id","code2"),s(w,"type","button"),s(w,"class","nes-btn is-primary"),s(w,"href",`${He}/blind75`),s(u,"class","container svelte-gwfu10"),s($,"class","main")},m(n,h){$t(n,c,h),t(c,W),t(c,gt),t(c,X),t(c,yt),t(c,Z),t(Z,wt),$t(n,mt,h),O(x,n,h),$t(n,ut,h),$t(n,$,h),t($,tt),O(T,tt,null),t($,Ct),t($,u),t(u,E),O(b,E,null),t(E,St),t(E,et),t(et,xt),t(E,Tt),t(E,R),t(R,bt),t(u,Pt),t(u,_),t(_,nt),t(nt,Y),t(Y,Dt),t(_,At),t(_,at),t(at,j),t(j,It),t(_,Bt),t(_,rt),t(rt,J),t(J,kt),t(u,Lt),t(u,g),O(P,g,null),t(g,Ht),t(g,q),t(q,Nt),t(q,y),t(y,Ot),t(u,Ft),t(u,f),O(D,f,null),t(f,Vt),t(f,G),t(G,A),t(A,Mt),t(A,Rt),t(A,Yt),t(f,jt),t(f,I),t(I,Jt),t(I,ot),t(ot,qt),t(I,Gt),t(f,Ut),t(f,st),t(st,zt),t(u,Kt),t(u,p),O(B,p,null),t(p,Qt),t(p,U),t(U,k),t(k,Wt),t(k,Xt),t(k,Zt),t(p,te),t(p,it),t(it,ee),t(p,ne),t(p,lt),t(lt,ae),t(u,re),t(u,w),t(w,oe),t($,se),t($,dt),O(L,dt,null),ct=!0},p:Le,i(n){ct||(F(x.$$.fragment,n),F(T.$$.fragment,n),F(b.$$.fragment,n),F(P.$$.fragment,n),F(D.$$.fragment,n),F(B.$$.fragment,n),F(L.$$.fragment,n),ct=!0)},o(n){V(x.$$.fragment,n),V(T.$$.fragment,n),V(b.$$.fragment,n),V(P.$$.fragment,n),V(D.$$.fragment,n),V(B.$$.fragment,n),V(L.$$.fragment,n),ct=!1},d(n){n&&e(c),n&&e(mt),M(x,n),n&&e(ut),n&&e($),M(T),M(b),M(P),M(D),M(B),M(L)}}}const Et="1. Two Sum";class qe extends Ae{constructor(c){super(),Ie(this,c,null,Ve,Be,{})}}export{qe as default};