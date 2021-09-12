/* =========== slider ============ */
function mySlider() {
    const slider = tns({
        container: '.slider',
        items: 5,
        slideBy: 5,
        gutter: 70,
        rewind: true,
        autoplay: false,
        controlsPosition: 'bottom',
        navPosition: 'bottom',
        responsive: {
            320: {
                items: 1,
                slideBy: 1,
                gutter: 20
            },
            576: {
                items: 2,
                slideBy: 2,
                gutter: 20
            },
            992: {
                items: 4,
                slideBy: 4,
                gutter: 20
            },
            1100: {
                items: 5,
                slideBy: 5,
                gutter: 20
            },
            1300: {
                gutter: 40
            },
            1400: {
                gutter: 70
            }
        }
    });
}
mySlider();
/* =============================== */