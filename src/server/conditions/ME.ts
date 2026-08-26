import { Player } from "@minecraft/server";
import { Conditions, TextProvider } from "@occultus/api";
import { MagicEnergy as UCV } from "../../core/MagicEnergy";

export class MaigcEnergyConditions extends Conditions {
  constructor(
    protected readonly value: number,
    protected readonly consumeAmount = false
  ) {
    super();
  }
  check(player: Player, visual?: boolean): boolean {
    if (this.value <= UCV.get(player)) {
      if (visual) return true;
      if (!this.consumeAmount) return true;
      UCV.set(player, UCV.get(player) - this.value);
      return true;
    }
    return false;
  }
  getTextProvider(): TextProvider {
    return {
      translate: "ui.condition.ucv",
      with: [this.value.toString()]
    };
  }
  getFailedReason(): TextProvider {
    return {
      translate: "ui.condition.ucv.failed",
      with: [this.value.toString()]
    };
  }
}
