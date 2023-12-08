<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import Title from '../../components/Title.svelte';

	import '../../utils/blind75.css';

	const title = '102. Binary Tree Level Order Traversal';
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
			<h5 style="font-style: italic;">12th Sept 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#description">Description</a></div>
			<div><a href="#code">Code</a></div>
		</div>

		<section id="description">
			<Title type={5} title="Description" />

			<p>
				Given the root of a binary tree, return the level order traversal of its nodes' values.
				(i.e., from left to right, level by level).

				<a
					id="link"
					href="https://leetcode.com/problems/binary-tree-level-order-traversal/"
					target="_blank">(Problem)</a
				>
			</p>
		</section>

		<section id="code">
			<Title type={5} title="Code" />

			<pre id="block"><code>
				{`

    from collections import deque
    # Definition for a binary tree node.
    # class TreeNode:
    #     def __init__(self, val=0, left=None, right=None):
    #         self.val = val
    #         self.left = left
    #         self.right = right
    class Solution:
        def levelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
            if not root:
                return []
            
            q = deque([root])
            sol=[[root.val]]
            
            while q:
                a=[]
                for i in range(len(q)):
                    
                    node = q.popleft()
                    
                    if node.left:
                        q.append(node.left)
                        a.append(node.left.val)
                    if node.right:
                        q.append(node.right)
                        a.append(node.right.val)
                if len(a)!=0:        
                    sol.append(a)
            return sol
				`}			
			</code></pre>

			<p>Time Complexity => o(n)</p>
			<p>Space Complexity => o(n) (height of tree)</p>
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

	@media only screen and (max-width: 740px) {
		.container {
			padding: 0rem;
		}
	}
</style>
