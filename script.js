function entrar(){

document.getElementById("intro").style.display="none";
document.getElementById("site").style.display="block";

document.getElementById("music").play();
}

const inicio = new Date("2025-12-02T00:00:00");

function atualizar(){

const agora = new Date();

let diff = agora - inicio;

let dias =
Math.floor(diff/(1000*60*60*24));

let horas =
Math.floor((diff%(1000*60*60*24))/(1000*60*60));

let minutos =
Math.floor((diff%(1000*60*60))/(1000*60));

let segundos =
Math.floor((diff%(1000*60))/1000);

document.getElementById("tempo").innerHTML=
`${dias} dias • ${horas}h • ${minutos}m • ${segundos}s`;
}

setInterval(atualizar,1000);
atualizar();

function criarCoracao(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=Math.random()*20+15+"px";

document.body.appendChild(heart);

let pos=100;

const subir=setInterval(()=>{

pos--;

heart.style.top=pos+"vh";

if(pos<0){

heart.remove();
clearInterval(subir);

}

},50);
}

setInterval(criarCoracao,700);
