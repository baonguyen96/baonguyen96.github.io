$(function () {
    const FADE_TIME_IN_MS = 500;

    // show anything that is in the viewport on load by default
    $('#header, .section, #copyright, #error-area').each(function () {
        let topOfViewPoint = $(this).position().top;
        let bottomOfViewPoint = $(window).scrollTop() + $(window).height();

        if (bottomOfViewPoint > topOfViewPoint) {
            $(this).animate({'opacity': '1'}, FADE_TIME_IN_MS);
        }
    });

    // when scrolling, fade in the rest one by one
    $(window).scroll(function () {
        $('#header, .section, #copyright, #error-area').each(function () {
            let topOfViewPoint = $(this).position().top;
            let bottomOfViewpoint = $(window).scrollTop() + $(window).height();

            if (bottomOfViewpoint > topOfViewPoint) {
                $(this).animate({'opacity': '1'}, FADE_TIME_IN_MS);
            }
        });
    });
});