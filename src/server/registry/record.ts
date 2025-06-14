import { Record, RecordManager } from "@starock/record";

export function registryRecord() {
  new Record(
    "hiddenyears:record_plains",
    "music.biome.cherry_plains",
    "Plain Thoughts",
    "FREIRC"
  );
  new Record(
    "hiddenyears:record_ruby",
    "music.boss.ruby",
    "Fighting, Lighting",
    "FREIRC"
  );
  new Record(
    "hiddenyears:record_pharaohs",
    "music.boss.pharaohs_ghost",
    "Song of Ancient Desert",
    "FREIRC"
  );
  RecordManager.initialize();
}
