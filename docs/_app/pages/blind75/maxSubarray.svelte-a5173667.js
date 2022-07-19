import{S as Zt,i as te,s as ee,e as s,k as o,t as m,w as q,c as n,a as l,m as i,h as d,d as r,x as G,b as e,f as ae,g as nt,J as t,y as j,E as re,q as z,o as K,B as Q}from"../../chunks/index-cd4245c1.js";import{b as se}from"../../chunks/paths-c8fbcc1d.js";import{S as ne,N as le,F as oe}from"../../chunks/Footer-8b9c5841.js";import{T as Lt}from"../../chunks/Title-6ea0487f.js";function ie(Yt){let f,U,ot,W,it,X,ct,Z,b,tt,h,M,x,ut,c,p,S,mt,Y,dt,ft,N,vt,ht,_,L,A,pt,$t,O,D,_t,yt,y,T,Et,C,gt,E,wt,bt,u,P,xt,I,k,St,Ot=`
    class Solution:
        def maxSubArray(self, nums: List[int]) -> int:
            maxval = nums[0]
            curSum=0
            
            for i in range(len(nums)):
                if(curSum<0):
                    curSum=0
                curSum+=nums[i]
                maxval = max(curSum,maxval)
            return maxval
				`,At,Dt,Tt,H,Ct,Pt,V,It,kt,g,Bt,Mt,F,B,et;return b=new ne({}),x=new le({props:{curPage:"Blog"}}),S=new Lt({props:{type:2,title:lt}}),T=new Lt({props:{type:5,title:"Description"}}),P=new Lt({props:{type:5,title:"Code (Python)"}}),B=new oe({}),{c(){f=s("head"),U=s("meta"),ot=o(),W=s("meta"),it=o(),X=s("title"),ct=m(lt),Z=o(),q(b.$$.fragment),tt=o(),h=s("main"),M=s("header"),q(x.$$.fragment),ut=o(),c=s("main"),p=s("div"),q(S.$$.fragment),mt=o(),Y=s("h4"),dt=m("Leetcode Blind 75"),ft=o(),N=s("h5"),vt=m("19th July 2022 ~ Dion Pinto"),ht=o(),_=s("div"),L=s("div"),A=s("a"),pt=m("Description"),$t=o(),O=s("div"),D=s("a"),_t=m("Code"),yt=o(),y=s("section"),q(T.$$.fragment),Et=o(),C=s("p"),gt=m(`Given an integer array nums, find the contiguous subarray (containing at least one number)
				which has the largest sum and return its sum. A subarray is a contiguous part of an array.

				`),E=s("a"),wt=m("(Problem)"),bt=o(),u=s("section"),q(P.$$.fragment),xt=o(),I=s("pre"),k=s("code"),St=m(`
				`),At=m(Ot),Dt=m(`			
			`),Tt=o(),H=s("p"),Ct=m("Time Complexity => o(n)"),Pt=o(),V=s("p"),It=m("Space Complexity => o(1)"),kt=o(),g=s("a"),Bt=m("Back"),Mt=o(),F=s("footer"),q(B.$$.fragment),this.h()},l(a){f=n(a,"HEAD",{});var v=l(f);U=n(v,"META",{name:!0,content:!0}),ot=i(v),W=n(v,"META",{name:!0,content:!0}),it=i(v),X=n(v,"TITLE",{});var Ht=l(X);ct=d(Ht,lt),Ht.forEach(r),v.forEach(r),Z=i(a),G(b.$$.fragment,a),tt=i(a),h=n(a,"MAIN",{class:!0});var J=l(h);M=n(J,"HEADER",{class:!0});var Vt=l(M);G(x.$$.fragment,Vt),Vt.forEach(r),ut=i(J),c=n(J,"MAIN",{class:!0});var $=l(c);p=n($,"DIV",{id:!0});var R=l(p);G(S.$$.fragment,R),mt=i(R),Y=n(R,"H4",{});var Ft=l(Y);dt=d(Ft,"Leetcode Blind 75"),Ft.forEach(r),ft=i(R),N=n(R,"H5",{style:!0});var Jt=l(N);vt=d(Jt,"19th July 2022 ~ Dion Pinto"),Jt.forEach(r),R.forEach(r),ht=i($),_=n($,"DIV",{id:!0,class:!0});var at=l(_);L=n(at,"DIV",{class:!0});var Rt=l(L);A=n(Rt,"A",{href:!0,class:!0});var qt=l(A);pt=d(qt,"Description"),qt.forEach(r),Rt.forEach(r),$t=i(at),O=n(at,"DIV",{class:!0});var Gt=l(O);D=n(Gt,"A",{href:!0,class:!0});var jt=l(D);_t=d(jt,"Code"),jt.forEach(r),Gt.forEach(r),at.forEach(r),yt=i($),y=n($,"SECTION",{id:!0,class:!0});var rt=l(y);G(T.$$.fragment,rt),Et=i(rt),C=n(rt,"P",{class:!0});var Nt=l(C);gt=d(Nt,`Given an integer array nums, find the contiguous subarray (containing at least one number)
				which has the largest sum and return its sum. A subarray is a contiguous part of an array.

				`),E=n(Nt,"A",{id:!0,href:!0,target:!0,class:!0});var zt=l(E);wt=d(zt,"(Problem)"),zt.forEach(r),Nt.forEach(r),rt.forEach(r),bt=i($),u=n($,"SECTION",{id:!0,class:!0});var w=l(u);G(P.$$.fragment,w),xt=i(w),I=n(w,"PRE",{id:!0,class:!0});var Kt=l(I);k=n(Kt,"CODE",{});var st=l(k);St=d(st,`
				`),At=d(st,Ot),Dt=d(st,`			
			`),st.forEach(r),Kt.forEach(r),Tt=i(w),H=n(w,"P",{class:!0});var Qt=l(H);Ct=d(Qt,"Time Complexity => o(n)"),Qt.forEach(r),Pt=i(w),V=n(w,"P",{class:!0});var Ut=l(V);It=d(Ut,"Space Complexity => o(1)"),Ut.forEach(r),w.forEach(r),kt=i($),g=n($,"A",{type:!0,class:!0,href:!0});var Wt=l(g);Bt=d(Wt,"Back"),Wt.forEach(r),$.forEach(r),Mt=i(J),F=n(J,"FOOTER",{class:!0});var Xt=l(F);G(B.$$.fragment,Xt),Xt.forEach(r),J.forEach(r),this.h()},h(){e(U,"name","author"),e(U,"content","Dion Pinto"),e(W,"name","description"),e(W,"content",`Leetcode Blind 75 ${lt}`),e(M,"class","svelte-r754dw"),ae(N,"font-style","italic"),e(p,"id","title"),e(A,"href","#description"),e(A,"class","svelte-r754dw"),e(L,"class","svelte-r754dw"),e(D,"href","#code"),e(D,"class","svelte-r754dw"),e(O,"class","svelte-r754dw"),e(_,"id","index"),e(_,"class","nes-container is-rounded is-dark svelte-r754dw"),e(E,"id","link"),e(E,"href","https://leetcode.com/problems/maximum-subarray/"),e(E,"target","_blank"),e(E,"class","svelte-r754dw"),e(C,"class","svelte-r754dw"),e(y,"id","description"),e(y,"class","svelte-r754dw"),e(I,"id","block"),e(I,"class","svelte-r754dw"),e(H,"class","svelte-r754dw"),e(V,"class","svelte-r754dw"),e(u,"id","code"),e(u,"class","svelte-r754dw"),e(g,"type","button"),e(g,"class","nes-btn is-primary svelte-r754dw"),e(g,"href",`${se}/blind75`),e(c,"class","container svelte-r754dw"),e(F,"class","svelte-r754dw"),e(h,"class","main svelte-r754dw")},m(a,v){nt(a,f,v),t(f,U),t(f,ot),t(f,W),t(f,it),t(f,X),t(X,ct),nt(a,Z,v),j(b,a,v),nt(a,tt,v),nt(a,h,v),t(h,M),j(x,M,null),t(h,ut),t(h,c),t(c,p),j(S,p,null),t(p,mt),t(p,Y),t(Y,dt),t(p,ft),t(p,N),t(N,vt),t(c,ht),t(c,_),t(_,L),t(L,A),t(A,pt),t(_,$t),t(_,O),t(O,D),t(D,_t),t(c,yt),t(c,y),j(T,y,null),t(y,Et),t(y,C),t(C,gt),t(C,E),t(E,wt),t(c,bt),t(c,u),j(P,u,null),t(u,xt),t(u,I),t(I,k),t(k,St),t(k,At),t(k,Dt),t(u,Tt),t(u,H),t(H,Ct),t(u,Pt),t(u,V),t(V,It),t(c,kt),t(c,g),t(g,Bt),t(h,Mt),t(h,F),j(B,F,null),et=!0},p:re,i(a){et||(z(b.$$.fragment,a),z(x.$$.fragment,a),z(S.$$.fragment,a),z(T.$$.fragment,a),z(P.$$.fragment,a),z(B.$$.fragment,a),et=!0)},o(a){K(b.$$.fragment,a),K(x.$$.fragment,a),K(S.$$.fragment,a),K(T.$$.fragment,a),K(P.$$.fragment,a),K(B.$$.fragment,a),et=!1},d(a){a&&r(f),a&&r(Z),Q(b,a),a&&r(tt),a&&r(h),Q(x),Q(S),Q(T),Q(P),Q(B)}}}const lt="53. Maximum Subarray";class fe extends Zt{constructor(f){super(),te(this,f,null,ie,ee,{})}}export{fe as default};