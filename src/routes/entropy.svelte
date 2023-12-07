<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Title from '../components/Title.svelte';

	import '../utils/blog.css';
</script>

<head>
	<meta name="author" content="Dion Pinto" />
	<meta name="description" content="Series and DataFrames with Rust and WebAssembly" />
	<title>Series and DataFrames with Rust and WebAssembly.</title>
</head>

<SvelteToast />
<main class="main">
	<header><Navbar curPage="Blog" /></header>

	<main class="container">
		<div id="title">
			<Title type={2} title="Entropy" />
			<h4>Fast, Series and DataFrames powered by WebAssembly and Rust.</h4>
			<h5 style="font-style: italic;">5th May 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#introduction">Introduction</a></div>
			<div><a href="#ml-wasm/entropy">What is ml-wasm/entropy</a></div>
			<div><a href="#ndarray">Why Ndarray</a></div>
			<div><a href="#wasm-bindgen">What is wasm-bindgen</a></div>
			<div><a href="#rust">Why Rust</a></div>
			<div><a href="#wasm">Why WebAssembly</a></div>
			<div><a href="#series">Series</a></div>
			<div><a href="#df">Dataframe</a></div>
		</div>

		<section id="introduction">
			<Title type={5} title="Introduction" />

			<p>
				Machine learning is an integral part of society. A fundamental cog in the machine learning
				wheel is data analysis, feature detection and manipulation along with visualisation.
				However, the current machine learning landscape is dominated by Python and its ML ecosystem
				consisting of NumPy, Pandas, Matplotlib and Sklearn. The problem with using python for this
				is that they need a python runtime on the system which is not available on browsers. The aim
				of this project is to build a data analysis and manipulation tool along with a plotting
				library that runs in the browser powered by WebAssembly and Rust.
			</p>
		</section>

		<section id="ml-wasm/entropy">
			<Title type={5} title="What is ml-wasm/entropy" />

			<p>
				Many organizations now run machine learning models on the browser. The most accessible way
				to interact with machine learning is through the browser as such using the browser for data
				preprocessing and wrangling is the logical next step.
			</p>
			<p>
				Entropy stands for the degree of disorder and the ml-wasm/entropy library lets its users
				reduce the entropy of your data by structuring your data into series and dataframes from
				where they can manipulate the data, preprocess it and make it their own.
			</p>
		</section>

		<section id="ndarray">
			<Title type={5} title="Why Ndarray?" />

			<p>
				The ndarray crate provides an n-dimensional container for general elements and for numerics.
				ml-wasm/entropy utilizes ndarray as its internal data representation. When we considered the
				creation of a series and dataframe like structures the options to consider for its internal
				data representation was a standard Rust vector or a ndarray.
			</p>
			<p>
				The problem with utilizing a standard vector is we would have no access to fast and
				efficient operations which we would have to perform on the series and dataframes. The
				ndarray crate provides various methods which facilitate quick operations. It also provides
				various additional functionality such as its support with serde which allows us to quickly
				serialize and deserialize data from JavaScript to Rust and vice versa. Other than that,
				ndarray also supports rayon which gives us access to parallel iterators and parallel
				methods. ml-wasm/entropy utilizes ndarrays with the use of a ml-wasm/linalg utility wrapper.
			</p>
		</section>

		<section id="wasm-bindgen">
			<Title type={5} title="What is wasm-bindgen" />

			<p>
				It is a Rust library that allows wasm and JavaScript to interact with each other. This is
				the package that lets us write code in Rust and then talk to JavaScript and interact with
				it. It allows us to import JavaScript functionality into Rust such as DOM manipulation,
				console logging etc.
			</p>
			<p>
				Wasm-bindgen allows the end user to access methods written in Rust with the advantages of
				its speed and added memory safety all in JavaScript. As it is compiled into wasm it also has
				near native speed, which is comparable to stock Rust.
			</p>
		</section>

		<section id="rust">
			<Title type={5} title="Why Rust?" />

			<p>
				For the entire lifetime of programming languages there has always been the focus on either
				the speed of the language or the memory safety of the language. A classic example would be
				programming languages with or without a garbage collector. Languages with inbuilt garbage
				collector generally tend to be slower example ruby than the likes of those without one like
				C++. However, many memory safety issues arise due to a lack of a garbage collector.
			</p>
			<p>
				Rust however comes up with a solution that is both fast since it does not require a garbage
				collector but also ensures memory safety with concepts such as ownership and borrowing.
				However, no solution is perfect and the cost of utilizing Rust is slower compilation time
				and many compilation errors along with a higher learning curve just to begin using Rust.
			</p>
			<p>
				For the purposes of this library however Rust is excellent as it has great support with
				libraries such as wasm-bindgen and excellent documentation with Rust used together with
				WebAssembly and tools such as wasm-pack.
			</p>

			<p>
				Senior software engineer Mohit Agarwal outlined his involvement with Rust in his blog. After
				evaluation of runtime performances of Rust against other popular compiled and interpreted
				languages like java and python, some surprising results were found. Rust is twice as fast
				when compared to Java but only uses 1% of its memory. When compared with python, Rust is 150
				times faster but it uses the same amount of memory. In a study by IBM, it was found that
				Rust and WebAssembly are nearly 15 times faster than Scala which is conventionally
				considered a high-performance language. Luca Palmieri published an article claiming that for
				simple machine tasks Rust is up to 25 times faster than Python.
			</p>
		</section>

		<section id="wasm">
			<Title type={5} title="Why WebAssembly?" />

			<p>
				WebAssembly is like a low-level assembly language which can be run on the browser. It allows
				code compiled on various languages to be run on the browser at nearly their native speeds.
			</p>
			<p>
				Thus, for our library we will write the code in Rust and then compile it to WebAssembly,
				often abbreviated as wasm. Also, since the program will be compiled, the compiler can
				perform various compile time optimizations. Since, we are just writing Rust programs we can
				also utilize various features that it provides most notably memory safety without negatively
				impacting performance.
			</p>
		</section>

		<section id="series">
			<Title type={5} title="Series" />

			<p>
				A series consists of a column name and the data array, the array is represented as an
				ndarray utilizing the implementation of ml-wasm/linalg wrapper and can have possible types:
				Integer 32bit, Float 64bit or String. Multiple methods can be utilized on the series
				depending on the use case of the developer.
			</p>

			<h4 style="font-style: italic;">
				<span style="color: #209cee;"># </span><a
					href="https://ml-wasm.github.io/entropy/docs/series"
					target="_blank"
				>
					Documentation</a
				>
			</h4>

			<pre id="block"><code>
				{`
  import { SeriesI32 } from “../pkg”;

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
				`}			
			</code></pre>
		</section>

		<section id="df">
			<Title type={5} title="DataFrame" />

			<p>
				A Dataframe is a combination of multiple series of different types. It forms a table
				structure which can be used for many methods to sanitize/manipulate data.
			</p>
			<h4 style="font-style: italic;">
				<span style="color: #209cee;"># </span><a
					href="https://ml-wasm.github.io/entropy/docs/dataframes"
					target="_blank"
				>
					Documentation</a
				>
			</h4>

			<pre id="block"><code>
				{`
  import { SeriesI32, DataFrame } from “../pkg”;

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
				`}			
			</code></pre>
		</section>
		<a id="back-btn" type="button" class="nes-btn is-primary" href={`${base}/blog`}>Back</a>
	</main>

	<footer>
		<Footer />
	</footer>
</main>

<style>
	.container {
		padding: 1rem 10rem 1rem 10rem;
	}
</style>
