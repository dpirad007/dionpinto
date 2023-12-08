import{S as Zt,i as te,s as ee,e as r,k as s,t as d,w as F,c as n,a as i,m as l,h as f,d as a,x as R,b as o,f as ae,g as it,J as t,y as L,E as re,q,o as H,B as V}from"../../chunks/index-cd4245c1.js";import{b as ne}from"../../chunks/paths-c8fbcc1d.js";import{S as ie,N as oe,F as se}from"../../chunks/Footer-8b9c5841.js";import{T as Ot}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function le(Xt){let u,J,st,G,lt,Y,mt,Z,w,tt,p,j,S,dt,m,$,x,ft,z,ut,ct,I,ht,pt,_,K,P,$t,vt,Q,N,_t,gt,g,A,yt,k,Et,y,bt,wt,c,D,St,B,T,xt,Ft=`
    class Solution:
        def findMin(self, nums: List[int]) -> int:
            res=nums[0]
            l,r=0,len(nums)-1
            
            while(l<=r):
                if(nums[l]<=nums[r]): 
                    res= min(res,nums[l])
                
                mid= (l+r)//2
                res=min(nums[mid],res)
                
                if(nums[mid]>=nums[l]):
                    l=mid+1
                else:
                    r=mid-1
            
            return res
				`,At,Dt,Tt,U,Ct,It,W,Pt,Nt,E,kt,Bt,X,C,et;return w=new ie({}),S=new oe({props:{curPage:"Blog"}}),x=new Ot({props:{type:2,title:ot}}),A=new Ot({props:{type:5,title:"Description"}}),D=new Ot({props:{type:5,title:"Code (Python)"}}),C=new se({}),{c(){u=r("head"),J=r("meta"),st=s(),G=r("meta"),lt=s(),Y=r("title"),mt=d(ot),Z=s(),F(w.$$.fragment),tt=s(),p=r("main"),j=r("header"),F(S.$$.fragment),dt=s(),m=r("main"),$=r("div"),F(x.$$.fragment),ft=s(),z=r("h4"),ut=d("Leetcode Blind 75"),ct=s(),I=r("h5"),ht=d("14th July 2022 ~ Dion Pinto"),pt=s(),_=r("div"),K=r("div"),P=r("a"),$t=d("Description"),vt=s(),Q=r("div"),N=r("a"),_t=d("Code"),gt=s(),g=r("section"),F(A.$$.fragment),yt=s(),k=r("p"),Et=d(`Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For
				example, the array nums = [0,1,2,4,5,6,7] might become: [4,5,6,7,0,1,2] if it was rotated 4
				times. [0,1,2,4,5,6,7] if it was rotated 7 times. Notice that rotating an array [a[0], a[1],
				a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
				Given the sorted rotated array nums of unique elements, return the minimum element of this
				array. You must write an algorithm that runs in O(log n) time.

				`),y=r("a"),bt=d("(Problem)"),wt=s(),c=r("section"),F(D.$$.fragment),St=s(),B=r("pre"),T=r("code"),xt=d(`
				`),At=d(Ft),Dt=d(`			
			`),Tt=s(),U=r("p"),Ct=d("Time Complexity => o(log n)"),It=s(),W=r("p"),Pt=d("Space Complexity => o(1)"),Nt=s(),E=r("a"),kt=d("Back"),Bt=s(),X=r("footer"),F(C.$$.fragment),this.h()},l(e){u=n(e,"HEAD",{});var h=i(u);J=n(h,"META",{name:!0,content:!0}),st=l(h),G=n(h,"META",{name:!0,content:!0}),lt=l(h),Y=n(h,"TITLE",{});var Rt=i(Y);mt=f(Rt,ot),Rt.forEach(a),h.forEach(a),Z=l(e),R(w.$$.fragment,e),tt=l(e),p=n(e,"MAIN",{class:!0});var M=i(p);j=n(M,"HEADER",{});var Lt=i(j);R(S.$$.fragment,Lt),Lt.forEach(a),dt=l(M),m=n(M,"MAIN",{class:!0});var v=i(m);$=n(v,"DIV",{id:!0});var O=i($);R(x.$$.fragment,O),ft=l(O),z=n(O,"H4",{});var qt=i(z);ut=f(qt,"Leetcode Blind 75"),qt.forEach(a),ct=l(O),I=n(O,"H5",{style:!0});var Ht=i(I);ht=f(Ht,"14th July 2022 ~ Dion Pinto"),Ht.forEach(a),O.forEach(a),pt=l(v),_=n(v,"DIV",{id:!0,class:!0});var at=i(_);K=n(at,"DIV",{});var Vt=i(K);P=n(Vt,"A",{href:!0});var Jt=i(P);$t=f(Jt,"Description"),Jt.forEach(a),Vt.forEach(a),vt=l(at),Q=n(at,"DIV",{});var Gt=i(Q);N=n(Gt,"A",{href:!0});var Yt=i(N);_t=f(Yt,"Code"),Yt.forEach(a),Gt.forEach(a),at.forEach(a),gt=l(v),g=n(v,"SECTION",{id:!0});var rt=i(g);R(A.$$.fragment,rt),yt=l(rt),k=n(rt,"P",{});var Mt=i(k);Et=f(Mt,`Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For
				example, the array nums = [0,1,2,4,5,6,7] might become: [4,5,6,7,0,1,2] if it was rotated 4
				times. [0,1,2,4,5,6,7] if it was rotated 7 times. Notice that rotating an array [a[0], a[1],
				a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
				Given the sorted rotated array nums of unique elements, return the minimum element of this
				array. You must write an algorithm that runs in O(log n) time.

				`),y=n(Mt,"A",{id:!0,href:!0,target:!0});var jt=i(y);bt=f(jt,"(Problem)"),jt.forEach(a),Mt.forEach(a),rt.forEach(a),wt=l(v),c=n(v,"SECTION",{id:!0});var b=i(c);R(D.$$.fragment,b),St=l(b),B=n(b,"PRE",{id:!0});var zt=i(B);T=n(zt,"CODE",{});var nt=i(T);xt=f(nt,`
				`),At=f(nt,Ft),Dt=f(nt,`			
			`),nt.forEach(a),zt.forEach(a),Tt=l(b),U=n(b,"P",{});var Kt=i(U);Ct=f(Kt,"Time Complexity => o(log n)"),Kt.forEach(a),It=l(b),W=n(b,"P",{});var Qt=i(W);Pt=f(Qt,"Space Complexity => o(1)"),Qt.forEach(a),b.forEach(a),Nt=l(v),E=n(v,"A",{type:!0,class:!0,href:!0});var Ut=i(E);kt=f(Ut,"Back"),Ut.forEach(a),v.forEach(a),Bt=l(M),X=n(M,"FOOTER",{});var Wt=i(X);R(C.$$.fragment,Wt),Wt.forEach(a),M.forEach(a),this.h()},h(){o(J,"name","author"),o(J,"content","Dion Pinto"),o(G,"name","description"),o(G,"content",`Leetcode Blind 75 ${ot}`),ae(I,"font-style","italic"),o($,"id","title"),o(P,"href","#description"),o(N,"href","#code"),o(_,"id","index"),o(_,"class","nes-container is-rounded is-dark"),o(y,"id","link"),o(y,"href","https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"),o(y,"target","_blank"),o(g,"id","description"),o(B,"id","block"),o(c,"id","code"),o(E,"type","button"),o(E,"class","nes-btn is-primary"),o(E,"href",`${ne}/blind75`),o(m,"class","container svelte-gwfu10"),o(p,"class","main")},m(e,h){it(e,u,h),t(u,J),t(u,st),t(u,G),t(u,lt),t(u,Y),t(Y,mt),it(e,Z,h),L(w,e,h),it(e,tt,h),it(e,p,h),t(p,j),L(S,j,null),t(p,dt),t(p,m),t(m,$),L(x,$,null),t($,ft),t($,z),t(z,ut),t($,ct),t($,I),t(I,ht),t(m,pt),t(m,_),t(_,K),t(K,P),t(P,$t),t(_,vt),t(_,Q),t(Q,N),t(N,_t),t(m,gt),t(m,g),L(A,g,null),t(g,yt),t(g,k),t(k,Et),t(k,y),t(y,bt),t(m,wt),t(m,c),L(D,c,null),t(c,St),t(c,B),t(B,T),t(T,xt),t(T,At),t(T,Dt),t(c,Tt),t(c,U),t(U,Ct),t(c,It),t(c,W),t(W,Pt),t(m,Nt),t(m,E),t(E,kt),t(p,Bt),t(p,X),L(C,X,null),et=!0},p:re,i(e){et||(q(w.$$.fragment,e),q(S.$$.fragment,e),q(x.$$.fragment,e),q(A.$$.fragment,e),q(D.$$.fragment,e),q(C.$$.fragment,e),et=!0)},o(e){H(w.$$.fragment,e),H(S.$$.fragment,e),H(x.$$.fragment,e),H(A.$$.fragment,e),H(D.$$.fragment,e),H(C.$$.fragment,e),et=!1},d(e){e&&a(u),e&&a(Z),V(w,e),e&&a(tt),e&&a(p),V(S),V(x),V(A),V(D),V(C)}}}const ot="153. Find Minimum in Rotated Sorted Array";class he extends Zt{constructor(u){super(),te(this,u,null,le,ee,{})}}export{he as default};
