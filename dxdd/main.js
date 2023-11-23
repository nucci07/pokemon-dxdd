function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
  } 

function aleatorio(){
  var num = rand(1,8);
  const imagem = document.querySelector("img");

  if(num == 1){
      imagem.setAttribute("src","./img/squirtle-shadow.jpg");
  }
  else if(num == 2){
      imagem.setAttribute("src","./img/charmander-shadow.jpg");
  }

  else if(num == 3){
      imagem.setAttribute("src","./img/caterpie-shadow.jpg");
  }
  else if(num == 4){
      imagem.setAttribute("src","img/pikachu-shadow.jpg");
  }

  else if(num == 5){
      imagem.setAttribute("src","img/bulbassaur-shadow.jpg");
  }

  else if(num == 6){
      imagem.setAttribute("src","img/clefairy-shadow.jpg");
  }

  else if(num == 7){
      imagem.setAttribute("src","img/psyduck-shadow.jpg");
  }

  else if(num == 8){
      imagem.setAttribute("src","img/Butterfree-shadow.jpg");
  }

  else{

  }
}

function allowDrop(ev){
  ev.preventDefault();
}
function drag(ev){
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev){
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
