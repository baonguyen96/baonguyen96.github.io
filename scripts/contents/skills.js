let skills = [
    {
        "name": "Programming",
        "value": "Java, C#, C, C++, Kotlin, Python, PHP, Shell scripts, Spark"
    },
    {
        "name": "Platform/Framework",
        "value": "Azure, AWS, .NET, J2EE"
    },
    {
        "name": "Web Technologies",
        "value": "HTML, CSS, JavaScript/jQuery, Bootstrap, XML, WordPress, REST, SOAP, Spring, RDF, Google Analytics"
    },
    {
        "name": "Databases",
        "value": "MySQL, T-SQL, SPARQL, JDBC, JPA, MongoDB, PostgreSQL, Hive"
    },
    {
        "name": "Automation Testing",
        "value": "JUnit, TestNG, MSUnitTest, Python UnitTest, Mocking, Selenium WebDriver API"
    },
    {
        "name": "Data Integration",
        "value": "SSIS, SSDT, Data Warehouse, ETL, Networking and Infrastructure setup"
    },
    {
        "name": "CI/CD",
        "value": "Jenkins, TeamCity, Maven, Gradle, Ant, Git, GitHub, BitBucket"
    },
    {
        "name": "Operating Systems",
        "value": "Windows, Linux, MacOS, Android"
    },
    {
        "name": "Development Tools",
        "value": "JetBrains IDEs, Eclipse, Visual Studio, Android Studio, Microsoft SSMS, MySQL Workbench, " +
            "Microsoft Office suite, SharePoint, Adobe Creative Cloud suite, RStudio, Postman, SwaggerUI, PowerBI"
    },
    {
        "name": "Project Management",
        "value": "JIRA, Trello"
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

$(function () {
    let skillsContainer = $("#skillsContainer");
    let customList = $(CUSTOM_LIST_TEMPLATE);
    let itemTemplate = customList.find(".customListItem");
    itemTemplate.addClass("specialText");
    itemTemplate.find(".customListIcon").attr("src", "./assets/images/misc/skill.png");
    let skillGroup = $(SKILL_GROUP_TEMPLATE).clone();

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