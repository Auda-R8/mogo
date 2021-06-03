$(function(){

    /* Header Fixed */

    var scrollOffset = $(window).scrollTop();
    var header = $("#header");
    var introH = $("#intro").innerHeight();

    checkScroll(scrollOffset);

    $(window).on("scroll", function(){
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){
        if(scrollOffset > introH){
            header.addClass("fixed");
        } else header.removeClass("fixed");
    }

    /** Smooth Scroll */

       
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var blockId = $(this).data('scroll');
        var blockOffset = $(blockId).offset().top;

        $("#nav a").removeClass("active");
        $(this).addClass("active");

        $('html, boby').animate({
            scrollTop: blockOffset
        }, 800);
    });

    /** Menu Toggle Bars */

    $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $("#nav").toggleClass("active");
        $("#nav-toggle").toggleClass("active");
    });


    /** Collapse */

    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        var element = $(this).data('collapse');

        $(element).slideToggle();
        $(this).toggleClass("active");
    });


    /** Slider */

    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});