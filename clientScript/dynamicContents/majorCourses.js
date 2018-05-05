var courses = [
    "Data Structures and Introduction to Algorithmic Analysis",
    "Operating System Concepts",
    "Database Systems",
    "Computer Architecture",
    "Computer Network Security",
    "C/C++ in UNIX Environment",
    "Software Architecture and Design Patterns",
    "Requirements Engineering",
    "Software Testing, Verification, and Quality Assurance",
    "Software Project Planning and Management",
    "Program Analysis and Its Application",
    "Introduction to Machine Learning",
    "Object-Oriented Analysis and Design"
];

$(function () {
    var coursesSection = $("#coursesSection");
    var customList = $("#customListTemplate").clone().find(".customList");
    var item = customList.find(".customListItem");
    item.find(".customListIcon").attr("src", "./assets/images/misc/course.png");

    for(var i = 0; i < courses.length; i++) {
        var newItem = item.clone();
        newItem.find(".customListText").text(courses[i]);
        customList.append(newItem);
    }

    customList.find(item).eq(0).remove();
    coursesSection.append(customList);
});