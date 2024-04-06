function getInfo(){
    info = {
        fname: document.getElementById("fname").value,
        lname: document.getElementById("lname").value,
        number: document.getElementById("number").value,
        canText: document.getElementById("text").value,
        time: document.getElementById("time").value
    };
    console.log(info);
}
