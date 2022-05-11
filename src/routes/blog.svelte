<script>
	import { base } from '$app/paths';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Title from '../components/Title.svelte';

	const comingSoonToast = () => {
		toast.push('Coming Soon');
	};
</script>

<SvelteToast />
<main class="main">
	<header><Navbar curPage="Blog" /></header>

	<main class="container">
		<Title type={2} title="Index" />

		<div id="blog_list">
			<h4>
				<span style="color: #209cee;">#</span> Articles
			</h4>
			<div class="article">
				<span style="color: #209cee;">=> </span><a class="article_link" href="{base}/entropy"
					>Series and DataFrames with Rust and WebAssembly</a
				>
				<span class="nes-badge" style="font-size: x-small; font-weight:bold">
					<span class="is-success" style="color: white;">9/5/22</span>
				</span>
			</div>
			<div class="article">
				<span style="color: #209cee;">=> </span><a
					class="article_link"
					href="#"
					on:click={comingSoonToast}>Publish SvelteKit App on gh-pages</a
				>
				<span class="nes-badge" style="font-size: x-small; font-weight:bold">
					<span class="is-error" style="color: white;">Coming Soon</span>
				</span>
			</div>
			<div class="article">
				<span style="color: #209cee;">=> </span><a
					class="article_link"
					href="#"
					on:click={comingSoonToast}>Chip 8</a
				>
				<span class="nes-badge" style="font-size: x-small; font-weight:bold">
					<span class="is-error" style="color: white;">Coming Soon</span>
				</span>
			</div>
		</div>

		<div id="blog_list">
			<h4><span style="color: #209cee;">#</span> Project Ideas</h4>
			<div class="article">
				<span style="color: #209cee;">=> </span><a
					class="article_link"
					href="#"
					on:click={comingSoonToast}>Rusty Deep Learning</a
				>
				<span class="nes-badge" style="font-size: x-small; font-weight:bold">
					<span class="is-error" style="color: white;">Coming Soon</span>
				</span>
			</div>
		</div>
	</main>

	<footer>
		<Footer />
	</footer>
</main>

<style>
	.article_link {
		text-decoration: none;
		color: inherit;
	}

	#blog_list {
		color: white;
	}

	#blog_list div {
		margin: 1rem 0rem 1rem 0rem;
	}

	#blog_list div:hover {
		color: #209cee;
	}

	#blog_list h4 {
		margin: 3rem 0 0 0;
	}

	.main {
		width: 100vw;
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

		.article {
			display: grid;
			grid-template-columns: 50px 1fr 110px;
			max-width: 100vw;
		}
	}
</style>
