import{S as ga,i as $a,s as ba,e as s,k as c,t as r,w as K,c as n,a as l,m as u,h as o,d as a,x as Q,b as e,f as ya,g as xt,J as t,y as X,E as ka,q as Y,o as Z,B as tt}from"../../chunks/index-cd4245c1.js";import{b as _a}from"../../chunks/paths-c8fbcc1d.js";import{S as Pa,N as Sa,F as Ta}from"../../chunks/Footer-8b9c5841.js";import{T as It}from"../../chunks/Title-6ea0487f.js";function ja(Ea){let v,vt,Nt,pt,Lt,wt,Ot,gt,j,$t,_,et,C,Ut,h,g,D,Wt,_t,Bt,Rt,at,Vt,zt,E,st,x,Ht,Mt,nt,I,Ft,Jt,lt,A,qt,Gt,$,N,Kt,L,Qt,b,Xt,Yt,d,O,Zt,rt,te,ee,U,W,ae,ze=`
    class Solution:
        def threeSum(self, nums: List[int]) -> List[List[int]]:
            sol=[]
            for i in range(len(nums)-2):
                for j in range(i+1,len(nums)-1):
                    if(i!=j):
                        for k in range(j+1,len(nums)):
                            if(j!=k):
                                if(nums[i]+nums[j]+nums[k]==0):
                                    sol.append([nums[i],nums[j],nums[k]])
            return sol

    INPUT: [-1,0,1,2,-1,-4]

    OUTPUT: [[-1,0,1],[-1,2,-1],[0,1,-1]]
				`,se,ne,le,ot,re,oe,B,R,ie,He=`
        ...
        def threeSum(self, nums: List[int]) -> List[List[int]]:
            sol=[]
            nums.sort()
            for i in range(len(nums)-2):
        ...

        OUTPUT: [[-1,-1,2],[-1,0,1],[-1,0,1]]
				`,ce,ue,de,it,me,he,ct,fe,ve,V,z,pe,Me=`
        ...
        nums.sort()
        sol=[]
        for i in range(len(nums)-2):
            if(i>0 and nums[i]==nums[i-1]):
                continue
            for j in range(i+1,len(nums)-1):
        ...

        OUTPUT: [[-1,-1,2],[-1,0,1]]
				`,we,_e,Ee,y,ge,k,$e,be,ye,H,M,ke,Fe=`
        ...
         else:
            sol.append([nums[i],nums[l],nums[r]])
                l+=1
            while((l<r) and nums[l]==nums[l-1]):
                l+=1
        ...
				`,Pe,Se,Te,f,F,je,J,q,Ce,Je=`
    class Solution:
        def threeSum(self, nums: List[int]) -> List[List[int]]:
            sol=[]
            nums.sort()
            for i in range(len(nums)):
                if(i>0 and nums[i]==nums[i-1]):
                    continue
                
                l,r=i+1,len(nums)-1
                while(l<r):
                    
                    threesum=nums[i]+nums[l]+nums[r]
                    if(threesum>0):
                        r-=1
                    elif(threesum<0):
                        l+=1
                    else:
                        sol.append([nums[i],nums[l],nums[r]])
                        l+=1
                        while((l<r) and nums[l]==nums[l-1]):
                                l+=1
            return sol
				`,De,xe,Ie,P,Ae,Et,Ne,Le,Oe,ut,Ue,We,S,Be,Re,dt,G,bt;return j=new Pa({}),C=new Sa({props:{curPage:"Blog"}}),D=new It({props:{type:2,title:At}}),N=new It({props:{type:5,title:"Description"}}),O=new It({props:{type:5,title:"Explanation"}}),F=new It({props:{type:5,title:"Code (Python)"}}),G=new Ta({}),{c(){v=s("head"),vt=s("meta"),Nt=c(),pt=s("meta"),Lt=c(),wt=s("title"),Ot=r(At),gt=c(),K(j.$$.fragment),$t=c(),_=s("main"),et=s("header"),K(C.$$.fragment),Ut=c(),h=s("main"),g=s("div"),K(D.$$.fragment),Wt=c(),_t=s("h4"),Bt=r("Leetcode Blind 75"),Rt=c(),at=s("h5"),Vt=r("22th June 2022 ~ Dion Pinto"),zt=c(),E=s("div"),st=s("div"),x=s("a"),Ht=r("Description"),Mt=c(),nt=s("div"),I=s("a"),Ft=r("Explanation"),Jt=c(),lt=s("div"),A=s("a"),qt=r("Code"),Gt=c(),$=s("section"),K(N.$$.fragment),Kt=c(),L=s("p"),Qt=r(`Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i
				!= j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set
				must not contain duplicate triplets.

				`),b=s("a"),Xt=r("(Problem)"),Yt=c(),d=s("section"),K(O.$$.fragment),Zt=c(),rt=s("p"),te=r(`I believe that 3Sum becomes rather messy because of the handling of duplicates. We can see
				this with the following brute force approach (without handling of duplicates).`),ee=c(),U=s("pre"),W=s("code"),ae=r(`
				`),se=r(ze),ne=r(`			
			`),le=c(),ot=s("p"),re=r(`In the above output we can notice [-1,0,1] is repeated twice with the order being different.
				We can solve the order issue by sorting the input array.`),oe=c(),B=s("pre"),R=s("code"),ie=r(`
				`),ce=r(He),ue=r(`			
			`),de=c(),it=s("p"),me=r(`Cool now we atleast get the duplicates in order.Now we can focus on eliminating the
				duplicates. We can notice that if we just skip the repeating values after sorting we can
				eliminate the duplicates.`),he=c(),ct=s("p"),fe=r("We can use the following code to do so."),ve=c(),V=s("pre"),z=s("code"),pe=r(`
				`),we=r(Me),_e=r(`			
			`),Ee=c(),y=s("p"),ge=r("Now finally, we can move onto a more optimized soluton. As we have seen in "),k=s("a"),$e=r("(two Sum 2)."),be=r(`
				Utilizing a 2 pointer approach to find the j -> nums[l] and k -> nums[r] values. ending with
				a another check to ensure no duplicates occur.`),ye=c(),H=s("pre"),M=s("code"),ke=r(`
				`),Pe=r(Fe),Se=r(`			
			`),Te=c(),f=s("section"),K(F.$$.fragment),je=c(),J=s("pre"),q=s("code"),Ce=r(`
				`),De=r(Je),xe=r(`			
			`),Ie=c(),P=s("p"),Ae=r("Time Complexity => o(n"),Et=s("sup"),Ne=r("2"),Le=r(")"),Oe=c(),ut=s("p"),Ue=r("Space Complexity => o(1)"),We=c(),S=s("a"),Be=r("Back"),Re=c(),dt=s("footer"),K(G.$$.fragment),this.h()},l(i){v=n(i,"HEAD",{});var p=l(v);vt=n(p,"META",{name:!0,content:!0}),Nt=u(p),pt=n(p,"META",{name:!0,content:!0}),Lt=u(p),wt=n(p,"TITLE",{});var qe=l(wt);Ot=o(qe,At),qe.forEach(a),p.forEach(a),gt=u(i),Q(j.$$.fragment,i),$t=u(i),_=n(i,"MAIN",{class:!0});var mt=l(_);et=n(mt,"HEADER",{class:!0});var Ge=l(et);Q(C.$$.fragment,Ge),Ge.forEach(a),Ut=u(mt),h=n(mt,"MAIN",{class:!0});var w=l(h);g=n(w,"DIV",{id:!0});var ht=l(g);Q(D.$$.fragment,ht),Wt=u(ht),_t=n(ht,"H4",{});var Ke=l(_t);Bt=o(Ke,"Leetcode Blind 75"),Ke.forEach(a),Rt=u(ht),at=n(ht,"H5",{style:!0});var Qe=l(at);Vt=o(Qe,"22th June 2022 ~ Dion Pinto"),Qe.forEach(a),ht.forEach(a),zt=u(w),E=n(w,"DIV",{id:!0,class:!0});var ft=l(E);st=n(ft,"DIV",{class:!0});var Xe=l(st);x=n(Xe,"A",{href:!0,class:!0});var Ye=l(x);Ht=o(Ye,"Description"),Ye.forEach(a),Xe.forEach(a),Mt=u(ft),nt=n(ft,"DIV",{class:!0});var Ze=l(nt);I=n(Ze,"A",{href:!0,class:!0});var ta=l(I);Ft=o(ta,"Explanation"),ta.forEach(a),Ze.forEach(a),Jt=u(ft),lt=n(ft,"DIV",{class:!0});var ea=l(lt);A=n(ea,"A",{href:!0,class:!0});var aa=l(A);qt=o(aa,"Code"),aa.forEach(a),ea.forEach(a),ft.forEach(a),Gt=u(w),$=n(w,"SECTION",{id:!0,class:!0});var yt=l($);Q(N.$$.fragment,yt),Kt=u(yt),L=n(yt,"P",{class:!0});var Ve=l(L);Qt=o(Ve,`Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i
				!= j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set
				must not contain duplicate triplets.

				`),b=n(Ve,"A",{id:!0,href:!0,target:!0,class:!0});var sa=l(b);Xt=o(sa,"(Problem)"),sa.forEach(a),Ve.forEach(a),yt.forEach(a),Yt=u(w),d=n(w,"SECTION",{id:!0,class:!0});var m=l(d);Q(O.$$.fragment,m),Zt=u(m),rt=n(m,"P",{class:!0});var na=l(rt);te=o(na,`I believe that 3Sum becomes rather messy because of the handling of duplicates. We can see
				this with the following brute force approach (without handling of duplicates).`),na.forEach(a),ee=u(m),U=n(m,"PRE",{id:!0,class:!0});var la=l(U);W=n(la,"CODE",{});var kt=l(W);ae=o(kt,`
				`),se=o(kt,ze),ne=o(kt,`			
			`),kt.forEach(a),la.forEach(a),le=u(m),ot=n(m,"P",{class:!0});var ra=l(ot);re=o(ra,`In the above output we can notice [-1,0,1] is repeated twice with the order being different.
				We can solve the order issue by sorting the input array.`),ra.forEach(a),oe=u(m),B=n(m,"PRE",{id:!0,class:!0});var oa=l(B);R=n(oa,"CODE",{});var Pt=l(R);ie=o(Pt,`
				`),ce=o(Pt,He),ue=o(Pt,`			
			`),Pt.forEach(a),oa.forEach(a),de=u(m),it=n(m,"P",{class:!0});var ia=l(it);me=o(ia,`Cool now we atleast get the duplicates in order.Now we can focus on eliminating the
				duplicates. We can notice that if we just skip the repeating values after sorting we can
				eliminate the duplicates.`),ia.forEach(a),he=u(m),ct=n(m,"P",{class:!0});var ca=l(ct);fe=o(ca,"We can use the following code to do so."),ca.forEach(a),ve=u(m),V=n(m,"PRE",{id:!0,class:!0});var ua=l(V);z=n(ua,"CODE",{});var St=l(z);pe=o(St,`
				`),we=o(St,Me),_e=o(St,`			
			`),St.forEach(a),ua.forEach(a),Ee=u(m),y=n(m,"P",{class:!0});var Tt=l(y);ge=o(Tt,"Now finally, we can move onto a more optimized soluton. As we have seen in "),k=n(Tt,"A",{id:!0,href:!0,class:!0});var da=l(k);$e=o(da,"(two Sum 2)."),da.forEach(a),be=o(Tt,`
				Utilizing a 2 pointer approach to find the j -> nums[l] and k -> nums[r] values. ending with
				a another check to ensure no duplicates occur.`),Tt.forEach(a),ye=u(m),H=n(m,"PRE",{id:!0,class:!0});var ma=l(H);M=n(ma,"CODE",{});var jt=l(M);ke=o(jt,`
				`),Pe=o(jt,Fe),Se=o(jt,`			
			`),jt.forEach(a),ma.forEach(a),m.forEach(a),Te=u(w),f=n(w,"SECTION",{id:!0,class:!0});var T=l(f);Q(F.$$.fragment,T),je=u(T),J=n(T,"PRE",{id:!0,class:!0});var ha=l(J);q=n(ha,"CODE",{});var Ct=l(q);Ce=o(Ct,`
				`),De=o(Ct,Je),xe=o(Ct,`			
			`),Ct.forEach(a),ha.forEach(a),Ie=u(T),P=n(T,"P",{class:!0});var Dt=l(P);Ae=o(Dt,"Time Complexity => o(n"),Et=n(Dt,"SUP",{});var fa=l(Et);Ne=o(fa,"2"),fa.forEach(a),Le=o(Dt,")"),Dt.forEach(a),Oe=u(T),ut=n(T,"P",{class:!0});var va=l(ut);Ue=o(va,"Space Complexity => o(1)"),va.forEach(a),T.forEach(a),We=u(w),S=n(w,"A",{type:!0,class:!0,href:!0});var pa=l(S);Be=o(pa,"Back"),pa.forEach(a),w.forEach(a),Re=u(mt),dt=n(mt,"FOOTER",{class:!0});var wa=l(dt);Q(G.$$.fragment,wa),wa.forEach(a),mt.forEach(a),this.h()},h(){e(vt,"name","author"),e(vt,"content","Dion Pinto"),e(pt,"name","description"),e(pt,"content",`Leetcode Blind 75 ${At}`),e(et,"class","svelte-16awvwa"),ya(at,"font-style","italic"),e(g,"id","title"),e(x,"href","#description"),e(x,"class","svelte-16awvwa"),e(st,"class","svelte-16awvwa"),e(I,"href","#explanation"),e(I,"class","svelte-16awvwa"),e(nt,"class","svelte-16awvwa"),e(A,"href","#code"),e(A,"class","svelte-16awvwa"),e(lt,"class","svelte-16awvwa"),e(E,"id","index"),e(E,"class","nes-container is-rounded is-dark svelte-16awvwa"),e(b,"id","link"),e(b,"href","https://leetcode.com/problems/3sum/"),e(b,"target","_blank"),e(b,"class","svelte-16awvwa"),e(L,"class","svelte-16awvwa"),e($,"id","description"),e($,"class","svelte-16awvwa"),e(rt,"class","svelte-16awvwa"),e(U,"id","block"),e(U,"class","svelte-16awvwa"),e(ot,"class","svelte-16awvwa"),e(B,"id","block"),e(B,"class","svelte-16awvwa"),e(it,"class","svelte-16awvwa"),e(ct,"class","svelte-16awvwa"),e(V,"id","block"),e(V,"class","svelte-16awvwa"),e(k,"id","link"),e(k,"href",`${_a}/blind75/twoSum2`),e(k,"class","svelte-16awvwa"),e(y,"class","svelte-16awvwa"),e(H,"id","block"),e(H,"class","svelte-16awvwa"),e(d,"id","explanation"),e(d,"class","svelte-16awvwa"),e(J,"id","block"),e(J,"class","svelte-16awvwa"),e(P,"class","svelte-16awvwa"),e(ut,"class","svelte-16awvwa"),e(f,"id","code"),e(f,"class","svelte-16awvwa"),e(S,"type","button"),e(S,"class","nes-btn is-primary svelte-16awvwa"),e(S,"href",`${_a}/blind75`),e(h,"class","container svelte-16awvwa"),e(dt,"class","svelte-16awvwa"),e(_,"class","main svelte-16awvwa")},m(i,p){xt(i,v,p),t(v,vt),t(v,Nt),t(v,pt),t(v,Lt),t(v,wt),t(wt,Ot),xt(i,gt,p),X(j,i,p),xt(i,$t,p),xt(i,_,p),t(_,et),X(C,et,null),t(_,Ut),t(_,h),t(h,g),X(D,g,null),t(g,Wt),t(g,_t),t(_t,Bt),t(g,Rt),t(g,at),t(at,Vt),t(h,zt),t(h,E),t(E,st),t(st,x),t(x,Ht),t(E,Mt),t(E,nt),t(nt,I),t(I,Ft),t(E,Jt),t(E,lt),t(lt,A),t(A,qt),t(h,Gt),t(h,$),X(N,$,null),t($,Kt),t($,L),t(L,Qt),t(L,b),t(b,Xt),t(h,Yt),t(h,d),X(O,d,null),t(d,Zt),t(d,rt),t(rt,te),t(d,ee),t(d,U),t(U,W),t(W,ae),t(W,se),t(W,ne),t(d,le),t(d,ot),t(ot,re),t(d,oe),t(d,B),t(B,R),t(R,ie),t(R,ce),t(R,ue),t(d,de),t(d,it),t(it,me),t(d,he),t(d,ct),t(ct,fe),t(d,ve),t(d,V),t(V,z),t(z,pe),t(z,we),t(z,_e),t(d,Ee),t(d,y),t(y,ge),t(y,k),t(k,$e),t(y,be),t(d,ye),t(d,H),t(H,M),t(M,ke),t(M,Pe),t(M,Se),t(h,Te),t(h,f),X(F,f,null),t(f,je),t(f,J),t(J,q),t(q,Ce),t(q,De),t(q,xe),t(f,Ie),t(f,P),t(P,Ae),t(P,Et),t(Et,Ne),t(P,Le),t(f,Oe),t(f,ut),t(ut,Ue),t(h,We),t(h,S),t(S,Be),t(_,Re),t(_,dt),X(G,dt,null),bt=!0},p:ka,i(i){bt||(Y(j.$$.fragment,i),Y(C.$$.fragment,i),Y(D.$$.fragment,i),Y(N.$$.fragment,i),Y(O.$$.fragment,i),Y(F.$$.fragment,i),Y(G.$$.fragment,i),bt=!0)},o(i){Z(j.$$.fragment,i),Z(C.$$.fragment,i),Z(D.$$.fragment,i),Z(N.$$.fragment,i),Z(O.$$.fragment,i),Z(F.$$.fragment,i),Z(G.$$.fragment,i),bt=!1},d(i){i&&a(v),i&&a(gt),tt(j,i),i&&a($t),i&&a(_),tt(C),tt(D),tt(N),tt(O),tt(F),tt(G)}}}const At="15. 3Sum";class Aa extends ga{constructor(v){super(),$a(this,v,null,ja,ba,{})}}export{Aa as default};
