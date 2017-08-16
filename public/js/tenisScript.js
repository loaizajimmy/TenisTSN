$(function () {
    $("#radios").radiosToSlider();
    $(".menu .item").tab();

    $('.siguiente').on('click', function () {
        $('a[data-tab="referencias"]').click();
    });

    $("#btnAddImages").on('click', function () {
        $("#divDrag").css('display', 'block');
    });
});