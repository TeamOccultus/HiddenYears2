/**
 * @module server/registry/boss
 * @category Registry Bus
 */

import { BossServer } from "@occultus/api";
import { kingOfRuby } from "../boss/kingOfRuby";
import { pharaohsGhost } from "../boss/pharaohsGhost";
import { muatsWarth } from "../boss/mutasWarth";

export function registerBoss() {
  const server = new BossServer();
  server.addBoss(kingOfRuby);
  server.addBoss(pharaohsGhost);
  server.addBoss(muatsWarth);
}
