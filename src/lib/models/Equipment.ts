
export enum EquipmentId  {
  Candle = 'candle',
  Crucifix = 'crucifix',
  DOTS = 'dots',
  EMFReader = 'emf-reader',
  Flashlight = 'flashlight',
  GhostWritingBook = 'ghost-writing-book',
  Glowstick = 'glowstick',
  Lighter = 'lighter',
  MotionSensor = 'motion-sensor',
  ParabolicMic = 'parabolic-mic',
  PhotoCamera = 'photo-camera',
  Salt = 'salt',
  SanityPills = 'sanity-pills',
  SmudgeStick = 'smudge-stick',
  SoundSensor = 'sound-sensor',
  SpiritBox = 'spirit-box',
  StrongFlashlight = 'strong-flashlight',
  Thermometer = 'thermometer',
  Tripod = 'tripod',
  UVFlashlight = 'uv-flashlight',
  VideoCamera = 'video-camera',
}

export type EquipmentType = 'starter' | 'advanced' | 'in-hand' | 'placeable' | 'ghost-evidence' | 'light-source' | 'audio' | 'protective' | 'photo-evidence';
 
export interface Equipment {
  id: EquipmentId;
  name: string;
  amount: number;
  capacity: number;
  type: Set<EquipmentType>;
  siblings?: Set<EquipmentId>;
  dependency?: EquipmentId;
}

export class Equipment {
  public id = EquipmentId.Flashlight;
  public name = '';
  public amount = 0;
  public capacity = 0;
  public type = new Set<EquipmentType>([]);
}