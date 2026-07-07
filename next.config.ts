import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noimageindex, noai, noimageai",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
