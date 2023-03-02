<script lang="ts">
  import { players, playersAmount } from '$lib/stores';
  import { Player } from '$lib/models/Player';
  import FormInput from '$lib/components/FormInput.svelte';

  $: updatePlayers($playersAmount);

  function updatePlayers(nb: number) {
    players.update((state) => {
      let p: Player[] = [];
      for (let i = 0; i < nb; i++) {
        p = p.concat(state?.[i] ?? new Player());
      }
      return p;
    })
  }
</script>

<ul>
  {#each $players as p, i (i)}
    <li>
      <FormInput
        placeholder="Name {i + 1}"
        name="names"
        bind:value={p.name}
      />
    </li>
  {/each}
</ul>

<style>
  ul {
    margin: 2rem 0;
    padding:0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
    list-style: none;
  }

  li :global(input) {
    width: 160px;
  }
</style>
