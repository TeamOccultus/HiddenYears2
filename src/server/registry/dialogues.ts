import { Dialogue } from "@occultus/api";

export function registryDialogues() {
  new Dialogue(
    "hiddenyears:lunamutatio_suffering",
    "hiddenyears:lunamutatio_suffering_welcome"
  ).registry();
}
