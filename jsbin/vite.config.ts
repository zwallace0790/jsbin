import { defineConfig } from 'vite'
import {fileURLToPath} from 'url';
import react from '@vitejs/plugin-react'
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@components' : path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [react()]
})
