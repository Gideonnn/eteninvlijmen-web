module.exports = {
  devServer: {
    proxy: {
      '/entries': {
        target: process.env.VUE_APP_AWS_ENDPOINT_BASE_URL,
        changeOrigin: true,
      },
      '/users': {
        target: process.env.VUE_APP_AWS_ENDPOINT_BASE_URL,
        changeOrigin: true,
      },
    },
  },
};
