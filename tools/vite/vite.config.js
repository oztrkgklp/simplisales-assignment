import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
    require("dotenv").config({ path: path.join(process.cwd(), "env", ".env." + mode) });
    require("dotenv").config({ path: path.join(process.cwd(), "env", ".env." + mode + ".local") });
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return {
        plugins: [react()],
        root: "src",
        envDir: "../env",
        publicDir: "../public",
        assetsInclude: ["**/*.gltf", "**/*.svg", "**/*.ico", "**/*.png", "**/*.jpg", "**/*.jpeg"],
        resolve: {
            alias: {},
        },
        server: {
            fs: {
                strict: true,
            },
            port: process.env.VITE_APP_PORT || 5000,
            outDir: path.join("..", "dist"),
        },
    };
});
