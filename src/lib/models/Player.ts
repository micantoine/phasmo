import type { EquipmentId } from "./Equipment";
import Config from "$lib/config";

export interface PlayerProfile {
  name: string;
}

export interface PlayerEquipment {
  capacity: number;
  equipments: EquipmentId[]; 
}

export class Player implements PlayerProfile, PlayerEquipment {
  public capacity = Config.Players.capacity;
  public equipments: EquipmentId[] = [];
  public name = '';
}