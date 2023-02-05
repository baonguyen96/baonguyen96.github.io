$(function () {
    $(".toggle").click(function () {
        let state = $(this).text();
        let id = $(this).attr("id");

        if (state === "See More") {
            if (id === "projectsToggle") {
                $(".projectsHidden").slideDown();
            } else {
                $(".experienceHidden").slideDown();
            }
            state = "See Less";
        } else if (state === "See Less") {
            if (id === "projectsToggle") {
                $(".projectsHidden").slideUp();
            } else {
                $(".experienceHidden").slideUp();
            }
            state = "See More";
        }

        $(this).text(state);
    });

    $(".projectContent").hover(
        function () {
            $(this).find(".projectTitle").hide();
            $(this).find(".projectDescription").show();
        },
        function () {
            $(this).find(".projectDescription").hide();
            $(this).find(".projectTitle").show();
        }
    );
});
