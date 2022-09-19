var botao1;
var botao2;
var obj;
var img;
var number;
var h1;
 var tentativas=0;


function  negaçao(){
  botao1=document.getElementById("nao");
  botao1.style.top=Math.random()*550+"px";
  botao1.style.right=Math.random()*300+"px";
   obj=document.getElementById("tentativas");
   tentativas+=1
   
}

function aceitar() {
 
  botao1=document.getElementById("nao");
  botao2=document.getElementById("sim");
  img=document.getElementById("imagem");
  botao1.style.display="none";
  botao2.style.display="none";
  h1=document.getElementById("titulo").innerHTML="É MEME HAHAHAHA &#x1F601;";
  obj=document.getElementById("tentativas");
  img.style.display="block"
  if (tentativas>0 && tentativas<=5){
    obj.innerHTML+="Tentativas: &#x1F60E;&#x1F525; "+tentativas
    obj.style.display="block"
  }else if(tentativas>5 && tentativas<=10){
    obj.innerHTML+="Tentativas: &#x1F614;&#x1F614;"+tentativas
    obj.style.display="block"

  }else if(tentativas>10){
    obj.innerHTML+="Tentativas: &#x1F622;&#x1F622;"+tentativas
    obj.style.display="block"

}
}



