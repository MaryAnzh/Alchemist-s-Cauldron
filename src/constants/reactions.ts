export const REACTION_IDS = {
  BUBBLING: 'bubbling',
  VOLATILE_MIX: 'volatile-mix',
  SOLAR_FROST: 'solar-frost',
  ROOTED_STEAM: 'rooted-steam',
  ASHEN_BLOOM: 'ashen-bloom',
  ANNIHILATION: 'annihilation',
  PRESSURE_SPIKE: 'pressure-spike',
  MAGMA_FLUX: 'magma-flux',
  DEEP_FREEZE: 'deep-freeze',
  ARCANE_SATURATION: 'arcane-saturation',
  STEAM_BURST: 'steam-burst',
  BLACK_ICE: 'black-ice',
  HEAVY_SPARK: 'heavy-spark',
  BURNING_ROOT: 'burning-root',
  VOID_RESONANCE: 'void-resonance',
} as const;

const {
  BUBBLING,
  VOLATILE_MIX,
  SOLAR_FROST,
  ROOTED_STEAM,
  ASHEN_BLOOM,
  ANNIHILATION,
  PRESSURE_SPIKE,
  MAGMA_FLUX,
  DEEP_FREEZE,
  ARCANE_SATURATION,
  STEAM_BURST,
  BLACK_ICE,
  HEAVY_SPARK,
  BURNING_ROOT,
  VOID_RESONANCE,
} = REACTION_IDS;

export const REACTIONS = [
  { id: BUBBLING, name: 'Bubbling' },
  { id: VOLATILE_MIX, name: 'Volatile Mix' },
  { id: SOLAR_FROST, name: 'Solar Frost' },
  { id: ROOTED_STEAM, name: 'Rooted Steam' },
  { id: ASHEN_BLOOM, name: 'Ashen Bloom' },
  { id: ANNIHILATION, name: 'Annihilation' },
  { id: PRESSURE_SPIKE, name: 'Pressure Spike' },
  { id: MAGMA_FLUX, name: 'Magma Flux' },
  { id: DEEP_FREEZE, name: 'Deep Freeze' },
  { id: ARCANE_SATURATION, name: 'Arcane Saturation' },
  { id: STEAM_BURST, name: 'Steam Burst' },
  { id: BLACK_ICE, name: 'Black Ice' },
  { id: HEAVY_SPARK, name: 'Heavy Spark' },
  { id: BURNING_ROOT, name: 'Burning Root' },
  { id: VOID_RESONANCE, name: 'Void Resonance' },
] as const;

export const REACTION_IDS_BY_DIFFICULTY = {
  easy: [],
  medium: [BUBBLING, SOLAR_FROST],
  hard: [VOLATILE_MIX, PRESSURE_SPIKE, DEEP_FREEZE],
} as const;

export const REACTION_COUNT = {
  easy: REACTION_IDS_BY_DIFFICULTY.easy.length,
  medium: REACTION_IDS_BY_DIFFICULTY.medium.length,
  hard: REACTION_IDS_BY_DIFFICULTY.hard.length,
} as const;
