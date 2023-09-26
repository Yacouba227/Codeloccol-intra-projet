let nombre = document.getElementById('display');
let calculater = '';

function appendValue(value){
    calculater += value;
    nombre.value = calculater;
}

function deleteLastCharacter(){
    calculater = '';
    nombre.value = calculater;
}

function clearDisplay(){
    calculater = calculater.slice(0, -1);
    nombre.value = calculater;
}

function calculate() {
    try {
        let result = eval(calculater);
        nombre.value = result;
        calculater = result.toString();
    } catch (error) {
        nombre.value = 'Erreur';
        calculater = ''
    }
}

// Inseret la fonctionnalité du clavier
document.addEventListener("keydown", function(event){
    const key = event.key;
    if (/[0-9]/.test(key)) {
        appendValue(key);
    }else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendValue(key);
    }else if (key === "Backspace") {
        deleteLastCharacter();
    }else if (key === "Delete"){
        clearDisplay();
    }else if (key === "Enter") {
        calculate();
    }
})

// Les fonction qui permet de les echange de thème
const theme1 = document.querySelector('#theme1');
const theme2 = document.querySelector('#theme2');
const theme3 = document.querySelector('#theme3');
/* ****************************************** */
const boutton = document.querySelector('.boutton');
const libele = document.querySelector('.libele');
const calculatrice = document.querySelector('.calculatrice');
const container = document.querySelector('.container');
const displayer = document.querySelector('#display');
const themeText = document.querySelector('#theme-text');
const mpo = document.querySelector('#mpo');
const memeCouleur = document.querySelectorAll('#meme-couleur');
const memeCoul = document.querySelectorAll('#meme-coul');
const uniqueCouleur = document.querySelectorAll('#unique-couleur');
/* ****************************************** */

theme1.addEventListener("click", (e) =>{
    if (e.target.checked) {
        boutton.style.backgroundColor = "#1b233e";
        mpo.style.backgroundColor = "#1b233e";
        calculatrice.style.color = "white";
        libele.style.backgroundColor = "#1b233e";
        displayer.style.backgroundColor = "#1b233e";
        document.body.style.backgroundColor = "#43506f";
        container.style.backgroundColor = "#43506f";
        themeText.style.backgroundColor = "#43506f";
        theme1.style.backgroundColor = '#cf4c41';
        theme2.style.backgroundColor = '#1b233e';
        theme3.style.backgroundColor = '#1b233e';

        for (let i = 0; i < memeCouleur.length; i++) {
            memeCouleur[i].style.color = "#191F36";  
            memeCouleur[i].style.backgroundColor = "#e9e9ea";  
       }
       for (let i = 0; i < memeCoul.length; i++) {
           memeCoul[i].style.backgroundColor = "#3d828c";  
      }
      for (let i = 0; i < uniqueCouleur.length; i++) {
       uniqueCouleur[i].style.backgroundColor = "#ad500a";  
  }
      } else {
        
      }  
});

theme2.addEventListener("click", (e) =>{
        if (e.target.checked) {
            boutton.style.backgroundColor = "#d7d2d4";
            mpo.style.backgroundColor = "#d7d2d4";
            calculatrice.style.color = "black";
            libele.style.backgroundColor = "#f0eff0";
            displayer.style.backgroundColor = "#f0eff0";
            document.body.style.backgroundColor = "#e9e9ea";
            container.style.backgroundColor = "#e9e9ea";
            themeText.style.backgroundColor = "#e9e9ea";
        theme2.style.backgroundColor = '#cf4c41';
        theme1.style.backgroundColor = '#d7d2d4';
        theme3.style.backgroundColor = '#d7d2d4';


            for (let i = 0; i < memeCouleur.length; i++) {
                memeCouleur[i].style.color = "#919196";  
                memeCouleur[i].style.backgroundColor = "#e9e9ea";  
           }
           for (let i = 0; i < memeCoul.length; i++) {
               memeCoul[i].style.backgroundColor = "#3d828c";  
          }
          for (let i = 0; i < uniqueCouleur.length; i++) {
           uniqueCouleur[i].style.backgroundColor = "#ad500a";  
      }
          } else {
            
          }  
  });

  theme3.addEventListener("click", (e) =>{
    if (e.target.checked) {
        boutton.style.backgroundColor = "#21043e";
        mpo.style.backgroundColor = "#21043e";
        calculatrice.style.color = "#e5c753";
        libele.style.backgroundColor = "#21043e";
        displayer.style.backgroundColor = "#21043e";
        document.body.style.backgroundColor = "#18012e";
        container.style.backgroundColor = "#18012e";
        themeText.style.backgroundColor = "#18012e";
        theme3.style.backgroundColor = '#07b9b2';
        theme1.style.backgroundColor = '#21043e';
        theme2.style.backgroundColor = '#21043e';

        
        for (let i = 0; i < memeCouleur.length; i++) {
             memeCouleur[i].style.color = "#e5c753";  
             memeCouleur[i].style.backgroundColor = "#5d0481";  
        }
        for (let i = 0; i < memeCoul.length; i++) {
            memeCoul[i].style.backgroundColor = "#18012e";  
       }
       for (let i = 0; i < uniqueCouleur.length; i++) {
        uniqueCouleur[i].style.backgroundColor = "#07b9b2";  
   }
      } else {
        
      }  
});