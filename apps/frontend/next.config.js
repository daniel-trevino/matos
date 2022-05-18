require('dotenv').config({ path: '../../.env' })
const withTM = require('next-transpile-modules')(['ui', 'whitelist'])

module.exports = withTM({
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
})
