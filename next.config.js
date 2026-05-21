/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 86400, // Cache les images optimisées 24h sur le CDN Vercel
    formats: ["image/avif", "image/webp"], // Servir AVIF/WebP aux navigateurs compatibles
    domains: [
      "media.graphassets.com",
      "i.ibb.co",
      "eu-central-1-shared-euc1-02.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
