import {
  CustomComponentParameters,
  ItemComponentUseEvent,
  Player,
  RawMessage,
  system,
  world
} from "@minecraft/server";
import { StructureLocatorListParams, StructureLocatorParams } from "./Params";
import {
  Color,
  consumeEquipmentAmount,
  Format,
  isInCooldown,
  setEquipmentItem,
  startCooldown
} from "@occultus/api";
import { ModalFormData } from "@minecraft/server-ui";
import { copyItem } from "../CrossbowComponent";
import { MagicEnergy } from "../../../core/MagicEnergy";

function getHelperLocation(player: Player) {
  return {
    x: player.location.x,
    y: -64,
    z: player.location.z
  };
}

function getRedstoneBlockLocation(player: Player) {
  return {
    x: player.location.x,
    y: -63,
    z: player.location.z
  };
}

export class StructureLocatorComponent {
  static readonly ID = "starock:structure_source";
  constructor(
    readonly componentName: string,
    readonly listComponentName: string
  ) {
    system.beforeEvents.startup.subscribe((init) => {
      const item = init.itemComponentRegistry;
      item.registerCustomComponent(componentName, {});
      item.registerCustomComponent(listComponentName, {});
      world.beforeEvents.itemUse.subscribe((arg) => {
        const { source, itemStack } = arg;
        const component = itemStack.getComponent(this.componentName);
        if (!component) return;
        const params = component.customComponentParameters
          .params as StructureLocatorParams;
        if (source.isSneaking && params.structure_source === "auto") {
          arg.cancel = true;
          system.run(() => {
            modifySource(
              arg,
              component.customComponentParameters,
              listComponentName
            );
          });
          return;
        }
        if (params.ucv && MagicEnergy.get(source) < params.ucv) {
          arg.cancel = true;
          system.run(() => {
            source.sendMessage({
              translate: "message:hiddenyears:need_ucv",
              with: [params.ucv.toString()]
            });
          });
        }
      });
      world.afterEvents.itemUse.subscribe((arg) => {
        const { source, itemStack } = arg;
        const component = itemStack.getComponent(this.componentName);
        if (!component) return;
        const params = component.customComponentParameters
          .params as StructureLocatorParams;
        if (isInCooldown(itemStack, source)) {
          source.onScreenDisplay.setActionBar({
            translate: "message.hiddenyears:wait_cooldown"
          });
          return;
        }
        const result = locateStucture(
          arg,
          component.customComponentParameters,
          listComponentName
        );
        if (result) {
          MagicEnergy.add(source, -params.ucv, false);
          startCooldown(itemStack, source);
        }
      });
    });
  }
}

function getHelper(
  arg0: ItemComponentUseEvent,
  arg1: CustomComponentParameters
): string | undefined {
  const params = arg1.params as StructureLocatorParams;
  const { source, itemStack } = arg0;
  if (params.structure_source === "single") {
    if (!params.locate_helper) return;
    return params.locate_helper;
  }
  if (params.structure_source === "auto") {
    const helper = itemStack.getDynamicProperty(StructureLocatorComponent.ID);
    console.log(helper);
    if (!helper) {
      source.sendMessage({ translate: "message.hiddenyears:target_not_set" });
      return;
    }
    if (typeof helper !== "string") {
      source.sendMessage({ translate: "message.hiddenyears:invaild_target" });
      return;
    }
    return helper;
  }
}

function modifySource(
  arg0: ItemComponentUseEvent,
  arg1: CustomComponentParameters,
  listComponentName: string
) {
  const { source, itemStack } = arg0;
  const paramsMain = arg1.params as StructureLocatorParams;
  const params = itemStack.getComponent(listComponentName)
    .customComponentParameters.params as StructureLocatorListParams;
  if (!params || !Array.isArray(params)) return;
  const items: RawMessage[] = [];
  params.forEach((item, index) => {
    items.push({ translate: item.name });
  });
  const form = new ModalFormData()
    .title({
      translate: "ui.hiddenyears:structure_compass.modify"
    })
    .dropdown(
      {
        translate: "ui.hiddenyears:structure_compass.select"
      },
      items
    )
    .divider()
    .label({
      rawtext: [
        { translate: "ui.hiddenyears:structure_compass.desc_1" },
        { text: "\n" },
        {
          translate: "ui.hiddenyears:structure_compass.desc_2",
          with: [paramsMain.ucv.toString()]
        }
      ]
    })
    .submitButton({ translate: "ui.submit" });
  form.show(source).then((res) => {
    if (res.canceled) return;
    const index = res.formValues[0] ?? 0;
    if (typeof index === "undefined") return;
    if (typeof index !== "number") return;
    const newItem = copyItem(itemStack, itemStack.typeId);
    newItem.setDynamicProperty(
      StructureLocatorComponent.ID,
      params[index].helper
    );
    newItem.setLore([
      { text: Format.reset },
      { translate: "ui.hiddenyears:structure_compass.to" },
      { translate: params[index].name }
    ]);
    system.runTimeout(() => {
      setEquipmentItem(source, newItem);
      source.sendMessage({
        rawtext: [
          { translate: "ui.hiddenyears:structure_compass.done" },
          { translate: params[index].name }
        ]
      });
    }, 5);
  });
}

function locateStucture(
  arg0: ItemComponentUseEvent,
  arg1: CustomComponentParameters,
  listComponentName: string
): boolean {
  const params = arg1.params as StructureLocatorParams;
  const { source } = arg0;
  const helper = getHelper(arg0, arg1);
  if (!helper) return false;
  world.structureManager.place(
    helper,
    source.dimension,
    getHelperLocation(source)
  );
  source.dimension.setBlockType(
    getRedstoneBlockLocation(source),
    "minecraft:redstone_block"
  );
  if (params.consume) {
    consumeEquipmentAmount(source);
  }
  // 用基岩替代命令方块
  system.runTimeout(() => {
    source.dimension.setBlockType(
      getHelperLocation(source),
      "minecraft:bedrock"
    );
    source.dimension.setBlockType(
      getRedstoneBlockLocation(source),
      "minecraft:bedrock"
    );
    source.onScreenDisplay.setActionBar({
      rawtext: [
        { text: Color.green },
        { text: Format.bold },
        { translate: "message.hiddenyears:located" }
      ]
    });
    if (params.sound_event) source.playSound(params.sound_event);
  }, 10);
  return true;
}
