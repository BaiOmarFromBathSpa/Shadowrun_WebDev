console.log("JS C0nnected");
SwitchDesc("Dragons")

function SwitchDesc(NewDesc) {
    var i;
    var AllDesc = document.getElementsByClassName("MK_Desc");
    for (i = 0; i < AllDesc.length; i++) {
        AllDesc[i].style.display = "none"; 
    }
    document.getElementById(NewDesc).style.display = "block";
    

    var Allbtns = document.getElementsByClassName("IPNbtn");

    console.log(Allbtns)
    let btnNewDesc = "btn" + NewDesc;
    console.log(btnNewDesc);
    for (let i = 0; i < Allbtns.length; i++) {
        Allbtns[i].classList.remove("InPageNavSel");
    }
    document.getElementById(btnNewDesc).classList.add("InPageNavSel");
  }