<script lang="ts">
	import { cn } from '$lib/utils.js';

	interface Props {
		/** Custom CSS class(es) */
		class?: string;
		/** Animation duration in seconds (default: 20) */
		duration?: number;
		/** Gap between items in pixels (default: 30) */
		gap?: number;
		/** Number of times to repeat the content (default: 4) */
		repeat?: number;
		/** Reverse direction */
		reverse?: boolean;
		/** Pause on hover */
		pauseOnHover?: boolean;
	}

	let {
		class: className = '',
		duration = 20,
		gap = 30,
		repeat = 4,
		reverse = false,
		pauseOnHover = false,
		children
	}: Props & { children: import('svelte').Snippet } = $props();
</script>

<div
	class={cn(
		'marquee-container flex overflow-hidden whitespace-nowrap',
		pauseOnHover && 'pause-on-hover',
		className
	)}
	style="--marquee-duration: {duration}s; --marquee-gap: {gap}px;"
>
	<div class="marquee-track" class:reverse>
		{#each Array(repeat) as _, i (i)}
			{@render children()}
		{/each}
	</div>
	<div class="marquee-track" class:reverse aria-hidden="true">
		{#each Array(repeat) as _, i (i)}
			{@render children()}
		{/each}
	</div>
</div>

<style>
	.marquee-container {
		--marquee-duration: 20s;
		--marquee-gap: 30px;
	}

	.marquee-track {
		display: flex;
		gap: var(--marquee-gap);
		padding-right: var(--marquee-gap);
		animation: marquee var(--marquee-duration) linear infinite;
		flex-shrink: 0;
	}

	.marquee-track.reverse {
		animation-direction: reverse;
	}

	.pause-on-hover:hover .marquee-track {
		animation-play-state: paused;
	}

	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(-100%);
		}
	}

	:global(.marquee-item) {
		flex-shrink: 0;
	}
</style>
