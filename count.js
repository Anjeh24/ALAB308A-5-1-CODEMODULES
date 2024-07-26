import  {countFromOneToten}  from "./modules/module.js";
console.log(countFromOneToten);

 let paraTag = document.getElementById('mainp');
 let btnTag = document.getElementById("btn");
btnTag.addEventListener('click', function counts(){
      countFromOneToten();
      paraTag.innerHTML = countFromOneToten();
      
 });
// let valuetoIndert = x;
// paraTag.innerHTML = x;