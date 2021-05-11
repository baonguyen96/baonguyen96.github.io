$(function () {
    let START_YEAR = 2018;
    let currentYear = (new Date()).getFullYear();
    let period = '';

    if (currentYear > START_YEAR) {
        period = `${START_YEAR} - ${currentYear}`;
    }
    else {
        period = START_YEAR;
    }

    let copyrightText = [`&copy; ${period} by <i>Bao Nguyen</i>.`, 'All rights reserved.'];
    setSingleLineCopyright(copyrightText);
    setDoubleLinesCopyright(copyrightText);
});


function setSingleLineCopyright(copyrightText) {
    $("#copyright").find('p').html(copyrightText[0] + ' ' + copyrightText[1]);
}

function setDoubleLinesCopyright(copyrightText) {
    let $container = $("#copyright").find('.row');
    $container.find('div:first-child').html(copyrightText[0]);
    $container.find('div:last-child').html(copyrightText[1]);
}