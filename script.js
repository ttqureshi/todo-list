let itemInput = document.querySelector(".txtinput");
let enterbutton = document.querySelector(".enter");
let ul = document.getElementsByTagName("ul")[0];
let css = document.querySelector("h3");
let c1 = document.querySelector(".c1");
let c2 = document.querySelector(".c2");
let body = document.getElementById("gradient");
let button = document.querySelector(".random");
body.style.background = "linear-gradient(to right, " + c1.value + ", " + c2.value + ")";
css.textContent = body.style.background + ";";

let color1;
let color2;


function inputLength() {
    return itemInput.value.length;
}

function createAndAppendListItem() {
    let li = document.createElement("li");
    // li.innerHTML="Testing"; //another way of doing it is below
    // li.appendChild(document.createTextNode(itemInput.value));
    li.innerHTML=itemInput.value + "<button class=del-btn>Delete</button>";
    li.classList.add("done");
    li.classList.toggle("done");
    ul.appendChild(li);
    itemInput.value = "";
    // var del = document.querySelectorAll("button")[index];
    // del.classList.add(i);
    
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createAndAppendListItem();
        console.log(document.getElementsByTagName("li").length);
    }
}

function addListAfterEnterKeypress(event) {
    if (inputLength() > 0 && event.code == "Enter") {
        createAndAppendListItem();
        console.log(document.getElementsByTagName("li").length);
    }
}

function doneAndDel(event) {
    if (event.target.classList.contains("del-btn")) {
        event.target.parentElement.remove();
    }
    else {
        event.target.classList.toggle("done");
    }
}

enterbutton.addEventListener("click", addListAfterClick);
 
itemInput.addEventListener("keypress", addListAfterEnterKeypress);

ul.addEventListener("click", doneAndDel);


// body.style.background = "red"

function setGradient() {
    body.style.background = "linear-gradient(to right," + c1.value + ", " + c2.value + ")";
    css.textContent = body.style.background + ";";
}

function dec2Hex(dec) {
    return Math.abs(dec).toString(16);
}

const hexToDec = hex => parseInt(hex, 16);

function createRandomHexColor() {
    let array = [];

    let r = String(dec2Hex(Math.floor(Math.random() * 256)));
    let g = String(dec2Hex(Math.floor(Math.random() * 256)));
    let b = String(dec2Hex(Math.floor(Math.random() * 256)));

    let r1 = String(dec2Hex(255 - Number(hexToDec(r))));
    let g1 = String(dec2Hex(255 - Number(hexToDec(g))));
    let b1 = String(dec2Hex(255 - Number(hexToDec(b))));

    let h = "#"+r+g+b;
    let h1 = "#"+r1+g1+b1;

    array.push(h);
    array.push(h1);
    return array;
}

function setRandomGradient() {
    let array1 = createRandomHexColor();
    let array2 = createRandomHexColor();

    c1.value = array1[0];
    c2.value = array2[0];

    color1 = array1[1];
    color2 = array2[1];
    
    let r = String(dec2Hex(Math.floor(hexToDec(color1.slice(1,3)) + hexToDec(color2.slice(1,3)) / 2)));
    let g = String(dec2Hex(Math.floor(hexToDec(color1.slice(3,5)) + hexToDec(color2.slice(3,5)) / 2)));
    let b = String(dec2Hex(Math.floor(hexToDec(color1.slice(5)) + hexToDec(color2.slice(5)) / 2)));

    let midColorGrad = "#"+r+g+b;
    console.log(midColorGrad);
    
    ul.style.background = "linear-gradient(to bottom," + color1 + ", " + midColorGrad + ", " + color2 + ")";
    if(c1.value !== c2.value) {
        setGradient();
    }
}

c1.addEventListener("input", setGradient);

c2.addEventListener("input", setGradient);

button.addEventListener("click", setRandomGradient);

