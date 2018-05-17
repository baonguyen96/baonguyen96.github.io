let workExperienceList = [
    {
        "jobTitle": "Quality Assurance",
        "company": "Loopback Analytics",
        "period": "May 2017 - August 2017,<br/>January 2018 - Present",
        "duties": [
            "Architect and develop multiple tools for automation testing, including the system that integrates " +
            "all those tools together to support end-to-end testing",
            "Implement additional features such as self-healing and report logging for the automated tools",
            "Develop test cases from the requirements",
            "Perform various testing techniques for software releases",
            "Experience with Java, SQL, Selenium, XML"
        ]
    },
    {
        "jobTitle": "Store Associate",
        "company": "7-Eleven",
        "period": "July 2014 - December 2016",
        "duties": [
            "Receive and check in/out merchandises",
            "Provide outstanding customer service"
        ]
    },
    {
        "jobTitle": "Librarian Helper",
        "company": "Melbourne Public Library",
        "period": "December 2012 - April 2013",
        "duties": [
            "Volunteerism",
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