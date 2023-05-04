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
	<meta name="description" content="Formula 1 grand prix visualisation" />
	<title>Formula 1 grand prix visualisation</title>
</head>

<SvelteToast />
<main class="main">
	<header><Navbar curPage="Blog" /></header>

	<main class="container">
		<div id="title">
			<Title type={2} title="Formula 1 grand prix visualisation" />
			<h4>Formula 1 grand prix visualisation</h4>
			<h5 style="font-style: italic;">4th May 2023 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#introduction">Introduction</a></div>
			<div><a href="#demo">Demo</a></div>
		</div>

		<section id="introduction">
			<Title type={5} title="Introduction" />

			<p>
				The visualisation shown is a dynamic/interactive chart representing the current state of a
				formula 1 grand prix (A demonstration of the Monaco grand prix is shown).
			</p>
			<p>
				➔ The outer ring indicates the time gap from the current race leader (In this case Lewis
				Hamilton) with the color indicating the team.
			</p>
			<p>
				➔ The inner map is the circuit at which the current grand prix is conducted. Each driver is
				represented as a colored plot, with the color indicating the team they race for.
			</p>
			<p>
				➔ The key at the right side of the chart indicates the driver's race abbreviations and their
				current race position. The key at the bottom is the F1 race teams.
			</p>

			<p>
				➔ The topmost part of the chart indicates the current race leader and the white line
				represents the direction of flow for the time gap metric (clockwise) and the number in red
				indicates the current race lap.
			</p>
		</section>

		<section id="demo">
			<Title type={5} title="Demo" />

			<img id="image" src="formula1/formula1viz.png" alt="Formula 1 visualisation" />
		</section>

		<a id="back-btn" type="button" class="nes-btn is-primary" href={`${base}/blog`}>Back</a>
	</main>

	<footer>
		<Footer />
	</footer>
</main>
