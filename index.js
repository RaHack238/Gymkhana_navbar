
function navBack(){
    if(document.getElementById("count").value==="0"){
        document.getElementById("navcont").style.backgroundImage="url('./navback.png')";
        document.getElementById("count").value="1";
    }else{
        document.getElementById("navcont").style.backgroundImage="none";
        document.getElementById("count").value="0";
    }
}