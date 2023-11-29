import { defineConfig } from 'vite'
import { dependencies } from './package.json'
import react from '@vitejs/plugin-react'

const exclVendors = ['react', 'react-router-dom', 'react-dom'];
function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach(key => {
    if (exclVendors.includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          ...renderChunks(dependencies),
        }
      }
    }
  }
})
