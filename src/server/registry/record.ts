/**
 * @module server/registry/record
 * @category Registry Bus
 */
import { MusicDisc, MusicDiscServer } from "@occultus/api";

export function registryMusicDisc() {
  const plains = new MusicDisc(
    "hiddenyears:record_plains",
    "music.biome.cherry_plains",
    "Plain Thoughts",
    "FREIRC"
  );
  const ruby = new MusicDisc(
    "hiddenyears:record_ruby",
    "music.boss.ruby",
    "The Hidden Finale",
    "FREIRC"
  );
  const pharaohs = new MusicDisc(
    "hiddenyears:record_pharaohs",
    "music.boss.pharaohs_ghost",
    "Song of Ancient Desert",
    "3xLnw"
  );
  const server = new MusicDiscServer()
  server.addDisc(plains)
  server.addDisc(ruby)
  server.addDisc(pharaohs);
}
