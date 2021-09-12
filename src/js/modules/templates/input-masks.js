/* phone mask */ 
const phoneMask = new Inputmask({
    mask: "+7 (999)-999-9999",
    showMaskOnHover: false,
    showMaskOnFocus: true
});
phoneMask.mask(inputTel);