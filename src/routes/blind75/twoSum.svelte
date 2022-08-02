<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import Title from '../../components/Title.svelte';

	import '../../utils/blind75.css';

	const title = '1. Two Sum';
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
			<h5 style="font-style: italic;">19th June 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#description">Description</a></div>
			<div><a href="#code1">Code -> Brute Force</a></div>
			<div><a href="#code2">Code -> Hash</a></div>
		</div>

		<section id="description">
			<Title type={5} title="Description" />

			<p>
				Given an array of integers nums and an integer target, return indices of the two numbers
				such that they add up to target. You may assume that each input would have exactly one
				solution, and you may not use the same element twice. You can return the answer in any
				order.

				<a id="link" href="https://leetcode.com/problems/two-sum/" target="_blank">(Problem)</a>
			</p>
		</section>

		<section id="code1">
			<Title type={5} title="Code (Python) -> Brute Force" />

			<pre id="block"><code>
				{`
    class Solution:
        def twoSum(self, nums: List[int], target: int) -> List[int]:
            for i in range(len(nums)-1):
                for j in range(i+1,len(nums)):
                    if(nums[i]+nums[j]==target):
                        return [i,j]
				`}			
			</code></pre>
			<p>Time Complexity => o(n<sup>2</sup>)</p>
			<p>Space Complexity => o(1)</p>
		</section>

		<section id="code2">
			<Title type={5} title="Code (Python) -> Hash" />

			<pre id="block"><code>
				{`
    class Solution:
        def twoSum(self, nums: List[int], target: int) -> List[int]:
            d={}
            for i in range(len(nums)):
                if((target-nums[i]) in d):
                    return [i,d[target-nums[i]]]
                else:
                    d[nums[i]]=i
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
