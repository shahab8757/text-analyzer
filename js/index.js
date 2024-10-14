// input textarea
let input1 = document.getElementById("textinput1");
// output textarea
let input2 = document.getElementById("textinput2");
// upper case
let upper = document.getElementById("up-case");
// lower case
let lower = document.getElementById("low-case");
// remove space
let space = document.getElementById("sp-case");
// remove symbols
let punctution = document.getElementById("pu-case");
// copy to clipbord
let copytxt = document.getElementById("cp-case");

// eventlistner for upper case
upper.addEventListener('click', funk1);
// event listner for lowe case
lower.addEventListener('click', funk2);
// remove extra spaces
space.addEventListener('click', funk3);
// remove punctuation
punctution.addEventListener('click',funk4);
// copy text
copytxt.addEventListener('click',funk5);

// eventlistner for upper case
function funk1(){
  if(input1.value!=""){
    let txt=input1.value;
    input2.value = txt.toUpperCase();
    input1.value="";
  }
}

// event listner for lowe case
function funk2(){
  if(input1.value!=""){
    let txt=input1.value;
    input2.value = txt.toLowerCase();
    input1.value="";
  }
}

// remove extra spaces
function funk3(){
  if(input1.value!=""){
    let txt=input1.value;
    input2.value = txt.replace(/\s+/g," ").trim();
    console.log(input2.value);
    input1.value="";
  }
}

// remove punctuation
function funk4(){
  if(input1.value!=""){
    let txt=input1.value;
    input2.value = txt.replace(/[@#$%^&*()_+-=!?<>,.:;]/gm,'');
    input1.value="";
  }
}

// copy text
function funk5(){
 if (input2.value!="") {
  let copyText=document.getElementById("textinput2");

// Select the text field
copyText.select();
copyText.setSelectionRange(0, 99999); // For mobile devices

// Copy the text inside the text field
navigator.clipboard.writeText(copyText.value);

// Alert the copied text
alert("Copied the text: " + copyText.value);
input2.value="";
 }

}