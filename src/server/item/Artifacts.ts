import { Artifact } from "@starock/artifact";
import { body } from "./ArtifactSlots";
import { Format } from "@starock/format";

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
      { translate: "item.hiddenyears:diamond_badge.usage" },
    ],
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
      { translate: "item.hiddenyears:golden_badge.usage" },
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
      { translate: "item.hiddenyears:copper_badge.usage" },
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

export { diamondBadge, goldenBadge, copperBadge };
