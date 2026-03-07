/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://alashed.kz",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  sitemapSize: 5000,
  exclude: ["/api/*"],
  transform: async (config, path) => {
    if (path === "/") {
      return { loc: path, changefreq: "daily", priority: 1.0, lastmod: new Date().toISOString() }
    }
    if (path === "/blog") {
      return { loc: path, changefreq: "daily", priority: 0.9, lastmod: new Date().toISOString() }
    }
    if (path.startsWith("/blog/category/")) {
      return { loc: path, changefreq: "weekly", priority: 0.7, lastmod: new Date().toISOString() }
    }
    if (path.startsWith("/blog/")) {
      return { loc: path, changefreq: "monthly", priority: 0.8, lastmod: new Date().toISOString() }
    }
    return { loc: path, changefreq: config.changefreq, priority: config.priority, lastmod: new Date().toISOString() }
  },
}
