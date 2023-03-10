import { type Equipment, EquipmentId } from "$lib/models/Equipment";
import { EquipmentAmount } from "$lib/config";

export const equipments: Equipment[] = [
  {
    id: EquipmentId.Candle,
    name: 'Candle',
    amount: EquipmentAmount[EquipmentId.Candle],
    capacity: 4,
    type: new Set(['advanced', 'in-hand', 'placeable', 'light-source', 'protective', 'photo-evidence']),
    dependency: EquipmentId.Lighter,
  },
  {
    id: EquipmentId.Crucifix,
    name: 'Crucifix',
    amount: EquipmentAmount[EquipmentId.Crucifix],
    capacity: 2,
    type: new Set(['advanced', 'in-hand', 'placeable', 'protective', 'photo-evidence']),
  },
  {
    id: EquipmentId.DOTS,
    name: 'D.O.T.S Projector',
    amount: EquipmentAmount[EquipmentId.DOTS],
    capacity: 2,
    type: new Set(['starter', 'placeable', 'ghost-evidence', 'light-source', 'photo-evidence']),
  },
  {
    id: EquipmentId.EMFReader,
    name: 'EMF Reader',
    amount: EquipmentAmount[EquipmentId.EMFReader],
    capacity: 2,
    type: new Set(['starter', 'in-hand', 'ghost-evidence', 'audio']),
  },
  {
    id: EquipmentId.Flashlight,
    name: 'Flashlight',
    amount: EquipmentAmount[EquipmentId.Flashlight],
    capacity: 4,
    type: new Set(['starter', 'in-hand', 'light-source']),
    siblings: new Set([EquipmentId.StrongFlashlight]),
  },
  {
    id: EquipmentId.GhostWritingBook,
    name: 'Ghost Writing Book',
    amount: EquipmentAmount[EquipmentId.GhostWritingBook],
    capacity: 2,
    type: new Set(['starter', 'placeable', 'ghost-evidence', 'photo-evidence']),
  },
  {
    id: EquipmentId.Glowstick,
    name: 'Glowstick',
    amount: EquipmentAmount[EquipmentId.Glowstick],
    capacity: 2,
    type: new Set(['advanced', 'in-hand', 'placeable', 'ghost-evidence', 'light-source']),
    siblings: new Set([EquipmentId.UVFlashlight]),
  },
  {
    id: EquipmentId.Lighter,
    name: 'Lighter',
    amount: EquipmentAmount[EquipmentId.Lighter],
    capacity: 4,
    type: new Set(['advanced', 'in-hand', 'light-source', 'protective']),
  },
  {
    id: EquipmentId.MotionSensor,
    name: 'Motion Sensor',
    amount: EquipmentAmount[EquipmentId.MotionSensor],
    capacity: 4,
    type: new Set(['advanced', 'placeable', 'light-source', 'audio']),
  },
  {
    id: EquipmentId.ParabolicMic,
    name: 'Parabolic Mic',
    amount: EquipmentAmount[EquipmentId.ParabolicMic],
    capacity: 2,
    type: new Set(['advanced', 'in-hand', 'placeable', 'audio']),
  },
  {
    id: EquipmentId.PhotoCamera,
    name: 'Photo Camera',
    amount: EquipmentAmount[EquipmentId.PhotoCamera],
    capacity: 3,
    type: new Set(['starter', 'in-hand']),
  },
  {
    id: EquipmentId.Salt,
    name: 'Salt',
    amount: EquipmentAmount[EquipmentId.Salt],
    capacity: 3,
    type: new Set(['advanced', 'placeable', 'photo-evidence']),
  },
  {
    id: EquipmentId.SanityPills,
    name: 'Sanity Pills',
    amount: EquipmentAmount[EquipmentId.SanityPills],
    capacity: 4,
    type: new Set(['advanced', 'in-hand', 'protective']),
  },
  {
    id: EquipmentId.SmudgeStick,
    name: 'Smudge Stick',
    amount: EquipmentAmount[EquipmentId.SmudgeStick],
    capacity: 4,
    type: new Set(['advanced', 'in-hand', 'protective']),
    dependency: EquipmentId.Lighter,
  },
  {
    id: EquipmentId.SoundSensor,
    name: 'Sound Sensor',
    amount: EquipmentAmount[EquipmentId.SoundSensor],
    capacity: 4,
    type: new Set(['advanced', 'placeable', 'audio']),
  },
  {
    id: EquipmentId.SpiritBox,
    name: 'Spirit Box',
    amount: EquipmentAmount[EquipmentId.SpiritBox],
    capacity: 2,
    type: new Set(['starter', 'in-hand', 'ghost-evidence', 'audio']),
  },
  {
    id: EquipmentId.StrongFlashlight,
    name: 'Strong Flashlight',
    amount: EquipmentAmount[EquipmentId.StrongFlashlight],
    capacity: 4,
    type: new Set(['advanced', 'in-hand', 'light-source']),
    siblings: new Set([EquipmentId.Flashlight]),
  },
  {
    id: EquipmentId.Thermometer,
    name: 'Thermometer',
    amount: EquipmentAmount[EquipmentId.Thermometer],
    capacity: 3,
    type: new Set(['starter', 'in-hand', 'ghost-evidence']),
  },
  {
    id: EquipmentId.Tripod,
    name: 'Tripod',
    amount: EquipmentAmount[EquipmentId.Tripod],
    capacity: 4,
    type: new Set(['advanced', 'placeable']),
    dependency: EquipmentId.VideoCamera,
  },
  {
    id: EquipmentId.UVFlashlight,
    name: 'UV Flashlight',
    amount: EquipmentAmount[EquipmentId.UVFlashlight],
    capacity: 2,
    type: new Set(['starter', 'in-hand', 'ghost-evidence', 'light-source']),
    siblings: new Set([EquipmentId.Glowstick]),
  },
  {
    id: EquipmentId.VideoCamera,
    name: 'Video Camera',
    amount: EquipmentAmount[EquipmentId.VideoCamera],
    capacity: 4,
    type: new Set(['starter', 'in-hand', 'placeable', 'ghost-evidence', 'light-source']),
  }
];