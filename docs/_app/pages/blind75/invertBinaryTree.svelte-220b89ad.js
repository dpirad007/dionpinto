import{S as Ze,i as et,s as tt,e as n,k as l,t as d,w as L,c as a,a as o,m as s,h as m,d as r,x as M,b as i,f as rt,g as oe,J as e,y as V,E as nt,q,o as F,B as R}from"../../chunks/index-cd4245c1.js";import{b as at}from"../../chunks/paths-c8fbcc1d.js";import{S as ot,N as it,F as lt}from"../../chunks/Footer-8b9c5841.js";import{T as He}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function st(Ye){let c,G,le,J,se,j,fe,Z,b,ee,v,z,D,de,f,u,x,me,K,ce,pe,A,he,ve,_,Q,B,ue,$e,U,P,_e,Ee,E,C,ge,k,ye,g,Te,be,p,I,De,w,N,xe,Le=`
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
				`,Ce,Ie,Ne,W,Se,Ae,X,Be,Pe,y,ke,we,Y,S,te;return b=new ot({}),D=new it({props:{curPage:"Blog"}}),x=new He({props:{type:2,title:ie}}),C=new He({props:{type:5,title:"Description"}}),I=new He({props:{type:5,title:"Code"}}),S=new lt({}),{c(){c=n("head"),G=n("meta"),le=l(),J=n("meta"),se=l(),j=n("title"),fe=d(ie),Z=l(),L(b.$$.fragment),ee=l(),v=n("main"),z=n("header"),L(D.$$.fragment),de=l(),f=n("main"),u=n("div"),L(x.$$.fragment),me=l(),K=n("h4"),ce=d("Leetcode Blind 75"),pe=l(),A=n("h5"),he=d("12th Sept 2022 ~ Dion Pinto"),ve=l(),_=n("div"),Q=n("div"),B=n("a"),ue=d("Description"),$e=l(),U=n("div"),P=n("a"),_e=d("Code"),Ee=l(),E=n("section"),L(C.$$.fragment),ge=l(),k=n("p"),ye=d(`Given the root of a binary tree, invert the tree, and return its root.

				`),g=n("a"),Te=d("(Problem)"),be=l(),p=n("section"),L(I.$$.fragment),De=l(),w=n("pre"),N=n("code"),xe=d(`
				`),Ce=d(Le),Ie=d(`			
			`),Ne=l(),W=n("p"),Se=d("Time Complexity => o(n)"),Ae=l(),X=n("p"),Be=d("Space Complexity => o(n) (height of tree)"),Pe=l(),y=n("a"),ke=d("Back"),we=l(),Y=n("footer"),L(S.$$.fragment),this.h()},l(t){c=a(t,"HEAD",{});var h=o(c);G=a(h,"META",{name:!0,content:!0}),le=s(h),J=a(h,"META",{name:!0,content:!0}),se=s(h),j=a(h,"TITLE",{});var Me=o(j);fe=m(Me,ie),Me.forEach(r),h.forEach(r),Z=s(t),M(b.$$.fragment,t),ee=s(t),v=a(t,"MAIN",{class:!0});var O=o(v);z=a(O,"HEADER",{});var Ve=o(z);M(D.$$.fragment,Ve),Ve.forEach(r),de=s(O),f=a(O,"MAIN",{class:!0});var $=o(f);u=a($,"DIV",{id:!0});var H=o(u);M(x.$$.fragment,H),me=s(H),K=a(H,"H4",{});var qe=o(K);ce=m(qe,"Leetcode Blind 75"),qe.forEach(r),pe=s(H),A=a(H,"H5",{style:!0});var Fe=o(A);he=m(Fe,"12th Sept 2022 ~ Dion Pinto"),Fe.forEach(r),H.forEach(r),ve=s($),_=a($,"DIV",{id:!0,class:!0});var re=o(_);Q=a(re,"DIV",{});var Re=o(Q);B=a(Re,"A",{href:!0});var Ge=o(B);ue=m(Ge,"Description"),Ge.forEach(r),Re.forEach(r),$e=s(re),U=a(re,"DIV",{});var Je=o(U);P=a(Je,"A",{href:!0});var je=o(P);_e=m(je,"Code"),je.forEach(r),Je.forEach(r),re.forEach(r),Ee=s($),E=a($,"SECTION",{id:!0});var ne=o(E);M(C.$$.fragment,ne),ge=s(ne),k=a(ne,"P",{});var Oe=o(k);ye=m(Oe,`Given the root of a binary tree, invert the tree, and return its root.

				`),g=a(Oe,"A",{id:!0,href:!0,target:!0});var ze=o(g);Te=m(ze,"(Problem)"),ze.forEach(r),Oe.forEach(r),ne.forEach(r),be=s($),p=a($,"SECTION",{id:!0});var T=o(p);M(I.$$.fragment,T),De=s(T),w=a(T,"PRE",{id:!0});var Ke=o(w);N=a(Ke,"CODE",{});var ae=o(N);xe=m(ae,`
				`),Ce=m(ae,Le),Ie=m(ae,`			
			`),ae.forEach(r),Ke.forEach(r),Ne=s(T),W=a(T,"P",{});var Qe=o(W);Se=m(Qe,"Time Complexity => o(n)"),Qe.forEach(r),Ae=s(T),X=a(T,"P",{});var Ue=o(X);Be=m(Ue,"Space Complexity => o(n) (height of tree)"),Ue.forEach(r),T.forEach(r),Pe=s($),y=a($,"A",{type:!0,class:!0,href:!0});var We=o(y);ke=m(We,"Back"),We.forEach(r),$.forEach(r),we=s(O),Y=a(O,"FOOTER",{});var Xe=o(Y);M(S.$$.fragment,Xe),Xe.forEach(r),O.forEach(r),this.h()},h(){i(G,"name","author"),i(G,"content","Dion Pinto"),i(J,"name","description"),i(J,"content",`Leetcode Blind 75 ${ie}`),rt(A,"font-style","italic"),i(u,"id","title"),i(B,"href","#description"),i(P,"href","#code"),i(_,"id","index"),i(_,"class","nes-container is-rounded is-dark"),i(g,"id","link"),i(g,"href","https://leetcode.com/problems/invert-binary-tree/"),i(g,"target","_blank"),i(E,"id","description"),i(w,"id","block"),i(p,"id","code"),i(y,"type","button"),i(y,"class","nes-btn is-primary"),i(y,"href",`${at}/blind75`),i(f,"class","container svelte-qdub48"),i(v,"class","main")},m(t,h){oe(t,c,h),e(c,G),e(c,le),e(c,J),e(c,se),e(c,j),e(j,fe),oe(t,Z,h),V(b,t,h),oe(t,ee,h),oe(t,v,h),e(v,z),V(D,z,null),e(v,de),e(v,f),e(f,u),V(x,u,null),e(u,me),e(u,K),e(K,ce),e(u,pe),e(u,A),e(A,he),e(f,ve),e(f,_),e(_,Q),e(Q,B),e(B,ue),e(_,$e),e(_,U),e(U,P),e(P,_e),e(f,Ee),e(f,E),V(C,E,null),e(E,ge),e(E,k),e(k,ye),e(k,g),e(g,Te),e(f,be),e(f,p),V(I,p,null),e(p,De),e(p,w),e(w,N),e(N,xe),e(N,Ce),e(N,Ie),e(p,Ne),e(p,W),e(W,Se),e(p,Ae),e(p,X),e(X,Be),e(f,Pe),e(f,y),e(y,ke),e(v,we),e(v,Y),V(S,Y,null),te=!0},p:nt,i(t){te||(q(b.$$.fragment,t),q(D.$$.fragment,t),q(x.$$.fragment,t),q(C.$$.fragment,t),q(I.$$.fragment,t),q(S.$$.fragment,t),te=!0)},o(t){F(b.$$.fragment,t),F(D.$$.fragment,t),F(x.$$.fragment,t),F(C.$$.fragment,t),F(I.$$.fragment,t),F(S.$$.fragment,t),te=!1},d(t){t&&r(c),t&&r(Z),R(b,t),t&&r(ee),t&&r(v),R(D),R(x),R(C),R(I),R(S)}}}const ie="226. Invert Binary Tree";class ht extends Ze{constructor(c){super(),et(this,c,null,st,tt,{})}}export{ht as default};
