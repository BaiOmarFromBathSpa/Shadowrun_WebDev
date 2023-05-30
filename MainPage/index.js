console.log("JS C0nnected"); // pls ignore i find it fun
let Music = document.getElementById("BGmusic");
let MusicPlaying = true;

SwitchDesc("Dragons") //Starts with Dragons, can swtch it tho

function SwitchDesc(NewDesc) {
    var i; /* Used part of the code from W3C and for some reason they put the iterator outside the for loop */
    var AllDesc = document.getElementsByClassName("MK_Desc"); //colects the discriptions into an array
    for (i = 0; i < AllDesc.length; i++) {  // Disables all discriptions
        AllDesc[i].style.display = "none"; 
    }
    document.getElementById(NewDesc).style.display = "block"; //And Enables the one passed in as a parameter
    

    // the code below does the same as the descriptions fbut for the grid of buttons instead
    // Note: Doesnt disable them just makes the parameter one light up 
    var Allbtns = document.getElementsByClassName("IPNbtn");

    console.log(Allbtns)
    let btnNewDesc = "btn" + NewDesc;
    console.log(btnNewDesc);
    for (let i = 0; i < Allbtns.length; i++) {
        Allbtns[i].classList.remove("InPageNavSel");
    }
    document.getElementById(btnNewDesc).classList.add("InPageNavSel");
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