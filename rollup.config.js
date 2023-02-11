const commonjs = require("@rollup/plugin-commonjs");
const typescript = require("@rollup/plugin-typescript");
const dts = require("rollup-plugin-dts");
// const { terser } = require("@rollup/plugin-terser");
const peerDepsExternal = require("rollup-plugin-peer-deps-external");

const packageJson = require("./package.json");
module.exports = {
  default: [
    {
      input: "src/index.ts",
      output: [
        {
          file: packageJson.main,
          format: "cjs",
          sourcemap: true,
        },
        {
          file: packageJson.module,
          format: "esm",
          sourcemap: true,
        },
      ],
      plugins: [
        peerDepsExternal(),
        // resolve(),
        commonjs(),
        typescript({ tsconfig: "./tsconfig.json" }),
        // terser(),
      ],
      external: ["react", "react-dom", "styled-components"],
    },
    {
      input: "dist/esm/types/index.d.ts",
      output: [{ file: "dist/index.d.ts", format: "esm" }],
      plugins: [dts.default()],
    },
  ],
};
