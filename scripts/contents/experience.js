let workExperienceList = [
    {
        "jobTitle": "Data Integration Analyst",
        "company": "Loopback Analytics",
        "period": "August 2018 - Present",
        "duties": [
            "Build and maintain multiple Windows Form Applications which automate manual data cleaning tasks " +
            "that save hours of operation per process for other people",
            "Design, build, and maintain multithreaded Windows Service applications that automatically download files " +
            "on schedule and transfer them among servers, eliminating a lot of manual works and their reminders for the company",
            "Monitor and troubleshoot SQL jobs for SSMS",
            "Maintain multiple SQL Store Procedures that integrates multiple data sources into company's standard schema"
        ]
    },
    {
        "jobTitle": "Quality Assurance Intern",
        "company": "Loopback Analytics",
        "period": "May 2017 - August 2017,<br/>January 2018 - August 2018",
        "duties": [
            "Architect and build a system that integrates different tools to support end-to-end automation testing " +
            "that reduces tons of long and error-prone manual process for QA team, thus increase efficiency",
            "Implement additional features such as self-healing and report logging for the automated Selenium tool " +
            "that give better reports with clearer error tracing",
            "Perform various testing techniques for software releases"
        ]
    },
    {
        "jobTitle": "Store Associate",
        "company": "7-Eleven",
        "period": "July 2014 - December 2016",
        "duties": [
            "Keep track of merchandise flows",
            "Provide outstanding customer service"
        ]
    },
    {
        "jobTitle": "Librarian Assistant",
        "company": "Melbourne Public Library",
        "period": "December 2012 - April 2013",
        "duties": [
            "Volunteer",
            "Organize and track books flow",
            "Organize and run public events for children"
        ]
    }
];


$(function () {
    let experienceToggle = $("#experienceToggle");
    let experienceTemplate = $("#experienceTemplate").clone().find(".experience");

    // loop through all work experience
    for(let i = 0; i < workExperienceList.length; i++) {
        let experienceData = workExperienceList[i];
        let currentExperience = experienceTemplate.clone();

        // only show the first experience by default
        if(i > 0) {
            currentExperience.addClass("experienceHidden");
            currentExperience.prepend("<hr/>");
        }

        currentExperience.find(".jobTitle").html(experienceData.jobTitle);
        currentExperience.find(".company").html(experienceData.company);
        currentExperience.find(".period").html(experienceData.period);

        let customList = $("#customListTemplate").clone().find(".customList");
        let item = customList.find(".customListItem");
        let currentDuties = experienceData.duties;
        item.find(".customListIcon").attr("src", "./assets/images/misc/work.png");

        // add all duties of current work experience
        for(let duty = 0; duty < currentDuties.length; duty++) {
            let newItem = item.clone();
            newItem.find(".customListText").text(currentDuties[duty]);
            customList.append(newItem);
        }

        customList.find(item).eq(0).remove();
        currentExperience.append(customList);
        experienceToggle.before(currentExperience);
    }

    experienceTemplate.remove();
});