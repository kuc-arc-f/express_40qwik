import { defineConfig } from 'vite'
import { qwikVite } from '@builder.io/qwik/optimizer'
//
export default defineConfig(({ mode }) => {
  if (mode === 'client') {
    return {
      plugins: [
        qwikVite({
          csr: true,
        }),
      ],      
      build: {
        lib: {
          entry: [
            './src/main.tsx',
            './src/client/About.tsx',
            './src/client/Contact.tsx',
            './src/client/Test.tsx',
            './src/client/Test2.tsx',
            './src/client/Test2Show.tsx',
          ],
          formats: ['es'],
          fileName: '[name]',
        },
        rollupOptions: {
          output: {
            dir: './public/static'
          }
        },
        emptyOutDir: false,
        copyPublicDir: false
      }
    }
  } else {
    return {
    }
  }
})
