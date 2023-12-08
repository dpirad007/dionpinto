import{S as Zt,i as te,s as ee,e as r,k as i,t as m,w as O,c as a,a as s,m as l,h as f,d as n,x as H,b as o,f as ne,g as st,J as t,y as M,E as re,q as V,o as F,B as J}from"../../chunks/index-cd4245c1.js";import{b as ae}from"../../chunks/paths-c8fbcc1d.js";import{S as se,N as oe,F as ie}from"../../chunks/Footer-8b9c5841.js";import{T as Nt}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function le(Yt){let u,R,it,G,lt,j,dt,Z,x,tt,p,z,w,mt,d,$,S,ft,K,ut,ct,C,ht,pt,_,Q,P,$t,vt,U,L,_t,gt,g,T,Et,k,bt,E,yt,xt,c,D,wt,B,I,St,Ot=`
    class Solution:
        def twoSum(self, numbers: List[int], target: int) -> List[int]:
            l,r=0,len(numbers)-1
            while(l<r):
                s=numbers[l]+numbers[r]
                if(s==target):
                    return [l+1,r+1]
                elif(s>target):
                    r-=1
                elif(s<target):
                    l+=1
				`,Tt,Dt,It,W,At,Ct,X,Pt,Lt,b,kt,Bt,Y,A,et;return x=new se({}),w=new oe({props:{curPage:"Blog"}}),S=new Nt({props:{type:2,title:ot}}),T=new Nt({props:{type:5,title:"Description"}}),D=new Nt({props:{type:5,title:"Code (Python) -> 2 pointer"}}),A=new ie({}),{c(){u=r("head"),R=r("meta"),it=i(),G=r("meta"),lt=i(),j=r("title"),dt=m(ot),Z=i(),O(x.$$.fragment),tt=i(),p=r("main"),z=r("header"),O(w.$$.fragment),mt=i(),d=r("main"),$=r("div"),O(S.$$.fragment),ft=i(),K=r("h4"),ut=m("Leetcode Blind 75"),ct=i(),C=r("h5"),ht=m("19th June 2022 ~ Dion Pinto"),pt=i(),_=r("div"),Q=r("div"),P=r("a"),$t=m("Description"),vt=i(),U=r("div"),L=r("a"),_t=m("Code"),gt=i(),g=r("section"),O(T.$$.fragment),Et=i(),k=r("p"),bt=m(`Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
				find two numbers such that they add up to a specific target number. Let these two numbers be
				numbers[index1] and numbers[index2] where 1 less than equal index1 less than index2 less
				than equal numbers.length.

				`),E=r("a"),yt=m("(Problem)"),xt=i(),c=r("section"),O(D.$$.fragment),wt=i(),B=r("pre"),I=r("code"),St=m(`
				`),Tt=m(Ot),Dt=m(`			
			`),It=i(),W=r("p"),At=m("Time Complexity => o(n)"),Ct=i(),X=r("p"),Pt=m("Space Complexity => o(1)"),Lt=i(),b=r("a"),kt=m("Back"),Bt=i(),Y=r("footer"),O(A.$$.fragment),this.h()},l(e){u=a(e,"HEAD",{});var h=s(u);R=a(h,"META",{name:!0,content:!0}),it=l(h),G=a(h,"META",{name:!0,content:!0}),lt=l(h),j=a(h,"TITLE",{});var Ht=s(j);dt=f(Ht,ot),Ht.forEach(n),h.forEach(n),Z=l(e),H(x.$$.fragment,e),tt=l(e),p=a(e,"MAIN",{class:!0});var q=s(p);z=a(q,"HEADER",{});var Mt=s(z);H(w.$$.fragment,Mt),Mt.forEach(n),mt=l(q),d=a(q,"MAIN",{class:!0});var v=s(d);$=a(v,"DIV",{id:!0});var N=s($);H(S.$$.fragment,N),ft=l(N),K=a(N,"H4",{});var Vt=s(K);ut=f(Vt,"Leetcode Blind 75"),Vt.forEach(n),ct=l(N),C=a(N,"H5",{style:!0});var Ft=s(C);ht=f(Ft,"19th June 2022 ~ Dion Pinto"),Ft.forEach(n),N.forEach(n),pt=l(v),_=a(v,"DIV",{id:!0,class:!0});var nt=s(_);Q=a(nt,"DIV",{});var Jt=s(Q);P=a(Jt,"A",{href:!0});var Rt=s(P);$t=f(Rt,"Description"),Rt.forEach(n),Jt.forEach(n),vt=l(nt),U=a(nt,"DIV",{});var Gt=s(U);L=a(Gt,"A",{href:!0});var jt=s(L);_t=f(jt,"Code"),jt.forEach(n),Gt.forEach(n),nt.forEach(n),gt=l(v),g=a(v,"SECTION",{id:!0});var rt=s(g);H(T.$$.fragment,rt),Et=l(rt),k=a(rt,"P",{});var qt=s(k);bt=f(qt,`Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
				find two numbers such that they add up to a specific target number. Let these two numbers be
				numbers[index1] and numbers[index2] where 1 less than equal index1 less than index2 less
				than equal numbers.length.

				`),E=a(qt,"A",{id:!0,href:!0,target:!0});var zt=s(E);yt=f(zt,"(Problem)"),zt.forEach(n),qt.forEach(n),rt.forEach(n),xt=l(v),c=a(v,"SECTION",{id:!0});var y=s(c);H(D.$$.fragment,y),wt=l(y),B=a(y,"PRE",{id:!0});var Kt=s(B);I=a(Kt,"CODE",{});var at=s(I);St=f(at,`
				`),Tt=f(at,Ot),Dt=f(at,`			
			`),at.forEach(n),Kt.forEach(n),It=l(y),W=a(y,"P",{});var Qt=s(W);At=f(Qt,"Time Complexity => o(n)"),Qt.forEach(n),Ct=l(y),X=a(y,"P",{});var Ut=s(X);Pt=f(Ut,"Space Complexity => o(1)"),Ut.forEach(n),y.forEach(n),Lt=l(v),b=a(v,"A",{type:!0,class:!0,href:!0});var Wt=s(b);kt=f(Wt,"Back"),Wt.forEach(n),v.forEach(n),Bt=l(q),Y=a(q,"FOOTER",{});var Xt=s(Y);H(A.$$.fragment,Xt),Xt.forEach(n),q.forEach(n),this.h()},h(){o(R,"name","author"),o(R,"content","Dion Pinto"),o(G,"name","description"),o(G,"content",`Leetcode Blind 75 ${ot}`),ne(C,"font-style","italic"),o($,"id","title"),o(P,"href","#description"),o(L,"href","#code"),o(_,"id","index"),o(_,"class","nes-container is-rounded is-dark"),o(E,"id","link"),o(E,"href","https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"),o(E,"target","_blank"),o(g,"id","description"),o(B,"id","block"),o(c,"id","code"),o(b,"type","button"),o(b,"class","nes-btn is-primary"),o(b,"href",`${ae}/blind75`),o(d,"class","container svelte-gwfu10"),o(p,"class","main")},m(e,h){st(e,u,h),t(u,R),t(u,it),t(u,G),t(u,lt),t(u,j),t(j,dt),st(e,Z,h),M(x,e,h),st(e,tt,h),st(e,p,h),t(p,z),M(w,z,null),t(p,mt),t(p,d),t(d,$),M(S,$,null),t($,ft),t($,K),t(K,ut),t($,ct),t($,C),t(C,ht),t(d,pt),t(d,_),t(_,Q),t(Q,P),t(P,$t),t(_,vt),t(_,U),t(U,L),t(L,_t),t(d,gt),t(d,g),M(T,g,null),t(g,Et),t(g,k),t(k,bt),t(k,E),t(E,yt),t(d,xt),t(d,c),M(D,c,null),t(c,wt),t(c,B),t(B,I),t(I,St),t(I,Tt),t(I,Dt),t(c,It),t(c,W),t(W,At),t(c,Ct),t(c,X),t(X,Pt),t(d,Lt),t(d,b),t(b,kt),t(p,Bt),t(p,Y),M(A,Y,null),et=!0},p:re,i(e){et||(V(x.$$.fragment,e),V(w.$$.fragment,e),V(S.$$.fragment,e),V(T.$$.fragment,e),V(D.$$.fragment,e),V(A.$$.fragment,e),et=!0)},o(e){F(x.$$.fragment,e),F(w.$$.fragment,e),F(S.$$.fragment,e),F(T.$$.fragment,e),F(D.$$.fragment,e),F(A.$$.fragment,e),et=!1},d(e){e&&n(u),e&&n(Z),J(x,e),e&&n(tt),e&&n(p),J(w),J(S),J(T),J(D),J(A)}}}const ot="167. Two Sum II - Input Array Is Sorted";class he extends Zt{constructor(u){super(),te(this,u,null,le,ee,{})}}export{he as default};