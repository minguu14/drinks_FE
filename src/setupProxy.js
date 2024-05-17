const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api/",
    createProxyMiddleware({
      target: "https://661c-112-146-54-147.ngrok-free.app",
      changeOrigin: true,
    })
  );
};
