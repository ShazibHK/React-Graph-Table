$(document).ready(function() {
    $('.js-left-nav-btn').on("click", function() {
        $('.js-property-slider').slick('slickPrev');
    })

    $('.js-right-nav-btn').on("click", function() {
        $('.js-property-slider').slick('slickNext');
    })

    //slider start
    $('.js-property-slider').slick({
        infinite: true,
        dots: true,
        speed: 300,
        accessible: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        infinite: false

    });

    $('.js-remove-btn').on("click", function(e) {
        let selectedPropertyId = $(this).attr("data-propertyid");
        removeProperty(selectedPropertyId);
    });
});

function removeProperty(propertyId) {
    let removeColData = $(".remove-item-" + propertyId);
    if (removeColData && removeColData.length >= 0) {
        for (let i = 0; i <= removeColData.length; i++) {
            if (removeColData[i]) {
                removeColData[i].innerHTML = "<span class='sr-only'>Data not available</span>";
            }
        }
    }
}