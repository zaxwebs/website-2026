<script lang="ts">
	import LogoBase from '$lib/components/ui/LogoBase.svelte';
	import { Button } from '$lib/components/ui/button/index.js';

	let isMenuOpen = $state(false);
	let menuButtonRef: HTMLButtonElement | null = $state(null);
	let firstLinkRef: HTMLAnchorElement | null = $state(null);

	function openMenu() {
		isMenuOpen = true;
		document.body.style.overflow = 'hidden';
		// Focus first link after transition
		setTimeout(() => firstLinkRef?.focus(), 100);
	}

	function closeMenu() {
		isMenuOpen = false;
		document.body.style.overflow = '';
		menuButtonRef?.focus();
	}

	function toggleMenu() {
		if (isMenuOpen) {
			closeMenu();
		} else {
			openMenu();
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeMenu();
		}
	}

	const navLinks = [
		{ href: '/', label: 'Home' },
		{ href: '#about', label: 'About' },
		{ href: '#work', label: 'Work' },
		{ href: '#contact', label: 'Contact' }
	];
</script>

<svelte:window onkeydown={isMenuOpen ? handleKeydown : undefined} />

<header class="fixed top-0 right-0 left-0 z-50 bg-black/90 backdrop-blur-md">
	<div class="mx-auto max-w-[1400px]">
		<div class="flex items-center justify-between gap-4 px-4 py-2">
			<!-- Logo -->
			<a href="/" class="group flex items-center gap-2">
				<LogoBase class="w-4 text-pink-500 group-hover:animate-spin" />
				<img class="h-6" src="/images/typographic.svg" alt="Zack Webster" />
			</a>

			<!-- Desktop Navigation -->
			<nav class="hidden items-center gap-6 md:flex" aria-label="Main navigation">
				{#each navLinks.slice(0, -1) as link}
					<a
						href={link.href}
						class="text-sm font-medium text-white/80 transition-colors hover:text-white"
					>
						{link.label}
					</a>
				{/each}
				<Button variant="outline" href="#contact" class="ml-2">Get in Touch</Button>
			</nav>

			<!-- Mobile Menu Button -->
			<button
				bind:this={menuButtonRef}
				type="button"
				class="relative z-[60] flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/10 md:hidden"
				onclick={toggleMenu}
				aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={isMenuOpen}
				aria-controls="mobile-menu"
			>
				<div class="flex h-5 w-6 flex-col justify-center gap-1.5" aria-hidden="true">
					<span
						class="h-0.5 w-full origin-center rounded-full bg-white transition-all duration-300 ease-out"
						class:translate-y-2={isMenuOpen}
						class:rotate-45={isMenuOpen}
					></span>
					<span
						class="h-0.5 w-full rounded-full bg-white transition-all duration-300 ease-out"
						class:opacity-0={isMenuOpen}
						class:scale-x-0={isMenuOpen}
					></span>
					<span
						class="h-0.5 w-full origin-center rounded-full bg-white transition-all duration-300 ease-out"
						class:-translate-y-2={isMenuOpen}
						class:-rotate-45={isMenuOpen}
					></span>
				</div>
			</button>
		</div>
	</div>
</header>

<!-- Full Screen Mobile Menu -->
<div
	id="mobile-menu"
	role="dialog"
	aria-modal="true"
	aria-label="Mobile navigation menu"
	class="fixed inset-0 z-50 flex flex-col bg-black transition-opacity duration-300 ease-out md:hidden"
	class:opacity-100={isMenuOpen}
	class:pointer-events-auto={isMenuOpen}
	class:opacity-0={!isMenuOpen}
	class:pointer-events-none={!isMenuOpen}
	aria-hidden={!isMenuOpen}
	inert={!isMenuOpen ? true : undefined}
>
	<!-- Header with close button -->
	<div class="flex items-center justify-between px-4 py-2">
		<a
			href="/"
			class="group flex items-center gap-2"
			onclick={closeMenu}
			tabindex={isMenuOpen ? 0 : -1}
		>
			<LogoBase class="w-4 text-pink-500" />
			<img class="h-6" src="/images/typographic.svg" alt="Zack Webster" />
		</a>
		<button
			type="button"
			class="flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
			onclick={closeMenu}
			aria-label="Close menu"
			tabindex={isMenuOpen ? 0 : -1}
		>
			<svg
				class="h-6 w-6 text-white"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				aria-hidden="true"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M6 18L18 6M6 6l12 12"
				/>
			</svg>
		</button>
	</div>

	<!-- Navigation Links - Centered -->
	<nav
		class="flex flex-1 flex-col items-center justify-center gap-4 px-6"
		aria-label="Mobile navigation"
	>
		{#each navLinks as link, index}
			{#if index === 0}
				<a
					bind:this={firstLinkRef}
					href={link.href}
					class="text-3xl text-white focus:outline-none focus-visible:underline"
					onclick={closeMenu}
					tabindex={isMenuOpen ? 0 : -1}
				>
					{link.label}
				</a>
			{:else}
				<a
					href={link.href}
					class="text-3xl text-white focus:outline-none focus-visible:underline"
					onclick={closeMenu}
					tabindex={isMenuOpen ? 0 : -1}
				>
					{link.label}
				</a>
			{/if}
		{/each}
	</nav>

	<!-- Social Links -->
	<div class="border-t border-white/10 p-6">
		<ul class="flex justify-center gap-8" role="list" aria-label="Social media links">
			<li>
				<a
					href="https://www.instagram.com/zaxwebs"
					class="block rounded text-white/50 transition-colors hover:text-pink-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
					aria-label="Follow on Instagram"
					tabindex={isMenuOpen ? 0 : -1}
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a
					href="https://www.linkedin.com/in/zackwebs/"
					class="block rounded text-white/50 transition-colors hover:text-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
					aria-label="Connect on LinkedIn"
					tabindex={isMenuOpen ? 0 : -1}
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
						/>
					</svg>
				</a>
			</li>
			<li>
				<a
					href="https://github.com/zaxwebs"
					class="block rounded text-white/50 transition-colors hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
					aria-label="View GitHub profile"
					tabindex={isMenuOpen ? 0 : -1}
				>
					<svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
						<path
							d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
						/>
					</svg>
				</a>
			</li>
		</ul>
	</div>
</div>

<!-- Spacer to prevent content from being hidden under fixed header -->
<div class="h-[56px]"></div>
