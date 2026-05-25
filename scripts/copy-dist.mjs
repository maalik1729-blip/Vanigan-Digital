// Post-build script: copies dist/client/* up into dist/
// so Vercel's Vite auto-detection finds index.html in dist/
import { cpSync } from "fs";

cpSync("dist/client", "dist", { recursive: true, force: true });
console.log("✓ Copied dist/client → dist");

// Copy server assets to api/assets so Vercel bundles them for the Serverless Function
cpSync("dist/server/assets", "api/assets", { recursive: true, force: true });
console.log("✓ Copied dist/server/assets → api/assets");

