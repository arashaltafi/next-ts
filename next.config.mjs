/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  i18n: {
    locales: ['en', 'fa'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'arashaltafi.ir',
        port: '',
        pathname: '/**',
      },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/blog1',
        destination: '/',
        permanent: true,
      },
    ];
  },
  env: {
    GITHUB_APP_CLIENT_ID: 'Iv23liniCGdWWMhnaBIx',
    GITHUB_APP_CLIENT_SECRET: 'ebbXXXXXXX5ad0dXXXXXXXXXX9a940XXXXXXXa',
    NEXTAUTH_SECRET: 'mQ46qpFwfXXXXXXXXqlm19qBXXXXXXXXXXwerwXXXXXXXXnKjM=',
  },

  org: "example-org",
  project: "example-project",
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: false,
};

export default {
  ...nextConfig,
  //react-pdf-viewer
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.node$/,
        use: 'ignore-loader',
      });
    }

    // Exclude canvas.node from being parsed
    config.module.noParse = /\.node$/;

    return config;
  },
};
