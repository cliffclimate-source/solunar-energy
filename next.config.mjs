/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ['image/avif', 'image/webp'],
  },
  // Permanent redirects: the two former EPCC pages were merged into /for-epcc.
  // 301s preserve SEO value and keep any shared/old links working.
  async redirects() {
    return [
      { source: '/bess-partner-for-epcc', destination: '/for-epcc', permanent: true },
      { source: '/epcc-partner-programme', destination: '/for-epcc', permanent: true },
      { source: '/what-we-do', destination: '/about', permanent: true },
    ];
  },
};

export default nextConfig;
