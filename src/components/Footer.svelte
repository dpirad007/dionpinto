<script>
	import { toast } from '@zerodevx/svelte-toast';

	const copyToClip = () => {
		navigator.clipboard.writeText('dionpinto000@gmail.com');
		toast.push('Copied to clipboard');
	};
</script>

<main>
	<section id="footer" class="icon-list">
		<a href="https://github.com/dpirad007" target="_blank"><i class="nes-icon github" /></a>
		<div on:click={copyToClip}><i class="nes-icon gmail" /></div>
		<a href="https://www.linkedin.com/in/dion-pinto-9a7269178/" target="_blank"
			><i class="nes-icon linkedin" /></a
		>
	</section>
</main>

<style>
	#footer {
		display: flex;
		justify-content: center;
	}

	section a,
	div {
		margin: 1rem;
	}
</style>
