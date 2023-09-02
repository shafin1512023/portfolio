let btn = document.getElementById("theme-btn");
let light = true;
btn.addEventListener("click", () => {
    if (light) {
        document.body.style.background = "rgb(65, 65, 65)";
        document.querySelectorAll("*").forEach(element => {
            element.style.color = "blanchedalmond";
        })
        document.querySelectorAll(".btn").forEach(element => {
            element.style.background = "black";
        })
        document.querySelectorAll("svg").forEach(element => {
            element.style.fill = "blanchedalmond";
        })
        light = false;
    } else {
        document.body.style.background = "blanchedalmond";
        document.querySelectorAll("*").forEach(element => {
            element.style.color = "slategray";
        })
        document.querySelectorAll(".btn").forEach(element => {
            element.style.background = "white";
        })
        document.querySelectorAll("svg").forEach(element => {
            element.style.fill = "slategray";
        })
        light = true;
    }

});