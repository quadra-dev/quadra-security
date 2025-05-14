import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// FlatCompat helps convert old configs to the new flat config format
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  // ✅ Correct usage: pass each string directly (not nested)
  ...compat.extends("next/core-web-vitals"),
  ...compat.extends("next"),
  ...compat.extends("plugin:@typescript-eslint/recommended"),

  // ✅ Flat config override
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "error",
    },
  },
];
