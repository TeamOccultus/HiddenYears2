import * as esbuild from "esbuild";

// Build script
await esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  outfile: "./HiddenYears_BP/scripts/index.js",
  format: "esm",
  external: ["@minecraft/server", "@minecraft/server-ui"],
  minify: false,
});
console.info("script build done");