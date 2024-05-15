/** @type {import('next').NextConfig} */
const nextConfig = {
  // workaround to prevent _trash-folder from being built
  webpack: (config) => {
    config.module.rules?.push({
      test: /_trash/,
      loader: "ignore-loader",
    });

    return config;
  },
};

export default nextConfig;
