import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.ravna.com",
      },
    ],
  },
}


export default nextConfig;
