console.log("JS C0nnected");

Frames = document.getElementsByClassName("Frame");

for (let i = 0; i < Frames.length; i++) {
    if (1 == i%2) {
        Frames[i].style.marginLeft = "8vw"
    }
    else {
        Frames[i].style.marginLeft = "42vw"
    }
}