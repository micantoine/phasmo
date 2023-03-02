import { writable, derived } from 'svelte/store';
import Config from '$lib/config';
import type { Player } from '$lib/models/Player';
import { Distribution } from '$lib/models/Distribution';
import type { Equipment, EquipmentId } from '$lib/models/Equipment';

export const playersAmount =  writable<number>(Config.Players.amount);

export const players = {
  ...writable<Player[]>([]),
  resetEquipment() {
    this.update((state) => {
      return state.map((p) => ({
        ...p,
        equipments: [],
      }))
    });
  }
};

export const distribution = writable<Distribution>(new Distribution())

export const equipments = {
  ...writable<Equipment[]>([]),

  name(id: EquipmentId): Equipment['name'] {
    let value: Equipment['name'] = '';
    const unsunscribe = this.subscribe((state) => {
      value = state.find((item) => item.id === id)?.name ?? id;
    });
    unsunscribe();
    return value;
  },

  siblings(id: EquipmentId): EquipmentId[] {
    let value: EquipmentId[] = [];
    const unsunscribe = this.subscribe((state) => {
      value = state.filter((item) => item?.siblings?.has(id)).map((item) => item.id);
    });
    unsunscribe();
    return value;
  },

  dependency(id: EquipmentId): EquipmentId | null {
    let value: EquipmentId | null = null;
    const unsunscribe = this.subscribe((state) => {
      value = state.find((item) => item.id === id)?.dependency ?? null;
    });
    unsunscribe();
    return value;
  },
};

export const availableEquiments = derived(
  [equipments, players],
  ([$equipments, $players]) => {
    const availability: EquipmentId[] = [];

    for (let i = 0; i < $equipments.length; i++) {
      const equipment = $equipments[i];
      for (let j = 0; j < equipment.amount; j++) {
        availability.push(equipment.id);
      }
    }

    for (let i = 0; i < $players.length; i++) {
      $players[i].equipments.forEach((id) => {
        const equipmentIndex = availability.indexOf(id);
        if (equipmentIndex > -1) {
          availability.splice(equipmentIndex, 1);
        }
      });
    }
  
    return availability;
  }
);

