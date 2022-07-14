<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import Title from '../../components/Title.svelte';

	const title = '153. Find Minimum in Rotated Sorted Array';
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
			<h5 style="font-style: italic;">14th July 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#description">Description</a></div>
			<div><a href="#code">Code</a></div>
		</div>

		<section id="description">
			<Title type={5} title="Description" />

			<p>
				Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For
				example, the array nums = [0,1,2,4,5,6,7] might become: [4,5,6,7,0,1,2] if it was rotated 4
				times. [0,1,2,4,5,6,7] if it was rotated 7 times. Notice that rotating an array [a[0], a[1],
				a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].
				Given the sorted rotated array nums of unique elements, return the minimum element of this
				array. You must write an algorithm that runs in O(log n) time.

				<a
					id="link"
					href="https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/"
					target="_blank">(Problem)</a
				>
			</p>
		</section>

		<section id="code">
			<Title type={5} title="Code (Python)" />

			<pre id="block"><code>
				{`
    class Solution:
        def findMin(self, nums: List[int]) -> int:
            res=nums[0]
            l,r=0,len(nums)-1
            
            while(l<=r):
                if(nums[l]<=nums[r]): 
                    res= min(res,nums[l])
                
                mid= (l+r)//2
                res=min(nums[mid],res)
                
                if(nums[mid]>=nums[l]):
                    l=mid+1
                else:
                    r=mid-1
            
            return res
				`}			
			</code></pre>
			<p>Time Complexity => o(log n)</p>
			<p>Space Complexity => o(1)</p>
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
