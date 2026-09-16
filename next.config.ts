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
};

export default nextConfig;
