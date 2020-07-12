const proxy = require("http-proxy-middleware");

module.exports = function(app) {
    app.use(
        proxy("/login",{
            target: "https://sableassent.net/api/public/api",
            secure: false,
            changeOrigin: true
        }
            
        )
    );
}