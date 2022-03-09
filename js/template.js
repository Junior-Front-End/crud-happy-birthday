
// template
// this function is not used yet anywhere
function setupHtmlTemplate(name, urlImage, dateBirthday) {


    // DIV ELEMENT
    var mainDiv = document.createElement('div');
    mainDiv.classList.add('col-md-4');

    // CARD ELEMENT
    var cardDiv = document.createElement('div');
    cardDiv.classList.add('card');

    // IMG ELEMENT
    var img_CardDiv = document.createElement('img');
    img_CardDiv.src = urlImage;
    img_CardDiv.classList.add('card-img-top');
    cardDiv.appendChild(img_CardDiv);

    // CARDBODY ELEMENT
    var cardBody_CardDiv = document.createElement('div');
    cardBody_CardDiv.classList.add('card-body');
    cardBody_CardDiv.classList.add('text-center');

    // H5 ELEMENT
    var h5_CardBody_CardDiv = document.createElement('h5');
    h5_CardBody_CardDiv.classList.add('card-title');
    h5_CardBody_CardDiv.innerHTML = name;
    cardBody_CardDiv.appendChild(h5_CardBody_CardDiv);

    // A ELEMENT
    var a_CardBody_CardDiv = document.createElement('a');
    a_CardBody_CardDiv.classList.add('btn');
    a_CardBody_CardDiv.classList.add('btn-primary');
    a_CardBody_CardDiv.innerHTML = dateBirthday;

    // CALLING ELEMENTS
    cardBody_CardDiv.appendChild(a_CardBody_CardDiv);
    cardDiv.appendChild(cardBody_CardDiv);
    mainDiv.appendChild(cardDiv);

    // clear and refill container
    document.getElementById('containerRegisters').appendChild(mainDiv);

};