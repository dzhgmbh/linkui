/**
 * Sidebar Demo js build
 */

$(function () {
    $('[data-toggle="sidebar"]').click(function () {
        if ($('.sidebar').hasClass('active')) {
            $('.sidebar, #grid-wrapp').removeClass('active');
        }
        else {
            $('.sidebar, #grid-wrapp').addClass('active');
        }

        $('.notification-content').removeClass('show'); //hide notification content area
        // Get all elements with class="tablinks" and remove the class "active"
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
    });
});
