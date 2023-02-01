#How to install and use grunt in Magento 2.

1. run ```composer require --dev mage2tv/magento-cache-clean```
2. ```php bin/magento setup:upgrade && php bin/magento indexer:reindex```
3. ```php bin/magento setup:static-content:deploy -f```
4. Copy package.json and Gruntfile.js to your project root directory.
5. run ```npm install```
6. if you have issue with phantomjs-prebuilt@2.1.13 run ```npm install --ignore-scripts```
7. go to:
    * gruntForMagento/configs/_themes.js and change [Vendor]/[ThemeName] on site obj
    * gruntForMagento/configs/_settings.js and change [Vendor]
    * gruntForMagento/configs/babel.js and change [Vendor]

### How to use grunt

Compile everything use command:

```bash
grunt
```

Runs the following commands:

1. `grunt exec:[themeName]` - Cleans Pub Static Directories for all sites in _themes.js that have `grunt: true` & creates symlinks to the source files.
2. `grunt concurrent:[themeName]Sprite` - Generates svg & png sprites sheets.
3. `grunt concurrent:[themeName]Compile` - Compiles Less & Babel for the Theme, Minifies Images in app/design/frontend/[vendor]/[theme]/web/src to app/design/frontend/[vendor]/[theme]/web/images.
4. `grunt jshint:appCode` - Runs static code analysis on javascript in the app/code source directories.
5. `grunt babel:appCode` - Compiles Babel from app/code source directories.
6. `grunt watch` - Starts the file watchers.
7. `grunt concurrent:[themeName]Sprite` - Generates svg & png sprites sheets.
8. `grunt concurrent:[themeName]MinifyImages` - Minifies Images in app/design/frontend/[vendor]/[theme]/web/src to app/design/frontend/[vendor]/[theme]/web/images.
9. `grunt jshint:[themeName]` - Runs static code analysis on javascript in the theme source directories.
10. `grunt babel:[themeName]` - Compiles ES6 javascript from the theme source directories.
11. `grunt dev:[themeName]` - Sets up symlinks for a theme's less files.
