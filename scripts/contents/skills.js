let skills = [
    {
        "name": "Programming",
        "value": "Java, C#, C, C++, Kotlin, Python, PHP"
    },
    {
        "name": "Platform/Framework",
        "value": ".NET, J2EE"
    },
    {
        "name": "Web Technologies",
        "value": "HTML, CSS, JavaScript/jQuery, Bootstrap, XML, " +
            "WordPress, NodeJS, AJAX, REST, Spring, RabbitMQ, RDF"
    },
    {
        "name": "Databases",
        "value": "MySQL, Microsoft SQL Server, SPARQL, JDBC, JPA, MongoDB"
    },
    {
        "name": "Automation Testing",
        "value": "JUnit, TestNG, Selenium"
    },
    {
        "name": "Data Integration",
        "value": "SSIS, SSDT"
    },
    {
        "name": "Build/Deployment",
        "value": "Maven, Gradle, Ant, Git, GitHub, BitBucket"
    },
    {
        "name": "Operating Systems",
        "value": "Windows, Linux, MacOS, Android"
    },
    {
        "name": "Tools",
        "value": "JetBrains IDEs, Eclipse, Visual Studio, Android Studio, " +
            "Microsoft SSMS, MySQL Workbench, Microsoft Office, SharePoint, " +
            "Adobe Creative Cloud suite, RStudio"
    },
    {
        "name": "Project Management",
        "value": "Trello, JIRA"
    },
    {
        "name": "Development Methodologies",
        "value": "Agile/SCRUM, Test Driven Development, Mobile-First Development"
    },
    {
        "name": "Miscellaneous",
        "value": "Photography, Design, Animation, Analytics"
    }
];

$(function() {
    let skillsContainer = $("#skillsContainer");
    let customList = $("#customListTemplate").clone().find(".customList");
    let itemTemplate = customList.find(".customListItem");
    itemTemplate.addClass("specialText");
    itemTemplate.find(".customListIcon").attr("src", "./assets/images/misc/skill.png");
    let skillGroup = $("#skillTemplate").find(".skillGroup").clone();

    for (let skillIndex = 0; skillIndex < skills.length; skillIndex++) {
        let skillData = skills[skillIndex];
        let currentSkillGroup = skillGroup.clone();
        let item = itemTemplate.clone();

        item.find(".customListText").text(skillData.name);
        currentSkillGroup.find(".skillGroupName").html(item);
        currentSkillGroup.find(".skillGroupValue").text(skillData.value);
		currentSkillGroup.find(".skillGroupName").attr('id', 'skillName' + skillIndex);
		currentSkillGroup.find(".skillGroupValue").attr('id', 'skillValue' + skillIndex);
		skillsContainer.append(currentSkillGroup);

        if (skillIndex < skills.length - 1) {
            skillsContainer.append($('<hr/>'));
        }
    }
});