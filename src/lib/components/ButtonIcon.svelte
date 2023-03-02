<script lang="ts">
  import type { HTMLButtonAttributes } from 'svelte/elements';
  export let type: HTMLButtonAttributes['type'] = 'button';
</script>

<button class="button-icon" {type} on:click>
  <slot/>
</button>

<style>
  :root {
    --button-text-color: var(--color-text);
    --button-bg-color: #f2f2f2;
    --button-bg-color-h: 0;
    --button-bg-color-s: 0%;
    --button-bg-color-l: 95%;
  }
  button {
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--button-text-color);
    background: var(--button-bg-color);
    border: none;
    border-radius: 50%;
    touch-action: manipulation;
    appearance: none;
  }
  button:hover {
    background-color: hsl(var(--button-bg-color-h), var(--button-bg-color-s), calc(var(--button-bg-color-l) * 0.9));
  }
</style>