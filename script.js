function entrar(){

    const intro = document.getElementById("intro");
    const site = document.getElementById("site");
    const music = document.getElementById("music");

    intro.classList.add("sumir");

    setTimeout(() => {
        intro.style.display="none";
        site.style.display="block";
    },800);

    music.volume = 0.4;
    music.play();
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
function toggleMusic(){

    const music = document.getElementById("music");
    const btn = document.getElementById("musicBtn");

    if(music.paused){

        music.play();
        btn.innerHTML = "⏸️ Pausar Música";

    }else{

        music.pause();
        btn.innerHTML = "▶️ Tocar Música";

    }
}
function abrirModal(src){

    document.getElementById("modal").style.display="flex";

    document.getElementById("imgModal").src=src;
}

function fecharModal(){

    document.getElementById("modal").style.display="none";
}
const motivos = [



"Eu amo o seu sorriso, porque ele consegue melhorar qualquer dia ruim. ❤️",



"Eu amo o seu jeito carinhoso de demonstrar que se importa comigo.",



"Eu amo que, mesmo quando brigamos, sempre encontramos um jeito de nos resolver e continuar juntos.",



"Eu amo quando você faz gracinha só para me provocar e me fazer rir. 😆",



"Eu amo o fato de você amar tanto os seus gatos. Isso mostra o tamanho do seu coração. 🐱❤️",



"Eu amo o Thomas Henrique, a Yumi, o Yuri e o Pretinho, porque eles fazem parte da pessoa incrível que você é.",



"Eu amo imaginar o dia em que vou finalmente viajar para a sua cidade e te abraçar pela primeira vez.",



"Eu amo que, mesmo estando longe, você consegue estar presente em todos os meus dias.",



"Eu amo conversar com você, porque até os momentos mais simples se tornam especiais.",



"Eu amo quando você me faz ficar confuso sem saber se está falando sério ou brincando. 😂",



"Eu amo os nossos momentos em chamada e as horas que passamos juntos sem perceber o tempo passar.",



"Eu amo o jeito que você me faz sentir amado.",



"Eu amo imaginar tudo o que ainda vamos viver juntos.",



"Eu amo pensar no nosso primeiro encontro e em como ele vai ser especial.",



"Eu amo sonhar com o futuro ao seu lado.",



"Eu amo imaginar a nossa casa cheia de amor, risadas e gatos correndo pela sala. 🐱❤️",



"Eu amo sonhar com a família que poderemos construir juntos no futuro. ❤️",



"Eu amo o seu jeito único, porque não existe ninguém no mundo igual a você.",



"Eu amo a sua companhia, mesmo quando estamos apenas em silêncio.",



"Eu amo saber que, depois de apenas seis meses, encontrei a pessoa que quero amar pelo resto da minha vida.",



"Eu amo que você se tornou parte dos meus planos, dos meus sonhos e dos meus pensamentos.",



"Eu amo você por ser exatamente quem você é.",



"Eu amo a forma como uma simples mensagem sua consegue melhorar o meu dia inteiro.",



"Eu amo olhar para o nosso futuro e sentir que ainda estamos apenas começando nossa história. ❤️",



"Eu amo você hoje, amanhã e em todos os dias que ainda vamos viver juntos. ❤️"



];



function mostrarMotivo(){



    const motivo = document.getElementById("motivo");



    const aleatorio = Math.floor(Math.random() * motivos.length);



    motivo.style.display = "block";



    motivo.innerHTML = motivos[aleatorio];

}
function criarBrilho(){

    const brilho = document.createElement("div");

    brilho.classList.add("sparkle");

    brilho.innerHTML = "✨";

    brilho.style.left = Math.random() * 100 + "vw";

    brilho.style.fontSize =
    (Math.random() * 12 + 10) + "px";

    brilho.style.animationDuration =
    (Math.random() * 8 + 8) + "s";

    document.querySelector(".sparkles").appendChild(brilho);

    setTimeout(() => {
        brilho.remove();
    },16000);
}

setInterval(criarBrilho,1000);
