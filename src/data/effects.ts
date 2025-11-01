import { VirtualEffect } from "@occultus/api";
import { bleedEffect } from "../server/effects/bleed";
import { tetanusEffect } from "../server/effects/tetanus";
import { droughtEffect } from "../server/effects/drought";
import { dehydrationEffect } from "../server/effects/dehydration";

const effectsMap: Map<string, VirtualEffect> = new Map();

effectsMap.set("bleed", bleedEffect);
effectsMap.set("tetanus", tetanusEffect);
effectsMap.set("drought", droughtEffect);
effectsMap.set("dehydration", dehydrationEffect);

export default effectsMap;
