import{S as Xt,i as Zt,s as te,e as n,k as s,t as m,w as L,c as r,a as i,m as l,h as c,d as a,x as O,b as o,f as ee,g as it,J as t,y as R,E as ae,q as H,o as V,B as W}from"../../chunks/index-cd4245c1.js";import{b as ne}from"../../chunks/paths-c8fbcc1d.js";import{S as re,N as ie,F as oe}from"../../chunks/Footer-8b9c5841.js";import{T as Mt}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function se(Ut){let f,J,ot,q,st,Y,lt,Z,x,tt,p,j,C,ht,h,v,T,mt,z,ct,ft,I,dt,ut,_,G,S,pt,vt,K,N,$t,_t,g,b,gt,k,Et,E,wt,yt,d,D,xt,B,A,Ct,Ft=`
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
				`,Tt,bt,Dt,Q,At,Pt,U,It,St,w,Nt,kt,X,P,et;return x=new re({}),C=new ie({props:{curPage:"Blog"}}),T=new Mt({props:{type:2,title:"11.Container with most water"}}),b=new Mt({props:{type:5,title:"Description"}}),D=new Mt({props:{type:5,title:"Code (Python)"}}),P=new oe({}),{c(){f=n("head"),J=n("meta"),ot=s(),q=n("meta"),st=s(),Y=n("title"),lt=m("11. Container with most water"),Z=s(),L(x.$$.fragment),tt=s(),p=n("main"),j=n("header"),L(C.$$.fragment),ht=s(),h=n("main"),v=n("div"),L(T.$$.fragment),mt=s(),z=n("h4"),ct=m("Leetcode Blind 75"),ft=s(),I=n("h5"),dt=m("17th June 2022 ~ Dion Pinto"),ut=s(),_=n("div"),G=n("div"),S=n("a"),pt=m("Description"),vt=s(),K=n("div"),N=n("a"),$t=m("Code"),_t=s(),g=n("section"),L(b.$$.fragment),gt=s(),k=n("p"),Et=m(`You are given an integer array height of length n. There are n vertical lines drawn such
				that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that
				together with the x-axis form a container, such that the container contains the most water.
				Return the maximum amount of water a container can store. Notice that you may not slant the
				container.

				`),E=n("a"),wt=m("(Problem)"),yt=s(),d=n("section"),L(D.$$.fragment),xt=s(),B=n("pre"),A=n("code"),Ct=m(`
				`),Tt=m(Ft),bt=m(`			
			`),Dt=s(),Q=n("p"),At=m("Time Complexity => o(n)"),Pt=s(),U=n("p"),It=m("Space Complexity => o(1)"),St=s(),w=n("a"),Nt=m("Back"),kt=s(),X=n("footer"),L(P.$$.fragment),this.h()},l(e){f=r(e,"HEAD",{});var u=i(f);J=r(u,"META",{name:!0,content:!0}),ot=l(u),q=r(u,"META",{name:!0,content:!0}),st=l(u),Y=r(u,"TITLE",{});var Lt=i(Y);lt=c(Lt,"11. Container with most water"),Lt.forEach(a),u.forEach(a),Z=l(e),O(x.$$.fragment,e),tt=l(e),p=r(e,"MAIN",{class:!0});var M=i(p);j=r(M,"HEADER",{});var Ot=i(j);O(C.$$.fragment,Ot),Ot.forEach(a),ht=l(M),h=r(M,"MAIN",{class:!0});var $=i(h);v=r($,"DIV",{id:!0});var F=i(v);O(T.$$.fragment,F),mt=l(F),z=r(F,"H4",{});var Rt=i(z);ct=c(Rt,"Leetcode Blind 75"),Rt.forEach(a),ft=l(F),I=r(F,"H5",{style:!0});var Ht=i(I);dt=c(Ht,"17th June 2022 ~ Dion Pinto"),Ht.forEach(a),F.forEach(a),ut=l($),_=r($,"DIV",{id:!0,class:!0});var at=i(_);G=r(at,"DIV",{});var Vt=i(G);S=r(Vt,"A",{href:!0});var Wt=i(S);pt=c(Wt,"Description"),Wt.forEach(a),Vt.forEach(a),vt=l(at),K=r(at,"DIV",{});var Jt=i(K);N=r(Jt,"A",{href:!0});var qt=i(N);$t=c(qt,"Code"),qt.forEach(a),Jt.forEach(a),at.forEach(a),_t=l($),g=r($,"SECTION",{id:!0});var nt=i(g);O(b.$$.fragment,nt),gt=l(nt),k=r(nt,"P",{});var Bt=i(k);Et=c(Bt,`You are given an integer array height of length n. There are n vertical lines drawn such
				that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that
				together with the x-axis form a container, such that the container contains the most water.
				Return the maximum amount of water a container can store. Notice that you may not slant the
				container.

				`),E=r(Bt,"A",{id:!0,href:!0,target:!0});var Yt=i(E);wt=c(Yt,"(Problem)"),Yt.forEach(a),Bt.forEach(a),nt.forEach(a),yt=l($),d=r($,"SECTION",{id:!0});var y=i(d);O(D.$$.fragment,y),xt=l(y),B=r(y,"PRE",{id:!0});var jt=i(B);A=r(jt,"CODE",{});var rt=i(A);Ct=c(rt,`
				`),Tt=c(rt,Ft),bt=c(rt,`			
			`),rt.forEach(a),jt.forEach(a),Dt=l(y),Q=r(y,"P",{});var zt=i(Q);At=c(zt,"Time Complexity => o(n)"),zt.forEach(a),Pt=l(y),U=r(y,"P",{});var Gt=i(U);It=c(Gt,"Space Complexity => o(1)"),Gt.forEach(a),y.forEach(a),St=l($),w=r($,"A",{type:!0,class:!0,href:!0});var Kt=i(w);Nt=c(Kt,"Back"),Kt.forEach(a),$.forEach(a),kt=l(M),X=r(M,"FOOTER",{});var Qt=i(X);O(P.$$.fragment,Qt),Qt.forEach(a),M.forEach(a),this.h()},h(){o(J,"name","author"),o(J,"content","Dion Pinto"),o(q,"name","description"),o(q,"content","Leetcode Blind 75 11. Container with most water"),ee(I,"font-style","italic"),o(v,"id","title"),o(S,"href","#description"),o(N,"href","#code"),o(_,"id","index"),o(_,"class","nes-container is-rounded is-dark"),o(E,"id","link"),o(E,"href","https://leetcode.com/problems/container-with-most-water/"),o(E,"target","_blank"),o(g,"id","description"),o(B,"id","block"),o(d,"id","code"),o(w,"type","button"),o(w,"class","nes-btn is-primary"),o(w,"href",`${ne}/blind75`),o(h,"class","container svelte-gwfu10"),o(p,"class","main")},m(e,u){it(e,f,u),t(f,J),t(f,ot),t(f,q),t(f,st),t(f,Y),t(Y,lt),it(e,Z,u),R(x,e,u),it(e,tt,u),it(e,p,u),t(p,j),R(C,j,null),t(p,ht),t(p,h),t(h,v),R(T,v,null),t(v,mt),t(v,z),t(z,ct),t(v,ft),t(v,I),t(I,dt),t(h,ut),t(h,_),t(_,G),t(G,S),t(S,pt),t(_,vt),t(_,K),t(K,N),t(N,$t),t(h,_t),t(h,g),R(b,g,null),t(g,gt),t(g,k),t(k,Et),t(k,E),t(E,wt),t(h,yt),t(h,d),R(D,d,null),t(d,xt),t(d,B),t(B,A),t(A,Ct),t(A,Tt),t(A,bt),t(d,Dt),t(d,Q),t(Q,At),t(d,Pt),t(d,U),t(U,It),t(h,St),t(h,w),t(w,Nt),t(p,kt),t(p,X),R(P,X,null),et=!0},p:ae,i(e){et||(H(x.$$.fragment,e),H(C.$$.fragment,e),H(T.$$.fragment,e),H(b.$$.fragment,e),H(D.$$.fragment,e),H(P.$$.fragment,e),et=!0)},o(e){V(x.$$.fragment,e),V(C.$$.fragment,e),V(T.$$.fragment,e),V(b.$$.fragment,e),V(D.$$.fragment,e),V(P.$$.fragment,e),et=!1},d(e){e&&a(f),e&&a(Z),W(x,e),e&&a(tt),e&&a(p),W(C),W(T),W(b),W(D),W(P)}}}class de extends Xt{constructor(f){super(),Zt(this,f,null,se,te,{})}}export{de as default};
