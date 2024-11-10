/*
    Program name: hw3js.js
    Author: Abigail Lim
    Date created: 2024-10-16
    Date last edited: 2024-11-09
    Purpose: To validate & redisplay all of the user's inputs.
*/

// Grabs date from user system
window.onload = function() {
    const d = new Date();
    document.getElementById("curDate").innerHTML = d.toLocaleDateString();
}

// First name validator
function validateFname() {
    // Regex pattern for first and last name
    let regex = /^[A-Za-z'-]+$/;
    const fnameInput = document.getElementById("fname");
    let fname = fnameInput.value;

    // First letter uppercase converter
    fname = fname.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    
    // Shows typed name with the first letter in uppercase
    fnameInput.value = fname;

    // Prevents empty first name textbox
    if (fname == "") {
        document.getElementById("fnmerror").innerHTML =
        "Please enter patient's first name.";
        return false;
    }
    else if (!regex.test(fname)) {
        document.getElementById("fnmerror").innerHTML = 
        "First name may only contain apostrophes, capitalized, and lowercase letters.";
        return false;
    }

    // Checks first name length
    else if (fname.length < 1) {
        document.getElementById("fnmerror").innerHTML =
        "First name must be longer than 1 letter.";
        return false;
    }
    else if (fname.length > 30) {
        document.getElementById("fnmerror").innerHTML =
        "First name cannot be longer than 30 letters.";
        return false;
    }
    else {
        document.getElementById("fnmerror").innerHTML = "";
        return true;
    }
}

// Middle initial validator
function validateMini() {
    // Regex pattern for mid initial
    let regex = /^[A-Z]+$/;
    const minitial = document.getElementById("minitial").value;

    // Uppercase converter
    minitial = minitial.toUpperCase();
    document.getElementById("minitial").value = minitial;

    if (!regex.test(minitial)) {
        document.getElementById("miderror").innerHTML = 
        "Middle initial may only contain capitalized and lowercase letters.";
        return false;
    }
    else if (minitial.length > 1) {
        document.getElementById("miderror").innerHTML =
        "Middle initial can only be on letter.";
        return false;
    }
    else {
        document.getElementById("miderror").innerHTML = "";
        return true;
    }
}

// Last name validator
function validateLname() {
    // Regex pattern for first and last name
    let regex = /^[A-Za-z'-]+$/;
    const lnameInput = document.getElementById("lname");
    let lname = lnameInput.value;

    // First letter uppercase converter
    lname = lname.split(' ').map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join(' ');
    
    // Shows typed name with the first letter in uppercase
    lnameInput.value = lname;

    // Prevents empty last name textbox
    if (lname == "") {
        document.getElementById("lnmerror").innerHTML =
        "Please enter patient's last name.";
        return false;
    }
    else if (!regex.test(lname)) {
        document.getElementById("lnmerror").innerHTML = 
        "First name may only contain apostrophes, capitalized, and lowercase letters.";
        return false;
    }

    // Checks last name length
    else if (lname.length < 1) {
        document.getElementById("lnmerror").innerHTML =
        "First name must be longer than 1 letter.";
        return false;
    }
    else if (lname.length > 30) {
        document.getElementById("lnmerror").innerHTML =
        "First name cannot be longer than 30 letters.";
        return false;
    }
    else {
        document.getElementById("lnmerror").innerHTML = "";
        return true;
    }
}

// Birth date validator
function validateDOB() {
    let dob = document.getElementById("dob");
    const curDate = new Date(dob.value);
    
    // Setting up maximum and minimum dates
    const maxDate = new Date();
    const minDate = new Date();
        minDate.setFullYear(maxDate.getFullYear()-120);

    if (curDate > maxDate) {
        document.getElementById("doberror").innerHTML = 
        "Date of birth cannot be in the future.";
        dob.value="";
        return false;
    } 
    else if (curDate < minDate) {
        document.getElementById("doberror").innerHTML = 
        "Birth year cannot be more than 120 years ago.";
        dob.value="";
        return false;
    } 
    else {
        document.getElementById("doberror").innerHTML = "";
        return true;
    }
}

// SSN validator
function validateSSN() {
    // Regex pattern for ssn
    const ssnR = /^\d+$/;
    const ssn1 = document.getElementById("ssn1");
    const ssn2 = document.getElementById("ssn2");
    const ssn3 = document.getElementById("ssn3");

    if (ssn1.value || ssn2.value || ssn3.value) {
        ssn1.setAttribute("required", "true");
        ssn2.setAttribute("required", "true");
        ssn3.setAttribute("required", "true");
        document.getElementById("ssnerror1").innerHTML =
        "Please type in all nine digits of your social security number.";
    } 
    else {
        ssn1.removeAttribute("required");
        ssn2.removeAttribute("required");
        ssn3.removeAttribute("required");
        document.getElementById("ssnerror1").innerHTML = "";
    }

    if (!ssnR.test(ssn1.value) || !ssnR.test(ssn2.value) || !ssnR.test(ssn3.value)) {
        document.getElementById("ssnerror2").innerHTML = 
        "Numbers only please.";
        return false;
    }
    else {
        document.getElementById("ssnerror2").innerHTML = "";
        return true;
    }
}

// Address Line 1 validator
function validateAdd1() {
    // Regex pattern for addresses
    let regex = /^[A-Za-z0-9 '-]+$/;
    var ad1 = document.getElementById("add1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 5 || !regex.test(ad1)) {
        document.getElementById("add1error").innerHTML =
        "Please enter a valid address on Address Line 1.";
        return false;
    } 
    else {
        document.getElementById("add1error").innerHTML = "";
        return true;
    }
}

// Address Line 2 validator
function validateAdd2() {
    // Regex pattern for addresses
    let regex = /^[A-Za-z0-9 '-]+$/;
    const add2 = document.getElementById("add2").value;

    if (!regex.test(add2)) {
        document.getElementById("add2error").innerHTML =
        "Please enter a valid address on Address Line 2.";
        return false;
    } 
    else {
        document.getElementById("add2error").innerHTML = "";
        return true;
    }
}

// City validator
function validateCity() {
    // Regex pattern for city
    let regex = /^[A-Za-z '-]+$/;
    var city1 = document.getElementById("city").value;
    console.log(city1);
    console.log(city1.length);

    if (city1.length < 1 || !regex.test(city1)) {
        document.getElementById("cityerror").innerHTML =
        "Please enter a valid city name.";
        return false;
    } 
    else {
        document.getElementById("cityerror").innerHTML = "";
        return true;
    }
}

// Zip code validator (cannot do oninput on keyup in HTML)
function validateZip() {
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "");
    // Code aboves removes any non-digit characters.

    if (zip.length < 5) {
        document.getElementById("ziperror").innerHTML =
        "Zip code must at least be 5 digits.";
        return false;
    } 
    else if (zip.length == 9) {
        const formattedZip = zip.slice(0,5) + "-" + zip.slice(5,9);
        zipInput.value = formattedZip;
    }
    else {
        zipInput.value = zip.slice(0,5);
    }
    // Code above removes any extra digits after 9 or 5 depending on input.

        document.getElementById("ziperror").innerHTML = "";
        return true;
}

// E-mail validator
function validateEmail() {
    // Regex pattern for e-mail
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    email = document.getElementById("email").value;

    // Lowercase converter
    email = email.toLowerCase();

    // Shows typed e-mail in lowercase
    document.getElementById("email").value = email;

    if (email == "") {
        document.getElementById("emailerror").innerHTML = 
        "Please enter a valid e-mail.";
        return false;
    }
    else if (!email.match(regex)) {
        document.getElementById("emailerror").innerHTML =
        "E-mail must contain @ and a valid domain type.";
        return false;
    }
    else {
        document.getElementById("emailerror").innerHTML = "";
        return true;
    }
}

// Phone number validator
function validateTele() {
    const teleInput = document.getElementById("tele");
    const tele = teleInput.value.replace(/\D/g, "");
    // Code above removes all non-digits

    if (tele.length < 5) {
        document.getElementById("teleerror").innerHTML = 
        "Please enter a valid 10 digit phone number.";
    }

    if (tele.length == 10) {
    const formattedTele = tele.slice(0,3) + "-" + tele.slice(3,6) + "-" + tele.slice(6,10);
    teleInput.value = formattedTele;
    }

    document.getElementById("teleerror").innerHTML = "";
    return true;
}

// Symptoms validator
function validateSym() {
    // Regex pattern for symptom descriptor
    let regex = /^[A-Za-z '-,.]+$/;
    const sym = document.getElementById("sym").value;

    if (!regex.test(sym)) {
        document.getElementById("symerror").innerHTML = 
        "Please describe your symptoms using only spaces, apostrophes, commas, periods, capitalized, and lowercase letters.";
        return false;
    }
    else {
        document.getElementById("symerror").innerHTML = "";
        return true;
    }
}

// Retrieves user's input on health slider
function showHealthScore(value) {
    document.getElementById("healthscale").textContent = value;
}

// Retrieves user's input on health slider
function showHealthScore(value) {
    document.getElementById("healthscale").textContent = value;
}

//Makes cancer disclosure required
function typeCanc() {
    const cancer = document.getElementById("cancer").checked;
    const canctype = document.getElementById("canctype").value;
    let regex = /^[A-Za-z0-9 ']+$/;
    
    if (cancer === true && canctype.length == "") {
    document.getElementById("cancmsg").innerHTML = 
    "Please specify what kind.";
    canctype.required = true;
    } else if (cancer === true && !regex.test(canctype)) {
    document.getElementById("cancmsg").innerHTML = 
    "May only contain apostrophes, digits, spaces, capitalized, and lowercase letters.";
    canctype.required = true;
    }
    else {
    document.getElementById("cancmsg").innerHTML = "";
    canctype.required = false;
    }
} 

 // Makes diabetes disclosure required
function typeDiab() {
    const diabetes = document.getElementById("diabetes").checked;
    const diabtype = document.getElementById("diabtype").value;
    let regex = /^[A-Za-z0-9 ']+$/;
    
    if (diabetes === true && diabtype.length == "" ) {
    document.getElementById("diabmsg").innerHTML = 
    "Please specify what kind.";
    diabtype.required = true;
    }
    else if (diabetes === true && !regex.test(diabtype)) {
    document.getElementById("diabmsg").innerHTML = 
    "May only contain apostrophes, digits, spaces, capitalized, and lowercase letters.";
    diabtype.required = true;
    }
    else {
    document.getElementById("diabmsg").innerHTML = "";
    diabtype.required = false;
    }
}

 // Makes allergy disclosure required
function typeAllergy() {
    const allergy = document.getElementById("allergy").checked;
    const allergtype = document.getElementById("allergtype").value;
    let regex = /^[A-Za-z ']+$/;
    
    if (allergy === true && allergtype.length == "" ) {
    document.getElementById("allemsg").innerHTML = 
    "Please specify what kind.";
    allergtype.required = true;
    }
    else if (allergy === true && !regex.test(allergtype)) {
    document.getElementById("allemsg").innerHTML = 
    "May only contain apostrophes, spaces, capitalized, and lowercase letters.";
    allergtype.required = true;
    }
    else {
    document.getElementById("allemsg").innerHTML = "";
    allergtype.required = false;
    }
}

 // Makes surgery disclosure required
function typeSurg() {
    const surgy = document.getElementById("surgy").checked;
    const surgtype = document.getElementById("surgtype").value;
    let regex = /^[A-Za-z0-9 ']+$/;
    
    if (surgy === true && surgtype.length == "" ) {
    document.getElementById("surgmsg").innerHTML = 
    "Please specify what kind.";
    surgtype.required = true;
    }
    else if (surgy === true && !regex.test(surgtype)) {
    document.getElementById("surgmsg").innerHTML = 
    "May only contain apostrophes, digits, spaces, capitalized, and lowercase letters.";
    surgtype.required = true;
    }
    else {
    document.getElementById("surgmsg").innerHTML = "";
    surgtype.required = false;
    }
}

// Username validator
function validateUser() {
    user = document.getElementById("user").value;

    // Username length checkers
    if (user.length < 5) {
        document.getElementById("usererror").innerHTML = 
        "Minimum username length is 5.";
        return false;
    }
    else if (user.length > 30) {
        document.getElementById("usererror").innerHTML = 
        "Maximum username length is 30.";
        return false;
    }

    // Username regex pattern (Prevents spaces)
    let regex = /^[A-Za-z0-9_]+$/;
    if (!regex.test(user)) {
        document.getElementById("usererror").innerHTML = 
        "Username may only have letter, digits, and underscores.";
        return false;
    }

    // Lowercase converter
    user = user.toLowerCase();

    // Shows typed username in lowercase
    document.getElementById("user").value = user;

    // Prevents a number from being the 1st character
    if (!isNaN(user.charAt(0))) {
        document.getElementById("usererror").innerHTML = 
        "Username cannot start with a number."
    }
    else {
        document.getElementById("usererror").innerHTML = "";
        return true;
    }
}

// Ensures passwords match & fulfill requirements
  function validatePW() {
    const pwd= document.getElementById("pwd").value;
    const user = document.getElementById("user").value;

    // Array
    const errorMessage = [];

    // Password length checkers
    if(pwd.length < 8) {
        errorMessage.push("Minimum password length is 8 characters.");
    }
    if(pwd.length > 30) {
        errorMessage.push("Minimum password length is 30 characters.");  
    }

    // Checks for lowercase letters
    if (!pwd.match(/[a-z]/)) {
        errorMessage.push("Password must contain at least one lowercase letter.");
    }

    // Checks for uppercase letters
    if (!pwd.match(/[A-Z]/)) {
        errorMessage.push("Password must contain at least one uppercase letter.");
    }

    // Checks for digits
    if (!pwd.match(/[0-9]/)) {
        errorMessage.push("Password must contain at least one digit.");
    }

    // Checks for special characters not including quotations
    if (!pwd.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Password must contain at least one special character (not including quotations).");
    }

    // Prevents password and username from matching
    if (pwd== user || pwd.includes(user)) {
        errorMessage.push("Password cannot be the same as username.");
    }

    // Allows error messages to display as needed
    const errorContainer = document.querySelector(".pwmessage");
    errorContainer.innerHTML = errorMessage
    .map((message) => '<span>${message}</span></br>')
    .join("");

    }

function confirmPW() {
    pw1 = document.getElementById("pwd").value;
    pw2 = document.getElementById("pwv").value;

    if (pw1 != pwv) {
        document.getElementById("pwerror").innerHTML = 
        "Passwords do not match. Please re-enter.";
        document.getElementById("pwverror").innerHTML = 
        "Passwords do not match. Please re-enter.";
        return false;
    }
    else {
        document.getElementById("pwerror").innerHTML = "";
        document.getElementById("pwverror").innerHTML = "";
        return true;
    }
}

// Allows user to review their input by pressing "CHECK INPUT"
function checkInput() {
    var formcontent = document.getElementById("signin")
    var formoutput;
    var i;
    formoutput = "<table class='output'><th colspan = '3'>Entered Information:</th>";
    for (i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].value != "") {
            datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                if (formcontent.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>&#x2713;</td></tr>";
                }
                    break;
                case "radio":
                if (formcontent.elements[i].checked) {
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
                }
                    break;
                case "button":
                case "submit":
                case "reset":
                    break;
                default:
                    formoutput = formoutput + "<tr><td align='right'>" + formcontent.elements[i].name + "</td>";
                    formoutput = formoutput + "<td class='outputdata'>" + formcontent.elements[i].value + "</td></tr>";
            }
        }
    }
    if (formoutput.length > 0) {
        formoutput = formoutput + "</table>";
        document.getElementById("checkInput").innerHTML = formoutput;
    }
}

// Removes user input review
function removeCheck() {
    document.getElementById("checkInput").innerHTML = "";
}

// Alert boxes for validation displays as needed
function showAlert() {
    var alertBox = document.getElementById("alert-box");
    var closeAlert = document.getElementById("close-alert");

    alertBox.style.display = "block";
    closeAlert.onclick = function () {
        alertBox.style.display = "none";
    }
}

// Entire form validator
function validateForm() {
    let valid = true;

    if (!validateFname()) {
        valid = false;
    }

    if (!validateLname()) {
        valid = false;
    }

    if (!validateDOB()) {
        valid = false;
    }

    if (!validateAdd1()) {
        valid = false;
    }

    if (!validateAdd2()) {
        valid = false;
    }

    if (!validateCity()) {
        valid = false;
    }

    if (!validateZip()) {
        valid = false;
    }

    if (!validateEmail()) {
        valid = false;
    }

    if (!validateTele()) {
        valid = false;
    }

    if (!validateSym()) {
        valid = false;
    }

    if (!validateUser()) {
        valid = false;
    }

    if (!validatePW()) {
        valid = false;
    }

    if (!confirmPW()) {
        valid = false;
    }

    if (valid) {
        document.getElementById("sub").disabled = false;
    }
    else {
        showAlert();
    }
}

// Allows contact page to pop up when button is pressed
function openContact() {
    window.location.assign("https://aolim45.github.io/patient-signin/HW3/contactuspage.html")
}
