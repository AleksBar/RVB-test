/* overlay function for close ================= */
function closeOverlay() {
    const overlayBg = document.querySelector('.overlay__bg');

    overlayBg.addEventListener('click', function () {
        menu.classList.remove('header__menu_active');
        burger.classList.remove('burger_active');
        body.classList.remove('body-block');
        overlay.classList.remove('overlay_active');
    });

    function addPaddingForBodyWithPopup() {
        function cb(mutations, observer) {
            if(overlay.classList.contains('overlay_active') ||
            overlay.classList.contains('overlay_active-max')) {
                body.classList.add('pad-r');
                if (!(header.classList.contains('.header_fixed'))){
                    burger.classList.add('pad-r');
                }
                else {
                    headerCont.classList.add('ind-r');
                }
            }
            else {
                body.classList.remove('pad-r');
                burger.classList.remove('pad-r');
                headerCont.classList.remove('ind-r');
            }
        }

        const observer = new MutationObserver(cb);

        observer.observe(overlay, {
            attributes: true
        });
    }
    addPaddingForBodyWithPopup();
}
closeOverlay();
/* ============================== */