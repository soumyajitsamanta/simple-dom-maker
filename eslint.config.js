import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from 'typescript-eslint';

export default defineConfig([
    {
        files: ["**/*.js"],
        plugins: {
            js,
        },
    },
    tseslint.configs.recommended,
]);
