import{S as ds,i as cs,s as hs,w as v,k as i,e as s,t as d,x as y,m as o,c as n,a as r,d as a,h as c,b as e,f as qt,y as b,g as os,J as t,E as us,q as $,o as _,B as E}from"../chunks/index-cd4245c1.js";import{S as ps,N as ms,F as fs}from"../chunks/Footer-9c2a65ce.js";import{T as O}from"../chunks/Title-6ea0487f.js";import"../chunks/paths-c8fbcc1d.js";function gs(ls){let T,Bt,R,ct,J,Ut,h,W,C,Xt,Mt,Yt,Zt,ht,te,ee,u,Nt,H,ae,se,xt,V,ne,re,Ft,j,ie,oe,Jt,q,le,de,Ct,B,ce,he,Ht,L,ue,pe,Vt,G,me,fe,jt,K,ge,we,z,Q,ve,ut,ye,be,A,U,$e,pt,_e,Ee,mt,Re,Ae,S,X,Se,ft,Ie,ke,gt,We,Pe,I,Y,De,wt,Te,ze,vt,Oe,Me,f,Z,Ne,yt,xe,Fe,bt,Je,Ce,$t,He,Ve,_t,je,qe,k,tt,Be,Et,Le,Ge,Rt,Ke,Qe,g,et,Ue,At,Xe,Ye,at,St,Ze,M,ta,ea,st,nt,aa,va=`
  import { SeriesI32 } from \u201C../pkg\u201D;

  let s = new SeriesI32("oranges", [0,3,7,2]);

  console.log(s.display);

  // Output 
	
  +---------+
  | Oranges |
  +---------+
  | 0       |
  +---------+
  | 3       |
  +---------+
  | 7       |
  +---------+
  | 2       |
  +---------+
				`,sa,na,ra,w,rt,ia,It,oa,la,it,kt,da,N,ca,ha,ot,lt,ua,ya=`
  import { SeriesI32, DataFrame } from \u201C../pkg\u201D;

  let s1 = new SeriesI32("Apple", [1, 2, 3, 4, 5]);

  let s2 = new SeriesF64("Orange", [1.1, 2.1, 3.1, 4.1, 1.2]);

  let s3 = new SeriesSTR("Banana", ["ba", "na", "na", "na", "na"]);

  let df = new DataFrame([s1.toJson(), s2.toJson(), s3.toJson()]);

  console.log(df.display)

  // Output 

  +-------+--------+--------+
  | Apple | Orange | Banana |
  +-------+--------+--------+
  | 1     | 1.1    | ba     |
  +-------+--------+--------+
  | 2     | 2.1    | na     |
  +-------+--------+--------+
  | 3     | 3.1    | na     |
  +-------+--------+--------+
  | 4     | 4.1    | na     |
  +-------+--------+--------+
  | 5     | 1.2    | na     |
  +-------+--------+--------+
				`,pa,ma,fa,Wt,dt,Lt;return T=new ps({}),J=new ms({props:{curPage:"Blog"}}),C=new O({props:{type:2,title:"Entropy"}}),Q=new O({props:{type:5,title:"Introduction"}}),U=new O({props:{type:5,title:"What is ml-wasm/entropy"}}),X=new O({props:{type:5,title:"Why Ndarray?"}}),Y=new O({props:{type:5,title:"What is wasm-bindgen"}}),Z=new O({props:{type:5,title:"Why Rust?"}}),tt=new O({props:{type:5,title:"Why WebAssembly?"}}),et=new O({props:{type:5,title:"Series"}}),rt=new O({props:{type:5,title:"DataFrame"}}),dt=new fs({}),{c(){v(T.$$.fragment),Bt=i(),R=s("main"),ct=s("header"),v(J.$$.fragment),Ut=i(),h=s("main"),W=s("div"),v(C.$$.fragment),Xt=i(),Mt=s("h4"),Yt=d("Fast, Series and DataFrames powered by WebAssembly and Rust."),Zt=i(),ht=s("h5"),te=d("5th May 2022 ~ Dion Pinto"),ee=i(),u=s("div"),Nt=s("div"),H=s("a"),ae=d("Introduction"),se=i(),xt=s("div"),V=s("a"),ne=d("What is ml-wasm/entropy"),re=i(),Ft=s("div"),j=s("a"),ie=d("Why Ndarray"),oe=i(),Jt=s("div"),q=s("a"),le=d("What is wasm-bindgen"),de=i(),Ct=s("div"),B=s("a"),ce=d("Why Rust"),he=i(),Ht=s("div"),L=s("a"),ue=d("Why WebAssembly"),pe=i(),Vt=s("div"),G=s("a"),me=d("Series"),fe=i(),jt=s("div"),K=s("a"),ge=d("Dataframe"),we=i(),z=s("section"),v(Q.$$.fragment),ve=i(),ut=s("p"),ye=d(`Machine learning is an integral part of society. A fundamental cog in the machine learning
				wheel is data analysis, feature detection and manipulation along with visualisation.
				However, the current machine learning landscape is dominated by Python and its ML ecosystem
				consisting of NumPy, Pandas, Matplotlib and Sklearn. The problem with using python for this
				is that they need a python runtime on the system which is not available on browsers. The aim
				of this project is to build a data analysis and manipulation tool along with a plotting
				library that runs in the browser powered by WebAssembly and Rust.`),be=i(),A=s("section"),v(U.$$.fragment),$e=i(),pt=s("p"),_e=d(`Many organizations now run machine learning models on the browser. The most accessible way
				to interact with machine learning is through the browser as such using the browser for data
				preprocessing and wrangling is the logical next step.`),Ee=i(),mt=s("p"),Re=d(`Entropy stands for the degree of disorder and the ml-wasm/entropy library lets its users
				reduce the entropy of your data by structuring your data into series and dataframes from
				where they can manipulate the data, preprocess it and make it their own.`),Ae=i(),S=s("section"),v(X.$$.fragment),Se=i(),ft=s("p"),Ie=d(`The ndarray crate provides an n-dimensional container for general elements and for numerics.
				ml-wasm/entropy utilizes ndarray as its internal data representation. When we considered the
				creation of a series and dataframe like structures the options to consider for its internal
				data representation was a standard Rust vector or a ndarray.`),ke=i(),gt=s("p"),We=d(`The problem with utilizing a standard vector is we would have no access to fast and
				efficient operations which we would have to perform on the series and dataframes. The
				ndarray crate provides various methods which facilitate quick operations. It also provides
				various additional functionality such as its support with serde which allows us to quickly
				serialize and deserialize data from JavaScript to Rust and vice versa. Other than that,
				ndarray also supports rayon which gives us access to parallel iterators and parallel
				methods. ml-wasm/entropy utilizes ndarrays with the use of a ml-wasm/linalg utility wrapper.`),Pe=i(),I=s("section"),v(Y.$$.fragment),De=i(),wt=s("p"),Te=d(`It is a Rust library that allows wasm and JavaScript to interact with each other. This is
				the package that lets us write code in Rust and then talk to JavaScript and interact with
				it. It allows us to import JavaScript functionality into Rust such as DOM manipulation,
				console logging etc.`),ze=i(),vt=s("p"),Oe=d(`Wasm-bindgen allows the end user to access methods written in Rust with the advantages of
				its speed and added memory safety all in JavaScript. As it is compiled into wasm it also has
				near native speed, which is comparable to stock Rust.`),Me=i(),f=s("section"),v(Z.$$.fragment),Ne=i(),yt=s("p"),xe=d(`For the entire lifetime of programming languages there has always been the focus on either
				the speed of the language or the memory safety of the language. A classic example would be
				programming languages with or without a garbage collector. Languages with inbuilt garbage
				collector generally tend to be slower example ruby than the likes of those without one like
				C++. However, many memory safety issues arise due to a lack of a garbage collector.`),Fe=i(),bt=s("p"),Je=d(`Rust however comes up with a solution that is both fast since it does not require a garbage
				collector but also ensures memory safety with concepts such as ownership and borrowing.
				However, no solution is perfect and the cost of utilizing Rust is slower compilation time
				and many compilation errors along with a higher learning curve just to begin using Rust.`),Ce=i(),$t=s("p"),He=d(`For the purposes of this library however Rust is excellent as it has great support with
				libraries such as wasm-bindgen and excellent documentation with Rust used together with
				WebAssembly and tools such as wasm-pack.`),Ve=i(),_t=s("p"),je=d(`Senior software engineer Mohit Agarwal outlined his involvement with Rust in his blog. After
				evaluation of runtime performances of Rust against other popular compiled and interpreted
				languages like java and python, some surprising results were found. Rust is twice as fast
				when compared to Java but only uses 1% of its memory. When compared with python, Rust is 150
				times faster but it uses the same amount of memory. In a study by IBM, it was found that
				Rust and WebAssembly are nearly 15 times faster than Scala which is conventionally
				considered a high-performance language. Luca Palmieri published an article claiming that for
				simple machine tasks Rust is up to 25 times faster than Python.`),qe=i(),k=s("section"),v(tt.$$.fragment),Be=i(),Et=s("p"),Le=d(`WebAssembly is like a low-level assembly language which can be run on the browser. It allows
				code compiled on various languages to be run on the browser at nearly their native speeds.`),Ge=i(),Rt=s("p"),Ke=d(`Thus, for our library we will write the code in Rust and then compile it to WebAssembly,
				often abbreviated as wasm. Also, since the program will be compiled, the compiler can
				perform various compile time optimizations. Since, we are just writing Rust programs we can
				also utilize various features that it provides most notably memory safety without negatively
				impacting performance.`),Qe=i(),g=s("section"),v(et.$$.fragment),Ue=i(),At=s("p"),Xe=d(`A series consists of a column name and the data array, the array is represented as an
				ndarray utilizing the implementation of ml-wasm/linalg wrapper and can have possible types:
				Integer 32bit, Float 64bit or String. Multiple methods can be utilized on the series
				depending on the use case of the developer.`),Ye=i(),at=s("h4"),St=s("span"),Ze=d("# "),M=s("a"),ta=d("Documentation"),ea=i(),st=s("pre"),nt=s("code"),aa=d(`
				`),sa=d(va),na=d(`			
			`),ra=i(),w=s("section"),v(rt.$$.fragment),ia=i(),It=s("p"),oa=d(`A Dataframe is a combination of multiple series of different types. It forms a table
				structure which can be used for many methods to sanitize/manipulate data.`),la=i(),it=s("h4"),kt=s("span"),da=d("# "),N=s("a"),ca=d("Documentation"),ha=i(),ot=s("pre"),lt=s("code"),ua=d(`
				`),pa=d(ya),ma=d(`			
			`),fa=i(),Wt=s("footer"),v(dt.$$.fragment),this.h()},l(l){y(T.$$.fragment,l),Bt=o(l),R=n(l,"MAIN",{class:!0});var P=r(R);ct=n(P,"HEADER",{class:!0});var ba=r(ct);y(J.$$.fragment,ba),ba.forEach(a),Ut=o(P),h=n(P,"MAIN",{class:!0});var p=r(h);W=n(p,"DIV",{id:!0});var Pt=r(W);y(C.$$.fragment,Pt),Xt=o(Pt),Mt=n(Pt,"H4",{});var $a=r(Mt);Yt=c($a,"Fast, Series and DataFrames powered by WebAssembly and Rust."),$a.forEach(a),Zt=o(Pt),ht=n(Pt,"H5",{style:!0});var _a=r(ht);te=c(_a,"5th May 2022 ~ Dion Pinto"),_a.forEach(a),Pt.forEach(a),ee=o(p),u=n(p,"DIV",{id:!0,class:!0});var m=r(u);Nt=n(m,"DIV",{});var Ea=r(Nt);H=n(Ea,"A",{href:!0,class:!0});var Ra=r(H);ae=c(Ra,"Introduction"),Ra.forEach(a),Ea.forEach(a),se=o(m),xt=n(m,"DIV",{});var Aa=r(xt);V=n(Aa,"A",{href:!0,class:!0});var Sa=r(V);ne=c(Sa,"What is ml-wasm/entropy"),Sa.forEach(a),Aa.forEach(a),re=o(m),Ft=n(m,"DIV",{});var Ia=r(Ft);j=n(Ia,"A",{href:!0,class:!0});var ka=r(j);ie=c(ka,"Why Ndarray"),ka.forEach(a),Ia.forEach(a),oe=o(m),Jt=n(m,"DIV",{});var Wa=r(Jt);q=n(Wa,"A",{href:!0,class:!0});var Pa=r(q);le=c(Pa,"What is wasm-bindgen"),Pa.forEach(a),Wa.forEach(a),de=o(m),Ct=n(m,"DIV",{});var Da=r(Ct);B=n(Da,"A",{href:!0,class:!0});var Ta=r(B);ce=c(Ta,"Why Rust"),Ta.forEach(a),Da.forEach(a),he=o(m),Ht=n(m,"DIV",{});var za=r(Ht);L=n(za,"A",{href:!0,class:!0});var Oa=r(L);ue=c(Oa,"Why WebAssembly"),Oa.forEach(a),za.forEach(a),pe=o(m),Vt=n(m,"DIV",{});var Ma=r(Vt);G=n(Ma,"A",{href:!0,class:!0});var Na=r(G);me=c(Na,"Series"),Na.forEach(a),Ma.forEach(a),fe=o(m),jt=n(m,"DIV",{});var xa=r(jt);K=n(xa,"A",{href:!0,class:!0});var Fa=r(K);ge=c(Fa,"Dataframe"),Fa.forEach(a),xa.forEach(a),m.forEach(a),we=o(p),z=n(p,"SECTION",{id:!0,class:!0});var Gt=r(z);y(Q.$$.fragment,Gt),ve=o(Gt),ut=n(Gt,"P",{class:!0});var Ja=r(ut);ye=c(Ja,`Machine learning is an integral part of society. A fundamental cog in the machine learning
				wheel is data analysis, feature detection and manipulation along with visualisation.
				However, the current machine learning landscape is dominated by Python and its ML ecosystem
				consisting of NumPy, Pandas, Matplotlib and Sklearn. The problem with using python for this
				is that they need a python runtime on the system which is not available on browsers. The aim
				of this project is to build a data analysis and manipulation tool along with a plotting
				library that runs in the browser powered by WebAssembly and Rust.`),Ja.forEach(a),Gt.forEach(a),be=o(p),A=n(p,"SECTION",{id:!0,class:!0});var Dt=r(A);y(U.$$.fragment,Dt),$e=o(Dt),pt=n(Dt,"P",{class:!0});var Ca=r(pt);_e=c(Ca,`Many organizations now run machine learning models on the browser. The most accessible way
				to interact with machine learning is through the browser as such using the browser for data
				preprocessing and wrangling is the logical next step.`),Ca.forEach(a),Ee=o(Dt),mt=n(Dt,"P",{class:!0});var Ha=r(mt);Re=c(Ha,`Entropy stands for the degree of disorder and the ml-wasm/entropy library lets its users
				reduce the entropy of your data by structuring your data into series and dataframes from
				where they can manipulate the data, preprocess it and make it their own.`),Ha.forEach(a),Dt.forEach(a),Ae=o(p),S=n(p,"SECTION",{id:!0,class:!0});var Tt=r(S);y(X.$$.fragment,Tt),Se=o(Tt),ft=n(Tt,"P",{class:!0});var Va=r(ft);Ie=c(Va,`The ndarray crate provides an n-dimensional container for general elements and for numerics.
				ml-wasm/entropy utilizes ndarray as its internal data representation. When we considered the
				creation of a series and dataframe like structures the options to consider for its internal
				data representation was a standard Rust vector or a ndarray.`),Va.forEach(a),ke=o(Tt),gt=n(Tt,"P",{class:!0});var ja=r(gt);We=c(ja,`The problem with utilizing a standard vector is we would have no access to fast and
				efficient operations which we would have to perform on the series and dataframes. The
				ndarray crate provides various methods which facilitate quick operations. It also provides
				various additional functionality such as its support with serde which allows us to quickly
				serialize and deserialize data from JavaScript to Rust and vice versa. Other than that,
				ndarray also supports rayon which gives us access to parallel iterators and parallel
				methods. ml-wasm/entropy utilizes ndarrays with the use of a ml-wasm/linalg utility wrapper.`),ja.forEach(a),Tt.forEach(a),Pe=o(p),I=n(p,"SECTION",{id:!0,class:!0});var zt=r(I);y(Y.$$.fragment,zt),De=o(zt),wt=n(zt,"P",{class:!0});var qa=r(wt);Te=c(qa,`It is a Rust library that allows wasm and JavaScript to interact with each other. This is
				the package that lets us write code in Rust and then talk to JavaScript and interact with
				it. It allows us to import JavaScript functionality into Rust such as DOM manipulation,
				console logging etc.`),qa.forEach(a),ze=o(zt),vt=n(zt,"P",{class:!0});var Ba=r(vt);Oe=c(Ba,`Wasm-bindgen allows the end user to access methods written in Rust with the advantages of
				its speed and added memory safety all in JavaScript. As it is compiled into wasm it also has
				near native speed, which is comparable to stock Rust.`),Ba.forEach(a),zt.forEach(a),Me=o(p),f=n(p,"SECTION",{id:!0,class:!0});var D=r(f);y(Z.$$.fragment,D),Ne=o(D),yt=n(D,"P",{class:!0});var La=r(yt);xe=c(La,`For the entire lifetime of programming languages there has always been the focus on either
				the speed of the language or the memory safety of the language. A classic example would be
				programming languages with or without a garbage collector. Languages with inbuilt garbage
				collector generally tend to be slower example ruby than the likes of those without one like
				C++. However, many memory safety issues arise due to a lack of a garbage collector.`),La.forEach(a),Fe=o(D),bt=n(D,"P",{class:!0});var Ga=r(bt);Je=c(Ga,`Rust however comes up with a solution that is both fast since it does not require a garbage
				collector but also ensures memory safety with concepts such as ownership and borrowing.
				However, no solution is perfect and the cost of utilizing Rust is slower compilation time
				and many compilation errors along with a higher learning curve just to begin using Rust.`),Ga.forEach(a),Ce=o(D),$t=n(D,"P",{class:!0});var Ka=r($t);He=c(Ka,`For the purposes of this library however Rust is excellent as it has great support with
				libraries such as wasm-bindgen and excellent documentation with Rust used together with
				WebAssembly and tools such as wasm-pack.`),Ka.forEach(a),Ve=o(D),_t=n(D,"P",{class:!0});var Qa=r(_t);je=c(Qa,`Senior software engineer Mohit Agarwal outlined his involvement with Rust in his blog. After
				evaluation of runtime performances of Rust against other popular compiled and interpreted
				languages like java and python, some surprising results were found. Rust is twice as fast
				when compared to Java but only uses 1% of its memory. When compared with python, Rust is 150
				times faster but it uses the same amount of memory. In a study by IBM, it was found that
				Rust and WebAssembly are nearly 15 times faster than Scala which is conventionally
				considered a high-performance language. Luca Palmieri published an article claiming that for
				simple machine tasks Rust is up to 25 times faster than Python.`),Qa.forEach(a),D.forEach(a),qe=o(p),k=n(p,"SECTION",{id:!0,class:!0});var Ot=r(k);y(tt.$$.fragment,Ot),Be=o(Ot),Et=n(Ot,"P",{class:!0});var Ua=r(Et);Le=c(Ua,`WebAssembly is like a low-level assembly language which can be run on the browser. It allows
				code compiled on various languages to be run on the browser at nearly their native speeds.`),Ua.forEach(a),Ge=o(Ot),Rt=n(Ot,"P",{class:!0});var Xa=r(Rt);Ke=c(Xa,`Thus, for our library we will write the code in Rust and then compile it to WebAssembly,
				often abbreviated as wasm. Also, since the program will be compiled, the compiler can
				perform various compile time optimizations. Since, we are just writing Rust programs we can
				also utilize various features that it provides most notably memory safety without negatively
				impacting performance.`),Xa.forEach(a),Ot.forEach(a),Qe=o(p),g=n(p,"SECTION",{id:!0,class:!0});var x=r(g);y(et.$$.fragment,x),Ue=o(x),At=n(x,"P",{class:!0});var Ya=r(At);Xe=c(Ya,`A series consists of a column name and the data array, the array is represented as an
				ndarray utilizing the implementation of ml-wasm/linalg wrapper and can have possible types:
				Integer 32bit, Float 64bit or String. Multiple methods can be utilized on the series
				depending on the use case of the developer.`),Ya.forEach(a),Ye=o(x),at=n(x,"H4",{style:!0});var ga=r(at);St=n(ga,"SPAN",{style:!0});var Za=r(St);Ze=c(Za,"# "),Za.forEach(a),M=n(ga,"A",{href:!0,target:!0,class:!0});var ts=r(M);ta=c(ts,"Documentation"),ts.forEach(a),ga.forEach(a),ea=o(x),st=n(x,"PRE",{id:!0,class:!0});var es=r(st);nt=n(es,"CODE",{});var Kt=r(nt);aa=c(Kt,`
				`),sa=c(Kt,va),na=c(Kt,`			
			`),Kt.forEach(a),es.forEach(a),x.forEach(a),ra=o(p),w=n(p,"SECTION",{id:!0,class:!0});var F=r(w);y(rt.$$.fragment,F),ia=o(F),It=n(F,"P",{class:!0});var as=r(It);oa=c(as,`A Dataframe is a combination of multiple series of different types. It forms a table
				structure which can be used for many methods to sanitize/manipulate data.`),as.forEach(a),la=o(F),it=n(F,"H4",{style:!0});var wa=r(it);kt=n(wa,"SPAN",{style:!0});var ss=r(kt);da=c(ss,"# "),ss.forEach(a),N=n(wa,"A",{href:!0,target:!0,class:!0});var ns=r(N);ca=c(ns,"Documentation"),ns.forEach(a),wa.forEach(a),ha=o(F),ot=n(F,"PRE",{id:!0,class:!0});var rs=r(ot);lt=n(rs,"CODE",{});var Qt=r(lt);ua=c(Qt,`
				`),pa=c(Qt,ya),ma=c(Qt,`			
			`),Qt.forEach(a),rs.forEach(a),F.forEach(a),p.forEach(a),fa=o(P),Wt=n(P,"FOOTER",{class:!0});var is=r(Wt);y(dt.$$.fragment,is),is.forEach(a),P.forEach(a),this.h()},h(){e(ct,"class","svelte-auedp1"),qt(ht,"font-style","italic"),e(W,"id","title"),e(H,"href","#introduction"),e(H,"class","svelte-auedp1"),e(V,"href","#ml-wasm/entropy"),e(V,"class","svelte-auedp1"),e(j,"href","#ndarray"),e(j,"class","svelte-auedp1"),e(q,"href","#wasm-bindgen"),e(q,"class","svelte-auedp1"),e(B,"href","#rust"),e(B,"class","svelte-auedp1"),e(L,"href","#wasm"),e(L,"class","svelte-auedp1"),e(G,"href","#series"),e(G,"class","svelte-auedp1"),e(K,"href","#df"),e(K,"class","svelte-auedp1"),e(u,"id","index"),e(u,"class","nes-container is-rounded is-dark svelte-auedp1"),e(ut,"class","svelte-auedp1"),e(z,"id","introduction"),e(z,"class","svelte-auedp1"),e(pt,"class","svelte-auedp1"),e(mt,"class","svelte-auedp1"),e(A,"id","ml-wasm/entropy"),e(A,"class","svelte-auedp1"),e(ft,"class","svelte-auedp1"),e(gt,"class","svelte-auedp1"),e(S,"id","ndarray"),e(S,"class","svelte-auedp1"),e(wt,"class","svelte-auedp1"),e(vt,"class","svelte-auedp1"),e(I,"id","wasm-bindgen"),e(I,"class","svelte-auedp1"),e(yt,"class","svelte-auedp1"),e(bt,"class","svelte-auedp1"),e($t,"class","svelte-auedp1"),e(_t,"class","svelte-auedp1"),e(f,"id","rust"),e(f,"class","svelte-auedp1"),e(Et,"class","svelte-auedp1"),e(Rt,"class","svelte-auedp1"),e(k,"id","wasm"),e(k,"class","svelte-auedp1"),e(At,"class","svelte-auedp1"),qt(St,"color","#209cee"),e(M,"href","https://ml-wasm.github.io/entropy/docs/series"),e(M,"target","_blank"),e(M,"class","svelte-auedp1"),qt(at,"font-style","italic"),e(st,"id","block"),e(st,"class","svelte-auedp1"),e(g,"id","series"),e(g,"class","svelte-auedp1"),e(It,"class","svelte-auedp1"),qt(kt,"color","#209cee"),e(N,"href","https://ml-wasm.github.io/entropy/docs/dataframes"),e(N,"target","_blank"),e(N,"class","svelte-auedp1"),qt(it,"font-style","italic"),e(ot,"id","block"),e(ot,"class","svelte-auedp1"),e(w,"id","df"),e(w,"class","svelte-auedp1"),e(h,"class","container svelte-auedp1"),e(Wt,"class","svelte-auedp1"),e(R,"class","main svelte-auedp1")},m(l,P){b(T,l,P),os(l,Bt,P),os(l,R,P),t(R,ct),b(J,ct,null),t(R,Ut),t(R,h),t(h,W),b(C,W,null),t(W,Xt),t(W,Mt),t(Mt,Yt),t(W,Zt),t(W,ht),t(ht,te),t(h,ee),t(h,u),t(u,Nt),t(Nt,H),t(H,ae),t(u,se),t(u,xt),t(xt,V),t(V,ne),t(u,re),t(u,Ft),t(Ft,j),t(j,ie),t(u,oe),t(u,Jt),t(Jt,q),t(q,le),t(u,de),t(u,Ct),t(Ct,B),t(B,ce),t(u,he),t(u,Ht),t(Ht,L),t(L,ue),t(u,pe),t(u,Vt),t(Vt,G),t(G,me),t(u,fe),t(u,jt),t(jt,K),t(K,ge),t(h,we),t(h,z),b(Q,z,null),t(z,ve),t(z,ut),t(ut,ye),t(h,be),t(h,A),b(U,A,null),t(A,$e),t(A,pt),t(pt,_e),t(A,Ee),t(A,mt),t(mt,Re),t(h,Ae),t(h,S),b(X,S,null),t(S,Se),t(S,ft),t(ft,Ie),t(S,ke),t(S,gt),t(gt,We),t(h,Pe),t(h,I),b(Y,I,null),t(I,De),t(I,wt),t(wt,Te),t(I,ze),t(I,vt),t(vt,Oe),t(h,Me),t(h,f),b(Z,f,null),t(f,Ne),t(f,yt),t(yt,xe),t(f,Fe),t(f,bt),t(bt,Je),t(f,Ce),t(f,$t),t($t,He),t(f,Ve),t(f,_t),t(_t,je),t(h,qe),t(h,k),b(tt,k,null),t(k,Be),t(k,Et),t(Et,Le),t(k,Ge),t(k,Rt),t(Rt,Ke),t(h,Qe),t(h,g),b(et,g,null),t(g,Ue),t(g,At),t(At,Xe),t(g,Ye),t(g,at),t(at,St),t(St,Ze),t(at,M),t(M,ta),t(g,ea),t(g,st),t(st,nt),t(nt,aa),t(nt,sa),t(nt,na),t(h,ra),t(h,w),b(rt,w,null),t(w,ia),t(w,It),t(It,oa),t(w,la),t(w,it),t(it,kt),t(kt,da),t(it,N),t(N,ca),t(w,ha),t(w,ot),t(ot,lt),t(lt,ua),t(lt,pa),t(lt,ma),t(R,fa),t(R,Wt),b(dt,Wt,null),Lt=!0},p:us,i(l){Lt||($(T.$$.fragment,l),$(J.$$.fragment,l),$(C.$$.fragment,l),$(Q.$$.fragment,l),$(U.$$.fragment,l),$(X.$$.fragment,l),$(Y.$$.fragment,l),$(Z.$$.fragment,l),$(tt.$$.fragment,l),$(et.$$.fragment,l),$(rt.$$.fragment,l),$(dt.$$.fragment,l),Lt=!0)},o(l){_(T.$$.fragment,l),_(J.$$.fragment,l),_(C.$$.fragment,l),_(Q.$$.fragment,l),_(U.$$.fragment,l),_(X.$$.fragment,l),_(Y.$$.fragment,l),_(Z.$$.fragment,l),_(tt.$$.fragment,l),_(et.$$.fragment,l),_(rt.$$.fragment,l),_(dt.$$.fragment,l),Lt=!1},d(l){E(T,l),l&&a(Bt),l&&a(R),E(J),E(C),E(Q),E(U),E(X),E(Y),E(Z),E(tt),E(et),E(rt),E(dt)}}}class $s extends ds{constructor(T){super(),cs(this,T,null,gs,hs,{})}}export{$s as default};
