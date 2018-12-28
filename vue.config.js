module.exports = {
  lintOnSave: false,
  devServer: {
  proxy: {
    '/api': {
      // target: 'http://api.c.com/',
      target: 'http://m.021olmyy.com/api',
      ws: true,
      changeOrigin: true,
      pathRewrite:{
        '^/api':''
      }
     }
    }
  }
} 