const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = env => ({
  module: {
    rules: [
      {
        test: /\.(jpg|png|gig)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 32000,
            outputPath: 'img'
          }
        }
      },
      {
        test: /\.css/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    })
  ]
});
