let skills = [
    {
        "name": "Programming",
        "value": "Java, Python, C#, C, C++, Kotlin, Scala, PHP, Shell, Apache Spark"
    },
    {
        "name": "Platform",
        "value": "Azure, AWS, .NET, J2EE, Docker/Kubernetes"
    },
    {
        "name": "Infrastructure as Code",
        "value": "Terraform, CloudFormation, Sceptre"
    },
    {
        "name": "Data Engineering",
        "value": "Data Lake, Data Warehouse, SSIS/SSDT, Apache Suite (Spark, Hive, Impala, etc.), EMR, Glue, Athena, Redshift, LakeFormation"
    },
    {
        "name": "Web",
        "value": "SpringBoot, HTML, CSS, JavaScript/jQuery, Bootstrap, XML, WordPress, REST, SOAP, RDF, Google Analytics"
    },
    {
        "name": "Databases",
        "value": "MySQL, T-SQL, PostgreSQL, SPARQL, JDBC, JPA, MongoDB, Hive, Impala, Teradata"
    },
    {
        "name": "Automation Testing",
        "value": "JUnit, TestNG, MSUnitTest, Python UnitTest/PyTest, Mocking, Selenium WebDriver API"
    },
    {
        "name": "CI/CD",
        "value": "Jenkins, TeamCity, Maven, Gradle, Ant, Conda, Git, GitHub, BitBucket"
    },
    {
        "name": "Operating Systems",
        "value": "Windows, Linux, MacOS, Android"
    },
    {
        "name": "Project Management Tools",
        "value": "Microsoft Project, JIRA, Trello"
    },
    {
        "name": "Development Methodologies",
        "value": "Agile/SCRUM, Test Driven Development, Mobile-First Development"
    },
    {
        "name": "Development Tools",
        "value": "JetBrains IDEs, Eclipse, Visual Studio, Android Studio, Microsoft SSMS/SSDT, MySQL Workbench, " +
            "Microsoft Office suite, SharePoint, RStudio, Postman, SwaggerUI, SoapUI, PowerBI"
    },
    {
        "name": "Miscellaneous",
        "value": "Analytics, Photography, Videography, Design, Animation"
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
        currentSkillGroup.find(".skillGroupName").attr('id', `skillName${skillIndex}`);
        currentSkillGroup.find(".skillGroupValue").attr('id', `skillValue${skillIndex}`);
        skillsContainer.append(currentSkillGroup);

        if (skillIndex < skills.length - 1) {
            skillsContainer.append($('<hr/>'));
        }
    }
});