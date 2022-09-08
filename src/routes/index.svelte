<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<head>
	<meta name="author" content="Dion Pinto" />
	<meta name="description" content="Dion Pinto's Portfolio" />
	<title>Dion Pinto</title>
	<script async src="https://www.googletagmanager.com/gtag/js?id=G-2CX0XWQ7ZH"></script>
</head>

<SvelteToast />
<main class="main">
	<header><Navbar curPage="Home" /></header>

	<main class="container">
		<h1 class="title">
			<span class="title-word title-word-1">Dion</span>
			<span class="title-word title-word-2">Pinto</span>
			<span> ~ </span>
			<span class="title-word title-word-3">Software</span>
			<span class="title-word title-word-4">Engineer</span>
		</h1>

		<div class="nes-container is-dark">
			<div id="title_subsection">
				<i class="nes-octocat animate" />
				<span>Web Dev + Systems languages.</span>
			</div>
		</div>
	</main>

	<footer>
		<Footer />
	</footer>
</main>

<style>
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

	@media only screen and (max-width: 740px) {
		#title_subsection {
			display: grid;
		}

		.main {
			height: 100vh;
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
