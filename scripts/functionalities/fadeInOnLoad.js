$(function () {
    const FADE_TIME = 500;

    // show anything that is in the viewport on load by default
    $('#header, .section, #copyright, #error-area').each(function () {
        let topOfProject = $(this).position().top;
        let bottomOfWindow = $(window).scrollTop() + $(window).height();

        if (bottomOfWindow > topOfProject) {
            $(this).animate({'opacity': '1'}, FADE_TIME);
        }
    });

    // when scrolling, fade in the rest one by one
    $(window).scroll(function () {
        $('#header, .section, #copyright, #error-area').each(function () {
            let top_of_object = $(this).position().top;
            let bottom_of_window = $(window).scrollTop() + $(window).height();

            if (bottom_of_window > top_of_object) {
                $(this).animate({'opacity': '1'}, FADE_TIME);
            }
        });
    });
});