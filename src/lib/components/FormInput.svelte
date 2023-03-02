<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	export let name: HTMLInputAttributes['name'] = '';
	export let value: HTMLInputAttributes['value'] = '';
	export let type: HTMLInputAttributes['type'] = 'text';
	export let placeholder: HTMLInputAttributes['placeholder'] = '';

	let isOnFocus = false;

	let currentPlaceholder: HTMLInputAttributes['placeholder'];
	$: currentPlaceholder = !isOnFocus ? placeholder : '';

	const handleInput = (
    ev: Event & { currentTarget: EventTarget & HTMLInputElement }
  ) => {
    value = type?.match(/^(number|range)$/)
      ? +ev.currentTarget.value
      : ev.currentTarget.value;
  };
</script>

<input
	{name}
	placeholder={currentPlaceholder}
	{value}
	{type}
	on:input={handleInput}
	on:focus={() => isOnFocus = true}
	on:blur={() => isOnFocus = false}
/>
<style>
	input {
		font-size: 26px;
		text-align: center;
		border-top: none;
		border-left: none;
		border-right: none;
		border-bottom: 1px solid ;
		outline: none;
		border-color: rgba(0,0,0, .2);
	}
	input:focus {
		border-color: var(--color-theme);
	}
</style>
