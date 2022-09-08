import{S as Xt,i as Zt,s as te,e as n,k as s,t as m,w as M,c as r,a as i,m as l,h as c,d as a,x as O,b as o,f as ee,g as it,J as t,y as R,E as ae,q as H,o as V,B as J}from"../../chunks/index-cd4245c1.js";import{b as ne}from"../../chunks/paths-c8fbcc1d.js";import{S as re,N as ie,F as oe}from"../../chunks/Footer-8b9c5841.js";import{T as Ft}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function se(Ut){let f,q,ot,W,st,Y,lt,Z,x,tt,p,j,C,ht,h,$,T,mt,z,ct,ft,I,dt,ut,g,G,S,pt,$t,K,N,vt,gt,_,b,_t,k,Et,E,wt,yt,d,D,xt,B,A,Ct,Lt=`
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
				`,Tt,bt,Dt,Q,At,Pt,U,It,St,w,Nt,kt,X,P,et;return x=new re({}),C=new ie({props:{curPage:"Blog"}}),T=new Ft({props:{type:2,title:"11.Container with most water"}}),b=new Ft({props:{type:5,title:"Description"}}),D=new Ft({props:{type:5,title:"Code (Python)"}}),P=new oe({}),{c(){f=n("head"),q=n("meta"),ot=s(),W=n("meta"),st=s(),Y=n("title"),lt=m("11. Container with most water"),Z=s(),M(x.$$.fragment),tt=s(),p=n("main"),j=n("header"),M(C.$$.fragment),ht=s(),h=n("main"),$=n("div"),M(T.$$.fragment),mt=s(),z=n("h4"),ct=m("Leetcode Blind 75"),ft=s(),I=n("h5"),dt=m("17th June 2022 ~ Dion Pinto"),ut=s(),g=n("div"),G=n("div"),S=n("a"),pt=m("Description"),$t=s(),K=n("div"),N=n("a"),vt=m("Code"),gt=s(),_=n("section"),M(b.$$.fragment),_t=s(),k=n("p"),Et=m(`You are given an integer array height of length n. There are n vertical lines drawn such
				that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that
				together with the x-axis form a container, such that the container contains the most water.
				Return the maximum amount of water a container can store. Notice that you may not slant the
				container.

				`),E=n("a"),wt=m("(Problem)"),yt=s(),d=n("section"),M(D.$$.fragment),xt=s(),B=n("pre"),A=n("code"),Ct=m(`
				`),Tt=m(Lt),bt=m(`			
			`),Dt=s(),Q=n("p"),At=m("Time Complexity => o(n)"),Pt=s(),U=n("p"),It=m("Space Complexity => o(1)"),St=s(),w=n("a"),Nt=m("Back"),kt=s(),X=n("footer"),M(P.$$.fragment),this.h()},l(e){f=r(e,"HEAD",{});var u=i(f);q=r(u,"META",{name:!0,content:!0}),ot=l(u),W=r(u,"META",{name:!0,content:!0}),st=l(u),Y=r(u,"TITLE",{});var Mt=i(Y);lt=c(Mt,"11. Container with most water"),Mt.forEach(a),u.forEach(a),Z=l(e),O(x.$$.fragment,e),tt=l(e),p=r(e,"MAIN",{class:!0});var F=i(p);j=r(F,"HEADER",{});var Ot=i(j);O(C.$$.fragment,Ot),Ot.forEach(a),ht=l(F),h=r(F,"MAIN",{class:!0});var v=i(h);$=r(v,"DIV",{id:!0});var L=i($);O(T.$$.fragment,L),mt=l(L),z=r(L,"H4",{});var Rt=i(z);ct=c(Rt,"Leetcode Blind 75"),Rt.forEach(a),ft=l(L),I=r(L,"H5",{style:!0});var Ht=i(I);dt=c(Ht,"17th June 2022 ~ Dion Pinto"),Ht.forEach(a),L.forEach(a),ut=l(v),g=r(v,"DIV",{id:!0,class:!0});var at=i(g);G=r(at,"DIV",{});var Vt=i(G);S=r(Vt,"A",{href:!0});var Jt=i(S);pt=c(Jt,"Description"),Jt.forEach(a),Vt.forEach(a),$t=l(at),K=r(at,"DIV",{});var qt=i(K);N=r(qt,"A",{href:!0});var Wt=i(N);vt=c(Wt,"Code"),Wt.forEach(a),qt.forEach(a),at.forEach(a),gt=l(v),_=r(v,"SECTION",{id:!0});var nt=i(_);O(b.$$.fragment,nt),_t=l(nt),k=r(nt,"P",{});var Bt=i(k);Et=c(Bt,`You are given an integer array height of length n. There are n vertical lines drawn such
				that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that
				together with the x-axis form a container, such that the container contains the most water.
				Return the maximum amount of water a container can store. Notice that you may not slant the
				container.

				`),E=r(Bt,"A",{id:!0,href:!0,target:!0});var Yt=i(E);wt=c(Yt,"(Problem)"),Yt.forEach(a),Bt.forEach(a),nt.forEach(a),yt=l(v),d=r(v,"SECTION",{id:!0});var y=i(d);O(D.$$.fragment,y),xt=l(y),B=r(y,"PRE",{id:!0});var jt=i(B);A=r(jt,"CODE",{});var rt=i(A);Ct=c(rt,`
				`),Tt=c(rt,Lt),bt=c(rt,`			
			`),rt.forEach(a),jt.forEach(a),Dt=l(y),Q=r(y,"P",{});var zt=i(Q);At=c(zt,"Time Complexity => o(n)"),zt.forEach(a),Pt=l(y),U=r(y,"P",{});var Gt=i(U);It=c(Gt,"Space Complexity => o(1)"),Gt.forEach(a),y.forEach(a),St=l(v),w=r(v,"A",{type:!0,class:!0,href:!0});var Kt=i(w);Nt=c(Kt,"Back"),Kt.forEach(a),v.forEach(a),kt=l(F),X=r(F,"FOOTER",{});var Qt=i(X);O(P.$$.fragment,Qt),Qt.forEach(a),F.forEach(a),this.h()},h(){o(q,"name","author"),o(q,"content","Dion Pinto"),o(W,"name","description"),o(W,"content","Leetcode Blind 75 11. Container with most water"),ee(I,"font-style","italic"),o($,"id","title"),o(S,"href","#description"),o(N,"href","#code"),o(g,"id","index"),o(g,"class","nes-container is-rounded is-dark"),o(E,"id","link"),o(E,"href","https://leetcode.com/problems/container-with-most-water/"),o(E,"target","_blank"),o(_,"id","description"),o(B,"id","block"),o(d,"id","code"),o(w,"type","button"),o(w,"class","nes-btn is-primary"),o(w,"href",`${ne}/blind75`),o(h,"class","container"),o(p,"class","main")},m(e,u){it(e,f,u),t(f,q),t(f,ot),t(f,W),t(f,st),t(f,Y),t(Y,lt),it(e,Z,u),R(x,e,u),it(e,tt,u),it(e,p,u),t(p,j),R(C,j,null),t(p,ht),t(p,h),t(h,$),R(T,$,null),t($,mt),t($,z),t(z,ct),t($,ft),t($,I),t(I,dt),t(h,ut),t(h,g),t(g,G),t(G,S),t(S,pt),t(g,$t),t(g,K),t(K,N),t(N,vt),t(h,gt),t(h,_),R(b,_,null),t(_,_t),t(_,k),t(k,Et),t(k,E),t(E,wt),t(h,yt),t(h,d),R(D,d,null),t(d,xt),t(d,B),t(B,A),t(A,Ct),t(A,Tt),t(A,bt),t(d,Dt),t(d,Q),t(Q,At),t(d,Pt),t(d,U),t(U,It),t(h,St),t(h,w),t(w,Nt),t(p,kt),t(p,X),R(P,X,null),et=!0},p:ae,i(e){et||(H(x.$$.fragment,e),H(C.$$.fragment,e),H(T.$$.fragment,e),H(b.$$.fragment,e),H(D.$$.fragment,e),H(P.$$.fragment,e),et=!0)},o(e){V(x.$$.fragment,e),V(C.$$.fragment,e),V(T.$$.fragment,e),V(b.$$.fragment,e),V(D.$$.fragment,e),V(P.$$.fragment,e),et=!1},d(e){e&&a(f),e&&a(Z),J(x,e),e&&a(tt),e&&a(p),J(C),J(T),J(b),J(D),J(P)}}}class de extends Xt{constructor(f){super(),Zt(this,f,null,se,te,{})}}export{de as default};
