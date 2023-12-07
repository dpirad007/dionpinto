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
	<meta name="description" content="Chip 8 Emulator with rust" />
	<title>Chip 8 Emulator with rust</title>
</head>

<SvelteToast />
<main class="main">
	<header><Navbar curPage="Blog" /></header>

	<main class="container">
		<div id="title">
			<Title type={2} title="Chip 8" />
			<h4>Chip 8 Emulator with rust</h4>
			<h5 style="font-style: italic;">2th Aug 2022 ~ Dion Pinto</h5>
		</div>
		<div id="index" class="nes-container is-rounded is-dark">
			<div><a href="#introduction">Introduction</a></div>
			<div><a href="#demo">Demo</a></div>
		</div>

		<section id="introduction">
			<Title type={5} title="Introduction" />

			<p>
				While wandering through the depths of stackoverflow I often found people suggesting the best
				way to get good at a particular programming language is to implement a chip 8 emulator with
				that language. So I began the process of researching what a chip 8 emulator was and fell
				into a rabbit hole of emulators, I decided to jump into the ocean of emulator design and
				quickly realized I was going to sink.
			</p>
			<p>
				Opcodes, timers .....WHATT!!!, I didnt think I would ever need to hear the word opcode after
				my horrible time with 8085 in college, where I basically left off more confused than before
				taking the course.But the only reason that was the case was because we were only thought
				about the microprocessor in a theoretical nature, and the labs were basically an exercise in
				rote learning opcodes in an order to solve the question.
			</p>

			<p>
				Im currently on a quest to gain a deeper understanding of computers and thought a good place
				to start would be to build an emulator and gain an insight into how that process works.
				Ofcourse me being a beginner I decided to follow this excellent book by <a
					id="link"
					href="https://github.com/aquova/chip8-book/releases"
					target="_blank">(aquova)</a
				>
			</p>

			<p>
				You can find my git repository here <a
					id="link"
					href="https://github.com/dpirad007/Chip-8"
					target="_blank">(Repository Link)</a
				>
				Its pretty similar to the one by aquova, with the addition of comments to understand certain
				shift and bit manipulation operations.
			</p>
		</section>

		<section id="demo">
			<Title type={5} title="Demo" />

			<p>
				Here are some games on the emulator. I downloaded the roms <a
					id="link"
					href="https://www.zophar.net/pdroms/chip8/chip-8-games-pack.html"
					target="_blank">(from here)</a
				>
			</p>

			<img id="image" src="chip8/pong.png" alt="upptime status page" />
			<img id="image" src="chip8/tetris.png" alt="upptime status page" />
			<img id="image" src="chip8/space.png" alt="upptime status page" />
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
</style>
