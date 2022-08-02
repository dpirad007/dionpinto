import{S as An,i as Rn,s as Sn,e as a,k as s,t as l,w as b,c as n,a as r,m as i,h,d as e,x as $,b as d,f as Ut,g as ne,J as t,y as E,E as In,q as _,o as A,B as R}from"../chunks/index-cd4245c1.js";import{b as kn}from"../chunks/paths-c8fbcc1d.js";import{S as Wn,N as Dn,F as Pn}from"../chunks/Footer-8b9c5841.js";import{T as M}from"../chunks/Title-6ea0487f.js";/* empty css                     */function Tn(_n){let g,$t,re,Et,se,_t,ie,Xt,x,Yt,S,At,J,oe,c,I,C,le,Rt,he,de,at,ce,me,u,St,nt,ue,pe,It,rt,fe,ge,kt,st,we,ye,Wt,it,ve,be,Dt,ot,$e,Ee,Pt,lt,_e,Ae,Tt,ht,Re,Se,zt,dt,Ie,ke,O,H,We,Mt,De,Pe,k,V,Te,Ot,ze,Me,Ft,Oe,Fe,W,j,Ne,Nt,xe,Je,xt,Ce,He,D,q,Ve,Jt,je,qe,Ct,Be,Le,f,B,Ge,Ht,Ke,Qe,Vt,Ue,Xe,jt,Ye,Ze,qt,ta,ea,P,L,aa,Bt,na,ra,Lt,sa,ia,w,G,oa,Gt,la,ha,K,ct,da,Q,ca,ma,mt,U,ua,Pa=`
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
				`,pa,fa,ga,y,X,wa,Kt,ya,va,Y,ut,ba,Z,$a,Ea,pt,tt,_a,Ta=`
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
				`,Aa,Ra,Sa,z,Ia,ka,Qt,et,Zt;return x=new Wn({}),J=new Dn({props:{curPage:"Blog"}}),C=new M({props:{type:2,title:"Entropy"}}),H=new M({props:{type:5,title:"Introduction"}}),V=new M({props:{type:5,title:"What is ml-wasm/entropy"}}),j=new M({props:{type:5,title:"Why Ndarray?"}}),q=new M({props:{type:5,title:"What is wasm-bindgen"}}),B=new M({props:{type:5,title:"Why Rust?"}}),L=new M({props:{type:5,title:"Why WebAssembly?"}}),G=new M({props:{type:5,title:"Series"}}),X=new M({props:{type:5,title:"DataFrame"}}),et=new Pn({}),{c(){g=a("head"),$t=a("meta"),re=s(),Et=a("meta"),se=s(),_t=a("title"),ie=l("Series and DataFrames with Rust and WebAssembly."),Xt=s(),b(x.$$.fragment),Yt=s(),S=a("main"),At=a("header"),b(J.$$.fragment),oe=s(),c=a("main"),I=a("div"),b(C.$$.fragment),le=s(),Rt=a("h4"),he=l("Fast, Series and DataFrames powered by WebAssembly and Rust."),de=s(),at=a("h5"),ce=l("5th May 2022 ~ Dion Pinto"),me=s(),u=a("div"),St=a("div"),nt=a("a"),ue=l("Introduction"),pe=s(),It=a("div"),rt=a("a"),fe=l("What is ml-wasm/entropy"),ge=s(),kt=a("div"),st=a("a"),we=l("Why Ndarray"),ye=s(),Wt=a("div"),it=a("a"),ve=l("What is wasm-bindgen"),be=s(),Dt=a("div"),ot=a("a"),$e=l("Why Rust"),Ee=s(),Pt=a("div"),lt=a("a"),_e=l("Why WebAssembly"),Ae=s(),Tt=a("div"),ht=a("a"),Re=l("Series"),Se=s(),zt=a("div"),dt=a("a"),Ie=l("Dataframe"),ke=s(),O=a("section"),b(H.$$.fragment),We=s(),Mt=a("p"),De=l(`Machine learning is an integral part of society. A fundamental cog in the machine learning
				wheel is data analysis, feature detection and manipulation along with visualisation.
				However, the current machine learning landscape is dominated by Python and its ML ecosystem
				consisting of NumPy, Pandas, Matplotlib and Sklearn. The problem with using python for this
				is that they need a python runtime on the system which is not available on browsers. The aim
				of this project is to build a data analysis and manipulation tool along with a plotting
				library that runs in the browser powered by WebAssembly and Rust.`),Pe=s(),k=a("section"),b(V.$$.fragment),Te=s(),Ot=a("p"),ze=l(`Many organizations now run machine learning models on the browser. The most accessible way
				to interact with machine learning is through the browser as such using the browser for data
				preprocessing and wrangling is the logical next step.`),Me=s(),Ft=a("p"),Oe=l(`Entropy stands for the degree of disorder and the ml-wasm/entropy library lets its users
				reduce the entropy of your data by structuring your data into series and dataframes from
				where they can manipulate the data, preprocess it and make it their own.`),Fe=s(),W=a("section"),b(j.$$.fragment),Ne=s(),Nt=a("p"),xe=l(`The ndarray crate provides an n-dimensional container for general elements and for numerics.
				ml-wasm/entropy utilizes ndarray as its internal data representation. When we considered the
				creation of a series and dataframe like structures the options to consider for its internal
				data representation was a standard Rust vector or a ndarray.`),Je=s(),xt=a("p"),Ce=l(`The problem with utilizing a standard vector is we would have no access to fast and
				efficient operations which we would have to perform on the series and dataframes. The
				ndarray crate provides various methods which facilitate quick operations. It also provides
				various additional functionality such as its support with serde which allows us to quickly
				serialize and deserialize data from JavaScript to Rust and vice versa. Other than that,
				ndarray also supports rayon which gives us access to parallel iterators and parallel
				methods. ml-wasm/entropy utilizes ndarrays with the use of a ml-wasm/linalg utility wrapper.`),He=s(),D=a("section"),b(q.$$.fragment),Ve=s(),Jt=a("p"),je=l(`It is a Rust library that allows wasm and JavaScript to interact with each other. This is
				the package that lets us write code in Rust and then talk to JavaScript and interact with
				it. It allows us to import JavaScript functionality into Rust such as DOM manipulation,
				console logging etc.`),qe=s(),Ct=a("p"),Be=l(`Wasm-bindgen allows the end user to access methods written in Rust with the advantages of
				its speed and added memory safety all in JavaScript. As it is compiled into wasm it also has
				near native speed, which is comparable to stock Rust.`),Le=s(),f=a("section"),b(B.$$.fragment),Ge=s(),Ht=a("p"),Ke=l(`For the entire lifetime of programming languages there has always been the focus on either
				the speed of the language or the memory safety of the language. A classic example would be
				programming languages with or without a garbage collector. Languages with inbuilt garbage
				collector generally tend to be slower example ruby than the likes of those without one like
				C++. However, many memory safety issues arise due to a lack of a garbage collector.`),Qe=s(),Vt=a("p"),Ue=l(`Rust however comes up with a solution that is both fast since it does not require a garbage
				collector but also ensures memory safety with concepts such as ownership and borrowing.
				However, no solution is perfect and the cost of utilizing Rust is slower compilation time
				and many compilation errors along with a higher learning curve just to begin using Rust.`),Xe=s(),jt=a("p"),Ye=l(`For the purposes of this library however Rust is excellent as it has great support with
				libraries such as wasm-bindgen and excellent documentation with Rust used together with
				WebAssembly and tools such as wasm-pack.`),Ze=s(),qt=a("p"),ta=l(`Senior software engineer Mohit Agarwal outlined his involvement with Rust in his blog. After
				evaluation of runtime performances of Rust against other popular compiled and interpreted
				languages like java and python, some surprising results were found. Rust is twice as fast
				when compared to Java but only uses 1% of its memory. When compared with python, Rust is 150
				times faster but it uses the same amount of memory. In a study by IBM, it was found that
				Rust and WebAssembly are nearly 15 times faster than Scala which is conventionally
				considered a high-performance language. Luca Palmieri published an article claiming that for
				simple machine tasks Rust is up to 25 times faster than Python.`),ea=s(),P=a("section"),b(L.$$.fragment),aa=s(),Bt=a("p"),na=l(`WebAssembly is like a low-level assembly language which can be run on the browser. It allows
				code compiled on various languages to be run on the browser at nearly their native speeds.`),ra=s(),Lt=a("p"),sa=l(`Thus, for our library we will write the code in Rust and then compile it to WebAssembly,
				often abbreviated as wasm. Also, since the program will be compiled, the compiler can
				perform various compile time optimizations. Since, we are just writing Rust programs we can
				also utilize various features that it provides most notably memory safety without negatively
				impacting performance.`),ia=s(),w=a("section"),b(G.$$.fragment),oa=s(),Gt=a("p"),la=l(`A series consists of a column name and the data array, the array is represented as an
				ndarray utilizing the implementation of ml-wasm/linalg wrapper and can have possible types:
				Integer 32bit, Float 64bit or String. Multiple methods can be utilized on the series
				depending on the use case of the developer.`),ha=s(),K=a("h4"),ct=a("span"),da=l("# "),Q=a("a"),ca=l("Documentation"),ma=s(),mt=a("pre"),U=a("code"),ua=l(`
				`),pa=l(Pa),fa=l(`			
			`),ga=s(),y=a("section"),b(X.$$.fragment),wa=s(),Kt=a("p"),ya=l(`A Dataframe is a combination of multiple series of different types. It forms a table
				structure which can be used for many methods to sanitize/manipulate data.`),va=s(),Y=a("h4"),ut=a("span"),ba=l("# "),Z=a("a"),$a=l("Documentation"),Ea=s(),pt=a("pre"),tt=a("code"),_a=l(`
				`),Aa=l(Ta),Ra=l(`			
			`),Sa=s(),z=a("a"),Ia=l("Back"),ka=s(),Qt=a("footer"),b(et.$$.fragment),this.h()},l(o){g=n(o,"HEAD",{});var v=r(g);$t=n(v,"META",{name:!0,content:!0}),re=i(v),Et=n(v,"META",{name:!0,content:!0}),se=i(v),_t=n(v,"TITLE",{});var za=r(_t);ie=h(za,"Series and DataFrames with Rust and WebAssembly."),za.forEach(e),v.forEach(e),Xt=i(o),$(x.$$.fragment,o),Yt=i(o),S=n(o,"MAIN",{class:!0});var ft=r(S);At=n(ft,"HEADER",{});var Ma=r(At);$(J.$$.fragment,Ma),Ma.forEach(e),oe=i(ft),c=n(ft,"MAIN",{class:!0});var m=r(c);I=n(m,"DIV",{id:!0});var gt=r(I);$(C.$$.fragment,gt),le=i(gt),Rt=n(gt,"H4",{});var Oa=r(Rt);he=h(Oa,"Fast, Series and DataFrames powered by WebAssembly and Rust."),Oa.forEach(e),de=i(gt),at=n(gt,"H5",{style:!0});var Fa=r(at);ce=h(Fa,"5th May 2022 ~ Dion Pinto"),Fa.forEach(e),gt.forEach(e),me=i(m),u=n(m,"DIV",{id:!0,class:!0});var p=r(u);St=n(p,"DIV",{});var Na=r(St);nt=n(Na,"A",{href:!0});var xa=r(nt);ue=h(xa,"Introduction"),xa.forEach(e),Na.forEach(e),pe=i(p),It=n(p,"DIV",{});var Ja=r(It);rt=n(Ja,"A",{href:!0});var Ca=r(rt);fe=h(Ca,"What is ml-wasm/entropy"),Ca.forEach(e),Ja.forEach(e),ge=i(p),kt=n(p,"DIV",{});var Ha=r(kt);st=n(Ha,"A",{href:!0});var Va=r(st);we=h(Va,"Why Ndarray"),Va.forEach(e),Ha.forEach(e),ye=i(p),Wt=n(p,"DIV",{});var ja=r(Wt);it=n(ja,"A",{href:!0});var qa=r(it);ve=h(qa,"What is wasm-bindgen"),qa.forEach(e),ja.forEach(e),be=i(p),Dt=n(p,"DIV",{});var Ba=r(Dt);ot=n(Ba,"A",{href:!0});var La=r(ot);$e=h(La,"Why Rust"),La.forEach(e),Ba.forEach(e),Ee=i(p),Pt=n(p,"DIV",{});var Ga=r(Pt);lt=n(Ga,"A",{href:!0});var Ka=r(lt);_e=h(Ka,"Why WebAssembly"),Ka.forEach(e),Ga.forEach(e),Ae=i(p),Tt=n(p,"DIV",{});var Qa=r(Tt);ht=n(Qa,"A",{href:!0});var Ua=r(ht);Re=h(Ua,"Series"),Ua.forEach(e),Qa.forEach(e),Se=i(p),zt=n(p,"DIV",{});var Xa=r(zt);dt=n(Xa,"A",{href:!0});var Ya=r(dt);Ie=h(Ya,"Dataframe"),Ya.forEach(e),Xa.forEach(e),p.forEach(e),ke=i(m),O=n(m,"SECTION",{id:!0});var te=r(O);$(H.$$.fragment,te),We=i(te),Mt=n(te,"P",{});var Za=r(Mt);De=h(Za,`Machine learning is an integral part of society. A fundamental cog in the machine learning
				wheel is data analysis, feature detection and manipulation along with visualisation.
				However, the current machine learning landscape is dominated by Python and its ML ecosystem
				consisting of NumPy, Pandas, Matplotlib and Sklearn. The problem with using python for this
				is that they need a python runtime on the system which is not available on browsers. The aim
				of this project is to build a data analysis and manipulation tool along with a plotting
				library that runs in the browser powered by WebAssembly and Rust.`),Za.forEach(e),te.forEach(e),Pe=i(m),k=n(m,"SECTION",{id:!0});var wt=r(k);$(V.$$.fragment,wt),Te=i(wt),Ot=n(wt,"P",{});var tn=r(Ot);ze=h(tn,`Many organizations now run machine learning models on the browser. The most accessible way
				to interact with machine learning is through the browser as such using the browser for data
				preprocessing and wrangling is the logical next step.`),tn.forEach(e),Me=i(wt),Ft=n(wt,"P",{});var en=r(Ft);Oe=h(en,`Entropy stands for the degree of disorder and the ml-wasm/entropy library lets its users
				reduce the entropy of your data by structuring your data into series and dataframes from
				where they can manipulate the data, preprocess it and make it their own.`),en.forEach(e),wt.forEach(e),Fe=i(m),W=n(m,"SECTION",{id:!0});var yt=r(W);$(j.$$.fragment,yt),Ne=i(yt),Nt=n(yt,"P",{});var an=r(Nt);xe=h(an,`The ndarray crate provides an n-dimensional container for general elements and for numerics.
				ml-wasm/entropy utilizes ndarray as its internal data representation. When we considered the
				creation of a series and dataframe like structures the options to consider for its internal
				data representation was a standard Rust vector or a ndarray.`),an.forEach(e),Je=i(yt),xt=n(yt,"P",{});var nn=r(xt);Ce=h(nn,`The problem with utilizing a standard vector is we would have no access to fast and
				efficient operations which we would have to perform on the series and dataframes. The
				ndarray crate provides various methods which facilitate quick operations. It also provides
				various additional functionality such as its support with serde which allows us to quickly
				serialize and deserialize data from JavaScript to Rust and vice versa. Other than that,
				ndarray also supports rayon which gives us access to parallel iterators and parallel
				methods. ml-wasm/entropy utilizes ndarrays with the use of a ml-wasm/linalg utility wrapper.`),nn.forEach(e),yt.forEach(e),He=i(m),D=n(m,"SECTION",{id:!0});var vt=r(D);$(q.$$.fragment,vt),Ve=i(vt),Jt=n(vt,"P",{});var rn=r(Jt);je=h(rn,`It is a Rust library that allows wasm and JavaScript to interact with each other. This is
				the package that lets us write code in Rust and then talk to JavaScript and interact with
				it. It allows us to import JavaScript functionality into Rust such as DOM manipulation,
				console logging etc.`),rn.forEach(e),qe=i(vt),Ct=n(vt,"P",{});var sn=r(Ct);Be=h(sn,`Wasm-bindgen allows the end user to access methods written in Rust with the advantages of
				its speed and added memory safety all in JavaScript. As it is compiled into wasm it also has
				near native speed, which is comparable to stock Rust.`),sn.forEach(e),vt.forEach(e),Le=i(m),f=n(m,"SECTION",{id:!0});var T=r(f);$(B.$$.fragment,T),Ge=i(T),Ht=n(T,"P",{});var on=r(Ht);Ke=h(on,`For the entire lifetime of programming languages there has always been the focus on either
				the speed of the language or the memory safety of the language. A classic example would be
				programming languages with or without a garbage collector. Languages with inbuilt garbage
				collector generally tend to be slower example ruby than the likes of those without one like
				C++. However, many memory safety issues arise due to a lack of a garbage collector.`),on.forEach(e),Qe=i(T),Vt=n(T,"P",{});var ln=r(Vt);Ue=h(ln,`Rust however comes up with a solution that is both fast since it does not require a garbage
				collector but also ensures memory safety with concepts such as ownership and borrowing.
				However, no solution is perfect and the cost of utilizing Rust is slower compilation time
				and many compilation errors along with a higher learning curve just to begin using Rust.`),ln.forEach(e),Xe=i(T),jt=n(T,"P",{});var hn=r(jt);Ye=h(hn,`For the purposes of this library however Rust is excellent as it has great support with
				libraries such as wasm-bindgen and excellent documentation with Rust used together with
				WebAssembly and tools such as wasm-pack.`),hn.forEach(e),Ze=i(T),qt=n(T,"P",{});var dn=r(qt);ta=h(dn,`Senior software engineer Mohit Agarwal outlined his involvement with Rust in his blog. After
				evaluation of runtime performances of Rust against other popular compiled and interpreted
				languages like java and python, some surprising results were found. Rust is twice as fast
				when compared to Java but only uses 1% of its memory. When compared with python, Rust is 150
				times faster but it uses the same amount of memory. In a study by IBM, it was found that
				Rust and WebAssembly are nearly 15 times faster than Scala which is conventionally
				considered a high-performance language. Luca Palmieri published an article claiming that for
				simple machine tasks Rust is up to 25 times faster than Python.`),dn.forEach(e),T.forEach(e),ea=i(m),P=n(m,"SECTION",{id:!0});var bt=r(P);$(L.$$.fragment,bt),aa=i(bt),Bt=n(bt,"P",{});var cn=r(Bt);na=h(cn,`WebAssembly is like a low-level assembly language which can be run on the browser. It allows
				code compiled on various languages to be run on the browser at nearly their native speeds.`),cn.forEach(e),ra=i(bt),Lt=n(bt,"P",{});var mn=r(Lt);sa=h(mn,`Thus, for our library we will write the code in Rust and then compile it to WebAssembly,
				often abbreviated as wasm. Also, since the program will be compiled, the compiler can
				perform various compile time optimizations. Since, we are just writing Rust programs we can
				also utilize various features that it provides most notably memory safety without negatively
				impacting performance.`),mn.forEach(e),bt.forEach(e),ia=i(m),w=n(m,"SECTION",{id:!0});var F=r(w);$(G.$$.fragment,F),oa=i(F),Gt=n(F,"P",{});var un=r(Gt);la=h(un,`A series consists of a column name and the data array, the array is represented as an
				ndarray utilizing the implementation of ml-wasm/linalg wrapper and can have possible types:
				Integer 32bit, Float 64bit or String. Multiple methods can be utilized on the series
				depending on the use case of the developer.`),un.forEach(e),ha=i(F),K=n(F,"H4",{style:!0});var Wa=r(K);ct=n(Wa,"SPAN",{style:!0});var pn=r(ct);da=h(pn,"# "),pn.forEach(e),Q=n(Wa,"A",{href:!0,target:!0});var fn=r(Q);ca=h(fn,"Documentation"),fn.forEach(e),Wa.forEach(e),ma=i(F),mt=n(F,"PRE",{id:!0});var gn=r(mt);U=n(gn,"CODE",{});var ee=r(U);ua=h(ee,`
				`),pa=h(ee,Pa),fa=h(ee,`			
			`),ee.forEach(e),gn.forEach(e),F.forEach(e),ga=i(m),y=n(m,"SECTION",{id:!0});var N=r(y);$(X.$$.fragment,N),wa=i(N),Kt=n(N,"P",{});var wn=r(Kt);ya=h(wn,`A Dataframe is a combination of multiple series of different types. It forms a table
				structure which can be used for many methods to sanitize/manipulate data.`),wn.forEach(e),va=i(N),Y=n(N,"H4",{style:!0});var Da=r(Y);ut=n(Da,"SPAN",{style:!0});var yn=r(ut);ba=h(yn,"# "),yn.forEach(e),Z=n(Da,"A",{href:!0,target:!0});var vn=r(Z);$a=h(vn,"Documentation"),vn.forEach(e),Da.forEach(e),Ea=i(N),pt=n(N,"PRE",{id:!0});var bn=r(pt);tt=n(bn,"CODE",{});var ae=r(tt);_a=h(ae,`
				`),Aa=h(ae,Ta),Ra=h(ae,`			
			`),ae.forEach(e),bn.forEach(e),N.forEach(e),Sa=i(m),z=n(m,"A",{id:!0,type:!0,class:!0,href:!0});var $n=r(z);Ia=h($n,"Back"),$n.forEach(e),m.forEach(e),ka=i(ft),Qt=n(ft,"FOOTER",{});var En=r(Qt);$(et.$$.fragment,En),En.forEach(e),ft.forEach(e),this.h()},h(){d($t,"name","author"),d($t,"content","Dion Pinto"),d(Et,"name","description"),d(Et,"content","Series and DataFrames with Rust and WebAssembly"),Ut(at,"font-style","italic"),d(I,"id","title"),d(nt,"href","#introduction"),d(rt,"href","#ml-wasm/entropy"),d(st,"href","#ndarray"),d(it,"href","#wasm-bindgen"),d(ot,"href","#rust"),d(lt,"href","#wasm"),d(ht,"href","#series"),d(dt,"href","#df"),d(u,"id","index"),d(u,"class","nes-container is-rounded is-dark"),d(O,"id","introduction"),d(k,"id","ml-wasm/entropy"),d(W,"id","ndarray"),d(D,"id","wasm-bindgen"),d(f,"id","rust"),d(P,"id","wasm"),Ut(ct,"color","#209cee"),d(Q,"href","https://ml-wasm.github.io/entropy/docs/series"),d(Q,"target","_blank"),Ut(K,"font-style","italic"),d(mt,"id","block"),d(w,"id","series"),Ut(ut,"color","#209cee"),d(Z,"href","https://ml-wasm.github.io/entropy/docs/dataframes"),d(Z,"target","_blank"),Ut(Y,"font-style","italic"),d(pt,"id","block"),d(y,"id","df"),d(z,"id","back-btn"),d(z,"type","button"),d(z,"class","nes-btn is-primary"),d(z,"href",`${kn}/blog`),d(c,"class","container"),d(S,"class","main")},m(o,v){ne(o,g,v),t(g,$t),t(g,re),t(g,Et),t(g,se),t(g,_t),t(_t,ie),ne(o,Xt,v),E(x,o,v),ne(o,Yt,v),ne(o,S,v),t(S,At),E(J,At,null),t(S,oe),t(S,c),t(c,I),E(C,I,null),t(I,le),t(I,Rt),t(Rt,he),t(I,de),t(I,at),t(at,ce),t(c,me),t(c,u),t(u,St),t(St,nt),t(nt,ue),t(u,pe),t(u,It),t(It,rt),t(rt,fe),t(u,ge),t(u,kt),t(kt,st),t(st,we),t(u,ye),t(u,Wt),t(Wt,it),t(it,ve),t(u,be),t(u,Dt),t(Dt,ot),t(ot,$e),t(u,Ee),t(u,Pt),t(Pt,lt),t(lt,_e),t(u,Ae),t(u,Tt),t(Tt,ht),t(ht,Re),t(u,Se),t(u,zt),t(zt,dt),t(dt,Ie),t(c,ke),t(c,O),E(H,O,null),t(O,We),t(O,Mt),t(Mt,De),t(c,Pe),t(c,k),E(V,k,null),t(k,Te),t(k,Ot),t(Ot,ze),t(k,Me),t(k,Ft),t(Ft,Oe),t(c,Fe),t(c,W),E(j,W,null),t(W,Ne),t(W,Nt),t(Nt,xe),t(W,Je),t(W,xt),t(xt,Ce),t(c,He),t(c,D),E(q,D,null),t(D,Ve),t(D,Jt),t(Jt,je),t(D,qe),t(D,Ct),t(Ct,Be),t(c,Le),t(c,f),E(B,f,null),t(f,Ge),t(f,Ht),t(Ht,Ke),t(f,Qe),t(f,Vt),t(Vt,Ue),t(f,Xe),t(f,jt),t(jt,Ye),t(f,Ze),t(f,qt),t(qt,ta),t(c,ea),t(c,P),E(L,P,null),t(P,aa),t(P,Bt),t(Bt,na),t(P,ra),t(P,Lt),t(Lt,sa),t(c,ia),t(c,w),E(G,w,null),t(w,oa),t(w,Gt),t(Gt,la),t(w,ha),t(w,K),t(K,ct),t(ct,da),t(K,Q),t(Q,ca),t(w,ma),t(w,mt),t(mt,U),t(U,ua),t(U,pa),t(U,fa),t(c,ga),t(c,y),E(X,y,null),t(y,wa),t(y,Kt),t(Kt,ya),t(y,va),t(y,Y),t(Y,ut),t(ut,ba),t(Y,Z),t(Z,$a),t(y,Ea),t(y,pt),t(pt,tt),t(tt,_a),t(tt,Aa),t(tt,Ra),t(c,Sa),t(c,z),t(z,Ia),t(S,ka),t(S,Qt),E(et,Qt,null),Zt=!0},p:In,i(o){Zt||(_(x.$$.fragment,o),_(J.$$.fragment,o),_(C.$$.fragment,o),_(H.$$.fragment,o),_(V.$$.fragment,o),_(j.$$.fragment,o),_(q.$$.fragment,o),_(B.$$.fragment,o),_(L.$$.fragment,o),_(G.$$.fragment,o),_(X.$$.fragment,o),_(et.$$.fragment,o),Zt=!0)},o(o){A(x.$$.fragment,o),A(J.$$.fragment,o),A(C.$$.fragment,o),A(H.$$.fragment,o),A(V.$$.fragment,o),A(j.$$.fragment,o),A(q.$$.fragment,o),A(B.$$.fragment,o),A(L.$$.fragment,o),A(G.$$.fragment,o),A(X.$$.fragment,o),A(et.$$.fragment,o),Zt=!1},d(o){o&&e(g),o&&e(Xt),R(x,o),o&&e(Yt),o&&e(S),R(J),R(C),R(H),R(V),R(j),R(q),R(B),R(L),R(G),R(X),R(et)}}}class xn extends An{constructor(g){super(),Rn(this,g,null,Tn,Sn,{})}}export{xn as default};
