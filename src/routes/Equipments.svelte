<script lang="ts">
  import { equipments } from '$lib/stores';
  import Config from '$lib/config';
  import EquipmentItem from './EquipmentItem.svelte';

  function fillUp() {
    equipments.update((state) => {
      return state.map((item) => ({
        ...item,
        amount: item.capacity,
      }))
    })
  }
  function reset() {
    equipments.update((state) => {
      return state.map((item) => ({
        ...item,
        amount: Config.EquipmentAmount[item.id],
      }))
    })
  }

  function clear() {
    equipments.update((state) => {
      return state.map((item) => ({
        ...item,
        amount: 0
      }))
    })
  }
</script>

<div class="actions">
  <button on:click={fillUp} type="button">All</button>
  <button on:click={reset} type="button">Reset</button>
  <button on:click={clear} type="button">Clear</button>
</div>

<ul>
  {#each $equipments as equipment (equipment.id) }
  <li>
    <EquipmentItem {equipment} />
  </li>
  {/each}
</ul>

<style>
  ul {
    padding-left: 0;
  }
  li {
    padding: 2px 0;
    display: flex;
    align-items: center;
  }
  li:not(:first-child) {
    border-top: 1px solid var(--color-border);
  }
</style>
