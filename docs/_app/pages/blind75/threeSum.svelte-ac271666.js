import{S as jn,i as wn,s as bn,e as s,k as c,t as r,w as K,c as l,a,m as u,h as o,d as n,x as Q,b as e,f as yn,g as xt,J as t,y as X,E as kn,q as Y,o as Z,B as tt}from"../../chunks/index-cd4245c1.js";import{b as gn}from"../../chunks/paths-c8fbcc1d.js";import{S as Pn,N as Sn,F as Tn}from"../../chunks/Footer-8b9c5841.js";import{T as It}from"../../chunks/Title-6ea0487f.js";function Cn($n){let v,vt,Nt,pt,Lt,_t,Ot,$t,T,jt,E,et,C,Ut,m,$,D,Wt,Et,Bt,Rt,nt,Vt,zt,g,st,x,Ht,Mt,lt,I,Ft,Jt,at,A,qt,Gt,j,N,Kt,L,Qt,w,Xt,Yt,d,O,Zt,rt,te,ee,U,W,ne,ze=`
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
				`,se,le,ae,ot,re,oe,B,R,ie,He=`
        ...
        def threeSum(self, nums: List[int]) -> List[List[int]]:
            sol=[]
            nums.sort()
            for i in range(len(nums)-2):
        ...

        OUTPUT: [[-1,-1,2],[-1,0,1],[-1,0,1]]
				`,ce,ue,de,it,fe,me,ct,he,ve,V,z,pe,Me=`
        ...
        nums.sort()
        sol=[]
        for i in range(len(nums)-2):
            if(i>0 and nums[i]==nums[i-1]):
                continue
            for j in range(i+1,len(nums)-1):
        ...

        OUTPUT: [[-1,-1,2],[-1,0,1]]
				`,_e,Ee,ge,b,$e,y,je,we,be,H,M,ye,Fe=`
        ...
         else:
            sol.append([nums[i],nums[l],nums[r]])
                l+=1
            while((l<r) and nums[l]==nums[l-1]):
                l+=1
        ...
				`,ke,Pe,Se,h,F,Te,J,q,Ce,Je=`
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
				`,De,xe,Ie,k,Ae,gt,Ne,Le,Oe,ut,Ue,We,P,Be,Re,dt,G,wt;return T=new Pn({}),C=new Sn({props:{curPage:"Blog"}}),D=new It({props:{type:2,title:At}}),N=new It({props:{type:5,title:"Description"}}),O=new It({props:{type:5,title:"Explanation"}}),F=new It({props:{type:5,title:"Code (Python)"}}),G=new Tn({}),{c(){v=s("head"),vt=s("meta"),Nt=c(),pt=s("meta"),Lt=c(),_t=s("title"),Ot=r(At),$t=c(),K(T.$$.fragment),jt=c(),E=s("main"),et=s("header"),K(C.$$.fragment),Ut=c(),m=s("main"),$=s("div"),K(D.$$.fragment),Wt=c(),Et=s("h4"),Bt=r("Leetcode Blind 75"),Rt=c(),nt=s("h5"),Vt=r("22th June 2022 ~ Dion Pinto"),zt=c(),g=s("div"),st=s("div"),x=s("a"),Ht=r("Description"),Mt=c(),lt=s("div"),I=s("a"),Ft=r("Explanation"),Jt=c(),at=s("div"),A=s("a"),qt=r("Code"),Gt=c(),j=s("section"),K(N.$$.fragment),Kt=c(),L=s("p"),Qt=r(`Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i
				!= j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set
				must not contain duplicate triplets.

				`),w=s("a"),Xt=r("(Problem)"),Yt=c(),d=s("section"),K(O.$$.fragment),Zt=c(),rt=s("p"),te=r(`I believe that 3Sum becomes rather messy because of the handling of duplicates. We can see
				this with the following brute force approach (without handling of duplicates).`),ee=c(),U=s("pre"),W=s("code"),ne=r(`
				`),se=r(ze),le=r(`			
			`),ae=c(),ot=s("p"),re=r(`In the above output we can notice [-1,0,1] is repeated twice with the order being different.
				We can solve the order issue by sorting the input array.`),oe=c(),B=s("pre"),R=s("code"),ie=r(`
				`),ce=r(He),ue=r(`			
			`),de=c(),it=s("p"),fe=r(`Cool now we atleast get the duplicates in order.Now we can focus on eliminating the
				duplicates. We can notice that if we just skip the repeating values after sorting we can
				eliminate the duplicates.`),me=c(),ct=s("p"),he=r("We can use the following code to do so."),ve=c(),V=s("pre"),z=s("code"),pe=r(`
				`),_e=r(Me),Ee=r(`			
			`),ge=c(),b=s("p"),$e=r("Now finally, we can move onto a more optimized soluton. As we have seen in "),y=s("a"),je=r("(two Sum 2)."),we=r(`
				Utilizing a 2 pointer approach to find the j -> nums[l] and k -> nums[r] values. ending with
				a another check to ensure no duplicates occur.`),be=c(),H=s("pre"),M=s("code"),ye=r(`
				`),ke=r(Fe),Pe=r(`			
			`),Se=c(),h=s("section"),K(F.$$.fragment),Te=c(),J=s("pre"),q=s("code"),Ce=r(`
				`),De=r(Je),xe=r(`			
			`),Ie=c(),k=s("p"),Ae=r("Time Complexity => o(n"),gt=s("sup"),Ne=r("2"),Le=r(")"),Oe=c(),ut=s("p"),Ue=r("Space Complexity => o(1)"),We=c(),P=s("a"),Be=r("Back"),Re=c(),dt=s("footer"),K(G.$$.fragment),this.h()},l(i){v=l(i,"HEAD",{});var p=a(v);vt=l(p,"META",{name:!0,content:!0}),Nt=u(p),pt=l(p,"META",{name:!0,content:!0}),Lt=u(p),_t=l(p,"TITLE",{});var qe=a(_t);Ot=o(qe,At),qe.forEach(n),p.forEach(n),$t=u(i),Q(T.$$.fragment,i),jt=u(i),E=l(i,"MAIN",{class:!0});var ft=a(E);et=l(ft,"HEADER",{class:!0});var Ge=a(et);Q(C.$$.fragment,Ge),Ge.forEach(n),Ut=u(ft),m=l(ft,"MAIN",{class:!0});var _=a(m);$=l(_,"DIV",{id:!0});var mt=a($);Q(D.$$.fragment,mt),Wt=u(mt),Et=l(mt,"H4",{});var Ke=a(Et);Bt=o(Ke,"Leetcode Blind 75"),Ke.forEach(n),Rt=u(mt),nt=l(mt,"H5",{style:!0});var Qe=a(nt);Vt=o(Qe,"22th June 2022 ~ Dion Pinto"),Qe.forEach(n),mt.forEach(n),zt=u(_),g=l(_,"DIV",{id:!0,class:!0});var ht=a(g);st=l(ht,"DIV",{class:!0});var Xe=a(st);x=l(Xe,"A",{href:!0,class:!0});var Ye=a(x);Ht=o(Ye,"Description"),Ye.forEach(n),Xe.forEach(n),Mt=u(ht),lt=l(ht,"DIV",{class:!0});var Ze=a(lt);I=l(Ze,"A",{href:!0,class:!0});var tn=a(I);Ft=o(tn,"Explanation"),tn.forEach(n),Ze.forEach(n),Jt=u(ht),at=l(ht,"DIV",{class:!0});var en=a(at);A=l(en,"A",{href:!0,class:!0});var nn=a(A);qt=o(nn,"Code"),nn.forEach(n),en.forEach(n),ht.forEach(n),Gt=u(_),j=l(_,"SECTION",{id:!0,class:!0});var bt=a(j);Q(N.$$.fragment,bt),Kt=u(bt),L=l(bt,"P",{class:!0});var Ve=a(L);Qt=o(Ve,`Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i
				!= j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set
				must not contain duplicate triplets.

				`),w=l(Ve,"A",{id:!0,href:!0,target:!0,class:!0});var sn=a(w);Xt=o(sn,"(Problem)"),sn.forEach(n),Ve.forEach(n),bt.forEach(n),Yt=u(_),d=l(_,"SECTION",{id:!0,class:!0});var f=a(d);Q(O.$$.fragment,f),Zt=u(f),rt=l(f,"P",{class:!0});var ln=a(rt);te=o(ln,`I believe that 3Sum becomes rather messy because of the handling of duplicates. We can see
				this with the following brute force approach (without handling of duplicates).`),ln.forEach(n),ee=u(f),U=l(f,"PRE",{id:!0,class:!0});var an=a(U);W=l(an,"CODE",{});var yt=a(W);ne=o(yt,`
				`),se=o(yt,ze),le=o(yt,`			
			`),yt.forEach(n),an.forEach(n),ae=u(f),ot=l(f,"P",{class:!0});var rn=a(ot);re=o(rn,`In the above output we can notice [-1,0,1] is repeated twice with the order being different.
				We can solve the order issue by sorting the input array.`),rn.forEach(n),oe=u(f),B=l(f,"PRE",{id:!0,class:!0});var on=a(B);R=l(on,"CODE",{});var kt=a(R);ie=o(kt,`
				`),ce=o(kt,He),ue=o(kt,`			
			`),kt.forEach(n),on.forEach(n),de=u(f),it=l(f,"P",{class:!0});var cn=a(it);fe=o(cn,`Cool now we atleast get the duplicates in order.Now we can focus on eliminating the
				duplicates. We can notice that if we just skip the repeating values after sorting we can
				eliminate the duplicates.`),cn.forEach(n),me=u(f),ct=l(f,"P",{class:!0});var un=a(ct);he=o(un,"We can use the following code to do so."),un.forEach(n),ve=u(f),V=l(f,"PRE",{id:!0,class:!0});var dn=a(V);z=l(dn,"CODE",{});var Pt=a(z);pe=o(Pt,`
				`),_e=o(Pt,Me),Ee=o(Pt,`			
			`),Pt.forEach(n),dn.forEach(n),ge=u(f),b=l(f,"P",{class:!0});var St=a(b);$e=o(St,"Now finally, we can move onto a more optimized soluton. As we have seen in "),y=l(St,"A",{id:!0,href:!0,class:!0});var fn=a(y);je=o(fn,"(two Sum 2)."),fn.forEach(n),we=o(St,`
				Utilizing a 2 pointer approach to find the j -> nums[l] and k -> nums[r] values. ending with
				a another check to ensure no duplicates occur.`),St.forEach(n),be=u(f),H=l(f,"PRE",{id:!0,class:!0});var mn=a(H);M=l(mn,"CODE",{});var Tt=a(M);ye=o(Tt,`
				`),ke=o(Tt,Fe),Pe=o(Tt,`			
			`),Tt.forEach(n),mn.forEach(n),f.forEach(n),Se=u(_),h=l(_,"SECTION",{id:!0,class:!0});var S=a(h);Q(F.$$.fragment,S),Te=u(S),J=l(S,"PRE",{id:!0,class:!0});var hn=a(J);q=l(hn,"CODE",{});var Ct=a(q);Ce=o(Ct,`
				`),De=o(Ct,Je),xe=o(Ct,`			
			`),Ct.forEach(n),hn.forEach(n),Ie=u(S),k=l(S,"P",{class:!0});var Dt=a(k);Ae=o(Dt,"Time Complexity => o(n"),gt=l(Dt,"SUP",{});var vn=a(gt);Ne=o(vn,"2"),vn.forEach(n),Le=o(Dt,")"),Dt.forEach(n),Oe=u(S),ut=l(S,"P",{class:!0});var pn=a(ut);Ue=o(pn,"Space Complexity => o(1)"),pn.forEach(n),S.forEach(n),We=u(_),P=l(_,"A",{type:!0,class:!0,href:!0});var _n=a(P);Be=o(_n,"Back"),_n.forEach(n),_.forEach(n),Re=u(ft),dt=l(ft,"FOOTER",{class:!0});var En=a(dt);Q(G.$$.fragment,En),En.forEach(n),ft.forEach(n),this.h()},h(){e(vt,"name","author"),e(vt,"content","Dion Pinto"),e(pt,"name","description"),e(pt,"content",`Leetcode Blind 75 ${At}`),e(et,"class","svelte-vf5nlj"),yn(nt,"font-style","italic"),e($,"id","title"),e(x,"href","#description"),e(x,"class","svelte-vf5nlj"),e(st,"class","svelte-vf5nlj"),e(I,"href","#explanation"),e(I,"class","svelte-vf5nlj"),e(lt,"class","svelte-vf5nlj"),e(A,"href","#code"),e(A,"class","svelte-vf5nlj"),e(at,"class","svelte-vf5nlj"),e(g,"id","index"),e(g,"class","nes-container is-rounded is-dark svelte-vf5nlj"),e(w,"id","link"),e(w,"href","https://leetcode.com/problems/3sum/"),e(w,"target","_blank"),e(w,"class","svelte-vf5nlj"),e(L,"class","svelte-vf5nlj"),e(j,"id","description"),e(j,"class","svelte-vf5nlj"),e(rt,"class","svelte-vf5nlj"),e(U,"id","block"),e(U,"class","svelte-vf5nlj"),e(ot,"class","svelte-vf5nlj"),e(B,"id","block"),e(B,"class","svelte-vf5nlj"),e(it,"class","svelte-vf5nlj"),e(ct,"class","svelte-vf5nlj"),e(V,"id","block"),e(V,"class","svelte-vf5nlj"),e(y,"id","link"),e(y,"href",`${gn}/blind75/twoSum2`),e(y,"class","svelte-vf5nlj"),e(b,"class","svelte-vf5nlj"),e(H,"id","block"),e(H,"class","svelte-vf5nlj"),e(d,"id","explanation"),e(d,"class","svelte-vf5nlj"),e(J,"id","block"),e(J,"class","svelte-vf5nlj"),e(k,"class","svelte-vf5nlj"),e(ut,"class","svelte-vf5nlj"),e(h,"id","code"),e(h,"class","svelte-vf5nlj"),e(P,"type","button"),e(P,"class","nes-btn is-primary svelte-vf5nlj"),e(P,"href",`${gn}/blind75`),e(m,"class","container svelte-vf5nlj"),e(dt,"class","svelte-vf5nlj"),e(E,"class","main svelte-vf5nlj")},m(i,p){xt(i,v,p),t(v,vt),t(v,Nt),t(v,pt),t(v,Lt),t(v,_t),t(_t,Ot),xt(i,$t,p),X(T,i,p),xt(i,jt,p),xt(i,E,p),t(E,et),X(C,et,null),t(E,Ut),t(E,m),t(m,$),X(D,$,null),t($,Wt),t($,Et),t(Et,Bt),t($,Rt),t($,nt),t(nt,Vt),t(m,zt),t(m,g),t(g,st),t(st,x),t(x,Ht),t(g,Mt),t(g,lt),t(lt,I),t(I,Ft),t(g,Jt),t(g,at),t(at,A),t(A,qt),t(m,Gt),t(m,j),X(N,j,null),t(j,Kt),t(j,L),t(L,Qt),t(L,w),t(w,Xt),t(m,Yt),t(m,d),X(O,d,null),t(d,Zt),t(d,rt),t(rt,te),t(d,ee),t(d,U),t(U,W),t(W,ne),t(W,se),t(W,le),t(d,ae),t(d,ot),t(ot,re),t(d,oe),t(d,B),t(B,R),t(R,ie),t(R,ce),t(R,ue),t(d,de),t(d,it),t(it,fe),t(d,me),t(d,ct),t(ct,he),t(d,ve),t(d,V),t(V,z),t(z,pe),t(z,_e),t(z,Ee),t(d,ge),t(d,b),t(b,$e),t(b,y),t(y,je),t(b,we),t(d,be),t(d,H),t(H,M),t(M,ye),t(M,ke),t(M,Pe),t(m,Se),t(m,h),X(F,h,null),t(h,Te),t(h,J),t(J,q),t(q,Ce),t(q,De),t(q,xe),t(h,Ie),t(h,k),t(k,Ae),t(k,gt),t(gt,Ne),t(k,Le),t(h,Oe),t(h,ut),t(ut,Ue),t(m,We),t(m,P),t(P,Be),t(E,Re),t(E,dt),X(G,dt,null),wt=!0},p:kn,i(i){wt||(Y(T.$$.fragment,i),Y(C.$$.fragment,i),Y(D.$$.fragment,i),Y(N.$$.fragment,i),Y(O.$$.fragment,i),Y(F.$$.fragment,i),Y(G.$$.fragment,i),wt=!0)},o(i){Z(T.$$.fragment,i),Z(C.$$.fragment,i),Z(D.$$.fragment,i),Z(N.$$.fragment,i),Z(O.$$.fragment,i),Z(F.$$.fragment,i),Z(G.$$.fragment,i),wt=!1},d(i){i&&n(v),i&&n($t),tt(T,i),i&&n(jt),i&&n(E),tt(C),tt(D),tt(N),tt(O),tt(F),tt(G)}}}const At="15. 3Sum";class Nn extends jn{constructor(v){super(),wn(this,v,null,Cn,bn,{})}}export{Nn as default};
