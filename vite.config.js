import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();


export default defineConfig({
  define: {
    // Define your API URL as a global variable
    __SOCKET_URL__: '"http://127.0.0.1:4001/"',
    __API_URL__: '"http://127.0.0.1:4001/api/"'
  },
  plugins: [react()]
});
