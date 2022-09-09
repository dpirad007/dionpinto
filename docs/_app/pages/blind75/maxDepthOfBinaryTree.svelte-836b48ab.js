import{S as vt,i as _t,s as $t,e as o,k as l,t as d,w as H,c as n,a,m as s,h as m,d as r,x as L,b as i,f as Et,g as de,J as e,y as R,E as gt,q as V,o as G,B as W}from"../../chunks/index-cd4245c1.js";import{b as yt}from"../../chunks/paths-c8fbcc1d.js";import{S as bt,N as Dt,F as xt}from"../../chunks/Footer-8b9c5841.js";import{T as Qe}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function St(ut){let p,J,he,j,ce,z,pe,oe,D,ne,v,K,x,ue,h,_,S,ve,Q,_e,$e,q,Ee,ge,E,U,w,ye,be,X,A,De,xe,g,T,Se,C,Te,y,Ne,Be,f,N,Fe,Y,Pe,qe,I,B,we,Ue=`
    # Definition for a binary tree node.
    # class TreeNode:
    #     def __init__(self, val=0, left=None, right=None):
    #         self.val = val
    #         self.left = left
    #         self.right = right
    class Solution:
        def maxDepth(self, root: Optional[TreeNode]) -> int:
                if not root:
                    return 0
                
                return(1 + max(self.maxDepth(root.left),self.maxDepth(root.right)))
				`,Ae,Ce,Ie,Z,Oe,ke,O,F,Me,Xe=`
    from collections import deque
    # Definition for a binary tree node.
    # class TreeNode:
    #     def __init__(self, val=0, left=None, right=None):
    #         self.val = val
    #         self.left = left
    #         self.right = right
    class Solution:
        def maxDepth(self, root: Optional[TreeNode]) -> int:
            if not root:
                return 0
            level=0
            q = deque([root])
            
            while q:
                
                for i in range(len(q)):
                    node = q.popleft()
                
                    if node:
                        if node.left:
                            q.append(node.left)
                        if node.right:
                            q.append(node.right)
                        
                level+=1
            return level
				`,He,Le,Re,ee,Ve,Ge,te,We,Je,b,je,ze,re,P,ae;return D=new bt({}),x=new Dt({props:{curPage:"Blog"}}),S=new Qe({props:{type:2,title:me}}),T=new Qe({props:{type:5,title:"Description"}}),N=new Qe({props:{type:5,title:"Code"}}),P=new xt({}),{c(){p=o("head"),J=o("meta"),he=l(),j=o("meta"),ce=l(),z=o("title"),pe=d(me),oe=l(),H(D.$$.fragment),ne=l(),v=o("main"),K=o("header"),H(x.$$.fragment),ue=l(),h=o("main"),_=o("div"),H(S.$$.fragment),ve=l(),Q=o("h4"),_e=d("Leetcode Blind 75"),$e=l(),q=o("h5"),Ee=d("9th Sept 2022 ~ Dion Pinto"),ge=l(),E=o("div"),U=o("div"),w=o("a"),ye=d("Description"),be=l(),X=o("div"),A=o("a"),De=d("Code"),xe=l(),g=o("section"),H(T.$$.fragment),Se=l(),C=o("p"),Te=d(`Given the root of a binary tree, return its maximum depth.
                A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

				`),y=o("a"),Ne=d("(Problem)"),Be=l(),f=o("section"),H(N.$$.fragment),Fe=l(),Y=o("p"),Pe=d(`We can find the max subarray by 2 common methods DFS, BFS.
                Following is the DFS (recursive) approach.`),qe=l(),I=o("pre"),B=o("code"),we=d(`
				`),Ae=d(Ue),Ce=d(`			
			`),Ie=l(),Z=o("p"),Oe=d("BFS (queue) approach."),ke=l(),O=o("pre"),F=o("code"),Me=d(`
				`),He=d(Xe),Le=d(`			
			`),Re=l(),ee=o("p"),Ve=d("Time Complexity => o(n)"),Ge=l(),te=o("p"),We=d("Space Complexity => o(n) (height of tree, since tree is not balanced its o(n))"),Je=l(),b=o("a"),je=d("Back"),ze=l(),re=o("footer"),H(P.$$.fragment),this.h()},l(t){p=n(t,"HEAD",{});var u=a(p);J=n(u,"META",{name:!0,content:!0}),he=s(u),j=n(u,"META",{name:!0,content:!0}),ce=s(u),z=n(u,"TITLE",{});var Ye=a(z);pe=m(Ye,me),Ye.forEach(r),u.forEach(r),oe=s(t),L(D.$$.fragment,t),ne=s(t),v=n(t,"MAIN",{class:!0});var k=a(v);K=n(k,"HEADER",{});var Ze=a(K);L(x.$$.fragment,Ze),Ze.forEach(r),ue=s(k),h=n(k,"MAIN",{class:!0});var $=a(h);_=n($,"DIV",{id:!0});var M=a(_);L(S.$$.fragment,M),ve=s(M),Q=n(M,"H4",{});var et=a(Q);_e=m(et,"Leetcode Blind 75"),et.forEach(r),$e=s(M),q=n(M,"H5",{style:!0});var tt=a(q);Ee=m(tt,"9th Sept 2022 ~ Dion Pinto"),tt.forEach(r),M.forEach(r),ge=s($),E=n($,"DIV",{id:!0,class:!0});var ie=a(E);U=n(ie,"DIV",{});var rt=a(U);w=n(rt,"A",{href:!0});var ot=a(w);ye=m(ot,"Description"),ot.forEach(r),rt.forEach(r),be=s(ie),X=n(ie,"DIV",{});var nt=a(X);A=n(nt,"A",{href:!0});var at=a(A);De=m(at,"Code"),at.forEach(r),nt.forEach(r),ie.forEach(r),xe=s($),g=n($,"SECTION",{id:!0});var le=a(g);L(T.$$.fragment,le),Se=s(le),C=n(le,"P",{});var Ke=a(C);Te=m(Ke,`Given the root of a binary tree, return its maximum depth.
                A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

				`),y=n(Ke,"A",{id:!0,href:!0,target:!0});var it=a(y);Ne=m(it,"(Problem)"),it.forEach(r),Ke.forEach(r),le.forEach(r),Be=s($),f=n($,"SECTION",{id:!0});var c=a(f);L(N.$$.fragment,c),Fe=s(c),Y=n(c,"P",{});var lt=a(Y);Pe=m(lt,`We can find the max subarray by 2 common methods DFS, BFS.
                Following is the DFS (recursive) approach.`),lt.forEach(r),qe=s(c),I=n(c,"PRE",{id:!0});var st=a(I);B=n(st,"CODE",{});var se=a(B);we=m(se,`
				`),Ae=m(se,Ue),Ce=m(se,`			
			`),se.forEach(r),st.forEach(r),Ie=s(c),Z=n(c,"P",{});var ft=a(Z);Oe=m(ft,"BFS (queue) approach."),ft.forEach(r),ke=s(c),O=n(c,"PRE",{id:!0});var dt=a(O);F=n(dt,"CODE",{});var fe=a(F);Me=m(fe,`
				`),He=m(fe,Xe),Le=m(fe,`			
			`),fe.forEach(r),dt.forEach(r),Re=s(c),ee=n(c,"P",{});var mt=a(ee);Ve=m(mt,"Time Complexity => o(n)"),mt.forEach(r),Ge=s(c),te=n(c,"P",{});var ht=a(te);We=m(ht,"Space Complexity => o(n) (height of tree, since tree is not balanced its o(n))"),ht.forEach(r),c.forEach(r),Je=s($),b=n($,"A",{type:!0,class:!0,href:!0});var ct=a(b);je=m(ct,"Back"),ct.forEach(r),$.forEach(r),ze=s(k),re=n(k,"FOOTER",{});var pt=a(re);L(P.$$.fragment,pt),pt.forEach(r),k.forEach(r),this.h()},h(){i(J,"name","author"),i(J,"content","Dion Pinto"),i(j,"name","description"),i(j,"content",`Leetcode Blind 75 ${me}`),Et(q,"font-style","italic"),i(_,"id","title"),i(w,"href","#description"),i(A,"href","#code"),i(E,"id","index"),i(E,"class","nes-container is-rounded is-dark"),i(y,"id","link"),i(y,"href","https://leetcode.com/problems/maximum-depth-of-binary-tree/"),i(y,"target","_blank"),i(g,"id","description"),i(I,"id","block"),i(O,"id","block"),i(f,"id","code"),i(b,"type","button"),i(b,"class","nes-btn is-primary"),i(b,"href",`${yt}/blind75`),i(h,"class","container"),i(v,"class","main")},m(t,u){de(t,p,u),e(p,J),e(p,he),e(p,j),e(p,ce),e(p,z),e(z,pe),de(t,oe,u),R(D,t,u),de(t,ne,u),de(t,v,u),e(v,K),R(x,K,null),e(v,ue),e(v,h),e(h,_),R(S,_,null),e(_,ve),e(_,Q),e(Q,_e),e(_,$e),e(_,q),e(q,Ee),e(h,ge),e(h,E),e(E,U),e(U,w),e(w,ye),e(E,be),e(E,X),e(X,A),e(A,De),e(h,xe),e(h,g),R(T,g,null),e(g,Se),e(g,C),e(C,Te),e(C,y),e(y,Ne),e(h,Be),e(h,f),R(N,f,null),e(f,Fe),e(f,Y),e(Y,Pe),e(f,qe),e(f,I),e(I,B),e(B,we),e(B,Ae),e(B,Ce),e(f,Ie),e(f,Z),e(Z,Oe),e(f,ke),e(f,O),e(O,F),e(F,Me),e(F,He),e(F,Le),e(f,Re),e(f,ee),e(ee,Ve),e(f,Ge),e(f,te),e(te,We),e(h,Je),e(h,b),e(b,je),e(v,ze),e(v,re),R(P,re,null),ae=!0},p:gt,i(t){ae||(V(D.$$.fragment,t),V(x.$$.fragment,t),V(S.$$.fragment,t),V(T.$$.fragment,t),V(N.$$.fragment,t),V(P.$$.fragment,t),ae=!0)},o(t){G(D.$$.fragment,t),G(x.$$.fragment,t),G(S.$$.fragment,t),G(T.$$.fragment,t),G(N.$$.fragment,t),G(P.$$.fragment,t),ae=!1},d(t){t&&r(p),t&&r(oe),W(D,t),t&&r(ne),t&&r(v),W(x),W(S),W(T),W(N),W(P)}}}const me="104. Maximum Depth of Binary Tree";class qt extends vt{constructor(p){super(),_t(this,p,null,St,$t,{})}}export{qt as default};
