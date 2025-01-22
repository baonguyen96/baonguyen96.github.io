let workExperiences = [
    {
        "jobTitle": "Senior Associate Data Engineer III",
        "company": "JPMorgan Chase & Co.",
        "period": ["February 2023 - Present"],
        "contributions": [
            "Design and implement high-performance Cloud-native applications that process and store total of more than 400 TB of data",
            "Lead international team to migrate 14 data catalogs and their permissions from legacy central data lake to their own federated lake successfully with limited time and resources, providing impact isolation and more flexible decision for each data domain",
            "Implement highly performant and secured Data-Mesh solutions for flexible, scalable, and easy to operate data management among 20+ data products",
            "Manage features roadmap and coordination among teams to ensure necessary functionalities are prioritized and delivered on time and avoid duplication efforts",
            "Optimize Airflow on EKS resources and configurations to efficiently orchestrate more than 450 interdependent DAGs to process data for more than 5000 tables daily within SLAs",
            "Maintain overall IaC and ensure systems and components are up-to-date and secured",
        ]
    },
    {
        "jobTitle": "Associate Software Engineer",
        "company": "JPMorgan Chase & Co.",
        "period": ["February 2022 - February 2023"],
        "contributions": [
            "Migrate on-prem data warehouse to AWS, utilizing native services (Lambda, EMR, LakeFormation, SQS/SNS, EKS, S3, etc.) and Apache stacks (Spark, Hadoop, Kafka, etc.) along with Airflow orchestration",
            "Design and implement Airflow DAG Generator that consumes dynamic configuration and automatically builds and deploys DAGs to Airflow server, reducing developers' effort and time to build workflows by 90%",
            "Develop and maintain Infrastructure as Code setup using Terraform/Sceptre/Cloud Formation",
            "Implement distributed event-driven system using native AWS services utilizing SNS/SQS/Cloudwatch EventBridge",
            "Develop Spark-based application that reads raw files in multiple formats (CSV / Fixed width / JSON / Avro / XML / ByteArray / Excel) in a configurable fashion and converts to Parquet format with optionally additional transformations for better downstream consumption",
            "Optimize Cloud workloads (refactor SparkSQL queries, fine-tune EMR/EKS resource usages, setup lifecycle policies for S3 buckets, etc.) to reduce overall operational cost by more than 70%",
            "Integrate with ServiceNow API to manage operation workflow",
        ]
    },
    {
        "jobTitle": "Software Engineer",
        "company": "JPMorgan Chase & Co.",
        "period": ["July 2020 - February 2022"],
        "contributions": [
            "Work on multiple applications to perform ETL for high-performance Data Warehouse using Big Data technologies such as Hadoop, Impala, Apache Spark",
            "Improve developers' efficiency by creating various automation tools to remove time-consuming/redundant manual works in the existing processes",
            "Work on modernization initiative to migrate applications to Cloud-centric solutions",
        ]
    },
    {
        "jobTitle": "Data Integration Analyst",
        "company": "Loopback Analytics",
        "period": ["August 2018 - July 2020"],
        "contributions": [
            "Design and build multiple applications that automate data cleansing tasks and provide high performance ETL processes (typically handle 50+ GB every day)",
            "Migrate on-premise resources to Azure environment and on-going support Azure resources",
            "Architect data flow processes to ensure high performance/reliability/availability and to reduce redundant SQL storage and usage",
            "Convert SSIS packages to Windows Services to provide more flexibility and easier maintainability",
            "Create an alert system that oversees data pipeline anomalies and notifies appropriate personnel in timely manner, preventing many potential defects, and saving operation efforts",
            "Monitor, troubleshoot, and enhance resource usages for .NET applications, SQL stored procedures, SSIS packages, and Azure SQL pools",
        ]
    },
    {
        "jobTitle": "Quality Assurance Intern",
        "company": "Loopback Analytics",
        "period": ["January 2018 - August 2018", "May 2017 - August 2017"],
        "contributions": [
            "Design and build a Selenium WebDriver tool in Java to support automated GUI testing",
            "Design and build a system that integrates different tools to support end-to-end automation testing, reducing a lot of long and error-prone manual process for QA team",
            "Perform various testing techniques for software releases",
            "Setup CI/CD process for QA tools"
        ]
    }
];


$(function () {
    let firstYear = workExperiences[workExperiences.length - 2].period[0].split(" - ")[0].split(" ")[1];
    let currentWork = workExperiences[0];

    $("#yearsOfExperience").text((new Date()).getFullYear() - firstYear - 1);
    $("#currentTitle").text(`${currentWork.jobTitle.split(",")[0]} @ ${currentWork.company}`);

    const START_HIDING_FROM_INDEX = 3;
    let experience = $(EXPERIENCE_TEMPLATE);

    for (let i = 0; i < workExperiences.length; i++) {
        let experienceData = workExperiences[i];
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
        currentExperience.find(".period").html(experienceData.period.join("<br/>"));

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
