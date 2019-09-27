$(function () {

    var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

/*    header fixed*/
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll() {
        if(scrollOffset >= introH){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

/*    smooth scroll*/

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        var blockId = $(this).data('scroll'),
            $this = $(this),
            blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $this.addClass("active");

        $("html, body").animate({
            scrollTop: blockOffset
        }, 500);
    });

/*    menu nav toggle*/

    $("#nav_toggle").on("click", function (event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

/*    collapse*/

    $("[data-collapse]").on("click", function (event) {
        event.preventDefault();
        var blockId = $(this).data('collapse'),
            $this = $(this);

        $(blockId).slideToggle();
    });

});