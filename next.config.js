/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['raw.githubusercontent.com']
  }
}

module.exports = {
  // ... other config
  webpack: (config) => {
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', ...config.resolve.extensions];
    return config;
  },
};
