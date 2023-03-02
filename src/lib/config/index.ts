import { EquipmentId } from "$lib/models/Equipment";

export class Players {
  static readonly amount = 3;
  static readonly capacity = 3;
  static readonly max = 4;
  static readonly min = 1;
}

export class Distribution {
  static readonly allowDependencies = true;
  static readonly allowSiblings = false;
}

export class EquipmentAmount {
  static readonly [EquipmentId.Candle] = 0;
  static readonly [EquipmentId.Crucifix] = 0;
  static readonly [EquipmentId.DOTS] = 0;
  static readonly [EquipmentId.EMFReader] = 1;
  static readonly [EquipmentId.Flashlight] = 1;
  static readonly [EquipmentId.GhostWritingBook] = 1;
  static readonly [EquipmentId.Glowstick] = 0;
  static readonly [EquipmentId.Lighter] = 0;
  static readonly [EquipmentId.MotionSensor] = 0;
  static readonly [EquipmentId.ParabolicMic] = 0;
  static readonly [EquipmentId.PhotoCamera] = 1;
  static readonly [EquipmentId.Salt] = 0;
  static readonly [EquipmentId.SanityPills] = 0;
  static readonly [EquipmentId.SmudgeStick] = 0;
  static readonly [EquipmentId.SoundSensor] = 0;
  static readonly [EquipmentId.SpiritBox] = 1;
  static readonly [EquipmentId.StrongFlashlight] = 0;
  static readonly [EquipmentId.Thermometer] = 0;
  static readonly [EquipmentId.Tripod] = 0;
  static readonly [EquipmentId.UVFlashlight] = 1;
  static readonly [EquipmentId.VideoCamera] = 1;
}

const Config = { Players, Distribution, EquipmentAmount };

export default Config;