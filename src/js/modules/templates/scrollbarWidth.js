/* set padding for elements equive scrollbar width ============ */
function setScrollbarPadding(elem, elem2) {
    const scrollbarWidth = window.innerWidth - document.body.clientWidth;
    const myClass = elem.replace(/\./, '');
    const sclassSearch = new RegExp(`(^|,) *\.${myClass} *(,|$)` , 'i');
    
    /* get all styles in document */
    const ss = document.styleSheets[0];
    const rules = ss.cssRules || ss.rules;
    /* create boxes for rights styles */
    let padRight = null;
    let indRight = null;
    
    for (let i = 0; i < rules.length; i++) {
        let rule = rules[i];
        
        if (sclassSearch.test(rule.selectorText) && sclassSearch.test('.ind-r')) {
            const elemContRight = +(window.getComputedStyle(elem2).marginRight.replace(/px/g, ''));
            const headerContRightNew = (elemContRight + scrollbarWidth);
            indRight = rule;
            indRight.style.marginRight = `${headerContRightNew}px`;
            break;
        }
        else if (sclassSearch.test(rule.selectorText) && !(sclassSearch.test('.ind-r'))) {
            padRight = rule;
            padRight.style.marginRight = `${scrollbarWidth}px`;
            break;
        }
    }
}

setScrollbarPadding('.pad-r');
setScrollbarPadding('.ind-r', headerCont);
/* ======================================================================== */