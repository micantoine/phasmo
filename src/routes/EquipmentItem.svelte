<script lang="ts">
  import type { Equipment } from '$lib/models/Equipment';
  import { Counter, ButtonIcon } from '$lib/components';
  import { Trash, Download } from '$lib/icons';

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
  <Download title="Fill up" width={16} />
</ButtonIcon>

<ButtonIcon on:click={remove}>
  <Trash title="Remove" width={16} />
</ButtonIcon>

<style>
  .name {
    margin-left: 16px;
    min-width: 145px;
  }
  .empty {
    text-decoration: line-through;
    opacity: .5;
  }

  .name ~ :global(.button-icon) {
    margin-left: 16px;
  }
  .name ~ :global(.button-icon) + :global(.button-icon) {
    margin-left: 8px;
  }
</style>
