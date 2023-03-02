<script lang="ts">
  import type { Equipment } from '$lib/models/Equipment';
  import { Counter, ButtonIcon } from '$lib/components';
  import { Trash, Tray } from '$lib/icons';

  export let equipment: Equipment;

  function fillUp() {
    equipment.amount = equipment.capacity;
  }
  function remove() {
    equipment.amount = 0;
  }
</script>

<span
  class="name"
  class:empty={equipment.amount === 0}
>{equipment.name}</span>

<Counter
  bind:count={equipment.amount}
  min={0}
  max={equipment.capacity}
  small
/>

<ButtonIcon on:click={fillUp}>
  <Tray title="Fill up" width={16} />
</ButtonIcon>

<ButtonIcon on:click={remove}>
  <Trash title="Remove" width={16} />
</ButtonIcon>

<style>
  .name {
    margin-left: 16px;
    min-width: 165px;
  }
  .empty {
    text-decoration: line-through;
    opacity: .5;
  }

  .name ~ :global(.button-icon) {
    margin-left: 16px;
  }
</style>
