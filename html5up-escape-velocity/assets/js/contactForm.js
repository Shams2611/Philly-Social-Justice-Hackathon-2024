function getInfo(){

    info = {
        fname: document.getElementById("fullname").value,
        number: document.getElementById("number").value,
        canText: document.getElementById("canText").value,
        time: document.getElementById("preferredTime").value,
        extrainfo: document.getElementById("extraInfo").value
    };
    if(info.extrainfo == null || info.extrainfo == ""){
        info.extrainfo = "No extra information";
    }
    console.log(info);

    window.open(`mailto:maxkchiu@gmail.com?subject=Minors Seeking Judicial Bypass&body=Name: ${info.fname}%0D%0APhone Number: ${info.number}%0D%0ACan we text you: ${info.canText}%0D%0APreferred Time of Contact: ${info.time}%0D%0AExtra Information: ${info.extrainfo}`);
}
