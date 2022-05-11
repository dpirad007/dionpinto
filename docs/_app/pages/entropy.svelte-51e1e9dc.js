import{S as cs,i as hs,s as ds,w as v,k as i,e as s,t as c,x as y,m as o,c as n,a as r,d as a,h,b as e,f as qt,y as b,g as os,J as t,E as ms,q as $,o as _,B as E}from"../chunks/index-76f6fa9d.js";import{S as us,N as ps,F as ws}from"../chunks/Footer-05b0ec9f.js";import{T as O}from"../chunks/Title-dabd03a8.js";import"../chunks/paths-d49efff7.js";function fs(ls){let D,Bt,z,ht,J,Ut,d,k,C,Xt,Mt,Yt,Zt,dt,te,ee,m,Nt,H,ae,se,xt,V,ne,re,Ft,j,ie,oe,Jt,q,le,ce,Ct,B,he,de,Ht,L,me,ue,Vt,G,pe,we,jt,K,fe,ge,T,Q,ve,mt,ye,be,R,U,$e,ut,_e,Ee,pt,ze,Re,A,X,Ae,wt,Se,Ie,ft,ke,We,S,Y,Pe,gt,De,Te,vt,Oe,Me,w,Z,Ne,yt,xe,Fe,bt,Je,Ce,$t,He,Ve,_t,je,qe,I,tt,Be,Et,Le,Ge,zt,Ke,Qe,f,et,Ue,Rt,Xe,Ye,at,At,Ze,M,ta,ea,st,nt,aa,va=`
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
				`,sa,na,ra,g,rt,ia,St,oa,la,it,It,ca,N,ha,da,ot,lt,ma,ya=`
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
				`,ua,pa,wa,kt,ct,Lt;return D=new us({}),J=new ps({props:{curPage:"Blog"}}),C=new O({props:{type:2,title:"Entropy"}}),Q=new O({props:{type:5,title:"Introduction"}}),U=new O({props:{type:5,title:"What is ml-wasm/entropy"}}),X=new O({props:{type:5,title:"Why Ndarray?"}}),Y=new O({props:{type:5,title:"What is wasm-bindgen"}}),Z=new O({props:{type:5,title:"Why Rust?"}}),tt=new O({props:{type:5,title:"Why WebAssembly?"}}),et=new O({props:{type:5,title:"Series"}}),rt=new O({props:{type:5,title:"DatFrame"}}),ct=new ws({}),{c(){v(D.$$.fragment),Bt=i(),z=s("main"),ht=s("header"),v(J.$$.fragment),Ut=i(),d=s("main"),k=s("div"),v(C.$$.fragment),Xt=i(),Mt=s("h4"),Yt=c("Fast, Series and DataFrames powered by WebAssembly and Rust."),Zt=i(),dt=s("h5"),te=c("5th May 2022 ~ Dion Pinto"),ee=i(),m=s("div"),Nt=s("div"),H=s("a"),ae=c("Introduction"),se=i(),xt=s("div"),V=s("a"),ne=c("What is ml-wasm/entropy"),re=i(),Ft=s("div"),j=s("a"),ie=c("Why Ndarray"),oe=i(),Jt=s("div"),q=s("a"),le=c("What is wasm-bindgen"),ce=i(),Ct=s("div"),B=s("a"),he=c("Why Rust"),de=i(),Ht=s("div"),L=s("a"),me=c("Why WebAssembly"),ue=i(),Vt=s("div"),G=s("a"),pe=c("Series"),we=i(),jt=s("div"),K=s("a"),fe=c("Dataframe"),ge=i(),T=s("section"),v(Q.$$.fragment),ve=i(),mt=s("p"),ye=c(`Machine learning is an integral part of society. A fundamental cog in the machine learning
				wheel is data analysis, feature detection and manipulation along with visualisation.
				However, the current machine learning landscape is dominated by Python and its ML ecosystem
				consisting of NumPy, Pandas, Matplotlib and Sklearn. The problem with using python for this
				is that they need a python runtime on the system which is not available on browsers. The aim
				of this project is to build a data analysis and manipulation tool along with a plotting
				library that runs in the browser powered by WebAssembly and Rust.`),be=i(),R=s("section"),v(U.$$.fragment),$e=i(),ut=s("p"),_e=c(`Many organizations now run machine learning models on the browser. The most accessible way
				to interact with machine learning is through the browser as such using the browser for data
				preprocessing and wrangling is the logical next step.`),Ee=i(),pt=s("p"),ze=c(`Entropy stands for the degree of disorder and the ml-wasm/entropy library lets its users
				reduce the entropy of your data by structuring your data into series and dataframes from
				where they can manipulate the data, preprocess it and make it their own.`),Re=i(),A=s("section"),v(X.$$.fragment),Ae=i(),wt=s("p"),Se=c(`The ndarray crate provides an n-dimensional container for general elements and for numerics.
				ml-wasm/entropy utilizes ndarray as its internal data representation. When we considered the
				creation of a series and dataframe like structures the options to consider for its internal
				data representation was a standard Rust vector or a ndarray.`),Ie=i(),ft=s("p"),ke=c(`The problem with utilizing a standard vector is we would have no access to fast and
				efficient operations which we would have to perform on the series and dataframes. The
				ndarray crate provides various methods which facilitate quick operations. It also provides
				various additional functionality such as its support with serde which allows us to quickly
				serialize and deserialize data from JavaScript to Rust and vice versa. Other than that,
				ndarray also supports rayon which gives us access to parallel iterators and parallel
				methods. ml-wasm/entropy utilizes ndarrays with the use of a ml-wasm/linalg utility wrapper.`),We=i(),S=s("section"),v(Y.$$.fragment),Pe=i(),gt=s("p"),De=c(`It is a Rust library that allows wasm and JavaScript to interact with each other. This is
				the package that lets us write code in Rust and then talk to JavaScript and interact with
				it. It allows us to import JavaScript functionality into Rust such as DOM manipulation,
				console logging etc.`),Te=i(),vt=s("p"),Oe=c(`Wasm-bindgen allows the end user to access methods written in Rust with the advantages of
				its speed and added memory safety all in JavaScript. As it is compiled into wasm it also has
				near native speed, which is comparable to stock Rust.`),Me=i(),w=s("section"),v(Z.$$.fragment),Ne=i(),yt=s("p"),xe=c(`For the entire lifetime of programming languages there has always been the focus on either
				the speed of the language or the memory safety of the language. A classic example would be
				programming languages with or without a garbage collector. Languages with inbuilt garbage
				collector generally tend to be slower example ruby than the likes of those without one like
				C++. However, many memory safety issues arise due to a lack of a garbage collector.`),Fe=i(),bt=s("p"),Je=c(`Rust however comes up with a solution that is both fast since it does not require a garbage
				collector but also ensures memory safety with concepts such as ownership and borrowing.
				However, no solution is perfect and the cost of utilizing Rust is slower compilation time
				and many compilation errors along with a higher learning curve just to begin using Rust.`),Ce=i(),$t=s("p"),He=c(`For the purposes of this library however Rust is excellent as it has great support with
				libraries such as wasm-bindgen and excellent documentation with Rust used together with
				WebAssembly and tools such as wasm-pack.`),Ve=i(),_t=s("p"),je=c(`Senior software engineer Mohit Agarwal outlined his involvement with Rust in his blog. After
				evaluation of runtime performances of Rust against other popular compiled and interpreted
				languages like java and python, some surprising results were found. Rust is twice as fast
				when compared to Java but only uses 1% of its memory. When compared with python, Rust is 150
				times faster but it uses the same amount of memory. In a study by IBM, it was found that
				Rust and WebAssembly are nearly 15 times faster than Scala which is conventionally
				considered a high-performance language. Luca Palmieri published an article claiming that for
				simple machine tasks Rust is up to 25 times faster than Python.`),qe=i(),I=s("section"),v(tt.$$.fragment),Be=i(),Et=s("p"),Le=c(`WebAssembly is like a low-level assembly language which can be run on the browser. It allows
				code compiled on various languages to be run on the browser at nearly their native speeds.`),Ge=i(),zt=s("p"),Ke=c(`Thus, for our library we will write the code in Rust and then compile it to WebAssembly,
				often abbreviated as wasm. Also, since the program will be compiled, the compiler can
				perform various compile time optimizations. Since, we are just writing Rust programs we can
				also utilize various features that it provides most notably memory safety without negatively
				impacting performance.`),Qe=i(),f=s("section"),v(et.$$.fragment),Ue=i(),Rt=s("p"),Xe=c(`A series consists of a column name and the data array, the array is represented as an
				ndarray utilizing the implementation of ml-wasm/linalg wrapper and can have possible types:
				Integer 32bit, Float 64bit or String. Multiple methods can be utilized on the series
				depending on the use case of the developer.`),Ye=i(),at=s("h4"),At=s("span"),Ze=c("# "),M=s("a"),ta=c("Documentation"),ea=i(),st=s("pre"),nt=s("code"),aa=c(`
				`),sa=c(va),na=c(`			
			`),ra=i(),g=s("section"),v(rt.$$.fragment),ia=i(),St=s("p"),oa=c(`A Dataframe is a combination of multiple series of different types. It forms a table
				structure which can be used for many methods to sanitize/manipulate data.`),la=i(),it=s("h4"),It=s("span"),ca=c("# "),N=s("a"),ha=c("Documentation"),da=i(),ot=s("pre"),lt=s("code"),ma=c(`
				`),ua=c(ya),pa=c(`			
			`),wa=i(),kt=s("footer"),v(ct.$$.fragment),this.h()},l(l){y(D.$$.fragment,l),Bt=o(l),z=n(l,"MAIN",{class:!0});var W=r(z);ht=n(W,"HEADER",{class:!0});var ba=r(ht);y(J.$$.fragment,ba),ba.forEach(a),Ut=o(W),d=n(W,"MAIN",{class:!0});var u=r(d);k=n(u,"DIV",{id:!0});var Wt=r(k);y(C.$$.fragment,Wt),Xt=o(Wt),Mt=n(Wt,"H4",{});var $a=r(Mt);Yt=h($a,"Fast, Series and DataFrames powered by WebAssembly and Rust."),$a.forEach(a),Zt=o(Wt),dt=n(Wt,"H5",{style:!0});var _a=r(dt);te=h(_a,"5th May 2022 ~ Dion Pinto"),_a.forEach(a),Wt.forEach(a),ee=o(u),m=n(u,"DIV",{id:!0,class:!0});var p=r(m);Nt=n(p,"DIV",{});var Ea=r(Nt);H=n(Ea,"A",{href:!0,class:!0});var za=r(H);ae=h(za,"Introduction"),za.forEach(a),Ea.forEach(a),se=o(p),xt=n(p,"DIV",{});var Ra=r(xt);V=n(Ra,"A",{href:!0,class:!0});var Aa=r(V);ne=h(Aa,"What is ml-wasm/entropy"),Aa.forEach(a),Ra.forEach(a),re=o(p),Ft=n(p,"DIV",{});var Sa=r(Ft);j=n(Sa,"A",{href:!0,class:!0});var Ia=r(j);ie=h(Ia,"Why Ndarray"),Ia.forEach(a),Sa.forEach(a),oe=o(p),Jt=n(p,"DIV",{});var ka=r(Jt);q=n(ka,"A",{href:!0,class:!0});var Wa=r(q);le=h(Wa,"What is wasm-bindgen"),Wa.forEach(a),ka.forEach(a),ce=o(p),Ct=n(p,"DIV",{});var Pa=r(Ct);B=n(Pa,"A",{href:!0,class:!0});var Da=r(B);he=h(Da,"Why Rust"),Da.forEach(a),Pa.forEach(a),de=o(p),Ht=n(p,"DIV",{});var Ta=r(Ht);L=n(Ta,"A",{href:!0,class:!0});var Oa=r(L);me=h(Oa,"Why WebAssembly"),Oa.forEach(a),Ta.forEach(a),ue=o(p),Vt=n(p,"DIV",{});var Ma=r(Vt);G=n(Ma,"A",{href:!0,class:!0});var Na=r(G);pe=h(Na,"Series"),Na.forEach(a),Ma.forEach(a),we=o(p),jt=n(p,"DIV",{});var xa=r(jt);K=n(xa,"A",{href:!0,class:!0});var Fa=r(K);fe=h(Fa,"Dataframe"),Fa.forEach(a),xa.forEach(a),p.forEach(a),ge=o(u),T=n(u,"SECTION",{id:!0,class:!0});var Gt=r(T);y(Q.$$.fragment,Gt),ve=o(Gt),mt=n(Gt,"P",{class:!0});var Ja=r(mt);ye=h(Ja,`Machine learning is an integral part of society. A fundamental cog in the machine learning
				wheel is data analysis, feature detection and manipulation along with visualisation.
				However, the current machine learning landscape is dominated by Python and its ML ecosystem
				consisting of NumPy, Pandas, Matplotlib and Sklearn. The problem with using python for this
				is that they need a python runtime on the system which is not available on browsers. The aim
				of this project is to build a data analysis and manipulation tool along with a plotting
				library that runs in the browser powered by WebAssembly and Rust.`),Ja.forEach(a),Gt.forEach(a),be=o(u),R=n(u,"SECTION",{id:!0,class:!0});var Pt=r(R);y(U.$$.fragment,Pt),$e=o(Pt),ut=n(Pt,"P",{class:!0});var Ca=r(ut);_e=h(Ca,`Many organizations now run machine learning models on the browser. The most accessible way
				to interact with machine learning is through the browser as such using the browser for data
				preprocessing and wrangling is the logical next step.`),Ca.forEach(a),Ee=o(Pt),pt=n(Pt,"P",{class:!0});var Ha=r(pt);ze=h(Ha,`Entropy stands for the degree of disorder and the ml-wasm/entropy library lets its users
				reduce the entropy of your data by structuring your data into series and dataframes from
				where they can manipulate the data, preprocess it and make it their own.`),Ha.forEach(a),Pt.forEach(a),Re=o(u),A=n(u,"SECTION",{id:!0,class:!0});var Dt=r(A);y(X.$$.fragment,Dt),Ae=o(Dt),wt=n(Dt,"P",{class:!0});var Va=r(wt);Se=h(Va,`The ndarray crate provides an n-dimensional container for general elements and for numerics.
				ml-wasm/entropy utilizes ndarray as its internal data representation. When we considered the
				creation of a series and dataframe like structures the options to consider for its internal
				data representation was a standard Rust vector or a ndarray.`),Va.forEach(a),Ie=o(Dt),ft=n(Dt,"P",{class:!0});var ja=r(ft);ke=h(ja,`The problem with utilizing a standard vector is we would have no access to fast and
				efficient operations which we would have to perform on the series and dataframes. The
				ndarray crate provides various methods which facilitate quick operations. It also provides
				various additional functionality such as its support with serde which allows us to quickly
				serialize and deserialize data from JavaScript to Rust and vice versa. Other than that,
				ndarray also supports rayon which gives us access to parallel iterators and parallel
				methods. ml-wasm/entropy utilizes ndarrays with the use of a ml-wasm/linalg utility wrapper.`),ja.forEach(a),Dt.forEach(a),We=o(u),S=n(u,"SECTION",{id:!0,class:!0});var Tt=r(S);y(Y.$$.fragment,Tt),Pe=o(Tt),gt=n(Tt,"P",{class:!0});var qa=r(gt);De=h(qa,`It is a Rust library that allows wasm and JavaScript to interact with each other. This is
				the package that lets us write code in Rust and then talk to JavaScript and interact with
				it. It allows us to import JavaScript functionality into Rust such as DOM manipulation,
				console logging etc.`),qa.forEach(a),Te=o(Tt),vt=n(Tt,"P",{class:!0});var Ba=r(vt);Oe=h(Ba,`Wasm-bindgen allows the end user to access methods written in Rust with the advantages of
				its speed and added memory safety all in JavaScript. As it is compiled into wasm it also has
				near native speed, which is comparable to stock Rust.`),Ba.forEach(a),Tt.forEach(a),Me=o(u),w=n(u,"SECTION",{id:!0,class:!0});var P=r(w);y(Z.$$.fragment,P),Ne=o(P),yt=n(P,"P",{class:!0});var La=r(yt);xe=h(La,`For the entire lifetime of programming languages there has always been the focus on either
				the speed of the language or the memory safety of the language. A classic example would be
				programming languages with or without a garbage collector. Languages with inbuilt garbage
				collector generally tend to be slower example ruby than the likes of those without one like
				C++. However, many memory safety issues arise due to a lack of a garbage collector.`),La.forEach(a),Fe=o(P),bt=n(P,"P",{class:!0});var Ga=r(bt);Je=h(Ga,`Rust however comes up with a solution that is both fast since it does not require a garbage
				collector but also ensures memory safety with concepts such as ownership and borrowing.
				However, no solution is perfect and the cost of utilizing Rust is slower compilation time
				and many compilation errors along with a higher learning curve just to begin using Rust.`),Ga.forEach(a),Ce=o(P),$t=n(P,"P",{class:!0});var Ka=r($t);He=h(Ka,`For the purposes of this library however Rust is excellent as it has great support with
				libraries such as wasm-bindgen and excellent documentation with Rust used together with
				WebAssembly and tools such as wasm-pack.`),Ka.forEach(a),Ve=o(P),_t=n(P,"P",{class:!0});var Qa=r(_t);je=h(Qa,`Senior software engineer Mohit Agarwal outlined his involvement with Rust in his blog. After
				evaluation of runtime performances of Rust against other popular compiled and interpreted
				languages like java and python, some surprising results were found. Rust is twice as fast
				when compared to Java but only uses 1% of its memory. When compared with python, Rust is 150
				times faster but it uses the same amount of memory. In a study by IBM, it was found that
				Rust and WebAssembly are nearly 15 times faster than Scala which is conventionally
				considered a high-performance language. Luca Palmieri published an article claiming that for
				simple machine tasks Rust is up to 25 times faster than Python.`),Qa.forEach(a),P.forEach(a),qe=o(u),I=n(u,"SECTION",{id:!0,class:!0});var Ot=r(I);y(tt.$$.fragment,Ot),Be=o(Ot),Et=n(Ot,"P",{class:!0});var Ua=r(Et);Le=h(Ua,`WebAssembly is like a low-level assembly language which can be run on the browser. It allows
				code compiled on various languages to be run on the browser at nearly their native speeds.`),Ua.forEach(a),Ge=o(Ot),zt=n(Ot,"P",{class:!0});var Xa=r(zt);Ke=h(Xa,`Thus, for our library we will write the code in Rust and then compile it to WebAssembly,
				often abbreviated as wasm. Also, since the program will be compiled, the compiler can
				perform various compile time optimizations. Since, we are just writing Rust programs we can
				also utilize various features that it provides most notably memory safety without negatively
				impacting performance.`),Xa.forEach(a),Ot.forEach(a),Qe=o(u),f=n(u,"SECTION",{id:!0,class:!0});var x=r(f);y(et.$$.fragment,x),Ue=o(x),Rt=n(x,"P",{class:!0});var Ya=r(Rt);Xe=h(Ya,`A series consists of a column name and the data array, the array is represented as an
				ndarray utilizing the implementation of ml-wasm/linalg wrapper and can have possible types:
				Integer 32bit, Float 64bit or String. Multiple methods can be utilized on the series
				depending on the use case of the developer.`),Ya.forEach(a),Ye=o(x),at=n(x,"H4",{style:!0});var fa=r(at);At=n(fa,"SPAN",{style:!0});var Za=r(At);Ze=h(Za,"# "),Za.forEach(a),M=n(fa,"A",{href:!0,target:!0,class:!0});var ts=r(M);ta=h(ts,"Documentation"),ts.forEach(a),fa.forEach(a),ea=o(x),st=n(x,"PRE",{id:!0,class:!0});var es=r(st);nt=n(es,"CODE",{});var Kt=r(nt);aa=h(Kt,`
				`),sa=h(Kt,va),na=h(Kt,`			
			`),Kt.forEach(a),es.forEach(a),x.forEach(a),ra=o(u),g=n(u,"SECTION",{id:!0,class:!0});var F=r(g);y(rt.$$.fragment,F),ia=o(F),St=n(F,"P",{class:!0});var as=r(St);oa=h(as,`A Dataframe is a combination of multiple series of different types. It forms a table
				structure which can be used for many methods to sanitize/manipulate data.`),as.forEach(a),la=o(F),it=n(F,"H4",{style:!0});var ga=r(it);It=n(ga,"SPAN",{style:!0});var ss=r(It);ca=h(ss,"# "),ss.forEach(a),N=n(ga,"A",{href:!0,target:!0,class:!0});var ns=r(N);ha=h(ns,"Documentation"),ns.forEach(a),ga.forEach(a),da=o(F),ot=n(F,"PRE",{id:!0,class:!0});var rs=r(ot);lt=n(rs,"CODE",{});var Qt=r(lt);ma=h(Qt,`
				`),ua=h(Qt,ya),pa=h(Qt,`			
			`),Qt.forEach(a),rs.forEach(a),F.forEach(a),u.forEach(a),wa=o(W),kt=n(W,"FOOTER",{class:!0});var is=r(kt);y(ct.$$.fragment,is),is.forEach(a),W.forEach(a),this.h()},h(){e(ht,"class","svelte-6mwwz8"),qt(dt,"font-style","italic"),e(k,"id","title"),e(H,"href","#introduction"),e(H,"class","svelte-6mwwz8"),e(V,"href","#ml-wasm/entropy"),e(V,"class","svelte-6mwwz8"),e(j,"href","#ndarray"),e(j,"class","svelte-6mwwz8"),e(q,"href","#wasm-bindgen"),e(q,"class","svelte-6mwwz8"),e(B,"href","#rust"),e(B,"class","svelte-6mwwz8"),e(L,"href","#wasm"),e(L,"class","svelte-6mwwz8"),e(G,"href","#series"),e(G,"class","svelte-6mwwz8"),e(K,"href","#df"),e(K,"class","svelte-6mwwz8"),e(m,"id","index"),e(m,"class","nes-container is-rounded is-dark svelte-6mwwz8"),e(mt,"class","svelte-6mwwz8"),e(T,"id","introduction"),e(T,"class","svelte-6mwwz8"),e(ut,"class","svelte-6mwwz8"),e(pt,"class","svelte-6mwwz8"),e(R,"id","ml-wasm/entropy"),e(R,"class","svelte-6mwwz8"),e(wt,"class","svelte-6mwwz8"),e(ft,"class","svelte-6mwwz8"),e(A,"id","ndarray"),e(A,"class","svelte-6mwwz8"),e(gt,"class","svelte-6mwwz8"),e(vt,"class","svelte-6mwwz8"),e(S,"id","wasm-bindgen"),e(S,"class","svelte-6mwwz8"),e(yt,"class","svelte-6mwwz8"),e(bt,"class","svelte-6mwwz8"),e($t,"class","svelte-6mwwz8"),e(_t,"class","svelte-6mwwz8"),e(w,"id","rust"),e(w,"class","svelte-6mwwz8"),e(Et,"class","svelte-6mwwz8"),e(zt,"class","svelte-6mwwz8"),e(I,"id","wasm"),e(I,"class","svelte-6mwwz8"),e(Rt,"class","svelte-6mwwz8"),qt(At,"color","#209cee"),e(M,"href","https://ml-wasm.github.io/entropy/docs/series"),e(M,"target","_blank"),e(M,"class","svelte-6mwwz8"),qt(at,"font-style","italic"),e(st,"id","block"),e(st,"class","svelte-6mwwz8"),e(f,"id","series"),e(f,"class","svelte-6mwwz8"),e(St,"class","svelte-6mwwz8"),qt(It,"color","#209cee"),e(N,"href","https://ml-wasm.github.io/entropy/docs/dataframes"),e(N,"target","_blank"),e(N,"class","svelte-6mwwz8"),qt(it,"font-style","italic"),e(ot,"id","block"),e(ot,"class","svelte-6mwwz8"),e(g,"id","df"),e(g,"class","svelte-6mwwz8"),e(d,"class","container svelte-6mwwz8"),e(kt,"class","svelte-6mwwz8"),e(z,"class","main svelte-6mwwz8")},m(l,W){b(D,l,W),os(l,Bt,W),os(l,z,W),t(z,ht),b(J,ht,null),t(z,Ut),t(z,d),t(d,k),b(C,k,null),t(k,Xt),t(k,Mt),t(Mt,Yt),t(k,Zt),t(k,dt),t(dt,te),t(d,ee),t(d,m),t(m,Nt),t(Nt,H),t(H,ae),t(m,se),t(m,xt),t(xt,V),t(V,ne),t(m,re),t(m,Ft),t(Ft,j),t(j,ie),t(m,oe),t(m,Jt),t(Jt,q),t(q,le),t(m,ce),t(m,Ct),t(Ct,B),t(B,he),t(m,de),t(m,Ht),t(Ht,L),t(L,me),t(m,ue),t(m,Vt),t(Vt,G),t(G,pe),t(m,we),t(m,jt),t(jt,K),t(K,fe),t(d,ge),t(d,T),b(Q,T,null),t(T,ve),t(T,mt),t(mt,ye),t(d,be),t(d,R),b(U,R,null),t(R,$e),t(R,ut),t(ut,_e),t(R,Ee),t(R,pt),t(pt,ze),t(d,Re),t(d,A),b(X,A,null),t(A,Ae),t(A,wt),t(wt,Se),t(A,Ie),t(A,ft),t(ft,ke),t(d,We),t(d,S),b(Y,S,null),t(S,Pe),t(S,gt),t(gt,De),t(S,Te),t(S,vt),t(vt,Oe),t(d,Me),t(d,w),b(Z,w,null),t(w,Ne),t(w,yt),t(yt,xe),t(w,Fe),t(w,bt),t(bt,Je),t(w,Ce),t(w,$t),t($t,He),t(w,Ve),t(w,_t),t(_t,je),t(d,qe),t(d,I),b(tt,I,null),t(I,Be),t(I,Et),t(Et,Le),t(I,Ge),t(I,zt),t(zt,Ke),t(d,Qe),t(d,f),b(et,f,null),t(f,Ue),t(f,Rt),t(Rt,Xe),t(f,Ye),t(f,at),t(at,At),t(At,Ze),t(at,M),t(M,ta),t(f,ea),t(f,st),t(st,nt),t(nt,aa),t(nt,sa),t(nt,na),t(d,ra),t(d,g),b(rt,g,null),t(g,ia),t(g,St),t(St,oa),t(g,la),t(g,it),t(it,It),t(It,ca),t(it,N),t(N,ha),t(g,da),t(g,ot),t(ot,lt),t(lt,ma),t(lt,ua),t(lt,pa),t(z,wa),t(z,kt),b(ct,kt,null),Lt=!0},p:ms,i(l){Lt||($(D.$$.fragment,l),$(J.$$.fragment,l),$(C.$$.fragment,l),$(Q.$$.fragment,l),$(U.$$.fragment,l),$(X.$$.fragment,l),$(Y.$$.fragment,l),$(Z.$$.fragment,l),$(tt.$$.fragment,l),$(et.$$.fragment,l),$(rt.$$.fragment,l),$(ct.$$.fragment,l),Lt=!0)},o(l){_(D.$$.fragment,l),_(J.$$.fragment,l),_(C.$$.fragment,l),_(Q.$$.fragment,l),_(U.$$.fragment,l),_(X.$$.fragment,l),_(Y.$$.fragment,l),_(Z.$$.fragment,l),_(tt.$$.fragment,l),_(et.$$.fragment,l),_(rt.$$.fragment,l),_(ct.$$.fragment,l),Lt=!1},d(l){E(D,l),l&&a(Bt),l&&a(z),E(J),E(C),E(Q),E(U),E(X),E(Y),E(Z),E(tt),E(et),E(rt),E(ct)}}}class $s extends cs{constructor(D){super(),hs(this,D,null,fs,ds,{})}}export{$s as default};
