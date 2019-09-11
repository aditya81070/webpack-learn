const path = require('path');

module.exports = env => ({
  output: {
    path: path.resolve('./', 'dev-build')
  },
  module: {
    rules: [
      {
        test: /\.(jpg|png|gig)$/i,
        use: {
          loader: 'url-loader',
          options: {
            limit: 32000,
            name: '[name].[ext]',
            outputPath: (url, resourcePath, context) => {
              /*
                url: others.png
                resourcePath: /home/neo/projects/webpack-learn/src/img/others.png
                context: /home/neo/projects/webpack-learn
              */
              /*
                we can get relative path using path.relative(resourcePath, context)
               */
              console.log(`url:${url}`);
              console.log(`resourcePath: ${resourcePath}`);
              console.log(`context: ${context}`);
              if (/icons/.test(resourcePath)) {
                return `icons/${url}`;
              }
              return `assets/img/${url}`;
            }
          }
        }
      },
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.md/,
        use: ['html-loader', 'markdown-loader']
      }
    ]
  }
});
