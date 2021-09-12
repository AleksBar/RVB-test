/* popups for links ================= */
function modalForLinks() {
    const links = document.querySelectorAll('a');
    const buttons = document.querySelectorAll('button');
    let btnClickTimer = null;
    let linkClickTimer = null;

    function classAdd(){
        body.classList.add('body-block');
        overlay.classList.add('overlay_active-max');
        popup.classList.add('popup_active');
    }
    function classremove(){
        overlay.classList.remove('overlay_active-max');
        popup.classList.remove('.popup_active');
        body.classList.remove('body-block');
    }
    
    links.forEach((link) => {
        if (link.hasAttribute('data-scrollbtn') ||
        link.parentNode.classList.contains('our-product__nav-item')){
            return;
        }
        else {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                classAdd();
                popup.textContent = 'Ссылка =)';
                clearTimeout(linkClickTimer);
                linkClickTimer = setTimeout(() => {
                    classremove();
                    popup.textContent = '';
                }, 2000);
            });
        }
    });

    buttons.forEach(function (btn) {
        if(btn.parentNode.nodeName ==="FORM" || btn.parentNode.classList.contains('tns-controls')){
            return;
        }
        else {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                classAdd();
                popup.textContent = 'Кнопка =)';
                clearTimeout(btnClickTimer);
                btnClickTimer = setTimeout(() => {
                    classremove();
                    popup.textContent = '';
                }, 2000);
            });
        }
    });
}
modalForLinks();
/* ================================ */