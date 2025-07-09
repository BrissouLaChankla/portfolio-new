/** @type {import('next').NextConfig} */

export const dynamic = "force-static";
export const revalidate = false;

const nextConfig = {
  output: "export",
  trailingSlash: true,
  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
  },
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
  // Permettre les routes dynamiques pour le sitemap
  experimental: {
    dynamicParams: true,
  },
};

export default nextConfig;
