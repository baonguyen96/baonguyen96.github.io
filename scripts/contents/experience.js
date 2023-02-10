let workExperienceList = [
    {
        "jobTitle": "Senior Associate Data Engineer III",
        "company": "JPMorgan Chase & Co.",
        "period": "February 2023 - Present",
        "contributions": [
            "Design and maintain high-performance Cloud-native applications to process more than 200TB of data",
            "Implement secured Data-Mesh solution for flexible and scalable data management",
        ]
    },
    {
        "jobTitle": "Associate Software Engineer",
        "company": "JPMorgan Chase & Co.",
        "period": "February 2022 - February 2023",
        "contributions": [
            "Work as part of modernization team to migrate on-prem data warehouse to AWS, utilizing native services (Lambda, EMR, LakeFormation, SQS, S3, etc.) and Apache stacks (Spark, Hadoop, etc.) along with Airflow orchestration",
            "Develop and maintain Infrastructure as Code setup using Terraform/Sceptre/Cloud Formation",
            "Integrate with ServiceNow API to manage operation workflow",
            "Optimize Cloud workloads to reduce operational cost by more than 70%",
        ]
    },
    {
        "jobTitle": "Software Engineer",
        "company": "JPMorgan Chase & Co.",
        "period": "July 2020 - February 2022",
        "contributions": [
            "Work on multiple applications to perform ETL for high-performance Data Warehouse using Big Data technologies such as Hadoop, Impala, Apache Spark",
            "Improve developers' efficiency by creating various automation tools to remove time-consuming/redundant manual works in the existing processes",
            "Work on modernization initiative to migrate applications to Cloud-centric solutions",
        ]
    },
    {
        "jobTitle": "Data Integration Analyst",
        "company": "Loopback Analytics",
        "period": "August 2018 - July 2020",
        "contributions": [
            "Design and build multiple applications that automate data cleansing tasks and perform high performance ETL processes (typically handle 50+ GB/day)",
            "Migrate on-premise resources to Azure environment and on-going support Azure resources",
            "Architect data flow processes to ensure high performance/reliability/availability and to reduce redundant SQL storage and usage",
            "Convert SSIS packages to Windows Services to provide more flexibility and easier maintainability",
            "Create an alert system that oversees data pipeline anomalies and notify appropriate personnel in timely manner, preventing lots of potential defects and saving times to take actions",
            "Monitor, troubleshoot, and enhance resource usages for .NET applications, SQL stored procedures, SSIS packages, and Azure SQL pools",
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
            "Setup CI/CD process for QA tools"
        ]
    }
];


$(function () {
    $("#currentTitle").text(workExperienceList[0].jobTitle);

    const START_HIDING_FROM_INDEX = 3;
    let experience = $(EXPERIENCE_TEMPLATE);

    for (let i = 0; i < workExperienceList.length; i++) {
        let experienceData = workExperienceList[i];
        let currentExperience = experience.clone();
        currentExperience.attr("id", `experience${i}`);

        if (i > 0) {
            currentExperience.prepend("<hr/>");
        }

        if (i >= START_HIDING_FROM_INDEX) {
            currentExperience.addClass("experienceHidden");
        }

        currentExperience.find(".jobTitle").text(experienceData.jobTitle);
        currentExperience.find(".company").text(experienceData.company);
        currentExperience.find(".period").html(experienceData.period);

        let customList = $(CUSTOM_LIST_TEMPLATE);
        let item = customList.find(".customListItem");
        let contributions = experienceData.contributions;
        item.find(".customListIcon").attr("src", "./assets/images/misc/work.png");

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