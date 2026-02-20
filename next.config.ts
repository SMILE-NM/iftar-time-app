import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
};

export default nextConfig;

// import type { NextConfig } from 'next';
// import withPWAInit from 'next-pwa';

// const withPWA = withPWAInit({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   disable: process.env.NODE_ENV === 'development',
// });

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
// };

// export default withPWA(nextConfig);
