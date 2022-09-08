<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Title from '../components/Title.svelte';
	import Article from '../components/Article.svelte';
	import BreadCrumbs from '../components/BreadCrumbs.svelte';
</script>

<head>
	<meta name="author" content="Dion Pinto" />
	<meta name="description" content="Articles of Dion Pinto" />
	<title>Articles of Dion Pinto</title>
</head>

<SvelteToast />
<main class="main">
	<header><Navbar curPage="Blog" /></header>

	<main class="container">
		<Title type={2} title="Blind 75" />
		<BreadCrumbs curPage="Blind75" />

		<div id="blog_list">
			<h3>
				<span style="color: #209cee;"># </span><i style="border-bottom: 2px solid white;">Arrays</i>
			</h3>
			<Article
				articleTitle={'53. Maximum Subarray'}
				articleLink={`${base}/blind75/maxSubarray`}
				articleDate={'19/7/22'}
				status={true}
			/>
			<Article
				articleTitle={'153. Find Minimum in Rotated Sorted Array'}
				articleLink={`${base}/blind75/minInRotatedSortedArray`}
				articleDate={'14/7/22'}
				status={true}
			/>
			<Article
				articleTitle={'15. 3Sum'}
				articleLink={`${base}/blind75/threeSum`}
				articleDate={'22/6/22'}
				status={true}
			/>
			<Article
				articleTitle={'217. Contains Duplicate'}
				articleLink={`${base}/blind75/containsDuplicate`}
				articleDate={'22/6/22'}
				status={true}
			/>
			<Article
				articleTitle={'121. Best Time to Buy and Sell Stock'}
				articleLink={`${base}/blind75/bestTimeToBuyAndSell1`}
				articleDate={'20/6/22'}
				status={true}
			/>
			<Article
				articleTitle={'122. Best Time to Buy and Sell Stock II'}
				articleLink={`${base}/blind75/bestTimeToBuyAndSell2`}
				articleDate={'20/6/22'}
				status={true}
			/>
			<Article
				articleTitle={'1. Two Sum'}
				articleLink={`${base}/blind75/twoSum`}
				articleDate={'19/6/22'}
				status={true}
			/>
			<Article
				articleTitle={'167. Two Sum II - Input Array Is Sorted'}
				articleLink={`${base}/blind75/twoSum2`}
				articleDate={'19/6/22'}
				status={true}
			/>
			<Article
				articleTitle={'11. Container With Most Water'}
				articleLink={`${base}/blind75/containerWithMostWater`}
				articleDate={'17/6/22'}
				status={true}
			/>
		</div>
	</main>

	<footer>
		<Footer />
	</footer>
</main>

<style>
	#blog_list {
		color: white;
	}

	#blog_list h3 {
		margin: 3rem 0 0 0;
	}

	.main {
		height: 100vh;
		padding: 1rem;
		display: grid;
		grid-template-areas:
			'head'
			'main'
			'foot';
		grid-template-rows: 50px 1fr 50px;
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
	}
</style>
