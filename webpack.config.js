const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/entry.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'dice-box.bundle.js',
    library: {
      name: 'DiceBox',
      type: 'umd',
      export: 'default'
    },
    globalObject: 'this',
    publicPath: 'https://phil-bubble.github.io/dice-box-bundle-v2/',
    chunkFilename: '[name].dice-box.bundle.js'
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'node_modules/@3d-dice/dice-themes/themes'),
          to: path.resolve(__dirname, 'dist/assets/dice-box/themes')
        },
        {
          from: path.resolve(__dirname, 'node_modules/@3d-dice/dice-box/dist/assets/ammo/ammo.wasm.wasm'),
          to: path.resolve(__dirname, 'dist/assets/dice-box/ammo/ammo.wasm.wasm')
        }
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.wasm$/,
        type: 'asset/resource',
        generator: {
          filename: 'assets/dice-box/ammo/[name][ext]'
        }
      }
    ]
  },
  experiments: {
    asyncWebAssembly: true
  },
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'async',
      minSize: 20000,
      minRemainingSize: 0,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          reuseExistingChunk: true
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true
        }
      }
    }
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
}
