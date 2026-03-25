let skills = [
    {
        "name": "Programming",
        "value": "Python, Java, Kotlin, Scala, C#, C, C++, Shell, Apache Spark (multiple languages), PHP"
    },
    {
        "name": "Platform",
        "value": "Azure, AWS, .NET, J2EE, Docker, Kubernetes"
    },
    {
        "name": "Infrastructure as Code",
        "value": "Terraform, CloudFormation"
    },
    {
        "name": "Data Engineering",
        "value": "Data Lake, Data Warehouse, SSIS/SSDT, Azure SQL, Apache Suite (Airflow, Spark, Hive, Impala, etc.), " +
            "AWS (Lambda, ECS, EKS, EC2, EMR, Glue, Athena, Redshift, LakeFormation, S3, etc.)"
    },
    {
        "name": "Web",
        "value": "SpringBoot, HTML, CSS, JavaScript/jQuery, Bootstrap, XML, WordPress, REST, SOAP, Web Socket, RDF, Google Analytics"
    },
    {
        "name": "Database",
        "value": "MySQL, T-SQL, PostgreSQL, SPARQL, JDBC/ODBC/JPA, MongoDB, Hive, Impala, Teradata, Athena, Redshift"
    },
    {
        "name": "Observability",
        "value": "CloudWatch, Splunk, DynaTrace, DataDog, ServiceNow"
    },
    {
        "name": "Automation Testing",
        "value": "JUnit, TestNG, MSUnitTest, Python UnitTest/PyTest, Mock, Selenium WebDriver API, Pactflow, Cucumber"
    },
    {
        "name": "CI/CD",
        "value": "Jenkins, Spinnaker, TeamCity, Github Action, Maven, Gradle, Ant, Conda, Git, GitHub, BitBucket"
    },
    {
        "name": "Operating System",
        "value": "Windows, Linux, MacOS, Android"
    },
    {
        "name": "Project Management",
        "value": "Microsoft Project, JIRA, Trello"
    },
    {
        "name": "Development Methodology",
        "value": "Agile/SCRUM, Test Driven Development, Mobile-First Development"
    },
    {
        "name": "Toolset",
        "value": "JetBrains IDEs, Windsurf (Codeium), Github Co-pilot, Eclipse, Visual Studio, Android Studio, Microsoft SSMS/SSDT, " +
            "Microsoft Office suite, SharePoint, RStudio, Postman, SwaggerUI, SoapUI, PowerBI, MySQL Workbench"
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

    skills.forEach((skill, index) => {
        let currentSkillGroup = skillGroup.clone();
        let item = itemTemplate.clone();

        item.find(".customListText").text(skill.name);
        currentSkillGroup.find(".skillGroupName").html(item);
        currentSkillGroup.find(".skillGroupValue").text(skill.value);
        skillsContainer.append(currentSkillGroup);

        if (index < skills.length - 1) {
            skillsContainer.append($('<hr/>'));
        }
    })
});