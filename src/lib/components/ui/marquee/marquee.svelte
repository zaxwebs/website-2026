<script lang="ts">
	import { cn } from '$lib/utils.js';
	import { onMount, onDestroy } from 'svelte';
	import gsap from 'gsap';

	interface Props {
		/** Custom CSS class(es) */
		class?: string;
		/** Whether the marquee should scroll vertically */
		vertical?: boolean;
		/** Animation speed multiplier (default: 1) */
		speed?: number;
		/** Gap between items in pixels (default: 30) */
		gap?: number;
		/** Number of times to repeat the content (default: 4) */
		repeat?: number;
		/** Scroll-based speed factor (default: 2) */
		scrollFactor?: number;
	}

	let {
		class: className = '',
		vertical = false,
		speed = 1,
		gap = 30,
		repeat = 4,
		scrollFactor = 1.8,
		children
	}: Props & { children: import('svelte').Snippet } = $props();

	let containerEl: HTMLElement;
	let tl: gsap.core.Timeline | null = null;
	let speedTween: gsap.core.Tween | null = null;
	let lastScrollY = 0;
	let scrollHandler: (() => void) | null = null;

	onMount(() => {
		const items = gsap.utils.toArray<HTMLElement>(containerEl.querySelectorAll('.marquee-item'));

		if (items.length === 0) return;

		// Enable GPU acceleration
		gsap.set(items, { willChange: 'transform', force3D: true });

		tl = horizontalLoop(items, {
			repeat: -1,
			paddingRight: gap,
			speed: speed
		});

		lastScrollY = window.scrollY;

		scrollHandler = () => {
			const currentScrollY = window.scrollY;
			const deltaY = currentScrollY - lastScrollY;
			lastScrollY = currentScrollY;

			// Only react if there's actual scroll movement
			if (deltaY === 0) return;

			let factor = scrollFactor;
			if (deltaY < 0) {
				factor *= -1;
			}

			// Kill existing tween
			if (speedTween) speedTween.kill();

			speedTween = gsap.to(tl, {
				timeScale: factor * scrollFactor,
				duration: 0.2,
				ease: 'none',
				overwrite: true,
				onComplete: () => {
					speedTween = gsap.to(tl, {
						timeScale: factor / scrollFactor,
						duration: 1,
						ease: 'none',
						delay: 0.3
					});
				}
			});
		};

		window.addEventListener('scroll', scrollHandler, { passive: true });
	});

	onDestroy(() => {
		if (scrollHandler) {
			window.removeEventListener('scroll', scrollHandler);
		}
		if (speedTween) {
			speedTween.kill();
		}
		if (tl) {
			tl.kill();
		}
	});

	/**
	 * This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.
	 */
	function horizontalLoop(
		items: HTMLElement[],
		config: {
			repeat?: number;
			paused?: boolean;
			speed?: number;
			snap?: number | false;
			paddingRight?: number;
			reversed?: boolean;
		} = {}
	) {
		const tl = gsap.timeline({
			repeat: config.repeat,
			paused: config.paused,
			defaults: { ease: 'none' },
			onReverseComplete: () => {
				tl.totalTime(tl.rawTime() + tl.duration() * 100);
			}
		});

		const length = items.length;
		const startX = items[0].offsetLeft;
		const times: number[] = [];
		const widths: number[] = [];
		const xPercents: number[] = [];
		let curIndex = 0;
		const pixelsPerSecond = (config.speed || 1) * 100;
		const snap = config.snap === false ? (v: number) => v : gsap.utils.snap(config.snap ?? 1);
		let totalWidth: number;

		// Convert "x" to "xPercent" to make things responsive
		gsap.set(items, {
			xPercent: (i, el) => {
				const w = (widths[i] = parseFloat(gsap.getProperty(el, 'width', 'px') as string));
				xPercents[i] = snap(
					(parseFloat(gsap.getProperty(el, 'x', 'px') as string) / w) * 100 +
						(gsap.getProperty(el, 'xPercent') as number)
				);
				return xPercents[i];
			}
		});

		gsap.set(items, { x: 0 });

		totalWidth =
			items[length - 1].offsetLeft +
			(xPercents[length - 1] / 100) * widths[length - 1] -
			startX +
			items[length - 1].offsetWidth * (gsap.getProperty(items[length - 1], 'scaleX') as number) +
			(config.paddingRight || 0);

		for (let i = 0; i < length; i++) {
			const item = items[i];
			const curX = (xPercents[i] / 100) * widths[i];
			const distanceToStart = item.offsetLeft + curX - startX;
			const distanceToLoop =
				distanceToStart + widths[i] * (gsap.getProperty(item, 'scaleX') as number);

			tl.to(
				item,
				{
					xPercent: snap(((curX - distanceToLoop) / widths[i]) * 100),
					duration: distanceToLoop / pixelsPerSecond,
					force3D: true
				},
				0
			)
				.fromTo(
					item,
					{ xPercent: snap(((curX - distanceToLoop + totalWidth) / widths[i]) * 100) },
					{
						xPercent: xPercents[i],
						duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
						immediateRender: false,
						force3D: true
					},
					distanceToLoop / pixelsPerSecond
				)
				.add('label' + i, distanceToStart / pixelsPerSecond);

			times[i] = distanceToStart / pixelsPerSecond;
		}

		function toIndex(index: number, vars: gsap.TweenVars = {}) {
			if (Math.abs(index - curIndex) > length / 2) {
				index += index > curIndex ? -length : length;
			}
			const newIndex = gsap.utils.wrap(0, length, index);
			let time = times[newIndex];
			if (time > tl.time() !== index > curIndex) {
				vars.modifiers = { time: gsap.utils.wrap(0, tl.duration()) };
				time += tl.duration() * (index > curIndex ? 1 : -1);
			}
			curIndex = newIndex;
			vars.overwrite = true;
			return tl.tweenTo(time, vars);
		}

		(tl as any).next = (vars?: gsap.TweenVars) => toIndex(curIndex + 1, vars);
		(tl as any).previous = (vars?: gsap.TweenVars) => toIndex(curIndex - 1, vars);
		(tl as any).current = () => curIndex;
		(tl as any).toIndex = (index: number, vars?: gsap.TweenVars) => toIndex(index, vars);
		(tl as any).times = times;

		tl.progress(1, true).progress(0, true); // pre-render for performance

		if (config.reversed) {
			(tl.vars as any).onReverseComplete();
			tl.reverse();
		}

		return tl;
	}
</script>

<div
	bind:this={containerEl}
	class={cn(
		'flex overflow-hidden whitespace-nowrap',
		vertical ? 'flex-col' : 'flex-row',
		className
	)}
	style="gap: {gap}px;"
>
	{#each Array(repeat) as _, i (i)}
		{@render children()}
	{/each}
</div>

<style>
	:global(.marquee-item) {
		flex-shrink: 0;
	}
</style>
