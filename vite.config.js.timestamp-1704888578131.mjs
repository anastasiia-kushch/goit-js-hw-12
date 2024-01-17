// vite.config.js
import { defineConfig } from "file:///Users/mackbook/Documents/GitHub/goit-js-hw-11/node_modules/vite/dist/node/index.js";
import glob from "file:///Users/mackbook/Documents/GitHub/goit-js-hw-11/node_modules/glob/glob.js";
import injectHTML from "file:///Users/mackbook/Documents/GitHub/goit-js-hw-11/node_modules/vite-plugin-html-inject/dist/index.mjs";
import FullReload from "file:///Users/mackbook/Documents/GitHub/goit-js-hw-11/node_modules/vite-plugin-full-reload/dist/index.js";
var vite_config_default = defineConfig(({ command }) => {
  return {
    define: {
      [command === "serve" ? "global" : "_global"]: {}
    },
    root: "src",
    build: {
      sourcemap: true,
      rollupOptions: {
        input: glob.sync("./src/*.html"),
        output: {
          manualChunks(id) {
            if (id.includes("node_modules")) {
              return "vendor";
            }
          },
          entryFileNames: "commonHelpers.js"
        }
      },
      outDir: "../dist"
    },
    plugins: [injectHTML(), FullReload(["./src/**/**.html"])]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFja2Jvb2svRG9jdW1lbnRzL0dpdEh1Yi9nb2l0LWpzLWh3LTExXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWFja2Jvb2svRG9jdW1lbnRzL0dpdEh1Yi9nb2l0LWpzLWh3LTExL3ZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tYWNrYm9vay9Eb2N1bWVudHMvR2l0SHViL2dvaXQtanMtaHctMTEvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCBnbG9iIGZyb20gJ2dsb2InO1xuaW1wb3J0IGluamVjdEhUTUwgZnJvbSAndml0ZS1wbHVnaW4taHRtbC1pbmplY3QnO1xuaW1wb3J0IEZ1bGxSZWxvYWQgZnJvbSAndml0ZS1wbHVnaW4tZnVsbC1yZWxvYWQnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgY29tbWFuZCB9KSA9PiB7XG4gIHJldHVybiB7XG4gICAgZGVmaW5lOiB7XG4gICAgICBbY29tbWFuZCA9PT0gJ3NlcnZlJyA/ICdnbG9iYWwnIDogJ19nbG9iYWwnXToge30sXG4gICAgfSxcbiAgICByb290OiAnc3JjJyxcbiAgICBidWlsZDoge1xuICAgICAgc291cmNlbWFwOiB0cnVlLFxuXG4gICAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICAgIGlucHV0OiBnbG9iLnN5bmMoJy4vc3JjLyouaHRtbCcpLFxuICAgICAgICBvdXRwdXQ6IHtcbiAgICAgICAgICBtYW51YWxDaHVua3MoaWQpIHtcbiAgICAgICAgICAgIGlmIChpZC5pbmNsdWRlcygnbm9kZV9tb2R1bGVzJykpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICd2ZW5kb3InO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdjb21tb25IZWxwZXJzLmpzJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBvdXREaXI6ICcuLi9kaXN0JyxcbiAgICB9LFxuICAgIHBsdWdpbnM6IFtpbmplY3RIVE1MKCksIEZ1bGxSZWxvYWQoWycuL3NyYy8qKi8qKi5odG1sJ10pXSxcbiAgfTtcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0VCxTQUFTLG9CQUFvQjtBQUN6VixPQUFPLFVBQVU7QUFDakIsT0FBTyxnQkFBZ0I7QUFDdkIsT0FBTyxnQkFBZ0I7QUFFdkIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxRQUFRLE1BQU07QUFDM0MsU0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLE1BQ04sQ0FBQyxZQUFZLFVBQVUsV0FBVyxZQUFZLENBQUM7QUFBQSxJQUNqRDtBQUFBLElBQ0EsTUFBTTtBQUFBLElBQ04sT0FBTztBQUFBLE1BQ0wsV0FBVztBQUFBLE1BRVgsZUFBZTtBQUFBLFFBQ2IsT0FBTyxLQUFLLEtBQUssY0FBYztBQUFBLFFBQy9CLFFBQVE7QUFBQSxVQUNOLGFBQWEsSUFBSTtBQUNmLGdCQUFJLEdBQUcsU0FBUyxjQUFjLEdBQUc7QUFDL0IscUJBQU87QUFBQSxZQUNUO0FBQUEsVUFDRjtBQUFBLFVBQ0EsZ0JBQWdCO0FBQUEsUUFDbEI7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0EsU0FBUyxDQUFDLFdBQVcsR0FBRyxXQUFXLENBQUMsa0JBQWtCLENBQUMsQ0FBQztBQUFBLEVBQzFEO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
