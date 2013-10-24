"use strict";
$(document).ready(function () {
    //scrolling
    $("#scroll-container").height($(window).height() - 80);
    $("#scroll-container").niceScroll({
        touchbehavior: true
    });
    $("#main-menu").niceScroll({
        touchbehavior: true
    });
    //menu selection
    $("#app-menu #sections-tab-menu li").click(selectMenuTab);
    $("#app-menu #main-menu li").click(selectMenuItem);
});

var selectMenuTab = function (e) {
    var self = e.target;
    $(self).css("background", "none");
    $(self).css("border", "none");
    $(self).css("outline", "none");

    var tabs = $("#app-menu #sections-tab-menu li");
    for (var i = 0; i < 3; i++) {
        if ($(tabs[i]).attr('id') !== $(self).attr('id')) {
            $(tabs[i]).css("background", "url('/images/non-selected-tab.fw.png')");
            $(tabs[i]).css("border", "1px solid #272728");
            $(tabs[i]).css("outline", "1px solid #3c3d3e");
        }
    }
}

var selectMenuItem = function (e) {
    var self = e.target;
    $(self).css("background", "black");
    
    var items = $("#app-menu #main-menu li");
    for (var i = 0, length = items.length; i < length; i++) {
        if ($(items[i]).attr('id') !== $(self).attr('id')) {
            $(items[i]).css("background", "none");
        }
    }
}