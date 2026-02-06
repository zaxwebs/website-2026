<script>
	import LogoBase from '$lib/components/ui/LogoBase.svelte';
	import Marquee from '$lib/components/ui/marquee/marquee.svelte';
	import { onMount } from 'svelte';
	import { runPageAnimations } from './animation.js';

	onMount(() => {
		runPageAnimations();
	});
</script>

<svelte:head>
	<title>About - Zack Webster</title>
</svelte:head>

<section
	id="hero"
	class="relative flex min-h-[calc(100svh-56px)] flex-col justify-between overflow-hidden"
>
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 pt-[5vh] text-center md:gap-5 lg:pt-20"
	>
		<h1 class="text-3xl leading-[1.1] tracking-tight md:text-4xl lg:text-6xl">
			Freelance Designer & Developer
		</h1>
		<p class="mt-0 max-w-md lg:mt-2">
			End-to-end digital solutions, built with experience and precision.
		</p>
	</div>
	<img
		class="aspec-square mx-auto max-h-[620px] grayscale"
		src="/images/zack-jacket-torso.avif"
		alt="Zack Webster"
	/>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-[1/1] w-[90%] max-w-[1000px] -translate-x-1/2
         translate-y-1/2 rounded-[50%] bg-linear-to-r
         from-[#FE5F28]
         to-[#BE08D0] blur-[100px]
         md:aspect-[4/2]"
	></div>
	<Marquee duration={40} gap={80} class="absolute bottom-10 -z-10 w-full">
		<div class="marquee-item">Designer.</div>
		<div class="marquee-item">Developer.</div>
		<div class="marquee-item">Marketer.</div>
		<div class="marquee-item">Builder.</div>
		<div class="marquee-item">Creator.</div>
		<div class="marquee-item">Maker.</div>
		<div class="marquee-item">Strategist.</div>
		<div class="marquee-item">Technologist.</div>
	</Marquee>
</section>
<section id="intro">
	<div class="mx-auto max-w-[1400px] p-4 py-28">
		<p class="animate-word-reveal text-xl leading-snug tracking-tight md:text-3xl">
			I bring over eight years of experience delivering digital solutions for clients worldwide.
			I've worked with startups, established businesses, and multinational organizations across
			diverse industries. With experience spanning multiple roles, I approach projects with a
			comprehensive, end-to-end perspective. My work is defined by strong attention to detail and a
			disciplined approach to execution.
		</p>
	</div>
</section>

<section id="awards">
	<div class="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 p-4 py-28 xl:flex-row">
		<h2 class="text-2xl leading-[1.1] tracking-tight lg:text-4xl">Recent Awards</h2>
		<div class="w-full max-w-2xl space-y-8">
			<div class="flex gap-4">
				<div class="flex-1 rounded-md bg-background p-4 py-6">
					<img class="mb-10 w-24" src="/images/cssda.svg" alt="CSS Design Awards" />
					<div class="flex gap-2">
						<LogoBase class="award-symbol w-4 text-orange-500" /> Best UI Design
					</div>
				</div>
				<div class="flex-1 rounded-md bg-background p-4 py-6">
					<img class="mb-10 w-24" src="/images/cssda.svg" alt="CSS Design Awards" />
					<div class="flex gap-2">
						<LogoBase class="award-symbol w-4 text-purple-500" /> Best User Experience
					</div>
				</div>
			</div>
			<p class="text-sm opacity-50">
				Rated highly by Zack Bujazia, Michi Del Rosso, Andrew Gargay, Mattia Rinaudo, Polina
				Molchanova
			</p>
		</div>
	</div>
</section>
<section id="tools">
	<div class="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 p-4 py-28 xl:flex-row">
		<h2 class="text-2xl leading-[1.1] tracking-tight lg:text-4xl">Tools & Tech Stack</h2>
		<div class="w-full max-w-2xl space-y-10">
			<!-- Design Tools -->
			<div class="tool-container">
				<h3 class="mb-4 text-sm font-medium tracking-wider uppercase opacity-50">Design</h3>
				<div class="tool-list flex flex-wrap gap-3">
					<span class="rounded-full bg-background px-4 py-2 text-sm">Figma</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Jitter</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Elementor</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Photoshop</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Illustrator</span>
				</div>
			</div>
			<!-- Development Tools -->
			<div class="tool-container">
				<h3 class="mb-4 text-sm font-medium tracking-wider uppercase opacity-50">Development</h3>
				<div class="tool-list flex flex-wrap gap-3">
					<span class="rounded-full bg-background px-4 py-2 text-sm">SvelteKit</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Tailwind</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Node.js</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Express.js</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">WordPress</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Laravel</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Python</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">MySQL</span>
				</div>
			</div>
			<!-- Marketing Tools -->
			<div class="tool-container">
				<h3 class="mb-4 text-sm font-medium tracking-wider uppercase opacity-50">Marketing</h3>
				<div class="tool-list flex flex-wrap gap-3">
					<span class="rounded-full bg-background px-4 py-2 text-sm">Google Analytics</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Google Ads</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Buffer</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">SEMRush</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Yoast</span>
					<span class="rounded-full bg-background px-4 py-2 text-sm">Microsoft Clarity</span>
				</div>
			</div>
		</div>
	</div>
</section>
