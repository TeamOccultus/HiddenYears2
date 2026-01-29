import { body, feet, hand, head, runes } from "./artifactSlots";
import { EntityDamageCause, ItemStack, Player } from "@minecraft/server";
import { default as crop } from "../../config/crop.json";
import { default as herd } from "../../config/herd.json";
import { Artifact, Format, RandomEvent, Random } from "@occultus/api";

/**
 * 钻石制战士徽章
 */
const diamondBadge = new Artifact(
  "hiddenyears:diamond_badge",
  { translate: "item.hiddenyears:diamond_badge" },

  {
    rawtext: [
      { translate: "item.hiddenyears:diamond_badge.story0" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:diamond_badge.story1" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:diamond_badge.usage" }
    ]
  },
  body,
  "textures/items/diamond_badge"
);
diamondBadge.onEquip((arg) => {
  arg.source.addEffect("minecraft:health_boost", 12000, { amplifier: 4 });
});
diamondBadge.onUnequip((player) => {
  player.removeEffect("minecraft:health_boost");
});

/**
 * 金制战士徽章
 */
const goldenBadge = new Artifact(
  "hiddenyears:golden_badge",
  { translate: "item.hiddenyears:golden_badge" },
  {
    rawtext: [
      { translate: "item.hiddenyears:golden_badge.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:golden_badge.usage" }
    ]
  },
  body,
  "textures/items/golden_badge"
);
goldenBadge.onEquip((arg) => {
  arg.source.addEffect("minecraft:health_boost", 12000, { amplifier: 3 });
});
goldenBadge.onUnequip((player) => {
  player.removeEffect("minecraft:health_boost");
});

/**
 * 铜制战士徽章
 */
const copperBadge = new Artifact(
  "hiddenyears:copper_badge",
  { translate: "item.hiddenyears:copper_badge" },
  {
    rawtext: [
      { translate: "item.hiddenyears:copper_badge.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:copper_badge.usage" }
    ]
  },
  body,
  "textures/items/copper_badge"
);
copperBadge.onEquip((arg) => {
  arg.source.addEffect("minecraft:health_boost", 12000, { amplifier: 2 });
});
copperBadge.onUnequip((player) => {
  player.removeEffect("minecraft:health_boost");
});

const maskOfTheSea = new Artifact(
  "hiddenyears:mask_of_the_sea",
  { translate: "item.hiddenyears:mask_of_the_sea" },
  {
    rawtext: [
      { translate: "item.hiddenyears:mask_of_the_sea.story0" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:mask_of_the_sea.story1" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:mask_of_the_sea.usage" }
    ]
  },
  head,
  "textures/items/mask_of_the_sea"
);
maskOfTheSea.onEquip((arg) => {
  arg.source.addEffect("minecraft:conduit_power", 6000);
});
maskOfTheSea.onUnequip((player) => {
  player.removeEffect("minecraft:conduit_power");
});

const sparklingMask = new Artifact(
  "hiddenyears:sparkling_mask",
  { translate: "item.hiddenyears:sparkling_mask" },
  {
    rawtext: [
      { translate: "item.hiddenyears:sparkling_mask.story0" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:sparkling_mask.story1" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:sparkling_mask.story2" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:sparkling_mask.usage" }
    ]
  },
  head,
  "textures/items/sparkling_mask"
);
sparklingMask.onEquip((arg) => {
  arg.source.addEffect("minecraft:night_vision", 12000);
});
sparklingMask.onUnequip((player) => {
  player.removeEffect("minecraft:night_vision");
});

const soldiersHelmet = new Artifact(
  "hiddenyears:soldiers_helmet",
  { translate: "item.hiddenyears:soldiers_helmet" },
  {
    rawtext: [
      { translate: "item.hiddenyears:soldiers_helmet.story0" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:soldiers_helmet.story1" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:soldiers_helmet.story2" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:soldiers_helmet.story3" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:soldiers_helmet.story4" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:soldiers_helmet.usage" }
    ]
  },
  head,
  "textures/items/soldiers_helmet"
);
soldiersHelmet.onHitEntity((arg) => {
  new RandomEvent(0.35, () => {
    arg.hitEntity.applyDamage(Random.integer(8, 2), {
      cause: EntityDamageCause.none,
      damagingEntity: undefined
    });
    arg.hitEntity.dimension.spawnParticle(
      "minecraft:critical_hit_emitter",
      arg.hitEntity.location
    );
  }).call();
});

const herdersHat = new Artifact(
  "hiddenyears:herders_hat",
  { translate: "item.hiddenyears:herders_hat" },
  {
    rawtext: [
      { translate: "item.hiddenyears:herders_hat.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:herders_hat.usage" }
    ]
  },
  head,
  "textures/items/herders_hat"
);
herdersHat.onHitEntity((arg) => {
  if (!arg.hitEntity.isValid) return;
  if (!herd[arg.hitEntity.typeId]) return;
  new RandomEvent(0.8, () => {
    arg.hitEntity.dimension.spawnItem(
      new ItemStack(herd[arg.hitEntity.typeId]!, Random.integer(4, 2)),
      arg.hitEntity.location
    );
  }).call();
});

const farmersHat = new Artifact(
  "hiddenyears:farmers_hat",
  { translate: "item.hiddenyears:farmers_hat" },
  {
    rawtext: [
      { translate: "item.hiddenyears:farmer_hat.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:farmer_hat.usage" }
    ]
  },
  head,
  "textures/items/farmers_hat"
);
farmersHat.onMineBlock((arg) => {
  const currectId = arg.brokenBlockPermutation.type.id;
  if (!crop[currectId]) return;
  new RandomEvent(0.8, () => {
    arg.block.dimension.spawnItem(
      new ItemStack(crop[currectId]!, Random.integer(4, 2)),
      arg.block.location
    );
  });
});

const invisibleCape = new Artifact(
  "hiddenyears:invisible_cape",
  { translate: "item.hiddenyears:invisible_cape" },
  {
    rawtext: [
      { translate: "item.hiddenyears:invisible_cape.story0" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:invisible_cape.story1" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:invisible_cape.usage" }
    ]
  },
  body,
  "textures/items/invisible_cape"
);
invisibleCape.onEquip((arg) => {
  arg.source.addEffect("minecraft:invisibility", 12000);
});
invisibleCape.onUnequip((player) => {
  player.removeEffect("minecraft:invisibility");
});

const thornsCape = new Artifact(
  "hiddenyears:thorns_cape",
  { translate: "item.hiddenyears:thorns_cape" },
  {
    rawtext: [
      { translate: "item.hiddenyears:thorns_cape.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:thorns_cape.usage" }
    ]
  },
  body,
  "textures/items/thorns_cape"
);
thornsCape.onHurt((arg) => {
  const { cause, damagingEntity } = arg.damageSource;
  if (cause === EntityDamageCause.entityAttack) return;
  if (!damagingEntity) return;
  damagingEntity.applyDamage(arg.damage * 1.2, {
    cause: EntityDamageCause.thorns
  });
  damagingEntity.dimension.spawnParticle(
    "minecraft:critical_hit_emitter",
    damagingEntity.location
  );
});

const fireCape = new Artifact(
  "hiddenyears:fire_cape",
  { translate: "item.hiddenyears:fire_cape" },
  {
    rawtext: [
      { translate: "item.hiddenyears:fire_cape.story0" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:fire_cape.story1" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:fire_cape.story2" },
      { text: Format.newLine },
      { text: "\n\n" },
      { translate: "item.hiddenyears:fire_cape.usage" }
    ]
  },
  body,
  "textures/items/fire_cape"
);
fireCape.onEquip((arg) => {
  arg.source.addEffect("minecraft:fire_resistance", 12000);
});
fireCape.onUnequip((player) => {
  player.removeEffect("minecraft:fire_resistance");
});

const magicFeatherCape = new Artifact(
  "hiddenyears:magic_feather_cape",
  { translate: "item.hiddenyears:magic_feather_cape" },
  {
    rawtext: [
      { translate: "item.hiddenyears:magic_feather_cape.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:magic_feather_cape.usage" }
    ]
  },
  body,
  "textures/items/magic_feather_cape"
);
magicFeatherCape.onEquip((arg) => {
  arg.source.addEffect("minecraft:slow_falling", 12000);
});
magicFeatherCape.onUnequip((player) => {
  player.removeEffect("minecraft:slow_falling");
});

const minersGlove = new Artifact(
  "hiddenyears:miners_glove",
  { translate: "item.hiddenyears:miners_glove" },
  {
    rawtext: [
      { translate: "item.hiddenyears:miners_glove.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:miners_glove.usage" }
    ]
  },
  hand,
  "textures/items/miners_glove"
);
minersGlove.onMineBlock((arg) => {
  arg.player.addEffect("minecraft:haste", 6000);
});

const fightersGlove = new Artifact(
  "hiddenyears:fighters_glove",
  { translate: "item.hiddenyears:fighters_glove" },
  {
    rawtext: [
      { translate: "item.hiddenyears:fighters_glove.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:fighters_glove.usage" }
    ]
  },
  hand,
  "textures/items/fighters_glove"
);
fightersGlove.onHitEntity((arg) => {
  const { hitEntity, damagingEntity } = arg;
  if (!hitEntity.isValid) return;
  hitEntity.applyDamage(Random.integer(12, 10), {
    cause: EntityDamageCause.none
  });
  new RandomEvent(0.8, () => {
    damagingEntity.applyDamage(Random.integer(4, 2), {
      cause: EntityDamageCause.magic
    });
  }).call();
});

const engulfGlove = new Artifact(
  "hiddenyears:engulf_glove",
  { translate: "item.hiddenyears:engulf_glove" },
  {
    rawtext: [
      { translate: "item.hiddenyears:engulf_glove.story0" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:engulf_glove.story1" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:engulf_glove.story2" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:engulf_glove.story3" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:engulf_glove.usage" }
    ]
  },
  hand,
  "textures/items/engulf_glove"
);
engulfGlove.onHitEntity((arg) => {
  const { hitEntity, damagingEntity } = arg;
  if (!damagingEntity.isValid) return;
  const health = damagingEntity.getComponent("health");
  const rand = Random.integer(5, 1);
  if (health.currentValue + rand >= health.effectiveMax) {
    health.setCurrentValue(health.effectiveMax);
    return;
  }
  health.setCurrentValue(health.currentValue + rand);
});

const rubyRing = new Artifact(
  "hiddenyears:ruby_ring",
  { translate: "item.hiddenyears:ruby_ring" },
  {
    rawtext: [
      { translate: "item.hiddenyears:ruby_ring.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:ruby_ring.usage" }
    ]
  },
  hand,
  "textures/items/ruby_ring"
);
rubyRing.onHitEntity((arg) => {
  if (!arg.damagingEntity.isValid) return;
  new RandomEvent(0.8, () => {
    if (!(arg.damagingEntity instanceof Player)) return;
    arg.damagingEntity.addExperience(Random.integer(10, 5));
  });
});

const cursedRing = new Artifact(
  "hiddenyears:cursed_ring",
  { translate: "item.hiddenyears:cursed_ring" },
  {
    rawtext: [
      { translate: "item.hiddenyears:cursed_ring.story0" },
      { text: Format.newLine },
      { translate: "item.hiddenyears:cursed_ring.story1" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:cursed_ring.usage" }
    ]
  },
  hand,
  "textures/items/cursed_ring"
);
cursedRing.onHitEntity((arg) => {
  if (!arg.hitEntity.isValid) return;
  arg.hitEntity.addEffect("minecraft:slowness", 300, { amplifier: 2 });
});

const speedBoots = new Artifact(
  "hiddenyears:speed_boots",
  { translate: "item.hiddenyears:speed_boots" },
  {
    rawtext: [
      { translate: "item.hiddenyears:speed_boots.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:speed_boots.usage" }
    ]
  },
  feet,
  "textures/items/speed_boots"
);
speedBoots.onEquip((arg) => {
  arg.source.addEffect("minecraft:speed", 12000, { amplifier: 2 });
});
speedBoots.onUnequip((player) => {
  player.removeEffect("minecraft:speed");
});

const hareBoots = new Artifact(
  "hiddenyears:hare_boots",
  { translate: "item.hiddenyears:hare_boots" },
  {
    rawtext: [
      { translate: "item.hiddenyears:hare_boots.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:hare_boots.usage" }
    ]
  },
  feet,
  "textures/items/hare_boots"
);
hareBoots.onEquip((arg) => {
  arg.source.addEffect("minecraft:jump_boost", 12000, { amplifier: 2 });
});
hareBoots.onUnequip((player) => {
  player.removeEffect("minecraft:jump_boost");
});

const crucifixRunes = new Artifact(
  "hiddenyears:crucifix_runes",
  { translate: "item.hiddenyears:crucifix_runes" },
  {
    rawtext: [
      { translate: "item.hiddenyears:crucifix_runes.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:crucifix_runes.usage" }
    ]
  },
  runes,
  "textures/items/crucifix_runes"
);
crucifixRunes.onHurt((arg) => {
  if (!arg.hurtEntity.isValid) return;
  const health = arg.hurtEntity.getComponent("health");
  if (health.currentValue <= 5) {
    health.setCurrentValue(health.effectiveMax);
    return;
  }
  new RandomEvent(0.15, () => {
    health.setCurrentValue(health.effectiveMax);
  });
});

const gluttonousRunes = new Artifact(
  "hiddenyears:gluttonous_runes",
  { translate: "item.hiddenyears:gluttonous_runes" },
  {
    rawtext: [
      { translate: "item.hiddenyears:gluttonous_runes.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:gluttonous_runes.usage" }
    ]
  },
  runes,
  "textures/items/gluttonous_runes"
);
gluttonousRunes.onEquip((arg) => {
  arg.source.addEffect("minecraft:strength", 18000, { amplifier: 4 });
  arg.source.addEffect("minecraft:hunger", 24000, { amplifier: 2 });
});
gluttonousRunes.onUnequip((player) => {
  player.removeEffect("minecraft:strength");
});

const imprisonedWing = new Artifact(
  "hiddenyears:imprisoned_wing",
  { translate: "item.hiddenyears:imprisoned_wing" },
  {
    rawtext: [
      { translate: "item.hiddenyears:imprisoned_wing.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:imprisoned_wing.usage" }
    ]
  },
  runes,
  "textures/items/imprisoned_wing"
);
imprisonedWing.onHitEntity((arg) => {
  arg.damagingEntity.addTag("hiddenyears:imprisoned_wing");
  arg.damagingEntity.dimension
    .getEntities({
      location: arg.damagingEntity.location,
      maxDistance: 10,
      excludeFamilies: ["boss"]
    })
    .forEach((entity) => {
      if (!entity.hasTag("hiddenyears:imprisoned_wing")) return;
      if (!entity.isValid) return;
      entity.applyDamage(Random.integer(12, 8), {
        cause: EntityDamageCause.void
      });
      entity.dimension.spawnParticle(
        "dragon_breath_lingering",
        entity.location
      );
    });
  arg.damagingEntity.removeTag("hiddenyears:imprisoned_wing");
});

const rubyRunes = new Artifact(
  "hiddenyears:ruby_runes",
  { translate: "item.hiddenyears:ruby_runes" },
  {
    rawtext: [
      { translate: "item.hiddenyears:ruby_runes.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:ruby_runes.usage" }
    ]
  },
  runes,
  "textures/items/ruby_runes"
);
rubyRunes.onEquip((arg) => {
  arg.source.addEffect("minecraft:fire_resistance", 12000, { amplifier: 0 });
  arg.source.addEffect("minecraft:resistance", 12000, { amplifier: 2 });
});
rubyRunes.onUnequip((player) => {
  player.removeEffect("minecraft:fire_resistance");
  player.removeEffect("minecraft:resistance");
});

const sandRunes = new Artifact(
  "hiddenyears:sand_runes",
  { translate: "item.hiddenyears:sand_runes" },
  {
    rawtext: [
      { translate: "item.hiddenyears:sand_runes.story" },
      { text: "\n\n" },
      { translate: "item.hiddenyears:sand_runes.usage" }
    ]
  },
  runes,
  "textures/items/sand_runes"
);
sandRunes.onEquip((arg) => {});
sandRunes.onUnequip((player) => {});

export const artifacts = [
  diamondBadge,
  goldenBadge,
  copperBadge,
  maskOfTheSea,
  sparklingMask,
  soldiersHelmet,
  herdersHat,
  farmersHat,
  invisibleCape,
  thornsCape,
  fireCape,
  magicFeatherCape,
  minersGlove,
  fightersGlove,
  engulfGlove,
  rubyRing,
  cursedRing,
  speedBoots,
  hareBoots,
  crucifixRunes,
  imprisonedWing,
  rubyRunes,
  sandRunes
];
