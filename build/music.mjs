import archiver from "archiver";
import * as path from "path";
import fs from "fs-extra";

const SOURCE_DIR = "HiddenYears_MUSIC";
const OUTPUT_DIR = path.join(process.cwd(), "output");

// Get version
const MANIFEST = fs.readFileSync("./HiddenYears_MUSIC/manifest.json");
const VERSION = JSON.parse(MANIFEST).header.version;

// Create output dir
fs.ensureDirSync(path.join(OUTPUT_DIR, "mcpack"));

// Build mcpack
const archive = archiver("zip");
archive.pipe(
  fs.createWriteStream(path.join(OUTPUT_DIR, `隐藏之年音乐包${VERSION}.mcpack`))
);
archive.directory(SOURCE_DIR, false);
archive.finalize();
console.info(`${SOURCE_DIR} packed.`);

// Finish
console.info(
  `Music pack build finished. Artifacts can be found in ${OUTPUT_DIR}.`
);
