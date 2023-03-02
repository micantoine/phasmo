<script lang="ts">
  import { spring } from 'svelte/motion';

  export let count = 1;
  export let min = 1;
  export let max = 1;
  export let separator = false;
  export let small = false;

  const displayed_count = spring();
  $: displayed_count.set(count);
  $: offset = modulo($displayed_count, 1);

  function descrease () {
    if (count > min) {
      count -= 1;
    }
  }

  function increase () {
    if (count < max) {
      count += 1;
    }
  }

  function modulo(n: number, m: number) {
    // handle negative numbers
    return ((n % m) + m) % m;
  }
</script>

<div class="counter" class:separator class:small>
  <button on:click={descrease} aria-label="Decrease the amount of player by one">
    <svg aria-hidden="true" viewBox="0 0 1 1">
      <path d="M0,0.5 L1,0.5" />
    </svg>
  </button>

  <div class="counter-viewport">
    <div class="counter-digits" style="transform: translate(0, {100 * offset}%)">
      <strong class="hidden" aria-hidden="true">{Math.floor($displayed_count + 1)}</strong>
      <strong>{Math.floor($displayed_count)}</strong>
    </div>
  </div>

  <button on:click={increase} aria-label="Increase the amount of player by one">
    <svg aria-hidden="true" viewBox="0 0 1 1">
      <path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
    </svg>
  </button>
</div>

<style>
  .counter {
    display: flex;
  }

  .separator {
    border-top: 1px solid var(--color-border);
    border-bottom: 1px solid var(--color-border);
  }

  .counter button {
    width: 2em;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    background-color: transparent;
    touch-action: manipulation;
    font-size: 2rem;
  }
  .small.counter button {
    width: 1em;
  }

  .counter button:hover {
    background-color: var(--color-bg-1);
  }

  svg {
    width: 25%;
    height: 25%;
  }

  path {
    vector-effect: non-scaling-stroke;
    stroke-width: 2px;
    stroke: #444;
  }

  .counter-viewport {
    width: 8em;
    height: 4em;
    overflow: hidden;
    text-align: center;
    position: relative;
  }
  
  .counter-viewport strong {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
    font-weight: 400;
    color: var(--color-theme);
    font-size: 4rem;
    align-items: center;
    justify-content: center;
  }

  .small .counter-viewport {
    width: 2em;
    height: 2em;
  }
  .small .counter-viewport strong {
    font-size: 1.2rem;
  }

  .counter-digits {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .hidden {
    top: -100%;
    user-select: none;
  }
</style>
