module.exports = {
    components: "src/components/ui/**/*.{js,jsx,ts,tsx}",
    propsParser: require("react-docgen-typescript").parse,
    webpackConfig: require("./config/webpack.config"),
};