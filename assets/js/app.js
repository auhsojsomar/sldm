$(document).ready(() => {
    let offset = 800;
    let duration = 500;

    $(window).scroll(() => {
        if ($(this).scrollTop() > offset) $(".back-to-top").fadeIn(duration);
        else $(".back-to-top").fadeOut(duration);
    });

    $(".back-to-top").click(() =>
        jQuery("html,body").animate(
            {
                scrollTop: 0
            },
            500
        )
    );
});
