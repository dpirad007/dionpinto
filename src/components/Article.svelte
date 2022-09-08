<script>
	export /**
	 * @type {string | null | undefined}
	 */
	let articleTitle;
	export /**
	 * @type {string | null | undefined}
	 */
	let articleDate;

	export /**
	 * @type {string | null | undefined}
	 */
	let articleLink;

	export /**
	 * @type {any}
	 */
	let status;
</script>

<main>
	<div class="article">
		<span style="color: #209cee;">=> </span><a class="article_link" href={articleLink}
			>{articleTitle}</a
		>
		<span class="nes-badge" style="font-size: x-small; font-weight:bold">
			<span class={status ? 'is-success' : 'is-error'} style="color: white;">{articleDate}</span>
		</span>
	</div>
</main>

<style>
	.article_link {
		text-decoration: none;
		color: inherit;
	}

	.article {
		margin: 1rem 0rem 1rem 0rem;
	}

	.article_link:hover {
		color: #209cee;
	}

	@media only screen and (max-width: 740px) {
		.article {
			display: grid;
			grid-template-columns: 50px 1fr 110px;
			max-width: 100vw;
		}
	}
</style>
