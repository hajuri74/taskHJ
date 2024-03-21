const { defineConfig } = require('@vue/cli-service')
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  
  // resolve: {
  //   alias: {
  //     '@': path.join(__dirname, 'src/')
  //   }
  // },

  devServer: {
    proxy: {
      "/crawl": {
        target: "http://localhost:3000",
        changeOrigin: true,
        ws: false,
      }
    },
  },

  chainWebpack: (config) => {
    config.plugin('define').tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: 'true',
        __VUE_PROD_DEVTOOLS__: 'false',
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
      })
      return definitions
    })
  }
  
})