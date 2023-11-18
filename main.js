function validation(){
    const firstNameBox=document.getElementById("firstNameBox");
    const lastNameBox=document.getElementById("lastNameBox");
    const textBox=document.getElementById("textBox");

    const firstNameError=document.getElementById("firstNameError");
    const lastNameError=document.getElementById("lastNameError");
    const textError=document.getElementById("textError");

    
    // const firstName=firstNameBox.value;
    // const lastName=lastNameBox.value;
    // const text=textBox.value;
//////////////////////////////////////////////////////////////////////
clearAll();

function clearAll() {
    const firstNameBox=document.getElementById("firstNameBox");
    const lastNameBox=document.getElementById("lastNameBox");
    const textBox=document.getElementById("textBox");
    const firstNameError=document.getElementById("firstNameError");
    const lastNameError=document.getElementById("lastNameError");
    const textError=document.getElementById("textError");

    firstNameBox.style.backgroundColor = "";
    lastNameBox.style.backgroundColor = "";
    textBox.style.backgroundColor = "";
    firstNameError.innerText = "";
    lastNameError.innerText = "";
    textError.innerText = "";
}
//////////////////////////////////////////////////////////////////////
    validateRequired(firstNameBox, firstNameError, "חסר שם פרטי");
    validateRequired(lastNameBox, lastNameError, "חסר שם משפחה");
    validateRequired(textBox, textError, "חסרה הודעה");


    function validateRequired(controlToValidateBox, errorControl, errorMessage){
        if(!controlToValidateBox.value) {
            alert(errorMessage);
            controlToValidateBox.style.backgroundColor = "pink";
            controlToValidateBox.focus();
            event.preventDefault();
        }
    }

}