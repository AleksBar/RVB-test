/* ======= about ========= */
function aboutScript() {
    aboutImg.addEventListener('click', function () {
        let img = this.innerHTML;
        overlayBtn.classList.remove('hidden');
        overlay.classList.add('overlay_show');
        body.classList.add('body-block');
        headerCont.classList.add('ind-r');
        overlayCont.innerHTML = img;
    });
    overlayBtn.addEventListener('click', function () {
        overlayBtn.classList.add('hidden');
        overlay.classList.remove('overlay_show');
        body.classList.remove('body-block');
        headerCont.classList.remove('ind-r');
        overlayCont.innerHTML = '';
    });
}
aboutScript();
/* ======================= */