<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import Title from '../../components/Title.svelte';

	import '../../utils/blind75.css';

	const title = '104. Maximum Depth of Binary Tree';
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
			<h5 style="font-style: italic;">9th Sept 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#description">Description</a></div>
			<div><a href="#code">Code</a></div>
		</div>

		<section id="description">
			<Title type={5} title="Description" />

			<p>
				Given the root of a binary tree, return its maximum depth.
                A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

				<a id="link" href="https://leetcode.com/problems/maximum-depth-of-binary-tree/" target="_blank"
					>(Problem)</a
				>
			</p>
		</section>

		<section id="code">
			<Title type={5} title="Code" />

			<p>
				We can find the max subarray by 2 common methods DFS, BFS.
                Following is the DFS (recursive) approach.
			</p>
			<pre id="block"><code>
				{`
    # Definition for a binary tree node.
    # class TreeNode:
    #     def __init__(self, val=0, left=None, right=None):
    #         self.val = val
    #         self.left = left
    #         self.right = right
    class Solution:
        def maxDepth(self, root: Optional[TreeNode]) -> int:
                if not root:
                    return 0
                
                return(1 + max(self.maxDepth(root.left),self.maxDepth(root.right)))
				`}			
			</code></pre>

			<p>BFS (queue) approach.</p>
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
        def maxDepth(self, root: Optional[TreeNode]) -> int:
            if not root:
                return 0
            level=0
            q = deque([root])
            
            while q:
                
                for i in range(len(q)):
                    node = q.popleft()
                
                    if node:
                        if node.left:
                            q.append(node.left)
                        if node.right:
                            q.append(node.right)
                        
                level+=1
            return level
				`}			
			</code></pre>
			
            <p>Time Complexity => o(n)</p>
			<p>Space Complexity => o(n) (height of tree, since tree is not balanced its o(n))</p>
		</section>


		<a type="button" class="nes-btn is-primary" href={`${base}/blind75`}>Back</a>
	</main>

	<footer>
		<Footer />
	</footer>
</main>
