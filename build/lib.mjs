import * as esbuild from "esbuild";
import * as fs from "fs-extra";
import archiver from "archiver";
import path from "path";
import { createWriteStream, readdirSync } from "fs";


export function buildScript() {
  // Build script
  esbuild.buildSync({
    entryPoints: ["src/index.ts"],
    bundle: true,
    outfile: "./HiddenYears(BP)/scripts/index.js",
    format: "esm",
    external: ["@minecraft/server", "@minecraft/server-ui"],
    minify: true,
    treeShaking: true,
  });
}

export function buildMcpacks() {
  const OUTPUT_DIR = path.join(process.cwd(), "output");
  const DIRS = ["HiddenYears(BP)", "HiddenYears(RP)"];
  fs.ensureDirSync(path.join(OUTPUT_DIR, "mcpacks"));
  DIRS.forEach((dir) => {
    const archive = archiver("zip");
    archive.pipe(
      createWriteStream(path.join(OUTPUT_DIR, "mcpacks", `${dir}.mcpack`))
    );
    archive.directory(path.join(process.cwd(), dir), false);
    archive.finalize();
    console.log(`${dir} 打包成功`);
  });
}

export function finalize() {
    const OUTPUT_DIR = path.join(process.cwd(), "output");
    const mcaddonArchive = archiver("zip");
    const mcpacks = readdirSync(path.join(OUTPUT_DIR, "mcpacks"));
    console.log(mcpacks);
  
    mcaddonArchive.pipe(
      createWriteStream(path.join(OUTPUT_DIR, "HiddenYears2.mcaddon.zip"))
    );
  
    mcpacks.forEach((file) => {
      const file_path = path.join(OUTPUT_DIR, "mcpacks", file);
      mcaddonArchive.file(file_path, {
        name: file,
      });
      console.log(`${file} 已添加到输出文件`);
    });
    mcaddonArchive.finalize();
  }