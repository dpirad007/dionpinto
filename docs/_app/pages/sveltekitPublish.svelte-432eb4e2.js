import{S as uo,i as go,s as vo,e,k as i,t as d,w as S,c as a,a as r,m as l,h,d as o,x as P,b as n,f as mo,a3 as wa,g as Xt,J as t,y as A,E as _o,q as N,o as T,B as D}from"../chunks/index-cd4245c1.js";import{S as Eo,N as $o,F as yo}from"../chunks/Footer-8b9c5841.js";import{T as at}from"../chunks/Title-6ea0487f.js";import{b as bo}from"../chunks/paths-c8fbcc1d.js";/* empty css                     */function wo(fo){let m,Et,Zt,$t,te,yt,ee,Bt,L,Ht,b,bt,M,ae,p,w,x,oe,wt,re,ne,ot,ie,le,u,kt,rt,se,de,It,nt,he,pe,St,it,ce,fe,Pt,lt,ue,ge,At,st,ve,me,Nt,dt,_e,Ee,k,G,$e,R,ye,O,be,we,ke,ht,Ie,K,Se,Pe,j,B,Ae,Tt,Ne,Te,_,H,De,Dt,Ce,Oe,Ct,Ke,je,z,ka,Ve,g,F,Le,Ot,Me,xe,pt,Y,Ge,Ia=`
  npm i @sveltejs/adapter-static
				`,Re,Be,He,q,ze,Kt,jt,Fe,Ye,qe,ct,W,We,Sa=`
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
				`,Je,Ue,Qe,Vt,Xe,Ze,I,J,ta,Lt,ea,aa,U,Pa,oa,c,Q,ra,Mt,na,ia,ft,X,la,Aa=`
  npm run build
				`,sa,da,ha,xt,pa,ca,ut,Z,fa,Na=`
  git add docs

  git commit -m "Changes commited"

  git push
				`,ua,ga,va,Gt,ma,_a,tt,Ta,Ea,C,$a,ya,Rt,et,zt;return L=new Eo({}),M=new $o({props:{curPage:"Blog"}}),x=new at({props:{type:2,title:"SvelteKit on gh-pages"}}),G=new at({props:{type:5,title:"Introduction"}}),B=new at({props:{type:5,title:"Initialization"}}),H=new at({props:{type:5,title:"Configure Github Pages"}}),F=new at({props:{type:5,title:"Configure SvelteKit"}}),J=new at({props:{type:5,title:"Add .nojekyll file in static"}}),Q=new at({props:{type:5,title:"Deploy"}}),et=new yo({}),{c(){m=e("head"),Et=e("meta"),Zt=i(),$t=e("meta"),te=i(),yt=e("title"),ee=d("Publish SvelteKit Apps on gh-pages"),Bt=i(),S(L.$$.fragment),Ht=i(),b=e("main"),bt=e("header"),S(M.$$.fragment),ae=i(),p=e("main"),w=e("div"),S(x.$$.fragment),oe=i(),wt=e("h4"),re=d("Publish SvelteKit Apps on gh-pages"),ne=i(),ot=e("h5"),ie=d("12th May 2022 ~ Dion Pinto"),le=i(),u=e("div"),kt=e("div"),rt=e("a"),se=d("Introduction"),de=i(),It=e("div"),nt=e("a"),he=d("Initialization"),pe=i(),St=e("div"),it=e("a"),ce=d("Configure Github Pages"),fe=i(),Pt=e("div"),lt=e("a"),ue=d("Configure SvelteKit"),ge=i(),At=e("div"),st=e("a"),ve=d("Add .nojekyll file in static"),me=i(),Nt=e("div"),dt=e("a"),_e=d("Deploy"),Ee=i(),k=e("section"),S(G.$$.fragment),$e=i(),R=e("p"),ye=d(`I chose SvelteKit to build my portfolio website because I wanted to learn svelte or atleast
				get a feel for the framework. While utilising SvelteKit I came across some hurdles and
				challenges one of them being publishing the finished site, there are a plethora of resources
				available to publish a SvelteKit app to gh-pages however the approach via the svelteLand
				sveltekit blog site
				`),O=e("a"),be=d("(Svelteland Link)"),we=d(" did not work for me (NOTE: I am a moron who makes a lot of mistakes!!!)"),ke=i(),ht=e("p"),Ie=d("You can find the git repository here "),K=e("a"),Se=d("(Repository Link)"),Pe=i(),j=e("section"),S(B.$$.fragment),Ae=i(),Tt=e("p"),Ne=d(`I am assuming that you already have created a SvelteKit application and a git repo for that
				application. If not, create them now.`),Te=i(),_=e("section"),S(H.$$.fragment),De=i(),Dt=e("p"),Ce=d(`The approach on the svelteLand blog was to host the site on a separate gh-pages branch on
				the /root folder, this would be my suggested approach as well as having a separate branch
				for the deployed jargon code is better, the main branch remains relatively clutter free.
				However, due to an unrelated error, I mistakenly thought this approach was wrong and I
				hosted the site in the /docs folder on the main branch (NOTE: Both of these approaches would
				work just fine.)`),Oe=i(),Ct=e("p"),Ke=d("You can configure it as follows: Go to the repository settings -> pages"),je=i(),z=e("img"),Ve=i(),g=e("section"),S(F.$$.fragment),Le=i(),Ot=e("p"),Me=d(`First we need to install the SvelteKit Static Adapter. It will output our app as a static
				set of files instead of a dynamic app.`),xe=i(),pt=e("pre"),Y=e("code"),Ge=d(`
				`),Re=d(Ia),Be=d(`			
			`),He=i(),q=e("p"),ze=d("Now you need to edit "),Kt=e("i"),jt=e("u"),Fe=d("svelte.config.js"),Ye=d(" as follows"),qe=i(),ct=e("pre"),W=e("code"),We=d(`
				`),Je=d(Sa),Ue=d(`			
			`),Qe=i(),Vt=e("p"),Xe=d(`we target the /docs folder. (NOTE: this is beacuse of the approach I took hosting the site
				on main /docs on gh-pages)`),Ze=i(),I=e("section"),S(J.$$.fragment),ta=i(),Lt=e("p"),ea=d("Add a empty .nojekyll in the static folder."),aa=i(),U=e("img"),oa=i(),c=e("section"),S(Q.$$.fragment),ra=i(),Mt=e("p"),na=d("We can finally deploy out application."),ia=i(),ft=e("pre"),X=e("code"),la=d(`
				`),sa=d(Aa),da=d(`			
			`),ha=i(),xt=e("p"),pa=d("Commit and push your changes"),ca=i(),ut=e("pre"),Z=e("code"),fa=d(`
				`),ua=d(Na),ga=d(`			
			`),va=i(),Gt=e("p"),ma=d("gh-pages will then deploy your site"),_a=i(),tt=e("img"),Ea=i(),C=e("a"),$a=d("Back"),ya=i(),Rt=e("footer"),S(et.$$.fragment),this.h()},l(s){m=a(s,"HEAD",{});var E=r(m);Et=a(E,"META",{name:!0,content:!0}),Zt=l(E),$t=a(E,"META",{name:!0,content:!0}),te=l(E),yt=a(E,"TITLE",{});var Da=r(yt);ee=h(Da,"Publish SvelteKit Apps on gh-pages"),Da.forEach(o),E.forEach(o),Bt=l(s),P(L.$$.fragment,s),Ht=l(s),b=a(s,"MAIN",{class:!0});var gt=r(b);bt=a(gt,"HEADER",{});var Ca=r(bt);P(M.$$.fragment,Ca),Ca.forEach(o),ae=l(gt),p=a(gt,"MAIN",{class:!0});var f=r(p);w=a(f,"DIV",{id:!0});var vt=r(w);P(x.$$.fragment,vt),oe=l(vt),wt=a(vt,"H4",{});var Oa=r(wt);re=h(Oa,"Publish SvelteKit Apps on gh-pages"),Oa.forEach(o),ne=l(vt),ot=a(vt,"H5",{style:!0});var Ka=r(ot);ie=h(Ka,"12th May 2022 ~ Dion Pinto"),Ka.forEach(o),vt.forEach(o),le=l(f),u=a(f,"DIV",{id:!0,class:!0});var $=r(u);kt=a($,"DIV",{});var ja=r(kt);rt=a(ja,"A",{href:!0});var Va=r(rt);se=h(Va,"Introduction"),Va.forEach(o),ja.forEach(o),de=l($),It=a($,"DIV",{});var La=r(It);nt=a(La,"A",{href:!0});var Ma=r(nt);he=h(Ma,"Initialization"),Ma.forEach(o),La.forEach(o),pe=l($),St=a($,"DIV",{});var xa=r(St);it=a(xa,"A",{href:!0});var Ga=r(it);ce=h(Ga,"Configure Github Pages"),Ga.forEach(o),xa.forEach(o),fe=l($),Pt=a($,"DIV",{});var Ra=r(Pt);lt=a(Ra,"A",{href:!0});var Ba=r(lt);ue=h(Ba,"Configure SvelteKit"),Ba.forEach(o),Ra.forEach(o),ge=l($),At=a($,"DIV",{});var Ha=r(At);st=a(Ha,"A",{href:!0});var za=r(st);ve=h(za,"Add .nojekyll file in static"),za.forEach(o),Ha.forEach(o),me=l($),Nt=a($,"DIV",{});var Fa=r(Nt);dt=a(Fa,"A",{href:!0});var Ya=r(dt);_e=h(Ya,"Deploy"),Ya.forEach(o),Fa.forEach(o),$.forEach(o),Ee=l(f),k=a(f,"SECTION",{id:!0});var mt=r(k);P(G.$$.fragment,mt),$e=l(mt),R=a(mt,"P",{});var Ft=r(R);ye=h(Ft,`I chose SvelteKit to build my portfolio website because I wanted to learn svelte or atleast
				get a feel for the framework. While utilising SvelteKit I came across some hurdles and
				challenges one of them being publishing the finished site, there are a plethora of resources
				available to publish a SvelteKit app to gh-pages however the approach via the svelteLand
				sveltekit blog site
				`),O=a(Ft,"A",{id:!0,href:!0,target:!0});var qa=r(O);be=h(qa,"(Svelteland Link)"),qa.forEach(o),we=h(Ft," did not work for me (NOTE: I am a moron who makes a lot of mistakes!!!)"),Ft.forEach(o),ke=l(mt),ht=a(mt,"P",{});var ba=r(ht);Ie=h(ba,"You can find the git repository here "),K=a(ba,"A",{id:!0,href:!0,target:!0});var Wa=r(K);Se=h(Wa,"(Repository Link)"),Wa.forEach(o),ba.forEach(o),mt.forEach(o),Pe=l(f),j=a(f,"SECTION",{id:!0});var Yt=r(j);P(B.$$.fragment,Yt),Ae=l(Yt),Tt=a(Yt,"P",{});var Ja=r(Tt);Ne=h(Ja,`I am assuming that you already have created a SvelteKit application and a git repo for that
				application. If not, create them now.`),Ja.forEach(o),Yt.forEach(o),Te=l(f),_=a(f,"SECTION",{id:!0});var V=r(_);P(H.$$.fragment,V),De=l(V),Dt=a(V,"P",{});var Ua=r(Dt);Ce=h(Ua,`The approach on the svelteLand blog was to host the site on a separate gh-pages branch on
				the /root folder, this would be my suggested approach as well as having a separate branch
				for the deployed jargon code is better, the main branch remains relatively clutter free.
				However, due to an unrelated error, I mistakenly thought this approach was wrong and I
				hosted the site in the /docs folder on the main branch (NOTE: Both of these approaches would
				work just fine.)`),Ua.forEach(o),Oe=l(V),Ct=a(V,"P",{});var Qa=r(Ct);Ke=h(Qa,"You can configure it as follows: Go to the repository settings -> pages"),Qa.forEach(o),je=l(V),z=a(V,"IMG",{id:!0,src:!0,alt:!0}),V.forEach(o),Ve=l(f),g=a(f,"SECTION",{id:!0});var y=r(g);P(F.$$.fragment,y),Le=l(y),Ot=a(y,"P",{});var Xa=r(Ot);Me=h(Xa,`First we need to install the SvelteKit Static Adapter. It will output our app as a static
				set of files instead of a dynamic app.`),Xa.forEach(o),xe=l(y),pt=a(y,"PRE",{id:!0});var Za=r(pt);Y=a(Za,"CODE",{});var qt=r(Y);Ge=h(qt,`
				`),Re=h(qt,Ia),Be=h(qt,`			
			`),qt.forEach(o),Za.forEach(o),He=l(y),q=a(y,"P",{});var Wt=r(q);ze=h(Wt,"Now you need to edit "),Kt=a(Wt,"I",{});var to=r(Kt);jt=a(to,"U",{});var eo=r(jt);Fe=h(eo,"svelte.config.js"),eo.forEach(o),to.forEach(o),Ye=h(Wt," as follows"),Wt.forEach(o),qe=l(y),ct=a(y,"PRE",{id:!0});var ao=r(ct);W=a(ao,"CODE",{});var Jt=r(W);We=h(Jt,`
				`),Je=h(Jt,Sa),Ue=h(Jt,`			
			`),Jt.forEach(o),ao.forEach(o),Qe=l(y),Vt=a(y,"P",{});var oo=r(Vt);Xe=h(oo,`we target the /docs folder. (NOTE: this is beacuse of the approach I took hosting the site
				on main /docs on gh-pages)`),oo.forEach(o),y.forEach(o),Ze=l(f),I=a(f,"SECTION",{id:!0});var _t=r(I);P(J.$$.fragment,_t),ta=l(_t),Lt=a(_t,"P",{});var ro=r(Lt);ea=h(ro,"Add a empty .nojekyll in the static folder."),ro.forEach(o),aa=l(_t),U=a(_t,"IMG",{id:!0,src:!0,alt:!0}),_t.forEach(o),oa=l(f),c=a(f,"SECTION",{id:!0});var v=r(c);P(Q.$$.fragment,v),ra=l(v),Mt=a(v,"P",{});var no=r(Mt);na=h(no,"We can finally deploy out application."),no.forEach(o),ia=l(v),ft=a(v,"PRE",{id:!0});var io=r(ft);X=a(io,"CODE",{});var Ut=r(X);la=h(Ut,`
				`),sa=h(Ut,Aa),da=h(Ut,`			
			`),Ut.forEach(o),io.forEach(o),ha=l(v),xt=a(v,"P",{});var lo=r(xt);pa=h(lo,"Commit and push your changes"),lo.forEach(o),ca=l(v),ut=a(v,"PRE",{id:!0});var so=r(ut);Z=a(so,"CODE",{});var Qt=r(Z);fa=h(Qt,`
				`),ua=h(Qt,Na),ga=h(Qt,`			
			`),Qt.forEach(o),so.forEach(o),va=l(v),Gt=a(v,"P",{});var ho=r(Gt);ma=h(ho,"gh-pages will then deploy your site"),ho.forEach(o),_a=l(v),tt=a(v,"IMG",{id:!0,src:!0,alt:!0}),v.forEach(o),Ea=l(f),C=a(f,"A",{id:!0,type:!0,class:!0,href:!0});var po=r(C);$a=h(po,"Back"),po.forEach(o),f.forEach(o),ya=l(gt),Rt=a(gt,"FOOTER",{});var co=r(Rt);P(et.$$.fragment,co),co.forEach(o),gt.forEach(o),this.h()},h(){n(Et,"name","author"),n(Et,"content","Dion Pinto"),n($t,"name","description"),n($t,"content","Publish SvelteKit Apps on gh-pages"),mo(ot,"font-style","italic"),n(w,"id","title"),n(rt,"href","#introduction"),n(nt,"href","#initialization"),n(it,"href","#gh-pages"),n(lt,"href","#config-sk"),n(st,"href","#nojekyll"),n(dt,"href","#deploy"),n(u,"id","index"),n(u,"class","nes-container is-rounded is-dark"),n(O,"id","link"),n(O,"href","https://svelteland.github.io/svelte-kit-blog-demo/deply-to-github"),n(O,"target","_blank"),n(K,"id","link"),n(K,"href","https://github.com/dpirad007/dionpinto"),n(K,"target","_blank"),n(k,"id","introduction"),n(j,"id","initialization"),n(z,"id","image"),wa(z.src,ka="sveltekitPublish/1sp.png")||n(z,"src",ka),n(z,"alt","github pages"),n(_,"id","gh-pages"),n(pt,"id","block"),n(ct,"id","block"),n(g,"id","config-sk"),n(U,"id","image"),wa(U.src,Pa="sveltekitPublish/2sp.png")||n(U,"src",Pa),n(U,"alt",".nojekyll"),n(I,"id","nojekyll"),n(ft,"id","block"),n(ut,"id","block"),n(tt,"id","image"),wa(tt.src,Ta="sveltekitPublish/3sp.png")||n(tt,"src",Ta),n(tt,"alt","github actions"),n(c,"id","deploy"),n(C,"id","back-btn"),n(C,"type","button"),n(C,"class","nes-btn is-primary"),n(C,"href",`${bo}/blog`),n(p,"class","container svelte-qdub48"),n(b,"class","main")},m(s,E){Xt(s,m,E),t(m,Et),t(m,Zt),t(m,$t),t(m,te),t(m,yt),t(yt,ee),Xt(s,Bt,E),A(L,s,E),Xt(s,Ht,E),Xt(s,b,E),t(b,bt),A(M,bt,null),t(b,ae),t(b,p),t(p,w),A(x,w,null),t(w,oe),t(w,wt),t(wt,re),t(w,ne),t(w,ot),t(ot,ie),t(p,le),t(p,u),t(u,kt),t(kt,rt),t(rt,se),t(u,de),t(u,It),t(It,nt),t(nt,he),t(u,pe),t(u,St),t(St,it),t(it,ce),t(u,fe),t(u,Pt),t(Pt,lt),t(lt,ue),t(u,ge),t(u,At),t(At,st),t(st,ve),t(u,me),t(u,Nt),t(Nt,dt),t(dt,_e),t(p,Ee),t(p,k),A(G,k,null),t(k,$e),t(k,R),t(R,ye),t(R,O),t(O,be),t(R,we),t(k,ke),t(k,ht),t(ht,Ie),t(ht,K),t(K,Se),t(p,Pe),t(p,j),A(B,j,null),t(j,Ae),t(j,Tt),t(Tt,Ne),t(p,Te),t(p,_),A(H,_,null),t(_,De),t(_,Dt),t(Dt,Ce),t(_,Oe),t(_,Ct),t(Ct,Ke),t(_,je),t(_,z),t(p,Ve),t(p,g),A(F,g,null),t(g,Le),t(g,Ot),t(Ot,Me),t(g,xe),t(g,pt),t(pt,Y),t(Y,Ge),t(Y,Re),t(Y,Be),t(g,He),t(g,q),t(q,ze),t(q,Kt),t(Kt,jt),t(jt,Fe),t(q,Ye),t(g,qe),t(g,ct),t(ct,W),t(W,We),t(W,Je),t(W,Ue),t(g,Qe),t(g,Vt),t(Vt,Xe),t(p,Ze),t(p,I),A(J,I,null),t(I,ta),t(I,Lt),t(Lt,ea),t(I,aa),t(I,U),t(p,oa),t(p,c),A(Q,c,null),t(c,ra),t(c,Mt),t(Mt,na),t(c,ia),t(c,ft),t(ft,X),t(X,la),t(X,sa),t(X,da),t(c,ha),t(c,xt),t(xt,pa),t(c,ca),t(c,ut),t(ut,Z),t(Z,fa),t(Z,ua),t(Z,ga),t(c,va),t(c,Gt),t(Gt,ma),t(c,_a),t(c,tt),t(p,Ea),t(p,C),t(C,$a),t(b,ya),t(b,Rt),A(et,Rt,null),zt=!0},p:_o,i(s){zt||(N(L.$$.fragment,s),N(M.$$.fragment,s),N(x.$$.fragment,s),N(G.$$.fragment,s),N(B.$$.fragment,s),N(H.$$.fragment,s),N(F.$$.fragment,s),N(J.$$.fragment,s),N(Q.$$.fragment,s),N(et.$$.fragment,s),zt=!0)},o(s){T(L.$$.fragment,s),T(M.$$.fragment,s),T(x.$$.fragment,s),T(G.$$.fragment,s),T(B.$$.fragment,s),T(H.$$.fragment,s),T(F.$$.fragment,s),T(J.$$.fragment,s),T(Q.$$.fragment,s),T(et.$$.fragment,s),zt=!1},d(s){s&&o(m),s&&o(Bt),D(L,s),s&&o(Ht),s&&o(b),D(M),D(x),D(G),D(B),D(H),D(F),D(J),D(Q),D(et)}}}class No extends uo{constructor(m){super(),go(this,m,null,wo,vo,{})}}export{No as default};
