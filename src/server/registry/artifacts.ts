import { CommandPermissionLevel } from "@minecraft/server";
import {
  ArtifactForm,
  ArtifactRegistries,
  ArtifactSlotRegistries,
} from "@occultus/api";
import * as slots from "../../data/artifactSlots";
import { artifacts } from "../../data/artifacts";

export function registryArtifacts() {
  const registry = new ArtifactRegistries("hiddenyears:artifacts");
  artifacts.forEach((artifact) => {
    registry.add(artifact);
  })
  registry.register();
}

export function registryArtifactSlots() {
  const registry = new ArtifactSlotRegistries();
  registry.add(slots.head);
  registry.add(slots.body);
  registry.add(slots.hand);
  registry.add(slots.feet);
  registry.add(slots.runes);
  registry.register();
}

export function registryForm() {
  ArtifactForm.addTrigger(undefined, {
    name: "hiddenyears:artifact",
    description: " %command.artifact.description",
    permissionLevel: CommandPermissionLevel.Any,
    cheatsRequired: false,
  });
}
