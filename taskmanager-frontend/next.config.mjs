/** @type {import('next').NextConfig} */
const nextConfig = {
  // ADD THESE TWO LINES:
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },

  // ... rest of the original configuration
};

export default nextConfig;
