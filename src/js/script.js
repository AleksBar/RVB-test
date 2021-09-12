document.addEventListener("DOMContentLoaded", function() {
    @@include('templates/testWebP.js')
    @@include('libs/just-validate.js')
    @@include('libs/inputmask.min.js')
    @@include('variables.js')
    @@include('templates/scrollscript.js')
    @@include('templates/scrollbarWidth.js')
    @@include('templates/overlay.js')
    @@include('templates/validateForms.js')
    @@include('header.js')
    @@include('about.js')

    document.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
        });
    });
});