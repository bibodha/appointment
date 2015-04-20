module.exports = {
    entry: {
        app: ['./public/javascripts/appointment.jsx']
    },
    output: {
        path: './public/javascripts/',
        filename: '/appointment.js'
    },
    module: {
        loaders: [
            { test: /\.jsx$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
