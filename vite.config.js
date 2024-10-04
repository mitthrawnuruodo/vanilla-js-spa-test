import { defineConfig, loadEnv } from 'vite';
import dotenv from 'dotenv'; // Ensure this line is present

export default defineConfig(({ mode }) => {
  // Load environment variables
  dotenv.config();

  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env variables.
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: '/vanilla-js-spa-test/', 
    root: './src',
    build: {
      outDir: '../dist',
      emptyOutDir: true, 
    },
    define: {
      'process.env': env,
    },
  };
});