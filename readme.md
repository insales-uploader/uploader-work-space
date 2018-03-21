# Рабочий проект для insales-uploader

> [insales <> uploader](https://github.com/insales/insales-uploader)

## Установка

`npm i`

## Настройка

**insales-config.js** - тут лежат дефолтные настройки, в переменной `shop` переключается рабочая директория.

**/shop1/** - пример рабочей директории.

**index.js** - внутри каждой рабочей директрии находится файл с настройками доступа к магазину.

#### Запуск методов:

`uploader <название метода> <название метода>`

##### Примеры:

`uploader` - запустит метод `start`

`uploader download` - запустит метод `download`

`uploader download stream` - запустит методы `download stream`

> Указать активную директорию можно через параметр в консоли `site=<имяДиректории>`.
> Имя директории не должно содержать пробелов!

`uploader start site=shop2` - запустит метод `start` с активной директорией `shop2`


![InSales](https://cdn.rawgit.com/insales/insales-uploader/master/insales.png)
