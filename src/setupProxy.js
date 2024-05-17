const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = (app) => {
  app.use(
    "/api/",
    createProxyMiddleware({
      target: "https://k102d93527f43a.user-app.krampoline.com/",
      changeOrigin: true,
    })
  );
};
