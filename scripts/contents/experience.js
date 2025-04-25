let workExperiences = [
    {
        "jobTitle": "Vice President, Lead Software Engineer",
        "company": "JPMorgan Chase & Co.",
        "period": ["January 2025 - Present"],
        "contributions": [
            "Modernize and expand Chase Pay over Time ecosystem, integrating with additional partners to rollout installment plans to eligible customers",
            "Design and implement highly performant and scalable microservices along with effective blue-green deployment strategy to achieve near-zero downtime and more than 99% of response time within 200ms",
            "Mentor junior engineers and forster their growths"
        ]
    },
    {
        "jobTitle": "Senior Associate Data Engineer III",
        "company": "JPMorgan Chase & Co.",
        "period": ["February 2023 - January 2025"],
        "contributions": [
            "Design and implement high-performance Cloud-native applications that process and persist total of more than 400 TB of data",
            "Successfully lead international team to migrate 14 data catalogs from legacy central data lake to their own federated lake on schedule of 3 months and resource-constraints, providing impact isolation and more flexible development/deployment for each data domain",
            "Implement highly performant and secured Data-Mesh solutions for flexible, scalable, and easy to operate data management among 20+ data products",
            "Optimize Airflow on EKS resources and configurations to efficiently orchestrate more than 450 interdependent DAGs to process data for more than 8000 tables daily within SLAs, improving job performance by 50%",
            "Manage features roadmap and coordination among teams to ensure necessary functionalities are prioritized and delivered on time and avoid duplication efforts",
            "Maintain overall IaC and ensure systems and components are up-to-date and secured, providing traceability to system-wide changes as well as reducing error-prone manual infrastructure provisioning",
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
            "Develop highly configurable Spark application that consumes raw files in multiple formats (CSV / Fixed Width / JSON / Avro / XML / Byte Array / Excel) and converts to standardized Parquet format with optional transformations for seamless downstream consumption, improving maintainability and reducing time for each new data source integration by approximately 15%",
            "Optimize Cloud workloads (refactor SparkSQL queries, fine-tune EMR/EKS resource usages, setup lifecycle policies for S3 buckets, etc.) to reduce overall operational cost by more than 70%",
            "Integrate with ServiceNow API to manage operation workflow, providing timely alerts for operation team to take action",
        ]
    },
    {
        "jobTitle": "Software Engineer",
        "company": "JPMorgan Chase & Co.",
        "period": ["July 2020 - February 2022"],
        "contributions": [
            "Work on multiple applications to perform ETL for high-performance Data Warehouse using Big Data technologies such as Hadoop, Impala, Apache Spark",
            "Improve developers' efficiency by creating various automation tools to remove time-consuming/redundant manual works in the existing processes, directly reducing up-to 50 developer-hour per week",
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


function monthNameToNumber(name) {
    let months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    return months.indexOf(name) + 1;
}


function getYearsOfExperience(fromYear, fromMonth, toYear, toMonth) {
    let months = Math.max(0, (toYear - fromYear) * 12 - fromMonth + toMonth);
    return Math.floor(months / 12);
}


$(function() {
    let firstPeriodNotCountingIntern = workExperiences[workExperiences.length - 2].period[0].split(" - ")[0];
    let firstMonth = monthNameToNumber(firstPeriodNotCountingIntern.split(" ")[0]);
    let firstYear = firstPeriodNotCountingIntern.split(" ")[1];
    let currentWork = workExperiences[0];
    let today = new Date();

    $("#yearsOfExperience").text(getYearsOfExperience(firstYear, firstMonth, today.getFullYear(), today.getMonth()));
    $("#currentTitle").text(`${currentWork.jobTitle.replace(",", "|").split("|")[1].trim()} @ ${currentWork.company}`);

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
