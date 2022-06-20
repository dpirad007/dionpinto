import{S as Ze,i as et,s as tt,e as a,k as o,t as m,w as R,c as n,a as l,m as i,h as u,d as s,x as G,b as t,f as rt,g as ne,J as e,y as j,E as st,q as z,o as K,B as Q}from"../../chunks/index-cd4245c1.js";import{b as at}from"../../chunks/paths-c8fbcc1d.js";import{S as nt,N as lt,F as ot}from"../../chunks/Footer-8b9c5841.js";import{T as Ne}from"../../chunks/Title-6ea0487f.js";function it(Ye){let f,U,oe,W,ie,X,de,Z,y,ee,p,B,x,ce,d,v,S,me,Y,ue,fe,q,he,pe,_,N,T,ve,$e,O,D,_e,we,w,I,ge,A,Ee,g,be,ye,c,C,xe,P,L,Se,Oe=`
    class Solution:
        def twoSum(self, numbers: List[int], target: int) -> List[int]:
            l,r=0,len(numbers)-1
            while(l<r):
                s=numbers[l]+numbers[r]
                if(s==target):
                    return [l+1,r+1]
                elif(s>target):
                    r-=1
                elif(s<target):
                    l+=1
				`,Te,De,Ie,H,Ae,Ce,M,Pe,Le,E,ke,Be,V,k,te;return y=new nt({}),x=new lt({props:{curPage:"Blog"}}),S=new Ne({props:{type:2,title:le}}),I=new Ne({props:{type:5,title:"Description"}}),C=new Ne({props:{type:5,title:"Code (Python) -> 2 pointer"}}),k=new ot({}),{c(){f=a("head"),U=a("meta"),oe=o(),W=a("meta"),ie=o(),X=a("title"),de=m(le),Z=o(),R(y.$$.fragment),ee=o(),p=a("main"),B=a("header"),R(x.$$.fragment),ce=o(),d=a("main"),v=a("div"),R(S.$$.fragment),me=o(),Y=a("h4"),ue=m("Leetcode Blind 75"),fe=o(),q=a("h5"),he=m("19th June 2022 ~ Dion Pinto"),pe=o(),_=a("div"),N=a("div"),T=a("a"),ve=m("Description"),$e=o(),O=a("div"),D=a("a"),_e=m("Code"),we=o(),w=a("section"),R(I.$$.fragment),ge=o(),A=a("p"),Ee=m(`Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
				find two numbers such that they add up to a specific target number. Let these two numbers be
				numbers[index1] and numbers[index2] where 1 less than equal index1 less than index2 less
				than equal numbers.length.

				`),g=a("a"),be=m("(Problem)"),ye=o(),c=a("section"),R(C.$$.fragment),xe=o(),P=a("pre"),L=a("code"),Se=m(`
				`),Te=m(Oe),De=m(`			
			`),Ie=o(),H=a("p"),Ae=m("Time Complexity => o(n)"),Ce=o(),M=a("p"),Pe=m("Space Complexity => o(1)"),Le=o(),E=a("a"),ke=m("Back"),Be=o(),V=a("footer"),R(k.$$.fragment),this.h()},l(r){f=n(r,"HEAD",{});var h=l(f);U=n(h,"META",{name:!0,content:!0}),oe=i(h),W=n(h,"META",{name:!0,content:!0}),ie=i(h),X=n(h,"TITLE",{});var He=l(X);de=u(He,le),He.forEach(s),h.forEach(s),Z=i(r),G(y.$$.fragment,r),ee=i(r),p=n(r,"MAIN",{class:!0});var F=l(p);B=n(F,"HEADER",{class:!0});var Me=l(B);G(x.$$.fragment,Me),Me.forEach(s),ce=i(F),d=n(F,"MAIN",{class:!0});var $=l(d);v=n($,"DIV",{id:!0});var J=l(v);G(S.$$.fragment,J),me=i(J),Y=n(J,"H4",{});var Ve=l(Y);ue=u(Ve,"Leetcode Blind 75"),Ve.forEach(s),fe=i(J),q=n(J,"H5",{style:!0});var Fe=l(q);he=u(Fe,"19th June 2022 ~ Dion Pinto"),Fe.forEach(s),J.forEach(s),pe=i($),_=n($,"DIV",{id:!0,class:!0});var re=l(_);N=n(re,"DIV",{class:!0});var Je=l(N);T=n(Je,"A",{href:!0,class:!0});var Re=l(T);ve=u(Re,"Description"),Re.forEach(s),Je.forEach(s),$e=i(re),O=n(re,"DIV",{class:!0});var Ge=l(O);D=n(Ge,"A",{href:!0,class:!0});var je=l(D);_e=u(je,"Code"),je.forEach(s),Ge.forEach(s),re.forEach(s),we=i($),w=n($,"SECTION",{id:!0,class:!0});var se=l(w);G(I.$$.fragment,se),ge=i(se),A=n(se,"P",{class:!0});var qe=l(A);Ee=u(qe,`Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
				find two numbers such that they add up to a specific target number. Let these two numbers be
				numbers[index1] and numbers[index2] where 1 less than equal index1 less than index2 less
				than equal numbers.length.

				`),g=n(qe,"A",{id:!0,href:!0,target:!0,class:!0});var ze=l(g);be=u(ze,"(Problem)"),ze.forEach(s),qe.forEach(s),se.forEach(s),ye=i($),c=n($,"SECTION",{id:!0,class:!0});var b=l(c);G(C.$$.fragment,b),xe=i(b),P=n(b,"PRE",{id:!0,class:!0});var Ke=l(P);L=n(Ke,"CODE",{});var ae=l(L);Se=u(ae,`
				`),Te=u(ae,Oe),De=u(ae,`			
			`),ae.forEach(s),Ke.forEach(s),Ie=i(b),H=n(b,"P",{class:!0});var Qe=l(H);Ae=u(Qe,"Time Complexity => o(n)"),Qe.forEach(s),Ce=i(b),M=n(b,"P",{class:!0});var Ue=l(M);Pe=u(Ue,"Space Complexity => o(1)"),Ue.forEach(s),b.forEach(s),Le=i($),E=n($,"A",{type:!0,class:!0,href:!0});var We=l(E);ke=u(We,"Back"),We.forEach(s),$.forEach(s),Be=i(F),V=n(F,"FOOTER",{class:!0});var Xe=l(V);G(k.$$.fragment,Xe),Xe.forEach(s),F.forEach(s),this.h()},h(){t(U,"name","author"),t(U,"content","Dion Pinto"),t(W,"name","description"),t(W,"content",`Leetcode Blind 75 ${le}`),t(B,"class","svelte-r754dw"),rt(q,"font-style","italic"),t(v,"id","title"),t(T,"href","#description"),t(T,"class","svelte-r754dw"),t(N,"class","svelte-r754dw"),t(D,"href","#code"),t(D,"class","svelte-r754dw"),t(O,"class","svelte-r754dw"),t(_,"id","index"),t(_,"class","nes-container is-rounded is-dark svelte-r754dw"),t(g,"id","link"),t(g,"href","https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"),t(g,"target","_blank"),t(g,"class","svelte-r754dw"),t(A,"class","svelte-r754dw"),t(w,"id","description"),t(w,"class","svelte-r754dw"),t(P,"id","block"),t(P,"class","svelte-r754dw"),t(H,"class","svelte-r754dw"),t(M,"class","svelte-r754dw"),t(c,"id","code"),t(c,"class","svelte-r754dw"),t(E,"type","button"),t(E,"class","nes-btn is-primary svelte-r754dw"),t(E,"href",`${at}/blind75`),t(d,"class","container svelte-r754dw"),t(V,"class","svelte-r754dw"),t(p,"class","main svelte-r754dw")},m(r,h){ne(r,f,h),e(f,U),e(f,oe),e(f,W),e(f,ie),e(f,X),e(X,de),ne(r,Z,h),j(y,r,h),ne(r,ee,h),ne(r,p,h),e(p,B),j(x,B,null),e(p,ce),e(p,d),e(d,v),j(S,v,null),e(v,me),e(v,Y),e(Y,ue),e(v,fe),e(v,q),e(q,he),e(d,pe),e(d,_),e(_,N),e(N,T),e(T,ve),e(_,$e),e(_,O),e(O,D),e(D,_e),e(d,we),e(d,w),j(I,w,null),e(w,ge),e(w,A),e(A,Ee),e(A,g),e(g,be),e(d,ye),e(d,c),j(C,c,null),e(c,xe),e(c,P),e(P,L),e(L,Se),e(L,Te),e(L,De),e(c,Ie),e(c,H),e(H,Ae),e(c,Ce),e(c,M),e(M,Pe),e(d,Le),e(d,E),e(E,ke),e(p,Be),e(p,V),j(k,V,null),te=!0},p:st,i(r){te||(z(y.$$.fragment,r),z(x.$$.fragment,r),z(S.$$.fragment,r),z(I.$$.fragment,r),z(C.$$.fragment,r),z(k.$$.fragment,r),te=!0)},o(r){K(y.$$.fragment,r),K(x.$$.fragment,r),K(S.$$.fragment,r),K(I.$$.fragment,r),K(C.$$.fragment,r),K(k.$$.fragment,r),te=!1},d(r){r&&s(f),r&&s(Z),Q(y,r),r&&s(ee),r&&s(p),Q(x),Q(S),Q(I),Q(C),Q(k)}}}const le="167. Two Sum II - Input Array Is Sorted";class ft extends Ze{constructor(f){super(),et(this,f,null,it,tt,{})}}export{ft as default};
