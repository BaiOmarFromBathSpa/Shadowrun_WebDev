console.log("JS C0nnected")

let YTthumbs = document.getElementsByClassName("YTthumbs")
let YTframes = document.getElementsByClassName("YTframes")
const YTlinks = ["https://www.youtube.com/embed/alzFFjJ3xO0",
              "https://www.youtube.com/embed/2uz5XcKWtBM",
              "https://www.youtube.com/embed/EtXTwr69DtI",
              "https://www.youtube.com/embed/CtvReO8AUQg",
              "https://www.youtube.com/embed/DPBW_MFqeRs", 
              "https://www.youtube.com/embed/pKhqx6IoJz4", 
              "https://www.youtube.com/embed/_E46DUssoPI", 
              "https://www.youtube.com/embed/nJG7jLLbVD4"]

function HideThumb(ThumbNum) { //everytime its called... 
    for (let i = 0; i < YTthumbs.length; i++) {
        YTframes[i].src = ""    //it clears all other playing youtbe vids and restores thumbnail
        YTframes[i].style.zIndex = "0"
    }

    YTframes[ThumbNum].src = YTlinks[ThumbNum]; //then hides thumbnail and loads Youtube video
    YTframes[ThumbNum].style.zIndex = "3"; //then hides thumbnail and loads Youtube video
}   //This was done for performance reasons... loading 8 different iframes consumes too much resources