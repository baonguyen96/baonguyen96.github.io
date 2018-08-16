// reference createLink function in projects.js
let awards = [
    createLink("https://www.utdallas.edu/news/2015/3/13-31446_More-than-1100-Students-Earn-Spots-on-Deans-List-f_story-wide.html", "Fall 2014 Dean's List") + " with the Excellence in Education Scholarship for this semester",
    createLink("http://www.utdallas.edu/news/2016/3/4-31922_More-than-1200-Students-Earn-Spots-on-Deans-List-f_story-wide.html?WT.mc_id=NewsEmail", "Fall 2015 Dean's List") + " with the Excellence in Education Scholarship for this semester",
    "2017 Wells Fargo Endowed Scholarship",
    "2018 Selden Leavell Endowed Scholarship",
    "2018 Mason Brown Family Foundation Endowed Scholarship",
    "Software Testing Contest Certificate from " + createLink("http://rs.ieee.org/", "IEEE Reliability Society"),
    createLink("https://www.utdallas.edu/news/2018/7/30-33059_More-than-1400-Students-Earn-Spots-on-Spring-Deans_story-wide.html", "Spring 2018 Dean's List"),
];


$(function () {
    let awardsSection = $("#awardsSection");
    let customList = $("#customListTemplate").clone().find(".customList");
    let item = customList.find(".customListItem");
    item.find(".customListIcon").attr("src", "./assets/images/misc/award.png");

    for(let i = 0; i < awards.length; i++) {
        let newItem = item.clone();
        newItem.find(".customListText").html(awards[i]);
        customList.append(newItem);
    }

    customList.find(item).eq(0).remove();
    awardsSection.append(customList);
});
