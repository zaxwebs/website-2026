<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<section class="relative flex min-h-screen flex-col justify-between overflow-hidden">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-center gap-4 px-4 pt-20 text-center md:gap-5 lg:pt-30"
	>
		<h1 class="text-3xl md:text-4xl lg:text-6xl">
			Helping Businesses Excel with Design, Development & Marketing
		</h1>
		<p class="mt-0 max-w-md lg:mt-4">
			I partner with founders and teams to create digital products that are thoughtful, scalable,
			and built to drive real results.
		</p>
		<div class="flex gap-2">
			<Button variant="outline">Get in Touch</Button>
			<Button variant="outline">About</Button>
		</div>
	</div>
	<img
		class="mx-auto mt-4 w-[90%] max-w-[450px] md:w-[50%] md:max-w-[520px] lg:mt-1 lg:w-[30%]"
		src="/images/portrait.avif"
		alt="Portrait of Zack Webster"
	/>
	<div
		style="border-radius: 50%"
		class="absolute bottom-0 left-1/2 -z-10 block aspect-2/1 w-[100%] max-w-[1000px] -translate-x-1/2 translate-y-1/2 rounded-full bg-linear-to-r from-[#0F43D8] via-[#1AC6E5] to-[#179495] blur-[100px]"
	></div>
</section>
