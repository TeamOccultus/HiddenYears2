import { utils } from "project-lantern";
import { ClassicQuestAPI as quest } from "project-lantern";
import {
  ItemStack,
  Entity,
  Player,
  world,
  EquipmentSlot,
  EntityQueryOptions,
  system,
} from "@minecraft/server";
import {
  HyCorrosionMap,
  HyLetterTitle,
  HyLetterBody,
  HyRewardTypes,
} from "../data/data.js";
import * as quests from "../data/quests.js";

/**
 * 为物品消耗耐久值
 * @param itemStack 要消耗耐久的物品
 * @param value 要消耗的耐久值
 * @param entity 破坏工具的生物
 * @returns 消耗耐久值完毕的物品
 */
function consumeDurabilityMixed(
  itemStack: ItemStack,
  value: number,
  entity?: Entity
): ItemStack | undefined {
  let durability = itemStack.getComponent("minecraft:durability");
  if (durability === undefined) return itemStack;
  if (durability.damage + value >= durability.maxDurability) {
    if (itemStack.hasTag("hy:corrosive_tools")) {
      //@ts-ignore
      return HyCorrosionMap[itemStack.typeId.replace("hy:", "")];
    }
    if (entity instanceof Player) {
      entity.playSound("random.break");
    }
    return undefined;
  } else {
    durability.damage += value;
    return itemStack;
  }
}

/**
 * 造成仿制伤害
 * @param entity 使用了仿制工具的实体
 */
function applyImitationDamage(entity: Entity): void {
  switch (utils.randomInteger(10)) {
    case 1:
      entity?.applyDamage(2);
      if (entity instanceof Player) {
        entity?.sendMessage([{ translate: "hy.message.imitation_damage.1" }]);
      }
      break;
    case 2:
      entity?.applyDamage(8);
      if (entity instanceof Player) {
        entity?.sendMessage([{ translate: "hy.message.imitation_damage.2" }]);
      }
      break;
    default:
      break;
  }
}

/**
 * 注册任务书
 */
export function questRegister() {
  const QUEST_BOOK1 = new quest.QuestBook(
    "hy:quest_book1",
    { translate: "hy.quest.title2" },
    { translate: "hy.quest.body2" },
    { quests: [quests.COPPER_APPLE, quests.METAL_STAR, quests.COPPER_ESSENCE] }
  );
  const QUEST_BOOK = new quest.QuestBook(
    "hy:quest_book",
    { translate: "hy.quest.title1" },
    { translate: "hy.quest.body1" },
    {
      quests: [
        quests.BEGGING,
        quests.OVER_METAL_INGOT,
        quests.IRON_INGOT,
        quests.COPPER_INGOT,
        quests.IRON_HAMMER,
        quests.IRON_CROWBAR,
        quests.IRON_KNIFE,
        quests.IRON_DAGGER,
        quests.IRON_SWORD,
        quests.FUEL_METAL,
        quests.NIGHTMARE_FUEL_METAL,
        quests.SUFFERING_SWORD,
        quests.STEEL_INGOT,
        quests.TOTEM,
        quests.RUBY,
        quests.RUBY_CHESTPLATE,
        quests.RUBY_BAG,
        quests.RUBY_RUNES,
        quests.OBSIDIAN,
        quests.GOLD_INGOT,
        quests.GHAST_TEAR,
        quests.NETHERITE_SCRAP,
        quests.BLAZE_ROD,
        quests.ENDER_PEARL,
        quests.DRAGON_BREATH,
        quests.DRAGON_EGG,
        quests.LODESTONE,
        quests.RESPAWN_ANCHOR,
        quests.NETHER_STAR,
      ],
    }
  );
  const LETTER_0 = new quest.QuestBook(
    `hy:letter_0`,
    HyLetterTitle[0],
    HyLetterBody[0],
    { quests: [quests.STORY_BOOK, quests.LETTER_0, quests.LETTER_11] }
  );
}

/**
 * 监听物品耐久事件
 * @todo 用PLT框架实现这个功能
 */
export function itemDurabilityMonitor() {
  world.afterEvents.playerBreakBlock.subscribe((event) => {
    const ENTITY = event.player;
    let ITEM = utils.getEquipmentItem(ENTITY);
    if (ITEM?.hasTag("hy:custom_tools")) {
      const NEW_ITEM = consumeDurabilityMixed(ITEM, 1, ENTITY);
      ENTITY?.getComponent("minecraft:equippable")?.setEquipment(
        EquipmentSlot.Mainhand,
        NEW_ITEM
      );
    } else if (ITEM?.hasTag("hy:custom_weapons")) {
      const NEW_ITEM = consumeDurabilityMixed(ITEM, 2, ENTITY);
      ENTITY?.getComponent("minecraft:equippable")?.setEquipment(
        EquipmentSlot.Mainhand,
        NEW_ITEM
      );
    }
    if (ITEM?.hasTag("hy:imitation_tools")) {
      applyImitationDamage(ENTITY);
    }
  });
  world.afterEvents.entityHitEntity.subscribe((event) => {
    const ENTITY = event.damagingEntity;
    let ITEM = utils.getEquipmentItem(event.damagingEntity);
    if (ITEM?.hasTag("hy:custom_weapons")) {
      const NEW_ITEM = consumeDurabilityMixed(ITEM, 1);
      ENTITY?.getComponent("minecraft:equippable")?.setEquipment(
        EquipmentSlot.Mainhand,
        NEW_ITEM
      );
    }
    if (ITEM?.hasTag("hy:custom_tools")) {
      const NEW_ITEM = consumeDurabilityMixed(ITEM, 2);
      ENTITY?.getComponent("minecraft:equippable")?.setEquipment(
        EquipmentSlot.Mainhand,
        NEW_ITEM
      );
    }
    if (ITEM?.hasTag("hy:imitation_tools")) {
      applyImitationDamage(ENTITY);
    }
  });
}

/**
 * 监听物品使用事件
 */
export function itemUseMonitor() {
  /** 范围伤害 */
  world.afterEvents.itemUse.subscribe((event) => {
    const PLAYER = event.source;
    const ITEM = event.itemStack;
    /** 破伤风伤害 */
    if (ITEM.hasTag("hy:tetanus_item")) {
      PLAYER.addTag("hy.tetanus_attacker");
      const TETANUS_OPINION: EntityQueryOptions = {
        location: PLAYER.location,
        maxDistance: 4,
        excludeTags: ["hy.tetanus_attacker"],
        excludeFamilies: ["noaoe"],
      };
      utils.affectEntities(PLAYER.dimension, TETANUS_OPINION, "poison", 300);
      utils.affectEntities(PLAYER.dimension, TETANUS_OPINION, "nausea", 600, {
        amplifier: 1,
      });
      utils.affectEntities(PLAYER.dimension, TETANUS_OPINION, "wither", 6);
      PLAYER.removeTag("hy.tetanus_attacker");
    }
    /** 法器相关
     * 通过`hy:magic_explode`来使一个物品可以进行法术爆发/精通
     * 法术爆发/精通的实现
     * 法术爆发是指在限定范围内(12格)对所有生物造成限定伤害(10点)
     * 法术精通是指在更远的范围内(20格)对精通的生物造成限定伤害(8点) 并给予其虚弱15s
     * 法术精通与爆发同时进行 需要玩家有1级经验
     * 每次爆发消耗1耐久、15经验 并且有类型为`hy.magic_explode`的5秒冷却
     * 爆发开始后5秒内玩家不受任何原因的爆发伤害
     */
    if (
      ITEM.hasTag("hy:magic_explode") &&
      ITEM?.getComponent("cooldown").cooldownTicks !== 0
    ) {
      if (PLAYER.level > 1) {
        PLAYER.addTag("hy.magic_explode");
        const NEW_ITEM = consumeDurabilityMixed(ITEM, 1, PLAYER);
        PLAYER.getComponent("minecraft:equippable")?.setEquipment(
          EquipmentSlot.Mainhand,
          NEW_ITEM
        );
        PLAYER.addLevels(-1);
        const ALL_OPTION: EntityQueryOptions = {
          location: PLAYER.location,
          maxDistance: 10,
          excludeTags: ["hy.magic_explode"],
          excludeFamilies: ["noaoe"],
        };
        utils.damageEntities(PLAYER.dimension, ALL_OPTION, 10);
        switch (ITEM.typeId) {
          case "hy:diamond_bone":
          case "hy:gold_bone":
          case "hy:iron_bone":
            const SKELETON_OPINION: EntityQueryOptions = {
              location: PLAYER.location,
              maxDistance: 18,
              families: ["skeleton"],
            };
            utils.damageEntities(PLAYER.dimension, SKELETON_OPINION, 8);
            utils.affectEntities(
              PLAYER.dimension,
              SKELETON_OPINION,
              "weakness",
              300
            );
            break;
          case "hy:flash_metal_boardsword":
            utils.damageEntities(PLAYER.dimension, ALL_OPTION, 8);
            utils.affectEntities(PLAYER.dimension, ALL_OPTION, "weakness", 300);
            break;
          case "hy:corrosion_boardsword":
            const UNDEAD_OPINION: EntityQueryOptions = {
              location: PLAYER.location,
              maxDistance: 18,
              families: ["undead"],
            };
            utils.damageEntities(PLAYER.dimension, UNDEAD_OPINION, 8);
            utils.affectEntities(
              PLAYER.dimension,
              UNDEAD_OPINION,
              "weakness",
              300
            );
            break;
          case "hy:emerald_boardsword":
            const ILLAGER_OPINION: EntityQueryOptions = {
              location: PLAYER.location,
              maxDistance: 18,
              families: ["illager"],
            };
            utils.damageEntities(PLAYER.dimension, ILLAGER_OPINION, 8);
            utils.affectEntities(
              PLAYER.dimension,
              ILLAGER_OPINION,
              "weakness",
              300
            );
            break;
          case "hy:flash_copper_boardsword":
            const ARTHROPOD_OPINION: EntityQueryOptions = {
              location: PLAYER.location,
              maxDistance: 18,
              families: ["arthropod"],
            };
            utils.damageEntities(PLAYER.dimension, ARTHROPOD_OPINION, 8);
            utils.affectEntities(
              PLAYER.dimension,
              ARTHROPOD_OPINION,
              "weakness",
              300
            );
            break;
          case "hy:amethyst_boardsword":
            const POULTRY_OPINION: EntityQueryOptions = {
              location: PLAYER.location,
              maxDistance: 18,
              families: ["poultry"],
            };
            utils.damageEntities(PLAYER.dimension, POULTRY_OPINION, 8);
            utils.affectEntities(
              PLAYER.dimension,
              POULTRY_OPINION,
              "weakness",
              300
            );
            break;
          case "hy:ruby_boardsword":
            const RUBY_OPINION: EntityQueryOptions = {
              location: PLAYER.location,
              maxDistance: 18,
              families: ["ruby"],
            };
            utils.damageEntities(PLAYER.dimension, RUBY_OPINION, 8);
            utils.affectEntities(
              PLAYER.dimension,
              RUBY_OPINION,
              "weakness",
              300
            );
            break;
          default:
            break;
        }
        system.runTimeout(() => {
          PLAYER.removeTag("hy.magic_explode");
        }, 100);
      } else {
        PLAYER.sendMessage([{ translate: "hy.message.no_exp" }]);
      }
    }
  });
  /** 道具相关
   * 为物品添加`hy:single_use`设置为只能使用一次的物品 */
  world.afterEvents.itemUse.subscribe((event) => {
    const ITEM: ItemStack = event.itemStack;
    const PLAYER: Player = event.source;
    if (ITEM.hasTag("hy:single_use")) {
      PLAYER?.getComponent("minecraft:equippable")?.setEquipment(
        EquipmentSlot.Mainhand,
        undefined
      );
      /** 在这下面添加物品的使用效果 */
      switch (ITEM.typeId) {
        case "hy:soul_letter_sprite":
          PLAYER.dimension.spawnEntity("hy:sprite", PLAYER.location);
          break;
        case "hy:ruby_bag":
          switch (utils.randomInteger(10)) {
            case 1:
            case 2:
              PLAYER.dimension.spawnItem(
                HyRewardTypes.diamondBlock,
                PLAYER.location
              );
              break;
            case 3:
            case 4:
            case 5:
              PLAYER.dimension.spawnItem(
                HyRewardTypes.goldBlock,
                PLAYER.location
              );
              break;
            case 6:
              PLAYER.dimension.spawnItem(HyRewardTypes.scrap, PLAYER.location);
              break;
            case 7:
              PLAYER.dimension.spawnItem(
                HyRewardTypes.template,
                PLAYER.location
              );
              break;
            default:
              PLAYER.dimension.spawnItem(HyRewardTypes.apple, PLAYER.location);
          }
          break;
        case "hy:experience_calamity_bag":
          PLAYER.dimension.spawnEntity("hy:king_of_ruby", PLAYER.location);
          break;
        case "hy:ruby_runes":
          PLAYER.addLevels(utils.getRandomChance());
          PLAYER.playSound("random.orb");
          PLAYER.addEffect("fire_resistance", 1200);
          PLAYER.addEffect("resistance", 1200);
          break;
        case "hy:copper_badge":
          PLAYER.addEffect("health_boost", 300, {
            amplifier: 2,
          });
          break;
        case "hy:diamond_badge":
          PLAYER.addEffect("health_boost", 900, {
            amplifier: 4,
          });
          break;
        case "hy:golden_badge":
          PLAYER.addEffect("health_boost", 600, {
            amplifier: 4,
          });
          break;
        default:
          break;
      }
    }
  });
  /** 道具相关
   * 为物品添加`hy:durability_use`设置为由耐久值控制使用次数的物品 */
  world.afterEvents.itemUse.subscribe((event) => {
    const ITEM: ItemStack = event.itemStack;
    const PLAYER: Player = event.source;
    if (ITEM.hasTag("hy:durability_use")) {
      const NEW_ITEM = consumeDurabilityMixed(ITEM, 1, PLAYER);
      PLAYER?.getComponent("minecraft:equippable")?.setEquipment(
        EquipmentSlot.Mainhand,
        NEW_ITEM
      );
      /** 在这下面添加物品的使用效果 */
      switch (ITEM.typeId) {
        case "hy:bandage":
          PLAYER.addEffect("regeneration", 1200);
          PLAYER.addEffect("resistance", 600);
          PLAYER.addEffect("instant_health", 5);
          PLAYER.playSound("use.cloth");
          break;
        case "hy:medicine_pack":
          PLAYER.addEffect("regeneration", 1200);
          PLAYER.addEffect("resistance", 600);
          PLAYER.addEffect("fire_resistance", 600);
          PLAYER.addEffect("instant_health", 10);
          PLAYER.playSound("use.cloth");
          break;
        case "hy:copper_horn":
          PLAYER.addTag("hy.horn_user");
          const HORN_OPINION: EntityQueryOptions = {
            location: PLAYER.location,
            maxDistance: 20,
            excludeTags: ["hy.horn_user"],
            excludeFamilies: ["noaoe"],
          };
          if (PLAYER.isSneaking) {
            world.playSound("copper_horn.sneak", PLAYER.location);
            utils.affectEntities(
              PLAYER.dimension,
              HORN_OPINION,
              "slowness",
              300,
              {
                amplifier: 2,
              }
            );
            PLAYER.removeEffect("slowness");
            PLAYER.addEffect("speed", 300, {
              amplifier: 2,
            });
          } else {
            world.playSound("copper_horn.walk", PLAYER.location);
            utils.affectEntities(PLAYER.dimension, HORN_OPINION, "speed", 300, {
              amplifier: 2,
            });
            PLAYER.removeEffect("speed");
            PLAYER.addEffect("slowness", 300, {
              amplifier: 2,
            });
          }
          break;
        default:
          break;
      }
    }
  });
  /** 监听食物的食用 */
  world.afterEvents.itemCompleteUse.subscribe((event) => {
    const ITEM: ItemStack = event.itemStack;
    const PLAYER: Player = event.source;
    /** 用`hy:copper_foods`来标记一个物品为铜食物，并统计其食用次数
     * 铜食物食用12次后会中毒
     */
    if (ITEM.hasTag("hy:copper_foods")) {
      let eatFrequency = PLAYER.getDynamicProperty("hy:copper_foods") as number;
      if (eatFrequency === undefined)
        PLAYER.setDynamicProperty("hy:copper_foods", 0);
      PLAYER.setDynamicProperty("hy:copper_foods", eatFrequency++);
      if (eatFrequency > 12) {
        PLAYER.addEffect("poison", 100);
        PLAYER.setDynamicProperty("hy:copper_foods", 0);
      }
    }
    switch (ITEM.typeId) {
      case "hy:honey_candy":
        PLAYER.addEffect("saturation", 600);
        break;
      case "hy:syrup":
        PLAYER.addEffect("fire_resistance", 160);
        break;
      case "hy:chocolate_paste":
        PLAYER.addEffect("fire_resistance", 900);
        break;
      case "hy:milk_chocolate":
        utils.clearEffect(PLAYER, "all");
        break;
      case "hy:sweet_berry_chocolate":
        PLAYER.addEffect("instant_health", 1, {
          amplifier: 1,
        });
        break;
      case "hy:amethyst_chocolate":
        PLAYER.addLevels(2);
        break;
      case "hy:marshmallow":
        if (utils.getRandomChance() > 5) {
          PLAYER.addEffect("levitation", 100);
        }
        break;
      case "hy:sweet_berry_marshmallow":
        PLAYER.addEffect("instant_health", 1);
        break;
      case "hy:amethyst_marshmallow":
        PLAYER.addLevels(3);
        break;
      case "hy:medicine_1":
        PLAYER.removeEffect("nausea");
        PLAYER.removeEffect("hunger");
        PLAYER.addEffect("saturation", 400);
        break;
      case "hy:medicine_2":
        utils.clearEffect(PLAYER, "bad");
        break;
      case "hy:medicine_3":
        PLAYER.removeEffect("darkness");
        PLAYER.removeEffect("blindness");
        PLAYER.addEffect("night_vision", 400);
        break;
      case "hy:medicine_4":
        PLAYER.addEffect("darkness", 600);
        PLAYER.addEffect("blindness", 600);
        PLAYER.removeEffect("night_vision");
        break;
      case "hy:medicine_5":
        PLAYER.removeEffect("wither");
        PLAYER.removeEffect("poison");
        PLAYER.removeEffect("fatal_poison");
        PLAYER.addEffect("absorption", 400);
        break;
      case "hy:medicine_6":
        PLAYER.removeEffect("weakness");
        PLAYER.addEffect("strength", 400);
        break;
      case "hy:medicine_7":
        PLAYER.removeEffect("slowness");
        PLAYER.addEffect("speed", 600);
        break;
      case "hy:medicine_8":
        PLAYER.removeEffect("slowness");
        PLAYER.addEffect("jump_boost", 600);
        break;
      case "hy:medicine_9":
        PLAYER.addEffect("poison", 400);
        PLAYER.addEffect("slowness", 400);
        PLAYER.addEffect("weakness", 400);
        break;
      case "hy:medicine_10":
        PLAYER.kill();
        break;
      case "hy:medicine_11":
        utils.clearEffect(PLAYER, "good");
        break;
      case "hy:medicine_12":
        PLAYER.removeEffect("bad_omen");
        PLAYER.addEffect("village_hero", 3000);
        break;
      case "hy:medicine_13":
        PLAYER.removeEffect("mining_fatigue");
        PLAYER.addEffect("water_breathing", 200);
        break;
      case "hy:medicine_14":
        PLAYER.addEffect("fire_resistance", 400);
        break;
      case "hy:medicine_15":
        PLAYER.addEffect("health_boost", 6000);
        break;
      case "hy:ruby_apple":
        PLAYER.addExperience(3);
        world.playSound("random.orb", PLAYER.location);
        break;
      case "hy:copper_apple":
        PLAYER.addEffect("absorption", 600);
        PLAYER.addEffect("fire_resistance", 200);
        break;
      case "hy:enchanted_copper_apple":
        PLAYER.addEffect("absorption", 1200);
        PLAYER.addEffect("fire_resistance", 1200);
        PLAYER.addEffect("speed", 200);
        break;
      case "hy:fuel_metal":
        world.sendMessage([{ translate: "hy.message.fuel_metal" }]);
        PLAYER.addEffect("fatal_poison", 1200);
        break;
      case "hy:mineral_fuel_metal":
        PLAYER.dimension.spawnItem(
          HyRewardTypes.nightmareFuel,
          PLAYER.location
        );
        PLAYER.addEffect("fatal_poison", 800, {
          amplifier: 1,
        });
        break;
      case "hy:fuel_metal_stick":
        PLAYER.applyDamage(2);
        break;
      case "hy:bark":
        PLAYER.sendMessage([{ translate: "hy.message.eat_bark" }]);
        break;
      default:
        break;
    }
  });
}
