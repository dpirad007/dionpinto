import{S as _s,i as xs,s as qs,e as s,k as i,t as c,w as b,c as n,a as r,m as o,h,d as a,x as $,b as e,f as Ut,g as se,J as t,y as E,E as As,q as _,o as x,B as q}from"../chunks/index-cd4245c1.js";import{b as Rs}from"../chunks/paths-c8fbcc1d.js";import{S as Ss,N as Is,F as ks}from"../chunks/Footer-8b9c5841.js";import{T as z}from"../chunks/Title-6ea0487f.js";function Ws(Es){let w,Lt,ne,Gt,re,Kt,ie,Xt,J,Yt,A,ut,C,oe,d,W,H,le,Qt,ce,he,mt,de,ue,m,pt,V,me,pe,ft,j,fe,ge,gt,B,ve,we,vt,L,ye,be,wt,G,$e,Ee,yt,K,_e,xe,bt,Q,qe,Ae,$t,U,Re,Se,P,X,Ie,Et,ke,We,R,Y,De,_t,Pe,Te,xt,ze,Me,S,Z,Oe,qt,Fe,Ne,At,Je,Ce,I,tt,He,Rt,Ve,je,St,Be,Le,f,et,Ge,It,Ke,Qe,kt,Ue,Xe,Wt,Ye,Ze,Dt,ta,ea,k,at,aa,Pt,sa,na,Tt,ra,ia,g,st,oa,zt,la,ca,nt,Mt,ha,M,da,ua,rt,it,ma,Wa=`
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
				`,pa,fa,ga,v,ot,va,Ot,wa,ya,lt,Ft,ba,O,$a,Ea,ct,ht,_a,Da=`
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
				`,xa,qa,Aa,T,Ra,Sa,Nt,dt,Zt;return J=new Ss({}),C=new Is({props:{curPage:"Blog"}}),H=new z({props:{type:2,title:"Entropy"}}),X=new z({props:{type:5,title:"Introduction"}}),Y=new z({props:{type:5,title:"What is ml-wasm/entropy"}}),Z=new z({props:{type:5,title:"Why Ndarray?"}}),tt=new z({props:{type:5,title:"What is wasm-bindgen"}}),et=new z({props:{type:5,title:"Why Rust?"}}),at=new z({props:{type:5,title:"Why WebAssembly?"}}),st=new z({props:{type:5,title:"Series"}}),ot=new z({props:{type:5,title:"DataFrame"}}),dt=new ks({}),{c(){w=s("head"),Lt=s("meta"),ne=i(),Gt=s("meta"),re=i(),Kt=s("title"),ie=c("Series and DataFrames with Rust and WebAssembly."),Xt=i(),b(J.$$.fragment),Yt=i(),A=s("main"),ut=s("header"),b(C.$$.fragment),oe=i(),d=s("main"),W=s("div"),b(H.$$.fragment),le=i(),Qt=s("h4"),ce=c("Fast, Series and DataFrames powered by WebAssembly and Rust."),he=i(),mt=s("h5"),de=c("5th May 2022 ~ Dion Pinto"),ue=i(),m=s("div"),pt=s("div"),V=s("a"),me=c("Introduction"),pe=i(),ft=s("div"),j=s("a"),fe=c("What is ml-wasm/entropy"),ge=i(),gt=s("div"),B=s("a"),ve=c("Why Ndarray"),we=i(),vt=s("div"),L=s("a"),ye=c("What is wasm-bindgen"),be=i(),wt=s("div"),G=s("a"),$e=c("Why Rust"),Ee=i(),yt=s("div"),K=s("a"),_e=c("Why WebAssembly"),xe=i(),bt=s("div"),Q=s("a"),qe=c("Series"),Ae=i(),$t=s("div"),U=s("a"),Re=c("Dataframe"),Se=i(),P=s("section"),b(X.$$.fragment),Ie=i(),Et=s("p"),ke=c(`Machine learning is an integral part of society. A fundamental cog in the machine learning
				wheel is data analysis, feature detection and manipulation along with visualisation.
				However, the current machine learning landscape is dominated by Python and its ML ecosystem
				consisting of NumPy, Pandas, Matplotlib and Sklearn. The problem with using python for this
				is that they need a python runtime on the system which is not available on browsers. The aim
				of this project is to build a data analysis and manipulation tool along with a plotting
				library that runs in the browser powered by WebAssembly and Rust.`),We=i(),R=s("section"),b(Y.$$.fragment),De=i(),_t=s("p"),Pe=c(`Many organizations now run machine learning models on the browser. The most accessible way
				to interact with machine learning is through the browser as such using the browser for data
				preprocessing and wrangling is the logical next step.`),Te=i(),xt=s("p"),ze=c(`Entropy stands for the degree of disorder and the ml-wasm/entropy library lets its users
				reduce the entropy of your data by structuring your data into series and dataframes from
				where they can manipulate the data, preprocess it and make it their own.`),Me=i(),S=s("section"),b(Z.$$.fragment),Oe=i(),qt=s("p"),Fe=c(`The ndarray crate provides an n-dimensional container for general elements and for numerics.
				ml-wasm/entropy utilizes ndarray as its internal data representation. When we considered the
				creation of a series and dataframe like structures the options to consider for its internal
				data representation was a standard Rust vector or a ndarray.`),Ne=i(),At=s("p"),Je=c(`The problem with utilizing a standard vector is we would have no access to fast and
				efficient operations which we would have to perform on the series and dataframes. The
				ndarray crate provides various methods which facilitate quick operations. It also provides
				various additional functionality such as its support with serde which allows us to quickly
				serialize and deserialize data from JavaScript to Rust and vice versa. Other than that,
				ndarray also supports rayon which gives us access to parallel iterators and parallel
				methods. ml-wasm/entropy utilizes ndarrays with the use of a ml-wasm/linalg utility wrapper.`),Ce=i(),I=s("section"),b(tt.$$.fragment),He=i(),Rt=s("p"),Ve=c(`It is a Rust library that allows wasm and JavaScript to interact with each other. This is
				the package that lets us write code in Rust and then talk to JavaScript and interact with
				it. It allows us to import JavaScript functionality into Rust such as DOM manipulation,
				console logging etc.`),je=i(),St=s("p"),Be=c(`Wasm-bindgen allows the end user to access methods written in Rust with the advantages of
				its speed and added memory safety all in JavaScript. As it is compiled into wasm it also has
				near native speed, which is comparable to stock Rust.`),Le=i(),f=s("section"),b(et.$$.fragment),Ge=i(),It=s("p"),Ke=c(`For the entire lifetime of programming languages there has always been the focus on either
				the speed of the language or the memory safety of the language. A classic example would be
				programming languages with or without a garbage collector. Languages with inbuilt garbage
				collector generally tend to be slower example ruby than the likes of those without one like
				C++. However, many memory safety issues arise due to a lack of a garbage collector.`),Qe=i(),kt=s("p"),Ue=c(`Rust however comes up with a solution that is both fast since it does not require a garbage
				collector but also ensures memory safety with concepts such as ownership and borrowing.
				However, no solution is perfect and the cost of utilizing Rust is slower compilation time
				and many compilation errors along with a higher learning curve just to begin using Rust.`),Xe=i(),Wt=s("p"),Ye=c(`For the purposes of this library however Rust is excellent as it has great support with
				libraries such as wasm-bindgen and excellent documentation with Rust used together with
				WebAssembly and tools such as wasm-pack.`),Ze=i(),Dt=s("p"),ta=c(`Senior software engineer Mohit Agarwal outlined his involvement with Rust in his blog. After
				evaluation of runtime performances of Rust against other popular compiled and interpreted
				languages like java and python, some surprising results were found. Rust is twice as fast
				when compared to Java but only uses 1% of its memory. When compared with python, Rust is 150
				times faster but it uses the same amount of memory. In a study by IBM, it was found that
				Rust and WebAssembly are nearly 15 times faster than Scala which is conventionally
				considered a high-performance language. Luca Palmieri published an article claiming that for
				simple machine tasks Rust is up to 25 times faster than Python.`),ea=i(),k=s("section"),b(at.$$.fragment),aa=i(),Pt=s("p"),sa=c(`WebAssembly is like a low-level assembly language which can be run on the browser. It allows
				code compiled on various languages to be run on the browser at nearly their native speeds.`),na=i(),Tt=s("p"),ra=c(`Thus, for our library we will write the code in Rust and then compile it to WebAssembly,
				often abbreviated as wasm. Also, since the program will be compiled, the compiler can
				perform various compile time optimizations. Since, we are just writing Rust programs we can
				also utilize various features that it provides most notably memory safety without negatively
				impacting performance.`),ia=i(),g=s("section"),b(st.$$.fragment),oa=i(),zt=s("p"),la=c(`A series consists of a column name and the data array, the array is represented as an
				ndarray utilizing the implementation of ml-wasm/linalg wrapper and can have possible types:
				Integer 32bit, Float 64bit or String. Multiple methods can be utilized on the series
				depending on the use case of the developer.`),ca=i(),nt=s("h4"),Mt=s("span"),ha=c("# "),M=s("a"),da=c("Documentation"),ua=i(),rt=s("pre"),it=s("code"),ma=c(`
				`),pa=c(Wa),fa=c(`			
			`),ga=i(),v=s("section"),b(ot.$$.fragment),va=i(),Ot=s("p"),wa=c(`A Dataframe is a combination of multiple series of different types. It forms a table
				structure which can be used for many methods to sanitize/manipulate data.`),ya=i(),lt=s("h4"),Ft=s("span"),ba=c("# "),O=s("a"),$a=c("Documentation"),Ea=i(),ct=s("pre"),ht=s("code"),_a=c(`
				`),xa=c(Da),qa=c(`			
			`),Aa=i(),T=s("a"),Ra=c("Back"),Sa=i(),Nt=s("footer"),b(dt.$$.fragment),this.h()},l(l){w=n(l,"HEAD",{});var y=r(w);Lt=n(y,"META",{name:!0,content:!0}),ne=o(y),Gt=n(y,"META",{name:!0,content:!0}),re=o(y),Kt=n(y,"TITLE",{});var Pa=r(Kt);ie=h(Pa,"Series and DataFrames with Rust and WebAssembly."),Pa.forEach(a),y.forEach(a),Xt=o(l),$(J.$$.fragment,l),Yt=o(l),A=n(l,"MAIN",{class:!0});var Jt=r(A);ut=n(Jt,"HEADER",{class:!0});var Ta=r(ut);$(C.$$.fragment,Ta),Ta.forEach(a),oe=o(Jt),d=n(Jt,"MAIN",{class:!0});var u=r(d);W=n(u,"DIV",{id:!0});var Ct=r(W);$(H.$$.fragment,Ct),le=o(Ct),Qt=n(Ct,"H4",{});var za=r(Qt);ce=h(za,"Fast, Series and DataFrames powered by WebAssembly and Rust."),za.forEach(a),he=o(Ct),mt=n(Ct,"H5",{style:!0});var Ma=r(mt);de=h(Ma,"5th May 2022 ~ Dion Pinto"),Ma.forEach(a),Ct.forEach(a),ue=o(u),m=n(u,"DIV",{id:!0,class:!0});var p=r(m);pt=n(p,"DIV",{class:!0});var Oa=r(pt);V=n(Oa,"A",{href:!0,class:!0});var Fa=r(V);me=h(Fa,"Introduction"),Fa.forEach(a),Oa.forEach(a),pe=o(p),ft=n(p,"DIV",{class:!0});var Na=r(ft);j=n(Na,"A",{href:!0,class:!0});var Ja=r(j);fe=h(Ja,"What is ml-wasm/entropy"),Ja.forEach(a),Na.forEach(a),ge=o(p),gt=n(p,"DIV",{class:!0});var Ca=r(gt);B=n(Ca,"A",{href:!0,class:!0});var Ha=r(B);ve=h(Ha,"Why Ndarray"),Ha.forEach(a),Ca.forEach(a),we=o(p),vt=n(p,"DIV",{class:!0});var Va=r(vt);L=n(Va,"A",{href:!0,class:!0});var ja=r(L);ye=h(ja,"What is wasm-bindgen"),ja.forEach(a),Va.forEach(a),be=o(p),wt=n(p,"DIV",{class:!0});var Ba=r(wt);G=n(Ba,"A",{href:!0,class:!0});var La=r(G);$e=h(La,"Why Rust"),La.forEach(a),Ba.forEach(a),Ee=o(p),yt=n(p,"DIV",{class:!0});var Ga=r(yt);K=n(Ga,"A",{href:!0,class:!0});var Ka=r(K);_e=h(Ka,"Why WebAssembly"),Ka.forEach(a),Ga.forEach(a),xe=o(p),bt=n(p,"DIV",{class:!0});var Qa=r(bt);Q=n(Qa,"A",{href:!0,class:!0});var Ua=r(Q);qe=h(Ua,"Series"),Ua.forEach(a),Qa.forEach(a),Ae=o(p),$t=n(p,"DIV",{class:!0});var Xa=r($t);U=n(Xa,"A",{href:!0,class:!0});var Ya=r(U);Re=h(Ya,"Dataframe"),Ya.forEach(a),Xa.forEach(a),p.forEach(a),Se=o(u),P=n(u,"SECTION",{id:!0,class:!0});var te=r(P);$(X.$$.fragment,te),Ie=o(te),Et=n(te,"P",{class:!0});var Za=r(Et);ke=h(Za,`Machine learning is an integral part of society. A fundamental cog in the machine learning
				wheel is data analysis, feature detection and manipulation along with visualisation.
				However, the current machine learning landscape is dominated by Python and its ML ecosystem
				consisting of NumPy, Pandas, Matplotlib and Sklearn. The problem with using python for this
				is that they need a python runtime on the system which is not available on browsers. The aim
				of this project is to build a data analysis and manipulation tool along with a plotting
				library that runs in the browser powered by WebAssembly and Rust.`),Za.forEach(a),te.forEach(a),We=o(u),R=n(u,"SECTION",{id:!0,class:!0});var Ht=r(R);$(Y.$$.fragment,Ht),De=o(Ht),_t=n(Ht,"P",{class:!0});var ts=r(_t);Pe=h(ts,`Many organizations now run machine learning models on the browser. The most accessible way
				to interact with machine learning is through the browser as such using the browser for data
				preprocessing and wrangling is the logical next step.`),ts.forEach(a),Te=o(Ht),xt=n(Ht,"P",{class:!0});var es=r(xt);ze=h(es,`Entropy stands for the degree of disorder and the ml-wasm/entropy library lets its users
				reduce the entropy of your data by structuring your data into series and dataframes from
				where they can manipulate the data, preprocess it and make it their own.`),es.forEach(a),Ht.forEach(a),Me=o(u),S=n(u,"SECTION",{id:!0,class:!0});var Vt=r(S);$(Z.$$.fragment,Vt),Oe=o(Vt),qt=n(Vt,"P",{class:!0});var as=r(qt);Fe=h(as,`The ndarray crate provides an n-dimensional container for general elements and for numerics.
				ml-wasm/entropy utilizes ndarray as its internal data representation. When we considered the
				creation of a series and dataframe like structures the options to consider for its internal
				data representation was a standard Rust vector or a ndarray.`),as.forEach(a),Ne=o(Vt),At=n(Vt,"P",{class:!0});var ss=r(At);Je=h(ss,`The problem with utilizing a standard vector is we would have no access to fast and
				efficient operations which we would have to perform on the series and dataframes. The
				ndarray crate provides various methods which facilitate quick operations. It also provides
				various additional functionality such as its support with serde which allows us to quickly
				serialize and deserialize data from JavaScript to Rust and vice versa. Other than that,
				ndarray also supports rayon which gives us access to parallel iterators and parallel
				methods. ml-wasm/entropy utilizes ndarrays with the use of a ml-wasm/linalg utility wrapper.`),ss.forEach(a),Vt.forEach(a),Ce=o(u),I=n(u,"SECTION",{id:!0,class:!0});var jt=r(I);$(tt.$$.fragment,jt),He=o(jt),Rt=n(jt,"P",{class:!0});var ns=r(Rt);Ve=h(ns,`It is a Rust library that allows wasm and JavaScript to interact with each other. This is
				the package that lets us write code in Rust and then talk to JavaScript and interact with
				it. It allows us to import JavaScript functionality into Rust such as DOM manipulation,
				console logging etc.`),ns.forEach(a),je=o(jt),St=n(jt,"P",{class:!0});var rs=r(St);Be=h(rs,`Wasm-bindgen allows the end user to access methods written in Rust with the advantages of
				its speed and added memory safety all in JavaScript. As it is compiled into wasm it also has
				near native speed, which is comparable to stock Rust.`),rs.forEach(a),jt.forEach(a),Le=o(u),f=n(u,"SECTION",{id:!0,class:!0});var D=r(f);$(et.$$.fragment,D),Ge=o(D),It=n(D,"P",{class:!0});var is=r(It);Ke=h(is,`For the entire lifetime of programming languages there has always been the focus on either
				the speed of the language or the memory safety of the language. A classic example would be
				programming languages with or without a garbage collector. Languages with inbuilt garbage
				collector generally tend to be slower example ruby than the likes of those without one like
				C++. However, many memory safety issues arise due to a lack of a garbage collector.`),is.forEach(a),Qe=o(D),kt=n(D,"P",{class:!0});var os=r(kt);Ue=h(os,`Rust however comes up with a solution that is both fast since it does not require a garbage
				collector but also ensures memory safety with concepts such as ownership and borrowing.
				However, no solution is perfect and the cost of utilizing Rust is slower compilation time
				and many compilation errors along with a higher learning curve just to begin using Rust.`),os.forEach(a),Xe=o(D),Wt=n(D,"P",{class:!0});var ls=r(Wt);Ye=h(ls,`For the purposes of this library however Rust is excellent as it has great support with
				libraries such as wasm-bindgen and excellent documentation with Rust used together with
				WebAssembly and tools such as wasm-pack.`),ls.forEach(a),Ze=o(D),Dt=n(D,"P",{class:!0});var cs=r(Dt);ta=h(cs,`Senior software engineer Mohit Agarwal outlined his involvement with Rust in his blog. After
				evaluation of runtime performances of Rust against other popular compiled and interpreted
				languages like java and python, some surprising results were found. Rust is twice as fast
				when compared to Java but only uses 1% of its memory. When compared with python, Rust is 150
				times faster but it uses the same amount of memory. In a study by IBM, it was found that
				Rust and WebAssembly are nearly 15 times faster than Scala which is conventionally
				considered a high-performance language. Luca Palmieri published an article claiming that for
				simple machine tasks Rust is up to 25 times faster than Python.`),cs.forEach(a),D.forEach(a),ea=o(u),k=n(u,"SECTION",{id:!0,class:!0});var Bt=r(k);$(at.$$.fragment,Bt),aa=o(Bt),Pt=n(Bt,"P",{class:!0});var hs=r(Pt);sa=h(hs,`WebAssembly is like a low-level assembly language which can be run on the browser. It allows
				code compiled on various languages to be run on the browser at nearly their native speeds.`),hs.forEach(a),na=o(Bt),Tt=n(Bt,"P",{class:!0});var ds=r(Tt);ra=h(ds,`Thus, for our library we will write the code in Rust and then compile it to WebAssembly,
				often abbreviated as wasm. Also, since the program will be compiled, the compiler can
				perform various compile time optimizations. Since, we are just writing Rust programs we can
				also utilize various features that it provides most notably memory safety without negatively
				impacting performance.`),ds.forEach(a),Bt.forEach(a),ia=o(u),g=n(u,"SECTION",{id:!0,class:!0});var F=r(g);$(st.$$.fragment,F),oa=o(F),zt=n(F,"P",{class:!0});var us=r(zt);la=h(us,`A series consists of a column name and the data array, the array is represented as an
				ndarray utilizing the implementation of ml-wasm/linalg wrapper and can have possible types:
				Integer 32bit, Float 64bit or String. Multiple methods can be utilized on the series
				depending on the use case of the developer.`),us.forEach(a),ca=o(F),nt=n(F,"H4",{style:!0});var Ia=r(nt);Mt=n(Ia,"SPAN",{style:!0});var ms=r(Mt);ha=h(ms,"# "),ms.forEach(a),M=n(Ia,"A",{href:!0,target:!0,class:!0});var ps=r(M);da=h(ps,"Documentation"),ps.forEach(a),Ia.forEach(a),ua=o(F),rt=n(F,"PRE",{id:!0,class:!0});var fs=r(rt);it=n(fs,"CODE",{});var ee=r(it);ma=h(ee,`
				`),pa=h(ee,Wa),fa=h(ee,`			
			`),ee.forEach(a),fs.forEach(a),F.forEach(a),ga=o(u),v=n(u,"SECTION",{id:!0,class:!0});var N=r(v);$(ot.$$.fragment,N),va=o(N),Ot=n(N,"P",{class:!0});var gs=r(Ot);wa=h(gs,`A Dataframe is a combination of multiple series of different types. It forms a table
				structure which can be used for many methods to sanitize/manipulate data.`),gs.forEach(a),ya=o(N),lt=n(N,"H4",{style:!0});var ka=r(lt);Ft=n(ka,"SPAN",{style:!0});var vs=r(Ft);ba=h(vs,"# "),vs.forEach(a),O=n(ka,"A",{href:!0,target:!0,class:!0});var ws=r(O);$a=h(ws,"Documentation"),ws.forEach(a),ka.forEach(a),Ea=o(N),ct=n(N,"PRE",{id:!0,class:!0});var ys=r(ct);ht=n(ys,"CODE",{});var ae=r(ht);_a=h(ae,`
				`),xa=h(ae,Da),qa=h(ae,`			
			`),ae.forEach(a),ys.forEach(a),N.forEach(a),Aa=o(u),T=n(u,"A",{id:!0,type:!0,class:!0,href:!0});var bs=r(T);Ra=h(bs,"Back"),bs.forEach(a),u.forEach(a),Sa=o(Jt),Nt=n(Jt,"FOOTER",{class:!0});var $s=r(Nt);$(dt.$$.fragment,$s),$s.forEach(a),Jt.forEach(a),this.h()},h(){e(Lt,"name","author"),e(Lt,"content","Dion Pinto"),e(Gt,"name","description"),e(Gt,"content","Series and DataFrames with Rust and WebAssembly"),e(ut,"class","svelte-107ql8x"),Ut(mt,"font-style","italic"),e(W,"id","title"),e(V,"href","#introduction"),e(V,"class","svelte-107ql8x"),e(pt,"class","svelte-107ql8x"),e(j,"href","#ml-wasm/entropy"),e(j,"class","svelte-107ql8x"),e(ft,"class","svelte-107ql8x"),e(B,"href","#ndarray"),e(B,"class","svelte-107ql8x"),e(gt,"class","svelte-107ql8x"),e(L,"href","#wasm-bindgen"),e(L,"class","svelte-107ql8x"),e(vt,"class","svelte-107ql8x"),e(G,"href","#rust"),e(G,"class","svelte-107ql8x"),e(wt,"class","svelte-107ql8x"),e(K,"href","#wasm"),e(K,"class","svelte-107ql8x"),e(yt,"class","svelte-107ql8x"),e(Q,"href","#series"),e(Q,"class","svelte-107ql8x"),e(bt,"class","svelte-107ql8x"),e(U,"href","#df"),e(U,"class","svelte-107ql8x"),e($t,"class","svelte-107ql8x"),e(m,"id","index"),e(m,"class","nes-container is-rounded is-dark svelte-107ql8x"),e(Et,"class","svelte-107ql8x"),e(P,"id","introduction"),e(P,"class","svelte-107ql8x"),e(_t,"class","svelte-107ql8x"),e(xt,"class","svelte-107ql8x"),e(R,"id","ml-wasm/entropy"),e(R,"class","svelte-107ql8x"),e(qt,"class","svelte-107ql8x"),e(At,"class","svelte-107ql8x"),e(S,"id","ndarray"),e(S,"class","svelte-107ql8x"),e(Rt,"class","svelte-107ql8x"),e(St,"class","svelte-107ql8x"),e(I,"id","wasm-bindgen"),e(I,"class","svelte-107ql8x"),e(It,"class","svelte-107ql8x"),e(kt,"class","svelte-107ql8x"),e(Wt,"class","svelte-107ql8x"),e(Dt,"class","svelte-107ql8x"),e(f,"id","rust"),e(f,"class","svelte-107ql8x"),e(Pt,"class","svelte-107ql8x"),e(Tt,"class","svelte-107ql8x"),e(k,"id","wasm"),e(k,"class","svelte-107ql8x"),e(zt,"class","svelte-107ql8x"),Ut(Mt,"color","#209cee"),e(M,"href","https://ml-wasm.github.io/entropy/docs/series"),e(M,"target","_blank"),e(M,"class","svelte-107ql8x"),Ut(nt,"font-style","italic"),e(rt,"id","block"),e(rt,"class","svelte-107ql8x"),e(g,"id","series"),e(g,"class","svelte-107ql8x"),e(Ot,"class","svelte-107ql8x"),Ut(Ft,"color","#209cee"),e(O,"href","https://ml-wasm.github.io/entropy/docs/dataframes"),e(O,"target","_blank"),e(O,"class","svelte-107ql8x"),Ut(lt,"font-style","italic"),e(ct,"id","block"),e(ct,"class","svelte-107ql8x"),e(v,"id","df"),e(v,"class","svelte-107ql8x"),e(T,"id","back-btn"),e(T,"type","button"),e(T,"class","nes-btn is-primary svelte-107ql8x"),e(T,"href",`${Rs}/blog`),e(d,"class","container svelte-107ql8x"),e(Nt,"class","svelte-107ql8x"),e(A,"class","main svelte-107ql8x")},m(l,y){se(l,w,y),t(w,Lt),t(w,ne),t(w,Gt),t(w,re),t(w,Kt),t(Kt,ie),se(l,Xt,y),E(J,l,y),se(l,Yt,y),se(l,A,y),t(A,ut),E(C,ut,null),t(A,oe),t(A,d),t(d,W),E(H,W,null),t(W,le),t(W,Qt),t(Qt,ce),t(W,he),t(W,mt),t(mt,de),t(d,ue),t(d,m),t(m,pt),t(pt,V),t(V,me),t(m,pe),t(m,ft),t(ft,j),t(j,fe),t(m,ge),t(m,gt),t(gt,B),t(B,ve),t(m,we),t(m,vt),t(vt,L),t(L,ye),t(m,be),t(m,wt),t(wt,G),t(G,$e),t(m,Ee),t(m,yt),t(yt,K),t(K,_e),t(m,xe),t(m,bt),t(bt,Q),t(Q,qe),t(m,Ae),t(m,$t),t($t,U),t(U,Re),t(d,Se),t(d,P),E(X,P,null),t(P,Ie),t(P,Et),t(Et,ke),t(d,We),t(d,R),E(Y,R,null),t(R,De),t(R,_t),t(_t,Pe),t(R,Te),t(R,xt),t(xt,ze),t(d,Me),t(d,S),E(Z,S,null),t(S,Oe),t(S,qt),t(qt,Fe),t(S,Ne),t(S,At),t(At,Je),t(d,Ce),t(d,I),E(tt,I,null),t(I,He),t(I,Rt),t(Rt,Ve),t(I,je),t(I,St),t(St,Be),t(d,Le),t(d,f),E(et,f,null),t(f,Ge),t(f,It),t(It,Ke),t(f,Qe),t(f,kt),t(kt,Ue),t(f,Xe),t(f,Wt),t(Wt,Ye),t(f,Ze),t(f,Dt),t(Dt,ta),t(d,ea),t(d,k),E(at,k,null),t(k,aa),t(k,Pt),t(Pt,sa),t(k,na),t(k,Tt),t(Tt,ra),t(d,ia),t(d,g),E(st,g,null),t(g,oa),t(g,zt),t(zt,la),t(g,ca),t(g,nt),t(nt,Mt),t(Mt,ha),t(nt,M),t(M,da),t(g,ua),t(g,rt),t(rt,it),t(it,ma),t(it,pa),t(it,fa),t(d,ga),t(d,v),E(ot,v,null),t(v,va),t(v,Ot),t(Ot,wa),t(v,ya),t(v,lt),t(lt,Ft),t(Ft,ba),t(lt,O),t(O,$a),t(v,Ea),t(v,ct),t(ct,ht),t(ht,_a),t(ht,xa),t(ht,qa),t(d,Aa),t(d,T),t(T,Ra),t(A,Sa),t(A,Nt),E(dt,Nt,null),Zt=!0},p:As,i(l){Zt||(_(J.$$.fragment,l),_(C.$$.fragment,l),_(H.$$.fragment,l),_(X.$$.fragment,l),_(Y.$$.fragment,l),_(Z.$$.fragment,l),_(tt.$$.fragment,l),_(et.$$.fragment,l),_(at.$$.fragment,l),_(st.$$.fragment,l),_(ot.$$.fragment,l),_(dt.$$.fragment,l),Zt=!0)},o(l){x(J.$$.fragment,l),x(C.$$.fragment,l),x(H.$$.fragment,l),x(X.$$.fragment,l),x(Y.$$.fragment,l),x(Z.$$.fragment,l),x(tt.$$.fragment,l),x(et.$$.fragment,l),x(at.$$.fragment,l),x(st.$$.fragment,l),x(ot.$$.fragment,l),x(dt.$$.fragment,l),Zt=!1},d(l){l&&a(w),l&&a(Xt),q(J,l),l&&a(Yt),l&&a(A),q(C),q(H),q(X),q(Y),q(Z),q(tt),q(et),q(at),q(st),q(ot),q(dt)}}}class Ms extends _s{constructor(w){super(),xs(this,w,null,Ws,qs,{})}}export{Ms as default};
