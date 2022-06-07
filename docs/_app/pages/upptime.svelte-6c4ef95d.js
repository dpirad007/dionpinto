import{S as qa,i as Wa,s as Ja,e as a,k as i,t as c,w as P,c as s,a as n,m as l,h as p,d as o,x as N,b as e,f as Qa,a3 as pa,g as Lt,J as t,y as T,E as Xa,q as D,o as C,B as O}from"../chunks/index-cd4245c1.js";import{S as Za,N as ts,F as es}from"../chunks/Footer-8b9c5841.js";import{T as ct}from"../chunks/Title-6ea0487f.js";import"../chunks/paths-c8fbcc1d.js";function as(Ba){let b,Ct,Yt,Ot,Bt,St,qt,Mt,G,xt,$,pt,K,Wt,d,I,V,Jt,At,Qt,Xt,dt,Zt,te,E,ut,H,ee,ae,ht,z,se,oe,ft,L,ne,re,v,Y,ie,B,le,S,ce,pe,mt,de,ue,q,he,k,fe,me,A,W,ve,vt,ge,be,g,J,_e,gt,ye,$e,bt,Ee,we,U,da,Ie,h,Q,ke,_t,Pe,Ne,X,Z,Te,ua=`
  npm i @sveltejs/adapter-static
				`,De,Ce,Oe,j,Se,Ut,jt,Ae,Ue,je,tt,et,Me,ha=`
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
				`,xe,Re,Fe,yt,Ge,Ke,w,at,Ve,$t,He,ze,M,fa,Le,u,st,Ye,Et,Be,qe,ot,nt,We,ma=`
  npm run build
				`,Je,Qe,Xe,wt,Ze,ta,rt,it,ea,va=`
  git add docs

  git commit -m "Changes commited"

  git push
				`,aa,sa,oa,It,na,ra,x,ga,ia,kt,lt,Rt;return G=new Za({}),K=new ts({props:{curPage:"Blog"}}),V=new ct({props:{type:2,title:"Upptime"}}),Y=new ct({props:{type:5,title:"Introduction"}}),W=new ct({props:{type:5,title:"Initialization"}}),J=new ct({props:{type:5,title:"Configure Github Pages"}}),Q=new ct({props:{type:5,title:"Configure SvelteKit"}}),at=new ct({props:{type:5,title:"Add .nojekyll file in static"}}),st=new ct({props:{type:5,title:"Deploy"}}),lt=new es({}),{c(){b=a("head"),Ct=a("meta"),Yt=i(),Ot=a("meta"),Bt=i(),St=a("title"),qt=c("Maintain Upptime for your site"),Mt=i(),P(G.$$.fragment),xt=i(),$=a("main"),pt=a("header"),P(K.$$.fragment),Wt=i(),d=a("main"),I=a("div"),P(V.$$.fragment),Jt=i(),At=a("h4"),Qt=c("Maintain Upptime for your site"),Xt=i(),dt=a("h5"),Zt=c("13th May 2022 ~ Dion Pinto"),te=i(),E=a("div"),ut=a("div"),H=a("a"),ee=c("Introduction"),ae=i(),ht=a("div"),z=a("a"),se=c("Initialization"),oe=i(),ft=a("div"),L=a("a"),ne=c("Configuration"),re=i(),v=a("section"),P(Y.$$.fragment),ie=i(),B=a("p"),le=c(`After the creation of any web application the logical next step is to put the site into
				production. For the creation of my personal portfolio website I utilised SvelteKit and
				hosted it on github pages (gh-pages), however , it is essential to know if you site has ever
				gone down or crashed, you can utilise paid tools to check for the uptime of your production
				site or you can utilise a free and open source alternative called Upptime.

				`),S=a("a"),ce=c("(Upptime Docs)"),pe=i(),mt=a("p"),de=c(`Uptime utilises github actions as an uptime monitor, with github issues used as incident
				reports and github pages for the status page.`),ue=i(),q=a("p"),he=c("You can find the my Upptime git repository here "),k=a("a"),fe=c("(Repository Link)"),me=i(),A=a("section"),P(W.$$.fragment),ve=i(),vt=a("p"),ge=c(`I am assuming that you already have created a SvelteKit application and a git repo for that
				application. If not, create them now.`),be=i(),g=a("section"),P(J.$$.fragment),_e=i(),gt=a("p"),ye=c(`The approach on the svelteLand blog was to host the site on a separate gh-pages branch on
				the /root folder, this would be my suggested approach as well as having a separate branch
				for the deployed jargon code is better, the main branch remains relatively clutter free.
				However, due to an unrelated error which I will come to later, I mistakenly thought this
				approach was wrong and I hosted the site in the /docs folder on the main branch (NOTE: Both
				of these approaches would work just fine.)`),$e=i(),bt=a("p"),Ee=c("You can configure it as follows: Go to the repository settings -> pages"),we=i(),U=a("img"),Ie=i(),h=a("section"),P(Q.$$.fragment),ke=i(),_t=a("p"),Pe=c(`First we need to install the SvelteKit Static Adapter. It will output our app as a static
				set of files instead of a dynamic app.`),Ne=i(),X=a("pre"),Z=a("code"),Te=c(`
				`),De=c(ua),Ce=c(`			
			`),Oe=i(),j=a("p"),Se=c("Now you need to edit "),Ut=a("i"),jt=a("u"),Ae=c("svelte.config.js"),Ue=c(" as follows"),je=i(),tt=a("pre"),et=a("code"),Me=c(`
				`),xe=c(ha),Re=c(`			
			`),Fe=i(),yt=a("p"),Ge=c(`we target the /docs folder. (NOTE: this is beacuse of the approach I took hosting the site
				on main /docs on gh-pages)`),Ke=i(),w=a("section"),P(at.$$.fragment),Ve=i(),$t=a("p"),He=c("Add a empty .nojekyll in the static folder."),ze=i(),M=a("img"),Le=i(),u=a("section"),P(st.$$.fragment),Ye=i(),Et=a("p"),Be=c("We can finally deploy out application."),qe=i(),ot=a("pre"),nt=a("code"),We=c(`
				`),Je=c(ma),Qe=c(`			
			`),Xe=i(),wt=a("p"),Ze=c("Commit and push your changes"),ta=i(),rt=a("pre"),it=a("code"),ea=c(`
				`),aa=c(va),sa=c(`			
			`),oa=i(),It=a("p"),na=c("gh-pages will then deploy your site"),ra=i(),x=a("img"),ia=i(),kt=a("footer"),P(lt.$$.fragment),this.h()},l(r){b=s(r,"HEAD",{});var _=n(b);Ct=s(_,"META",{name:!0,content:!0}),Yt=l(_),Ot=s(_,"META",{name:!0,content:!0}),Bt=l(_),St=s(_,"TITLE",{});var ba=n(St);qt=p(ba,"Maintain Upptime for your site"),ba.forEach(o),_.forEach(o),Mt=l(r),N(G.$$.fragment,r),xt=l(r),$=s(r,"MAIN",{class:!0});var Pt=n($);pt=s(Pt,"HEADER",{class:!0});var _a=n(pt);N(K.$$.fragment,_a),_a.forEach(o),Wt=l(Pt),d=s(Pt,"MAIN",{class:!0});var f=n(d);I=s(f,"DIV",{id:!0});var Nt=n(I);N(V.$$.fragment,Nt),Jt=l(Nt),At=s(Nt,"H4",{});var ya=n(At);Qt=p(ya,"Maintain Upptime for your site"),ya.forEach(o),Xt=l(Nt),dt=s(Nt,"H5",{style:!0});var $a=n(dt);Zt=p($a,"13th May 2022 ~ Dion Pinto"),$a.forEach(o),Nt.forEach(o),te=l(f),E=s(f,"DIV",{id:!0,class:!0});var Tt=n(E);ut=s(Tt,"DIV",{class:!0});var Ea=n(ut);H=s(Ea,"A",{href:!0,class:!0});var wa=n(H);ee=p(wa,"Introduction"),wa.forEach(o),Ea.forEach(o),ae=l(Tt),ht=s(Tt,"DIV",{class:!0});var Ia=n(ht);z=s(Ia,"A",{href:!0,class:!0});var ka=n(z);se=p(ka,"Initialization"),ka.forEach(o),Ia.forEach(o),oe=l(Tt),ft=s(Tt,"DIV",{class:!0});var Pa=n(ft);L=s(Pa,"A",{href:!0,class:!0});var Na=n(L);ne=p(Na,"Configuration"),Na.forEach(o),Pa.forEach(o),Tt.forEach(o),re=l(f),v=s(f,"SECTION",{id:!0,class:!0});var R=n(v);N(Y.$$.fragment,R),ie=l(R),B=s(R,"P",{class:!0});var la=n(B);le=p(la,`After the creation of any web application the logical next step is to put the site into
				production. For the creation of my personal portfolio website I utilised SvelteKit and
				hosted it on github pages (gh-pages), however , it is essential to know if you site has ever
				gone down or crashed, you can utilise paid tools to check for the uptime of your production
				site or you can utilise a free and open source alternative called Upptime.

				`),S=s(la,"A",{id:!0,href:!0,target:!0,class:!0});var Ta=n(S);ce=p(Ta,"(Upptime Docs)"),Ta.forEach(o),la.forEach(o),pe=l(R),mt=s(R,"P",{class:!0});var Da=n(mt);de=p(Da,`Uptime utilises github actions as an uptime monitor, with github issues used as incident
				reports and github pages for the status page.`),Da.forEach(o),ue=l(R),q=s(R,"P",{class:!0});var ca=n(q);he=p(ca,"You can find the my Upptime git repository here "),k=s(ca,"A",{id:!0,href:!0,target:!0,alt:!0,class:!0});var Ca=n(k);fe=p(Ca,"(Repository Link)"),Ca.forEach(o),ca.forEach(o),R.forEach(o),me=l(f),A=s(f,"SECTION",{id:!0,class:!0});var Ft=n(A);N(W.$$.fragment,Ft),ve=l(Ft),vt=s(Ft,"P",{class:!0});var Oa=n(vt);ge=p(Oa,`I am assuming that you already have created a SvelteKit application and a git repo for that
				application. If not, create them now.`),Oa.forEach(o),Ft.forEach(o),be=l(f),g=s(f,"SECTION",{id:!0,class:!0});var F=n(g);N(J.$$.fragment,F),_e=l(F),gt=s(F,"P",{class:!0});var Sa=n(gt);ye=p(Sa,`The approach on the svelteLand blog was to host the site on a separate gh-pages branch on
				the /root folder, this would be my suggested approach as well as having a separate branch
				for the deployed jargon code is better, the main branch remains relatively clutter free.
				However, due to an unrelated error which I will come to later, I mistakenly thought this
				approach was wrong and I hosted the site in the /docs folder on the main branch (NOTE: Both
				of these approaches would work just fine.)`),Sa.forEach(o),$e=l(F),bt=s(F,"P",{class:!0});var Aa=n(bt);Ee=p(Aa,"You can configure it as follows: Go to the repository settings -> pages"),Aa.forEach(o),we=l(F),U=s(F,"IMG",{id:!0,src:!0,alt:!0,class:!0}),F.forEach(o),Ie=l(f),h=s(f,"SECTION",{id:!0,class:!0});var y=n(h);N(Q.$$.fragment,y),ke=l(y),_t=s(y,"P",{class:!0});var Ua=n(_t);Pe=p(Ua,`First we need to install the SvelteKit Static Adapter. It will output our app as a static
				set of files instead of a dynamic app.`),Ua.forEach(o),Ne=l(y),X=s(y,"PRE",{id:!0,class:!0});var ja=n(X);Z=s(ja,"CODE",{});var Gt=n(Z);Te=p(Gt,`
				`),De=p(Gt,ua),Ce=p(Gt,`			
			`),Gt.forEach(o),ja.forEach(o),Oe=l(y),j=s(y,"P",{class:!0});var Kt=n(j);Se=p(Kt,"Now you need to edit "),Ut=s(Kt,"I",{});var Ma=n(Ut);jt=s(Ma,"U",{});var xa=n(jt);Ae=p(xa,"svelte.config.js"),xa.forEach(o),Ma.forEach(o),Ue=p(Kt," as follows"),Kt.forEach(o),je=l(y),tt=s(y,"PRE",{id:!0,class:!0});var Ra=n(tt);et=s(Ra,"CODE",{});var Vt=n(et);Me=p(Vt,`
				`),xe=p(Vt,ha),Re=p(Vt,`			
			`),Vt.forEach(o),Ra.forEach(o),Fe=l(y),yt=s(y,"P",{class:!0});var Fa=n(yt);Ge=p(Fa,`we target the /docs folder. (NOTE: this is beacuse of the approach I took hosting the site
				on main /docs on gh-pages)`),Fa.forEach(o),y.forEach(o),Ke=l(f),w=s(f,"SECTION",{id:!0,class:!0});var Dt=n(w);N(at.$$.fragment,Dt),Ve=l(Dt),$t=s(Dt,"P",{class:!0});var Ga=n($t);He=p(Ga,"Add a empty .nojekyll in the static folder."),Ga.forEach(o),ze=l(Dt),M=s(Dt,"IMG",{id:!0,src:!0,alt:!0,class:!0}),Dt.forEach(o),Le=l(f),u=s(f,"SECTION",{id:!0,class:!0});var m=n(u);N(st.$$.fragment,m),Ye=l(m),Et=s(m,"P",{class:!0});var Ka=n(Et);Be=p(Ka,"We can finally deploy out application."),Ka.forEach(o),qe=l(m),ot=s(m,"PRE",{id:!0,class:!0});var Va=n(ot);nt=s(Va,"CODE",{});var Ht=n(nt);We=p(Ht,`
				`),Je=p(Ht,ma),Qe=p(Ht,`			
			`),Ht.forEach(o),Va.forEach(o),Xe=l(m),wt=s(m,"P",{class:!0});var Ha=n(wt);Ze=p(Ha,"Commit and push your changes"),Ha.forEach(o),ta=l(m),rt=s(m,"PRE",{id:!0,class:!0});var za=n(rt);it=s(za,"CODE",{});var zt=n(it);ea=p(zt,`
				`),aa=p(zt,va),sa=p(zt,`			
			`),zt.forEach(o),za.forEach(o),oa=l(m),It=s(m,"P",{class:!0});var La=n(It);na=p(La,"gh-pages will then deploy your site"),La.forEach(o),ra=l(m),x=s(m,"IMG",{id:!0,src:!0,alt:!0,class:!0}),m.forEach(o),f.forEach(o),ia=l(Pt),kt=s(Pt,"FOOTER",{class:!0});var Ya=n(kt);N(lt.$$.fragment,Ya),Ya.forEach(o),Pt.forEach(o),this.h()},h(){e(Ct,"name","author"),e(Ct,"content","Dion Pinto"),e(Ot,"name","description"),e(Ot,"content"," Maintain Upptime for your site"),e(pt,"class","svelte-11c2nb1"),Qa(dt,"font-style","italic"),e(I,"id","title"),e(H,"href","#introduction"),e(H,"class","svelte-11c2nb1"),e(ut,"class","svelte-11c2nb1"),e(z,"href","#initialization"),e(z,"class","svelte-11c2nb1"),e(ht,"class","svelte-11c2nb1"),e(L,"href","#config"),e(L,"class","svelte-11c2nb1"),e(ft,"class","svelte-11c2nb1"),e(E,"id","index"),e(E,"class","nes-container is-rounded is-dark svelte-11c2nb1"),e(S,"id","link"),e(S,"href","https://upptime.js.org/docs/"),e(S,"target","_blank"),e(S,"class","svelte-11c2nb1"),e(B,"class","svelte-11c2nb1"),e(mt,"class","svelte-11c2nb1"),e(k,"id","link"),e(k,"href","https://github.com/dpirad007/dionpinto-upptime"),e(k,"target","_blank"),e(k,"alt","Dion Pinto Git repo"),e(k,"class","svelte-11c2nb1"),e(q,"class","svelte-11c2nb1"),e(v,"id","introduction"),e(v,"class","svelte-11c2nb1"),e(vt,"class","svelte-11c2nb1"),e(A,"id","initialization"),e(A,"class","svelte-11c2nb1"),e(gt,"class","svelte-11c2nb1"),e(bt,"class","svelte-11c2nb1"),e(U,"id","image"),pa(U.src,da="sveltekitPublish/1sp.png")||e(U,"src",da),e(U,"alt","github pages"),e(U,"class","svelte-11c2nb1"),e(g,"id","gh-pages"),e(g,"class","svelte-11c2nb1"),e(_t,"class","svelte-11c2nb1"),e(X,"id","block"),e(X,"class","svelte-11c2nb1"),e(j,"class","svelte-11c2nb1"),e(tt,"id","block"),e(tt,"class","svelte-11c2nb1"),e(yt,"class","svelte-11c2nb1"),e(h,"id","config-sk"),e(h,"class","svelte-11c2nb1"),e($t,"class","svelte-11c2nb1"),e(M,"id","image"),pa(M.src,fa="sveltekitPublish/2sp.png")||e(M,"src",fa),e(M,"alt",".nojekyll"),e(M,"class","svelte-11c2nb1"),e(w,"id","nojekyll"),e(w,"class","svelte-11c2nb1"),e(Et,"class","svelte-11c2nb1"),e(ot,"id","block"),e(ot,"class","svelte-11c2nb1"),e(wt,"class","svelte-11c2nb1"),e(rt,"id","block"),e(rt,"class","svelte-11c2nb1"),e(It,"class","svelte-11c2nb1"),e(x,"id","image"),pa(x.src,ga="sveltekitPublish/3sp.png")||e(x,"src",ga),e(x,"alt","github actions"),e(x,"class","svelte-11c2nb1"),e(u,"id","deploy"),e(u,"class","svelte-11c2nb1"),e(d,"class","container svelte-11c2nb1"),e(kt,"class","svelte-11c2nb1"),e($,"class","main svelte-11c2nb1")},m(r,_){Lt(r,b,_),t(b,Ct),t(b,Yt),t(b,Ot),t(b,Bt),t(b,St),t(St,qt),Lt(r,Mt,_),T(G,r,_),Lt(r,xt,_),Lt(r,$,_),t($,pt),T(K,pt,null),t($,Wt),t($,d),t(d,I),T(V,I,null),t(I,Jt),t(I,At),t(At,Qt),t(I,Xt),t(I,dt),t(dt,Zt),t(d,te),t(d,E),t(E,ut),t(ut,H),t(H,ee),t(E,ae),t(E,ht),t(ht,z),t(z,se),t(E,oe),t(E,ft),t(ft,L),t(L,ne),t(d,re),t(d,v),T(Y,v,null),t(v,ie),t(v,B),t(B,le),t(B,S),t(S,ce),t(v,pe),t(v,mt),t(mt,de),t(v,ue),t(v,q),t(q,he),t(q,k),t(k,fe),t(d,me),t(d,A),T(W,A,null),t(A,ve),t(A,vt),t(vt,ge),t(d,be),t(d,g),T(J,g,null),t(g,_e),t(g,gt),t(gt,ye),t(g,$e),t(g,bt),t(bt,Ee),t(g,we),t(g,U),t(d,Ie),t(d,h),T(Q,h,null),t(h,ke),t(h,_t),t(_t,Pe),t(h,Ne),t(h,X),t(X,Z),t(Z,Te),t(Z,De),t(Z,Ce),t(h,Oe),t(h,j),t(j,Se),t(j,Ut),t(Ut,jt),t(jt,Ae),t(j,Ue),t(h,je),t(h,tt),t(tt,et),t(et,Me),t(et,xe),t(et,Re),t(h,Fe),t(h,yt),t(yt,Ge),t(d,Ke),t(d,w),T(at,w,null),t(w,Ve),t(w,$t),t($t,He),t(w,ze),t(w,M),t(d,Le),t(d,u),T(st,u,null),t(u,Ye),t(u,Et),t(Et,Be),t(u,qe),t(u,ot),t(ot,nt),t(nt,We),t(nt,Je),t(nt,Qe),t(u,Xe),t(u,wt),t(wt,Ze),t(u,ta),t(u,rt),t(rt,it),t(it,ea),t(it,aa),t(it,sa),t(u,oa),t(u,It),t(It,na),t(u,ra),t(u,x),t($,ia),t($,kt),T(lt,kt,null),Rt=!0},p:Xa,i(r){Rt||(D(G.$$.fragment,r),D(K.$$.fragment,r),D(V.$$.fragment,r),D(Y.$$.fragment,r),D(W.$$.fragment,r),D(J.$$.fragment,r),D(Q.$$.fragment,r),D(at.$$.fragment,r),D(st.$$.fragment,r),D(lt.$$.fragment,r),Rt=!0)},o(r){C(G.$$.fragment,r),C(K.$$.fragment,r),C(V.$$.fragment,r),C(Y.$$.fragment,r),C(W.$$.fragment,r),C(J.$$.fragment,r),C(Q.$$.fragment,r),C(at.$$.fragment,r),C(st.$$.fragment,r),C(lt.$$.fragment,r),Rt=!1},d(r){r&&o(b),r&&o(Mt),O(G,r),r&&o(xt),r&&o($),O(K),O(V),O(Y),O(W),O(J),O(Q),O(at),O(st),O(lt)}}}class is extends qa{constructor(b){super(),Wa(this,b,null,as,Ja,{})}}export{is as default};
