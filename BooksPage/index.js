console.log("JS C0nnected");

Frames = document.getElementsByClassName("Frame");
BookCov = document.getElementsByClassName("BookCov");

for (let i = 0; i < Frames.length; i++) {
    if (1 == i%2) {
        Frames[i].style.marginLeft = "8vw";
        BookCov[i].style.left = "63vw";
        BookCov[i].style.transform = "rotate(-5deg)";
    }
    else {
        Frames[i].style.marginLeft = "42vw";
    }
}