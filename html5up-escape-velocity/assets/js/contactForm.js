function getInfo(){
    extrainfo = document.getElementById("contact-message").value

    info = {
        fname: document.getElementById("name").value,
        number: document.getElementById("number").value,
        canText: document.getElementById("text").vaulue,
        time: document.getElementById("time").value,
        extrainfo: ""
    };
    if(extrainfo != null){
        info.extrainfo = extrainfo;
    }else{
        info.extrainfo = "No extra information"
    }
    console.log(info);

    window.open(`mailto:maxkchiu@gmail.com?subject=Minors Seeking Judicial Bypass&body=First Name: ${info.fname}%0D%0ALast Name: ${info.lname}%0D%0APhone Number: ${info.number}%0D%0ACan we text you: ${info.canText}%0D%0APreferred Time of Contact: ${info.time}%0D%0AMessage: ${info.extrainfo}`);
}
