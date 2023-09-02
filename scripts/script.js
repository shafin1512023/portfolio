let menu_btn = document.getElementById("menu-btn");
let full_screen = false;

menu_btn.addEventListener("click", () => {
    if (!full_screen) {
        document.documentElement.requestFullscreen();
        full_screen = true;
    } else {
        document.exitFullscreen();
        full_screen = false;
    }
})