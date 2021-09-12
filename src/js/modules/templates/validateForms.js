/* validate forms =============== */
function validatorForForms() {
    let validateForms = function (selector, rules, messages) {
        new window.JustValidate(selector, {
            rules: rules,
            messages: messages,
            tooltip: {
                fadeOutTime: 3000,
                selectorWrap: '.form'
            },
            submitHandler: function (form) {

            }
        });
    };
    let rules = {
        name: {
            required: true,
            maxLength: 35
        },
        phone: {
            required: true,
        },
        descr: {
            required: true,
            minLength: 20,
            maxLength: 200
        },
    };
    let messages = {
        name: {
            required: 'Поле должно быть заполнено',
            maxLength: 'Максимальное кол-во символов 35'
        },
        phone: {
            required: 'Поле должно быть заполнено'
        },
        descr: {
            required: 'Поле должно быть заполнено',
            minLength: 'Минимальное кол-во символов 20',
            maxLength: 'Максимальное кол-во символов 200'
        },
    };
    
    @@include('templates/input-masks.js')

    validateForms('.form', rules, messages);
}
validatorForForms();
/*  ============================== */