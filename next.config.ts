import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid Turbopack inferring a parent directory as workspace root.
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
