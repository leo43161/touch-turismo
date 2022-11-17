/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL: "https://www.tucumanturismo.gob.ar/",
    LOCALIP: "https://turismo-touch.netlify.app",
    LOCALPC : "http://localhost:3000/"
  }
}

module.exports = nextConfig
