import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'path';

export default defineConfig({
    plugins: [
        react(),
        tailwindcss(),
    ],
    build: {
        lib: {
            // Your component's entry file
            entry: resolve(__dirname, 'src/components/Modal.tsx'),
            name: 'react-tailwind-modal',
            // The name of the output file
            fileName: 'react-tailwind-modal',
        },
        rollupOptions: {
            // Make sure React and ReactDOM are not bundled into your library
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