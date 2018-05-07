// to be added:     ASP.NET, iOS/Swift
// to be updated:   C#
// NOTE: maybe divide skills into groups of related skills and have a subsection for each group?

let skills = [
    {
        "name": "Java",
        "value": "100%"
    },
    {
        "name": "C",
        "value": "65%"
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
        "value": "70%"
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
        "name": "Bootstrap",
        "value": "100%"
    },
    {
        "name": "JavaScript",
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
        "name": "MySQL",
        "value": "80%"
    },
    {
        "name": "JDBC",
        "value": "100%"
    },
    {
        "name": "JPA",
        "value": "60%"
    },
    {
        "name": "RDF",
        "value": "90%"
    },
    {
        "name": "SPARQL",
        "value": "80%"
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

$(function () {
    let skillsSection = $("#skillsSection");
    let twoSkillsRow = $("#skillRowTemplate").find(".twoSkillsRow");
    let skill = twoSkillsRow.find(".skill").clone();

    // loop through each row (2 projects)
    for(let rowIndex = 0; rowIndex < skills.length; rowIndex += 2) {
        let newRow = twoSkillsRow.clone();
        newRow.find(".skill").eq(0).remove();

        // add 2 projects per row
        for(let skillIndex = 0; skillIndex < 2; skillIndex++) {
            let skillData = skills[rowIndex + skillIndex];
            let currentSkill = skill.clone();

            currentSkill.find(".language").text(skillData.name);
            currentSkill.find(".progressValue").width(skillData.value);
            currentSkill.find(".progressValueText").text(skillData.value);

            newRow.append(currentSkill);
        }

        skillsSection.append(newRow);
    }
});