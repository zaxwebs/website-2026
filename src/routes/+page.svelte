<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
</script>

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
		<div class="flex gap-2">
			<Button variant="outline">Get in Touch</Button>
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
		class="pointer-events-none absolute bottom-0 left-1/2 -z-10 block aspect-[5/2] w-full max-w-[1000px]
         -translate-x-1/2 translate-y-1/2 rounded-full
         bg-linear-to-r from-[#0F43D8] via-[#1AC6E5] to-[#179495]
         blur-[100px]"
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
		<div class="mt-14 flex gap-4">
			<div>
				<h3 class="mb-2 text-xl">Design</h3>
				<p>Interfaces that feel effortless, engage users, and increase conversions.</p>
			</div>
			<div>
				<h3 class="mb-2 text-xl">Development</h3>
				<p>Products that run fast, stay reliable, and scale effortlessly as your business grows.</p>
			</div>
			<div>
				<h3 class="mb-2 text-xl">Growth</h3>
				<p>
					Attract the right audience, boost engagement, and turn traffic into steady leads and
					revenue.
				</p>
			</div>
		</div>
	</div>
</section>
