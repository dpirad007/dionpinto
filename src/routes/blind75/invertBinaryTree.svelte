<script>
	import { base } from '$app/paths';
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../../components/Navbar.svelte';
	import Footer from '../../components/Footer.svelte';
	import Title from '../../components/Title.svelte';

	import '../../utils/blind75.css';

	const title = '226. Invert Binary Tree';
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
				Given the root of a binary tree, invert the tree, and return its root.

				<a id="link" href="https://leetcode.com/problems/invert-binary-tree/" target="_blank"
					>(Problem)</a
				>
			</p>
		</section>

		<section id="code">
			<Title type={5} title="Code" />


			<pre id="block"><code>
				{`
    # Definition for a binary tree node.
    # class TreeNode:
    #     def __init__(self, val=0, left=None, right=None):
    #         self.val = val
    #         self.left = left
    #         self.right = right
    class Solution:
        def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
            
            if not root:
                return 
            
            temp = root.left
            root.left=root.right
            root.right=temp
            
            self.invertTree(root.left)
            self.invertTree(root.right)

            return root
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
