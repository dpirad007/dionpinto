<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import Title from '../../components/Title.svelte';

	import '../../utils/blind75.css';

	const title = '15. 3Sum';
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
			<div><a href="#explanation">Explanation</a></div>
			<div><a href="#code">Code</a></div>
		</div>

		<section id="description">
			<Title type={5} title="Description" />

			<p>
				Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i
				!= j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0. Notice that the solution set
				must not contain duplicate triplets.

				<a id="link" href="https://leetcode.com/problems/3sum/" target="_blank">(Problem)</a>
			</p>
		</section>

		<section id="explanation">
			<Title type={5} title="Explanation" />

			<p>
				I believe that 3Sum becomes rather messy because of the handling of duplicates. We can see
				this with the following brute force approach (without handling of duplicates).
			</p>
			<pre id="block"><code>
				{`
    class Solution:
        def threeSum(self, nums: List[int]) -> List[List[int]]:
            sol=[]
            for i in range(len(nums)-2):
                for j in range(i+1,len(nums)-1):
                    if(i!=j):
                        for k in range(j+1,len(nums)):
                            if(j!=k):
                                if(nums[i]+nums[j]+nums[k]==0):
                                    sol.append([nums[i],nums[j],nums[k]])
            return sol

    INPUT: [-1,0,1,2,-1,-4]

    OUTPUT: [[-1,0,1],[-1,2,-1],[0,1,-1]]
				`}			
			</code></pre>

			<p>
				In the above output we can notice [-1,0,1] is repeated twice with the order being different.
				We can solve the order issue by sorting the input array.
			</p>
			<pre id="block"><code>
				{`
        ...
        def threeSum(self, nums: List[int]) -> List[List[int]]:
            sol=[]
            nums.sort()
            for i in range(len(nums)-2):
        ...

        OUTPUT: [[-1,-1,2],[-1,0,1],[-1,0,1]]
				`}			
			</code></pre>

			<p>
				Cool now we atleast get the duplicates in order.Now we can focus on eliminating the
				duplicates. We can notice that if we just skip the repeating values after sorting we can
				eliminate the duplicates.
			</p>
			<!-- <img id="image" src="/blind75/1ts.png" alt="duplicate value drawing" /> -->
			<p>We can use the following code to do so.</p>

			<pre id="block"><code>
				{`
        ...
        nums.sort()
        sol=[]
        for i in range(len(nums)-2):
            if(i>0 and nums[i]==nums[i-1]):
                continue
            for j in range(i+1,len(nums)-1):
        ...

        OUTPUT: [[-1,-1,2],[-1,0,1]]
				`}			
			</code></pre>

			<p>
				Now finally, we can move onto a more optimized soluton. As we have seen in <a
					id="link"
					href={`${base}/blind75/twoSum2`}
				>
					(two Sum 2).</a
				>
				Utilizing a 2 pointer approach to find the j -> nums[l] and k -> nums[r] values. ending with
				a another check to ensure no duplicates occur.
			</p>

			<pre id="block"><code>
				{`
        ...
         else:
            sol.append([nums[i],nums[l],nums[r]])
                l+=1
            while((l<r) and nums[l]==nums[l-1]):
                l+=1
        ...
				`}			
			</code></pre>
		</section>

		<section id="code">
			<Title type={5} title="Code (Python)" />

			<pre id="block"><code>
				{`
    class Solution:
        def threeSum(self, nums: List[int]) -> List[List[int]]:
            sol=[]
            nums.sort()
            for i in range(len(nums)):
                if(i>0 and nums[i]==nums[i-1]):
                    continue
                
                l,r=i+1,len(nums)-1
                while(l<r):
                    
                    threesum=nums[i]+nums[l]+nums[r]
                    if(threesum>0):
                        r-=1
                    elif(threesum<0):
                        l+=1
                    else:
                        sol.append([nums[i],nums[l],nums[r]])
                        l+=1
                        while((l<r) and nums[l]==nums[l-1]):
                                l+=1
            return sol
				`}			
			</code></pre>
			<p>Time Complexity => o(n<sup>2</sup>)</p>
			<p>Space Complexity => o(1)</p>
		</section>
		<a type="button" class="nes-btn is-primary" href={`${base}/blind75`}>Back</a>
	</main>

	<footer>
		<Footer />
	</footer>
</main>
