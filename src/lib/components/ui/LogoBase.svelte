<script lang="ts">
	import { cn } from '$lib/utils';
	let { class: className, ...restProps } = $props();
</script>

<svg
	viewBox="0 0 40 40"
	fill="none"
	xmlns="http://www.w3.org/2000/svg"
	class={cn(className)}
	{...restProps}
>
	<path
		d="M22.2222 0H17.7778V14.6702L7.11778 4.01015L4.01015 7.11779L14.6702 17.7778H0V22.2222H14.6666L4.00174 32.8871L7.11112 35.9965L17.7778 25.3298V40H22.2222V25.3299L32.8895 35.9971L35.9971 32.8895L25.3299 22.2222H40V17.7778H25.3298L35.9892 7.11836L32.8799 4.00899L22.2222 14.6666V0Z"
		fill="currentColor"
	/>
</svg>
