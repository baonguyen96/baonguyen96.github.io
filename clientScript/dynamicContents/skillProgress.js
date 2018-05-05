// to be added: ReactJS
skills = [
    {
        "name": "Java",
        "value": "100%"
    },
    {
        "name": "C",
        "value": "50%"
    },
    {
        "name": "C++",
        "value": "80%"
    },
    {
        "name": "C#",
        "value": "50%"
    },
    {
        "name": "Python",
        "value": "65%"
    },
    {
        "name": "PHP",
        "value": "45%"
    },
    {
        "name": "HTML",
        "value": "100%"
    },
    {
        "name": "CSS",
        "value": "100%"
    },
    {
        "name": "JavaScript",
        "value": "90%"
    },
    {
        "name": "jQuery",
        "value": "90%"
    },
    {
        "name": "AJAX",
        "value": "70%"
    },
    {
        "name": "NodeJS",
        "value": "35%"
    },
    {
        "name": "MongoDB",
        "value": "70%"
    },
    {
        "name": "RDF",
        "value": "90%"
    },
    {
        "name": "MySQL",
        "value": "80%"
    },
    {
        "name": "SPARQL",
        "value": "80%"
    },
    {
        "name": "JDBC",
        "value": "90%"
    },
    {
        "name": "JPA",
        "value": "60%"
    },
    {
        "name": "JUnit",
        "value": "100%"
    },
    {
        "name": "TestNG",
        "value": "100%"
    },
    {
        "name": "Git",
        "value": "100%"
    },
    {
        "name": "Selenium",
        "value": "100%"
    },
    {
        "name": "Windows",
        "value": "90%"
    },
    {
        "name": "Linux",
        "value": "70%"
    },
    {
        "name": "Android",
        "value": "75%"
    },
    {
        "name": "Office",
        "value": "90%"
    }
];

$(document).ready(function () {
    var skillsSection = $("#skillsSection");
    var twoProjectsRow = $("#skillRowTemplate").find(".twoProjectsRow");
    var skill = twoProjectsRow.find(".skill").clone();

    // loop through each row (2 projects)
    for(var rowIndex = 0; rowIndex < skills.length; rowIndex += 2) {
        var newRow = twoProjectsRow.clone();
        newRow.find(".skill").eq(0).remove();

        // add 2 projects per row
        for(var skillIndex = 0; skillIndex < 2; skillIndex++) {
            var skillData = skills[rowIndex + skillIndex];
            var currentSkill = skill.clone();

            currentSkill.find(".language").text(skillData.name);
            currentSkill.find(".progressValue").width(skillData.value);
            currentSkill.find(".progressValueText").text(skillData.value);

            newRow.append(currentSkill);
        }

        skillsSection.append(newRow);
    }
});