let workExperienceList = [
    {
        "jobTitle": "Quality Assurance",
        "company": "Loopback Analytics",
        "period": "May 2017 - Present",
        "duties": [
            "Architect and develop multiple tools for automation testing, including the system that integrates " +
            "all those tools together to support end-to-end testing",
            "Implement additional features such as self-healing and report logging for the automated tools",
            "Develop test cases from the requirements",
            "Experience with Java, SQL, Selenium"
        ]
    },
    {
        "jobTitle": "Store Associate",
        "company": "7-Eleven",
        "period": "July 2014 - December 2016",
        "duties": [
            "Receive and check in/out merchandises",
            "Provide outstanding customer services"
        ]
    },
    {
        "jobTitle": "Librarian Helper",
        "company": "Melbourne Public Library",
        "period": "November 2012 - March 2013",
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

        currentExperience.find(".jobTitle").text(experienceData.jobTitle);
        currentExperience.find(".company").text(experienceData.company);
        currentExperience.find(".period").text(experienceData.period);

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