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
			<div
				class="group relative isolate flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-background"
			>
				<div class="p-4">
					<div class="mb-3 flex items-center gap-2">
						<LogoBase class="w-4 text-orange-500 group-hover:animate-spin" />
						<h3 class=" text-xl">Design</h3>
					</div>
					<p>Interfaces that feel effortless, engage users, and increase conversions.</p>
				</div>
				<img
					class="mx-auto mt-2 -mb-4 w-[80%] max-w-[300px] grayscale"
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
			<div
				class="group relative isolate flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-background"
			>
				<div class="p-4">
					<div class="mb-3 flex items-center gap-2">
						<LogoBase class="w-4 text-pink-500 group-hover:animate-spin" />
						<h3 class=" text-xl">Development</h3>
					</div>
					<p>
						Products that run fast, stay reliable, and scale effortlessly as your business grows.
					</p>
				</div>
				<img
					class="mx-auto mt-2 -mb-4 w-[80%] max-w-[300px] grayscale"
					src="images/typing.avif"
					alt="Artistic representation of Zack coding"
				/>
			</div>
			<div
				class="group relative isolate flex flex-1 flex-col justify-between overflow-hidden rounded-md bg-background"
			>
				<div class="p-4">
					<div class="mb-3 flex items-center gap-2">
						<LogoBase class="w-4 text-purple-500 group-hover:animate-spin" />
						<h3 class=" text-xl">Growth</h3>
					</div>
					<p>
						Attract the right audience, boost engagement, and turn traffic into steady leads and
						revenue.
					</p>
				</div>

				<img
					class="mx-auto mt-2 -mb-4 w-[80%] max-w-[300px] grayscale"
					src="images/reading.avif"
					alt="Artistic representation of Zack reading"
				/>
			</div>
		</div>
	</div>
</section>
<section id="work">
	<div class="mx-auto max-w-[1400px] p-4 py-28">
		<div class="mb-24 flex flex-col justify-between gap-4 xl:flex-row">
			<h2 class="text-2xl leading-[1.1] lg:text-4xl">Featured Work</h2>
			<p class="max-w-lg">
				A curated selection of digital work across design and development & more.
			</p>
		</div>
		<div class="grid grid-cols-12 gap-4">
			<div class="col-span-12 md:col-span-4">
				<div class="mb-4 aspect-4/3 bg-background"></div>
				<h3 class="mb-1 text-xl">Project Name</h3>
				<p class="opacity-50">UI UX Design</p>
			</div>
			<div class="col-span-12 md:col-span-8">
				<div class="mb-4 aspect-4/3 bg-background"></div>
				<h3 class="mb-1 text-xl">Project Name</h3>
				<p class="opacity-50">UI UX Design</p>
			</div>

			<div class="col-span-12 md:col-span-8">
				<div class="mb-4 aspect-4/3 bg-background"></div>
				<h3 class="mb-1 text-xl">Project Name</h3>
				<p class="opacity-50">UI UX Design</p>
			</div>
			<div class="col-span-12 md:col-span-4">
				<div class="mb-4 aspect-4/3 bg-background"></div>
				<h3 class="mb-1 text-xl">Project Name</h3>
				<p class="opacity-50">UI UX Design</p>
			</div>

			<div class="col-span-12 md:col-span-4">
				<div class="mb-4 aspect-4/3 bg-background"></div>
				<h3 class="mb-1 text-xl">Project Name</h3>
				<p class="opacity-50">UI UX Design</p>
			</div>
			<div class="col-span-12 md:col-span-8">
				<div class="mb-4 aspect-4/3 bg-background"></div>
				<h3 class="mb-1 text-xl">Project Name</h3>
				<p class="opacity-50">UI UX Design</p>
			</div>
		</div>
	</div>
</section>
<section id="testimonials">
	<div class="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 p-4 py-28 xl:flex-row">
		<h2 class="text-2xl leading-[1.1] lg:text-4xl">Featured Testimonials</h2>
		<div class="flex max-w-2xl flex-col gap-4">
			<div class="rounded-md bg-background p-4">
				<div class="flex items-end gap-4">
					<img class="w-20 rounded" src="/images/kelly-smith.avif" alt="Kelly Smith" />
					<div>
						<h3 class="mb-1">Kelly Smith</h3>
						<p class="opacity-50">CEO of AG — Digital Initiatives at Starbucks</p>
					</div>
				</div>
				<p class="mt-4">
					Zack is a dedicated professional who consistently pushes to deliver strong results. He
					brings genuine enthusiasm to his work and is highly recommended.
				</p>
			</div>
			<div class="rounded-md bg-background p-4">
				<div class="flex items-end gap-4">
					<img class="w-20 rounded" src="/images/brian-canavan.avif" alt="Brian Canavan" />
					<div>
						<h3 class="mb-1">Brian Canavan</h3>
						<p class="opacity-50">Media & Content — 25 Million Views</p>
					</div>
				</div>
				<p class="mt-4">
					Zack quickly understood our goals and vision and translated them into a moodboard that set
					the tone right away. The process was organized, smooth, and executed with care. My
					community has responded incredibly positively to the final site, and I am thrilled with
					how it turned out. I would happily recommend Webster to anyone needing a new website.
				</p>
			</div>
		</div>
	</div>
</section>
<section id="contact">
	<div
		class="mx-auto flex max-w-[1400px] flex-col justify-between gap-4 p-4 py-28 lg:gap-24 xl:flex-row"
	>
		<div class="flex flex-col justify-between gap-4">
			<div class="space-y-4">
				<h2 class="text-2xl leading-[1.1] lg:text-4xl">Get in Touch</h2>
				<div>hi@zackwebster.com</div>
			</div>
			<div class="space-y-4">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis purus purus, et
					malesuada nunc vestibulum eget.
				</p>
				<div class="h-px bg-white opacity-10"></div>
				<div class="flex flex-col gap-4 lg:flex-row">
					<div class="flex-1">
						<div class="mb-1">Start the Conversation</div>
						<p class="text-md opacity-50">
							Your message is the first step. I’ll get back quickly to explore possibilities and
							next steps.
						</p>
					</div>
					<div class="flex-1">
						<div class="mb-1">Build Something Great</div>
						<p class="text-md opacity-50">
							Together, we'll shape ideas, solve problems, and make great things happen.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full max-w-2xl bg-white p-8 text-black">
			<h3>Have a Project in Mind?</h3>
			<div>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut eros malesuada,
				placerat ipsum a, vestibulum magna. Etiam ligula dui, placerat mattis sem sed, auctor
				ullamcorper mauris. Quisque vel semper risus. Curabitur maximus sapien sit amet volutpat
				lobortis. Vestibulum convallis mauris nec nibh aliquam, vitae volutpat sem lobortis. Nunc ac
				sapien facilisis, egestas urna vel, dignissim nisi. Donec blandit lorem non est porta, sed
				mattis augue vehicula. Etiam volutpat, arcu in rutrum luctus, purus ante pharetra leo, et
				euismod enim velit elementum ligula. Nulla a felis ut justo cursus efficitur at sit amet
				leo. Aliquam aliquet purus id tempor vehicula. Cras dictum commodo nulla, a dictum ex mollis
				et. Pellentesque commodo laoreet porta. Quisque luctus, nunc sit amet mattis molestie, purus
				orci finibus ipsum, at pretium enim ex at lorem. Nullam sit amet condimentum arcu. Sed sit
				amet ante velit. Duis et blandit ex. Donec aliquet pellentesque velit in luctus. Donec
				pellentesque non erat eu cursus. Donec at tempor leo. Etiam volutpat non dolor in semper.
				Nulla et tortor nunc. Nunc et rhoncus orci, nec porta urna. Morbi leo arcu, sodales sed
				turpis quis, accumsan bibendum tellus. Nulla eget tellus vestibulum, consectetur magna id,
				imperdiet nisl. Etiam pellentesque efficitur mi id mollis. Vestibulum ante ipsum primis in
				faucibus orci luctus et ultrices posuere cubilia curae; Nunc varius, dolor nec commodo
				volutpat, urna augue efficitur sapien, sed fermentum metus eros et sem. Praesent ac quam a
				dolor ullamcorper convallis ac vitae nisi. Donec sodales purus ac leo luctus euismod. Nam
				lacinia aliquam ligula. Maecenas pellentesque dolor a vestibulum pulvinar. In non lectus sed
				lectus pharetra ultrices fermentum vulputate nunc.
			</div>
		</div>
	</div>
</section>
