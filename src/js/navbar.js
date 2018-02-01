
$(function () {
    //Show custom responsive menu
    $('[data-toggle="overlay-menu"]').click(function () {
        $('.menu-responsive').toggleClass('show')
    });

    //primary search toggle
    $('.search-toogle').click(function () {
        $('.primary-search').toggleClass('show');
        $('.primary-search input').focus();
    })
});

