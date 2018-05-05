// NOTE: demos are recorded at resolutions: 1024×576 (aspect ratio:  16:9) on 27in 1920x1080 screen

projectsList = [
    {
        "title": "Dark Chroma",
        "intro": createIntro("A Chrome extension that reverts the color of the page " +
            "(bright text on dark background) to reduce " +
            "eye-strains from long working period.", ["Chrome extension"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/DarkChroma"),
            createLinkTextWithPointer("https://chrome.google.com/webstore/detail/dark-chroma/jjknnbjoocbcgemnnjoaiifopndlcnbe",
                "Also available on", "Chrome Web Store")
        ]
    },
    {
        "title": "File Transfer Application",
        "intro": createIntro("This Java project implements a unique File Transfer Protocol " +
            "utilizing Socket, Connection Management, Reliable Communication, " +
            "and Security (Public Key Crypto and Symmetric Key Crypto).", ["Java"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/FileTransferApplication")
        ]
    },
    {
        "title": "Self Service Agent For Test Data",
        "intro":
            "<p id='seniorDesignTitle'><i>(Senior Design Project for " + createLinkText("http://argodata.com/", "", "ARGO Data") + ")</i></p>" +
            createIntro("An application that automatically generates desired test data for QA testers to use. " +
                "It use SPARQL and Java to retrieve and store RDF graphs from/to Fuseki server. " +
                "Can be used as CLI application or Web application (SpringBoot).",
            ["SPARQL", "Java", "Fuseki", "SpringBoot"]),
        "links": [
            createDemoText()
        ]
    },
    {
        "title": "MIPS Converter",
        "intro": createIntro("This Java Swing project provides conversion between Java, MIPS, and Machine codes. " +
            "It recognizes different instruction types (I-, R-, or J-) from MIPS or Binary codes " +
            "and provides the other two equivalences on a GUI.", ["Java Swing"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/MipsConverter")
        ]
    },
    {
        "title": "Morse Mastering",
        "intro": createIntro("An Android application that teaches users the Morse code and translates between " +
            "Morse and normal text. It also provides some Android services, such as Notification and " +
            "Network Communication.", ["Android application"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/MorseMastering")
        ]
    },
    {
        "title": "Tickets Reservation System",
        "intro": createIntro("This C++ project simulates an online ticketing systems. " +
            "It lets user reserves seats, flies the plane when full, or puts the selected seats " +
            "onto the wait-list. The price depends on different configurations of user's data.", ["C++"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/AirplaneTicketsReservingSystem")
        ]
    },
    {
        "title": "E-Commerce",
        "intro": createIntro("A small E-Commerce application using Java embedded with MySQL " +
            "(JDBC and JPA.)", ["MySQL", "JDBC", "JPA"]),
        "links": [
            createLinkTextWithPointer("https://github.com/baonguyen96/ECommerce")
        ]
    },
    {
        "title": "Flights Map",
        "intro": createIntro("This C# project represents a map of flights among cities. " +
            "It utilizes Dijkstra's algorithm to find the 3 shortest paths " +
            "(either by flight duration or by distance) between given 2 cities.", ["C#"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/FlightGraph")
        ]
    },
    {
        "title": "Calendar",
        "intro": createIntro("A simple JavaFX program that calculates the difference between 2 dates, " +
            "or the second date given the first one and the duration.", ["JavaFX"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/Calendar")
        ]
    },
    {
        "title": "Ticket To Knowhere",
        "intro": createIntro("A docking software system that tracks parking lot's activities and generates violation tickets, written in C++.", ["C++"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/TicketToKnowhere")
        ]
    },
    {
        "title": "Red Black Tree",
        "intro": createIntro(createLinkText("https://en.wikipedia.org/wiki/Red%E2%80%93black_tree",
            "This is my own implementation of the", "Red Black Tree") + " data structure in Java.", ["Java"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/RedBlackTree")
        ]
    },
    {
        "title": "Health Score",
        "intro": createIntro("This C project is a statistical analysis program based on the concept " +
            "of multi-sensors data fusion - combining observations from a number of different " +
            "sensors to provide a robust, complete description of an environment or process.", ["C"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/HealthScore")
        ]
    },
    {
        "title": "Chat Room",
        "intro": createIntro(createLinkText("#FileTransferApplication", "A simple chat room project in Java " +
            "that allows a Client and a Server to communicate with each other. This is a \"smaller, simpler\" version of the",
            " File Transfer Application") + " project.", ["Java"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/Chatroom")
        ]
    },
    {
        "title": "Cyberminer",
        "intro": createIntro(createLinkText("#KWICSystem", "A search engine built in HTML, CSS, SpringBoot, MySQL, and Selenium that allows users to add a URL-Description tuple to the database, and carries " +
            "out a search on the descriptions. Built upon the", "KWIC") + " project.",
            ["HTML", "CSS", "SpringBoot", "MySQL", "Selenium"]),
        "links": [
            createLinkTextWithPointer("https://github.com/baonguyen96/Cyberminer")
        ]
    },
    {
        "title": "Color Conversion",
        "intro": createIntro(
            createLinkText("https://en.wikipedia.org/wiki/Linear_scale", "A simple Python program that enhances " +
                "images by performing ", "Linear Scaling") +
            createLinkText("https://en.wikipedia.org/wiki/Histogram_equalization", " and", "Histogram Equalization") +
            " on them.", ["Python"]),
        "links": [
            createLinkTextWithPointer("https://github.com/baonguyen96/ImageColor")
        ]
    },
    {
        "title": "KWIC System",
        "intro": createIntro(createLinkText("https://en.wikipedia.org/wiki/Key_Word_in_Context",
            "This group project is a web based solution to the", "Key Word in Context") + " problem, " +
            "implemented using HTML, CSS, JavaScript, and SpringBoot.", ["HTML", "CSS", "JavaScript", "SpringBoot"]),
        "links": [
            createLinkTextWithPointer("https://github.com/baonguyen96/KWIC_Project")
        ]
    },
    {
        "title": "Joana Pdg Pruner",
        "intro": createIntro(createLinkText("https://github.com/joana-team/joana", "An extension to the current state-of-the-art Java analysis tool - ", "JOANA") + " - that produces a maintainable and relevant " + createLinkText("https://en.wikipedia.org/wiki/Program_Dependence_Graph", "", "PDG.") ,
            ["Java"]),
        "links": [
            createDemoText(),
            createLinkTextWithPointer("https://github.com/baonguyen96/JoanaPdgPruner")
        ]
    },
    {
        "title": "Tech Rush",
        "intro": createIntro("A website that summarizes basic yet essential knowledge about Web Development for Business." +
            " Written in HTML, CSS, Bootstrap, JavaScript, WordPress.",
            ["HTML", "CSS", "Bootstrap", "JavaScript", "WordPress"]),
        "links": [
            createLinkTextWithPointer("http://techrush.site/", "See the ", "official site"),
            createLinkTextWithPointer("https://github.com/baonguyen96/TechRush")
        ]
    },
    {
        "title": "Viet Cuisine",
        "intro": createIntro("A website that showcases Vietnamese cuisine. Implemented using HTML, CSS, Bootstrap, " +
            "and JavaScript.", ["HTML", "CSS", "Bootstrap", "JavaScript"]),
        "links": [
            createLinkTextWithPointer("https://github.com/baonguyen96/VietCuisine")
        ]
    }
];


function createPointer() {
    return "&#x27A4; ";
}


function createDemoText() {
    return createPointer() + "See <a href='#' class='demoLink' data-toggle='modal' data-target='#hiddenModal'>Demo</a>";
}


function createLinkTextWithPointer(link, welcome, name) {
    if(arguments.length === 1) {
        welcome = "Check out on";
        name = "GitHub";
    }

    return createPointer() + createLinkText(link, welcome, name);
}


function createLinkText(link, welcome, name) {
    return welcome + " <a href=\"" + link + "\" target=\"_blank\">" + name + "</a>";
}


function createIntro(intro, types) {
    for(var i = 0; i < types.length; i++) {
        intro = intro.replace(types[i], "<span class=\"projectType\">" + types[i] + "</span>")
    }
    return intro;
}


function addProjectsToGroup(groupElement, fromProjectIndex, toProjectIndex) {
    var row = $("#projectTemplate").find(".row");
    var isRowContainsOnlySingleProject = false;

    // loop through each row (2 projects each)
    for(var rowIndex = fromProjectIndex; rowIndex < toProjectIndex; rowIndex += 2) {
        var newRow = row.clone();
        newRow.find(".project").eq(0).remove();

        // on each row, add 2 projects
        for(var projectIndex = 0; projectIndex < 2; projectIndex++) {
            if(projectsList[rowIndex + projectIndex] === undefined) {
                isRowContainsOnlySingleProject = true;
                break;
            }

            var projectData = projectsList[rowIndex + projectIndex];
            var currentProject = row.find(".project").clone();
            var id = projectData.title.replace(/\s/g, "");

            currentProject.attr("id", id);
            currentProject.find(".projectTitle").text(projectData.title);
            currentProject.find(".projectIntro").html(projectData.intro);

            // for each project, add all links
            var links = projectData.links;
            for(var linkIndex = 0; linkIndex < links.length; linkIndex++) {
                var link = projectData.links[linkIndex];
                var projectLink = currentProject.find(".projectLink").eq(0);

                // update text if only 1 link, or append new links
                if(linkIndex === 0) {
                    projectLink.html(link);
                }
                else {
                    var newLink = projectLink.clone().html(link);
                    currentProject.find(".projectDescription").append(newLink);
                }
            }

            newRow.append(currentProject);
        }

        if(!isRowContainsOnlySingleProject) {
            groupElement.append(newRow);
        }

    }

}


function showDemo() {
    var myModal = $("#hiddenModal");
    var demoProjectId = "";
    var demoProjectTitle = "";

    $(".demoLink").click(function () {
        demoProjectTitle = $(this).closest(".project").find(".projectTitle").text();
        demoProjectId = $(this).closest(".project").attr("id");

    });

    // Show loader & then get content when modal is shown
    myModal.on('show.bs.modal', function() {
        $(this).find(".modal-title").text(demoProjectTitle);

        var img = $(this).find(".demoImage");
        img.attr("src", "./assets/images/demos/" + demoProjectId + ".gif");
        img.attr("alt", demoProjectTitle + " Demo");
    });

}


$(function () {
    var projectSection = $("#projectsSection");
    var projects = projectSection.find(".projects");
    var projectsHidden = projectSection.find(".projectsHidden");

    addProjectsToGroup(projects, 0, 4);
    addProjectsToGroup(projectsHidden, 4, projectsList.length);
    showDemo();

});