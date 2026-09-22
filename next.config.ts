import type { NextConfig } from "next";
import redirectsData from "./src/lib/redirects.json";

const nextConfig: NextConfig = {
  allowedDevOrigins: [
    "novercal-anissa-impeccably.ngrok-free.dev",
    "*.ngrok-free.dev",
    "*.ngrok.app",
    "*.ngrok.io",
    "localhost:3000",
  ],
  async redirects() {
    return redirectsData.map((r) => ({
      source: r.source,
      destination: r.destination,
      permanent: r.permanent,
    }));
  },
  images: {
    dangerouslyAllowSVG: true,
    dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "devsoftminderp.m.frappe.cloud",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.m.frappe.cloud",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "*.frappe.cloud",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.30",
        port: "8013",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "192.168.1.34",
        port: "8013",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
