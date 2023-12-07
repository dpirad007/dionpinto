import{S as ha,i as ua,s as da,e as a,k as s,t as i,w as H,c as n,a as r,m as c,h as l,d as e,x as L,b as h,f as ma,g as kt,J as t,y as M,E as fa,q as R,o as W,B as q}from"../../chunks/index-cd4245c1.js";import{b as pa}from"../../chunks/paths-c8fbcc1d.js";import{S as va,N as ya,F as _a}from"../../chunks/Footer-8b9c5841.js";import{T as At}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function ga(ca){let f,et,Tt,at,Ct,nt,Ot,_t,S,gt,_,rt,P,It,m,E,k,Bt,ot,Nt,jt,V,Ht,Lt,g,it,F,Mt,Rt,lt,J,Wt,qt,st,G,Vt,Ft,b,A,Jt,U,Gt,$,Ut,zt,u,D,Kt,ct,Qt,Xt,z,T,Yt,Be=`
	class Solution:
		def maxSubArray(self, nums: List[int]) -> int:
			maxval=nums[0]
			for i in range(len(nums)-2):
				for j in range(i+1,len(nums)-1):
					val = sum(nums[i:j])
					maxval = max(val,maxval)
			return maxval
				`,Zt,te,ee,C,ae,ht,ne,re,oe,ut,ie,le,K,O,se,Ne=`
	[-2,1,-3,4,-1,2,1,-5,4]

	initially -2 -> -1 -> -4 ...
				`,ce,he,ue,dt,de,me,mt,fe,pe,Q,I,ve,je=`
	[-2,-3,-1,-5]
				`,ye,_e,ge,ft,Ee,be,p,B,$e,X,N,xe,He=`
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
				`,we,Se,Pe,pt,ke,Ae,vt,De,Te,x,Ce,Oe,yt,j,Et;return S=new va({}),P=new ya({props:{curPage:"Blog"}}),k=new At({props:{type:2,title:Dt}}),A=new At({props:{type:5,title:"Description"}}),D=new At({props:{type:5,title:"Explanation"}}),B=new At({props:{type:5,title:"Code (Python)"}}),j=new _a({}),{c(){f=a("head"),et=a("meta"),Tt=s(),at=a("meta"),Ct=s(),nt=a("title"),Ot=i(Dt),_t=s(),H(S.$$.fragment),gt=s(),_=a("main"),rt=a("header"),H(P.$$.fragment),It=s(),m=a("main"),E=a("div"),H(k.$$.fragment),Bt=s(),ot=a("h4"),Nt=i("Leetcode Blind 75"),jt=s(),V=a("h5"),Ht=i("19th July 2022 ~ Dion Pinto"),Lt=s(),g=a("div"),it=a("div"),F=a("a"),Mt=i("Description"),Rt=s(),lt=a("div"),J=a("a"),Wt=i("Explanation"),qt=s(),st=a("div"),G=a("a"),Vt=i("Code"),Ft=s(),b=a("section"),H(A.$$.fragment),Jt=s(),U=a("p"),Gt=i(`Given an integer array nums, find the contiguous subarray (containing at least one number)
				which has the largest sum and return its sum. A subarray is a contiguous part of an array.

				`),$=a("a"),Ut=i("(Problem)"),zt=s(),u=a("section"),H(D.$$.fragment),Kt=s(),ct=a("p"),Qt=i(`We can find the max subarray by checking all possible subarrays of the array, in python this
				can be done quite easily via the slicing operation.`),Xt=s(),z=a("pre"),T=a("code"),Yt=i(`
				`),Zt=i(Be),te=i(`			
			`),ee=s(),C=a("p"),ae=i("However the time complexity of such an approach is very poor O(n"),ht=a("sup"),ne=i("3"),re=i(`). This is
				beacuse even the sum() function take O(n) to compute.`),oe=s(),ut=a("p"),ie=i("A better approach is to always check the current sum of the array."),le=s(),K=a("pre"),O=a("code"),se=i(`
				`),ce=i(Ne),he=i(`			
			`),ue=s(),dt=a("p"),de=i(`We can notice that -2 did not help us at all, all it did was lower the value, hence whenever
				we encounter a negative current sum we should set to 0.`),me=s(),mt=a("p"),fe=i(`We can then just iterate over the array and add the value present in ith position, followed
				by checking the max(current sum, maximun value found so far).`),pe=s(),Q=a("pre"),I=a("code"),ve=i(`
				`),ye=i(je),_e=i(`			
			`),ge=s(),ft=a("p"),Ee=i(`Suppose we get the above scenario where all the numbers are negative, then we just need to
				get the highest value. This can be achieved by initially setting the maxval as the first
				number of the array, after which the current sum will only decrease -> it will set to 0,
				then it will add the negative value in ith position -> compare itself to maxval and the
				higher number will be chosen.`),be=s(),p=a("section"),H(B.$$.fragment),$e=s(),X=a("pre"),N=a("code"),xe=i(`
				`),we=i(He),Se=i(`			
			`),Pe=s(),pt=a("p"),ke=i("Time Complexity => o(n)"),Ae=s(),vt=a("p"),De=i("Space Complexity => o(1)"),Te=s(),x=a("a"),Ce=i("Back"),Oe=s(),yt=a("footer"),H(j.$$.fragment),this.h()},l(o){f=n(o,"HEAD",{});var v=r(f);et=n(v,"META",{name:!0,content:!0}),Tt=c(v),at=n(v,"META",{name:!0,content:!0}),Ct=c(v),nt=n(v,"TITLE",{});var Le=r(nt);Ot=l(Le,Dt),Le.forEach(e),v.forEach(e),_t=c(o),L(S.$$.fragment,o),gt=c(o),_=n(o,"MAIN",{class:!0});var Y=r(_);rt=n(Y,"HEADER",{});var Me=r(rt);L(P.$$.fragment,Me),Me.forEach(e),It=c(Y),m=n(Y,"MAIN",{class:!0});var y=r(m);E=n(y,"DIV",{id:!0});var Z=r(E);L(k.$$.fragment,Z),Bt=c(Z),ot=n(Z,"H4",{});var Re=r(ot);Nt=l(Re,"Leetcode Blind 75"),Re.forEach(e),jt=c(Z),V=n(Z,"H5",{style:!0});var We=r(V);Ht=l(We,"19th July 2022 ~ Dion Pinto"),We.forEach(e),Z.forEach(e),Lt=c(y),g=n(y,"DIV",{id:!0,class:!0});var tt=r(g);it=n(tt,"DIV",{});var qe=r(it);F=n(qe,"A",{href:!0});var Ve=r(F);Mt=l(Ve,"Description"),Ve.forEach(e),qe.forEach(e),Rt=c(tt),lt=n(tt,"DIV",{});var Fe=r(lt);J=n(Fe,"A",{href:!0});var Je=r(J);Wt=l(Je,"Explanation"),Je.forEach(e),Fe.forEach(e),qt=c(tt),st=n(tt,"DIV",{});var Ge=r(st);G=n(Ge,"A",{href:!0});var Ue=r(G);Vt=l(Ue,"Code"),Ue.forEach(e),Ge.forEach(e),tt.forEach(e),Ft=c(y),b=n(y,"SECTION",{id:!0});var bt=r(b);L(A.$$.fragment,bt),Jt=c(bt),U=n(bt,"P",{});var Ie=r(U);Gt=l(Ie,`Given an integer array nums, find the contiguous subarray (containing at least one number)
				which has the largest sum and return its sum. A subarray is a contiguous part of an array.

				`),$=n(Ie,"A",{id:!0,href:!0,target:!0});var ze=r($);Ut=l(ze,"(Problem)"),ze.forEach(e),Ie.forEach(e),bt.forEach(e),zt=c(y),u=n(y,"SECTION",{id:!0});var d=r(u);L(D.$$.fragment,d),Kt=c(d),ct=n(d,"P",{});var Ke=r(ct);Qt=l(Ke,`We can find the max subarray by checking all possible subarrays of the array, in python this
				can be done quite easily via the slicing operation.`),Ke.forEach(e),Xt=c(d),z=n(d,"PRE",{id:!0});var Qe=r(z);T=n(Qe,"CODE",{});var $t=r(T);Yt=l($t,`
				`),Zt=l($t,Be),te=l($t,`			
			`),$t.forEach(e),Qe.forEach(e),ee=c(d),C=n(d,"P",{});var xt=r(C);ae=l(xt,"However the time complexity of such an approach is very poor O(n"),ht=n(xt,"SUP",{});var Xe=r(ht);ne=l(Xe,"3"),Xe.forEach(e),re=l(xt,`). This is
				beacuse even the sum() function take O(n) to compute.`),xt.forEach(e),oe=c(d),ut=n(d,"P",{});var Ye=r(ut);ie=l(Ye,"A better approach is to always check the current sum of the array."),Ye.forEach(e),le=c(d),K=n(d,"PRE",{id:!0});var Ze=r(K);O=n(Ze,"CODE",{});var wt=r(O);se=l(wt,`
				`),ce=l(wt,Ne),he=l(wt,`			
			`),wt.forEach(e),Ze.forEach(e),ue=c(d),dt=n(d,"P",{});var ta=r(dt);de=l(ta,`We can notice that -2 did not help us at all, all it did was lower the value, hence whenever
				we encounter a negative current sum we should set to 0.`),ta.forEach(e),me=c(d),mt=n(d,"P",{});var ea=r(mt);fe=l(ea,`We can then just iterate over the array and add the value present in ith position, followed
				by checking the max(current sum, maximun value found so far).`),ea.forEach(e),pe=c(d),Q=n(d,"PRE",{id:!0});var aa=r(Q);I=n(aa,"CODE",{});var St=r(I);ve=l(St,`
				`),ye=l(St,je),_e=l(St,`			
			`),St.forEach(e),aa.forEach(e),ge=c(d),ft=n(d,"P",{});var na=r(ft);Ee=l(na,`Suppose we get the above scenario where all the numbers are negative, then we just need to
				get the highest value. This can be achieved by initially setting the maxval as the first
				number of the array, after which the current sum will only decrease -> it will set to 0,
				then it will add the negative value in ith position -> compare itself to maxval and the
				higher number will be chosen.`),na.forEach(e),d.forEach(e),be=c(y),p=n(y,"SECTION",{id:!0});var w=r(p);L(B.$$.fragment,w),$e=c(w),X=n(w,"PRE",{id:!0});var ra=r(X);N=n(ra,"CODE",{});var Pt=r(N);xe=l(Pt,`
				`),we=l(Pt,He),Se=l(Pt,`			
			`),Pt.forEach(e),ra.forEach(e),Pe=c(w),pt=n(w,"P",{});var oa=r(pt);ke=l(oa,"Time Complexity => o(n)"),oa.forEach(e),Ae=c(w),vt=n(w,"P",{});var ia=r(vt);De=l(ia,"Space Complexity => o(1)"),ia.forEach(e),w.forEach(e),Te=c(y),x=n(y,"A",{type:!0,class:!0,href:!0});var la=r(x);Ce=l(la,"Back"),la.forEach(e),y.forEach(e),Oe=c(Y),yt=n(Y,"FOOTER",{});var sa=r(yt);L(j.$$.fragment,sa),sa.forEach(e),Y.forEach(e),this.h()},h(){h(et,"name","author"),h(et,"content","Dion Pinto"),h(at,"name","description"),h(at,"content",`Leetcode Blind 75 ${Dt}`),ma(V,"font-style","italic"),h(E,"id","title"),h(F,"href","#description"),h(J,"href","#explanation"),h(G,"href","#code"),h(g,"id","index"),h(g,"class","nes-container is-rounded is-dark"),h($,"id","link"),h($,"href","https://leetcode.com/problems/maximum-subarray/"),h($,"target","_blank"),h(b,"id","description"),h(z,"id","block"),h(K,"id","block"),h(Q,"id","block"),h(u,"id","explanation"),h(X,"id","block"),h(p,"id","code"),h(x,"type","button"),h(x,"class","nes-btn is-primary"),h(x,"href",`${pa}/blind75`),h(m,"class","container svelte-qdub48"),h(_,"class","main")},m(o,v){kt(o,f,v),t(f,et),t(f,Tt),t(f,at),t(f,Ct),t(f,nt),t(nt,Ot),kt(o,_t,v),M(S,o,v),kt(o,gt,v),kt(o,_,v),t(_,rt),M(P,rt,null),t(_,It),t(_,m),t(m,E),M(k,E,null),t(E,Bt),t(E,ot),t(ot,Nt),t(E,jt),t(E,V),t(V,Ht),t(m,Lt),t(m,g),t(g,it),t(it,F),t(F,Mt),t(g,Rt),t(g,lt),t(lt,J),t(J,Wt),t(g,qt),t(g,st),t(st,G),t(G,Vt),t(m,Ft),t(m,b),M(A,b,null),t(b,Jt),t(b,U),t(U,Gt),t(U,$),t($,Ut),t(m,zt),t(m,u),M(D,u,null),t(u,Kt),t(u,ct),t(ct,Qt),t(u,Xt),t(u,z),t(z,T),t(T,Yt),t(T,Zt),t(T,te),t(u,ee),t(u,C),t(C,ae),t(C,ht),t(ht,ne),t(C,re),t(u,oe),t(u,ut),t(ut,ie),t(u,le),t(u,K),t(K,O),t(O,se),t(O,ce),t(O,he),t(u,ue),t(u,dt),t(dt,de),t(u,me),t(u,mt),t(mt,fe),t(u,pe),t(u,Q),t(Q,I),t(I,ve),t(I,ye),t(I,_e),t(u,ge),t(u,ft),t(ft,Ee),t(m,be),t(m,p),M(B,p,null),t(p,$e),t(p,X),t(X,N),t(N,xe),t(N,we),t(N,Se),t(p,Pe),t(p,pt),t(pt,ke),t(p,Ae),t(p,vt),t(vt,De),t(m,Te),t(m,x),t(x,Ce),t(_,Oe),t(_,yt),M(j,yt,null),Et=!0},p:fa,i(o){Et||(R(S.$$.fragment,o),R(P.$$.fragment,o),R(k.$$.fragment,o),R(A.$$.fragment,o),R(D.$$.fragment,o),R(B.$$.fragment,o),R(j.$$.fragment,o),Et=!0)},o(o){W(S.$$.fragment,o),W(P.$$.fragment,o),W(k.$$.fragment,o),W(A.$$.fragment,o),W(D.$$.fragment,o),W(B.$$.fragment,o),W(j.$$.fragment,o),Et=!1},d(o){o&&e(f),o&&e(_t),q(S,o),o&&e(gt),o&&e(_),q(P),q(k),q(A),q(D),q(B),q(j)}}}const Dt="53. Maximum Subarray";class Sa extends ha{constructor(f){super(),ua(this,f,null,ga,da,{})}}export{Sa as default};
