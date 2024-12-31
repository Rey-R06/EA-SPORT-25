let aparecer = 1;
function dezpliegue() {
    let menu = document.getElementById("menu");
     
    if (aparecer == 1) {
        menu.style.visibility = "visible";
        menu.style.display = "block";
        aparecer = 2;
    } else {
        menu.style.visibility = "hidden";
        menu.style.display = "none";
        aparecer = 1;
    }
}