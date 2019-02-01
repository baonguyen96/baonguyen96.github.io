let courses = [
    "Data Structures and Algorithmic Analysis",
    "Operating System Concepts",
    "Database Systems And Design",
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
    "Systems Security and Malicious Code Analysis",
    "Information Security"
];

$(function () {
    let customList = $(customListTemplate);
    let item = customList.find(".customListItem");
    item.find(".customListIcon").attr("src", "./assets/images/misc/course.png");

    for(let i = 0; i < courses.length; i++) {
        let newItem = item.clone();
        newItem.attr('id', 'course' + i);
        newItem.find(".customListText").text(courses[i]);
        customList.append(newItem);
    }

    customList.find(item).eq(0).remove();
	$("#coursesSection").append(customList);
});