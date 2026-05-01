import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Phone / another PC se LAN IP (e.g. 192.168.x.x) par dev open karo to HMR / _next
  // resources block nahi honge, aur "JSON.parse" wali unhandledRejection bhi isi se aati hai.
  allowedDevOrigins: [
    "192.168.100.4",
    "127.0.0.1",
    "localhost",
  ],
};

export default nextConfig;
