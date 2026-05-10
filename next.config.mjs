/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: new URL(".", import.meta.url).pathname,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ]
  }
};

export default nextConfig;
