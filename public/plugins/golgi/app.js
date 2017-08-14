'use strict';

$(document).ready(function () {

    $(".ui.accordion").accordion();//accordion trigger
    $(".ui.rating").rating();//rating trigger
    $(".ui.dropdown").dropdown();//dropdown and select trigger

    //sidebar trigger
    $("#toc").sidebar({
        dimPage: true,
        transition: "overlay",
        mobileTransition: "uncover"
    });

    //sidebar trigger
    $("body").niceScroll({
        cursorcolor: "#ddd",
        cursorwidth: 5,
        cursorborderradius: 0,
        cursorborder: 0,
        scrollspeed: 50,
        autohidemode: true,
        zindex: 9999999
    });//body scroll tigger by nicescroll

});

//Sidebar Menu Size Animaton Function

//Pace Loading (On Navbar) Function
function paceLoading() {
    var paceOptions = {
        restartOnRequestAfter: false
    };

    $(document).ajaxStart(function () {
        Pace.restart();
    });
}