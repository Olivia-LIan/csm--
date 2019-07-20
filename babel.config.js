module.exports = {
  presets: [
    '@vue/app',
    ['env', {
      'modules': false
    }]
  ],
  "ignore":[
    "./src/assets/mui-master/dist/js/mui.js"
  ],
  plugins:[
    [
      'component',
      {
        'libraryName':'mint-ui',
        'style':true
      }
    ]
  ]
}
