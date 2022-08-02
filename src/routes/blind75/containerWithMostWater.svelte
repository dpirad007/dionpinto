<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import Title from '../../components/Title.svelte';

	import '../../utils/blind75.css';
</script>

<head>
	<meta name="author" content="Dion Pinto" />
	<meta name="description" content="Leetcode Blind 75 11. Container with most water" />
	<title>11. Container with most water</title>
</head>

<SvelteToast />
<main class="main">
	<header><Navbar curPage="Blog" /></header>

	<main class="container">
		<div id="title">
			<Title type={2} title="11.Container with most water" />
			<h4>Leetcode Blind 75</h4>
			<h5 style="font-style: italic;">17th June 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#description">Description</a></div>
			<div><a href="#code">Code</a></div>
		</div>

		<section id="description">
			<Title type={5} title="Description" />

			<p>
				You are given an integer array height of length n. There are n vertical lines drawn such
				that the two endpoints of the ith line are (i, 0) and (i, height[i]). Find two lines that
				together with the x-axis form a container, such that the container contains the most water.
				Return the maximum amount of water a container can store. Notice that you may not slant the
				container.

				<a id="link" href="https://leetcode.com/problems/container-with-most-water/" target="_blank"
					>(Problem)</a
				>
			</p>
		</section>

		<section id="code">
			<Title type={5} title="Code (Python)" />

			<pre id="block"><code>
				{`
    import math
    class Solution:
        def maxArea(self, height: List[int]) -> int:
            m=-math.inf
            l,r = 0,len(height)-1
        
            while(l<r):

                area = (r-l)*min(height[l],height[r])
                m=max(m,area)

                if(height[l] < height[r]):
                    l+=1
                elif(height[l] > height[r]):
                    r-=1
                else:
                    r-=1
            return m
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
