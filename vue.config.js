const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: [
    'vuetify',
  ],
  devServer: {
    proxy: {
      '^/api': {
        target: 'https://united-printing-backend.vercel.app/api',
      },
    }
  },
});
