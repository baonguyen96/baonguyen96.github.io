let skills = [
    {
        "name": "Programming",
        "value": "Java, C, C++, C#, Python, PHP, UML, ERD"
    },
    {
        "name": "Web Technologies",
        "value": "HTML, CSS, JavaScript/jQuery, Bootstrap, WordPress, NodeJS, AJAX"
    },
    {
        "name": "Databases",
        "value": "MySQL, Microsoft SQL Server, SPARQL, RDF, JDBC, JPA"
    },
    {
        "name": "Automation Testing",
        "value": "JUnit, TestNG, Selenium"
    },
    {
        "name": "Version Control",
        "value": "GitHub, BitBucket"
    },
    {
        "name": "Operating Systems",
        "value": "Windows, Linux, Mac, Android"
    },
    {
        "name": "Tools",
        "value": "JetBrains IDEs, Eclipse, Visual Studio, Android Studio, " +
                 "Microsoft SSMS, Microsoft Office, SharePoint, " +
                 "Adobe Creative Cloud suite, Google products"
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
        "value": "Photography, Design, Analytics"
    }
];

$(function () {
    let skillsContainer = $("#skillsContainer");
    let customList = $("#customListTemplate").clone().find(".customList");
    let itemTemplate = customList.find(".customListItem");
    itemTemplate.addClass("specialText");
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

        if(skillIndex < skills.length - 1) {
            skillsContainer.append($('<hr/>'));
        }
    }

});