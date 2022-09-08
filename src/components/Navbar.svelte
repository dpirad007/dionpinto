<script>
	import { base } from '$app/paths';
	export /**
	 * @type {string}
	 */
	let curPage;
</script>

<main>
	<nav id="navbar">
		<div id="container">
			<a href="{base}/" class="nes-badge">
				{#if curPage === 'Home'}
					<span class="is-primary">Home</span>
				{:else}
					<span class="is-dark">Home</span>
				{/if}
			</a>
			<a href="{base}/projects" class="nes-badge">
				{#if curPage === 'Projects'}
					<span class="is-primary">Projects</span>
				{:else}
					<span class="is-dark">Projects</span>
				{/if}
			</a>

			<a href="{base}/blog" class="nes-badge">
				{#if curPage === 'Blog'}
					<span class="is-primary">Blog</span>
				{:else}
					<span class="is-dark">Blog</span>
				{/if}
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
