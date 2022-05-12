import{S as ys,i as bs,s as $s,e as s,k as o,t as c,w as b,c as n,a as r,m as l,h,d as a,x as $,b as e,f as Qt,g as ae,J as t,y as E,E as Es,q as _,o as q,B as R}from"../chunks/index-cd4245c1.js";import{S as _s,N as qs,F as Rs}from"../chunks/Footer-8b9c5841.js";import{T as z}from"../chunks/Title-6ea0487f.js";import"../chunks/paths-c8fbcc1d.js";function As(ws){let w,Lt,se,Bt,ne,Gt,re,Ut,x,Xt,A,dt,J,ie,d,D,C,oe,Kt,le,ce,ut,he,de,u,mt,H,ue,me,pt,V,pe,fe,ft,j,ge,ve,gt,L,we,ye,vt,B,be,$e,wt,G,Ee,_e,yt,K,qe,Re,bt,Q,Ae,Se,T,U,Ie,$t,We,ke,S,X,De,Et,Pe,Te,_t,ze,Me,I,Y,Oe,qt,Fe,Ne,Rt,xe,Je,W,Z,Ce,At,He,Ve,St,je,Le,f,tt,Be,It,Ge,Ke,Wt,Qe,Ue,kt,Xe,Ye,Dt,Ze,ta,k,et,ea,Pt,aa,sa,Tt,na,ra,g,at,ia,zt,oa,la,st,Mt,ca,M,ha,da,nt,rt,ua,Ia=`
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
				`,ma,pa,fa,v,it,ga,Ot,va,wa,ot,Ft,ya,O,ba,$a,lt,ct,Ea,Wa=`
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
				`,_a,qa,Ra,Nt,ht,Yt;return x=new _s({}),J=new qs({props:{curPage:"Blog"}}),C=new z({props:{type:2,title:"Entropy"}}),U=new z({props:{type:5,title:"Introduction"}}),X=new z({props:{type:5,title:"What is ml-wasm/entropy"}}),Y=new z({props:{type:5,title:"Why Ndarray?"}}),Z=new z({props:{type:5,title:"What is wasm-bindgen"}}),tt=new z({props:{type:5,title:"Why Rust?"}}),et=new z({props:{type:5,title:"Why WebAssembly?"}}),at=new z({props:{type:5,title:"Series"}}),it=new z({props:{type:5,title:"DataFrame"}}),ht=new Rs({}),{c(){w=s("head"),Lt=s("meta"),se=o(),Bt=s("meta"),ne=o(),Gt=s("title"),re=c("Series and DataFrames with Rust and WebAssembly."),Ut=o(),b(x.$$.fragment),Xt=o(),A=s("main"),dt=s("header"),b(J.$$.fragment),ie=o(),d=s("main"),D=s("div"),b(C.$$.fragment),oe=o(),Kt=s("h4"),le=c("Fast, Series and DataFrames powered by WebAssembly and Rust."),ce=o(),ut=s("h5"),he=c("5th May 2022 ~ Dion Pinto"),de=o(),u=s("div"),mt=s("div"),H=s("a"),ue=c("Introduction"),me=o(),pt=s("div"),V=s("a"),pe=c("What is ml-wasm/entropy"),fe=o(),ft=s("div"),j=s("a"),ge=c("Why Ndarray"),ve=o(),gt=s("div"),L=s("a"),we=c("What is wasm-bindgen"),ye=o(),vt=s("div"),B=s("a"),be=c("Why Rust"),$e=o(),wt=s("div"),G=s("a"),Ee=c("Why WebAssembly"),_e=o(),yt=s("div"),K=s("a"),qe=c("Series"),Re=o(),bt=s("div"),Q=s("a"),Ae=c("Dataframe"),Se=o(),T=s("section"),b(U.$$.fragment),Ie=o(),$t=s("p"),We=c(`Machine learning is an integral part of society. A fundamental cog in the machine learning
				wheel is data analysis, feature detection and manipulation along with visualisation.
				However, the current machine learning landscape is dominated by Python and its ML ecosystem
				consisting of NumPy, Pandas, Matplotlib and Sklearn. The problem with using python for this
				is that they need a python runtime on the system which is not available on browsers. The aim
				of this project is to build a data analysis and manipulation tool along with a plotting
				library that runs in the browser powered by WebAssembly and Rust.`),ke=o(),S=s("section"),b(X.$$.fragment),De=o(),Et=s("p"),Pe=c(`Many organizations now run machine learning models on the browser. The most accessible way
				to interact with machine learning is through the browser as such using the browser for data
				preprocessing and wrangling is the logical next step.`),Te=o(),_t=s("p"),ze=c(`Entropy stands for the degree of disorder and the ml-wasm/entropy library lets its users
				reduce the entropy of your data by structuring your data into series and dataframes from
				where they can manipulate the data, preprocess it and make it their own.`),Me=o(),I=s("section"),b(Y.$$.fragment),Oe=o(),qt=s("p"),Fe=c(`The ndarray crate provides an n-dimensional container for general elements and for numerics.
				ml-wasm/entropy utilizes ndarray as its internal data representation. When we considered the
				creation of a series and dataframe like structures the options to consider for its internal
				data representation was a standard Rust vector or a ndarray.`),Ne=o(),Rt=s("p"),xe=c(`The problem with utilizing a standard vector is we would have no access to fast and
				efficient operations which we would have to perform on the series and dataframes. The
				ndarray crate provides various methods which facilitate quick operations. It also provides
				various additional functionality such as its support with serde which allows us to quickly
				serialize and deserialize data from JavaScript to Rust and vice versa. Other than that,
				ndarray also supports rayon which gives us access to parallel iterators and parallel
				methods. ml-wasm/entropy utilizes ndarrays with the use of a ml-wasm/linalg utility wrapper.`),Je=o(),W=s("section"),b(Z.$$.fragment),Ce=o(),At=s("p"),He=c(`It is a Rust library that allows wasm and JavaScript to interact with each other. This is
				the package that lets us write code in Rust and then talk to JavaScript and interact with
				it. It allows us to import JavaScript functionality into Rust such as DOM manipulation,
				console logging etc.`),Ve=o(),St=s("p"),je=c(`Wasm-bindgen allows the end user to access methods written in Rust with the advantages of
				its speed and added memory safety all in JavaScript. As it is compiled into wasm it also has
				near native speed, which is comparable to stock Rust.`),Le=o(),f=s("section"),b(tt.$$.fragment),Be=o(),It=s("p"),Ge=c(`For the entire lifetime of programming languages there has always been the focus on either
				the speed of the language or the memory safety of the language. A classic example would be
				programming languages with or without a garbage collector. Languages with inbuilt garbage
				collector generally tend to be slower example ruby than the likes of those without one like
				C++. However, many memory safety issues arise due to a lack of a garbage collector.`),Ke=o(),Wt=s("p"),Qe=c(`Rust however comes up with a solution that is both fast since it does not require a garbage
				collector but also ensures memory safety with concepts such as ownership and borrowing.
				However, no solution is perfect and the cost of utilizing Rust is slower compilation time
				and many compilation errors along with a higher learning curve just to begin using Rust.`),Ue=o(),kt=s("p"),Xe=c(`For the purposes of this library however Rust is excellent as it has great support with
				libraries such as wasm-bindgen and excellent documentation with Rust used together with
				WebAssembly and tools such as wasm-pack.`),Ye=o(),Dt=s("p"),Ze=c(`Senior software engineer Mohit Agarwal outlined his involvement with Rust in his blog. After
				evaluation of runtime performances of Rust against other popular compiled and interpreted
				languages like java and python, some surprising results were found. Rust is twice as fast
				when compared to Java but only uses 1% of its memory. When compared with python, Rust is 150
				times faster but it uses the same amount of memory. In a study by IBM, it was found that
				Rust and WebAssembly are nearly 15 times faster than Scala which is conventionally
				considered a high-performance language. Luca Palmieri published an article claiming that for
				simple machine tasks Rust is up to 25 times faster than Python.`),ta=o(),k=s("section"),b(et.$$.fragment),ea=o(),Pt=s("p"),aa=c(`WebAssembly is like a low-level assembly language which can be run on the browser. It allows
				code compiled on various languages to be run on the browser at nearly their native speeds.`),sa=o(),Tt=s("p"),na=c(`Thus, for our library we will write the code in Rust and then compile it to WebAssembly,
				often abbreviated as wasm. Also, since the program will be compiled, the compiler can
				perform various compile time optimizations. Since, we are just writing Rust programs we can
				also utilize various features that it provides most notably memory safety without negatively
				impacting performance.`),ra=o(),g=s("section"),b(at.$$.fragment),ia=o(),zt=s("p"),oa=c(`A series consists of a column name and the data array, the array is represented as an
				ndarray utilizing the implementation of ml-wasm/linalg wrapper and can have possible types:
				Integer 32bit, Float 64bit or String. Multiple methods can be utilized on the series
				depending on the use case of the developer.`),la=o(),st=s("h4"),Mt=s("span"),ca=c("# "),M=s("a"),ha=c("Documentation"),da=o(),nt=s("pre"),rt=s("code"),ua=c(`
				`),ma=c(Ia),pa=c(`			
			`),fa=o(),v=s("section"),b(it.$$.fragment),ga=o(),Ot=s("p"),va=c(`A Dataframe is a combination of multiple series of different types. It forms a table
				structure which can be used for many methods to sanitize/manipulate data.`),wa=o(),ot=s("h4"),Ft=s("span"),ya=c("# "),O=s("a"),ba=c("Documentation"),$a=o(),lt=s("pre"),ct=s("code"),Ea=c(`
				`),_a=c(Wa),qa=c(`			
			`),Ra=o(),Nt=s("footer"),b(ht.$$.fragment),this.h()},l(i){w=n(i,"HEAD",{});var y=r(w);Lt=n(y,"META",{name:!0,content:!0}),se=l(y),Bt=n(y,"META",{name:!0,content:!0}),ne=l(y),Gt=n(y,"TITLE",{});var ka=r(Gt);re=h(ka,"Series and DataFrames with Rust and WebAssembly."),ka.forEach(a),y.forEach(a),Ut=l(i),$(x.$$.fragment,i),Xt=l(i),A=n(i,"MAIN",{class:!0});var xt=r(A);dt=n(xt,"HEADER",{class:!0});var Da=r(dt);$(J.$$.fragment,Da),Da.forEach(a),ie=l(xt),d=n(xt,"MAIN",{class:!0});var m=r(d);D=n(m,"DIV",{id:!0});var Jt=r(D);$(C.$$.fragment,Jt),oe=l(Jt),Kt=n(Jt,"H4",{});var Pa=r(Kt);le=h(Pa,"Fast, Series and DataFrames powered by WebAssembly and Rust."),Pa.forEach(a),ce=l(Jt),ut=n(Jt,"H5",{style:!0});var Ta=r(ut);he=h(Ta,"5th May 2022 ~ Dion Pinto"),Ta.forEach(a),Jt.forEach(a),de=l(m),u=n(m,"DIV",{id:!0,class:!0});var p=r(u);mt=n(p,"DIV",{class:!0});var za=r(mt);H=n(za,"A",{href:!0,class:!0});var Ma=r(H);ue=h(Ma,"Introduction"),Ma.forEach(a),za.forEach(a),me=l(p),pt=n(p,"DIV",{class:!0});var Oa=r(pt);V=n(Oa,"A",{href:!0,class:!0});var Fa=r(V);pe=h(Fa,"What is ml-wasm/entropy"),Fa.forEach(a),Oa.forEach(a),fe=l(p),ft=n(p,"DIV",{class:!0});var Na=r(ft);j=n(Na,"A",{href:!0,class:!0});var xa=r(j);ge=h(xa,"Why Ndarray"),xa.forEach(a),Na.forEach(a),ve=l(p),gt=n(p,"DIV",{class:!0});var Ja=r(gt);L=n(Ja,"A",{href:!0,class:!0});var Ca=r(L);we=h(Ca,"What is wasm-bindgen"),Ca.forEach(a),Ja.forEach(a),ye=l(p),vt=n(p,"DIV",{class:!0});var Ha=r(vt);B=n(Ha,"A",{href:!0,class:!0});var Va=r(B);be=h(Va,"Why Rust"),Va.forEach(a),Ha.forEach(a),$e=l(p),wt=n(p,"DIV",{class:!0});var ja=r(wt);G=n(ja,"A",{href:!0,class:!0});var La=r(G);Ee=h(La,"Why WebAssembly"),La.forEach(a),ja.forEach(a),_e=l(p),yt=n(p,"DIV",{class:!0});var Ba=r(yt);K=n(Ba,"A",{href:!0,class:!0});var Ga=r(K);qe=h(Ga,"Series"),Ga.forEach(a),Ba.forEach(a),Re=l(p),bt=n(p,"DIV",{class:!0});var Ka=r(bt);Q=n(Ka,"A",{href:!0,class:!0});var Qa=r(Q);Ae=h(Qa,"Dataframe"),Qa.forEach(a),Ka.forEach(a),p.forEach(a),Se=l(m),T=n(m,"SECTION",{id:!0,class:!0});var Zt=r(T);$(U.$$.fragment,Zt),Ie=l(Zt),$t=n(Zt,"P",{class:!0});var Ua=r($t);We=h(Ua,`Machine learning is an integral part of society. A fundamental cog in the machine learning
				wheel is data analysis, feature detection and manipulation along with visualisation.
				However, the current machine learning landscape is dominated by Python and its ML ecosystem
				consisting of NumPy, Pandas, Matplotlib and Sklearn. The problem with using python for this
				is that they need a python runtime on the system which is not available on browsers. The aim
				of this project is to build a data analysis and manipulation tool along with a plotting
				library that runs in the browser powered by WebAssembly and Rust.`),Ua.forEach(a),Zt.forEach(a),ke=l(m),S=n(m,"SECTION",{id:!0,class:!0});var Ct=r(S);$(X.$$.fragment,Ct),De=l(Ct),Et=n(Ct,"P",{class:!0});var Xa=r(Et);Pe=h(Xa,`Many organizations now run machine learning models on the browser. The most accessible way
				to interact with machine learning is through the browser as such using the browser for data
				preprocessing and wrangling is the logical next step.`),Xa.forEach(a),Te=l(Ct),_t=n(Ct,"P",{class:!0});var Ya=r(_t);ze=h(Ya,`Entropy stands for the degree of disorder and the ml-wasm/entropy library lets its users
				reduce the entropy of your data by structuring your data into series and dataframes from
				where they can manipulate the data, preprocess it and make it their own.`),Ya.forEach(a),Ct.forEach(a),Me=l(m),I=n(m,"SECTION",{id:!0,class:!0});var Ht=r(I);$(Y.$$.fragment,Ht),Oe=l(Ht),qt=n(Ht,"P",{class:!0});var Za=r(qt);Fe=h(Za,`The ndarray crate provides an n-dimensional container for general elements and for numerics.
				ml-wasm/entropy utilizes ndarray as its internal data representation. When we considered the
				creation of a series and dataframe like structures the options to consider for its internal
				data representation was a standard Rust vector or a ndarray.`),Za.forEach(a),Ne=l(Ht),Rt=n(Ht,"P",{class:!0});var ts=r(Rt);xe=h(ts,`The problem with utilizing a standard vector is we would have no access to fast and
				efficient operations which we would have to perform on the series and dataframes. The
				ndarray crate provides various methods which facilitate quick operations. It also provides
				various additional functionality such as its support with serde which allows us to quickly
				serialize and deserialize data from JavaScript to Rust and vice versa. Other than that,
				ndarray also supports rayon which gives us access to parallel iterators and parallel
				methods. ml-wasm/entropy utilizes ndarrays with the use of a ml-wasm/linalg utility wrapper.`),ts.forEach(a),Ht.forEach(a),Je=l(m),W=n(m,"SECTION",{id:!0,class:!0});var Vt=r(W);$(Z.$$.fragment,Vt),Ce=l(Vt),At=n(Vt,"P",{class:!0});var es=r(At);He=h(es,`It is a Rust library that allows wasm and JavaScript to interact with each other. This is
				the package that lets us write code in Rust and then talk to JavaScript and interact with
				it. It allows us to import JavaScript functionality into Rust such as DOM manipulation,
				console logging etc.`),es.forEach(a),Ve=l(Vt),St=n(Vt,"P",{class:!0});var as=r(St);je=h(as,`Wasm-bindgen allows the end user to access methods written in Rust with the advantages of
				its speed and added memory safety all in JavaScript. As it is compiled into wasm it also has
				near native speed, which is comparable to stock Rust.`),as.forEach(a),Vt.forEach(a),Le=l(m),f=n(m,"SECTION",{id:!0,class:!0});var P=r(f);$(tt.$$.fragment,P),Be=l(P),It=n(P,"P",{class:!0});var ss=r(It);Ge=h(ss,`For the entire lifetime of programming languages there has always been the focus on either
				the speed of the language or the memory safety of the language. A classic example would be
				programming languages with or without a garbage collector. Languages with inbuilt garbage
				collector generally tend to be slower example ruby than the likes of those without one like
				C++. However, many memory safety issues arise due to a lack of a garbage collector.`),ss.forEach(a),Ke=l(P),Wt=n(P,"P",{class:!0});var ns=r(Wt);Qe=h(ns,`Rust however comes up with a solution that is both fast since it does not require a garbage
				collector but also ensures memory safety with concepts such as ownership and borrowing.
				However, no solution is perfect and the cost of utilizing Rust is slower compilation time
				and many compilation errors along with a higher learning curve just to begin using Rust.`),ns.forEach(a),Ue=l(P),kt=n(P,"P",{class:!0});var rs=r(kt);Xe=h(rs,`For the purposes of this library however Rust is excellent as it has great support with
				libraries such as wasm-bindgen and excellent documentation with Rust used together with
				WebAssembly and tools such as wasm-pack.`),rs.forEach(a),Ye=l(P),Dt=n(P,"P",{class:!0});var is=r(Dt);Ze=h(is,`Senior software engineer Mohit Agarwal outlined his involvement with Rust in his blog. After
				evaluation of runtime performances of Rust against other popular compiled and interpreted
				languages like java and python, some surprising results were found. Rust is twice as fast
				when compared to Java but only uses 1% of its memory. When compared with python, Rust is 150
				times faster but it uses the same amount of memory. In a study by IBM, it was found that
				Rust and WebAssembly are nearly 15 times faster than Scala which is conventionally
				considered a high-performance language. Luca Palmieri published an article claiming that for
				simple machine tasks Rust is up to 25 times faster than Python.`),is.forEach(a),P.forEach(a),ta=l(m),k=n(m,"SECTION",{id:!0,class:!0});var jt=r(k);$(et.$$.fragment,jt),ea=l(jt),Pt=n(jt,"P",{class:!0});var os=r(Pt);aa=h(os,`WebAssembly is like a low-level assembly language which can be run on the browser. It allows
				code compiled on various languages to be run on the browser at nearly their native speeds.`),os.forEach(a),sa=l(jt),Tt=n(jt,"P",{class:!0});var ls=r(Tt);na=h(ls,`Thus, for our library we will write the code in Rust and then compile it to WebAssembly,
				often abbreviated as wasm. Also, since the program will be compiled, the compiler can
				perform various compile time optimizations. Since, we are just writing Rust programs we can
				also utilize various features that it provides most notably memory safety without negatively
				impacting performance.`),ls.forEach(a),jt.forEach(a),ra=l(m),g=n(m,"SECTION",{id:!0,class:!0});var F=r(g);$(at.$$.fragment,F),ia=l(F),zt=n(F,"P",{class:!0});var cs=r(zt);oa=h(cs,`A series consists of a column name and the data array, the array is represented as an
				ndarray utilizing the implementation of ml-wasm/linalg wrapper and can have possible types:
				Integer 32bit, Float 64bit or String. Multiple methods can be utilized on the series
				depending on the use case of the developer.`),cs.forEach(a),la=l(F),st=n(F,"H4",{style:!0});var Aa=r(st);Mt=n(Aa,"SPAN",{style:!0});var hs=r(Mt);ca=h(hs,"# "),hs.forEach(a),M=n(Aa,"A",{href:!0,target:!0,class:!0});var ds=r(M);ha=h(ds,"Documentation"),ds.forEach(a),Aa.forEach(a),da=l(F),nt=n(F,"PRE",{id:!0,class:!0});var us=r(nt);rt=n(us,"CODE",{});var te=r(rt);ua=h(te,`
				`),ma=h(te,Ia),pa=h(te,`			
			`),te.forEach(a),us.forEach(a),F.forEach(a),fa=l(m),v=n(m,"SECTION",{id:!0,class:!0});var N=r(v);$(it.$$.fragment,N),ga=l(N),Ot=n(N,"P",{class:!0});var ms=r(Ot);va=h(ms,`A Dataframe is a combination of multiple series of different types. It forms a table
				structure which can be used for many methods to sanitize/manipulate data.`),ms.forEach(a),wa=l(N),ot=n(N,"H4",{style:!0});var Sa=r(ot);Ft=n(Sa,"SPAN",{style:!0});var ps=r(Ft);ya=h(ps,"# "),ps.forEach(a),O=n(Sa,"A",{href:!0,target:!0,class:!0});var fs=r(O);ba=h(fs,"Documentation"),fs.forEach(a),Sa.forEach(a),$a=l(N),lt=n(N,"PRE",{id:!0,class:!0});var gs=r(lt);ct=n(gs,"CODE",{});var ee=r(ct);Ea=h(ee,`
				`),_a=h(ee,Wa),qa=h(ee,`			
			`),ee.forEach(a),gs.forEach(a),N.forEach(a),m.forEach(a),Ra=l(xt),Nt=n(xt,"FOOTER",{class:!0});var vs=r(Nt);$(ht.$$.fragment,vs),vs.forEach(a),xt.forEach(a),this.h()},h(){e(Lt,"name","author"),e(Lt,"content","Dion Pinto"),e(Bt,"name","description"),e(Bt,"content","Series and DataFrames with Rust and WebAssembly"),e(dt,"class","svelte-10gq6v5"),Qt(ut,"font-style","italic"),e(D,"id","title"),e(H,"href","#introduction"),e(H,"class","svelte-10gq6v5"),e(mt,"class","svelte-10gq6v5"),e(V,"href","#ml-wasm/entropy"),e(V,"class","svelte-10gq6v5"),e(pt,"class","svelte-10gq6v5"),e(j,"href","#ndarray"),e(j,"class","svelte-10gq6v5"),e(ft,"class","svelte-10gq6v5"),e(L,"href","#wasm-bindgen"),e(L,"class","svelte-10gq6v5"),e(gt,"class","svelte-10gq6v5"),e(B,"href","#rust"),e(B,"class","svelte-10gq6v5"),e(vt,"class","svelte-10gq6v5"),e(G,"href","#wasm"),e(G,"class","svelte-10gq6v5"),e(wt,"class","svelte-10gq6v5"),e(K,"href","#series"),e(K,"class","svelte-10gq6v5"),e(yt,"class","svelte-10gq6v5"),e(Q,"href","#df"),e(Q,"class","svelte-10gq6v5"),e(bt,"class","svelte-10gq6v5"),e(u,"id","index"),e(u,"class","nes-container is-rounded is-dark svelte-10gq6v5"),e($t,"class","svelte-10gq6v5"),e(T,"id","introduction"),e(T,"class","svelte-10gq6v5"),e(Et,"class","svelte-10gq6v5"),e(_t,"class","svelte-10gq6v5"),e(S,"id","ml-wasm/entropy"),e(S,"class","svelte-10gq6v5"),e(qt,"class","svelte-10gq6v5"),e(Rt,"class","svelte-10gq6v5"),e(I,"id","ndarray"),e(I,"class","svelte-10gq6v5"),e(At,"class","svelte-10gq6v5"),e(St,"class","svelte-10gq6v5"),e(W,"id","wasm-bindgen"),e(W,"class","svelte-10gq6v5"),e(It,"class","svelte-10gq6v5"),e(Wt,"class","svelte-10gq6v5"),e(kt,"class","svelte-10gq6v5"),e(Dt,"class","svelte-10gq6v5"),e(f,"id","rust"),e(f,"class","svelte-10gq6v5"),e(Pt,"class","svelte-10gq6v5"),e(Tt,"class","svelte-10gq6v5"),e(k,"id","wasm"),e(k,"class","svelte-10gq6v5"),e(zt,"class","svelte-10gq6v5"),Qt(Mt,"color","#209cee"),e(M,"href","https://ml-wasm.github.io/entropy/docs/series"),e(M,"target","_blank"),e(M,"class","svelte-10gq6v5"),Qt(st,"font-style","italic"),e(nt,"id","block"),e(nt,"class","svelte-10gq6v5"),e(g,"id","series"),e(g,"class","svelte-10gq6v5"),e(Ot,"class","svelte-10gq6v5"),Qt(Ft,"color","#209cee"),e(O,"href","https://ml-wasm.github.io/entropy/docs/dataframes"),e(O,"target","_blank"),e(O,"class","svelte-10gq6v5"),Qt(ot,"font-style","italic"),e(lt,"id","block"),e(lt,"class","svelte-10gq6v5"),e(v,"id","df"),e(v,"class","svelte-10gq6v5"),e(d,"class","container svelte-10gq6v5"),e(Nt,"class","svelte-10gq6v5"),e(A,"class","main svelte-10gq6v5")},m(i,y){ae(i,w,y),t(w,Lt),t(w,se),t(w,Bt),t(w,ne),t(w,Gt),t(Gt,re),ae(i,Ut,y),E(x,i,y),ae(i,Xt,y),ae(i,A,y),t(A,dt),E(J,dt,null),t(A,ie),t(A,d),t(d,D),E(C,D,null),t(D,oe),t(D,Kt),t(Kt,le),t(D,ce),t(D,ut),t(ut,he),t(d,de),t(d,u),t(u,mt),t(mt,H),t(H,ue),t(u,me),t(u,pt),t(pt,V),t(V,pe),t(u,fe),t(u,ft),t(ft,j),t(j,ge),t(u,ve),t(u,gt),t(gt,L),t(L,we),t(u,ye),t(u,vt),t(vt,B),t(B,be),t(u,$e),t(u,wt),t(wt,G),t(G,Ee),t(u,_e),t(u,yt),t(yt,K),t(K,qe),t(u,Re),t(u,bt),t(bt,Q),t(Q,Ae),t(d,Se),t(d,T),E(U,T,null),t(T,Ie),t(T,$t),t($t,We),t(d,ke),t(d,S),E(X,S,null),t(S,De),t(S,Et),t(Et,Pe),t(S,Te),t(S,_t),t(_t,ze),t(d,Me),t(d,I),E(Y,I,null),t(I,Oe),t(I,qt),t(qt,Fe),t(I,Ne),t(I,Rt),t(Rt,xe),t(d,Je),t(d,W),E(Z,W,null),t(W,Ce),t(W,At),t(At,He),t(W,Ve),t(W,St),t(St,je),t(d,Le),t(d,f),E(tt,f,null),t(f,Be),t(f,It),t(It,Ge),t(f,Ke),t(f,Wt),t(Wt,Qe),t(f,Ue),t(f,kt),t(kt,Xe),t(f,Ye),t(f,Dt),t(Dt,Ze),t(d,ta),t(d,k),E(et,k,null),t(k,ea),t(k,Pt),t(Pt,aa),t(k,sa),t(k,Tt),t(Tt,na),t(d,ra),t(d,g),E(at,g,null),t(g,ia),t(g,zt),t(zt,oa),t(g,la),t(g,st),t(st,Mt),t(Mt,ca),t(st,M),t(M,ha),t(g,da),t(g,nt),t(nt,rt),t(rt,ua),t(rt,ma),t(rt,pa),t(d,fa),t(d,v),E(it,v,null),t(v,ga),t(v,Ot),t(Ot,va),t(v,wa),t(v,ot),t(ot,Ft),t(Ft,ya),t(ot,O),t(O,ba),t(v,$a),t(v,lt),t(lt,ct),t(ct,Ea),t(ct,_a),t(ct,qa),t(A,Ra),t(A,Nt),E(ht,Nt,null),Yt=!0},p:Es,i(i){Yt||(_(x.$$.fragment,i),_(J.$$.fragment,i),_(C.$$.fragment,i),_(U.$$.fragment,i),_(X.$$.fragment,i),_(Y.$$.fragment,i),_(Z.$$.fragment,i),_(tt.$$.fragment,i),_(et.$$.fragment,i),_(at.$$.fragment,i),_(it.$$.fragment,i),_(ht.$$.fragment,i),Yt=!0)},o(i){q(x.$$.fragment,i),q(J.$$.fragment,i),q(C.$$.fragment,i),q(U.$$.fragment,i),q(X.$$.fragment,i),q(Y.$$.fragment,i),q(Z.$$.fragment,i),q(tt.$$.fragment,i),q(et.$$.fragment,i),q(at.$$.fragment,i),q(it.$$.fragment,i),q(ht.$$.fragment,i),Yt=!1},d(i){i&&a(w),i&&a(Ut),R(x,i),i&&a(Xt),i&&a(A),R(J),R(C),R(U),R(X),R(Y),R(Z),R(tt),R(et),R(at),R(it),R(ht)}}}class Ds extends ys{constructor(w){super(),bs(this,w,null,As,$s,{})}}export{Ds as default};
