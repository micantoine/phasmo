<script lang="ts">
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
  import { base } from "$app/paths";

  export let href: HTMLAnchorAttributes['href'] = null;
  export let type: HTMLButtonAttributes['type'] = 'button';
  export let color: 'primary' | '' = '';
  export let title = '';

  let tag: 'a' | 'button';
  $: tag = href === null ? 'button' : 'a';

  let hrefAttribute: HTMLAnchorAttributes['href'];
  $: hrefAttribute = tag === 'a' ? `${base}${href}` : null;

  let typeAttribute: HTMLButtonAttributes['type'];
  $: typeAttribute = tag === 'button' ? type : null;
</script>

<svelte:element
  class="button"
  class:primary={color === 'primary'}
  this={tag}
  href={hrefAttribute}
  type={typeAttribute}
  {title}
  on:click
  on:keypress
>
  <slot/>
</svelte:element>

<style>
  :root {
    --button-text-color: var(--color-text);
    --button-bg-color: #f2f2f2;
    --button-bg-color-h: 0;
    --button-bg-color-s: 0%;
    --button-bg-color-l: 95%;
  }
  .primary {
    --button-text-color: var(--color-theme-contrast);
    --button-bg-color: var(--color-theme);
    --button-bg-color-h: var(--color-theme-h);
    --button-bg-color-s: var(--color-theme-s);
    --button-bg-color-l: var(--color-theme-l);
  }
  .button {
    padding: 8px 20px;
    color: var(--button-text-color);
    background: var(--button-bg-color);
    border: none;
    border-radius: 4px;
    touch-action: manipulation;
    appearance: none;
  }
  .button:hover {
    background-color: hsl(var(--button-bg-color-h), var(--button-bg-color-s), calc(var(--button-bg-color-l) * 0.9));
    text-decoration: none;
  }
</style>