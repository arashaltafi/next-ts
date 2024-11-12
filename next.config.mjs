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
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3000',
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
  async rewrites() {
    return [
      // {
        // source: '/%D8%AF%D8%B1%D8%A8%D8%A7%D8%B1%D9%87-%D9%85%D8%A7', //درباره-ما
        // destination: '/about',
      // },
      {
        source: '/' + encodeURIComponent('درباره-ما'), //درباره-ما 
        destination: '/about',
      }
    ];
  },
  env: {
    GITHUB_APP_CLIENT_ID: 'Iv23liniCGdWWMhnaBIx',
    GITHUB_APP_CLIENT_SECRET: 'ebbXXXXXXX5ad0dXXXXXXXXXX9a940XXXXXXXa',
    NEXTAUTH_SECRET: 'mQ46qpFwfXXXXXXXXqlm19qBXXXXXXXXXXwerwXXXXXXXXnKjM=',
  },
  // async headers() {
    // return [
      // {
        // source: "/(.*)",
        // headers: [
          // {
          //   key: "X-Frame-Options",
          //   value: "DENY",
          // },
          // {
          //   key: "X-Content-Type-Options",
          //   value: "nosniff",
          // },
          // {
          //   key: "X-XSS-Protection",
          //   value: "1; mode=block",
          // },
          // {
          //   key: "Referrer-Policy",
          //   value: "no-referrer",
          // },
          // {
          //   key: 'Strict-Transport-Security',
          //   value: 'max-age=31536000; includeSubDomains; preload',
          // },
          // {
          //   key: 'Content-Security-Policy',
          //   value: "default-src 'self'; img-src 'self' data:; script-src 'self' https://arashaltafi.ir; style-src 'self' https://arashaltafi.ir;",
          // },
        // ],
    //   },
    // ];
  // },
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
