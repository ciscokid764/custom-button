module.exports = {
   module: {
       rules: [
           {
               test: /\.scss$/,
               loaders: {
                  loader: 'style-loader',
                  loader: 'css-loader',
                  loader: 'sass-loader'
                }
            }
       ]
   }
}