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
    publicPath: '/'  // Ensure proper path resolution
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
          to: path.resolve(__dirname, 'dist/assets/dice-box/ammo/ammo.wasm.wasm')  // Match the expected path
        }
      ]
    })
  ],
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
    }
  }
}
