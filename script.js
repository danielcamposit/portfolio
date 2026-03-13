const text = [
"> Daniel Campos",
"> Cybersecurity Portfolio",
"> Network Technician",
"> Python Developer"
];

let line = 0;
let char = 0;

function type(){

if(line < text.length){

document.getElementById("typing").innerHTML += text[line].charAt(char);
char++;

if(char < text[line].length){

setTimeout(type, 50);

}else{

document.getElementById("typing").innerHTML += "<br>";
line++;
char = 0;

setTimeout(type, 500);

}

}

}

type();
