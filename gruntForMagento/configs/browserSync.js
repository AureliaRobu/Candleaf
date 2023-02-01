const combo = require('./_combo'),
      themes = require('./_themes');

let themeOptions = {};

for (let name in themes) {
    let theme = themes[name];
    if (theme.grunt && theme.dev_url) {
        themeOptions[name + 'Dev'] = {
            bsFiles: {
                src: combo.browserSyncFiles(name)
            },
            options: {
                watchTask: true,
                proxy: theme.dev_url
            }
        };
    }
}
module.exports = themeOptions;
