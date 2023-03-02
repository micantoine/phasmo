<script lang="ts">
  import { onMount } from 'svelte';
  import { base } from "$app/paths";
  import type { EquipmentId } from '$lib/models/Equipment';
  import { availableEquiments, players, equipments, distribution } from '$lib/stores';
  import { Button } from '$lib/components';
  import { shuffle, pickRandom } from '$lib/utils';
  import PlayerCard from './PlayerCard.svelte';

  const selectedEquipments = new Map<number, EquipmentId[]>();
  let bag: EquipmentId[] = [];
  let drawingOrder: number[] = [];
  let playersWithDependency: Set<number> = new Set();
 
  onMount(() => {
    drawOrder();
    distribute();
  });

  function drawOrder () {
    const orderByCapacity = new Map<number, number[]>(); 

    $players.forEach((p, index) => {
      let n = 0;
      while (n < p.capacity) {
        n+=1;
        orderByCapacity.set(n, [
          ...orderByCapacity.get(n) ?? [],
          index
        ]);
      }
    });
  
    orderByCapacity.forEach((values) => {
      drawingOrder = drawingOrder.concat(shuffle(values));
    });
  }

  function pickItem(playerIndex: number): EquipmentId[] {
    const currentPlayer = $players[playerIndex];
    const newItem: EquipmentId = pickRandom(bag);
    let newItems: EquipmentId[] = [newItem];

    if ($distribution.allowDependencies) {
      const dependencyId = equipments.dependency(newItem);
  
      if (dependencyId && !currentPlayer.equipments.includes(dependencyId)) {
          // last slot?
          if (currentPlayer.capacity - 1 === currentPlayer.equipments.length) {
            if (selectedEquipments.get(playerIndex)?.includes(dependencyId)) {
              newItems = pickItem(playerIndex);
            } else {
              newItems = [dependencyId];
            }
          } else {
            newItems = newItems.concat([dependencyId]);
            playersWithDependency.add(playerIndex);
          }
      }
    }

    return [...newItems];
  }

  function distribute() {
    for (let i = 0; i < drawingOrder.length; i++) {
      const playerIndex = drawingOrder[i];
      const currentPlayer = $players[playerIndex];

      if (playersWithDependency.has(playerIndex)) {
        playersWithDependency.delete(playerIndex);
        continue;
      }

      bag = $availableEquiments.filter((id) => {
        const hasEquipment = currentPlayer.equipments.includes(id)
        if ($distribution.allowSiblings) {
          return !hasEquipment;
        }
        const siblings = equipments.siblings(id).find((itemId) => currentPlayer.equipments.includes(itemId));
        return !hasEquipment && !siblings
      });

      if (bag.length > 0) {
        const newItems = pickItem(playerIndex);
        const currentItems: EquipmentId[] = selectedEquipments.get(playerIndex) ?? [];
        selectedEquipments.set(playerIndex, [...currentItems, ...newItems]);
  
        players.update((state) => {
          return state.map((p, index) => {
            return {
              ...p,
              equipments: selectedEquipments.get(index) ?? []
            }
          });
        });
      }
    }
  }

  function reset() {
    drawingOrder = [];
    drawOrder();
    selectedEquipments.clear();
    players.resetEquipment();
  }

  function redistribute() {
    reset();
    distribute();
  }
</script>
<svelte:head>
  <title>Distribution</title>
  <meta name="description" content="Equipment distribution" />
</svelte:head>

<h1>Players Equipments</h1>

<section class="players">
  {#each $players as player, index}
    <PlayerCard
      name={player.name || `Player ${index + 1}`}
      equipmentIds={player.equipments}
    />
  {/each}
</section>

<div class="actions">
  <Button color="primary" on:click={redistribute}>Re-distribute</Button><br/>
  <a class="secondary" href={`${base}/`} title="Settings" on:click={reset}>Review settings</a>
</div>

<style>
  .players > :global(*) {
    margin-bottom: 1rem;
  }
  @media (min-width: 600px) {
    .players {
      margin: 30px auto 0;
      display: flex;
      flex-direction: row;
      gap: 1rem;
      flex-wrap: wrap;
      justify-content: center;
    }
    .players > :global(*) {
      margin-bottom: 0;
      min-width: 200px;
    }
  }
  .actions {
    margin-top: 2rem;
    text-align: center;
  }
  .actions :global(.button) {
    margin-bottom: 10px;
  }
  .actions a {
    font-size: 14px;
  }
</style>