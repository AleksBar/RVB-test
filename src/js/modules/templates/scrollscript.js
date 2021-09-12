/* scroll function =================== */
function scrollScript() {
    const anchors = document.querySelectorAll('[data-scroll]');
    const scrollBtn = document.querySelectorAll('[data-scrollbtn]');
    
    function scrlto(pos) {
        window.scrollTo({
            top: pos,
            behavior: "smooth"
        });
    }
    
    scrollBtn.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            e.preventDefault();
            let headerHeight = document.querySelector('.header').offsetHeight;
            let position;
    
            burger.classList.remove('burger_active');
            overlay.classList.remove('overlay_active');
            overlay.classList.remove('overlay_show');
            body.classList.remove('body-block');
            menu.classList.remove('header__menu_active');
            overlayBtn.classList.add('hidden');
            overlayCont.innerHTML = '';
    
            anchors.forEach((anchor) => {
                if(this.getAttribute('data-scrollbtn') === 'home') {
                    scrlto(0);
                }
                else if (this.getAttribute('data-scrollbtn') === anchor.getAttribute('data-scroll')){
                    position = anchor.getBoundingClientRect().top + pageYOffset - headerHeight;
                    scrlto(position);
                }
            });
        });
    });
}
scrollScript();
/* =================================== */