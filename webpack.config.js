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
    publicPath: 'https://phil-bubble.github.io/dice-box-bundle-v2/'
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
    // Disable code splitting entirely
    splitChunks: false,
    runtimeChunk: false
  }
}
