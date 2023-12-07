<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import Title from '../../components/Title.svelte';

	import '../../utils/blind75.css';

	const title = '53. Maximum Subarray';
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
			<h5 style="font-style: italic;">19th July 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#description">Description</a></div>
			<div><a href="#explanation">Explanation</a></div>
			<div><a href="#code">Code</a></div>
		</div>

		<section id="description">
			<Title type={5} title="Description" />

			<p>
				Given an integer array nums, find the contiguous subarray (containing at least one number)
				which has the largest sum and return its sum. A subarray is a contiguous part of an array.

				<a id="link" href="https://leetcode.com/problems/maximum-subarray/" target="_blank"
					>(Problem)</a
				>
			</p>
		</section>

		<section id="explanation">
			<Title type={5} title="Explanation" />

			<p>
				We can find the max subarray by checking all possible subarrays of the array, in python this
				can be done quite easily via the slicing operation.
			</p>
			<pre id="block"><code>
				{`
	class Solution:
		def maxSubArray(self, nums: List[int]) -> int:
			maxval=nums[0]
			for i in range(len(nums)-2):
				for j in range(i+1,len(nums)-1):
					val = sum(nums[i:j])
					maxval = max(val,maxval)
			return maxval
				`}			
			</code></pre>

			<p>
				However the time complexity of such an approach is very poor O(n<sup>3</sup>). This is
				beacuse even the sum() function take O(n) to compute.
			</p>
			<p>A better approach is to always check the current sum of the array.</p>
			<pre id="block"><code>
				{`
	[-2,1,-3,4,-1,2,1,-5,4]

	initially -2 -> -1 -> -4 ...
				`}			
			</code></pre>
			<p>
				We can notice that -2 did not help us at all, all it did was lower the value, hence whenever
				we encounter a negative current sum we should set to 0.
			</p>
			<p>
				We can then just iterate over the array and add the value present in ith position, followed
				by checking the max(current sum, maximun value found so far).
			</p>
			<pre id="block"><code>
				{`
	[-2,-3,-1,-5]
				`}			
			</code></pre>
			<p>
				Suppose we get the above scenario where all the numbers are negative, then we just need to
				get the highest value. This can be achieved by initially setting the maxval as the first
				number of the array, after which the current sum will only decrease -> it will set to 0,
				then it will add the negative value in ith position -> compare itself to maxval and the
				higher number will be chosen.
			</p>
		</section>

		<section id="code">
			<Title type={5} title="Code (Python)" />

			<pre id="block"><code>
				{`
    class Solution:
        def maxSubArray(self, nums: List[int]) -> int:
            maxval = nums[0]
            curSum=0
            
            for i in range(len(nums)):
                if(curSum<0):
                    curSum=0
                curSum+=nums[i]
                maxval = max(curSum,maxval)
            return maxval
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

<style>
	.container {
		padding: 1rem 10rem 1rem 10rem;
	}
</style>
