$(function () {
    let status = 1;
    let header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

/*    header fixed*/
    checkScroll(scrollOffset);

    $(window).on("scroll", function () {
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll() {
        if(scrollOffset >= introH-50){
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }

/*    smooth scroll*/

    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();
        let blockId = $(this).data('scroll'),
            $this = $(this),
            blockOffset = $(blockId).offset().top;
            blockOffset -= 50;

        if (introH <= 770) {
            let navToggle = $("#nav_toggle"),
                navFi =  $("#nav");

            navToggle.toggleClass("active");
            navFi.toggleClass("active");
            
            /*if (!navToggle.hasClass("active")){
                navToggle.toggleClass("active");
            }
            if (!navFi.hasClass("active")){
                navFi.toggleClass("active")
            }*/
        }

        /*if (scrollOffset < 100){
            $("#nav_toggle").toggleClass("active");
            $("#nav").toggleClass("active")
        }*/

        /*if (blockOffset < 100) {
            $("#nav_toggle").toggleClass("active");
            $("#nav").toggleClass("active")
        }*/

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
        let blockId = $(this).data('collapse');
        $(blockId).slideToggle();
    });

});