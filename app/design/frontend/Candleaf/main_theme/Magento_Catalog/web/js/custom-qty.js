define(['jquery'
], function ($) {
    'use strict'
    let $qty = $('.qty-default');
    $('.quantity-plus').click(function () {
        $qty.val(Number($qty.val()) + 1);
    });

    $('.quantity-minus').click(function () {
        var value = Number($qty.val()) - 1;
        if (value > 0) {
            $qty.val(value);
        }

    });
});
