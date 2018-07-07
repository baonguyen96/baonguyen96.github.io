$(function () {

    let fadeTime = 500;

    // show anything that is in the viewport on load by default
    $('#header, .section, #copyright, #error-page-container').each(function () {
        let top_of_object = $(this).position().top;
        let bottom_of_window = $(window).scrollTop() + $(window).height();

        if (bottom_of_window > top_of_object) {
            $(this).animate({'opacity': '1'}, fadeTime);
        }
    });

    // when scrolling, fade in the rest one by one
    $(window).scroll(function () {
        $('#header, .section, #copyright, #error-page-container').each(function () {
            let top_of_object = $(this).position().top;
            let bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > top_of_object) {
                $(this).animate({'opacity': '1'}, fadeTime);
            }
        });
    });
});