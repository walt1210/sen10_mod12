import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default [
  {
    files: ["*.js"],
    rules: {
      "semi": ["error", "always"] // require semicolons
    }
  }
];