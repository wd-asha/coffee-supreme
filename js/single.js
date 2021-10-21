$(function () {
    let
        grindItem = $('.grind-item'),
        weightItem = $('.weight-item'),
        quantityItem = $('.quantity-has-select'),
        quantity = $('#quantity'),
        heart = $('.heart i');

    heart.on('click', function () {
        heart.toggleClass('active')
    });

    grindItem.on('click', function () {
        grindItem.removeClass('select-grind');
        $(this).addClass('select-grind');
    });

    weightItem.on('click', function () {
        weightItem.removeClass('select-weight');
        $(this).addClass('select-weight');
    });

    quantityItem.on('click', function () {
        $(this).addClass('quantity-select')
            .delay(500)
            .queue(function () {
                $(this).removeClass('quantity-select').dequeue()
            });

        if ($(this).text() === "+") {
            quantityInt = parseInt(quantity.text());
            quantity.text(String(quantityInt + 1));
        }

        if ( ($(this).text() === "-") && (parseInt(quantity.text()) > 1) ) {
            quantityInt = parseInt(quantity.text());
            quantity.text(String(quantityInt - 1));
        }
    })

});