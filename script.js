/* MENU BUTTON TO X-BUTTON*/

const toggle = document.getElementById("toggle");
const navbar = document.getElementById("navbar");


toggle.addEventListener("click", () => {
  navbar.classList.toggle("active");

  if (navbar.classList.contains("active")) {
    toggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    toggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});


/* the code about form validation when applying to seroma high school
*/
// SELECT FORM
const form = document.getElementById("form");

// INPUTS
const surname = document.getElementById("surname");
const othernames = document.getElementById("othernames");
const birthdistrict = document.getElementById("birthdistrict");
const religion = document.getElementById("religion");
const homedistrict = document.getElementById("homedistrict");
const nationality = document.getElementById("nationality");
const residence = document.getElementById("residence");
const village = document.getElementById("village");
const lc1 = document.getElementById("lc1");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const fathername = document.getElementById("fathername");
const fatherphone = document.getElementById("fatherphone");
const mothername = document.getElementById("mothername");
const motherphone = document.getElementById("motherphone");
const formerschool = document.getElementById("formerschool");
const aggregates = document.getElementById("aggregates");
const division = document.getElementById("division");
const studentClass = document.getElementById("class");

// FORM SUBMIT
if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const isValid = validateInput();

        if (isValid) {

            alert("Application submitted successfully ✅");

            form.reset();

            window.location.href = "home.html";

        } else {

            alert("Please fill the required fields correctly");

        }

    });

}

// VALIDATION FUNCTION
function validateInput() {

    // TEXT CHECK
    checkRequired(surname, "Surname is required");
    checkRequired(othernames, "Other names are required");
    checkRequired(birthdistrict, "Birth district is required");
    checkRequired(religion, "Religion is required");
    checkRequired(homedistrict, "Home district is required");
    checkRequired(nationality, "Nationality is required");
    checkRequired(residence, "Residence is required");
    checkRequired(village, "Village is required");
    checkRequired(lc1, "LC1 is required");
    checkRequired(address, "Address is required");
    checkRequired(fathername, "Father's name is required");
    checkRequired(mothername, "Mother's name is required");
    checkRequired(formerschool, "Former school is required");

    // PHONE VALIDATION
    checkPhone(phone);
    checkPhone(fatherphone);
    checkPhone(motherphone);

    // DROPDOWN VALIDATION
    checkSelect(division, "Select division");
    checkSelect(studentClass, "Select class");

    // RADIO VALIDATION
    checkGender();

    // AGGREGATES (NUMBERS ONLY)
    checkNumber(aggregates, "Enter valid aggregates");
     
      const errors = document.querySelectorAll(".error");

    return errors.length === 0;
}

// ================= HELPERS =================

// REQUIRED FIELD
function checkRequired(input, message) {
    if (input.value.trim() === "") {
        setError(input, message);
    } 
    else {
        setSuccess(input);
    }
}

// PHONE VALIDATION
function checkPhone(input) {
    const pattern = /^[0-9]{10,13}$/;

    if (input.value.trim() === "") {
        setError(input, "Phone number required");
    } else if (!pattern.test(input.value)) {
        setError(input, "Enter valid phone number");
    } else {
        setSuccess(input);
    }
}

// NUMBER VALIDATION
function checkNumber(input, message) {
    if (isNaN(input.value) || input.value === "") {
        setError(input, message);
    } else {
        setSuccess(input);
    }
}

// SELECT VALIDATION
function checkSelect(select, message) {
    if (select.value === "") {
        setError(select, message);
    } else {
        setSuccess(select);
    }
}

// GENDER VALIDATIONds
function checkGender() {
    const radios = document.getElementsByName("sex");
    let selected = false;

    radios.forEach(radio => {
        if (radio.checked) {
            selected = true;
        }
        
    });

    const container = document.getElementById("gender");

    if (!selected) {
        container.classList.add("error");
    } else {
        container.classList.remove("error");
        container.classList.add("success");
    }
}

// ================= UI FUNCTIONS =================

function setError(input, message) {
    const parent = input.parentElement;
    const small = parent.querySelector("small");

    small.innerText = message;
    parent.classList.add("error");
   // parent.classList.remove("success");
}

function setSuccess(input) {
    const parent = input.parentElement;

    parent.classList.add("success");
    parent.classList.remove("error");
}




/* IMAGE SLIDER */

const hero = document.querySelector(".hero");

const images = [
    "school/s6.png",
    "school/build.jpeg",
    "school/happy.jpeg",
    "school/hola.jpeg",
    "school/hall.webp",
    
    "school/build.png",
    "school/pool.png",
];

let index = 0;

function changeHeroBackground() {

    if (!hero) return;

    hero.style.backgroundImage = `url(${images[index]})`;

    index++;

    if (index >= images.length) {
        index = 0;
    }
}

/* ONLY RUN IF HERO EXISTS */

if (hero) {

    changeHeroBackground();

    setInterval(changeHeroBackground, 5000);

}