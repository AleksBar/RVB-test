/* variables ================ */
const header = document.querySelector('.header'),
      headerCont = document.querySelector('.header__container'),
      overlay = document.querySelector('.overlay'),
      overlayBtn = document.querySelector('.overlay__cont-close'),
      body = document.querySelector('body'),
      aboutImg = document.querySelector('.about__img'),
      burger = document.querySelector('.burger'),
      menu = document.querySelector('.header__menu'),
      inputTel = document.querySelector('#user-tel');
    //   popup = document.querySelector('.popup'),
    //   popupText = document.querySelector('.popup__text'),
    //   popupEmailText = document.querySelector('.popup__email-text');

const btns = document.querySelectorAll('button');
const links = document.querySelectorAll('a');

// function popupEventForFreeElements(arr) {
//     let timer = null;
//     arr.forEach((arrElem) => {
//         arrElem.addEventListener('click', function () {
//             if(arrElem.parentNode.nodeName === 'FORM' || arrElem.getAttribute('data-scrollbtn')){
//                 return;
//             }
//             else {
//                 clearTimeout(timer);
//                 overlay.classList.add('overlay_active');
//                 body.classList.add('body-block');
//                 popup.classList.add('popup_active');
//                 popupEmailText.classList.add('popup__email-text_hidden');
//                 popupText.textContent = 'Don\'t click me please :)';
//                 timer = setTimeout(() => {
//                     overlay.classList.remove('overlay_active');
//                     body.classList.remove('body-block');
//                     popup.classList.remove('popup_active');
//                     popupEmailText.classList.remove('popup__email-text_hidden');
//                     popupText.textContent = '';
//                 }, 3500);
//             }
//         });
//     });
// }
// popupEventForFreeElements(btns);
// popupEventForFreeElements(links);

/* ================================ */