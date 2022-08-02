<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import Title from '../../components/Title.svelte';

	import '../../utils/blind75.css';

	const title = '122. Best Time to Buy and Sell Stock II';
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
			<h5 style="font-style: italic;">20th June 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#description">Description</a></div>
			<div><a href="#code">Code</a></div>
		</div>

		<section id="description">
			<Title type={5} title="Description" />

			<p>
				You are given an integer array prices where prices[i] is the price of a given stock on the
				ith day. On each day, you may decide to buy and/or sell the stock. You can only hold at most
				one share of the stock at any time. However, you can buy it then immediately sell it on the
				same day. Find and return the maximum profit you can achieve.

				<a
					id="link"
					href="https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/"
					target="_blank">(Problem)</a
				>
			</p>
		</section>

		<section id="code">
			<Title type={5} title="Code (Python)" />

			<pre id="block"><code>
				{`
    class Solution:
        def maxProfit(self, prices: List[int]) -> int:
            prof=0
            for i in range(len(prices)-1):
                if(prices[i+1]>prices[i]):prof+=prices[i+1]-prices[i]
            return prof
				`}			
			</code></pre>
			<p>Time Complexity => o(n)</p>
			<p>Space Complexity => o(1)</p>
		</section>
		<a type="button" class="nes-btn is-primary" href={`${base}/blind75`}>Back</a>
	</main>

	<footer>
		<Footer />
	</footer>
</main>
