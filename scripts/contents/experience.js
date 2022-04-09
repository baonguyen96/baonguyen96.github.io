let workExperienceList = [
    {
        "jobTitle": "Software Engineer",
        "company": "JPMorgan Chase",
        "period": "July 2020 - Present",
        "contributions": [
            "Work as part of modernization team to migrate applications to Cloud-centric solutions",
            "Big Data technologies, Apache stacks (Spark, Hadoop, etc.), Airflow orchestration",
            "Cloud technologies: work on AWS services (Lambda, EMR, SQS, etc.) for BigData processing. Also handle Infrastructure as Code (IaC) services such as Terraform and Sceptre",
            "ServiceNow API integration to manage operation workflow"
        ]
    },
    {
        "jobTitle": "Data Integration Analyst",
        "company": "Loopback Analytics",
        "period": "August 2018 - July 2020",
        "contributions": [
            "Design and build multiple applications that automate data cleansing tasks and perform high capacity ETL process (typically handle 50+ GB/day)",
            "Architect data flow processes to ensure high performance/reliability/availability and to reduce redundant SQL storage and usage",
            "Integrate multiple client data sources into company's internal system with high performance and analyze large data sets to ensure high data quality",
            "Monitor, troubleshoot, and enhance performance/resource usages for .NET applications, SQL stored procedures, SSIS packages, and Azure SQL pools",
            "Migrate on-premise resources to Azure environment and on-going support Azure resources",
            "Convert SSIS packages to Windows Services to provide easier maintenance and better performance",
            "Build shell scripts to automate file and database management process",
            "Create an alert system that oversees data pipeline anomalies and notify appropriate personnel in timely manner, preventing lots of potential defects and saving times to take actions"
        ]
    },
    {
        "jobTitle": "Quality Assurance Intern",
        "company": "Loopback Analytics",
        "period": "May 2017 - August 2017,<br/>January 2018 - August 2018",
        "contributions": [
            "Architect and build a Selenium WebDriver tool in Java to support automated GUI testing",
            "Architect and build a system that integrates different tools to support end-to-end automation testing, reducing a lot of long and error-prone manual process for QA team",
            "Perform various testing techniques for software releases",
            "Build shell scripts to automate build/deployment process for QA tools"
        ]
    }
];


$(function () {
    let experience = $(experienceTemplate);

    // loop through all work experience
    for (let experienceIndex = 0; experienceIndex < workExperienceList.length; experienceIndex++) {
        let experienceData = workExperienceList[experienceIndex];
        let currentExperience = experience.clone();
        currentExperience.attr("id", "experience" + experienceIndex);

        if (experienceIndex > 0) {
            currentExperience.prepend("<hr/>");
        }

        if (experienceIndex > 1) {
            currentExperience.addClass("experienceHidden");
        }

        currentExperience.find(".jobTitle").html(experienceData.jobTitle);
        currentExperience.find(".company").html(experienceData.company);
        currentExperience.find(".period").html(experienceData.period);

        let customList = $(customListTemplate);
        let item = customList.find(".customListItem");
        let contributions = experienceData.contributions;
        item.find(".customListIcon").attr("src", "./assets/images/misc/work.png");

        // add all contributions of current work experience
        for (let contribution = 0; contribution < contributions.length; contribution++) {
            let newItem = item.clone();
            newItem.find(".customListText").text(contributions[contribution]);
            customList.append(newItem);
        }

        customList.find(item).eq(0).remove();
        currentExperience.append(customList);
        $("#experienceToggle").before(currentExperience);
    }

    experience.remove();
});