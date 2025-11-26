
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    ZIHIN_LIVE_API_KEY: process.env.ZIHIN_LIVE_API_KEY,
  },
};

module.exports = nextConfig;
