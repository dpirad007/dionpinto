<script>
	export /**
	 * @type {string | null | undefined}
	 */
	let projectName;
	export /**
	 * @type {string | null | undefined}
	 */
	let imageSrc;
	export /**
	 * @type {any}
	 */
	let projectDescription;
	export /**
	 * @type {string | null | undefined}
	 */
	let gitLink;

	export /**
	 * @type {string}
	 */
	let typeBadge;

	// @ts-ignore
	const showModal = () => document.getElementById('dialog-dark-rounded').showModal();
</script>

<main>
	<div id="project" class="nes-container is-dark with-title">
		{#if typeBadge === 'Entropy'}
			<p class="title">
				{projectName}
				<a
					href="https://ml-wasm.github.io/entropy/"
					target="_blank"
					class="nes-badge is-splited"
					style="font-size: x-small; font-weight:bold"
				>
					<span class="is-error">FYP</span>
					<span class="is-primary">&#9741;</span></a
				>
			</p>
		{:else if typeBadge === 'Plot'}
			<p class="title">
				{projectName}
				<span class="nes-badge" style="font-size: x-small; font-weight:bold">
					<span class="is-error">FYP</span>
				</span>
			</p>
		{:else if typeBadge === 'Internship'}
			<p class="title">
				{projectName}
				<span class="nes-badge" style="font-size: x-small; font-weight:bold">
					<span class="is-warning">Internship</span>
				</span>
			</p>
		{:else}
			<p class="title">
				{projectName}
				<span class="nes-badge" style="font-size: x-small; font-weight:bold">
					<span class="is-success">Project</span>
				</span>
			</p>
		{/if}

		<img id="project_img" alt={projectName} src={imageSrc} />
		<div id="project_border" />
		<p>{projectDescription}</p>

		<div id="project_footer">
			<a href={gitLink} target="_blank"><i class="nes-icon github" /></a>
			<section>
				<button type="button" class="nes-btn is-primary" on:click={showModal}> Read More </button>
				<dialog class="nes-dialog is-dark is-rounded" id="dialog-dark-rounded">
					<form method="dialog">
						<h3 class="title">Coming Soon</h3>
						<p>Comprehensive details will be added soon</p>
						<p>for now you can check out the github repositories.</p>
						<menu id="modal_btn" class="dialog-menu">
							<button class="nes-btn is-primary">Okay</button>
						</menu>
					</form>
				</dialog>
			</section>
		</div>
	</div>
</main>

<style>
	.title {
		padding-bottom: 2rem;
	}
	#modal_btn {
		padding: 1rem 0 0 0;
		display: flex;
		justify-content: center;
	}

	#project_img {
		width: 100%;
	}

	#project_border {
		margin: 10px 0;
		border: 2px solid white;
	}

	#project_footer {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
</style>
