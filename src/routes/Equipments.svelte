<script lang="ts">
  import { equipments } from '$lib/stores';
  import Config from '$lib/config';
  import { Button } from '$lib/components';
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
  <Button color="light" on:click={fillUp} small>All</Button>
  <Button color="light" on:click={reset} small>Reset</Button>
  <Button color="light" on:click={clear} small>Clear</Button>
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
