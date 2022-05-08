<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<SvelteToast />
<main class="main">
	<header><Navbar /></header>

	<main class="container">
		<h1 class="title">
			<span class="title-word title-word-1">Dion</span>
			<span class="title-word title-word-2">Pinto</span>
			<span> ~ </span>
			<span class="title-word title-word-3">Software</span>
			<span class="title-word title-word-4">Engineer</span>
		</h1>

		<div id="title_subsection" class="nes-container is-dark">
			<p><i class="nes-octocat animate" /> Web Dev mostly, Systems languages sometimes.</p>
		</div>
	</main>

	<footer>
		<Footer />
	</footer>
</main>

<style>
	.main {
		width: 100vw;
		height: 100vh;
		background-color: black;
		padding: 1rem;
		display: grid;
		grid-template-areas:
			'head'
			'main'
			'foot';
		grid-template-rows: 0.1fr 1fr 0.1fr;
	}
	header {
		grid-area: head;
	}

	.container {
		align-self: center;
		grid-area: main;
	}

	footer {
		grid-area: foot;
	}

	.title-word {
		animation: color-animation 4s linear infinite;
	}

	.title-word-1 {
		--color-1: #df8453;
		--color-2: #3d8dae;
		--color-3: #e4a9a8;
	}

	.title-word-2 {
		--color-1: #dbad4a;
		--color-2: #accfcb;
		--color-3: #17494d;
	}

	.title-word-3 {
		--color-1: #accfcb;
		--color-2: #e4a9a8;
		--color-3: #accfcb;
	}

	.title-word-4 {
		--color-1: #3d8dae;
		--color-2: #df8453;
		--color-3: #e4a9a8;
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

	.title {
		font-weight: 800;
		padding: 3rem;
	}

	#title_subsection {
		margin: 0 2rem;
	}
</style>
