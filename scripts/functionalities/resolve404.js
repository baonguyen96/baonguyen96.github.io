$(function () {
    let link404 = $("#link404");

    link404.click(function () {
        let currentURL = window.location.href;
        let newURL = '';

        if (currentURL.includes("localhost")) {
            newURL = 'http://localhost:63343/baonguyen96.github.io';
        }
        else {
            newURL = 'https://baonguyen96.github.io/';
        }

        window.location.replace(newURL);
    });

});