import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Add GLSL shader file support
    config.module.rules.push({
      test: /\.(glsl|vs|fs|vert|frag)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: "raw-loader",
        },
        {
          loader: "glslify-loader",
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
