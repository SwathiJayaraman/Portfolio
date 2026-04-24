// JavaScript source code
// This runs when the HTML page has finished loading
document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript is connected!");
});


const toggleButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");


toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    toggleButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
});



//two buttons describing field experience
function describeResearch(field) {
    if (field == "Engineering") {
        return "Done work in mechanical simulations using ANSYS and Abaqus. Also designed parts for small devices in a 3D printer.";
    }
    else if (field == "Health") {
        return "Familiar with biomechanical case studies, mainly the anatomy, diagnosis and treatment of scoliosis.";
    }
}

//function for button
function togglebutton(buttonquery,fieldname) {
    const togbutton = document.querySelector(buttonquery);
    togbutton.addEventListener("click", () => {
        const field = fieldname;
        if (togbutton.textContent == fieldname) {
            console.log(describeResearch(field));
            togbutton.textContent = describeResearch(field);
        }
        else {
            togbutton.textContent = fieldname
        }
    });
}
//Engineering and Health button
togglebutton("#Engineering", "Engineering");
togglebutton("#Health", "Health")


const heading = document.getElementById("abt");
const section = document.querySelector("#about");
//submit button
const feedback = document.getElementById("feedback");
const subbutton = document.querySelector("#submit");
subbutton.addEventListener("click", () => {
    alert("Submission complete");
    feedback.textContent = "Thank you. Your message has been recorded.";
});