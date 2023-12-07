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
</script>

<main>
	<div id="project" class="nes-container is-dark with-title">
		{#if typeBadge === 'FYP'}
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
		{:else if typeBadge === 'Publication'}
			<p class="title">
				{projectName}
				<span class="nes-badge" style="font-size: x-small; font-weight:bold">
					<span class="is-warning">Publication</span>
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
			{#if (typeBadge === 'Internship' || typeBadge === 'Publication') && gitLink}
				<a href={gitLink} target="_blank"
					><img
						style="background-color: white;"
						src="externalLink.png"
						alt="external site logo"
					/></a
				>
			{:else if gitLink}
				<a href={gitLink} target="_blank"><i class="nes-icon github" /></a>
			{/if}
		</div>
	</div>
</main>

<style>
	.title {
		padding-bottom: 2rem;
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
