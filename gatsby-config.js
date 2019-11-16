const path = require("path");

module.exports = {
  plugins: [
    "gatsby-plugin-sass",

    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
          require("autoprefixer"),
        ],
      },
    },
    {
      resolve: "gatsby-plugin-alias-imports",
      options: {
        alias: {
          "@src": path.join(__dirname, "src"),
          "@components": path.join(__dirname, "src/components"),
          "@layouts": path.join(__dirname, "src/components/layouts"),
          "@pages": path.join(__dirname, "src/pages"),
          "@styles": path.join(__dirname, "src/styles"),
          "@static": path.join(__dirname, "static"),
          "@store": path.join(__dirname, "src/store"),
          "@providers": path.join(__dirname, "src/components/providers"),
          "@common": path.join(__dirname, "src/components/common"),
          "@containers": path.join(__dirname, "src/components/containers"),
        },
      },
    },
  ],
};
