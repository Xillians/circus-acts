/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    // other configurations...
  
    experimental: {
      logging: {
        level: 'verbose',
      },
    },
  
    // export the site as static HTML
    output: 'export',
  };
  
  module.exports = nextConfig;