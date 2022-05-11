<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Project from '../components/Project.svelte';

	const data = [
		{
			projectName: 'Entropy',
			projectDescription: 'Fast, Series and DataFrames powered by WebAssembly and Rust.',
			imageSrc: 'entropy.png',
			gitLink: 'https://github.com/dpirad007/Entropy',
			typeBadge: 'Entropy'
		},
		{
			projectName: 'Plot',
			projectDescription: 'Plotting powered by WebAssembly and Rust.',
			imageSrc: 'plot.png',
			gitLink: 'https://github.com/dpirad007/Plot',
			typeBadge: 'Plot'
		},
		{
			projectName: 'Meditatree',
			projectDescription: 'A 3D interactive mindful meditation web app.',
			imageSrc: 'meditatree.png',
			gitLink: 'https://github.com/dpirad007/meditatree',
			typeBadge: 'None'
		},
		{
			projectName: 'Botonomics',
			projectDescription: 'Build interactive Chatbots.',
			imageSrc: 'botonomics.png',
			gitLink:
				'https://teedee.io/?utm_source=botonomics_site&utm_medium=website&utm_campaign=analytics',
			typeBadge: 'Internship'
		},
		{
			projectName: 'Balanced',
			projectDescription: 'Manage your Mental Wellbeing.',
			imageSrc: 'balanced.png',
			gitLink: 'https://qtech-mhs-dev.web.app/',
			typeBadge: 'Internship'
		}
	];
</script>

<SvelteToast />
<main class="main">
	<header><Navbar /></header>

	<main class="container">
		<div class="project-grid">
			{#each data as project}
				<Project {...project} />
			{/each}
		</div>
	</main>

	<footer>
		<Footer />
	</footer>
</main>

<style>
	.project-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		column-gap: 1rem;
		row-gap: 1rem;
		margin: 1rem 0;
	}

	.main {
		padding: 1rem;
		display: grid;
		grid-template-areas:
			'head'
			'main'
			'foot';
		grid-template-rows: 50px 1fr 50px;
		height: 100%;
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

		.project-grid {
			display: flex;
			flex-direction: column;
		}
	}
</style>
