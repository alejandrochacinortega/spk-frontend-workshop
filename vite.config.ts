import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite is the dev server: it turns our .tsx files into JavaScript the browser can run,
// and reloads the page every time we save.
export default defineConfig({
    plugins: [react()],
});
