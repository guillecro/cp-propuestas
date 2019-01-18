module.exports = {
  // css: {
  //   loaderOptions: {
  //     sass: {
  //       data: `
  //         @import "@/assets/sass/_componentGlobals.scss";
  //         @import "~bulma/sass/utilities/initial-variables.sass";
  //         @import "~bulma/sass/utilities/mixins.sass";
  //       `,
  //     },
  //   },
  // },
  devServer: {
    // disableHostCheck: true,
    proxy: {
      '^/api': {
        target: 'http://localhost:9999',
        ws: true,
        changeOrigin: true
      },
    }
  },
};
