let skills = [
    {
        "name": "General Languages",
        "value": "Java, C, C++, C#, Python, PHP, UML, ERD"
    },
    {
        "name": "Web",
        "value": "HTML, CSS, JavaScript, jQuery, Bootstrap, WordPress, NodeJS, AJAX"
    },
    {
        "name": "Database",
        "value": "MySQL, Microsoft SQL Server, SPARQL, RDF, JDBC, JPA"
    },
    {
        "name": "Testing",
        "value": "JUnit, TestNG, Selenium"
    },
    {
        "name": "Version Control",
        "value": "GitHub, BitBucket"
    },
    {
        "name": "Operation Systems",
        "value": "Windows, Linux, Mac, Android"
    },
    {
        "name": "Tools",
        "value": "JetBrains IDEs, Eclipse, Visual Studio, Android Studio, " +
                 "Adobe Photoshop/Lightroom, Microsoft SSMS, Microsoft Office"
    },
    {
        "name": "Project Management",
        "value": "Trello, JIRA, Agile/SCRUM"
    }
];

$(function () {
    let skillsContainer = $("#skillsContainer");
    let customList = $("#customListTemplate").clone().find(".customList");
    let itemTemplate = customList.find(".customListItem");
    itemTemplate.find(".customListIcon").attr("src", "./assets/images/misc/skill.png");
    let skillGroup = $("#skillTemplate").find(".skillGroup").clone();

    console.log(skillGroup.html());

    for(let skillIndex = 0; skillIndex < skills.length; skillIndex++) {
        let skillData = skills[skillIndex];
        let currentSkillGroup = skillGroup.clone();
        let item = itemTemplate.clone();

        item.find(".customListText").text(skillData.name);
        currentSkillGroup.find(".skillGroupName").html(item);
        currentSkillGroup.find(".skillGroupValue").text(skillData.value);
        skillsContainer.append(currentSkillGroup);
    }

});