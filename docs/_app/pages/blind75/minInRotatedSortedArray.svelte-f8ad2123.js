import{S as Zt,i as te,s as ee,e as n,k as i,t as c,w as J,c as s,a as l,m as o,h as u,d as r,x as G,b as e,f as ae,g as st,J as t,y as Y,E as re,q as j,o as z,B as K}from"../../chunks/index-cd4245c1.js";import{b as ne}from"../../chunks/paths-c8fbcc1d.js";import{S as se,N as le,F as ie}from"../../chunks/Footer-8b9c5841.js";import{T as Ot}from"../../chunks/Title-6ea0487f.js";function oe(Xt){let f,Q,it,U,ot,W,dt,Z,b,tt,p,B,S,mt,d,v,x,ct,X,ut,ft,M,ht,pt,_,O,A,vt,$t,F,D,_t,yt,y,T,gt,C,Et,g,wt,bt,m,I,St,P,N,xt,Ft=`
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
				`,At,Dt,Tt,R,Ct,It,L,Pt,Nt,E,kt,Bt,q,k,et;return b=new se({}),S=new le({props:{curPage:"Blog"}}),x=new Ot({props:{type:2,title:lt}}),T=new Ot({props:{type:5,title:"Description"}}),I=new Ot({props:{type:5,title:"Code (Python)"}}),k=new ie({}),{c(){f=n("head"),Q=n("meta"),it=i(),U=n("meta"),ot=i(),W=n("title"),dt=c(lt),Z=i(),J(b.$$.fragment),tt=i(),p=n("main"),B=n("header"),J(S.$$.fragment),mt=i(),d=n("main"),v=n("div"),J(x.$$.fragment),ct=i(),X=n("h4"),ut=c("Leetcode Blind 75"),ft=i(),M=n("h5"),ht=c("14th July 2022 ~ Dion Pinto"),pt=i(),_=n("div"),O=n("div"),A=n("a"),vt=c("Description"),$t=i(),F=n("div"),D=n("a"),_t=c("Code"),yt=i(),y=n("section"),J(T.$$.fragment),gt=i(),C=n("p"),Et=c(`Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For
				example, the array nums = [0,1,2,4,5,6,7] might become: [4,5,6,7,0,1,2] if it was rotated 4
				times. [0,1,2,4,5,6,7] if it was rotated 7 times. Notice that rotating an array [a[0], a[1],
				a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
				Given the sorted rotated array nums of unique elements, return the minimum element of this
				array. You must write an algorithm that runs in O(log n) time.

				`),g=n("a"),wt=c("(Problem)"),bt=i(),m=n("section"),J(I.$$.fragment),St=i(),P=n("pre"),N=n("code"),xt=c(`
				`),At=c(Ft),Dt=c(`			
			`),Tt=i(),R=n("p"),Ct=c("Time Complexity => o(log n)"),It=i(),L=n("p"),Pt=c("Space Complexity => o(1)"),Nt=i(),E=n("a"),kt=c("Back"),Bt=i(),q=n("footer"),J(k.$$.fragment),this.h()},l(a){f=s(a,"HEAD",{});var h=l(f);Q=s(h,"META",{name:!0,content:!0}),it=o(h),U=s(h,"META",{name:!0,content:!0}),ot=o(h),W=s(h,"TITLE",{});var Rt=l(W);dt=u(Rt,lt),Rt.forEach(r),h.forEach(r),Z=o(a),G(b.$$.fragment,a),tt=o(a),p=s(a,"MAIN",{class:!0});var H=l(p);B=s(H,"HEADER",{class:!0});var Lt=l(B);G(S.$$.fragment,Lt),Lt.forEach(r),mt=o(H),d=s(H,"MAIN",{class:!0});var $=l(d);v=s($,"DIV",{id:!0});var V=l(v);G(x.$$.fragment,V),ct=o(V),X=s(V,"H4",{});var qt=l(X);ut=u(qt,"Leetcode Blind 75"),qt.forEach(r),ft=o(V),M=s(V,"H5",{style:!0});var Ht=l(M);ht=u(Ht,"14th July 2022 ~ Dion Pinto"),Ht.forEach(r),V.forEach(r),pt=o($),_=s($,"DIV",{id:!0,class:!0});var at=l(_);O=s(at,"DIV",{class:!0});var Vt=l(O);A=s(Vt,"A",{href:!0,class:!0});var Jt=l(A);vt=u(Jt,"Description"),Jt.forEach(r),Vt.forEach(r),$t=o(at),F=s(at,"DIV",{class:!0});var Gt=l(F);D=s(Gt,"A",{href:!0,class:!0});var Yt=l(D);_t=u(Yt,"Code"),Yt.forEach(r),Gt.forEach(r),at.forEach(r),yt=o($),y=s($,"SECTION",{id:!0,class:!0});var rt=l(y);G(T.$$.fragment,rt),gt=o(rt),C=s(rt,"P",{class:!0});var Mt=l(C);Et=u(Mt,`Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For
				example, the array nums = [0,1,2,4,5,6,7] might become: [4,5,6,7,0,1,2] if it was rotated 4
				times. [0,1,2,4,5,6,7] if it was rotated 7 times. Notice that rotating an array [a[0], a[1],
				a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
				Given the sorted rotated array nums of unique elements, return the minimum element of this
				array. You must write an algorithm that runs in O(log n) time.

				`),g=s(Mt,"A",{id:!0,href:!0,target:!0,class:!0});var jt=l(g);wt=u(jt,"(Problem)"),jt.forEach(r),Mt.forEach(r),rt.forEach(r),bt=o($),m=s($,"SECTION",{id:!0,class:!0});var w=l(m);G(I.$$.fragment,w),St=o(w),P=s(w,"PRE",{id:!0,class:!0});var zt=l(P);N=s(zt,"CODE",{});var nt=l(N);xt=u(nt,`
				`),At=u(nt,Ft),Dt=u(nt,`			
			`),nt.forEach(r),zt.forEach(r),Tt=o(w),R=s(w,"P",{class:!0});var Kt=l(R);Ct=u(Kt,"Time Complexity => o(log n)"),Kt.forEach(r),It=o(w),L=s(w,"P",{class:!0});var Qt=l(L);Pt=u(Qt,"Space Complexity => o(1)"),Qt.forEach(r),w.forEach(r),Nt=o($),E=s($,"A",{type:!0,class:!0,href:!0});var Ut=l(E);kt=u(Ut,"Back"),Ut.forEach(r),$.forEach(r),Bt=o(H),q=s(H,"FOOTER",{class:!0});var Wt=l(q);G(k.$$.fragment,Wt),Wt.forEach(r),H.forEach(r),this.h()},h(){e(Q,"name","author"),e(Q,"content","Dion Pinto"),e(U,"name","description"),e(U,"content",`Leetcode Blind 75 ${lt}`),e(B,"class","svelte-r754dw"),ae(M,"font-style","italic"),e(v,"id","title"),e(A,"href","#description"),e(A,"class","svelte-r754dw"),e(O,"class","svelte-r754dw"),e(D,"href","#code"),e(D,"class","svelte-r754dw"),e(F,"class","svelte-r754dw"),e(_,"id","index"),e(_,"class","nes-container is-rounded is-dark svelte-r754dw"),e(g,"id","link"),e(g,"href","https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"),e(g,"target","_blank"),e(g,"class","svelte-r754dw"),e(C,"class","svelte-r754dw"),e(y,"id","description"),e(y,"class","svelte-r754dw"),e(P,"id","block"),e(P,"class","svelte-r754dw"),e(R,"class","svelte-r754dw"),e(L,"class","svelte-r754dw"),e(m,"id","code"),e(m,"class","svelte-r754dw"),e(E,"type","button"),e(E,"class","nes-btn is-primary svelte-r754dw"),e(E,"href",`${ne}/blind75`),e(d,"class","container svelte-r754dw"),e(q,"class","svelte-r754dw"),e(p,"class","main svelte-r754dw")},m(a,h){st(a,f,h),t(f,Q),t(f,it),t(f,U),t(f,ot),t(f,W),t(W,dt),st(a,Z,h),Y(b,a,h),st(a,tt,h),st(a,p,h),t(p,B),Y(S,B,null),t(p,mt),t(p,d),t(d,v),Y(x,v,null),t(v,ct),t(v,X),t(X,ut),t(v,ft),t(v,M),t(M,ht),t(d,pt),t(d,_),t(_,O),t(O,A),t(A,vt),t(_,$t),t(_,F),t(F,D),t(D,_t),t(d,yt),t(d,y),Y(T,y,null),t(y,gt),t(y,C),t(C,Et),t(C,g),t(g,wt),t(d,bt),t(d,m),Y(I,m,null),t(m,St),t(m,P),t(P,N),t(N,xt),t(N,At),t(N,Dt),t(m,Tt),t(m,R),t(R,Ct),t(m,It),t(m,L),t(L,Pt),t(d,Nt),t(d,E),t(E,kt),t(p,Bt),t(p,q),Y(k,q,null),et=!0},p:re,i(a){et||(j(b.$$.fragment,a),j(S.$$.fragment,a),j(x.$$.fragment,a),j(T.$$.fragment,a),j(I.$$.fragment,a),j(k.$$.fragment,a),et=!0)},o(a){z(b.$$.fragment,a),z(S.$$.fragment,a),z(x.$$.fragment,a),z(T.$$.fragment,a),z(I.$$.fragment,a),z(k.$$.fragment,a),et=!1},d(a){a&&r(f),a&&r(Z),K(b,a),a&&r(tt),a&&r(p),K(S),K(x),K(T),K(I),K(k)}}}const lt="153. Find Minimum in Rotated Sorted Array";class fe extends Zt{constructor(f){super(),te(this,f,null,oe,ee,{})}}export{fe as default};
