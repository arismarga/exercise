/*const emailField = document.querySelector("#exampleInputEmail1");
const passwordField = document.querySelector("#exampleInputPassword1");
const btnSubmit = document.querySelector("#submitBtn");
const formValuesContainer = document.querySelector(".form-values-container");

btnSubmit.addEventListener("click", (e) => submitBtnClickHandler(e));

function submitBtnClickHandler(e) {
    e.preventDefault();  
    getFormValues();

}

function getFormValues() {
    const emailParagraph = createParagraphTag();
    const passwordParagraph = createParagraphTag();

    emailParagraph.innerText = emailField.value;
    passwordParagraph.innerText = passwordField.value;

    appendElementParagraph(emailParagraph);
    appendElementParagraph(passwordParagraph);
}

function createParagraphTag() {
    return document.createElement("p");
}

function appendElementParagraph(paragraph) {
    formValuesContainer.appendChild(paragraph);
}
*/
const addNewField = document.querySelector(".create-new-field");
const lastPosition = document.querySelector(".last-form-group");
const submitBtn = document.querySelector(".btn-primary");
const formValuesContainer = document.querySelector(".form-values-container");

function createNewField(){
    //Create div + classes
    const addNewFieldOnDiv = document.createElement("div");
    addNewFieldOnDiv.className = "form-group mb-3";
    //Create label + text
    const addLabel = document.createElement("label");
    addLabel.innerText = "Your custom Field"
    //Create input field + classes
    const newField = document.createElement("input");
    newField.className = "form-control";
    
    addNewFieldOnDiv.appendChild(addLabel);
    addNewFieldOnDiv.appendChild(newField);
    lastPosition.after(addNewFieldOnDiv);

}

addNewField.addEventListener("click", function(){
    createNewField();
});

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    formValuesContainer.innerHTML = "";
    const fieldValues = document.querySelectorAll(".form-control");
    for(let i = 0 ; i < fieldValues.length ; i++){
        const placeField = document.createElement("li");
        const fieldValue = fieldValues[i].value;
        placeField.innerText = fieldValue;
        formValuesContainer.appendChild(placeField);
    }
    
});