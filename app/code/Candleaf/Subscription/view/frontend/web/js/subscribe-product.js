define([
    'jquery'
], function ($) {
    'use strict';
    const $radios = $('input:radio');

    $radios.change(function () {
        $radios.parent().removeClass('selected');
        $(this).parent().addClass('selected');
    });

});
