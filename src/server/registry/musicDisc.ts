/**
 * @module server/registry/record
 * @category Registry Bus
 */
import {
  MusicDiscServerBindings
} from "@occultus/api";

export function registryMusicDisc() {
  MusicDiscServerBindings.create({ componentName: "hiddenyears:music_disc" });
}
