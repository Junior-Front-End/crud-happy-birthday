
// define `users` globally to use anywhere
var users = [];

// ---------------------------------------
// save 
// ---------------------------------------
function saveData() {

    // (1/5) get data from form
    var form = document.getElementById('formManageUser');
    let name = form.name;
    let imgURL = form.url;
    let birthday = form.birthday;
    let remember = form.remember.checked;

    // (2/5) validation
    var isValid = validateFormData(name, birthday, imgURL); 

    // (3/5) if input data is not valid,
    // do not continue operating more codes!
    // just leave the function!
    if (!isValid) { return ; }

    // (4/5)
    setupHtmlTemplate(name.value, imgURL.value, birthday.value);

    // (5/5) clear form fields 
    var form = document.getElementById('formManageUser');
    form.reset();

};

 


 
