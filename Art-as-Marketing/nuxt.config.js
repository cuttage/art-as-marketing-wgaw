import webpack from 'webpack'
import path from 'path'
import fs from 'fs'
const http2 = require('http2'); //remove to simulate https
//ATTENTION: If you don't want to use the modern build, in package.json replace: "build": "nuxt build", "start": "nuxt start", in nuxt.config.js eliminate: modern: true,
export default {
  mode: 'universal',
  env: {
    baseURL: (process.env.NODE_ENV === 'production' ? 'http://localhost:3000' : 'http://localhost:3000')
  },
  modern: true,
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no', id: 'viewport-meta' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  vue: {
    config: {
      silent: true
    }
  },
  server: {
    http2: { //change to https to simulate https
      key: fs.readFileSync(path.resolve(__dirname, 'server.key')),
      cert: fs.readFileSync(path.resolve(__dirname, 'server.crt'))
    }
  },
  router: {
    middleware: [
      'browser',
      'mobile',
      'pages'
    ]
  },
  loading: false,
  css: [
    '@/assets/scss/styles.scss'
  ],
  plugins: [
    {
      src: '~/plugins/eventBus.js'
    },
    '~/plugins/vue-composition-api.js'
  ],
  buildModules: [
    '@aceforth/nuxt-optimized-images'
  ],
  modules: [
    'nuxt-purgecss',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    [
      'nuxt-sass-resources-loader',
      [
        'assets/scss/file/_styles.scss'
      ]
    ],
    ['@nuxtjs/component-cache', {
      max: 10000,
      maxAge: 143340 / 3
    }]
  ],
  pwa: {
    manifest: {
      theme_color: '#D25593'
    }
  },
  styleResources: {
    scss: [
        'assets/scss/file/_styles.scss'
    ]
  },
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.runtime.esm.js'
    }
  },
  purgeCSS: {
    mode: 'postcss'
  },
  optimizedImages: {
    optimizeImages: true
  },
  build: {
    babel: {
      cacheDirectory: true,
      presets({ isServer }) {
        return [
          [
            require.resolve('@nuxt/babel-preset-app'),
            // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
            {
              buildTarget: isServer ? 'server' : 'client',
              corejs: { version: 3 },
              loose: true,
              shippedProposals: true
            }
          ]
        ]
      }
    },
    hardSource: true, /* When ready to build, turn true */
    loaders: {
      cssModules: {
        localIdentName: "[sha1:hash:hex:4]"
      }
    },
    terser: {
      terserOptions: {
        compress: {
          drop_console: true
        }
      }
    },
    transpile: [],
    extractCSS: true,
    // extract all your CSS to a single file:
    optimization: {
      splitChunks: {
        cacheGroups: {
          styles: {
            name: 'styles',
            test: /\.(css|vue)$/,
            chunks: 'all',
            enforce: true
          }
        }
      }
    },
    extend(config, {isDev, isClient}) {
      config.module.rules.forEach(rule => {
        if (String(rule.test) === String(/\.(png|jpe?g|gif|svg|webp)$/)) {
          // add a second loader when loading images
          rule.use.push({
            loader: '@aceforth/nuxt-optimized-images',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 100
              },
              svgo: {
                plugins: [
                  // use these settings for internet explorer for proper scalable SVGs
                  // https://css-tricks.com/scale-svg/
                  { removeViewBox: false },
                  { removeDimensions: true }
                ]
              },
              lqip: {
                base64: true,
                palette: false
              },
              webp: {
                progressive: true,
                quality: 100
              }
            }
          })
        }
      })
    },
    plugins: [],
  },
  render: {
    compressor: {
      level: 9,
      threshold: 0
    },
    bundleRenderer: {
      shouldPreload: (file, type) => {
        if (type === 'image') {
          return file === ['~/assets/img/image1.jpg', '~/assets/img/avatar.jpg']
        }
        if (type === 'font') {
          return /\.woff2$/.test(file)
        }
        return ['style'].includes(type)
      }
    }
  }
}
