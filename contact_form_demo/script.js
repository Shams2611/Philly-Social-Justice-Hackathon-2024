function getInfo(){
    info = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        number: document.getElementById("number").value,
        canText: document.getElementById("text").checked,
        time: document.getElementById("time").value
    };
    console.log(info);

    if(info.canText == true) {
        info.canText = "Yes";
    }
    else {
        info.canText = "No";
    }
    window.open(`mailto:maxkchiu@gmail.com?subject=Minors Seeking Judicial Bypass&body=First Name: ${info.fname}%0D%0ALast Name: ${info.lname}%0D%0APhone Number: ${info.number}%0D%0ACan we text you: ${info.canText}%0D%0APreferred Time of Contact: ${info.time}`);
}
