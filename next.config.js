/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "source.unsplash.com",
      "images.unsplash.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
  output: 'standalone',
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  trailingSlash: false,
  compress: true,
};

module.exports = nextConfig;
