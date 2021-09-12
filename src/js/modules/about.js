/* ======= about ========= */
function aboutScript() {
    aboutImg.addEventListener('click', function () {
        let overlayCont = document.querySelector('.overlay__cont-img');
        let img = this.innerHTML;
        overlay.classList.add('overlay_active');
        body.classList.add('body-block');
        headerCont.classList.add('ind-r');
        overlayCont.innerHTML = img;
    });
    overlayBtn.addEventListener('click', function () {
        overlay.classList.remove('overlay_active');
        body.classList.remove('body-block');
        headerCont.classList.remove('ind-r');
    });
}
aboutScript();
/* ======================= */