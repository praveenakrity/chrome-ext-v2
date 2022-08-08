console.log(`from env.js`)
// tiny wrapper with default env vars
module.exports = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  SECRET_CODE: `dfgffgh23435234`,
  ACCESS_TOKEN: `acces_trekwjt4iju52o`,
  STATIC_PAGE: `http://localhost:5500/dist/static.html`,
  SERVE_STATIC_PAGE: `http://localhost:8080/index.html`
};