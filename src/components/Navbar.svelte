<script>
</script>

<main>
	<nav id="navbar">
		<div id="container">
			<a href="/" class="nes-badge">
				<span class="is-primary">Home</span>
			</a>
			<a href="projects" class="nes-badge">
				<span class="is-dark">Projects</span>
			</a>

			<a href="blog" class="nes-badge">
				<span class="is-dark">Blog</span>
			</a>
		</div>
	</nav>
</main>

<style>
	#container {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
	}

	@media only screen and (max-width: 530px) {
		#container {
			display: flex;
			flex-direction: column;
			width: 100%;
		}
	}
</style>
