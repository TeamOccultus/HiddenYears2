import { buildLang } from "./lib.mjs";
import { buildScript, buildMcpacks } from "./lib.mjs";

buildLang();
buildScript(() => {
  buildMcpacks();
});
