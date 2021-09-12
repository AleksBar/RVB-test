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
            // overlay.classList.remove('overlay_active');
            body.classList.remove('body-block');
            menu.classList.remove('header__menu_active');
    
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
    
    function arrowUp(elem, elemActive, elemHidden) {
        let arrow = document.querySelector(elem);
        let elemHeight = document.querySelector('.promo').offsetHeight / 2;
        let animatedClass = 'animate__animated';
        let animationClass = 'animate__fadeInDown';
        let animationClass2 = 'animate__fadeOutDown';
        let timer = null;
    
        document.addEventListener('scroll', () => {
            if (window.innerWidth >= 992) {
                if(document.documentElement.scrollTop > elemHeight){
                    if(arrow.classList.contains(animationClass2)){
                        return;
                    }
                    else{
                        setTimeout(() => {
                            arrow.classList.add(elemActive);
                            arrow.classList.add(animatedClass, animationClass);
                        }, 10);
                    }
                } 
                else {
                    arrow.classList.remove(elemActive);
                    arrow.classList.remove(animatedClass, animationClass);
                    setTimeout(() => {
                        if(document.documentElement.scrollTop < elemHeight){
                            arrow.classList.remove(elemActive);
                            arrow.classList.remove(animatedClass, animationClass);
                            clearTimeout(timer);
                            timer = setTimeout(() => {
                                arrow.classList.remove(elemHidden);
                            }, 300);
                        }
                    }, 10);
                }
            }
            else {
                arrow.classList.remove(elemActive);
                clearTimeout(timer);
                timer = setTimeout(() => {
                    arrow.classList.remove(elemHidden);
                }, 300);
            }
        });
        arrow.addEventListener('click', function (e) {
            e.preventDefault();
            clearTimeout(timer);
            arrow.classList.add(animationClass2);
            setTimeout(() => {
                arrow.classList.remove(animationClass2);
                arrow.classList.add(elemHidden);
            }, 1000);
            timer = setTimeout(() => {
                arrow.classList.remove(elemHidden);
                arrow.classList.remove(animationClass2);
            }, 2000);
    
        });
    }
    
    // arrowUp('.up-arrow', 'up-arrow_active', 'up-arrow_hidden');
}
scrollScript();
/* =================================== */