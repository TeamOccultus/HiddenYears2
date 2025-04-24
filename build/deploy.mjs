import * as os from "os";
import * as path from "path";
import * as fs from "fs";
import * as fse from "fs-extra";
import chalk from "chalk";

if (os.platform() !== "win32") {
  throw new Error("部署脚本仅对 Windows 平台有效");
}

const appDataLocal = path.join(os.homedir(), "\\AppData\\Local");
const minecraftPreviewPath = path.join(
  appDataLocal,
  "Packages\\Microsoft.MinecraftWindowsBeta_8wekyb3d8bbwe\\LocalState\\games\\com.mojang"
);
const minecraftPath = path.join(
  appDataLocal,
  "Packages\\Microsoft.MinecraftUWP_8wekyb3d8bbwe\\LocalState\\games\\com.mojang"
);

function deploy(target) {
  const [beh, res] = [
    path.join(target, "development_behavior_packs", "HiddenYears(DEV)"),
    path.join(target, "development_resource_packs", "HiddenYears(DEV)"),
  ];
  fse.ensureDirSync(beh);
  fse.ensureDirSync(res);
  console.log(chalk.bold(" INFO ") + "正在部署到" + target);
  fs.cpSync("HiddenYears(BP)", beh, { recursive: true });
  fs.cpSync("HiddenYears(RP)", res, { recursive: true });
  console.log(chalk.green.bold.inverse(" SUCCESS ") + " 部署完成");
}

if (process.argv.includes("preview")) {
  deploy(minecraftPreviewPath);
} else {
  deploy(minecraftPath);
}
