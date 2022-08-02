import{S as wn,i as bn,s as kn,e as n,k as l,t as o,w as R,c as a,a as r,m as u,h as i,d as e,x as V,b as d,f as yn,g as xt,J as t,y as z,E as Pn,q as H,o as M,B as F}from"../../chunks/index-cd4245c1.js";import{b as gn}from"../../chunks/paths-c8fbcc1d.js";import{S as Sn,N as Tn,F as jn}from"../../chunks/Footer-8b9c5841.js";import{T as It}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function Cn($n){let h,ot,Nt,it,Lt,st,Ot,$t,P,wt,_,lt,S,Ut,f,$,T,Wt,ut,Bt,Rt,J,Vt,zt,g,dt,q,Ht,Mt,ct,G,Ft,Jt,mt,K,qt,Gt,w,j,Kt,Q,Qt,b,Xt,Yt,c,C,Zt,ft,te,ee,X,D,ne,ze=`
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
				`,ae,re,oe,ht,ie,se,Y,x,le,He=`
        ...
        def threeSum(self, nums: List[int]) -> List[List[int]]:
            sol=[]
            nums.sort()
            for i in range(len(nums)-2):
        ...

        OUTPUT: [[-1,-1,2],[-1,0,1],[-1,0,1]]
				`,ue,de,ce,pt,me,fe,vt,he,pe,Z,I,ve,Me=`
        ...
        nums.sort()
        sol=[]
        for i in range(len(nums)-2):
            if(i>0 and nums[i]==nums[i-1]):
                continue
            for j in range(i+1,len(nums)-1):
        ...

        OUTPUT: [[-1,-1,2],[-1,0,1]]
				`,Ee,_e,ge,A,$e,N,we,be,ke,tt,L,ye,Fe=`
        ...
         else:
            sol.append([nums[i],nums[l],nums[r]])
                l+=1
            while((l<r) and nums[l]==nums[l-1]):
                l+=1
        ...
				`,Pe,Se,Te,p,O,je,et,U,Ce,Je=`
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
				`,De,xe,Ie,W,Ae,Et,Ne,Le,Oe,_t,Ue,We,k,Be,Re,gt,B,bt;return P=new Sn({}),S=new Tn({props:{curPage:"Blog"}}),T=new It({props:{type:2,title:At}}),j=new It({props:{type:5,title:"Description"}}),C=new It({props:{type:5,title:"Explanation"}}),O=new It({props:{type:5,title:"Code (Python)"}}),B=new jn({}),{c(){h=n("head"),ot=n("meta"),Nt=l(),it=n("meta"),Lt=l(),st=n("title"),Ot=o(At),$t=l(),R(P.$$.fragment),wt=l(),_=n("main"),lt=n("header"),R(S.$$.fragment),Ut=l(),f=n("main"),$=n("div"),R(T.$$.fragment),Wt=l(),ut=n("h4"),Bt=o("Leetcode Blind 75"),Rt=l(),J=n("h5"),Vt=o("22th June 2022 ~ Dion Pinto"),zt=l(),g=n("div"),dt=n("div"),q=n("a"),Ht=o("Description"),Mt=l(),ct=n("div"),G=n("a"),Ft=o("Explanation"),Jt=l(),mt=n("div"),K=n("a"),qt=o("Code"),Gt=l(),w=n("section"),R(j.$$.fragment),Kt=l(),Q=n("p"),Qt=o(`Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i
				!= j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set
				must not contain duplicate triplets.

				`),b=n("a"),Xt=o("(Problem)"),Yt=l(),c=n("section"),R(C.$$.fragment),Zt=l(),ft=n("p"),te=o(`I believe that 3Sum becomes rather messy because of the handling of duplicates. We can see
				this with the following brute force approach (without handling of duplicates).`),ee=l(),X=n("pre"),D=n("code"),ne=o(`
				`),ae=o(ze),re=o(`			
			`),oe=l(),ht=n("p"),ie=o(`In the above output we can notice [-1,0,1] is repeated twice with the order being different.
				We can solve the order issue by sorting the input array.`),se=l(),Y=n("pre"),x=n("code"),le=o(`
				`),ue=o(He),de=o(`			
			`),ce=l(),pt=n("p"),me=o(`Cool now we atleast get the duplicates in order.Now we can focus on eliminating the
				duplicates. We can notice that if we just skip the repeating values after sorting we can
				eliminate the duplicates.`),fe=l(),vt=n("p"),he=o("We can use the following code to do so."),pe=l(),Z=n("pre"),I=n("code"),ve=o(`
				`),Ee=o(Me),_e=o(`			
			`),ge=l(),A=n("p"),$e=o("Now finally, we can move onto a more optimized soluton. As we have seen in "),N=n("a"),we=o("(two Sum 2)."),be=o(`
				Utilizing a 2 pointer approach to find the j -> nums[l] and k -> nums[r] values. ending with
				a another check to ensure no duplicates occur.`),ke=l(),tt=n("pre"),L=n("code"),ye=o(`
				`),Pe=o(Fe),Se=o(`			
			`),Te=l(),p=n("section"),R(O.$$.fragment),je=l(),et=n("pre"),U=n("code"),Ce=o(`
				`),De=o(Je),xe=o(`			
			`),Ie=l(),W=n("p"),Ae=o("Time Complexity => o(n"),Et=n("sup"),Ne=o("2"),Le=o(")"),Oe=l(),_t=n("p"),Ue=o("Space Complexity => o(1)"),We=l(),k=n("a"),Be=o("Back"),Re=l(),gt=n("footer"),R(B.$$.fragment),this.h()},l(s){h=a(s,"HEAD",{});var v=r(h);ot=a(v,"META",{name:!0,content:!0}),Nt=u(v),it=a(v,"META",{name:!0,content:!0}),Lt=u(v),st=a(v,"TITLE",{});var qe=r(st);Ot=i(qe,At),qe.forEach(e),v.forEach(e),$t=u(s),V(P.$$.fragment,s),wt=u(s),_=a(s,"MAIN",{class:!0});var nt=r(_);lt=a(nt,"HEADER",{});var Ge=r(lt);V(S.$$.fragment,Ge),Ge.forEach(e),Ut=u(nt),f=a(nt,"MAIN",{class:!0});var E=r(f);$=a(E,"DIV",{id:!0});var at=r($);V(T.$$.fragment,at),Wt=u(at),ut=a(at,"H4",{});var Ke=r(ut);Bt=i(Ke,"Leetcode Blind 75"),Ke.forEach(e),Rt=u(at),J=a(at,"H5",{style:!0});var Qe=r(J);Vt=i(Qe,"22th June 2022 ~ Dion Pinto"),Qe.forEach(e),at.forEach(e),zt=u(E),g=a(E,"DIV",{id:!0,class:!0});var rt=r(g);dt=a(rt,"DIV",{});var Xe=r(dt);q=a(Xe,"A",{href:!0});var Ye=r(q);Ht=i(Ye,"Description"),Ye.forEach(e),Xe.forEach(e),Mt=u(rt),ct=a(rt,"DIV",{});var Ze=r(ct);G=a(Ze,"A",{href:!0});var tn=r(G);Ft=i(tn,"Explanation"),tn.forEach(e),Ze.forEach(e),Jt=u(rt),mt=a(rt,"DIV",{});var en=r(mt);K=a(en,"A",{href:!0});var nn=r(K);qt=i(nn,"Code"),nn.forEach(e),en.forEach(e),rt.forEach(e),Gt=u(E),w=a(E,"SECTION",{id:!0});var kt=r(w);V(j.$$.fragment,kt),Kt=u(kt),Q=a(kt,"P",{});var Ve=r(Q);Qt=i(Ve,`Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i
				!= j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set
				must not contain duplicate triplets.

				`),b=a(Ve,"A",{id:!0,href:!0,target:!0});var an=r(b);Xt=i(an,"(Problem)"),an.forEach(e),Ve.forEach(e),kt.forEach(e),Yt=u(E),c=a(E,"SECTION",{id:!0});var m=r(c);V(C.$$.fragment,m),Zt=u(m),ft=a(m,"P",{});var rn=r(ft);te=i(rn,`I believe that 3Sum becomes rather messy because of the handling of duplicates. We can see
				this with the following brute force approach (without handling of duplicates).`),rn.forEach(e),ee=u(m),X=a(m,"PRE",{id:!0});var on=r(X);D=a(on,"CODE",{});var yt=r(D);ne=i(yt,`
				`),ae=i(yt,ze),re=i(yt,`			
			`),yt.forEach(e),on.forEach(e),oe=u(m),ht=a(m,"P",{});var sn=r(ht);ie=i(sn,`In the above output we can notice [-1,0,1] is repeated twice with the order being different.
				We can solve the order issue by sorting the input array.`),sn.forEach(e),se=u(m),Y=a(m,"PRE",{id:!0});var ln=r(Y);x=a(ln,"CODE",{});var Pt=r(x);le=i(Pt,`
				`),ue=i(Pt,He),de=i(Pt,`			
			`),Pt.forEach(e),ln.forEach(e),ce=u(m),pt=a(m,"P",{});var un=r(pt);me=i(un,`Cool now we atleast get the duplicates in order.Now we can focus on eliminating the
				duplicates. We can notice that if we just skip the repeating values after sorting we can
				eliminate the duplicates.`),un.forEach(e),fe=u(m),vt=a(m,"P",{});var dn=r(vt);he=i(dn,"We can use the following code to do so."),dn.forEach(e),pe=u(m),Z=a(m,"PRE",{id:!0});var cn=r(Z);I=a(cn,"CODE",{});var St=r(I);ve=i(St,`
				`),Ee=i(St,Me),_e=i(St,`			
			`),St.forEach(e),cn.forEach(e),ge=u(m),A=a(m,"P",{});var Tt=r(A);$e=i(Tt,"Now finally, we can move onto a more optimized soluton. As we have seen in "),N=a(Tt,"A",{id:!0,href:!0});var mn=r(N);we=i(mn,"(two Sum 2)."),mn.forEach(e),be=i(Tt,`
				Utilizing a 2 pointer approach to find the j -> nums[l] and k -> nums[r] values. ending with
				a another check to ensure no duplicates occur.`),Tt.forEach(e),ke=u(m),tt=a(m,"PRE",{id:!0});var fn=r(tt);L=a(fn,"CODE",{});var jt=r(L);ye=i(jt,`
				`),Pe=i(jt,Fe),Se=i(jt,`			
			`),jt.forEach(e),fn.forEach(e),m.forEach(e),Te=u(E),p=a(E,"SECTION",{id:!0});var y=r(p);V(O.$$.fragment,y),je=u(y),et=a(y,"PRE",{id:!0});var hn=r(et);U=a(hn,"CODE",{});var Ct=r(U);Ce=i(Ct,`
				`),De=i(Ct,Je),xe=i(Ct,`			
			`),Ct.forEach(e),hn.forEach(e),Ie=u(y),W=a(y,"P",{});var Dt=r(W);Ae=i(Dt,"Time Complexity => o(n"),Et=a(Dt,"SUP",{});var pn=r(Et);Ne=i(pn,"2"),pn.forEach(e),Le=i(Dt,")"),Dt.forEach(e),Oe=u(y),_t=a(y,"P",{});var vn=r(_t);Ue=i(vn,"Space Complexity => o(1)"),vn.forEach(e),y.forEach(e),We=u(E),k=a(E,"A",{type:!0,class:!0,href:!0});var En=r(k);Be=i(En,"Back"),En.forEach(e),E.forEach(e),Re=u(nt),gt=a(nt,"FOOTER",{});var _n=r(gt);V(B.$$.fragment,_n),_n.forEach(e),nt.forEach(e),this.h()},h(){d(ot,"name","author"),d(ot,"content","Dion Pinto"),d(it,"name","description"),d(it,"content",`Leetcode Blind 75 ${At}`),yn(J,"font-style","italic"),d($,"id","title"),d(q,"href","#description"),d(G,"href","#explanation"),d(K,"href","#code"),d(g,"id","index"),d(g,"class","nes-container is-rounded is-dark"),d(b,"id","link"),d(b,"href","https://leetcode.com/problems/3sum/"),d(b,"target","_blank"),d(w,"id","description"),d(X,"id","block"),d(Y,"id","block"),d(Z,"id","block"),d(N,"id","link"),d(N,"href",`${gn}/blind75/twoSum2`),d(tt,"id","block"),d(c,"id","explanation"),d(et,"id","block"),d(p,"id","code"),d(k,"type","button"),d(k,"class","nes-btn is-primary"),d(k,"href",`${gn}/blind75`),d(f,"class","container"),d(_,"class","main")},m(s,v){xt(s,h,v),t(h,ot),t(h,Nt),t(h,it),t(h,Lt),t(h,st),t(st,Ot),xt(s,$t,v),z(P,s,v),xt(s,wt,v),xt(s,_,v),t(_,lt),z(S,lt,null),t(_,Ut),t(_,f),t(f,$),z(T,$,null),t($,Wt),t($,ut),t(ut,Bt),t($,Rt),t($,J),t(J,Vt),t(f,zt),t(f,g),t(g,dt),t(dt,q),t(q,Ht),t(g,Mt),t(g,ct),t(ct,G),t(G,Ft),t(g,Jt),t(g,mt),t(mt,K),t(K,qt),t(f,Gt),t(f,w),z(j,w,null),t(w,Kt),t(w,Q),t(Q,Qt),t(Q,b),t(b,Xt),t(f,Yt),t(f,c),z(C,c,null),t(c,Zt),t(c,ft),t(ft,te),t(c,ee),t(c,X),t(X,D),t(D,ne),t(D,ae),t(D,re),t(c,oe),t(c,ht),t(ht,ie),t(c,se),t(c,Y),t(Y,x),t(x,le),t(x,ue),t(x,de),t(c,ce),t(c,pt),t(pt,me),t(c,fe),t(c,vt),t(vt,he),t(c,pe),t(c,Z),t(Z,I),t(I,ve),t(I,Ee),t(I,_e),t(c,ge),t(c,A),t(A,$e),t(A,N),t(N,we),t(A,be),t(c,ke),t(c,tt),t(tt,L),t(L,ye),t(L,Pe),t(L,Se),t(f,Te),t(f,p),z(O,p,null),t(p,je),t(p,et),t(et,U),t(U,Ce),t(U,De),t(U,xe),t(p,Ie),t(p,W),t(W,Ae),t(W,Et),t(Et,Ne),t(W,Le),t(p,Oe),t(p,_t),t(_t,Ue),t(f,We),t(f,k),t(k,Be),t(_,Re),t(_,gt),z(B,gt,null),bt=!0},p:Pn,i(s){bt||(H(P.$$.fragment,s),H(S.$$.fragment,s),H(T.$$.fragment,s),H(j.$$.fragment,s),H(C.$$.fragment,s),H(O.$$.fragment,s),H(B.$$.fragment,s),bt=!0)},o(s){M(P.$$.fragment,s),M(S.$$.fragment,s),M(T.$$.fragment,s),M(j.$$.fragment,s),M(C.$$.fragment,s),M(O.$$.fragment,s),M(B.$$.fragment,s),bt=!1},d(s){s&&e(h),s&&e($t),F(P,s),s&&e(wt),s&&e(_),F(S),F(T),F(j),F(C),F(O),F(B)}}}const At="15. 3Sum";class Ln extends wn{constructor(h){super(),bn(this,h,null,Cn,kn,{})}}export{Ln as default};
