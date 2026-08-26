/**
 * @module server/registry/component
 * @category Registry Bus
 */
import {
  BlockRegistries,
  BlockWithDestroyCondition,
  FoodMaterial,
  InteractableBlock,
  ItemRegistries,
  JobSkillComponent,
  OreBlock,
  ToolMaterial,
  WeaponMaterial
} from "@occultus/api";
import { OreTypeComponent } from "../components/OreTypeComponent/Component";
import { ToolTypeComponent } from "../components/ToolTypeComponent/Component";
import { WeaponTypeComponent } from "../components/WeaponTypeComponent/Component";
import { CrossbowComponent } from "../components/CrossbowComponent";
import { ArrowPresentComponent } from "../components/ArrowPresentComponent/Component";
import { TrophyBundleComponent } from "../components/TrophyBundleComponent/Component";
import { CoinComponent } from "../components/CoinComponent/Component";
import { ExpFoodComponent } from "../components/ExpFoodComponent/Component";
import { FrameActiverComponent } from "../components/FrameActiverComponent/Component";
import { VaultComponent } from "../components/VaultComponent/Component";
import { BossSpawnerComponent } from "../components/BossSpawnerComponent/Component";
import { HiddenEffectFoodComponent } from "../components/HiddenEffectFoodComponent/Component";
import { BlessingComponent } from "../components/BlessingComponent";
import { StaffComponent } from "../components/StaffComponent/Component";
import { JobComponent } from "../components/JobOfferComponent/Component";
import { TrialStoneComponent } from "../components/TrialStoneComponent/Component";
import { ArmorTypeComponent } from "../components/ArmorTypeComponent/Component";
import { ComplexPotionComponent } from "../components/ComplexPotionComponent/Component";
import { ReturnGemComponent } from "../components/ReturnGemComponent/Component";
import { ProfileComponent } from "../components/ProfileComponent/Component";
import { SpecificDamageComponent } from "../components/SpecificDamageComponent/Component";
import { StructurePlacerComponent } from "../components/StructurePlacerComponent/Component";
import { JobRecoveryComponent } from "../components/JobRecoveryComponent/Component";
import { NowPlayingComponent } from "../components/NowPlayingComponent/Component";
import { StructureLocatorComponent } from "../components/StructureLocatorComponent/Component";
import { DeprecatedGameplayComponent } from "../components/DeprecatedGameplayComponent/Component";
import { LocatorBarComponent } from "../components/LocatorBarComponent/Component";
import { DimensionTeleporterComponent } from "../components/DimensionTeleporterComponent/Component";
import { IphonComponent } from "../components/IphonComponent/Component";
import { LoreComponent } from "../components/LoreComponent/Component";
import { EggBlockComponent } from "../components/EggBlockComponent/Component";
import { FlowerComponent } from "../components/FlowerComponent/Component";
import { EggEmbryoBlockComponent } from "../components/EggEmbryoBlock";
import { MagicEnergyComponent } from "../components/MagicEnergyComponent/Component";

/**
 * 注册自定义组件
 */
export function registerCustomComponents() {
  const [item, block] = [new ItemRegistries(), new BlockRegistries()];
  new OreTypeComponent("hiddenyears:ore_type");
  new ToolTypeComponent("hiddenyears:tool_type");
  new WeaponTypeComponent("hiddenyears:weapon_type");
  new CrossbowComponent("hiddenyears:custom_crossbow");
  new ArrowPresentComponent("hiddenyears:arrow_present");
  new TrophyBundleComponent("hiddenyears:trophy_bundle");
  new ExpFoodComponent("hiddenyears:exp_food");
  new CoinComponent("hiddenyears:coin");
  new VaultComponent("hiddenyears:vault");
  new BossSpawnerComponent("hiddenyears:boss_spawner");
  new FrameActiverComponent("hiddenyears:frame_activer");
  new HiddenEffectFoodComponent("hiddenyears:hidden_effect_food");
  new BlessingComponent("hiddenyears:blessing_of_isis");
  new StaffComponent("hiddenyears:staff");
  new JobComponent("hiddenyears:job");
  new TrialStoneComponent("hiddenyears:trial_stone");
  new ArmorTypeComponent("hiddenyears:armor_type");
  new ComplexPotionComponent("hiddenyears:complex_potion");
  new ProfileComponent("hiddenyears:profile");
  new ReturnGemComponent("hiddenyears:return_gem");
  new JobSkillComponent("hiddenyears:job_skill");
  new SpecificDamageComponent("hiddenyears:specific_damage");
  new StructurePlacerComponent("hiddenyears:structure_placer");
  new JobRecoveryComponent("hiddenyears:job_recovery");
  new NowPlayingComponent("hiddenyears:now_playing");
  new StructureLocatorComponent(
    "hiddenyears:structure_locator",
    "hiddenyears:target_list"
  );
  new DeprecatedGameplayComponent("hiddenyears:deprecated");
  new LocatorBarComponent("hiddenyears:locator_bar");
  new DimensionTeleporterComponent("hiddenyears:teleporter");
  new IphonComponent("hiddenyears:iphon");
  new LoreComponent("hiddenyears:tooltip");
  new EggBlockComponent("hiddenyears:egg_block");
  new FlowerComponent("hiddenyears:flower");
  new EggEmbryoBlockComponent("hiddenyears:egg_embryo_block");
  new MagicEnergyComponent("hiddenyears:magic_source");
  item.add(new FoodMaterial("hiddenyears:effective_food"));
  item.add(new ToolMaterial("hiddenyears:custom_tool"));
  item.add(new WeaponMaterial("hiddenyears:custom_weapon"));
  block.add(new InteractableBlock("hiddenyears:interactable"));
  block.add(new OreBlock("hiddenyears:custom_ore"));
  item.register();
  block.register();
}
