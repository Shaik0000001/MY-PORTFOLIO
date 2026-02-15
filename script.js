function toggleMode(){

document.body.classList.toggle("light");

let icon=document.getElementById("modeIcon");

if(document.body.classList.contains("light")){
icon.textContent="☀️";
localStorage.setItem("mode","light");
}else{
icon.textContent="🌙";
localStorage.setItem("mode","dark");
}
}

window.onload=function(){

if(localStorage.getItem("mode")==="light"){
document.body.classList.add("light");
document.getElementById("modeIcon").textContent="☀️";
}

particlesJS("particles-js",{
particles:{
number:{value:70},
size:{value:3},
move:{speed:1},
line_linked:{enable:true}
}
});
};

window.addEventListener("scroll",()=>{

document.querySelectorAll(".card").forEach(card=>{
if(card.getBoundingClientRect().top < window.innerHeight-100){
card.classList.add("show");
}
});

document.querySelectorAll(".progress").forEach(bar=>{
if(bar.getBoundingClientRect().top < window.innerHeight-50){
bar.style.width=bar.dataset.width;
}
});

});
