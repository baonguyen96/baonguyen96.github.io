$(function () {
    $(".toggle").click(function () {
        let state = $(this).text();
        let id = $(this).attr("id");

        if(state === "More") {
            if(id === "projectsToggle") {
                $(".projectsHidden").slideDown();
            }
            else {
                $(".experienceHidden").slideDown();
            }
            state = "Less";
        }
        else if(state === "Less") {
            if(id === "projectsToggle") {
                $(".projectsHidden").slideUp();
            }
            else {
                $(".experienceHidden").slideUp();
            }
            state = "More";
        }

        $(this).html(state);
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