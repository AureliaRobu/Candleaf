'use strict';

let combo = require('./_combo'),
    themes = require('./_themes'),
    themeOptions = {},
    commonOptions = {
        interupt: true,
        reload: false,
        livereload: false,
        spawn: false
    };

for(let name in themes) {
    let theme = themes[name];

    if(theme.grunt) {

        themeOptions[name + 'Less'] = {
            files: combo.lessWatchFiles(name),
            tasks: ['css:' + name],
            options: commonOptions
        };

        themeOptions[name + 'Css'] = {
            files: combo.cssWatchFiles(name),
            options: {
                livereload: combo.getLiveReload(name)
            }
        };

        themeOptions[name + 'Img'] = {
            files: combo.imgWatchFiles(name),
            tasks: ['concurrent:' + name + 'MinifyImages']
        };

        themeOptions[name + 'SvgSprite'] = {
            files: combo.svgSpriteWatchFiles(name),
            tasks: ['svg_sprite:' + name]
        };

        themeOptions[name + 'PngSprite'] = {
            files: combo.pngSpriteWatchFiles(name),
            task: ['sprite:' + name]
        };

        themeOptions[name + 'Js'] = {
            files: combo.jsThemeSourceFiles(name),
            tasks: ['jshint:' + name, 'babel:' + name]
        };
    }
}

themeOptions['themeTemplates'] = {
    files: combo.themeTemplateWatchFiles(),
    tasks: ['exec:block'],
    options: commonOptions
};

themeOptions['themeXml'] = {
    files: combo.themeXmlWatchFiles(),
    tasks: ['exec:xml'],
    options: commonOptions
};

themeOptions['appCode'] = {
    files: combo.appCodeWatchPhpFiles(),
    tasks: ['exec:block'],
    options: commonOptions
};

themeOptions['appCodeTemplate'] = {
    files: combo.appCodeWatchTemplateFiles(),
    tasks: ['exec:block'],
    options: commonOptions
};

themeOptions['appCodeXml'] = {
    files: combo.appCodeWatchTemplateFiles(),
    tasks: ['exec:xml'],
    options: commonOptions
};

themeOptions['appCodeJs'] = {
    files: combo.jsAppCodeSourceFiles(),
    tasks: ['jshint:appCode', 'babel:appCode']
};

module.exports = themeOptions;
