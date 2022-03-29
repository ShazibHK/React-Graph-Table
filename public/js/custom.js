$(function() {

    /*---- advance paramerts show and hide code starts ----*/
    $('.js-toggel-parameters').on("click", function() {
        $(this).toggleClass("active");
        if ($(this).hasClass("active")) {
            $(this).blur();
            $(this).find('span').text("Hide");
            $(this).find('.hide-arrow').show();
            $(this).find('.show-arrow').hide();
            $(this).attr("aria-label", "Hide Advanced Parameters");
        } else {
            $(this).find('span').text("Advanced parameters");
            $(this).attr("aria-label", "Show Advanced Parameters");
            $(this).find('.show-arrow').show();
            $(this).find('.hide-arrow').hide();
        }
    });
    $('.js-hide-parameters').on("click", function() {
        $(".js-toggel-parameters").trigger("click");
    });

    //to add focus on hide button after advance parameter div expanded
    $('#advancedParaToggle').on('shown.bs.collapse', function() {
            $(".js-hide-parameters").focus();
        })
        /*---- advance paramerts show and hide code ends ----*/


    /*----- projections table and graph view code starts -----*/
    //for overview tab
    $("#overviewRadioBtn input").on("click", function() {
        if ($(this).is(':checked')) {
            let target = $(this).attr("data-target");
            $("[class^='js-view-']").removeClass("active");
            $(target).addClass("active");
        }
    });
    //for cash flow tab
    $("#cashRadioBtn input").on("click", function() {
        if ($(this).is(':checked')) {
            let target = $(this).attr("data-target");
            $("[class^='js-cash-']").removeClass("active");
            $(target).addClass("active");
        }
    });
    //for equity tab
    $("#equityRadioBtn input").on("click", function() {
        if ($(this).is(':checked')) {
            let target = $(this).attr("data-target");
            $("[class^='js-equity-']").removeClass("active");
            $(target).addClass("active");
        }
    });
    /*----- projections table and graph view code ends -----*/


    /*----- tooltip popover js -----*/
    $("[data-toggle=popover]").popover({
        html: true,
        trigger: 'focus',
        content: function() {
            let content = $(this).attr("data-popover-content");
            return $(content).children(".popover-body").html();
        }
    });
    /*----- for accessibility - to close popover on esc button press -----*/
    $(document).keyup(function(event) {
        if (event.which === 27) {
            $("[data-toggle=popover]").popover('hide');
        }
    });

});


/*----- for smooth scrolling of tabs in mobile viewport starts -----*/
const smallDevice = window.matchMedia("(max-width: 767px)");
smallDevice.addListener(handleDeviceChange);

function handleDeviceChange(e) {
    if (e.matches) {
        if ($('#targetNav').length) {
            $("body").attr("data-offset", "130").attr("data-spy", "scroll");
        }

        $("#targetNav a").on('click', function(event) {
            $("#targetNav a").removeClass("active");
            $(this).addClass("active");
            let navLinkHash = $(this).attr('href');
            let navOffset = $('#targetNav').height();

            $('html, body').animate({
                scrollTop: $(navLinkHash).offset().top - navOffset
            }, 1000);

        });
    } else {
        //stop the animation on desktop
        $("body").removeAttr("data-offset").removeAttr("data-spy");
        $("#targetNav a").on('click', function(event) {
            $('html, body').stop();
        });
    }
}
// Run it initially
handleDeviceChange(smallDevice);

/*----- for smooth scrolling of tabs in mobile viewport ends -----*/