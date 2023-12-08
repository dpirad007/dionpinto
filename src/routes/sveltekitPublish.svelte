<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';

	import Navbar from '../components/Navbar.svelte';
	import Footer from '../components/Footer.svelte';
	import Title from '../components/Title.svelte';
	import { base } from '$app/paths';

	import '../utils/blog.css';
</script>

<head>
	<meta name="author" content="Dion Pinto" />
	<meta name="description" content="Publish SvelteKit Apps on gh-pages" />
	<title>Publish SvelteKit Apps on gh-pages</title>
</head>

<SvelteToast />
<main class="main">
	<header><Navbar curPage="Blog" /></header>

	<main class="container">
		<div id="title">
			<Title type={2} title="SvelteKit on gh-pages" />
			<h4>Publish SvelteKit Apps on gh-pages</h4>
			<h5 style="font-style: italic;">12th May 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#introduction">Introduction</a></div>
			<div><a href="#initialization">Initialization</a></div>
			<div><a href="#gh-pages">Configure Github Pages</a></div>
			<div><a href="#config-sk">Configure SvelteKit</a></div>
			<div><a href="#nojekyll">Add .nojekyll file in static</a></div>
			<div><a href="#deploy">Deploy</a></div>
		</div>

		<section id="introduction">
			<Title type={5} title="Introduction" />

			<p>
				I chose SvelteKit to build my portfolio website because I wanted to learn svelte or atleast
				get a feel for the framework. While utilising SvelteKit I came across some hurdles and
				challenges one of them being publishing the finished site, there are a plethora of resources
				available to publish a SvelteKit app to gh-pages however the approach via the svelteLand
				sveltekit blog site
				<a
					id="link"
					href="https://svelteland.github.io/svelte-kit-blog-demo/deply-to-github"
					target="_blank">(Svelteland Link)</a
				> did not work for me (NOTE: I am a moron who makes a lot of mistakes!!!)
			</p>

			<p>
				You can find the git repository here <a
					id="link"
					href="https://github.com/dpirad007/dionpinto"
					target="_blank">(Repository Link)</a
				>
			</p>
		</section>

		<section id="initialization">
			<Title type={5} title="Initialization" />

			<p>
				I am assuming that you already have created a SvelteKit application and a git repo for that
				application. If not, create them now.
			</p>
		</section>

		<section id="gh-pages">
			<Title type={5} title="Configure Github Pages" />

			<p>
				The approach on the svelteLand blog was to host the site on a separate gh-pages branch on
				the /root folder, this would be my suggested approach as well as having a separate branch
				for the deployed jargon code is better, the main branch remains relatively clutter free.
				However, due to an unrelated error, I mistakenly thought this approach was wrong and I
				hosted the site in the /docs folder on the main branch (NOTE: Both of these approaches would
				work just fine.)
			</p>

			<p>You can configure it as follows: Go to the repository settings -> pages</p>

			<img id="image" src="sveltekitPublish/1sp.png" alt="github pages" />
		</section>

		<section id="config-sk">
			<Title type={5} title="Configure SvelteKit" />

			<p>
				First we need to install the SvelteKit Static Adapter. It will output our app as a static
				set of files instead of a dynamic app.
			</p>
			<pre id="block"><code>
				{`
  npm i @sveltejs/adapter-static
				`}			
			</code></pre>

			<p>
				Now you need to edit <i><u>svelte.config.js</u></i> as follows
			</p>
			<pre id="block"><code>
				{`
  import adapter from '@sveltejs/adapter-static'; // was adapter-auto

  const dev = process.env.NODE_ENV === 'development'; // the first half is process->env->NODE_ENV
                                               // it is resolving to 'development'
                                               // (NOTE: use . instead of -> while typing in file for process env NODE_ENV)

  /** @type {import('@sveltejs/kit').Config} */
  const config = {
	  kit: {
		  adapter: adapter({
			  pages: 'docs',
			  assets: 'docs'
		  }),
		  paths: {
			  base: dev ? '' : '/dionpinto' //Your repo name here
		  },
		  prerender: {
			  default: true
		  }
	  }
  };

  export default config;
				`}			
			</code></pre>

			<p>
				we target the /docs folder. (NOTE: this is beacuse of the approach I took hosting the site
				on main /docs on gh-pages)
			</p>
		</section>

		<section id="nojekyll">
			<Title type={5} title="Add .nojekyll file in static" />

			<p>Add a empty .nojekyll in the static folder.</p>

			<img id="image" src="sveltekitPublish/2sp.png" alt=".nojekyll" />
		</section>

		<section id="deploy">
			<Title type={5} title="Deploy" />

			<p>We can finally deploy out application.</p>
			<pre id="block"><code>
				{`
  npm run build
				`}			
			</code></pre>

			<p>Commit and push your changes</p>

			<pre id="block"><code>
				{`
  git add docs

  git commit -m "Changes commited"

  git push
				`}			
			</code></pre>

			<p>gh-pages will then deploy your site</p>
			<img id="image" src="sveltekitPublish/3sp.png" alt="github actions" />
		</section>
		<a id="back-btn" type="button" class="nes-btn is-primary" href={`${base}/blog`}>Back</a>
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
