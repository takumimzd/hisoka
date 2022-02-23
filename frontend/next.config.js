/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    server: "http://localhost:5000"
  }
}

module.exports = nextConfig
