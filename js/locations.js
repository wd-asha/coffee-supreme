$(function () {
    let
        location = $('.locations-list .location'),
        location1 = $('#locations1'),
        location2 = $('#locations2'),
        location3 = $('#locations3'),
        location4 = $('#locations4'),
        locationsText1 = $('#locationsText1'),
        locationsText2 = $('#locationsText2'),
        locationsText3 = $('#locationsText3'),
        locationsText4 = $('#locationsText4'),
        locationsImg1 = $('#locationsImg1'),
        locationsImg2 = $('#locationsImg2'),
        locationsImg3 = $('#locationsImg3'),
        locationsImg4 = $('#locationsImg4');

    location.on('click', function () {
        location.each(function () {
           location.removeClass('active');
        });

        $(this).addClass('active');
        if(this.id === "location1") {
            locationsText2.fadeOut(100);
            locationsText3.fadeOut(100);
            locationsText4.fadeOut(100);
            locationsText1.fadeIn(600);
            locationsImg2.fadeOut(100);
            locationsImg3.fadeOut(100);
            locationsImg4.fadeOut(100);
            locationsImg1.fadeIn(600);
        }

        if(this.id === "location2") {
            locationsText1.fadeOut(100);
            locationsText3.fadeOut(100);
            locationsText4.fadeOut(100);
            locationsText2.fadeIn(600);
            locationsImg1.fadeOut(100);
            locationsImg3.fadeOut(100);
            locationsImg4.fadeOut(100);
            locationsImg2.fadeIn(600);
        }

        if(this.id === "location3") {
            locationsText1.fadeOut(100);
            locationsText2.fadeOut(100);
            locationsText4.fadeOut(100);
            locationsText3.fadeIn(600);
            locationsImg1.fadeOut(100);
            locationsImg2.fadeOut(100);
            locationsImg4.fadeOut(100);
            locationsImg3.fadeIn(600);
        }

        if(this.id === "location4") {
            locationsText1.fadeOut(100);
            locationsText2.fadeOut(100);
            locationsText3.fadeOut(100);
            locationsText4.fadeIn(600);
            locationsImg1.fadeOut(100);
            locationsImg2.fadeOut(100);
            locationsImg3.fadeOut(100);
            locationsImg4.fadeIn(600);
        }
    })
});
