import * as C from '@constants';
import type { cauldronValuesType as Values, IngredientType, IReaction, ReactionId } from '@types';

const R = C.REACTION_IDS;
const I = C.INGREDIENT_IDS;

const has = (list: IngredientType[], ...ids: string[]) =>
  ids.every((id) => list.some((item) => item.id === id));

const pct = (value: number, percent: number) => Math.round(value * (1 + percent / 100));
const patch = (v: Values, changes: Partial<Values>): Values => ({ ...v, ...changes });

export const REACTION_TABLE: IReaction[] = [
  {
    id: R.BUBBLING,
    type: 'ingredients',
    isActive: (ings) => has(ings, I.FAIRY_DUST, I.CAUSTIC_ACID),
    applyValues: (v) => patch(v, { magicPower: pct(v.magicPower, 50) }),
    effect: { timeDelta: -10 },
  },
  {
    id: R.VOLATILE_MIX,
    type: 'ingredients',
    isActive: (ingS) => has(ingS, I.PHOENIX_FEATHER, I.ESSENCE_VOID),
    applyValues: (v) => v,
    effect: { lifeDelta: -1, clearCauldron: true },
  },
  {
    id: R.SOLAR_FROST,
    type: 'ingredients',
    isActive: (ingS) => has(ingS, I.DRAGON_TEARS, I.FROST_LOTUS),
    applyValues: (v) => patch(v, { temperature: 0, density: pct(v.density, 20) }),
  },
  {
    id: R.ROOTED_STEAM,
    type: 'ingredients',
    isActive: (ingS) => has(ingS, I.MANDRAKE_ROOT, I.TOAD_SLIME),
    applyValues: (v) =>
      patch(v, { density: pct(v.density, 25), magicPower: pct(v.magicPower, -10) }),
  },
  {
    id: R.ASHEN_BLOOM,
    type: 'ingredients',
    isActive: (ingS) => has(ingS, I.PHOENIX_FEATHER, I.FAIRY_DUST),
    applyValues: (v) =>
      patch(v, { temperature: v.temperature + 10, magicPower: pct(v.magicPower, 25) }),
  },
  {
    id: R.ANNIHILATION,
    type: 'stats',
    isActive: (ingS) =>
      ingS.some((i) => i.temperature > 15) && ingS.some((i) => i.temperature < -15),
    applyValues: (v) => patch(v, { temperature: 0, density: v.density * 2 }),
  },
  {
    id: R.PRESSURE_SPIKE,
    type: 'stats',
    isActive: (_, t) => t.density >= 70,
    applyValues: (v) => patch(v, { density: 70, magicPower: pct(v.magicPower, 10) }),
  },
  {
    id: R.MAGMA_FLUX,
    type: 'stats',
    isActive: (_, t) => t.temperature >= 60,
    applyValues: (v) =>
      patch(v, { magicPower: pct(v.magicPower, 20), density: pct(v.density, -10) }),
  },
  {
    id: R.DEEP_FREEZE,
    type: 'stats',
    isActive: (_, t) => t.temperature <= -20,
    applyValues: (v) =>
      patch(v, { density: pct(v.density, 15), magicPower: pct(v.magicPower, -15) }),
  },
  {
    id: R.ARCANE_SATURATION,
    type: 'stats',
    isActive: (_, t) => t.magicPower >= 80,
    applyValues: (v) => patch(v, { magicPower: 80, temperature: v.temperature + 5 }),
  },
  {
    id: R.STEAM_BURST,
    type: 'mix',
    isActive: (ings, t) => has(ings, I.DRAGON_TEARS, I.CAUSTIC_ACID) && t.temperature >= 35,
    applyValues: (v) => patch(v, { temperature: v.temperature + 10 }),
    effect: { timeDelta: -5 },
  },
  {
    id: R.blaCK_ICE,
    type: 'mix',
    isActive: (ings, t) => has(ings, I.FROST_LOTUS, I.ESSENCE_VOID) && t.density <= 0,
    applyValues: (v) =>
      patch(v, { temperature: v.temperature - 10, magicPower: pct(v.magicPower, 20) }),
  },
  {
    id: R.HEAVY_SPARK,
    type: 'mix',
    isActive: (ings, t) => has(ings, I.FAIRY_DUST, I.TOAD_SLIME) && t.density >= 40,
    applyValues: (v) =>
      patch(v, { density: pct(v.density, 20), magicPower: pct(v.magicPower, 10) }),
  },
  {
    id: R.BURNING_ROOT,
    type: 'mix',
    isActive: (ings, t) => has(ings, I.MANDRAKE_ROOT, I.PHOENIX_FEATHER) && t.temperature >= 40,
    applyValues: (v) => patch(v, { temperature: v.temperature + 15, density: pct(v.density, -10) }),
  },
  {
    id: R.VOID_RESONANCE,
    type: 'mix',
    isActive: (ings, t) => has(ings, I.ESSENCE_VOID, I.DRAGON_TEARS) && t.magicPower >= 50,
    applyValues: (v) =>
      patch(v, { magicPower: pct(v.magicPower, 30), temperature: v.temperature - 5 }),
  },
];

export const getReactionName = (id: ReactionId): string =>
  C.REACTIONS.find((reaction) => reaction.id === id)?.name ?? id;

export type ReactionResult = {
  values: Values;
  active: ReactionId[];
  fired: IReaction[];
};

export const sumIngredients = (ingredients: IngredientType[]): Values =>
  ingredients.reduce<Values>(
    (acc, item) => ({
      temperature: acc.temperature + item.temperature,
      density: acc.density + item.density,
      magicPower: acc.magicPower + item.magicPower,
    }),
    { temperature: 0, density: 0, magicPower: 0 },
  );

export const evaluateReactions = (
  ingredients: IngredientType[],
  enabledIds: ReactionId[],
  previousActive: ReactionId[],
): ReactionResult => {
  const raw = sumIngredients(ingredients);

  const activeReactions = REACTION_TABLE.filter(
    (reaction) => enabledIds.includes(reaction.id) && reaction.isActive(ingredients, raw),
  );

  const values = activeReactions.reduce((acc, reaction) => reaction.applyValues(acc), raw);

  const fired = activeReactions.filter((reaction) => !previousActive.includes(reaction.id));

  return { values, active: activeReactions.map(({ id }) => id), fired };
};
