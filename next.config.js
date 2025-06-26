module.exports = {
  // output: "export", // Commented out for Amplify deployment - only use for static export
  // assetPrefix: "/", // Not needed for Amplify
  // exportTrailingSlash: true, // Only needed for static export
  basePath: "",
  trailingSlash: true,
  swcMinify: true,
  images: {
    unoptimized: true, // Keep this for Amplify compatibility
    domains: [], // Add any external image domains here if needed
  },
  async redirects() {
    return [
      {
        source: "/blog",
        destination: "/",
        permanent: true
      }
    ];
  },
  // Optimize for Amplify deployment
  // experimental: {
  //   optimizeCss: true, // Disabled - requires critters package
  // },
};
