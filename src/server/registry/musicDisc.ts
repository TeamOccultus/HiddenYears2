/**
 * @module server/registry/record
 * @category Registry Bus
 */
import {
  MusicDiscServerBindings
} from "@occultus/api";

export function registerMusicDisc() {
  MusicDiscServerBindings.create({ componentName: "hiddenyears:music_disc" });
}
