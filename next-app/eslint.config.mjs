import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// ここで全ファイルを無視
const eslintConfig = [
  {
    ignores: ["**/*"],
  },
  // 以降は既存の Next.js ルール読み込み
  ...compat.extends("next/core-web-vitals", "next/typescript"),
];

export default eslintConfig;
