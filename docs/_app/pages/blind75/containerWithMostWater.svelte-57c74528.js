import{S as Xt,i as Zt,s as te,e as n,k as o,t as d,w as J,c as s,a as i,m as l,h as m,d as r,x as q,b as e,f as ee,g as st,J as t,y as Y,E as ae,q as j,o as z,B as G}from"../../chunks/index-cd4245c1.js";import{b as re}from"../../chunks/paths-c8fbcc1d.js";import{S as ne,N as se,F as ie}from"../../chunks/Footer-8b9c5841.js";import{T as Mt}from"../../chunks/Title-6ea0487f.js";function oe(Ut){let f,K,it,Q,ot,U,lt,Z,x,tt,v,B,C,ht,h,p,T,ct,X,dt,mt,M,ft,ut,w,F,b,vt,pt,L,D,$t,wt,_,A,_t,P,gt,g,Et,yt,c,I,xt,S,N,Ct,Ft=`
    import math
    class Solution:
        def maxArea(self, height: List[int]) -> int:
            m=-math.inf
            l,r = 0,len(height)-1
        
            while(l<r):

                area = (r-l)*min(height[l],height[r])
                m=max(m,area)

                if(height[l] < height[r]):
                    l+=1
                elif(height[l] > height[r]):
                    r-=1
                else:
                    r-=1
            return m
				`,Tt,bt,Dt,O,At,Pt,R,It,St,E,Nt,kt,H,k,et;return x=new ne({}),C=new se({props:{curPage:"Blog"}}),T=new Mt({props:{type:2,title:"11.Container with most water"}}),A=new Mt({props:{type:5,title:"Description"}}),I=new Mt({props:{type:5,title:"Code (Python)"}}),k=new ie({}),{c(){f=n("head"),K=n("meta"),it=o(),Q=n("meta"),ot=o(),U=n("title"),lt=d("11. Container with most water"),Z=o(),J(x.$$.fragment),tt=o(),v=n("main"),B=n("header"),J(C.$$.fragment),ht=o(),h=n("main"),p=n("div"),J(T.$$.fragment),ct=o(),X=n("h4"),dt=d("Leetcode Blind 75"),mt=o(),M=n("h5"),ft=d("17th June 2022 ~ Dion Pinto"),ut=o(),w=n("div"),F=n("div"),b=n("a"),vt=d("Description"),pt=o(),L=n("div"),D=n("a"),$t=d("Code"),wt=o(),_=n("section"),J(A.$$.fragment),_t=o(),P=n("p"),gt=d(`You are given an integer array height of length n. There are n vertical lines drawn such
				that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that
				together with the x-axis form a container, such that the container contains the most water.
				Return the maximum amount of water a container can store. Notice that you may not slant the
				container.

				`),g=n("a"),Et=d("(Problem)"),yt=o(),c=n("section"),J(I.$$.fragment),xt=o(),S=n("pre"),N=n("code"),Ct=d(`
				`),Tt=d(Ft),bt=d(`			
			`),Dt=o(),O=n("p"),At=d("Time Complexity => o(n)"),Pt=o(),R=n("p"),It=d("Space Complexity => o(1)"),St=o(),E=n("a"),Nt=d("Back"),kt=o(),H=n("footer"),J(k.$$.fragment),this.h()},l(a){f=s(a,"HEAD",{});var u=i(f);K=s(u,"META",{name:!0,content:!0}),it=l(u),Q=s(u,"META",{name:!0,content:!0}),ot=l(u),U=s(u,"TITLE",{});var Lt=i(U);lt=m(Lt,"11. Container with most water"),Lt.forEach(r),u.forEach(r),Z=l(a),q(x.$$.fragment,a),tt=l(a),v=s(a,"MAIN",{class:!0});var V=i(v);B=s(V,"HEADER",{class:!0});var Ot=i(B);q(C.$$.fragment,Ot),Ot.forEach(r),ht=l(V),h=s(V,"MAIN",{class:!0});var $=i(h);p=s($,"DIV",{id:!0});var W=i(p);q(T.$$.fragment,W),ct=l(W),X=s(W,"H4",{});var Rt=i(X);dt=m(Rt,"Leetcode Blind 75"),Rt.forEach(r),mt=l(W),M=s(W,"H5",{style:!0});var Ht=i(M);ft=m(Ht,"17th June 2022 ~ Dion Pinto"),Ht.forEach(r),W.forEach(r),ut=l($),w=s($,"DIV",{id:!0,class:!0});var at=i(w);F=s(at,"DIV",{class:!0});var Vt=i(F);b=s(Vt,"A",{href:!0,class:!0});var Wt=i(b);vt=m(Wt,"Description"),Wt.forEach(r),Vt.forEach(r),pt=l(at),L=s(at,"DIV",{class:!0});var Jt=i(L);D=s(Jt,"A",{href:!0,class:!0});var qt=i(D);$t=m(qt,"Code"),qt.forEach(r),Jt.forEach(r),at.forEach(r),wt=l($),_=s($,"SECTION",{id:!0,class:!0});var rt=i(_);q(A.$$.fragment,rt),_t=l(rt),P=s(rt,"P",{class:!0});var Bt=i(P);gt=m(Bt,`You are given an integer array height of length n. There are n vertical lines drawn such
				that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that
				together with the x-axis form a container, such that the container contains the most water.
				Return the maximum amount of water a container can store. Notice that you may not slant the
				container.

				`),g=s(Bt,"A",{id:!0,href:!0,target:!0,class:!0});var Yt=i(g);Et=m(Yt,"(Problem)"),Yt.forEach(r),Bt.forEach(r),rt.forEach(r),yt=l($),c=s($,"SECTION",{id:!0,class:!0});var y=i(c);q(I.$$.fragment,y),xt=l(y),S=s(y,"PRE",{id:!0,class:!0});var jt=i(S);N=s(jt,"CODE",{});var nt=i(N);Ct=m(nt,`
				`),Tt=m(nt,Ft),bt=m(nt,`			
			`),nt.forEach(r),jt.forEach(r),Dt=l(y),O=s(y,"P",{class:!0});var zt=i(O);At=m(zt,"Time Complexity => o(n)"),zt.forEach(r),Pt=l(y),R=s(y,"P",{class:!0});var Gt=i(R);It=m(Gt,"Space Complexity => o(1)"),Gt.forEach(r),y.forEach(r),St=l($),E=s($,"A",{type:!0,class:!0,href:!0});var Kt=i(E);Nt=m(Kt,"Back"),Kt.forEach(r),$.forEach(r),kt=l(V),H=s(V,"FOOTER",{class:!0});var Qt=i(H);q(k.$$.fragment,Qt),Qt.forEach(r),V.forEach(r),this.h()},h(){e(K,"name","author"),e(K,"content","Dion Pinto"),e(Q,"name","description"),e(Q,"content","Leetcode Blind 75 11. Container with most water"),e(B,"class","svelte-r754dw"),ee(M,"font-style","italic"),e(p,"id","title"),e(b,"href","#description"),e(b,"class","svelte-r754dw"),e(F,"class","svelte-r754dw"),e(D,"href","#code"),e(D,"class","svelte-r754dw"),e(L,"class","svelte-r754dw"),e(w,"id","index"),e(w,"class","nes-container is-rounded is-dark svelte-r754dw"),e(g,"id","link"),e(g,"href","https://leetcode.com/problems/container-with-most-water/"),e(g,"target","_blank"),e(g,"class","svelte-r754dw"),e(P,"class","svelte-r754dw"),e(_,"id","description"),e(_,"class","svelte-r754dw"),e(S,"id","block"),e(S,"class","svelte-r754dw"),e(O,"class","svelte-r754dw"),e(R,"class","svelte-r754dw"),e(c,"id","code"),e(c,"class","svelte-r754dw"),e(E,"type","button"),e(E,"class","nes-btn is-primary svelte-r754dw"),e(E,"href",`${re}/blind75`),e(h,"class","container svelte-r754dw"),e(H,"class","svelte-r754dw"),e(v,"class","main svelte-r754dw")},m(a,u){st(a,f,u),t(f,K),t(f,it),t(f,Q),t(f,ot),t(f,U),t(U,lt),st(a,Z,u),Y(x,a,u),st(a,tt,u),st(a,v,u),t(v,B),Y(C,B,null),t(v,ht),t(v,h),t(h,p),Y(T,p,null),t(p,ct),t(p,X),t(X,dt),t(p,mt),t(p,M),t(M,ft),t(h,ut),t(h,w),t(w,F),t(F,b),t(b,vt),t(w,pt),t(w,L),t(L,D),t(D,$t),t(h,wt),t(h,_),Y(A,_,null),t(_,_t),t(_,P),t(P,gt),t(P,g),t(g,Et),t(h,yt),t(h,c),Y(I,c,null),t(c,xt),t(c,S),t(S,N),t(N,Ct),t(N,Tt),t(N,bt),t(c,Dt),t(c,O),t(O,At),t(c,Pt),t(c,R),t(R,It),t(h,St),t(h,E),t(E,Nt),t(v,kt),t(v,H),Y(k,H,null),et=!0},p:ae,i(a){et||(j(x.$$.fragment,a),j(C.$$.fragment,a),j(T.$$.fragment,a),j(A.$$.fragment,a),j(I.$$.fragment,a),j(k.$$.fragment,a),et=!0)},o(a){z(x.$$.fragment,a),z(C.$$.fragment,a),z(T.$$.fragment,a),z(A.$$.fragment,a),z(I.$$.fragment,a),z(k.$$.fragment,a),et=!1},d(a){a&&r(f),a&&r(Z),G(x,a),a&&r(tt),a&&r(v),G(C),G(T),G(A),G(I),G(k)}}}class me extends Xt{constructor(f){super(),Zt(this,f,null,oe,te,{})}}export{me as default};
