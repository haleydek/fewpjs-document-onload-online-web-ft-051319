function cool () {
    let coolText = document.getElementById("text")
    coolText.textContent = "This is really cool!"
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
    cool ();
})

console.log("This console.log() fires when index.js loads - before DOMContentLoaded is triggered");