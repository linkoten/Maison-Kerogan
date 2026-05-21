/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Bypass quota Vercel (images Hygraph deja optimisees via transformations WebP)
    domains: [
      "media.graphassets.com",
      "i.ibb.co",
      "eu-central-1-shared-euc1-02.graphassets.com",
    ],
  },
};

module.exports = nextConfig;
