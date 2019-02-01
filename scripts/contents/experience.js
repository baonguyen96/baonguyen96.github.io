let workExperienceList = [
    {
        "jobTitle": "Data Integration Analyst",
        "company": "Loopback Analytics",
        "period": "August 2018 - Present",
        "contributions": [
            "Build and maintain multiple Windows Form/Service Applications which automate manual data cleaning tasks and automatically retrieve/send files " +
            "on schedule and transfer them among servers, eliminating a lot of manual works and their reminders for the company",
            "Monitor, troubleshoot, and enhance SQL stored procedures and SSIS packages",
			"Migrate on-premise resources to Azure environment",
			"Build shell scripts to automate file management process",
			"Create alert system that oversees data pipeline anomalies and notify appropriate personnel in timely manner, " +
			"preventing lots of potential defects and saving times to take actions"
        ]
    },
    {
        "jobTitle": "Quality Assurance Intern",
        "company": "Loopback Analytics",
        "period": "May 2017 - August 2017,<br/>January 2018 - August 2018",
        "contributions": [
            "Architect and build a system that integrates different tools to support end-to-end automation testing " +
            "that reduces tons of long and error-prone manual process for QA team, thus increase efficiency",
            "Implement additional features such as self-healing and report logging for the automated Selenium tool " +
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
    for(let experienceIndex = 0; experienceIndex < workExperienceList.length; experienceIndex++) {
        let experienceData = workExperienceList[experienceIndex];
        let currentExperience = experience.clone();
        currentExperience.attr("id", "experience" + experienceIndex);

        // only show the first experience by default
        if(experienceIndex > 0) {
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
        for(let contribution = 0; contribution < contributions.length; contribution++) {
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