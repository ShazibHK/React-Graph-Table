let selectedModalId = '';
let trapFocus = () => {
    // add all the elements inside modal which you want to make focusable
    if (selectedModalId) {
        let focusableElements =
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        let modal = document.querySelector('#' + selectedModalId); // select the modal by it's id

        let firstFocusableElement = modal.querySelectorAll(focusableElements)[0]; // get first element to be focused inside modal
        let focusableContent = modal.querySelectorAll(focusableElements);
        let lastFocusableElement = focusableContent[focusableContent.length - 1]; // get last element to be focused inside modal
        return { "lastFocusableElement": lastFocusableElement, "firstFocusableElement": firstFocusableElement }
    } else {
        return null;
    }
}

document.addEventListener('keydown', function(e) {
    let isTabPressed = e.key === 'Tab' || e.keyCode === 9;
    if (!isTabPressed) {
        return;
    }
    let objFocus = trapFocus();
    if (objFocus) {
        if (e.shiftKey) { // if shift key pressed for shift + tab combination
            if (document.activeElement === objFocus.firstFocusableElement) {
                objFocus.lastFocusableElement.focus(); // add focus for the last focusable element
                e.preventDefault();
            }
        } else { // if tab key is pressed
            if (document.activeElement === objFocus.lastFocusableElement) { // if focused has reached to last focusable element then focus first focusable element after pressing tab
                objFocus.firstFocusableElement.focus(); // add focus for the first focusable element
                e.preventDefault();
            }
        }
    }
});

$(document).ready(function() {
    $(".modal").on("shown.bs.modal", function(e) {
        selectedModalId = e.target.id;
    });
});