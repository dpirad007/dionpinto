import{S as Zt,i as te,s as ee,e as n,k as s,t as d,w as F,c as r,a as i,m as l,h as f,d as a,x as L,b as o,f as ae,g as it,J as t,y as R,E as ne,q,o as H,B as V}from"../../chunks/index-cd4245c1.js";import{b as re}from"../../chunks/paths-c8fbcc1d.js";import{S as ie,N as oe,F as se}from"../../chunks/Footer-8b9c5841.js";import{T as Ot}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function le(Xt){let u,J,st,G,lt,Y,mt,Z,w,tt,p,j,x,dt,m,$,D,ft,z,ut,ct,P,ht,pt,_,K,I,$t,vt,Q,N,_t,gt,g,S,yt,k,Et,y,bt,wt,c,A,xt,B,T,Dt,Ft=`
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
				`,St,At,Tt,U,Ct,Pt,W,It,Nt,E,kt,Bt,X,C,et;return w=new ie({}),x=new oe({props:{curPage:"Blog"}}),D=new Ot({props:{type:2,title:ot}}),S=new Ot({props:{type:5,title:"Description"}}),A=new Ot({props:{type:5,title:"Code (Python)"}}),C=new se({}),{c(){u=n("head"),J=n("meta"),st=s(),G=n("meta"),lt=s(),Y=n("title"),mt=d(ot),Z=s(),F(w.$$.fragment),tt=s(),p=n("main"),j=n("header"),F(x.$$.fragment),dt=s(),m=n("main"),$=n("div"),F(D.$$.fragment),ft=s(),z=n("h4"),ut=d("Leetcode Blind 75"),ct=s(),P=n("h5"),ht=d("14th July 2022 ~ Dion Pinto"),pt=s(),_=n("div"),K=n("div"),I=n("a"),$t=d("Description"),vt=s(),Q=n("div"),N=n("a"),_t=d("Code"),gt=s(),g=n("section"),F(S.$$.fragment),yt=s(),k=n("p"),Et=d(`Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For
				example, the array nums = [0,1,2,4,5,6,7] might become: [4,5,6,7,0,1,2] if it was rotated 4
				times. [0,1,2,4,5,6,7] if it was rotated 7 times. Notice that rotating an array [a[0], a[1],
				a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
				Given the sorted rotated array nums of unique elements, return the minimum element of this
				array. You must write an algorithm that runs in O(log n) time.

				`),y=n("a"),bt=d("(Problem)"),wt=s(),c=n("section"),F(A.$$.fragment),xt=s(),B=n("pre"),T=n("code"),Dt=d(`
				`),St=d(Ft),At=d(`			
			`),Tt=s(),U=n("p"),Ct=d("Time Complexity => o(log n)"),Pt=s(),W=n("p"),It=d("Space Complexity => o(1)"),Nt=s(),E=n("a"),kt=d("Back"),Bt=s(),X=n("footer"),F(C.$$.fragment),this.h()},l(e){u=r(e,"HEAD",{});var h=i(u);J=r(h,"META",{name:!0,content:!0}),st=l(h),G=r(h,"META",{name:!0,content:!0}),lt=l(h),Y=r(h,"TITLE",{});var Lt=i(Y);mt=f(Lt,ot),Lt.forEach(a),h.forEach(a),Z=l(e),L(w.$$.fragment,e),tt=l(e),p=r(e,"MAIN",{class:!0});var M=i(p);j=r(M,"HEADER",{});var Rt=i(j);L(x.$$.fragment,Rt),Rt.forEach(a),dt=l(M),m=r(M,"MAIN",{class:!0});var v=i(m);$=r(v,"DIV",{id:!0});var O=i($);L(D.$$.fragment,O),ft=l(O),z=r(O,"H4",{});var qt=i(z);ut=f(qt,"Leetcode Blind 75"),qt.forEach(a),ct=l(O),P=r(O,"H5",{style:!0});var Ht=i(P);ht=f(Ht,"14th July 2022 ~ Dion Pinto"),Ht.forEach(a),O.forEach(a),pt=l(v),_=r(v,"DIV",{id:!0,class:!0});var at=i(_);K=r(at,"DIV",{});var Vt=i(K);I=r(Vt,"A",{href:!0});var Jt=i(I);$t=f(Jt,"Description"),Jt.forEach(a),Vt.forEach(a),vt=l(at),Q=r(at,"DIV",{});var Gt=i(Q);N=r(Gt,"A",{href:!0});var Yt=i(N);_t=f(Yt,"Code"),Yt.forEach(a),Gt.forEach(a),at.forEach(a),gt=l(v),g=r(v,"SECTION",{id:!0});var nt=i(g);L(S.$$.fragment,nt),yt=l(nt),k=r(nt,"P",{});var Mt=i(k);Et=f(Mt,`Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For
				example, the array nums = [0,1,2,4,5,6,7] might become: [4,5,6,7,0,1,2] if it was rotated 4
				times. [0,1,2,4,5,6,7] if it was rotated 7 times. Notice that rotating an array [a[0], a[1],
				a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
				Given the sorted rotated array nums of unique elements, return the minimum element of this
				array. You must write an algorithm that runs in O(log n) time.

				`),y=r(Mt,"A",{id:!0,href:!0,target:!0});var jt=i(y);bt=f(jt,"(Problem)"),jt.forEach(a),Mt.forEach(a),nt.forEach(a),wt=l(v),c=r(v,"SECTION",{id:!0});var b=i(c);L(A.$$.fragment,b),xt=l(b),B=r(b,"PRE",{id:!0});var zt=i(B);T=r(zt,"CODE",{});var rt=i(T);Dt=f(rt,`
				`),St=f(rt,Ft),At=f(rt,`			
			`),rt.forEach(a),zt.forEach(a),Tt=l(b),U=r(b,"P",{});var Kt=i(U);Ct=f(Kt,"Time Complexity => o(log n)"),Kt.forEach(a),Pt=l(b),W=r(b,"P",{});var Qt=i(W);It=f(Qt,"Space Complexity => o(1)"),Qt.forEach(a),b.forEach(a),Nt=l(v),E=r(v,"A",{type:!0,class:!0,href:!0});var Ut=i(E);kt=f(Ut,"Back"),Ut.forEach(a),v.forEach(a),Bt=l(M),X=r(M,"FOOTER",{});var Wt=i(X);L(C.$$.fragment,Wt),Wt.forEach(a),M.forEach(a),this.h()},h(){o(J,"name","author"),o(J,"content","Dion Pinto"),o(G,"name","description"),o(G,"content",`Leetcode Blind 75 ${ot}`),ae(P,"font-style","italic"),o($,"id","title"),o(I,"href","#description"),o(N,"href","#code"),o(_,"id","index"),o(_,"class","nes-container is-rounded is-dark"),o(y,"id","link"),o(y,"href","https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"),o(y,"target","_blank"),o(g,"id","description"),o(B,"id","block"),o(c,"id","code"),o(E,"type","button"),o(E,"class","nes-btn is-primary"),o(E,"href",`${re}/blind75`),o(m,"class","container"),o(p,"class","main")},m(e,h){it(e,u,h),t(u,J),t(u,st),t(u,G),t(u,lt),t(u,Y),t(Y,mt),it(e,Z,h),R(w,e,h),it(e,tt,h),it(e,p,h),t(p,j),R(x,j,null),t(p,dt),t(p,m),t(m,$),R(D,$,null),t($,ft),t($,z),t(z,ut),t($,ct),t($,P),t(P,ht),t(m,pt),t(m,_),t(_,K),t(K,I),t(I,$t),t(_,vt),t(_,Q),t(Q,N),t(N,_t),t(m,gt),t(m,g),R(S,g,null),t(g,yt),t(g,k),t(k,Et),t(k,y),t(y,bt),t(m,wt),t(m,c),R(A,c,null),t(c,xt),t(c,B),t(B,T),t(T,Dt),t(T,St),t(T,At),t(c,Tt),t(c,U),t(U,Ct),t(c,Pt),t(c,W),t(W,It),t(m,Nt),t(m,E),t(E,kt),t(p,Bt),t(p,X),R(C,X,null),et=!0},p:ne,i(e){et||(q(w.$$.fragment,e),q(x.$$.fragment,e),q(D.$$.fragment,e),q(S.$$.fragment,e),q(A.$$.fragment,e),q(C.$$.fragment,e),et=!0)},o(e){H(w.$$.fragment,e),H(x.$$.fragment,e),H(D.$$.fragment,e),H(S.$$.fragment,e),H(A.$$.fragment,e),H(C.$$.fragment,e),et=!1},d(e){e&&a(u),e&&a(Z),V(w,e),e&&a(tt),e&&a(p),V(x),V(D),V(S),V(A),V(C)}}}const ot="153. Find Minimum in Rotated Sorted Array";class he extends Zt{constructor(u){super(),te(this,u,null,le,ee,{})}}export{he as default};
