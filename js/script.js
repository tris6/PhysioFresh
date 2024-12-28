function OpenPage(idName) {
    var element = document.getElementById(idName);
    element.style.display = "flex";
    return;
}

function ClosePage(idName) {
    var element = document.getElementById(idName);
    element.style.display = "none";
    return;
}