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
        test: /\.(sc|c)ss/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                outputStyle: 'expanded'
              }
            }
          }
        ]
      },
      {
        test: /\.md/,
        use: ['html-loader', 'markdown-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/[name].css'
    })
  ]
});
