import{S as Zt,i as te,s as ee,e as n,k as l,t as d,w as L,c as a,a as o,m as s,h as m,d as r,x as M,b as i,f as re,g as ot,J as t,y as V,E as ne,q as F,o as R,B as q}from"../../chunks/index-cd4245c1.js";import{b as ae}from"../../chunks/paths-c8fbcc1d.js";import{S as oe,N as ie,F as le}from"../../chunks/Footer-8b9c5841.js";import{T as Ht}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function se(Yt){let c,G,lt,J,st,j,ft,Z,b,tt,v,z,D,dt,f,$,x,mt,K,ct,ht,A,pt,vt,_,Q,P,$t,ut,U,B,_t,Et,E,C,gt,k,yt,g,Tt,bt,h,I,Dt,w,N,xt,Lt=`
    # Definition for a binary tree node.
    # class TreeNode:
    #     def __init__(self, val=0, left=None, right=None):
    #         self.val = val
    #         self.left = left
    #         self.right = right
    class Solution:
        def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
            
            if not root:
                return 
            
            temp = root.left
            root.left=root.right
            root.right=temp
            
            self.invertTree(root.left)
            self.invertTree(root.right)

            return root
				`,Ct,It,Nt,W,St,At,X,Pt,Bt,y,kt,wt,Y,S,et;return b=new oe({}),D=new ie({props:{curPage:"Blog"}}),x=new Ht({props:{type:2,title:it}}),C=new Ht({props:{type:5,title:"Description"}}),I=new Ht({props:{type:5,title:"Code"}}),S=new le({}),{c(){c=n("head"),G=n("meta"),lt=l(),J=n("meta"),st=l(),j=n("title"),ft=d(it),Z=l(),L(b.$$.fragment),tt=l(),v=n("main"),z=n("header"),L(D.$$.fragment),dt=l(),f=n("main"),$=n("div"),L(x.$$.fragment),mt=l(),K=n("h4"),ct=d("Leetcode Blind 75"),ht=l(),A=n("h5"),pt=d("12th Sept 2022 ~ Dion Pinto"),vt=l(),_=n("div"),Q=n("div"),P=n("a"),$t=d("Description"),ut=l(),U=n("div"),B=n("a"),_t=d("Code"),Et=l(),E=n("section"),L(C.$$.fragment),gt=l(),k=n("p"),yt=d(`Given the root of a binary tree, invert the tree, and return its root.

				`),g=n("a"),Tt=d("(Problem)"),bt=l(),h=n("section"),L(I.$$.fragment),Dt=l(),w=n("pre"),N=n("code"),xt=d(`
				`),Ct=d(Lt),It=d(`			
			`),Nt=l(),W=n("p"),St=d("Time Complexity => o(n)"),At=l(),X=n("p"),Pt=d("Space Complexity => o(n) (height of tree)"),Bt=l(),y=n("a"),kt=d("Back"),wt=l(),Y=n("footer"),L(S.$$.fragment),this.h()},l(e){c=a(e,"HEAD",{});var p=o(c);G=a(p,"META",{name:!0,content:!0}),lt=s(p),J=a(p,"META",{name:!0,content:!0}),st=s(p),j=a(p,"TITLE",{});var Mt=o(j);ft=m(Mt,it),Mt.forEach(r),p.forEach(r),Z=s(e),M(b.$$.fragment,e),tt=s(e),v=a(e,"MAIN",{class:!0});var O=o(v);z=a(O,"HEADER",{});var Vt=o(z);M(D.$$.fragment,Vt),Vt.forEach(r),dt=s(O),f=a(O,"MAIN",{class:!0});var u=o(f);$=a(u,"DIV",{id:!0});var H=o($);M(x.$$.fragment,H),mt=s(H),K=a(H,"H4",{});var Ft=o(K);ct=m(Ft,"Leetcode Blind 75"),Ft.forEach(r),ht=s(H),A=a(H,"H5",{style:!0});var Rt=o(A);pt=m(Rt,"12th Sept 2022 ~ Dion Pinto"),Rt.forEach(r),H.forEach(r),vt=s(u),_=a(u,"DIV",{id:!0,class:!0});var rt=o(_);Q=a(rt,"DIV",{});var qt=o(Q);P=a(qt,"A",{href:!0});var Gt=o(P);$t=m(Gt,"Description"),Gt.forEach(r),qt.forEach(r),ut=s(rt),U=a(rt,"DIV",{});var Jt=o(U);B=a(Jt,"A",{href:!0});var jt=o(B);_t=m(jt,"Code"),jt.forEach(r),Jt.forEach(r),rt.forEach(r),Et=s(u),E=a(u,"SECTION",{id:!0});var nt=o(E);M(C.$$.fragment,nt),gt=s(nt),k=a(nt,"P",{});var Ot=o(k);yt=m(Ot,`Given the root of a binary tree, invert the tree, and return its root.

				`),g=a(Ot,"A",{id:!0,href:!0,target:!0});var zt=o(g);Tt=m(zt,"(Problem)"),zt.forEach(r),Ot.forEach(r),nt.forEach(r),bt=s(u),h=a(u,"SECTION",{id:!0});var T=o(h);M(I.$$.fragment,T),Dt=s(T),w=a(T,"PRE",{id:!0});var Kt=o(w);N=a(Kt,"CODE",{});var at=o(N);xt=m(at,`
				`),Ct=m(at,Lt),It=m(at,`			
			`),at.forEach(r),Kt.forEach(r),Nt=s(T),W=a(T,"P",{});var Qt=o(W);St=m(Qt,"Time Complexity => o(n)"),Qt.forEach(r),At=s(T),X=a(T,"P",{});var Ut=o(X);Pt=m(Ut,"Space Complexity => o(n) (height of tree)"),Ut.forEach(r),T.forEach(r),Bt=s(u),y=a(u,"A",{type:!0,class:!0,href:!0});var Wt=o(y);kt=m(Wt,"Back"),Wt.forEach(r),u.forEach(r),wt=s(O),Y=a(O,"FOOTER",{});var Xt=o(Y);M(S.$$.fragment,Xt),Xt.forEach(r),O.forEach(r),this.h()},h(){i(G,"name","author"),i(G,"content","Dion Pinto"),i(J,"name","description"),i(J,"content",`Leetcode Blind 75 ${it}`),re(A,"font-style","italic"),i($,"id","title"),i(P,"href","#description"),i(B,"href","#code"),i(_,"id","index"),i(_,"class","nes-container is-rounded is-dark"),i(g,"id","link"),i(g,"href","https://leetcode.com/problems/invert-binary-tree/"),i(g,"target","_blank"),i(E,"id","description"),i(w,"id","block"),i(h,"id","code"),i(y,"type","button"),i(y,"class","nes-btn is-primary"),i(y,"href",`${ae}/blind75`),i(f,"class","container"),i(v,"class","main")},m(e,p){ot(e,c,p),t(c,G),t(c,lt),t(c,J),t(c,st),t(c,j),t(j,ft),ot(e,Z,p),V(b,e,p),ot(e,tt,p),ot(e,v,p),t(v,z),V(D,z,null),t(v,dt),t(v,f),t(f,$),V(x,$,null),t($,mt),t($,K),t(K,ct),t($,ht),t($,A),t(A,pt),t(f,vt),t(f,_),t(_,Q),t(Q,P),t(P,$t),t(_,ut),t(_,U),t(U,B),t(B,_t),t(f,Et),t(f,E),V(C,E,null),t(E,gt),t(E,k),t(k,yt),t(k,g),t(g,Tt),t(f,bt),t(f,h),V(I,h,null),t(h,Dt),t(h,w),t(w,N),t(N,xt),t(N,Ct),t(N,It),t(h,Nt),t(h,W),t(W,St),t(h,At),t(h,X),t(X,Pt),t(f,Bt),t(f,y),t(y,kt),t(v,wt),t(v,Y),V(S,Y,null),et=!0},p:ne,i(e){et||(F(b.$$.fragment,e),F(D.$$.fragment,e),F(x.$$.fragment,e),F(C.$$.fragment,e),F(I.$$.fragment,e),F(S.$$.fragment,e),et=!0)},o(e){R(b.$$.fragment,e),R(D.$$.fragment,e),R(x.$$.fragment,e),R(C.$$.fragment,e),R(I.$$.fragment,e),R(S.$$.fragment,e),et=!1},d(e){e&&r(c),e&&r(Z),q(b,e),e&&r(tt),e&&r(v),q(D),q(x),q(C),q(I),q(S)}}}const it="226. Invert Binary Tree";class pe extends Zt{constructor(c){super(),te(this,c,null,se,ee,{})}}export{pe as default};
