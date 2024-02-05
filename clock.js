const date = document.getElementById('date');
const hrs = document.getElementById("hrs");
const min = document.getElementById("min");
const sec = document.getElementById("sec");

setInterval(()=>{
    let currentTime = new Date();    
    hrs.innerHTML = (currentTime.getHours()<10?"0":"")+currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
},1000);

let currentDate = new Date(); 
date.innerHTML += currentDate.toJSON().slice(0, 10);
