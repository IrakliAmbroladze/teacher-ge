import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["cdn.dummyjson.com", "momentum.redberryinternship.ge"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "momentum.redberryinternship.ge",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
