// rollup.config.js

import minify from 'rollup-plugin-minify'

export default {
  entry: './src/cssobj-helper-showcss.js',
  moduleName: 'showcss',
  useStrict: false,
  plugins:[
    minify({iife: 'dist/cssobj-helper-showcss.min.js'})
  ],
  targets: [
    { format: 'es',   dest: 'dist/cssobj-helper-showcss.es.js'   },
    { format: 'cjs',  dest: 'dist/cssobj-helper-showcss.cjs.js'  },
    { format: 'amd',  dest: 'dist/cssobj-helper-showcss.amd.js'  },
    { format: 'iife', dest: 'dist/cssobj-helper-showcss.iife.js' },
  ]
}
