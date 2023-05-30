console.log("JS C0nnected");
const Music = document.getElementById("BGmusic");
let MusicPlaying = false;

Frames = document.getElementsByClassName("Frame"); //Find all text frames
BookCov = document.getElementsByClassName("BookCov"); //find all Book cover images 

for (let i = 0; i < Frames.length; i++) {
    if (1 == i%2) { //if odd switch them from left and right
        Frames[i].style.marginLeft = "8vw";
        BookCov[i].style.left = "63vw";
        BookCov[i].style.transform = "rotate(-5deg)";
    }
    else { // v this wasnt necessary but its a negligible performance hit
        Frames[i].style.marginLeft = "42vw";
    }
}

function PlayMusic() {
    if (MusicPlaying != true) { //If music isn't playing...
        Music.play();
        MusicPlaying = true;
    } else {                       ///...if is playing
        Music.pause();
        MusicPlaying = false;
    }
}