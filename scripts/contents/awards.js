// reference createLink function in projects.js
let awards = [
    "USPTO Patent Pending: <b>Method and System For Managing Cross-Account Data Distribution</b> (Application No.: 18/239,502)",
    createLink("https://www.credly.com/badges/b5f94e9d-3e75-4a16-b3c3-13bb5226c97a/public_url", "HashiCorp Certified: Terraform Associate"),
    createLink("https://www.youracclaim.com/badges/2f55c1da-05b9-477e-9148-fad5cc5c4308", "AWS Certified Developer - Associate"),
    "Graduate Certificate in Information Assurance",
    "MS. in Computer Science",
    "<i>Cum Laude</i> Honor Graduation, BS. in Software Engineering"
];


$(function () {
    let awardsSection = $("#awardsSection");
    let customList = $(CUSTOM_LIST_TEMPLATE);
    let item = customList.find(".customListItem");
    item.find(".customListIcon").attr("src", "./assets/images/misc/award.png");

    for (let i = 0; i < awards.length; i++) {
        let newItem = item.clone();
        newItem.find(".customListText").html(awards[i]);
        newItem.attr('id', `award${i}`);
        customList.append(newItem);
    }

    customList.find(item).eq(0).remove();
    awardsSection.append(customList);
});
