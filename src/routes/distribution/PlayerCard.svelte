<script lang="ts">
  import type { Player } from "$lib/models/Player";
  import { equipments } from "$lib/stores";

  export let name: Player['name'];
  export let equipmentIds: Player['equipments'];
</script>

<div class="card">
  <h3>{name}</h3>
  <ul>
    {#each equipmentIds as id}
      <li>{equipments.name(id)}</li>
    {/each}
  </ul>
</div>

<style>
  .card {
    padding: 16px;
    box-shadow: 2px 2px 4px rgba(0,0,0, .2);
    border-radius: 1rem;
    text-align: center;
    background-color: #f8f8f8;
  }
  h3 {
    margin-top: 0;
    margin-bottom: 10px;
    font-size: 20px;
    text-align: center;
  }
  ul {
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    list-style: none;
  }
</style>