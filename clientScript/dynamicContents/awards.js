// reference createLinkText function in projects.js
var awards = [
    createLinkText("https://www.utdallas.edu/news/2015/3/13-31446_More-than-1100-Students-Earn-Spots-on-Deans-List-f_story-wide.html", "", "Fall 2014 Dean's List") + " with the Excellence in Education Scholarship for this semester",
    createLinkText("http://www.utdallas.edu/news/2016/3/4-31922_More-than-1200-Students-Earn-Spots-on-Deans-List-f_story-wide.html?WT.mc_id=NewsEmail", "", "Fall 2015 Dean's List") + " with the Excellence in Education Scholarship for this semester",
    "2017 Wells Fargo Endowed Scholarship",
    "2018 Selden Leavell Endowed Scholarship",
    "2018 Mason Brown Family Foundation Endowed Scholarship",
    createLinkText("http://rs.ieee.org/", "Software Testing Contest Certification from ", "IEEE Reliability Society")
];


$(function () {
    var awardsSection = $("#awardsSection");
    var customList = $("#customListTemplate").clone().find(".customList");
    var item = customList.find(".customListItem");
    item.find(".customListIcon").attr("src", "./assets/images/misc/award.png");

    for(var i = 0; i < awards.length; i++) {
        var newItem = item.clone();
        newItem.find(".customListText").html(awards[i]);
        customList.append(newItem);
    }

    customList.find(item).eq(0).remove();
    awardsSection.append(customList);
});
