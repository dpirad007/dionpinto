import{S as ua,i as da,s as ha,e as r,k as c,t as o,w as J,c as s,a as n,m as u,h as i,d as a,x as G,b as e,f as ma,g as kt,J as t,y as U,E as va,q as z,o as K,B as Q}from"../../chunks/index-cd4245c1.js";import{b as fa}from"../../chunks/paths-c8fbcc1d.js";import{S as pa,N as wa,F as ya}from"../../chunks/Footer-8b9c5841.js";import{T as At}from"../../chunks/Title-6ea0487f.js";function _a(ca){let f,mt,Tt,vt,Ct,ft,Ot,yt,P,_t,y,X,k,It,m,g,A,Bt,pt,Nt,jt,Y,Ht,Lt,_,Z,D,Mt,Rt,tt,T,Wt,Vt,et,C,qt,Ft,E,O,Jt,I,Gt,b,Ut,zt,d,B,Kt,at,Qt,Xt,N,j,Yt,Be=`
	class Solution:
		def maxSubArray(self, nums: List[int]) -> int:
			maxval=nums[0]
			for i in range(len(nums)-2):
				for j in range(i+1,len(nums)-1):
					val = sum(nums[i:j])
					maxval = max(val,maxval)
			return maxval
				`,Zt,te,ee,$,ae,wt,re,se,ne,rt,le,oe,H,L,ie,Ne=`
	[-2,1,-3,4,-1,2,1,-5,4]

	initially -2 -> -1 -> -4 ...
				`,ce,ue,de,st,he,me,nt,ve,fe,M,R,pe,je=`
	[-2,-3,-1,-5]
				`,we,ye,_e,lt,ge,Ee,v,W,be,V,q,$e,He=`
    class Solution:
        def maxSubArray(self, nums: List[int]) -> int:
            maxval = nums[0]
            curSum=0
            
            for i in range(len(nums)):
                if(curSum<0):
                    curSum=0
                curSum+=nums[i]
                maxval = max(curSum,maxval)
            return maxval
				`,xe,Se,Pe,ot,ke,Ae,it,De,Te,x,Ce,Oe,ct,F,gt;return P=new pa({}),k=new wa({props:{curPage:"Blog"}}),A=new At({props:{type:2,title:Dt}}),O=new At({props:{type:5,title:"Description"}}),B=new At({props:{type:5,title:"Explanation"}}),W=new At({props:{type:5,title:"Code (Python)"}}),F=new ya({}),{c(){f=r("head"),mt=r("meta"),Tt=c(),vt=r("meta"),Ct=c(),ft=r("title"),Ot=o(Dt),yt=c(),J(P.$$.fragment),_t=c(),y=r("main"),X=r("header"),J(k.$$.fragment),It=c(),m=r("main"),g=r("div"),J(A.$$.fragment),Bt=c(),pt=r("h4"),Nt=o("Leetcode Blind 75"),jt=c(),Y=r("h5"),Ht=o("19th July 2022 ~ Dion Pinto"),Lt=c(),_=r("div"),Z=r("div"),D=r("a"),Mt=o("Description"),Rt=c(),tt=r("div"),T=r("a"),Wt=o("Explanation"),Vt=c(),et=r("div"),C=r("a"),qt=o("Code"),Ft=c(),E=r("section"),J(O.$$.fragment),Jt=c(),I=r("p"),Gt=o(`Given an integer array nums, find the contiguous subarray (containing at least one number)
				which has the largest sum and return its sum. A subarray is a contiguous part of an array.

				`),b=r("a"),Ut=o("(Problem)"),zt=c(),d=r("section"),J(B.$$.fragment),Kt=c(),at=r("p"),Qt=o(`We can find the max subarray by checking all possible subarrays of the array, in python this
				can be done quite easily via the slicing operation.`),Xt=c(),N=r("pre"),j=r("code"),Yt=o(`
				`),Zt=o(Be),te=o(`			
			`),ee=c(),$=r("p"),ae=o("However the time complexity of such an approach is very poor O(n"),wt=r("sup"),re=o("3"),se=o(`). This is
				beacuse even the sum() function take O(n) to compute.`),ne=c(),rt=r("p"),le=o("A better approach is to always check the current sum of the array."),oe=c(),H=r("pre"),L=r("code"),ie=o(`
				`),ce=o(Ne),ue=o(`			
			`),de=c(),st=r("p"),he=o(`We can notice that -2 did not help us at all, all it did was lower the value, hence whenever
				we encounter a negative current sum we should set to 0.`),me=c(),nt=r("p"),ve=o(`We can then just iterate over the array and add the value present in ith position, followed
				by checking the max(current sum, maximun value found so far).`),fe=c(),M=r("pre"),R=r("code"),pe=o(`
				`),we=o(je),ye=o(`			
			`),_e=c(),lt=r("p"),ge=o(`Suppose we get the above scenario where all the numbers are negative, then we just need to
				get the highest value. This can be achieved by initially setting the maxval as the first
				number of the array, after which the current sum will only decrease -> it will set to 0,
				then it will add the negative value in ith position -> compare itself to maxval and the
				higher number will be chosen.`),Ee=c(),v=r("section"),J(W.$$.fragment),be=c(),V=r("pre"),q=r("code"),$e=o(`
				`),xe=o(He),Se=o(`			
			`),Pe=c(),ot=r("p"),ke=o("Time Complexity => o(n)"),Ae=c(),it=r("p"),De=o("Space Complexity => o(1)"),Te=c(),x=r("a"),Ce=o("Back"),Oe=c(),ct=r("footer"),J(F.$$.fragment),this.h()},l(l){f=s(l,"HEAD",{});var p=n(f);mt=s(p,"META",{name:!0,content:!0}),Tt=u(p),vt=s(p,"META",{name:!0,content:!0}),Ct=u(p),ft=s(p,"TITLE",{});var Le=n(ft);Ot=i(Le,Dt),Le.forEach(a),p.forEach(a),yt=u(l),G(P.$$.fragment,l),_t=u(l),y=s(l,"MAIN",{class:!0});var ut=n(y);X=s(ut,"HEADER",{class:!0});var Me=n(X);G(k.$$.fragment,Me),Me.forEach(a),It=u(ut),m=s(ut,"MAIN",{class:!0});var w=n(m);g=s(w,"DIV",{id:!0});var dt=n(g);G(A.$$.fragment,dt),Bt=u(dt),pt=s(dt,"H4",{});var Re=n(pt);Nt=i(Re,"Leetcode Blind 75"),Re.forEach(a),jt=u(dt),Y=s(dt,"H5",{style:!0});var We=n(Y);Ht=i(We,"19th July 2022 ~ Dion Pinto"),We.forEach(a),dt.forEach(a),Lt=u(w),_=s(w,"DIV",{id:!0,class:!0});var ht=n(_);Z=s(ht,"DIV",{class:!0});var Ve=n(Z);D=s(Ve,"A",{href:!0,class:!0});var qe=n(D);Mt=i(qe,"Description"),qe.forEach(a),Ve.forEach(a),Rt=u(ht),tt=s(ht,"DIV",{class:!0});var Fe=n(tt);T=s(Fe,"A",{href:!0,class:!0});var Je=n(T);Wt=i(Je,"Explanation"),Je.forEach(a),Fe.forEach(a),Vt=u(ht),et=s(ht,"DIV",{class:!0});var Ge=n(et);C=s(Ge,"A",{href:!0,class:!0});var Ue=n(C);qt=i(Ue,"Code"),Ue.forEach(a),Ge.forEach(a),ht.forEach(a),Ft=u(w),E=s(w,"SECTION",{id:!0,class:!0});var Et=n(E);G(O.$$.fragment,Et),Jt=u(Et),I=s(Et,"P",{class:!0});var Ie=n(I);Gt=i(Ie,`Given an integer array nums, find the contiguous subarray (containing at least one number)
				which has the largest sum and return its sum. A subarray is a contiguous part of an array.

				`),b=s(Ie,"A",{id:!0,href:!0,target:!0,class:!0});var ze=n(b);Ut=i(ze,"(Problem)"),ze.forEach(a),Ie.forEach(a),Et.forEach(a),zt=u(w),d=s(w,"SECTION",{id:!0,class:!0});var h=n(d);G(B.$$.fragment,h),Kt=u(h),at=s(h,"P",{class:!0});var Ke=n(at);Qt=i(Ke,`We can find the max subarray by checking all possible subarrays of the array, in python this
				can be done quite easily via the slicing operation.`),Ke.forEach(a),Xt=u(h),N=s(h,"PRE",{id:!0,class:!0});var Qe=n(N);j=s(Qe,"CODE",{});var bt=n(j);Yt=i(bt,`
				`),Zt=i(bt,Be),te=i(bt,`			
			`),bt.forEach(a),Qe.forEach(a),ee=u(h),$=s(h,"P",{class:!0});var $t=n($);ae=i($t,"However the time complexity of such an approach is very poor O(n"),wt=s($t,"SUP",{});var Xe=n(wt);re=i(Xe,"3"),Xe.forEach(a),se=i($t,`). This is
				beacuse even the sum() function take O(n) to compute.`),$t.forEach(a),ne=u(h),rt=s(h,"P",{class:!0});var Ye=n(rt);le=i(Ye,"A better approach is to always check the current sum of the array."),Ye.forEach(a),oe=u(h),H=s(h,"PRE",{id:!0,class:!0});var Ze=n(H);L=s(Ze,"CODE",{});var xt=n(L);ie=i(xt,`
				`),ce=i(xt,Ne),ue=i(xt,`			
			`),xt.forEach(a),Ze.forEach(a),de=u(h),st=s(h,"P",{class:!0});var ta=n(st);he=i(ta,`We can notice that -2 did not help us at all, all it did was lower the value, hence whenever
				we encounter a negative current sum we should set to 0.`),ta.forEach(a),me=u(h),nt=s(h,"P",{class:!0});var ea=n(nt);ve=i(ea,`We can then just iterate over the array and add the value present in ith position, followed
				by checking the max(current sum, maximun value found so far).`),ea.forEach(a),fe=u(h),M=s(h,"PRE",{id:!0,class:!0});var aa=n(M);R=s(aa,"CODE",{});var St=n(R);pe=i(St,`
				`),we=i(St,je),ye=i(St,`			
			`),St.forEach(a),aa.forEach(a),_e=u(h),lt=s(h,"P",{class:!0});var ra=n(lt);ge=i(ra,`Suppose we get the above scenario where all the numbers are negative, then we just need to
				get the highest value. This can be achieved by initially setting the maxval as the first
				number of the array, after which the current sum will only decrease -> it will set to 0,
				then it will add the negative value in ith position -> compare itself to maxval and the
				higher number will be chosen.`),ra.forEach(a),h.forEach(a),Ee=u(w),v=s(w,"SECTION",{id:!0,class:!0});var S=n(v);G(W.$$.fragment,S),be=u(S),V=s(S,"PRE",{id:!0,class:!0});var sa=n(V);q=s(sa,"CODE",{});var Pt=n(q);$e=i(Pt,`
				`),xe=i(Pt,He),Se=i(Pt,`			
			`),Pt.forEach(a),sa.forEach(a),Pe=u(S),ot=s(S,"P",{class:!0});var na=n(ot);ke=i(na,"Time Complexity => o(n)"),na.forEach(a),Ae=u(S),it=s(S,"P",{class:!0});var la=n(it);De=i(la,"Space Complexity => o(1)"),la.forEach(a),S.forEach(a),Te=u(w),x=s(w,"A",{type:!0,class:!0,href:!0});var oa=n(x);Ce=i(oa,"Back"),oa.forEach(a),w.forEach(a),Oe=u(ut),ct=s(ut,"FOOTER",{class:!0});var ia=n(ct);G(F.$$.fragment,ia),ia.forEach(a),ut.forEach(a),this.h()},h(){e(mt,"name","author"),e(mt,"content","Dion Pinto"),e(vt,"name","description"),e(vt,"content",`Leetcode Blind 75 ${Dt}`),e(X,"class","svelte-r754dw"),ma(Y,"font-style","italic"),e(g,"id","title"),e(D,"href","#description"),e(D,"class","svelte-r754dw"),e(Z,"class","svelte-r754dw"),e(T,"href","#explanation"),e(T,"class","svelte-r754dw"),e(tt,"class","svelte-r754dw"),e(C,"href","#code"),e(C,"class","svelte-r754dw"),e(et,"class","svelte-r754dw"),e(_,"id","index"),e(_,"class","nes-container is-rounded is-dark svelte-r754dw"),e(b,"id","link"),e(b,"href","https://leetcode.com/problems/maximum-subarray/"),e(b,"target","_blank"),e(b,"class","svelte-r754dw"),e(I,"class","svelte-r754dw"),e(E,"id","description"),e(E,"class","svelte-r754dw"),e(at,"class","svelte-r754dw"),e(N,"id","block"),e(N,"class","svelte-r754dw"),e($,"class","svelte-r754dw"),e(rt,"class","svelte-r754dw"),e(H,"id","block"),e(H,"class","svelte-r754dw"),e(st,"class","svelte-r754dw"),e(nt,"class","svelte-r754dw"),e(M,"id","block"),e(M,"class","svelte-r754dw"),e(lt,"class","svelte-r754dw"),e(d,"id","explanation"),e(d,"class","svelte-r754dw"),e(V,"id","block"),e(V,"class","svelte-r754dw"),e(ot,"class","svelte-r754dw"),e(it,"class","svelte-r754dw"),e(v,"id","code"),e(v,"class","svelte-r754dw"),e(x,"type","button"),e(x,"class","nes-btn is-primary svelte-r754dw"),e(x,"href",`${fa}/blind75`),e(m,"class","container svelte-r754dw"),e(ct,"class","svelte-r754dw"),e(y,"class","main svelte-r754dw")},m(l,p){kt(l,f,p),t(f,mt),t(f,Tt),t(f,vt),t(f,Ct),t(f,ft),t(ft,Ot),kt(l,yt,p),U(P,l,p),kt(l,_t,p),kt(l,y,p),t(y,X),U(k,X,null),t(y,It),t(y,m),t(m,g),U(A,g,null),t(g,Bt),t(g,pt),t(pt,Nt),t(g,jt),t(g,Y),t(Y,Ht),t(m,Lt),t(m,_),t(_,Z),t(Z,D),t(D,Mt),t(_,Rt),t(_,tt),t(tt,T),t(T,Wt),t(_,Vt),t(_,et),t(et,C),t(C,qt),t(m,Ft),t(m,E),U(O,E,null),t(E,Jt),t(E,I),t(I,Gt),t(I,b),t(b,Ut),t(m,zt),t(m,d),U(B,d,null),t(d,Kt),t(d,at),t(at,Qt),t(d,Xt),t(d,N),t(N,j),t(j,Yt),t(j,Zt),t(j,te),t(d,ee),t(d,$),t($,ae),t($,wt),t(wt,re),t($,se),t(d,ne),t(d,rt),t(rt,le),t(d,oe),t(d,H),t(H,L),t(L,ie),t(L,ce),t(L,ue),t(d,de),t(d,st),t(st,he),t(d,me),t(d,nt),t(nt,ve),t(d,fe),t(d,M),t(M,R),t(R,pe),t(R,we),t(R,ye),t(d,_e),t(d,lt),t(lt,ge),t(m,Ee),t(m,v),U(W,v,null),t(v,be),t(v,V),t(V,q),t(q,$e),t(q,xe),t(q,Se),t(v,Pe),t(v,ot),t(ot,ke),t(v,Ae),t(v,it),t(it,De),t(m,Te),t(m,x),t(x,Ce),t(y,Oe),t(y,ct),U(F,ct,null),gt=!0},p:va,i(l){gt||(z(P.$$.fragment,l),z(k.$$.fragment,l),z(A.$$.fragment,l),z(O.$$.fragment,l),z(B.$$.fragment,l),z(W.$$.fragment,l),z(F.$$.fragment,l),gt=!0)},o(l){K(P.$$.fragment,l),K(k.$$.fragment,l),K(A.$$.fragment,l),K(O.$$.fragment,l),K(B.$$.fragment,l),K(W.$$.fragment,l),K(F.$$.fragment,l),gt=!1},d(l){l&&a(f),l&&a(yt),Q(P,l),l&&a(_t),l&&a(y),Q(k),Q(A),Q(O),Q(B),Q(W),Q(F)}}}const Dt="53. Maximum Subarray";class xa extends ua{constructor(f){super(),da(this,f,null,_a,ha,{})}}export{xa as default};
