function validate(k){
    return (k==null);
}
function getInfo(){
    var num = true;
    extrainfo = document.getElementById("contact-message").value
    k = [document.getElementById("name").value,
    document.getElementById("number").value,
    document.getElementById("text").value,
    document.getElementById("time").value,];

    for (let i = 0; i < k.length; i++) {
        if(k[i]==null || k[i]==""){
            num = false;
            break;
        }
    }

    if(num == true){
        info = {
            fname: document.getElementById("name").value,
            number: document.getElementById("number").value,
            canText: document.getElementById("text").value,
            time: document.getElementById("time").value,
            extrainfo: ""
        };
        if(extrainfo != null){
            info.extrainfo = extrainfo;
        }else{
            info.extrainfo = "No extra information"
        }
        console.log(info);
        if(numberVal(info.number) == true){
            window.open(`mailto:maxkchiu@gmail.com?subject=Minors Seeking Judicial Bypass&body=First Name: ${info.fname}%0D%0ALast Name: ${info.lname}%0D%0APhone Number: ${info.number}%0D%0ACan we text you: ${info.canText}%0D%0APreferred Time of Contact: ${info.time}%0D%0AMessage: ${info.extrainfo}`);
        }else{
            alert("Invalid phone number");
        }
    }else{
        alert("please complete form");
    }
    }
function numberVal(n){
    var phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    return(phoneRegex.test(n));
}