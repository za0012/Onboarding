import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), sentryVitePlugin({
        org: "no-bed",
        project: "javascript-react"
    })],
    base: '/',
    build: {
        outDir: '../dist',
        sourcemap: true
    },
    server: {
        port: 3000,
        open: true,
    },
});