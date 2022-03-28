// Niveles
let level1=  document.querySelector("#level1Caja");
let level2 = document.querySelector("#level2Caja");
anime({
  targets: '#level1',
  translateY: 15,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true
});

anime({
  targets: '#level2',
  translateY: 15,
  direction: 'alternate',
  easing: 'easeInOutSine',
  loop: true
});


//1. ASOCIACIÓN DE NOTAS
let contador = 0;
let level = 1;



// Array de prueba de nivel corto

let array1=["C","C","D","C","F","E","C","C","D","C","Gb","F","C","C","Cb","Ab","F","E","D","Cb","Cb","Bb", "Gb","Ab","Gb"];
let array2=["B","C","D","B","A","B","G","B","B","A","G","B","B","A","B","C","D","B","A","B","G","B","B","A","G","B","B","A","D","D","D","E","A","A","A","A","A","G","G","G","G","G"];

let levels = [array1, array2];
let currentArray = levels[level-1];

loadLevel();



//1.1.Notas graves
let notas = document.querySelectorAll(".pianoTecla");
notas.forEach((tecla)=>{
  
  tecla.addEventListener('click', (e) => {
    const audio = new Audio(`../assets/Sounds/${tecla.id}.wav`);
    audio.play();
    
    if(tecla.id == currentArray[contador]){
      contador++;        
      showCaja(true);
      checkEnd();
    } else{
      showCaja(false);    
    };
  
  });
})

function loadLevel(){
  currentArray.forEach(elem => {
    let caja = document.querySelector(".cancion");
    var newDiv = document.createElement("div");
    newDiv.classList.add("nota");
    caja.appendChild(newDiv);
    switch (elem) {
      case "G":
          newDiv.classList.add("g");
          break;
    case "A":
          newDiv.classList.add("a");
          break;
    case "B":
          newDiv.classList.add("b");
          break;
    case "C":
          newDiv.classList.add("c");
          break;
    case "D":
          newDiv.classList.add("d");
          break;
    case "E":
          newDiv.classList.add("e");
          break;
    case "F":
          newDiv.classList.add("f");
          break;
    case "Gb":
            newDiv.classList.add("gb");
            break;
    case "Ab":
            newDiv.classList.add("ab");
            break;
    case "Bb":
            newDiv.classList.add("bb");
            break;
    case "Cb":
            newDiv.classList.add("cb");
            break;
    }
  })

}


//FUNCIÓN PASAR DE NIVEL 
function checkEnd(){
  if(level == 1){
    if(contador == currentArray.length){
      level++;
      currentArray = levels[level-1];
      alert("te has pasado el nivel")
      document.querySelector("#levelUpCaja").style.display= "block";
      changelevelicon();
      loadLevel();

      let mensaje = document.querySelector("#Caja");
      mensaje.style.display = "none"; 
    }
  }

}

// Cambio de cartela de niveles
function changelevelicon (){
  level1.src= 'assets/images/level2.svg'
};


//mostrar mensaje acierto / error

function showCaja(success){
  
  let mensaje = document.querySelector("#Caja");
  let img = document.querySelector("#goodImg");

  if(success){
    mensaje.style.display = "block";    
    img.src = "assets/images/good.png";
  }else{
    mensaje.style.display = "block";    
    img.src = "assets/images/tryagain.png";
  }

}

//Refresh
const reloadtButton = document.querySelector("#reload");
// Reload everything:
function reload() {
    reload = location.reload();
}
// Event listeners for reload
reloadButton.addEventListener("click", reload, false);