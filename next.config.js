/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    URL: "https://www.tucumanturismo.gob.ar/",
    LOCALIP: "http://10.20.20.5:3000/",
    LOCALPC : "http://localhost:3000/"
  }
}

module.exports = nextConfig
