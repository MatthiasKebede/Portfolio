console.log("check");



// // HTML Elements
// Intro
var intro = document.getElementById("intro-door");
var doorway = intro.firstElementChild;
var door = intro.firstElementChild.firstElementChild;

// Main Room
var main = document.getElementById("main-room");
var projectSpace = document.getElementById("IM-projects");

// Project Tabs (expanded view)
var mff = document.getElementById("30MFF");
var comic = document.getElementById("comic");
var sound = document.getElementById("sound");
var vid = document.getElementById("video");




// // HTML Collections
// TBD



// // Event Listeners
door.addEventListener("click", openDoor);



// // Functions
// Open intro door
function openDoor() {
    // play door creak / door opening noise
    door.classList.toggle("doorOpen");
    setTimeout(enterDoor, 1750);
}
// Enter through doorway
function enterDoor() {
    doorway.style.width = "48vh";
    doorway.style.height = "72vh";
    door.style.backgroundColor = "#333";
    intro.style.backgroundColor = "#333";
    setTimeout(function() {main.style.display = "block"; doorway.style.display = "none"; intro.style.opacity = "0";}, 2500);
    setTimeout(function() {intro.style.display = "none";}, 3000);
}