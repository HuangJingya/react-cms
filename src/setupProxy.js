const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://cnodejs.org ",
      //这里写的目标服务器
      changeOrigin: true,
    })
  );
};
