import { ItemStack, world } from "@minecraft/server";

/**
 * 注册自定义战利品表
 */
export function registryLoot() {
  world.afterEvents.entityDie.subscribe((event) => {
    const entity = event.deadEntity;
    const bundle = new ItemStack("hy:trophy_bundle");
    switch (entity.typeId) {
      case "minecraft:allay":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/allay");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:axolotl":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/axolotl");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:bat":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/bat");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:bee":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/bee");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:blaze":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/blaze");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:camel":
      case "minecraft:llama":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/camel");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:cat":
      case "minecraft:ocelot":  
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/cat");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:spider":
      case "minecraft:cave_spider":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/spider");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:chicken":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/chicken");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:cow":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/cow");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:creeper":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/creeper");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:dolphin":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/dolphin");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:donkey":
      case "minecraft:horse":
      case "minecraft:mule":  
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/donkey");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:zombie":
      case "minecraft:zombie_villager_v2":
      case "minecraft:husk":
      case "minecraft:drowned":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/zombie");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:elder_guardian":
        bundle.setDynamicProperty(
          "hy:loot_table",
          "gameplay/bundles/elder_guardian"
        );
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:enderman":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/enderman");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:endermite":
        bundle.setDynamicProperty(
          "hy:loot_table",
          "gameplay/bundles/endermite"
        );
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:evocation_illager":
        bundle.setDynamicProperty(
          "hy:loot_table",
          "gameplay/bundles/evocation_illager"
        );
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:fish":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/fish");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:fox":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/fox");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:frog":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/frog");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:ghast":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/ghast");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:glow_squid":
      case "minecraft:squid":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/squid");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:goat":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/goat");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:guardian":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/guardian");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:hoglin":
      case "minecraft:zoglin":
        bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/hoglin");
        entity.dimension.spawnItem(bundle, entity.location);
        break;
      case "minecraft:magma_cube":
        bundle.setDynamicProperty(
          "hy:loot_table",
          "gameplay/bundles/magma_cube"
        );
        entity.dimension.spawnItem(bundle, entity.location);
        break;
        case "minecraft:mooshroom":
          bundle.setDynamicProperty("hy:loot_table", "gameplay/bundles/mooshroom");
          entity.dimension.spawnItem(bundle, entity.location);
          break;  
      default:
        break;
    }
  });
}
