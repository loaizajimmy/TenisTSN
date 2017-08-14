$(function () {
    /**
     * Añade eñ efecto al darle click a una accion
     */
    $('a.item').click(function () {
        let item = $(this);
        item.transition({
            animation: 'tada',
            duration: 800,
            onComplete: function () {
                const href = item.attr('href');
                if ((href !== undefined) && (href !== "#")) {
                    window.location.href = href;
                }
            }
        });
        $('a.active').removeClass('active');
        item.addClass('active');

        return false;
    });

    pushNotification();
});


function pushNotification() {
    $(".not").on("click", function () {
        let a, b, c, d, e, f, g, h, i, j, k;
        d = $(this).attr("data-size");
        e = $(this).attr("data-message");
        c = $(this).attr("data-type");
        f = $(this).attr("data-icon");
        g = $(this).attr("data-title");
        h = $(this).attr("data-image");
        i = $(this).attr("data-sound");
        a = $(this).attr("data-show-animation");
        b = $(this).attr("data-hide-animation");
        j = $(this).attr("data-position");
        k = $(this).attr("data-delay");
        Lobibox.notify(c, {
            size: d,
            rounded: true,
            delayIndicator: true,
            msg: e,
            icon: f,
            title: g,
            showClass: a,
            hideClass: b,
            sound: i,
            img: h,
            delay: k
        });
    });

}