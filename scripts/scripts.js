"use strict";
$(document).ready(function () {
    //scrolling
    $(window).resize(resizeWindow);
    resizeWindow();
    $("#scroll-container").niceScroll({
        touchbehavior: true
    });
    $("#main-menu").niceScroll({
        touchbehavior: true
    });
    //menu selection
    $("#app-menu #sections-tab-menu li").click(selectMenuTab);
    $("#app-menu #main-menu li").click(selectMenuItem);

    //navigation with animations
    $("a").click(function (e) {
        e.preventDefault();
    });

    $("#menu-button").click(moveMenu);
    $("#menu-search-field").keypress(search);
    $("#beginning-menu-item").click(function () {
        navigate("index.html", true);
    });
    $("#products-menu-item").click(function () {
        navigate("products.html", true);
    });
    $("#food-category").click(function () {
        navigate("food.html", false);
    });
    $("#back-button").click(function () {
        navigate("products.html", false);
    });
});

var search = function (e) {
    console.log(e.which === 13);
    if (e.which === 13 && $("#menu-search-field").val().toLowerCase() === "fitness") { //only the view for fitness is available
        moveMenu();
        setTimeout(function () {
            $("#main-container, #header").addClass("animated pulse");
        }, 300);
        setTimeout(function () {
            window.location.href = "/fitness.html";
        }, 800);
    }
}

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
//TODO: DRY with selectMenuTab
var selectMenuItem = function (e) {
    var self = e.target;
    if ($(self).children().length < 2) {
        self = $(self).parent("li");
    }
    $(self).css("background", "black");

    var items = $("#app-menu #main-menu li");
    for (var i = 0, length = items.length; i < length; i++) {
        if ($(items[i]).attr('id') !== $(self).attr('id')) {
            $(items[i]).css("background", "none");
        }
    }
}

var moveMenu = function () {
    $("#app-menu, #main-container").animate({
        left: ($("#app-menu").css("left") === "-519px") ? "+=519" : "-=519"
    }, 300);
}

var navigate = function (page, toMove) {
    if (window.location.href.toString().search(page) === -1) {
        var timeout = 300;
        (toMove) ? moveMenu() : timeout -= 300;
        setTimeout(function () {
            $("#main-container").addClass("animated pulse");
        }, timeout);
        setTimeout(function () {
            window.location.href = "/" + page;
        }, 800);
    }
}

var resizeWindow = function () {
    $("#scroll-container").height($(window).height() - 80); //needed for scrolling, comment on testing
}