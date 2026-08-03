import { Dialogue } from "@occultus/api";

export function registerDialogues() {
  new Dialogue(
    "hiddenyears:lunamutatio_suffering",
    "hiddenyears:lunamutatio_suffering_welcome"
  ).registry();
}
