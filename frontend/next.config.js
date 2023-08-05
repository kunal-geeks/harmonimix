/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {}
module.exports = {
    // Other configuration options...
    webpack: (config) => {
      config.resolve.alias['@src'] = path.join(__dirname, 'src');
      return config;
    },
  };
module.exports = nextConfig
