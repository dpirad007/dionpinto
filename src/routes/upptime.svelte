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
	<meta name="description" content=" Maintain Upptime for your site" />
	<title>Maintain Upptime for your site</title>
</head>

<SvelteToast />
<main class="main">
	<header><Navbar curPage="Blog" /></header>

	<main class="container">
		<div id="title">
			<Title type={2} title="Upptime" />
			<h4>Maintain Upptime for your site</h4>
			<h5 style="font-style: italic;">14th June 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#introduction">Introduction</a></div>
			<div><a href="#initialization">Initialization</a></div>
			<div><a href="#config">Configuration</a></div>
		</div>

		<section id="introduction">
			<Title type={5} title="Introduction" />

			<p>
				After the creation of any web application the logical next step is to put the site into
				production. For the creation of my personal portfolio website I utilised SvelteKit and
				hosted it on github pages (gh-pages), however , it is essential to know if your site has
				ever gone down or crashed, you can utilise paid tools to check for the uptime of your
				production site or you can utilise a free and open source alternative called Upptime.

				<a id="link" href="https://upptime.js.org/docs/" target="_blank">(Upptime Docs)</a>
			</p>

			<p>
				Uptime utilises github actions as an uptime monitor, with github issues used as incident
				reports and github pages for the status page.
			</p>

			<p>
				You can find the my Upptime git repository here <a
					id="link"
					href="https://github.com/dpirad007/dionpinto-upptime"
					target="_blank">(Repository)</a
				>
			</p>

			<p>
				You can also find my Upptime status page here <a
					id="link"
					href="https://dpirad007.github.io/dionpinto-upptime/"
					target="_blank">(Status Page)</a
				>
			</p>
		</section>

		<section id="initialization">
			<Title type={5} title="Initialization" />

			<p>
				All you need to do is is follow the getting started page on the upptime documentation <a
					id="link"
					href="https://upptime.js.org/docs/get-started"
					target="_blank">(Getting Started)</a
				>
			</p>

			<p>
				If you follow the steps mentioned correctly, you should have set up an upptime monitor by
				now.
			</p>
		</section>

		<section id="config">
			<Title type={5} title="Configure Status Page" />

			<p>
				You can now configure how you want upptime to function. The documentation is pretty good
				which you can utilize for the core functionality.<a
					id="link"
					href="https://upptime.js.org/docs/configuration"
					target="_blank">(Configure)</a
				>
			</p>

			<p>
				One glaring issue however was the status does not have a dark theme by default. I did try
				the method suggested by this commit<a
					id="link"
					href="https://github.com/upptime/upptime/discussions/70#discussioncomment-302622"
					target="_blank">(Theming)</a
				>. However, this did not give me satisfactory results.
			</p>

			<p>I utilized custom css for a true dark theme in the <i>.upptimerc.yml</i> file.</p>

			<pre id="block"><code>
				{`
  css: "
    :root { --body-background-color: #1b1a1a; --body-text-color: #dce2ec;
    --card-background-color: #2a2c2d;
    --nav-background-color: #1f1f1f;
    --nav-border-bottom-color: #2d2c2c;
    --nav-current-border-bottom-color: #d61212;
    --card-border-color: #2a2c2d;
    --down-border-left-color: #ff7676;
    --down-background-color: #6b1020;
    --degraded-border-left-color: #ffc36d;
    --up-border-left-color: #53e69d;
    --tag-color: #002b29;
    --tag-up-background-color: #53e69d;
    --tag-down-background-color: #ff7676;
    --tag-degraded-background-color: #ffc36d;
    --change-background-color: #ffc36d;
    --error-button-border-color: #1a46ad;
    --error-button-background-color: #3867d6;
    --error-button-color: #dce2ec;
    --submit-button-border-color: #1a46ad;
    --submit-button-background-color: #3867d6;
    --submit-button-color: #dce2ec;
    --graph-opacity: 1;
    --graph-filter: hue-rotate(34deg) saturate(164%) brightness(89%);
    }
    article.down {
    border-left: 0.4rem solid;
    }
    article.degraded {
    border-left: 0.4rem solid;
    }
    article.up {
    border-left: 0.4rem solid;
    }
    .chartjs-render-monitor {
    filter: hue-rotate(34deg) saturate(164%) brightness(89%);
    }
    "
				`}			
			</code></pre>
			<p>The results can be seen here.</p>
			<img id="image" src="upptime/1upp.png" alt="upptime status page" />
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
