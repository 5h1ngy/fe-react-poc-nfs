// vite.config.js
import _ from "file:///C:/Users/User/Desktop/fe-react-poc-nfs/node_modules/lodash/lodash.js";
import { defineConfig } from "file:///C:/Users/User/Desktop/fe-react-poc-nfs/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/User/Desktop/fe-react-poc-nfs/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { jsonX } from "file:///C:/Users/User/Desktop/fe-react-poc-nfs/node_modules/vite-plugin-jsonx/dist/index.js";
import dynamicImport from "file:///C:/Users/User/Desktop/fe-react-poc-nfs/node_modules/vite-plugin-dynamic-import/dist/index.mjs";
import { viteStaticCopy } from "file:///C:/Users/User/Desktop/fe-react-poc-nfs/node_modules/vite-plugin-static-copy/dist/index.js";
import { normalizePath } from "file:///C:/Users/User/Desktop/fe-react-poc-nfs/node_modules/vite/dist/node/index.js";
import path from "path";

// package.json
var dependencies = {
  "@chakra-ui/icons": "^2.1.1",
  "@chakra-ui/react": "^2.8.2",
  "@emotion/react": "^11.11.4",
  "@emotion/styled": "^11.11.5",
  "@reduxjs/toolkit": "^2.2.3",
  "@tanstack/react-table": "^8.16.0",
  "framer-motion": "^11.1.3",
  react: "^18.2.0",
  "react-dom": "^18.2.0",
  "react-helmet": "^6.1.0",
  "react-icons": "^5.1.0",
  "react-redux": "^9.1.1",
  "react-router-dom": "^6.22.3"
};

// vite.config.js
var __vite_injected_original_dirname = "C:\\Users\\User\\Desktop\\fe-react-poc-nfs";
function renderChunks(deps) {
  let chunks = {};
  Object.keys(deps).forEach((key) => {
    chunks[`vendors/${key.replace("/", "-")}`] = [key];
  });
  return chunks;
}
var vite_config_default = defineConfig({
  root: path.resolve(__vite_injected_original_dirname, "app"),
  base: "./",
  publicDir: "/public",
  cacheDir: path.resolve(__vite_injected_original_dirname, ".vite"),
  plugins: [
    react(),
    jsonX(),
    dynamicImport(),
    // dynamicImportVars(),
    viteStaticCopy({
      targets: [
        {
          src: normalizePath(path.resolve(__vite_injected_original_dirname, "app", "public")),
          dest: path.resolve(__vite_injected_original_dirname, "dist")
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@app/assets": path.join(__vite_injected_original_dirname, "app", "src", "assets"),
      "@app/components": path.join(__vite_injected_original_dirname, "app", "src", "components"),
      "@app/hocs": path.join(__vite_injected_original_dirname, "app", "src", "hocs"),
      "@app/pages": path.join(__vite_injected_original_dirname, "app", "src", "pages"),
      "@app/services": path.join(__vite_injected_original_dirname, "app", "src", "services"),
      "@app/store": path.join(__vite_injected_original_dirname, "app", "src", "store")
    }
  },
  build: {
    outDir: path.resolve(__vite_injected_original_dirname, "dist"),
    copyPublicDir: true,
    assetsDir: "./js/",
    emptyOutDir: false,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          // ['vendors/react']: ['react'],
          // ['vendors/react-router-dom']: ['react-router-dom'],
          // ['vendors/react-dom']: ['react-dom'],
          ...renderChunks(dependencies)
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiLCAicGFja2FnZS5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEZXNrdG9wXFxcXGZlLXJlYWN0LXBvYy1uZnNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXFVzZXJcXFxcRGVza3RvcFxcXFxmZS1yZWFjdC1wb2MtbmZzXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9Vc2VyL0Rlc2t0b3AvZmUtcmVhY3QtcG9jLW5mcy92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCBfIGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyBqc29uWCB9IGZyb20gJ3ZpdGUtcGx1Z2luLWpzb254JztcblxuLy8gaW1wb3J0IGR5bmFtaWNJbXBvcnRWYXJzIGZyb20gJ0Byb2xsdXAvcGx1Z2luLWR5bmFtaWMtaW1wb3J0LXZhcnMnO1xuaW1wb3J0IGR5bmFtaWNJbXBvcnQgZnJvbSAndml0ZS1wbHVnaW4tZHluYW1pYy1pbXBvcnQnXG5cbmltcG9ydCB7IHZpdGVTdGF0aWNDb3B5IH0gZnJvbSAndml0ZS1wbHVnaW4tc3RhdGljLWNvcHknXG5pbXBvcnQgeyBub3JtYWxpemVQYXRoIH0gZnJvbSAndml0ZSdcblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuaW1wb3J0IHsgZGVwZW5kZW5jaWVzIH0gZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xuXG5mdW5jdGlvbiByZW5kZXJDaHVua3MoZGVwcykge1xuICBsZXQgY2h1bmtzID0ge307XG4gIE9iamVjdC5rZXlzKGRlcHMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIC8vIGlmIChbJ3JlYWN0JywgJ3JlYWN0LXJvdXRlci1kb20nLCAncmVhY3QtZG9tJ10uaW5jbHVkZXMoa2V5KSkgcmV0dXJuO1xuICAgIGNodW5rc1tgdmVuZG9ycy8ke2tleS5yZXBsYWNlKCcvJywgJy0nKX1gXSA9IFtrZXldO1xuICB9KTtcbiAgcmV0dXJuIGNodW5rcztcbn1cblxuLy8gRGV2ZWxvcG1lbnQgbW9kZVxuLyoqIEB0eXBlIHtpbXBvcnQoJ3ZpdGUnKS5Vc2VyQ29uZmlnfSAqL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcm9vdDogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2FwcCcpLFxuICBiYXNlOiAnLi8nLFxuICBwdWJsaWNEaXI6ICcvcHVibGljJyxcbiAgY2FjaGVEaXI6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICcudml0ZScpLFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICBqc29uWCgpLFxuICAgIGR5bmFtaWNJbXBvcnQoKSxcbiAgICAvLyBkeW5hbWljSW1wb3J0VmFycygpLFxuICAgIHZpdGVTdGF0aWNDb3B5KHtcbiAgICAgIHRhcmdldHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIHNyYzogbm9ybWFsaXplUGF0aChwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnYXBwJywgJ3B1YmxpYycpKSxcbiAgICAgICAgICBkZXN0OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnZGlzdCcpLFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSlcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQGFwcC9hc3NldHMnOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnYXBwJywgJ3NyYycsICdhc3NldHMnKSxcbiAgICAgICdAYXBwL2NvbXBvbmVudHMnOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnYXBwJywgJ3NyYycsICdjb21wb25lbnRzJyksXG4gICAgICAnQGFwcC9ob2NzJzogcGF0aC5qb2luKF9fZGlybmFtZSwgJ2FwcCcsICdzcmMnLCAnaG9jcycpLFxuICAgICAgJ0BhcHAvcGFnZXMnOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnYXBwJywgJ3NyYycsICdwYWdlcycpLFxuICAgICAgJ0BhcHAvc2VydmljZXMnOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnYXBwJywgJ3NyYycsICdzZXJ2aWNlcycpLFxuICAgICAgJ0BhcHAvc3RvcmUnOiBwYXRoLmpvaW4oX19kaXJuYW1lLCAnYXBwJywgJ3NyYycsICdzdG9yZScpLFxuICAgIH0sXG4gIH0sXG4gIGJ1aWxkOiB7XG4gICAgb3V0RGlyOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnZGlzdCcpLFxuICAgIGNvcHlQdWJsaWNEaXI6IHRydWUsXG4gICAgYXNzZXRzRGlyOiAnLi9qcy8nLFxuICAgIGVtcHR5T3V0RGlyOiBmYWxzZSxcbiAgICBzb3VyY2VtYXA6IGZhbHNlLFxuXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgb3V0cHV0OiB7XG4gICAgICAgIG1hbnVhbENodW5rczoge1xuICAgICAgICAgIC8vIFsndmVuZG9ycy9yZWFjdCddOiBbJ3JlYWN0J10sXG4gICAgICAgICAgLy8gWyd2ZW5kb3JzL3JlYWN0LXJvdXRlci1kb20nXTogWydyZWFjdC1yb3V0ZXItZG9tJ10sXG4gICAgICAgICAgLy8gWyd2ZW5kb3JzL3JlYWN0LWRvbSddOiBbJ3JlYWN0LWRvbSddLFxuICAgICAgICAgIC4uLnJlbmRlckNodW5rcyhkZXBlbmRlbmNpZXMpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9XG59KVxuIiwgIntcbiAgXCJuYW1lXCI6IFwiZmUtcmVhY3QtcG9jLW5mc1wiLFxuICBcInByaXZhdGVcIjogdHJ1ZSxcbiAgXCJ2ZXJzaW9uXCI6IFwiMC4xLjBcIixcbiAgXCJ0eXBlXCI6IFwibW9kdWxlXCIsXG4gIFwic2NyaXB0c1wiOiB7XG4gICAgXCJzdGFydDpkZXZcIjogXCJ2aXRlXCIsXG4gICAgXCJzdGFydDpwcm9kXCI6IFwidml0ZSBwcmV2aWV3XCIsXG4gICAgXCJidWlsZDpwcm9kXCI6IFwidml0ZSBidWlsZFwiLFxuICAgIFwiY2xlYW5cIjogXCJybSAtcmZkdiBub2RlX21vZHVsZXMgLnlhcm4tY2FjaGUgLnZpdGUgZGlzdFwiLFxuICAgIFwibGludFwiOiBcImVzbGludCAuIC0tZXh0IGpzLGpzeCAtLXJlcG9ydC11bnVzZWQtZGlzYWJsZS1kaXJlY3RpdmVzIC0tbWF4LXdhcm5pbmdzIDBcIlxuICB9LFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAY2hha3JhLXVpL2ljb25zXCI6IFwiXjIuMS4xXCIsXG4gICAgXCJAY2hha3JhLXVpL3JlYWN0XCI6IFwiXjIuOC4yXCIsXG4gICAgXCJAZW1vdGlvbi9yZWFjdFwiOiBcIl4xMS4xMS40XCIsXG4gICAgXCJAZW1vdGlvbi9zdHlsZWRcIjogXCJeMTEuMTEuNVwiLFxuICAgIFwiQHJlZHV4anMvdG9vbGtpdFwiOiBcIl4yLjIuM1wiLFxuICAgIFwiQHRhbnN0YWNrL3JlYWN0LXRhYmxlXCI6IFwiXjguMTYuMFwiLFxuICAgIFwiZnJhbWVyLW1vdGlvblwiOiBcIl4xMS4xLjNcIixcbiAgICBcInJlYWN0XCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtZG9tXCI6IFwiXjE4LjIuMFwiLFxuICAgIFwicmVhY3QtaGVsbWV0XCI6IFwiXjYuMS4wXCIsXG4gICAgXCJyZWFjdC1pY29uc1wiOiBcIl41LjEuMFwiLFxuICAgIFwicmVhY3QtcmVkdXhcIjogXCJeOS4xLjFcIixcbiAgICBcInJlYWN0LXJvdXRlci1kb21cIjogXCJeNi4yMi4zXCJcbiAgfSxcbiAgXCJkZXZEZXBlbmRlbmNpZXNcIjoge1xuICAgIFwiQGZha2VyLWpzL2Zha2VyXCI6IFwiXjguNC4xXCIsXG4gICAgXCJAcm9sbHVwL3BsdWdpbi1keW5hbWljLWltcG9ydC12YXJzXCI6IFwiXjIuMS4yXCIsXG4gICAgXCJAdHlwZXMvcmVhY3RcIjogXCJeMTguMi42NlwiLFxuICAgIFwiQHR5cGVzL3JlYWN0LWRvbVwiOiBcIl4xOC4yLjIyXCIsXG4gICAgXCJAdHlwZXNjcmlwdC1lc2xpbnQvcGFyc2VyXCI6IFwiXjcuNy4wXCIsXG4gICAgXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiOiBcIl40LjIuMVwiLFxuICAgIFwiZXNsaW50XCI6IFwiXjguNTcuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1jaGFrcmEtdWlcIjogXCJeMC4xMS4wXCIsXG4gICAgXCJlc2xpbnQtcGx1Z2luLXJlYWN0XCI6IFwiXjcuMzQuMVwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1ob29rc1wiOiBcIl40LjYuMFwiLFxuICAgIFwiZXNsaW50LXBsdWdpbi1yZWFjdC1yZWZyZXNoXCI6IFwiXjAuNC42XCIsXG4gICAgXCJsb2Rhc2hcIjogXCJeNC4xNy4yMVwiLFxuICAgIFwicm9sbHVwLXBsdWdpbi1qc29uNVwiOiBcIl4xLjAuMFwiLFxuICAgIFwidml0ZVwiOiBcIl41LjIuMFwiLFxuICAgIFwidml0ZS1wbHVnaW4tZHluYW1pYy1pbXBvcnRcIjogXCJeMS41LjBcIixcbiAgICBcInZpdGUtcGx1Z2luLWpzb254XCI6IFwiXjEuMS4yXCIsXG4gICAgXCJ2aXRlLXBsdWdpbi1zdGF0aWMtY29weVwiOiBcIl4xLjAuM1wiXG4gIH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFMsT0FBTyxPQUFPO0FBQzVULFNBQVMsb0JBQW9CO0FBQzdCLE9BQU8sV0FBVztBQUNsQixTQUFTLGFBQWE7QUFHdEIsT0FBTyxtQkFBbUI7QUFFMUIsU0FBUyxzQkFBc0I7QUFDL0IsU0FBUyxxQkFBcUI7QUFFOUIsT0FBTyxVQUFVOzs7QUNDZixtQkFBZ0I7QUFBQSxFQUNkLG9CQUFvQjtBQUFBLEVBQ3BCLG9CQUFvQjtBQUFBLEVBQ3BCLGtCQUFrQjtBQUFBLEVBQ2xCLG1CQUFtQjtBQUFBLEVBQ25CLG9CQUFvQjtBQUFBLEVBQ3BCLHlCQUF5QjtBQUFBLEVBQ3pCLGlCQUFpQjtBQUFBLEVBQ2pCLE9BQVM7QUFBQSxFQUNULGFBQWE7QUFBQSxFQUNiLGdCQUFnQjtBQUFBLEVBQ2hCLGVBQWU7QUFBQSxFQUNmLGVBQWU7QUFBQSxFQUNmLG9CQUFvQjtBQUN0Qjs7O0FEMUJGLElBQU0sbUNBQW1DO0FBZXpDLFNBQVMsYUFBYSxNQUFNO0FBQzFCLE1BQUksU0FBUyxDQUFDO0FBQ2QsU0FBTyxLQUFLLElBQUksRUFBRSxRQUFRLENBQUMsUUFBUTtBQUVqQyxXQUFPLFdBQVcsSUFBSSxRQUFRLEtBQUssR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUc7QUFBQSxFQUNuRCxDQUFDO0FBQ0QsU0FBTztBQUNUO0FBSUEsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsTUFBTSxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLEVBQ25DLE1BQU07QUFBQSxFQUNOLFdBQVc7QUFBQSxFQUNYLFVBQVUsS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxFQUN6QyxTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixjQUFjO0FBQUE7QUFBQSxJQUVkLGVBQWU7QUFBQSxNQUNiLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxLQUFLLGNBQWMsS0FBSyxRQUFRLGtDQUFXLE9BQU8sUUFBUSxDQUFDO0FBQUEsVUFDM0QsTUFBTSxLQUFLLFFBQVEsa0NBQVcsTUFBTTtBQUFBLFFBQ3RDO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLGVBQWUsS0FBSyxLQUFLLGtDQUFXLE9BQU8sT0FBTyxRQUFRO0FBQUEsTUFDMUQsbUJBQW1CLEtBQUssS0FBSyxrQ0FBVyxPQUFPLE9BQU8sWUFBWTtBQUFBLE1BQ2xFLGFBQWEsS0FBSyxLQUFLLGtDQUFXLE9BQU8sT0FBTyxNQUFNO0FBQUEsTUFDdEQsY0FBYyxLQUFLLEtBQUssa0NBQVcsT0FBTyxPQUFPLE9BQU87QUFBQSxNQUN4RCxpQkFBaUIsS0FBSyxLQUFLLGtDQUFXLE9BQU8sT0FBTyxVQUFVO0FBQUEsTUFDOUQsY0FBYyxLQUFLLEtBQUssa0NBQVcsT0FBTyxPQUFPLE9BQU87QUFBQSxJQUMxRDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVEsS0FBSyxRQUFRLGtDQUFXLE1BQU07QUFBQSxJQUN0QyxlQUFlO0FBQUEsSUFDZixXQUFXO0FBQUEsSUFDWCxhQUFhO0FBQUEsSUFDYixXQUFXO0FBQUEsSUFFWCxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsUUFDTixjQUFjO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFJWixHQUFHLGFBQWEsWUFBWTtBQUFBLFFBQzlCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
