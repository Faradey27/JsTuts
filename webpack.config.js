module.exports = {
    module: {
        loaders: [
            { test: /\.css/, loader: "style-loader!css-loader" },
            { test: /\.gif/, loader: "url-loader?limit=10000&minetype=image/gif" },
            { test: /\.jpg/, loader: "url-loader?limit=10000&minetype=image/jpg" },
            { test: /\.png/, loader: "url-loader?limit=20000&minetype=image/png" },
            { test: /\.jsx/, loader: "traceur?runtime=true&sourceMaps=true!jshint-loader!jsx-loader" },
            { test: /\.js$/, loader: "traceur?runtime=true&sourceMaps=true!jshint-loader", exclude: [/node_modules/, /public/] },
            { test: /\.less/, loader: "style-loader!css-loader!less-loader"},
            { test: /\.json/, loader: "json-loader"},
            { test: /\.woff/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf/, loader: "url-loader?limit=10000&mimetype=application/font-ttf" },
            { test: /\.eot/, loader: "url-loader?limit=10000&mimetype=application/font-eot" },
            { test: /\.svg/, loader: "url-loader?limit=50000&mimetype=image/svg+xml" }
        ]
    },
    entry: {
        firstPage: "./src/Frontend/FirstPage/main.js"
       // mainPage: "./src/new.js"
    },
    output: {
        path: __dirname + '/src/Backend/views/build/',
        filename: "[name].bundle.js",
        chunkFilename: "[id].chunk.js"
    },
    jshint: {
        // Env
        "browser": true,
        "node": true,
        "jquery": true,

        // Restrictions
        "bitwise": true,
        "newcap": false,
        "noempty": true,
        "esnext": true,
        "globalstrict": true,
        "freeze": true,
        "undef": true,
        "unused": true,
        "maxcomplexity": 25,
        "latedef": true,
        "smarttabs": false,
        "trailing": false,
        "laxbreak": true,

        // Style
        "maxparams": 4,

        // Loder options
        "emitErrors": false,
        "failOnHint": false,

        "globals": {
            "$": true,
            "tinymce" :true,
            "Highcharts": true
        }
    }
};