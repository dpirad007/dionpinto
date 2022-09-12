import{S as Ze,i as et,s as tt,e as a,k as i,t as d,w as k,c as n,a as o,m as s,h as m,d as r,x as H,b as l,f as rt,g as oe,J as e,y as M,E as at,q as V,o as F,B as R}from"../../chunks/index-cd4245c1.js";import{b as nt}from"../../chunks/paths-c8fbcc1d.js";import{S as ot,N as lt,F as it}from"../../chunks/Footer-8b9c5841.js";import{T as Le}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function st(Ye){let c,G,ie,J,se,j,fe,Z,T,ee,v,z,D,de,f,u,x,me,K,ce,pe,N,he,ve,_,Q,P,ue,$e,U,B,_e,Ee,E,C,ge,I,ye,g,be,Te,p,S,De,O,q,xe,ke=`

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
				`,Ce,Se,qe,W,Ae,Ne,X,Pe,Be,y,Ie,Oe,Y,A,te;return T=new ot({}),D=new lt({props:{curPage:"Blog"}}),x=new Le({props:{type:2,title:le}}),C=new Le({props:{type:5,title:"Description"}}),S=new Le({props:{type:5,title:"Code"}}),A=new it({}),{c(){c=a("head"),G=a("meta"),ie=i(),J=a("meta"),se=i(),j=a("title"),fe=d(le),Z=i(),k(T.$$.fragment),ee=i(),v=a("main"),z=a("header"),k(D.$$.fragment),de=i(),f=a("main"),u=a("div"),k(x.$$.fragment),me=i(),K=a("h4"),ce=d("Leetcode Blind 75"),pe=i(),N=a("h5"),he=d("12th Sept 2022 ~ Dion Pinto"),ve=i(),_=a("div"),Q=a("div"),P=a("a"),ue=d("Description"),$e=i(),U=a("div"),B=a("a"),_e=d("Code"),Ee=i(),E=a("section"),k(C.$$.fragment),ge=i(),I=a("p"),ye=d(`Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

				`),g=a("a"),be=d("(Problem)"),Te=i(),p=a("section"),k(S.$$.fragment),De=i(),O=a("pre"),q=a("code"),xe=d(`
				`),Ce=d(ke),Se=d(`			
			`),qe=i(),W=a("p"),Ae=d("Time Complexity => o(n)"),Ne=i(),X=a("p"),Pe=d("Space Complexity => o(n) (height of tree)"),Be=i(),y=a("a"),Ie=d("Back"),Oe=i(),Y=a("footer"),k(A.$$.fragment),this.h()},l(t){c=n(t,"HEAD",{});var h=o(c);G=n(h,"META",{name:!0,content:!0}),ie=s(h),J=n(h,"META",{name:!0,content:!0}),se=s(h),j=n(h,"TITLE",{});var He=o(j);fe=m(He,le),He.forEach(r),h.forEach(r),Z=s(t),H(T.$$.fragment,t),ee=s(t),v=n(t,"MAIN",{class:!0});var w=o(v);z=n(w,"HEADER",{});var Me=o(z);H(D.$$.fragment,Me),Me.forEach(r),de=s(w),f=n(w,"MAIN",{class:!0});var $=o(f);u=n($,"DIV",{id:!0});var L=o(u);H(x.$$.fragment,L),me=s(L),K=n(L,"H4",{});var Ve=o(K);ce=m(Ve,"Leetcode Blind 75"),Ve.forEach(r),pe=s(L),N=n(L,"H5",{style:!0});var Fe=o(N);he=m(Fe,"12th Sept 2022 ~ Dion Pinto"),Fe.forEach(r),L.forEach(r),ve=s($),_=n($,"DIV",{id:!0,class:!0});var re=o(_);Q=n(re,"DIV",{});var Re=o(Q);P=n(Re,"A",{href:!0});var Ge=o(P);ue=m(Ge,"Description"),Ge.forEach(r),Re.forEach(r),$e=s(re),U=n(re,"DIV",{});var Je=o(U);B=n(Je,"A",{href:!0});var je=o(B);_e=m(je,"Code"),je.forEach(r),Je.forEach(r),re.forEach(r),Ee=s($),E=n($,"SECTION",{id:!0});var ae=o(E);H(C.$$.fragment,ae),ge=s(ae),I=n(ae,"P",{});var we=o(I);ye=m(we,`Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).

				`),g=n(we,"A",{id:!0,href:!0,target:!0});var ze=o(g);be=m(ze,"(Problem)"),ze.forEach(r),we.forEach(r),ae.forEach(r),Te=s($),p=n($,"SECTION",{id:!0});var b=o(p);H(S.$$.fragment,b),De=s(b),O=n(b,"PRE",{id:!0});var Ke=o(O);q=n(Ke,"CODE",{});var ne=o(q);xe=m(ne,`
				`),Ce=m(ne,ke),Se=m(ne,`			
			`),ne.forEach(r),Ke.forEach(r),qe=s(b),W=n(b,"P",{});var Qe=o(W);Ae=m(Qe,"Time Complexity => o(n)"),Qe.forEach(r),Ne=s(b),X=n(b,"P",{});var Ue=o(X);Pe=m(Ue,"Space Complexity => o(n) (height of tree)"),Ue.forEach(r),b.forEach(r),Be=s($),y=n($,"A",{type:!0,class:!0,href:!0});var We=o(y);Ie=m(We,"Back"),We.forEach(r),$.forEach(r),Oe=s(w),Y=n(w,"FOOTER",{});var Xe=o(Y);H(A.$$.fragment,Xe),Xe.forEach(r),w.forEach(r),this.h()},h(){l(G,"name","author"),l(G,"content","Dion Pinto"),l(J,"name","description"),l(J,"content",`Leetcode Blind 75 ${le}`),rt(N,"font-style","italic"),l(u,"id","title"),l(P,"href","#description"),l(B,"href","#code"),l(_,"id","index"),l(_,"class","nes-container is-rounded is-dark"),l(g,"id","link"),l(g,"href","https://leetcode.com/problems/binary-tree-level-order-traversal/"),l(g,"target","_blank"),l(E,"id","description"),l(O,"id","block"),l(p,"id","code"),l(y,"type","button"),l(y,"class","nes-btn is-primary"),l(y,"href",`${nt}/blind75`),l(f,"class","container"),l(v,"class","main")},m(t,h){oe(t,c,h),e(c,G),e(c,ie),e(c,J),e(c,se),e(c,j),e(j,fe),oe(t,Z,h),M(T,t,h),oe(t,ee,h),oe(t,v,h),e(v,z),M(D,z,null),e(v,de),e(v,f),e(f,u),M(x,u,null),e(u,me),e(u,K),e(K,ce),e(u,pe),e(u,N),e(N,he),e(f,ve),e(f,_),e(_,Q),e(Q,P),e(P,ue),e(_,$e),e(_,U),e(U,B),e(B,_e),e(f,Ee),e(f,E),M(C,E,null),e(E,ge),e(E,I),e(I,ye),e(I,g),e(g,be),e(f,Te),e(f,p),M(S,p,null),e(p,De),e(p,O),e(O,q),e(q,xe),e(q,Ce),e(q,Se),e(p,qe),e(p,W),e(W,Ae),e(p,Ne),e(p,X),e(X,Pe),e(f,Be),e(f,y),e(y,Ie),e(v,Oe),e(v,Y),M(A,Y,null),te=!0},p:at,i(t){te||(V(T.$$.fragment,t),V(D.$$.fragment,t),V(x.$$.fragment,t),V(C.$$.fragment,t),V(S.$$.fragment,t),V(A.$$.fragment,t),te=!0)},o(t){F(T.$$.fragment,t),F(D.$$.fragment,t),F(x.$$.fragment,t),F(C.$$.fragment,t),F(S.$$.fragment,t),F(A.$$.fragment,t),te=!1},d(t){t&&r(c),t&&r(Z),R(T,t),t&&r(ee),t&&r(v),R(D),R(x),R(C),R(S),R(A)}}}const le="102. Binary Tree Level Order Traversal";class ht extends Ze{constructor(c){super(),et(this,c,null,st,tt,{})}}export{ht as default};
