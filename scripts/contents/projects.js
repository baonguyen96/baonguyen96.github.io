// NOTE: demos are recorded at resolutions: 1024×576 (aspect ratio: 16:9) on 27in 1920x1080 screen
let projects = [
    {
        "title": "Image Catalog",
        "intro": createIntro("A suite of applications that scans through the file system to collect metadata of images and provides useful insights. " +
            "It consists of C# application for image crawler, Microsoft SQL Server for data storage and ETL, and PowerBI dashboard for insights consumption and presentation.",
            ["C#", "SQL", "PowerBI"]),
        "links": [
            createDemoLink(),
        ]
    },
    {
        "title": "Distributed File System",
        "intro": createIntro("A distributed file replication system coded in Java. Multiple clients can concurrently " +
            "connect to multiple servers and request to append message to multiple files on each server. " +
            "At any given time, all servers can replicate the exact copy of all the files that every other servers have.", ["Java"]),
        "links": [
            createDemoLink(),
        ]
    },
    {
        "title": "Dark Chroma",
        "intro": createIntro("A Chrome extension that reverts the color of the page " +
            "(bright text on dark background) to reduce eye-strains from long working period.",
            ["Chrome extension"]),
        "links": [
            createDemoLink(),
            createSourceLink("https://github.com/baonguyen96/DarkChroma"),
        ]
    },
    {
        "title": "File Transfer Application",
        "intro": createIntro("This Java project implements a unique File Transfer Protocol utilizing Socket, " +
            "Connection Management, Reliable Communication, and Security (Public Key Crypto and Symmetric Key Crypto).",
            ["Java"]),
        "links": [
            createDemoLink(),
            createSourceLink("https://github.com/baonguyen96/FileTransferApplication")
        ]
    },
    {
        "title": "Self Service Agent For Test Data",
        "intro": "<p id='seniorDesignTitle'><i>(Senior Design Project for " +
            createLink("https://argodata.com/", "ARGO Data") + ")</i></p>" +
            createIntro("An application that automatically generates desired test data for QA testers to use. " +
                "It uses SPARQL and Java to retrieve and store RDF graphs from/to Fuseki server. " +
                "Can be used as CLI application or Web application (SpringBoot).",
                ["SPARQL", "Java", "Fuseki", "SpringBoot"]),
        "links": [
            createDemoLink()
        ]
    },
    {
        "title": "Morse Mastering",
        "intro": createIntro("An Android application that teaches users the Morse code and translates between " +
            "Morse and normal text. It also provides some Android services, such as Notification and " +
            "Network Communication.", ["Android application"]),
        "links": [
            createDemoLink()
        ]
    },
    {
        "title": "Color Manipulation",
        "intro": createIntro("A simple Python program that enhances images by performing " +
             createLink("https://en.wikipedia.org/wiki/Linear_scale", "Linear Scaling") + " and " +
             createLink("https://en.wikipedia.org/wiki/Histogram_equalization", "Histogram Equalization") +
             " on them. It samples a given window of the original image, and applies the change on the entire image.", ["Python"]),
        "links": [
             createDemoLink(),
             createSourceLink("https://github.com/baonguyen96/ImageColor")
        ]
    },
    {
        "title": "Game Theory",
        "intro": createIntro("A simulation of how decision-making among group of players (Prisoner-Dilemma) influence outcome of the game (and life). " +
            "Written in Java.", ["Java"]),
        "links": [
            createSourceLink("https://github.com/baonguyen96/GameTheory"),
        ]
    },
    {
        "title": "Flights Map",
        "intro": createIntro("This C# project represents a map of flights among cities. " +
            "It utilizes Dijkstra's algorithm to find the 3 shortest paths " +
            "(either by flight duration or by distance) between given 2 cities.", ["C#"]),
        "links": [
            createDemoLink(),
            createSourceLink("https://github.com/baonguyen96/FlightGraph")
        ]
    },
    {
        "title": "MIPS Converter",
        "intro": createIntro("This Java Swing project bidirectionally converts between MIPS and Machine codes. " +
            "It also recognizes different instruction types (I-, R-, or J-) in MIPS and displays the components on the GUI.", ["Java Swing"]),
        "links": [
            createDemoLink(),
            createSourceLink("https://github.com/baonguyen96/MipsConverter")
        ]
    },
    {
        "title": "Schedulers",
        "intro": createIntro("This Java project simulates different types of modern OS job schedulers, such as: " +
            "FCFS, RR, SPN, SRT, HRRN, and Feedback.", ["Java"]),
        "links": [
            createDemoLink(),
            createSourceLink("https://github.com/baonguyen96/Schedulers")
        ]
    },
    {
        "title": "Git Data",
        "intro": createIntro("A Windows Application that summary any GitHub account. " +
            "Utilizing GitHub API, C#, and .NET Framework. Currently still under development process.",
            ["GitHub API", "C#", ".NET"]),
        "links": [
            createSourceLink("https://github.com/baonguyen96/GitData")
        ]
    },
    {
        "title": "Tickets Reservation System",
        "intro": createIntro("This C++ project simulates an online ticketing systems. " +
            "It lets user reserves seats, flies the plane when full, or puts the selected seats onto the wait-list. " +
            "The price depends on different configurations of user's data.",
            ["C++"]),
        "links": [
            createDemoLink(),
            createSourceLink("https://github.com/baonguyen96/AirplaneTicketsReservingSystem")
        ]
    },
];


function createPointer() {
    return "&#x27A4; ";
}


function createDemoLink() {
    return `${createPointer()}See <a href='#' class='demoLink' data-toggle='modal' data-target='#hiddenModal'>Demo</a>`;
}


function createSourceLink(link, welcome, name) {
    if (arguments.length === 1) {
        welcome = "Check out on";
        name = "GitHub";
    }

    return `${createPointer()}${welcome} ${createLink(link, name)}`;
}


function createLink(hyperlink, name) {
    return `<a href='${hyperlink}' target='_blank'>${name}</a>`;
}


function createIntro(intro, types) {
    for (let i = 0; i < types.length; i++) {
        intro = intro.replace(types[i], `<span class='specialText'>${types[i]}</span>`)
    }
    return intro;
}


function addProjectsToGroup(groupElement, fromProjectIndex, toProjectIndex) {
    let row = $(PROJECT_TEMPLATE);
    let isRowContainsOnlySingleProject = false;

    // loop through each row (2 projects each)
    for (let rowIndex = fromProjectIndex; rowIndex < toProjectIndex; rowIndex += 2) {
        let newRow = row.clone();
        newRow.find(".project").eq(0).remove();

        // on each row, add 2 projects
        for (let projectIndex = 0; projectIndex < 2; projectIndex++) {
            if (projects[rowIndex + projectIndex] === undefined) {
                isRowContainsOnlySingleProject = true;
                break;
            }

            let projectData = projects[rowIndex + projectIndex];
            let currentProject = row.find(".project").clone();
            let id = projectData.title.replace(/\s/g, "");

            currentProject.attr("id", id);
            currentProject.find(".projectTitle").text(projectData.title);
            currentProject.find(".projectDescription").hide();
            currentProject.find(".projectIntro").html(projectData.intro);

            let links = projectData.links;
            for (let linkIndex = 0; linkIndex < links.length; linkIndex++) {
                let link = projectData.links[linkIndex];
                let projectLink = currentProject.find(".projectLink").eq(0);

                if (linkIndex === 0) {
                    projectLink.html(link);

                    if (projectLink.text().endsWith(" See Demo")) {
                        projectLink.addClass("demoLinkContainer");
                    }
                }
                else {
                    let newLink = projectLink.clone().html(link);

                    if (newLink.text().endsWith(" See Demo")) {
                        newLink.addClass("demoLinkContainer");
                    }
                    else {
                        newLink.removeClass("demoLinkContainer");
                    }

                    currentProject.find(".projectDescription").append(newLink);
                }
            }

            newRow.append(currentProject);
        }

        if (!isRowContainsOnlySingleProject) {
            groupElement.append(newRow);
        }
    }
}


function showDemo() {
    let myModal = $(MODAL_TEMPLATE);
    let demoProjectId = "";
    let demoProjectTitle = "";

    $(".demoLink").click(function () {
        demoProjectTitle = $(this).closest(".project").find(".projectTitle").text();
        demoProjectId = $(this).closest(".project").attr("id");
        myModal.modal();
    });

    myModal.on('show.bs.modal', function () {
        $(this).find(".modal-title").text(demoProjectTitle);

        let img = $(this).find(".demoImage");
        img.attr({
            "src": `./assets/images/demos/${demoProjectId}.gif`,
            "alt": `${demoProjectTitle} Demo`
        });
    });
}


$(function() {
    let projectSection = $("#projectsSection");
    let projectsGroup = projectSection.find(".projects");
    let projectsHiddenGroup = projectSection.find(".projectsHidden");
    const SHOW_PROJECT_COUNT = 8;

    addProjectsToGroup(projectsGroup, 0, SHOW_PROJECT_COUNT);
    addProjectsToGroup(projectsHiddenGroup, SHOW_PROJECT_COUNT, projects.length);
    showDemo();
});