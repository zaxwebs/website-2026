<script>
	import { Input } from '$lib/components/ui/input/index.js';
	import { Textarea } from '$lib/components/ui/textarea/index.js';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<section id="contact" class="relative overflow-hidden">
	<div
		class="mx-auto flex max-w-[1400px] flex-col justify-between gap-8 p-4 py-28 lg:gap-40 xl:flex-row"
	>
		<div class="flex flex-col justify-between gap-4">
			<div class="space-y-4">
				<h2 class="text-2xl leading-[1.1] lg:text-4xl">Get in Touch</h2>
				<div>hi@zackwebster.com</div>
			</div>
			<div class="space-y-8">
				<div class="h-px bg-white opacity-10"></div>
				<div class="flex flex-col gap-4 lg:flex-row">
					<div class="flex-1">
						<div class="mb-1">Start the Conversation</div>
						<p class="text-md text-sm leading-relaxed opacity-50">
							Your message is the first step. I'll get back quickly to explore possibilities & next
							steps.
						</p>
					</div>
					<div class="flex-1">
						<div class="mb-1">Towards Something Great</div>
						<p class="text-md text-sm leading-relaxed opacity-50">
							We'll shape ideas, solve problems, and make great things happen.
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="w-full max-w-xl rounded bg-foreground p-4 py-8 text-background md:p-8">
			<h3 class="mb-8 text-xl">Have a Project in Mind?</h3>
			<div class="space-y-4">
				<Input class="border-gray-200 py-6 dark:bg-gray-100" name="name" placeholder="Your Name" />
				<Input
					class="border-gray-200 py-6 dark:bg-gray-100"
					name="email"
					placeholder="Your Email"
				/>
				<Textarea
					class="min-h-40 border-gray-200 py-4 dark:bg-gray-100"
					rows={10}
					placeholder="Type your Message Here"
				/>
				<Button class="w-full bg-black py-6 hover:bg-black" variant="secondary">Send Message</Button
				>
				<p class="mt-4 text-xs opacity-50">
					By sending a message you agree to the <a class="underline" href="/privacy-policy"
						>privacy policy</a
					>.
				</p>
			</div>
		</div>
	</div>
	<div
		aria-hidden="true"
		class="pointer-events-none absolute -right-[40%] bottom-[20%] -z-10 aspect-[1/1] w-full max-w-[1200px] -translate-x-1/2
         translate-y-1/2 -rotate-25 rounded-[50%]
         bg-linear-to-r
         from-[#FE5F28]
         to-[#BE08D0] blur-[150px] md:aspect-[6/2]"
	></div>
</section>
