<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<SvelteToast />
<main class="main">
	<header><Navbar /></header>

	<main class="container">
		<h2 style="color: white;">
			<span class="title-word title-word-1"><span style="color: #209cee;">#</span> Index</span>
		</h2>
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
					<a>DataFrames with Rust and WebAssembly</a>
					<span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-success" style="color: white;">9/5/22</span>
					</span>
				</li>
				<li>
					<a>Plotting with Rust and WebAssembly</a>
					<span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-success" style="color: white;">9/5/22</span>
					</span>
				</li>
				<li>
					<a>Chip 8</a>
					<span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-success" style="color: white;">9/5/22</span>
					</span>
				</li>
			</ul>

			<h4><span style="color: #209cee;">#</span> Project Ideas</h4>
			<ul class="nes-list is-circle">
				<li>
					<a>Chip 8</a>
					<span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-success" style="color: white;">9/5/22</span>
					</span>
				</li>
				<li>
					<a>DataFrames with Rust and WebAssembly</a>
					<span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-success" style="color: white;">9/5/22</span>
					</span>
				</li>
				<li>
					<a>Plotting with Rust and WebAssembly</a>
					<span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-success" style="color: white;">9/5/22</span>
					</span>
				</li>
				<li>
					<a>Chip 8</a>
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
	#blog_list {
		color: white;
	}

	#blog_list li {
		margin: 1rem;
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

	.title-word {
		animation: color-animation 4s linear infinite;
	}

	.title-word-1 {
		--color-1: #accfcb;
		--color-2: #e4a9a8;
		--color-3: #accfcb;
	}

	@keyframes color-animation {
		0% {
			color: var(--color-1);
		}
		32% {
			color: var(--color-1);
		}
		33% {
			color: var(--color-2);
		}
		65% {
			color: var(--color-2);
		}
		66% {
			color: var(--color-3);
		}
		99% {
			color: var(--color-3);
		}
		100% {
			color: var(--color-1);
		}
	}
</style>
