let workExperienceList = [
    {
        "jobTitle": "Data Integration Analyst",
        "company": "Loopback Analytics",
        "period": "August 2018 - Present",
        "contributions": [
            "Design and build multiple Windows Forms and Windows Service Applications which automate manual data cleansing tasks " +
			"and retrieve/send files on schedule and transfer them among servers, eliminating a lot of manual works and their reminders for the company",
			"Architect and implement processes and tools that intake multiple data/file types and streamline into company's existing data structure, minimize changes to SQL schema and SSDT",
            "Integrate multiple client data sources into company's internal system with high performance and analyze large data sets to ensure high data quality",
            "Monitor, troubleshoot, and enhance performance/resource usages for applications, SQL stored procedures, and SSIS packages",
            "Migrate on-premise resources to Azure environment and on-going support Azure resources",
            "Build shell scripts to automate file and database management process",
            "Create an alert system that oversees data pipeline anomalies and notify appropriate personnel in timely manner, " +
            "preventing lots of potential defects and saving times to take actions",
        ]
    },
    {
        "jobTitle": "Quality Assurance Intern",
        "company": "Loopback Analytics",
        "period": "May 2017 - August 2017,<br/>January 2018 - August 2018",
        "contributions": [
			"Architect and build a Selenium WebDriver tool in Java to support automated GUI testing",
            "Architect and build a system that integrates different tools to support end-to-end automation testing " +
            "that reduces a lot of long and error-prone manual process for QA team, thus increase efficiency",
            "that give better reports with clearer error tracing",
            "Perform various testing techniques for software releases",
            "Build shell scripts to automate build/deployment process for QA tools"
        ]
    },
    {
        "jobTitle": "Part Time Store Associate",
        "company": "7-Eleven",
        "period": "July 2014 - December 2016",
        "contributions": [
            "Keep track of merchandise flows",
            "Provide outstanding services and assist customers"
        ]
    },
    {
        "jobTitle": "Librarian Assistant",
        "company": "Melbourne Public Library",
        "period": "December 2012 - April 2013",
        "contributions": [
            "Volunteer",
            "Organize and keep track of books flow",
            "Organize and run public events for children"
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

        // only show the first experience by default
        if (experienceIndex > 0) {
            currentExperience.addClass("experienceHidden");
            currentExperience.prepend("<hr/>");
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