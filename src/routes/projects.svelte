<script>
	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<main class="main">
	<header><Navbar /></header>

	<main class="container">
		<div class="project-grid">
			<div class="nes-container is-dark with-title">
				<p class="title">
					Entropy <span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-error">Final Year</span>
					</span>
				</p>
				<img
					class="nes-avatar"
					alt="Gravatar"
					src="https://www.gravatar.com/avatar?s=15"
					style="image-rendering: pixelated;"
				/>
				<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
			</div>
			<div class="nes-container is-dark with-title">
				<p class="title">
					Plot <span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-error">Final Year</span>
					</span>
				</p>
				<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
			</div>
			<div class="nes-container is-dark with-title">
				<p class="title">Meditatree</p>
				<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
			</div>
			<div class="nes-container is-dark with-title">
				<p class="title">
					Botonomics <span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-warning">Internship</span>
					</span>
				</p>

				<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
			</div>
			<div class="nes-container is-dark with-title">
				<p class="title">
					Balanced <span class="nes-badge" style="font-size: x-small; font-weight:bold">
						<span class="is-warning">Internship</span>
					</span>
				</p>
				<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
			</div>
			<div class="nes-container is-dark with-title">
				<p class="title">ETAMAX-21</p>
				<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
			</div>
			<div class="nes-container is-dark with-title">
				<p class="title">Covid-19-Tracker</p>
				<p>Good morning. Thou hast had a good night's sleep, I hope.</p>
			</div>
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
	}

	.project-grid div {
		margin: 1rem;
	}

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
		grid-area: main;
	}

	footer {
		grid-area: foot;
	}
</style>
