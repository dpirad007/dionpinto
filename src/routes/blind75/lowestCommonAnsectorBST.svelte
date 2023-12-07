<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import Title from '../../components/Title.svelte';

	import '../../utils/blind75.css';

	const title = '235. Lowest Common Ancestor of a Binary Search Tree';
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
			<h5 style="font-style: italic;">29th Sept 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#description">Description</a></div>
			<div><a href="#code">Code</a></div>
		</div>

		<section id="description">
			<Title type={5} title="Description" />

			<p>
				Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given
				nodes in the BST. According to the definition of LCA on Wikipedia: “The lowest common
				ancestor is defined between two nodes p and q as the lowest node in T that has both p and q
				as descendants (where we allow a node to be a descendant of itself).”

				<a
					id="link"
					href="https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/"
					target="_blank">(Problem)</a
				>
			</p>
		</section>

		<section id="code">
			<Title type={5} title="Code" />

			<pre id="block"><code>
				{`
    # Definition for a binary tree node.
    # class TreeNode:
    #     def __init__(self, x):
    #         self.val = x
    #         self.left = None
    #         self.right = None

    class Solution:
        def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':      
            curr = root  
            while curr:
            
                if p.val>curr.val and q.val>curr.val:
                    curr = curr.right
                elif p.val<curr.val and q.val<curr.val:
                    curr = curr.left
                else:
                    return curr
				`}			
			</code></pre>

			<p>Time Complexity => o(log(n))</p>
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
