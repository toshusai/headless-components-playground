import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  entryPoints: ["src/index.ts"],
  format: ["esm"],
  bundle: true,
  target: "esnext",
  noExternal: ["@radix-ui/react-switch"],
  sourcemap: true,
  dts: true,
});
