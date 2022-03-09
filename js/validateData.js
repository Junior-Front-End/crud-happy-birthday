
// validation
function validateFormData(name, birthday, url) {
    
    // true by default
    var isValid = true;


    // check values

    if (name.value.length < 5) {
        isValid = false;
        name.classList.add('error');
    }

    if (birthday.value.length == 0) {
        isValid = false;
        birthday.classList.add('error');
    }

    if (url.value.length == 0) {
        isValid = false;
        url.classList.add('error');
    }

    if (
        name.value.length < 5 ||
        birthday.value.length == 0 ||
        url.value.length == 0
    ) {
        isValid = false;
    }

    // disapearing the error
    setTimeout(function () {
        name.classList.remove('error');
        birthday.classList.remove('error');
        url.classList.remove('error');
    }, 2000);

    // return
    return isValid;

};