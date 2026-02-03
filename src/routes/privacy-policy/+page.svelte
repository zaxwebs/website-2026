<script lang="ts">
	import Prose from '$lib/components/Prose.svelte';
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<svelte:head>
	<title>Privacy Policy - Zack Webster</title>
</svelte:head>

<section>
	<div class="mx-auto max-w-[1400px] p-4 py-20">
		<div class="flex max-w-3xl flex-col gap-8">
			<!-- Header -->
			<div class="flex flex-col gap-4">
				<h1 class="text-3xl leading-[1.1] font-bold tracking-tight md:text-5xl lg:text-7xl">
					Privacy Policy
				</h1>
				<p class="text-lg opacity-70">Last updated: February 2, 2026</p>
			</div>

			<!-- Content -->
			<Prose>
				<p>
					Your privacy is important to me and my team. This policy explains how we respect and
					protect your privacy with regard to any information we may collect from you through my
					website, zackwebster.com, and any other websites I own and operate.
				</p>

				<h2>1. Information We Collect</h2>
				<p>
					We may collect personal information that you voluntarily provide to us when you express an
					interest in obtaining information about us or our products and services, when you
					participate in activities on the Website or otherwise when you contact us.
				</p>
				<p>
					The personal information we collect depends on the context of your interactions with us
					and the Website, the choices you make and the products and features you use. The personal
					information we collect may include the following:
				</p>
				<ul>
					<li>Names</li>
					<li>Email addresses</li>
				</ul>

				<h2>2. How We Use Your Information</h2>
				<p>We use the information we collect or receive:</p>
				<ul>
					<li>To send you marketing and promotional communications.</li>
					<li>To respond to user inquiries/offer support to users.</li>
					<li>To deliver targeted advertising to you.</li>
				</ul>

				<h2>3. Log Data</h2>
				<p>
					When you visit our website, our servers may automatically log the standard data provided
					by your web browser. It may include your computer's Internet Protocol (IP) address, your
					browser type and version, the pages you visit, the time and date of your visit, the time
					spent on each page, and other details.
				</p>

				<h2>4. Cookies</h2>
				<p>
					We use "cookies" to collect information about you and your activity across our site. A
					cookie is a small piece of data that our website stores on your computer, and accesses
					each time you visit, so we can understand how you use our site. This helps us serve you
					content based on preferences you have specified.
				</p>

				<h2>5. Security</h2>
				<p>
					We value your trust in providing us your Personal Information, thus we are striving to use
					commercially acceptable means of protecting it. But remember that no method of
					transmission over the internet, or method of electronic storage is 100% secure and
					reliable, and we cannot guarantee its absolute security.
				</p>

				<h2>6. Contact Us</h2>
				<p>
					If you have any questions or suggestions about my Privacy Policy, do not hesitate to
					contact me at <a href="mailto:hi@zackwebster.com">hi@zackwebster.com</a>.
				</p>
			</Prose>

			<div class="mb-16 pt-8">
				<a href="/" tabindex="-1">
					<Button variant="outline">Back to Home</Button>
				</a>
			</div>
		</div>
	</div>
</section>
