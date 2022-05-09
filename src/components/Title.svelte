<script>
	export /**
	 * @type {number}
	 */
	let type = 4;
	export /**
	 * @type {any}
	 */
	let title = 'Provide Title';
</script>

<main>
	{#if type === 1}
		<h1 style="color: white;">
			<span class="title-word title-word-1">{title}</span>
		</h1>
	{:else if type === 2}
		<h2 style="color: white;">
			<span class="title-word title-word-1">{title}</span>
		</h2>
	{:else if type === 3}
		<h3 style="color: white;">
			<span class="title-word title-word-1">{title}</span>
		</h3>
	{:else if type === 4}
		<h4 style="color: white;">
			<span class="title-word title-word-1">{title}</span>
		</h4>
	{:else if type === 5}
		<h4 style="color: #209cee;">
			<span>{title}</span>
		</h4>
	{:else}
		<h2 style="color: white;">
			<span class="title-word title-word-1"><span style="color: #209cee;">#</span> Index</span>
		</h2>
	{/if}
</main>

<style>
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
