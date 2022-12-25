/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    URL: process.env.URL,
  },
  images: {
    domains: [
      "munchiesprod.s3.ap-southeast-1.amazonaws.com",
      "munchiesprod.s3.amazonaws.com",
      "api.lorem.space",
    ],
  },
};

module.exports = nextConfig;
