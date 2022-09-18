var botao1;
var botao2;
var img;
var number;
var h1;

function  negaçao(){
  botao1=document.getElementById("nao");
  botao1.style.top=Math.random()*550+"px";
  botao1.style.right=Math.random()*300+"px";
}

function aceitar() {
  botao1=document.getElementById("nao");
  botao2=document.getElementById("sim");
  img=document.getElementById("imagem");
  botao1.style.display="none";
  botao2.style.display="none";
  h1=document.getElementById("titulo").innerText="È MEME HAHAHAHA";
  img.style.display="block"

}




