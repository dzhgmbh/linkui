/**
 * Notification Bar
 */

$(function () {
    $('[data-toggle="notification"]').click(function () {
        $('.notification-content').addClass('show'); //show notification content area
        $('#grid-wrapp').addClass('active'); //show overlay
        $('.sidebar').removeClass('active'); //hide sidebar
    });


    $('.close-panel').click(function () {
        $('.notification-content').removeClass('show'); //hide notification content area
        $('#grid-wrapp').removeClass('active'); //hide overlay

        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }

    });
});

/*Notification tab function*/
function openInfo(evt, openInfo) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(openInfo).style.display = "block";
    evt.currentTarget.className += " active";
}
