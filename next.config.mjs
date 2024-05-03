/** @type {import('next').NextConfig} */
const nextConfig = {
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
  env: {
    GITHUB_APP_CLIENT_ID: 'Iv23liniCGdWWMhnaBIx',
    GITHUB_APP_CLIENT_SECRET: 'ebbXXXXXXX5ad0dXXXXXXXXXX9a940XXXXXXXa',
    NEXTAUTH_SECRET: 'mQ46qpFwfXXXXXXXXqlm19qBXXXXXXXXXXwerwXXXXXXXXnKjM=',
  },
};

export default nextConfig;
