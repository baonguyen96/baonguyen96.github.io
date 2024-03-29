$(function () {
    let currentYear = (new Date()).getFullYear();
    let copyrightText = [`&copy; ${currentYear} by <i>Bao Nguyen</i>.`, 'All rights reserved.'];
    setSingleLineCopyright(copyrightText);
    setDoubleLinesCopyright(copyrightText);
});


function setSingleLineCopyright(copyrightText) {
    $("#copyright").find('p').html(copyrightText.join(' '));
}

function setDoubleLinesCopyright(copyrightText) {
    let $container = $("#copyright").find('.row');
    $container.find('div:first-child').html(copyrightText[0]);
    $container.find('div:last-child').text(copyrightText[1]);
}