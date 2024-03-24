// vite.config.ts
import { defineConfig } from "file:///home/projects/vitejs-vite-kbgy58/node_modules/vite/dist/node/index.js";
import React from "file:///home/projects/vitejs-vite-kbgy58/node_modules/@vitejs/plugin-react/dist/index.mjs";
import UnoCSS from "file:///home/projects/vitejs-vite-kbgy58/node_modules/unocss/dist/vite.mjs";
import presetAttributify from "file:///home/projects/vitejs-vite-kbgy58/node_modules/@unocss/preset-attributify/dist/index.mjs";
import presetIcons from "file:///home/projects/vitejs-vite-kbgy58/node_modules/@unocss/preset-icons/dist/index.mjs";
import presetUno from "file:///home/projects/vitejs-vite-kbgy58/node_modules/@unocss/preset-uno/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    UnoCSS({
      shortcuts: [
        {
          logo: "i-logos-react w-6em h-6em transform transition-800 hover:rotate-180"
        }
      ],
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
          extraProperties: {
            display: "inline-block",
            "vertical-align": "middle"
          }
        })
      ]
    }),
    React()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvaG9tZS9wcm9qZWN0cy92aXRlanMtdml0ZS1rYmd5NThcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9ob21lL3Byb2plY3RzL3ZpdGVqcy12aXRlLWtiZ3k1OC92aXRlLmNvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vaG9tZS9wcm9qZWN0cy92aXRlanMtdml0ZS1rYmd5NTgvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBSZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgVW5vQ1NTIGZyb20gJ3Vub2Nzcy92aXRlJztcbmltcG9ydCBwcmVzZXRBdHRyaWJ1dGlmeSBmcm9tICdAdW5vY3NzL3ByZXNldC1hdHRyaWJ1dGlmeSc7XG5pbXBvcnQgcHJlc2V0SWNvbnMgZnJvbSAnQHVub2Nzcy9wcmVzZXQtaWNvbnMnO1xuaW1wb3J0IHByZXNldFVubyBmcm9tICdAdW5vY3NzL3ByZXNldC11bm8nO1xuXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIFVub0NTUyh7XG4gICAgICBzaG9ydGN1dHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGxvZ286ICdpLWxvZ29zLXJlYWN0IHctNmVtIGgtNmVtIHRyYW5zZm9ybSB0cmFuc2l0aW9uLTgwMCBob3Zlcjpyb3RhdGUtMTgwJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBwcmVzZXRzOiBbXG4gICAgICAgIHByZXNldFVubygpLFxuICAgICAgICBwcmVzZXRBdHRyaWJ1dGlmeSgpLFxuICAgICAgICBwcmVzZXRJY29ucyh7XG4gICAgICAgICAgZXh0cmFQcm9wZXJ0aWVzOiB7XG4gICAgICAgICAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcbiAgICAgICAgICAgICd2ZXJ0aWNhbC1hbGlnbic6ICdtaWRkbGUnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICB9KSxcbiAgICBSZWFjdCgpLFxuICBdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFSLFNBQVMsb0JBQW9CO0FBQ2xULE9BQU8sV0FBVztBQUNsQixPQUFPLFlBQVk7QUFDbkIsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxlQUFlO0FBR3RCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLFdBQVc7QUFBQSxRQUNUO0FBQUEsVUFDRSxNQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLFVBQVU7QUFBQSxRQUNWLGtCQUFrQjtBQUFBLFFBQ2xCLFlBQVk7QUFBQSxVQUNWLGlCQUFpQjtBQUFBLFlBQ2YsU0FBUztBQUFBLFlBQ1Qsa0JBQWtCO0FBQUEsVUFDcEI7QUFBQSxRQUNGLENBQUM7QUFBQSxNQUNIO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsRUFDUjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
