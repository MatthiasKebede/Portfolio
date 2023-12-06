console.log("check");
let ypos = 250;
let xpos = 600;
let u = "px";
let mouseDown = false;



// // HTML Elements
controlDiv = document.getElementById("control");
mff = document.getElementById("30MFF");
comic = document.getElementById("comic");
sound = document.getElementById("sound");
vid = document.getElementById("video");




// // HTML Collections




// // Event Listeners
document.addEventListener("keydown", moveDiv);

controlDiv.addEventListener('mousedown', function () {
    mouseDown = true;}, true);

window.addEventListener('mouseup', function () {
    mouseDown = false;}, true);

document.addEventListener('mousemove', function(event) {
    event.preventDefault();
    if (mouseDown) {
        xpos = event.screenX;
        controlDiv.style.left = xpos;
        ypos = event.clientY;
        controlDiv.style.top = ypos;
    }}, true);




// // Functions
// Move div when arrow keys or WASD are pressed
function moveDiv(event) {
    key = event.key;
    switch(key) {
        case ("ArrowUp"):
        case ("w"):
            if (ypos > 0) {
                ypos -= 10;
                controlDiv.style.top = ypos+u;
            }
            break;
        case ("ArrowLeft"):
        case ("a"):
            if (xpos > 0) {
                xpos -= 10;
                controlDiv.style.left = xpos+u;
            }
            break;
        case ("ArrowDown"):
        case ("s"):
            if (ypos < 640-controlDiv.offsetHeight) {
                ypos += 10;
                controlDiv.style.top = ypos+u;
            }
            break;
        case ("ArrowRight"):
        case ("d"):
            if (xpos < 1280-controlDiv.offsetWidth) {
                xpos += 10;
                controlDiv.style.left = xpos+u;
            }
            break;
        default:
            console.log("default");
    }
    controlDiv.textContent = xpos + "," + ypos;
    // Collision with project area
    // 30MFF
    if (ypos < 200 && xpos < 300) {
        // mff.style.display = "none";
        if (key == "Enter") {mff.classList.toggle("collided");}
    }
    else {mff.style.display = "block";}
    // Comic
    if (ypos < 200 && xpos > 880) {
        comic.style.display = "none";
        }
    else {comic.style.display = "block";}
    // Sound
    if (ypos > 340 && xpos < 300) {
        sound.style.display = "none";
    }
    else {sound.style.display = "block";}
    // Video
    if (ypos > 340 && xpos > 880) {
        vid.style.display = "none";
    }
    else {vid.style.display = "block";}
}