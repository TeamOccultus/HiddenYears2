import { CommandPermissionLevel } from "@minecraft/server";
import {
  ArtifactForm,
  ArtifactRegistries,
  ArtifactSlotRegistries,
} from "@starock/artifact";
import * as slots from "../item/ArtifactSlots";
import { artifacts } from "../item/Artifacts";

export function registryArtifacts() {
  const registry = new ArtifactRegistries("hiddenyears:artifacts");
  artifacts.forEach((artifact) => {
    registry.register(artifact.typeId, artifact);
  })
}

export function registryArtifactSlots() {
  const slot = new ArtifactSlotRegistries();
  slot.register("hiddenyears:head", slots.head);
  slot.register("hiddenyears:body", slots.body);
  slot.register("hiddenyears:hand", slots.hand);
  slot.register("hiddenyears:feet", slots.feet);
  slot.register("hiddenyears:runes", slots.runes);
}

export function registryForm() {
  ArtifactForm.addTrigger(undefined, {
    name: "hiddenyears:artifact",
    description: " %command.artifact.description",
    permissionLevel: CommandPermissionLevel.Any,
    cheatsRequired: false,
  });
}
