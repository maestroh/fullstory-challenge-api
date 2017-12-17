const isProd = process.env.NODE_ENV === "production";
module.exports = {
  assetPrefix: isProd ? "http://nael.io/fullstory-challenge" : "",
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
      "/magic": { page: "/magic" }
    };
  }
};
