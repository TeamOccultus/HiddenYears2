import { Artifact } from "@starock/artifact";
import { body } from "./ArtifactSlots";

/**
 * 钻石制战士徽章
 */
const diamondBadge = new Artifact(
  "hiddenyears:diamond_badge",
  { translate: "item.hiddenyears:diamond_badge" },
  {
    translate: "item.hiddenyears:diamond_badge.desc",
  },
  body,
  "textures/items/diamond_badge"
);
diamondBadge.onEquip((arg) => {
  arg.source.addEffect("minecraft:health_boost", 12000, { amplifier: 4 });
});
diamondBadge.onUnequip((player) => {
  player.removeEffect("minecraft:health_boost");
})

/**
 * 金制战士徽章
 */
const goldenBadge = new Artifact(
  "hiddenyears:golden_badge",
  { translate: "item.hiddenyears:golden_badge" },
  {
    translate: "item.hiddenyears:golden_badge.desc",
  },
  body,
  "textures/items/golden_badge"
);
goldenBadge.onEquip((arg) => {
  arg.source.addEffect("minecraft:health_boost", 12000, { amplifier: 3 });
});
goldenBadge.onUnequip((player) => {
  player.removeEffect("minecraft:health_boost");
})

/**
 * 铜制战士徽章
 */
const copperBadge = new Artifact(
  "hiddenyears:copper_badge",
  { translate: "item.hiddenyears:copper_badge" },
  {
    translate: "item.hiddenyears:copper_badge.desc",
  },
  body,
  "textures/items/copper_badge"
);
copperBadge.onEquip((arg) => {
  arg.source.addEffect("minecraft:health_boost", 12000, { amplifier: 2 });
});
copperBadge.onUnequip((player) => {
  player.removeEffect("minecraft:health_boost");
})


export { diamondBadge, goldenBadge, copperBadge };
