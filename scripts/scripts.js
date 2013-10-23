"use strict";
$(document).ready(function () {
    //scrolling
    $("#scroll-container").height($(window).height() - 80);
    $("#scroll-container").niceScroll({
        touchbehavior: true
    });
});