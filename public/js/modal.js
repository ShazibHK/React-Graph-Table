$(function() {
    //Search select option
    if ($('.js-ServiceListControl').length) {
        $(document).on('keyup', '.js-ServiceListControl', function(e) {
            let listLength = $(this).val().length;
            if (listLength >= 1) {
                $('.js-ServicesList').show();
            } else {
                $('.js-ServicesList').hide();
            }
        });
    }

    // Property modal script
    $('.js-target-link').on("click", function() {
        $('.js-target-div').hide();
        $(".js-target-div.active").removeClass("active");
        $('#jsTargetModal' + $(this).attr('data-target')).addClass("active");
        $('#jsTargetModal' + $(this).attr('data-target')).show();
        //This code is use to fix accessibility issues only for presentation starts
        if ($("#jsTargetModal3").hasClass("active")) {
            $(".js-target-link").focus();
        } else if ($("#jsTargetModal2").hasClass("active")) {
            $(".js-ServiceListControl").focus();
        } else {
            $(".focusable-add-property").focus();
        }
        //This code is use to fix accessibility issues only for presentation only ends
    });

    // Address Modal Show More JS Start
    $(".js-expandible").each(function() {
        let LiN = $(this).find('.form-check').length;
        if (LiN > 5) {
            $('.form-check', this).eq(4).nextAll('.form-check').hide().addClass('js-toggleableListItem');
            //$('.form-check', this).eq(5).attr("tabindex", "0");
            $('.form-check', this).eq(5).addClass('current-list');
            $('.form-check.current-list input').focus();
        }
    });
    $(".js-toggleable-list").on("click", function() {
        $(this).hide();
        $(this).parents(".radio-input-group").find(".form-check.js-toggleableListItem").show();
        $('.form-check.current-list input').focus();
    });
    // Address Modal Show More JS End
});