import{S as Za,i as ts,s as es,w as z,k as n,e as a,t as o,x as P,m as d,c as s,a as r,d as l,h as i,b as e,f as as,a3 as ha,y as S,g as Qa,J as t,E as ss,q as N,o as C,B as D}from"../chunks/index-cd4245c1.js";import{S as ls,N as rs,F as os}from"../chunks/Footer-9c2a65ce.js";import{T as ct}from"../chunks/Title-6ea0487f.js";import"../chunks/paths-c8fbcc1d.js";function is(Xa){let O,Kt,$,pt,M,Yt,c,b,R,Bt,Pt,Wt,qt,vt,Jt,Ut,v,St,F,Qt,Xt,Nt,H,Zt,te,Ct,Y,ee,ae,Dt,B,se,le,Ot,W,re,oe,At,q,ie,ne,E,J,de,j,he,A,ce,pe,ve,U,fe,k,ue,ge,T,Q,me,ft,we,_e,m,X,$e,ut,Ee,ye,gt,be,ke,K,ca,Ie,f,Z,ze,mt,Pe,Se,tt,et,Ne,pa=`
  npm i @sveltejs/adapter-static
				`,Ce,De,Oe,V,Ae,Tt,jt,Te,je,Ke,at,st,Ve,va=`
  import adapter from '@sveltejs/adapter-static'; // was adapter-auto

  const dev = "production" === 'development'; // the first half is process->env->NODE_ENV
                                               // it is resolving to 'development'
                                               // (NOTE: use . instead of -> while typing in file for process env NODE_ENV)

  /** @type {import('@sveltejs/kit').Config} */
  const config = {
	  kit: {
		  adapter: adapter({
			  pages: 'docs',
			  assets: 'docs'
		  }),
		  paths: {
			  base: dev ? '' : '/dionpinto' //Your repo name here
		  },
		  prerender: {
			  default: true
		  }
	  }
  };

  export default config;
				`,Ge,xe,Le,wt,Me,Re,y,lt,Fe,_t,He,Ye,G,fa,Be,p,rt,We,$t,qe,Je,ot,it,Ue,ua=`
  npm run build
				`,Qe,Xe,Ze,Et,ta,ea,nt,dt,aa,ga=`
  git add docs

  git commit -m "Changes commited"

  git push
				`,sa,la,ra,yt,oa,ia,x,ma,na,bt,ht,Vt;return O=new ls({}),M=new rs({props:{curPage:"Blog"}}),R=new ct({props:{type:2,title:"SvelteKit on gh-pages"}}),J=new ct({props:{type:5,title:"Introduction"}}),Q=new ct({props:{type:5,title:"Initialization"}}),X=new ct({props:{type:5,title:"Configure Github Pages"}}),Z=new ct({props:{type:5,title:"Configure SvelteKit"}}),lt=new ct({props:{type:5,title:"Add .nojekyll file in static"}}),rt=new ct({props:{type:5,title:"Deploy"}}),ht=new os({}),{c(){z(O.$$.fragment),Kt=n(),$=a("main"),pt=a("header"),z(M.$$.fragment),Yt=n(),c=a("main"),b=a("div"),z(R.$$.fragment),Bt=n(),Pt=a("h4"),Wt=o("Publish SvelteKit Apps on gh-pages"),qt=n(),vt=a("h5"),Jt=o("12th May 2022 ~ Dion Pinto"),Ut=n(),v=a("div"),St=a("div"),F=a("a"),Qt=o("Introduction"),Xt=n(),Nt=a("div"),H=a("a"),Zt=o("Initialization"),te=n(),Ct=a("div"),Y=a("a"),ee=o("Configure Github Pages"),ae=n(),Dt=a("div"),B=a("a"),se=o("Configure SvelteKit"),le=n(),Ot=a("div"),W=a("a"),re=o("Add .nojekyll file in static"),oe=n(),At=a("div"),q=a("a"),ie=o("Deploy"),ne=n(),E=a("section"),z(J.$$.fragment),de=n(),j=a("p"),he=o(`I chose SvelteKit to build my portfolio website because I wanted to learn svelte or atleast
				get a feel for the framework. While utilising SvelteKit I came across some hurdles and
				challenges one of them being publishing the finished site, there are a plethora of resources
				available to publish a SvelteKit app to gh-pages however the approach via the svelteLand
				sveltekit blog site
				`),A=a("a"),ce=o("(Link)"),pe=o(" did not work for me (NOTE: I am a moron who makes a lot of mistakes!!!)"),ve=n(),U=a("p"),fe=o("You can find the git repository here "),k=a("a"),ue=o("(Link)"),ge=n(),T=a("section"),z(Q.$$.fragment),me=n(),ft=a("p"),we=o(`I am assuming that you already have created a SvelteKit application and a git repo for that
				application. If not, create them now.`),_e=n(),m=a("section"),z(X.$$.fragment),$e=n(),ut=a("p"),Ee=o(`The approach on the svelteLand blog was to host the site on a separate gh-pages branch on
				the /root folder, this would be my suggested approach as well as having a separate branch
				for the deployed jargon code is better, the main branch remains relatively clutter free.
				However, due to an unrelated error which I will come to later, I mistakenly thought this
				approach was wrong and I hosted the site in the /docs folder on the main branch (NOTE: Both
				of these approaches would work just fine.)`),ye=n(),gt=a("p"),be=o("You can configure it as follows: Go to the repository settings -> pages"),ke=n(),K=a("img"),Ie=n(),f=a("section"),z(Z.$$.fragment),ze=n(),mt=a("p"),Pe=o(`First we need to install the SvelteKit Static Adapter. It will output our app as a static
				set of files instead of a dynamic app.`),Se=n(),tt=a("pre"),et=a("code"),Ne=o(`
				`),Ce=o(pa),De=o(`			
			`),Oe=n(),V=a("p"),Ae=o("Now you need to edit "),Tt=a("i"),jt=a("u"),Te=o("svelte.config.js"),je=o(" as follows"),Ke=n(),at=a("pre"),st=a("code"),Ve=o(`
				`),Ge=o(va),xe=o(`			
			`),Le=n(),wt=a("p"),Me=o(`we target the /docs folder. (NOTE: this is beacuse of the approach I took hosting the site
				on main /docs on gh-pages)`),Re=n(),y=a("section"),z(lt.$$.fragment),Fe=n(),_t=a("p"),He=o("Add a empty .nojekyll in the static folder."),Ye=n(),G=a("img"),Be=n(),p=a("section"),z(rt.$$.fragment),We=n(),$t=a("p"),qe=o("We can finally deploy out application."),Je=n(),ot=a("pre"),it=a("code"),Ue=o(`
				`),Qe=o(ua),Xe=o(`			
			`),Ze=n(),Et=a("p"),ta=o("Commit and push your changes"),ea=n(),nt=a("pre"),dt=a("code"),aa=o(`
				`),sa=o(ga),la=o(`			
			`),ra=n(),yt=a("p"),oa=o("gh-pages will then deploy your site"),ia=n(),x=a("img"),na=n(),bt=a("footer"),z(ht.$$.fragment),this.h()},l(h){P(O.$$.fragment,h),Kt=d(h),$=s(h,"MAIN",{class:!0});var I=r($);pt=s(I,"HEADER",{class:!0});var wa=r(pt);P(M.$$.fragment,wa),wa.forEach(l),Yt=d(I),c=s(I,"MAIN",{class:!0});var u=r(c);b=s(u,"DIV",{id:!0});var kt=r(b);P(R.$$.fragment,kt),Bt=d(kt),Pt=s(kt,"H4",{});var _a=r(Pt);Wt=i(_a,"Publish SvelteKit Apps on gh-pages"),_a.forEach(l),qt=d(kt),vt=s(kt,"H5",{style:!0});var $a=r(vt);Jt=i($a,"12th May 2022 ~ Dion Pinto"),$a.forEach(l),kt.forEach(l),Ut=d(u),v=s(u,"DIV",{id:!0,class:!0});var w=r(v);St=s(w,"DIV",{});var Ea=r(St);F=s(Ea,"A",{href:!0,class:!0});var ya=r(F);Qt=i(ya,"Introduction"),ya.forEach(l),Ea.forEach(l),Xt=d(w),Nt=s(w,"DIV",{});var ba=r(Nt);H=s(ba,"A",{href:!0,class:!0});var ka=r(H);Zt=i(ka,"Initialization"),ka.forEach(l),ba.forEach(l),te=d(w),Ct=s(w,"DIV",{});var Ia=r(Ct);Y=s(Ia,"A",{href:!0,class:!0});var za=r(Y);ee=i(za,"Configure Github Pages"),za.forEach(l),Ia.forEach(l),ae=d(w),Dt=s(w,"DIV",{});var Pa=r(Dt);B=s(Pa,"A",{href:!0,class:!0});var Sa=r(B);se=i(Sa,"Configure SvelteKit"),Sa.forEach(l),Pa.forEach(l),le=d(w),Ot=s(w,"DIV",{});var Na=r(Ot);W=s(Na,"A",{href:!0,class:!0});var Ca=r(W);re=i(Ca,"Add .nojekyll file in static"),Ca.forEach(l),Na.forEach(l),oe=d(w),At=s(w,"DIV",{});var Da=r(At);q=s(Da,"A",{href:!0,class:!0});var Oa=r(q);ie=i(Oa,"Deploy"),Oa.forEach(l),Da.forEach(l),w.forEach(l),ne=d(u),E=s(u,"SECTION",{id:!0,class:!0});var It=r(E);P(J.$$.fragment,It),de=d(It),j=s(It,"P",{class:!0});var Gt=r(j);he=i(Gt,`I chose SvelteKit to build my portfolio website because I wanted to learn svelte or atleast
				get a feel for the framework. While utilising SvelteKit I came across some hurdles and
				challenges one of them being publishing the finished site, there are a plethora of resources
				available to publish a SvelteKit app to gh-pages however the approach via the svelteLand
				sveltekit blog site
				`),A=s(Gt,"A",{id:!0,href:!0,target:!0,class:!0});var Aa=r(A);ce=i(Aa,"(Link)"),Aa.forEach(l),pe=i(Gt," did not work for me (NOTE: I am a moron who makes a lot of mistakes!!!)"),Gt.forEach(l),ve=d(It),U=s(It,"P",{class:!0});var da=r(U);fe=i(da,"You can find the git repository here "),k=s(da,"A",{id:!0,href:!0,target:!0,alt:!0,class:!0});var Ta=r(k);ue=i(Ta,"(Link)"),Ta.forEach(l),da.forEach(l),It.forEach(l),ge=d(u),T=s(u,"SECTION",{id:!0,class:!0});var xt=r(T);P(Q.$$.fragment,xt),me=d(xt),ft=s(xt,"P",{class:!0});var ja=r(ft);we=i(ja,`I am assuming that you already have created a SvelteKit application and a git repo for that
				application. If not, create them now.`),ja.forEach(l),xt.forEach(l),_e=d(u),m=s(u,"SECTION",{id:!0,class:!0});var L=r(m);P(X.$$.fragment,L),$e=d(L),ut=s(L,"P",{class:!0});var Ka=r(ut);Ee=i(Ka,`The approach on the svelteLand blog was to host the site on a separate gh-pages branch on
				the /root folder, this would be my suggested approach as well as having a separate branch
				for the deployed jargon code is better, the main branch remains relatively clutter free.
				However, due to an unrelated error which I will come to later, I mistakenly thought this
				approach was wrong and I hosted the site in the /docs folder on the main branch (NOTE: Both
				of these approaches would work just fine.)`),Ka.forEach(l),ye=d(L),gt=s(L,"P",{class:!0});var Va=r(gt);be=i(Va,"You can configure it as follows: Go to the repository settings -> pages"),Va.forEach(l),ke=d(L),K=s(L,"IMG",{id:!0,src:!0,alt:!0,class:!0}),L.forEach(l),Ie=d(u),f=s(u,"SECTION",{id:!0,class:!0});var _=r(f);P(Z.$$.fragment,_),ze=d(_),mt=s(_,"P",{class:!0});var Ga=r(mt);Pe=i(Ga,`First we need to install the SvelteKit Static Adapter. It will output our app as a static
				set of files instead of a dynamic app.`),Ga.forEach(l),Se=d(_),tt=s(_,"PRE",{id:!0,class:!0});var xa=r(tt);et=s(xa,"CODE",{});var Lt=r(et);Ne=i(Lt,`
				`),Ce=i(Lt,pa),De=i(Lt,`			
			`),Lt.forEach(l),xa.forEach(l),Oe=d(_),V=s(_,"P",{class:!0});var Mt=r(V);Ae=i(Mt,"Now you need to edit "),Tt=s(Mt,"I",{});var La=r(Tt);jt=s(La,"U",{});var Ma=r(jt);Te=i(Ma,"svelte.config.js"),Ma.forEach(l),La.forEach(l),je=i(Mt," as follows"),Mt.forEach(l),Ke=d(_),at=s(_,"PRE",{id:!0,class:!0});var Ra=r(at);st=s(Ra,"CODE",{});var Rt=r(st);Ve=i(Rt,`
				`),Ge=i(Rt,va),xe=i(Rt,`			
			`),Rt.forEach(l),Ra.forEach(l),Le=d(_),wt=s(_,"P",{class:!0});var Fa=r(wt);Me=i(Fa,`we target the /docs folder. (NOTE: this is beacuse of the approach I took hosting the site
				on main /docs on gh-pages)`),Fa.forEach(l),_.forEach(l),Re=d(u),y=s(u,"SECTION",{id:!0,class:!0});var zt=r(y);P(lt.$$.fragment,zt),Fe=d(zt),_t=s(zt,"P",{class:!0});var Ha=r(_t);He=i(Ha,"Add a empty .nojekyll in the static folder."),Ha.forEach(l),Ye=d(zt),G=s(zt,"IMG",{id:!0,src:!0,alt:!0,class:!0}),zt.forEach(l),Be=d(u),p=s(u,"SECTION",{id:!0,class:!0});var g=r(p);P(rt.$$.fragment,g),We=d(g),$t=s(g,"P",{class:!0});var Ya=r($t);qe=i(Ya,"We can finally deploy out application."),Ya.forEach(l),Je=d(g),ot=s(g,"PRE",{id:!0,class:!0});var Ba=r(ot);it=s(Ba,"CODE",{});var Ft=r(it);Ue=i(Ft,`
				`),Qe=i(Ft,ua),Xe=i(Ft,`			
			`),Ft.forEach(l),Ba.forEach(l),Ze=d(g),Et=s(g,"P",{class:!0});var Wa=r(Et);ta=i(Wa,"Commit and push your changes"),Wa.forEach(l),ea=d(g),nt=s(g,"PRE",{id:!0,class:!0});var qa=r(nt);dt=s(qa,"CODE",{});var Ht=r(dt);aa=i(Ht,`
				`),sa=i(Ht,ga),la=i(Ht,`			
			`),Ht.forEach(l),qa.forEach(l),ra=d(g),yt=s(g,"P",{class:!0});var Ja=r(yt);oa=i(Ja,"gh-pages will then deploy your site"),Ja.forEach(l),ia=d(g),x=s(g,"IMG",{id:!0,src:!0,alt:!0,class:!0}),g.forEach(l),u.forEach(l),na=d(I),bt=s(I,"FOOTER",{class:!0});var Ua=r(bt);P(ht.$$.fragment,Ua),Ua.forEach(l),I.forEach(l),this.h()},h(){e(pt,"class","svelte-wvhd7z"),as(vt,"font-style","italic"),e(b,"id","title"),e(F,"href","#introduction"),e(F,"class","svelte-wvhd7z"),e(H,"href","#initialization"),e(H,"class","svelte-wvhd7z"),e(Y,"href","#gh-pages"),e(Y,"class","svelte-wvhd7z"),e(B,"href","#config-sk"),e(B,"class","svelte-wvhd7z"),e(W,"href","#nojekyll"),e(W,"class","svelte-wvhd7z"),e(q,"href","#deploy"),e(q,"class","svelte-wvhd7z"),e(v,"id","index"),e(v,"class","nes-container is-rounded is-dark svelte-wvhd7z"),e(A,"id","link"),e(A,"href","https://svelteland.github.io/svelte-kit-blog-demo/deply-to-github"),e(A,"target","_blank"),e(A,"class","svelte-wvhd7z"),e(j,"class","svelte-wvhd7z"),e(k,"id","link"),e(k,"href","https://github.com/dpirad007/dionpinto"),e(k,"target","_blank"),e(k,"alt","Dion Pinto Git repo"),e(k,"class","svelte-wvhd7z"),e(U,"class","svelte-wvhd7z"),e(E,"id","introduction"),e(E,"class","svelte-wvhd7z"),e(ft,"class","svelte-wvhd7z"),e(T,"id","initialization"),e(T,"class","svelte-wvhd7z"),e(ut,"class","svelte-wvhd7z"),e(gt,"class","svelte-wvhd7z"),e(K,"id","image"),ha(K.src,ca="sveltekitPublish/1sp.png")||e(K,"src",ca),e(K,"alt","github pages"),e(K,"class","svelte-wvhd7z"),e(m,"id","gh-pages"),e(m,"class","svelte-wvhd7z"),e(mt,"class","svelte-wvhd7z"),e(tt,"id","block"),e(tt,"class","svelte-wvhd7z"),e(V,"class","svelte-wvhd7z"),e(at,"id","block"),e(at,"class","svelte-wvhd7z"),e(wt,"class","svelte-wvhd7z"),e(f,"id","config-sk"),e(f,"class","svelte-wvhd7z"),e(_t,"class","svelte-wvhd7z"),e(G,"id","image"),ha(G.src,fa="sveltekitPublish/2sp.png")||e(G,"src",fa),e(G,"alt",".nojekyll"),e(G,"class","svelte-wvhd7z"),e(y,"id","nojekyll"),e(y,"class","svelte-wvhd7z"),e($t,"class","svelte-wvhd7z"),e(ot,"id","block"),e(ot,"class","svelte-wvhd7z"),e(Et,"class","svelte-wvhd7z"),e(nt,"id","block"),e(nt,"class","svelte-wvhd7z"),e(yt,"class","svelte-wvhd7z"),e(x,"id","image"),ha(x.src,ma="sveltekitPublish/3sp.png")||e(x,"src",ma),e(x,"alt","github actions"),e(x,"class","svelte-wvhd7z"),e(p,"id","deploy"),e(p,"class","svelte-wvhd7z"),e(c,"class","container svelte-wvhd7z"),e(bt,"class","svelte-wvhd7z"),e($,"class","main svelte-wvhd7z")},m(h,I){S(O,h,I),Qa(h,Kt,I),Qa(h,$,I),t($,pt),S(M,pt,null),t($,Yt),t($,c),t(c,b),S(R,b,null),t(b,Bt),t(b,Pt),t(Pt,Wt),t(b,qt),t(b,vt),t(vt,Jt),t(c,Ut),t(c,v),t(v,St),t(St,F),t(F,Qt),t(v,Xt),t(v,Nt),t(Nt,H),t(H,Zt),t(v,te),t(v,Ct),t(Ct,Y),t(Y,ee),t(v,ae),t(v,Dt),t(Dt,B),t(B,se),t(v,le),t(v,Ot),t(Ot,W),t(W,re),t(v,oe),t(v,At),t(At,q),t(q,ie),t(c,ne),t(c,E),S(J,E,null),t(E,de),t(E,j),t(j,he),t(j,A),t(A,ce),t(j,pe),t(E,ve),t(E,U),t(U,fe),t(U,k),t(k,ue),t(c,ge),t(c,T),S(Q,T,null),t(T,me),t(T,ft),t(ft,we),t(c,_e),t(c,m),S(X,m,null),t(m,$e),t(m,ut),t(ut,Ee),t(m,ye),t(m,gt),t(gt,be),t(m,ke),t(m,K),t(c,Ie),t(c,f),S(Z,f,null),t(f,ze),t(f,mt),t(mt,Pe),t(f,Se),t(f,tt),t(tt,et),t(et,Ne),t(et,Ce),t(et,De),t(f,Oe),t(f,V),t(V,Ae),t(V,Tt),t(Tt,jt),t(jt,Te),t(V,je),t(f,Ke),t(f,at),t(at,st),t(st,Ve),t(st,Ge),t(st,xe),t(f,Le),t(f,wt),t(wt,Me),t(c,Re),t(c,y),S(lt,y,null),t(y,Fe),t(y,_t),t(_t,He),t(y,Ye),t(y,G),t(c,Be),t(c,p),S(rt,p,null),t(p,We),t(p,$t),t($t,qe),t(p,Je),t(p,ot),t(ot,it),t(it,Ue),t(it,Qe),t(it,Xe),t(p,Ze),t(p,Et),t(Et,ta),t(p,ea),t(p,nt),t(nt,dt),t(dt,aa),t(dt,sa),t(dt,la),t(p,ra),t(p,yt),t(yt,oa),t(p,ia),t(p,x),t($,na),t($,bt),S(ht,bt,null),Vt=!0},p:ss,i(h){Vt||(N(O.$$.fragment,h),N(M.$$.fragment,h),N(R.$$.fragment,h),N(J.$$.fragment,h),N(Q.$$.fragment,h),N(X.$$.fragment,h),N(Z.$$.fragment,h),N(lt.$$.fragment,h),N(rt.$$.fragment,h),N(ht.$$.fragment,h),Vt=!0)},o(h){C(O.$$.fragment,h),C(M.$$.fragment,h),C(R.$$.fragment,h),C(J.$$.fragment,h),C(Q.$$.fragment,h),C(X.$$.fragment,h),C(Z.$$.fragment,h),C(lt.$$.fragment,h),C(rt.$$.fragment,h),C(ht.$$.fragment,h),Vt=!1},d(h){D(O,h),h&&l(Kt),h&&l($),D(M),D(R),D(J),D(Q),D(X),D(Z),D(lt),D(rt),D(ht)}}}class ps extends Za{constructor(O){super(),ts(this,O,null,is,es,{})}}export{ps as default};
