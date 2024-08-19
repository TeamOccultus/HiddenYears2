import archiver from "archiver";
import * as esbuild from "esbuild";
import * as path from "path";
import fs from "fs-extra";

console.info("Start to build main pack...");

const SOURCE_DIR = ["HiddenYears_BP", "HiddenYears_RP"];
const OUTPUT_DIR = path.join(process.cwd(), "output");

// Get version
const PACKAGE = fs.readFileSync("./package.json");
const VERSION = JSON.parse(PACKAGE).version;

// Build script
await esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "./HiddenYears_BP/scripts/index.js",
  format: "esm",
  external: ["@minecraft/server", "@minecraft/server-ui"],
  minify: true,
});
console.info("script build done");

// Create output dir
fs.ensureDirSync(path.join(OUTPUT_DIR, "mcpack"));

// Build mcpack
SOURCE_DIR.forEach((dir) => {
  const archive = archiver("zip");
  archive.pipe(
    fs.createWriteStream(path.join(OUTPUT_DIR, "mcpack", `${dir}.mcpack`))
  );
  archive.directory(dir, false);
  archive.finalize();
  console.info(`${dir} packed.`);
});

// Build mcaddon
const mcpacks = fs.readdirSync(path.join(OUTPUT_DIR, "mcpack"));
try {
  const archiveAddon = archiver("zip");
  archiveAddon.pipe(
    fs.createWriteStream(path.join(OUTPUT_DIR, `隐藏之年${VERSION}.mcaddon`))
  );
  for (const dir of mcpacks) {
    archiveAddon.file(path.join(OUTPUT_DIR, "mcpack", dir), {
      name: dir,
    });
  }
  await archiveAddon.finalize();
} catch (error) {
  throw new Error(`Failed to pack mcaddon: ${error.message}`);
}

console.info(`Main pack build finished. Artifacts can be found in ${OUTPUT_DIR}.`);
