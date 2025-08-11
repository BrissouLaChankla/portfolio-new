/** @type {import('next').NextConfig} */

export const dynamic = "force-static";
export const revalidate = false;

const nextConfig = {
  output: "export",
  trailingSlash: true,

  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "fbiosfgcdaoddmqsmzmv.supabase.co",
        port: "",
      },
    ],
  },
};

export default nextConfig;
