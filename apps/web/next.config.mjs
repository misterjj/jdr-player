/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  transpilePackages: ["@workspace/ui"],
    'experimental.turbopackUseSystemTlsCerts': true,
  images: {
    domains: ['i.ytimg.com'],
    remotePatterns: [new URL('https://i.ytimg.com/**')],
    unoptimized: true
  },
}

export default nextConfig