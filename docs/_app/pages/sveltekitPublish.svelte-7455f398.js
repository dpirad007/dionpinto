import{S as uo,i as go,s as mo,e,k as i,t as d,w as S,c as a,a as r,m as l,h,d as o,x as P,b as n,f as vo,a3 as wa,g as Xt,J as t,y as A,E as Eo,q as D,o as N,B as T}from"../chunks/index-cd4245c1.js";import{S as _o,N as $o,F as yo}from"../chunks/Footer-8b9c5841.js";import{T as at}from"../chunks/Title-6ea0487f.js";import{b as bo}from"../chunks/paths-c8fbcc1d.js";/* empty css                     */function wo(fo){let v,_t,Zt,$t,te,yt,ee,Bt,G,Ht,b,bt,L,ae,p,w,M,oe,wt,re,ne,ot,ie,le,u,kt,rt,se,de,It,nt,he,pe,St,it,ce,fe,Pt,lt,ue,ge,At,st,me,ve,Dt,dt,Ee,_e,k,x,$e,R,ye,K,be,we,ke,ht,Ie,C,Se,Pe,j,B,Ae,Nt,De,Ne,E,H,Te,Tt,Ce,Oe,Ct,Ke,je,z,ka,Ve,g,F,Ge,Ot,Le,Me,pt,Y,xe,Ia=`
  npm i @sveltejs/adapter-static
				`,Re,Be,He,W,ze,Kt,jt,Fe,Ye,We,ct,q,qe,Sa=`
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
				`,Je,Ue,Qe,Vt,Xe,Ze,I,J,ta,Gt,ea,aa,U,Pa,oa,c,Q,ra,Lt,na,ia,ft,X,la,Aa=`
  npm run build
				`,sa,da,ha,Mt,pa,ca,ut,Z,fa,Da=`
  git add docs

  git commit -m "Changes commited"

  git push
				`,ua,ga,ma,xt,va,Ea,tt,Na,_a,O,$a,ya,Rt,et,zt;return G=new _o({}),L=new $o({props:{curPage:"Blog"}}),M=new at({props:{type:2,title:"SvelteKit on gh-pages"}}),x=new at({props:{type:5,title:"Introduction"}}),B=new at({props:{type:5,title:"Initialization"}}),H=new at({props:{type:5,title:"Configure Github Pages"}}),F=new at({props:{type:5,title:"Configure SvelteKit"}}),J=new at({props:{type:5,title:"Add .nojekyll file in static"}}),Q=new at({props:{type:5,title:"Deploy"}}),et=new yo({}),{c(){v=e("head"),_t=e("meta"),Zt=i(),$t=e("meta"),te=i(),yt=e("title"),ee=d("Publish SvelteKit Apps on gh-pages"),Bt=i(),S(G.$$.fragment),Ht=i(),b=e("main"),bt=e("header"),S(L.$$.fragment),ae=i(),p=e("main"),w=e("div"),S(M.$$.fragment),oe=i(),wt=e("h4"),re=d("Publish SvelteKit Apps on gh-pages"),ne=i(),ot=e("h5"),ie=d("12th May 2022 ~ Dion Pinto"),le=i(),u=e("div"),kt=e("div"),rt=e("a"),se=d("Introduction"),de=i(),It=e("div"),nt=e("a"),he=d("Initialization"),pe=i(),St=e("div"),it=e("a"),ce=d("Configure Github Pages"),fe=i(),Pt=e("div"),lt=e("a"),ue=d("Configure SvelteKit"),ge=i(),At=e("div"),st=e("a"),me=d("Add .nojekyll file in static"),ve=i(),Dt=e("div"),dt=e("a"),Ee=d("Deploy"),_e=i(),k=e("section"),S(x.$$.fragment),$e=i(),R=e("p"),ye=d(`I chose SvelteKit to build my portfolio website because I wanted to learn svelte or atleast
				get a feel for the framework. While utilising SvelteKit I came across some hurdles and
				challenges one of them being publishing the finished site, there are a plethora of resources
				available to publish a SvelteKit app to gh-pages however the approach via the svelteLand
				sveltekit blog site
				`),K=e("a"),be=d("(Svelteland Link)"),we=d(" did not work for me (NOTE: I am a moron who makes a lot of mistakes!!!)"),ke=i(),ht=e("p"),Ie=d("You can find the git repository here "),C=e("a"),Se=d("(Repository Link)"),Pe=i(),j=e("section"),S(B.$$.fragment),Ae=i(),Nt=e("p"),De=d(`I am assuming that you already have created a SvelteKit application and a git repo for that
				application. If not, create them now.`),Ne=i(),E=e("section"),S(H.$$.fragment),Te=i(),Tt=e("p"),Ce=d(`The approach on the svelteLand blog was to host the site on a separate gh-pages branch on
				the /root folder, this would be my suggested approach as well as having a separate branch
				for the deployed jargon code is better, the main branch remains relatively clutter free.
				However, due to an unrelated error, I mistakenly thought this approach was wrong and I
				hosted the site in the /docs folder on the main branch (NOTE: Both of these approaches would
				work just fine.)`),Oe=i(),Ct=e("p"),Ke=d("You can configure it as follows: Go to the repository settings -> pages"),je=i(),z=e("img"),Ve=i(),g=e("section"),S(F.$$.fragment),Ge=i(),Ot=e("p"),Le=d(`First we need to install the SvelteKit Static Adapter. It will output our app as a static
				set of files instead of a dynamic app.`),Me=i(),pt=e("pre"),Y=e("code"),xe=d(`
				`),Re=d(Ia),Be=d(`			
			`),He=i(),W=e("p"),ze=d("Now you need to edit "),Kt=e("i"),jt=e("u"),Fe=d("svelte.config.js"),Ye=d(" as follows"),We=i(),ct=e("pre"),q=e("code"),qe=d(`
				`),Je=d(Sa),Ue=d(`			
			`),Qe=i(),Vt=e("p"),Xe=d(`we target the /docs folder. (NOTE: this is beacuse of the approach I took hosting the site
				on main /docs on gh-pages)`),Ze=i(),I=e("section"),S(J.$$.fragment),ta=i(),Gt=e("p"),ea=d("Add a empty .nojekyll in the static folder."),aa=i(),U=e("img"),oa=i(),c=e("section"),S(Q.$$.fragment),ra=i(),Lt=e("p"),na=d("We can finally deploy out application."),ia=i(),ft=e("pre"),X=e("code"),la=d(`
				`),sa=d(Aa),da=d(`			
			`),ha=i(),Mt=e("p"),pa=d("Commit and push your changes"),ca=i(),ut=e("pre"),Z=e("code"),fa=d(`
				`),ua=d(Da),ga=d(`			
			`),ma=i(),xt=e("p"),va=d("gh-pages will then deploy your site"),Ea=i(),tt=e("img"),_a=i(),O=e("a"),$a=d("Back"),ya=i(),Rt=e("footer"),S(et.$$.fragment),this.h()},l(s){v=a(s,"HEAD",{});var _=r(v);_t=a(_,"META",{name:!0,content:!0}),Zt=l(_),$t=a(_,"META",{name:!0,content:!0}),te=l(_),yt=a(_,"TITLE",{});var Ta=r(yt);ee=h(Ta,"Publish SvelteKit Apps on gh-pages"),Ta.forEach(o),_.forEach(o),Bt=l(s),P(G.$$.fragment,s),Ht=l(s),b=a(s,"MAIN",{class:!0});var gt=r(b);bt=a(gt,"HEADER",{});var Ca=r(bt);P(L.$$.fragment,Ca),Ca.forEach(o),ae=l(gt),p=a(gt,"MAIN",{class:!0});var f=r(p);w=a(f,"DIV",{id:!0});var mt=r(w);P(M.$$.fragment,mt),oe=l(mt),wt=a(mt,"H4",{});var Oa=r(wt);re=h(Oa,"Publish SvelteKit Apps on gh-pages"),Oa.forEach(o),ne=l(mt),ot=a(mt,"H5",{style:!0});var Ka=r(ot);ie=h(Ka,"12th May 2022 ~ Dion Pinto"),Ka.forEach(o),mt.forEach(o),le=l(f),u=a(f,"DIV",{id:!0,class:!0});var $=r(u);kt=a($,"DIV",{});var ja=r(kt);rt=a(ja,"A",{href:!0});var Va=r(rt);se=h(Va,"Introduction"),Va.forEach(o),ja.forEach(o),de=l($),It=a($,"DIV",{});var Ga=r(It);nt=a(Ga,"A",{href:!0});var La=r(nt);he=h(La,"Initialization"),La.forEach(o),Ga.forEach(o),pe=l($),St=a($,"DIV",{});var Ma=r(St);it=a(Ma,"A",{href:!0});var xa=r(it);ce=h(xa,"Configure Github Pages"),xa.forEach(o),Ma.forEach(o),fe=l($),Pt=a($,"DIV",{});var Ra=r(Pt);lt=a(Ra,"A",{href:!0});var Ba=r(lt);ue=h(Ba,"Configure SvelteKit"),Ba.forEach(o),Ra.forEach(o),ge=l($),At=a($,"DIV",{});var Ha=r(At);st=a(Ha,"A",{href:!0});var za=r(st);me=h(za,"Add .nojekyll file in static"),za.forEach(o),Ha.forEach(o),ve=l($),Dt=a($,"DIV",{});var Fa=r(Dt);dt=a(Fa,"A",{href:!0});var Ya=r(dt);Ee=h(Ya,"Deploy"),Ya.forEach(o),Fa.forEach(o),$.forEach(o),_e=l(f),k=a(f,"SECTION",{id:!0});var vt=r(k);P(x.$$.fragment,vt),$e=l(vt),R=a(vt,"P",{});var Ft=r(R);ye=h(Ft,`I chose SvelteKit to build my portfolio website because I wanted to learn svelte or atleast
				get a feel for the framework. While utilising SvelteKit I came across some hurdles and
				challenges one of them being publishing the finished site, there are a plethora of resources
				available to publish a SvelteKit app to gh-pages however the approach via the svelteLand
				sveltekit blog site
				`),K=a(Ft,"A",{id:!0,href:!0,target:!0});var Wa=r(K);be=h(Wa,"(Svelteland Link)"),Wa.forEach(o),we=h(Ft," did not work for me (NOTE: I am a moron who makes a lot of mistakes!!!)"),Ft.forEach(o),ke=l(vt),ht=a(vt,"P",{});var ba=r(ht);Ie=h(ba,"You can find the git repository here "),C=a(ba,"A",{id:!0,href:!0,target:!0,alt:!0});var qa=r(C);Se=h(qa,"(Repository Link)"),qa.forEach(o),ba.forEach(o),vt.forEach(o),Pe=l(f),j=a(f,"SECTION",{id:!0});var Yt=r(j);P(B.$$.fragment,Yt),Ae=l(Yt),Nt=a(Yt,"P",{});var Ja=r(Nt);De=h(Ja,`I am assuming that you already have created a SvelteKit application and a git repo for that
				application. If not, create them now.`),Ja.forEach(o),Yt.forEach(o),Ne=l(f),E=a(f,"SECTION",{id:!0});var V=r(E);P(H.$$.fragment,V),Te=l(V),Tt=a(V,"P",{});var Ua=r(Tt);Ce=h(Ua,`The approach on the svelteLand blog was to host the site on a separate gh-pages branch on
				the /root folder, this would be my suggested approach as well as having a separate branch
				for the deployed jargon code is better, the main branch remains relatively clutter free.
				However, due to an unrelated error, I mistakenly thought this approach was wrong and I
				hosted the site in the /docs folder on the main branch (NOTE: Both of these approaches would
				work just fine.)`),Ua.forEach(o),Oe=l(V),Ct=a(V,"P",{});var Qa=r(Ct);Ke=h(Qa,"You can configure it as follows: Go to the repository settings -> pages"),Qa.forEach(o),je=l(V),z=a(V,"IMG",{id:!0,src:!0,alt:!0}),V.forEach(o),Ve=l(f),g=a(f,"SECTION",{id:!0});var y=r(g);P(F.$$.fragment,y),Ge=l(y),Ot=a(y,"P",{});var Xa=r(Ot);Le=h(Xa,`First we need to install the SvelteKit Static Adapter. It will output our app as a static
				set of files instead of a dynamic app.`),Xa.forEach(o),Me=l(y),pt=a(y,"PRE",{id:!0});var Za=r(pt);Y=a(Za,"CODE",{});var Wt=r(Y);xe=h(Wt,`
				`),Re=h(Wt,Ia),Be=h(Wt,`			
			`),Wt.forEach(o),Za.forEach(o),He=l(y),W=a(y,"P",{});var qt=r(W);ze=h(qt,"Now you need to edit "),Kt=a(qt,"I",{});var to=r(Kt);jt=a(to,"U",{});var eo=r(jt);Fe=h(eo,"svelte.config.js"),eo.forEach(o),to.forEach(o),Ye=h(qt," as follows"),qt.forEach(o),We=l(y),ct=a(y,"PRE",{id:!0});var ao=r(ct);q=a(ao,"CODE",{});var Jt=r(q);qe=h(Jt,`
				`),Je=h(Jt,Sa),Ue=h(Jt,`			
			`),Jt.forEach(o),ao.forEach(o),Qe=l(y),Vt=a(y,"P",{});var oo=r(Vt);Xe=h(oo,`we target the /docs folder. (NOTE: this is beacuse of the approach I took hosting the site
				on main /docs on gh-pages)`),oo.forEach(o),y.forEach(o),Ze=l(f),I=a(f,"SECTION",{id:!0});var Et=r(I);P(J.$$.fragment,Et),ta=l(Et),Gt=a(Et,"P",{});var ro=r(Gt);ea=h(ro,"Add a empty .nojekyll in the static folder."),ro.forEach(o),aa=l(Et),U=a(Et,"IMG",{id:!0,src:!0,alt:!0}),Et.forEach(o),oa=l(f),c=a(f,"SECTION",{id:!0});var m=r(c);P(Q.$$.fragment,m),ra=l(m),Lt=a(m,"P",{});var no=r(Lt);na=h(no,"We can finally deploy out application."),no.forEach(o),ia=l(m),ft=a(m,"PRE",{id:!0});var io=r(ft);X=a(io,"CODE",{});var Ut=r(X);la=h(Ut,`
				`),sa=h(Ut,Aa),da=h(Ut,`			
			`),Ut.forEach(o),io.forEach(o),ha=l(m),Mt=a(m,"P",{});var lo=r(Mt);pa=h(lo,"Commit and push your changes"),lo.forEach(o),ca=l(m),ut=a(m,"PRE",{id:!0});var so=r(ut);Z=a(so,"CODE",{});var Qt=r(Z);fa=h(Qt,`
				`),ua=h(Qt,Da),ga=h(Qt,`			
			`),Qt.forEach(o),so.forEach(o),ma=l(m),xt=a(m,"P",{});var ho=r(xt);va=h(ho,"gh-pages will then deploy your site"),ho.forEach(o),Ea=l(m),tt=a(m,"IMG",{id:!0,src:!0,alt:!0}),m.forEach(o),_a=l(f),O=a(f,"A",{id:!0,type:!0,class:!0,href:!0});var po=r(O);$a=h(po,"Back"),po.forEach(o),f.forEach(o),ya=l(gt),Rt=a(gt,"FOOTER",{});var co=r(Rt);P(et.$$.fragment,co),co.forEach(o),gt.forEach(o),this.h()},h(){n(_t,"name","author"),n(_t,"content","Dion Pinto"),n($t,"name","description"),n($t,"content","Publish SvelteKit Apps on gh-pages"),vo(ot,"font-style","italic"),n(w,"id","title"),n(rt,"href","#introduction"),n(nt,"href","#initialization"),n(it,"href","#gh-pages"),n(lt,"href","#config-sk"),n(st,"href","#nojekyll"),n(dt,"href","#deploy"),n(u,"id","index"),n(u,"class","nes-container is-rounded is-dark"),n(K,"id","link"),n(K,"href","https://svelteland.github.io/svelte-kit-blog-demo/deply-to-github"),n(K,"target","_blank"),n(C,"id","link"),n(C,"href","https://github.com/dpirad007/dionpinto"),n(C,"target","_blank"),n(C,"alt","Dion Pinto Git repo"),n(k,"id","introduction"),n(j,"id","initialization"),n(z,"id","image"),wa(z.src,ka="sveltekitPublish/1sp.png")||n(z,"src",ka),n(z,"alt","github pages"),n(E,"id","gh-pages"),n(pt,"id","block"),n(ct,"id","block"),n(g,"id","config-sk"),n(U,"id","image"),wa(U.src,Pa="sveltekitPublish/2sp.png")||n(U,"src",Pa),n(U,"alt",".nojekyll"),n(I,"id","nojekyll"),n(ft,"id","block"),n(ut,"id","block"),n(tt,"id","image"),wa(tt.src,Na="sveltekitPublish/3sp.png")||n(tt,"src",Na),n(tt,"alt","github actions"),n(c,"id","deploy"),n(O,"id","back-btn"),n(O,"type","button"),n(O,"class","nes-btn is-primary"),n(O,"href",`${bo}/blog`),n(p,"class","container"),n(b,"class","main")},m(s,_){Xt(s,v,_),t(v,_t),t(v,Zt),t(v,$t),t(v,te),t(v,yt),t(yt,ee),Xt(s,Bt,_),A(G,s,_),Xt(s,Ht,_),Xt(s,b,_),t(b,bt),A(L,bt,null),t(b,ae),t(b,p),t(p,w),A(M,w,null),t(w,oe),t(w,wt),t(wt,re),t(w,ne),t(w,ot),t(ot,ie),t(p,le),t(p,u),t(u,kt),t(kt,rt),t(rt,se),t(u,de),t(u,It),t(It,nt),t(nt,he),t(u,pe),t(u,St),t(St,it),t(it,ce),t(u,fe),t(u,Pt),t(Pt,lt),t(lt,ue),t(u,ge),t(u,At),t(At,st),t(st,me),t(u,ve),t(u,Dt),t(Dt,dt),t(dt,Ee),t(p,_e),t(p,k),A(x,k,null),t(k,$e),t(k,R),t(R,ye),t(R,K),t(K,be),t(R,we),t(k,ke),t(k,ht),t(ht,Ie),t(ht,C),t(C,Se),t(p,Pe),t(p,j),A(B,j,null),t(j,Ae),t(j,Nt),t(Nt,De),t(p,Ne),t(p,E),A(H,E,null),t(E,Te),t(E,Tt),t(Tt,Ce),t(E,Oe),t(E,Ct),t(Ct,Ke),t(E,je),t(E,z),t(p,Ve),t(p,g),A(F,g,null),t(g,Ge),t(g,Ot),t(Ot,Le),t(g,Me),t(g,pt),t(pt,Y),t(Y,xe),t(Y,Re),t(Y,Be),t(g,He),t(g,W),t(W,ze),t(W,Kt),t(Kt,jt),t(jt,Fe),t(W,Ye),t(g,We),t(g,ct),t(ct,q),t(q,qe),t(q,Je),t(q,Ue),t(g,Qe),t(g,Vt),t(Vt,Xe),t(p,Ze),t(p,I),A(J,I,null),t(I,ta),t(I,Gt),t(Gt,ea),t(I,aa),t(I,U),t(p,oa),t(p,c),A(Q,c,null),t(c,ra),t(c,Lt),t(Lt,na),t(c,ia),t(c,ft),t(ft,X),t(X,la),t(X,sa),t(X,da),t(c,ha),t(c,Mt),t(Mt,pa),t(c,ca),t(c,ut),t(ut,Z),t(Z,fa),t(Z,ua),t(Z,ga),t(c,ma),t(c,xt),t(xt,va),t(c,Ea),t(c,tt),t(p,_a),t(p,O),t(O,$a),t(b,ya),t(b,Rt),A(et,Rt,null),zt=!0},p:Eo,i(s){zt||(D(G.$$.fragment,s),D(L.$$.fragment,s),D(M.$$.fragment,s),D(x.$$.fragment,s),D(B.$$.fragment,s),D(H.$$.fragment,s),D(F.$$.fragment,s),D(J.$$.fragment,s),D(Q.$$.fragment,s),D(et.$$.fragment,s),zt=!0)},o(s){N(G.$$.fragment,s),N(L.$$.fragment,s),N(M.$$.fragment,s),N(x.$$.fragment,s),N(B.$$.fragment,s),N(H.$$.fragment,s),N(F.$$.fragment,s),N(J.$$.fragment,s),N(Q.$$.fragment,s),N(et.$$.fragment,s),zt=!1},d(s){s&&o(v),s&&o(Bt),T(G,s),s&&o(Ht),s&&o(b),T(L),T(M),T(x),T(B),T(H),T(F),T(J),T(Q),T(et)}}}class Do extends uo{constructor(v){super(),go(this,v,null,wo,mo,{})}}export{Do as default};
