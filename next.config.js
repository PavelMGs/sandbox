module.exports = {
  reactStrictMode: true,
  env: {
    first: 'leaf',
  },
   async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
    ]
  },
}
