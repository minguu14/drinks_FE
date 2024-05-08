const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api/",
    createProxyMiddleware({
      target: "https://ff4b-175-193-206-153.ngrok-free.app",
      changeOrigin: true,
    })
  );
};
