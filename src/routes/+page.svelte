<script lang="ts">
  import { onMount } from 'svelte';
  import type { PageData } from './$types';
  import Config from '$lib/config';
  import { playersAmount, equipments } from '$lib/stores';
  import { Counter, Button, PhasmoLogo } from '$lib/components';
  import PlayersName from './PlayersName.svelte';
  import Equipments from './Equipments.svelte';
  import DistributionOptions from './DistributionOptions.svelte';

  export let data: PageData;

  onMount(() => {
    if ($equipments.length === 0) {
      equipments.set(data.equipments);
    }
  });
</script>

<svelte:head>
  <title>Phasmophobia Loadouts</title>
  <meta name="description" content="Phasmophobia random loadouts" />
</svelte:head>

<section>
  <h1>
    <PhasmoLogo />
  </h1>

  <h2>Players</h2>
  <Counter
    bind:count={$playersAmount}
    max={Config.Players.max}
    min={Config.Players.min}
  />
  <PlayersName />

  <h2>Equipments</h2>
  <Equipments />

  <h2>Distribution</h2>
  <DistributionOptions />

  <Button color="primary" href="/distribution" title="Distribute Equipment">
    Distribute Equipments
  </Button>
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>
