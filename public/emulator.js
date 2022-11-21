const ip = document.getElementById("ip");
const anss = document.getElementById("answer");
const pushbtn = document.getElementById("pushBtn");
const popbtn = document.getElementById("popBtn");

array = [];

pushbtn.addEventListener("click", function(){
    array.push(ip.value);
    // if the input is empty it will alert this text;
    if(!ip.value){
        alert("Enter Something")
    }
    anss.innerHTML = array;
    ip.value = '';
})

popbtn.addEventListener("click", function(){
    array = array.slice(0,-1);
    anss.innerHTML = array;
})