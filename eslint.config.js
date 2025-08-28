// eslint.config.js

import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import { globalIgnores } from 'eslint/config';

export default tseslint.config([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx}'],
        extends: [
            js.configs.recommended,
            // Menggunakan aturan yang sadar tipe data untuk pemeriksaan yang lebih ketat
            ...tseslint.configs.recommendedTypeChecked,

            // Mengaktifkan aturan terbaik untuk React
            reactX.configs['recommended-typescript'],
            reactDom.configs.recommended,

            // Aturan untuk hooks dan Fast Refresh tetap ada
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                project: ['./tsconfig.json', './tsconfig.node.json'], // Tambahkan path tsconfig
                tsconfigRootDir: import.meta.dirname,
            },
        },
    },
    {
        // Aturan khusus untuk file konfigurasi
        files: ['vite.config.ts'],
        rules: {
            'no-undef': 'off', // Izinkan penggunaan __dirname di file konfigurasi
        },
    },
]);