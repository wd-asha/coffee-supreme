$(function () {
    let
        quantityItem = $('.quantity-has-select'),
        total = $('.total');

    quantityItem.on('click', function () {
        $(this).addClass('quantity-select')
            .delay(500)
            .queue(function () {
                $(this).removeClass('quantity-select').dequeue()
            });

        if ($(this).text() === "+") {
            quantityInt = parseInt($(this).prev().text());
            $(this).prev().text(String(quantityInt + 1));
            subtotal = parseFloat($(this).parent().next().children(1).text()).toFixed(2);
            subtotal2 = parseFloat(subtotal) + 12.50;
            $(this).parent().next().children(1).text(parseFloat(subtotal2).toFixed(2));
            total1 = parseFloat(total.text()).toFixed(2);
            total2 = parseFloat(total1) + 12.50;
            total.text(parseFloat(total2).toFixed(2));
        }

        if ( ($(this).text() === "-") && (parseInt($(this).prev().prev().text()) > 1) ) {
            quantityInt = parseInt($(this).prev().prev().text());
            $(this).prev().prev().text(String(quantityInt - 1));
            subtotal = parseFloat($(this).parent().next().children(1).text()).toFixed(2);
            subtotal2 = parseFloat(subtotal) - 12.50;
            $(this).parent().next().children(1).text(parseFloat(subtotal2).toFixed(2));
            total1 = parseFloat(total.text()).toFixed(2);
            total2 = parseFloat(total1) - 12.50;
            total.text(parseFloat(total2).toFixed(2));
        }
    })

});