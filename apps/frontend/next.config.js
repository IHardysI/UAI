const PROXY_PATH = process.env.NEXT_PUBLIC_FRONT_API_URL || '/api/proxy';
const API_URL = process.env.NEXT_PUBLIC_FRONT_PROXY_API_URL || 'http://localhost:3000';

const moduleExports = {
  reactStrictMode: false,
  images: {
    unoptimized: Boolean(Number(process.env.UNOPTIMIZED_IMAGES)),
    deviceSizes: [767, 980, 1156, 1400, 1920],
    formats: ['image/webp'],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: `${PROXY_PATH}/:path*`,
        destination: `${API_URL}/:path*`,
      },
    ];
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find((rule) =>
      rule.test?.test?.('.svg')
    );
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }
    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/,
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...(fileLoaderRule.resourceQuery?.not || []), /url/] },
        use: ['@svgr/webpack'],
      }
    );
    return config;
  },
};

module.exports = moduleExports;
