<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import LogoBase from '$lib/components/ui/LogoBase.svelte';
	import { Marquee } from '$lib/components/ui/marquee/index.js';
</script>

<svelte:head>
	<title>Zack Webster</title>
</svelte:head>

<section id="hero" class="relative flex min-h-screen flex-col justify-between overflow-hidden">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 pt-32 text-center md:gap-5 lg:pt-30"
	>
		<h1 class="text-3xl leading-[1.1] md:text-4xl lg:text-6xl">
			Helping Businesses Excel with Design, Development & Marketing
		</h1>
		<p class="mt-0 max-w-md lg:mt-2">
			I partner with founders and teams to create digital products that are thoughtful, scalable,
			and built to drive real results.
		</p>
		<div class="flex gap-3">
			<Button variant="default">Get in Touch</Button>
			<Button variant="outline">About</Button>
		</div>
	</div>
	<img
		class="aspec-square mx-auto max-h-[500px]"
		src="/images/portrait.avif"
		alt="Portrait of Zack Webster"
	/>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-[1/1] w-[90%] max-w-[1000px] -translate-x-1/2
         translate-y-1/2 rounded-[50%] bg-linear-to-r
         from-[#0F43D8] via-[#1AC6E5] to-[#179495] blur-[100px]
         md:aspect-[4/2]"
	></div>
</section>
<section id="about">
	<div class="mx-auto max-w-[1400px] p-4 py-28">
		<div class="flex flex-col items-center justify-center gap-4 text-center">
			<h2 class="text-2xl leading-[1.1] md:text-3xl lg:text-5xl">A Holistic Product Partner</h2>
			<p class="mt-0 max-w-3xl lg:mt-2">
				I help teams and founders build digital products that are clear, cohesive, and built to
				perform. Whether I'm contributing in a single area or guiding the full product lifecycle, my
				work is always grounded in alignment and outcomes. I approach design, development, and
				growth as interconnected parts of the same system, so every decision supports the bigger
				picture.
			</p>
		</div>
		<div class="mt-16 flex flex-col gap-4 md:flex-row">
			<div class="relative isolate flex-1 overflow-hidden rounded-md bg-background p-4">
				<div class="mb-3 flex items-center gap-2">
					<LogoBase class="w-4 text-orange-500" />
					<h3 class=" text-xl">Design</h3>
				</div>
				<p>Interfaces that feel effortless, engage users, and increase conversions.</p>
				<img
					class="mx-auto mt-4 -mb-4 w-[80%]"
					src="images/writing.avif"
					alt="Artistic representation of Zack designing"
				/>
				<div
					aria-hidden="true"
					class="pointer-events-none absolute bottom-0 left-1/2 -z-10 aspect-[6/2] w-[110%]
         max-w-[1000px] -translate-x-1/2 translate-y-1/2
         rounded-[50%] bg-linear-to-r from-[#FE5F28]
         to-[#BE08D0] blur-[20px]"
				></div>
			</div>
			<div class="relative isolate flex-1 overflow-hidden rounded-md bg-background p-4">
				<div class="mb-3 flex items-center gap-2">
					<LogoBase class="w-4 text-pink-500" />
					<h3 class=" text-xl">Development</h3>
				</div>
				<p>Products that run fast, stay reliable, and scale effortlessly as your business grows.</p>
				<img
					class="mx-auto mt-4 -mb-4 w-[80%]"
					src="images/typing.avif"
					alt="Artistic representation of Zack coding"
				/>
			</div>
			<div class="relative isolate flex-1 overflow-hidden rounded-md bg-background p-4">
				<div class="mb-3 flex items-center gap-2">
					<LogoBase class="w-4 text-purple-500" />
					<h3 class=" text-xl">Growth</h3>
				</div>
				<p>
					Attract the right audience, boost engagement, and turn traffic into steady leads and
					revenue.
				</p>
				<img
					class="mx-auto mt-4 -mb-4 w-[80%]"
					src="images/reading.avif"
					alt="Artistic representation of Zack reading"
				/>
			</div>
		</div>
	</div>
</section>
