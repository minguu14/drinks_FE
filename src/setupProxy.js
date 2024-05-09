const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api/",
    createProxyMiddleware({
      target: "https://e4f1-112-146-54-147.ngrok-free.app",
      changeOrigin: true,
    })
  );
};
