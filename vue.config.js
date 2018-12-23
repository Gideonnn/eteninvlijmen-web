module.exports = {
  devServer: {
    proxy: {
      '/entries': {
        target: process.env.VUE_APP_API_BASE_URL,
        changeOrigin: true,
      },
      '/users': {
        target: process.env.VUE_APP_API_BASE_URL,
        changeOrigin: true,
      },
    },
  },
};
