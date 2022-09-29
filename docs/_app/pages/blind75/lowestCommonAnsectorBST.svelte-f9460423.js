import{S as Ze,i as et,s as tt,e as o,k as i,t as c,w as O,c as r,a,m as l,h as f,d as n,x as H,b as s,f as nt,g as ae,J as e,y as M,E as ot,q as V,o as F,B as R}from"../../chunks/index-cd4245c1.js";import{b as rt}from"../../chunks/paths-c8fbcc1d.js";import{S as at,N as st,F as it}from"../../chunks/Footer-8b9c5841.js";import{T as Ie}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function lt(Ye){let m,G,ie,W,le,J,de,Z,b,ee,u,j,y,ce,d,v,A,fe,z,me,he,B,pe,ue,_,K,N,ve,$e,Q,L,_e,Ee,E,C,ge,P,we,g,Te,be,h,S,ye,k,D,Ae,Oe=`
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
				`,Ce,Se,De,U,xe,Be,X,Ne,Le,w,Pe,ke,Y,x,te;return b=new at({}),y=new st({props:{curPage:"Blog"}}),A=new Ie({props:{type:2,title:se}}),C=new Ie({props:{type:5,title:"Description"}}),S=new Ie({props:{type:5,title:"Code"}}),x=new it({}),{c(){m=o("head"),G=o("meta"),ie=i(),W=o("meta"),le=i(),J=o("title"),de=c(se),Z=i(),O(b.$$.fragment),ee=i(),u=o("main"),j=o("header"),O(y.$$.fragment),ce=i(),d=o("main"),v=o("div"),O(A.$$.fragment),fe=i(),z=o("h4"),me=c("Leetcode Blind 75"),he=i(),B=o("h5"),pe=c("29th Sept 2022 ~ Dion Pinto"),ue=i(),_=o("div"),K=o("div"),N=o("a"),ve=c("Description"),$e=i(),Q=o("div"),L=o("a"),_e=c("Code"),Ee=i(),E=o("section"),O(C.$$.fragment),ge=i(),P=o("p"),we=c(`Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given
				nodes in the BST. According to the definition of LCA on Wikipedia: \u201CThe lowest common
				ancestor is defined between two nodes p and q as the lowest node in T that has both p and q
				as descendants (where we allow a node to be a descendant of itself).\u201D

				`),g=o("a"),Te=c("(Problem)"),be=i(),h=o("section"),O(S.$$.fragment),ye=i(),k=o("pre"),D=o("code"),Ae=c(`
				`),Ce=c(Oe),Se=c(`			
			`),De=i(),U=o("p"),xe=c("Time Complexity => o(log(n))"),Be=i(),X=o("p"),Ne=c("Space Complexity => o(1)"),Le=i(),w=o("a"),Pe=c("Back"),ke=i(),Y=o("footer"),O(x.$$.fragment),this.h()},l(t){m=r(t,"HEAD",{});var p=a(m);G=r(p,"META",{name:!0,content:!0}),ie=l(p),W=r(p,"META",{name:!0,content:!0}),le=l(p),J=r(p,"TITLE",{});var He=a(J);de=f(He,se),He.forEach(n),p.forEach(n),Z=l(t),H(b.$$.fragment,t),ee=l(t),u=r(t,"MAIN",{class:!0});var q=a(u);j=r(q,"HEADER",{});var Me=a(j);H(y.$$.fragment,Me),Me.forEach(n),ce=l(q),d=r(q,"MAIN",{class:!0});var $=a(d);v=r($,"DIV",{id:!0});var I=a(v);H(A.$$.fragment,I),fe=l(I),z=r(I,"H4",{});var Ve=a(z);me=f(Ve,"Leetcode Blind 75"),Ve.forEach(n),he=l(I),B=r(I,"H5",{style:!0});var Fe=a(B);pe=f(Fe,"29th Sept 2022 ~ Dion Pinto"),Fe.forEach(n),I.forEach(n),ue=l($),_=r($,"DIV",{id:!0,class:!0});var ne=a(_);K=r(ne,"DIV",{});var Re=a(K);N=r(Re,"A",{href:!0});var Ge=a(N);ve=f(Ge,"Description"),Ge.forEach(n),Re.forEach(n),$e=l(ne),Q=r(ne,"DIV",{});var We=a(Q);L=r(We,"A",{href:!0});var Je=a(L);_e=f(Je,"Code"),Je.forEach(n),We.forEach(n),ne.forEach(n),Ee=l($),E=r($,"SECTION",{id:!0});var oe=a(E);H(C.$$.fragment,oe),ge=l(oe),P=r(oe,"P",{});var qe=a(P);we=f(qe,`Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given
				nodes in the BST. According to the definition of LCA on Wikipedia: \u201CThe lowest common
				ancestor is defined between two nodes p and q as the lowest node in T that has both p and q
				as descendants (where we allow a node to be a descendant of itself).\u201D

				`),g=r(qe,"A",{id:!0,href:!0,target:!0});var je=a(g);Te=f(je,"(Problem)"),je.forEach(n),qe.forEach(n),oe.forEach(n),be=l($),h=r($,"SECTION",{id:!0});var T=a(h);H(S.$$.fragment,T),ye=l(T),k=r(T,"PRE",{id:!0});var ze=a(k);D=r(ze,"CODE",{});var re=a(D);Ae=f(re,`
				`),Ce=f(re,Oe),Se=f(re,`			
			`),re.forEach(n),ze.forEach(n),De=l(T),U=r(T,"P",{});var Ke=a(U);xe=f(Ke,"Time Complexity => o(log(n))"),Ke.forEach(n),Be=l(T),X=r(T,"P",{});var Qe=a(X);Ne=f(Qe,"Space Complexity => o(1)"),Qe.forEach(n),T.forEach(n),Le=l($),w=r($,"A",{type:!0,class:!0,href:!0});var Ue=a(w);Pe=f(Ue,"Back"),Ue.forEach(n),$.forEach(n),ke=l(q),Y=r(q,"FOOTER",{});var Xe=a(Y);H(x.$$.fragment,Xe),Xe.forEach(n),q.forEach(n),this.h()},h(){s(G,"name","author"),s(G,"content","Dion Pinto"),s(W,"name","description"),s(W,"content",`Leetcode Blind 75 ${se}`),nt(B,"font-style","italic"),s(v,"id","title"),s(N,"href","#description"),s(L,"href","#code"),s(_,"id","index"),s(_,"class","nes-container is-rounded is-dark"),s(g,"id","link"),s(g,"href","https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"),s(g,"target","_blank"),s(E,"id","description"),s(k,"id","block"),s(h,"id","code"),s(w,"type","button"),s(w,"class","nes-btn is-primary"),s(w,"href",`${rt}/blind75`),s(d,"class","container"),s(u,"class","main")},m(t,p){ae(t,m,p),e(m,G),e(m,ie),e(m,W),e(m,le),e(m,J),e(J,de),ae(t,Z,p),M(b,t,p),ae(t,ee,p),ae(t,u,p),e(u,j),M(y,j,null),e(u,ce),e(u,d),e(d,v),M(A,v,null),e(v,fe),e(v,z),e(z,me),e(v,he),e(v,B),e(B,pe),e(d,ue),e(d,_),e(_,K),e(K,N),e(N,ve),e(_,$e),e(_,Q),e(Q,L),e(L,_e),e(d,Ee),e(d,E),M(C,E,null),e(E,ge),e(E,P),e(P,we),e(P,g),e(g,Te),e(d,be),e(d,h),M(S,h,null),e(h,ye),e(h,k),e(k,D),e(D,Ae),e(D,Ce),e(D,Se),e(h,De),e(h,U),e(U,xe),e(h,Be),e(h,X),e(X,Ne),e(d,Le),e(d,w),e(w,Pe),e(u,ke),e(u,Y),M(x,Y,null),te=!0},p:ot,i(t){te||(V(b.$$.fragment,t),V(y.$$.fragment,t),V(A.$$.fragment,t),V(C.$$.fragment,t),V(S.$$.fragment,t),V(x.$$.fragment,t),te=!0)},o(t){F(b.$$.fragment,t),F(y.$$.fragment,t),F(A.$$.fragment,t),F(C.$$.fragment,t),F(S.$$.fragment,t),F(x.$$.fragment,t),te=!1},d(t){t&&n(m),t&&n(Z),R(b,t),t&&n(ee),t&&n(u),R(y),R(A),R(C),R(S),R(x)}}}const se="235. Lowest Common Ancestor of a Binary Search Tree";class pt extends Ze{constructor(m){super(),et(this,m,null,lt,tt,{})}}export{pt as default};
