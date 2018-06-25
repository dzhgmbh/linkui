$(function () {
    $('.tree-trigger').click(function () {
        $(this).parent().children('ul.tree-level').toggle(300);
        $(this).parent().children('ul.tree-level').toggleClass('toggle');
        $(this).toggleClass('active');
    });

});