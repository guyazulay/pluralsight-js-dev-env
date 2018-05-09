import path from 'path';

export default {
  debug: true, //debug info when run the build
  devtool: 'inline-source-map', // high compile speed vs. quality
  noInfo: false,// if should show or not the list of files that webpack has bundled(false means to show)
  entry: [ // entry point of the application. it can be an array of entry points.
            // it uses the node's path library and concat the__dirname to validate it is the correct path
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web', // web for application. node - for node server. electron - for js desktop apps.
  output: { // webpack won't generate any files for the development build. it will serve from memory.
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [], // e.g , hot reloading , linting etc
  module: { // tell webpack the type of files we want to handle 
            // loader tell webpack how to deal with specific file type
            //   
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
