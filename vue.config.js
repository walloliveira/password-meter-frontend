module.exports = {
  assetsDir: './src/assets',
  devServer: {
    overlay: {
      warnings: false,
      errors: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:9090',
      },
    },
  },
};
