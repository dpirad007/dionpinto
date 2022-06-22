<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import Title from '../../components/Title.svelte';

	const title = '217. Contains Duplicate';
</script>

<head>
	<meta name="author" content="Dion Pinto" />
	<meta name="description" content={`Leetcode Blind 75 ${title}`} />
	<title>{title}</title>
</head>

<SvelteToast />
<main class="main">
	<header><Navbar curPage="Blog" /></header>

	<main class="container">
		<div id="title">
			<Title type={2} {title} />
			<h4>Leetcode Blind 75</h4>
			<h5 style="font-style: italic;">22th June 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#description">Description</a></div>
			<div><a href="#code">Code</a></div>
		</div>

		<section id="description">
			<Title type={5} title="Description" />

			<p>
				Given an integer array nums, return true if any value appears at least twice in the array,
				and return false if every element is distinct.

				<a id="link" href="https://leetcode.com/problems/contains-duplicate/" target="_blank"
					>(Problem)</a
				>
			</p>
		</section>

		<section id="code">
			<Title type={5} title="Code (Python)" />

			<pre id="block"><code>
				{`
    class Solution:
        def containsDuplicate(self, nums: List[int]) -> bool:
            d={}
            for i in nums:
                if(i in d):
                    d[i]+=1
                    if(d[i]>1):return True   
                else:
                    d[i]=1
            return False 
				`}			
			</code></pre>
			<p>Time Complexity => o(n)</p>
			<p>Space Complexity => o(n)</p>
		</section>
		<a type="button" class="nes-btn is-primary" href={`${base}/blind75`}>Back</a>
	</main>

	<footer>
		<Footer />
	</footer>
</main>

<style>
	#link {
		color: #209cee;
	}

	#block {
		border: 2px solid white;
		font-size: small;
	}

	a {
		text-decoration: none;
		color: inherit;
	}

	section {
		margin-bottom: 50px;
		display: grid;
	}

	p {
		font-size: 15px;
		text-align: justify;
		hyphens: auto;
		line-height: 1.5rem;
	}

	#index {
		margin: 1rem;
	}

	#index div {
		margin: 1rem;
	}

	.main {
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
		color: white;
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
			grid-template-columns: 100%;
		}
	}
</style>
