<script lang="ts">
	import { cn } from '$lib/utils.js';

	interface Props {
		/** Custom CSS class(es) */
		class?: string;
		/** Whether to reverse the animation direction */
		reverse?: boolean;
		/** Whether to pause the animation on hover */
		pauseOnHover?: boolean;
		/** Whether the marquee should scroll vertically */
		vertical?: boolean;
		/** Number of times to repeat the content (default: 4) */
		repeat?: number;
		/** Animation duration in seconds (default: 40) */
		duration?: number;
		/** Gap between items using Tailwind gap class (default: 'gap-4') */
		gap?: string;
	}

	let {
		class: className = '',
		reverse = false,
		pauseOnHover = false,
		vertical = false,
		repeat = 4,
		duration = 40,
		gap = 'gap-4',
		children
	}: Props & { children: import('svelte').Snippet } = $props();
</script>

<div
	class={cn(
		'group flex overflow-hidden [--gap:1rem]',
		vertical ? 'flex-col' : 'flex-row',
		gap,
		className
	)}
	style="--duration: {duration}s;"
>
	{#each Array(repeat) as _, i (i)}
		<div
			class={cn(
				'flex shrink-0 justify-around',
				vertical ? 'animate-marquee-vertical flex-col' : 'animate-marquee flex-row',
				reverse && (vertical ? 'animate-marquee-vertical-reverse' : 'animate-marquee-reverse'),
				pauseOnHover && 'group-hover:[animation-play-state:paused]',
				gap
			)}
		>
			{@render children()}
		</div>
	{/each}
</div>

<style>
	@keyframes marquee {
		from {
			transform: translateX(0);
		}
		to {
			transform: translateX(calc(-100% - var(--gap)));
		}
	}

	@keyframes marquee-reverse {
		from {
			transform: translateX(calc(-100% - var(--gap)));
		}
		to {
			transform: translateX(0);
		}
	}

	@keyframes marquee-vertical {
		from {
			transform: translateY(0);
		}
		to {
			transform: translateY(calc(-100% - var(--gap)));
		}
	}

	@keyframes marquee-vertical-reverse {
		from {
			transform: translateY(calc(-100% - var(--gap)));
		}
		to {
			transform: translateY(0);
		}
	}

	:global(.animate-marquee) {
		animation: marquee var(--duration) linear infinite;
	}

	:global(.animate-marquee-reverse) {
		animation: marquee-reverse var(--duration) linear infinite;
	}

	:global(.animate-marquee-vertical) {
		animation: marquee-vertical var(--duration) linear infinite;
	}

	:global(.animate-marquee-vertical-reverse) {
		animation: marquee-vertical-reverse var(--duration) linear infinite;
	}
</style>
