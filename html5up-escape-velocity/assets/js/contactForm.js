function validate(k){
    return (k==null);
}
function getInfo(){
    var num = true;

    k = [document.getElementById("fullname").value,
    document.getElementById("number").value,
    document.getElementById("canText").value,
    document.getElementById("preferredTime").value];

    for (let i = 0; i < k.length; i++) {
        if(k[i]==null || k[i]==""){
            num = false;
            break;
        }
    }

    if(num == true){
        info = {
            fname: document.getElementById("fullname").value,
            number: document.getElementById("number").value,
            canText: document.getElementById("canText").value,
            time: document.getElementById("preferredTime").value,
            extrainfo: document.getElementById("extraInfo").value
        };
        if(!(info.extrainfo != null || info.extrainfo == "")){
            info.extrainfo = "No extra information";
        }
        console.log(info);
        info.canText = info.canText.trim().toLowerCase();
        if(!(info.canText =="yes" || info.canText =="no")) {
            alert("Answer 'Can we Text You' with Yes or No");
        }
        else {
            if(numberVal(info.number) == true){
                window.open(`mailto:JudicialBypass@philadefender.org?subject=Minors Seeking Judicial Bypass&body=Name: ${info.fname}%0D%0APhone Number: ${info.number}%0D%0ACan we text you: ${info.canText}%0D%0APreferred Time of Contact: ${info.time}%0D%0AMessage: ${info.extrainfo}`);
            }else{
                alert("Invalid phone number");
            }
        }
    }else{
        alert("please complete form");
    }
    }
function numberVal(n){
    var phoneRegex = /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/;
    return(phoneRegex.test(n));
}