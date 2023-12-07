<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import Title from '../../components/Title.svelte';

	import '../../utils/blind75.css';

	const title = '167. Two Sum II - Input Array Is Sorted';
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
			<div><a href="#code">Code</a></div>
		</div>

		<section id="description">
			<Title type={5} title="Description" />

			<p>
				Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order,
				find two numbers such that they add up to a specific target number. Let these two numbers be
				numbers[index1] and numbers[index2] where 1 less than equal index1 less than index2 less
				than equal numbers.length.

				<a
					id="link"
					href="https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/"
					target="_blank">(Problem)</a
				>
			</p>
		</section>

		<section id="code">
			<Title type={5} title="Code (Python) -> 2 pointer" />

			<pre id="block"><code>
				{`
    class Solution:
        def twoSum(self, numbers: List[int], target: int) -> List[int]:
            l,r=0,len(numbers)-1
            while(l<r):
                s=numbers[l]+numbers[r]
                if(s==target):
                    return [l+1,r+1]
                elif(s>target):
                    r-=1
                elif(s<target):
                    l+=1
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
