let courses = [
    "Data Structures and Algorithmic Analysis",
    "Operating System Concepts",
    "Database Systems",
    "Computer Architecture",
    "Computer Network Security",
    "C/C++ in UNIX Environment",
    "Requirement Engineering",
    "Software Architecture and Design Patterns",
    "Software Testing, Verification, and Quality Assurance",
    "Software Project Planning and Management",
    "Program Analysis and Its Application",
    "Introduction to Machine Learning",
    "Object-Oriented Analysis and Design",
    "Web Development for Business Application",
    "Systems Security and Malicious Code Analysis"
];

$(function () {
    let coursesSection = $("#coursesSection");
    let customList = $("#customListTemplate").clone().find(".customList");
    let item = customList.find(".customListItem");
    item.find(".customListIcon").attr("src", "./assets/images/misc/course.png");

    for(let i = 0; i < courses.length; i++) {
        let newItem = item.clone();
        newItem.find(".customListText").text(courses[i]);
        customList.append(newItem);
    }

    customList.find(item).eq(0).remove();
    coursesSection.append(customList);
});