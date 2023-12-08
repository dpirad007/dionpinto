import{S as ve,i as _e,s as $e,e as n,k as l,t as d,w as H,c as o,a,m as s,h as m,d as r,x as L,b as i,f as ge,g as dt,J as t,y as R,E as Ee,q as V,o as G,B as W}from"../../chunks/index-cd4245c1.js";import{b as ye}from"../../chunks/paths-c8fbcc1d.js";import{S as be,N as De,F as xe}from"../../chunks/Footer-8b9c5841.js";import{T as Qt}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function Se(ue){let c,J,ht,j,pt,z,ct,nt,D,ot,v,K,x,ut,h,_,S,vt,Q,_t,$t,P,gt,Et,g,U,q,yt,bt,X,A,Dt,xt,E,T,St,C,Tt,y,Bt,Nt,f,B,wt,Y,Ft,Pt,O,N,qt,Ut=`
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
				`,At,Ct,Ot,Z,It,kt,I,w,Mt,Xt=`
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
				`,Ht,Lt,Rt,tt,Vt,Gt,et,Wt,Jt,b,jt,zt,rt,F,at;return D=new be({}),x=new De({props:{curPage:"Blog"}}),S=new Qt({props:{type:2,title:mt}}),T=new Qt({props:{type:5,title:"Description"}}),B=new Qt({props:{type:5,title:"Code"}}),F=new xe({}),{c(){c=n("head"),J=n("meta"),ht=l(),j=n("meta"),pt=l(),z=n("title"),ct=d(mt),nt=l(),H(D.$$.fragment),ot=l(),v=n("main"),K=n("header"),H(x.$$.fragment),ut=l(),h=n("main"),_=n("div"),H(S.$$.fragment),vt=l(),Q=n("h4"),_t=d("Leetcode Blind 75"),$t=l(),P=n("h5"),gt=d("9th Sept 2022 ~ Dion Pinto"),Et=l(),g=n("div"),U=n("div"),q=n("a"),yt=d("Description"),bt=l(),X=n("div"),A=n("a"),Dt=d("Code"),xt=l(),E=n("section"),H(T.$$.fragment),St=l(),C=n("p"),Tt=d(`Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is
				the number of nodes along the longest path from the root node down to the farthest leaf
				node.

				`),y=n("a"),Bt=d("(Problem)"),Nt=l(),f=n("section"),H(B.$$.fragment),wt=l(),Y=n("p"),Ft=d(`We can find the max subarray by 2 common methods DFS, BFS. Following is the DFS (recursive)
				approach.`),Pt=l(),O=n("pre"),N=n("code"),qt=d(`
				`),At=d(Ut),Ct=d(`			
			`),Ot=l(),Z=n("p"),It=d("BFS (queue) approach."),kt=l(),I=n("pre"),w=n("code"),Mt=d(`
				`),Ht=d(Xt),Lt=d(`			
			`),Rt=l(),tt=n("p"),Vt=d("Time Complexity => o(n)"),Gt=l(),et=n("p"),Wt=d("Space Complexity => o(n) (height of tree, since tree is not balanced its o(n))"),Jt=l(),b=n("a"),jt=d("Back"),zt=l(),rt=n("footer"),H(F.$$.fragment),this.h()},l(e){c=o(e,"HEAD",{});var u=a(c);J=o(u,"META",{name:!0,content:!0}),ht=s(u),j=o(u,"META",{name:!0,content:!0}),pt=s(u),z=o(u,"TITLE",{});var Yt=a(z);ct=m(Yt,mt),Yt.forEach(r),u.forEach(r),nt=s(e),L(D.$$.fragment,e),ot=s(e),v=o(e,"MAIN",{class:!0});var k=a(v);K=o(k,"HEADER",{});var Zt=a(K);L(x.$$.fragment,Zt),Zt.forEach(r),ut=s(k),h=o(k,"MAIN",{class:!0});var $=a(h);_=o($,"DIV",{id:!0});var M=a(_);L(S.$$.fragment,M),vt=s(M),Q=o(M,"H4",{});var te=a(Q);_t=m(te,"Leetcode Blind 75"),te.forEach(r),$t=s(M),P=o(M,"H5",{style:!0});var ee=a(P);gt=m(ee,"9th Sept 2022 ~ Dion Pinto"),ee.forEach(r),M.forEach(r),Et=s($),g=o($,"DIV",{id:!0,class:!0});var it=a(g);U=o(it,"DIV",{});var re=a(U);q=o(re,"A",{href:!0});var ne=a(q);yt=m(ne,"Description"),ne.forEach(r),re.forEach(r),bt=s(it),X=o(it,"DIV",{});var oe=a(X);A=o(oe,"A",{href:!0});var ae=a(A);Dt=m(ae,"Code"),ae.forEach(r),oe.forEach(r),it.forEach(r),xt=s($),E=o($,"SECTION",{id:!0});var lt=a(E);L(T.$$.fragment,lt),St=s(lt),C=o(lt,"P",{});var Kt=a(C);Tt=m(Kt,`Given the root of a binary tree, return its maximum depth. A binary tree's maximum depth is
				the number of nodes along the longest path from the root node down to the farthest leaf
				node.

				`),y=o(Kt,"A",{id:!0,href:!0,target:!0});var ie=a(y);Bt=m(ie,"(Problem)"),ie.forEach(r),Kt.forEach(r),lt.forEach(r),Nt=s($),f=o($,"SECTION",{id:!0});var p=a(f);L(B.$$.fragment,p),wt=s(p),Y=o(p,"P",{});var le=a(Y);Ft=m(le,`We can find the max subarray by 2 common methods DFS, BFS. Following is the DFS (recursive)
				approach.`),le.forEach(r),Pt=s(p),O=o(p,"PRE",{id:!0});var se=a(O);N=o(se,"CODE",{});var st=a(N);qt=m(st,`
				`),At=m(st,Ut),Ct=m(st,`			
			`),st.forEach(r),se.forEach(r),Ot=s(p),Z=o(p,"P",{});var fe=a(Z);It=m(fe,"BFS (queue) approach."),fe.forEach(r),kt=s(p),I=o(p,"PRE",{id:!0});var de=a(I);w=o(de,"CODE",{});var ft=a(w);Mt=m(ft,`
				`),Ht=m(ft,Xt),Lt=m(ft,`			
			`),ft.forEach(r),de.forEach(r),Rt=s(p),tt=o(p,"P",{});var me=a(tt);Vt=m(me,"Time Complexity => o(n)"),me.forEach(r),Gt=s(p),et=o(p,"P",{});var he=a(et);Wt=m(he,"Space Complexity => o(n) (height of tree, since tree is not balanced its o(n))"),he.forEach(r),p.forEach(r),Jt=s($),b=o($,"A",{type:!0,class:!0,href:!0});var pe=a(b);jt=m(pe,"Back"),pe.forEach(r),$.forEach(r),zt=s(k),rt=o(k,"FOOTER",{});var ce=a(rt);L(F.$$.fragment,ce),ce.forEach(r),k.forEach(r),this.h()},h(){i(J,"name","author"),i(J,"content","Dion Pinto"),i(j,"name","description"),i(j,"content",`Leetcode Blind 75 ${mt}`),ge(P,"font-style","italic"),i(_,"id","title"),i(q,"href","#description"),i(A,"href","#code"),i(g,"id","index"),i(g,"class","nes-container is-rounded is-dark"),i(y,"id","link"),i(y,"href","https://leetcode.com/problems/maximum-depth-of-binary-tree/"),i(y,"target","_blank"),i(E,"id","description"),i(O,"id","block"),i(I,"id","block"),i(f,"id","code"),i(b,"type","button"),i(b,"class","nes-btn is-primary"),i(b,"href",`${ye}/blind75`),i(h,"class","container svelte-gwfu10"),i(v,"class","main")},m(e,u){dt(e,c,u),t(c,J),t(c,ht),t(c,j),t(c,pt),t(c,z),t(z,ct),dt(e,nt,u),R(D,e,u),dt(e,ot,u),dt(e,v,u),t(v,K),R(x,K,null),t(v,ut),t(v,h),t(h,_),R(S,_,null),t(_,vt),t(_,Q),t(Q,_t),t(_,$t),t(_,P),t(P,gt),t(h,Et),t(h,g),t(g,U),t(U,q),t(q,yt),t(g,bt),t(g,X),t(X,A),t(A,Dt),t(h,xt),t(h,E),R(T,E,null),t(E,St),t(E,C),t(C,Tt),t(C,y),t(y,Bt),t(h,Nt),t(h,f),R(B,f,null),t(f,wt),t(f,Y),t(Y,Ft),t(f,Pt),t(f,O),t(O,N),t(N,qt),t(N,At),t(N,Ct),t(f,Ot),t(f,Z),t(Z,It),t(f,kt),t(f,I),t(I,w),t(w,Mt),t(w,Ht),t(w,Lt),t(f,Rt),t(f,tt),t(tt,Vt),t(f,Gt),t(f,et),t(et,Wt),t(h,Jt),t(h,b),t(b,jt),t(v,zt),t(v,rt),R(F,rt,null),at=!0},p:Ee,i(e){at||(V(D.$$.fragment,e),V(x.$$.fragment,e),V(S.$$.fragment,e),V(T.$$.fragment,e),V(B.$$.fragment,e),V(F.$$.fragment,e),at=!0)},o(e){G(D.$$.fragment,e),G(x.$$.fragment,e),G(S.$$.fragment,e),G(T.$$.fragment,e),G(B.$$.fragment,e),G(F.$$.fragment,e),at=!1},d(e){e&&r(c),e&&r(nt),W(D,e),e&&r(ot),e&&r(v),W(x),W(S),W(T),W(B),W(F)}}}const mt="104. Maximum Depth of Binary Tree";class Pe extends ve{constructor(c){super(),_e(this,c,null,Se,$e,{})}}export{Pe as default};
