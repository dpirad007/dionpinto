import{S as Ze,i as et,s as tt,e as o,k as i,t as c,w as O,c as r,a,m as l,h as f,d as n,x as H,b as s,f as nt,g as ae,J as e,y as M,E as ot,q as V,o as F,B as R}from"../../chunks/index-cd4245c1.js";import{b as rt}from"../../chunks/paths-c8fbcc1d.js";import{S as at,N as st,F as it}from"../../chunks/Footer-8b9c5841.js";import{T as Ie}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function lt(Ye){let m,G,ie,W,le,J,de,Z,b,ee,u,j,y,ce,d,v,A,fe,z,me,he,x,pe,ue,_,K,N,ve,$e,Q,q,_e,Ee,E,C,ge,L,we,g,Te,be,h,S,ye,P,B,Ae,Oe=`
    # Definition for a binary tree node.
    # class TreeNode:
    #     def __init__(self, x):
    #         self.val = x
    #         self.left = None
    #         self.right = None

    class Solution:
        def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':      
            curr = root  
            while curr:
            
                if p.val>curr.val and q.val>curr.val:
                    curr = curr.right
                elif p.val<curr.val and q.val<curr.val:
                    curr = curr.left
                else:
                    return curr
				`,Ce,Se,Be,U,De,xe,X,Ne,qe,w,Le,Pe,Y,D,te;return b=new at({}),y=new st({props:{curPage:"Blog"}}),A=new Ie({props:{type:2,title:se}}),C=new Ie({props:{type:5,title:"Description"}}),S=new Ie({props:{type:5,title:"Code"}}),D=new it({}),{c(){m=o("head"),G=o("meta"),ie=i(),W=o("meta"),le=i(),J=o("title"),de=c(se),Z=i(),O(b.$$.fragment),ee=i(),u=o("main"),j=o("header"),O(y.$$.fragment),ce=i(),d=o("main"),v=o("div"),O(A.$$.fragment),fe=i(),z=o("h4"),me=c("Leetcode Blind 75"),he=i(),x=o("h5"),pe=c("29th Sept 2022 ~ Dion Pinto"),ue=i(),_=o("div"),K=o("div"),N=o("a"),ve=c("Description"),$e=i(),Q=o("div"),q=o("a"),_e=c("Code"),Ee=i(),E=o("section"),O(C.$$.fragment),ge=i(),L=o("p"),we=c(`Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given
				nodes in the BST. According to the definition of LCA on Wikipedia: \u201CThe lowest common
				ancestor is defined between two nodes p and q as the lowest node in T that has both p and q
				as descendants (where we allow a node to be a descendant of itself).\u201D

				`),g=o("a"),Te=c("(Problem)"),be=i(),h=o("section"),O(S.$$.fragment),ye=i(),P=o("pre"),B=o("code"),Ae=c(`
				`),Ce=c(Oe),Se=c(`			
			`),Be=i(),U=o("p"),De=c("Time Complexity => o(log(n))"),xe=i(),X=o("p"),Ne=c("Space Complexity => o(1)"),qe=i(),w=o("a"),Le=c("Back"),Pe=i(),Y=o("footer"),O(D.$$.fragment),this.h()},l(t){m=r(t,"HEAD",{});var p=a(m);G=r(p,"META",{name:!0,content:!0}),ie=l(p),W=r(p,"META",{name:!0,content:!0}),le=l(p),J=r(p,"TITLE",{});var He=a(J);de=f(He,se),He.forEach(n),p.forEach(n),Z=l(t),H(b.$$.fragment,t),ee=l(t),u=r(t,"MAIN",{class:!0});var k=a(u);j=r(k,"HEADER",{});var Me=a(j);H(y.$$.fragment,Me),Me.forEach(n),ce=l(k),d=r(k,"MAIN",{class:!0});var $=a(d);v=r($,"DIV",{id:!0});var I=a(v);H(A.$$.fragment,I),fe=l(I),z=r(I,"H4",{});var Ve=a(z);me=f(Ve,"Leetcode Blind 75"),Ve.forEach(n),he=l(I),x=r(I,"H5",{style:!0});var Fe=a(x);pe=f(Fe,"29th Sept 2022 ~ Dion Pinto"),Fe.forEach(n),I.forEach(n),ue=l($),_=r($,"DIV",{id:!0,class:!0});var ne=a(_);K=r(ne,"DIV",{});var Re=a(K);N=r(Re,"A",{href:!0});var Ge=a(N);ve=f(Ge,"Description"),Ge.forEach(n),Re.forEach(n),$e=l(ne),Q=r(ne,"DIV",{});var We=a(Q);q=r(We,"A",{href:!0});var Je=a(q);_e=f(Je,"Code"),Je.forEach(n),We.forEach(n),ne.forEach(n),Ee=l($),E=r($,"SECTION",{id:!0});var oe=a(E);H(C.$$.fragment,oe),ge=l(oe),L=r(oe,"P",{});var ke=a(L);we=f(ke,`Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given
				nodes in the BST. According to the definition of LCA on Wikipedia: \u201CThe lowest common
				ancestor is defined between two nodes p and q as the lowest node in T that has both p and q
				as descendants (where we allow a node to be a descendant of itself).\u201D

				`),g=r(ke,"A",{id:!0,href:!0,target:!0});var je=a(g);Te=f(je,"(Problem)"),je.forEach(n),ke.forEach(n),oe.forEach(n),be=l($),h=r($,"SECTION",{id:!0});var T=a(h);H(S.$$.fragment,T),ye=l(T),P=r(T,"PRE",{id:!0});var ze=a(P);B=r(ze,"CODE",{});var re=a(B);Ae=f(re,`
				`),Ce=f(re,Oe),Se=f(re,`			
			`),re.forEach(n),ze.forEach(n),Be=l(T),U=r(T,"P",{});var Ke=a(U);De=f(Ke,"Time Complexity => o(log(n))"),Ke.forEach(n),xe=l(T),X=r(T,"P",{});var Qe=a(X);Ne=f(Qe,"Space Complexity => o(1)"),Qe.forEach(n),T.forEach(n),qe=l($),w=r($,"A",{type:!0,class:!0,href:!0});var Ue=a(w);Le=f(Ue,"Back"),Ue.forEach(n),$.forEach(n),Pe=l(k),Y=r(k,"FOOTER",{});var Xe=a(Y);H(D.$$.fragment,Xe),Xe.forEach(n),k.forEach(n),this.h()},h(){s(G,"name","author"),s(G,"content","Dion Pinto"),s(W,"name","description"),s(W,"content",`Leetcode Blind 75 ${se}`),nt(x,"font-style","italic"),s(v,"id","title"),s(N,"href","#description"),s(q,"href","#code"),s(_,"id","index"),s(_,"class","nes-container is-rounded is-dark"),s(g,"id","link"),s(g,"href","https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"),s(g,"target","_blank"),s(E,"id","description"),s(P,"id","block"),s(h,"id","code"),s(w,"type","button"),s(w,"class","nes-btn is-primary"),s(w,"href",`${rt}/blind75`),s(d,"class","container svelte-qdub48"),s(u,"class","main")},m(t,p){ae(t,m,p),e(m,G),e(m,ie),e(m,W),e(m,le),e(m,J),e(J,de),ae(t,Z,p),M(b,t,p),ae(t,ee,p),ae(t,u,p),e(u,j),M(y,j,null),e(u,ce),e(u,d),e(d,v),M(A,v,null),e(v,fe),e(v,z),e(z,me),e(v,he),e(v,x),e(x,pe),e(d,ue),e(d,_),e(_,K),e(K,N),e(N,ve),e(_,$e),e(_,Q),e(Q,q),e(q,_e),e(d,Ee),e(d,E),M(C,E,null),e(E,ge),e(E,L),e(L,we),e(L,g),e(g,Te),e(d,be),e(d,h),M(S,h,null),e(h,ye),e(h,P),e(P,B),e(B,Ae),e(B,Ce),e(B,Se),e(h,Be),e(h,U),e(U,De),e(h,xe),e(h,X),e(X,Ne),e(d,qe),e(d,w),e(w,Le),e(u,Pe),e(u,Y),M(D,Y,null),te=!0},p:ot,i(t){te||(V(b.$$.fragment,t),V(y.$$.fragment,t),V(A.$$.fragment,t),V(C.$$.fragment,t),V(S.$$.fragment,t),V(D.$$.fragment,t),te=!0)},o(t){F(b.$$.fragment,t),F(y.$$.fragment,t),F(A.$$.fragment,t),F(C.$$.fragment,t),F(S.$$.fragment,t),F(D.$$.fragment,t),te=!1},d(t){t&&n(m),t&&n(Z),R(b,t),t&&n(ee),t&&n(u),R(y),R(A),R(C),R(S),R(D)}}}const se="235. Lowest Common Ancestor of a Binary Search Tree";class pt extends Ze{constructor(m){super(),et(this,m,null,lt,tt,{})}}export{pt as default};
