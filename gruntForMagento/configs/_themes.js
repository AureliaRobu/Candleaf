'use strict';

/**
 * Contains Configuration information for all themes within your
 * build.
 * @type Object
 */
const themes = {
    blank: {
        grunt: false,
        appPath: 'frontend',
        themePath: 'Magento/blank',
        locale: 'en_US',
        stylesheets: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        stylesheetsSourceLanguage: 'less',
        javascript: [],
        bowerFallback: [],
        themeFallback: []
    },
    luma: {
        grunt: false,
        appPath: 'frontend',
        themePath: 'Magento/luma',
        locale: 'en_US',
        stylesheets: [
            'css/styles-m',
            'css/styles-l'
        ],
        stylesheetsSourceLanguage: 'less',
        javascript: [],
        bowerFallback: [],
        themeFallback: []
    },
    backend: {
        grunt: false,
        appPath: 'adminhtml',
        themePath: 'Magento/backend',
        locale: 'en_US',
        stylesheets: [
            'css/styles-old',
            'css/styles'
        ],
        stylesheetsSourceLanguage: 'less',
        javascript: [],
        bowerFallback: [],
        themeFallback: []
    },
    site: {
        grunt: true,
        appPath: 'frontend',
        themePath: 'Test/test',
        dev_url: 'learn.loc',
        locale: 'en_US',
        stylesheets: [
            'css/styles-m',
            'css/styles-l'
        ],
        stylesheetsSourceLanguage: 'less',
        javascript: [],
        bowerFallback: [],
        themeFallback: ['luma']
    },
};

module.exports = themes;
