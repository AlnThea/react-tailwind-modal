import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),

    ],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/components/Modal.tsx'),
            name: 'ReactTailwindModal',
            fileName: 'react-tailwind-modal',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                },
            },
        },
    },
});