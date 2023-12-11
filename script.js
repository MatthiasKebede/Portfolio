console.log("check");



// // HTML Elements
// Intro
var intro = document.getElementById("intro-door");
var doorway = intro.firstElementChild;
var door = intro.firstElementChild.firstElementChild;
var nameplate = document.getElementById("nameplate");

// Main Room
var main = document.getElementById("main-room");
var projectIcon = document.getElementById("IM-icon");
var academicsIcon = document.getElementById("academics-icon");
var mainDoor = document.getElementById("main-doorway");

// Project Tabs (expanded view)
var projectSpace = document.getElementById("IM-projects");
var mff = document.getElementById("30MFF");
var comic = document.getElementById("comic");
var sound = document.getElementById("sound");
var vid = document.getElementById("video");
var exitProjects = document.getElementById("exit-projects");

// Academics (expanded view)
var academicsSpace = document.getElementById("academics");

var exitAcademics = document.getElementById("exit-academics");

// Bedroom
var bedroom = document.getElementById("bedroom");
var pc = document.getElementById("PC");

var returnDoor = document.getElementById("return-doorway");

// Desktop
var desktop = document.getElementById("desktop");

var shutdown = document.getElementById("shutdown");



// // HTML Collections
// TBD



// // Event Listeners
// Navigation
door.addEventListener("click", openDoor);
projectIcon.addEventListener("click", showProjects);
academicsIcon.addEventListener("click", showAcademics);
mainDoor.addEventListener("click", enterRoom);
returnDoor.addEventListener("click", goMain);
exitProjects.addEventListener("click", goMain);
exitAcademics.addEventListener("click", goMain);
pc.addEventListener("click", bootPC);
shutdown.addEventListener("click", powerOff);
// Project Space
mff.addEventListener("click", function() {window.open("https://matthiaskebede.github.io/30MFF/")});
comic.addEventListener("click", function() {window.open("https://matthiaskebede.github.io/Interactive-Comic/")});
sound.addEventListener("click", function() {window.open("https://matthiaskebede.github.io/Sound-Project/")});
vid.addEventListener("click", function() {window.open("https://matthiaskebede.github.io/Video-Project/")});
// Academics Space

// Desktop




// // Functions
// Open intro door
function openDoor() {
    // play door creak / door opening noise
    door.classList.toggle("doorOpen");
    nameplate.style.opacity = 0;
    setTimeout(enterDoor, 1750);
}
// Enter through doorway
function enterDoor() {
    // nameplate.style.display = "none";
    doorway.style.width = "48vh";
    doorway.style.height = "72vh";
    door.style.backgroundColor = "#333";
    intro.style.backgroundColor = "#333";
    setTimeout(function() {main.style.display = "block"; doorway.style.display = "none"; intro.style.opacity = "0";}, 2500);
    setTimeout(function() {intro.style.display = "none";}, 3000);
}
// Return to main room
function goMain() {
    main.style.display = "block";
    projectSpace.style.display = "none";
    academicsSpace.style.display = "none";
    bedroom.style.display = "none";
}
// Show Comm Lab Projects
function showProjects() {
    projectSpace.style.display = "block";
    main.style.display = "none";
}
// Show Academic Achievements
function showAcademics() {
    academicsSpace.style.display = "block";
    main.style.display = "none";
}
// Enter bedroom from main room
function enterRoom() {
    bedroom.style.display = "block";
    main.style.display = "none";
}
// Enter Desktop
function bootPC() {
    desktop.style.display = "block";
    bedroom.style.display = "none";
}
// Exit Desktop
function powerOff() {
    bedroom.style.display = "block";
    desktop.style.display = "none";
}