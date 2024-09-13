

let btn = document.querySelector("button");
let inb = document.querySelector("[type=number]");
let rusilt = document.querySelector(".rusilt");
let validage = document.querySelector(".validage");
let btnvalid = document.querySelector(".btnvalid");


btn.onclick=function(){
  rusilt.innerHTML = `Your Age in months is : ${inb.value * 12} <br><br> Your Age in weaks is : ${inb.value *48}
  <br><br> Your Age in dayes is : ${inb.value *365}`;
  if (isNaN(inb.value) || inb.value <= 0) {
    validage.style.display = 'block';
    rusilt.innerHTML = `Your Age in months is : <br><br> 
    Your Age in weeks is : <br><br> 
    Your Age in days is : `;
    return;
  }
}

btnvalid.onclick = function(){
  validage.style.display = 'none';
}