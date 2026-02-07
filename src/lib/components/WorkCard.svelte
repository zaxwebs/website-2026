<script lang="ts">
	interface Props {
		title: string;
		category: string;
		image?: string;
		href?: string;
		class?: string;
	}

	let { title, category, image, href, class: className = '' }: Props = $props();

	const tag = $derived(href ? 'a' : 'div');
</script>

<svelte:element this={tag} {href} class={className}>
	<div class="mb-4 aspect-4/3 bg-background">
		{#if image}
			<img class="h-full w-full object-cover" src={image} alt="" />
		{/if}
	</div>
	<h3 class="mb-1 text-xl">{title}</h3>
	<p class="opacity-50">{category}</p>
</svelte:element>
