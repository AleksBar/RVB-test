/* header =========== */
function headerScript() {
    function fixedHeader(headerClassAnim, headerClassFixed) {
        document.addEventListener('scroll', () => {
            let elemBottom = header.offsetHeight;
            if(document.documentElement.scrollTop > elemBottom + 20 && 
                !header.classList.contains(headerClassFixed)){
                setTimeout(() => {
                    header.classList.add(headerClassAnim);
                    setTimeout(() => {
                        header.classList.remove(headerClassAnim);
                        header.classList.add(headerClassFixed);
                    }, 90);
                }, 10);
            } 
            else if (document.documentElement.scrollTop <= elemBottom + 20 && 
                header.classList.contains(headerClassFixed)) {
                    header.classList.remove(headerClassFixed);
                    setTimeout(() => {
                        if(document.documentElement.scrollTop <= elemBottom + 20 && 
                            header.classList.contains(headerClassFixed)){
                            header.classList.remove(headerClassFixed);
                        }
                    }, 50);
            }
        });
    }

    /* burger */
    function clickBurger(elem) {
        let elemClass = elem.replace(/\./g, '');
        let burger = document.querySelector(elem);
    
        burger.addEventListener('click', () => {
            if(burger.classList.contains(elemClass + '_active')){
                burger.classList.remove(elemClass + '_active');
                overlay.classList.remove('overlay_active');
                overlay.classList.remove('overlay_show');
                menu.classList.remove('header__menu_active');
                body.classList.remove('body-block');
            }
            else {
                burger.classList.add(elemClass + '_active');
                overlay.classList.add('overlay_active');
                overlayBtn.classList.add('hidden');
                menu.classList.add('header__menu_active');
                body.classList.add('body-block');
                overlayCont.innerHTML = '';
            }
        });
    }
    
    clickBurger('.burger');
    fixedHeader('header_fixing', 'header_fixed');
}
headerScript();
/* =========== */