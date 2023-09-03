let btn = document.getElementById("theme-btn");
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");
let light = true;

btn.addEventListener("click", () => {
    if (light) {
        document.documentElement.style.cssText = `
        --light_color: blanchedalmond;
        --light_bg: rgb(65, 65, 65);
        --light_bg_2: black;
        `
        sun.style.cssText = `transform: translateY(0%);`
        moon.style.cssText = `transform: translateY(-100%);`
        light = false;
    } else {
        document.documentElement.style.cssText = `
        --light_color: slategray;
        --light_bg: blanchedalmond;
        --light_bg_2: white;
        `
        sun.style.cssText = `transform: translateY(100%);`
        moon.style.cssText = `transform: translateY(0%);`
        light = true;
    }

});