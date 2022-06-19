<script>
	import { base } from '$app/paths';
	export /**
	 * @type {string}
	 */
	let curPage;
</script>

<main>
	<div id="container">
		{#if curPage === 'Blind75'}
			<a id="bc-link" href="{base}/blog"> Blog </a>
			>
			<a id="bc-link" href="{base}/blind75"> Blind75 </a>
		{/if}
	</div>
</main>

<style>
	#container {
		color: white;
	}
	#bc-link {
		text-decoration: none;
	}
</style>
