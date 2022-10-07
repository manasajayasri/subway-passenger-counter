let i=0;
function increment() {
    i = i+ 1;
    document.getElementById("count-el").innerText = i;
}

function save(){
    let j = i + " - ";
    document.getElementById("log").textContent += j;
    i=0;
    document.getElementById("count-el").innerText = i;
}