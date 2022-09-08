/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL: "https://www.tucumanturismo.gob.ar/"
  }
}

module.exports = nextConfig
