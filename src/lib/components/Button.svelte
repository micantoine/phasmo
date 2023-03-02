<script lang="ts">
  import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
  import { base } from "$app/paths";

  export let href: HTMLAnchorAttributes['href'] = null;
  export let type: HTMLButtonAttributes['type'] = 'button';
  export let color: 'primary' | 'light' | '' = '';
  export let title = '';
  export let small = false;

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
  class:light={color === 'light'}
  class:small
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
  .button:active {
   box-shadow: inset 1px 1px 1px hsl(var(--button-bg-color-h), var(--button-bg-color-s), calc(var(--button-bg-color-l) * .5));
  }
  .primary {
    --button-text-color: var(--color-theme-contrast);
    --button-bg-color: var(--color-theme);
    --button-bg-color-h: var(--color-theme-h);
    --button-bg-color-s: var(--color-theme-s);
    --button-bg-color-l: var(--color-theme-l);
  }
  .light {
    --button-text-color: var(--color-light-contrast);
    --button-bg-color: var(--color-light);
    --button-bg-color-h: var(--color-light-h);
    --button-bg-color-s: var(--color-light-s);
    --button-bg-color-l: var(--color-light-l);
    border: 1px solid hsl(var(--button-bg-color-h), var(--button-bg-color-s), calc(var(--button-bg-color-l) * .9));
    box-shadow: 1px 1px 1px hsl(var(--button-bg-color-h), var(--button-bg-color-s), calc(var(--button-bg-color-l) * .5));
  }
  .small {
    padding: 5px 12px;
    font-size: 14px;
  }
</style>