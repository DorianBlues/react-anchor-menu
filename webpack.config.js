module.exports = {
    mode: 'development',
    entry: { app: './demo/index.tsx' },
    resolve: {
        extensions: ['.tsx', '.js', '.less'],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            },
            {
                test: /\.less$/i,
                use: [
                    'style-loader', 
                    {
                        loader: "css-loader",
                        options: {
                          modules: true,
                        }
                    }
                ]
            }
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
    devServer: {
        publicPath: '/',
        contentBase: './',
        port: 9000
    }
};