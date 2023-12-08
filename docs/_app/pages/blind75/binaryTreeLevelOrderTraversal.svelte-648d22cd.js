import{S as Ze,i as et,s as tt,e as a,k as i,t as d,w as k,c as n,a as o,m as s,h as m,d as r,x as H,b as l,f as rt,g as oe,J as e,y as M,E as at,q as V,o as F,B as R}from"../../chunks/index-cd4245c1.js";import{b as nt}from"../../chunks/paths-c8fbcc1d.js";import{S as ot,N as lt,F as it}from"../../chunks/Footer-8b9c5841.js";import{T as Le}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function st(Ye){let c,G,ie,J,se,j,fe,Z,T,ee,h,z,D,de,f,u,x,me,K,ce,pe,N,ve,he,_,Q,O,ue,$e,U,P,_e,ge,g,C,Ee,w,ye,E,be,Te,p,S,De,B,q,xe,ke=`

    from collections import deque
    # Definition for a binary tree node.
    # class TreeNode:
    #     def __init__(self, val=0, left=None, right=None):
    #         self.val = val
    #         self.left = left
    #         self.right = right
    class Solution:
        def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
            if not root:
                return []
            
            q = deque([root])
            sol=[[root.val]]
            
            while q:
                a=[]
                for i in range(len(q)):
                    
                    node = q.popleft()
                    
                    if node.left:
                        q.append(node.left)
                        a.append(node.left.val)
                    if node.right:
                        q.append(node.right)
                        a.append(node.right.val)
                if len(a)!=0:        
                    sol.append(a)
            return sol
				`,Ce,Se,qe,W,Ae,Ne,X,Oe,Pe,y,we,Be,Y,A,te;return T=new ot({}),D=new lt({props:{curPage:"Blog"}}),x=new Le({props:{type:2,title:le}}),C=new Le({props:{type:5,title:"Description"}}),S=new Le({props:{type:5,title:"Code"}}),A=new it({}),{c(){c=a("head"),G=a("meta"),ie=i(),J=a("meta"),se=i(),j=a("title"),fe=d(le),Z=i(),k(T.$$.fragment),ee=i(),h=a("main"),z=a("header"),k(D.$$.fragment),de=i(),f=a("main"),u=a("div"),k(x.$$.fragment),me=i(),K=a("h4"),ce=d("Leetcode Blind 75"),pe=i(),N=a("h5"),ve=d("12th Sept 2022 ~ Dion Pinto"),he=i(),_=a("div"),Q=a("div"),O=a("a"),ue=d("Description"),$e=i(),U=a("div"),P=a("a"),_e=d("Code"),ge=i(),g=a("section"),k(C.$$.fragment),Ee=i(),w=a("p"),ye=d(`Given the root of a binary tree, return the level order traversal of its nodes' values.
				(i.e., from left to right, level by level).

				`),E=a("a"),be=d("(Problem)"),Te=i(),p=a("section"),k(S.$$.fragment),De=i(),B=a("pre"),q=a("code"),xe=d(`
				`),Ce=d(ke),Se=d(`			
			`),qe=i(),W=a("p"),Ae=d("Time Complexity => o(n)"),Ne=i(),X=a("p"),Oe=d("Space Complexity => o(n) (height of tree)"),Pe=i(),y=a("a"),we=d("Back"),Be=i(),Y=a("footer"),k(A.$$.fragment),this.h()},l(t){c=n(t,"HEAD",{});var v=o(c);G=n(v,"META",{name:!0,content:!0}),ie=s(v),J=n(v,"META",{name:!0,content:!0}),se=s(v),j=n(v,"TITLE",{});var He=o(j);fe=m(He,le),He.forEach(r),v.forEach(r),Z=s(t),H(T.$$.fragment,t),ee=s(t),h=n(t,"MAIN",{class:!0});var I=o(h);z=n(I,"HEADER",{});var Me=o(z);H(D.$$.fragment,Me),Me.forEach(r),de=s(I),f=n(I,"MAIN",{class:!0});var $=o(f);u=n($,"DIV",{id:!0});var L=o(u);H(x.$$.fragment,L),me=s(L),K=n(L,"H4",{});var Ve=o(K);ce=m(Ve,"Leetcode Blind 75"),Ve.forEach(r),pe=s(L),N=n(L,"H5",{style:!0});var Fe=o(N);ve=m(Fe,"12th Sept 2022 ~ Dion Pinto"),Fe.forEach(r),L.forEach(r),he=s($),_=n($,"DIV",{id:!0,class:!0});var re=o(_);Q=n(re,"DIV",{});var Re=o(Q);O=n(Re,"A",{href:!0});var Ge=o(O);ue=m(Ge,"Description"),Ge.forEach(r),Re.forEach(r),$e=s(re),U=n(re,"DIV",{});var Je=o(U);P=n(Je,"A",{href:!0});var je=o(P);_e=m(je,"Code"),je.forEach(r),Je.forEach(r),re.forEach(r),ge=s($),g=n($,"SECTION",{id:!0});var ae=o(g);H(C.$$.fragment,ae),Ee=s(ae),w=n(ae,"P",{});var Ie=o(w);ye=m(Ie,`Given the root of a binary tree, return the level order traversal of its nodes' values.
				(i.e., from left to right, level by level).

				`),E=n(Ie,"A",{id:!0,href:!0,target:!0});var ze=o(E);be=m(ze,"(Problem)"),ze.forEach(r),Ie.forEach(r),ae.forEach(r),Te=s($),p=n($,"SECTION",{id:!0});var b=o(p);H(S.$$.fragment,b),De=s(b),B=n(b,"PRE",{id:!0});var Ke=o(B);q=n(Ke,"CODE",{});var ne=o(q);xe=m(ne,`
				`),Ce=m(ne,ke),Se=m(ne,`			
			`),ne.forEach(r),Ke.forEach(r),qe=s(b),W=n(b,"P",{});var Qe=o(W);Ae=m(Qe,"Time Complexity => o(n)"),Qe.forEach(r),Ne=s(b),X=n(b,"P",{});var Ue=o(X);Oe=m(Ue,"Space Complexity => o(n) (height of tree)"),Ue.forEach(r),b.forEach(r),Pe=s($),y=n($,"A",{type:!0,class:!0,href:!0});var We=o(y);we=m(We,"Back"),We.forEach(r),$.forEach(r),Be=s(I),Y=n(I,"FOOTER",{});var Xe=o(Y);H(A.$$.fragment,Xe),Xe.forEach(r),I.forEach(r),this.h()},h(){l(G,"name","author"),l(G,"content","Dion Pinto"),l(J,"name","description"),l(J,"content",`Leetcode Blind 75 ${le}`),rt(N,"font-style","italic"),l(u,"id","title"),l(O,"href","#description"),l(P,"href","#code"),l(_,"id","index"),l(_,"class","nes-container is-rounded is-dark"),l(E,"id","link"),l(E,"href","https://leetcode.com/problems/binary-tree-level-order-traversal/"),l(E,"target","_blank"),l(g,"id","description"),l(B,"id","block"),l(p,"id","code"),l(y,"type","button"),l(y,"class","nes-btn is-primary"),l(y,"href",`${nt}/blind75`),l(f,"class","container svelte-gwfu10"),l(h,"class","main")},m(t,v){oe(t,c,v),e(c,G),e(c,ie),e(c,J),e(c,se),e(c,j),e(j,fe),oe(t,Z,v),M(T,t,v),oe(t,ee,v),oe(t,h,v),e(h,z),M(D,z,null),e(h,de),e(h,f),e(f,u),M(x,u,null),e(u,me),e(u,K),e(K,ce),e(u,pe),e(u,N),e(N,ve),e(f,he),e(f,_),e(_,Q),e(Q,O),e(O,ue),e(_,$e),e(_,U),e(U,P),e(P,_e),e(f,ge),e(f,g),M(C,g,null),e(g,Ee),e(g,w),e(w,ye),e(w,E),e(E,be),e(f,Te),e(f,p),M(S,p,null),e(p,De),e(p,B),e(B,q),e(q,xe),e(q,Ce),e(q,Se),e(p,qe),e(p,W),e(W,Ae),e(p,Ne),e(p,X),e(X,Oe),e(f,Pe),e(f,y),e(y,we),e(h,Be),e(h,Y),M(A,Y,null),te=!0},p:at,i(t){te||(V(T.$$.fragment,t),V(D.$$.fragment,t),V(x.$$.fragment,t),V(C.$$.fragment,t),V(S.$$.fragment,t),V(A.$$.fragment,t),te=!0)},o(t){F(T.$$.fragment,t),F(D.$$.fragment,t),F(x.$$.fragment,t),F(C.$$.fragment,t),F(S.$$.fragment,t),F(A.$$.fragment,t),te=!1},d(t){t&&r(c),t&&r(Z),R(T,t),t&&r(ee),t&&r(h),R(D),R(x),R(C),R(S),R(A)}}}const le="102. Binary Tree Level Order Traversal";class vt extends Ze{constructor(c){super(),et(this,c,null,st,tt,{})}}export{vt as default};
