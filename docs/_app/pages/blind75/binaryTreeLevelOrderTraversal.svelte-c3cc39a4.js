import{S as Ze,i as et,s as tt,e as a,k as i,t as f,w as k,c as n,a as o,m as s,h as m,d as r,x as H,b as l,f as rt,g as oe,J as e,y as M,E as at,q as V,o as F,B as R}from"../../chunks/index-cd4245c1.js";import{b as nt}from"../../chunks/paths-c8fbcc1d.js";import{S as ot,N as lt,F as it}from"../../chunks/Footer-8b9c5841.js";import{T as we}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function st(Ye){let c,G,ie,J,se,j,de,Z,T,ee,h,z,D,fe,d,u,q,me,K,ce,pe,N,ve,he,_,Q,O,ue,$e,U,P,_e,Ee,E,x,ge,B,ye,g,be,Te,p,C,De,I,S,qe,ke=`

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
				`,xe,Ce,Se,W,Ae,Ne,X,Oe,Pe,y,Be,Ie,Y,A,te;return T=new ot({}),D=new lt({props:{curPage:"Blog"}}),q=new we({props:{type:2,title:le}}),x=new we({props:{type:5,title:"Description"}}),C=new we({props:{type:5,title:"Code"}}),A=new it({}),{c(){c=a("head"),G=a("meta"),ie=i(),J=a("meta"),se=i(),j=a("title"),de=f(le),Z=i(),k(T.$$.fragment),ee=i(),h=a("main"),z=a("header"),k(D.$$.fragment),fe=i(),d=a("main"),u=a("div"),k(q.$$.fragment),me=i(),K=a("h4"),ce=f("Leetcode Blind 75"),pe=i(),N=a("h5"),ve=f("12th Sept 2022 ~ Dion Pinto"),he=i(),_=a("div"),Q=a("div"),O=a("a"),ue=f("Description"),$e=i(),U=a("div"),P=a("a"),_e=f("Code"),Ee=i(),E=a("section"),k(x.$$.fragment),ge=i(),B=a("p"),ye=f(`Given the root of a binary tree, return the level order traversal of its nodes' values.
				(i.e., from left to right, level by level).

				`),g=a("a"),be=f("(Problem)"),Te=i(),p=a("section"),k(C.$$.fragment),De=i(),I=a("pre"),S=a("code"),qe=f(`
				`),xe=f(ke),Ce=f(`			
			`),Se=i(),W=a("p"),Ae=f("Time Complexity => o(n)"),Ne=i(),X=a("p"),Oe=f("Space Complexity => o(n) (height of tree)"),Pe=i(),y=a("a"),Be=f("Back"),Ie=i(),Y=a("footer"),k(A.$$.fragment),this.h()},l(t){c=n(t,"HEAD",{});var v=o(c);G=n(v,"META",{name:!0,content:!0}),ie=s(v),J=n(v,"META",{name:!0,content:!0}),se=s(v),j=n(v,"TITLE",{});var He=o(j);de=m(He,le),He.forEach(r),v.forEach(r),Z=s(t),H(T.$$.fragment,t),ee=s(t),h=n(t,"MAIN",{class:!0});var L=o(h);z=n(L,"HEADER",{});var Me=o(z);H(D.$$.fragment,Me),Me.forEach(r),fe=s(L),d=n(L,"MAIN",{class:!0});var $=o(d);u=n($,"DIV",{id:!0});var w=o(u);H(q.$$.fragment,w),me=s(w),K=n(w,"H4",{});var Ve=o(K);ce=m(Ve,"Leetcode Blind 75"),Ve.forEach(r),pe=s(w),N=n(w,"H5",{style:!0});var Fe=o(N);ve=m(Fe,"12th Sept 2022 ~ Dion Pinto"),Fe.forEach(r),w.forEach(r),he=s($),_=n($,"DIV",{id:!0,class:!0});var re=o(_);Q=n(re,"DIV",{});var Re=o(Q);O=n(Re,"A",{href:!0});var Ge=o(O);ue=m(Ge,"Description"),Ge.forEach(r),Re.forEach(r),$e=s(re),U=n(re,"DIV",{});var Je=o(U);P=n(Je,"A",{href:!0});var je=o(P);_e=m(je,"Code"),je.forEach(r),Je.forEach(r),re.forEach(r),Ee=s($),E=n($,"SECTION",{id:!0});var ae=o(E);H(x.$$.fragment,ae),ge=s(ae),B=n(ae,"P",{});var Le=o(B);ye=m(Le,`Given the root of a binary tree, return the level order traversal of its nodes' values.
				(i.e., from left to right, level by level).

				`),g=n(Le,"A",{id:!0,href:!0,target:!0});var ze=o(g);be=m(ze,"(Problem)"),ze.forEach(r),Le.forEach(r),ae.forEach(r),Te=s($),p=n($,"SECTION",{id:!0});var b=o(p);H(C.$$.fragment,b),De=s(b),I=n(b,"PRE",{id:!0});var Ke=o(I);S=n(Ke,"CODE",{});var ne=o(S);qe=m(ne,`
				`),xe=m(ne,ke),Ce=m(ne,`			
			`),ne.forEach(r),Ke.forEach(r),Se=s(b),W=n(b,"P",{});var Qe=o(W);Ae=m(Qe,"Time Complexity => o(n)"),Qe.forEach(r),Ne=s(b),X=n(b,"P",{});var Ue=o(X);Oe=m(Ue,"Space Complexity => o(n) (height of tree)"),Ue.forEach(r),b.forEach(r),Pe=s($),y=n($,"A",{type:!0,class:!0,href:!0});var We=o(y);Be=m(We,"Back"),We.forEach(r),$.forEach(r),Ie=s(L),Y=n(L,"FOOTER",{});var Xe=o(Y);H(A.$$.fragment,Xe),Xe.forEach(r),L.forEach(r),this.h()},h(){l(G,"name","author"),l(G,"content","Dion Pinto"),l(J,"name","description"),l(J,"content",`Leetcode Blind 75 ${le}`),rt(N,"font-style","italic"),l(u,"id","title"),l(O,"href","#description"),l(P,"href","#code"),l(_,"id","index"),l(_,"class","nes-container is-rounded is-dark"),l(g,"id","link"),l(g,"href","https://leetcode.com/problems/binary-tree-level-order-traversal/"),l(g,"target","_blank"),l(E,"id","description"),l(I,"id","block"),l(p,"id","code"),l(y,"type","button"),l(y,"class","nes-btn is-primary"),l(y,"href",`${nt}/blind75`),l(d,"class","container svelte-qdub48"),l(h,"class","main")},m(t,v){oe(t,c,v),e(c,G),e(c,ie),e(c,J),e(c,se),e(c,j),e(j,de),oe(t,Z,v),M(T,t,v),oe(t,ee,v),oe(t,h,v),e(h,z),M(D,z,null),e(h,fe),e(h,d),e(d,u),M(q,u,null),e(u,me),e(u,K),e(K,ce),e(u,pe),e(u,N),e(N,ve),e(d,he),e(d,_),e(_,Q),e(Q,O),e(O,ue),e(_,$e),e(_,U),e(U,P),e(P,_e),e(d,Ee),e(d,E),M(x,E,null),e(E,ge),e(E,B),e(B,ye),e(B,g),e(g,be),e(d,Te),e(d,p),M(C,p,null),e(p,De),e(p,I),e(I,S),e(S,qe),e(S,xe),e(S,Ce),e(p,Se),e(p,W),e(W,Ae),e(p,Ne),e(p,X),e(X,Oe),e(d,Pe),e(d,y),e(y,Be),e(h,Ie),e(h,Y),M(A,Y,null),te=!0},p:at,i(t){te||(V(T.$$.fragment,t),V(D.$$.fragment,t),V(q.$$.fragment,t),V(x.$$.fragment,t),V(C.$$.fragment,t),V(A.$$.fragment,t),te=!0)},o(t){F(T.$$.fragment,t),F(D.$$.fragment,t),F(q.$$.fragment,t),F(x.$$.fragment,t),F(C.$$.fragment,t),F(A.$$.fragment,t),te=!1},d(t){t&&r(c),t&&r(Z),R(T,t),t&&r(ee),t&&r(h),R(D),R(q),R(x),R(C),R(A)}}}const le="102. Binary Tree Level Order Traversal";class vt extends Ze{constructor(c){super(),et(this,c,null,st,tt,{})}}export{vt as default};
