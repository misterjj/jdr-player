/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
    'experimental.turbopackUseSystemTlsCerts': true,
  images: {
    domains: ['i.ytimg.com'],
    remotePatterns: [new URL('https://i.ytimg.com/**')],
  },
}

export default nextConfig