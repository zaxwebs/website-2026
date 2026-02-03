<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		children: Snippet;
		class?: string;
	}

	let { children, class: className = '' }: Props = $props();
</script>

<div
	class="prose max-w-none prose-invert prose-headings:text-2xl prose-headings:font-semibold prose-headings:text-white prose-p:text-base prose-p:leading-relaxed prose-p:opacity-90 prose-a:underline prose-a:transition-colors hover:prose-a:text-white prose-ul:list-disc prose-li:marker:text-gray-500 [&>p:first-child]:text-lg {className}"
>
	{@render children()}
</div>
