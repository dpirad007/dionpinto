<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Title from '../components/Title.svelte';
</script>

<SvelteToast />
<main class="main">
	<header><Navbar /></header>

	<main class="container">
		<Title type={5} title="Index" />
		<ul id="blog_list" class="nes-list is-circle">
			<h4>
				<span style="color: #209cee;">#</span> Articles
			</h4>
			<ul class="nes-list is-circle">
				<li>
					<a>Chip 8</a>
					<span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-success" style="color: white;">9/5/22</span>
					</span>
				</li>
				<li>
					<a class="article_link" href="entropy">Series and DataFrames with Rust and WebAssembly</a>
					<span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-success" style="color: white;">9/5/22</span>
					</span>
				</li>
			</ul>

			<h4><span style="color: #209cee;">#</span> Project Ideas</h4>
			<ul class="nes-list is-circle">
				<li>
					<a>Rusty Deep Learning</a>
					<span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-success" style="color: white;">9/5/22</span>
					</span>
				</li>
			</ul>
		</ul>
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

	#blog_list li {
		margin: 1rem;
	}

	#blog_list li:hover {
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
		grid-template-rows: 0.1fr 0.8fr 0.1fr;
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
</style>
