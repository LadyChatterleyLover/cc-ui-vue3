const isPro = process.env.NODE_ENV !== 'production'

module.exports = {
  publicPath: isPro ? './' : '',
  css: {
    loaderOptions: {
      scss: {
        prependData: `
        @import "@/styles/_vars.scss";
        @import "@/styles/functions.scss";
        @import "@/styles/mixin.scss";`
      },
    }
  }
}