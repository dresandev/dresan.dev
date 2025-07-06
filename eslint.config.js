import eslintPluginAstro from "eslint-plugin-astro"
import { defineConfig, globalIgnores } from "eslint/config"

export default defineConfig([
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      "comma-dangle": ["error", "always-multiline"],
      "semi": ["warn", "never"],
      "jsx-quotes": ["warn", "prefer-double"],
      "quotes": ["warn", "double"],
    },
  },
  globalIgnores([".vercel/"]),
])
