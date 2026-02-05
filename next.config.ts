import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.lemontreehotels.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
