array = [];
function push() {
    var ip = document.getElementById("ip");
    array.push(ip.value);
    InputDeviceInfo.value = "";
    document.getElementById("answer").innerHTML = array.join(",");
    //METHOD : 2
    // var a = document.getElementById("answer");
    // var ip = document.getElementById("ip");
    // var newvar = document.createElement("newvar");
    // newvar.setAttribute('id', ip.value);
    // newvar.appendChild(document.createTextNode(ip.value));
    // a.appendChild(newvar);
}

function pop() { 
    array = array.slice(0,-1);
    document.getElementById("answer").innerHTML = array.join(",");
    //METHOD : 2
    // var a = document.getElementById("answer");
    // var ip = document.getElementById("ip");
    // var remove= document.getElementById(ip.value);
    // a.removeChild(remove);
}