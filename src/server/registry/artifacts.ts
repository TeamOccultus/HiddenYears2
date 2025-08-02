import { CommandPermissionLevel, Dimension } from "@minecraft/server";
import {
  ArtifactForm,
  ArtifactRegistries,
  ArtifactSlot,
  ArtifactSlotRegistries,
} from "@starock/artifact";
import { body, head } from "../item/ArtifactSlots";
import { copperBadge, diamondBadge, goldenBadge } from "../item/Artifacts";

export function registryArtifacts() {
  const artifact = new ArtifactRegistries("hiddenyears:artifacts");
  artifact.register("hiddenyears:diamond_badge", diamondBadge);
  artifact.register("hiddenyears:golden_badge", goldenBadge);
  artifact.register("hiddenyears:copper_badge", copperBadge);
}

export function registryArtifactSlots() {
  const slot = new ArtifactSlotRegistries();
  slot.register("hiddenyears:head", head);
  slot.register("hiddenyears:body", body);
}

export function registryForm() {
  ArtifactForm.addTrigger(undefined, {
    name: "hiddenyears:artifact",
    description: " %command.artifact.description",
    permissionLevel: CommandPermissionLevel.Any,
  });
}
