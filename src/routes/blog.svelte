<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Title from '../components/Title.svelte';
	import Article from '../components/Article.svelte';
</script>

<head>
	<meta name="author" content="Dion Pinto" />
	<meta name="description" content="Articles of Dion Pinto" />
	<title>Articles of Dion Pinto</title>
</head>

<SvelteToast />
<main class="main">
	<header><Navbar curPage="Blog" /></header>

	<main class="container">
		<Title type={2} title="Index" />

		<div id="blog_list">
			<h3>
				<span style="color: #209cee;"># </span>
				<i style="border-bottom: 2px solid white;">Articles</i>
			</h3>

			<Article
				articleTitle={'Maintain Upptime for your site'}
				articleLink={`${base}/upptime`}
				articleDate={'14/6/2'}
				status={true}
			/>

			<Article
				articleTitle={'Publish SvelteKit App on gh-pages'}
				articleLink={`${base}/sveltekitPublish`}
				articleDate={'12/5/22'}
				status={true}
			/>

			<Article
				articleTitle={'Series and DataFrames with Rust and WebAssembly'}
				articleLink={`${base}/entropy`}
				articleDate={'9/5/22'}
				status={true}
			/>

			<Article
				articleTitle={'Chip 8'}
				articleLink={'#blog_list'}
				articleDate={'Coming Soon'}
				status={false}
			/>
		</div>

		<div id="blog_list">
			<h3>
				<span style="color: #209cee;"># </span><i style="border-bottom: 2px solid white;"
					>Project Ideas</i
				>
			</h3>
			<Article
				articleTitle={'Rusty Deep Learning'}
				articleLink={'#blog_list'}
				articleDate={'Coming Soon'}
				status={false}
			/>
		</div>

		<div id="blog_list">
			<h3>
				<span style="color: #209cee;"># </span><i style="border-bottom: 2px solid white;"
					>LeetCode</i
				>
			</h3>
			<Article
				articleTitle={'Blind 75'}
				articleLink={`${base}/blind75`}
				articleDate={'Partial'}
				status={true}
			/>
		</div>
	</main>

	<footer>
		<Footer />
	</footer>
</main>

<style>
	#blog_list {
		color: white;
	}

	#blog_list h3 {
		margin: 3rem 0 0 0;
	}

	.main {
		height: 100vh;
		padding: 1rem;
		display: grid;
		grid-template-areas:
			'head'
			'main'
			'foot';
		grid-template-rows: 50px 1fr 50px;
	}
	header {
		grid-area: head;
	}

	.container {
		grid-area: main;
	}

	footer {
		grid-area: foot;
	}

	@media only screen and (max-width: 740px) {
		.main {
			padding: 1rem;
			display: grid;
			grid-template-areas:
				'head'
				'main'
				'foot';
			grid-template-rows: 130px 1fr 70px;
		}
	}
</style>
