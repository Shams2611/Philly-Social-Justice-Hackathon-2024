function numberValidation(n){
    if(n.length>10){
        
        return false;
    };
    return true;
}

function getInfo(){
    var run = true;
    k = [
        document.getElementById("fname").value,
        document.getElementById("lname").value,
        document.getElementById("number").value,
        document.getElementById("text").checked,
        document.getElementById("time").value];

    for (let i = 0; i < k.length; i++) {
        if(k[i]==""){
            
            run = false;
            break;
        }
    }
    if(run==true){
        info = {
            fname: document.getElementById("fname").value,
            lname: document.getElementById("lname").value,
            number: document.getElementById("number").value,
            canText: document.getElementById("text").checked,
            time: document.getElementById("time").value,
            extrainfo: ""
        };
        if(document.getElementById("message").value != null){
            info.extrainfo = document.getElementById("message").value;
        };
        console.log(info);
    
        if(info.canText == true) {
            info.canText = "Yes";
        }
        else {
            info.canText = "No";
        }
    
        numberValidation(info.number);
        window.open(`mailto:maxkchiu@gmail.com?subject=Minors Seeking Judicial Bypass&body=First Name: ${info.fname}%0D%0ALast Name: ${info.lname}%0D%0APhone Number: ${info.number}%0D%0ACan we text you: ${info.canText}%0D%0APreferred Time of Contact: ${info.time}`);
    }else{
        alert("you have not completed the form");
    }

}
