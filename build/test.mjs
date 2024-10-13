import archiver from "archiver";
import * as esbuild from "esbuild";
import * as path from "path";
import fs from "fs-extra";
import { program } from "commander";

program
  .name("lazuli-builder")
  .description("CLI to pack addon into .mcaddon files")
  .version("0.1.0");

program.option("-m | --mode <cli/file>", "", "cli");
program.option("-t | --target <strings...>", "");
program.option("-o | --output <string>", "");
program.option("--script-source <string>", "");
program.option("--script-output <string>", "");
program.option("-p | --pack-version <string>", "", "");
program.parse();

const MODE= program.getOptionValue("mode")

if(MODE==="cli"){

}else if(MODE ==="file"){

}else{
  throw new Error("There isn't any mode select.")
}

if (
  program.getOptionValue("scriptSource") &&
  program.getOptionValue("scriptOutput")
) {
  console.log("Start to build scripts...")
  const SOURCE = program.getOptionValue("scriptSource");
  const OUTPUT = program.getOptionValue("scriptOutput");
  // Build script
  esbuild.build({
    entryPoints: [SOURCE],
    bundle: true,
    outfile: OUTPUT,
    format: "esm",
    external: ["@minecraft/server", "@minecraft/server-ui"],
    minify: true,
  });
  console.info("Script build done");
}

if(program.getOptionValue("target")&&program.getOptionValue("output")){

}

console.log(program.getOptionValue("mode"));
console.log(program.getOptionValue("target"));
console.log(program.getOptionValue("scriptSource"));
