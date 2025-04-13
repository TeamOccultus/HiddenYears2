import { Player } from "@minecraft/server";

export abstract class UI {
    constructor(readonly id: string) {}
    abstract display(player: Player, backTo?: UI[]): void
}