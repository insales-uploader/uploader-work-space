var extend = require('deepmix')
var fs = require('fs')
var imagemin = require('gulp-imagemin')
var postcss = require('gulp-postcss')
var jsValidate = require('gulp-jsvalidate');

/**
 * Активный магазин
 * Тут нужно указать активную директорию
 */
var shop = 'shop1';

process.argv.forEach((val, index) => {
  // Проверка параметра с активным магазином в консоли
  if (~val.indexOf('site=')) {
    var shopFolder = val.split('=')[1];
    var stat = fs.statSync(shopFolder);
    if(stat.isDirectory()) shop = shopFolder;
  }
});

/**
 * Настройки поумолчанию
 */
var defaultConfig = {
  account: {
    // id: '11111111111111111111111111',
    // token: '222222222222222222222',
    // url: 'shop-41254.myinsales.ru',
    http: true // Если сайт на https и отказывает работать, нужновы выставить false
  },
  theme: {
    //id: '854716',
    root: './' + shop,
    backup: true, // Создавать backup после загрузки?
    assetsSync: true, // Делать синхронизацию с директорией assets?
  },
  plugins: {
    // файлы которые не обрабатываются плагинами
    exclude: ['*.min.js', '*.min.css', '*.liquid'],
    // gulp плагины для стилей
    style: function(stream) {
        return stream
          .pipe(postcss().on('error',  function (err) {
            console.log(err.message)
          }))
    },
    // gulp плагины для скриптов
    script: function(stream) {
        return stream
          .pipe(jsValidate())
    },
    // gulp плагины для изображений
    img: function(stream) {
        return stream
          .pipe(imagemin())
    }
  },
  util: {
    openBrowser: true // Открывать браузер при запуске стрима?
  }
}

module.exports = extend(defaultConfig, require('./'+shop));
