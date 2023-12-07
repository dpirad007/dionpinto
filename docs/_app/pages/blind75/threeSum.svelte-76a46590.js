import{S as wn,i as bn,s as yn,e as n,k as l,t as o,w as R,c as a,a as r,m as u,h as i,d as e,x as V,b as d,f as kn,g as xt,J as t,y as z,E as Pn,q as H,o as M,B as q}from"../../chunks/index-cd4245c1.js";import{b as gn}from"../../chunks/paths-c8fbcc1d.js";import{S as Sn,N as Tn,F as jn}from"../../chunks/Footer-8b9c5841.js";import{T as It}from"../../chunks/Title-6ea0487f.js";/* empty css                           */function Cn($n){let f,ot,Nt,it,Lt,st,Ot,$t,P,wt,E,lt,S,Ut,h,$,T,Wt,ut,Bt,Rt,F,Vt,zt,g,dt,J,Ht,Mt,ct,G,qt,Ft,mt,K,Jt,Gt,w,j,Kt,Q,Qt,b,Xt,Yt,c,C,Zt,ht,te,ee,X,D,ne,ze=`
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
				`,ae,re,oe,ft,ie,se,Y,x,le,He=`
        ...
        def threeSum(self, nums: List[int]) -> List[List[int]]:
            sol=[]
            nums.sort()
            for i in range(len(nums)-2):
        ...

        OUTPUT: [[-1,-1,2],[-1,0,1],[-1,0,1]]
				`,ue,de,ce,pt,me,he,vt,fe,pe,Z,I,ve,Me=`
        ...
        nums.sort()
        sol=[]
        for i in range(len(nums)-2):
            if(i>0 and nums[i]==nums[i-1]):
                continue
            for j in range(i+1,len(nums)-1):
        ...

        OUTPUT: [[-1,-1,2],[-1,0,1]]
				`,_e,Ee,ge,A,$e,N,we,be,ye,tt,L,ke,qe=`
        ...
         else:
            sol.append([nums[i],nums[l],nums[r]])
                l+=1
            while((l<r) and nums[l]==nums[l-1]):
                l+=1
        ...
				`,Pe,Se,Te,p,O,je,et,U,Ce,Fe=`
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
				`,De,xe,Ie,W,Ae,_t,Ne,Le,Oe,Et,Ue,We,y,Be,Re,gt,B,bt;return P=new Sn({}),S=new Tn({props:{curPage:"Blog"}}),T=new It({props:{type:2,title:At}}),j=new It({props:{type:5,title:"Description"}}),C=new It({props:{type:5,title:"Explanation"}}),O=new It({props:{type:5,title:"Code (Python)"}}),B=new jn({}),{c(){f=n("head"),ot=n("meta"),Nt=l(),it=n("meta"),Lt=l(),st=n("title"),Ot=o(At),$t=l(),R(P.$$.fragment),wt=l(),E=n("main"),lt=n("header"),R(S.$$.fragment),Ut=l(),h=n("main"),$=n("div"),R(T.$$.fragment),Wt=l(),ut=n("h4"),Bt=o("Leetcode Blind 75"),Rt=l(),F=n("h5"),Vt=o("22th June 2022 ~ Dion Pinto"),zt=l(),g=n("div"),dt=n("div"),J=n("a"),Ht=o("Description"),Mt=l(),ct=n("div"),G=n("a"),qt=o("Explanation"),Ft=l(),mt=n("div"),K=n("a"),Jt=o("Code"),Gt=l(),w=n("section"),R(j.$$.fragment),Kt=l(),Q=n("p"),Qt=o(`Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i
				!= j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set
				must not contain duplicate triplets.

				`),b=n("a"),Xt=o("(Problem)"),Yt=l(),c=n("section"),R(C.$$.fragment),Zt=l(),ht=n("p"),te=o(`I believe that 3Sum becomes rather messy because of the handling of duplicates. We can see
				this with the following brute force approach (without handling of duplicates).`),ee=l(),X=n("pre"),D=n("code"),ne=o(`
				`),ae=o(ze),re=o(`			
			`),oe=l(),ft=n("p"),ie=o(`In the above output we can notice [-1,0,1] is repeated twice with the order being different.
				We can solve the order issue by sorting the input array.`),se=l(),Y=n("pre"),x=n("code"),le=o(`
				`),ue=o(He),de=o(`			
			`),ce=l(),pt=n("p"),me=o(`Cool now we atleast get the duplicates in order.Now we can focus on eliminating the
				duplicates. We can notice that if we just skip the repeating values after sorting we can
				eliminate the duplicates.`),he=l(),vt=n("p"),fe=o("We can use the following code to do so."),pe=l(),Z=n("pre"),I=n("code"),ve=o(`
				`),_e=o(Me),Ee=o(`			
			`),ge=l(),A=n("p"),$e=o("Now finally, we can move onto a more optimized soluton. As we have seen in "),N=n("a"),we=o("(two Sum 2)."),be=o(`
				Utilizing a 2 pointer approach to find the j -> nums[l] and k -> nums[r] values. ending with
				a another check to ensure no duplicates occur.`),ye=l(),tt=n("pre"),L=n("code"),ke=o(`
				`),Pe=o(qe),Se=o(`			
			`),Te=l(),p=n("section"),R(O.$$.fragment),je=l(),et=n("pre"),U=n("code"),Ce=o(`
				`),De=o(Fe),xe=o(`			
			`),Ie=l(),W=n("p"),Ae=o("Time Complexity => o(n"),_t=n("sup"),Ne=o("2"),Le=o(")"),Oe=l(),Et=n("p"),Ue=o("Space Complexity => o(1)"),We=l(),y=n("a"),Be=o("Back"),Re=l(),gt=n("footer"),R(B.$$.fragment),this.h()},l(s){f=a(s,"HEAD",{});var v=r(f);ot=a(v,"META",{name:!0,content:!0}),Nt=u(v),it=a(v,"META",{name:!0,content:!0}),Lt=u(v),st=a(v,"TITLE",{});var Je=r(st);Ot=i(Je,At),Je.forEach(e),v.forEach(e),$t=u(s),V(P.$$.fragment,s),wt=u(s),E=a(s,"MAIN",{class:!0});var nt=r(E);lt=a(nt,"HEADER",{});var Ge=r(lt);V(S.$$.fragment,Ge),Ge.forEach(e),Ut=u(nt),h=a(nt,"MAIN",{class:!0});var _=r(h);$=a(_,"DIV",{id:!0});var at=r($);V(T.$$.fragment,at),Wt=u(at),ut=a(at,"H4",{});var Ke=r(ut);Bt=i(Ke,"Leetcode Blind 75"),Ke.forEach(e),Rt=u(at),F=a(at,"H5",{style:!0});var Qe=r(F);Vt=i(Qe,"22th June 2022 ~ Dion Pinto"),Qe.forEach(e),at.forEach(e),zt=u(_),g=a(_,"DIV",{id:!0,class:!0});var rt=r(g);dt=a(rt,"DIV",{});var Xe=r(dt);J=a(Xe,"A",{href:!0});var Ye=r(J);Ht=i(Ye,"Description"),Ye.forEach(e),Xe.forEach(e),Mt=u(rt),ct=a(rt,"DIV",{});var Ze=r(ct);G=a(Ze,"A",{href:!0});var tn=r(G);qt=i(tn,"Explanation"),tn.forEach(e),Ze.forEach(e),Ft=u(rt),mt=a(rt,"DIV",{});var en=r(mt);K=a(en,"A",{href:!0});var nn=r(K);Jt=i(nn,"Code"),nn.forEach(e),en.forEach(e),rt.forEach(e),Gt=u(_),w=a(_,"SECTION",{id:!0});var yt=r(w);V(j.$$.fragment,yt),Kt=u(yt),Q=a(yt,"P",{});var Ve=r(Q);Qt=i(Ve,`Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i
				!= j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set
				must not contain duplicate triplets.

				`),b=a(Ve,"A",{id:!0,href:!0,target:!0});var an=r(b);Xt=i(an,"(Problem)"),an.forEach(e),Ve.forEach(e),yt.forEach(e),Yt=u(_),c=a(_,"SECTION",{id:!0});var m=r(c);V(C.$$.fragment,m),Zt=u(m),ht=a(m,"P",{});var rn=r(ht);te=i(rn,`I believe that 3Sum becomes rather messy because of the handling of duplicates. We can see
				this with the following brute force approach (without handling of duplicates).`),rn.forEach(e),ee=u(m),X=a(m,"PRE",{id:!0});var on=r(X);D=a(on,"CODE",{});var kt=r(D);ne=i(kt,`
				`),ae=i(kt,ze),re=i(kt,`			
			`),kt.forEach(e),on.forEach(e),oe=u(m),ft=a(m,"P",{});var sn=r(ft);ie=i(sn,`In the above output we can notice [-1,0,1] is repeated twice with the order being different.
				We can solve the order issue by sorting the input array.`),sn.forEach(e),se=u(m),Y=a(m,"PRE",{id:!0});var ln=r(Y);x=a(ln,"CODE",{});var Pt=r(x);le=i(Pt,`
				`),ue=i(Pt,He),de=i(Pt,`			
			`),Pt.forEach(e),ln.forEach(e),ce=u(m),pt=a(m,"P",{});var un=r(pt);me=i(un,`Cool now we atleast get the duplicates in order.Now we can focus on eliminating the
				duplicates. We can notice that if we just skip the repeating values after sorting we can
				eliminate the duplicates.`),un.forEach(e),he=u(m),vt=a(m,"P",{});var dn=r(vt);fe=i(dn,"We can use the following code to do so."),dn.forEach(e),pe=u(m),Z=a(m,"PRE",{id:!0});var cn=r(Z);I=a(cn,"CODE",{});var St=r(I);ve=i(St,`
				`),_e=i(St,Me),Ee=i(St,`			
			`),St.forEach(e),cn.forEach(e),ge=u(m),A=a(m,"P",{});var Tt=r(A);$e=i(Tt,"Now finally, we can move onto a more optimized soluton. As we have seen in "),N=a(Tt,"A",{id:!0,href:!0});var mn=r(N);we=i(mn,"(two Sum 2)."),mn.forEach(e),be=i(Tt,`
				Utilizing a 2 pointer approach to find the j -> nums[l] and k -> nums[r] values. ending with
				a another check to ensure no duplicates occur.`),Tt.forEach(e),ye=u(m),tt=a(m,"PRE",{id:!0});var hn=r(tt);L=a(hn,"CODE",{});var jt=r(L);ke=i(jt,`
				`),Pe=i(jt,qe),Se=i(jt,`			
			`),jt.forEach(e),hn.forEach(e),m.forEach(e),Te=u(_),p=a(_,"SECTION",{id:!0});var k=r(p);V(O.$$.fragment,k),je=u(k),et=a(k,"PRE",{id:!0});var fn=r(et);U=a(fn,"CODE",{});var Ct=r(U);Ce=i(Ct,`
				`),De=i(Ct,Fe),xe=i(Ct,`			
			`),Ct.forEach(e),fn.forEach(e),Ie=u(k),W=a(k,"P",{});var Dt=r(W);Ae=i(Dt,"Time Complexity => o(n"),_t=a(Dt,"SUP",{});var pn=r(_t);Ne=i(pn,"2"),pn.forEach(e),Le=i(Dt,")"),Dt.forEach(e),Oe=u(k),Et=a(k,"P",{});var vn=r(Et);Ue=i(vn,"Space Complexity => o(1)"),vn.forEach(e),k.forEach(e),We=u(_),y=a(_,"A",{type:!0,class:!0,href:!0});var _n=r(y);Be=i(_n,"Back"),_n.forEach(e),_.forEach(e),Re=u(nt),gt=a(nt,"FOOTER",{});var En=r(gt);V(B.$$.fragment,En),En.forEach(e),nt.forEach(e),this.h()},h(){d(ot,"name","author"),d(ot,"content","Dion Pinto"),d(it,"name","description"),d(it,"content",`Leetcode Blind 75 ${At}`),kn(F,"font-style","italic"),d($,"id","title"),d(J,"href","#description"),d(G,"href","#explanation"),d(K,"href","#code"),d(g,"id","index"),d(g,"class","nes-container is-rounded is-dark"),d(b,"id","link"),d(b,"href","https://leetcode.com/problems/3sum/"),d(b,"target","_blank"),d(w,"id","description"),d(X,"id","block"),d(Y,"id","block"),d(Z,"id","block"),d(N,"id","link"),d(N,"href",`${gn}/blind75/twoSum2`),d(tt,"id","block"),d(c,"id","explanation"),d(et,"id","block"),d(p,"id","code"),d(y,"type","button"),d(y,"class","nes-btn is-primary"),d(y,"href",`${gn}/blind75`),d(h,"class","container svelte-qdub48"),d(E,"class","main")},m(s,v){xt(s,f,v),t(f,ot),t(f,Nt),t(f,it),t(f,Lt),t(f,st),t(st,Ot),xt(s,$t,v),z(P,s,v),xt(s,wt,v),xt(s,E,v),t(E,lt),z(S,lt,null),t(E,Ut),t(E,h),t(h,$),z(T,$,null),t($,Wt),t($,ut),t(ut,Bt),t($,Rt),t($,F),t(F,Vt),t(h,zt),t(h,g),t(g,dt),t(dt,J),t(J,Ht),t(g,Mt),t(g,ct),t(ct,G),t(G,qt),t(g,Ft),t(g,mt),t(mt,K),t(K,Jt),t(h,Gt),t(h,w),z(j,w,null),t(w,Kt),t(w,Q),t(Q,Qt),t(Q,b),t(b,Xt),t(h,Yt),t(h,c),z(C,c,null),t(c,Zt),t(c,ht),t(ht,te),t(c,ee),t(c,X),t(X,D),t(D,ne),t(D,ae),t(D,re),t(c,oe),t(c,ft),t(ft,ie),t(c,se),t(c,Y),t(Y,x),t(x,le),t(x,ue),t(x,de),t(c,ce),t(c,pt),t(pt,me),t(c,he),t(c,vt),t(vt,fe),t(c,pe),t(c,Z),t(Z,I),t(I,ve),t(I,_e),t(I,Ee),t(c,ge),t(c,A),t(A,$e),t(A,N),t(N,we),t(A,be),t(c,ye),t(c,tt),t(tt,L),t(L,ke),t(L,Pe),t(L,Se),t(h,Te),t(h,p),z(O,p,null),t(p,je),t(p,et),t(et,U),t(U,Ce),t(U,De),t(U,xe),t(p,Ie),t(p,W),t(W,Ae),t(W,_t),t(_t,Ne),t(W,Le),t(p,Oe),t(p,Et),t(Et,Ue),t(h,We),t(h,y),t(y,Be),t(E,Re),t(E,gt),z(B,gt,null),bt=!0},p:Pn,i(s){bt||(H(P.$$.fragment,s),H(S.$$.fragment,s),H(T.$$.fragment,s),H(j.$$.fragment,s),H(C.$$.fragment,s),H(O.$$.fragment,s),H(B.$$.fragment,s),bt=!0)},o(s){M(P.$$.fragment,s),M(S.$$.fragment,s),M(T.$$.fragment,s),M(j.$$.fragment,s),M(C.$$.fragment,s),M(O.$$.fragment,s),M(B.$$.fragment,s),bt=!1},d(s){s&&e(f),s&&e($t),q(P,s),s&&e(wt),s&&e(E),q(S),q(T),q(j),q(C),q(O),q(B)}}}const At="15. 3Sum";class Ln extends wn{constructor(f){super(),bn(this,f,null,Cn,yn,{})}}export{Ln as default};
