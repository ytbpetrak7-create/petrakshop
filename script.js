function rozbalit() {
    document.querySelector(".rozbalovaci")
        .classList.toggle("rozbaleno")
}

function overitkod() {
    let kod = document.getElementById("kod");
    if (kod.value == "kamosi") {
        window.location = './P7.html';
    } else {
        window.location = './kick.html';
    }
}


