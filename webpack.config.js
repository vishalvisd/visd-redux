var path = require("path");

const getBabelPluginsList = () => {
    let plugins = [];
    plugins.push([
        "transform-class-properties"
    ]);
    plugins.push([
        "transform-object-rest-spread"
    ]);
    plugins.push([
        "transform-es2015-template-literals"
    ]);
    return plugins;
};

module.exports = {
    cache: true,
    entry: {
        index: "./src/visdReduxAdapter.js"
    },
    output: {
        path: path.join(__dirname),
        filename: "[name].js",
        libraryTarget: "umd",
        library: "[name]"
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["env"],
                            ["stage-0"],
                            ["stage-1"]
                        ],
                        plugins: getBabelPluginsList(),
                    }
                }]
            }
        ]
    }
};
