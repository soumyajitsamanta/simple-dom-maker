import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import tseslint from 'typescript-eslint';
import {jsdoc} from 'eslint-plugin-jsdoc';

export default defineConfig([
    {
        files: ["*.js"],
        plugins: {
            js,
        },
    },
    tseslint.configs.recommended,
    jsdoc({
        config:"flat/recommended-typescript",
        ignores: ["dist/*"]
    })
]);
