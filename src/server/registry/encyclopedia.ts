import { Encyclopedia } from "../../tenon/game/encyclopedia";
import * as entries from "../../data/encyclopedia"

export function registryEncy() {
    const encyclopedia = new Encyclopedia("hy:encyclopedia", "Encyclopedia", "A collection of knowledge");
    encyclopedia.addEntry(entries.welcome);
    encyclopedia.addEntry(entries.magicPotion);
    encyclopedia.subscribe();
}